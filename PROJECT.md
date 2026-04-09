# CalcHub — Project Memory

Quick-reference context for future Claude sessions working on this project. Read this first.

## What This Is

CalcHub is a free online calculator website (calculator.net competitor) focused on winning organic search traffic. Launched April 2026 with 58 calculators across 4 categories: Finance (28), Health (10), Math (10), Everyday (10).

**Live site:** https://calculator-hub-production.up.railway.app
**GitHub repo:** https://github.com/t1usa99-web/calculator-hub
**Primary traffic strategy:** SEO. This is THE priority for all decisions.

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite 8 + Tailwind CSS 4
- **Routing:** Wouter (lightweight client-side router)
- **Data fetching:** TanStack React Query
- **Charts:** Recharts
- **Icons:** Lucide React
- **Backend:** Express 5 (serves static build + sitemap.xml + robots.txt)
- **Server bundling:** esbuild → `dist/index.cjs` (CJS format)
- **Hosting:** Railway (auto-deploys from GitHub main branch)

## Project Structure

```
calculator-hub/
├── client/
│   ├── index.html                  # Global meta tags, WebSite + Organization JSON-LD
│   └── src/
│       ├── App.tsx                 # Routes + side-effect imports of all calculator categories
│       ├── main.tsx                # React entry
│       ├── calculators/            # One folder per category
│       │   ├── finance/            # 28 calculators + index.ts
│       │   ├── health/             # 10 calculators + index.ts
│       │   ├── math/               # 10 calculators + index.ts
│       │   └── other/              # 10 calculators + index.ts
│       ├── components/
│       │   ├── CalculatorLayout.tsx  # Shared wrapper (inputs/results/embed/educational)
│       │   ├── SEOHead.tsx           # Dynamic meta + JSON-LD injection per page
│       │   ├── InputField.tsx, SelectField.tsx, ResultCard.tsx
│       │   ├── Header.tsx, Footer.tsx
│       ├── pages/
│       │   ├── HomePage.tsx, CategoryPage.tsx, CalculatorPage.tsx
│       │   ├── SearchPage.tsx, EmbedPage.tsx
│       └── lib/
│           ├── calculator-registry.ts  # registerCalculator / getCalculator / CATEGORIES
│           └── seo-data.ts             # Central SEO metadata for all 58 calculators
├── server/
│   └── index.ts                    # Express 5 app with sitemap/robots routes
├── script/
│   └── build.ts                    # esbuild server bundling
├── package.json                    # scripts: dev, build, start
└── vite.config.ts                  # root: "client", outDir: "../dist/public"
```

## Key Patterns

### Calculator Registry Pattern
Every calculator self-registers on import. Each category has an `index.ts` that imports all calculators in that folder. `App.tsx` side-effect imports each category folder's index.ts. To add a new calculator:
1. Create `<Name>Calculator.tsx` in appropriate category folder
2. Call `registerCalculator({ slug, title, shortTitle, description, category, icon, keywords, popular, component })` at the bottom
3. Add the import to the category's `index.ts`
4. Add slug to `server/index.ts` CALCULATOR_SLUGS array (for sitemap)
5. Add entry to `client/src/lib/seo-data.ts` ALL_CALCULATORS array

### SEO Conventions (CRITICAL — this is the traffic strategy)

**Heading hierarchy:**
- One `<h1>` per page (the main page title)
- `<h2>` for major page sections
- `<h3>` for cards/subsections inside h2s
- CalculatorLayout uses `<h2>` internally (NOT h1) because CalculatorPage already provides the h1

**Breadcrumbs:**
- Semantic `<nav aria-label="Breadcrumb">` with `<ol>/<li>` markup
- Schema.org BreadcrumbList microdata (itemScope/itemType/itemProp + position meta tags)
- Present on CalculatorPage, CategoryPage, SearchPage

**JSON-LD Structured Data:**
- Global (index.html): WebSite schema (with SearchAction) + Organization schema
- Calculator pages (SEOHead): SoftwareApplication schema + BreadcrumbList schema (dynamic)
- Category pages (SEOHead): CollectionPage schema + BreadcrumbList schema
- All SEOHead JSON-LD scripts tagged with `data-seo-jsonld="true"` and cleaned up on unmount

**Meta tags (dynamic per page via SEOHead):**
- Title, description, OG (title/description/url/type), Twitter card (title/description), canonical URL

**Static SEO files (Express routes):**
- `/sitemap.xml` — all 58 calculators + 4 category pages + homepage with priorities
- `/robots.txt` — allows all, points to sitemap

### Embed System
Every calculator is embeddable via iframe: `<iframe src="{site}/embed/{slug}" />`. The `/embed/:slug` route renders a minimal wrapper (no header/footer). Embed code includes a "Powered by CalcHub" link-back for SEO backlinks.

## Gotchas & Fixes

1. **Railway PORT:** Railway assigns `PORT=8080`, not 5000. If deploying fresh, the generated domain may default to port 5000 and return 502. Fix in Railway settings → Networking → edit target port to 8080.

2. **Express 5 SPA fallback syntax:** Must use `app.get("/{*path}", ...)` — the old Express 4 `"*"` syntax throws path-to-regexp errors.

3. **package-lock.json drift:** When adding new dev deps (tsx, esbuild), ALWAYS run `rm -rf node_modules && npm install` locally and commit the updated lockfile. Railway uses `npm ci` which fails on any mismatch.

4. **Vite build config:** `root: "client"` and `outDir: "../dist/public"` — the client entry is `client/index.html`, and Vite builds into `dist/public/` which Express serves as static.

5. **Git pushes from sandbox:** Use a personal access token: `git remote set-url origin https://<TOKEN>@github.com/t1usa99-web/calculator-hub.git`. Remove token from URL immediately after push for safety. Railway auto-deploys on push to main.

6. **CalculatorLayout.tsx heading rule:** Its internal title is `<h2>` not `<h1>` to avoid duplicate H1s when used inside CalculatorPage (which provides the H1).

## Commands

```bash
npm run dev     # Vite dev server
npm run build   # Vite client build + esbuild server bundle
npm start       # Run production server from dist/
```

## Roadmap / Known TODOs

- Expand calculator count toward 200+ (calculator.net has 300+)
- Add educational content sections to every calculator (FAQPage schema candidate)
- Consider code-splitting — main bundle is currently ~977 KB
- Add Google Analytics + Search Console integration once connectors available
- Consider moving from Railway to Vercel if deployment friction continues
- Add a logo.png for the Organization schema image field
