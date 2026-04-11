// Finance investment/planning calculator FAQs - 16 calculators covering investment, retirement, business, and personal finance
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.

import type { FAQ } from "./calculator-registry";

export const SAVINGS_GOAL_FAQS: FAQ[] = [
  {
    question: "How much should I save monthly to reach my financial goals?",
    answer:
      "The amount depends on your goal amount, timeline, and interest rate. Use the formula: <strong>Monthly Payment = (Goal Amount − Current Savings × (1 + r)ⁿ) / [((1 + r)ⁿ − 1) / r]</strong>, where r is the monthly interest rate and n is the number of months. For example, to save $50,000 in 5 years (60 months) at 4% APY with $10,000 already saved, you'd need roughly $665/month. A good baseline is the 50/30/20 rule: allocate 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.",
  },
  {
    question: "How does compound interest affect my savings over time?",
    answer:
      "Compound interest means you earn interest on your interest, creating exponential growth. The formula is: <strong>A = P(1 + r/n)^(nt)</strong>, where A is the final amount, P is principal, r is annual rate, n is compounds per year, and t is years. Saving $500/month at 4.5% APY for 10 years yields roughly $68,000 with $8,000 from interest alone. Starting even 5 years earlier at age 25 instead of 30 nearly doubles the final amount due to compound growth, demonstrating why early saving is crucial.",
  },
  {
    question: "What's the best high-yield savings account for emergency funds?",
    answer:
      "High-yield savings accounts (HYSAs) currently offer 4-5% APY, far exceeding traditional accounts at 0.01-0.5%. Look for FDIC-insured accounts with no monthly fees, low minimum balances, and easy transfers. Compare rates at major online banks (Marcus, Ally, American Express) and credit unions. Emergency funds should contain 3-6 months of living expenses in a liquid, safe account. A $20,000 emergency fund in a 4.5% HYSA earns about $900 annually versus just $20 in a 0.1% traditional account.",
  },
  {
    question: "Should I prioritize savings or paying off debt first?",
    answer:
      "Build a small emergency fund ($1,000) first, then attack high-interest debt (credit cards above 10%). After debt is under control, build a full 3-6 month emergency fund, then increase savings. If you have low-interest debt (student loans at 4-5%), you can balance both simultaneously. The key threshold is interest rate: paying off 18% credit card debt provides better returns than saving at 4% interest. However, never deplete your emergency fund to pay down debt.",
  },
  {
    question: "How can I track savings progress and stay motivated?",
    answer:
      "Set multiple milestones rather than one distant goal. Instead of one $50,000 target, celebrate reaching $5,000, $10,000, $25,000, and $50,000. Track progress visually using spreadsheets or apps like YNAB or Personal Capital. Automate transfers to a separate savings account immediately after payday — automation removes temptation and builds discipline. Review progress quarterly and adjust contributions based on changing income or goals. Seeing tangible progress increases motivation and reinforces good savings habits.",
  },
];

export const PAYCHECK_FAQS: FAQ[] = [
  {
    question: "How is federal income tax calculated on my paycheck?",
    answer:
      "Federal income tax uses a progressive tax bracket system. In 2024, single filers pay 10% on income up to $11,000, 12% from $11,001-$44,725, 22% from $44,726-$95,375, and so on. Your employer withholds estimated tax based on your W-4 filing status and allowances. For example, a single person earning $60,000 annually would owe roughly $6,700 in federal tax, withheld across 26 biweekly paychecks (~$258/paycheck). Your W-4 determines withholding accuracy — too little and you owe at tax time, too much and you overpay for a refund.",
  },
  {
    question: "What is FICA and why is it deducted from my paycheck?",
    answer:
      "FICA (Federal Insurance Contributions Act) consists of two parts: Social Security tax (6.2% up to $168,600 income) and Medicare tax (1.45% with no cap). Together, FICA totals 7.65% of gross pay. Employers match these amounts, making the true FICA cost 15.3%. These deductions fund retirement and healthcare benefits you'll receive later. For a $60,000 salary, FICA withholding is roughly $4,590 annually. Self-employed workers pay the full 15.3% since they're both employee and employer.",
  },
  {
    question: "How much should I contribute to my 401(k)?",
    answer:
      "Financial advisors typically recommend saving 10-15% of gross income for retirement. If that's too high initially, start with 3-5%, then increase by 1% annually until reaching 10-15%. For 2024, the 401(k) contribution limit is $23,500. If your employer matches contributions, try to contribute at least enough to capture the full match — that's free money. For example, a 3% match on a $60,000 salary equals $1,800/year. Contributing less than the match means leaving money on the table. Many advisors suggest a 50/30/20 split: 50% to taxes and deductions, 30% to living expenses, 20% to savings and 401(k).",
  },
  {
    question: "What is the difference between gross and net pay?",
    answer:
      "Gross pay is your total salary before any deductions. Net pay (take-home) is what remains after federal tax, FICA, state tax, 401(k), health insurance, and other deductions. On a $60,000 annual salary, gross might be $2,308 biweekly, but net could be $1,600-$1,700 after typical deductions. Your pay stub shows gross, all deductions (including amounts and percentages), and net. Understanding this breakdown helps you budget accurately and identify withholding issues. If you consistently get large refunds, you're overwithholding and should adjust your W-4.",
  },
  {
    question: "Can I adjust my tax withholding to increase my paycheck?",
    answer:
      "Yes, by filing a new W-4 with your employer. Claim more allowances or adjust the extra deduction amount to reduce withholding, increasing your take-home pay. However, underwithholding can result in owing taxes at year-end plus penalties. Use the IRS Withholding Calculator (irs.gov) to determine correct W-4 entries based on your situation. Ideal withholding results in a small refund ($0-$500) or owed amount, not thousands. Major life changes (marriage, second job, dependent) require W-4 updates. The key is balancing paycheck size with avoiding tax debt.",
  },
];

export const BUDGET_FAQS: FAQ[] = [
  {
    question: "What is the 50/30/20 budgeting rule and how do I use it?",
    answer:
      "The 50/30/20 rule allocates: 50% of after-tax income to needs (housing, utilities, food, transportation), 30% to wants (entertainment, dining, hobbies), and 20% to savings and debt repayment. For a $50,000 after-tax annual income ($4,167/month), that's $2,083 needs, $1,250 wants, $834 savings. This creates balance between essential expenses and financial goals. Start by tracking actual spending for a month to identify your current ratios, then adjust gradually. Many people exceed the 50% needs allocation due to housing costs — if so, reduce wants to 20-25% to maintain the 20% savings target.",
  },
  {
    question: "How do I create a realistic monthly budget?",
    answer:
      "Track all spending for 2-3 months to establish baseline patterns. Categorize into fixed expenses (rent, insurance), variable expenses (groceries, utilities), and discretionary (dining, entertainment). Create a spreadsheet or use budgeting apps like YNAB, Mint, or EveryDollar. Include quarterly and annual expenses (car maintenance, insurance premiums) by dividing by 12 and reserving monthly. Build in a 5-10% buffer for unexpected costs. Review monthly against actuals and adjust categories. A realistic budget requires honest assessment of spending habits and willingness to trim excess — cutting 10% from spending is easier than earning 10% more income.",
  },
  {
    question: "What are the most important budget categories to track?",
    answer:
      "Prioritize tracking: housing (typically 25-35% of gross income), food and groceries (10-15%), transportation (15-20%), utilities (5-10%), insurance (10-25%), debt payments, and emergency savings (10-20%). These six categories typically represent 80% of spending. Secondary categories include childcare, healthcare, personal care, and entertainment. Most budgeting mistakes occur from underestimating discretionary spending (dining, shopping, subscriptions) which commonly exceed 10% of income. Apps that auto-categorize transactions make tracking easier and expose spending blind spots.",
  },
  {
    question: "How should I handle variable expenses in my budget?",
    answer:
      "Calculate average variable expenses (utilities, groceries) over 3-6 months to establish baselines. Set aside the average monthly amount, treating variable expenses as fixed allocations. For seasonal variations (higher heating in winter), average over 12 months and build monthly reserves. Track actual spending monthly and adjust allocations as patterns emerge. Some expenses (car repairs, home maintenance) are unpredictable; establish a separate maintenance fund with 1-2% of gross income monthly. Buffer accounts absorb overspending in one category without derailing the entire budget.",
  },
  {
    question: "What should I do if my expenses exceed my income?",
    answer:
      "Identify discretionary expenses to cut first: subscriptions, dining out, entertainment. Target a 5-10% reduction initially. Review housing costs — the single largest expense — to find savings opportunities (refinancing, downsizing, roommates). Increase income through side hustles or negotiating a raise. Temporarily reduce retirement contributions (after capturing employer match) if necessary, but avoid cutting emergency fund contributions. Create a recovery timeline: cut expenses for 3-6 months while searching for higher income. Avoid credit card debt and high-interest borrowing. Persistent deficits require structural changes: geographic relocation, career shift, or major lifestyle adjustment.",
  },
];

export const NET_WORTH_FAQS: FAQ[] = [
  {
    question: "What is net worth and why does it matter?",
    answer:
      "Net worth is assets minus liabilities: <strong>Net Worth = Total Assets − Total Liabilities</strong>. Assets include cash, investments, real estate, and vehicles. Liabilities include mortgages, car loans, credit card debt, and student loans. Your net worth reflects your financial position and wealth-building progress. For example, $300,000 home + $50,000 investments − $200,000 mortgage − $10,000 car loan = $140,000 net worth. Tracking net worth quarterly reveals wealth trends and motivates financial improvement. Increasing net worth 10-15% annually is a reasonable goal.",
  },
  {
    question: "How should I value assets for net worth calculation?",
    answer:
      "Use current market value for real estate (Zillow/Redfin estimates), investment accounts (current brokerage value), vehicles (Kelley Blue Book), and collectibles (conservative professional appraisals). For personal property (furniture, electronics), use 30-50% of original purchase price if less than 5 years old, then 10-20% for older items. Be conservative to avoid overvaluing assets. Include cash in savings/checking, but exclude non-liquid retirement accounts' values until near retirement. Underestimating asset values slightly is better than overestimating; conservative estimates provide realistic net worth snapshots.",
  },
  {
    question: "How can I increase my net worth faster?",
    answer:
      "Increase net worth through two primary levers: growing assets and reducing liabilities. Increase assets by maximizing retirement contributions ($23,500 401(k), $7,000 IRA annually), investing in index funds, and increasing income. Reduce liabilities by paying down high-interest debt (credit cards above 10%), then mortgages. Building $50,000/year net worth requires approximately $3,000+ monthly income growth plus aggressive savings. The most effective strategy combines debt payoff, salary increases through career advancement, and consistent investment growth averaging 7-8% annually in diversified portfolios.",
  },
  {
    question: "What is a healthy net worth for my age?",
    answer:
      "General benchmarks suggest net worth roughly equal to salary by age 30, 3x salary by 40, 6x by 50, 10x by 60, and 12x by retirement (65). These assume consistent earnings and saving. For a $60,000 earner: age 30 should target $60,000, age 40 targets $180,000, age 60 targets $600,000. However, these vary significantly by location, career, and starting point. Focus on personal progress rather than age-based benchmarks — increasing net worth 10-15% annually indicates healthy wealth building. Someone starting late can still reach retirement security through aggressive saving and smart investing.",
  },
  {
    question: "Should I include my home equity in net worth calculations?",
    answer:
      "Yes, home equity (home value − mortgage balance) represents a significant asset for most people. Include conservative home valuations; overestimating real estate value inflates net worth. A $300,000 home with $200,000 mortgage = $100,000 equity. However, home equity is illiquid — you can't easily access it without refinancing or selling. For retirement planning, plan to eventually downsize or take a reverse mortgage if needed. Don't count on home equity for short-term goals; reserve it for long-term wealth and retirement security.",
  },
];

export const SALARY_FAQS: FAQ[] = [
  {
    question: "How is salary negotiation approached professionally?",
    answer:
      "Research market rates for your role, location, and experience using Glassdoor, PayScale, and Salary.com. Document accomplishments and value delivered. Request a meeting to discuss compensation, citing market data and your performance. Propose a specific percentage increase (5-20% is typical) rather than asking what's available. Focus on value delivered, not personal financial needs. If countered with a lower offer, negotiate non-salary benefits (additional PTO, remote flexibility, professional development budget). Never accept immediately; ask for time to consider. Counter-offers during job transitions often yield 10-15% increases when backed by competing offers.",
  },
  {
    question: "What factors determine salary increases and raises?",
    answer:
      "Primary factors include: inflation (typically 2-4% raises), performance and accomplishments, market rate adjustments, experience tenure, and competing offers. Most employers provide annual raises of 2-4%, often tied to inflation. Performance bonuses provide additional increases for high achievers (5-20% additional). Job transitions typically yield 10-30% salary jumps when moving to more senior roles or higher-paying companies. Changing companies usually provides larger raises than staying — employees changing jobs see average 10-15% increases while tenure increases average only 3%. Advocating for yourself, documenting value, and exploring external opportunities are key strategies.",
  },
  {
    question: "How do I calculate my effective hourly rate from salary?",
    answer:
      "Divide annual salary by hours worked annually. For a $60,000 salary with standard 40 hours/week and 52 weeks/year (2,080 hours), the hourly rate is $28.85. Account for unpaid time (vacation, holidays, sick time). If you receive 3 weeks off (120 hours), you work 1,960 hours, making effective hourly $30.61. Include commute time in hourly calculations for work-life balance assessment. A $60,000 job with 50-hour weeks equals $23.08/hour; reducing to 40 hours/week increases effective rate to $28.85. This calculation reveals whether salary justifies job demands and commute burden.",
  },
  {
    question: "What benefits should I negotiate beyond base salary?",
    answer:
      "Prioritize 401(k) matching (free money), health insurance quality, and vacation time. Additional negotiations include: signing bonuses (5-15% of salary), performance bonuses (10-25%), remote flexibility, professional development budget ($1,000+/year), flexible hours, tuition reimbursement, and parking/transit subsidies. Calculate total compensation value including benefits. A $60,000 salary with 5% matching, strong health insurance, and 4 weeks vacation might total $75,000+ in value. Negotiating benefits often meets less resistance than base salary increases. Stock options in startups add upside but carry risk; priority should be cash and proven benefits.",
  },
  {
    question: "How do taxes affect my take-home from salary?",
    answer:
      "Federal income tax, FICA (7.65%), state/local taxes, and 401(k) contributions reduce take-home. A $60,000 salary in a mid-tax state might net $42,000-$44,000 annually (70-73% take-home). Federal tax bracket alone reduces $60,000 to ~$53,300. Add 7.65% FICA ($4,590), state tax ($2,000-$3,000), and typical 401(k) ($6,000-$9,000), leaving $35,700-$38,000. Use tax calculators to estimate net pay before accepting offers. Understand that nominal salary isn't take-home — tax-aware career decisions account for net income. Strategically using 401(k) and FSA contributions reduces taxable income and increases take-home.",
  },
];

export const ROI_FAQS: FAQ[] = [
  {
    question: "What is return on investment (ROI) and how do I calculate it?",
    answer:
      "ROI measures profit or loss from an investment as a percentage: <strong>ROI = (Net Profit / Initial Investment) × 100%</strong>. For example, investing $10,000 that grows to $12,000 yields a $2,000 profit and 20% ROI. This doesn't account for time; a 20% return in 1 year is better than 20% over 10 years. For time-adjusted returns, use annualized ROI: a $10,000 investment reaching $15,000 in 2 years equals 22.5% annualized ROI. Negative ROI indicates losses: selling a stock purchased at $100 for $80 is −20% ROI. Always consider holding period, inflation, and taxes when evaluating investment returns.",
  },
  {
    question: "What is a good ROI for investments?",
    answer:
      "Long-term stock market returns average 8-10% annually (including dividends and inflation adjustment around 6-7% real return). Bonds typically return 3-5%. Real estate appreciation averages 3-4% plus rental income. Good investment targets are 8%+ annually for stocks, 4-5% for bonds, and 8-12% for real estate including rental income. Small business and startup investments require 25%+ ROI to justify risk. After inflation (currently 2-3%), aim for 5-7% real returns. Comparing your 15% investment return to 10% market average shows outperformance. Remember past returns don't guarantee future results; diversification reduces risk even if average returns decrease.",
  },
  {
    question: "How do I compare ROI across different investment types?",
    answer:
      "Calculate annualized ROI to compare investments with different holding periods. Compare after-tax returns since stock gains and bond interest have different tax treatment. Account for risk — a 20% stock return with high volatility differs from 5% bond return with stability. Consider fees: a 10% investment return minus 1% annual fee equals 9% net. Use ROI alongside other metrics: the Sharpe ratio adjusts for risk, comparing return per unit of risk. Dollar-cost averaging investments often yields better ROI than lump-sum investing. Compare against benchmark indexes: beat an S&P 500 index (10% returns) with your 12% portfolio return, but underperforming a 15% target shows underperformance.",
  },
  {
    question: "What factors affect ROI in stocks and bonds?",
    answer:
      "Stock ROI depends on price appreciation and dividends. A stock bought at $100 paying $3 annual dividend, selling at $115, yields 18% ROI ($15 gain + $3 dividend). Bond ROI depends on coupon payments and price changes. An economic downturn decreases stock prices (lower ROI), while rising interest rates decrease bond prices. Inflation reduces real ROI — a 6% return with 4% inflation equals 2% real return. Company fundamentals (earnings growth, cash flow) drive long-term stock ROI. Bond ROI relates to credit quality and interest rate environment. Diversifying between stocks (higher growth potential) and bonds (stability) balances ROI and risk.",
  },
  {
    question: "How do taxes impact my ROI calculations?",
    answer:
      "After-tax ROI is what matters for decision-making. Short-term capital gains (held under 1 year) are taxed as ordinary income (10-37% depending on bracket). Long-term gains (1+ years) are taxed at lower rates (0%, 15%, or 20%). For a 20% gain taxed at 37%, net return is 12.6%. Tax-advantaged accounts (401(k), IRA, Roth IRA) avoid capital gains taxes temporarily (traditional) or permanently (Roth). Harvest tax losses to offset gains. Qualified dividends are taxed at preferential rates (15-20%) versus ordinary dividends taxed as income. Retirement accounts provide superior after-tax ROI due to tax deferral or exemption. Use after-tax ROI when comparing taxable versus tax-advantaged investments.",
  },
];

export const INFLATION_FAQS: FAQ[] = [
  {
    question: "How does inflation affect my purchasing power over time?",
    answer:
      "Inflation reduces what your money can buy. At 3% annual inflation, $100 today buys what $97.09 cost the previous year. Over 10 years at 3% inflation, $100 today equals only $74.41 in purchasing power. This impacts retirement planning: $50,000 annual expenses today requiring $65,000 at 3% inflation in 10 years and $87,000 in 20 years. Saving in low-interest accounts (0.5%) doesn't keep pace with inflation (3%), meaning real wealth declines. To preserve purchasing power, investments must return above inflation: a 4% savings rate minus 3% inflation equals 1% real return. Longer time horizons require higher inflation assumptions for planning.",
  },
  {
    question: "What causes inflation and why does it matter?",
    answer:
      "Inflation results from increased money supply, rising input costs, or increased demand exceeding supply. The Federal Reserve targets 2% inflation to encourage spending and investment while preventing deflation (harmful wage and price declines). High inflation (above 5%) erodes savings and reduces purchasing power. Low inflation is preferable to deflation, but sustained 6-8% inflation significantly impacts long-term planning. Inflation rates vary by category: food and energy inflate faster than goods and services. Understanding inflation importance means: setting realistic investment return targets (8%+ for stocks accounts for inflation), protecting fixed income (bonds lose value), and planning retirement with inflation-adjusted expenses.",
  },
  {
    question: "How do I calculate inflation-adjusted investment returns?",
    answer:
      "Real return = Nominal Return − Inflation Rate. A $10,000 investment earning 8% nominal return (gaining $800) with 3% inflation equals 5% real return ($500 in true purchasing power gain). Over 20 years, $10,000 at 8% nominal becomes $46,610, but at 3% inflation, it's equivalent to $25,700 in today's dollars (real purchasing power). Understanding real returns is crucial for retirement planning. A 4% portfolio withdrawal rate minus 3% inflation equals 1% real decline annually; this is why retirees need additional income or capital. Always evaluate investments using real, not nominal, returns for meaningful comparison.",
  },
  {
    question: "What investments protect against inflation?",
    answer:
      "Stocks historically beat inflation with 8-10% average returns. Treasury Inflation-Protected Securities (TIPS) adjust principal for inflation, guaranteeing real returns above inflation. Real estate appreciates with inflation and provides rental income. Commodities (gold, oil) sometimes hedge inflation but are volatile. Short-term bonds lose value in rising inflation environments. Dividend stocks provide inflation-adjusted income as companies increase dividends with profits. The best inflation hedge is diversified stock portfolio plus real assets. Avoid fixed-rate savings accounts and bonds during high inflation; allocate toward equities. Inflation expectations influence investment strategy — high inflation environments favor stocks and real assets over bonds.",
  },
  {
    question: "How should inflation affect my retirement planning?",
    answer:
      "Increase retirement expense estimates by inflation rate. If today's retirement costs $50,000 annually, at 3% inflation over 30 years, annual expenses reach $119,000. Plan for higher inflation in healthcare (5-6% historically) and modest inflation in other categories. Adjust safe withdrawal rate targets downward — instead of 4%, use 3.5% to account for inflation's long-term impact. Social Security benefits increase with inflation, providing natural inflation hedge. Pensions often include modest cost-of-living adjustments (2-3%). In accumulation years, prioritize stocks and real estate for inflation-beating growth. In retirement, rebalance toward inflation-protected assets (TIPS, stocks) while maintaining some bonds for stability.",
  },
];

export const TAX_FAQS: FAQ[] = [
  {
    question: "What are the 2024 federal income tax brackets and how do they apply?",
    answer:
      "Tax brackets are progressive: you pay different rates on different income portions, not your entire income at one rate. In 2024, single filers pay 10% on income up to $11,000, 12% from $11,001-$44,725, 22% from $44,726-$95,375, and higher rates on income above. A $60,000 earner pays: 10% on $11,000 ($1,100) + 12% on $33,725 ($4,047) + 22% on $15,275 ($3,360) = $8,507 total tax (14.2% effective rate). Standard deduction ($14,600 single, $29,200 married) reduces taxable income before calculating tax. Understanding brackets prevents misconceptions about moving into a higher bracket increasing tax on all income.",
  },
  {
    question: "Should I itemize deductions or take the standard deduction?",
    answer:
      "Itemize deductions if they exceed the standard deduction. For 2024, single filers standard deduction is $14,600; married filing jointly is $29,200. Itemizable deductions include mortgage interest, state/local taxes (capped at $10,000), charitable contributions, and medical expenses above 7.5% of adjusted gross income. Most taxpayers benefit from the standard deduction — only 10-15% itemize. Itemizing makes sense if you have: high mortgage interest (new purchase), significant charitable giving ($15,000+), or high state/local taxes in high-tax states. Once you hit the $10,000 SALT cap, additional state/local taxes provide no deduction benefit.",
  },
  {
    question: "What is the difference between a tax deduction and tax credit?",
    answer:
      "Deductions reduce taxable income; credits reduce taxes owed directly. A $5,000 deduction at 22% bracket saves $1,100 in taxes. A $5,000 credit saves exactly $5,000 in taxes. Credits are more valuable than deductions. Common credits include: Earned Income Tax Credit (EITC, up to $3,995), Child Tax Credit ($2,000/child), Lifetime Learning Credit (up to $2,500 education costs). Traditional IRA contributions are deductions; Roth contributions are not deductible but provide future tax-free withdrawals. For most taxpayers, credits are exhausted before deductions become beneficial. Always maximize credits first, then deductions.",
  },
  {
    question: "How should I handle side income and self-employment taxes?",
    answer:
      "Self-employment income is fully taxable and subject to self-employment tax (15.3%, both employer and employee portions). A self-employed person earning $60,000 owes approximately $8,478 self-employment tax plus income tax (~$7,000), totaling $15,478 (25.8%). Key strategies: establish an LLC or S-Corp for deduction structure, deduct business expenses (home office, supplies, professional services), contribute to SEP-IRA or Solo 401(k) ($69,000 limit), and make quarterly estimated tax payments. Track income and expenses meticulously. Many self-employed individuals underpay taxes quarterly and face penalties. Working with a CPA saves more than the fee through deduction optimization.",
  },
  {
    question: "What tax strategies reduce my tax burden legitimately?",
    answer:
      "Maximize retirement contributions: $23,500 401(k), $7,000 traditional IRA, plus catch-up contributions after 55/60. Use HSA ($4,150 2024, individual) for triple tax advantage (deductible, grows tax-free, tax-free withdrawals for healthcare). Harvest tax losses to offset capital gains. Bunch itemized deductions in high-income years. Gift $18,000/year (2024) to family without gift tax. Donate appreciated securities to charity instead of cash — avoid capital gains tax while claiming deduction. Utilize tax-loss harvesting in investment accounts. For business owners, consider S-Corp election for self-employment tax savings. Time discretionary income and expenses between tax years strategically. Document everything for audit protection.",
  },
];

export const COST_OF_LIVING_FAQS: FAQ[] = [
  {
    question: "What is the cost of living and how do I calculate it for my situation?",
    answer:
      "Cost of living includes all expenses needed to maintain your lifestyle: housing (25-30%), food (10-15%), transportation (15-20%), utilities (5-10%), insurance, healthcare, and discretionary spending. Total monthly living expenses vary by location and lifestyle. Rural areas cost 20-40% less than major metropolitan areas. A $50,000 annual budget in Kansas might be $75,000+ in New York or San Francisco. Calculate your personal cost of living by tracking actual expenses for 2-3 months across all categories. Websites like Numbeo and MIT Living Wage Calculator show comparative costs. Understanding local cost of living informs salary negotiations, relocation decisions, and retirement planning.",
  },
  {
    question: "How much does cost of living vary by location in the US?",
    answer:
      "Cost of living varies dramatically by location. San Francisco's cost is roughly 80% higher than average US; rural Mississippi is 20-30% below average. Housing is the primary driver: median home prices range from $150,000 (Midwest) to $800,000+ (West Coast). A $60,000 salary provides comfortable living in most Midwest cities but is tight in major metros. State income tax varies 0-13% (California, Oregon), creating effective cost differences. Urban areas have higher housing but lower transportation costs due to transit. Remote work enables living in low-cost areas while earning high metro salaries — $60,000 in San Francisco is equivalent to $30,000-$40,000 in rural areas after cost adjustment.",
  },
  {
    question: "How should I adjust my budget when moving to a new location?",
    answer:
      "Research cost comparisons using Numbeo, Bankrate, or moving company tools. Identify which expenses change most: housing typically increases 30-50% moving to expensive areas. Calculate net impact: a 50% housing cost increase might be offset by no state income tax, netting 20% total increase. Adjust salary expectations accordingly — negotiate 15-30% increases when moving to high-cost metros. Before committing, spend time in the new location. Factor in lifestyle changes: expensive cities often have less need for cars (lower transportation costs) and more expensive entertainment. Build a 3-6 month buffer to adjust spending habits in the new location.",
  },
  {
    question: "How does inflation affect my cost of living over time?",
    answer:
      "Annual inflation averaging 3% compounds significantly: costs double every 24 years. At 3% inflation, a $50,000 annual cost of living in 2024 becomes $65,000 in 2034 and $87,000 in 2054. Healthcare inflation (4-5% historically) and housing (2-4%) outpace general inflation. Planning for 20-year time horizons requires 30-50% cost increases. Retirees on fixed income face purchasing power erosion; Social Security increases provide partial inflation protection. Wage earners typically match inflation through salary growth. Investment planning must account for inflation: assume 3%+ when calculating future needs.",
  },
  {
    question: "What budgeting strategies help when cost of living is high?",
    answer:
      "In high-cost areas, prioritize: housing alternatives (roommates, less desirable neighborhoods), public transportation over cars, grocery store shopping over restaurants, and strategic entertainment choices. Consider housing cost ratios: keep housing under 30% of gross income where possible. Remote work enables arbitrage: living in low-cost areas while earning high metro salaries. Build substantial emergency funds (6-12 months) in expensive areas for buffer. Automate savings before spending; pay yourself first. Reduce subscriptions and discretionary spending. Time major purchases strategically. Despite high costs, building wealth is possible through disciplined saving and income growth — focus on total financial behavior rather than complaining about costs.",
  },
];

export const CURRENCY_CONVERTER_FAQS: FAQ[] = [
  {
    question: "How are exchange rates determined and why do they fluctuate?",
    answer:
      "Exchange rates reflect the relative value of currencies based on supply and demand in foreign exchange markets. When demand for a currency exceeds supply, it strengthens (appreciates); when supply exceeds demand, it weakens (depreciates). Interest rate differentials drive much movement: higher US interest rates attract foreign investors, increasing demand for dollars. Economic data (GDP growth, inflation, employment) influences expectations and exchange rates. Political events and central bank policy also impact rates significantly. Major currency pairs (EUR/USD, GBP/USD) trade trillions daily. Individuals typically see less favorable rates than wholesale rates due to bank spreads (0.5-3%). Real-time exchange rates fluctuate minute-by-minute.",
  },
  {
    question: "What is the difference between exchange rate types (bid, ask, mid-market)?",
    answer:
      "The bid rate is what banks pay to buy currency; the ask rate is what they charge to sell. The mid-market (true) rate is the average. For example, EUR/USD might be bid 1.1050, ask 1.1055, mid-market 1.1052. The 0.05% spread represents bank profit. When converting $1,000 to euros at the ask rate (1.1055), you get €904.54; at the mid-market (1.1052), you'd get €904.74 — a €0.20 difference. Large transactions show larger absolute spreads. Online services (Wise, OFX) offer mid-market or near-mid-market rates (0.1-0.5% spread), while banks charge 1-3%. For significant conversions, using specialized services saves 1-2.5%, equaling hundreds of dollars.",
  },
  {
    question: "How should I budget for currency conversion when traveling or working internationally?",
    answer:
      "Account for 1-3% currency conversion fees in travel budgets; using ATMs abroad is typically cheaper (0.5-1.5% fees) than airport exchange or credit cards (3%+ foreign transaction fees). For extended stays, consider opening accounts in destination countries to minimize conversions. Track exchange rate trends; converting when your home currency is strong saves 5-10% versus converting when weak. International workers should arrange payroll deposits in-country when possible to avoid multiple conversions. Remote workers earning US dollars while living in weak-currency countries benefit from favorable rates; those earning in weak currencies working for strong-currency companies face headwinds. Budget fluctuations of 5-10% in currency values when planning major international expenses.",
  },
  {
    question: "What are the best ways to exchange currency for international travel?",
    answer:
      "Rank by cost: ATM withdrawals (0.5-2% fee), mid-market rate platforms like Wise (0.7-1.5%), airport ATMs (2-3%), credit card in-country (2-3% foreign transaction fee), airport exchange booths (5-8%), or bank exchange (2-4%). Avoid exchanging currency before travel; exchange abroad at better rates. Notify your bank of travel to prevent fraud blocks. Use no-foreign-transaction-fee credit cards (Fidelity, Chase Sapphire) for purchases. For long stays, open a local bank account if possible. Never exchange at hotels or tourist areas. Order specialty currencies (Thai Baht, Vietnamese Dong) from US banks before departure if large amounts needed, as airport rates are poor. Diversify: use ATM for cash, credit cards for large purchases.",
  },
  {
    question: "How do currency fluctuations affect international business or investments?",
    answer:
      "Companies and investors hedge currency risk using forward contracts, options, or currency swaps. A US company earning 1 million euros annually faces risk if the EUR weakens — earning less in dollars. A 10% EUR depreciation costs €100,000 in dollar value. Hedge strategies lock in exchange rates, eliminating risk but also limiting upside if currency strengthens. Investors in emerging markets face dual risks: stock price changes plus currency fluctuations. A stock gaining 20% but experiencing 15% currency depreciation nets only 2% return. Diversifying across currencies reduces overall portfolio currency risk. For international business, pricing in home currency or hedging contracts manages risk. Currency volatility creates trading opportunities but also substantial risk for unprepared participants.",
  },
];

export const BREAK_EVEN_FAQS: FAQ[] = [
  {
    question: "What is break-even analysis and how do I calculate break-even point?",
    answer:
      "Break-even is where total revenue equals total costs, resulting in zero profit or loss. Calculate as: <strong>Break-Even Point (units) = Fixed Costs / (Price per Unit − Variable Cost per Unit)</strong>. For example, a product with $10,000 fixed costs, $20 selling price, and $8 variable cost requires: $10,000 / ($20 − $8) = 833 units to break even. Revenue at break-even: 833 units × $20 = $16,660. Below 833 units incurs losses; above generates profit. Break-even in dollars: $10,000 / (Contribution Margin %) where contribution margin = (Revenue − Variable Costs) / Revenue. Understanding break-even helps set pricing, sales targets, and feasibility assessments for new products or businesses.",
  },
  {
    question: "How does break-even analysis help business decision-making?",
    answer:
      "Break-even analysis reveals minimum sales needed for profitability, informing pricing and volume targets. If calculated break-even is 10,000 units but market size is 5,000, the business model is infeasible. Break-even helps decide: should we launch a new product? A product with 5,000-unit break-even and 50,000-unit market has high probability of success. Should we enter a new market? Regional expansion with calculated break-even of 200 units monthly seems viable. Break-even also determines necessary profit margins: if break-even requires 50% of production capacity, the business model has low risk tolerance. Comparing break-even analysis across product lines reveals which products are most efficient. Dynamic break-even analysis models how costs and prices interact, revealing profitability sensitivity.",
  },
  {
    question: "What is contribution margin and how does it relate to break-even?",
    answer:
      "Contribution margin is revenue minus variable costs: <strong>CM = Price − Variable Cost per Unit</strong>. Using the earlier example, CM = $20 − $8 = $12/unit. Contribution margin percentage = ($12 / $20) = 60%. This means 60% of revenue covers fixed costs; 40% covers variable costs. Higher contribution margins mean lower break-even points. A product with 80% contribution margin breaks even at lower volumes than 30% margin products. Contribution margin helps rank products: 80% margin products deserve priority. It also shows profitability impact of volume changes: selling 100 additional units at 60% CM increases profit by $1,200. Contribution margin is essential for break-even analysis, pricing decisions, and product portfolio optimization.",
  },
  {
    question: "How do I adjust break-even for different pricing and cost scenarios?",
    answer:
      "Conduct sensitivity analysis: recalculate break-even with different prices (±10% scenarios), variable costs (supply cost changes), and fixed costs (rent increases). Lowering price by 10% (from $20 to $18) increases break-even to 1,111 units (55% increase). Reducing variable costs by 10% (from $8 to $7.20) decreases break-even to 714 units (14% decrease). Scenarios reveal vulnerabilities: price sensitivity often impacts break-even more than cost changes. Create break-even charts showing profit/loss across unit volumes; visual representation clarifies feasibility. Many products operate 25-50% above break-even volumes; this safety margin cushions against volume reductions or cost increases. Understanding sensitivities guides strategic decisions: if break-even is vulnerable to price reductions, avoid price wars.",
  },
  {
    question: "How does break-even analysis apply to service businesses versus product businesses?",
    answer:
      "Service businesses calculate break-even by billable hours: <strong>Break-Even Hours = Fixed Costs / (Hourly Rate − Variable Costs)</strong>. A consultant with $50,000 annual fixed costs, $150/hour rate, and $10/hour variable costs (software, supplies) needs: $50,000 / ($150 − $10) = 357 billable hours annually (~17 hours/week). Product businesses calculate by units sold. Service businesses can adjust pricing more flexibly; consultants offer value-based pricing without production constraints. However, service capacity is limited by human hours available (5,000 hours maximum annually). Service businesses with high fixed costs (offices) and low variable costs benefit from volume leverage. Product businesses invest in manufacturing but achieve scale economies. Break-even analysis applies to both but emphasizes different metrics: service = billable hours, products = units sold.",
  },
];

export const MARGIN_FAQS: FAQ[] = [
  {
    question: "What is profit margin and what percentage is considered healthy?",
    answer:
      "Profit margin measures profitability as a percentage: <strong>Profit Margin = (Profit / Revenue) × 100%</strong>. Gross margin excludes operating expenses; net margin includes all costs. A business with $100,000 revenue and $70,000 cost of goods has 30% gross margin. After $15,000 operating expenses, net margin is 15%. Healthy margins vary by industry: retail typically targets 2-5% net margin, software 20-40%, manufacturing 8-15%. Low-margin businesses require high volume; high-margin businesses can operate at lower volumes. Startups often operate at negative margins initially; profitability comes with scale. Most investors target 10%+ net margins as sustainable. Compare margins to competitors: underperforming indicates operational inefficiency or pricing issues. Margin erosion signals competitive pressure or rising costs.",
  },
  {
    question: "How do I increase profit margins in my business?",
    answer:
      "Increase price (cautiously to avoid losing sales), reduce variable costs through supplier negotiations or process efficiency, reduce fixed costs through overhead cuts, or sell higher-margin products. Price increases directly improve margins: a 5% price increase on 50% margin business increases net margin significantly. Cost reduction requires analysis: a 10% manufacturing cost reduction on 40% COGS improves margin 4 percentage points. Automating processes reduces labor costs. Renegotiating supplier contracts saves 5-15%. Eliminating inefficient product lines improves overall margin. Focus on high-margin products; sometimes selling fewer units of higher-margin products is more profitable than high-volume, low-margin sales. Monitor competitor pricing and cost structures. Margin expansion compounds profitability: 10% revenue + 5% margin improvement = 10.5% profit growth.",
  },
  {
    question: "What is the difference between gross, operating, and net profit margins?",
    answer:
      "Gross margin = (Revenue − COGS) / Revenue. A $100,000 revenue, $60,000 COGS business has 40% gross margin. Operating margin = (Revenue − COGS − Operating Expenses) / Revenue. Adding $15,000 operating expenses results in 25% operating margin. Net margin = (Net Income / Revenue) × 100%. After tax of $5,000, net margin is 20%. Each layer shows profitability at different stages. Gross margin reflects production efficiency; operating margin reflects operational efficiency; net margin shows bottom-line profitability. Comparing trends reveals where problems originate: declining gross margin indicates rising COGS; declining operating margin despite stable gross margin indicates rising operating expenses. Analyzing each margin separately guides targeted improvements.",
  },
  {
    question: "How do I use margin analysis to manage pricing strategy?",
    answer:
      "Calculate contribution margin (price − variable cost) to understand profit impact per unit sold. A product with 60% contribution margin needs lower volume than 30% margin products. Set pricing to achieve target margins while remaining competitive. Market-based pricing: charge what customers will pay, then improve costs to meet margin targets. Cost-plus pricing: add desired margin to costs (e.g., 50% markup). Value-based pricing: charge based on customer value delivered, not costs. Test price sensitivity: survey customers on willingness-to-pay; optimize pricing accordingly. Segment pricing: charge different customers different prices based on value delivered (B2B vs. B2C, volume discounts). Monitor competitor pricing; avoid price wars that erode margins. Premium positioning supports higher margins through brand value.",
  },
  {
    question: "How does scaling affect profit margins and where are margin pressures?",
    answer:
      "Initially, scaling improves margins through fixed-cost leverage: adding volume without proportional fixed-cost increases improves profitability. A business with $50,000 fixed costs at 10,000 units has $5/unit fixed cost; at 20,000 units, it's $2.50/unit. However, scaling pressures emerge: wage inflation for workers, supplier discounts decline at high volume, competitive pricing pressure intensifies. Scaling may require infrastructure investment (facilities, systems), temporarily reducing margins. Variable costs sometimes increase at scale due to supply chain complexity. Optimal scale exists where margins are maximized and further growth reduces them. Monitor margin trends as revenue grows; if margins compress, address cost structure. Successful companies maintain or improve margins at scale through operational excellence and customer value.",
  },
];

export const ANNUITY_FAQS: FAQ[] = [
  {
    question: "What is an annuity and how does it provide income in retirement?",
    answer:
      "An annuity is an insurance contract where you pay a lump sum (or installments) and receive guaranteed periodic payments. Fixed annuities pay a guaranteed amount (e.g., $500/month for life); variable annuities pay amounts based on investment performance. A 65-year-old investing $500,000 in a fixed annuity might receive $2,200/month for life — guaranteed income regardless of market conditions. This converts capital into guaranteed income, eliminating longevity risk (outliving savings). Annuities work best for risk-averse individuals wanting income certainty. Downsides: high fees (1-3% annually), inflexibility (funds locked away), and opportunity cost (could earn higher returns in markets). Immediate annuities begin payments within 12 months; deferred annuities delay payments, allowing growth. Tax treatment favors qualified annuities in retirement accounts.",
  },
  {
    question: "How much monthly income will an annuity provide?",
    answer:
      "Monthly income depends on: principal amount, your age, gender, interest rates, and life expectancy assumptions. A $500,000 annuity at age 65 provides roughly $2,200-$2,600/month (depending on rates and assumptions). At 55, it's less ($1,600-$1,900) due to longer expected payout period. Higher interest rates increase annuity payouts (insurance company can earn more). Women receive less due to longer life expectancy. Single life annuities pay until death (highest monthly payment); joint survivor annuities pay both spouses (lower monthly). Life expectancy: assuming 25-year payout (to age 90), the formula considers remaining life and interest earned. Use online calculators or work with insurance agents to model your specific situation. Remember: annuity payouts are often partially tax-free if funded with after-tax dollars.",
  },
  {
    question: "What are the pros and cons of annuities for retirement income?",
    answer:
      "Pros: guaranteed income eliminates longevity risk, removes investment responsibility, provides predictable budgeting, protects against market downturns. Cons: high fees reduce net returns, opportunity cost (might have earned more in markets), inflation erodes purchasing power (fixed payments), inflexible access to principal, complexity and tax implications. Annuities work best: for conservative individuals, those with longevity concerns, those who hate market volatility, or as partial retirement income (annuity + portfolio). Annuities are risky if: high fees aren't transparent, you need flexibility, you have short life expectancy, or rates are historically low (locking in poor returns). Hybrid approach: convert 40% of capital to annuity for base income, invest 60% for growth. Delaying annuity purchase until older increases monthly payments.",
  },
  {
    question: "Should I buy an immediate or deferred annuity?",
    answer:
      "Immediate annuities begin payments within 12 months; best for those already retired needing income. Deferred annuities delay payments (5-30+ years); best for pre-retirees wanting growth plus guaranteed future income. A 50-year-old might buy a deferred annuity that begins payouts at 70, allowing 20-year growth period. Deferred annuities offer more flexibility and often better long-term payouts. However, deferred annuities have greater complexity, higher fees, and surrender charges (penalties for early withdrawal). Immediate annuities are straightforward: convert capital to income. Consider timing: purchase immediately when you retire, or delay (annuity rates may improve). Laddering: buy multiple annuities at different times to capture rate changes. Current interest rates (2-4%) are moderate; buying when rates are high locks in better payouts.",
  },
  {
    question: "How do annuity fees work and what should I watch for?",
    answer:
      "Annuity fees include: mortality/expense fees (0.5-2% annually), administrative fees (0.15-0.3%), and investment management fees (if variable annuity, 0.3-2%). Total fees often total 1-3% annually, significantly reducing returns. Example: $500,000 annuity with 2% fees costs $10,000/year. Over 20 years, this compounds to substantial losses. Index annuities cap upside while charging fees (ceiling on market gains of 5-8% despite market returns of 10%+). Hidden fees include surrender charges (5-10% if withdrawing early). Request detailed fee disclosure before purchasing. Low-cost alternatives: directly-issued annuities from insurance companies (lower fees), online brokers (competitive pricing), or simple fixed annuities. Compare guaranteed income received versus fees paid. High fees indicate poor value — shop competitively or consider alternatives like bonds or dividend stocks for similar income.",
  },
];

export const FUTURE_VALUE_FAQS: FAQ[] = [
  {
    question: "What is future value and why do I need to calculate it?",
    answer:
      "Future value is what an investment will be worth at a future date given growth over time. The formula is: <strong>FV = PV × (1 + r)ⁿ</strong>, where PV is present value, r is rate per period, and n is number of periods. A $10,000 investment at 7% annual return for 10 years equals: $10,000 × (1.07)¹⁰ = $19,672. Future value calculations help retirement planning (how much does $50,000/year savings become in 30 years?), debt planning (how much will $10,000 loan cost with interest?), and goal planning (what's needed today to have $1 million in 20 years?). Understanding future value motivates savings by showing compounding power: small amounts today become substantial wealth decades later.",
  },
  {
    question: "How does compound frequency affect future value?",
    answer:
      "Compounding frequency (annual, semi-annual, quarterly, monthly, daily) affects how often interest is applied. The formula adjusts to: <strong>FV = PV × (1 + r/n)^(nt)</strong>, where n is compounds per year. A $10,000 investment at 6% annually compounds differently: annual = $17,908, semi-annual = $17,959, quarterly = $17,985, monthly = $18,009, daily = $18,020. Daily compounding yields $112 more than annual — 0.6% difference. Most savings accounts compound daily or monthly. Most bonds compound semi-annually. Investment returns are quoted as APY (Annual Percentage Yield), which already accounts for compounding, making comparison easier. For simplicity, assume annual compounding unless specified otherwise.",
  },
  {
    question: "How does inflation affect future value calculations?",
    answer:
      "Nominal future value doesn't account for inflation; real future value does. A $10,000 investment growing to $19,672 has nominal FV of $19,672. At 3% inflation, real FV (in today's dollars) is: $19,672 / (1.03)¹⁰ = $14,590. Nominal appears stronger, but purchasing power is lower. For long-term planning (retirement), use real returns: subtract inflation from growth rate. If investments return 7% and inflation is 3%, real return is 4%. Real future value = $10,000 × (1.04)¹⁰ = $14,802, matching the inflation-adjusted calculation. Understanding real returns prevents overestimating retirement readiness. A $1 million nominal portfolio after 20 years might equal only $550,000 in purchasing power at 3% inflation.",
  },
  {
    question: "What annual return rate should I use in future value calculations?",
    answer:
      "Use historical averages as guides: stocks average 8-10% nominal (6-7% real after inflation), bonds 4-5% nominal (2-3% real), savings accounts 0.5-5% depending on type. Conservative planning uses lower rates (6% stocks, 3% bonds); aggressive planning uses historical averages. For retirement planning, mix rates based on portfolio allocation: 60% stocks (7%), 40% bonds (3.5%) = 5.6% blended rate. Longer time horizons can assume higher rates; shorter horizons should be conservative. Sensitivity analysis helps: calculate future value at low (4%), moderate (6%), and high (8%) returns to understand outcomes. Don't assume past returns guarantee future results. Using realistic, conservative rates prevents overprojecting retirement readiness.",
  },
  {
    question: "How do regular contributions affect future value calculations?",
    answer:
      "With regular contributions (like monthly savings), the formula becomes more complex. Use the future value of annuity formula: <strong>FV = PMT × [((1 + r)ⁿ − 1) / r]</strong>, where PMT is periodic payment. Saving $500/month for 10 years at 7% annual return (0.583% monthly): FV = $500 × [((1.00583)^120 − 1) / 0.00583] = $77,640. Compare to lump sum: $60,000 (total contributions) grows to $77,640, with $17,640 from interest and compounding. Regular contributions amplify compounding: consistent saving beats lump-sum investing for most people due to mathematical leverage. Starting early (age 25 vs. 35) allows compounding to work longer, creating substantial wealth differences. Many retirement calculators use this formula for planning 30+ year horizons.",
  },
];

export const PRESENT_VALUE_FAQS: FAQ[] = [
  {
    question: "What is present value and how does it relate to future value?",
    answer:
      "Present value (PV) is how much a future amount is worth in today's dollars, accounting for time and growth rates. It's the inverse of future value: <strong>PV = FV / (1 + r)ⁿ</strong>. If you need $50,000 in 10 years and can earn 6% annual return, present value is: $50,000 / (1.06)¹⁰ = $27,921. You need $27,921 today to have $50,000 in 10 years. Present value helps answer: How much should I pay today for future cash flows? Should I sell my business for $500,000 today or $600,000 in 5 years? At 8% discount rate: PV = $600,000 / (1.08)⁵ = $408,600. Taking $500,000 today is better. Present value is fundamental to investment, loan, and business valuation decisions.",
  },
  {
    question: "What is a discount rate and how do I choose one?",
    answer:
      "The discount rate (r) converts future dollars to present value, reflecting time value and risk. Safe investments use low discount rates (3-4% for bonds, Treasuries); risky investments use higher rates (8-15% for stocks, startups). The discount rate should reflect your required return or opportunity cost. If you can earn 6% in savings accounts, use 6% to evaluate whether investment alternatives are worthwhile. A business expecting $100,000 annual profit discounted at 8% is worth: $100,000 / 0.08 = $1,250,000. At 12% discount rate, it's only $833,000. Higher discount rates penalize future cash flows more severely. Choose discount rate based on: risk (higher = higher rate), alternative investments available, and time value preferences. Conservative investors use higher discount rates (more cautious).",
  },
  {
    question: "How do I use present value for investment decisions?",
    answer:
      "Calculate present value of all expected cash flows and compare to investment cost. Project cash flows (conservatively), discount at appropriate rate, sum present values (net present value). If NPV > 0, investment is attractive. Example: Real estate investment costs $200,000 today, generates $15,000 annual rent for 20 years. At 6% discount rate, PV = $15,000 × 11.47 (present value factor) = $172,050. NPV = $172,050 − $200,000 = −$27,950. Negative NPV means it's not worthwhile at 6% required return. At 5% discount rate, NPV becomes positive ($20,000+), making it attractive. NPV analysis reveals which investments meet your required return.",
  },
  {
    question: "How does inflation adjustment work with present value?",
    answer:
      "Use real (inflation-adjusted) discount rate for clarity. If inflation is 3% and nominal required return is 7%, real return is roughly 4% (7% − 3%). Calculate future cash flows in today's dollars, then discount at real rate. Alternatively, project cash flows in future dollars and discount at nominal rate — both methods yield identical results if consistent. Example: $50,000 cost today to receive $60,000 in 5 years. Nominal rate 6%, inflation 2%, real rate 4%: PV = $60,000 / (1.04)⁵ = $49,355 (in today's dollars). Nominal calculation: PV = $60,000 / (1.06)⁵ = $44,896 in today's dollars. First method uses future dollars; second uses today's dollars. For clarity in long-term analysis, use real rates and today's dollars.",
  },
  {
    question: "How is present value used in loan and bond valuation?",
    answer:
      "Bond value is PV of coupon payments plus principal repayment. A $1,000 bond paying 5% coupon ($50 annually) for 10 years, discounted at current 6% market rate: PV = $50 × [1 − (1.06)^−10 / 0.06] + $1,000 / (1.06)¹⁰ = $926. Bond prices inverse to interest rates: if market rates rise above coupon (6% > 5%), bond value declines. Loan payments use similar logic. A $300,000 mortgage at 5% for 30 years (360 months): monthly payment = $300,000 / [1 − (1 + 0.00417)^−360] / 0.00417 = $1,610. Present value calculations reveal fair loan pricing and bond valuations. Understanding PV prevents overpaying for bonds or undervaluing loans.",
  },
];

export const FOUR_OH_ONE_K_FAQS: FAQ[] = [
  {
    question: "What is a 401(k) and how does employer matching work?",
    answer:
      "A 401(k) is an employer-sponsored retirement plan allowing employees to contribute pre-tax salary (up to $23,500 in 2024). Employers often match contributions, typically 50-100% of the first 3-6% contributed. For example, contribute 3% of $60,000 ($1,800), employer matches 100% ($1,800), totaling $3,600 annual savings. Employer matching is free money — not capturing it is costly. After capturing the full match, consider additional contributions (up to $23,500 limit). Pre-tax contributions reduce current taxes; the IRS counts them toward combined traditional IRA + 401(k) limit. Withdrawals before age 59.5 incur 10% penalty plus income tax. At 67, annual draws should start (Required Minimum Distributions). 401(k)s are the most tax-efficient retirement vehicle for most workers.",
  },
  {
    question: "How should I allocate 401(k) investments among options?",
    answer:
      "Allocate based on age and risk tolerance using age-based rules: subtract your age from 100 to get stock percentage (age 30: 70% stocks, 30% bonds). More aggressive: 110 − age (age 30: 80% stocks). This gradually increases bond allocation approaching retirement. Diversify within stocks: 60% US, 40% international. Within bonds: 70% intermediate, 30% short-term. Use low-cost index funds when available (0.05-0.20% fees) rather than actively managed funds (0.5-1% fees). Rebalance annually to maintain target allocation. Avoid cash holdings (earning nothing); avoid over-concentrated single-stock holdings. Target-date funds auto-adjust allocation based on retirement date (simple approach). Review allocation when major life changes occur (job change, salary increase, debt payoff).",
  },
  {
    question: "What is the difference between traditional and Roth 401(k)?",
    answer:
      "Traditional 401(k): contribute pre-tax, reducing current income taxes; pay taxes on withdrawals in retirement. Roth 401(k): contribute after-tax; withdrawals in retirement are tax-free. For high earners, Roth limits apply ($161,000 single, $253,000 married in 2024); traditional has no income limits. Choose Roth if expecting high retirement tax brackets or high future income; choose traditional if in high tax bracket now and expect lower taxes in retirement. Many advisors suggest split contributions: 50% traditional, 50% Roth for tax diversification. Roth conversions (converting traditional to Roth, paying taxes now) are possible but trigger immediate taxes. Most young workers benefit from Roth; older workers benefit from traditional.",
  },
  {
    question: "How much should I contribute to maximize retirement readiness?",
    answer:
      "Contribute at least enough to capture full employer match (free money). Then aim for 10-15% of gross income to retirement accounts (401(k) + IRA combined). For a $60,000 salary, this is $6,000-$9,000 annually. If 15% is unaffordable initially, start with 3-5%, increasing by 1% annually with raises. Max out contributions ($23,500 traditional/Roth 401(k), $7,000 IRA) if possible. High-income earners can also use backdoor Roth and mega backdoor Roth for additional tax-advantaged savings. Use retirement calculators to model whether contribution levels support desired retirement lifestyle. Early contributors (age 25) need smaller contributions than late starters (age 45) due to compounding time value. Starting early is the single most powerful factor.",
  },
  {
    question: "What happens to my 401(k) if I change jobs?",
    answer:
      "You own the 401(k) balance; the employer doesn't. Leave it in the old plan (if minimum balance met, usually $5,000+), roll over to new employer's 401(k), or convert to an IRA. Rollovers preserve tax-deferred status and avoid penalties. Key points: same-trustee transfers avoid taxes and penalties; direct rollovers to new plans/IRAs are safest. Cashing out incurs 20% withholding plus 10% penalty (before age 59.5) plus income taxes. A $50,000 balance cashed out might net only $28,000 after 20% withholding + 10% penalty + 22% income tax (~$38,000 total tax hit). IRAs offer more investment choices (often lower fees) than 401(k)s. Don't leave old 401(k)s scattered across old employers; consolidate to IRAs for easier management. If changing jobs frequently, IRA consolidation is critical.",
  },
];

export const APR_FAQS: FAQ[] = [
  {
    question: "What does APR mean and how does it differ from interest rate?",
    answer:
      "APR (Annual Percentage Rate) includes the interest rate plus fees and other costs expressed as an annual rate. Interest rate is only the cost of borrowing. For example, a loan with 5% interest but 1% origination fee equals roughly 6% APR. APR provides a more complete cost picture and is useful for comparing loans. Credit card APRs don't include fees because there are no origination fees, so APR and interest rate are similar. Mortgage APRs include origination points and closing costs.",
  },
  {
    question: "How is APR calculated on credit cards and loans?",
    answer:
      "For credit cards, APR is calculated from the daily balance method. If your balance is $5,000 and APR is 18%, you pay roughly $75/month in interest ($5,000 × 0.18 / 12). For loans, APR accounts for the interest rate, origination fees, and points. A $200,000 mortgage at 5% interest with a 1% origination fee ($2,000) and $1,500 in closing costs totals $3,500 in fees, effectively increasing the interest rate by roughly 0.3%, making the APR about 5.3%.",
  },
  {
    question: "Why is APR important for comparing loans?",
    answer:
      "APR allows fair comparison between loans with different fee structures. Loan A might advertise 4% interest but charge $5,000 in fees; Loan B offers 4.2% with $1,000 in fees. Comparing APRs reveals total costs. Over 30 years on a $300,000 mortgage, even 0.2% APR difference equals roughly $30,000 in total interest. Always compare APRs, not just advertised rates, to find the best deal.",
  },
  {
    question: "Can I reduce my APR after getting a loan?",
    answer:
      "For existing loans, you can refinance to a new loan with a lower APR if rates have dropped or your credit score improved. For credit cards, you can request a lower APR from your issuer (especially if you have good credit and payment history), though approval isn't guaranteed. Building excellent credit (740+) and shopping rates across multiple lenders during application are the best strategies to secure lower APRs.",
  },
];

export const BOND_FAQS: FAQ[] = [
  {
    question: "What is a bond and how do I make money from it?",
    answer:
      "A bond is a fixed-income investment where you lend money to a company or government and receive regular interest payments (coupon) plus principal repayment at maturity. A $1,000 bond paying 5% annual interest ($50/year) for 10 years returns $50 yearly plus $1,000 at maturity. You profit from interest income. You can also profit if you sell before maturity at a higher price (if interest rates fall, older bonds paying higher rates become more valuable).",
  },
  {
    question: "What is the difference between bond price and yield?",
    answer:
      "Bond price is what you pay to buy a bond (may be above or below $1,000 face value). Yield is the actual return you earn. If you buy a $1,000 bond paying $50/year (5% coupon) for $950, your yield is $50 / $950 = 5.26%. Bond prices and yields move inversely: when bond prices fall, yields rise (and vice versa). Understanding this relationship is critical for valuing bonds in a changing interest rate environment.",
  },
  {
    question: "Are bonds safer than stocks?",
    answer:
      "Bonds are generally less risky than stocks because you receive fixed payments and get your principal back (barring default). Government bonds (Treasury, municipal) are very safe; corporate bonds depend on company stability. However, bonds offer lower returns (~4-5% currently) versus stocks (~8-10% long-term). For conservative investors or those near retirement, bonds reduce portfolio volatility. A balanced portfolio typically includes both stocks (growth) and bonds (stability).",
  },
  {
    question: "What happens to bonds when interest rates rise?",
    answer:
      "When interest rates rise, newly issued bonds offer higher coupon payments, making older bonds paying lower rates less attractive. Older bond prices fall. If you hold to maturity, you get par value regardless, so rising rates only matter if you sell early. But if you need cash before maturity, rising rates hurt you. This is why bond investors watch the Federal Reserve's interest rate decisions closely.",
  },
];

export const CAGR_FAQS: FAQ[] = [
  {
    question: "What is CAGR and how do I calculate it?",
    answer:
      "CAGR (Compound Annual Growth Rate) measures the average annual growth rate of an investment over multiple years, smoothing out volatility. Formula: <strong>CAGR = (Ending Value / Beginning Value) ^ (1 / Number of Years) − 1</strong>. Example: Investment grows from $10,000 to $20,000 in 5 years: CAGR = ($20,000 / $10,000) ^ (1/5) − 1 = 1.149 − 1 = 14.9% annual return. CAGR assumes reinvestment of gains; it's a single metric showing average annual performance.",
  },
  {
    question: "Why is CAGR useful for comparing investments?",
    answer:
      "CAGR simplifies comparison between investments with different time periods and volatility. Investment A: $10,000 → $30,000 in 10 years (CAGR 11.6%). Investment B: $10,000 → $25,000 in 8 years (CAGR 12.7%). CAGR shows B grew faster, even though A's ending value is higher. CAGR accounts for time, making fair comparisons across different horizons possible.",
  },
  {
    question: "What's a good CAGR for stocks and bonds?",
    answer:
      "Long-term stock market returns average 8-10% CAGR. Bonds average 3-5% CAGR. A well-diversified portfolio (60% stocks, 40% bonds) targets 6-7% CAGR. Individual investments vary widely: a fast-growing tech stock might achieve 20%+ CAGR; value stocks might achieve 5% CAGR. Past CAGR doesn't guarantee future performance. Focus on realistic expectations based on asset type rather than hoping for exceptional CAGR.",
  },
  {
    question: "How does CAGR differ from average annual return?",
    answer:
      "Average annual return is the simple mean of yearly returns; CAGR accounts for compounding and time value. An investment returning +50%, −30%, +20%, +10% over 4 years has average annual return of 12.5% but CAGR of 9.2%. CAGR is more accurate because it shows the single annual rate needed to achieve the ending value from the beginning value through compounding.",
  },
];

export const CD_FAQS: FAQ[] = [
  {
    question: "What is a CD and how do I earn money from it?",
    answer:
      "A CD (Certificate of Deposit) is a savings product where you deposit money for a fixed term (3 months to 5+ years) at a guaranteed interest rate, higher than regular savings accounts. You earn interest monthly, quarterly, or at maturity. A $10,000 CD at 4.5% for 1 year earns $450 in interest. Early withdrawal typically incurs penalties. CDs are FDIC-insured up to $250,000, making them very safe, though returns are modest compared to stocks.",
  },
  {
    question: "Should I choose a short-term or long-term CD?",
    answer:
      "Short-term CDs (3-12 months) offer lower rates but provide flexibility if you need funds soon. Long-term CDs (3-5 years) offer higher rates but lock money away longer. If interest rates are rising, choose short-term CDs to reinvest at higher rates soon. If rates are falling or stable, long-term CDs lock in high rates. Consider your timeline: emergency funds shouldn't go into long-term CDs; retirement savings can.",
  },
  {
    question: "What is a CD ladder and why use one?",
    answer:
      "A CD ladder spreads money across CDs with staggered maturity dates. Buy $5,000 CDs maturing in 1, 2, 3, 4, and 5 years. Each year, one CD matures, giving you access to funds while most money stays in higher-yielding longer-term CDs. This balances liquidity (access to funds) with higher rates. On a $25,000 investment, a ladder might average 4.2% rate across all terms while pure 1-year CDs earn only 3.8%.",
  },
  {
    question: "Are CDs better than high-yield savings accounts?",
    answer:
      "CDs currently offer 4-5% rates (locked in) while HYSAs offer similar 4-5% rates (variable, adjustable daily). The trade-off: CDs lock money away with early withdrawal penalties; HYSAs provide flexibility. For short-term funds (under 1 year) or if you want liquidity, HYSAs win. For long-term funds you won't touch, CD rates lock in — if rates decline, you're protected.",
  },
];

export const CAR_LEASE_FAQS: FAQ[] = [
  {
    question: "What is car leasing and how does it differ from buying?",
    answer:
      "Leasing is renting a car for 2-4 years; you make monthly payments but don't own the vehicle. Buying means taking out an auto loan or paying cash; you own the car and keep it as long as you want. Leasing advantages: lower monthly payments, no repair costs (warranty included), always drive new cars. Leasing disadvantages: mileage limits (typically 12,000 miles/year), wear-and-tear charges, no ownership. For high-mileage drivers or those wanting to own vehicles long-term, buying wins. For those wanting new cars every 3 years with minimal hassle, leasing wins.",
  },
  {
    question: "What are typical lease costs and how are they calculated?",
    answer:
      "Lease payments depend on vehicle cost, residual value, interest rate (money factor), and lease term. A $35,000 car with 50% residual value over 36 months might lease for $350-450/month depending on interest rate and down payment. The formula: <strong>Monthly Payment ≈ (Vehicle Cost − Residual Value) / Months + Interest</strong>. Factors affecting payment: vehicle choice, credit score (better credit = lower rates), down payment, mileage allowance, and local incentives.",
  },
  {
    question: "What are lease mileage limits and overage charges?",
    answer:
      "Standard leases include 10,000-15,000 miles/year (30,000-45,000 total for 3-year lease). Excess mileage typically costs $0.15-$0.30 per mile. Exceeding by 10,000 miles adds $1,500-$3,000 to your final bill. If you drive 15,000 miles/year, buy a vehicle instead; leasing will cost significantly more. Some leases allow purchasing additional miles upfront at a discount, protecting yourself if you drive more.",
  },
  {
    question: "What happens at the end of a car lease?",
    answer:
      "You return the vehicle to the dealership. The lessor inspects it for excess wear-and-tear (dents, stains, mechanical issues) and charges you for damage beyond normal wear. You pay for excess mileage overage, disposition fee (~$400), and any outstanding end-of-lease charges. Or, you can purchase the car at a predetermined residual value. Read your lease agreement to understand your responsibilities before returning.",
  },
];

export const COMMISSION_FAQS: FAQ[] = [
  {
    question: "How is sales commission typically calculated?",
    answer:
      "Commission is usually a percentage of sales revenue. A common structure: 5% commission on all sales, or tiered (5% up to $50,000 in sales, 7% from $50,001-$100,000, 10% above $100,000). Example: if you sell $80,000 worth of products at tiered 5-7-10% rates, commission = ($50,000 × 5%) + ($30,000 × 7%) = $2,500 + $2,100 = $4,600. Some commission structures include draws (monthly advances against future commission) or bonuses for exceeding targets.",
  },
  {
    question: "What is the difference between gross and net commission?",
    answer:
      "Gross commission is your full earning before deductions (taxes, benefits, sales support fees). Net commission is what you receive after deductions. If gross commission is $4,600 and taxes/fees total $1,150, net is $3,450. Understanding the difference helps you budget accurately. Always clarify whether quoted commission rates are gross or net, and what deductions apply.",
  },
  {
    question: "How do commission clawbacks and chargebacks work?",
    answer:
      "Some employers deduct commission if customers return products or cancel services within a period (30-90 days). If you earned $4,600 commission but 20% of sales were returned, you might lose $920 in clawback. This protects employers from fast-talking salespeople pushing unfit products. Review your contract carefully; clawbacks can significantly reduce your effective earnings.",
  },
  {
    question: "What's a realistic commission earning target?",
    answer:
      "Commission earnings vary widely by industry and performance. Entry-level: 5-15% of salary from commission. Experienced high performers: 50-100%+ of salary from commission. In tech/SaaS, commissions average 10-30% of base salary. In car sales, commission can be 30-50%+ of earnings. Set realistic targets based on industry benchmarks and your performance track record. Top 10% performers often earn 2-3x more commission than average performers in the same role.",
  },
];

export const DEBT_TO_INCOME_FAQS: FAQ[] = [
  {
    question: "What is debt-to-income ratio and why do lenders care?",
    answer:
      "Debt-to-income (DTI) ratio is your monthly debt payments divided by gross monthly income. Formula: <strong>DTI = Total Monthly Debt Payments / Gross Monthly Income</strong>. Example: $3,000 monthly debt payments / $6,000 gross income = 50% DTI. Lenders use DTI to assess your ability to take on new debt. Most lenders prefer DTI below 36-43%; above 50% makes borrowing difficult. A low DTI shows you manage debt responsibly and have room to borrow more.",
  },
  {
    question: "How do I calculate my debt-to-income ratio?",
    answer:
      "Sum all monthly debt obligations: mortgage/rent (if counting toward DTI), auto loans, student loans, credit cards (minimum payments), personal loans, child support. Divide by gross monthly income (before taxes). Example: $1,500 mortgage + $400 car loan + $300 student loan + $150 minimum credit card payment = $2,350 total debt. Gross income is $6,000/month. DTI = $2,350 / $6,000 = 39.2%. Some lenders include rent; others don't — clarify with your lender.",
  },
  {
    question: "How can I improve my debt-to-income ratio?",
    answer:
      "Lower DTI by paying down debt or increasing income. Paying off a $10,000 credit card balance reduces monthly debt payments (assuming $250/month minimum) by $250, instantly lowering DTI by 4-5%. Increasing income by 10% lowers DTI proportionally. Combine both: pay $500/month extra toward debt while seeking a raise. Most impactful: eliminate high-interest debt (credit cards, personal loans) that consume significant monthly payments. DTI improvement typically takes 6-24 months depending on debt amount.",
  },
  {
    question: "What DTI ratio qualifies me for a mortgage?",
    answer:
      "Most mortgage lenders require front-end DTI (mortgage payment only) below 28% and back-end DTI (all debt including mortgage) below 36-43%. On $6,000 gross monthly income: maximum mortgage payment is $1,680 (28%) front-end, with total debt payments (including mortgage) below $2,160-$2,580 (36-43%) back-end. Borrowers with excellent credit and significant savings might qualify at higher ratios (45-50%). Improving your DTI to 36% or below strengthens mortgage applications.",
  },
];

export const DEPRECIATION_FAQS: FAQ[] = [
  {
    question: "What is depreciation and how is it calculated?",
    answer:
      "Depreciation is the decline in an asset's value over time. For vehicles: a $30,000 car depreciates to $24,000 after 1 year (20% depreciation). Formula: <strong>Depreciation = (Beginning Value − Ending Value) / Beginning Value</strong>. Cars typically depreciate 15-20% year 1, then 10-15% annually thereafter. For business assets, depreciation is an accounting deduction spreading an asset's cost over its useful life. Example: $10,000 equipment over 5 years = $2,000/year depreciation deduction.",
  },
  {
    question: "How much do cars depreciate in the first year?",
    answer:
      "Most vehicles lose 20-30% of value in the first year. A $30,000 new car is worth roughly $21,000-$24,000 after 1 year. Used cars (already post-first-year) depreciate slower: 10-15% annually for years 2-5. Luxury vehicles depreciate faster (30-40% year 1); reliable brands (Toyota, Honda) depreciate slower (15-20% year 1). This is why used cars are typically better values — you avoid the steepest depreciation.",
  },
  {
    question: "Can I deduct vehicle depreciation on my taxes?",
    answer:
      "If you use a vehicle for business, you can deduct depreciation OR claim the standard mileage rate ($0.67/mile in 2024). Depreciation deduction method: calculate depreciation annually using MACRS (Modified Accelerated Cost Recovery System) over 5 years, claiming a portion yearly. Example: $25,000 business vehicle, year 1 depreciation deduction is $5,000. Claiming standard mileage is usually simpler for most small business owners, but depreciation can benefit owners with expensive vehicles. Consult a tax professional to determine the better approach.",
  },
  {
    question: "How does depreciation affect resale value?",
    answer:
      "Depreciation directly impacts resale value. A car bought for $30,000 that depreciates 20% year 1, then 10% annually, is worth: Year 1: $24,000, Year 2: $21,600, Year 3: $19,440, Year 5: $15,693. Understanding depreciation curves helps you time vehicle sales optimally. Selling before year 3 preserves more value; selling after year 5 means accepting steep losses. Maintenance, mileage, and condition also affect resale value.",
  },
];

export const DIVIDEND_FAQS: FAQ[] = [
  {
    question: "What is a dividend and how do I earn it?",
    answer:
      "A dividend is a cash payment companies distribute to shareholders from profits. If you own 100 shares of a company paying $2 annual dividend, you receive $200/year. Dividends are paid quarterly, semi-annually, or annually. You earn dividends simply by holding the stock on the ex-dividend date. Dividend yield = annual dividend / stock price. A $50 stock paying $2 annual dividend has 4% yield. Dividend-paying stocks tend to be mature, stable companies (utilities, consumer staples, banks).",
  },
  {
    question: "Are dividends taxed differently than capital gains?",
    answer:
      "Qualified dividends (held for 60+ days around ex-dividend date) are taxed at preferential long-term capital gains rates: 0%, 15%, or 20% depending on income. Ordinary dividends (non-qualifying) are taxed as regular income (up to 37%). Capital gains (selling at a profit) are taxed when you sell. For tax efficiency, hold dividend stocks in tax-advantaged accounts (401(k), IRA) or prioritize qualified dividend stocks in taxable accounts. The tax difference between qualified and ordinary dividends can be significant.",
  },
  {
    question: "What is dividend reinvestment and should I use it?",
    answer:
      "Dividend reinvestment automatically buys additional shares using your dividend payments instead of taking cash. A $2 dividend on a $50 stock buys 0.04 additional shares without commission. Over decades, reinvestment dramatically compounds wealth through purchased shares earning their own dividends. Most investors benefit from reinvestment if they have long investment horizons (10+ years). You can disable reinvestment to take cash if you need income.",
  },
  {
    question: "What's the difference between dividend yield and total return?",
    answer:
      "Dividend yield is only the cash return (dividends / price). A stock yielding 4% paid only in dividends has 4% total return if price stays flat. Total return includes both dividend yield and stock price appreciation. A 4% dividend-yielding stock that appreciates 6% has 10% total return. High dividend yields can signal value (attractive price) or risk (company cutting dividends). Always consider both yield and price appreciation potential for investment decisions.",
  },
];

export const FIRE_FAQS: FAQ[] = [
  {
    question: "What is FIRE and how much money do I need?",
    answer:
      "FIRE (Financial Independence Retire Early) is achieving financial independence to stop working, typically retiring before age 55-60. The 4% rule states you can spend 4% of investments annually without depleting principal over 30+ years. To retire on $50,000/year, you need roughly $1.25 million invested (50,000 / 0.04). For $100,000/year, $2.5 million. This assumes you've paid off debts and have health insurance. FIRE requires aggressive saving (50-70% of income) for 10-30 years depending on starting salary and target lifestyle.",
  },
  {
    question: "How do I achieve FIRE faster?",
    answer:
      "Maximize income growth through career advancement and side income. Minimize expenses relentlessly: housing (25-30% of income), transport (5-10%), dining (5%), eliminate discretionary spending. Save aggressively (50-70% of income). Invest in low-cost index funds earning 7-8% annual returns. Live far below your means. Example: earning $80,000, spending $25,000/year, saving $55,000 annually at 7% returns reaches $1.25 million in ~12 years. Most FIRE success comes from high savings rate (expense control) rather than investment returns.",
  },
  {
    question: "Is FIRE realistic for average earners?",
    answer:
      "Yes, but timelines vary. High earners ($100,000+) can reach FIRE in 10-15 years with aggressive saving. Average earners ($50,000-$70,000) typically need 25-35 years. Very low earners face challenges due to basic living costs. The key is savings rate: if you save 50% of income, FIRE is achievable in 15-25 years across income levels. Geographic arbitrage (moving to lower cost-of-living areas) dramatically accelerates timelines. Some FIRE practitioners achieve it in 5-10 years through extreme saving (70%+) in high-income areas.",
  },
  {
    question: "What about healthcare before Medicare at 65?",
    answer:
      "Early retirees (retiring before 65) must secure health insurance. Options: buy ACA marketplace plans (subsidies available if income is low), continue employer coverage via COBRA (expensive, temporary), or work part-time for benefits. Many FIRE plans budget $8,000-$15,000/year for healthcare. Health Savings Accounts (HSAs) offer triple tax advantages and can fund healthcare expenses in retirement. Plan healthcare costs carefully — a medical emergency can devastate early retirement plans.",
  },
];

export const IRR_FAQS: FAQ[] = [
  {
    question: "What is IRR and how do I use it to evaluate investments?",
    answer:
      "IRR (Internal Rate of Return) is the discount rate making net present value (NPV) of an investment equal zero. It's the annualized return rate your investment earns. Example: invest $100,000 today, receive $30,000 at end of year 1, $40,000 at end of year 2, $50,000 at end of year 3. IRR calculation finds the single annual rate equating initial investment to future cash flows — in this example, roughly 7.7% IRR. Compare IRR to your required return: if IRR exceeds required return, investment is attractive.",
  },
  {
    question: "How is IRR calculated?",
    answer:
      "IRR uses trial-and-error or financial calculators/spreadsheets. Excel's IRR function: =IRR(range of cash flows, guess). List year 0 cash flow (−$100,000), year 1 ($30,000), year 2 ($40,000), year 3 ($50,000), then apply IRR function. IRR is the rate solving: 0 = −$100,000 + $30,000/(1+r) + $40,000/(1+r)² + $50,000/(1+r)³. Financial calculators and spreadsheets solve this instantly. Manual calculation is impractical.",
  },
  {
    question: "What's a good IRR for business investments?",
    answer:
      "Acceptable IRR depends on risk and alternatives. Safe investments (bonds): 3-5% IRR. Moderate risk (dividend stocks): 8-10% IRR. Growth stocks: 12-15%+ IRR. Business ventures: 15-30%+ IRR (higher risk). Real estate: 8-12% IRR (with leverage). Most investors require IRR exceeding 2-3% above their alternative (e.g., if bonds yield 4%, require 7-8% from stocks). Always compare IRRs of competing investments to allocate capital to highest-return projects.",
  },
  {
    question: "Why is IRR sometimes misleading?",
    answer:
      "IRR assumes cash flows reinvest at the IRR rate, which may not be realistic. Extremely high IRR projects might be unrealistic. Projects with different time horizons can have incomparable IRRs (a quick short-term project might show 25% IRR vs. 12% for a 20-year project, but total dollars earned might differ significantly). For comparing projects of different sizes and timelines, NPV (net present value) in dollar terms is often more informative than IRR percentages alone. Use IRR as one tool among several.",
  },
];

export const MUTUAL_FUND_FAQS: FAQ[] = [
  {
    question: "What is a mutual fund and how does it work?",
    answer:
      "A mutual fund pools money from many investors to buy a diversified portfolio of stocks, bonds, or other securities. You buy shares in the fund; the fund manager invests your money according to the fund's strategy (e.g., large-cap growth, dividend income, bond funds). Diversification reduces risk versus buying individual stocks. You earn returns through dividends, interest, and share price appreciation. Fees (expense ratios) typically range 0.05-1.5% annually, deducted automatically.",
  },
  {
    question: "What is the difference between active and index mutual funds?",
    answer:
      "Active funds employ managers trying to beat the market index through stock-picking, paying higher fees (0.5-2% expense ratios). Index funds passively track an index (S&P 500, Russell 2000) with minimal fees (0.03-0.20% expense ratios). Studies show index funds outperform 85-90% of active funds over 15+ years after fees. For most investors, low-cost index funds are superior to active funds. Active funds occasionally outperform short-term, but consistency is rare.",
  },
  {
    question: "Should I invest in mutual funds or individual stocks?",
    answer:
      "Mutual funds offer instant diversification and professional management (if active). Individual stocks require research and skill to achieve similar returns. For beginners, index mutual funds or ETFs (exchange-traded funds) are ideal — they provide diversification with minimal fees. Experienced investors might combine core index fund holdings with individual stock positions. Most investors achieve better results with diversified mutual funds than trying to pick winners.",
  },
  {
    question: "What are mutual fund loads and other fees?",
    answer:
      "Load is an upfront sales commission (typically 5-6%) charged when buying. No-load funds charge no upfront commission. Expense ratio (0.05-2%+) is the annual management fee. Back-end load is a redemption fee when selling. 12b-1 fees are marketing charges. Total fees significantly impact long-term returns: a 1% expense ratio fund earns ~$8,000 less per year on a $1 million investment versus a 0.05% fund. Always choose no-load funds with low expense ratios (below 0.25% for index funds).",
  },
];

export const NPV_FAQS: FAQ[] = [
  {
    question: "What is NPV and how do I calculate it?",
    answer:
      "NPV (Net Present Value) is the current value of expected future cash flows minus initial investment, accounting for time value of money. Formula: <strong>NPV = −Initial Investment + Σ(Cash Flow Year 1 / (1+r)¹) + (Cash Flow Year 2 / (1+r)²) + ...</strong>, where r is discount rate. Example: invest $100,000 today, receive $30,000 yearly for 5 years, discount rate 8%. NPV = −$100,000 + $30,000/1.08 + $30,000/1.08² + ... = $19,360. Positive NPV means investment exceeds required return; choose projects with positive NPV.",
  },
  {
    question: "Why is NPV important for investment decisions?",
    answer:
      "NPV accounts for time value of money and risk (through discount rate), providing the true value added by an investment. A project reporting $50,000 profit sounds good, but NPV reveals whether that profit exceeds opportunity cost. NPV in dollars is also easier to compare across projects: Project A (NPV $20,000) is better than Project B (NPV $15,000) regardless of percentages. For business capital budgeting, NPV is the gold standard decision tool.",
  },
  {
    question: "How do I choose the right discount rate?",
    answer:
      "Discount rate should reflect your required return or cost of capital. For personal investments, use rates reflecting available alternatives (savings 4%, bonds 5%, stocks 9%). For businesses, use weighted average cost of capital (WACC): cost of debt and equity weighted by capital structure. Conservative investors use higher discount rates (more pessimistic). Risky projects warrant higher rates (15-20%); safe projects lower rates (5-8%). Sensitivity analysis: calculate NPV at different rates to see impact.",
  },
  {
    question: "What does negative NPV mean and should I invest?",
    answer:
      "Negative NPV means the investment doesn't meet your required return; you'd be better off putting money in alternatives earning your discount rate. Example: NPV = −$5,000 means the investment underperforms by $5,000 versus available alternatives. Generally, avoid negative NPV projects unless strategic reasons exist (market entry, competitive defense). However, always verify your discount rate is accurate — using too high a rate artificially depresses NPV.",
  },
];

export const NET_INCOME_FAQS: FAQ[] = [
  {
    question: "What is net income and how is it calculated?",
    answer:
      "Net income (profit) is revenue minus all expenses: <strong>Net Income = Revenue − Cost of Goods Sold − Operating Expenses − Taxes − Interest</strong>. Example: business earns $100,000 revenue, COGS is $40,000, operating expenses $30,000, taxes $6,000, interest $2,000. Net income = $100,000 − $40,000 − $30,000 − $6,000 − $2,000 = $22,000. Net income is the bottom line showing profitability. For personal taxes, net income is adjusted gross income (AGI) minus deductions.",
  },
  {
    question: "What's the difference between gross and net income?",
    answer:
      "Gross income (for individuals): total earnings before deductions. Net income (take-home): earnings after taxes and deductions. On a $60,000 salary, gross is $60,000; net might be $44,000 after federal/state taxes, FICA, health insurance, 401(k). For businesses, gross income is revenue; net income is profit. Understanding both is critical for budgeting: you budget off net (what you actually receive), not gross.",
  },
  {
    question: "How do I increase my net income?",
    answer:
      "For individuals: negotiate higher salary, earn side income, reduce taxes through deductions/deferrals (401(k), HSA), or reduce expenses. A $5,000 annual deduction at 24% tax rate saves $1,200 in taxes (increasing net income). For businesses: increase revenue (pricing, sales volume), reduce expenses (efficiency, procurement), improve operations (labor productivity). Net income growth typically comes from 70% revenue increase, 30% expense reduction. Focus on highest-impact actions.",
  },
  {
    question: "What net income level is considered good?",
    answer:
      "For individuals: net income should cover all expenses plus allow 10-20% savings. Living on 70-80% of net income is healthy. For businesses: net profit margin (net income / revenue) of 5-10% is healthy (varies by industry). Retailers target 2-5%; tech companies target 20-30%. Trending net income growth (10-15% annually) indicates improving business health. Compare your net income to industry benchmarks and historical performance.",
  },
];

export const PAYBACK_PERIOD_FAQS: FAQ[] = [
  {
    question: "What is payback period and how do I calculate it?",
    answer:
      "Payback period is the time required for an investment to recover its initial cost through cash flows. Formula: <strong>Payback Period = Initial Investment / Average Annual Cash Flow</strong>. Example: invest $100,000, receive $25,000 annually. Payback = $100,000 / $25,000 = 4 years. With uneven cash flows, sum cumulative cash flows until reaching initial investment. Payback period is simple but ignores time value of money and cash flows after payback.",
  },
  {
    question: "What is a good payback period?",
    answer:
      "Acceptable payback periods vary by industry and risk tolerance. Manufacturing equipment: 3-5 years. Real estate: 5-10 years. Tech startups: 2-3 years (faster growth). Utility assets: 10+ years (stable, long-term). Shorter payback periods reduce risk; longer periods increase risk from market changes. A 2-year payback is generally safer than a 10-year payback for volatile investments. Always compare payback to project lifespan: a 4-year payback on equipment lasting 20 years is excellent.",
  },
  {
    question: "Why use payback period instead of NPV?",
    answer:
      "Payback period is simpler and emphasizes liquidity — how quickly you recover cash. It's useful for assessing risk: faster payback = lower risk. However, payback ignores time value of money and cash flows after payback (understating long-term value). NPV is more accurate for investment decisions. Use payback as a supplementary metric: a project must pass payback period threshold (e.g., under 5 years) and have positive NPV to be acceptable.",
  },
  {
    question: "What is discounted payback period?",
    answer:
      "Discounted payback period accounts for time value by discounting cash flows. Example: $100,000 investment, $25,000 annual cash flows at 8% discount rate. Year 1 discounted: $25,000/1.08 = $23,150. Year 2: $25,000/1.08² = $21,433. Continue until cumulative discounted cash flows equal $100,000. This takes longer (e.g., 5+ years vs. 4 years) than simple payback. Discounted payback is more conservative and realistic than simple payback for risky investments.",
  },
];

export const PENSION_FAQS: FAQ[] = [
  {
    question: "What is a pension and how does it work?",
    answer:
      "A pension is a retirement income plan where employers contribute on behalf of employees. At retirement (typically age 65), you receive monthly payments for life based on salary history and years of service. Formula: <strong>Annual Pension = (Final Average Salary × Years of Service) / 50</strong> (varies by plan). Example: final average salary $60,000, 30 years of service: pension = ($60,000 × 30) / 50 = $36,000/year. Pensions are increasingly rare; most employers now offer 401(k)s instead. Public sector (government, police, teachers) still offers pensions commonly.",
  },
  {
    question: "How is pension benefit calculated?",
    answer:
      "Three common formulas: (1) Defined Benefit (DB): percentage of final average salary times years of service; (2) Cash Balance: employer contributions credited annually plus interest; (3) Floor Offset: combination approach. DB plans (traditional pensions) provide guaranteed income. Most pension calculations use final average salary (last 3-5 working years). Years of service multiplier is typically 1.5-2.5% per year. A 30-year employee at 2% multiplier on $60,000 average salary earns $36,000 annual pension.",
  },
  {
    question: "Can I take my pension as a lump sum?",
    answer:
      "Many pension plans offer lump-sum options equal to the present value of your lifetime pension. If monthly pension is $3,000/month (36,000/year), lump sum might be $600,000-$800,000 depending on age and interest rates. Taking lump sum gives you control but responsibility: you must manage and invest it, and risk running out of money. Monthly pension guarantees income for life but offers no flexibility or inheritance. The choice depends on health, confidence in money management, and need for legacy.",
  },
  {
    question: "What happens to my pension if my employer goes bankrupt?",
    answer:
      "The Pension Benefit Guaranty Corporation (PBGC) insures most private pension plans. If your employer fails, PBGC takes over the pension, paying monthly benefits (maximum ~$5,000/month in 2024, varying by age). Benefits might be reduced if the plan is significantly underfunded. Public pensions (government, municipal) are usually funded by states and are more secure. Verify your plan's PBGC insurance status; nearly all plans are covered.",
  },
];

export const REAL_ESTATE_COMMISSION_FAQS: FAQ[] = [
  {
    question: "How much is a typical real estate commission?",
    answer:
      "Real estate commissions typically range 4-6% of sale price, usually split between buyer's and seller's agents (2-3% each). A $300,000 home sale at 5% commission = $15,000 total ($7,500 each side). Commissions are negotiable; high-value properties (500k+) often see 3-4% due to volume. Agents also split commission with their brokerage firms (40-50% to agent, 50-60% to firm). Commission is paid by seller; agents advocate for sellers but buyers also pay through price negotiation.",
  },
  {
    question: "Is real estate commission negotiable?",
    answer:
      "Yes, 6% is not mandatory. Sellers can negotiate lower rates with agents (4-5% possible), especially on high-value properties, quick sales, or with multiple properties. Offering lower commission (4%) attracts fewer agents but reduces your total cost. For a $300,000 sale, 4% instead of 6% saves $6,000. However, lower commissions might reduce agent motivation and marketing effort. Buyers can't typically negotiate agent commission; it's paid by seller regardless. Shop agents and negotiate before signing listing agreements.",
  },
  {
    question: "What do real estate agents do to earn their commission?",
    answer:
      "Agents list properties (photography, descriptions, MLS), show properties to buyers, negotiate offers, manage inspections and appraisals, coordinate closing. Top agents spend 30-50 hours+ on transactions. Commission compensates marketing, showing time, paperwork, and market knowledge. However, commission structure incentivizes speed (closing deals) over maximizing price. The best agents market aggressively to attract multiple offers, driving sale price up. Weak agents do minimal work. Quality varies significantly; interview multiple agents before choosing.",
  },
  {
    question: "Are there alternatives to traditional commission?",
    answer:
      "Yes: flat-fee models ($1,500-$5,000 fixed price), discount brokers (2-3% commission), buyer's agents negotiating separate fees, or for-sale-by-owner (FSBO, no commission). Flat fees work best for simple, quick sales. Discount brokers still provide full service. Some buyers hire buyers' agents at flat fees (not split with seller). FSBO eliminates agent commission but requires your marketing effort and negotiations. For most sellers, traditional agents are worth the commission due to access to buyer networks and negotiations expertise.",
  },
];

export const ROTH_IRA_FAQS: FAQ[] = [
  {
    question: "What is a Roth IRA and how does it differ from traditional?",
    answer:
      "Roth IRA: contribute after-tax, withdrawals in retirement are tax-free. Traditional IRA: contribute pre-tax (reducing current taxes), pay taxes on withdrawals. Roth income limits apply ($161,000 single, $253,000 married in 2024); traditional has no income limits. Roth is ideal for younger workers in lower tax brackets; traditional for higher earners wanting current tax breaks. With Roth, you pay taxes now at a lower rate than expected at retirement. With traditional, you defer taxes hoping to be in lower bracket at retirement.",
  },
  {
    question: "Can I withdraw from my Roth IRA before retirement?",
    answer:
      "You can withdraw contributions penalty-free at any time (you already paid taxes on them). Earnings have restrictions: withdraw before age 59½ without penalty only if: account open 5+ years and you're disabled, receiving SEPP (substantially equal periodic payments), paying qualified medical/education expenses, or first-time homebuyer ($10,000 lifetime). Early withdrawal of earnings incurs 10% penalty plus income taxes. Example: $50,000 contributions, $10,000 earnings, you withdraw $30,000 at age 50. $20,000 from contributions (penalty-free), $10,000 earnings (10% penalty + taxes).",
  },
  {
    question: "Should I convert a traditional IRA to Roth?",
    answer:
      "Roth conversion means rolling traditional IRA to Roth, paying income tax on the amount converted. Beneficial if: you expect higher taxes in retirement, income will be below Roth limits soon, you can pay tax from non-IRA funds. Drawback: you owe taxes immediately. Example: convert $100,000 traditional IRA to Roth, owe $24,000 tax (24% bracket). At retirement, all growth is tax-free. Conversions are powerful for tax diversification and long-term wealth building. However, paying taxes upfront requires having cash outside the IRA.",
  },
  {
    question: "What is the backdoor Roth strategy?",
    answer:
      "Backdoor Roth allows high earners above Roth contribution limits to get money in via an indirect route. (1) Contribute to traditional IRA (non-deductible, since over income limit). (2) Immediately convert to Roth. (3) Pay tax only on earnings, minimal if any. Example: contribute $7,000 non-deductible to traditional IRA, immediately convert to Roth, owe taxes on minimal earnings (~$0-100 tax). This bypasses income limits but triggers 'pro-rata rule' if you hold other traditional IRAs — consult a tax professional.",
  },
];

export const STOCK_FAQS: FAQ[] = [
  {
    question: "What is a stock and how do I profit from owning it?",
    answer:
      "A stock is ownership in a company. You profit through dividends (cash distributions) and capital appreciation (price increase). Buy 100 shares at $50/share ($5,000), company pays $2/share dividend ($200/year), stock price rises to $60 (gain $1,000). Total return: $200 dividend + $1,000 capital gain = $1,200 (24% return). Long-term wealth comes from compounding dividend and capital gains. Stocks are riskier than bonds but historically return 8-10% annually over 20+ years.",
  },
  {
    question: "How do I decide which stocks to buy?",
    answer:
      "Evaluate: P/E ratio (price relative to earnings, lower is cheaper), dividend yield (income), debt levels (financial strength), growth prospects, management quality. Compare P/E to sector average and historical levels. Screen for dividend payers in stable sectors (utilities, consumer staples). Read quarterly earnings reports and industry news. For beginners, index funds eliminate stock-picking challenges. Experienced investors use fundamental analysis (financial statements) and technical analysis (price charts) to identify opportunities. Research thoroughly before investing.",
  },
  {
    question: "Should I invest in stocks or bonds?",
    answer:
      "Stocks offer higher long-term returns (8-10%) but volatility; bonds offer stability (3-5% returns). Age-based rule: (100 − age) = stock percentage. Age 30: 70% stocks, 30% bonds. Age 60: 40% stocks, 60% bonds. Young investors tolerate volatility for growth; older investors prioritize stability. A balanced portfolio (60/40 stocks/bonds) averages 6-7% returns with moderate volatility. High risk tolerance and long horizons favor stocks; low risk tolerance or shorter horizons favor bonds.",
  },
  {
    question: "What is market risk and how do I minimize it?",
    answer:
      "Market risk (systematic risk) is inherent to stock market investing — you can't eliminate it, only manage it through diversification. Own 20-30+ stocks across sectors or use index funds (instant diversification). Diversification reduces company-specific risk (unsystematic) but not market risk. To minimize overall portfolio risk: hold bonds (lower correlation to stocks), rebalance annually, maintain emergency fund, avoid overconcentration in any stock or sector. Diversified portfolio with long time horizon (20+ years) minimizes volatility impact.",
  },
];

export const TAKE_HOME_PAY_FAQS: FAQ[] = [
  {
    question: "How is take-home pay calculated?",
    answer:
      "Take-home pay = Gross Pay − Federal Tax − State Tax − FICA (Social Security + Medicare) − 401(k) − Health Insurance − Other Deductions. Example: $5,000 monthly gross, $780 federal tax, $200 state tax, $382 FICA, $500 401(k), $200 health insurance = $2,938 take-home. Your pay stub itemizes all deductions. Understanding this breakdown helps you budget accurately and identify opportunities to increase take-home (adjust W-4, reduce deductions, negotiate salary increases).",
  },
  {
    question: "Why is my take-home pay less than expected?",
    answer:
      "Taxes and deductions reduce gross pay significantly. On a $60,000 annual salary, federal/state taxes might consume 22-28%, FICA 7.65%, 401(k) 5%, and health insurance 5%, totaling 40-45% reduction to take-home (~$33,000-$36,000). This is normal. If take-home is lower than expected, check: W-4 withholding (too many claimed dependents?), deductions (are you over-withholding?), 401(k) contribution rate (is it too high?), health insurance premiums. Use the IRS Withholding Calculator to optimize W-4.",
  },
  {
    question: "Can I increase my take-home pay without a raise?",
    answer:
      "Yes, through tax optimization: claim correct allowances on W-4 (reduce overwithholding), maximize 401(k) contributions (pre-tax), contribute to HSA (pre-tax), itemize deductions if beneficial. Increasing pre-tax contributions (401(k), HSA) reduces take-home slightly but saves taxes. Adjusting W-4 to reduce withholding increases paychecks immediately (no tax debt if correct). A simple W-4 adjustment can increase take-home by $50-150/month. For larger gains, negotiate salary increases or develop side income.",
  },
  {
    question: "What take-home pay should I plan my budget on?",
    answer:
      "Always budget based on net (take-home) pay, not gross. If gross is $60,000 and take-home is $3,500/month, budget the $3,500. Many people mistakenly budget on gross, creating deficits. Allocate take-home using the 50/30/20 rule: 50% needs, 30% wants, 20% savings/debt. On $3,500 take-home: $1,750 needs, $1,050 wants, $700 savings. This ensures you live within actual available income, avoid deficits, and build savings.",
  },
];

export const WACC_FAQS: FAQ[] = [
  {
    question: "What is WACC and why does it matter?",
    answer:
      "WACC (Weighted Average Cost of Capital) is the average rate a company pays to finance its assets using debt and equity. Formula: <strong>WACC = (E/V × Cost of Equity) + (D/V × Cost of Debt × (1 − Tax Rate))</strong>, where E is equity value, D is debt value, V is total value. Example: company with $800M equity, $200M debt. Cost of equity 10%, cost of debt 6%, tax rate 25%. WACC = (80% × 10%) + (20% × 6% × 0.75) = 8% + 0.9% = 8.9%. WACC is the minimum return company must earn to satisfy investors. Projects must exceed WACC to create value.",
  },
  {
    question: "How do I calculate cost of equity?",
    answer:
      "Cost of equity is the return equity investors expect. Common method: Capital Asset Pricing Model (CAPM): <strong>Cost of Equity = Risk-Free Rate + Beta × (Market Risk Premium)</strong>. Example: risk-free rate (Treasury yield) 3%, stock market average excess return 6%, company beta 1.2. Cost of Equity = 3% + (1.2 × 6%) = 3% + 7.2% = 10.2%. Beta measures stock volatility relative to market: beta 1.0 = market average risk, above 1.0 = higher risk, below 1.0 = lower risk. Calculating cost of equity requires estimates; small changes significantly impact WACC.",
  },
  {
    question: "How do I use WACC to evaluate projects?",
    answer:
      "Calculate project NPV using WACC as discount rate. If project NPV (discounted at WACC) is positive, it creates shareholder value. Example: WACC is 8.9%, project generates $100,000 annually for 10 years, initial investment $600,000. NPV using 8.9% discount rate = positive value (project acceptable). If NPV is negative, project destroys value. Companies compare competing projects' NPVs (all discounted at WACC) to allocate limited capital to highest-value projects.",
  },
  {
    question: "How does capital structure affect WACC?",
    answer:
      "Adding debt lowers WACC initially (debt is cheaper than equity due to interest tax deduction), but excessive debt increases financial risk, raising cost of equity and cost of debt, eventually raising WACC. Optimal WACC balances debt and equity to minimize overall cost. Too much debt (high leverage) increases bankruptcy risk, raising required returns. Companies typically target debt-to-equity ratios (30-50% debt) that minimize WACC. Understanding this balance helps companies make financing decisions.",
  },
];

