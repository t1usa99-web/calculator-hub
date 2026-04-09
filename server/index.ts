import express from "express";
import compression from "compression";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

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
];

const CATEGORY_SLUGS = ["finance", "math", "health", "other", "physics"];
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
