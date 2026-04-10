import express from "express";
import compression from "compression";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
const METALS_API_KEY = process.env.METALS_API_KEY || "";

// ---------------------------------------------------------------------------
// Metals price cache
//
// Two sources:
//   1. Yahoo Finance (free, unlimited) → gold, silver, copper, platinum,
//      palladium, aluminum — cached 1 hour
//   2. Metals.dev (free 100 calls/mo) → nickel, zinc, lead — cached 12 hours
//      to stay well within the free tier
// ---------------------------------------------------------------------------

interface MetalsPriceCache {
  data: Record<string, number> | null;
  fetchedAt: number;
}

const yahooCache: MetalsPriceCache = { data: null, fetchedAt: 0 };
const metalsDevCache: MetalsPriceCache = { data: null, fetchedAt: 0 };
const YAHOO_TTL_MS = 60 * 60 * 1000; // 1 hour
const METALSDEV_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours (~60 calls/mo)

// Fallback prices (USD) — used when APIs are unreachable.
// All prices normalised to: precious = USD/troy oz, base = USD/metric ton
const FALLBACK_PRICES: Record<string, number> = {
  gold: 3100,
  silver: 34,
  platinum: 1020,
  palladium: 980,
  copper: 9500,
  nickel: 16000,
  aluminum: 2400,
  zinc: 2800,
  lead: 2100,
};

// Yahoo Finance tickers → our metal key + unit info
const YAHOO_METALS: {
  ticker: string;
  key: string;
  /** What Yahoo returns, so we can convert to our standard unit */
  yahooUnit: "troy_oz" | "lb" | "metric_ton";
  /** Our standard unit for this metal */
  stdUnit: "troy_oz" | "metric_ton";
}[] = [
  { ticker: "GC=F", key: "gold", yahooUnit: "troy_oz", stdUnit: "troy_oz" },
  { ticker: "SI=F", key: "silver", yahooUnit: "troy_oz", stdUnit: "troy_oz" },
  { ticker: "HG=F", key: "copper", yahooUnit: "lb", stdUnit: "metric_ton" },
  { ticker: "PL=F", key: "platinum", yahooUnit: "troy_oz", stdUnit: "troy_oz" },
  { ticker: "PA=F", key: "palladium", yahooUnit: "troy_oz", stdUnit: "troy_oz" },
  { ticker: "ALI=F", key: "aluminum", yahooUnit: "metric_ton", stdUnit: "metric_ton" },
];

const LBS_PER_METRIC_TON = 2204.62;

/** Fetch 6 metals from Yahoo Finance (free, no key, no rate limit) */
async function fetchYahooPrices(): Promise<Record<string, number>> {
  const now = Date.now();
  if (yahooCache.data && now - yahooCache.fetchedAt < YAHOO_TTL_MS) {
    return yahooCache.data;
  }

  const prices: Record<string, number> = {};
  try {
    // Fetch all tickers in parallel
    const results = await Promise.allSettled(
      YAHOO_METALS.map(async (m) => {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${m.ticker}?interval=1d&range=1d`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`Yahoo ${m.ticker}: ${resp.status}`);
        const json = (await resp.json()) as any;
        const price =
          json?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;
        return { key: m.key, price, yahooUnit: m.yahooUnit, stdUnit: m.stdUnit };
      })
    );

    for (const r of results) {
      if (r.status === "fulfilled" && r.value.price != null) {
        let p = r.value.price;
        // Convert Yahoo's native unit to our standard unit if needed
        if (r.value.yahooUnit === "lb" && r.value.stdUnit === "metric_ton") {
          p = p * LBS_PER_METRIC_TON; // $/lb → $/metric-ton
        }
        prices[r.value.key] = p;
      }
    }

    if (Object.keys(prices).length > 0) {
      yahooCache.data = prices;
      yahooCache.fetchedAt = now;
      console.log(`[metals] Yahoo: fetched ${Object.keys(prices).length} prices`);
    }
  } catch (err) {
    console.error("[metals] Yahoo fetch error:", err);
  }
  return prices;
}

/** Fetch nickel, zinc, lead from metals.dev (requires API key) */
async function fetchMetalsDevPrices(): Promise<Record<string, number>> {
  const now = Date.now();
  if (metalsDevCache.data && now - metalsDevCache.fetchedAt < METALSDEV_TTL_MS) {
    return metalsDevCache.data;
  }

  if (!METALS_API_KEY) {
    return {}; // no key → skip, fallback will be used
  }

  const GRAMS_PER_TROY_OZ = 31.1035;
  const GRAMS_PER_METRIC_TON = 1_000_000;
  const TOZ_PER_METRIC_TON = GRAMS_PER_METRIC_TON / GRAMS_PER_TROY_OZ;

  try {
    const url = `https://api.metals.dev/v1/latest?api_key=${METALS_API_KEY}&currency=USD&unit=toz`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`metals.dev responded ${resp.status}`);
    const json = (await resp.json()) as { metals: Record<string, number> };

    const wanted = ["nickel", "zinc", "lead"];
    const prices: Record<string, number> = {};
    for (const key of wanted) {
      if (json.metals[key] != null) {
        // metals.dev returns $/toz for base metals — convert to $/metric-ton
        prices[key] = json.metals[key] * TOZ_PER_METRIC_TON;
      }
    }

    if (Object.keys(prices).length > 0) {
      metalsDevCache.data = prices;
      metalsDevCache.fetchedAt = now;
      console.log(`[metals] metals.dev: fetched ${Object.keys(prices).length} prices`);
    }
    return prices;
  } catch (err) {
    console.error("[metals] metals.dev fetch error:", err);
    return metalsDevCache.data || {};
  }
}

/** Combined: Yahoo (6 metals) + metals.dev (3 metals) + fallback */
async function fetchAllMetalsPrices(): Promise<{
  prices: Record<string, number>;
  sources: string[];
}> {
  const [yahooPrices, metalsDevPrices] = await Promise.all([
    fetchYahooPrices(),
    fetchMetalsDevPrices(),
  ]);

  const sources: string[] = [];
  if (Object.keys(yahooPrices).length > 0) sources.push("yahoo");
  if (Object.keys(metalsDevPrices).length > 0) sources.push("metals.dev");

  // Merge: Yahoo first, then metals.dev, then fallback for anything missing
  const prices: Record<string, number> = { ...FALLBACK_PRICES };
  Object.assign(prices, metalsDevPrices);
  Object.assign(prices, yahooPrices); // Yahoo wins if overlap

  if (sources.length === 0) sources.push("fallback");

  return { prices, sources };
}

// ---------------------------------------------------------------------------
// Exchange rate cache (Yahoo Finance forex)
//
// Yahoo Finance provides free forex data via the same chart endpoint.
// Ticker format: EURUSD=X  (always relative to USD)
// We store everything as "1 USD = X units" so USD is always 1.0.
// Cached for 1 hour — forex rates don't move that fast for a calculator.
// ---------------------------------------------------------------------------

interface ExchangeRateCache {
  rates: Record<string, number> | null;
  fetchedAt: number;
}

const fxCache: ExchangeRateCache = { rates: null, fetchedAt: 0 };
const FX_TTL_MS = 60 * 60 * 1000; // 1 hour

// Currencies we support — ticker is how Yahoo quotes them vs USD
// For "XXXUSD=X" tickers Yahoo returns how many USD per 1 XXX,
// so we invert to get "how many XXX per 1 USD".
// For "USDXXX=X" tickers Yahoo returns how many XXX per 1 USD (no invert).
const FX_PAIRS: { ticker: string; code: string; invert: boolean }[] = [
  // Major
  { ticker: "EURUSD=X", code: "EUR", invert: true },
  { ticker: "GBPUSD=X", code: "GBP", invert: true },
  { ticker: "USDJPY=X", code: "JPY", invert: false },
  { ticker: "USDCAD=X", code: "CAD", invert: false },
  { ticker: "AUDUSD=X", code: "AUD", invert: true },
  { ticker: "USDCHF=X", code: "CHF", invert: false },
  { ticker: "NZDUSD=X", code: "NZD", invert: true },
  // Asia-Pacific
  { ticker: "USDCNY=X", code: "CNY", invert: false },
  { ticker: "USDHKD=X", code: "HKD", invert: false },
  { ticker: "USDSGD=X", code: "SGD", invert: false },
  { ticker: "USDINR=X", code: "INR", invert: false },
  { ticker: "USDKRW=X", code: "KRW", invert: false },
  { ticker: "USDTWD=X", code: "TWD", invert: false },
  { ticker: "USDTHB=X", code: "THB", invert: false },
  { ticker: "USDPHP=X", code: "PHP", invert: false },
  // Europe & Middle East
  { ticker: "USDSEK=X", code: "SEK", invert: false },
  { ticker: "USDNOK=X", code: "NOK", invert: false },
  { ticker: "USDDKK=X", code: "DKK", invert: false },
  { ticker: "USDPLN=X", code: "PLN", invert: false },
  { ticker: "USDCZK=X", code: "CZK", invert: false },
  { ticker: "USDTRY=X", code: "TRY", invert: false },
  { ticker: "USDILS=X", code: "ILS", invert: false },
  { ticker: "USDAED=X", code: "AED", invert: false },
  { ticker: "USDSAR=X", code: "SAR", invert: false },
  // Americas
  { ticker: "USDMXN=X", code: "MXN", invert: false },
  { ticker: "USDBRL=X", code: "BRL", invert: false },
  { ticker: "USDARS=X", code: "ARS", invert: false },
  { ticker: "USDCLP=X", code: "CLP", invert: false },
  // Africa & Others
  { ticker: "USDZAR=X", code: "ZAR", invert: false },
  { ticker: "USDNGN=X", code: "NGN", invert: false },
];

const FALLBACK_FX: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.36, AUD: 1.51,
  CHF: 0.88, CNY: 7.24, NZD: 1.58, HKD: 7.82, SGD: 1.34, INR: 83.4,
  KRW: 1320, TWD: 31.5, THB: 35.5, PHP: 56.0, SEK: 10.5, NOK: 10.7,
  DKK: 6.88, PLN: 4.02, CZK: 23.2, TRY: 32.0, ILS: 3.65, AED: 3.67,
  SAR: 3.75, MXN: 17.1, BRL: 4.95, ARS: 850, CLP: 920, ZAR: 18.5, NGN: 1550,
};

/** Fetch ~30 currency rates from Yahoo Finance */
async function fetchExchangeRates(): Promise<Record<string, number>> {
  const now = Date.now();
  if (fxCache.rates && now - fxCache.fetchedAt < FX_TTL_MS) {
    return fxCache.rates;
  }

  const rates: Record<string, number> = { USD: 1 };
  try {
    const results = await Promise.allSettled(
      FX_PAIRS.map(async (pair) => {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${pair.ticker}?interval=1d&range=1d`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`Yahoo FX ${pair.ticker}: ${resp.status}`);
        const json = (await resp.json()) as any;
        const price = json?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;
        return { code: pair.code, price, invert: pair.invert };
      })
    );

    for (const r of results) {
      if (r.status === "fulfilled" && r.value.price != null) {
        // If invert: Yahoo gave us USD-per-1-XXX, we need XXX-per-1-USD
        rates[r.value.code] = r.value.invert
          ? 1 / r.value.price
          : r.value.price;
      }
    }

    if (Object.keys(rates).length > 1) {
      fxCache.rates = rates;
      fxCache.fetchedAt = now;
      console.log(`[fx] Yahoo: fetched ${Object.keys(rates).length} rates`);
    }
  } catch (err) {
    console.error("[fx] Yahoo fetch error:", err);
  }

  return Object.keys(rates).length > 1 ? rates : { ...FALLBACK_FX };
}

// All calculator slugs for SEO
const CALCULATOR_SLUGS = [
  // Finance (38)
  "mortgage-calculator",
  "loan-calculator",
  "compound-interest-calculator",
  "investment-calculator",
  "retirement-calculator",
  "auto-loan",
  "savings-goal",
  "debt-payoff",
  "credit-card",
  "tip",
  "paycheck-calculator",
  "budget-calculator",
  "net-worth-calculator",
  "rent-vs-buy-calculator",
  "student-loan-calculator",
  "salary-calculator",
  "roi-calculator",
  "inflation-calculator",
  "tax-calculator",
  "down-payment-calculator",
  "refinance-calculator",
  "home-affordability-calculator",
  "cost-of-living-calculator",
  "business-loan-calculator",
  "currency-converter-calculator",
  "breakeven-calculator",
  "margin-calculator",
  "annuity-calculator",
  "amortization-calculator",
  "sales-tax-calculator",
  "interest-calculator",
  "simple-interest-calculator",
  "future-value-calculator",
  "present-value-calculator",
  "payment-calculator",
  "interest-rate-calculator",
  "401k-calculator",
  "mortgage-payoff-calculator",
  // Finance — Wave 1
  "cagr-calculator",
  "dividend-calculator",
  "apr-calculator",
  "cd-calculator",
  "debt-to-income-calculator",
  "personal-loan-calculator",
  "commission-calculator",
  // Finance — Wave 2
  "roth-ira-calculator",
  "ira-calculator",
  "rmd-calculator",
  "depreciation-calculator",
  "fha-loan-calculator",
  "va-mortgage-calculator",
  "home-equity-calculator",
  "debt-consolidation-calculator",
  "stock-calculator",
  "payback-period-calculator",
  "take-home-pay-calculator",
  "irr-calculator",
  "net-income-calculator",
  // Finance — Wave 3
  "fire-calculator",
  "npv-calculator",
  "wacc-calculator",
  // Health (11)
  "bmi-calculator",
  "calorie-calculator",
  "body-fat-calculator",
  "bmr-calculator",
  "tdee-calculator",
  "pregnancy-due-date-calculator",
  "ideal-weight-calculator",
  "macro-calculator",
  "pace-calculator",
  "bac-calculator",
  "pregnancy-conception-calculator",
  // Health — Wave 1
  "calories-burned-calculator",
  "sleep-calculator",
  "water-intake-calculator",
  "weight-loss-calculator",
  "protein-calculator",
  "one-rep-max-calculator",
  "target-heart-rate-calculator",
  // Health — Wave 3
  "pregnancy-weight-gain-calculator",
  "ovulation-calculator",
  "period-calculator",
  "keto-calculator",
  "carb-calculator",
  "fat-intake-calculator",
  // Math (16)
  "percentage-calculator",
  "fraction-calculator",
  "scientific-calculator",
  "gpa-calculator",
  "grade-calculator",
  "square-root-calculator",
  "area-calculator",
  "volume-calculator",
  "standard-deviation-calculator",
  "probability-calculator",
  "mean-median-mode-calculator",
  "triangle-calculator",
  "mixed-numbers-calculator",
  "simplify-fractions-calculator",
  "rounding-calculator",
  "numbers-to-words-calculator",
  // Math — Wave 1
  "quadratic-formula-calculator",
  "pythagorean-theorem-calculator",
  "slope-calculator",
  "log-calculator",
  "exponent-calculator",
  "average-calculator",
  "binary-calculator",
  "hex-calculator",
  "circle-calculator",
  "surface-area-calculator",
  "ratio-calculator",
  "distance-calculator",
  // Math — Wave 3
  "matrix-calculator",
  "permutation-combination-calculator",
  "z-score-calculator",
  "confidence-interval-calculator",
  // Other (12)
  "age-calculator",
  "date-calculator",
  "time-calculator",
  "discount-calculator",
  "fuel-cost-calculator",
  "unit-converter",
  "random-number-generator",
  "password-generator",
  "electricity-cost-calculator",
  "concrete-calculator",
  "hours-calculator",
  "subnet-calculator",
  // Other — Wave 3
  "speed-calculator",
  "wind-chill-calculator",
  "heat-index-calculator",
  "dew-point-calculator",
  "mileage-calculator",
  "gas-mileage-calculator",
  "time-card-calculator",
  "time-zone-calculator",
  "shoe-size-calculator",
  "screen-size-calculator",
  "tip-calculator-advanced",
  "inflation-adjuster-calculator",
  // Standalone conversion pages
  "inches-to-cm",
  "cm-to-inches",
  "feet-to-meters",
  "meters-to-feet",
  "miles-to-km",
  "km-to-miles",
  "kg-to-lbs",
  "lbs-to-kg",
  "oz-to-grams",
  "fahrenheit-to-celsius",
  "celsius-to-fahrenheit",
  "gallons-to-liters",
  "liters-to-gallons",
  "cups-to-ml",
  "sqft-to-sqm",
  "sqm-to-sqft",
  "acres-to-hectares",
  "mm-to-inches",
  // Physics (30)
  "projectile-motion-calculator",
  "free-fall-calculator",
  "kinetic-energy-calculator",
  "potential-energy-calculator",
  "momentum-calculator",
  "force-calculator",
  "pressure-calculator",
  "torque-calculator",
  "centripetal-force-calculator",
  "gravitational-force-calculator",
  "wavelength-calculator",
  "frequency-calculator",
  "wave-speed-calculator",
  "doppler-effect-calculator",
  "sound-intensity-calculator",
  "ohms-law-calculator",
  "electric-power-calculator",
  "resistor-calculator",
  "capacitor-calculator",
  "coulombs-law-calculator",
  "electric-field-calculator",
  "heat-capacity-calculator",
  "temperature-converter-calculator",
  "ideal-gas-law-calculator",
  "thermal-expansion-calculator",
  "photon-energy-calculator",
  "relativistic-kinetic-energy-calculator",
  "half-life-calculator",
  "escape-velocity-calculator",
  "density-calculator",
  // Metals (9)
  "gold-value-calculator",
  "silver-value-calculator",
  "copper-value-calculator",
  "platinum-value-calculator",
  "palladium-value-calculator",
  "nickel-value-calculator",
  "aluminum-value-calculator",
  "zinc-value-calculator",
  "lead-value-calculator",
  // Construction (12)
  "square-footage-calculator",
  "roofing-calculator",
  "tile-calculator",
  "paint-calculator",
  "fence-calculator",
  "deck-calculator",
  "drywall-calculator",
  "insulation-calculator",
  "gravel-calculator",
  "mulch-calculator",
  "stairs-calculator",
  "btu-calculator",
];

const CATEGORY_SLUGS = ["finance", "math", "health", "other", "physics", "metals", "construction"];
const DOMAIN = "https://calculator-hub-production.up.railway.app";

// Middleware
app.use(compression());

// Serve static files from dist/public
const staticPath = path.resolve("dist/public");
app.use(express.static(staticPath));

// GET /robots.txt
app.get("/robots.txt", (req, res) => {
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${DOMAIN}/sitemap.xml
`;
  res.type("text/plain").send(robotsTxt);
});

// GET /sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  const now = new Date().toISOString().split("T")[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Homepage - highest priority, daily changefreq
  xml += "  <url>\n";
  xml += `    <loc>${DOMAIN}</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += '    <changefreq>daily</changefreq>\n';
  xml += '    <priority>1.0</priority>\n';
  xml += "  </url>\n";

  // Category pages - 0.7 priority, weekly changefreq
  CATEGORY_SLUGS.forEach((slug) => {
    xml += "  <url>\n";
    xml += `    <loc>${DOMAIN}/category/${slug}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += "  </url>\n";
  });

  // Calculator pages - 0.8 priority, weekly changefreq
  CALCULATOR_SLUGS.forEach((slug) => {
    xml += "  <url>\n";
    xml += `    <loc>${DOMAIN}/${slug}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  res.type("application/xml").send(xml);
});

// GET /api/metals-prices — returns live (or fallback) spot prices
app.get("/api/metals-prices", async (req, res) => {
  try {
    const { prices, sources } = await fetchAllMetalsPrices();
    res.json({
      prices,
      sources,
      cachedAt: new Date(
        Math.max(yahooCache.fetchedAt, metalsDevCache.fetchedAt) || Date.now()
      ).toISOString(),
    });
  } catch (err) {
    console.error("[metals] Endpoint error:", err);
    res.json({ prices: FALLBACK_PRICES, sources: ["fallback"], cachedAt: null });
  }
});

// GET /api/exchange-rates — returns live forex rates (USD base)
app.get("/api/exchange-rates", async (req, res) => {
  try {
    const rates = await fetchExchangeRates();
    const isLive = fxCache.rates !== null;
    res.json({
      base: "USD",
      rates,
      source: isLive ? "yahoo" : "fallback",
      cachedAt: fxCache.fetchedAt
        ? new Date(fxCache.fetchedAt).toISOString()
        : null,
    });
  } catch (err) {
    console.error("[fx] Endpoint error:", err);
    res.json({
      base: "USD",
      rates: FALLBACK_FX,
      source: "fallback",
      cachedAt: null,
    });
  }
});

// SPA fallback - serve index.html for all non-API routes
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
