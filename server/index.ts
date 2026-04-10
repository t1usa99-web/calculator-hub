import express from "express";
import compression from "compression";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
const METALS_API_KEY = process.env.METALS_API_KEY || "";

// ---------------------------------------------------------------------------
// Metals price cache (in-memory, 1-hour TTL)
// ---------------------------------------------------------------------------
interface MetalsPriceCache {
  data: Record<string, number> | null;
  fetchedAt: number;
}

const metalsCache: MetalsPriceCache = { data: null, fetchedAt: 0 };
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Fallback prices (USD) — used when no API key is configured or API is down.
// Precious metals: per troy ounce.  Base metals: per metric ton.
const FALLBACK_PRICES: Record<string, number> = {
  gold: 3100,
  silver: 34,
  platinum: 1020,
  palladium: 980,
  rhodium: 5200,
  copper: 9500,
  nickel: 16000,
  aluminum: 2400,
  zinc: 2800,
  lead: 2100,
  tin: 28000,
};

async function fetchMetalsPrices(): Promise<Record<string, number>> {
  const now = Date.now();
  if (metalsCache.data && now - metalsCache.fetchedAt < CACHE_TTL_MS) {
    return metalsCache.data;
  }

  if (!METALS_API_KEY) {
    console.log("[metals] No METALS_API_KEY set — using fallback prices");
    return FALLBACK_PRICES;
  }

  try {
    const url = `https://api.metals.dev/v1/latest?api_key=${METALS_API_KEY}&currency=USD&unit=toz`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`metals.dev responded ${resp.status}`);
    const json = (await resp.json()) as { metals: Record<string, number> };

    // metals.dev returns prices per troy ounce for precious metals.
    // For base metals it also returns per troy ounce, so we need to convert
    // base metals to per-metric-ton for consistency with our MetalDefinition.
    const GRAMS_PER_TROY_OZ = 31.1035;
    const GRAMS_PER_METRIC_TON = 1_000_000;
    const TOZ_PER_METRIC_TON = GRAMS_PER_METRIC_TON / GRAMS_PER_TROY_OZ;

    const baseMetal = new Set([
      "copper",
      "nickel",
      "aluminum",
      "zinc",
      "lead",
      "tin",
    ]);

    const prices: Record<string, number> = {};
    for (const [key, val] of Object.entries(json.metals)) {
      if (baseMetal.has(key)) {
        // API gives $/toz for base metals — convert to $/metric-ton
        prices[key] = val * TOZ_PER_METRIC_TON;
      } else {
        prices[key] = val; // already $/toz for precious metals
      }
    }

    metalsCache.data = prices;
    metalsCache.fetchedAt = now;
    console.log("[metals] Fetched fresh prices from metals.dev");
    return prices;
  } catch (err) {
    console.error("[metals] API fetch failed, using fallback:", err);
    return metalsCache.data || FALLBACK_PRICES;
  }
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
  // Metals (11)
  "gold-value-calculator",
  "silver-value-calculator",
  "copper-value-calculator",
  "platinum-value-calculator",
  "palladium-value-calculator",
  "rhodium-value-calculator",
  "nickel-value-calculator",
  "aluminum-value-calculator",
  "zinc-value-calculator",
  "lead-value-calculator",
  "tin-value-calculator",
];

const CATEGORY_SLUGS = ["finance", "math", "health", "other", "physics", "metals"];
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
    const prices = await fetchMetalsPrices();
    res.json({
      prices,
      source: METALS_API_KEY ? "metals.dev" : "fallback",
      cachedAt: new Date(metalsCache.fetchedAt || Date.now()).toISOString(),
    });
  } catch (err) {
    console.error("[metals] Endpoint error:", err);
    res.json({ prices: FALLBACK_PRICES, source: "fallback", cachedAt: null });
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
