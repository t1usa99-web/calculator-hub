// Centralized FAQ content for high-priority calculators.
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.
//
// Writing guidelines:
// - Question phrasing should mirror "People Also Ask" queries
// - Answers are 80-150 words, direct and factual
// - Avoid marketing fluff; prioritize accuracy and practical value
// - HTML formatting permitted in answers (used with dangerouslySetInnerHTML)

import type { FAQ } from "./calculator-registry";

export const MORTGAGE_FAQS: FAQ[] = [
  {
    question: "How much house can I afford on a $60,000 salary?",
    answer:
      "Most lenders use the 28/36 rule: your mortgage payment shouldn't exceed 28% of your gross monthly income, and total debt payments shouldn't exceed 36%. On a $60,000 salary ($5,000/month gross), that means a maximum mortgage payment of about $1,400. Assuming a 30-year fixed loan at 7% interest with 20% down, that supports a home price of approximately $250,000–$280,000. Your actual affordability depends on your down payment, credit score, existing debts, property taxes, and homeowners insurance. Use our <a href='/home-affordability-calculator'>Home Affordability Calculator</a> for a more precise estimate tailored to your situation.",
  },
  {
    question: "What is the formula for calculating a mortgage payment?",
    answer:
      "The standard mortgage payment formula is: <strong>M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]</strong>, where M is the monthly payment, P is the loan principal (amount borrowed), r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly payments (loan term in years × 12). For example, a $300,000 loan at 7% annual interest over 30 years works out to: P=$300,000, r=0.07/12≈0.00583, n=360. Plugging in gives a monthly payment of about $1,996. This formula covers principal and interest only — taxes, insurance, and PMI add to your actual monthly cost.",
  },
  {
    question: "What's the difference between a fixed-rate and adjustable-rate mortgage?",
    answer:
      "A <strong>fixed-rate mortgage (FRM)</strong> locks in your interest rate for the entire loan term, meaning your principal and interest payment stays the same for 15, 20, or 30 years. An <strong>adjustable-rate mortgage (ARM)</strong> starts with a lower introductory rate for a fixed period (typically 5, 7, or 10 years), then adjusts periodically based on a market index. ARMs offer lower initial payments but carry the risk of rising rates later. Fixed-rate loans are ideal when rates are low or when you plan to stay in the home long-term. ARMs can save money if you plan to sell or refinance before the adjustment period begins.",
  },
  {
    question: "Should I pay extra on my mortgage or invest the money instead?",
    answer:
      "This depends on your mortgage rate versus expected investment returns. If your mortgage rate is 7% and you expect 8–10% returns from a diversified stock portfolio, investing typically wins mathematically — but only over long time horizons and with risk tolerance. Paying extra on the mortgage delivers a guaranteed return equal to your interest rate, reduces financial stress, and builds equity faster. Many financial planners recommend a balanced approach: invest enough to capture employer 401(k) matches, build an emergency fund, then decide between extra mortgage payments and additional investing based on your personal risk tolerance and financial goals.",
  },
  {
    question: "Is PMI required and how do I avoid it?",
    answer:
      "Private Mortgage Insurance (PMI) is typically required on conventional loans when your down payment is less than 20% of the home price. PMI protects the lender — not you — and costs between 0.3% and 1.5% of the loan amount annually. To avoid PMI, make a down payment of 20% or more. Other options include: piggyback loans (80-10-10 structure with a second loan), VA loans (no PMI for eligible veterans), lender-paid PMI bundled into a higher interest rate, or physician/professional loans. Once your loan-to-value ratio drops below 78% through payments or appreciation, PMI is automatically removed on conventional loans.",
  },
];

export const BMI_FAQS: FAQ[] = [
  {
    question: "What is a healthy BMI range?",
    answer:
      "The World Health Organization classifies BMI ranges as: <strong>Underweight</strong> (below 18.5), <strong>Normal weight</strong> (18.5–24.9), <strong>Overweight</strong> (25–29.9), and <strong>Obese</strong> (30 or above). A BMI between 18.5 and 24.9 is considered the healthy range for most adults. However, BMI is a screening tool, not a diagnostic one. It doesn't distinguish between muscle and fat, so athletes with high muscle mass may register as overweight despite being very healthy. Age, gender, ethnicity, and body composition all affect what's truly healthy for you. Always consult a healthcare provider for personalized health assessments.",
  },
  {
    question: "How do I calculate my BMI?",
    answer:
      "The formula is: <strong>BMI = weight (kg) / height (m)²</strong>. If you're using pounds and inches, multiply the result by 703: <strong>BMI = (weight in lbs / height in inches²) × 703</strong>. For example, a person who is 5'10\" (70 inches) and weighs 160 lbs: BMI = (160 / 70²) × 703 = (160 / 4,900) × 703 = 22.96. That falls in the normal range. Our calculator handles both metric and imperial units automatically. Remember that BMI is one data point among many — waist circumference, body fat percentage, and overall fitness level all provide additional context.",
  },
  {
    question: "Is BMI accurate for athletes and muscular people?",
    answer:
      "BMI has known limitations for highly muscular individuals. Because muscle is denser than fat, athletes, bodybuilders, and people who strength train often have a BMI in the overweight or obese range despite having very low body fat. Professional football players, weightlifters, and military personnel frequently score as overweight on BMI. For a more accurate fitness assessment, muscular individuals should use body fat percentage measurements (via calipers, DEXA scan, or bioelectrical impedance), waist-to-hip ratio, or waist-to-height ratio. BMI works best as a population-level screening tool, not an individual athletic assessment.",
  },
  {
    question: "Does BMI differ for men, women, and children?",
    answer:
      "For adults (20+), BMI categories are the same for men and women, though body composition typically differs — women generally carry more body fat than men at the same BMI. For children and teens (2–19), BMI is calculated the same way but interpreted differently using age- and sex-specific percentiles from CDC growth charts. A child's BMI is considered healthy between the 5th and 85th percentiles, at risk of overweight between 85th–95th, and overweight above the 95th percentile. Children's bodies change rapidly during growth, so a single reading matters less than trends over time.",
  },
  {
    question: "What are the health risks of high or low BMI?",
    answer:
      "A <strong>high BMI</strong> (overweight or obese) is associated with increased risk of type 2 diabetes, cardiovascular disease, high blood pressure, stroke, certain cancers, osteoarthritis, and sleep apnea. A <strong>low BMI</strong> (underweight) carries different risks: weakened immune function, osteoporosis, fertility issues, anemia, and nutrient deficiencies. However, BMI alone doesn't predict health outcomes. Factors like physical activity, diet quality, genetics, blood pressure, cholesterol levels, and metabolic health all play major roles. Someone with a BMI of 27 who exercises regularly and eats well may be healthier than someone with a BMI of 22 who is sedentary.",
  },
];

export const LOAN_FAQS: FAQ[] = [
  {
    question: "How is interest calculated on a loan?",
    answer:
      "Most installment loans (personal, auto, mortgage) use <strong>amortized interest</strong>. Each payment covers interest accrued on the remaining balance plus a portion of principal. Early in the loan, most of your payment goes to interest; later, more goes to principal. The formula for monthly payment is: <strong>M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]</strong>, where P is principal, r is monthly interest rate, and n is number of payments. Simple interest loans calculate interest only on the original principal. Credit cards use revolving interest, calculated daily on your outstanding balance, which compounds if you carry a balance.",
  },
  {
    question: "What's the difference between APR and interest rate?",
    answer:
      "The <strong>interest rate</strong> is the cost of borrowing the principal only. The <strong>APR (Annual Percentage Rate)</strong> includes the interest rate plus fees, origination charges, mortgage insurance, and other costs spread across the loan term. APR gives you a truer picture of the total cost of a loan. For example, two loans might both advertise a 6% interest rate, but one with higher fees could have an APR of 6.5% while the other is 6.1%. When comparing loan offers, always look at APR, not just the headline interest rate.",
  },
  {
    question: "How much total interest will I pay over the life of a loan?",
    answer:
      "Total interest equals the total amount paid over the life of the loan minus the original principal: <strong>Total Interest = (Monthly Payment × Number of Payments) − Principal</strong>. For a $30,000 car loan at 6% over 5 years, the monthly payment is $579.98, total paid is $34,799, so total interest is $4,799. Longer loan terms mean lower monthly payments but substantially more interest over time. A 30-year mortgage often costs more than double the home's price in total. Our calculator shows both the monthly payment and total interest upfront.",
  },
  {
    question: "Can I pay off a loan early to save money?",
    answer:
      "Yes, making extra principal payments reduces both your total interest and loan duration. Before paying extra, check for <strong>prepayment penalties</strong> — some loans (especially older mortgages and some auto loans) charge fees for early payoff. Most federal student loans, modern mortgages, and personal loans allow penalty-free prepayment. Strategies include rounding up each payment, making one extra payment per year, or applying windfalls (tax refunds, bonuses) directly to principal. Even small extra amounts add up: paying $50 extra monthly on a $200,000 30-year mortgage at 7% saves about $50,000 in interest and shortens the loan by 4+ years.",
  },
  {
    question: "How does my credit score affect my loan rate?",
    answer:
      "Credit score is one of the largest determinants of loan interest rates. Lenders tier borrowers into ranges like 760+, 700–759, 680–699, 660–679, 620–659, and below 620. The difference between excellent (760+) and fair (620–659) credit can be 2–4 percentage points on a mortgage and 10+ percentage points on a personal loan. On a $250,000 mortgage, that difference can add over $100,000 in interest over 30 years. Before applying for a large loan, check your credit report, dispute errors, pay down credit card balances (target under 30% utilization), and avoid opening new credit lines for 3–6 months.",
  },
];

export const COMPOUND_INTEREST_FAQS: FAQ[] = [
  {
    question: "What is compound interest and how does it work?",
    answer:
      "Compound interest is interest earned on both your original principal <strong>and</strong> on previously accumulated interest. Unlike simple interest (which only earns on the principal), compound interest creates exponential growth because your money earns interest on interest. The formula is <strong>A = P(1 + r/n)ⁿᵗ</strong>, where A is the final amount, P is principal, r is annual interest rate, n is times compounded per year, and t is years. Einstein reportedly called compound interest the 'eighth wonder of the world' — the longer your money compounds, the more dramatically it grows. $1,000 invested at 8% for 40 years becomes $21,725; for 50 years, $46,902.",
  },
  {
    question: "How often does interest compound?",
    answer:
      "Compounding frequency varies by account type. <strong>Daily</strong> compounding is common for savings accounts and credit cards (interest calculated and added each day). <strong>Monthly</strong> compounding applies to most mortgages and many CDs. <strong>Quarterly</strong> is typical for some bonds. <strong>Annually</strong> is used by some CDs and Treasury securities. More frequent compounding yields slightly higher returns — the difference between annual and daily compounding on a 5% rate is small but not zero. Over long periods, daily compounding on a $10,000 deposit at 5% for 30 years yields about $44,817 vs. $43,219 with annual compounding — a difference of roughly $1,600.",
  },
  {
    question: "What is the Rule of 72?",
    answer:
      "The Rule of 72 is a quick mental shortcut to estimate how long an investment takes to double at a given annual return rate. Divide 72 by your expected annual return percentage to get years to double. At 6% annual return, money doubles in 72/6 = 12 years. At 9%, it doubles in 8 years. At 12%, it doubles in 6 years. This is an approximation but remarkably accurate for rates between 4–12%. It's useful for quickly comparing investments: an 8% return doubles money in 9 years, while a 4% return takes 18 years — twice as long to achieve the same doubling.",
  },
  {
    question: "Simple interest vs compound interest — which is better?",
    answer:
      "<strong>For borrowing</strong>, simple interest is better (cheaper) because you don't pay interest on accrued interest. Some auto loans and short-term personal loans use simple interest. <strong>For investing and saving</strong>, compound interest is vastly better because your returns grow exponentially. Over short periods (a few months), the difference is minimal. Over long periods, it's enormous. $10,000 at 7% for 30 years earns $21,000 with simple interest but $66,123 with compound interest — more than triple. Always look for compound interest when investing, and prefer simple interest when borrowing.",
  },
  {
    question: "How can I maximize compound growth on my savings?",
    answer:
      "Four levers maximize compound growth: (1) <strong>Start early</strong> — time is the most powerful input. A 25-year-old investing $200/month until 65 at 7% ends with $525,000; starting at 35 yields only $245,000. (2) <strong>Invest consistently</strong> — regular contributions smooth out market volatility and accelerate growth. (3) <strong>Increase your rate of return</strong> — move from low-yield savings (0.5%) to diversified index funds (historical ~8–10%). (4) <strong>Minimize fees</strong> — a 1% expense ratio can cost you hundreds of thousands over a career. Even small increases in contribution amount, return rate, or time horizon lead to dramatically different outcomes.",
  },
];

export const CALORIE_FAQS: FAQ[] = [
  {
    question: "How many calories should I eat per day to lose weight?",
    answer:
      "To lose weight safely, create a calorie deficit of 500–750 calories per day below your TDEE (Total Daily Energy Expenditure), which produces about 1–1.5 pounds of weight loss per week. For most adults, this means eating between 1,500 and 2,000 calories daily, but the exact number depends on your age, sex, weight, height, and activity level. A sedentary woman weighing 150 lbs might need 1,500 calories for weight loss; an active man at 200 lbs might need 2,400. Never drop below 1,200 calories (women) or 1,500 calories (men) without medical supervision — very low calorie diets can trigger nutrient deficiencies and muscle loss.",
  },
  {
    question: "What is TDEE and how is it calculated?",
    answer:
      "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day. It's calculated by multiplying your BMR (Basal Metabolic Rate) by an activity multiplier: <strong>sedentary</strong> (little exercise): BMR × 1.2; <strong>lightly active</strong> (1–3 days/week): BMR × 1.375; <strong>moderately active</strong> (3–5 days): BMR × 1.55; <strong>very active</strong> (6–7 days): BMR × 1.725; <strong>extra active</strong> (physical job + training): BMR × 1.9. BMR is calculated using the Mifflin-St Jeor equation based on your weight, height, age, and sex. TDEE is your maintenance calorie level — eat below to lose weight, above to gain.",
  },
  {
    question: "How accurate are calorie calculators?",
    answer:
      "Calorie calculators provide estimates that are typically within 10–20% of your actual needs. They use standardized equations (Mifflin-St Jeor, Harris-Benedict, Katch-McArdle) based on averages that may not perfectly match your metabolism. Factors that cause variation include genetics, body composition (muscle burns more than fat), hormone levels (thyroid, insulin), medications, and non-exercise activity like fidgeting. Use calculator results as a starting point, track your weight and food intake for 2–3 weeks, and adjust by 100–200 calories if your weight isn't changing as expected. Bioelectrical impedance scales and DEXA scans provide more precise measurements.",
  },
  {
    question: "Should I count calories or macros?",
    answer:
      "Both approaches work — choose based on your goals. <strong>Counting calories</strong> is simpler: track total intake against your TDEE target. This works well for general weight management. <strong>Counting macros</strong> (protein, carbs, fat) adds precision by ensuring you're eating adequate protein (especially important for muscle preservation during weight loss), managing carbs for energy and recovery, and getting enough healthy fats. A common split is 40% carbs, 30% protein, 30% fat, but athletes and specific diets (keto, high-protein) use different ratios. Most people benefit from counting protein at minimum (aim for 0.7–1g per pound of body weight) while keeping total calories in check.",
  },
  {
    question: "Why am I not losing weight even in a calorie deficit?",
    answer:
      "Common reasons include: (1) <strong>Inaccurate tracking</strong> — people underestimate calories by 20–40% on average. Weigh food, don't eyeball portions. (2) <strong>Water retention</strong> masking fat loss, especially during the first weeks. (3) <strong>Adaptive thermodynamics</strong> — metabolism slows as you lose weight. (4) <strong>Not enough protein or strength training</strong>, causing muscle loss instead of fat loss. (5) <strong>Weekend overeating</strong> that erases weekday deficits. (6) <strong>Underlying medical issues</strong> (hypothyroidism, PCOS, hormonal imbalances) that require a doctor's evaluation. Track consistently for 3–4 weeks before adjusting, and remember that weight fluctuates daily by 2–5 pounds from water alone.",
  },
];

export const PERCENTAGE_FAQS: FAQ[] = [
  {
    question: "How do I calculate a percentage of a number?",
    answer:
      "To find a percentage of a number, convert the percentage to a decimal and multiply: <strong>X% of Y = (X/100) × Y</strong>. For example, 25% of 200 is (25/100) × 200 = 0.25 × 200 = 50. To calculate a tip of 18% on a $45 meal: 0.18 × 45 = $8.10. To find 15% off a $120 item: 0.15 × 120 = $18 discount, so the sale price is $102. Our calculator handles this automatically — enter the percentage and the number, and it computes the result instantly.",
  },
  {
    question: "How do I calculate percentage increase or decrease?",
    answer:
      "The formula for percentage change is: <strong>((New Value − Old Value) / Old Value) × 100</strong>. If a stock rises from $50 to $65, the percentage increase is ((65 − 50) / 50) × 100 = 30%. If a price drops from $80 to $60, the decrease is ((60 − 80) / 80) × 100 = −25%. A positive result indicates an increase, negative indicates a decrease. This formula is used everywhere: investment returns, price markups, salary raises, weight loss progress, and more. Always use the <em>original</em> value as the denominator — using the new value gives misleading results.",
  },
  {
    question: "What does 'X is what percent of Y' mean?",
    answer:
      "This question asks what fraction of Y is represented by X, expressed as a percentage. The formula is: <strong>(X / Y) × 100 = percentage</strong>. For example, 'What percent of 80 is 20?' → (20 / 80) × 100 = 25%. Another common form: 'I scored 42 out of 50 on a test — what's my percentage?' → (42 / 50) × 100 = 84%. This type of calculation is useful for test grades, survey results, market share analysis, and completion rates. It's the inverse of 'find X% of Y' and is essential for understanding proportions in everyday life.",
  },
  {
    question: "How do I convert a decimal or fraction to a percentage?",
    answer:
      "To convert a <strong>decimal to a percentage</strong>, multiply by 100 (move the decimal point two places right): 0.75 = 75%, 0.03 = 3%, 1.25 = 125%. To convert a <strong>fraction to a percentage</strong>, divide the numerator by the denominator, then multiply by 100: 3/4 = 0.75 = 75%. Common conversions to memorize: 1/2 = 50%, 1/3 ≈ 33.3%, 1/4 = 25%, 1/5 = 20%, 1/8 = 12.5%, 1/10 = 10%. Percentages greater than 100% are mathematically valid — a 200% increase means the value tripled.",
  },
  {
    question: "What is the difference between percentage and percentage points?",
    answer:
      "This is a common source of confusion. A <strong>percentage change</strong> is relative; <strong>percentage points</strong> are absolute. If interest rates rise from 5% to 7%, that's an increase of 2 <em>percentage points</em>, but a 40% <em>relative</em> increase (because (7 − 5) / 5 = 40%). News headlines often use these incorrectly. When a politician claims unemployment 'fell 2 percent' from 8% to 6%, the correct statement is 'fell 2 percentage points' or 'fell 25%' — the two mean very different things. Always clarify which measure you're using, especially in financial, political, or scientific contexts.",
  },
];

export const INVESTMENT_FAQS: FAQ[] = [
  {
    question: "What is a realistic rate of return for investments?",
    answer:
      "Historical average returns (1926–2024) vary by asset class: <strong>S&P 500</strong>: ~10% nominal, ~7% after inflation; <strong>Bonds (10-year Treasury)</strong>: ~5% nominal, ~2% after inflation; <strong>Cash/savings accounts</strong>: ~3% nominal, often negative after inflation; <strong>Diversified portfolio (60/40 stocks/bonds)</strong>: ~8% nominal. For planning purposes, most financial advisors recommend conservative estimates of 6–7% for long-term stock-heavy portfolios. Past performance doesn't guarantee future returns — during any given decade, actual returns can vary dramatically. The 2000s delivered nearly 0% average S&P 500 returns, while the 2010s delivered over 13%.",
  },
  {
    question: "How much should I invest each month?",
    answer:
      "A common rule is to invest <strong>15% of gross income</strong> for retirement, but the right amount depends on your age, goals, and existing savings. If you start at 25, 10–15% may be enough. Starting at 40 may require 20–25% to catch up. Prioritize in this order: (1) employer 401(k) match (free money), (2) high-interest debt payoff, (3) emergency fund of 3–6 months expenses, (4) max out tax-advantaged accounts (Roth IRA, 401(k)), (5) taxable brokerage. Even $100/month consistently invested over 40 years at 8% grows to $350,000+. The key is starting now, even with small amounts.",
  },
  {
    question: "What's the difference between stocks, bonds, and index funds?",
    answer:
      "<strong>Stocks</strong> represent ownership in individual companies — higher potential returns but also higher volatility. <strong>Bonds</strong> are loans to governments or corporations that pay fixed interest — lower returns but more stable. <strong>Index funds</strong> are baskets that track a market index (like the S&P 500), providing instant diversification across hundreds of companies at very low cost. Most individual investors benefit from low-cost index funds rather than picking individual stocks — research consistently shows 80%+ of actively managed funds underperform their index over 15+ years. A typical portfolio combines stock index funds (for growth) and bond index funds (for stability).",
  },
  {
    question: "What is dollar-cost averaging?",
    answer:
      "Dollar-cost averaging (DCA) means investing a fixed amount at regular intervals (weekly, monthly) regardless of market conditions. When prices are high, your fixed dollars buy fewer shares; when prices are low, they buy more. This smooths out purchase prices and removes the stress of market timing. Example: investing $500 monthly in an S&P 500 index fund for 30 years, regardless of market moves. DCA is how most 401(k) contributions work automatically. While lump-sum investing mathematically outperforms DCA in rising markets about 66% of the time, DCA is psychologically easier and protects against buying at a peak.",
  },
  {
    question: "How do taxes affect investment returns?",
    answer:
      "Taxes significantly impact returns, but tax-advantaged accounts can eliminate or defer them. <strong>401(k) and Traditional IRA</strong>: contributions are pre-tax, growth is tax-deferred, but withdrawals in retirement are taxed as income. <strong>Roth IRA and Roth 401(k)</strong>: contributions are after-tax, but growth and withdrawals are tax-free. <strong>Taxable brokerage accounts</strong>: you pay capital gains tax on profits (0%, 15%, or 20% for long-term holdings over 1 year; ordinary income rates for short-term) and tax on dividends. Always maximize tax-advantaged accounts first. For a high earner in the 32% bracket, paying taxes later (traditional) or never (Roth) can increase lifetime wealth by 30%+ compared to a fully taxable account.",
  },
];

export const RETIREMENT_FAQS: FAQ[] = [
  {
    question: "How much money do I need to retire?",
    answer:
      "A common rule is the <strong>25x rule</strong>: save 25 times your expected annual retirement expenses. If you want $60,000/year in retirement, you need $1.5 million invested. This is based on the <strong>4% safe withdrawal rate</strong> — withdrawing 4% of your portfolio the first year, adjusted for inflation thereafter, has historically lasted 30+ years across most market conditions. However, your actual need depends on Social Security benefits (average ~$1,900/month in 2026), housing costs in retirement (paid-off home vs. renting), healthcare expenses (Medicare starts at 65), and lifestyle. Many retirees spend 70–80% of their pre-retirement income; others spend more due to travel and hobbies.",
  },
  {
    question: "What is the 4% rule for retirement withdrawals?",
    answer:
      "The 4% rule, developed by financial planner William Bengen in 1994, states that retirees can safely withdraw 4% of their initial retirement portfolio in year one, then increase that amount by inflation each subsequent year, with minimal risk of running out over a 30-year retirement. It assumes a diversified portfolio of ~60% stocks and ~40% bonds. For a $1,000,000 portfolio, that's $40,000 in year one, ~$41,200 in year two (at 3% inflation), and so on. Recent research suggests 3.5% may be safer given lower bond yields, while some argue 4.5% is still fine. Flexibility — reducing withdrawals in down years — dramatically improves outcomes.",
  },
  {
    question: "When should I start saving for retirement?",
    answer:
      "<strong>Immediately.</strong> The power of compound interest means starting 10 years earlier dramatically outperforms saving more money later. Example: Person A saves $200/month from age 25 to 35, then stops ($24,000 total contributions). Person B saves $200/month from age 35 to 65 ($72,000 total). At 8% annual return, Person A ends with about $365,000 at 65. Person B ends with about $300,000. Person A saved for only 10 years but ends up with more money. If your employer offers a 401(k) match, contribute at least enough to get the full match — it's an instant 50–100% return. Start with whatever you can afford, even $50/month, and increase contributions as income grows.",
  },
  {
    question: "Should I contribute to a Roth or Traditional 401(k)?",
    answer:
      "The choice depends on whether you expect your tax rate to be higher or lower in retirement. <strong>Traditional 401(k)</strong>: contributions reduce current taxable income; you pay taxes on withdrawals in retirement. Best if you're in a high tax bracket now and expect lower income in retirement. <strong>Roth 401(k)</strong>: contributions are taxed now; withdrawals in retirement are tax-free. Best if you're in a lower tax bracket now (younger workers), expect higher taxes later, or want tax diversification. Many financial planners recommend a mix of both. Always contribute enough to get any employer match — that match typically goes into a Traditional account regardless of your own contribution type.",
  },
  {
    question: "What is Social Security and can I rely on it?",
    answer:
      "Social Security is a federal program providing monthly retirement benefits based on your 35 highest-earning years. Average benefit in 2026 is about $1,900/month; maximum at full retirement age (67) is around $3,800/month. You can claim as early as 62 with reduced benefits (~70% of full amount) or delay until 70 for increased benefits (~132% of full amount). While Social Security's trust fund is projected to be depleted around 2034, even without legislative action, ongoing payroll taxes would still fund about 77% of scheduled benefits. It's best to treat Social Security as a supplement — it typically replaces only 30–40% of pre-retirement income for middle earners — not your entire retirement plan.",
  },
];

export const GPA_FAQS: FAQ[] = [
  {
    question: "How is GPA calculated?",
    answer:
      "GPA (Grade Point Average) is calculated by converting letter grades to grade points, multiplying by credit hours, summing the results, and dividing by total credit hours attempted. Standard 4.0 scale: <strong>A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0</strong> (with plus/minus modifiers adding or subtracting 0.3). For example, an A (4.0) in a 3-credit class contributes 12 quality points; a B (3.0) in a 4-credit class contributes 12. Add all quality points across your classes, divide by total credit hours, and you get your GPA. An 'A' in a 1-credit course impacts your GPA less than an 'A' in a 5-credit course.",
  },
  {
    question: "What is a good college GPA?",
    answer:
      "GPA standards vary by institution and field. Generally: <strong>3.9–4.0</strong>: exceptional, competitive for top graduate schools and prestigious scholarships; <strong>3.5–3.89</strong>: strong, qualifies for most honors programs and graduate schools; <strong>3.0–3.49</strong>: solid, meets requirements for most grad schools and employers; <strong>2.5–2.99</strong>: below average, may limit opportunities; <strong>below 2.0</strong>: risk of academic probation or dismissal. Many scholarships require 3.5+, most graduate programs want 3.0+ (3.5+ for competitive ones), and employers like consulting firms often screen at 3.5+. STEM fields tend to have lower average GPAs than humanities, which is sometimes factored into admissions decisions.",
  },
  {
    question: "What's the difference between weighted and unweighted GPA?",
    answer:
      "An <strong>unweighted GPA</strong> uses the standard 4.0 scale regardless of course difficulty — an A is worth 4.0 whether it's in regular English or AP Calculus. A <strong>weighted GPA</strong> gives extra points for advanced courses: honors classes might add 0.5, AP/IB classes add 1.0, making maximum possible GPA 5.0. This rewards students who challenge themselves with harder coursework. When colleges review applications, they typically recalculate GPAs using their own formulas to compare applicants fairly across different high schools. Some colleges use both — unweighted for baseline performance, weighted to evaluate course rigor.",
  },
  {
    question: "How do I raise my GPA?",
    answer:
      "Raising GPA becomes mathematically harder as you accumulate more credit hours, because each new class represents a smaller fraction of your total. Strategies: (1) <strong>Prioritize upcoming classes</strong> — you can't change past grades, but strong future performance moves the needle. (2) <strong>Retake failed or low-grade courses</strong> if your school allows grade replacement. (3) <strong>Take summer or winter courses</strong> with lighter loads to focus attention. (4) <strong>Use tutoring and office hours</strong> — these are often underutilized. (5) <strong>Withdraw from classes</strong> strategically before the deadline if you're failing — a W is typically better than an F. Our calculator shows exactly what grades you need in future classes to hit a target GPA.",
  },
  {
    question: "Does GPA matter after college?",
    answer:
      "GPA matters most in your first job search after graduation and when applying to graduate programs within 5 years of college. Most competitive employers (investment banks, consulting firms, law firms, top tech companies) filter by GPA, often at 3.5 or 3.7 minimum. However, once you have 2–3 years of professional experience, GPA becomes almost irrelevant — your work performance, accomplishments, and skills matter far more. For graduate school, GPA remains important indefinitely because admissions committees value academic rigor. If your GPA is lower than desired, you can often offset it with a strong GRE/GMAT score, research experience, or years of relevant work.",
  },
];

export const TIP_FAQS: FAQ[] = [
  {
    question: "How much should I tip at a restaurant?",
    answer:
      "In the United States, standard restaurant tipping is <strong>15–20% of the pre-tax bill</strong>. 15% is considered standard for adequate service, 18% for good service, and 20%+ for excellent service. For takeout, 10% is common (sometimes nothing for counter-only service). Bar tips are typically $1–2 per drink or 15–20% of the total tab. Tipping norms vary by country — Europe often includes service charges, Japan doesn't tip at all, and tipping 10–15% is standard in Latin America. When in doubt in the US, 18% is a safe default for table service at sit-down restaurants.",
  },
  {
    question: "Should I tip on the pre-tax or post-tax total?",
    answer:
      "Traditional etiquette says to tip on the <strong>pre-tax</strong> subtotal, because the tax isn't something the server provided. However, many people tip on the post-tax total for simplicity, which effectively increases the tip by the local tax rate (usually 1–2% extra). Both are acceptable. What matters more is the actual dollar amount the server receives. If you want to be precise, tip on the pre-tax amount; if you want to tip slightly more generously without thinking about it, tip on the post-tax total. Our calculator handles both methods so you can see the difference.",
  },
  {
    question: "How do I split a bill fairly among a group?",
    answer:
      "The fairest method depends on the situation. <strong>Even split</strong>: Total bill (including tip) divided by the number of people — simple but unfair if one person had a $50 steak and another had a $15 salad. <strong>Itemized split</strong>: Each person pays for what they ordered plus a proportional share of tax and tip — most accurate but requires more effort. <strong>Rounded split</strong>: Each person pays their approximate share rounded up — a compromise that avoids coin-counting. Apps like Splitwise or Venmo can handle itemized splits automatically. Our tip calculator includes a split feature that divides the total bill (including tip) by any number of people with precise per-person amounts.",
  },
  {
    question: "Do I tip on discounts, coupons, or happy hour prices?",
    answer:
      "Always tip on the <strong>full pre-discount value</strong> of the meal. Your server did the same amount of work whether you used a coupon or not, so they deserve the same tip. If you have a buy-one-get-one-free entrée, calculate the tip as if you paid full price for both. This also applies to restaurant.com coupons, Groupon deals, and happy hour pricing. Servers often rely on tips as a majority of their income (many US states allow a tipped minimum wage as low as $2.13/hour), so tipping on discounted totals effectively cuts their pay. Our calculator lets you enter the original bill value separately if needed.",
  },
  {
    question: "How much should I tip for other services?",
    answer:
      "Tipping guidelines for common services: <strong>Hair salon/barber</strong>: 15–20%; <strong>Taxi/rideshare</strong>: 10–20%; <strong>Food delivery</strong>: 15–20% or $3–5 minimum, more for bad weather; <strong>Hotel housekeeping</strong>: $2–5 per night, left daily (housekeepers often change); <strong>Bellhop</strong>: $1–2 per bag; <strong>Valet</strong>: $2–5 when retrieving your car; <strong>Spa services</strong>: 15–20%; <strong>Tour guides</strong>: 10–20% for group tours, 15–20% for private. For personal services like massage therapists, pet groomers, and personal trainers, 15–20% is standard. These are US norms — tipping expectations vary significantly internationally.",
  },
];
