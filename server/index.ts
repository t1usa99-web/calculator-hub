import express from "express";
import compression from "compression";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(compression());

// Serve static files from dist/public
const staticPath = path.resolve("dist/public");
app.use(express.static(staticPath));

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
