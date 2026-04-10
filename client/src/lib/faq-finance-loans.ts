// Finance loan calculator FAQs - comprehensive coverage for 16 loan and finance calculators
// These FAQs are rendered on each calculator page AND wrapped in FAQPage JSON-LD
// for rich snippet eligibility in Google search results.

import type { FAQ } from "./calculator-registry";

export const AUTO_LOAN_FAQS: FAQ[] = [
  {
    question: "What credit score do I need for a good auto loan rate?",
    answer:
      "Most lenders offer prime rates (under 6%) to borrowers with credit scores of 680 or higher. Excellent credit (740+) qualifies for the best rates, often 3-5%. Good credit (670-739) typically gets 6-8% rates. Fair credit (580-669) can expect 10-15%, while poor credit (below 580) may face rates above 15% or loan denial. Your credit score is one of the largest factors lenders use to determine your APR. Before applying, check your credit report, dispute errors, and pay down existing balances to boost your score.",
  },
  {
    question: "How is an auto loan payment calculated?",
    answer:
      "Auto loan payments use the amortization formula: <strong>M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]</strong>, where M is the monthly payment, P is the loan amount, r is the monthly interest rate, and n is the total number of months. For example, a $25,000 loan at 6.5% interest for 60 months equals: r = 0.065/12 ≈ 0.00542, n = 60. Plugging in gives about $483/month. Early payments go mostly to interest; later payments go mostly to principal.",
  },
  {
    question: "What is the difference between financing a new vs. used car?",
    answer:
      "New cars typically have lower interest rates (because they're less risky to lenders), better warranties, and may qualify for manufacturer incentives. Used cars cost less upfront but may have higher interest rates (2-3% higher), limited warranty coverage, and unknown maintenance history. New cars depreciate 20-30% in the first year; used cars have slower depreciation. Loan terms for used cars are typically shorter (3-5 years vs. 4-7 years for new), resulting in higher monthly payments but less total interest paid.",
  },
  {
    question: "Can I pay off an auto loan early without penalties?",
    answer:
      "Most modern auto loans allow penalty-free early payoff. However, some older loans or certain lenders may include prepayment penalties. Before signing, explicitly ask the lender about prepayment terms. Paying extra toward principal reduces both total interest and loan duration. For example, paying $50 extra monthly on a $25,000 car loan at 6% interest saves about $3,000 in interest and shortens the loan by roughly 18 months.",
  },
  {
    question: "What down payment should I make on an auto loan?",
    answer:
      "A down payment of 20% of the car's price is ideal, as it helps avoid being underwater (owing more than the car is worth) early in ownership. However, minimum down payments typically range from 0-10%. Larger down payments reduce your monthly payment and total interest paid. A $25,000 car with 20% down ($5,000) on a $20,000 loan at 6.5% costs less than a 10% down payment on a $22,500 loan. Consider your emergency fund — don't deplete it for a car down payment.",
  },
];

export const DEBT_PAYOFF_FAQS: FAQ[] = [
  {
    question: "What is the fastest way to pay off debt?",
    answer:
      "The <strong>avalanche method</strong> pays minimums on all debts, then puts any extra money toward the highest-interest debt first. This saves the most money overall because interest rates are the biggest cost. The <strong>snowball method</strong> targets the smallest balance first for psychological wins, which can help maintain motivation. Mathematically, avalanche wins, but snowball works better if motivation is your challenge. The key is consistency — even small extra payments add up significantly over time due to compounding effects.",
  },
  {
    question: "How much extra should I pay toward debt each month?",
    answer:
      "Any extra amount helps — even $25-50 per month meaningfully reduces payoff time and interest. The more you can spare, the better. A common strategy is the 50/30/20 rule: 50% needs, 30% wants, 20% savings and debt repayment. Use windfalls (tax refunds, bonuses) to accelerate payoff. For a $15,000 credit card debt at 18% APR with $400 minimum payments, adding $100 monthly saves roughly $5,000 in interest and cuts 3+ years off payoff time.",
  },
  {
    question: "Is debt consolidation a good strategy?",
    answer:
      "Debt consolidation combines multiple debts into one loan, ideally with a lower interest rate. This works best if the new rate is significantly lower than your current average rate and you stop accumulating new debt. Benefits include simplified payments and potentially lower interest. Risks include longer payoff timelines if you extend the term just to lower monthly payments, and you might end up paying more total interest. Never consolidate into a longer-term loan unless the rate reduction justifies it.",
  },
  {
    question: "How long does it take to pay off $10,000 in credit card debt?",
    answer:
      "With only minimum payments (typically 2% of balance), a $10,000 credit card balance at 18% APR takes roughly 5+ years and costs about $5,400 in interest. Paying $300/month instead takes 37 months (about 3 years) and costs roughly $1,100 in interest — saving over $4,300. Paying $500/month takes 22 months and saves even more. The faster you pay, the less interest accrues due to the smaller remaining balance each month.",
  },
  {
    question: "Should I use a personal loan to pay off credit card debt?",
    answer:
      "A personal loan to consolidate credit card debt can work if the personal loan rate is notably lower than your card's APR. Personal loan rates typically range from 8-36% depending on credit. Credit card APRs often run 15-25%. So yes, consolidating a $10,000 credit card balance (18% APR) into a personal loan at 12% APR saves money. However, discipline is critical — pay off the loan without running up credit card debt again, or you'll have both debts.",
  },
];

export const CREDIT_CARD_FAQS: FAQ[] = [
  {
    question: "How much interest will I pay if I only make minimum payments?",
    answer:
      "Minimum payments typically cover only interest and a tiny portion of principal, so payoff takes years. A $5,000 balance at 18% APR with a 2% minimum payment ($100 initially) takes roughly 4-5 years to pay off, costing about $2,500+ in interest — or 50% extra. In contrast, a fixed $200 monthly payment pays it off in roughly 28 months with about $1,400 total interest. Minimum payments trap borrowers in long-term debt; always aim to pay more than the minimum to save money.",
  },
  {
    question: "What is a good credit card APR?",
    answer:
      "A 'good' credit card APR for most borrowers is 8-15%, available to those with excellent credit (740+). Average APRs are 15-22%. High APRs (22%+) occur with fair or poor credit. Zero-interest promotional rates (0% APR for 6-21 months on purchases or balance transfers) are available to those with good credit. The best approach is to pay the full balance monthly to avoid interest entirely. If you carry a balance, prioritize paying it down aggressively.",
  },
  {
    question: "Is it better to pay credit card debt in full or make extra payments?",
    answer:
      "Paying the full balance monthly is ideal — you avoid interest entirely and build credit. If you can't pay in full, pay as much as possible above the minimum. Even small extra payments significantly reduce the time and total interest. A $5,000 balance at 18% APR with $200 monthly payment costs $1,400 total interest. Increase payments to $300/month, and you pay only $900 total interest — saving $500. The key is breaking the cycle of minimum payments.",
  },
  {
    question: "How long does credit card debt last if I only pay minimums?",
    answer:
      "A $5,000 credit card balance at 18% APR with only minimum payments (2-3% of balance) takes approximately 5+ years to pay off and costs over $2,500 in interest. A $10,000 balance takes 7+ years with over $5,400 in interest. This is why minimum payments trap people in debt — you're mostly paying interest, not principal. Federal law now requires credit card statements show payoff time at minimum payment vs. a realistic fixed payment amount.",
  },
  {
    question: "Should I transfer my balance to a 0% APR card?",
    answer:
      "A balance transfer to a 0% APR promotional card (typically 6-21 months) can save significant interest if you pay aggressively during the promotional period. However, watch for transfer fees (usually 3-5% of the amount transferred), which reduce savings. For a $5,000 balance at 18% APR transferred to 0% with a 3% fee ($150), you save money if you pay $5,150 down before the rate jumps. After the promo period, the APR typically jumps to 18-25%, so pay it off during the 0% window.",
  },
];

export const STUDENT_LOAN_FAQS: FAQ[] = [
  {
    question: "What is the difference between federal and private student loans?",
    answer:
      "<strong>Federal loans</strong> offer fixed interest rates (5-8%), income-driven repayment plans, loan forgiveness programs (like PSLF), and deferment/forbearance options if you face hardship. <strong>Private loans</strong> offer variable or fixed rates (4-12%+), stricter credit requirements, minimal forgiveness options, and no income-driven repayment. Federal loans are generally superior for most borrowers due to protections. Private loans may suit those with excellent credit seeking lower rates or needing to borrow beyond federal limits.",
  },
  {
    question: "How do income-driven repayment plans work?",
    answer:
      "Income-driven repayment (IDR) plans cap your federal student loan payment at 10-20% of your discretionary income, making payments affordable if your income is low. Four plans exist: PAYE (10%), REPAYE (10%), IBR (10-15%), and ICR (varies). Unpaid interest accrues, but it's forgiven after 20-25 years. Example: $50,000 in student loans at a $35,000 salary might mean $0-150/month under PAYE vs. $500+ under Standard repayment. IDR is powerful for low earners but extends your payoff timeline significantly.",
  },
  {
    question: "Is Public Service Loan Forgiveness (PSLF) worth pursuing?",
    answer:
      "PSLF forgives remaining student loan balance after 10 years (120 payments) of on-time payments while working for a qualifying employer (government, nonprofit). For a $50,000 loan at 5.5% interest on REPAYE repayment making $35,000/year, you'd pay roughly $3,000-4,000 total and the remaining ~$40,000 is forgiven — a huge benefit. However, you must use an eligible repayment plan and employer, and keep meticulous records. It's excellent if you're committed to public service; otherwise, standard or alternative repayment may be better.",
  },
  {
    question: "Should I prioritize paying off student loans or investing?",
    answer:
      "If your student loan interest rate is below 5% and you have a long time horizon, investing in index funds (which historically return 7-10% annually) typically wins mathematically. At 6-8% interest rates, it's closer. Above 8%, paying off loans usually makes more sense. However, consider non-financial factors: paying off debt reduces stress and simplifies finances. A balanced approach: invest enough to capture employer 401(k) matches (free money), then decide between extra student loan payments and additional investing based on your rate and risk tolerance.",
  },
  {
    question: "Can I refinance federal student loans into a private loan?",
    answer:
      "Yes, you can refinance federal loans into private loans if you have good-to-excellent credit and stable income. Benefits include potentially lower interest rates and faster payoff. Risks are significant: you lose federal protections (income-driven repayment, forgiveness programs, deferment/forbearance, disability discharge). Refinance only if the private rate is meaningfully lower (1%+ reduction) AND you don't anticipate job loss, further education, or income changes that would make federal flexibility valuable.",
  },
];

export const RENT_VS_BUY_FAQS: FAQ[] = [
  {
    question: "How long should I stay in a home for buying to make financial sense?",
    answer:
      "The break-even point is typically 5-7 years, depending on local market conditions, home appreciation, and your down payment. In the first 2-3 years, most of your mortgage payment goes to interest, not equity. Plus, closing costs (2-5% of purchase price) must be recouped. In hot markets with high appreciation, buying makes sense in 3-4 years. In flat markets, 7-10 years may be needed. If you might relocate within 5 years, renting usually wins financially.",
  },
  {
    question: "What percentage of income should go to housing?",
    answer:
      "Financial planners typically recommend housing costs (mortgage, taxes, insurance) stay below 28% of gross income, with total debt (including housing) under 36%. On a $100,000 salary ($8,333/month gross), housing should be $2,330 or less. This includes all housing costs — payment, property tax, insurance, HOA. Staying within this guideline leaves room for savings, investments, and unexpected expenses. Exceeding 36% total debt limits flexibility and increases financial stress.",
  },
  {
    question: "Do I need a 20% down payment to buy a home?",
    answer:
      "No. You can buy with as little as 3-5% down through FHA loans, conventional loans, or VA loans. However, under 20% down triggers <strong>Private Mortgage Insurance (PMI)</strong>, which costs 0.3-1.5% of the loan value annually until you reach 20% equity. A $300,000 home with 10% down ($30,000) on a $270,000 loan might add $100-150/month in PMI. You can remove PMI once your equity hits 22% through a combination of payments and appreciation, so PMI isn't permanent.",
  },
  {
    question: "What are the hidden costs of homeownership beyond the mortgage?",
    answer:
      "Beyond your mortgage payment, budget for: <strong>property taxes</strong> (0.5-2% of home value annually), <strong>homeowners insurance</strong> ($800-1,500/year), <strong>maintenance</strong> (0.5-1% of home value annually for routine repairs), <strong>HOA fees</strong> (if applicable, $100-500/month), and <strong>utilities</strong>. A $400,000 home might cost $1,500-2,500/month in taxes, insurance, and maintenance alone — plus your mortgage payment. Many first-time buyers underestimate these costs.",
  },
  {
    question: "What is the best time in life to buy a home?",
    answer:
      "The best time is when: (1) you have a stable income and expect to stay in one location 5+ years, (2) you've saved a down payment (ideally 10-20%) without depleting emergency funds, (3) your credit score is 620+ (higher is better for lower rates), (4) your debt-to-income ratio is under 43%, and (5) you've saved for closing costs (2-5% of purchase price). Being 'ready' matters more than age. Some people buy at 25 with stable jobs; others wait until 40. Rushing into homeownership before you're ready is financially risky.",
  },
];

export const DOWN_PAYMENT_FAQS: FAQ[] = [
  {
    question: "How much should I save for a down payment?",
    answer:
      "Aim for 20% of the home price to avoid PMI, though 10-15% is acceptable if necessary. On a $400,000 home, 20% is $80,000; 10% is $40,000. Consider your full financial picture: keep 3-6 months of living expenses in emergency savings alongside your down payment fund. Don't deplete emergency savings for a larger down payment. If you can afford only 5-10% down, that's acceptable — factor PMI costs into your affordability calculation.",
  },
  {
    question: "What is PMI and how long do I pay it?",
    answer:
      "<strong>Private Mortgage Insurance (PMI)</strong> protects the lender if you default when your down payment is under 20%. It costs roughly 0.3-1.5% of the loan amount annually (0.03-0.125% monthly). A $300,000 loan with 10% down ($300,000 - $30,000) might add $75-125/month in PMI. PMI is automatically removed once your equity reaches 20% through a combination of mortgage payments and home appreciation, typically in 5-10 years. You can request removal once you hit 22% equity.",
  },
  {
    question: "Should I save longer for a bigger down payment or buy sooner with less?",
    answer:
      "This depends on your situation. Waiting for 20% down saves on PMI but delays building home equity and exposes you to rising home prices and interest rates. Buying sooner with 10% down means paying PMI temporarily but starting equity buildup earlier. Run the numbers: if homes appreciate 3% annually and mortgage rates rise 0.5% while you save another 2 years, the extra down payment may not offset higher prices and rates. Also consider rent increases and the psychological benefit of homeownership.",
  },
  {
    question: "Can I get a down payment gift from family?",
    answer:
      "Yes. Most lenders allow down payment gifts from family members but require a <strong>gift letter</strong> stating the money is a gift, not a loan. The letter must confirm you're not expected to repay it. Document the gift's transfer (bank statement showing deposit). Gifts can cover the full down payment or a portion. Lenders want to ensure borrowers have 'skin in the game,' so some loans require at least 3-5% of the down payment to come from your own savings.",
  },
  {
    question: "What is the minimum down payment to avoid PMI?",
    answer:
      "You need 20% of the home's purchase price to avoid PMI on conventional loans. For a $300,000 home, that's $60,000. FHA loans allow as little as 3.5% down but require FHA mortgage insurance (UFMIP and annual MIP), which works similarly to PMI. VA loans and USDA loans can allow 0% down but have their own costs. If you can't save 20%, evaluate whether 10% down + PMI for 5-7 years is cheaper than waiting longer to save more.",
  },
];

export const REFINANCE_FAQS: FAQ[] = [
  {
    question: "When does it make sense to refinance a mortgage?",
    answer:
      "Refinance when interest rates drop at least 0.5-1% below your current rate and you plan to stay in the home long enough to recoup closing costs (typically 2-4 years). Example: $300,000 mortgage at 6.5% with $5,000 closing costs. Refinancing to 5.5% saves roughly $1,500/year in interest — so you break even in about 3.3 years. If you might sell or move within 3 years, refinancing probably isn't worth it. Also consider your credit score, which affects your new rate.",
  },
  {
    question: "What are refinancing closing costs?",
    answer:
      "Refinancing closing costs typically run 2-5% of the loan amount, including appraisal ($400-600), title search ($100-200), lender fees ($500-1,500), and insurance ($300-900). On a $300,000 refinance, expect $6,000-15,000 in closing costs. Some lenders offer no-closing-cost refinances, but the rate is typically 0.25-0.5% higher to compensate. Calculate your break-even point: monthly savings divided by closing costs equals months to break even.",
  },
  {
    question: "Should I refinance to a shorter loan term?",
    answer:
      "Refinancing to a shorter term (30 to 15 years) builds equity faster and saves significant interest but increases monthly payments. Example: a $300,000 mortgage at 5.5% costs $1,704/month for 30 years (total interest $312,846) vs. $2,291/month for 15 years (total interest $112,380) — saving $200,000 in interest but increasing the payment by $587. Refinance to a shorter term only if you can comfortably afford the higher payment and your emergency fund remains intact.",
  },
  {
    question: "Can I refinance if my home value dropped?",
    answer:
      "If your home value dropped significantly, you may owe more than the home is worth (underwater mortgage), which complicates refinancing. Conventional refinances typically require at least 20% equity. If you're underwater, you may qualify for a FHA Streamline Refinance (if your existing mortgage is FHA) or a HARP 2.0 refinance (if your loan is backed by Fannie Mae or Freddie Mac). These programs have more lenient equity requirements. Talk to your current lender about available options.",
  },
  {
    question: "How much interest will I save by refinancing?",
    answer:
      "Savings depend on the rate reduction, remaining term, and loan balance. A $300,000 mortgage with 25 years remaining at 6.5% saves roughly $1,500/year if refinanced to 5.5% (after accounting for the interest rate change and remaining balance reduction). Over the remaining 25 years, that's $37,500 in savings — minus closing costs of $6,000-10,000, netting ~$27,500+ in savings. Use a refinance calculator to estimate specific savings based on your situation.",
  },
];

export const HOME_AFFORDABILITY_FAQS: FAQ[] = [
  {
    question: "What is the 28/36 rule and how does it affect how much I can borrow?",
    answer:
      "The <strong>28/36 rule</strong> limits your housing payment to 28% of gross monthly income and total debt (including housing) to 36%. On a $100,000 salary ($8,333/month gross), you can afford max $2,333/month housing or $3,000 total debt payments. These are lender guidelines, not hard limits — some lenders go up to 43% DTI. The rule ensures you have breathing room for savings, investments, and unexpected expenses. Higher ratios increase financial stress and default risk.",
  },
  {
    question: "How does my debt-to-income ratio affect my mortgage approval?",
    answer:
      "DTI is a primary factor lenders use to determine loan approval and interest rate. Below 36% DTI is ideal. 37-43% may be approved at slightly higher rates. Above 43%, approval becomes difficult or impossible. To improve DTI: increase income, reduce existing debts, or consider a lower-priced home. Example: $100,000 salary with $2,000/month in existing debts (car, student loans) limits your new housing payment to roughly $1,000 to stay under 36% DTI.",
  },
  {
    question: "What is the maximum home price I can afford?",
    answer:
      "Your affordable home price depends on income, down payment, interest rate, and existing debts. Using the 28% housing rule: at $100,000 income, your max housing payment is ~$2,333/month. With a 6.5% rate and 30-year term, that payment supports roughly a $400,000 mortgage (or $500,000 home with 20% down). However, if you have $2,000/month in existing debts, your affordable price drops to roughly $350,000. Always use an affordability calculator personalized to your specific situation.",
  },
  {
    question: "How do property taxes and insurance affect my affordability?",
    answer:
      "Property taxes and insurance are part of your total housing payment and directly reduce how much you can afford in principal and interest. On a $400,000 home in a high-tax area (2% annual tax = $667/month) plus $150 insurance, these costs eat up $817 of your housing payment budget. In a lower-tax area (0.5% tax = $167/month), you have $650 more to spend on principal and interest. Always factor in local tax rates — they significantly impact affordability by region.",
  },
  {
    question: "What credit score do I need to qualify for a mortgage?",
    answer:
      "Minimum credit scores: FHA loans (580), conventional loans (620), VA loans (no minimum but some lenders require 580+). However, above 760 gets the best rates. A 620 score might qualify for a mortgage at 6.5%, while a 780 score might get 5.2% — a 1.3% difference costs over $100,000 in extra interest on a $400,000 loan. Improving your credit by 100-150 points before applying can save substantial money. Check your credit report for errors and dispute inaccuracies.",
  },
];

export const BUSINESS_LOAN_FAQS: FAQ[] = [
  {
    question: "What interest rates are typical for small business loans?",
    answer:
      "Small business loan rates vary by lender type and creditworthiness: <strong>SBA loans</strong> (4-9%), <strong>bank loans</strong> (5-12%), <strong>online lenders</strong> (7-30%+), <strong>credit lines</strong> (8-15%). Established businesses with strong credit and financials qualify for lower rates. Startups or those with poor credit may face 20%+ rates. Your personal credit score, business credit score, time in business, revenue, and collateral all affect rates. Shop around — rates vary significantly between lenders.",
  },
  {
    question: "What does origination fee mean on a business loan?",
    answer:
      "An origination fee is an upfront charge (typically 1-5% of the loan amount) that lenders deduct before funding. A $100,000 loan with a 3% origination fee means you receive $97,000 but pay interest on $100,000. The fee covers underwriting, processing, and administration costs. Always factor the origination fee into your cost comparison — a lower interest rate might have a higher origination fee, and vice versa. Calculate total costs, not just the APR.",
  },
  {
    question: "Should I use a line of credit or a term loan for my business?",
    answer:
      "<strong>Term loans</strong> provide a fixed lump sum with fixed monthly payments over a set period — predictable and structured, but you pay interest on the full amount. <strong>Lines of credit</strong> work like credit cards — you access funds as needed and pay interest only on what you use — flexible but rates are often higher and can be variable. Use a term loan for large, one-time expenses (equipment, expansion). Use a line of credit for variable cash flow needs (seasonal businesses, operational flexibility).",
  },
  {
    question: "What collateral do I need to get a business loan?",
    answer:
      "Collateral requirements vary by lender and loan type. <strong>Unsecured loans</strong> (personal loans, some online loans) require no collateral but charge higher rates (15-30%+) due to risk. <strong>Secured loans</strong> require collateral (equipment, real estate, inventory, receivables) and charge lower rates (5-12%) because the lender can recover losses if you default. If you lack business assets, offering personal assets (home equity, savings) as collateral can secure better rates, but risk your personal finances.",
  },
  {
    question: "How long do small business loans typically take to fund?",
    answer:
      "<strong>Online lenders:</strong> 1-7 days (fastest). <strong>Banks:</strong> 5-30 days (thorough underwriting). <strong>SBA loans:</strong> 30-90+ days (most rigorous, detailed documentation). Faster funding usually means higher rates and fees due to increased risk. If you need cash urgently, online lenders are faster but more expensive. If you can wait and have strong credit and financials, bank and SBA loans offer better rates. Prepare financial statements, tax returns, and a business plan in advance to speed approval.",
  },
];

export const AMORTIZATION_FAQS: FAQ[] = [
  {
    question: "What is amortization and why does it matter?",
    answer:
      "<strong>Amortization</strong> is the process of paying off a loan through regular monthly payments that include both principal (the borrowed amount) and interest. An amortization schedule shows exactly how much of each payment goes to interest vs. principal. Early in a loan, most of your payment covers interest; later, more goes to principal. For a $300,000 mortgage at 6.5% for 30 years, your first payment is roughly $1,196 — of which $1,625 goes to interest and only $571 to principal. Understanding amortization helps you see how long to build equity.",
  },
  {
    question: "How much principal do I pay off in the first year of a mortgage?",
    answer:
      "In the first year of a 30-year mortgage, you typically pay off only 1-3% of the principal, with the rest going to interest. On a $300,000 mortgage at 6.5%, the first year's payments total $19,123 (12 × $1,593), of which roughly $18,400 is interest and only $723 is principal. This front-loaded interest structure is why extra principal payments early in a loan save so much money. If you pay an extra $200/month toward principal in year 1, you'll save roughly $40,000 in interest over the loan's life.",
  },
  {
    question: "Can I see a detailed amortization schedule for my loan?",
    answer:
      "Yes. Your lender provides an amortization schedule at closing showing every payment, principal/interest breakdown, and remaining balance. You can also request one from your lender anytime or generate one using online calculators or spreadsheets. The formula breaks down each payment into: interest = remaining balance × monthly rate; principal = payment − interest. Watching your principal increase and balance decrease is motivating and helps you understand the loan structure.",
  },
  {
    question: "What happens to my loan if I make extra principal payments?",
    answer:
      "Extra principal payments reduce your remaining balance, which reduces future interest (since interest is calculated on the balance). For a $300,000 mortgage at 6.5%, paying an extra $200/month toward principal saves roughly $40,000 in interest and shortens the 30-year loan to about 22 years. There's no penalty for prepaying (confirm with your lender). Even small extra amounts add up — $50/month extra saves about $10,000 in interest.",
  },
  {
    question: "How do I calculate the interest paid over the life of a loan?",
    answer:
      "Total interest = (Monthly Payment × Number of Payments) − Principal. For a $300,000 mortgage at 6.5% for 30 years: monthly payment ≈ $1,896, total paid = $1,896 × 360 = $682,560, total interest = $682,560 − $300,000 = $382,560. This shows that you pay about 127% of the original amount in interest alone — emphasizing why interest rates and loan terms matter so much. A 15-year loan at the same rate costs less total interest because you're paying it off faster.",
  },
];

export const SALES_TAX_FAQS: FAQ[] = [
  {
    question: "How is sales tax calculated?",
    answer:
      "Sales tax is calculated as: <strong>Tax = Purchase Price × (Tax Rate / 100)</strong>. For example, a $100 item in an area with 8% sales tax costs $100 × 0.08 = $8 in tax, for a total of $108. Some items are tax-exempt (groceries, prescriptions in many states) while others (luxury goods) may have additional taxes. The total you pay at checkout is the pre-tax price plus the applicable sales tax. Use a sales tax calculator to verify taxes for your specific location, as rates vary by state and county.",
  },
  {
    question: "What states have no sales tax?",
    answer:
      "Five U.S. states have no sales tax: <strong>Alaska, Delaware, Montana, New Hampshire, and Oregon</strong>. However, some municipalities in these states may have local sales taxes. Other states have low sales tax (under 5%): Georgia, Hawaii, Louisiana, and Wyoming. States with the highest sales tax (8%+) include California, Indiana, Mississippi, Rhode Island, Tennessee, and others. Sales tax rates change periodically, and some cities add local taxes on top of state rates.",
  },
  {
    question: "Is online shopping subject to sales tax?",
    answer:
      "Yes, online shopping is subject to sales tax if the seller has a physical presence (nexus) in your state. Since 2018, most major online retailers (Amazon, eBay, Walmart) collect and remit sales tax based on your delivery address, even if their warehouse isn't in your state. Some small sellers may not collect tax, but you're technically liable for 'use tax' (self-reporting tax). Always check whether sales tax is included in the displayed price — some online retailers show pre-tax prices, while others include tax.",
  },
  {
    question: "What is the difference between sales tax and VAT?",
    answer:
      "<strong>Sales tax</strong> (used in the U.S.) is collected only at the final sale to consumers. <strong>Value-Added Tax (VAT)</strong> (used in 170+ countries) is collected at each step of production and distribution, but the consumer only pays the final amount. The final price to consumers is similar, but VAT is more complex for businesses (refundable for businesses, taxable on imports). The U.S. primarily uses sales tax because it's simpler to administer.",
  },
  {
    question: "How do I calculate the pre-tax price if I know the total with tax?",
    answer:
      "Use the formula: <strong>Pre-tax Price = Total / (1 + Tax Rate)</strong>. If you paid $108 for an item in a region with 8% sales tax: Pre-tax = $108 / 1.08 = $100. If you know the total and tax rate, you can work backwards to find the original price. This is useful if you need to expense items or understand the breakdown. Our calculator handles both directions — forward (add tax) and reverse (remove tax from the total).",
  },
];

export const INTEREST_FAQS: FAQ[] = [
  {
    question: "What is the formula for compound interest?",
    answer:
      "The compound interest formula is: <strong>A = P(1 + r/n)^(nt)</strong>, where A is the final amount, P is principal, r is the annual interest rate (as a decimal), n is the number of times interest compounds per year, and t is the number of years. Example: $10,000 at 5% annual interest compounded monthly for 10 years = $10,000 × (1 + 0.05/12)^(12×10) = $16,470. More frequent compounding (daily vs. annually) yields slightly higher returns — the effect is small over short periods but significant over decades.",
  },
  {
    question: "How much will $10,000 grow in 20 years at 8% compound interest?",
    answer:
      "At 8% annual interest compounded annually: $10,000 × (1.08)^20 = $46,610. Compounded monthly: $10,000 × (1 + 0.08/12)^(12×20) = $49,268. The difference of $2,658 shows how compounding frequency impacts growth. Over long periods, compound interest creates exponential growth — your money more than quadruples. This is why starting early with investing is so powerful. A 25-year-old investing $10,000 at 8% grows to $685,000+ by age 65 due to 40 years of compounding.",
  },
  {
    question: "What is the difference between APR and APY?",
    answer:
      "<strong>APR (Annual Percentage Rate)</strong> is the simple annual rate without compounding. <strong>APY (Annual Percentage Yield)</strong> includes the effect of compounding. Example: a savings account at 5% APR compounded monthly has an APY of approximately 5.12%. The difference grows with higher rates and more frequent compounding. Always compare APY when shopping for savings accounts, CDs, or investments — APY shows the true return you'll earn. For loans, APR is the standard disclosure and already includes fees, so it's your best comparison metric.",
  },
  {
    question: "How does compound interest help long-term investments?",
    answer:
      "Compound interest is exponential growth — your returns earn returns. The longer the time horizon, the more dramatic the effect. $1,000 invested at 8% grows to: $2,158 in 10 years, $4,661 in 20 years, and $10,063 in 30 years. Start early because time is the most powerful lever in compound interest. A 25-year-old investing $200/month at 8% for 40 years accumulates $525,000 — mostly from compound growth, not contributions. The same person starting at 35 and investing for 30 years accumulates only $245,000.",
  },
  {
    question: "Can compound interest work against you with debt?",
    answer:
      "Yes. Compound interest on debt grows quickly, which is why high-interest debt (credit cards at 18-25%) is dangerous. A $5,000 credit card balance at 18% compounded monthly grows to roughly $24,000 in 10 years if you make no payments. The interest compounds daily, rapidly increasing your balance. This is why paying down high-interest debt quickly is critical — each extra payment reduces the balance faster, slowing compound growth. Compound interest works powerfully for investments; it works powerfully against borrowers with debt.",
  },
];

export const SIMPLE_INTEREST_FAQS: FAQ[] = [
  {
    question: "What is simple interest and when is it used?",
    answer:
      "<strong>Simple interest</strong> is calculated only on the principal, not on accumulated interest. The formula is: <strong>I = P × r × t</strong>, where I is interest, P is principal, r is the annual rate, and t is time in years. Example: $10,000 at 5% for 10 years = $10,000 × 0.05 × 10 = $5,000 in interest, final amount $15,000. Simple interest is used for some auto loans, short-term loans, and certain bonds. It's simpler to calculate but less common than compound interest for savings accounts and mortgages.",
  },
  {
    question: "How much interest will I earn on $10,000 at 5% simple interest for 3 years?",
    answer:
      "Using the formula I = P × r × t: Interest = $10,000 × 0.05 × 3 = $1,500. Your final amount is $10,000 + $1,500 = $11,500. With simple interest, the interest amount is the same each year ($500 year 1, $500 year 2, $500 year 3). With compound interest at the same rate, you'd earn about $1,576 — $76 more. For short periods, the difference is small; for long periods, compound interest significantly outperforms simple interest.",
  },
  {
    question: "Is simple interest better than compound interest?",
    answer:
      "It depends on whether you're borrowing or saving. <strong>For borrowing:</strong> simple interest is better (cheaper) — you don't pay interest on interest. <strong>For saving/investing:</strong> compound interest is better (more lucrative) — your returns earn returns. As a borrower, prefer simple interest. As a saver or investor, demand compound interest. Credit unions and some banks offer simple interest loans to consumers, which is consumer-friendly. Banks offer compound interest on savings, which is consumer-friendly. Always check the terms.",
  },
  {
    question: "How is simple interest different from compound interest?",
    answer:
      "<strong>Simple interest</strong> is calculated on principal only, staying constant each period. <strong>Compound interest</strong> is calculated on principal plus accumulated interest, growing exponentially. Example: $10,000 at 5% for 3 years. Simple: $1,500 interest (same each year). Compound (annually): $1,576 interest (grows each year as interest earns interest). Over 30 years, the gap widens dramatically — simple interest earns $15,000, compound earns $43,219 on the same principal.",
  },
  {
    question: "Can I calculate simple interest for different time periods?",
    answer:
      "Yes. The formula I = P × r × t works for any time period. For 6 months (t=0.5): $10,000 × 0.05 × 0.5 = $250. For 18 months (t=1.5): $10,000 × 0.05 × 1.5 = $750. For 2 years (t=2): $10,000 × 0.05 × 2 = $1,000. Convert months to years (divide by 12) or use days (divide by 365). The beauty of simple interest is its linear predictability — you always know exactly what you'll pay or earn regardless of the time period.",
  },
];

export const PAYMENT_FAQS: FAQ[] = [
  {
    question: "What is the formula for calculating monthly loan payments?",
    answer:
      "The standard loan payment formula is: <strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong>, where M is monthly payment, P is principal (loan amount), r is the monthly interest rate (annual ÷ 12), and n is total number of payments. Example: $250,000 loan at 6.5% annual interest for 30 years (360 months). Monthly rate r = 0.065/12 ≈ 0.00542. Payment ≈ $1,580. This formula is standard across mortgages, auto loans, and personal loans.",
  },
  {
    question: "How does loan term affect my monthly payment?",
    answer:
      "Longer terms mean lower monthly payments but higher total interest paid. Example: $250,000 at 6.5% interest. 30-year term: $1,580/month, total paid $568,560. 15-year term: $2,130/month, total paid $383,400. The 15-year costs $747/month more but saves $185,160 in interest. Choosing a term is a tradeoff between affordability (lower payments) and cost (total interest). Choose a term you can afford while still making extra principal payments if possible.",
  },
  {
    question: "What happens to my payment if interest rates change?",
    answer:
      "Interest rates affect your monthly payment only if you have an <strong>adjustable-rate loan (ARM)</strong>. <strong>Fixed-rate loans</strong> lock your rate and payment for the entire term — rates rising doesn't change your payment. <strong>ARMs</strong> start with a lower rate for 5-7 years, then adjust to a higher rate based on market conditions. When the rate adjusts, your payment increases (sometimes significantly). Fixed-rate loans are more predictable; ARMs offer initial savings but future risk.",
  },
  {
    question: "Can I lower my monthly payment after taking out a loan?",
    answer:
      "Yes, through refinancing. If interest rates drop or your credit improves, you can refinance to a new loan with a lower rate, which typically reduces monthly payments. However, refinancing has closing costs ($3,000-10,000+), so you need enough interest savings to break even. Another option is extending your term (30 to 40 years), which lowers payments but increases total interest — usually not recommended. Alternatively, if you receive a raise, you can maintain the same payment while paying extra toward principal.",
  },
  {
    question: "What is the total cost of a loan versus the monthly payment?",
    answer:
      "Total cost = monthly payment × number of payments. For a $250,000 mortgage at 6.5% for 30 years: $1,580/month × 360 months = $568,560 total paid. Since you borrowed $250,000, the extra $318,560 is interest — the cost of borrowing. A 15-year term at the same rate: $2,130 × 180 = $383,400 total, of which $133,400 is interest. Always look at total cost, not just monthly payment, when comparing loan options.",
  },
];

export const INTEREST_RATE_FAQS: FAQ[] = [
  {
    question: "How is interest rate determined on a loan?",
    answer:
      "Lenders set interest rates based on: <strong>credit score</strong> (760+ gets the best rates), <strong>loan type</strong> (mortgages are lower than personal loans), <strong>term length</strong> (shorter terms often have lower rates), <strong>down payment</strong> (larger down payments reduce risk), <strong>market conditions</strong> (Fed rates influence all lending rates), and <strong>your income and debt-to-income ratio</strong>. A borrower with a 750 credit score might get 5.5% on a mortgage; a 650-credit borrower might pay 7%. Shop around — rates vary by lender.",
  },
  {
    question: "What is the difference between fixed and variable interest rates?",
    answer:
      "<strong>Fixed rates</strong> stay the same for the entire loan term, making your payment predictable. <strong>Variable rates</strong> adjust based on market conditions, typically starting lower but increasing over time. Fixed-rate mortgages are standard in the U.S. and predictable. Adjustable-rate mortgages (ARMs) might offer a 5% rate for 7 years, then adjust to 6-7% after. Fixed rates are better when rates are low or expected to rise. Variable rates suit those planning to sell/refinance before rate increases.",
  },
  {
    question: "How can I find the interest rate on my existing loan?",
    answer:
      "Your interest rate is on your loan documents (promissory note, mortgage deed) and monthly statements. It's also listed on your lender's website under 'account details.' If you can't find it, call your lender — they'll tell you instantly. Knowing your rate is crucial for deciding whether to refinance. If rates have dropped 0.5-1% since you took out your loan, refinancing might save money.",
  },
  {
    question: "Why did my interest rate increase?",
    answer:
      "<strong>Fixed-rate loans:</strong> rates don't increase — your rate locked in and won't change. <strong>Adjustable-rate loans:</strong> rates can increase based on market conditions after your initial fixed period. <strong>Variable-rate loans (credit cards):</strong> rates can increase if the prime rate rises or your credit score drops. <strong>Credit score changes:</strong> if your credit drops, refinancing to a new loan might offer a higher rate. Check your loan documents — they explain whether your rate is fixed or variable.",
  },
  {
    question: "How can I lower the interest rate on my loan?",
    answer:
      "For existing loans: improve your credit score (takes months), then refinance to a new loan with a better rate. For future loans: build excellent credit (740+), save for a larger down payment, reduce existing debt (lower your DTI ratio), and apply when interest rates are favorable (rates change daily). Shopping with multiple lenders can also reveal better offers. Even a 0.25% rate reduction saves tens of thousands over a 30-year mortgage.",
  },
];

export const MORTGAGE_PAYOFF_FAQS: FAQ[] = [
  {
    question: "How much can I save by paying extra toward my mortgage?",
    answer:
      "Extra principal payments reduce both your loan duration and total interest paid. On a $300,000 mortgage at 6.5% for 30 years, the standard payment is roughly $1,896/month. Adding $200/month toward principal reduces the loan to about 22 years and saves roughly $120,000 in interest. Adding $500/month extra saves even more — roughly $200,000 and shortens the loan to 17 years. Even small extra amounts add up: an extra $50/month saves about $25,000 over the life of the loan.",
  },
  {
    question: "What is the fastest way to pay off my mortgage?",
    answer:
      "The fastest way is to make large extra principal payments consistently. Strategies: (1) pay biweekly instead of monthly (results in 26 payments/year instead of 24); (2) round up your payment; (3) apply windfalls (bonuses, tax refunds) directly to principal; (4) refinance to a shorter term (15 vs. 30 years). Combined approaches are powerful — biweekly payments plus $200/month extra on a $300,000 mortgage can cut 10+ years off a 30-year term.",
  },
  {
    question: "Should I focus on paying off my mortgage or investing?",
    answer:
      "If your mortgage rate is 6-7% and stock market returns average 8-10%, investing mathematically wins over 20+ years. However, paying off the mortgage delivers a guaranteed 'return' (interest rate), reduces financial stress, and simplifies finances. Many advisors recommend a balanced approach: max your 401(k) match (free money), then decide between extra mortgage payments and additional investing. A practical approach: pay off the mortgage if it gives you psychological peace; invest if you have high risk tolerance and a long time horizon.",
  },
  {
    question: "Can I pay off my mortgage early without penalties?",
    answer:
      "Most modern mortgages allow penalty-free prepayment — check your loan documents or call your lender. Older mortgages may have prepayment penalties, especially if the lender was a private party. Federal law prohibits prepayment penalties on mortgages originated after 2009 for most borrowers, but ARM loans may have limited prepayment penalties for a set time. Verify your terms in writing before assuming you can prepay without penalty.",
  },
  {
    question: "How much time do I save by making biweekly mortgage payments?",
    answer:
      "Biweekly payments result in 26 payments/year instead of 24 monthly payments, equivalent to one extra payment annually. On a $300,000 mortgage at 6.5% for 30 years, biweekly payments shorten the loan to about 27 years and save roughly $35,000 in interest. This is one of the easiest ways to accelerate payoff without increasing your total monthly outlay — instead of paying $1,896/month × 12, you pay $948 biweekly × 26. Set up automatic biweekly payments through your bank.",
  },
];
