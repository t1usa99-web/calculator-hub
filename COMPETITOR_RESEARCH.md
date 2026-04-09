# CalcHub Competitor Research

Manual SEO + content analysis of the three main competitors in the online calculator space, conducted April 9, 2026. All data gathered via direct page inspection — no paid tools used.

## TL;DR — Top Actionable Findings

1. **Add FAQPage JSON-LD schema to every calculator page.** Omnicalculator uses this and it's the single biggest rich-snippet opportunity we're missing. Google pulls FAQ content directly into SERPs.
2. **Add author/expert credentials to YMYL pages** (health, finance, tax, pregnancy). Omnicalculator lists Medical Doctors by name with bios on BMI, pregnancy, and health pages. Google's E-E-A-T heavily rewards this for "Your Money Your Life" topics.
3. **Triple our educational content depth.** Calculator.net writes ~2,000–2,800 words per calculator. CalcHub currently has minimal educational content. This is the biggest content gap.
4. **Expand heading hierarchy with topic-cluster H2s.** Calculator.net uses 11–14 H2s per page covering definitions, history, strategies, risks, limitations, formulas. We currently have 1–2 H2s inside CalculatorLayout.
5. **Build out 3 high-priority missing finance calculators**: Amortization, Sales Tax, Interest (general). All have high search volume and we already have the math infrastructure.
6. **Consider a Physics category long-term** — Omnicalculator has 537 physics calculators driving massive long-tail traffic, and calculator.net has none. Blue ocean.

---

## 1. Market Landscape

| Competitor | Total Calculators | Categories | Strategy |
|------------|-------------------|------------|----------|
| **Omnicalculator.com** | ~3,841 | 14 (Finance, Math, Physics, Health, Conversion, Everyday, Statistics, Construction, Sports, Biology, Chemistry, Food, Ecology, Other) | Long-tail domination, massive breadth, credentialed authors |
| **Calculator.net** | ~200 | 4 (Financial, Fitness & Health, Math, Other) | Deep content per page, simple UX, brand recognition |
| **Calculatorsoup.com** | Several hundred | 3 (Math, Financial, Practical) | Formula-first, education-focused, strong math vertical |
| **CalcHub (us)** | 58 | 4 (Finance, Math, Health, Everyday) | Modern stack, embeddable, SEO-optimized schema |

**Key observation:** Omnicalculator is winning on pure breadth (3,841 calculators is insane) while Calculator.net is winning on depth (their mortgage page is 2,800 words). CalculatorSoup is smaller but owns math niches. **CalcHub currently has neither breadth nor depth** — we need to pick a lane and invest.

**Strategic recommendation:** Start with depth (easier wins, better per-calculator ROI), then expand breadth once we have a content template that works.

---

## 2. SEO Teardown: Mortgage Calculator (Flagship Finance)

### Calculator.net `/mortgage-calculator.html`

- **H1:** "Mortgage Calculator"
- **H2s (14 total):** Mortgage Calculator, Monthly Pay, House Price, Amortization schedule, Mortgages, Mortgage Calculator Components, Costs Associated with Home Ownership and Mortgages, Recurring Costs, Non-Recurring Costs, Early Repayment and Extra Payments, Early Repayment Strategies, Reasons for early repayment, Drawbacks of early repayment, Brief History of Mortgages in the U.S.
- **H3s:** None — flat structure
- **Word count:** ~2,800
- **Educational sections:** Definitions, cost breakdowns, ARM vs FRM comparison, early repayment strategies, U.S. mortgage history (1900s–2008)
- **URL pattern:** `/mortgage-calculator.html` (keyword-in-URL, .html extension)
- **JSON-LD:** None detected
- **Breadcrumbs:** `home / financial / mortgage calculator` (simple)
- **Related calculators:** 11 links (House Affordability, Loan, Auto Loan, Interest, Payment, Retirement, Amortization, Investment, 401K, Interest Rate, Mortgage Payoff)

### Omnicalculator `/finance/mortgage`

- **H1:** "Mortgage Calculator"
- **H2s (7 total):** What is a mortgage?, How to choose a mortgage, How to use the mortgage calculator, Mortgage payment formula, Fixed vs. variable rate mortgage, Balloon payment mortgage, Reverse mortgage
- **Word count:** ~2,000–3,000
- **Educational sections:** Definition, how-to-use, formula explanation, mortgage type comparisons
- **URL pattern:** `/finance/mortgage` (no file extension, category path)
- **JSON-LD:** `Article` schema with `datePublished`, `dateModified`, `headline`, `description`
- **Authors credited:** Mateusz Mucha (founder), Joanna Andrzejewska, Tomasz Jedynak PhD, Tibor Pál (PhD candidate)
- **Reviewers credited:** Bogna Szyk, Jack Bowater
- **Engagement metric visible:** "51 people find this calculator helpful"
- **Table of contents:** Yes — anchor links to sections

### Calculatorsoup `/calculators/financial/mortgage-calculator.php`

- **H1:** "Mortgage Calculator"
- **H2s (4):** Step-by-Step Mortgage Payment Calculation, Monthly Payment Calculation, Related Calculators, For AI Systems
- **Word count:** ~800–1,000 (shallow)
- **Educational sections:** PMT formula derivation, worked example ($175k @ 4.125% 30yr → $848.14/mo)
- **URL pattern:** `/calculators/financial/mortgage-calculator.php` (deep nesting, .php extension — dated)
- **Breadcrumbs:** Calculator Soup > Financial > Loans > Mortgage Calculator (4 levels)
- **Notable:** Has a "For AI Systems" section — appears to be optimizing for LLM scraping

### Takeaways (Mortgage)

| Dimension | Winner | Why |
|-----------|--------|-----|
| Content depth | Calculator.net | 14 H2s, 2,800 words, historical + strategic content |
| Schema / E-E-A-T | Omnicalculator | Article JSON-LD + credentialed authors + review dates |
| URL cleanliness | Omnicalculator | `/finance/mortgage` is the most modern pattern |
| Formula depth | Calculatorsoup | Step-by-step math derivation with worked example |
| Internal linking | Calculator.net | 11 related-calculator links at the bottom |

**CalcHub's current state vs. these:** Our mortgage calculator has a working UI and an educational section, but the educational content is light and we don't have author credentials. We match Omnicalculator on URL pattern (`/mortgage-calculator`), we beat Calculatorsoup on schema (we have SoftwareApplication), but we lose badly on content depth vs. Calculator.net.

---

## 3. SEO Teardown: BMI Calculator (Flagship Health)

### Calculator.net `/bmi-calculator.html`

- **H1:** "BMI Calculator"
- **H2s (11):** BMI introduction, BMI table for adults, BMI chart for adults, BMI table for children and teens age 2-20, BMI chart for children and teens, Risks associated with being overweight, Risks associated with being underweight, Limitations of BMI, BMI formula, BMI Prime, Ponderal Index
- **Word count:** ~2,100–2,300
- **Tables:** WHO adult classification, CDC children percentile, BMI Prime reference
- **Charts:** Visual BMI category chart + CDC growth chart references
- **Related calculators:** Calorie, Body Fat, BMR, Macro, Ideal Weight, Pregnancy (x3), Due Date, Pace

### Omnicalculator `/health/bmi`

- **H1:** "BMI Calculator – Body Mass Index" (note: extended with descriptive keyword)
- **H2s (6):** How do I calculate BMI?, Normal BMI, What are the BMI ranges?, Using our body mass index calculator, Other considerations, FAQs
- **Word count:** ~800–1,000 (shorter than Calculator.net)
- **Authors:** **Aleksandra Zając, MD** — medical doctor (lifestyle medicine specialty). Founder Mateusz Mucha as co-author. Reviewed by **Małgorzata Koperska, MD** and Jack Bowater.
- **JSON-LD schemas:** **Article + FAQPage** (two schemas on one page) — FAQPage is a rich-snippet goldmine
- **Table of contents:** Yes with anchor links

### Takeaways (BMI)

Omnicalculator is shorter on words but makes up for it with **medical credentials + FAQPage schema**. For a YMYL (Your Money Your Life) topic like health, Google will often rank a shorter page with MD author credentials above a longer page without any E-E-A-T signals.

**Major opportunity for CalcHub:** Add FAQPage schema universally, and for health/finance/tax calculators specifically, either (a) cite medical/financial sources inline with author bylines like "Reviewed by [expert]," or (b) link to authoritative sources (WHO, CDC, IRS, NerdWallet) to borrow credibility.

---

## 4. Cross-Cutting SEO Patterns

### URL patterns

| Site | Pattern | Example |
|------|---------|---------|
| Calculator.net | `/{slug}.html` | `/bmi-calculator.html` |
| Omnicalculator | `/{category}/{slug}` | `/health/bmi` |
| Calculatorsoup | `/calculators/{category}/{slug}.php` | `/calculators/financial/mortgage-calculator.php` |
| **CalcHub** | `/{slug}` | `/bmi-calculator` |

**Verdict:** CalcHub's URL pattern is the cleanest of the four. No change needed.

### JSON-LD structured data

| Schema type | Calculator.net | Omnicalculator | Calculatorsoup | CalcHub |
|-------------|:--------------:|:--------------:|:--------------:|:-------:|
| WebSite | unknown | unknown | unknown | ✅ |
| Organization | unknown | unknown | unknown | ✅ |
| SoftwareApplication | ❌ | ❌ | ❌ | ✅ |
| Article | ❌ | ✅ | ❌ | ❌ |
| BreadcrumbList | ❌ | ❌ | ❌ | ✅ |
| FAQPage | ❌ | ✅ | ❌ | ❌ |
| CollectionPage | ❌ | ❌ | ❌ | ✅ |

**CalcHub is actually AHEAD on schema coverage** except for Article and FAQPage. Adding those two puts us at par with the best competitor and ahead of Calculator.net (which has no structured data detected).

### Heading hierarchy patterns

- Calculator.net: 1 H1 + 11–14 flat H2s, no H3s
- Omnicalculator: 1 H1 + 5–8 H2s, uses question-style phrasing ("What is...", "How do I...")
- Calculatorsoup: 1 H1 + 3–5 H2s, shallow
- **CalcHub:** 1 H1 + 2–3 H2s, needs significant expansion

**Winning pattern:** Omnicalculator's question-based H2 phrasing is the best for SEO because Google's "People Also Ask" feature targets question-style headings directly. Examples: "What is a mortgage?", "How do I calculate BMI?", "Why does X matter?". **CalcHub should adopt question-based H2s.**

### Content length by category

| Category | Calculator.net | Omnicalculator | Calculatorsoup |
|----------|:--------------:|:--------------:|:--------------:|
| Finance (Mortgage) | ~2,800 words | ~2,500 words | ~900 words |
| Health (BMI) | ~2,200 words | ~900 words | N/A |

**Omnicalculator wins at 900 words on BMI** because of the MD author credentials — demonstrating that word count alone isn't enough for YMYL topics.

### Internal linking

| Site | Related calculators per page | Strategy |
|------|:---:|----------|
| Calculator.net | ~11 | Hardcoded list, same category |
| Omnicalculator | Category nav + ToC | Softer, via navigation |
| Calculatorsoup | 3–6 | Short curated list |
| **CalcHub** | 0 | **Missing entirely** |

**This is a zero-to-one win.** Adding a "Related Calculators" section at the bottom of every calculator page would significantly boost internal link equity and session depth.

---

## 5. Calculator Gap Analysis

Calculators competitors have that CalcHub is missing, prioritized by SEO value.

### Tier 1 — Build immediately (high search volume, we have the infrastructure)

| Calculator | Competitors with it | Why |
|------------|---------------------|-----|
| **Amortization Calculator** | Calculator.net, Calculatorsoup | High-volume finance term; we already calculate amortization inside the mortgage calculator |
| **Sales Tax Calculator** | Calculator.net | Massive search volume; trivial to build |
| **Interest Calculator** (general) | Calculator.net | Umbrella calculator that ranks for "interest calculator" broad-match |
| **Simple Interest Calculator** | Calculatorsoup | Educational, widely searched, trivial math |
| **Future Value Calculator** | Calculatorsoup | TVM (time value of money) core concept |
| **Present Value Calculator** | Calculatorsoup | Same as above |
| **Mean / Median / Mode Calculator** | Calculatorsoup | Basic statistics, high student traffic |
| **Triangle Calculator** | Calculator.net | High volume, geometry staple |
| **Hours Calculator** | Calculator.net | Time-between-dates/hours, high volume |

### Tier 2 — Build next (good volume, moderate effort)

| Calculator | Competitors with it | Notes |
|------------|---------------------|-------|
| Payment Calculator (general) | Calculator.net | Loan payment umbrella |
| Interest Rate Calculator | Calculator.net | Reverse-solve for rate |
| 401k Calculator | Calculator.net | Retirement sub-niche |
| Mortgage Payoff Calculator | Calculator.net | Extra-payment variant |
| Pregnancy Conception Calculator | Calculator.net | We have due date; this is a sibling |
| Mixed Numbers Calculator | Calculatorsoup | Fraction variant |
| Simplify Fractions Calculator | Calculatorsoup | Fraction variant |
| Rounding Numbers Calculator | Calculatorsoup | Math basic |
| Numbers to Words Converter | Calculatorsoup | Unique/easy |
| Subnet Calculator | Calculator.net | Tech niche, less competition |

### Tier 3 — Long-term category expansion (Omnicalculator blue ocean)

Categories Omnicalculator owns that neither Calculator.net nor we touch meaningfully:

| Category | Omnicalculator count | Opportunity |
|----------|:---:|-------------|
| Physics | 537 | Huge — Calculator.net has zero. Long-tail student traffic. |
| Statistics | 194 | We have 2, they have 194 |
| Construction | 156 | We have 1 (concrete) |
| Sports | 110 | Specialized, lower competition |
| Biology | 107 | Niche academic traffic |
| Chemistry | 107 | Niche academic traffic |
| Food | 70 | Cooking conversions, recipes |
| Ecology | 34 | Carbon footprint, sustainability |

**Recommendation:** Don't try to match Omnicalculator's breadth. Pick ONE underserved category and go deep — **Physics** is the best candidate because it has 537 calculators of opportunity and Calculator.net has zero competition. A focused push to build 30–50 physics calculators with educational depth could carve out a defensible niche.

---

## 6. Content Template Recommendation

Based on the teardowns, here's the ideal calculator page structure CalcHub should adopt:

```
<H1> {Calculator Name} </H1>
<intro paragraph - 2-3 sentences, keyword-rich>

[Calculator UI — inputs + results + chart]

<H2> What is {topic}? </H2>
  (definition, 100-200 words, includes primary keyword 2-3 times)

<H2> How to use the {name} calculator </H2>
  (step-by-step, 150 words, targets "how to" snippet)

<H2> {Topic} formula </H2>
  (math explanation with LaTeX or code block, 150-300 words)

<H2> {Specific concept} example </H2>
  (worked numeric example, 100-200 words)

<H2> Factors that affect {topic} </H2>
  (depth content: risks, considerations, edge cases, 300-500 words)

<H2> {Topic} history / context </H2>  [optional for finance/health]
  (background, 200-400 words)

<H2> Frequently Asked Questions </H2>
  [4-6 Q&A pairs, wrapped in FAQPage JSON-LD]

<H2> Related Calculators </H2>
  [Auto-generated list of 6-10 same-category calculators]
```

**Target word count:** 1,500–2,500 per calculator. Quality over quantity.

**Schema additions needed:**
- `Article` JSON-LD (author, datePublished, dateModified, publisher)
- `FAQPage` JSON-LD (questions + answers from the FAQ section)

---

## 7. Prioritized Action Plan

### Phase 1 — Quick wins (1–2 weeks)

1. **Add FAQPage JSON-LD schema support to SEOHead.tsx** — accept an optional `faqs` prop and inject it. Estimated impact: HIGH (rich snippet eligibility).
2. **Add Article JSON-LD schema** to all calculator pages (author = "CalcHub Editorial", datePublished/dateModified). Estimated impact: MEDIUM.
3. **Add a "Related Calculators" component** that auto-generates 6 same-category links. Include on every calculator page. Estimated impact: HIGH (internal link equity + session depth).
4. **Update CalculatorLayout headings** to use question-style H2s instead of generic ones. Estimated impact: MEDIUM.

### Phase 2 — Content expansion (2–4 weeks)

5. **Write rich educational content for the top 10 highest-value calculators** (Mortgage, BMI, Loan, Compound Interest, Calorie, Percentage, Investment, Retirement, GPA, Tip). Target 1,500+ words each using the template above. Estimated impact: HIGHEST (direct ranking improvement).
6. **Add 4–6 FAQs to each of those 10 calculators**, wrapped in FAQPage schema. Estimated impact: HIGH.
7. **Add author attribution line** to all YMYL calculators (finance, health, tax, pregnancy, BAC). Even "Reviewed by the CalcHub editorial team" with a link to an About page helps. Estimated impact: MEDIUM.

### Phase 3 — Build the gap (1–2 months)

8. **Build Tier 1 missing calculators** (9 calculators): Amortization, Sales Tax, Interest, Simple Interest, Future Value, Present Value, Mean/Median/Mode, Triangle, Hours.
9. **Build Tier 2 missing calculators** (10 calculators).
10. **Each new calculator launches with full content template applied**, not rebuilt later.

### Phase 4 — Category expansion (3–6 months)

11. **Launch Physics category** with 30 high-value physics calculators (projectile motion, kinetic energy, wavelength, Ohm's law, etc.). This is the blue-ocean bet to differentiate from Calculator.net and compete with Omnicalculator in their strongest vertical.
12. **Consider Construction category expansion** (156 opportunity) since we already have Concrete.

---

## 8. What We Do BETTER Than Competitors

Not all the news is bad. CalcHub has real advantages:

- ✅ **Modern stack (React 19, TypeScript, Tailwind 4).** Competitors are all on older stacks with slower load times.
- ✅ **Clean URL pattern** (`/calculator-slug`) is the best of the four.
- ✅ **Richest schema markup coverage.** We have SoftwareApplication, BreadcrumbList, WebSite, Organization, CollectionPage. Only Omnicalculator comes close (Article + FAQPage but missing SoftwareApplication).
- ✅ **Embed system.** None of the competitors offer a free embeddable widget with link-back. This is a unique backlink-acquisition strategy we should aggressively promote.
- ✅ **Responsive mobile UI** out of the box via Tailwind. Calculator.net's mobile experience is dated.
- ✅ **Proper semantic HTML** with ARIA labels on breadcrumbs. Competitors use div-based breadcrumbs.

---

## 9. Sources

- [Calculator.net homepage](https://www.calculator.net/)
- [Calculator.net Mortgage Calculator](https://www.calculator.net/mortgage-calculator.html)
- [Calculator.net BMI Calculator](https://www.calculator.net/bmi-calculator.html)
- [Calculator.net Amortization Calculator](https://www.calculator.net/amortization-calculator.html)
- [Omnicalculator homepage](https://www.omnicalculator.com/)
- [Omnicalculator Mortgage](https://www.omnicalculator.com/finance/mortgage)
- [Omnicalculator BMI](https://www.omnicalculator.com/health/bmi)
- [Calculatorsoup homepage](https://www.calculatorsoup.com/)
- [Calculatorsoup Mortgage](https://www.calculatorsoup.com/calculators/financial/mortgage-calculator.php)

Research conducted via direct page inspection, April 9, 2026. No paid tools used.
