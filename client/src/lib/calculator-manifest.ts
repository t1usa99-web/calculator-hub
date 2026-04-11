// AUTO-GENERATED — do not edit manually
// Registers all 240 calculators with lazy-loaded components for code splitting
// Only the component code is lazy — metadata is eagerly available for search/categories/SEO
import { lazy } from "react";
import { registerCalculator } from "@/lib/calculator-registry";

import {
  AMORTIZATION_FAQS,
  AUTO_LOAN_FAQS,
  BUSINESS_LOAN_FAQS,
  CREDIT_CARD_FAQS,
  DEBT_PAYOFF_FAQS,
  DOWN_PAYMENT_FAQS,
  HOME_AFFORDABILITY_FAQS,
  INTEREST_FAQS,
  INTEREST_RATE_FAQS,
  MORTGAGE_PAYOFF_FAQS,
  PAYMENT_FAQS,
  REFINANCE_FAQS,
  RENT_VS_BUY_FAQS,
  SALES_TAX_FAQS,
  SIMPLE_INTEREST_FAQS,
  STUDENT_LOAN_FAQS,
  DEBT_CONSOLIDATION_FAQS,
  FHA_LOAN_FAQS,
  HOME_EQUITY_FAQS,
  PERSONAL_LOAN_FAQS,
  RMD_FAQS,
  VA_MORTGAGE_FAQS,
} from "@/lib/faq-finance-loans";

import {
  ANNUITY_FAQS,
  BREAK_EVEN_FAQS,
  BUDGET_FAQS,
  COST_OF_LIVING_FAQS,
  CURRENCY_CONVERTER_FAQS,
  FOUR_OH_ONE_K_FAQS,
  FUTURE_VALUE_FAQS,
  INFLATION_FAQS,
  MARGIN_FAQS,
  NET_WORTH_FAQS,
  PAYCHECK_FAQS,
  PRESENT_VALUE_FAQS,
  ROI_FAQS,
  SALARY_FAQS,
  SAVINGS_GOAL_FAQS,
  TAX_FAQS,
  APR_FAQS,
  BOND_FAQS,
  CAGR_FAQS,
  CD_FAQS,
  CAR_LEASE_FAQS,
  COMMISSION_FAQS,
  DEBT_TO_INCOME_FAQS,
  DEPRECIATION_FAQS,
  DIVIDEND_FAQS,
  FIRE_FAQS,
  IRR_FAQS,
  MUTUAL_FUND_FAQS,
  NPV_FAQS,
  NET_INCOME_FAQS,
  PAYBACK_PERIOD_FAQS,
  PENSION_FAQS,
  REAL_ESTATE_COMMISSION_FAQS,
  ROTH_IRA_FAQS,
  STOCK_FAQS,
  TAKE_HOME_PAY_FAQS,
  WACC_FAQS,
} from "@/lib/faq-finance-invest";

import {
  COMPOUND_INTEREST_FAQS,
  INVESTMENT_FAQS,
  LOAN_FAQS,
  MORTGAGE_FAQS,
  RETIREMENT_FAQS,
  TIP_FAQS,
  BMI_FAQS,
  CALORIE_FAQS,
  GPA_FAQS,
  PERCENTAGE_FAQS,
} from "@/lib/faq-content";

import {
  BAC_FAQS,
  BMR_FAQS,
  BODY_FAT_FAQS,
  IDEAL_WEIGHT_FAQS,
  MACRO_FAQS,
  PACE_FAQS,
  PREGNANCY_FAQS,
  PREGNANCY_CONCEPTION_FAQS,
  TDEE_FAQS,
  ARMY_BODY_FAT_FAQS,
  BODY_SURFACE_AREA_FAQS,
  CALORIES_BURNED_FAQS,
  CARB_FAQS,
  FAT_INTAKE_FAQS,
  HEART_RATE_FAQS,
  IBW_FAQS,
  LEAN_BODY_MASS_FAQS,
  MACRO_ADVANCED_FAQS,
  MAX_HEART_RATE_FAQS,
  ONE_REP_MAX_FAQS,
  OVULATION_FAQS,
  PROTEIN_FAQS,
  SLEEP_FAQS,
  WAIST_TO_HIP_FAQS,
  WATER_INTAKE_FAQS,
  WHR_FAQS,
  DUE_DATE_FAQS,
} from "@/lib/faq-health";

import {
  AREA_FAQS,
  FRACTION_FAQS,
  GRADE_FAQS,
  MEAN_MEDIAN_MODE_FAQS,
  MIXED_NUMBERS_FAQS,
  NUMBERS_TO_WORDS_FAQS,
  PROBABILITY_FAQS,
  ROUNDING_FAQS,
  SCIENTIFIC_FAQS,
  SIMPLIFY_FRACTIONS_FAQS,
  SQUARE_ROOT_FAQS,
  STANDARD_DEVIATION_FAQS,
  TRIANGLE_FAQS,
  VOLUME_FAQS,
  AVERAGE_FAQS,
  BINARY_FAQS,
  CIRCLE_FAQS,
  CONFIDENCE_INTERVAL_FAQS,
  DISTANCE_FAQS,
  EXPONENT_FAQS,
  FACTORIAL_FAQS,
  GCD_LCM_FAQS,
  HEX_FAQS,
  HYPOTHESIS_TEST_FAQS,
  LINEAR_EQUATION_FAQS,
  LOG_FAQS,
  LONG_DIVISION_FAQS,
  MEAN_ABSOLUTE_DEVIATION_FAQS,
  PERMUTATION_COMBINATION_FAQS,
  PRIME_FACTOR_FAQS,
  PYTHAGOREAN_FAQS,
  QUADRATIC_FAQS,
  RATIO_FAQS,
  SAMPLE_SIZE_FAQS,
  TRIG_FAQS,
  VARIANCE_FAQS,
  Z_SCORE_FAQS,
  MATRIX_FAQS,
} from "@/lib/faq-math";

import {
  AGE_FAQS,
  CONCRETE_FAQS,
  DATE_FAQS,
  DISCOUNT_FAQS,
  ELECTRICITY_COST_FAQS,
  FUEL_COST_FAQS,
  HOURS_FAQS,
  PASSWORD_GENERATOR_FAQS,
  RANDOM_NUMBER_FAQS,
  SUBNET_FAQS,
  TIME_FAQS,
  UNIT_CONVERTER_FAQS,
  ACRES_TO_HECTARES_FAQS,
  BANDWIDTH_FAQS,
  CELSIUS_TO_FAHRENHEIT_FAQS,
  CM_TO_INCHES_FAQS,
  CUPS_TO_ML_FAQS,
  FAHRENHEIT_TO_CELSIUS_FAQS,
  FEET_TO_CM_FAQS,
  FEET_TO_METERS_FAQS,
  GALLONS_TO_LITERS_FAQS,
  GRAMS_TO_OUNCES_FAQS,
  INCHES_TO_CM_FAQS,
  KELVIN_TO_CELSIUS_FAQS,
  KG_TO_LBS_FAQS,
  KILOMETERS_TO_MILES_FAQS,
  LBS_TO_KG_FAQS,
  LITERS_TO_GALLONS_FAQS,
  METER_TO_FEET_FAQS,
  MILES_TO_KILOMETERS_FAQS,
  ML_TO_CUPS_FAQS,
  MM_TO_INCHES_FAQS,
  MPH_TO_KPH_FAQS,
  OUNCES_TO_GRAMS_FAQS,
  OUNCES_TO_ML_FAQS,
  SQFT_TO_SQM_FAQS,
  SQM_TO_SQFT_FAQS,
  TIP_ADVANCED_FAQS,
  COLOR_CONVERTER_FAQS,
  TYPING_SPEED_FAQS,
  HASH_GENERATOR_FAQS,
  SCREEN_RESOLUTION_FAQS,
  BMI_IMPERIAL_FAQS,
  TEXT_ANALYZER_FAQS,
  PERCENTAGE_CHANGE_FAQS,
  DOWNLOAD_TIME_FAQS,
  GAS_MILEAGE_FAQS,
  DATA_STORAGE_FAQS,
  TIME_ZONE_FAQS,
  COUNTDOWN_FAQS,
  LOAN_TO_VALUE_FAQS,
  VOLTAGE_DROP_FAQS,
} from "@/lib/faq-other";

import {
  CAPACITOR_FAQS,
  COULOMBS_LAW_FAQS,
  DENSITY_FAQS,
  DOPPLER_EFFECT_FAQS,
  ELECTRIC_FIELD_FAQS,
  ELECTRIC_POWER_FAQS,
  ESCAPE_VELOCITY_FAQS,
  FREQUENCY_FAQS,
  HALF_LIFE_FAQS,
  HEAT_CAPACITY_FAQS,
  IDEAL_GAS_LAW_FAQS,
  OHMS_LAW_FAQS,
  PHOTON_ENERGY_FAQS,
  RELATIVISTIC_KE_FAQS,
  RESISTOR_FAQS,
  SOUND_INTENSITY_FAQS,
  TEMPERATURE_CONVERTER_FAQS,
  THERMAL_EXPANSION_FAQS,
  WAVE_SPEED_FAQS,
  WAVELENGTH_FAQS,
} from "@/lib/faq-physics-advanced";

import {
  CENTRIPETAL_FORCE_FAQS,
  FORCE_FAQS,
  FREE_FALL_FAQS,
  GRAVITATIONAL_FORCE_FAQS,
  KINETIC_ENERGY_FAQS,
  MOMENTUM_FAQS,
  POTENTIAL_ENERGY_FAQS,
  PRESSURE_FAQS,
  PROJECTILE_MOTION_FAQS,
  TORQUE_FAQS,
} from "@/lib/faq-physics-mechanics";

import {
  ALUMINUM_VALUE_FAQS,
  COPPER_VALUE_FAQS,
  GOLD_VALUE_FAQS,
  LEAD_VALUE_FAQS,
  NICKEL_VALUE_FAQS,
  PALLADIUM_VALUE_FAQS,
  PLATINUM_VALUE_FAQS,
  SILVER_VALUE_FAQS,
  ZINC_VALUE_FAQS,
} from "@/lib/faq-metals";


import {
  BTU_FAQS,
  DECK_FAQS,
  DRYWALL_FAQS,
  FENCE_FAQS,
  GRAVEL_FAQS,
  GUTTER_FAQS,
  INSULATION_FAQS,
  MULCH_FAQS,
  PAINT_FAQS,
  ROOFING_FAQS,
  STAIRS_FAQS,
  TILE_FAQS,
} from "@/lib/faq-construction";
// ==========================================
// Calculator registrations with lazy loading
// ==========================================

registerCalculator({
  component: lazy(() => import("@/calculators/finance/APRCalculator")),
  slug: "apr-calculator",
  title: "APR Calculator",
  shortTitle: "APR",
  description:
    "Calculate annual percentage rate including all fees and costs",
  category: "finance",
  icon: "📊",
  keywords: [
    "APR",
    "annual percentage rate",
    "interest rate",
    "loan cost",
    "mortgage",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is the difference between APR and interest rate?",
      answer:
        "The interest rate is the percentage of interest charged on the loan balance. APR includes the interest rate plus other costs of borrowing (fees, points, closing costs) expressed as an annualized percentage. APR is always equal to or higher than the stated interest rate, and is the better metric for comparing loans.",
    },
    {
      question: "What fees are included in APR?",
      answer:
        "APR includes origination fees, underwriting fees, appraisal fees, title insurance, recording fees, and discount points. Property taxes, homeowner insurance, and HOA fees are typically NOT included in APR. Check your loan estimate to see which fees are included in the APR calculation.",
    },
    {
      question: "How do I compare loans using APR?",
      answer:
        "Always use APR to compare loans, not the stated interest rate. Calculate the total cost (principal + interest + fees) for each loan option over the full term. For mortgages, even a 0.5% APR difference can cost $50,000-80,000 more over 30 years. Request written loan estimates with full APR disclosure from multiple lenders.",
    },
    {
      question: "What is a discount point?",
      answer:
        "A discount point is a fee equal to 1% of the loan amount, paid upfront to reduce (buy down) the stated interest rate, typically by 0.25%. For example, on a $200,000 mortgage, one point costs $2,000 and reduces the rate by 0.25%. Points should only make sense if you plan to keep the loan long enough to break even on the upfront cost.",
    },
    {
      question: "Why does APR matter more than interest rate?",
      answer:
        "APR reflects the true annual cost of borrowing including all fees. Lenders might offer the same stated rate with different fees; the one with lower fees has lower APR and is genuinely cheaper. APR helps you make informed decisions and compare loan offers fairly. The Truth in Lending Act requires lenders to disclose APR to protect consumers.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/AmortizationCalculator")),
  slug: "amortization-calculator",
  title: "Amortization Calculator",
  shortTitle: "Amortization",
  description:
    "Calculate monthly loan payments, total interest, and amortization schedule breakdown",
  category: "finance",
  icon: "🗓️",
  keywords: [
    "amortization",
    "loan payment",
    "mortgage",
    "interest calculation",
    "monthly payment",
  ],
  dateModified: "2026-04-09",
  faqs: AMORTIZATION_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/AnnuityCalculator")),
  faqs: ANNUITY_FAQS,
  slug: "annuity-calculator",
  title: "Annuity Calculator",
  shortTitle: "Annuity",
  description: "Calculate present and future values of annuities for retirement and financial planning",
  category: "finance",
  icon: "📈",
  keywords: ["annuity", "pension", "future value", "present value", "compound interest"],
  popular: false,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/AutoLoanCalculator")),
  slug: "auto-loan",
  title: "Auto Loan Calculator",
  shortTitle: "Auto Loan",
  description: "Calculate monthly payments, total interest, and loan costs",
  category: "finance",
  icon: "🚗",
  keywords: ["auto", "car", "loan", "payment", "vehicle"],
  popular: true,
  faqs: AUTO_LOAN_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/BondCalculator")),
  slug: "bond-calculator",
  title: "Bond Calculator",
  shortTitle: "Bond Calculator",
  description: "Calculate bond prices, current yield, YTM, and duration for fixed-income investing",
  category: "finance",
  icon: "💳",
  keywords: ["bond calculator", "bond price", "yield to maturity", "YTM", "duration", "fixed income"],
  popular: true,
  faqs: [
    {
      question: "What does it mean if the bond price is above face value?",
      answer: "The bond is trading at a premium. This happens when the coupon rate is higher than the market yield. The bond will gradually decline in price as it approaches maturity, converging to face value. You're paying more upfront but receiving above-market coupon payments."
    },
    {
      question: "Should I buy a bond trading at a discount or premium?",
      answer: "Both can be appropriate depending on your strategy. A discounted bond offers the potential for price appreciation if yields fall. A premium bond offers above-market coupon income. Compare the YTM to available alternatives and consider your interest rate outlook and investment timeline."
    },
    {
      question: "What's the difference between coupon rate and yield?",
      answer: "Coupon rate is fixed at issuance (set as a percentage of face value). Yield changes as bond prices fluctuate in the market. If you buy a 5% coupon bond for a premium price, your actual yield (return) will be less than 5%. YTM accounts for the purchase price and return of principal."
    },
    {
      question: "How does duration help me?",
      answer: "Duration tells you how much a bond's price will move if yields change. A 5-year duration bond loses about 5% if yields rise 1%. Longer duration = more price volatility but typically higher yield. Use duration to understand your interest rate risk and to match your investment timeline."
    },
    {
      question: "What's the relationship between interest rates and bond prices?",
      answer: "They're inversely related. When interest rates rise, new bonds offer higher yields, making existing bonds worth less (to sell, you'd have to discount them to compete). When rates fall, existing bonds become more valuable. This is why bond prices fluctuate in the secondary market."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/BreakEvenCalculator")),
  faqs: BREAK_EVEN_FAQS,
  slug: "breakeven-calculator",
  title: "Breakeven Calculator",
  shortTitle: "Breakeven",
  description: "Calculate breakeven point and analyze profit/loss at different sales volumes",
  category: "finance",
  icon: "📊",
  keywords: ["breakeven", "business analysis", "cost analysis", "profit"],
  popular: false,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/BudgetCalculator")),
  faqs: BUDGET_FAQS,
  slug: "budget-calculator",
  title: "Budget Calculator",
  shortTitle: "Budget",
  description: "Allocate your income and compare to the 50/30/20 budgeting rule",
  category: "finance",
  icon: "📊",
  keywords: ["budget", "income allocation", "50/30/20", "spending", "financial planning"],
  popular: true,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/BusinessLoanCalculator")),
  slug: "business-loan-calculator",
  title: "Business Loan Calculator",
  shortTitle: "Business Loan",
  description: "Calculate monthly payments and costs for business loans with origination fees",
  category: "finance",
  icon: "💼",
  keywords: ["business loan", "SBA loan", "small business", "loan payment"],
  popular: false,
  faqs: BUSINESS_LOAN_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CAGRCalculator")),
  slug: "cagr-calculator",
  title: "CAGR Calculator",
  shortTitle: "CAGR",
  description:
    "Calculate compound annual growth rate and visualize investment growth over time",
  category: "finance",
  icon: "📈",
  keywords: [
    "CAGR",
    "compound annual growth rate",
    "investment return",
    "growth rate",
    "investment performance",
  ],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is CAGR?",
      answer:
        "CAGR (Compound Annual Growth Rate) is the average annual growth rate of an investment over a specified period, smoothing out volatility. The formula is: CAGR = (Ending Value / Beginning Value)^(1/Years) - 1.",
    },
    {
      question: "How is CAGR different from average annual return?",
      answer:
        "CAGR focuses on actual beginning and ending values using compounding logic, while average annual return adds yearly percentages and divides. CAGR is preferred because it accurately reflects consistent yearly growth regardless of volatility.",
    },
    {
      question: "Can CAGR be negative?",
      answer:
        "Yes, CAGR can be negative if your ending value is less than your beginning value. A negative CAGR indicates the investment declined on average each year over the period.",
    },
    {
      question: "What is a good CAGR?",
      answer:
        "A good CAGR depends on the asset type and time period. Stocks historically average 10% CAGR over long periods, bonds average 4-5%, and real estate averages 5-8%. Compare CAGR to benchmarks like the S&P 500 for context.",
    },
    {
      question: "Does CAGR account for risk?",
      answer:
        "No, CAGR does not measure volatility or risk. Two investments with identical CAGR can have very different risk profiles. Always evaluate CAGR alongside risk metrics like standard deviation and compare investments with similar risk levels.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CDCalculator")),
  slug: "cd-calculator",
  title: "CD Calculator",
  shortTitle: "Certificate of Deposit",
  description:
    "Calculate CD maturity value and interest with various compounding frequencies",
  category: "finance",
  icon: "💳",
  keywords: [
    "CD",
    "certificate of deposit",
    "savings",
    "APY",
    "interest earned",
    "CD rates",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is a Certificate of Deposit (CD)?",
      answer:
        "A CD is a savings product where you deposit money for a fixed term (3 months to 5 years) at a guaranteed interest rate. CDs are FDIC-insured up to $250,000, making them extremely safe. You receive a higher interest rate than savings accounts in exchange for locking up your money until maturity.",
    },
    {
      question: "What is the difference between APY and interest rate?",
      answer:
        "APY (Annual Percentage Yield) is the effective annual return after accounting for compounding, while the interest rate is the simple rate without compounding effects. For CDs, APY is the figure quoted by banks and represents your actual annual return. Compounding frequency (daily vs. monthly) slightly affects how interest accrues but doesn't change the APY for CDs.",
    },
    {
      question: "What happens if I withdraw money early?",
      answer:
        "Early withdrawal typically incurs a penalty, usually forfeiting 3-12 months of interest (varies by bank and CD term). Some banks offer no-penalty CDs with slightly lower rates, providing withdrawal flexibility. Always read the CD terms before investing, and never invest money you might need before maturity to avoid penalties.",
    },
    {
      question: "What is a CD ladder?",
      answer:
        "A CD ladder is a strategy where you buy multiple CDs with staggered maturity dates (e.g., five 1-year CDs maturing 6 months apart). As each CD matures, reinvest it in a new longest-term CD. Laddering provides regular access to portions of your money while capturing higher yields than savings accounts, balancing safety with returns.",
    },
    {
      question: "Are CDs safe? Are they FDIC-insured?",
      answer:
        "CDs are extremely safe if purchased from FDIC-insured banks or NCUA-insured credit unions. FDIC insurance protects up to $250,000 per depositor per institution, meaning even if the bank fails, your CD is protected. This makes CDs ideal for risk-averse savers and emergency funds.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CarLeaseCalculator")),
  slug: "car-lease-calculator",
  title: "Car Lease Calculator",
  shortTitle: "Car Lease",
  description: "Calculate car lease payments, residual value, and total lease costs",
  category: "finance",
  icon: "🚗",
  keywords: ["car lease", "lease payment", "auto lease", "lease cost", "vehicle lease"],
  popular: false,
  faqs: [
    {
      question: "What's a money factor and how does it compare to APR?",
      answer: "Money factor is the financing charge on a lease, similar to interest rate on a loan. Multiply by 2400 to approximate APR. A money factor of 0.0015 equals about 3.6% APR. Better credit gets lower money factors. Always negotiate the money factor—even 0.0001 difference saves hundreds over 3 years."
    },
    {
      question: "What happens if I exceed mileage allowance?",
      answer: "You pay excess mileage charges, typically $0.15-0.30 per mile, depending on the lease agreement. On a 36-month lease with 12,000 miles/year allowance, you can drive 36,000 miles total. If you drive 40,000 miles, you owe 4,000 × $0.25 = $1,000. Estimate conservatively."
    },
    {
      question: "Does lease payment include insurance?",
      answer: "No. The monthly payment is depreciation + finance charges. Insurance, registration, maintenance, and taxes are separate costs. Leases typically require comprehensive and collision insurance with low deductibles, which costs more than typical auto insurance."
    },
    {
      question: "What's the residual value and why does it matter?",
      answer: "Residual value is the estimated car worth at lease end. Higher residual value = lower depreciation = lower lease payment. Toyota and Honda typically have high residuals; luxury cars have lower residuals. A 1% difference in residual value changes the monthly payment by about $10-20."
    },
    {
      question: "Is leasing or buying cheaper long-term?",
      answer: "Buying and keeping a car 7-10 years is typically cheaper. However, leasing wins if you drive under 12,000 miles/year, want predictable costs, value warranty coverage, and like new cars frequently. Calculate your total cost including maintenance, insurance, and taxes to compare."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CommissionCalculator")),
  slug: "commission-calculator",
  title: "Commission Calculator",
  shortTitle: "Sales Commission",
  description:
    "Calculate sales commission with flat, tiered, and draw structures",
  category: "finance",
  icon: "📊",
  keywords: [
    "sales commission",
    "commission calculator",
    "sales compensation",
    "tiered commission",
    "commission structure",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What are the main types of commission structures?",
      answer:
        "There are three main types: Flat-rate (fixed percentage on all sales), Tiered (different percentages at different sales levels to incentivize higher performance), and Draw against commission (guaranteed minimum deducted from future earnings). Each has pros and cons regarding income stability vs. upside potential.",
    },
    {
      question: "What is a tiered commission structure?",
      answer:
        "Tiered commission pays different percentages at different sales levels. Example: 3% on first $25k, 6% on next $25k, 9% beyond. This incentivizes exceeding targets. $50k in sales yields $3,000 vs. $2,500 under flat 5% rate. Tiered structures motivate top performers but can create cliff effects at tier boundaries.",
    },
    {
      question: "What is a draw against commission?",
      answer:
        "A draw is a guaranteed minimum salary advanced against future commission earnings. If you earn a $2,000 draw with 5% commission and generate $3,000 in commission, you keep the extra $1,000. If commission is $1,500, you may owe back $500. Draws provide income stability but cap upside for high earners.",
    },
    {
      question: "How do I evaluate a commission job offer?",
      answer:
        "Calculate expected total pay under realistic sales scenarios. Research typical sales volumes in the role and industry. Ask for historical earnings data (what top, average, and bottom performers actually made). Compare across offers using the same estimated sales level. Don't be swayed by high commission percentages if sales are unpredictable or you're inexperienced.",
    },
    {
      question: "How are commissions taxed?",
      answer:
        "Commission is taxed as income and subject to self-employment tax if you're a 1099 contractor. Unlike salary, taxes aren't withheld, so set aside 25-40% for taxes. Keep detailed sales records for tax purposes. Consider quarterly estimated tax payments to avoid large year-end bills. In high-earning years, contribute to SEP-IRAs or Solo 401(k)s to reduce taxable income.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CompoundInterestCalculator")),
  slug: "compound-interest-calculator",
  title: "Compound Interest Calculator",
  shortTitle: "Compound Interest",
  description: "Calculate investment growth with compound interest and regular contributions",
  category: "finance",
  icon: "📈",
  keywords: ["compound interest", "investment growth", "savings", "interest"],
  popular: true,
  faqs: COMPOUND_INTEREST_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CostOfLivingCalculator")),
  faqs: COST_OF_LIVING_FAQS,
  slug: "cost-of-living-calculator",
  title: "Cost of Living Calculator",
  shortTitle: "Cost of Living",
  description: "Compare cost of living between cities and calculate equivalent salary",
  category: "finance",
  icon: "🏙️",
  keywords: ["cost of living", "relocation", "salary comparison", "city comparison"],
  popular: true,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CreditCardCalculator")),
  slug: "credit-card",
  title: "Credit Card Calculator",
  shortTitle: "Credit Card",
  description: "Compare payoff scenarios and understand credit card interest",
  category: "finance",
  icon: "💰",
  keywords: ["credit", "card", "interest", "payoff", "debt", "APR"],
  popular: true,
  faqs: CREDIT_CARD_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/CurrencyConverterCalculator")),
  faqs: CURRENCY_CONVERTER_FAQS,
  slug: "currency-converter-calculator",
  title: "Currency Converter Calculator",
  shortTitle: "Currency Converter",
  description:
    "Convert between 30+ world currencies with live exchange rates updated hourly",
  category: "finance",
  icon: "💱",
  keywords: [
    "currency converter",
    "exchange rate",
    "forex",
    "international",
    "live rates",
  ],
  popular: true,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/DebtConsolidationCalculator")),
  slug: "debt-consolidation-calculator",
  title: "Debt Consolidation Calculator",
  shortTitle: "Debt Consolidation",
  description: "Calculate consolidation savings and compare multiple debts with single loan option",
  category: "finance",
  icon: "💰",
  keywords: ["debt consolidation", "credit card debt", "loan", "interest savings", "payoff"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "Is debt consolidation a good idea?",
      answer: "Consolidation is excellent <strong>if</strong> the new loan rate is significantly lower than your current average rate. Consolidating {formatCurrency(16000)} of 20% credit card debt into 9% personal loan saves thousands in interest. However, consolidation only works if you commit to not re-borrowing. Many people consolidate, run up credit cards again, and end up with {'>='} {formatCurrency(30000)} total debt. Consolidation is a tool to escape debt, not to free up spending capacity.",
    },
    {
      question: "What types of consolidation loans are available?",
      answer: "Options: (1) Personal loan: unsecured, 6-15% rates, no collateral risk, {formatCurrency(5000)}-{formatCurrency(50000)} limits. (2) Home equity loan/HELOC: secured by home, 5-10% rates, but puts home at risk if you default. (3) Balance transfer card: 0% for 6-21 months, then 18-25%, includes 3-5% transfer fee. (4) Debt management plan: work with nonprofit, negotiate lower rates, avoid new debt. (5) 401(k) loan: borrow from retirement savings, repay to yourself, but risks retirement if you leave job. Evaluate all options.",
    },
    {
      question: "How much can I save with consolidation?",
      answer: "Savings depend on the rate difference and payoff speed. Example: {formatCurrency(16000)} at 20% APR takes {'>='} 6 years to pay off paying {formatCurrency(300)}/month and costs {formatCurrency(5200)} in interest. Same debt at 9% for 5 years costs {formatCurrency(1900)} in interest—a savings of {formatCurrency(3300)}. The larger your debt, the longer the payoff timeline, and the greater the rate reduction, the larger your savings. Use this calculator to estimate your specific savings.",
    },
    {
      question: "What happens to my credit score after consolidation?",
      answer: "Consolidation temporarily lowers your credit score (hard inquiry, new account, credit mix change), but rebuilds quickly as you make on-time payments. If consolidation reduces your overall debt and you don't re-borrow, your score improves over 6-12 months. The longer-term benefit is discipline: a single on-time payment is easier than juggling multiple accounts. Within 1-2 years of consolidation, your score is typically higher than before due to lower utilization and payment history.",
    },
    {
      question: "What should I do with credit cards after consolidation?",
      answer: "<strong>Don't close them immediately</strong>, as closing accounts lowers your credit score. Instead, <strong>freeze or lock them</strong> so you can't use them. After 6-12 months of consolidation discipline, you can close old accounts safely. Many people close cards after consolidation and immediately open new ones, replicating the original debt. Commit to a spending freeze: pay off the consolidation loan aggressively, build an emergency fund, then rebuild credit responsibly. Consolidation is only successful if you change habits.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/DebtPayoffCalculator")),
  slug: "debt-payoff",
  title: "Debt Payoff Calculator",
  shortTitle: "Debt Payoff",
  description: "Calculate your debt payoff timeline and savings with extra payments",
  category: "finance",
  icon: "💳",
  keywords: ["debt", "payoff", "loan", "credit", "interest"],
  popular: true,
  faqs: DEBT_PAYOFF_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/DebtToIncomeCalculator")),
  slug: "debt-to-income-calculator",
  title: "Debt-to-Income Calculator",
  shortTitle: "DTI Ratio",
  description:
    "Calculate debt-to-income ratio and assess loan qualification readiness",
  category: "finance",
  icon: "📉",
  keywords: [
    "debt to income",
    "DTI",
    "debt ratio",
    "lending qualification",
    "mortgage approval",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is Debt-to-Income ratio (DTI)?",
      answer:
        "DTI is a percentage comparing your total monthly debt payments to gross monthly income. For example, if you earn $5,000 monthly and owe $1,500 in debts, your DTI is 30%. Lenders use DTI to assess your ability to repay new loans. Lower DTI (under 43%) indicates you can comfortably handle additional debt.",
    },
    {
      question: "What is front-end vs. back-end DTI?",
      answer:
        "Front-end DTI (housing ratio) compares only housing costs to income; lenders prefer this under 28%. Back-end DTI compares all monthly debts to income; lenders prefer under 36-43%. For mortgages, lenders evaluate both. You could have good front-end DTI but fail back-end DTI if you have substantial other debts like student loans or credit cards.",
    },
    {
      question: "What DTI do lenders require for a mortgage?",
      answer:
        "Most mortgage lenders require back-end DTI under 43%, with 36% being preferred for better rates and terms. Some jumbo lenders accept up to 50% for excellent credit and large down payments. Fannie Mae and Freddie Mac typically cap at 43%. Check with your lender for specific requirements, as DTI thresholds vary.",
    },
    {
      question: "How can I improve my DTI?",
      answer:
        "Increase income (raises, side gigs) or reduce debt. Paying down credit cards, eliminating auto loans, or refinancing student loans lowers your debt load. Prioritize high-interest debt first (credit cards). Avoid taking on new debt while improving DTI. Some lenders allow closing low-balance credit cards to improve DTI by excluding them from the calculation.",
    },
    {
      question: "Does DTI include all debts?",
      answer:
        "For mortgage qualification, DTI typically includes mortgage/rent, auto loans, student loans, credit cards, and personal loans (using minimum monthly payments). It usually excludes utilities, insurance, and subscriptions unless specifically listed on credit reports. Check with your lender for their exact DTI calculation method, as requirements vary.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/DepreciationCalculator")),
  slug: "depreciation-calculator",
  title: "Asset Depreciation Calculator",
  shortTitle: "Depreciation",
  description: "Calculate depreciation using straight-line, declining balance, or sum-of-years methods",
  category: "finance",
  icon: "📉",
  keywords: ["depreciation", "asset", "accounting", "book value", "useful life", "GAAP"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is depreciation and why is it important?",
      answer: "Depreciation is an accounting method that allocates an asset's cost over its useful life. When a business buys a {formatCurrency(100000)} delivery truck expected to last 10 years, it expenses {formatCurrency(10000)} per year instead of {formatCurrency(100000)} immediately. This matches expenses to revenue, accurately reflects the asset's declining value, and reduces taxable income over time. For financial reporting, depreciation is a non-cash expense that helps companies show true profitability.",
    },
    {
      question: "What's the difference between straight-line and accelerated depreciation?",
      answer: "Straight-line depreciation spreads the cost equally across all years: a {formatCurrency(100000)} asset over 10 years depreciates {formatCurrency(10000)}/year. Accelerated methods (DDB, SYD) front-load depreciation: Year 1 might be {formatCurrency(20000)}, Year 2 is {formatCurrency(16000)}, then declining. Straight-line is simpler and matches assets that wear evenly; accelerated methods reduce taxes sooner, useful for technology and vehicles that lose value fast. Businesses can use straight-line for financial statements and accelerated (MACRS) for taxes.",
    },
    {
      question: "Can I choose my own useful life for depreciation?",
      answer: "For financial reporting under GAAP, useful life is based on actual expected use. A building typically 40+ years, vehicles 5-7 years, machinery 5-10 years, software 3-5 years. For <strong>tax purposes</strong>, the IRS sets specific depreciation periods (MACRS): cars 5 years, real property 27.5-39 years, etc. You cannot arbitrarily choose a 50-year useful life for a delivery truck if industry standard is 5 years. Useful life must be reasonable and defensible if audited.",
    },
    {
      question: "What is salvage value and how does it affect depreciation?",
      answer: "Salvage value (residual value) is the estimated value of an asset at the end of its useful life. A {formatCurrency(100000)} vehicle with {formatCurrency(10000)} salvage value over 5 years depreciates {formatCurrency(90000)} total, or {formatCurrency(18000)}/year (straight-line). Salvage value reduces the depreciable amount. However, under MACRS tax depreciation, salvage value is ignored—you depreciate the full cost. This is one reason tax depreciation differs from book depreciation.",
    },
    {
      question: "What happens when an asset is fully depreciated?",
      answer: "<strong>Fully depreciated</strong> means book value has reached salvage value and annual depreciation is zero. The asset may still be usable and generating revenue, but no more deductions are taken. On the balance sheet, the asset remains at salvage value. If you later sell it for more than salvage value, you recognize a gain; if less, a loss. Fully depreciated assets don't provide tax shields, so businesses often sell or trade them to start depreciation cycles on new assets.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/DividendCalculator")),
  slug: "dividend-calculator",
  title: "Dividend Calculator",
  shortTitle: "Dividend Income",
  description:
    "Calculate dividend income and visualize the power of dividend reinvestment",
  category: "finance",
  icon: "💰",
  keywords: [
    "dividend",
    "dividend yield",
    "dividend income",
    "dividend reinvestment",
    "passive income",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is dividend yield?",
      answer:
        "Dividend yield is the annual dividend payment divided by the stock price, expressed as a percentage. For example, a $100 stock paying $4 annually has a 4% dividend yield. Higher yields can indicate strong income but may also signal market concerns about the company.",
    },
    {
      question: "What is dividend reinvestment (DRIP)?",
      answer:
        "DRIP automatically uses dividend payments to buy additional shares of the company. This accelerates wealth growth through compounding. Over long periods, reinvestment can double or triple wealth compared to taking dividends as cash income, especially with growing dividends.",
    },
    {
      question: "What is a sustainable dividend?",
      answer:
        "A sustainable dividend has a payout ratio (annual dividend / annual earnings) below 75%, indicating the company generates enough profit to maintain and grow dividends. Check the balance sheet and cash flow to ensure the company isn't borrowing to pay dividends, which signals trouble ahead.",
    },
    {
      question: "Are dividends taxed?",
      answer:
        "Qualified dividends from U.S. stocks held over 60 days are taxed at favorable long-term capital gains rates (0%, 15%, or 20%). Non-qualified dividends are taxed as ordinary income. International dividends may face withholding taxes. Hold dividends in tax-advantaged accounts when possible.",
    },
    {
      question: "Which sectors pay the highest dividends?",
      answer:
        "Utilities, real estate investment trusts (REITs), and consumer staples typically pay the highest dividends (3-8% yields). Growth sectors like technology and healthcare usually pay lower dividends (0-2%) because they reinvest profits. Match dividend strategy to your income needs and risk tolerance.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/DownPaymentCalculator")),
  slug: "down-payment-calculator",
  title: "Down Payment Calculator",
  shortTitle: "Down Payment",
  description: "Calculate savings needed for your down payment and understand PMI impact",
  category: "finance",
  icon: "🏦",
  keywords: ["down payment", "home savings", "PMI", "first-time buyer", "mortgage"],
  faqs: DOWN_PAYMENT_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/FHALoanCalculator")),
  slug: "fha-loan-calculator",
  title: "FHA Loan Calculator",
  shortTitle: "FHA Loan",
  description: "Calculate FHA mortgage payments with upfront and annual mortgage insurance premiums",
  category: "finance",
  icon: "🏠",
  keywords: ["FHA loan", "mortgage", "first-time homebuyer", "MIP", "mortgage insurance", "down payment"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is an FHA loan and who qualifies?",
      answer: "An FHA loan is a government-backed mortgage insured by the Federal Housing Administration, designed for homebuyers with lower credit scores or down payments. You typically need a credit score of 580+, though 620+ gets better rates. Income must be stable and verified. Debt-to-income ratio must be {'<'} 43-50% depending on compensating factors. FHA loans allow down payments as low as 3.5% (vs. 10-20% for conventional), making homeownership accessible to more buyers, especially first-time homebuyers.",
    },
    {
      question: "What is the upfront mortgage insurance premium (UFMIP)?",
      answer: "The upfront MIP is a one-time insurance premium of 1.75% of the base loan amount, added to your total loan. On a {formatCurrency(250000)} loan, UFMIP is {formatCurrency(4375)}. Most borrowers roll this into the loan and pay it over 30 years rather than paying upfront at closing. This premium insures the lender against default. Unlike annual MIP, you cannot remove UFMIP once added.",
    },
    {
      question: "What is annual mortgage insurance premium (Annual MIP) and can it be removed?",
      answer: "<strong>Annual MIP</strong> is 0.55% of the loan for down payments below 10%, or 0.3% above 10%, paid monthly. On a {formatCurrency(300000)} loan with 5% down, annual MIP is {formatCurrency(1650)}, or {formatCurrency(137.50)}/month. You <strong>can remove annual MIP</strong> once you reach 20% equity by paying down the loan or home appreciation. You must request cancellation from your lender. However, if you put down {'<'} 10%, MIP typically continues for the loan's full term unless you refinance to remove it.",
    },
    {
      question: "How does FHA compare to conventional loans?",
      answer: "FHA allows 3.5% down vs. 10-20% for conventional, making it accessible for those without large down payments. FHA requires mortgage insurance (MIP), while conventional loans above 20% down have no insurance. FHA has more lenient credit requirements (580+ vs. 620+). However, FHA total costs (with MIP) can exceed conventional by {'>='} 1% annually. After saving 20% down, conventional loans often cost less over time. FHA is best for first-time buyers; conventional works for those with savings and strong credit.",
    },
    {
      question: "Can I remove FHA mortgage insurance and refinance to conventional?",
      answer: "Yes. Once you reach 20% equity, you can refinance to a conventional loan (without FHA insurance) to save on MIP costs. For example, if your {formatCurrency(300000)} FHA loan is now {formatCurrency(240000)} (20% equity), refinancing to conventional eliminates MIP. However, refinancing has closing costs ({formatCurrency(3000)}-{formatCurrency(9000)}), so calculate breakeven. If you'll stay {greater than} 5 years, refinancing usually saves money; if {'<'} 2 years, closing costs may not justify it.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/FIRECalculator")),
  slug: "fire-calculator",
  title: "FIRE Calculator",
  shortTitle: "FIRE",
  description: "Calculate years to financial independence using the 4% rule and compound growth projections",
  category: "finance",
  icon: "🔥",
  keywords: ["FIRE", "financial independence", "retire early", "4% rule", "compound interest", "savings rate"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: FIRE_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/FourOhOneKCalculator")),
  faqs: FOUR_OH_ONE_K_FAQS,
  slug: "401k-calculator",
  title: "401(k) Calculator",
  shortTitle: "401(k)",
  description:
    "Estimate your 401(k) balance at retirement with employer matching and growth projections",
  category: "finance",
  icon: "🏦",
  keywords: [
    "401k",
    "retirement",
    "employer match",
    "investment growth",
    "retirement planning",
  ],
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/FutureValueCalculator")),
  faqs: FUTURE_VALUE_FAQS,
  slug: "future-value-calculator",
  title: "Future Value Calculator",
  shortTitle: "Future Value",
  description:
    "Calculate future value with compound interest and regular contributions",
  category: "finance",
  icon: "🔮",
  keywords: [
    "future value",
    "investment",
    "compound interest",
    "savings growth",
    "retirement planning",
  ],
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/HomeAffordabilityCalculator")),
  slug: "home-affordability-calculator",
  title: "Home Affordability Calculator",
  shortTitle: "Home Affordability",
  description: "Calculate maximum home price based on income and debt-to-income ratios",
  category: "finance",
  icon: "🏡",
  keywords: ["home affordability", "DTI ratio", "housing budget", "max home price"],
  popular: true,
  faqs: HOME_AFFORDABILITY_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/HomeEquityCalculator")),
  slug: "home-equity-calculator",
  title: "Home Equity Calculator",
  shortTitle: "Home Equity",
  description: "Calculate available home equity and compare home equity loan vs. HELOC options",
  category: "finance",
  icon: "🔑",
  keywords: ["home equity", "HELOC", "home equity loan", "second mortgage", "borrow against home"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is home equity and how much can I borrow?",
      answer: "Home equity is the difference between your home's current value and your mortgage balance. If your home is worth {formatCurrency(500000)} and you owe {formatCurrency(350000)}, you have {formatCurrency(150000)} in equity. Most lenders allow you to borrow up to 80% of home value minus your mortgage: ({formatCurrency(500000)} × 80%) - {formatCurrency(350000)} = {formatCurrency(50000)} available. Some aggressive lenders go to 90%, but 80% is standard to protect themselves (and you) from negative equity if home values decline.",
    },
    {
      question: "What is the difference between a home equity loan and a HELOC?",
      answer: "<strong>Home Equity Loan:</strong> Lump-sum fixed borrowing. Borrow {formatCurrency(50000)}, receive it upfront, repay over 5-15 years with fixed monthly payments. Simple and predictable. <strong>HELOC:</strong> Line of credit. Draw funds as needed during draw period (5-10 years), pay interest-only on drawn amounts, then repay principal + interest during repayment period (10-20 years). Flexible—you only pay for what you borrow. Choose home equity loan for simplicity; HELOC if you need flexible access or plan to draw over time.",
    },
    {
      question: "Are home equity loan interest payments tax-deductible?",
      answer: "Home equity interest is tax-deductible <strong>if</strong> the funds are used for home improvements (qualified residence interest). Funds used for education, investments, or general purposes may not be deductible. The SALT cap limits home interest deduction combined with state/local taxes to {formatCurrency(750000)} in debt. Consult a tax professional—rules are complex and changed with 2017 tax reform. Even if not deductible, home equity rates are still typically lower than unsecured personal loans or credit cards.",
    },
    {
      question: "What are the risks of using a HELOC or home equity loan?",
      answer: "Your home secures the loan. If you default, the lender can foreclose and take your home. HELOCs often have variable interest rates; if rates rise, monthly payments spike. A {formatCurrency(50000)} HELOC at 8% costs {formatCurrency(333)}/month; if rates rise to 12%, it costs {formatCurrency(500)}/month (+50% higher). Additionally, a second lien (home equity) is riskier than a first mortgage; rates are 1-2% higher. Only borrow against home equity if you're confident you can repay, especially with variable-rate HELOCs.",
    },
    {
      question: "Can I use home equity to consolidate credit card debt?",
      answer: "Yes, home equity loans are excellent for debt consolidation. If you have {formatCurrency(50000)} in credit card debt at 20% APR, refinancing into a home equity loan at 9% saves enormous amounts. Credit card monthly payment: {formatCurrency(1000)} (minimum 2%). Home equity: {formatCurrency(550)}/month (10-year fixed). Over 5 years, consolidation saves {greater than}{formatCurrency(25000)}. However, beware: consolidation only works if you discipline yourself not to re-borrow on credit cards. Many people consolidate then run up credit card balances again, ending up with more total debt.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/IRACalculator")),
  slug: "ira-calculator",
  title: "Traditional IRA Calculator",
  shortTitle: "IRA",
  description: "Plan Traditional IRA savings and compare tax benefits with Roth IRA",
  category: "finance",
  icon: "📋",
  keywords: ["Traditional IRA", "retirement savings", "tax deduction", "IRA", "retirement planning", "RMD"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "Can I deduct my Traditional IRA contributions?",
      answer: "It depends on your income and whether you have a workplace retirement plan. If you don't have access to a 401(k) or similar plan, you can deduct all {formatCurrency(7000)} (2026 limit). If you do have a workplace plan, the deduction phases out: single filers earning {formatCurrency(77000)}-{formatCurrency(87000)} get a partial deduction, and full deduction only if income is below {formatCurrency(77000)}. Married couples have higher limits: {formatCurrency(123000)}-{formatCurrency(143000)} for partial, full below {formatCurrency(123000)}.",
    },
    {
      question: "What is the difference between a Traditional IRA and a Roth IRA?",
      answer: "Traditional IRA: tax-deductible contributions now, pay taxes on withdrawals in retirement. Roth IRA: contributions are after-tax, but all growth and withdrawals are tax-free. Traditional is best if you want immediate tax savings; Roth is best for tax-free growth and flexibility. Choose Traditional if you expect lower income in retirement; choose Roth if you expect higher income or want to leave tax-free money to heirs.",
    },
    {
      question: "When do I have to start taking withdrawals from a Traditional IRA?",
      answer: "You must begin Required Minimum Distributions (RMDs) at age 73 (as of 2023). Your first RMD is calculated by dividing your December 31 balance by the IRS life expectancy divisor for your age. Failing to take your full RMD results in a 25% penalty on the amount not withdrawn (10% for certain good-faith violations). Roth IRAs have no RMD requirement during your lifetime, giving you more control over your money.",
    },
    {
      question: "Can I withdraw from a Traditional IRA early without penalties?",
      answer: "Withdrawals before age 59½ are subject to income tax plus a 10% early withdrawal penalty, unless you qualify for an exception. Exceptions include: disability, unreimbursed medical expenses exceeding 7.5% of AGI, first-time home purchase (up to {formatCurrency(10000)}), education expenses, substantially equal periodic payments (SEPP), and military service members. These exceptions have specific rules, so consult a tax professional before early withdrawal.",
    },
    {
      question: "Can I convert a Traditional IRA to a Roth IRA?",
      answer: "Yes, you can convert (rollover) funds from a Traditional IRA to a Roth IRA at any time. The entire converted amount becomes taxable in the year of conversion. For example, converting {formatCurrency(100000)} of pre-tax Traditional IRA to Roth means paying taxes on {formatCurrency(100000)} of ordinary income that year. Conversions are useful during low-income years or when you expect high retirement income. After conversion, the funds grow tax-free in the Roth.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/IRRCalculator")),
  slug: "irr-calculator",
  title: "Internal Rate of Return (IRR) Calculator",
  shortTitle: "IRR",
  description: "Calculate IRR and NPV for investment and capital budgeting analysis",
  category: "finance",
  icon: "📊",
  keywords: ["IRR", "internal rate of return", "NPV", "investment", "return", "capital budgeting"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is IRR and how is it calculated?",
      answer: "IRR (Internal Rate of Return) is the discount rate at which Net Present Value = 0. It represents the annualized percentage return of an investment. To calculate: solve for the rate (r) in the equation: 0 = {{Initial Investment}} + {{Year 1 CF}} / (1+r) + {{Year 2 CF}} / (1+r)² + ... . This calculator uses Newton's method (iterative approximation). An IRR of 18% means the investment returns 18% annually. Higher IRR is better, as long as it exceeds your cost of capital.",
    },
    {
      question: "What is the difference between IRR and NPV?",
      answer: "<strong>NPV (Net Present Value):</strong> Dollar amount of value created at a given discount rate. Shows absolute profit. <strong>IRR:</strong> Percentage return earned on the investment. Shows relative profitability. Example: {{formatCurrency(100000)}} investment returning {{formatCurrency(30000)}} annually for 5 years has IRR ~18%. At 10% discount rate, NPV = {{formatCurrency(13794)}} (adds value). Use both: NPV shows dollars added, IRR shows percentage return. Accept projects where NPV {greater than} 0 and IRR {greater than} hurdle rate.",
    },
    {
      question: "Should I accept a project based on IRR alone?",
      answer: "No, IRR should be one of multiple criteria. Accept projects where: (1) IRR {greater than} your hurdle rate (required return), AND (2) NPV {greater than} 0. IRR has limitations: it assumes reinvestment at the IRR (unrealistic), can give multiple solutions for unconventional cash flows, and ignores project scale. A {{formatCurrency(1000)}} investment with 50% IRR creates {{formatCurrency(500)}} profit; a {{formatCurrency(1000000)}} investment with 15% IRR creates {{formatCurrency(150000)}} profit (better overall). Use IRR with NPV and payback period.",
    },
    {
      question: "What is a good IRR and what hurdle rate should I use?",
      answer: "<strong>Good IRR depends on industry and risk.</strong> S&P 500 averages 10% annually; Corporate bonds ~5%; Risk-free rate (Treasury) ~5%. Use your hurdle rate as the cutoff: (1) If cost of capital is 10%, require IRR {greater than} 10%. (2) If risk is high (startup), require IRR {greater than} 25-30%. (3) If risk is low (utility), require IRR {greater than} 8-12%. A real estate investment with 12% IRR is good; a venture capital investment with 12% IRR is poor. Set hurdle rate based on risk and opportunity cost.",
    },
    {
      question: "What are the limitations of using IRR for investment decisions?",
      answer: "IRR limitations: (1) Assumes reinvestment at IRR rate (unrealistic—you likely reinvest at lower rates). (2) Can produce multiple IRRs for unconventional cash flows (negative, positive, negative). (3) Ignores project scale: high IRR on small investment may create less value than lower IRR on large investment. (4) Ignores reinvestment risk and timing. (5) Sensitive to terminal cash flows. Use IRR alongside NPV (absolute value), payback period (risk), and qualitative factors. For comprehensive analysis, NPV is theoretically superior.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/InflationCalculator")),
  faqs: INFLATION_FAQS,
  slug: "inflation-calculator",
  title: "Inflation Calculator",
  shortTitle: "Inflation",
  description: "Calculate purchasing power changes due to inflation over time",
  category: "finance",
  icon: "📉",
  keywords: ["inflation", "purchasing power", "CPI", "cost of living", "money value"],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/InterestCalculator")),
  slug: "interest-calculator",
  title: "Compound Interest Calculator",
  shortTitle: "Compound Interest",
  description:
    "Calculate compound interest with multiple compounding frequencies",
  category: "finance",
  icon: "💹",
  keywords: [
    "compound interest",
    "savings",
    "investment",
    "interest earned",
    "financial",
  ],
  dateModified: "2026-04-09",
  faqs: INTEREST_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/InterestRateCalculator")),
  slug: "interest-rate-calculator",
  title: "Interest Rate Calculator",
  shortTitle: "Interest Rate",
  description:
    "Determine the implied interest rate from loan payment and term",
  category: "finance",
  icon: "📉",
  keywords: [
    "interest rate",
    "APR",
    "loan analysis",
    "effective rate",
    "mortgage rate",
  ],
  dateModified: "2026-04-09",
  faqs: INTEREST_RATE_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/InvestmentCalculator")),
  slug: "investment-calculator",
  title: "Investment Calculator",
  shortTitle: "Investment",
  description: "Calculate investment growth with returns and inflation adjustment",
  category: "finance",
  icon: "💰",
  keywords: ["investment", "stock market", "growth", "returns", "portfolio"],
  popular: true,
  faqs: INVESTMENT_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/LoanCalculator")),
  slug: "loan-calculator",
  title: "Loan Calculator",
  shortTitle: "Loan",
  description: "Calculate loan payments and total interest for any loan type",
  category: "finance",
  icon: "💳",
  keywords: ["loan", "payment", "interest", "APR", "debt"],
  popular: true,
  faqs: LOAN_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/MarginCalculator")),
  faqs: MARGIN_FAQS,
  slug: "margin-calculator",
  title: "Margin Calculator",
  shortTitle: "Margin",
  description: "Calculate markup and profit margins for accurate pricing",
  category: "finance",
  icon: "💲",
  keywords: ["margin", "markup", "profitability", "pricing"],
  popular: false,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/MortgageCalculator")),
  slug: "mortgage-calculator",
  title: "Mortgage Calculator",
  shortTitle: "Mortgage",
  description: "Calculate monthly mortgage payments, total interest, and amortization schedule",
  category: "finance",
  icon: "🏠",
  keywords: ["mortgage", "home loan", "monthly payment", "amortization"],
  popular: true,
  faqs: MORTGAGE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/MortgagePayoffCalculator")),
  slug: "mortgage-payoff-calculator",
  title: "Mortgage Payoff Calculator",
  shortTitle: "Mortgage Payoff",
  description:
    "Calculate payoff time and interest savings with extra mortgage payments",
  category: "finance",
  icon: "🏡",
  keywords: [
    "mortgage payoff",
    "extra payment",
    "interest savings",
    "acceleration",
    "home loan",
  ],
  dateModified: "2026-04-09",
  faqs: MORTGAGE_PAYOFF_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/MutualFundCalculator")),
  slug: "mutual-fund-calculator",
  title: "Mutual Fund Calculator",
  shortTitle: "Mutual Fund",
  description: "Calculate mutual fund growth and compare the impact of expense ratios on returns",
  category: "finance",
  icon: "📈",
  keywords: ["mutual fund", "expense ratio", "fund fees", "investment fees", "mutual fund returns"],
  popular: true,
  faqs: [
    {
      question: "What's a typical expense ratio?",
      answer: "Index funds typically charge 0.05-0.20% annually. Active managed funds charge 0.5-2%. Specialized or small funds may charge 2%+. Lower is better; every 0.1% difference compounds significantly over decades. Favor funds under 0.5%."
    },
    {
      question: "Can I avoid fees by buying and holding?",
      answer: "Partially. You avoid trading fees (commissions) by holding long-term, but expense ratios are charged annually regardless of holding period. Over 30 years, annual fees dwarf one-time trading fees. Choose low-fee funds and hold them."
    },
    {
      question: "Are mutual funds better than index funds?",
      answer: "Most mutual funds underperform index funds after fees. Studies consistently show 80-90% of active managers fail to beat their benchmark over 10+ years. Index funds offer diversification, lower fees, and tax efficiency. For most investors, index funds are the better choice."
    },
    {
      question: "How do 12b-1 fees work?",
      answer: "12b-1 fees are distribution and marketing fees (up to 1% annually) baked into expense ratios. They benefit the fund company, not investors. Avoid funds with 12b-1 fees if alternatives exist; they reduce your returns with no additional value to you."
    },
    {
      question: "Should I prioritize higher returns or lower fees?",
      answer: "Low fees. You can't control returns—markets are unpredictable—but you can control fees. Minimizing fees ensures more of your money compounds in your account. A 0.1% fee fund may outperform a 1% fund even with identical gross returns."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/NPVCalculator")),
  slug: "npv-calculator",
  title: "NPV Calculator",
  shortTitle: "NPV",
  description: "Calculate net present value, internal rate of return, and profitability index",
  category: "finance",
  icon: "💰",
  keywords: ["NPV", "net present value", "IRR", "internal rate of return", "profitability", "capital budgeting", "investment"],
  popular: false,
  faqs: NPV_FAQS,
  dateModified: "2026-04-10"
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/NetIncomeCalculator")),
  slug: "net-income-calculator",
  title: "Net Income (P&L) Calculator",
  shortTitle: "Net Income",
  description: "Calculate net income and analyze business profitability through income statement",
  category: "finance",
  icon: "💼",
  keywords: ["net income", "profit", "income statement", "P&L", "margin", "EBITDA", "profitability"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is the difference between gross profit and net income?",
      answer: "<strong>Gross Profit</strong> = Revenue - COGS. Shows manufacturing efficiency. A {{formatCurrency(500000)}} revenue with {{formatCurrency(150000)}} COGS = {{formatCurrency(350000)}} gross profit (70% margin). <strong>Net Income</strong> = EBT - Taxes. Shows overall profitability after all expenses. Same {{formatCurrency(500000)}} revenue might have {{formatCurrency(50000)}} net income (10% margin) after operating expenses, interest, and taxes. Gross profit is pre-overhead; net income is the true profit to shareholders. High gross profit but low net income means operating costs or debt are excessive.",
    },
    {
      question: "What is EBITDA and why does it matter?",
      answer: "EBITDA = Earnings Before Interest, Taxes, Depreciation, Amortization. It's {{formatCurrency(ebitda)}} in your example—operational earnings before financing and accounting. EBITDA matters because: (1) Comparable across companies with different tax rates, capital structures, depreciation methods. (2) Shows core operational profitability without distortions. (3) Used for valuation multiples (Price/EBITDA). However, EBITDA ignores debt service, taxes, and capital expenditures. A company with high EBITDA but massive debt and taxes can have negative net income. Always combine EBITDA with net income and cash flow.",
    },
    {
      question: "How do I improve net income?",
      answer: "Attack the largest expense categories: (1) <strong>Increase Revenue:</strong> Raise prices, expand customer base, upsell. (2) <strong>Reduce COGS:</strong> Improve manufacturing efficiency, negotiate supplier discounts, improve yield. (3) <strong>Reduce OpEx:</strong> Automate, outsource, cut overhead, reduce headcount. (4) <strong>Reduce Interest:</strong> Refinance debt at lower rates, pay down debt. (5) <strong>Manage Taxes:</strong> Tax-efficient structure, deductions, timing. In your example, reducing COGS by {{formatCurrency(10000)}} increases net income by {{formatCurrency(7500)}} (after taxes at 25%); reducing OpEx by {{formatCurrency(10000)}} increases net income by {{formatCurrency(7500)}}.",
    },
    {
      question: "What profit margins should my business target?",
      answer: "Profit margins vary significantly by industry: <strong>Retail:</strong> 2-5% net margin (high volume, low margin). <strong>SaaS:</strong> 25-40% net margin (software, high margin). <strong>Manufacturing:</strong> 5-15% net margin. <strong>Consulting:</strong> 20-30% net margin. <strong>Financial Services:</strong> 15-25% net margin. A 10% net margin is generally healthy. Above 20% is excellent. Below 5% is struggling. Improve margins by: reducing COGS (manufacturing focus), reducing OpEx (operational efficiency), raising prices (market positioning). Benchmark against competitors to see where improvements are needed.",
    },
    {
      question: "How do depreciation and non-cash expenses affect net income?",
      answer: "<strong>Depreciation</strong> ({{formatCurrency(depreciation)}}) reduces net income but is a non-cash expense—it doesn't reduce cash flow. A {{formatCurrency(25000)}} depreciation reduces net income by {{formatCurrency(25000)}}, but no cash leaves the company that year. This makes cash flow different from net income. A company can have negative net income (due to depreciation) but positive cash flow. Conversely, high net income with high capital expenditures results in negative cash flow. Always analyze both net income (accounting profit) and cash flow (actual money) together. For valuation, add depreciation back (D{'{&}'} A add-back) to get to normalized earnings.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/NetWorthCalculator")),
  faqs: NET_WORTH_FAQS,
  slug: "net-worth-calculator",
  title: "Net Worth Calculator",
  shortTitle: "Net Worth",
  description: "Calculate your total net worth by tracking all assets and liabilities",
  category: "finance",
  icon: "💎",
  keywords: ["net worth", "assets", "liabilities", "wealth", "financial tracking"],
  popular: true,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/PaybackPeriodCalculator")),
  slug: "payback-period-calculator",
  title: "Payback Period Calculator",
  shortTitle: "Payback Period",
  description: "Calculate simple and discounted payback periods and NPV for investment decisions",
  category: "finance",
  icon: "⏱️",
  keywords: ["payback period", "investment", "NPV", "capital budgeting", "cash flow", "ROI"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is payback period and why does it matter?",
      answer: "Payback period is the time required for cumulative cash flows to equal your initial investment. A {formatCurrency(100000)} investment generating {formatCurrency(20000)}/year has a 5-year payback. It matters because shorter payback means faster capital recovery and lower risk (fewer assumptions needed). However, payback alone is incomplete: it ignores cash flows after payback and doesn't account for time value of money. Use payback with NPV and IRR for comprehensive evaluation.",
    },
    {
      question: "What is discounted payback period and how does it differ from simple payback?",
      answer: "Simple payback ignores when money is received ({{formatCurrency(1)} in Year 1 = {formatCurrency(1)} in Year 5). Discounted payback applies a discount rate (your required return) to future cash flows. At 10% discount, {{formatCurrency(20000)} in Year 5 is worth only {{formatCurrency(12418)} today. Discounted payback is longer and more realistic. If simple payback is 5 years but discounted is 7 years, it actually takes 2 extra years to recover your investment accounting for time value of money.",
    },
    {
      question: "What discount rate should I use?",
      answer: "The discount rate is your <strong>cost of capital</strong> or <strong>required return</strong>. Options: (1) Your cost of borrowed money (bank loan rate, corporate bond yield). (2) Your opportunity cost (return you could earn elsewhere). (3) A hurdle rate set by your company (minimum acceptable return). (4) Market average return (S&P 500 ~10%). Most companies use 8-12%. Higher discount rate means you're more demanding (you require higher returns), making projects less attractive.",
    },
    {
      question: "Should I accept a project based on payback period?",
      answer: "Use payback as <strong>one of multiple criteria</strong>. General rules: (1) Shorter payback is better (faster capital recovery). (2) Accept projects where discounted payback {less than} your acceptable payback (e.g., {less than} 3 years). (3) Accept projects where NPV {greater than} 0 and IRR {greater than} discount rate. (4) For high-risk/early-stage projects, shorter payback is more important (reduce uncertainty). For mature businesses, NPV and IRR matter more. Don't rely on payback alone.",
    },
    {
      question: "What does a negative NPV or NPV {greater than} payback cutoff mean?",
      answer: "Negative NPV means the project destroys value: cumulative discounted cash flows never recover the initial investment. <strong>Reject this project</strong>. Positive NPV means the project creates value and should be accepted. If your payback cutoff is 3 years but discounted payback is 5 years, the project may still add value (positive NPV) but takes longer to break even. You decide based on risk tolerance: short payback = lower risk, long payback = higher risk but potentially higher NPV.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/PaycheckCalculator")),
  slug: "paycheck-calculator",
  title: "Paycheck Calculator",
  shortTitle: "Paycheck",
  description: "Calculate your take-home pay and understand all your paycheck deductions",
  category: "finance",
  icon: "💼",
  keywords: ["paycheck", "taxes", "deductions", "net pay", "401k", "FICA"],
  popular: true,
  faqs: PAYCHECK_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/PaymentCalculator")),
  slug: "payment-calculator",
  title: "Payment Calculator",
  shortTitle: "Payment",
  description:
    "Calculate monthly loan payments for mortgages, auto loans, and other debts",
  category: "finance",
  icon: "💵",
  keywords: [
    "monthly payment",
    "loan payment",
    "mortgage payment",
    "APR",
    "amortization",
  ],
  dateModified: "2026-04-09",
  faqs: PAYMENT_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/PensionCalculator")),
  slug: "pension-calculator",
  title: "Pension Calculator",
  shortTitle: "Pension",
  description: "Calculate pension benefits and lifetime retirement income projections",
  category: "finance",
  icon: "👴",
  keywords: ["pension", "retirement", "pension benefit", "defined benefit", "retirement income"],
  popular: false,
  faqs: [
    {
      question: "How is the benefit multiplier determined?",
      answer: "The benefit multiplier is set by the pension plan and varies by employer. Government pensions typically use 1.5-2%; union pensions 2-2.5%; some 457/403b plans use 1%. Check your plan documents for the exact multiplier. Even a 0.5% difference significantly impacts lifetime benefits."
    },
    {
      question: "What's final average salary and how does it affect my pension?",
      answer: "Final average salary is typically your highest-earning years (3-5 years average). A $10,000 increase in FAS increases pension by $10,000 × years × multiplier / 1200. On a 25-year career at 2%, $10k more FAS = $416/month more pension. Maximize earnings in final years."
    },
    {
      question: "Why is COLA important?",
      answer: "Without COLA, your pension loses 50% purchasing power in 28 years at 2.5% inflation. With COLA, the nominal amount grows to maintain real value. This is crucial for retirees who live 30+ years. COLA is one major advantage pensions have over fixed investments."
    },
    {
      question: "Should I take a lump sum or monthly pension?",
      answer: "Monthly pension is safer—guaranteed income for life. Lump sum is flexible but requires investing discipline and carries longevity risk. If you live past your life expectancy, monthly pension wins. If you die early, lump sum heirs get the remainder. Consider your health and investment comfort."
    },
    {
      question: "What happens to my pension if I change jobs?",
      answer: "Vesting rules determine if you keep your pension after leaving. Many plans require 5-10 years of service to be vested. Once vested, your pension is usually locked based on service and salary at departure—not final salary if you leave early. Job changes can significantly reduce pension benefits."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/PersonalLoanCalculator")),
  slug: "personal-loan-calculator",
  title: "Personal Loan Calculator",
  shortTitle: "Personal Loan",
  description:
    "Calculate personal loan payments with origination fees and APR",
  category: "finance",
  icon: "💳",
  keywords: [
    "personal loan",
    "loan payment",
    "unsecured loan",
    "debt consolidation",
    "APR",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is a personal loan?",
      answer:
        "A personal loan is an unsecured loan from a bank or online lender, meaning it has no collateral. Unlike mortgages or auto loans, personal loans are based on your credit profile, income, and creditworthiness. Typical interest rates range from 6-36% depending on credit score. Repayment terms typically run 12-84 months with fixed monthly payments.",
    },
    {
      question: "What is an origination fee?",
      answer:
        "An origination fee is an upfront cost (typically 1-8% of the loan amount) charged by the lender for processing and underwriting. If you borrow $25,000 with a 2.5% fee, you receive $24,375 but owe $25,000, so the effective cost is higher. APR includes origination fees, making it the true cost of borrowing.",
    },
    {
      question: "How does credit score affect personal loan rates?",
      answer:
        "Credit score dramatically affects rates. Excellent credit (740+) gets 6-12% APR, good credit (670-739) gets 12-20%, fair credit (580-669) gets 18-36%, poor credit gets 25-36%+. On a $25,000 loan at 8% vs. 25% APR, the difference is over $7,000 in interest. Always check your credit before applying and improve it if possible.",
    },
    {
      question: "Can I use a personal loan for debt consolidation?",
      answer:
        "Yes, personal loans are excellent for consolidating high-interest credit card debt. Consolidating $10,000 in credit card debt at 20% APR into a personal loan at 12% APR for 5 years saves roughly $2,500 in interest and simplifies payments. After consolidation, close or freeze the credit cards to prevent re-borrowing and doubling your debt.",
    },
    {
      question: "What happens if I pay off the loan early?",
      answer:
        "Most personal loans allow early repayment without prepayment penalties. Paying off early saves interest and improves your credit utilization. Always ask about prepayment penalties before accepting a personal loan; some lenders charge a fee if you pay off the loan in full too early, though this is uncommon. Early payoff is usually beneficial.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/PresentValueCalculator")),
  faqs: PRESENT_VALUE_FAQS,
  slug: "present-value-calculator",
  title: "Present Value Calculator",
  shortTitle: "Present Value",
  description:
    "Determine the current worth of a future sum of money",
  category: "finance",
  icon: "⏱️",
  keywords: [
    "present value",
    "NPV",
    "discounting",
    "investment analysis",
    "finance",
  ],
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/RMDCalculator")),
  slug: "rmd-calculator",
  title: "Required Minimum Distribution (RMD) Calculator",
  shortTitle: "RMD",
  description: "Calculate required minimum distributions from retirement accounts at age 73+",
  category: "finance",
  icon: "📊",
  keywords: ["RMD", "required minimum distribution", "retirement", "IRA", "401k", "distribution"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "At what age do I have to start taking RMDs?",
      answer: "You must start taking Required Minimum Distributions (RMDs) at age 73 as of 2023 (this age was increased from 72 under the SECURE Act 2.0). Your first RMD must be taken by April 1 of the year following the year you reach age 73. After that, you must take RMDs by December 31 each year. Note: Roth IRAs are exempt from RMD requirements during your lifetime, but Roth 401(k)s do require RMDs (they can be rolled to a Roth IRA to avoid them).",
    },
    {
      question: "How is the RMD amount calculated?",
      answer: "Your RMD is calculated by dividing your retirement account balance as of December 31 of the prior year by an IRS life expectancy divisor. The divisor decreases each year, requiring larger withdrawals as you age. At age 73, the divisor is 26.5; at 80, it's 20.2; at 90, it's 11.9. For example, a {formatCurrency(500000)} balance at age 73 requires an RMD of {formatCurrency(18868)} ({formatCurrency(500000)} divided by 26.5). Most financial institutions calculate RMDs for you automatically.",
    },
    {
      question: "What happens if I miss my RMD deadline?",
      answer: "If you fail to withdraw your full RMD, you face a penalty of 25% of the shortfall amount under current rules (or 10% if corrected within 2 years). This is a substantial penalty. For example, if your RMD is {formatCurrency(20000)} and you only withdraw {formatCurrency(15000)}, you owe a {formatCurrency(1250)} penalty (25% of {formatCurrency(5000)}). The deadline is December 31 of each year. For your first RMD, you have until April 1 of the following year, but this pushes two RMDs into one calendar year.",
    },
    {
      question: "Can I take my RMD as a lump sum or must I spread it out?",
      answer: "<strong>You can take your full RMD anytime during the year</strong>—as a single withdrawal or spread across multiple withdrawals. Many people take it in December to simplify taxes. Some take it in January to spread income across two tax years. The key is that your total withdrawals must equal the RMD by December 31. You cannot take it early in January and defer to later (the annual total must meet the RMD requirement).",
    },
    {
      question: "What is a Qualified Charitable Distribution (QCD) and how does it help with RMDs?",
      answer: "A Qualified Charitable Distribution (QCD) allows you to donate your RMD directly to a charity without paying income tax on it. If you're over 73 and charitably inclined, you can direct up to {formatCurrency(100000)} of your IRA to qualifying charities, and that amount counts toward your RMD. This reduces your taxable income and is especially valuable for those who don't itemize deductions. You must donate directly to the charity (not through a donor-advised fund) for it to qualify.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/ROICalculator")),
  faqs: ROI_FAQS,
  slug: "roi-calculator",
  title: "ROI Calculator",
  shortTitle: "ROI",
  description: "Calculate return on investment and annualized returns",
  category: "finance",
  icon: "📈",
  keywords: ["ROI", "return on investment", "investment return", "annualized return", "CAGR"],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/RealEstateCommissionCalculator")),
  slug: "real-estate-commission-calculator",
  title: "Real Estate Commission Calculator",
  shortTitle: "Real Estate Commission",
  description: "Calculate real estate commissions and compare different commission rates",
  category: "finance",
  icon: "🏠",
  keywords: ["real estate commission", "realtor commission", "home sale commission", "listing agent", "buyer agent"],
  popular: false,
  faqs: [
    {
      question: "Are real estate commissions negotiable?",
      answer: "Yes, absolutely. Commission rates aren't set by law or regulation; they're negotiable for each transaction. Interview multiple agents and request reduced rates. In competitive markets, sellers have more negotiating power. Even 0.5% difference saves thousands on a $400,000 sale."
    },
    {
      question: "Who pays the real estate commission?",
      answer: "The seller pays the total commission to their listing agent, who splits it with the buyer's agent. Traditionally, the seller's proceeds are reduced by the full commission amount. However, buyers can negotiate seller credits toward closing costs, which affects net proceeds."
    },
    {
      question: "Why is the split between listing and buyer agents?",
      answer: "This structure incentivizes buyer agents to show properties and bring qualified buyers. If all commission went to the listing agent, buyer agents wouldn't be motivated. The buyer agent split is part of the offer made to attract them. Splits are typically 50/50 but negotiable."
    },
    {
      question: "Should I use a discount broker to save commission?",
      answer: "Maybe. Discount brokers (2-4% commission) offer fewer services—sometimes no buyer agent commission offered, reduced marketing, or self-showing. Full-service brokers (5-6%) provide extensive marketing, showing coordination, and transaction management. Compare services against commission savings."
    },
    {
      question: "How much do different commission rates save?",
      answer: "On a $300,000 sale: 5.5% = $16,500, 4.5% = $13,500 (saves $3,000), 3.5% = $10,500 (saves $6,000). On a $500,000 sale: 5.5% = $27,500, 4% = $20,000 (saves $7,500). Higher-priced homes should negotiate lower percentages."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/RefinanceCalculator")),
  slug: "refinance-calculator",
  title: "Refinance Calculator",
  shortTitle: "Refinance",
  description: "Compare current mortgage to refinanced option and calculate breakeven",
  category: "finance",
  icon: "🔄",
  keywords: ["refinance", "mortgage refinance", "breakeven", "interest rate"],
  popular: false,
  faqs: REFINANCE_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/RentVsBuyCalculator")),
  slug: "rent-vs-buy-calculator",
  title: "Rent vs Buy Calculator",
  shortTitle: "Rent vs Buy",
  description: "Compare the financial impact of renting versus buying a home over time",
  category: "finance",
  icon: "🏠",
  keywords: ["rent", "buy", "home", "mortgage", "property", "housing"],
  popular: true,
  faqs: RENT_VS_BUY_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/RetirementCalculator")),
  slug: "retirement-calculator",
  title: "Retirement Calculator",
  shortTitle: "Retirement",
  description: "Plan your retirement savings and income using the 4% rule and inflation",
  category: "finance",
  icon: "🏖️",
  keywords: ["retirement", "savings", "401k", "IRA", "income planning"],
  popular: true,
  faqs: RETIREMENT_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/RothIRACalculator")),
  slug: "roth-ira-calculator",
  title: "Roth IRA Calculator",
  shortTitle: "Roth IRA",
  description: "Project Roth IRA growth with tax-free earnings and withdrawals in retirement",
  category: "finance",
  icon: "🎯",
  keywords: ["Roth IRA", "retirement savings", "tax-free", "IRA", "retirement planning"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is a Roth IRA and how is it different from a Traditional IRA?",
      answer: "A Roth IRA is a retirement account where you contribute after-tax dollars, but all growth and withdrawals in retirement are tax-free. A Traditional IRA lets you deduct contributions from your taxable income (saving taxes now), but withdrawals in retirement are taxed. Choose Roth if you expect to be in a higher tax bracket in retirement; choose Traditional if you want immediate tax savings. Both have annual contribution limits and early withdrawal penalties before age 59½.",
    },
    {
      question: "Can I withdraw my Roth IRA contributions before retirement?",
      answer: "Yes, one major advantage of Roth IRAs is that you can withdraw your contributions anytime without taxes or penalties. If you contributed {formatCurrency(50000)}, you can withdraw that {formatCurrency(50000)} whenever you need it. However, you cannot withdraw earnings (investment gains) before age 59½ without a 10% penalty and taxes, unless you qualify for an exception like a first-time home purchase (up to {formatCurrency(10000)} lifetime).",
    },
    {
      question: "What is the Roth IRA income limit?",
      answer: "For 2026, Roth IRA contributions begin phasing out for single filers at {formatCurrency(146000)} income and are completely restricted above {formatCurrency(161000)}. For married couples filing jointly, the range is {formatCurrency(230000)} to {formatCurrency(240000)}. If you exceed the limit, you cannot contribute directly, but you may be able to use a backdoor Roth strategy (contribute to Traditional IRA, then convert to Roth).",
    },
    {
      question: "Can I have both a Roth IRA and a Traditional IRA?",
      answer: "<strong>Yes, you can have both</strong>, but your total contributions across all IRAs cannot exceed {formatCurrency(7000)} per year (2026 limit). If you contribute {formatCurrency(4000)} to a Traditional IRA, you can only contribute {formatCurrency(3000)} to a Roth IRA that year. Many people use a Roth IRA for higher growth potential investments and a Traditional IRA for tax deductions during high-income years.",
    },
    {
      question: "What happens to my Roth IRA when I die?",
      answer: "Your beneficiaries inherit the Roth IRA tax-free. The inherited funds continue growing tax-free for them. They must take withdrawals (typically over 10 years under newer rules), but the withdrawals are tax-free since Roth contributions and growth are not taxed. This makes Roth IRAs excellent for leaving a tax-free legacy. Compare this to Traditional IRAs, where beneficiaries owe income taxes on withdrawals.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/SalaryCalculator")),
  faqs: SALARY_FAQS,
  slug: "salary-calculator",
  title: "Salary Calculator",
  shortTitle: "Salary",
  description: "Convert salary between hourly, weekly, monthly, and annual rates",
  category: "finance",
  icon: "💵",
  keywords: ["salary", "hourly rate", "conversion", "pay frequency", "income"],
  popular: true,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/SalesTaxCalculator")),
  slug: "sales-tax-calculator",
  title: "Sales Tax Calculator",
  shortTitle: "Sales Tax",
  description:
    "Calculate sales tax, total amounts, and reverse-calculate pre-tax prices",
  category: "finance",
  icon: "🛒",
  keywords: ["sales tax", "tax calculation", "total", "price", "retail"],
  dateModified: "2026-04-09",
  faqs: SALES_TAX_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/SavingsGoalCalculator")),
  slug: "savings-goal",
  title: "Savings Goal Calculator",
  shortTitle: "Savings Goal",
  description: "Plan and track your savings goals with compound interest",
  category: "finance",
  icon: "🏦",
  keywords: ["savings", "goal", "money", "interest", "emergency fund"],
  popular: true,
  faqs: SAVINGS_GOAL_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/SimpleInterestCalculator")),
  slug: "simple-interest-calculator",
  title: "Simple Interest Calculator",
  shortTitle: "Simple Interest",
  description:
    "Calculate simple interest without compounding effects",
  category: "finance",
  icon: "📊",
  keywords: [
    "simple interest",
    "interest calculation",
    "savings",
    "loan interest",
    "financial",
  ],
  dateModified: "2026-04-09",
  faqs: SIMPLE_INTEREST_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/StockCalculator")),
  slug: "stock-calculator",
  title: "Stock Profit/Loss Calculator",
  shortTitle: "Stock P/L",
  description: "Calculate stock trading profits, losses, returns, and annualized performance",
  category: "finance",
  icon: "📈",
  keywords: ["stock", "profit", "loss", "trading", "return", "capital gains"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How do I calculate my stock profit or loss?",
      answer: "Profit = (Sell Price × Shares - Sell Commission) - (Buy Price × Shares + Buy Commission). Example: Buy 100 shares at {formatCurrency(50)} + {formatCurrency(10)} commission = {formatCurrency(5010)} cost. Sell 100 shares at {formatCurrency(75)} - {formatCurrency(10)} commission = {formatCurrency(7490)} proceeds. Profit = {formatCurrency(7490)} - {formatCurrency(5010)} = {formatCurrency(2480)}. Commission reduces profit, so use zero-commission brokers.",
    },
    {
      question: "What's the difference between short-term and long-term capital gains?",
      answer: "<strong>Short-term capital gains:</strong> Stocks held {'<'} 1 year, taxed at your ordinary income tax rate (10%-37% federal). <strong>Long-term capital gains:</strong> Stocks held {'>='} 1 year, taxed at 0% (if income {'<'} {formatCurrency(47025)}), 15% ({formatCurrency(47025)}-{formatCurrency(518900)}), or 20% (income {'>='} {formatCurrency(518900)}). Long-term rates are much lower. Holding for 1 year can reduce tax by 50%+ depending on income. Tax planning matters for active traders.",
    },
    {
      question: "What is annualized return and why does it matter?",
      answer: "Annualized return scales your holding period return to an annual rate. A 20% return over 6 months annualizes to ~44% annually. A 10% return over 3 years annualizes to 3.2% annually. Annualized return lets you compare investments across different holding periods. The S&P 500 averages ~10% annually; if you beat that, you're doing well. Most active traders underperform the market average after taxes and fees. Use annualized return to evaluate if your stock trading beats index funds.",
    },
    {
      question: "Why do commissions matter so much?",
      answer: "{formatCurrency(20)} commissions on a {formatCurrency(1000)} stock purchase is 2% of capital gone immediately. On a {formatCurrency(50000)} portfolio with {formatCurrency(10)} per trade, trading 100 times/year costs {formatCurrency(1000)}, reducing returns 2%. Most brokers offer zero-commission stock and ETF trading, so there's no reason to pay. If your broker charges commissions, switch immediately. Commissions are a drag on returns that compounds over time.",
    },
    {
      question: "Should I be day trading or holding long-term?",
      answer: "Research shows <strong>long-term holding outperforms day trading</strong> for most people. Day trading is taxed as short-term capital gains (higher tax), triggers frequent commissions (if any), requires emotional discipline (fear/greed), and 90% of active day traders lose money. Long-term holding benefits from: lower taxes (long-term capital gains rates), zero or low commissions, compound growth, and removes emotion. The S&P 500 returns 10% annually without picking stocks. For most investors, buy-and-hold index funds beat active trading.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/StudentLoanCalculator")),
  slug: "student-loan-calculator",
  title: "Student Loan Calculator",
  shortTitle: "Student Loans",
  description: "Calculate student loan payments and find your payoff timeline",
  category: "finance",
  icon: "🎓",
  keywords: ["student loans", "loan repayment", "education debt", "interest", "payoff"],
  faqs: STUDENT_LOAN_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/TakeHomePayCalculator")),
  slug: "take-home-pay-calculator",
  title: "Take-Home Pay Calculator",
  shortTitle: "Take-Home Pay",
  description: "Calculate net pay after federal, FICA, and state income taxes",
  category: "finance",
  icon: "💵",
  keywords: ["take-home pay", "net pay", "taxes", "income tax", "FICA", "paycheck"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "Why is my take-home pay so much less than my gross salary?",
      answer: "Taxes. A {formatCurrency(60000)} salary might have {formatCurrency(9000)} federal income tax, {formatCurrency(3720)} Social Security, {formatCurrency(870)} Medicare, and {formatCurrency(5000)} state tax = {formatCurrency(18590)} total (31% tax rate), leaving {formatCurrency(41410)} take-home. Federal tax is progressive (higher earners pay higher rates). FICA is fixed (6.2% SS + 1.45% Medicare). State tax varies from 0-13%. Combined, these typically consume 25-35% of gross. Higher earners pay 35-45% or more in total taxes.",
    },
    {
      question: "What is the difference between federal income tax and FICA taxes?",
      answer: "<strong>Federal income tax:</strong> Progressive tax on all income, funds government operations. Uses tax brackets (10%-37% rates). You pay more as income increases. <strong>FICA taxes:</strong> Fixed-rate payroll taxes (6.2% Social Security + 1.45% Medicare), funds Social Security and Medicare. Social Security tax caps at {formatCurrency(168600)} wage base; Medicare has no cap. Both are mandatory. Federal tax is progressive; FICA is regressive (flatter percentage). On {formatCurrency(100000)}: federal might be {formatCurrency(12000)} (12%), FICA is {formatCurrency(7650)} (7.65%).",
    },
    {
      question: "How do tax brackets work and what is my marginal tax rate?",
      answer: "Tax brackets are progressive: you pay different rates on different income portions, not a single rate on all income. Single filers pay 10% on income {less than} {formatCurrency(11600)}, 12% on {formatCurrency(11600)}-{formatCurrency(47150)}, 22% on {formatCurrency(47150)}-{formatCurrency(100525)}, etc. Your <strong>marginal rate</strong> is the rate on your last dollar earned. At {formatCurrency(75000)} income, marginal rate is 22%. Your <strong>effective rate</strong> is total tax ÷ income (~18% at {formatCurrency(75000)}). Marginal rate matters for decisions (raises, deductions); effective rate shows your actual tax burden.",
    },
    {
      question: "Which states have no income tax and how much can I save?",
      answer: "Nine states have no income tax: Texas, Florida, Washington, Nevada, South Dakota, Tennessee, Wyoming, Alaska, New Hampshire. Savings are substantial. A {formatCurrency(100000)} salary takes home {{formatCurrency(75000)}-{formatCurrency(78000)} in no-tax states but {formatCurrency(66000)}-{formatCurrency(70000)} in high-tax states like California, New York. Over a career, moving to a no-tax state can save {greater than}{formatCurrency(1000000)}. However, some no-tax states have high sales taxes (Texas 8.25%) or property taxes (Florida), offsetting income tax savings. Evaluate total tax burden.",
    },
    {
      question: "Can I reduce my take-home pay taxes through deductions or credits?",
      answer: "Yes, but this calculator uses standard estimates. To reduce taxes: (1) Contribute to Traditional 401(k) or IRA—these reduce taxable income (pre-tax). (2) Claim deductions: standard deduction ({formatCurrency(14600)} single, {formatCurrency(29200)} married 2024) or itemized deductions if {greater than} standard. (3) Claim tax credits: Child Tax Credit ({formatCurrency(2000)}/child), Earned Income Tax Credit (if low income), etc. (4) Use HSA if eligible (triple-tax advantage). Reducing taxable income from {formatCurrency(75000)} to {formatCurrency(60000)} via 401(k) saves {greater than}{formatCurrency(3300)} federal tax at 22% rate.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/TaxCalculator")),
  faqs: TAX_FAQS,
  slug: "tax-calculator",
  title: "Tax Calculator",
  shortTitle: "Taxes",
  description: "Calculate federal income tax using 2024 tax brackets and deductions",
  category: "finance",
  icon: "🧾",
  keywords: ["tax", "federal income tax", "brackets", "deductions", "credits", "filing status"],
  popular: true,
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/TipCalculator")),
  slug: "tip",
  title: "Tip Calculator",
  shortTitle: "Tip",
  description: "Calculate tips quickly with preset percentages and bill splitting",
  category: "finance",
  icon: "🍽️",
  keywords: ["tip", "gratuity", "bill", "restaurant", "split"],
  popular: true,
  faqs: TIP_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/VAMortgageCalculator")),
  slug: "va-mortgage-calculator",
  title: "VA Mortgage Calculator",
  shortTitle: "VA Loan",
  description: "Calculate VA loan payments and compare funding fees across service levels",
  category: "finance",
  icon: "🇺🇸",
  keywords: ["VA loan", "mortgage", "veteran", "military", "funding fee", "no down payment"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "Who is eligible for a VA loan?",
      answer: "VA loans are available to veterans with honorable discharge, active-duty service members (with 90+ days service), National Guard/Reserve with 6+ years service, and surviving spouses of veterans who died in service or from service-connected disability. You must obtain a Certificate of Eligibility (CoE) from the VA. Service members can apply before discharge. Surviving spouses of service-connected deaths can use the benefit once for a home purchase.",
    },
    {
      question: "What is a VA funding fee and can it be waived?",
      answer: "The VA funding fee replaces mortgage insurance and funds the VA loan program. First-time users pay 2.15%, subsequent users pay 3.3%. Disabled veterans with service-connected disabilities (any percentage) are <strong>exempt from funding fees entirely</strong>, making VA loans essentially free. Down payments of 5%+ reduce the fee: 5-10% down is 1.9%, 10%+ is 1.6%. The funding fee is typically rolled into the loan and paid over 30 years.",
    },
    {
      question: "Can I use my VA benefit more than once?",
      answer: "<strong>Yes, VA benefits can be used multiple times.</strong> Each time you buy a home with a VA loan, you use a portion of your {formatCurrency(625000)} entitlement. If you sell and pay off a prior VA loan, your full entitlement is restored for another purchase. This allows veterans to buy multiple properties. Some veterans use VA loans to buy investment properties, building real estate wealth. However, you cannot have two active VA loans simultaneously (except in limited circumstances).",
    },
    {
      question: "What is VA entitlement and how much can I borrow?",
      answer: "VA entitlement is your maximum borrowing power under the VA program, currently {formatCurrency(625000)} (2026, adjusts annually). Your lender may lend up to 100% of the home value without down payment, as long as the VA appraisal supports the price. No down payment is required. If the home appraises lower than the purchase price, you must make up the difference (or negotiate). You are responsible for the full loan amount; the VA guarantee only protects the lender if you default.",
    },
    {
      question: "Why are VA loans better than FHA or conventional loans?",
      answer: "<strong>VA advantages:</strong> 0% down (vs. 3.5% FHA, 10-20% conventional), no mortgage insurance (vs. 0.55% FHA MIP or 0.3-1.2% conventional PMI), often lower rates (lenders take less risk with VA guarantee), can use multiple times. Disabled veterans pay no funding fee at all. Over 30 years, a VA loan can save {greater than}{formatCurrency(100000)} vs. conventional due to eliminating down payment, PMI, and often having lower rates. VA loans are generally the best option for eligible veterans.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/finance/WACCCalculator")),
  slug: "wacc-calculator",
  title: "WACC Calculator",
  shortTitle: "WACC",
  description: "Calculate weighted average cost of capital and analyze capital structure",
  category: "finance",
  icon: "📊",
  keywords: ["WACC", "cost of capital", "capital structure", "debt", "equity", "finance", "valuation"],
  popular: false,
  faqs: WACC_FAQS,
  dateModified: "2026-04-10"
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/ArmyBodyFatCalculator")),
  slug: "army-body-fat-calculator",
  title: "Army Body Fat Calculator",
  shortTitle: "Army Body Fat",
  description: "Calculate body fat percentage using U.S. Army circumference measurements",
  category: "health",
  icon: "🎖️",
  keywords: ["army body fat", "military fitness", "body fat percentage", "body composition", "circumference"],
  popular: false,
  faqs: [
    {
      question: "How accurate is the Army method compared to DEXA?",
      answer: "The Army method has a margin of error of about ±3-5% compared to DEXA or underwater weighing. It's accurate enough for military screening purposes but not as precise as direct measurement methods. Very muscular or sedentary individuals may see larger discrepancies."
    },
    {
      question: "What if I exceed the Army standard?",
      answer: "In active military, exceeding standards typically triggers remedial physical training. Soldiers are given a timeline to meet standards or face discharge. Standards increase slightly with age to account for natural changes. Seek fitness guidance to safely reduce body fat while maintaining health and muscle."
    },
    {
      question: "Why are women's standards higher than men's?",
      answer: "Women naturally have more essential body fat due to biological differences (hormones, reproductive tissue). A woman at 28% body fat is healthier than a man at 28%. Army standards reflect these physiological differences while maintaining fitness expectations."
    },
    {
      question: "Do I need to measure at specific times of day?",
      answer: "Measure in the morning before eating or exercising for consistency. Hydration status, food intake, and exercise can cause fluid shifts affecting measurements. Consistent measurement timing reduces variability between repeated measurements."
    },
    {
      question: "Can I use this calculator if I'm not in the military?",
      answer: "Yes. The Army method is used by fitness professionals, civilian employers, and health researchers worldwide. It's a standard body composition assessment method. If you don't meet military standards, that doesn't mean you're unhealthy—civilian fitness varies widely by sport and goals."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/BACCalculator")),
  slug: "bac-calculator",
  title: "BAC Calculator",
  shortTitle: "BAC",
  description: "Calculate your estimated blood alcohol concentration and impairment level",
  category: "health",
  icon: "🍺",
  keywords: ["BAC", "blood alcohol concentration", "alcohol calculator", "drunk driving"],
  popular: false,
  faqs: BAC_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/BMICalculator")),
  slug: "bmi-calculator",
  title: "BMI Calculator",
  shortTitle: "BMI",
  description: "Calculate your Body Mass Index (BMI) and determine if you're at a healthy weight based on your height and weight",
  category: "health",
  icon: "⚖️",
  keywords: ["BMI", "body mass index", "healthy weight", "obesity", "weight calculator"],
  popular: true,
  faqs: BMI_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/BMRCalculator")),
  slug: "bmr-calculator",
  title: "BMR Calculator",
  shortTitle: "BMR",
  description: "Calculate your Basal Metabolic Rate using the accurate Mifflin-St Jeor equation",
  category: "health",
  icon: "🔋",
  keywords: ["BMR", "basal metabolic rate", "resting metabolic rate", "metabolism"],
  popular: false,
  faqs: BMR_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/BodyFatCalculator")),
  slug: "body-fat-calculator",
  title: "Body Fat Calculator",
  shortTitle: "Body Fat %",
  description: "Calculate your body fat percentage using the US Navy circumference formula",
  category: "health",
  icon: "💪",
  keywords: ["body fat", "body fat percentage", "body composition", "us navy formula"],
  popular: false,
  faqs: BODY_FAT_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/BodySurfaceAreaCalculator")),
  slug: "body-surface-area-calculator",
  title: "Body Surface Area Calculator",
  shortTitle: "Body Surface Area",
  description: "Calculate BSA using Mosteller, DuBois, and Haycock formulas for medical dosing",
  category: "health",
  icon: "📐",
  keywords: ["body surface area", "BSA", "medical dosing", "chemotherapy", "healthcare"],
  popular: false,
  faqs: [
    {
      question: "What's the normal BSA range?",
      answer: "Adults typically have BSA between 1.7 and 2.0 m². Children range from 0.5 m² (newborns) to 1.8 m² (teenagers). BSA increases with height and weight, reaching maximum in adulthood."
    },
    {
      question: "Why is BSA used instead of weight for dosing?",
      answer: "BSA better reflects metabolic capacity and organ function than weight alone. A 100-lb child and 200-lb adult have vastly different surface areas and metabolic needs. BSA standardizes dosing across different body sizes."
    },
    {
      question: "Which formula is most accurate?",
      answer: "Mosteller is preferred for adults and is most commonly used clinically. Haycock is preferred for children. All three agree within ~5-10%. Your healthcare provider will specify which formula to use."
    },
    {
      question: "How does obesity affect BSA?",
      answer: "BSA formulas slightly underestimate surface area in very obese patients because they don't fully account for fat distribution. Some institutions adjust dosing for obese patients; consult your healthcare provider."
    },
    {
      question: "Can I use BSA to estimate daily calorie needs?",
      answer: "Roughly, yes. BSA correlates with metabolic rate. An average adult burns about 40-50 calories per m² per day at rest. So a 1.8 m² person might burn 72-90 calories/hour at rest, helping estimate daily needs."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/CalorieCalculator")),
  slug: "calorie-calculator",
  title: "Calorie Calculator",
  shortTitle: "Calories",
  description: "Calculate your daily calorie needs using the Mifflin-St Jeor equation based on BMR and activity level",
  category: "health",
  icon: "🔥",
  keywords: ["calorie calculator", "daily calories", "TDEE", "BMR", "weight loss", "calorie needs"],
  popular: true,
  faqs: CALORIE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/CaloriesBurnedCalculator")),
  slug: "calories-burned-calculator",
  title: "Calories Burned Calculator",
  shortTitle: "Calories Burned",
  description: "Estimate the number of calories you burn during various physical activities based on your weight, activity type, and duration",
  category: "health",
  icon: "🔥",
  keywords: ["calories burned", "exercise calories", "activity calories", "calorie expenditure", "workout"],
  popular: true,
  faqs: [
    {
      question: "What does MET mean in the calories burned calculator?",
      answer: "MET stands for Metabolic Equivalent of Task. One MET is the amount of oxygen your body uses at rest. A 5.0 MET activity means you're working at 5 times your resting metabolic rate. Higher MET values indicate more intense exercise and higher calorie burn. The MET values used in this calculator represent average intensities for each activity.",
    },
    {
      question: "Why do people of different weights burn different amounts of calories?",
      answer: "Heavier individuals burn more calories during the same activity because their bodies require more energy to move additional mass. The calorie burn formula includes body weight as a key variable: more weight {'\u00d7'} same activity {'\u003d'} more calories burned. This is why weight loss and gain can shift your calorie burn rates.",
    },
    {
      question: "Are these calorie burn estimates accurate?",
      answer: "These estimates are based on average MET values from exercise science research, but individual variation is significant. Your actual burn depends on fitness level, intensity, metabolism, age, gender, and muscle mass. Use these estimates as guidelines rather than exact measurements. A fitness tracker or smartwatch provides more personalized data.",
    },
    {
      question: "Does intensity affect calorie burn?",
      answer: "Absolutely. Sprinting burns more calories than jogging; high-intensity interval training (HIIT) burns more than steady-state cardio. The MET values here assume moderate intensity for each activity. Push harder, and you burn more. Effort, not just time spent, determines total calorie expenditure.",
    },
    {
      question: "Can I lose weight just by exercising, without changing my diet?",
      answer: "Exercise is essential for health but is not the most efficient way to create a calorie deficit. Weight loss requires burning more calories than you consume {'\u2014'} diet typically contributes 70{'\u20131'}80% of weight loss results. Combine moderate exercise with a balanced, calorie-controlled diet for best results. Strength training preserves muscle during weight loss, which is crucial for maintaining metabolism.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/CarbCalculator")),
  slug: "carb-calculator",
  title: "Carb Calculator",
  shortTitle: "Carbs",
  description: "Calculate your daily carbohydrate needs based on activity level and fitness goals",
  category: "health",
  icon: "🍞",
  keywords: ["carbohydrate calculator", "carbs daily intake", "sports nutrition", "athletic performance", "carb cycling"],
  popular: true,
  faqs: [
    {
      question: "Why do carb needs depend on activity level?",
      answer: "Carbohydrates fuel high-intensity exercise and replenish muscle glycogen depleted during training. Athletes performing intense workouts need more carbs to support performance, recovery, and adaptation. Sedentary individuals need fewer carbs since they{'\u2019'}re not depleting muscle glycogen. Matching carb intake to training prevents fatigue during workouts and poor recovery afterward. Excess carbs without training are stored as fat or glycogen, potentially contributing to weight gain.",
    },
    {
      question: "Can I lose weight eating high carbs?",
      answer: "Yes, if total calories are in deficit. Weight loss depends on calorie balance, not macronutrient split. High-carb diets work for many people because carbs are satiating and lower in calories per gram than fat (4 cal/g for carbs vs. 9 for fat). However, if carbs spike blood sugar without fiber and trigger hunger, a moderate-carb approach might feel easier to sustain. Experiment to find what works; some prefer higher carbs, others prefer lower carbs with higher fat.",
    },
    {
      question: "What are good sources of carbohydrates?",
      answer: "Choose whole grain carbs: oats, brown rice, quinoa, whole wheat bread/pasta. Include vegetables (broccoli, sweet potatoes, spinach) for carbs, fiber, and nutrients. Fruits (berries, bananas, apples) provide carbs, fiber, and antioxidants. Legumes (lentils, beans) offer carbs and plant protein. Limit refined carbs (white bread, sugary cereals, candy) that spike blood sugar and lack fiber. Timing carbs around workouts {'\u2013'} more carbs before/after intense training {'\u2013'} optimizes energy and recovery.",
    },
    {
      question: "Is there such a thing as too many carbs?",
      answer: "Yes. Excess carbs {'\u2013'} beyond what you burn plus a modest surplus {'\u2013'} are stored as muscle glycogen (limited by muscle size) or converted to fat. Very high carbs (10+ g/kg) without intense training typically leads to excess body fat gain. Additionally, chronically very high carbs without adequate fiber can elevate triglycerides and impair insulin sensitivity in some people. However, for athletes in heavy training, 8{'\u2013'}10 g/kg is appropriate and necessary.",
    },
    {
      question: "What's the difference between total carbs and net carbs?",
      answer: "Total carbs = all carbohydrates in a food. Net carbs = total carbs minus fiber. Fiber is a carb but isn{'\u2019'}t digested for energy; it passes through largely intact. If you{'\u2019'}re counting net carbs (common in low-carb diets), you subtract fiber. For example, 30g total carbs with 10g fiber = 20g net carbs. For general health and sports nutrition, total carbs matter most. Net carbs are useful if tracking a low-carb diet or managing diabetes.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/FatIntakeCalculator")),
  slug: "fat-intake-calculator",
  title: "Fat Intake Calculator",
  shortTitle: "Fat Intake",
  description: "Calculate daily fat intake based on your calorie needs and preferred dietary approach",
  category: "health",
  icon: "🧈",
  keywords: ["fat intake calculator", "dietary fat", "saturated fat", "unsaturated fat", "nutrition macros"],
  popular: true,
  faqs: [
    {
      question: "Is saturated fat bad for heart health?",
      answer: "The relationship is complex. Modern research shows saturated fat{'\u2019'}s effect depends on type (stearic acid vs. palmitic acid), food source (butter vs. coconut oil vs. beef), and individual factors (genetics, overall diet, inflammation). Some saturated fat in a healthy diet isn{'\u2019'}t inherently harmful; the American Heart Association recommends limiting it to {'{'}less than 10% of calories. Quality matters: butter in whole foods is different from trans fats in processed foods. Individual response varies; some people see no adverse effects at higher saturated fat intake.",
    },
    {
      question: "What are the best sources of unsaturated fat?",
      answer: "Top sources: extra virgin olive oil, avocados, nuts (almonds, walnuts, cashews), seeds (chia, flax, pumpkin), fatty fish (salmon, sardines, mackerel {'\u2013'} rich in omega-3s), and plant oils (canola, safflower). These provide unsaturated fats plus nutrients like vitamin E, magnesium, and polyphenols. Include a variety; different sources offer different benefits. Whole food sources are preferable to oils for satiety and nutrient density, though oils are acceptable in moderation.",
    },
    {
      question: "How much omega-3 should I eat daily?",
      answer: "The FDA and most organizations recommend 1.1{'\u2013'}1.6g daily alpha-linolenic acid (ALA), found in flax, chia, and walnuts. For EPA and DHA (long-chain omega-3s from fish), 250{'\u2013'}500mg daily is beneficial for heart and brain health. If you don{'\u2019'}t eat fatty fish, consider: 2{'\u2013'}3x weekly (about 8 oz total), flax/chia seeds daily, or a fish oil supplement. Plant-based sources are less efficiently converted to EPA/DHA; vegetarians might benefit from algae supplements.",
    },
    {
      question: "Can I lose weight on a high-fat diet?",
      answer: "Yes, if total calories are in deficit. Fat is satiating {'\u2013'} 1g provides 9 calories but often keeps you fuller longer than carbs (4 cal/g) because fat slows digestion. A higher-fat, lower-carb diet works well for many people because they eat fewer total calories naturally. However, fat is calorie-dense; it{'\u2019'}s easy to overeat if not mindful. Track intake; weight loss still requires calorie deficit regardless of macro split. Find the approach that makes eating less feel sustainable for you.",
    },
    {
      question: "Are there fats I should avoid entirely?",
      answer: "Yes, avoid or minimize trans fats (hydrogenated oils, some margarines, fried foods), which increase inflammation and heart disease risk. Also limit highly processed fats and oils combined with refined carbs and additives. Focus on whole food sources of fat and minimize processed foods. If choosing between avocado oil and vegetable shortening, avocado oil is clearly superior. Avoid deep-fried foods regularly; occasional fried food in an otherwise healthy diet isn{'\u2019'}t catastrophic but shouldn{'\u2019'}t be regular.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/GFRCalculator")),
  slug: "gfr-calculator",
  title: "GFR Calculator (CKD-EPI 2021)",
  shortTitle: "GFR Calculator",
  description: "Estimate glomerular filtration rate to assess chronic kidney disease stage",
  category: "health",
  icon: "🫘",
  keywords: ["GFR", "eGFR", "kidney function", "CKD", "creatinine", "kidney disease"],
  popular: false,
  faqs: [
    {
      question: "What's a normal eGFR value?",
      answer: "Normal eGFR is 90 or higher, meaning normal kidney function. Values of 60-89 show mild decrease. Below 60 is abnormal and may indicate chronic kidney disease. Consult your doctor if your eGFR is consistently below 60."
    },
    {
      question: "Why did my eGFR drop but creatinine stayed the same?",
      answer: "eGFR also depends on age—eGFR naturally declines with age even if creatinine stays stable. Kidney function typically declines about 1 mL/min/year after age 30. This is normal aging unless eGFR drops rapidly."
    },
    {
      question: "Can I improve my eGFR?",
      answer: "You can slow kidney disease progression by managing blood pressure (target less than 130/80), controlling diabetes, avoiding NSAIDs, eating a kidney-healthy diet, and quitting smoking. Once significant damage occurs, it's usually not reversible."
    },
    {
      question: "What does the race-free formula mean?",
      answer: "The 2021 CKD-EPI formula removed racial adjustments that were discriminatory. All patients now use the same formula regardless of race. This gives more accurate estimates and fairer kidney disease diagnosis across all populations."
    },
    {
      question: "Should I worry if my eGFR is 55?",
      answer: "An eGFR of 55 indicates Stage 3a CKD (mild to moderate decrease). One test alone isn't diagnostic; kidney disease is confirmed when eGFR stays below 60 for 3+ months. See your doctor for monitoring and treatment planning."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/HealthyWeightCalculator")),
  slug: "healthy-weight-calculator",
  title: "Healthy Weight Calculator",
  shortTitle: "Healthy Weight",
  description: "Calculate your healthy weight range using BMI and Hamwi formulas",
  category: "health",
  icon: "⚖️",
  keywords: ["healthy weight", "BMI", "ideal weight", "weight range", "health"],
  popular: false,
  faqs: [
    {
      question: "Why is there a range instead of a single number?",
      answer: "Health weights vary by body composition, genetics, and muscle mass. Someone muscular at the high end may be healthier than someone sedentary at the low end. Use the range as a guideline, but focus on fitness and health markers like blood pressure and cholesterol, not just weight."
    },
    {
      question: "Is BMI accurate for muscular people?",
      answer: "No. BMI doesn't distinguish muscle from fat. Very muscular athletes may be classified as overweight by BMI despite being very lean. If you're strength-training heavily, BMI may not reflect your actual body composition. Consider body fat percentage alongside BMI."
    },
    {
      question: "How do I know my frame size?",
      answer: "Measure your wrist circumference: if less than 5.5 inches (women) or 6.5 inches (men), you're small frame. If more than 6.25 inches (women) or 7.5 inches (men), you're large frame. Otherwise, you're medium frame."
    },
    {
      question: "What if I'm significantly above or below the healthy range?",
      answer: "If you're far outside the range, consult a doctor or registered dietitian. Significant weight changes may indicate underlying health issues. Aim for gradual changes (1-2 lbs/week) through diet and exercise rather than rapid weight loss or gain."
    },
    {
      question: "Does this account for age?",
      answer: "This calculator uses the standard adult ranges. Healthy weights may shift slightly with age due to changes in metabolism and body composition. Children and very elderly individuals should consult healthcare providers for age-specific guidance."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/IdealWeightCalculator")),
  slug: "ideal-weight-calculator",
  title: "Ideal Weight Calculator",
  shortTitle: "Ideal Weight",
  description: "Calculate your ideal healthy weight range using medical formulas (Devine, Robinson, Miller, Hamwi)",
  category: "health",
  icon: "🎯",
  keywords: ["ideal weight", "healthy weight", "weight calculator", "Devine formula"],
  popular: false,
  faqs: IDEAL_WEIGHT_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/KetoDietCalculator")),
  slug: "keto-calculator",
  title: "Keto Diet Calculator",
  shortTitle: "Keto Macros",
  description: "Calculate your ketogenic diet macros based on your body metrics and fitness goals",
  category: "health",
  icon: "🥑",
  keywords: ["keto calculator", "ketogenic diet", "macros", "fat loss", "low carb", "keto macros"],
  popular: true,
  faqs: [
    {
      question: "What exactly is ketosis and how do I know I'm in it?",
      answer: "Ketosis is a metabolic state where the body burns fat for fuel, producing ketones in the liver. You know you're in ketosis through: reduced appetite, steady energy without crashes, mental clarity, or testing (blood ketone meter, urine strips, or breath analyzer). Initial signs include bad breath, dry mouth, or \"keto flu\" symptoms during adaptation. After 1{'\u2013'}2 weeks, most people adapt and feel normal or energized. Urine strips are affordable but blood testing is more accurate.",
    },
    {
      question: "How do I know if I'm eating the right amount of protein?",
      answer: "Adequate protein typically ranges 0.7{'\u2013'}1g per pound of body weight (higher with intense training). The calculator suggests 25% of calories as a balanced target. Sufficient protein prevents muscle loss during calorie deficit, improves satiety, and supports recovery. Signs of too little: muscle loss, weakness, slow recovery, hunger. Signs of too much (over 30% calories): potential difficulty maintaining ketosis, nausea, or kidney strain in sensitive individuals. Adjust within 20{'\u2013'}30% of calories based on how you feel.",
    },
    {
      question: "Can I exceed 50g carbs daily and still be in ketosis?",
      answer: "Possibly, but it{'\u2019'}s individual and unreliable. Most people need under 20{'\u2013'}50g carbs to maintain ketosis; exceeding that risks exiting it. Some very active individuals tolerate 50{'\u2013'}100g and stay ketogenic. The safest approach: stay under 20{'\u2013'}30g carbs until fat loss plateaus, then cautiously increase if desired. Pay attention to appetite and energy; if they worsen at higher carbs, you{'\u2019'}ve likely exited ketosis and should reduce carbs.",
    },
    {
      question: "Is it okay to not hit my fat target exactly?",
      answer: "Yes. The 70% fat guideline is a target, not a strict requirement. Aim to stay in the 65{'\u2013'}75% range. If you{'\u2019'}re satisfied earlier, you don{'\u2019'}t need to force more fat {'\u2013'} keto{'\u2019'}s satiety is one advantage. However, eating too little fat ({'{'}less than 60%) risks exiting ketosis. Prioritize hitting protein and carb targets, then fill remaining calories with fat. Quality fats (olive oil, avocados, fatty fish) provide satiety and nutrients.",
    },
    {
      question: "What if my weight doesn't change even though I'm in ketosis?",
      answer: "Weight loss requires calorie deficit; ketosis without calorie deficit rarely causes loss. Recheck your intake {'\u2013'} oils, nuts, cheese, and \"keto-friendly\" products add calories quickly. Calorie deficit might be smaller than intended. After 4{'\u2013'}6 weeks without progress, reduce calories by 10{'\u2013'}20% (200{'\u2013'}400 cal) or increase activity. Women may see slower initial loss. Track average weekly weight, not daily fluctuations. Patience and consistency beat perfection.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/LeanBodyMassCalculator")),
  slug: "lean-body-mass-calculator",
  title: "Lean Body Mass Calculator",
  shortTitle: "Lean Body Mass",
  description: "Calculate your lean body mass, fat mass, and muscle-to-fat ratio",
  category: "health",
  icon: "💪",
  keywords: ["lean body mass", "LBM", "fat mass", "body composition", "muscle", "fitness"],
  popular: false,
  faqs: [
    {
      question: "What's the difference between LBM and muscle mass?",
      answer: "LBM includes all non-fat tissue: muscle, bone, organs, water, and connective tissue. Muscle mass is just the skeletal muscle portion. LBM is typically 75-85% muscle, 15-25% other tissues."
    },
    {
      question: "How accurate is the waist-based body fat estimate?",
      answer: "The Navy-style estimate has a margin of error of about ±3-5% for body fat percentage. Direct measurements like DEXA scans are more accurate (±1-2%). Use estimates for tracking trends; use direct measures for precision."
    },
    {
      question: "Why does my LBM matter for weight loss?",
      answer: "LBM is metabolically active—muscle burns ~6 calories per pound per day at rest, while fat burns only ~2 calories. Preserving LBM during weight loss keeps your metabolism high and improves body composition."
    },
    {
      question: "What's a healthy muscle-to-fat ratio?",
      answer: "For men: ratios above 3:1 are excellent. For women: ratios above 2:1 are excellent. These vary by age and fitness level. Competitive athletes may reach 5:1 or higher."
    },
    {
      question: "How do I increase my LBM?",
      answer: "Combine resistance training (lift weights 3-5x weekly) with adequate protein intake (0.7-1g per pound of LBM). Progressive overload and consistent effort build muscle over months."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/MacroCalculator")),
  slug: "macro-calculator",
  title: "Macro Calculator",
  shortTitle: "Macros",
  description: "Calculate your personalized macronutrient targets based on your goals and preferred diet type",
  category: "health",
  icon: "🥗",
  keywords: ["macro calculator", "macronutrients", "protein", "carbs", "fat", "nutrition", "diet"],
  popular: false,
  faqs: MACRO_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/OneRepMaxCalculator")),
  slug: "one-rep-max-calculator",
  title: "One Rep Max Calculator",
  shortTitle: "1RM Estimator",
  description: "Estimate your one-rep max from submaximal lifts using Brzycki, Epley, Lander, and O'Connor formulas",
  category: "health",
  icon: "💪",
  keywords: ["one rep max", "1RM calculator", "strength training", "lifting calculator", "powerlifting"],
  popular: true,
  faqs: [
    {
      question: "Why are there different 1RM formulas?",
      answer: "Different formulas were developed from different research populations with different rep ranges and exercise types. Brzycki and Epley, the most popular, work well for 2{'\u2013'}10 rep ranges but can diverge at extreme rep ranges. Lander was developed specifically for power athletes and tends to work well below 10 reps. No single formula is universally perfect {'\u2014'} individual leverages, training age, and genetics cause variation. Averaging multiple formulas (as this calculator does) provides a better estimate than any single formula.",
    },
    {
      question: "How accurate are 1RM estimates?",
      answer: "Estimates are typically accurate within {'\u00b1'}10{'\u2013'}15% of actual 1RM. Trained lifters with good technique may be closer {'\u00b1'}5{'\u2013'}10%. The further you are from 1 rep, the larger potential error {'\u2014'} estimating from 10 reps is more reliable than from 1 rep. These estimates are useful for programming training intensity, but don{'\u2019'}t treat them as exact. Use them as starting points; adjust based on how weights feel during training.",
    },
    {
      question: "When should I test my actual 1RM?",
      answer: "Test actual 1RM at most every 4{'\u2013'}8 weeks during a dedicated strength block, with full recovery, proper warm-up, and spotters. Only test if your technique is solid; bad form during a max lift causes injury. For most people, estimated 1RM is sufficient for training purposes. If you{'\u2019'}re a competitive powerlifter, test more frequently during competition seasons. Always prioritize technique over weight.",
    },
    {
      question: "What rep range should I use for the most accurate estimate?",
      answer: "Estimates are most accurate when using 3{'\u2013'}8 reps. Estimating from 1{'\u2013'}2 reps is unreliable because you{'\u2019'}re already near your max. Estimating from 15{'\u2013'}20 reps is also unreliable because you{'\u2019'}re far from 1RM and muscular endurance factors in heavily. The sweet spot is 5{'\u2013'}8 reps {'\u2014'} heavy enough to be close to 1RM, but multiple reps reduce variation and nerves.",
    },
    {
      question: "How do I use 1RM estimates for programming?",
      answer: "Once you have an estimated 1RM, use percentages to set working weights. Strength work (1{'\u2013'}5 reps): 85{'\u2013'}95% 1RM. Hypertrophy (6{'\u2013'}12 reps): 65{'\u2013'}85% 1RM. Power (3{'\u2013'}5 reps): 75{'\u2013'}90% 1RM, explosive. Endurance (12+ reps): 50{'\u2013'}70% 1RM. Most effective programs cycle through these intensities. Start conservative {'\u2014'} if an estimated weight feels easy, increase; if it feels heavy, decrease. Progressive overload (gradually increasing weight or reps) over weeks/months builds strength.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/OvulationCalculator")),
  slug: "ovulation-calculator",
  title: "Ovulation Calculator",
  shortTitle: "Ovulation",
  description: "Estimate your ovulation date and fertile window based on your menstrual cycle length",
  category: "health",
  icon: "🔬",
  keywords: ["ovulation calculator", "fertile window", "menstrual cycle", "pregnancy planning", "conception"],
  popular: true,
  faqs: [
    {
      question: "How accurate is this calculator?",
      answer: "This calculator estimates ovulation for a typical cycle but individual timing varies. On average, it's accurate within a few days for people with regular cycles. Accuracy decreases significantly with irregular cycles. Combining this calendar method with basal body temperature tracking or cervical mucus observation increases reliability. For most accurate results, track actual ovulation signs over multiple cycles.",
    },
    {
      question: "Can I get pregnant outside the fertile window?",
      answer: "Pregnancy requires intercourse during the fertile window when an egg is present or when sperm can survive until ovulation. However, calculating the exact fertile window is difficult because ovulation timing varies. Some people ovulate earlier or later than predicted. Having regular intercourse throughout your cycle (every 2{'\u2013'}3 days) removes timing stress and improves conception odds without needing precise ovulation prediction.",
    },
    {
      question: "What if my cycle length varies?",
      answer: "Cycle variation is common and normal. If your cycles range from 21{'\u2013'}35 days, use your average length or calculate separately for shortest and longest cycles to identify your range of possible fertile windows. More significant variation (28 to 40 days or longer) makes calendar predictions unreliable. Track additional ovulation signs (temperature, cervical mucus, ovulation tests) for better prediction, or consult a fertility specialist.",
    },
    {
      question: "How long can sperm survive?",
      answer: "Sperm can survive in the female reproductive tract for 3{'\u2013'}5 days in optimal cervical mucus conditions, which occurs around ovulation. This is why the fertile window extends 5 days before ovulation {'\u2013'} sperm deposited then can fertilize an egg released later. Sperm survival is shorter in less-receptive cervical environments. The egg itself survives about 12{'\u2013'}24 hours after ovulation.",
    },
    {
      question: "What is basal body temperature and how does it help?",
      answer: "Basal body temperature (BBT) is your resting temperature measured immediately upon waking, before any activity. It rises slightly (0.5{'\u2013'}1 degree) after ovulation due to progesterone. Tracking daily BBT reveals ovulation retrospectively (confirming it happened) rather than predicting it in advance. BBT combined with cervical mucus observation and cycle calendar provides the most reliable natural fertility tracking method for both conception planning and avoiding pregnancy.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/PaceCalculator")),
  slug: "pace-calculator",
  title: "Running/Cycling Pace Calculator",
  shortTitle: "Pace",
  description: "Calculate your running or cycling pace per mile and estimate finish times for common race distances",
  category: "health",
  icon: "🏃",
  keywords: ["pace calculator", "running pace", "cycling pace", "race time", "marathon calculator"],
  popular: false,
  faqs: PACE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/PeriodCalculator")),
  slug: "period-calculator",
  title: "Period Calculator",
  shortTitle: "Period Tracker",
  description: "Predict your upcoming periods based on your average cycle length and period duration",
  category: "health",
  icon: "📅",
  keywords: ["period calculator", "menstrual cycle", "period tracker", "period prediction", "cycle calendar"],
  popular: true,
  faqs: [
    {
      question: "How accurate is period prediction?",
      answer: "This calculator is accurate for people with regular, predictable cycles. If your cycle length is consistent within 2{'\u2013'}3 days, predictions are reliable. However, cycles can shift due to stress, travel, illness, weight changes, intense exercise, or medications. Hormonal birth control typically makes cycles very predictable (or eliminates them). Irregular cycles (varying by 5+ days) make prediction difficult; track multiple months to find your pattern or discuss irregularities with a healthcare provider.",
    },
    {
      question: "What's considered a normal period?",
      answer: "Normal periods typically last 2{'\u2013'}7 days and occur every 21{'\u2013'}35 days. Flow varies from light to heavy. Most people use 5{'\u2013'}8 tampons or pads daily at peak flow. You might pass small clots (golf ball size is normal). Periods are usually heaviest the first 2{'\u2013'}3 days and taper toward the end. If your period is unusually heavy (soaking a pad hourly for consecutive hours), lasts longer than 7 days, or is extremely painful, consult a healthcare provider.",
    },
    {
      question: "Why do I have period pain and what helps?",
      answer: "Period pain (dysmenorrhea) results from uterine muscle contractions as the lining sheds. Prostaglandin hormones trigger these contractions. Over-the-counter pain relievers like ibuprofen block prostaglandins and are most effective if taken at the first sign of pain or before it starts. Heat therapy (heating pad or warm bath), light exercise, massage, and relaxation techniques also help. If pain is severe or interferes with daily life, stronger medications or underlying conditions may need evaluation.",
    },
    {
      question: "Can I predict ovulation based on my period?",
      answer: "Yes, roughly. Ovulation typically occurs about 14 days before your next period (or cycle length minus 14 days). If your cycle is 28 days, ovulation usually occurs around day 14. If it's 30 days, ovulation is around day 16. However, ovulation timing varies more than period timing in the same person. For more accurate ovulation prediction, use ovulation tests, track basal body temperature, observe cervical mucus changes, or use an ovulation calculator alongside period tracking.",
    },
    {
      question: "What if my period suddenly changes?",
      answer: "Sudden changes in flow, duration, or timing can indicate hormonal shifts or health changes. Common causes: stress, dietary changes, new medications, pregnancy (if applicable), thyroid issues, PCOS, fibroids, or polyps. Tracking your normal pattern helps identify changes. Report sudden changes to your healthcare provider, especially if accompanied by new pain, excessive bleeding, or missed periods. Documenting the change (duration, flow, dates) helps your provider diagnose any underlying issues.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/PregnancyCalculator")),
  slug: "pregnancy-due-date-calculator",
  title: "Pregnancy Due Date Calculator",
  shortTitle: "Due Date",
  description: "Calculate your estimated due date and track your pregnancy week by week",
  category: "health",
  icon: "🤰",
  keywords: ["pregnancy", "due date", "pregnancy calculator", "gestational age", "trimester"],
  popular: true,
  faqs: PREGNANCY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/PregnancyConceptionCalculator")),
  slug: "pregnancy-conception-calculator",
  title: "Pregnancy Conception Calculator",
  shortTitle: "Pregnancy Conception",
  description:
    "Calculate estimated conception date, last menstrual period, and current gestational age",
  category: "health",
  icon: "👶",
  keywords: [
    "pregnancy",
    "conception",
    "LMP",
    "gestational age",
    "due date",
    "prenatal",
  ],
  faqs: PREGNANCY_CONCEPTION_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/PregnancyWeightGainCalculator")),
  slug: "pregnancy-weight-gain-calculator",
  title: "Pregnancy Weight Gain Calculator",
  shortTitle: "Pregnancy Weight Gain",
  description: "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI and current week",
  category: "health",
  icon: "🤰",
  keywords: ["pregnancy weight gain", "prenatal calculator", "fetal development", "gestational health", "BMI pregnancy"],
  popular: true,
  faqs: [
    {
      question: "Why do weight gain recommendations differ by BMI?",
      answer: "Different BMI categories have different risks and benefits from weight gain. Underweight women and babies benefit from higher gains to support healthy fetal development. Normal weight women achieve optimal outcomes with moderate gains. Overweight and obese women have higher inherent risks of gestational diabetes and preeclampsia, so lower gains are recommended to reduce complications while still supporting fetal development.",
    },
    {
      question: "What if I'm gaining too fast or too slow?",
      answer: "Some variation from the linear progression shown here is normal. Discuss your specific weight gain pattern with your healthcare provider at prenatal visits. Too-rapid gains might indicate fluid retention or excessive fat gain (adjustable through diet and activity). Too-slow gains might need investigation if accompanied by other symptoms. Your provider can give personalized guidance based on your health and fetal development.",
    },
    {
      question: "How much of pregnancy weight is baby and how much is me?",
      answer: "Of a typical 30-lb gain, only about 7.5 lbs is the baby itself. Other components include: placenta (1.5 lbs), amniotic fluid (2 lbs), increased blood volume (4 lbs), expanded uterus (2.5 lbs), breast tissue (1.5 lbs), and maternal fat/fluid stores (about 11 lbs). Most of the mother's weight gain is essential for pregnancy health and is naturally lost postpartum through delivery, lactation, and normal metabolism.",
    },
    {
      question: "When does most pregnancy weight gain occur?",
      answer: "First trimester brings minimal weight gain (1{'\u2013'}5 lbs). Weight gain accelerates in the second trimester as the fetus grows. Third trimester continues at moderate rates (0.5{'\u2013'}1 lb per week). Most women gain about 1 lb per week on average during the second and third trimesters. Individual patterns vary based on pre-pregnancy weight, metabolism, diet, and activity level. Your provider tracks your progress at each visit.",
    },
    {
      question: "How do I lose pregnancy weight after delivery?",
      answer: "About 10{'\u2013'}13 lbs are immediately lost at delivery (baby, placenta, amniotic fluid). Additional loss occurs in the next few weeks as the body sheds excess fluid through sweating and urination. Breastfeeding burns extra calories (about 300{'\u2013'}500 daily), aiding weight loss. The remaining fat stores may take 6{'\u2013'}12 months to lose through balanced nutrition and regular activity. Consult your healthcare provider before starting exercise postpartum.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/ProteinCalculator")),
  slug: "protein-calculator",
  title: "Protein Calculator",
  shortTitle: "Protein Needs",
  description: "Calculate your daily protein requirement based on body weight, fitness goals, and meal frequency",
  category: "health",
  icon: "🥚",
  keywords: ["protein calculator", "protein intake", "daily protein", "muscle building", "protein requirement"],
  popular: true,
  faqs: [
    {
      question: "How much protein do I really need?",
      answer: "The RDA (Recommended Dietary Allowance) is 0.8 g/kg for average adults, sufficient to prevent deficiency but not optimized for performance. Active individuals and those building muscle need more: 1.2{'\u2013'}2.2 g/kg. Studies show muscle protein synthesis plateaus around 1.6{'\u2013'}2.2 g/kg; eating 3{'\u2013'}4 g/kg provides no additional benefit. Your goal, activity level, age, and health status determine your ideal intake.",
    },
    {
      question: "What{'\u2019'}s the difference between complete and incomplete proteins?",
      answer: "Complete proteins contain all 9 essential amino acids (which your body can{'\u2019'}t make): meat, fish, eggs, dairy, soy, quinoa, buckwheat. Incomplete proteins lack one or more amino acids: most plant-based (beans, nuts, grains). Vegetarians can get complete protein by combining foods (beans + rice) or eating soy/quinoa. Variety is key {'\u2014'} different sources provide different micronutrients.",
    },
    {
      question: "Is it better to eat protein all at once or spread throughout the day?",
      answer: "Spreading protein across meals (3{'\u2013'}6 times daily) optimizes muscle protein synthesis better than eating all protein in one meal. Studies show ~20{'\u2013'}40g per meal stimulates protein synthesis in adults; beyond that, excess is oxidized for energy. Distribute protein evenly across meals for best results. Timing relative to workouts matters for athletes, but total daily intake matters most for muscle building.",
    },
    {
      question: "Can too much protein damage your kidneys?",
      answer: "High protein intake (up to 3{'\u2013'}4 g/kg) does <strong>not</strong> damage healthy kidneys. Studies of athletes consuming 2{'\u2013'}3 g/kg show no kidney damage markers. However, people with existing kidney disease must restrict protein per doctor orders. High protein increases urine urea, making kidneys work harder {'\u2014'} for healthy kidneys, this is fine. Stay hydrated; adequate water intake prevents any kidney stress from protein metabolism.",
    },
    {
      question: "What are the best protein sources for vegetarians/vegans?",
      answer: "Top vegetarian sources: Greek yogurt (10g/100g), cottage cheese (11g), eggs (6g each), tofu (15g/100g), lentils (9g/100g), chickpeas (15g/cooked cup), nuts (5{'\u2013'}6g/oz), seeds (3{'\u2013'}5g/tbsp). Top vegan sources: soy products (tofu, tempeh 19g/100g, edamame), legumes (beans, lentils, peas), quinoa (8g/cooked cup), nuts, seeds. Combine incomplete proteins (beans {'\u0002'}rice) throughout the day to ensure all amino acids. Variety and quantity matter most.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/SleepCalculator")),
  slug: "sleep-calculator",
  title: "Sleep Calculator",
  shortTitle: "Sleep Cycles",
  description: "Calculate optimal sleep and wake times aligned with 90-minute sleep cycles for better rest",
  category: "health",
  icon: "💤",
  keywords: ["sleep calculator", "sleep cycles", "optimal bedtime", "wake time", "sleep quality"],
  popular: true,
  faqs: [
    {
      question: "Why are sleep cycles 90 minutes?",
      answer: "Sleep occurs in cycles lasting approximately 90 minutes, during which your brain progresses through light sleep (NREM stage 1{'\u2013'}2), deep sleep (NREM stage 3), and REM sleep. This 90-minute pattern repeats throughout the night, with longer and more intense REM periods toward morning. Most people complete 4{'\u2013'}6 full cycles per night, totaling 6{'\u2013'}9 hours of sleep.",
    },
    {
      question: "What is REM sleep and why is it important?",
      answer: "REM (Rapid Eye Movement) sleep is when most vivid dreaming occurs and is essential for memory consolidation, emotional regulation, and brain development. Adults spend about 20{'\u2013'}25% of sleep in REM, occurring primarily in later cycles. Missing REM sleep impairs learning, mood, and cognitive function. Getting full cycles ensures adequate REM time.",
    },
    {
      question: "How long does it take to fall asleep?",
      answer: "On average, it takes 10{'\u2013'}20 minutes to fall asleep for healthy sleepers. This calculator uses 14 minutes as a standard estimate. Sleep-deprived individuals may fall asleep in minutes, while insomniacs may take much longer. If falling asleep takes consistently over 30 minutes, consult a sleep specialist. Relaxation techniques can help reduce sleep onset time.",
    },
    {
      question: "Is waking during light sleep better than deep sleep?",
      answer: "Yes. Waking during light sleep (NREM stages 1{'\u2013'}2) results in feeling refreshed; waking during deep sleep or transitioning out of REM causes sleep inertia {'\u2014'} grogginess that can last 30{'\u2013'}60 minutes. This calculator aligns wake times with the end of sleep cycles when you{'\u2019'}re naturally in lighter sleep stages, making waking easier and leaving you more alert.",
    },
    {
      question: "Do I really need 7{'\u2013'}9 hours of sleep every night?",
      answer: "Most adults need 7{'\u2013'}9 hours to function optimally, but individual needs vary (6{'\u2013'}10 hours is normal range). Age matters: teenagers need 8{'\u2013'}10 hours, while older adults may need slightly less. Consistently getting less than 6 hours increases risk of heart disease, diabetes, obesity, and cognitive decline. Quality matters too {'\u2014'} 7 hours of quality sleep beats 9 hours of fragmented sleep.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/TDEECalculator")),
  slug: "tdee-calculator",
  title: "TDEE Calculator",
  shortTitle: "TDEE",
  description: "Calculate your total daily energy expenditure and macronutrient targets based on your goals",
  category: "health",
  icon: "🍎",
  keywords: ["TDEE", "total daily energy expenditure", "macros", "calorie calculator", "nutrition"],
  popular: false,
  faqs: TDEE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/TargetHeartRateCalculator")),
  slug: "target-heart-rate-calculator",
  title: "Target Heart Rate Calculator",
  shortTitle: "Heart Rate Zones",
  description: "Calculate your target heart rate zones for different exercise intensities using age or Karvonen formula",
  category: "health",
  icon: "❤️",
  keywords: ["heart rate calculator", "target heart rate", "training zones", "cardio intensity", "aerobic zone"],
  popular: true,
  faqs: [
    {
      question: "What{'\u2019'}s the difference between max HR method and Karvonen formula?",
      answer: "Max HR method estimates max HR as 220 minus age, then applies percentages. It{'\u2019'}s simple but less accurate for trained individuals. Karvonen formula uses heart rate reserve (max HR minus resting HR) to account for fitness level. It{'\u2019'}s more accurate for endurance athletes with low resting HR. For untrained people, both methods give similar zones. For trained athletes, Karvonen is preferred because it better reflects training intensity based on fitness adaptation.",
    },
    {
      question: "How do I measure my resting heart rate?",
      answer: "Measure resting heart rate first thing in the morning, before getting out of bed, or after sitting quietly for 5{'\u2013'}10 minutes. Count your pulse for 15 seconds and multiply by 4, or count for 60 seconds. Normal resting HR is 60{'\u2013'}100 BPM for adults; trained athletes may be 40{'\u2013'}60 BPM. Take the average of several measurements for accuracy. Resting HR decreases with cardiovascular training, so retest every few months if following an exercise program.",
    },
    {
      question: "Is the 220 minus age formula accurate for everyone?",
      answer: "No. The formula estimates max HR but has individual variation of {'\u00b1'}10{'\u2013'}20 BPM. It{'\u2019'}s less accurate for very fit or very unfit individuals. Some athletes may have max HR 10{'\u2013'}15 BPM lower than predicted; others 10{'\u2013'}15 BPM higher. True max HR can only be determined through max HR testing (gradual sprint to exhaustion). For most people, the formula provides a reasonable starting point. If you know your actual max HR, use it instead of the estimate.",
    },
    {
      question: "Should I stay in one zone or switch zones during workouts?",
      answer: "A balanced approach works best. Start warm-up in recovery zone, progress to your target zone, then cool down in recovery zone. For endurance cardio, stay in fat burn or lower cardio zone (60{'\u2013'}80% max HR) for most of the workout. For high-intensity interval training (HIIT), alternate between hard/max zones and recovery zones. Most training (70%) should be easy{'\u2013'}moderate; hard sessions should be 20{'\u2013'}30% of weekly volume. Constant hard training leads to overtraining and injury.",
    },
    {
      question: "Why do smartwatches sometimes show different heart rates than I expect?",
      answer: "Heart rate monitors (smartwatches, chest straps, wearables) measure HR using optical sensors or electrodes. Accuracy varies by device, fit, and individual factors (skin tone, tattoos, movement). Wrist-based optical sensors are less accurate during intense exercise or with poor fit. Chest strap monitors are typically most accurate. Individual variation is normal {'\u2014'} your actual zones may differ from calculated ones. Use the calculator as a guide; monitor how you feel. If your watch shows HR significantly different from manual pulse check, trust manual count.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/WaterIntakeCalculator")),
  slug: "water-intake-calculator",
  title: "Water Intake Calculator",
  shortTitle: "Water Intake",
  description: "Calculate your daily water intake recommendation based on body weight, activity level, and climate conditions",
  category: "health",
  icon: "💧",
  keywords: ["water intake", "daily hydration", "water requirement", "fluid intake", "thirst calculator"],
  popular: true,
  faqs: [
    {
      question: "Is the {'\u0022'}8 glasses a day{'\u0022'} rule accurate?",
      answer: "The {'\u0022'}8 glasses a day{'\u0022'} rule (about 2 liters) is a reasonable general guideline but not one-size-fits-all. Individual needs depend on weight, activity, climate, diet, and health status. A 200 lb active person needs more than a 120 lb sedentary person. About 20{'\u2013'}30% of water intake comes from food. The {'\u0022'}drink to thirst{'\u0022'} approach often works well for healthy people, though athletes and older adults should drink more intentionally.",
    },
    {
      question: "Does drinking more water help with weight loss?",
      answer: "Adequate hydration supports metabolism and can help with weight management indirectly. Drinking water before meals may reduce calorie intake slightly (25{'\u2013'}50 calories per meal). Proper hydration maintains energy for exercise and prevents fatigue. However, water itself has no calories {'\u2014'} weight loss comes from calorie deficit. Replacing sugary drinks with water definitely helps reduce calorie intake and supports overall health.",
    },
    {
      question: "Can you drink too much water?",
      answer: "Yes. Hyponatremia (water intoxication) occurs when drinking excessive water without electrolytes, diluting blood sodium. This is rare and typically occurs in endurance athletes or psychiatric patients but is a real danger. Drink to thirst for most people. During intense exercise over 1{'\u2013'}2+ hours, consume sports drinks with sodium and carbs, not just water. Signs of overhydration include nausea, headache, and swelling {'\u2014'} seek medical attention if these occur.",
    },
    {
      question: "How do I know if I{'\u2019'}m dehydrated?",
      answer: "Signs of dehydration include thirst, dark urine, dry mouth, fatigue, dizziness, and reduced urination. Urine color is a reliable indicator: pale yellow {'\u003d'} well-hydrated, dark yellow/brown {'\u003d'} dehydrated. Mild dehydration causes fatigue and reduced performance; severe dehydration is dangerous and requires medical attention. Prevent dehydration by drinking regularly and increasing intake with activity or heat. Older adults and children dehydrate more easily and should drink proactively.",
    },
    {
      question: "Do electrolytes (sodium, potassium) matter in hydration?",
      answer: "Electrolytes {'\u2014'} especially sodium and potassium {'\u2014'} are essential for hydration. Water alone doesn{'\u2019'}t fully rehydrate; you need electrolytes to help your body retain water. During exercise lasting over 1{'\u2013'}2 hours, drink sports drinks containing sodium (300{'\u2013'}600 mg/L) and carbs to improve fluid absorption and prevent hyponatremia. Regular diet provides enough electrolytes for daily life; supplementation is mainly for intense/prolonged exercise.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/health/WeightLossCalculator")),
  slug: "weight-loss-calculator",
  title: "Weight Loss Calculator",
  shortTitle: "Weight Loss",
  description: "Calculate daily calorie targets and create a safe weight loss plan based on your TDEE and goals",
  category: "health",
  icon: "⚖️",
  keywords: ["weight loss calculator", "calorie deficit", "diet plan", "TDEE", "weight loss goal"],
  popular: true,
  faqs: [
    {
      question: "How many calories should I cut to lose weight safely?",
      answer: "A safe calorie deficit is 300{'\u2013'}750 calories per day, yielding 0.5{'\u2013'}1.5 lbs per week. Deficits above 1,000 calories/day are aggressive and unsustainable for most people; they risk muscle loss, nutrient deficiencies, and metabolic adaptation. The {'\u0022'}sweet spot{'\u0022'} for most is 500 cal/day (~1 lb/week), combining diet with exercise. Rapid weight loss (3{'\u2013'}5 lbs/week) usually includes water and muscle, not just fat.",
    },
    {
      question: "Why does weight loss slow down over time?",
      answer: "As you lose weight, your TDEE decreases because a smaller body burns fewer calories. Additionally, your body adapts to reduced calorie intake by lowering metabolic rate slightly (metabolic adaptation). Weight loss also reveals water retention patterns. Building/maintaining muscle through strength training helps offset metabolic slowdown. Recalculate your calorie target every 10{'\u2013'}15 lbs lost to stay on track.",
    },
    {
      question: "What{'\u2019'}s the minimum calories I should eat?",
      answer: "General guidelines suggest 1,200 cal/day for women and 1,500 cal/day for men as minimums, though individual needs vary. Eating below these risks nutrient deficiency, muscle loss, fatigue, and hormonal disruption. Very low-calorie diets (under 800 cal/day) require medical supervision. If severely overweight, a doctor may recommend structured VLCD programs. Sustainable loss comes from moderate deficits you can maintain, not crash diets.",
    },
    {
      question: "Does protein matter during weight loss?",
      answer: "Yes, significantly. Aim for 1.2{'\u2013'}2.2 grams per kg of body weight during weight loss. Protein preserves muscle mass, increases satiety (keeping you full longer), has a higher thermic effect (burns calories during digestion), and supports recovery. Higher protein intake reduces the muscle loss that occurs with calorie restriction. Prioritize protein sources: lean meats, fish, eggs, legumes, dairy, and plant-based options.",
    },
    {
      question: "Can I eat anything I want as long as calories match?",
      answer: "Technically yes for weight loss, but quality matters for sustainability and health. A diet of pure junk food (same calories) will leave you hungry, tired, and deprived. Whole foods {'\u2014'} vegetables, fruits, lean proteins, whole grains {'\u2014'} are more satiating, nutrient-dense, and support energy for exercise. An 80/20 approach (mostly whole foods, some flexibility) often works best. Focus on foods that keep you satisfied within your calorie goal.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/AreaCalculator")),
  slug: "area-calculator",
  title: "Area Calculator",
  shortTitle: "Area",
  description: "Calculate area and perimeter of common 2D shapes",
  category: "math",
  icon: "📐",
  keywords: ["area", "perimeter", "calculate area", "circle area", "rectangle area"],
  popular: false,
  faqs: AREA_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/AverageCalculator")),
  slug: "average-calculator",
  title: "Average Calculator",
  shortTitle: "Average",
  description: "Calculate mean, median, mode, range, and sum of any list of numbers",
  category: "math",
  icon: "📊",
  keywords: ["average", "mean", "median", "mode", "range", "statistics", "data analysis"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between mean, median, and mode?",
      answer: "Mean is the sum divided by count. Median is the middle value. Mode is the most frequent value. They measure different aspects of a dataset."
    },
    {
      question: "When should I use median instead of mean?",
      answer: "Use median when you have outliers, as it{'\''}s not affected by them. For example, median house price is better than mean when some very expensive homes exist."
    },
    {
      question: "What if there is no mode?",
      answer: "If all values appear equally, there is no mode. If multiple values tie for most frequent, they are all modes."
    },
    {
      question: "What is range and why does it matter?",
      answer: "Range is max - min. It shows spread: two datasets with the same mean can have very different ranges, indicating different variability."
    },
    {
      question: "How do I interpret these statistics?",
      answer: "Mean shows the average/typical value. Median shows the center unaffected by extremes. Mode shows what{'\''}s most common. Range shows variability. Together they paint a complete picture."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/BinaryCalculator")),
  slug: "binary-calculator",
  title: "Binary Calculator",
  shortTitle: "Binary",
  description: "Convert between binary, decimal, octal, and hex; perform binary operations",
  category: "math",
  icon: "💻",
  keywords: ["binary", "decimal", "hexadecimal", "octal", "base conversion", "computer science"],
  popular: false,
  faqs: [
    {
      question: "What is binary?",
      answer: "Binary (base 2) uses only digits 0 and 1. It{'\''}s the language of computers. Every number, letter, and image is ultimately represented in binary."
    },
    {
      question: "How do I convert decimal to binary?",
      answer: "Repeatedly divide by 2 and collect remainders in reverse order. For example, 10 ÷ 2 = 5 r0, 5 ÷ 2 = 2 r1, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Reading upward: 1010."
    },
    {
      question: "What is hexadecimal and why use it?",
      answer: "Hexadecimal (base 16) uses 0-9 and A-F. It{'\''}s used in programming for color codes, memory addresses, and data representation because it{'\''}s compact and easier to read than binary."
    },
    {
      question: "How do binary operations work?",
      answer: "Binary addition and subtraction work like decimal: 1 + 1 = 10 (2 in decimal), 10 - 1 = 1, carry rules apply. Each digit position is powers of 2."
    },
    {
      question: "Why do computers use binary?",
      answer: "Binary is perfect for electronic circuits with two states: on/off, high/low voltage. It{'\''}s reliable, simple to implement, and fundamental to digital electronics."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/CircleCalculator")),
  slug: "circle-calculator",
  title: "Circle Calculator",
  shortTitle: "Circle",
  description: "Calculate circumference, area, radius, diameter, arc length, and sector area",
  category: "math",
  icon: "⭕",
  keywords: ["circle", "circumference", "area", "radius", "diameter", "pi", "geometry"],
  popular: true,
  faqs: [
    {
      question: "What is the circumference of a circle?",
      answer: "Circumference is the perimeter of a circle. The formula is C = 2πr or C = πd, where r is radius and d is diameter."
    },
    {
      question: "What is the area of a circle?",
      answer: "Area is the space inside the circle. The formula is A = πr², where r is the radius. A 5-unit radius circle has area 25π {String.fromCharCode(8776)} 78.54 square units."
    },
    {
      question: "What is the relationship between radius and diameter?",
      answer: "The diameter is exactly twice the radius: d = 2r. The radius is the distance from center to edge; the diameter goes all the way across through the center."
    },
    {
      question: "What is arc length and how is it calculated?",
      answer: "Arc length is a portion of the circumference. For an angle θ in radians: arc length = rθ. For degrees: arc length = (θ/360°) × 2πr."
    },
    {
      question: "Why is π important for circles?",
      answer: "π (pi) is the ratio of any circle{'\''}s circumference to its diameter. It{'\''}s a universal constant {String.fromCharCode(8776)} 3.14159 that appears in all circle and sphere formulas."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/ConfidenceIntervalCalculator")),
  slug: "confidence-interval-calculator",
  title: "Confidence Interval Calculator",
  shortTitle: "Confidence Interval",
  description: "Calculate confidence intervals for population means with margin of error calculations",
  category: "math",
  icon: "📈",
  keywords: ["confidence interval", "margin of error", "statistics", "standard error", "hypothesis testing", "confidence level"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: CONFIDENCE_INTERVAL_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/DistanceCalculator")),
  slug: "distance-calculator",
  title: "Distance Calculator",
  shortTitle: "Distance",
  description: "Calculate distance between two points and find the midpoint in 2D and 3D",
  category: "math",
  icon: "📍",
  keywords: ["distance", "midpoint", "coordinate geometry", "2D", "3D", "points", "Pythagorean"],
  popular: true,
  faqs: [
    {
      question: "What is the distance formula?",
      answer: "In 2D: d = √((x₂-x₁)² + (y₂-y₁)²). In 3D: d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²). It comes from the Pythagorean theorem."
    },
    {
      question: "How is distance formula derived?",
      answer: "It comes from the Pythagorean theorem. The distance is the hypotenuse of a right triangle with legs Δx and Δy."
    },
    {
      question: "What is a midpoint?",
      answer: "The midpoint is the point exactly halfway between two points. In 2D: ((x₁+x₂)/2, (y₁+y₂)/2). Add z for 3D."
    },
    {
      question: "Why use midpoints in real applications?",
      answer: "Midpoints find central locations: average position between two places, center of a line segment, or meeting points in planning."
    },
    {
      question: "Can I use this for GPS coordinates?",
      answer: "Yes! Input latitude/longitude as x/y coordinates. The distance gives the approximate straight-line distance (ignoring Earth{'\''}s curvature for short distances)."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/ExponentCalculator")),
  slug: "exponent-calculator",
  title: "Exponent Calculator",
  shortTitle: "Exponent",
  description: "Calculate powers, roots, and view exponential curves",
  category: "math",
  icon: "⬆️",
  keywords: ["exponent", "power", "square root", "cube root", "scientific notation", "exponential"],
  popular: true,
  faqs: [
    {
      question: "What is an exponent?",
      answer: "An exponent tells you how many times to multiply a number by itself. 2^3 = 2 × 2 × 2 = 8."
    },
    {
      question: "What does a negative exponent mean?",
      answer: "A negative exponent gives you the reciprocal. For example, 2^-3 = 1/2^3 = 1/8."
    },
    {
      question: "What is a fractional exponent?",
      answer: "A fractional exponent indicates a root. For example, 4^(1/2) = 2 (square root), and 8^(1/3) = 2 (cube root)."
    },
    {
      question: "What are exponent rules?",
      answer: "Key rules: a^m × a^n = a^(m+n), a^m ÷ a^n = a^(m-n), (a^m)^n = a^(mn), and a^0 = 1."
    },
    {
      question: "What is scientific notation?",
      answer: "Scientific notation expresses numbers as coefficient × 10^power. For example, 6.02 × 10^23 is Avogadro{'\''}s number."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/FactorCalculator")),
  slug: "factor-calculator",
  title: "Factor Calculator",
  shortTitle: "Factors",
  description: "Find all factors and divisors of any number",
  category: "math",
  icon: "🔢",
  keywords: ["factors", "divisors", "factor pairs", "prime factors", "factorization"],
  popular: true,
  faqs: [
    {
      question: "What is a factor?",
      answer: "A factor of a number n is any positive integer that divides n evenly with no remainder. For example, factors of 12 are 1, 2, 3, 4, 6, and 12. Every number is a factor of itself, and 1 is a factor of every number."
    },
    {
      question: "What is the difference between factors and multiples?",
      answer: "A factor divides a number evenly. A multiple is a number you get by multiplying. For example, 3 is a factor of 12, and 12 is a multiple of 3. Factors are smaller or equal; multiples are larger or equal. They are inverse relationships."
    },
    {
      question: "What are factor pairs?",
      answer: "Factor pairs are two numbers whose product equals the original number. For 24, the pairs are (1, 24), (2, 12), (3, 8), and (4, 6). Every factorization can be viewed as organizing factor pairs. The middle factor pair is closest when the number is not a perfect square."
    },
    {
      question: "How many factors does a number have?",
      answer: "If the prime factorization is n = p1^a × p2^b × p3^c, then the number of factors is (a+1)(b+1)(c+1). For example, 24 = 2³ × 3¹ has (3+1)(1+1) = 8 factors. This formula comes from combinatorics: independently choose exponents for each prime."
    },
    {
      question: "What is the relationship between factors and simplifying fractions?",
      answer: "To simplify a fraction, divide both numerator and denominator by their common factors (ideally the GCF). For 24/36, factors of 24 are 1,2,3,4,6,8,12,24 and factors of 36 are 1,2,3,4,6,9,12,18,36. Common factors are 1,2,3,4,6,12. The GCF is 12, so 24/36 = 2/3."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/FractionCalculator")),
  slug: "fraction-calculator",
  title: "Fraction Calculator",
  shortTitle: "Fractions",
  description: "Add, subtract, multiply, and divide fractions with simplification",
  category: "math",
  icon: "🔢",
  keywords: ["fraction", "fractions", "simplify fraction", "add fractions", "fraction calculator"],
  popular: true,
  faqs: FRACTION_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/GCFCalculator")),
  slug: "gcf-calculator",
  title: "GCF Calculator",
  shortTitle: "GCF / LCM",
  description: "Calculate greatest common factor and least common multiple",
  category: "math",
  icon: "🔄",
  keywords: ["gcf", "gcd", "lcm", "greatest common factor", "least common multiple", "common divisor"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between GCF and LCM?",
      answer: "GCF is the largest number that divides all given numbers. LCM is the smallest number that all given numbers divide into. For 12 and 18: GCF is 6 (largest factor both share), LCM is 36 (smallest number both divide evenly). GCF is used for reducing fractions; LCM for finding common denominators."
    },
    {
      question: "How do I simplify a fraction using GCF?",
      answer: "Find the GCF of the numerator and denominator, then divide both by the GCF. For 48/36, GCF(48,36) = 12, so 48/36 = (48÷12)/(36÷12) = 4/3. This gives the fraction in lowest terms."
    },
    {
      question: "What is the Euclidean Algorithm?",
      answer: "It{'\''}s an efficient method to find GCF: repeatedly divide and take remainders until the remainder is 0. The last non-zero remainder is the GCF. For GCF(48, 36): 48 mod 36 = 12, then 36 mod 12 = 0, so GCF = 12. It works for any two positive integers."
    },
    {
      question: "Can GCF and LCM be equal?",
      answer: "Only when the numbers are identical. For example, GCF(5,5) = 5 and LCM(5,5) = 5. For any two different numbers, GCF is always smaller than LCM. If numbers are coprime (GCF = 1), then LCM = a × b."
    },
    {
      question: "What does coprime mean?",
      answer: "Two numbers are coprime if their GCF is 1, meaning they share no common factors except 1. For example, 7 and 12 are coprime because GCF(7,12) = 1. Coprime numbers are useful in cryptography and have special properties in number theory."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/GPACalculator")),
  slug: "gpa-calculator",
  title: "GPA Calculator",
  shortTitle: "GPA",
  description: "Calculate semester GPA with weighted grades and credit hours",
  category: "math",
  icon: "🎓",
  keywords: ["GPA", "grade point average", "calculate GPA", "semester GPA", "college"],
  popular: true,
  faqs: GPA_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/GradeCalculator")),
  slug: "grade-calculator",
  title: "Grade Calculator",
  shortTitle: "Grade",
  description: "Determine what final exam score you need to reach your desired grade",
  category: "math",
  icon: "📝",
  keywords: ["grade calculator", "final exam score", "calculate grade", "needed grade"],
  popular: false,
  faqs: GRADE_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/HexCalculator")),
  slug: "hex-calculator",
  title: "Hexadecimal Calculator",
  shortTitle: "Hex",
  description: "Convert hexadecimal to decimal, binary, octal, and view color codes",
  category: "math",
  icon: "🎨",
  keywords: ["hexadecimal", "hex", "color", "RGB", "web color", "conversion", "web design"],
  popular: false,
  faqs: [
    {
      question: "What is hexadecimal?",
      answer: "Hexadecimal (base 16) uses digits 0-9 and letters A-F. It{'\''}s widely used in computing for colors, memory, and data representation."
    },
    {
      question: "How do hex color codes work?",
      answer: "A 6-digit hex code like #FF5733 specifies RGB: first two digits are red intensity (00-FF), next two green, last two blue. #FF0000 is pure red, #00FF00 is pure green."
    },
    {
      question: "Why use hexadecimal instead of decimal?",
      answer: "Hex is more compact than binary yet converts easily to/from binary (each hex digit = 4 binary digits). It{'\''}s practical for programmers and designers."
    },
    {
      question: "How do I convert hex to decimal?",
      answer: "Multiply each digit by 16 raised to its position. Example: 1A = 1×16 + 10×1 = 26. Use our calculator for larger numbers."
    },
    {
      question: "What is RGB and how does it relate to hex?",
      answer: "RGB specifies color using Red, Green, Blue values (0-255). Hex encodes RGB: pairs of hex digits map to RGB values. #FF0000 is RGB(255,0,0) = pure red."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/LCMCalculator")),
  slug: "lcm-calculator",
  title: "LCM Calculator",
  shortTitle: "LCM",
  description: "Calculate the least common multiple of numbers",
  category: "math",
  icon: "🔢",
  keywords: ["lcm", "least common multiple", "common multiple", "lowest common multiple"],
  popular: true,
  faqs: [
    {
      question: "What is the least common multiple used for?",
      answer: "LCM is used when finding common denominators for fractions, solving problems with repeating cycles, scheduling events, and synchronizing processes. For example, adding 1/12 + 1/18 requires the denominator 36 (the LCM). It{'\''}s fundamental in arithmetic and practical applications."
    },
    {
      question: "How do I find LCM using prime factorization?",
      answer: "List the prime factorization of each number. Take each prime that appears and use the highest exponent. For 12 = 2² × 3 and 18 = 2 × 3², take 2² and 3² to get LCM = 4 × 9 = 36. This method is intuitive and works for any quantity of numbers."
    },
    {
      question: "What is the relationship between LCM and GCD?",
      answer: "For two numbers a and b: LCM(a, b) × GCD(a, b) = a × b. For 12 and 18, LCM = 36 and GCD = 6, so 36 × 6 = 216 = 12 × 18. This relationship allows you to calculate one from the other. With GCD known, LCM = (a × b) / GCD."
    },
    {
      question: "Can LCM equal one of the input numbers?",
      answer: "Yes, if one number divides the other. For example, LCM(6, 12) = 12 because 6 divides 12 evenly. More generally, LCM(a, b) = max(a, b) when one divides the other. If numbers are coprime (GCD = 1), then LCM = a × b."
    },
    {
      question: "How do I find LCM of more than two numbers?",
      answer: "Find LCM iteratively: LCM(a, b, c) = LCM(LCM(a, b), c). Or, use prime factorization: factor all numbers, take the highest exponent of each prime across all factorizations. For 12, 18, 20: use 2², 3², and 5 to get LCM = 4 × 9 × 5 = 180."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/LogCalculator")),
  slug: "log-calculator",
  title: "Logarithm Calculator",
  shortTitle: "Logarithm",
  description: "Calculate logarithms in any base: log10, natural log, log2, and custom bases",
  category: "math",
  icon: "🔢",
  keywords: ["logarithm", "log", "natural log", "log base", "exponent", "inverse"],
  popular: true,
  faqs: [
    {
      question: "What is a logarithm?",
      answer: "A logarithm answers: to what power must I raise the base to get this number? If b^x = n, then log_b(n) = x."
    },
    {
      question: "What are common logarithm types?",
      answer: "Log10 (common log, base 10) is used in science. ln (natural log, base e) appears in calculus. Log2 (binary) is used in computer science."
    },
    {
      question: "What is the change of base formula?",
      answer: "log_b(n) = log(n) / log(b). This lets you calculate any logarithm using log10 or ln."
    },
    {
      question: "Why can{'\''}t I take the log of zero or negative numbers?",
      answer: "Logarithms are only defined for positive numbers. No power of a positive base equals zero or a negative number."
    },
    {
      question: "What are logarithm properties?",
      answer: "Key properties: log(a×b) = log(a) + log(b), log(a/b) = log(a) - log(b), and log(a^n) = n × log(a)."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/LongDivisionCalculator")),
  slug: "long-division-calculator",
  title: "Long Division Calculator",
  shortTitle: "Long Division",
  description: "Calculate quotient, remainder, and decimal results for division",
  category: "math",
  icon: "➗",
  keywords: ["long division", "division", "quotient", "remainder", "decimal division"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between a quotient and a remainder?",
      answer: "The quotient is how many times the divisor goes into the dividend evenly. The remainder is what{'\''}s left over. For 125 ÷ 7, the quotient is 17 and the remainder is 6. Together: 7 × 17 + 6 = 125."
    },
    {
      question: "How do I express a division result with a remainder?",
      answer: "You can write it three ways: as a mixed number (17 6/7), with R notation (17 R6), or as a decimal (17.857...). The mixed number is useful when dealing with whole units plus fractions, like 'I have 17 full bags and 6/7 of another bag.'"
    },
    {
      question: "What happens if the remainder is zero?",
      answer: "If the remainder is zero, the division is exact. The dividend is perfectly divisible by the divisor with no leftover. For example, 140 ÷ 7 = 20 with remainder 0, meaning 140 is completely divisible by 7."
    },
    {
      question: "Can a remainder be larger than the divisor?",
      answer: "No, the remainder is always smaller than the divisor. If the remainder were equal to or larger than the divisor, you could divide one more time. For example, if you got 'remainder 8' when dividing by 7, you should include one more in the quotient and the true remainder is 1."
    },
    {
      question: "Why is long division taught if we have calculators?",
      answer: "Long division teaches the concept of division, helps you estimate and check answers, and builds mathematical reasoning. Understanding the algorithm also helps with algebraic fractions, polynomial division, and mental math estimation. It{'\''}s a foundation for deeper mathematics."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/MatrixCalculator")),
  slug: "matrix-calculator",
  title: "Matrix Calculator",
  shortTitle: "Matrix",
  description: "Perform 2x2 and 3x3 matrix operations including addition, subtraction, multiplication, determinant, inverse, and transpose",
  category: "math",
  icon: "📐",
  keywords: ["matrix", "linear algebra", "determinant", "inverse", "transpose", "multiplication"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: MATRIX_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/MeanMedianModeCalculator")),
  slug: "mean-median-mode-calculator",
  title: "Mean, Median, Mode Calculator",
  shortTitle: "Mean, Median, Mode",
  description:
    "Calculate mean, median, mode, range, and standard deviation from a dataset",
  category: "math",
  icon: "📈",
  keywords: [
    "statistics",
    "mean",
    "median",
    "mode",
    "standard deviation",
    "data analysis",
  ],
  faqs: MEAN_MEDIAN_MODE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/MixedNumbersCalculator")),
  slug: "mixed-numbers-calculator",
  title: "Mixed Numbers Calculator",
  shortTitle: "Mixed Numbers",
  description:
    "Perform arithmetic operations on mixed numbers with simplified results",
  category: "math",
  icon: "➗",
  keywords: [
    "mixed numbers",
    "fractions",
    "arithmetic",
    "simplify",
    "improper fractions",
  ],
  faqs: MIXED_NUMBERS_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/NumberSequenceCalculator")),
  slug: "number-sequence-calculator",
  title: "Number Sequence Calculator",
  shortTitle: "Number Sequence",
  description: "Identify patterns in number sequences and predict next terms",
  category: "math",
  icon: "📈",
  keywords: ["sequence", "pattern", "arithmetic", "geometric", "fibonacci", "series"],
  popular: false,
  faqs: [
    {
      question: "What is the difference between a sequence and a series?",
      answer: "A sequence is an ordered list of numbers. A series is the sum of the terms in a sequence. For example, the sequence 1, 2, 3, 4 has a series sum of 1+2+3+4=10."
    },
    {
      question: "How do I find the common difference in an arithmetic sequence?",
      answer: "Subtract any term from the next term: d = a(n+1) - a(n). For example, in 5, 8, 11, 14, the common difference is 8-5=3. This should be the same for all consecutive pairs."
    },
    {
      question: "What if my sequence doesn{'\''}t match any pattern?",
      answer: "Not all sequences follow simple arithmetic, geometric, or Fibonacci patterns. Your sequence might follow a quadratic, cubic, or more complex rule. Try calculating differences of differences or analyzing the underlying context."
    },
    {
      question: "Can a sequence be both arithmetic and geometric?",
      answer: "Yes, if all terms are identical. For example, 5, 5, 5, 5 has both common difference 0 and common ratio 1. A non-constant sequence cannot be both types."
    },
    {
      question: "Where do sequences appear in real life?",
      answer: "Arithmetic sequences: loan payments, hourly wage increases. Geometric: bacteria growth, radioactive decay, population growth. Fibonacci: spiral patterns in nature, stock market analysis, algorithm analysis."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/NumbersToWordsCalculator")),
  slug: "numbers-to-words-calculator",
  title: "Numbers to Words Calculator",
  shortTitle: "Numbers to Words",
  description: "Convert numbers into their English word equivalents",
  category: "math",
  icon: "🔤",
  keywords: [
    "numbers to words",
    "number conversion",
    "spell numbers",
    "english words",
    "numerals",
  ],
  faqs: NUMBERS_TO_WORDS_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/PValueCalculator")),
  slug: "p-value-calculator",
  title: "P-Value Calculator",
  shortTitle: "P-Value",
  description: "Calculate p-values from test statistics for hypothesis testing",
  category: "math",
  icon: "📉",
  keywords: ["p-value", "hypothesis test", "statistics", "significance", "t-test", "z-test"],
  popular: false,
  faqs: [
    {
      question: "What does it mean if the p-value is 0.05?",
      answer: "A p-value of 0.05 means there{'\''}s a 5% probability of observing your results if the null hypothesis is true. It doesn{'\''}t mean the null hypothesis has a 5% chance of being true. It{'\''}s the threshold for statistical significance in many fields."
    },
    {
      question: "Is p-value the same as the probability of making an error?",
      answer: "No. The p-value is the probability of observing the data given the null hypothesis. Type I error (rejecting a true null) is the significance level α. These are related but different concepts. A p-value of 0.03 with α=0.05 means you reject the null, not that you have a 3% error rate."
    },
    {
      question: "When should I use a one-tailed test?",
      answer: "Use one-tailed tests when you have a directional hypothesis (e.g., 'A is greater than B'). Use two-tailed when testing if things differ without predicting direction. One-tailed tests have more power but are less flexible. Most conservative approach: use two-tailed unless you have strong prior evidence for direction."
    },
    {
      question: "What{'\''}s the difference between p-value and α (alpha)?",
      answer: "α is your predetermined significance threshold (usually 0.05). The p-value is what you calculate from your data. You compare them: if p-value {'<'} α, results are significant. Don{'\''}t choose α after seeing your p-value, as this inflates Type I error."
    },
    {
      question: "Can I trust a significant result?",
      answer: "Significant p-value provides evidence against the null but doesn{'\''}t prove the alternative. Consider effect size, sample size, and practical significance. Larger studies have more power to detect small effects. A statistically significant result from a small study may not replicate. Always consider the bigger picture beyond the p-value."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/PercentErrorCalculator")),
  slug: "percent-error-calculator",
  title: "Percent Error Calculator",
  shortTitle: "Percent Error",
  description: "Calculate percent error between experimental and theoretical values",
  category: "math",
  icon: "🎯",
  keywords: ["percent error", "error calculation", "experimental error", "accuracy", "precision"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between percent error and percent difference?",
      answer: "Percent error compares an experimental value to a known theoretical value. Percent difference compares two measurements when neither is definitely correct. Percent error assumes one value is the standard."
    },
    {
      question: "Why do we use absolute value in the percent error formula?",
      answer: "The absolute value ensures percent error is always positive. Whether you over- or under-measured, the magnitude of error is what matters. This makes it easy to compare accuracy across different measurements."
    },
    {
      question: "What is a good percent error?",
      answer: "In most lab settings, percent error under 5% is excellent, 5-10% is good, and 10-20% is acceptable. The threshold depends on the field: pharmaceutical manufacturing requires less than 1%, while some physical measurements accept 10-15%."
    },
    {
      question: "Can percent error be zero?",
      answer: "Yes, percent error is zero only when the experimental value exactly equals the theoretical value, which is rare in practice. Even precise instruments have some measurement error."
    },
    {
      question: "How do I reduce percent error?",
      answer: "Improve your measuring technique, use more precise instruments, minimize environmental interference, and take multiple measurements to average out random errors. Identifying and correcting systematic errors is also crucial."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/PercentageCalculator")),
  slug: "percentage-calculator",
  title: "Percentage Calculator",
  shortTitle: "Percentage",
  description: "Calculate percentages, percentage of values, and percentage changes",
  category: "math",
  icon: "📊",
  keywords: ["percentage", "percent", "calculate percentage", "percentage change", "discount"],
  popular: true,
  faqs: PERCENTAGE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/PermutationCombinationCalculator")),
  slug: "permutation-combination-calculator",
  title: "Permutation and Combination Calculator",
  shortTitle: "Permutation/Combination",
  description: "Calculate permutations (nPr) and combinations (nCr) with detailed factorial breakdown",
  category: "math",
  icon: "🔢",
  keywords: ["permutation", "combination", "nPr", "nCr", "factorial", "counting", "probability"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: PERMUTATION_COMBINATION_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/PrimeFactorizationCalculator")),
  slug: "prime-factorization-calculator",
  title: "Prime Factorization Calculator",
  shortTitle: "Prime Factorization",
  description: "Find prime factors and divisors of any number",
  category: "math",
  icon: "🔢",
  keywords: ["prime factorization", "prime factors", "divisors", "number theory", "factors"],
  popular: true,
  faqs: [
    {
      question: "What is a prime number?",
      answer: "A prime number is a natural number greater than 1 that has exactly two divisors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13. The number 1 is not prime. The number 2 is the only even prime. Prime numbers are the building blocks of all other numbers."
    },
    {
      question: "Why is factorization important?",
      answer: "Prime factorization reveals the structure of numbers. It{'\''}s essential for simplifying fractions, finding GCD and LCM, understanding divisibility, and in cryptography where large number factorization is computationally hard. It also helps in algebra and solving equations."
    },
    {
      question: "What does 2^3 mean in factorization?",
      answer: "2^3 means 2 is multiplied by itself 3 times: 2 × 2 × 2 = 8. In factorization, exponents show how many times each prime appears. For 60 = 2² × 3 × 5, the prime 2 appears twice, while 3 and 5 each appear once."
    },
    {
      question: "How many divisors does a number have?",
      answer: "If n = p1^a × p2^b × p3^c, the number of divisors is (a+1)(b+1)(c+1). For example, 60 = 2² × 3¹ × 5¹ has (2+1)(1+1)(1+1) = 12 divisors: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60."
    },
    {
      question: "Is 1 considered a prime number?",
      answer: "No, 1 is not prime by modern definition. A prime must have exactly two distinct divisors. The number 1 has only one divisor (itself). Excluding 1 from primes simplifies theorems like the Fundamental Theorem of Arithmetic, which states every integer has a unique prime factorization."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/ProbabilityCalculator")),
  slug: "probability-calculator",
  title: "Probability Calculator",
  shortTitle: "Probability",
  description: "Calculate probability, odds, expected value, and complementary probability",
  category: "math",
  icon: "🎲",
  keywords: ["probability", "odds", "expected value", "statistics", "likelihood"],
  popular: false,
  faqs: PROBABILITY_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/PythagoreanTheoremCalculator")),
  slug: "pythagorean-theorem-calculator",
  title: "Pythagorean Theorem Calculator",
  shortTitle: "Pythagorean Theorem",
  description: "Find missing sides of right triangles using a² + b² = c²",
  category: "math",
  icon: "📏",
  keywords: ["pythagorean", "theorem", "right triangle", "hypotenuse", "geometry"],
  popular: true,
  faqs: [
    {
      question: "What is the Pythagorean theorem?",
      answer: "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse (longest side) and a and b are the other two sides."
    },
    {
      question: "Which side is the hypotenuse?",
      answer: "The hypotenuse is the longest side of a right triangle, always opposite the 90-degree angle."
    },
    {
      question: "Can I use this for non-right triangles?",
      answer: "No, the Pythagorean theorem only applies to right triangles (triangles with one 90-degree angle)."
    },
    {
      question: "What is a Pythagorean triple?",
      answer: "A Pythagorean triple is a set of three integers that satisfy the theorem, like 3-4-5, 5-12-13, or 8-15-17."
    },
    {
      question: "How is the area of a right triangle calculated?",
      answer: "For a right triangle, the area is (leg1 × leg2) / 2, where the legs are the two sides that form the right angle."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/QuadraticFormulaCalculator")),
  slug: "quadratic-formula-calculator",
  title: "Quadratic Formula Calculator",
  shortTitle: "Quadratic Formula",
  description: "Solve quadratic equations and find roots, discriminant, and vertex",
  category: "math",
  icon: "📐",
  keywords: ["quadratic", "formula", "roots", "discriminant", "algebra", "equation"],
  popular: true,
  faqs: [
    {
      question: "What is the quadratic formula?",
      answer: "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a. It solves any equation in the form ax² + bx + c = 0."
    },
    {
      question: "What does the discriminant tell us?",
      answer: "The discriminant (b² - 4ac) determines if roots are real or complex. If positive: two real roots. If zero: one repeated root. If negative: two complex roots."
    },
    {
      question: "What is the vertex?",
      answer: "The vertex is the turning point of the parabola at x = -b/2a, y = c - b²/4a. It{'\''}s the minimum or maximum point depending on whether a is positive or negative."
    },
    {
      question: "When does a quadratic have no real solutions?",
      answer: "When the discriminant is negative (b² - 4ac {'<'} 0), the equation has no real solutions, only complex roots."
    },
    {
      question: "How do parabolas relate to quadratic equations?",
      answer: "A quadratic equation y = ax² + bx + c represents a parabola. The roots are where the parabola crosses the x-axis."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/RatioCalculator")),
  slug: "ratio-calculator",
  title: "Ratio Calculator",
  shortTitle: "Ratio",
  description: "Simplify ratios, solve proportions using cross multiplication, and find GCD",
  category: "math",
  icon: "⚖️",
  keywords: ["ratio", "proportion", "GCD", "simplify", "cross multiplication", "equivalent ratio"],
  popular: false,
  faqs: [
    {
      question: "What is a ratio?",
      answer: "A ratio compares two quantities. A:B means A divided by B. For example, 3:5 means 3 parts to 5 parts."
    },
    {
      question: "How do I simplify a ratio?",
      answer: "Divide both parts by their greatest common divisor (GCD). For example, 12:8 divided by GCD(12,8)=4 gives 3:2."
    },
    {
      question: "What is a proportion?",
      answer: "A proportion is an equation of two ratios: A:B = C:D. It says that one ratio equals another. Cross multiply to solve: A×D = B×C."
    },
    {
      question: "What is cross multiplication?",
      answer: "For proportion A:B = C:D, multiply across: A×D = B×C. This creates an equation you can solve for an unknown value."
    },
    {
      question: "How are ratios used in real life?",
      answer: "Ratios are used in cooking (ingredient ratios), maps (scale ratios), finance (debt-to-income), and engineering (gear ratios). Understanding ratios helps scale recipes, read maps, and compare quantities fairly."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/RoundingCalculator")),
  slug: "rounding-calculator",
  title: "Rounding Calculator",
  shortTitle: "Rounding",
  description:
    "Round numbers with various methods including ceiling, floor, and banker's rounding",
  category: "math",
  icon: "🎯",
  keywords: [
    "rounding",
    "round up",
    "round down",
    "ceiling",
    "floor",
    "precision",
  ],
  faqs: ROUNDING_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/SampleSizeCalculator")),
  slug: "sample-size-calculator",
  title: "Sample Size Calculator",
  shortTitle: "Sample Size",
  description: "Calculate required sample size for research studies and surveys",
  category: "math",
  icon: "📊",
  keywords: ["sample size", "statistics", "survey", "confidence level", "margin of error", "research"],
  popular: true,
  faqs: [
    {
      question: "What is the relationship between confidence level and sample size?",
      answer: "Higher confidence levels require larger sample sizes. To be 99% confident instead of 95%, you need a larger sample. This is because you{'\''}re asking to be more certain about your results."
    },
    {
      question: "Should I use 0.5 as the population proportion?",
      answer: "Yes, use 0.5 when you don{'\''}t know the expected proportion. This gives the most conservative (largest) sample size. If you have prior information that the proportion is around 30%, using 0.3 will require a smaller sample."
    },
    {
      question: "What if I can{'\''}t reach the recommended sample size?",
      answer: "If budget or time constraints prevent reaching the calculated sample size, your results will have wider confidence intervals and lower precision. Be transparent about this limitation and interpret results cautiously. Consider if a smaller margin of error or lower confidence level is acceptable."
    },
    {
      question: "When do I include population size?",
      answer: "Include population size only when it{'\''}s small relative to your sample size (usually under 10,000). For large populations (over 100,000), the correction has minimal effect. This correction accounts for sampling without replacement."
    },
    {
      question: "Why does 5% margin of error need more samples than 10%?",
      answer: "A smaller margin of error means you want greater precision. To be more precise, you need more data points. The relationship is inverse and non-linear: cutting margin of error in half requires 4 times as many samples."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/ScientificCalculator")),
  slug: "scientific-calculator",
  title: "Scientific Calculator",
  shortTitle: "Scientific",
  description: "Calculate roots, powers, logarithms, trigonometric functions, and more",
  category: "math",
  icon: "🔬",
  keywords: ["scientific calculator", "square root", "exponent", "logarithm", "sine", "cosine"],
  popular: true,
  faqs: SCIENTIFIC_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/ScientificNotationCalculator")),
  slug: "scientific-notation-calculator",
  title: "Scientific Notation Calculator",
  shortTitle: "Scientific Notation",
  description: "Convert numbers to scientific, standard, and engineering notation",
  category: "math",
  icon: "🔬",
  keywords: ["scientific notation", "engineering notation", "exponent", "mantissa", "significant figures"],
  popular: false,
  faqs: [
    {
      question: "Why use scientific notation?",
      answer: "Scientific notation handles very large numbers (like the distance to stars: 9.46 × 10^15 meters) and very small numbers (like atomic size: 1 × 10^-10 meters) compactly. It{'\''}s easier to read, compare magnitudes, and use in calculations. It also clarifies significant figures."
    },
    {
      question: "What does the exponent tell you?",
      answer: "The exponent is the power of 10. Positive exponents mean the number is large (move decimal right). Negative exponents mean the number is small (move decimal left). For example, 10^6 = 1,000,000 (six zeros), and 10^-6 = 0.000001 (five zeros after decimal before the digit)."
    },
    {
      question: "What is the mantissa and why is it important?",
      answer: "The mantissa is the decimal number multiplied by the power of 10. In standard scientific notation, 1 ≤ mantissa {'<'} 10. The mantissa contains all significant figures, so it's important for precision and accuracy. For 3.5 × 10^5, the mantissa is 3.5."
    },
    {
      question: "How is engineering notation different?",
      answer: "Engineering notation restricts exponents to multiples of 3 (±3, ±6, ±9, ±12...) to align with metric prefixes. This makes it practical for engineers: 1 × 10^6 (mega), 1 × 10^3 (kilo), 1 × 10^-3 (milli), etc. Scientific notation doesn{'\''}t have this restriction."
    },
    {
      question: "What are significant figures?",
      answer: "Significant figures are digits that carry meaning about precision. In 2.50 × 10^3, all three digits (2, 5, 0) are significant. In 2500, it's ambiguous—could be 2, 3, or 4 significant figures. Scientific notation removes ambiguity. This matters in science: a measurement of 25 ± 5 is very different from 25 ± 0.1."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/SimplifyFractionsCalculator")),
  slug: "simplify-fractions-calculator",
  title: "Simplify Fractions Calculator",
  shortTitle: "Simplify Fractions",
  description:
    "Reduce fractions to simplest form with GCD and mixed number conversion",
  category: "math",
  icon: "⅓",
  keywords: [
    "simplify fractions",
    "GCD",
    "reduce fractions",
    "mixed numbers",
    "improper fractions",
  ],
  faqs: SIMPLIFY_FRACTIONS_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/SlopeCalculator")),
  slug: "slope-calculator",
  title: "Slope Calculator",
  shortTitle: "Slope",
  description: "Calculate slope, line equation, and distance from two points",
  category: "math",
  icon: "📈",
  keywords: ["slope", "line", "coordinate geometry", "rise over run", "linear equation"],
  popular: true,
  faqs: [
    {
      question: "What is slope?",
      answer: "Slope measures the steepness of a line. It{'\''}s calculated as rise over run: slope = (y2 - y1) / (x2 - x1)."
    },
    {
      question: "What does a positive or negative slope mean?",
      answer: "A positive slope means the line goes upward from left to right. A negative slope means the line goes downward from left to right."
    },
    {
      question: "What is the y-intercept?",
      answer: "The y-intercept (b) is the point where a line crosses the y-axis. In the equation y = mx + b, it{'\''}s the value of y when x = 0."
    },
    {
      question: "How do I find the line equation from two points?",
      answer: "Calculate the slope m = (y2 - y1) / (x2 - x1), then find b using b = y - mx. The equation is y = mx + b."
    },
    {
      question: "What is undefined slope?",
      answer: "Undefined slope occurs with a vertical line, where x1 = x2. You cannot divide by zero, so the slope is undefined."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/SquareRootCalculator")),
  slug: "square-root-calculator",
  title: "Square Root Calculator",
  shortTitle: "Square Root",
  description: "Calculate square roots, cube roots, and simplify radicals",
  category: "math",
  icon: "√",
  keywords: ["square root", "cube root", "radical", "nth root", "simplify radical"],
  popular: false,
  faqs: SQUARE_ROOT_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/StandardDeviationCalculator")),
  slug: "standard-deviation-calculator",
  title: "Standard Deviation Calculator",
  shortTitle: "Std Deviation",
  description: "Calculate standard deviation, variance, mean, median, and mode for any dataset",
  category: "math",
  icon: "📈",
  keywords: ["standard deviation", "statistics", "variance", "mean", "median", "mode", "data analysis"],
  popular: false,
  faqs: STANDARD_DEVIATION_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/SurfaceAreaCalculator")),
  slug: "surface-area-calculator",
  title: "Surface Area Calculator",
  shortTitle: "Surface Area",
  description: "Calculate surface area and volume of spheres, cubes, cylinders, cones, and rectangular prisms",
  category: "math",
  icon: "📦",
  keywords: ["surface area", "volume", "3D", "sphere", "cube", "cylinder", "cone", "geometry"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between surface area and volume?",
      answer: "Surface area is the total area of all outer surfaces (measured in square units). Volume is the space enclosed inside (measured in cubic units)."
    },
    {
      question: "What is surface area used for?",
      answer: "Surface area tells you how much material is needed to cover or paint an object. For example, wallpaper needed or paint required."
    },
    {
      question: "What is volume used for?",
      answer: "Volume tells you how much space is inside. For example, how much water a tank holds, or how much concrete is needed to fill a mold."
    },
    {
      question: "Why is a sphere special?",
      answer: "A sphere encloses the maximum volume for a given surface area. This is why bubbles, planets, and cells tend to be spherical—it{'\''}s the most efficient shape."
    },
    {
      question: "How do I calculate surface area of a rectangular prism?",
      answer: "For a box with length l, width w, and height h: Surface Area = 2(lw + lh + wh). This covers all six faces."
    }
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/TriangleCalculator")),
  slug: "triangle-calculator",
  title: "Triangle Calculator",
  shortTitle: "Triangle",
  description:
    "Calculate area, perimeter, angles, and classify triangles by type",
  category: "math",
  icon: "📐",
  keywords: [
    "triangle",
    "geometry",
    "area",
    "perimeter",
    "angles",
    "Heron's formula",
  ],
  faqs: TRIANGLE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/VolumeCalculator")),
  slug: "volume-calculator",
  title: "Volume Calculator",
  shortTitle: "Volume",
  description: "Calculate volume and surface area of 3D shapes",
  category: "math",
  icon: "📦",
  keywords: ["volume", "surface area", "sphere", "cylinder", "cone", "cube"],
  popular: false,
  faqs: VOLUME_FAQS,
  dateModified: "2026-04-09"
});

registerCalculator({
  component: lazy(() => import("@/calculators/math/ZScoreCalculator")),
  slug: "z-score-calculator",
  title: "Z-Score Calculator",
  shortTitle: "Z-Score",
  description: "Calculate Z-scores, percentiles, and probabilities in a normal distribution",
  category: "math",
  icon: "📊",
  keywords: ["z-score", "standard score", "normal distribution", "percentile", "statistics", "standardization"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: Z_SCORE_FAQS,
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/AcresToHectaresCalculator")),
  slug: "acres-to-hectares",
  title: "Acres to Hectares Calculator",
  shortTitle: "Acres to ha",
  description: "Convert acres to hectares for farmland and land transactions",
  category: "other",
  icon: "🏞️",
  keywords: ["acres to hectares", "land conversion", "farm size", "real estate", "agriculture"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from acres to hectares?",
      answer: "One acre equals 0.404686 hectares. For practical purposes, multiply acres by 0.405 or round to 0.4. A quick approximation: divide acres by 2.5 to estimate hectares. Example: 10 acres ÷ 2.5 = 4 hectares (actual is 4.047). These approximations are useful for farmland and real estate conversions without a calculator.",
    },
    {
      question: "How many hectares in a typical farm?",
      answer: "A small family farm might be 40-50 acres (16-20 hectares). A medium farm is 100-200 acres (40-81 hectares). A large commercial farm is 500+ acres (200+ hectares). In Europe, a 10-hectare (25-acre) farm is considered small but viable. The definition varies by country and what's grown. US farms average around 400 acres (162 hectares), though this varies significantly by region and crop type.",
    },
    {
      question: "Why do different countries use different land measurements?",
      answer: "The acre comes from British imperial tradition and is used in English-speaking countries. The hectare is part of the metric system and adopted globally. Historically, the acre was defined as the area of land a team of oxen could plow in one day. The hectare (100 meters × 100 meters) fits neatly into the metric system. Most countries switched to hectares when adopting the metric system; the US and UK retained acres. For international farming and land trading, understanding both is essential.",
    },
    {
      question: "How can I estimate acres to hectares quickly?",
      answer: "The simplest approximation: multiply acres by 0.4 or divide by 2.5. Example: 100 acres ÷ 2.5 = 40 hectares (actual is 40.47). Another method: remember that 1 hectare ≈ 2.5 acres, so 10 acres ≈ 4 hectares, 50 acres ≈ 20 hectares. With practice, you'll develop intuition for common farm and property sizes. For precise calculations, use 0.404686.",
    },
    {
      question: "What is the reverse conversion from hectares to acres?",
      answer: "One hectare equals 2.47105 acres. Multiply hectares by 2.47 to get acres, or for approximation, multiply by 2.5. Example: 20 hectares × 2.47 = 49.4 acres. This reverse conversion helps when reading international agricultural data or comparing land prices across countries. A 100-hectare estate (247 acres) is substantial in most places.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/AgeCalculator")),
  slug: "age-calculator",
  title: "Age Calculator",
  shortTitle: "Age",
  description: "Calculate your exact age in years, months, and days with zodiac sign",
  category: "other",
  icon: "🎂",
  keywords: ["age calculator", "how old am I", "calculate age", "zodiac sign"],
  popular: true,
  faqs: AGE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/BandwidthCalculator")),
  slug: "bandwidth-calculator",
  title: "Bandwidth Calculator",
  shortTitle: "Bandwidth",
  description: "Calculate download time and data transfer rates based on bandwidth",
  category: "other",
  icon: "📡",
  keywords: ["bandwidth calculator", "download time", "upload speed", "internet speed"],
  popular: false,
  faqs: [
    {
      question: "Why is my download speed slower than my ISP's advertised bandwidth?",
      answer:
        "Advertised speeds are theoretical maximums under ideal conditions. Real factors reduce actual speed: network congestion (peak hours have slower speeds), Wi-Fi signal strength and distance from router (wireless is slower than wired), protocol overhead (about 5-10% of bandwidth goes to network management), server limitations (some servers don't deliver at full speed), and hardware limits (older routers/NICs cap speeds). A 100 Mbps plan rarely delivers exactly 100 Mbps. Test with Speedtest.net to see your actual speed. If consistently 50% slower, contact your ISP—it may indicate a problem worth investigating.",
    },
    {
      question: "What's the difference between Mbps and MBps, and why does it matter?",
      answer:
        "Mbps = megabits per second (bandwidth, used by ISPs), MBps = megabytes per second (file transfer speed). 1 byte = 8 bits, so 100 Mbps = 12.5 MBps. This distinction matters because ISPs advertise Mbps while operating systems show file transfer in MBps. A 100 Mbps connection downloads at 12.5 MBps, not 100 MBps. This is partly why ISP speeds seem disappointing—users expect 100 MB/s transfers from 100 Mbps connections. Always remember: bandwidth in bits/second, file sizes in bytes. Divide Mbps by 8 to get MBps.",
    },
    {
      question: "How much bandwidth do I need for common activities?",
      answer:
        "Browsing and email: 1-5 Mbps. Video calls (Zoom): 2.5-4 Mbps. Streaming HD video: 5-10 Mbps. Streaming 4K video: 15-25 Mbps. Online gaming: 1-5 Mbps (latency matters more). Downloading large files: depends on file size and desired time. Family of 4 with mixed activities: 25-100 Mbps recommended. Multiple 4K streams simultaneously: 50+ Mbps. Work-from-home with video: 10-25 Mbps. Most homes benefit from 50-100 Mbps plans. Gigabit fiber (1000 Mbps) is overkill for residential users unless you run a business or stream professionally.",
    },
    {
      question: "What does a data cap mean for my bandwidth and usage?",
      answer:
        "A data cap limits total monthly data transfer (e.g., 250 GB/month). Some ISPs throttle speeds after reaching the cap; others charge overage fees. Data caps don't limit instantaneous bandwidth (speed) but total cumulative usage. A 250 GB cap with 100 Mbps bandwidth means you could theoretically use the cap in about 2.4 days of continuous use at max speed. In practice, monthly usage includes streaming, browsing, updates, and backups. Streaming 4K video uses 15-20 GB per day of heavy use. Large file transfers (system updates, game installs) consume significant data. If on a capped plan, monitor usage with router or ISP tools to avoid overage fees.",
    },
    {
      question: "How can I improve my actual download speeds?",
      answer:
        "Use a wired Ethernet connection instead of Wi-Fi for maximum speed. Position your router centrally and elevate it (not on the floor). Reduce Wi-Fi interference by changing channels in router settings. Restart your router regularly to clear memory. Close bandwidth-heavy applications while downloading (streaming, video calls). Avoid peak usage times (evenings, weekends) when congestion is high. Update your router firmware and check if your hardware is outdated. Contact your ISP to verify you're getting advertised speeds—if not, report the issue. Upgrade your plan if consistently slow. Switch ISPs if better options are available in your area. For business, consider dedicated lines or bonded connections for guaranteed bandwidth.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/CelsiusToFahrenheitCalculator")),
  slug: "celsius-to-fahrenheit",
  title: "Celsius to Fahrenheit Calculator",
  shortTitle: "°C to °F",
  description: "Convert temperature from Celsius to Fahrenheit instantly",
  category: "other",
  icon: "🌡️",
  keywords: ["celsius to fahrenheit", "temperature conversion", "c to f", "weather", "international"],
  popular: true,
  faqs: [
    {
      question: "What is the formula to convert Celsius to Fahrenheit?",
      answer: "The formula is: °F = (°C × 9/5) + 32. Multiply the Celsius temperature by 9/5 (or 1.8), then add 32. Example: 22°C becomes (22 × 9/5) + 32 = 39.6 + 32 = 71.6°F. This conversion accounts for both the different zero points and the different scale intervals between the two systems.",
    },
    {
      question: "Which countries use Celsius versus Fahrenheit?",
      answer: "Celsius is used almost worldwide, including all of Europe, Asia, Africa, South America, and Oceania. Only a handful of countries use Fahrenheit primarily: the United States, Bahamas, Belize, Cayman Islands, Palau, and some US territories. A few countries like Canada use Celsius officially but have older populations familiar with Fahrenheit. For international communication, always clarify which scale you're using, or convert to Celsius as the global standard.",
    },
    {
      question: "How do I convert weather temperatures quickly?",
      answer: "For rough mental estimates: multiply Celsius by 2 and add 30 (works reasonably well for 0-30°C). Example: 20°C becomes 20×2 + 30 = 70°F. For more accuracy, use 1.8 instead of 2. Memorize key temperatures: 0°C = 32°F, 10°C = 50°F, 20°C = 68°F, 30°C = 86°F. With practice, you'll develop intuition for common temperatures without calculating. Weather apps with automatic conversion are also helpful.",
    },
    {
      question: "What is comfortable room temperature in both scales?",
      answer: "Most people find 20-22°C (68-72°F) comfortable for indoor spaces. Sleeping is best at slightly cooler temperatures: 15-19°C (59-66°F). Office workers often prefer 21-23°C (70-73°F). These ranges vary by personal preference, clothing, and activity level. HVAC systems worldwide use similar comfort targets but display them in local scales. During summer, comfortable outdoor temperatures are 25-28°C (77-82°F). In winter, 18-21°C (64-70°F) is typical for heated spaces.",
    },
    {
      question: "How do I calculate Celsius from Fahrenheit in my head?",
      answer: "For quick mental math: subtract 32 from the Fahrenheit value, then multiply by 5/9 (or divide by 1.8). Example: 70°F becomes (70 - 32) / 1.8 = 38 / 1.8 ≈ 21°C. A simpler approximation: subtract 30 from Fahrenheit and divide by 2. Example: 70°F becomes (70 - 30) / 2 = 20°C. This approximation is quick but less precise. Memorizing common temperatures (32, 50, 68, 86, 100°F) takes the guesswork out.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/CmToInchesCalculator")),
  slug: "cm-to-inches",
  title: "Centimeters to Inches Converter",
  shortTitle: "CM to Inches",
  description: "Convert centimeters to inches with formula and reference table",
  category: "other",
  icon: "📏",
  keywords: ["cm to inches", "centimeters to inches", "metric to imperial", "convert centimeters"],
  popular: false,
  faqs: [
    {
      question: "How many inches are in a centimeter?",
      answer:
        "One centimeter equals 0.3937 inches (approximately). This derives from the exact conversion that 1 inch = 2.54 centimeters, so 1 cm = 1 ÷ 2.54 = 0.3937 inches. For practical purposes, you can round to 0.39 inches per centimeter. For example, 10 centimeters = 3.937 inches, and 100 centimeters (1 meter) = 39.37 inches. The more precise you need to be, the more decimal places you should use, especially in engineering or scientific applications.",
    },
    {
      question: "What's a quick way to estimate centimeters to inches?",
      answer:
        "A simple rule of thumb is to divide by 2.5 (close to 2.54) for a rough estimate. For example, 50 cm ÷ 2.5 = 20 inches (actual is 19.69). Another approach: remember that 1 cm ≈ 0.4 inches, so 10 cm ≈ 4 inches, and 100 cm ≈ 40 inches. These approximations work well for casual measurements but aren't precise enough for manufacturing or medical purposes. For accuracy, always use the exact 2.54 conversion factor or this calculator.",
    },
    {
      question: "How do I convert centimeters to feet and inches?",
      answer:
        "First, convert centimeters to total inches by dividing by 2.54. Then divide by 12 to get feet, with the remainder as inches. Example: 180 cm ÷ 2.54 = 70.87 inches. Then 70.87 ÷ 12 = 5 feet with 10.87 inches remaining. So 180 cm = 5 feet 10.87 inches. Alternatively, some converters display the result directly in feet and inches format. For height comparisons, this format is more intuitive than total inches.",
    },
    {
      question: "Why is the conversion factor 2.54 and not a rounder number?",
      answer:
        "The conversion factor 2.54 was established by international agreement in 1959, based on the relationship between imperial and metric systems. The imperial system predates the metric system and wasn't designed to convert neatly. The 2.54 factor is the official, exact definition — 1 inch = 2.54 centimeters precisely. This makes all conversions reproducible and standardized globally. While it's not a round number, it's internationally recognized and legally binding for commerce, science, and engineering.",
    },
    {
      question: "What's the difference between centimeters and millimeters?",
      answer:
        "Centimeters and millimeters are both metric units. 1 centimeter = 10 millimeters. The prefix 'centi-' means 1/100 of a meter, while 'milli-' means 1/1000 of a meter. Millimeters are used for precise measurements like thickness, bullet caliber, or small objects. Centimeters are used for larger measurements like height, width, or length in everyday contexts. When converting to inches, use centimeters (divide by 2.54). If you have millimeters, first convert to centimeters (divide by 10), then to inches.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/ConcreteCalculator")),
  slug: "concrete-calculator",
  title: "Concrete Calculator",
  shortTitle: "Concrete",
  description: "Calculate concrete volume and bags needed for projects",
  category: "other",
  icon: "🏗️",
  keywords: ["concrete calculator", "cubic yards", "concrete bags", "concrete volume"],
  popular: false,
  faqs: CONCRETE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/CupsToMlCalculator")),
  slug: "cups-to-ml",
  title: "Cups to Milliliters Calculator",
  shortTitle: "Cups to ml",
  description: "Convert cups to milliliters for recipes and cooking",
  category: "other",
  icon: "🥤",
  keywords: ["cups to milliliters", "cooking conversion", "recipe measurement", "ml converter"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from cups to milliliters?",
      answer: "One US cup equals 236.588 milliliters. For practical cooking, 240 ml is often used as a convenient approximation. The difference between 236.6 ml and 240 ml is about 1.4%, which is negligible for most recipes. In baking, where precision matters, use 236.6 ml for accuracy. Note that a metric cup used in some countries equals 250 ml, which is slightly larger, creating a small difference when following international recipes.",
    },
    {
      question: "How much is 1/4 cup in milliliters?",
      answer: "One quarter cup (1/4 cup) equals approximately 59 milliliters. This is a commonly used measurement in recipes, especially for butter, shredded cheese, nuts, or small amounts of spices. A quarter cup dry measuring cup filled level will hold roughly 59 ml. Some recipes list it as 60 ml for simplicity. Quarter cup measurements are useful for controlling portion sizes of rich or flavorful ingredients without using the full cup quantity.",
    },
    {
      question: "What is 1/2 cup in milliliters?",
      answer: "One half cup (1/2 cup) equals approximately 118 milliliters, often rounded to 120 ml for practical purposes. Half cup is one of the most common recipe measurements, used for milk, oil, flour, sugar, and other ingredients. A half cup liquid measuring cup or a heaping half cup of dry ingredients will hold roughly this volume. This is a standard portion that appears frequently in American recipes.",
    },
    {
      question: "Are US cups different from metric cups?",
      answer: "Yes, they differ slightly. The US cup (236.6 ml) is smaller than the metric cup (250 ml), a difference of about 5.7%. When following recipes from different countries, verify which cup size is assumed. US cookbooks use US cups; metric recipes and international cookbooks use either metric cups (250 ml) or milliliters directly. Bakers who use cups from one system with recipes designed for another will get slightly different results. Modern recipe books often include both cup and metric measurements to avoid confusion.",
    },
    {
      question: "Why are milliliters better for precise recipes?",
      answer: "Milliliters measure volume directly and consistently. Cups depend on how tightly you pack ingredients: flour can vary by 20-30% in weight when using cups due to packing differences. Milliliters provide a stable volume measure, though for dry ingredients, weight (grams) is even better. Professional bakers weigh ingredients in grams rather than measuring by volume. Liquids work well in milliliters since their density doesn't change with packing. For casual cooking, cups work fine; for baking or precision work, use ml or grams.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/DateCalculator")),
  slug: "date-calculator",
  title: "Date Calculator",
  shortTitle: "Date",
  description: "Calculate days between dates, weeks, months, and business days",
  category: "other",
  icon: "📅",
  keywords: ["date calculator", "days between dates", "date difference", "business days"],
  popular: false,
  faqs: DATE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/DayCounterCalculator")),
  slug: "day-counter-calculator",
  title: "Day Counter Calculator",
  shortTitle: "Day Counter",
  description: "Count days, business days, and weeks between dates",
  category: "other",
  icon: "📅",
  keywords: ["day counter", "days between dates", "business days", "date calculator"],
  popular: true,
  faqs: [
    {
      question: "How are business days calculated differently from calendar days?",
      answer:
        "Business days count only weekdays (Monday through Friday), excluding weekends (Saturday and Sunday). Calendar days count every day including weekends. For a date range spanning one weekend, there are 7 calendar days but only 5 business days. In a month with 30 calendar days (4 full weeks + 2 days), there are typically 22 business days (20 from full weeks + 2 from remaining weekdays). Delivery estimates, project timelines, and payroll often use business days. When a website says 'ships in 3 business days,' it means 3 weekdays, potentially 5 or more calendar days if weekends are included.",
    },
    {
      question: "Why do some dates have different day names if I count the same number of days?",
      answer:
        "The day of the week depends on which day you start from. Two 7-day spans starting on different days of the week will end on different days. For example, 7 days from Monday ends on Sunday, while 7 days from Wednesday ends on Tuesday. This is why understanding the starting day matters for scheduling. If you need to ship a package on Tuesday and it takes 5 business days, it will arrive on Tuesday of the following week (skipping one weekend). This calculator shows the starting and ending day of the week to help visualize where your dates fall in the weekly cycle.",
    },
    {
      question: "How do leap years affect day calculations?",
      answer:
        "Leap years occur every 4 years (with exceptions for century years) and add an extra day in February (February 29th instead of 28th). This makes leap years 366 days instead of 365. When calculating a span that includes February during a leap year, the total is one day higher than in non-leap years. For example, January 1 to March 1 is 59 days in non-leap years but 60 days in leap years (leap day is February 29). This calculator accounts for leap years automatically, ensuring accurate counts across multi-year date ranges.",
    },
    {
      question: "What is the difference between age in years, months, and days?",
      answer:
        "Age broken down by years, months, and days provides a more precise measurement than just rounding to the nearest year. Someone born January 1, 2000, on April 10, 2026, is 26 years old if rounding, but exactly 26 years, 3 months, and 10 days old. This precision matters for legal documents (some age requirements are exact), medical applications, and formal records. For simple conversation, saying someone is 26 years old is sufficient. For legal or medical contexts, the full breakdown ensures accuracy. This calculator provides both the total days and the years/months/days breakdown for flexibility.",
    },
    {
      question: "Can this calculator handle dates far in the past or future?",
      answer:
        "This calculator uses standard date format (YYYY-MM-DD) and the Gregorian calendar system. Most modern systems support dates from January 1, 1900, to December 31, 2100, though some support wider ranges. For historical dates before the Gregorian calendar adoption (before October 15, 1582, in most countries), the calculation may not be historically accurate as different calendar systems were in use. For far-future dates (beyond 2100), the calculations work mathematically but may not reflect potential calendar reforms. For routine business use (past 50 years to future 50 years), this calculator is reliably accurate.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/DewPointCalculator")),
  slug: "dew-point-calculator",
  title: "Dew Point Calculator",
  shortTitle: "Dew Point",
  description: "Calculate dew point from temperature and relative humidity",
  category: "other",
  icon: "💧",
  keywords: ["dew point", "relative humidity", "temperature", "condensation", "weather", "comfort"],
  popular: false,
  faqs: [
    {
      question: "What is dew point and why should I care?",
      answer: "Dew point is the temperature at which air becomes saturated and water condenses into liquid droplets. It tells you when moisture will condense. If air temperature drops to the dew point, you get fog, dew on grass, or condensation on windows. Dew point is more reliable than relative humidity for predicting condensation because it's an absolute measurement. A dew point of 50°F means condensation occurs when temperature reaches 50°F, regardless of the current temperature. Understanding dew point helps forecast frost, prevent equipment damage from moisture, and choose appropriate clothing.",
    },
    {
      question: "How is dew point different from relative humidity?",
      answer: "Relative humidity (RH) is the percentage of moisture in air compared to its maximum capacity at the current temperature. RH changes as temperature changes. Dew point is the specific temperature at which air becomes saturated. Example: 70°F with 50% RH has a dew point of about 50°F. If cooled to 50°F, RH becomes 100%. If cooled to 40°F, condensation occurs. Dew point doesn't change unless moisture is added or removed. Same dew point at different temperatures means different RH values. Meteorologists prefer dew point for forecasting because it's more stable and absolute.",
    },
    {
      question: "How do I calculate dew point?",
      answer: "The Magnus formula approximates dew point: Td = 243.04 × [ln(RH/100) + (17.625×T)/(243.04+T)] / [17.625 - ln(RH/100) - (17.625×T)/(243.04+T)], where T is temperature in Celsius and RH is relative humidity. More complex formulas (Magnus, Bolton, Magnus-Tetens) give slightly different results but are close for most practical purposes. Dew point calculators use these formulas to convert temperature and RH to dew point in seconds. For rough estimates without a calculator, dew point is typically 5-10°F below the current temperature at 50% RH, and closer to temperature at higher humidity levels.",
    },
    {
      question: "What dew point values indicate comfortable conditions?",
      answer: "Below 40°F dew point: Very dry; can cause dry skin and static electricity. 40-50°F: Dry but comfortable for most people. 50-60°F: Comfortable for the majority. 60-70°F: Humid but tolerable. 70-80°F: Uncomfortably humid; feels sticky and oppressive. Above 80°F: Very uncomfortable and potentially dangerous (especially if temperature is also high). Most people prefer indoor dew points in the 35-55°F range, corresponding to 30-50% RH at typical indoor temperatures. Different activities, ages, and personal preferences affect the ideal range.",
    },
    {
      question: "When will frost form?",
      answer: "Frost forms when the dew point is below freezing (32°F or 0°C) and the air temperature drops to or below the dew point. Example: if dew point is 25°F and overnight temperature drops to 25°F, frost will form. Meteorologists forecast frost by comparing the dew point to the expected overnight low temperature. Clear nights with low dew points are most likely to produce frost because clouds don't trap heat. Growing season frost damages crops; gardeners monitor dew point and overnight forecasts to know when to cover sensitive plants or use frost protection measures.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/DiceRollerCalculator")),
  slug: "dice-roller-calculator",
  title: "Dice Roller Calculator",
  shortTitle: "Dice Roller",
  description: "Roll virtual dice and see probability distribution",
  category: "other",
  icon: "🎲",
  keywords: ["dice roller", "dice probability", "d20 roller", "random dice"],
  popular: true,
  faqs: [
    {
      question: "What is the probability of rolling a specific number on a die?",
      answer:
        "On a fair six-sided die, each number (1-6) has a 1/6 probability, or about 16.67%. On a twenty-sided die (d20), each outcome has a 1/20 probability (5%). Probability is calculated as (favorable outcomes) / (total possible outcomes). For a single die, there's only one way to roll a 3, so probability is 1/6. With two dice, rolling a sum of 7 has six favorable outcomes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 total, giving 6/36 = 1/6 probability.",
    },
    {
      question: "What is the expected value (average) of dice rolls?",
      answer:
        "The expected value is the average outcome over many rolls. For a six-sided die: (1+2+3+4+5+6)/6 = 3.5. For a twenty-sided die: (1+2+...+20)/20 = 10.5. The formula is: sum of all values / number of sides. For multiple dice, add the expected values. Two d6 have an expected value of 3.5 + 3.5 = 7. This is why 7 is the most common sum with two dice. Understanding expected values helps in games to assess long-term outcomes and fair wagers.",
    },
    {
      question: "Why do some games use different types of dice?",
      answer:
        "Different dice provide different probability curves and ranges. A d4 (4-sided) ranges 1-4, a d6 (6-sided) ranges 1-6, and a d20 ranges 1-20. d20 is popular in RPGs because rolling high is exciting and the odds feel uncertain. d6 is standard for board games and craps due to familiarity. Multi-dice rolls (like 2d6) create bell-curve distributions where middle values are more likely. Designers choose dice based on desired game balance—more sides increase variance and excitement, fewer sides make outcomes more predictable.",
    },
    {
      question: "How do I know if a physical die is fair?",
      answer:
        "Roll it many times (at least 100-200 rolls) and record results. A fair die shows each face appearing roughly equally (about 16.67% for d6). Compare actual percentages to expected percentages. A chi-squared test can measure bias statistically. If one face appears significantly more often (e.g., 20%+ instead of 16.67%), the die is likely biased. Weighted dice are used in cheating and are illegal in casinos. Always use casino-grade dice or proven fair dice in games where money is at stake.",
    },
    {
      question: "What is the difference between rolling with and without replacement?",
      answer:
        "Rolling without replacement means once a die shows a value, it's removed (impossible with single die rolls, but applies in drawing cards or balls from an urn). Rolling with replacement means each roll is independent with the same probability each time. Dice rolls are inherently with replacement—rolling a 6 doesn't make the next 6 less likely. This is why the gambler's fallacy is a common mistake: past rolls don't affect future rolls. Each roll of a fair die has the same 1/6 probability regardless of previous results.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/DiscountCalculator")),
  slug: "discount-calculator",
  title: "Discount Calculator",
  shortTitle: "Discount",
  description: "Calculate savings and final price with discount and tax",
  category: "other",
  icon: "🏷️",
  keywords: ["discount calculator", "sales tax", "price after discount", "calculate savings"],
  popular: true,
  faqs: DISCOUNT_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/DogAgeCalculator")),
  slug: "dog-age-calculator",
  title: "Dog Age Calculator",
  shortTitle: "Dog Age",
  description: "Calculate your dog's human equivalent age using modern science",
  category: "other",
  icon: "🐕",
  keywords: ["dog age calculator", "dog years human years", "dog age converter", "pet age"],
  popular: true,
  faqs: [
    {
      question: "Why is the 'multiply by 7' method for dog years inaccurate?",
      answer:
        "The 'seven dog years per human year' myth oversimplifies and doesn't account for rapid early growth. A one-year-old dog is not 7 years old in human terms; it's approximately 15 years old because it reaches full maturity in that first year. A two-year-old dog is about 24 human years old, not 14. After year two, the rate of aging slows. The simplified formula fails because it doesn't reflect the accelerated development in puppyhood or the varying rates based on dog size. Modern veterinary science shows the reality is much more nuanced, making size-specific calculations more accurate.",
    },
    {
      question: "How does dog size affect aging rate?",
      answer:
        "Large and giant breeds age faster than small breeds. After the first two years, small dogs age at about 4 human years per dog year, medium dogs at 5, large dogs at 6, and giant dogs at 7 per dog year. A small dog at age 10 is about 56 in human years, while a giant breed at age 10 is about 75 in human years. This difference stems from metabolic rate—larger dogs burn energy faster and have shorter lifespans. Small breeds often live 15-20 years; giant breeds typically live 7-10 years. Choosing appropriate exercise and diet based on size helps account for these different aging trajectories.",
    },
    {
      question: "At what age should I switch my dog to senior food?",
      answer:
        "Senior food is typically introduced when dogs reach 'senior' status: around age 7 for small breeds, age 6 for medium breeds, age 5-6 for large breeds, and age 5 for giant breeds. Senior foods are lower in calories and fat, with added joint support (glucosamine) and potentially adjusted protein levels. The exact age depends on individual health and breed. Some dogs age faster than others. Consult your veterinarian about transitioning to senior food, as the timing varies by dog. Early transition (if your dog is overweight) or delayed transition (for very active dogs) may be appropriate. Monitoring weight and body condition helps determine the right time for dietary changes.",
    },
    {
      question: "What are common health issues in senior dogs?",
      answer:
        "Senior dogs commonly develop arthritis (joint pain and stiffness), dental disease, cognitive decline, hearing and vision loss, and organ function decline. Cancer incidence increases with age. Weight management becomes important because overweight seniors have more joint stress. Joint supplements (glucosamine, chondroitin, omega-3s) and pain management medications help with arthritis. Cognitive dysfunction (canine dementia) causes confusion, disorientation, and behavior changes. More frequent veterinary checkups (every 6 months instead of annually) help catch health issues early. Adjusted exercise (shorter, gentler walks instead of intense activity) keeps seniors active without overexertion. Mental stimulation and comfort accommodations (orthopedic beds, ramps, easy food access) improve senior quality of life.",
    },
    {
      question: "Can mixed-breed dogs have different aging rates than purebreds?",
      answer:
        "Mixed-breed dogs often live longer and age more slowly than purebreds, a phenomenon called hybrid vigor. Genetic diversity from mixed parentage may confer health advantages. A mixed-breed dog might live 15+ years, while a purebred of similar size might live 12 years. However, this is a general trend, not a guarantee. Individual health, genetics, diet, exercise, and veterinary care significantly affect each dog's lifespan. Some purebreds are healthier and longer-lived than some mixed breeds. The formula in this calculator provides an estimate based on size, but individual dogs may age faster or slower based on health and genetics. Regular veterinary care and healthy lifestyle support longevity regardless of breed.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/ElectricityCostCalculator")),
  slug: "electricity-cost-calculator",
  title: "Electricity Cost Calculator",
  shortTitle: "Electricity Cost",
  description: "Calculate electricity costs and energy consumption for appliances",
  category: "other",
  icon: "⚡",
  keywords: ["electricity cost", "power calculator", "energy cost", "kWh calculator"],
  popular: false,
  faqs: ELECTRICITY_COST_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/FahrenheitToCelsiusCalculator")),
  slug: "fahrenheit-to-celsius",
  title: "Fahrenheit to Celsius Calculator",
  shortTitle: "°F to °C",
  description: "Convert temperature from Fahrenheit to Celsius instantly",
  category: "other",
  icon: "🌡️",
  keywords: ["fahrenheit to celsius", "temperature conversion", "f to c", "weather", "temperature"],
  popular: true,
  faqs: [
    {
      question: "What is the formula to convert Fahrenheit to Celsius?",
      answer: "The formula is: °C = (°F - 32) × 5/9. First subtract 32 from the Fahrenheit temperature, then multiply the result by 5/9 (or divide by 1.8). Example: 72°F becomes (72 - 32) × 5/9 = 40 × 5/9 = 22.2°C. This linear conversion works for any temperature value.",
    },
    {
      question: "Why are there two different temperature scales?",
      answer: "Fahrenheit was developed in 1724 and was the first widely used scale, especially in English-speaking countries. Celsius was created later in 1742 using water's freezing and boiling points (0°C and 100°C) as reference points, making it more scientific and internationally standardized. Celsius became the global standard for science, medicine, and most countries. The United States still uses Fahrenheit due to historical tradition and infrastructure built around it. Understanding both scales is necessary for international communication.",
    },
    {
      question: "What is body temperature in both scales?",
      answer: "Normal human body temperature is approximately 98.6°F or 37°C. Mild fever starts around 100.4°F (38°C). A high fever is 103°F (39.4°C) or above. These values represent typical healthy adult body temperature. Slight variations are normal; body temperature fluctuates throughout the day, with higher values in the afternoon and lower values early morning. Children may have slightly different normal ranges. Medical thermometers in the US display Fahrenheit; international thermometers display Celsius.",
    },
    {
      question: "What temperature conversions should I memorize?",
      answer: "Key temperatures to remember: 32°F = 0°C (water freezes), 68°F = 20°C (cool room), 72°F = 22.2°C (comfortable indoor), 86°F = 30°C (warm day), 98.6°F = 37°C (body temperature), 100°F = 37.8°C (very hot), 212°F = 100°C (water boils). Also remember that -40°F = -40°C, the one point where both scales equal. A rough approximation: multiply Celsius by 2 and add 30 to estimate Fahrenheit, though this has a small margin of error.",
    },
    {
      question: "Which scale is used for scientific research?",
      answer: "Celsius is universally used for scientific research and is the SI (International System of Units) standard. Scientists use Celsius for nearly all calculations and measurements. For very low temperatures near absolute zero, the Kelvin scale is used (absolute zero = 0 K = -273.15°C). Global scientific data, climate research, physics experiments, and chemistry work all use Celsius. If you're reading scientific papers or weather data from international sources, temperatures will be in Celsius.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/FeetToMetersCalculator")),
  slug: "feet-to-meters",
  title: "Feet to Meters Converter",
  shortTitle: "Feet to Meters",
  description: "Convert feet to meters with formula and reference table",
  category: "other",
  icon: "📐",
  keywords: ["feet to meters", "ft to m", "convert feet", "imperial to metric length"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from feet to meters?",
      answer:
        "The exact conversion is 1 foot = 0.3048 meters. This was established by international agreement as a precise, unchanging constant. To convert feet to meters, multiply by 0.3048. For example, 10 feet = 10 × 0.3048 = 3.048 meters. The inverse conversion is 1 meter = 3.28084 feet. This precise relationship allows exact conversions in all fields, from construction to aviation to international trade, ensuring consistency and preventing measurement errors.",
    },
    {
      question: "How do I convert feet and inches to meters?",
      answer:
        "First, convert feet and inches to total feet, then multiply by 0.3048. Example: 5 feet 10 inches = 5 + (10/12) feet = 5.833 feet. Then 5.833 × 0.3048 = 1.778 meters. Alternatively, convert feet to meters (5 × 0.3048 = 1.524 m) and inches to centimeters (10 × 2.54 = 25.4 cm = 0.254 m), then add them: 1.524 + 0.254 = 1.778 meters. The first method is simpler for calculator use.",
    },
    {
      question: "What are common feet-to-meters conversions I should know?",
      answer:
        "Useful benchmarks: 1 foot = 0.3048 m, 3 feet = 0.9144 m (1 yard), 5 feet = 1.524 m, 6 feet = 1.8288 m, 10 feet = 3.048 m. For height, 5 feet tall = 1.524 m, 6 feet tall = 1.8288 m. For building dimensions, a standard 8-foot ceiling = 2.4384 m, a 10-foot ceiling = 3.048 m. A basketball hoop at 10 feet = 3.048 m. Knowing these mental benchmarks helps with quick estimates without a calculator.",
    },
    {
      question: "Is feet-to-meters conversion used in sports?",
      answer:
        "Yes, extensively. Soccer (football) goals are 8 feet tall and 24 feet wide, or 2.44 m × 7.32 m. American football fields are 100 yards (300 feet) or 91.44 meters long. Basketball hoops are 10 feet (3.048 m) high. Tennis courts are measured in meters internationally but feet in the US. Boxing rings are typically 16-20 feet (4.9-6.1 m) per side. High jump and pole vault records are often listed in meters internationally. Athletes, coaches, and broadcasters frequently convert between systems to communicate with global audiences.",
    },
    {
      question: "How do I quickly estimate feet to meters?",
      answer:
        "A simple rule: divide by 3 to get an approximation. 12 feet ÷ 3 ≈ 4 meters (actual is 3.66 m). A more accurate mental math trick: remember that 1 foot ≈ 0.3 m, so 10 feet ≈ 3 m. For heights, 5 feet ≈ 1.5 m, 6 feet ≈ 1.8 m. These approximations work for casual estimates but aren't precise enough for construction, engineering, or scientific work. Always use 0.3048 for accuracy, or use this calculator for instant conversions.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/FuelCostCalculator")),
  slug: "fuel-cost-calculator",
  title: "Fuel Cost Calculator",
  shortTitle: "Fuel Cost",
  description: "Calculate fuel costs and MPG for road trips",
  category: "other",
  icon: "⛽",
  keywords: ["fuel cost", "gas calculator", "MPG calculator", "trip cost"],
  popular: false,
  faqs: FUEL_COST_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/GallonsToLitersCalculator")),
  slug: "gallons-to-liters",
  title: "Gallons to Liters Calculator",
  shortTitle: "Gal to L",
  description: "Convert gallons to liters instantly",
  category: "other",
  icon: "🫗",
  keywords: ["gallons to liters", "volume conversion", "gal to l", "liquid measurement"],
  popular: false,
  faqs: [
    {
      question: "What is the conversion factor from gallons to liters?",
      answer: "One US gallon equals 3.78541 liters. For quick mental math, you can use 3.8 or even round to 4 for rough estimates. The conversion factor is consistent for all gallon measurements: 5 gallons = 18.9 liters, 10 gallons = 37.9 liters. This is the US gallon; the imperial gallon used in the UK is different at 4.546 liters.",
    },
    {
      question: "What is the difference between US gallons and imperial gallons?",
      answer: "The US gallon (3.78541 liters) is smaller than the imperial gallon (4.546 liters) used in the UK and some Commonwealth countries. This difference comes from different historical standards. A US gallon is about 83% of an imperial gallon. When converting or comparing liquid measurements internationally, verify which gallon is being used. The US gallon is standard in the United States; most other English-speaking countries use imperial gallons, though they're increasingly switching to liters for commerce.",
    },
    {
      question: "How many liters are in a typical US gas tank?",
      answer: "A typical US car has a fuel tank capacity of 12-16 gallons, which equals 45-60 liters. A 15-gallon tank holds 56.8 liters. Larger SUVs and trucks may have 20-25 gallon tanks (75-95 liters). Knowing this helps estimate driving range and fuel costs when traveling internationally. When renting cars abroad, you'll see fuel consumption in liters per 100 kilometers instead of miles per gallon.",
    },
    {
      question: "Why do some countries use gallons and others use liters?",
      answer: "The US still uses gallons due to historical tradition and established infrastructure. The British imperial system (which used gallons) was the global standard before the metric system was adopted. Most countries switched to the metric system and liters in the 1970s-1980s. The US chose not to fully adopt the metric system, keeping gallons for fuel and some beverages. Today, the US is the primary hold-out for gallons, though liters are increasingly used in science, medicine, and international commerce.",
    },
    {
      question: "How can I estimate gallons to liters without a calculator?",
      answer: "The simplest approximation: multiply gallons by 4 and subtract a small amount. Example: 5 gallons ≈ 5 × 4 - 0.5 = 19.5 liters (actual is 18.9). Another method: multiply by 3.8 for better accuracy but faster than 3.78541. For quick estimates while shopping or traveling, knowing that 1 gallon ≈ 3.8 liters helps you judge product sizes. Common reference points help too: 1 gallon ≈ 3.8 L, 5 gallons ≈ 19 L, 10 gallons ≈ 38 L.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/GasMileageCalculator")),
  slug: "gas-mileage-calculator",
  title: "Gas Mileage Calculator",
  shortTitle: "Gas Mileage",
  description: "Calculate fuel economy and annual fuel costs",
  category: "other",
  icon: "⛽",
  keywords: ["MPG calculator", "fuel economy", "gas cost", "miles per gallon", "fuel efficiency"],
  popular: true,
  faqs: [
    {
      question: "How do I calculate miles per gallon (MPG)?",
      answer: "MPG equals miles driven divided by gallons used. Formula: MPG = Miles Driven / Gallons Consumed. Example: if you drive 300 miles and use 15 gallons, your MPG is 300 / 15 = 20 MPG. To track your actual fuel economy accurately, fill your tank completely, note the odometer, drive normally, then fill again and record miles driven and gallons added. Repeat this process several times to get an average. One fill-up can give skewed results due to variations in filling technique and driving conditions.",
    },
    {
      question: "What factors affect fuel economy the most?",
      answer: "Driving habits have the largest impact. Aggressive acceleration, speeding, and harsh braking reduce MPG by 10-20%. Traffic conditions matter significantly; stop-and-go city driving uses more fuel than steady highway driving. Vehicle type is also critical; SUVs and trucks consume more fuel than sedans and hybrids. Weather affects MPG (cold temperatures reduce efficiency by 10-15%). Tire pressure is important; underinflated tires by 10 PSI can reduce MPG by 3%. Load weight affects efficiency; every 100 pounds carried reduces MPG by 1-2%. Regular maintenance (clean air filters, proper spark plugs) maintains efficiency.",
    },
    {
      question: "How can I improve my vehicle's fuel economy?",
      answer: "Drive smoothly: avoid rapid acceleration, aggressive braking, and speeding. Use cruise control on highways to maintain steady speed. Keep tires properly inflated (check monthly). Perform regular maintenance (oil changes every 5,000 miles, air filter replacements). Remove excess cargo from your vehicle. Reduce idling; turn off the engine if stopped for more than 10 seconds. Plan routes efficiently to minimize distance. Combine trips into one journey. Consider vehicles with hybrid or electric options for better efficiency. These measures can improve MPG by 5-20%, saving hundreds annually.",
    },
    {
      question: "What's the difference between city and highway MPG?",
      answer: "Highway MPG is typically 20-30% higher than city MPG because highway driving is more steady and efficient. City driving involves frequent stops, starts, and low speeds, all of which consume more fuel. Example: a vehicle might get 22 city MPG and 30 highway MPG. The EPA publishes both numbers for all vehicles. Your actual MPG depends on how much city vs. highway driving you do. To calculate blended average: (city MPG × city miles + highway MPG × highway miles) / total miles. If you drive mostly city, your average will be closer to city MPG.",
    },
    {
      question: "How much money can I save by improving MPG?",
      answer: "Savings depend on annual miles driven and gas prices. Formula: Annual Savings = (Annual Miles / Current MPG - Annual Miles / New MPG) × Gas Price. Example: 12,000 miles/year, current 20 MPG, improve to 25 MPG, gas $3.50/gal = (600 - 480) × $3.50 = $420/year. Small improvements (5 MPG) save $200-300 yearly. Larger improvements (10 MPG) save $400-800 yearly. Over a vehicle's 10-year lifespan, modest MPG improvements save thousands. This doesn't include environmental benefits: better MPG means less CO2 emissions and reduced environmental impact.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/GolfHandicapCalculator")),
  slug: "golf-handicap-calculator",
  title: "Golf Handicap Calculator",
  shortTitle: "Golf Handicap",
  description: "Calculate your golf handicap index and course handicap",
  category: "other",
  icon: "⛳",
  keywords: ["golf handicap", "handicap index", "course handicap", "golf scoring"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between handicap index and course handicap?",
      answer:
        "Handicap index is a standardized number that represents your potential ability across all courses. Course handicap is your handicap adjusted for the specific difficulty of a particular course. The same player has one handicap index but different course handicaps at different courses. For example, a golfer with a 10.0 handicap index might have a course handicap of 11 at an easy course (slope 113) and 12 at a harder course (slope 125). Your course handicap determines how many strokes you get to subtract from your score in competition.",
    },
    {
      question: "How many scores do I need to establish a handicap?",
      answer:
        "The USGA allows handicap calculations with as few as 5 scores, though more scores provide a more accurate picture. Most golfers submit their best 8 scores from their last 20 rounds. New golfers often submit 5-10 scores to establish an initial handicap. After that, new scores are added, and older scores drop off, keeping a rolling 20-score database. The system uses the best 8 differentials from those 20 to calculate the index, which prevents a single bad round from drastically affecting your handicap.",
    },
    {
      question: "What do course rating and slope rating mean?",
      answer:
        "Course rating represents the expected score for a scratch golfer (par plus handicap adjustment) on that course from a specific set of tees. An average course has a 72.0 rating. Slope rating measures the relative difficulty compared to the standard (113). A slope of 140 is much harder than 113. Slope accounts for factors like length, hazards, rough, and green difficulty. Two courses with the same par can have vastly different ratings. Always use the rating and slope for the exact tees you played from, as different tee boxes have different ratings.",
    },
    {
      question: "Can my handicap go negative?",
      answer:
        "Yes, though it's rare among amateur golfers. Negative handicaps indicate exceptional skill beyond scratch level. Tour professionals often have negative handicaps because they consistently shoot well below par. A golfer with a -2.0 handicap is expected to shoot 70 on a par-72 course (2 under par). Negative handicaps still function the same way in the calculation formula—they simply indicate the player is expected to beat par rather than play at par. Only elite golfers achieve negative handicaps in amateur play.",
    },
    {
      question: "How often should I update my handicap?",
      answer:
        "Your handicap updates automatically as you submit new scores through your golf club or official handicap service. Most systems update handicaps daily or weekly. It's recommended to submit scores consistently after each round to maintain an accurate, current handicap. If you take a break from golf and return months later, your old scores eventually age out, and new scores establish a fresh calculation. Regular play and score submission ensure your handicap reflects your current ability for fair tournament competition and friendly matches.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/HeatIndexCalculator")),
  slug: "heat-index-calculator",
  title: "Heat Index Calculator",
  shortTitle: "Heat Index",
  description: "Calculate heat index and assess risk of heat-related illness",
  category: "other",
  icon: "🌡️",
  keywords: ["heat index", "humidity temperature", "heat illness", "apparent temperature", "weather safety"],
  popular: true,
  faqs: [
    {
      question: "What is heat index and why is it different from temperature?",
      answer: "Heat index is the apparent temperature felt by the human body when humidity is factored in. Temperature is just air temperature. When humidity is high, sweat cannot evaporate from skin, so the body cannot cool efficiently and feels hotter than the actual temperature. Example: 95°F with 60% humidity has a heat index of around 110°F. Weather forecasts often report heat index during hot spells because it better represents the danger to human health. Air conditioning units measure actual temperature, but human comfort and safety depend on heat index.",
    },
    {
      question: "At what heat index is it dangerous to be outside?",
      answer: "Heat index above 91°F is caution level (fatigue possible). Above 104°F is danger level (heat exhaustion likely). Above 125°F is extreme danger (heat stroke likely). However, vulnerability varies by person. Elderly people, young children, those with medical conditions, outdoor workers, and athletes face danger at lower heat indices. Never leave children or pets in vehicles during high heat index days; interior temperatures can exceed 130°F in minutes. Limit strenuous outdoor activity when heat index exceeds 91°F, especially during peak sun hours (10am-4pm).",
    },
    {
      question: "How is heat index calculated?",
      answer: "The National Weather Service uses the Rothfusz regression equation, which includes temperature and relative humidity values in a complex formula. Heat index is only calculated when temperature exceeds 80°F. Below 80°F, the heat index equals the actual temperature. The equation accounts for the physical process of evaporative cooling and how humidity inhibits that process. Different equations exist for metric units (Celsius and percent), but the concept is identical: higher humidity increases the apparent temperature.",
    },
    {
      question: "What should I do if I experience heat exhaustion symptoms?",
      answer: "Heat exhaustion signs include heavy sweating, weakness, dizziness, nausea, fast heartbeat, and cool clammy skin. Move to a cool place immediately (indoor air conditioning or shade). Drink cool water, not ice water. Apply cool water to skin or take a cool shower. Lie down and elevate legs. If symptoms don't improve within 30 minutes, or if you develop high body temperature, confusion, or loss of consciousness, call emergency services. Heat stroke is a medical emergency requiring immediate professional help. Prevention is key: drink water before you're thirsty, wear light clothing, take breaks, and avoid peak sun hours.",
    },
    {
      question: "How much water should I drink during hot weather?",
      answer: "Drink water continuously throughout the day, not just when thirsty. Thirst is a late indicator of dehydration. Most people need at least 8-10 glasses (64-80 ounces) daily, more if active or in heat. During outdoor activity in heat, drink 4-8 ounces every 15-20 minutes. Don't rely on caffeinated or alcoholic beverages; they increase dehydration. Check urine color: pale yellow indicates adequate hydration, dark yellow indicates dehydration. Athletes and outdoor workers need more. In extreme heat (heat index above 105°F), even sedentary people should increase water intake significantly. Electrolyte replacement drinks can help during prolonged activity.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/HorsepowerCalculator")),
  slug: "horsepower-calculator",
  title: "Horsepower Calculator",
  shortTitle: "Horsepower",
  description: "Calculate horsepower from torque, weight, or electrical power",
  category: "other",
  icon: "🏎️",
  keywords: ["horsepower calculator", "hp to kw", "torque to hp", "power conversion"],
  popular: false,
  faqs: [
    {
      question: "How is horsepower defined and why is 745.7 watts equal to 1 HP?",
      answer:
        "Horsepower (HP) was defined by James Watt as a way to compare steam engines to horses. 1 HP = 550 foot-pounds of work per second. Converting: 1 foot-pound is 1.3558 joules, so 550 ft-lbs = 745.7 joules per second = 745.7 watts. This historical definition remains standard. Electrical power uses watts, making the conversion essential for comparing mechanical and electrical systems. A 10 HP motor produces 7.457 kW of power. Understanding this conversion helps evaluate equipment across different industries and eras.",
    },
    {
      question: "What is the difference between metric horsepower (PS) and mechanical HP?",
      answer:
        "Metric horsepower (PS, Pferdestärke from German/French) was defined as 75 kilograms-force meter per second, slightly different from mechanical HP. 1 PS = 735.5 watts, while 1 mechanical HP = 745.7 watts. The difference is about 1.4%: 1 HP = 1.0139 PS. European cars are rated in PS; American cars in HP. A 200 HP engine is 203 PS. When comparing vehicles internationally, convert carefully—don't confuse HP with PS. Most conversion calculators handle this, but manual calculations require the specific conversion factors.",
    },
    {
      question: "How does the torque-to-horsepower formula work?",
      answer:
        "The formula HP = (torque × RPM) / 5252 comes from the definition of power. Torque is rotational force; RPM is rotational speed. Combining them gives power. The 5252 is a conversion constant derived from 33,000 foot-pounds per minute (1 HP) divided by 2π radians. At 5252 RPM, torque in foot-pounds equals horsepower numerically (e.g., 100 ft-lbs at 5252 RPM = 100 HP). This magic number is crucial for engine calculations. Below 5252 RPM, engines are torque-dominant; above, horsepower is dominant.",
    },
    {
      question: "Why do diesel engines have high torque but lower horsepower than gas engines?",
      answer:
        "Diesel engines produce peak torque at much lower RPM (1500-2500) due to their combustion design and heavy construction. They're designed for sustained work, not high-speed performance. A diesel might have 600 ft-lbs torque at 1500 RPM (about 171 HP), while a gas engine with 300 ft-lbs at 6000 RPM also makes 342 HP. Diesels excel at towing and hauling due to high torque. Gas engines achieve horsepower through higher RPM but lower torque. For trucks, high torque matters for pulling; for sports cars, high horsepower at high RPM enables speed. The application determines which is more useful.",
    },
    {
      question: "How does power-to-weight ratio affect vehicle performance?",
      answer:
        "Power-to-weight ratio (HP per lb or kW per kg) determines acceleration and performance. A 200 HP car weighing 2500 lbs has a better ratio than 200 HP at 4000 lbs. The first car accelerates faster because the same power moves less weight. Supercars often have 1+ HP per pound; economy cars might be 0.05 HP per pound. For reference, a 300 HP car at 3000 lbs has 0.1 HP/lb (reasonable sport sedan). A 500 HP supercar at 3500 lbs has 0.143 HP/lb (high performance). Lightweight sports cars with moderate horsepower can out-accelerate heavy luxury cars with high horsepower due to superior power-to-weight ratios.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/HoursCalculator")),
  slug: "hours-calculator",
  title: "Hours Calculator",
  shortTitle: "Hours",
  description:
    "Calculate total hours worked with breaks and optional wage calculation",
  category: "other",
  icon: "⏰",
  keywords: [
    "hours worked",
    "time tracking",
    "wage calculation",
    "break time",
    "payroll",
  ],
  faqs: HOURS_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/InchesToCmCalculator")),
  slug: "inches-to-cm",
  title: "Inches to Centimeters Converter",
  shortTitle: "Inches to CM",
  description: "Convert inches to centimeters with formula and reference table",
  category: "other",
  icon: "📏",
  keywords: ["inches to cm", "inches to centimeters", "in to cm", "imperial to metric", "convert inches"],
  popular: false,
  faqs: [
    {
      question: "How many centimeters are in an inch?",
      answer:
        "One inch equals exactly 2.54 centimeters. This is the internationally standardized conversion factor established in 1959. The relationship is fixed and unchanging: simply multiply inches by 2.54 to convert to centimeters. For example, 6 inches equals 15.24 centimeters, 12 inches equals 30.48 centimeters. This precise conversion allows seamless translation between imperial and metric measurements across fields like manufacturing, fashion, and engineering.",
    },
    {
      question: "Why use inches when centimeters are more decimal?",
      answer:
        "The inch is part of the imperial measurement system still widely used in the United States, and some other countries. Inches are convenient for many applications because they divide easily into fractions (1/2, 1/4, 1/8 inch), which is useful in woodworking, construction, and tool sizing. However, the metric system (centimeters) is decimal-based, making mathematical calculations simpler. Many industries use both systems depending on tradition, regulation, or customer preference. Global trade requires fluency in both measurements.",
    },
    {
      question: "How do I convert fractional inches to centimeters?",
      answer:
        "Convert fractional inches the same way as whole numbers: multiply by 2.54. For example, 2.5 inches × 2.54 = 6.35 centimeters. If working with fractions like 1/4 inch, convert to decimal first: 1/4 inch = 0.25 inches, then 0.25 × 2.54 = 0.635 centimeters. This calculator handles decimal inputs, so you can enter 2.5, 3.75, or 10.5 inches directly. For more precision, most converters display results to 2 or more decimal places.",
    },
    {
      question: "What are common inch-to-centimeter conversions I should memorize?",
      answer:
        "Useful benchmarks include: 1 inch = 2.54 cm, 3 inches = 7.62 cm (roughly a thumb width), 6 inches = 15.24 cm (credit card width), 12 inches = 30.48 cm (one foot), and 36 inches = 91.44 cm (one yard). Knowing these helps with quick mental math without a calculator. For body measurements, a typical adult thumb width is about 1 inch (2.54 cm), and a foot length is about 12 inches (30.48 cm). These mental shortcuts are invaluable in DIY projects and everyday life.",
    },
    {
      question: "Is 2.54 an exact conversion or an approximation?",
      answer:
        "The 2.54 conversion factor is exact and internationally standardized, not an approximation. It was defined by the 1959 International Yard and Pound Agreement to provide a precise relationship between imperial and metric measurements. All scientific and engineering conversions use this exact factor. In everyday use, you might round results (e.g., 1 inch ≈ 2.5 cm for quick mental math), but the true conversion is always 2.54 centimeters per inch. This precision is critical in manufacturing, aerospace, and precision engineering.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/InflationAdjusterCalculator")),
  slug: "inflation-adjuster-calculator",
  title: "Inflation Adjuster Calculator",
  shortTitle: "Inflation",
  description: "Calculate inflation-adjusted values to compare purchasing power across time",
  category: "other",
  icon: "📈",
  keywords: ["inflation calculator", "purchasing power", "inflation adjustment", "real value", "nominal value"],
  popular: false,
  faqs: [
    {
      question: "What is inflation and why does it matter?",
      answer: "Inflation is the rate at which the general price level of goods and services increases over time. It matters because it reduces purchasing power; money is worth less as prices rise. Example: if inflation is 3%, something costing $100 today will cost $103 next year. Your salary, savings, and investments are all affected by inflation. Moderate inflation (2-3%) is considered healthy for an economy. High inflation (5%+) damages savings and retirement accounts. Understanding inflation helps you plan financially and compare values from different time periods.",
    },
    {
      question: "How do I calculate the effect of inflation?",
      answer: "Use the formula: Future Value = Present Value × (1 + inflation rate)^years. Example: $100 with 3% inflation for 5 years = $100 × (1.03)^5 = $115.93. This means $100 today will have the purchasing power of about $116 in 5 years if inflation continues at 3%. Conversely, $100 five years ago would have the purchasing power of about $86 today. Higher inflation rates or longer time periods increase the effect. Savings accounts earning less than the inflation rate actually lose purchasing power over time. This is why savers look for investments exceeding inflation rates.",
    },
    {
      question: "What is the difference between nominal and real value?",
      answer: "Nominal value is the face value at a specific time (what you see on price tags and paychecks). Real value is adjusted for inflation (purchasing power). Example: a $50,000 salary is nominal. If inflation is 3% and your salary doesn't increase, your real value decreases because you can buy less with the same money. A 2% salary raise in a 3% inflation year is actually a real decrease of 1%. Real returns on investments are the return minus inflation. A 5% investment return in a 3% inflation year has a real return of about 2%. Always consider real value when making long-term financial plans.",
    },
    {
      question: "How does inflation affect savings and retirement accounts?",
      answer: "Inflation erodes the purchasing power of savings. A savings account earning 1% interest in a year with 3% inflation has a real loss of 2%. Over 30-year retirement, significant inflation reduces your savings' purchasing power substantially. Example: $500,000 in retirement savings with an average 2.5% inflation over 30 years has the purchasing power of about $197,000 in today's dollars. To maintain purchasing power, investments should earn at least the inflation rate. Conservative savers should seek returns of 4-5% to exceed typical inflation and build real wealth. This is why savers shift to stocks or bonds for better returns during low interest rate environments.",
    },
    {
      question: "What are typical inflation rates?",
      answer: "U.S. inflation averages about 2-3% annually over long periods. Recent history: 2000-2019 averaged 2.2% annually, 2020 was 1.2%, 2021 was 7%, 2022 was 8%, 2023 was 4%. The 1970s saw double-digit inflation (10%+). The 2008 financial crisis saw near-zero inflation and deflation. For planning purposes, assuming 3% annual inflation is reasonable. Other countries have different rates: some developed nations average 2-3%, while emerging markets may see higher inflation. Central banks target specific inflation rates (U.S. Fed targets 2%). Actual results vary, especially during economic crises or supply shocks.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/KgToLbsCalculator")),
  slug: "kg-to-lbs",
  title: "Kilograms to Pounds Converter",
  shortTitle: "KG to LBS",
  description: "Convert kilograms to pounds with formula and reference table",
  category: "other",
  icon: "⚖️",
  keywords: ["kg to lbs", "kilograms to pounds", "convert kg", "weight conversion"],
  popular: false,
  faqs: [
    {
      question: "How many pounds are in a kilogram?",
      answer:
        "One kilogram equals 2.20462 pounds. To convert kilograms to pounds, multiply by 2.20462. For example, 10 kilograms = 10 × 2.20462 = 22.0462 pounds. A quick approximation is that 1 kg ≈ 2.2 lbs, useful for mental math. So 5 kg ≈ 11 lbs, and 100 kg ≈ 220 lbs. For casual estimates, using 2.2 or even 2 works well, but for medical or official purposes, use the full 2.20462 factor.",
    },
    {
      question: "What's my weight in kilograms if I weigh 150 pounds?",
      answer:
        "Divide pounds by 2.20462 to convert to kilograms. 150 lbs ÷ 2.20462 = 68 kg. Common conversions: 100 lbs = 45.4 kg, 150 lbs = 68 kg, 180 lbs = 81.6 kg, 200 lbs = 90.7 kg. For quick mental math, divide by 2.2 or multiply by 0.45. Using 0.45 as a multiplier gives 150 × 0.45 = 67.5 kg, a very close approximation. Understanding your weight in both units helps when comparing health metrics internationally.",
    },
    {
      question: "What are common weight conversions I should know?",
      answer:
        "Useful benchmarks: 1 kg = 2.2 lbs, 10 kg = 22 lbs, 25 kg = 55 lbs, 50 kg = 110 lbs, 70 kg = 154 lbs (average adult male), 80 kg = 176 lbs, 100 kg = 220 lbs. Newborn babies typically weigh 3-4 kg (7-9 lbs). Dogs often weigh 10-30 kg (22-66 lbs). Large athletes might weigh 100+ kg (220+ lbs). Knowing these benchmarks helps with quick estimates without calculation.",
    },
    {
      question: "Is 2.20462 an exact or approximate conversion?",
      answer:
        "The 2.20462 factor is the precise, internationally standardized conversion factor. It's based on the definition that 1 kilogram = the mass of 1 liter of water at 4°C in the metric system, and 1 pound is 0.453592 kg exactly. These definitions make the conversion exact: 1 kg = 1 ÷ 0.453592 = 2.20462 lbs exactly. For casual mental math, using 2.2 or even 2 is acceptable, but official measurements require the full precision.",
    },
    {
      question: "Why do different countries use different weight units?",
      answer:
        "The pound is part of the imperial system that developed in England and was adopted by the United States and some other countries. The kilogram is the SI (International System) metric unit. Most of the world adopted metric, but the US and a few others retained imperial. Changing would be economically disruptive: all scales, labels, and regulations would need updating. International standards now require dual labeling in many cases. Historical divergence and practical inertia maintain two parallel weight systems, making conversion knowledge essential for global communication.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/KmToMilesCalculator")),
  slug: "km-to-miles",
  title: "Kilometers to Miles Converter",
  shortTitle: "KM to Miles",
  description: "Convert kilometers to miles with formula and reference table",
  category: "other",
  icon: "🛣️",
  keywords: ["km to miles", "kilometers to miles", "convert kilometers", "metric to imperial distance"],
  popular: false,
  faqs: [
    {
      question: "How many miles are in a kilometer?",
      answer:
        "One kilometer equals 0.621371 miles. To convert kilometers to miles, multiply by 0.621371. For example, 10 kilometers = 10 × 0.621371 = 6.21371 miles. A quick approximation is that 1 km ≈ 0.6 miles, useful for mental math. So 10 km ≈ 6 miles, and 100 km ≈ 60 miles. For casual estimates, using 0.6 is sufficient, but for precision in navigation or sports timing, use the full 0.621371 factor.",
    },
    {
      question: "What are common kilometers-to-miles conversions?",
      answer:
        "Useful benchmarks: 1 km = 0.621 miles, 5 km = 3.11 miles, 10 km = 6.21 miles, 21.1 km (half marathon) = 13.1 miles, 42.195 km (marathon) = 26.2 miles, 100 km = 62.1 miles. For speed limits, 100 kmh = 62.1 mph, 120 kmh = 74.6 mph. Memorizing that 1 km ≈ 0.6 miles or 8 km ≈ 5 miles helps with quick mental estimates without a calculator.",
    },
    {
      question: "How do I convert speed in kmh to mph?",
      answer:
        "Use the same 0.621371 conversion factor. Speed in kmh multiplied by 0.621371 gives mph. Example: 100 kmh × 0.621371 = 62.1 mph. Common conversions: 50 kmh = 31.1 mph, 80 kmh = 49.7 mph, 100 kmh = 62.1 mph, 130 kmh = 80.8 mph. For mental math, remember that 8 kmh ≈ 5 mph, or multiply kmh by 0.6 for a quick approximation. This is essential knowledge for safe driving when traveling internationally or driving rental cars in metric countries.",
    },
    {
      question: "Is 0.621371 the exact conversion factor?",
      answer:
        "Yes, 0.621371 is the exact reciprocal of 1.60934 (the miles-to-kilometers factor). These are the precise, standardized conversion factors. In practice, both systems define 1 mile = 1.60934 kilometers exactly, making 1 km = 1/1.60934 = 0.621371 miles exactly. This precision is maintained in all official measurements, navigation, and regulations. While casual mental math might use 0.6 or even 5/8, professional work requires the full precision factor.",
    },
    {
      question: "Why is the conversion factor different for kilometers and miles?",
      answer:
        "The conversion factors are reciprocals of each other: 1 mile × 1.60934 = 1.60934 km, and 1 km × 0.621371 ≈ 1 mile (actually 0.621371 km × 1.60934 = 1 mile exactly). They're different because one represents miles-to-km and the other km-to-miles, but they're mathematically linked. Using the correct factor for each direction ensures accurate conversions. The factors aren't simple whole numbers because the mile and kilometer were developed independently and then related by international agreement.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/LbsToKgCalculator")),
  slug: "lbs-to-kg",
  title: "Pounds to Kilograms Converter",
  shortTitle: "LBS to KG",
  description: "Convert pounds to kilograms with formula and reference table",
  category: "other",
  icon: "⚖️",
  keywords: ["lbs to kg", "pounds to kilograms", "convert pounds", "weight conversion"],
  popular: false,
  faqs: [
    {
      question: "How many kilograms are in a pound?",
      answer:
        "One pound equals 0.453592 kilograms. To convert pounds to kilograms, multiply by 0.453592. For example, 100 pounds = 100 × 0.453592 = 45.3592 kilograms. A quick approximation is that 1 lb ≈ 0.45 kg or 1 lb ≈ 0.5 kg for very rough estimates. So 100 lbs ≈ 45 kg, and 200 lbs ≈ 90 kg. For casual estimates, using 0.45 works well, but for medical or official purposes, use the full 0.453592 factor.",
    },
    {
      question: "What's my weight in kilograms if I weigh 180 pounds?",
      answer:
        "Multiply pounds by 0.453592 to convert to kilograms. 180 lbs × 0.453592 = 81.6 kg. Common conversions: 100 lbs = 45.4 kg, 150 lbs = 68 kg, 180 lbs = 81.6 kg, 200 lbs = 90.7 kg. For mental math, multiply by 0.45 for a quick approximation: 180 × 0.45 = 81 kg. Understanding your weight in kilograms is important for international health contexts, fitness tracking, and comparing weight statistics globally.",
    },
    {
      question: "What's a good rule of thumb for pounds to kilograms?",
      answer:
        "Remember that 2.2 pounds ≈ 1 kilogram, so 1 pound ≈ 0.45 kg. Another way: 1 kg ≈ 2.2 lbs, so divide pounds by 2.2 for a quick estimate. For example, 110 pounds ÷ 2.2 = 50 kg. Or multiply by 0.45: 110 × 0.45 = 49.5 kg. Both methods give approximately 50 kg (actual is 49.9 kg). These mental math tricks work well for casual estimates, but precision work requires the exact 0.453592 factor.",
    },
    {
      question: "How do I convert body weight in pounds to kilograms for medical use?",
      answer:
        "For medical purposes requiring precision, multiply your weight in pounds by 0.453592. Example: 175 lbs × 0.453592 = 79.4 kg. Medication dosages, clinical guidelines, and health assessments often require weight in kilograms. Never use approximations for medical calculations — use the exact factor. If your weight is 175 pounds, your medical weight is 79.4 kilograms. Always double-check conversions in medical contexts to ensure accuracy and patient safety.",
    },
    {
      question: "Is 0.453592 the exact conversion factor?",
      answer:
        "Yes, 0.453592 is the exact, internationally standardized conversion factor. It's the reciprocal of 2.20462 (the kg-to-lbs factor). These are based on the SI definition of the kilogram and the avoirdupois pound. The relationship is exact: 1 pound = 453.592 grams exactly. This precision is maintained in all official measurements, medical applications, and international regulations. While casual mental math might use 0.45 or 0.5, professional and medical contexts require the full precision.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/LitersToGallonsCalculator")),
  slug: "liters-to-gallons",
  title: "Liters to Gallons Calculator",
  shortTitle: "L to Gal",
  description: "Convert liters to gallons instantly",
  category: "other",
  icon: "🫗",
  keywords: ["liters to gallons", "volume conversion", "l to gal", "liquid measurement"],
  popular: false,
  faqs: [
    {
      question: "What is the conversion factor from liters to gallons?",
      answer: "One liter equals 0.264172 US gallons. For quick mental math, you can use 0.26 or even round to 0.25 (1/4) for rough estimates. The conversion factor is consistent: 10 liters = 2.64 gallons, 20 liters = 5.28 gallons. Remember this is for US gallons; imperial gallons (UK) have a different conversion of 0.220 gallons per liter.",
    },
    {
      question: "How many gallons are in a 2-liter soda bottle?",
      answer: "A 2-liter bottle contains approximately 0.528 US gallons. This is why 2-liter bottles are common international sizes: they represent a familiar volume that's slightly smaller than a US gallon (which is 3.78 liters). Other common international sizes include 1-liter bottles (0.26 gallons) and 3-liter bottles (0.79 gallons). Understanding these conversions helps when comparing beverage prices and sizes across different countries.",
    },
    {
      question: "How do I quickly estimate liters to gallons in my head?",
      answer: "The simplest method: divide liters by 4 (since 1 gallon ≈ 4 liters). Example: 20 liters ÷ 4 = 5 gallons (actual is 5.28). For better accuracy, multiply by 0.26 instead. Another approach: remember that 1 liter ≈ 1/4 gallon, so 4 liters ≈ 1 gallon, 8 liters ≈ 2 gallons, etc. This approximation method is fast and good enough for most practical purposes like cooking or fuel estimation.",
    },
    {
      question: "Why is liter the global standard instead of gallon?",
      answer: "The liter is part of the metric system, which was adopted internationally as the scientific and commercial standard. The metric system is based on units of 10, making conversions simple: 1 liter = 1000 milliliters. The imperial gallon system has awkward conversions and isn't part of a unified standard. In the 1970s and 1980s, most countries officially adopted the metric system. The US never made this transition, keeping gallons for consumer products. For global trade and scientific work, liters are standard.",
    },
    {
      question: "What is the difference between US gallons and imperial gallons?",
      answer: "The US gallon (3.78541 liters) is smaller than the imperial gallon (4.546 liters) used in the UK and some Commonwealth countries. When converting: 1 imperial gallon = 4.546 liters = 1.201 US gallons. A liter equals 0.264 US gallons but only 0.220 imperial gallons. Always verify which gallon is being used, especially when working with historical documents, UK measurements, or Canadian sources. Most liquid volume discussions in the US refer to US gallons unless otherwise specified.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/MetersToFeetCalculator")),
  slug: "meters-to-feet",
  title: "Meters to Feet Converter",
  shortTitle: "Meters to Feet",
  description: "Convert meters to feet with formula and reference table",
  category: "other",
  icon: "📐",
  keywords: ["meters to feet", "m to ft", "convert meters", "metric to imperial length"],
  popular: false,
  faqs: [
    {
      question: "How many feet are in a meter?",
      answer:
        "One meter equals 3.28084 feet. This is the precise conversion factor. To convert meters to feet, multiply by 3.28084. For example, 2 meters = 2 × 3.28084 = 6.56168 feet. A quick mental approximation is that 1 meter ≈ 3.3 feet, useful for rough estimates. The inverse conversion is 1 foot = 0.3048 meters. This exact relationship ensures consistency in international engineering, construction, and scientific measurements across the globe.",
    },
    {
      question: "What's the easiest way to convert meters to feet?",
      answer:
        "The most straightforward method is to multiply meters by 3.28084. For a quick mental approximation, multiply by 3.3. For example, 10 meters × 3.3 ≈ 33 feet (actual is 32.8 feet). Another approach: remember that 1 meter ≈ 3 feet, so 5 meters ≈ 15 feet, and 10 meters ≈ 30 feet. These approximations work well for casual estimates but aren't precise. For exact conversions in professional contexts, always use 3.28084 or this calculator.",
    },
    {
      question: "How do I convert meters to feet and inches?",
      answer:
        "Multiply meters by 3.28084 to get total feet, then extract the decimal part and multiply by 12 to get remaining inches. Example: 1.8 meters × 3.28084 = 5.905 feet. The 0.905 feet × 12 = 10.86 inches. So 1.8 meters = 5 feet 10.86 inches. Alternatively, use a calculator that displays the result in feet and inches format directly. This format is more intuitive for height, ceiling, and architectural measurements commonly expressed in feet and inches.",
    },
    {
      question: "Why is the conversion factor 3.28084 and not a simpler number?",
      answer:
        "The conversion factor 3.28084 is the reciprocal of 0.3048 (the feet-to-meters conversion). These precise values were established by international agreement based on the relationship between imperial and metric systems. While the number isn't simple, it's exact and internationally recognized, ensuring consistency in science, engineering, and global trade. Using a simpler approximation like 3.3 or 3.28 introduces errors that accumulate in precision work. For professional applications, the full 3.28084 factor is essential.",
    },
    {
      question: "What are some common meter-to-feet conversions?",
      answer:
        "Common conversions include: 1 m = 3.28 ft, 1.5 m = 4.92 ft, 1.8 m = 5.91 ft (average male height), 2 m = 6.56 ft, 3 m = 9.84 ft (typical ceiling height), 5 m = 16.4 ft, 10 m = 32.8 ft, 100 m = 328 ft. A 25-meter swimming pool = 82 feet. An Olympic-size pool (50 meters) = 164 feet. Mount Everest (8,849 m) = 29,032 feet. Knowing these benchmarks helps with quick comparisons without calculation.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/MileageCalculator")),
  slug: "mileage-calculator",
  title: "Mileage Calculator",
  shortTitle: "Mileage",
  description: "Calculate mileage reimbursement using IRS standard rates",
  category: "other",
  icon: "🚗",
  keywords: ["mileage calculator", "IRS mileage", "reimbursement", "tax deduction", "vehicle expense"],
  popular: true,
  faqs: [
    {
      question: "What are the IRS standard mileage rates?",
      answer: "The IRS publishes standard mileage rates annually. For 2026 (verify with current IRS guidance), business mileage is typically $0.67/mile, medical mileage is $0.21/mile, and charity work is $0.14/mile. These rates change yearly and are updated for inflation and vehicle costs. The business rate is highest because it includes depreciation, fuel, insurance, and maintenance. Employers often use the IRS rate as a baseline but may pay higher rates. Self-employed individuals can deduct either actual vehicle expenses or the standard mileage rate, whichever is higher.",
    },
    {
      question: "How do I document mileage for tax deductions?",
      answer: "The IRS requires contemporaneous written records. Keep a mileage log with dates, starting location, destination, purpose, and miles driven. Mileage apps automatically track via GPS. Spreadsheets work if you maintain consistent records. Supporting documents include receipts for tolls, parking, and fuel. Records created after the fact may not be accepted. Maintain these records for at least 3 years for IRS compliance. Personal tax audits often examine mileage deductions, so detailed documentation is crucial. Apps like Stride Health, MileIQ, and simple spreadsheets all satisfy IRS requirements.",
    },
    {
      question: "Can I deduct my commute to work?",
      answer: "No. Commuting from home to your regular workplace is not deductible, even if it's a long distance. The IRS classifies commuting as personal, not business. However, driving to a temporary work location or between job sites is deductible. Contractors who work at multiple job sites can deduct mileage between sites. If you have a home office and drive to client meetings from home, those miles may be deductible. Meals, lodging, and expenses incurred once you arrive are separate deductions. Always consult a tax professional about your specific situation.",
    },
    {
      question: "What's the difference between actual expenses and standard mileage deduction?",
      answer: "Actual expenses method: you deduct depreciation, fuel, insurance, maintenance, registration, tolls, and parking. Requires detailed record-keeping and often yields higher deductions for new vehicles. Standard mileage method: you multiply miles driven by the IRS rate ($0.67 for business in 2026). Simpler and sufficient for most people. You must choose one method in your first year of business; switching later is restricted. If business use is less than 50% of annual miles, you must use actual expenses. For new vehicles with high depreciation, actual expenses often win. For older vehicles with low depreciation, standard mileage usually wins. Calculate both and choose the higher deduction.",
    },
    {
      question: "How do I track mileage with multiple vehicles?",
      answer: "Maintain separate logs for each vehicle. Record vehicle identification (VIN or license plate) with every entry. Use a spreadsheet with columns for date, vehicle, starting mileage, ending mileage, miles driven, purpose, and notes. Mileage apps typically allow multiple vehicles; set up each one separately. At year-end, sum business miles by vehicle. This is especially important if you use personal and business vehicles differently. Keep odometer readings or photos as supporting evidence. If audited, the IRS may request evidence of mileage (photos of odometer, toll receipts, etc.). Consistency and detail matter for credibility.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/MilesToKmCalculator")),
  slug: "miles-to-km",
  title: "Miles to Kilometers Converter",
  shortTitle: "Miles to KM",
  description: "Convert miles to kilometers with formula and reference table",
  category: "other",
  icon: "🛣️",
  keywords: ["miles to km", "miles to kilometers", "mi to km", "convert miles", "driving distance"],
  popular: false,
  faqs: [
    {
      question: "How many kilometers are in a mile?",
      answer:
        "One mile equals 1.60934 kilometers. To convert miles to kilometers, multiply by 1.60934. For example, 10 miles = 10 × 1.60934 = 16.0934 kilometers. A quick approximation is that 1 mile ≈ 1.6 km, useful for mental math. So 5 miles ≈ 8 km, and 100 miles ≈ 160 km. For casual estimates, you can use 1.6, but for precise conversions especially in transportation or sports, use the full 1.60934 factor.",
    },
    {
      question: "What are common miles-to-kilometers conversions?",
      answer:
        "Useful benchmarks: 1 mile = 1.609 km, 5 miles = 8.05 km, 10 miles = 16.09 km, 26.2 miles (marathon) = 42.195 km, 50 miles = 80.47 km, 100 miles = 160.93 km. For speed limits, 30 mph ≈ 48 kmh, 60 mph ≈ 97 kmh, 100 mph ≈ 161 kmh. Memorizing these benchmarks helps with quick mental conversions without a calculator, useful for driving, running, and international travel.",
    },
    {
      question: "How do I convert speed in mph to kmh?",
      answer:
        "Use the same 1.60934 conversion factor. A speed in mph multiplied by 1.60934 gives kmh. Example: 60 mph × 1.60934 = 96.56 kmh. Common conversions: 30 mph = 48.3 kmh, 55 mph = 88.5 kmh, 65 mph = 104.6 kmh. For quick mental math, multiply by 1.6 or by 8/5 (since 1.6 = 8/5). So 50 mph × 1.6 = 80 kmh. Knowing these conversions is essential for international driving and understanding speed limits on road signs.",
    },
    {
      question: "Is the conversion factor always 1.60934?",
      answer:
        "Yes, 1.60934 is the exact, internationally standardized conversion factor. It's defined precisely: 1 mile = 1.60934 kilometers exactly. This factor is never rounded in official measurements. However, for casual mental math, using 1.6 or even 8/5 is acceptable. For scientific work, engineering, navigation, and official records, always use 1.60934 to avoid cumulative rounding errors. This precision is critical in aviation, maritime navigation, and international regulations.",
    },
    {
      question: "Why do the US and UK use miles when the rest of the world uses kilometers?",
      answer:
        "The United States and several other countries (including the UK historically, now metric) standardized the mile long before the metric system was developed. The mile has ancient Roman origins and became deeply embedded in American culture, infrastructure, and commerce. Changing nationwide would require massive expense and coordination. Roads, speed limits, vehicle odometers, and all transportation infrastructure are built around miles. While the US signed the Metre Convention (metric), it never legally adopted the metric system for all measurements. Cost and cultural inertia maintain the mile system despite most of the world using kilometers.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/MmToInchesCalculator")),
  slug: "mm-to-inches",
  title: "Millimeters to Inches Calculator",
  shortTitle: "mm to in",
  description: "Convert millimeters to inches for engineering and 3D printing",
  category: "other",
  icon: "📏",
  keywords: ["millimeters to inches", "mm to inches", "measurement conversion", "3d printing", "engineering"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from millimeters to inches?",
      answer: "One millimeter equals 0.0393701 inches. One inch equals exactly 25.4 millimeters (this is the defined conversion). For practical purposes, multiply millimeters by 0.0394 or divide by 25.4. Example: 100 mm ÷ 25.4 = 3.937 inches. These conversions are critical for precision work where even small errors cause problems.",
    },
    {
      question: "How many millimeters are in an inch?",
      answer: "One inch equals exactly 25.4 millimeters. This is the defined international standard. A half inch equals 12.7 mm. A quarter inch equals 6.35 mm. An eighth inch equals 3.175 mm. A sixteenth inch equals 1.5875 mm. These fractional inch conversions are important for machinists and precision engineers working with imperial measurements.",
    },
    {
      question: "Why do 3D printing models use millimeters?",
      answer: "Millimeters provide a natural scale for 3D printing: most hobby 3D printers have build plates around 200-300 mm. Precision tolerances are specified in millimeters (e.g., 0.5 mm wall thickness). Using millimeters avoids decimal places compared to inches: 5 mm is easier to read than 0.197 inches. Internationally, designs use millimeters for consistency. 3D printing slicing software accepts millimeters as the standard unit. Converting inch-based designs to millimeters ensures proper scaling of prints.",
    },
    {
      question: "What are common metric and imperial drill sizes?",
      answer: "Metric drill sizes are specified in millimeters: 1 mm, 1.5 mm, 2 mm, 2.5 mm, 3 mm, 4 mm, 5 mm, 6 mm, 8 mm, 10 mm, etc. Imperial drill sizes use fractional inches: 1/16\", 1/8\", 3/16\", 1/4\", 5/16\", 3/8\", etc. A 5 mm drill is close to 3/16\" (0.1875\" or 4.76 mm). Understanding approximate equivalents helps when metric drills aren't available or vice versa. Precision work requires exact matching.",
    },
    {
      question: "How can I estimate millimeters to inches quickly?",
      answer: "The simplest approximation: divide millimeters by 25. Example: 100 mm ÷ 25 = 4 inches (actual is 3.937). For better accuracy, divide by 25.4 or multiply by 0.04. Another approach: remember that 25 mm ≈ 1 inch, so 50 mm ≈ 2 inches, 100 mm ≈ 4 inches. These approximations help when converting specifications or comparing tool sizes across measurement systems.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/OzToGramsCalculator")),
  slug: "oz-to-grams",
  title: "Ounces to Grams Converter",
  shortTitle: "OZ to Grams",
  description: "Convert ounces to grams with formula and reference table",
  category: "other",
  icon: "⚖️",
  keywords: ["ounces to grams", "oz to grams", "convert ounces", "weight conversion"],
  popular: false,
  faqs: [
    {
      question: "How many grams are in an ounce?",
      answer:
        "One ounce equals 28.3495 grams. To convert ounces to grams, multiply by 28.3495. For example, 4 ounces = 4 × 28.3495 = 113.4 grams. A quick approximation is that 1 oz ≈ 28 grams or 1 oz ≈ 30 grams for very rough estimates. So 2 oz ≈ 56 g, and 4 oz ≈ 113 g. For casual cooking, using 28 or 30 works well, but for baking or precision nutrition tracking, use the full 28.3495 factor.",
    },
    {
      question: "How do I convert a recipe from ounces to grams?",
      answer:
        "Multiply each ingredient's ounces by 28.3495 to get grams. Example: a recipe calling for 8 oz of flour = 8 × 28.3495 = 226.8 grams, which you'd round to 227 grams. A recipe with 2 oz of butter = 56.7 grams, round to 57 grams. A pinch of salt (1 oz) = 28.3 grams. Baking by weight (grams) is more accurate than measuring by volume, so converting recipes to grams improves consistency. Most baking recipes list gram equivalents for this reason.",
    },
    {
      question: "What are common ounce-to-gram conversions in cooking?",
      answer:
        "Useful benchmarks: 1 oz = 28.3 g, 2 oz = 56.7 g, 4 oz = 113.4 g, 8 oz = 226.8 g (1/2 pound), 16 oz = 453.6 g (1 pound). For baking: 1 cup flour ≈ 8 oz (227 g), 1 cup sugar ≈ 8 oz (227 g), 1 stick butter = 4 oz (113 g). Knowing these benchmarks helps convert recipes quickly without a calculator. Most kitchen scales display both ounces and grams, making conversions easy during cooking.",
    },
    {
      question: "How do I convert nutrition labels from ounces to grams?",
      answer:
        "Multiply the serving size in ounces by 28.3495. Example: if a label says 'serving size: 2 oz (56 g)', you can verify 2 × 28.3495 = 56.7 ≈ 56 g. If you want to know the nutrition for a different serving size, convert that to grams and recalculate. If a label lists 3 oz per serving and you eat 4 oz, you're eating 4/3 = 1.33 servings. Converting ounces to grams helps with accurate portion control and consistent nutrition tracking across different labels and products.",
    },
    {
      question: "Is there a difference between fluid ounces and weight ounces?",
      answer:
        "Yes, fluid ounces (fl oz) measure volume, while weight ounces (oz) measure mass. 1 fluid ounce of water weighs approximately 29.5735 grams, close to the 28.3495 grams for a weight ounce, but they're technically different. Recipes for liquids use fluid ounces, while solid ingredients use weight ounces. The confusion arises because they have similar values but different purposes. Always check whether your recipe specifies fl oz (fluid) or oz (weight). This is crucial for accurate conversions and successful cooking.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/PasswordGeneratorCalculator")),
  slug: "password-generator",
  title: "Password Generator",
  shortTitle: "Password",
  description: "Generate strong random passwords with customizable character options",
  category: "other",
  icon: "🔐",
  keywords: ["password generator", "strong password", "random password", "password security"],
  popular: false,
  faqs: PASSWORD_GENERATOR_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/RandomNumberCalculator")),
  slug: "random-number-generator",
  title: "Random Number Generator",
  shortTitle: "Random Numbers",
  description: "Generate random numbers with customizable range and distribution",
  category: "other",
  icon: "🎲",
  keywords: ["random number generator", "random number", "lottery", "random selection"],
  popular: false,
  faqs: RANDOM_NUMBER_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/RomanNumeralCalculator")),
  slug: "roman-numeral-calculator",
  title: "Roman Numeral Converter",
  shortTitle: "Roman Numerals",
  description: "Convert between decimal numbers and Roman numerals",
  category: "other",
  icon: "🏛️",
  keywords: ["roman numerals", "roman numeral converter", "convert roman", "decimal to roman"],
  popular: true,
  faqs: [
    {
      question: "What are the basic Roman numeral symbols and their values?",
      answer:
        "There are seven base symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. These are the only symbols in the standard system. All other numbers are created by combining these symbols. For example, VI = 6 (5 + 1), XV = 15 (10 + 5), XXX = 30 (10 + 10 + 10). Symbols are generally written in descending order from left to right, with larger values first. This additive principle creates most numbers, though subtractive notation (like IV for 4) is also used for brevity and convention.",
    },
    {
      question: "When should I use subtractive notation in Roman numerals?",
      answer:
        "Subtractive notation places a smaller numeral before a larger one to subtract. For example, IV means 5 - 1 = 4, IX means 10 - 1 = 9. Historically, both IIII and IV were used for 4, but IV became standard. Only specific subtractions are valid: I can precede V (5) and X (10), X can precede L (50) and C (100), C can precede D (500) and M (1000). Invalid combinations like IL (49) should be written as XLIX (40 + 9). Subtractive notation is used for brevity—without it, larger numbers would be excessively long.",
    },
    {
      question: "How do I read Roman numerals on clock faces?",
      answer:
        "Clock Roman numerals typically run from I (1) to XII (12) for the hours. Some clocks display IIII instead of IV for 4, which was an older convention. The minute markers might also use Roman numerals: V (5), X (10), XV (15), etc. Reading the clock works the same as with Arabic numerals—find where the hour hand points for hours and the minute hand for minutes. Understanding Roman numerals helps interpret antique clocks and formal timepieces. Modern digital and Arabic numeral clocks are more common, but Roman numeral clocks remain popular for aesthetic reasons.",
    },
    {
      question: "What is the highest number you can write in standard Roman numerals?",
      answer:
        "The standard system works up to 3999 (MMMCMXCIX). There's no single symbol for 5000 or higher in basic Roman notation. For larger numbers, special notation systems exist, such as placing a vinculum (overline) above a numeral to multiply by 1000. For example, a bar over V would represent 5000. Some historical texts used apostrophes or other marks. Ancient Romans rarely needed numbers above 3999 for practical purposes. Modern usage of Roman numerals is generally limited to small numbers like book chapters, dates, and clock faces, all well within the 1-3999 range.",
    },
    {
      question: "Why do some historical documents use Roman numerals differently?",
      answer:
        "Roman numeral notation evolved over centuries. Earlier inscriptions sometimes used different conventions than modern standard. For example, IIII was sometimes used instead of IV for 4. Additive notation without subtraction was more common in older inscriptions (e.g., LXXVIII instead of LXXVIII). Roman numerals were never standardized as strictly as modern numbering systems. When reading historical documents, some flexibility is needed. Modern conventions have settled on specific subtractive rules (like IV, IX, XL, XC, CD, CM) as standard. This calculator uses modern standard notation, which differs from some ancient usage.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/ScreenSizeCalculator")),
  slug: "screen-size-calculator",
  title: "Screen Size Calculator",
  shortTitle: "Screen Size",
  description: "Calculate monitor width, height, and pixel density",
  category: "other",
  icon: "🖥️",
  keywords: ["screen size calculator", "monitor dimensions", "PPI", "resolution", "aspect ratio", "display"],
  popular: true,
  faqs: [
    {
      question: "How is screen size measured?",
      answer: "Screen size is measured diagonally from one corner to the opposite corner, typically in inches. A 24-inch monitor has a diagonal of 24 inches. This measurement doesn't directly tell you the width or height; you need the aspect ratio for that. A 24-inch 16:9 monitor is about 21 inches wide and 12 inches tall. A 24-inch 4:3 monitor is about 19 inches wide and 14.5 inches tall. The same diagonal size with different aspect ratios results in different physical dimensions. Always check both diagonal size and aspect ratio when choosing a monitor.",
    },
    {
      question: "What aspect ratio should I choose?",
      answer: "16:9 (widescreen) is the standard for most modern monitors and TVs; it's suitable for most uses. 16:10 (taller) was common on older monitors and provides slightly more vertical space. 4:3 (square) was dominant before widescreen but is rare today. 21:9 (ultrawide) provides extra horizontal space for gaming, video editing, or multitasking; it's more expensive and requires more desk space. Choose based on your use case: widescreen for general use, ultrawide for content creation or gaming, taller aspect ratios for coding or document editing.",
    },
    {
      question: "What is PPI and why does it matter?",
      answer: "PPI (pixels per inch) measures pixel density; higher PPI means sharper text and images. A 24-inch 1080p monitor has about 92 PPI (acceptable for normal office work). A 27-inch 1440p monitor has about 109 PPI (crisp and clear). A 4K monitor has very high PPI (150+ PPI, extremely sharp). For comfortable viewing without strain, higher PPI is better. Viewing distance matters: sitting far away, lower PPI is acceptable; sitting close, higher PPI is necessary. For laptops, 130+ PPI is comfortable; for desktops, 90-110 PPI is typical.",
    },
    {
      question: "How do I choose the right monitor size for my desk?",
      answer: "Measure your desk depth and determine your sitting distance. Most people sit 20-30 inches from a monitor. At 24 inches viewing distance, a 24-inch monitor is appropriate (viewing angle is about 60-70 degrees). At 30+ inches, a 27-inch or larger monitor is better. Ultrawide monitors (34-35 inches) require 30+ inches viewing distance and significant desk space (approximately 40 inches wide). Desk depth should be at least 24 inches for a 24-inch monitor. Leave space for keyboard and mouse. Monitor stands take less space than monitor arms. Ensure your monitor is at eye level to reduce neck strain.",
    },
    {
      question: "What resolution should I choose?",
      answer: "Common resolutions: 1920x1080 (Full HD) for 24-inch monitors, 2560x1440 (QHD) for 27-inch, 3840x2160 (4K) for 32-inch and larger. Higher resolution provides more screen real estate and sharper text. For coding and document editing, higher resolution (2560+ width) is beneficial. For gaming, consider your GPU capability; high resolution requires powerful graphics cards. For general office work, 1920x1080 is sufficient. For photo/video editing, 2560+ resolution and color-accurate displays are recommended. Balance resolution with refresh rate; high refresh (144+ Hz) is better for gaming.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/ShoeSizeCalculator")),
  slug: "shoe-size-calculator",
  title: "Shoe Size Calculator",
  shortTitle: "Shoe Size",
  description: "Convert shoe sizes between US, UK, and European systems",
  category: "other",
  icon: "👟",
  keywords: ["shoe size converter", "US UK EU sizes", "shoe size conversion", "women's men's shoes"],
  popular: true,
  faqs: [
    {
      question: "How do US, UK, and EU shoe sizes differ?",
      answer: "The US system uses different scales for men's and women's shoes. US Men's sizes range from 1-16+. US Women's sizes range from 5-12, about 1.5-2 sizes smaller than men's sizes for the same shoe. UK sizes are similar to US Men's but with slight variations. EU sizes are universal (30-50+) and based on centimeters. EU size 40 is roughly 25.9 cm and corresponds to about US Men's size 7 or US Women's size 8.5-9. These systems are different because they developed independently in each region. When buying internationally, always use conversion charts and check brand-specific size guides.",
    },
    {
      question: "What's the difference between US men's and women's sizes?",
      answer: "US Men's and Women's shoes use different molds (lasts) and sizing scales. US Women's size 8 is roughly equivalent to US Men's size 6.5. To approximate: Men's size + 1.5 to 2 = Women's size. However, this is not exact because the shoe shape differs. The wider toe box and narrower heel in women's shoes affect fit beyond just size numbers. Always check the brand's specific size chart. Some unisex brands use one sizing system for all. When buying across genders, try on or check detailed fit reviews to ensure proper fit.",
    },
    {
      question: "How do I measure my foot size at home?",
      answer: "Place your foot on a piece of paper and trace around it. Measure the distance from the heel to the longest toe in centimeters or inches. Measure both feet (they may differ). Measure in the afternoon when feet are slightly swollen. Compare your measurement to the brand's size chart. Most shoes have a half-size margin of comfort, so your measurement should match the size chart closely. If your measurement falls between sizes, choose the larger size. Different brands have different lasts (mold shapes), so the same size may fit differently across brands. Check online reviews and fit comments when buying from unfamiliar brands.",
    },
    {
      question: "What if shoes fit differently across brands?",
      answer: "Different manufacturers use different lasts (shoe molds), causing the same size number to fit differently. Brand A's size 10 might feel tighter than Brand B's size 10. Check each brand's size chart against your foot measurement. Read customer reviews mentioning fit (runs small, true to size, runs large). Try on shoes in-store if possible. When buying online, check the return policy to exchange if the size doesn't fit. Keep a personal record of which brands fit you well and in what size. Recognizing your best-fitting brands helps you buy with confidence in the future.",
    },
    {
      question: "Are half sizes and wide widths available in all systems?",
      answer: "US Men's and Women's systems offer half sizes (7, 7.5, 8, etc.) and width options (B, D, 2E, 4E for men; AAA to EEE for women). UK sizes typically offer half sizes but fewer width options. EU sizes are usually whole numbers only (40, 41, 42) without half sizes, and width information is less standardized. Wide shoes are crucial for comfort. If standard widths don't fit, look for brands specializing in wide shoes. Width conversions are harder than length conversions; trying on is recommended. Some brands make shoes in multiple widths; check the brand's website for width availability.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/SpeedCalculator")),
  slug: "speed-calculator",
  title: "Speed Calculator",
  shortTitle: "Speed",
  description: "Calculate speed, distance, or time with multiple unit support",
  category: "other",
  icon: "🚀",
  keywords: ["speed calculator", "distance time", "velocity", "mph", "km/h", "knots"],
  popular: true,
  faqs: [
    {
      question: "What's the formula for calculating speed?",
      answer: "Speed equals distance divided by time. The formula is: Speed = Distance / Time. Example: if you travel 100 miles in 2 hours, your speed is 100 / 2 = 50 mph. This works for any distance and time units, as long as you keep them consistent. Speed calculators help convert between different units (mph, km/h, m/s, knots) so you can express the result in whatever unit you need.",
    },
    {
      question: "How do I convert between mph and km/h?",
      answer: "One mile equals approximately 1.60934 kilometers. To convert mph to km/h, multiply by 1.609. Example: 50 mph × 1.609 = 80.45 km/h. To convert km/h to mph, divide by 1.609. Example: 100 km/h / 1.609 = 62.14 mph. A quick approximation: multiply mph by 1.6 or divide km/h by 1.6. Speed calculators do this conversion automatically for you across all common units.",
    },
    {
      question: "What are knots and when are they used?",
      answer: "A knot is a nautical mile per hour, used in aviation, maritime, and military contexts. One knot equals 1.15078 mph or 1.852 km/h. Aircraft cruising speed is typically 450-500 knots. Ships measure speed in knots. Weather reports may also express wind speed in knots. Understanding knots is important when traveling by plane or boat, reading aviation charts, or interpreting meteorological data. Knots are preferred in these fields because they relate to latitude and longitude on nautical charts.",
    },
    {
      question: "How do I calculate travel time from speed and distance?",
      answer: "Rearrange the speed formula to: Time = Distance / Speed. Example: if you drive 200 miles at 50 mph, the time is 200 / 50 = 4 hours. Account for rest stops, traffic, and speed variations in real-world driving. Average speed calculators assume constant speed, but actual trips vary. For better estimates, use lower average speeds during rush hours or unfamiliar terrain. Modern navigation apps estimate travel time by accounting for real-time traffic and typical speeds on each road segment.",
    },
    {
      question: "What's the difference between average speed and instantaneous speed?",
      answer: "Average speed is the total distance divided by total time, which is what this calculator computes. Instantaneous speed is your speed at any exact moment, which changes constantly during travel. If you drive 100 miles in 2 hours with varying speeds (70 mph on the highway, 30 mph in towns), your average speed is 50 mph, but your instantaneous speed varies. Speedometers show instantaneous speed. Trip computers calculate average speed. For planning trips or comparing performance, average speed is usually what matters.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/SqftToSqmCalculator")),
  slug: "sqft-to-sqm",
  title: "Square Feet to Square Meters Calculator",
  shortTitle: "ft² to m²",
  description: "Convert square feet to square meters for real estate",
  category: "other",
  icon: "📐",
  keywords: ["square feet to square meters", "area conversion", "real estate", "property size"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from square feet to square meters?",
      answer: "One square foot equals 0.092903 square meters. For practical purposes, multiply square feet by 0.0929 or round to 0.093. A quick approximation: divide square feet by 10.76 to get square meters. Example: 1000 square feet ÷ 10.76 = 92.9 square meters. These approximations are accurate enough for real estate and construction purposes.",
    },
    {
      question: "How many square meters in a typical US home?",
      answer: "A typical US single-family home is 2000-2500 square feet, which equals 186-232 square meters. Smaller homes might be 1200 square feet (111 square meters); larger homes 4000 square feet (371 square meters). Apartments typically range from 600-1200 square feet (56-111 square meters). These ranges help when comparing housing internationally, understanding that US homes are often larger than typical European homes of similar price points.",
    },
    {
      question: "Why do real estate listings use different units?",
      answer: "Square feet is the standard in the US due to historical tradition; metric systems are used globally. When comparing housing prices between countries, converting to a common unit (usually square meters) allows fair comparison. US price per square foot converts to international price per square meter. Knowing both allows you to understand whether a property in one market is more expensive than comparable property in another. Real estate apps increasingly show both units for international users.",
    },
    {
      question: "How can I estimate square feet to square meters quickly?",
      answer: "The easiest approximation: multiply square feet by 0.1 (ignore the last digit) for a rough estimate. Example: 1200 ft² ≈ 120 m² (actual is 111). For better accuracy, multiply by 0.093 instead. Another method: remember that 1 square meter is about 10.76 square feet, so roughly 1 square meter for every 11 square feet. With practice, you'll develop intuition for common home sizes without calculating.",
    },
    {
      question: "How do I convert square meters back to square feet?",
      answer: "Multiply square meters by 10.7639 to get square feet. For quick approximation, multiply by 10.76 or even round to 11. Example: 100 square meters × 10.76 = 1076 square feet. A 50 square meter apartment is about 538 square feet. This reverse conversion helps when reading international property listings or comparing housing markets across countries.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/SqmToSqftCalculator")),
  slug: "sqm-to-sqft",
  title: "Square Meters to Square Feet Calculator",
  shortTitle: "m² to ft²",
  description: "Convert square meters to square feet for real estate",
  category: "other",
  icon: "📐",
  keywords: ["square meters to square feet", "area conversion", "international real estate", "property size"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from square meters to square feet?",
      answer: "One square meter equals 10.7639 square feet. For practical purposes, multiply square meters by 10.76 or round to 10.8. A quick approximation: multiply by 11 for easy mental math, which is accurate within about 2%. Example: 100 square meters × 11 = 1100 square feet (actual is 1076). These approximations work well for real estate and property comparisons.",
    },
    {
      question: "How many square feet is a typical European apartment?",
      answer: "European apartments typically range from 40-120 square meters. A 50 square meter apartment (538 square feet) is small but common in city centers. A 75 square meter apartment (807 square feet) is considered medium-sized. A 100 square meter apartment (1076 square feet) is spacious. These are smaller than typical US apartments of 600-1200 square feet (56-111 square meters) because land is more expensive and space more limited in European cities.",
    },
    {
      question: "How do I quickly estimate square meters to square feet in my head?",
      answer: "The simplest method: multiply square meters by 10. Example: 50 m² × 10 = 500 ft² (actual is 538). For more accuracy, multiply by 11 instead. A 100 m² property × 11 = 1100 ft² (actual is 1076). These approximations are within 5% and helpful when browsing international real estate listings. With practice, you'll develop intuition for common property sizes without calculating.",
    },
    {
      question: "Why do real estate prices differ so much between countries?",
      answer: "Land scarcity, demand, location, local economy, and building regulations all affect prices. Additionally, direct comparison requires understanding both area units and local market conditions. A 100 square meter apartment in London costs far more than a 100 square meter apartment in many other cities due to high demand and limited supply. Knowing size conversions allows you to compare price per square unit across markets. Price per square meter in one city versus price per square foot in another requires conversion to make fair comparisons.",
    },
    {
      question: "How can I convert square feet back to square meters?",
      answer: "Divide square feet by 10.7639 to get square meters. For approximation, divide by 11 for quick estimates. Example: 1000 square feet ÷ 11 = 91 square meters (actual is 92.9). A 2000 square foot house is about 186 square meters. This reverse conversion helps when reading US property listings and comparing them to international markets.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/SubnetCalculator")),
  slug: "subnet-calculator",
  title: "Subnet Calculator",
  shortTitle: "Subnet",
  description:
    "Calculate subnet masks, network ranges, and host addresses for IPv4 networks",
  category: "other",
  icon: "🌐",
  keywords: [
    "subnet",
    "CIDR",
    "IP address",
    "network mask",
    "IPv4",
    "networking",
  ],
  faqs: SUBNET_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/TimeCalculator")),
  slug: "time-calculator",
  title: "Time Calculator",
  shortTitle: "Time",
  description: "Add or subtract time values and convert between units",
  category: "other",
  icon: "⏱️",
  keywords: ["time calculator", "add time", "subtract time", "time conversion"],
  popular: false,
  faqs: TIME_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/TimeCardCalculator")),
  slug: "time-card-calculator",
  title: "Time Card Calculator",
  shortTitle: "Time Card",
  description: "Calculate hours worked and pay with overtime compensation",
  category: "other",
  icon: "⏱️",
  keywords: ["time card", "hours worked", "overtime pay", "wage calculation", "payroll"],
  popular: true,
  faqs: [
    {
      question: "How do I calculate pay with overtime?",
      answer: "Regular pay is hours (up to 8) multiplied by hourly rate. Overtime pay is excess hours (over 8) multiplied by 1.5 times the hourly rate. Example: 10 hours at $15/hour = (8 × $15) + (2 × $22.50) = $120 + $45 = $165. Some employers use weekly overtime (over 40 hours) instead of daily. Check your employer's policy. Double-check your paycheck for accuracy. Report discrepancies to payroll immediately. Keep personal time records as backup documentation.",
    },
    {
      question: "What is overtime pay and when am I eligible?",
      answer: "Overtime pay is compensation at 1.5 times the regular hourly rate for hours beyond the standard (typically 8 per day or 40 per week). Non-exempt hourly employees are eligible. Exempt employees (salaried) typically don't receive overtime pay. Eligibility depends on job classification and your employer's policies. The Fair Labor Standards Act (FLSA) is the federal minimum; some states require more favorable rates. Military, police, and some healthcare workers have different rules. Always verify your employment status and local regulations. If denied overtime pay when eligible, file a wage claim with your labor department.",
    },
    {
      question: "Do breaks and meals count as work time?",
      answer: "Paid breaks (very short, 5-20 minutes) count as work time. Unpaid meal breaks (30 minutes to 1 hour) do not count as work time. The distinction depends on whether you can be called to work during the break. Many states require breaks; check your local labor laws. Breaks should be deducted from your total time when calculating pay. If your employer requires you to remain on premises during a break, it may be considered paid time. Your time card should clearly show break times deducted from total work time.",
    },
    {
      question: "How do I track hours accurately?",
      answer: "Use a time clock, app, or digital system for consistency. Record start and end times to the nearest minute. Document all breaks and their duration. Note any unusual circumstances (worked through lunch, early departure, etc.). Review your time card before submitting for accuracy. Keep personal records in case of disputes. Use a phone app if your employer doesn't provide a time system. Digital tracking is more reliable than memory. Many payroll systems integrate with time clocks to prevent errors. Check your paycheck against your time records to catch errors early.",
    },
    {
      question: "What if my employer refuses to pay overtime?",
      answer: "This is wage theft and is illegal under the Fair Labor Standards Act (FLSA). Contact your employer's HR or payroll department first; it may be a mistake. If the issue isn't resolved, file a wage claim with your state's labor board or the U.S. Department of Labor. Keep documentation: paystubs, time cards, emails, witness statements. Many states have wage recovery laws allowing you to recover unpaid wages plus penalties. Labor attorneys often handle wage cases on contingency (no upfront cost). Don't worry about retaliation; it's illegal for employers to punish employees for wage claims. Your rights are protected by law.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/TimeDurationCalculator")),
  slug: "time-duration-calculator",
  title: "Time Duration Calculator",
  shortTitle: "Time Duration",
  description: "Calculate duration between times or add/subtract time intervals",
  category: "other",
  icon: "⏱️",
  keywords: ["time duration", "time calculator", "time between", "hours minutes"],
  popular: false,
  faqs: [
    {
      question: "How do I calculate the time between two times across midnight?",
      answer:
        "When the end time is earlier than the start time (crossing midnight), add 24 hours to the end time before subtracting. For example, from 11:00 PM to 2:00 AM: treat 2:00 AM as 26:00 (next day 2 AM), then 26:00 - 23:00 = 3 hours. This calculator handles this automatically—just enter 11:00 PM as start and 2:00 AM as end, and it correctly returns 3 hours. This is crucial for night shift calculations, 24-hour operations, and any timing that spans midnight.",
    },
    {
      question: "How do I convert time duration to decimal hours for payroll?",
      answer:
        "Divide minutes by 60 and add to hours. 8 hours 30 minutes = 8 + (30 ÷ 60) = 8 + 0.5 = 8.5 hours. For any minutes: 15 min = 0.25, 30 min = 0.5, 45 min = 0.75. For seconds: 30 seconds = 0.5 minutes, then convert minutes to decimal. This calculator shows decimal hours in the results. Example: 7 hours 22 minutes 30 seconds = 7.375 hours (22.5 ÷ 60). Payroll software often requires decimal hours, making this conversion essential for hourly employees and billing.",
    },
    {
      question: "What is the correct way to handle daylight saving time in time calculations?",
      answer:
        "Daylight saving time causes one hour to be skipped (spring forward) or repeated (fall back). When calculating across these transitions, the actual duration is shorter in spring (one fewer hour) or longer in fall (one additional hour). This calculator works with wall-clock time and doesn't automatically adjust for DST. For DST-aware calculations, consult dedicated scheduling software that understands time zones and DST rules. Most modern systems handle DST automatically, but it's worth verifying if you're working with critical timing near DST transitions.",
    },
    {
      question: "How do I calculate total work hours for a shift with breaks?",
      answer:
        "Calculate the total time between start and end, then subtract break times. For example, 9:00 AM to 5:00 PM is 8 hours. Subtract a 1-hour lunch and two 15-minute breaks (1.5 hours total), resulting in 6.5 hours of work. Some time trackers require manually entering work periods (before break, after break) rather than the full span. Others accept start/end times and require break deductions. Always verify with your employer or timekeeping system how breaks are handled—policies vary on whether breaks are paid or unpaid.",
    },
    {
      question: "Can I use this for calculating event duration or elapsed time?",
      answer:
        "Yes, this is ideal for any event duration. If an event starts at 2:30 PM and ends at 6:45 PM, calculate the duration (4 hours 15 minutes). This works for sports events, movies, conferences, or any timed activity. For activities longer than 24 hours, this calculator gives daily duration, but you'd need to manually extend for multi-day events. For project timelines spanning days or weeks, a day counter is more appropriate. This calculator focuses on durations within a single day, making it perfect for shift work, meetings, classes, and other daily activities.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/TimeZoneCalculator")),
  slug: "time-zone-calculator",
  title: "Time Zone Calculator",
  shortTitle: "Time Zone",
  description: "Convert times between world time zones",
  category: "other",
  icon: "🌍",
  keywords: ["time zone converter", "UTC offset", "world time", "convert time", "timezone"],
  popular: true,
  faqs: [
    {
      question: "What is UTC and how do time zones relate to it?",
      answer: "UTC (Coordinated Universal Time) is the international standard time, also called Greenwich Mean Time (GMT). All time zones are based on UTC offsets. Eastern Time is UTC-5 (5 hours behind UTC). Central Europe is UTC+1 (1 hour ahead). Tokyo is UTC+9. When it's noon UTC, it's 7am in New York (UTC-5) and 9pm in Tokyo (UTC+9). Most digital systems and aviation use UTC internally, then convert to local time for display. Understanding UTC helps when working with international teams, logs, and scheduling.",
    },
    {
      question: "How do I calculate time differences between zones?",
      answer: "Find the UTC offset for each timezone, then subtract. Example: New York (UTC-5) to London (UTC+0): 0 - (-5) = 5 hours difference. If it's 3pm in New York, add 5 hours to get 8pm in London. If the result exceeds 24 hours or goes negative, add or subtract 24 hours to stay within a single day. Example: 9pm in New York to Tokyo (UTC+9): 9 + 14 hours = 11am next day in Tokyo. Most calendars and time apps do this automatically, but understanding the math helps you verify conversions.",
    },
    {
      question: "What is daylight saving time and how does it affect time zones?",
      answer: "Daylight saving time (DST) shifts local time one hour forward during warmer months to use daylight more efficiently. In the U.S., it starts on the second Sunday in March and ends on the first Sunday in November. Europe has similar dates but not identical. Some places don't observe DST (Arizona, Hawaii, parts of Canada). During DST, New York becomes UTC-4 instead of UTC-5. Time differences between regions that observe DST on different dates are confusing. Always use timezone-aware tools that account for DST; manual calculations are error-prone during transitions.",
    },
    {
      question: "What are the major world time zones?",
      answer: "Major time zones include: Hawaii (UTC-10), Los Angeles (UTC-8), Denver (UTC-7), Chicago (UTC-6), New York (UTC-5), London/GMT (UTC+0), Paris/Central Europe (UTC+1), Cairo/Eastern Europe (UTC+2), New Delhi (UTC+5:30), Singapore (UTC+8), Tokyo (UTC+9), Sydney (UTC+10). These are standard time offsets; add 1 hour for daylight saving time in observing regions. Large countries like Russia, China, and Australia span multiple time zones. Use a map or timezone app to determine the correct zone for specific cities.",
    },
    {
      question: "How do I schedule a call across multiple time zones?",
      answer: "Find a time that works for all participants' working hours (typically 9am-6pm). Use a time zone converter to see what times correspond across regions. For example, 9am Pacific (UTC-8) is 12pm Eastern (UTC-5) and 5pm London (UTC+0). Consider each region's standard working hours and lunch times. Google Calendar automatically shows events in each attendee's local time. Always confirm the timezone in meeting invitations to prevent confusion. When deadlines are international, specify both the timezone and UTC time for clarity.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/TipCalculatorAdvanced")),
  slug: "tip-calculator-advanced",
  title: "Tip Calculator Advanced",
  shortTitle: "Tip Calc",
  description: "Calculate tips and split bills among multiple people",
  category: "other",
  icon: "💵",
  keywords: ["tip calculator", "gratuity", "split bill", "service charge", "restaurant tip"],
  popular: true,
  faqs: [
    {
      question: "How much should I tip?",
      answer: "Standard tipping guidelines: 15% for acceptable service, 18-20% for good service, 20-25% for excellent service. Poor service may justify 10% or less. These percentages apply to restaurant servers. Different service types have different expectations: bartenders get $1-2 per drink, delivery drivers get 10-15% or $2-3 minimum, hairstylists get 15-20%, housekeeping gets $2-5 per night. Always tip on the pre-tax bill amount. For large groups (usually 8+ people), many restaurants automatically add 18-20% gratuity; check your bill to avoid double-tipping.",
    },
    {
      question: "How do I calculate tip mentally?",
      answer: "Quick mental math: 10% is moving the decimal one place left ($50 bill = 10% is $5). 20% is double 10% ($50 bill = 20% is $10). 15% is between 10% and 20% ($50 bill = 15% is $7-8). For a $50 bill: 10% is $5, 15% is $7.50, 20% is $10. For a $35 bill: 10% is $3.50, 15% is $5.25, 20% is $7. Most people round to the nearest dollar or round the total to a nice number. Apps and calculators make precise calculations instant. Tipping apps show multiple percentage options and calculate split bills automatically.",
    },
    {
      question: "How do I split a bill with multiple people?",
      answer: "For equal split: (Bill + Tip) / Number of People = Per Person Amount. Example: $60 bill, $12 tip (20%), 3 people = $72 / 3 = $24 per person. For proportional split: each person pays their portion of the bill plus their share of the tip. Example: one person spent $40, another $20 on a $60 bill. At 20% tip: person 1 pays $40 + $8 = $48, person 2 pays $20 + $4 = $24. Apps can split by item ordered. For fairness, agree on the tip percentage beforehand. Some people don't want to subsidize expensive items ordered by others; discuss expectations before ordering.",
    },
    {
      question: "What if the bill already includes a service charge?",
      answer: "Check your bill carefully. Service charge (automatic gratuity) is already included and equals the tip. You don't need to add another tip. However, you may choose to add a small amount (5-10%) if service was exceptional. This is common for large groups (usually 8+ people). Credit card processing may show a line for additional tip after a service charge has been added; leave it blank or add a nominal amount. In some countries, service is always included in the bill, and tipping is not customary. When traveling internationally, ask about local tipping customs to avoid embarrassment.",
    },
    {
      question: "What if I receive bad service?",
      answer: "Tipping less (10% instead of 18%) is appropriate for poor service, but communicate with management. Common issues: slow service, incorrect orders, inattentive staff. Try to distinguish between service failures and kitchen delays. Give servers a chance to correct mistakes. If issues persist, speak to a manager before paying. Leaving no tip or a very low tip should be reserved for genuinely terrible service (rude behavior, extreme neglect). Remember that servers often deal with difficult customers and may be affected by kitchen delays beyond their control. A tip of 10-15% acknowledges their effort while expressing dissatisfaction. Always be respectful; servers work hard and rely on tips.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/TireSizeCalculator")),
  slug: "tire-size-calculator",
  title: "Tire Size Calculator",
  shortTitle: "Tire Size",
  description: "Calculate tire dimensions and compare tire sizes",
  category: "other",
  icon: "🛞",
  keywords: ["tire size calculator", "tire dimensions", "tire comparison", "sidewall height"],
  popular: false,
  faqs: [
    {
      question: "What does each number in a tire size like 225/45R17 mean?",
      answer:
        "225 is the tire width in millimeters (measured sidewall to sidewall when properly inflated). 45 is the aspect ratio—the sidewall height as a percentage of width (45% of 225mm = 101.25mm). R means radial construction (standard since the 1970s). 17 is the wheel rim diameter in inches where the tire mounts. So a 225/45R17 is a 225mm-wide tire with 101.25mm sidewall height on a 17-inch rim. Understanding this helps identify compatible replacements and assess how tire changes affect overall diameter and handling.",
    },
    {
      question: "How do tire size changes affect my speedometer accuracy?",
      answer:
        "Speedometer accuracy depends on tire diameter (revolutions per mile). Larger diameter tires rotate fewer times per mile, potentially causing speedometers to read slower than actual speed. Conversely, smaller diameter tires cause faster readings. A change from 225/45R17 to 225/50R17 (increased sidewall) increases overall diameter by about 1.1%, reducing revolutions per mile, making the speedometer read approximately 1.1% slow. Large changes (5%+) noticeably affect speedometer, fuel economy calculations, and gear ratios. Most vehicle manufacturers recommend staying within 3% of original overall tire diameter to maintain accuracy.",
    },
    {
      question: "Can I use a different tire size than what the manufacturer recommends?",
      answer:
        "Tire size changes must fit your vehicle's wheels and suspension without rubbing. Wider tires may contact fenders, especially on lowered vehicles. Taller tires increase overall height and may rub on fenders or suspension at full compression (bumps). Smaller tires can foul suspension components. The manufacturer specifies an approved size range. Tire shops have fitment tools to check compatibility. Staying within 3% of original overall diameter minimizes speedometer, handling, and drivability issues. Larger or wider than factory is possible if everything fits properly, but always verify before purchasing to avoid returns and installation issues.",
    },
    {
      question: "Why would I choose a higher or lower aspect ratio?",
      answer:
        "Aspect ratio affects ride comfort, handling, and appearance. Lower aspect ratios (35-40%) provide sportier handling and better response—preferred for performance and sports cars. Higher aspect ratios (50-60%) offer more cushion and a smoother ride over rough roads—preferred for comfort-focused vehicles and off-road use. Lower aspect ratios have stiffer sidewalls, which improve steering feel but transmit more road noise. Higher aspect ratios have softer sidewalls, absorbing bumps better but providing less precise steering. Winter driving often uses higher aspect ratios for better flex in cold conditions. Performance driving uses lower aspect ratios.",
    },
    {
      question: "What is the load and speed rating on tire sidewalls?",
      answer:
        "Load rating (numbers like 101, 104, 110) indicates the maximum weight the tire can safely support. Each tire must support a portion of the vehicle's weight plus cargo. Speed rating (letters like H, V, W, Y) indicates the maximum speed the tire is rated for: H = 130 mph, V = 149 mph, W = 168 mph, Y = 186+ mph. A 225/45R17 101W means it can carry 1819 lbs maximum and reach 168 mph safely. Never use a tire with lower load or speed ratings than the original specification—it can fail under normal driving conditions or at highway speeds. Always verify these ratings match or exceed original equipment specifications when replacing tires.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/UnitConverterCalculator")),
  slug: "unit-converter",
  title: "Unit Converter",
  shortTitle: "Unit Converter",
  description: "Convert between units of length, weight, volume, temperature, area, speed, and energy",
  category: "other",
  icon: "📏",
  keywords: ["unit converter", "metric conversion", "length converter", "weight converter", "temperature converter", "area converter", "speed converter", "energy converter"],
  popular: true,
  faqs: UNIT_CONVERTER_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/VoltageDropCalculator")),
  slug: "voltage-drop-calculator",
  title: "Voltage Drop Calculator",
  shortTitle: "Voltage Drop",
  description: "Calculate voltage drop in electrical wiring by distance and gauge",
  category: "other",
  icon: "⚡",
  keywords: ["voltage drop calculator", "wire gauge", "electrical voltage", "NEC"],
  popular: false,
  faqs: [
    {
      question: "What is voltage drop and why should I care about it?",
      answer:
        "Voltage drop is the loss of electrical voltage as current travels through a wire due to the wire's resistance. A 120V circuit over a long distance might deliver only 115V at the end, losing 5V to resistance. This matters because devices need sufficient voltage to operate correctly. Lights dim, motors run slower and hotter, and electronics may malfunction or be damaged. The National Electrical Code limits voltage drop to 3% on branch circuits and 5% combined, ensuring equipment receives adequate voltage for proper operation and safety.",
    },
    {
      question: "How do I choose the correct wire gauge to prevent excessive voltage drop?",
      answer:
        "Use this calculator to determine voltage drop for your specific current, distance, and wire gauge. If drop exceeds 3%, try the next larger gauge (smaller AWG number). For example, if 12 AWG exceeds 3%, try 10 AWG. Larger gauges have lower resistance and less voltage drop. For a 20-amp, 120V circuit over 100 feet, 12 AWG is usually adequate. For 30 amps over 50 feet, 8 AWG might be needed. Always verify with local electrical code and consult a licensed electrician for critical applications. Oversizing wire is safer than undersizing.",
    },
    {
      question: "What does AWG mean and why are larger gauges smaller numbers?",
      answer:
        "AWG stands for American Wire Gauge. Confusingly, larger wires have smaller numbers: 14 AWG is thin, 0000 AWG is very thick. The scale is logarithmic. Each reduction of 3 in gauge approximately doubles the cross-sectional area and halves the resistance. So 12 AWG is roughly twice the cross-section and half the resistance of 14 AWG. This backward convention originated from manufacturing but causes confusion. Remember: higher numbers = thinner wire = higher resistance. Always check the gauge number when selecting wire; don't confuse it with wire diameter.",
    },
    {
      question: "How does temperature affect voltage drop?",
      answer:
        "Wire resistance increases with temperature. Copper wire increases resistance by about 0.4% per degree Fahrenheit above the standard 68°F reference. In hot summer conditions (95°F), wire resistance is noticeably higher, increasing voltage drop. This means circuits in attics, conduits in direct sun, or enclosed spaces have higher actual drop than calculations suggest. Proper ventilation and spacing of wires in conduits helps manage heat. Underground runs and conduit routing should consider thermal effects. For precise calculations in extreme conditions, consult electrical engineering tables for temperature-adjusted resistance values.",
    },
    {
      question: "What is the difference between copper and aluminum wire for voltage drop?",
      answer:
        "Copper has lower resistivity (about 10.37 microohms per cm) than aluminum (about 16.78 microohms per cm). Copper wire has 35-40% lower resistance than aluminum wire of the same gauge. This means aluminum requires larger gauges to achieve the same voltage drop as copper. Aluminum wire is cheaper but less common in residential use due to corrosion and connection issues. In commercial and industrial applications, aluminum is sometimes used for large runs (2 AWG and larger). If using aluminum, consult resistance tables and increase gauge compared to copper. Mixed copper-aluminum connections require special precautions to prevent corrosion.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/other/WindChillCalculator")),
  slug: "wind-chill-calculator",
  title: "Wind Chill Calculator",
  shortTitle: "Wind Chill",
  description: "Calculate wind chill factor and frostbite risk from temperature and wind speed",
  category: "other",
  icon: "❄️",
  keywords: ["wind chill", "frostbite risk", "cold weather", "temperature wind", "weather safety"],
  popular: true,
  faqs: [
    {
      question: "What is wind chill and why does it matter?",
      answer: "Wind chill is the apparent temperature felt by exposed skin due to the combined effect of temperature and wind speed. Wind accelerates heat loss from skin, making it feel colder than the actual air temperature. For example, 0°F with 20 mph wind creates a wind chill of about -20°F. Wind chill doesn't affect indoor temperatures or objects, only exposed skin. It matters for outdoor safety because it determines how quickly frostbite can develop. People planning outdoor activities need to account for wind chill to dress appropriately and limit exposure time.",
    },
    {
      question: "At what wind chill is frostbite risk highest?",
      answer: "Frostbite risk increases dramatically below -20°F wind chill. At -20°F, frostbite can develop within 30 minutes on exposed skin. At -35°F, frostbite occurs within 10 minutes. Below -50°F, frostbite can occur within 5 minutes. At wind chills above 0°F, frostbite risk is very low even with prolonged exposure. Windproof, insulated clothing significantly reduces risk. Watch for warning signs: numbness, white or grayish-yellow skin, or tingling as skin rewarms. Severe frostbite can cause permanent tissue damage, so prevention through proper clothing and limiting exposure is critical.",
    },
    {
      question: "How is wind chill calculated?",
      answer: "The National Weather Service uses the Rothfusz regression formula: Wind Chill = 35.74 + 0.6215T - 35.75V^0.16 + 0.4275T×V^0.16, where T is temperature in Fahrenheit and V is wind speed in mph. The formula applies only when wind speed exceeds 3 mph and temperature is below 50°F. The exponent 0.16 (16th root of wind speed) reflects how wind chill increases rapidly with light winds but levels off at higher speeds. Wind chill can only be calculated in Fahrenheit; conversion between Fahrenheit and Celsius first.",
    },
    {
      question: "Why doesn't wind chill apply above 50°F?",
      answer: "Wind chill calculations only apply when temperature is below 50°F and wind speed exceeds 3 mph because wind's cooling effect becomes insignificant above 50°F. Above 50°F, the human body regulates temperature effectively, and factors like humidity and sun exposure matter more than wind. Additionally, above 50°F, wind can actually feel refreshing rather than dangerous. The wind chill concept is specifically designed for cold-weather safety warnings, making it irrelevant in warmer conditions.",
    },
    {
      question: "How can I protect myself from wind chill and frostbite?",
      answer: "Wear multiple layers of windproof, insulated clothing. Cover all exposed skin with a hat, scarf, gloves, and warm socks. Keep inner layers dry because moisture accelerates heat loss. Limit time outdoors in extreme wind chill conditions, especially below -20°F. Take breaks indoors to warm up and check for frostbite signs. Avoid touching cold metal or wet surfaces with bare skin. Keep moving to maintain body heat. Be aware of your risk: young children, elderly people, and those with circulation problems face higher frostbite risk. Watch weather forecasts and adjust outdoor plans accordingly.",
    },
  ],
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/CapacitorCalculator")),
  slug: "capacitor-calculator",
  title: "Capacitor Calculator",
  shortTitle: "Capacitor",
  description: "Calculate charge and energy in a capacitor",
  category: "physics",
  icon: "🔋",
  keywords: ["capacitor", "charge", "capacitance", "energy"],
  faqs: CAPACITOR_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/CentripetalForceCalculator")),
  slug: "centripetal-force-calculator",
  title: "Centripetal Force Calculator",
  shortTitle: "Centripetal Force",
  description: "Calculate centripetal force and acceleration for circular motion",
  category: "physics",
  icon: "🌀",
  keywords: ["centripetal", "circular motion", "force", "acceleration"],
  faqs: CENTRIPETAL_FORCE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/CoulombsLawCalculator")),
  slug: "coulombs-law-calculator",
  title: "Coulomb's Law Calculator",
  shortTitle: "Coulomb's Law",
  description: "Calculate electrostatic force between two charges",
  category: "physics",
  icon: "⚛️",
  keywords: ["Coulomb's law", "electrostatic", "charge", "force"],
  faqs: COULOMBS_LAW_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/DensityCalculator")),
  slug: "density-calculator",
  title: "Density Calculator",
  shortTitle: "Density",
  description: "Calculate density from mass and volume",
  category: "physics",
  icon: "⚖️",
  keywords: ["density", "mass", "volume", "material"],
  faqs: DENSITY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/DopplerEffectCalculator")),
  slug: "doppler-effect-calculator",
  title: "Doppler Effect Calculator",
  shortTitle: "Doppler Effect",
  description: "Calculate frequency shift due to Doppler effect",
  category: "physics",
  icon: "🚑",
  keywords: ["Doppler", "frequency shift", "sound", "wave"],
  faqs: DOPPLER_EFFECT_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/ElectricFieldCalculator")),
  slug: "electric-field-calculator",
  title: "Electric Field Calculator",
  shortTitle: "Electric Field",
  description: "Calculate electric field from charge and distance",
  category: "physics",
  icon: "🌩️",
  keywords: ["electric field", "charge", "distance", "voltage"],
  faqs: ELECTRIC_FIELD_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/ElectricPowerCalculator")),
  slug: "electric-power-calculator",
  title: "Electric Power Calculator",
  shortTitle: "Electric Power",
  description: "Calculate power from voltage and current",
  category: "physics",
  icon: "⚡",
  keywords: ["power", "voltage", "current", "watt"],
  faqs: ELECTRIC_POWER_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/EscapeVelocityCalculator")),
  slug: "escape-velocity-calculator",
  title: "Escape Velocity Calculator",
  shortTitle: "Escape Velocity",
  description: "Calculate escape velocity from planetary mass and radius",
  category: "physics",
  icon: "🛸",
  keywords: ["escape velocity", "gravitational", "planet", "space"],
  faqs: ESCAPE_VELOCITY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/ForceCalculator")),
  slug: "force-calculator",
  title: "Force Calculator",
  shortTitle: "Force",
  description: "Calculate force from mass and acceleration",
  category: "physics",
  icon: "💪",
  keywords: ["force", "Newton's laws", "acceleration", "physics"],
  faqs: FORCE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/FreeFallCalculator")),
  slug: "free-fall-calculator",
  title: "Free Fall Calculator",
  shortTitle: "Free Fall",
  description: "Calculate free fall time, velocity, and distance",
  category: "physics",
  icon: "🪂",
  keywords: ["free fall", "gravity", "kinematics", "velocity"],
  faqs: FREE_FALL_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/FrequencyCalculator")),
  slug: "frequency-calculator",
  title: "Frequency Calculator",
  shortTitle: "Frequency",
  description: "Calculate frequency from wavelength and wave speed",
  category: "physics",
  icon: "📻",
  keywords: ["frequency", "wavelength", "wave", "hertz"],
  faqs: FREQUENCY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/GravitationalForceCalculator")),
  slug: "gravitational-force-calculator",
  title: "Gravitational Force Calculator",
  shortTitle: "Gravitational Force",
  description: "Calculate gravitational force between two masses",
  category: "physics",
  icon: "🌍",
  keywords: ["gravity", "gravitational force", "Newton", "physics"],
  faqs: GRAVITATIONAL_FORCE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/HalfLifeCalculator")),
  slug: "half-life-calculator",
  title: "Half-Life Calculator",
  shortTitle: "Half-Life",
  description: "Calculate radioactive decay using half-life formula",
  category: "physics",
  icon: "☢️",
  keywords: ["half-life", "radioactive decay", "nuclear", "dating"],
  faqs: HALF_LIFE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/HeatCapacityCalculator")),
  slug: "heat-capacity-calculator",
  title: "Heat Capacity Calculator",
  shortTitle: "Heat Capacity",
  description: "Calculate heat energy from mass, specific heat, and temperature change",
  category: "physics",
  icon: "🔥",
  keywords: ["heat", "specific heat capacity", "temperature", "thermodynamics"],
  faqs: HEAT_CAPACITY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/IdealGasLawCalculator")),
  slug: "ideal-gas-law-calculator",
  title: "Ideal Gas Law Calculator",
  shortTitle: "Ideal Gas Law",
  description: "Calculate gas properties using the ideal gas law (PV = nRT)",
  category: "physics",
  icon: "💨",
  keywords: ["ideal gas law", "pressure", "volume", "temperature"],
  faqs: IDEAL_GAS_LAW_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/KineticEnergyCalculator")),
  slug: "kinetic-energy-calculator",
  title: "Kinetic Energy Calculator",
  shortTitle: "Kinetic Energy",
  description: "Calculate kinetic energy of moving objects",
  category: "physics",
  icon: "⚡",
  keywords: ["kinetic energy", "energy", "physics", "motion"],
  faqs: KINETIC_ENERGY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/MomentumCalculator")),
  slug: "momentum-calculator",
  title: "Momentum Calculator",
  shortTitle: "Momentum",
  description: "Calculate momentum and impulse from mass and velocity",
  category: "physics",
  icon: "🎱",
  keywords: ["momentum", "impulse", "physics", "collision"],
  faqs: MOMENTUM_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/OhmsLawCalculator")),
  slug: "ohms-law-calculator",
  title: "Ohm's Law Calculator",
  shortTitle: "Ohm's Law",
  description: "Calculate voltage, current, resistance, and power",
  category: "physics",
  icon: "💡",
  keywords: ["Ohm's law", "voltage", "current", "resistance"],
  faqs: OHMS_LAW_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/PhotonEnergyCalculator")),
  slug: "photon-energy-calculator",
  title: "Photon Energy Calculator",
  shortTitle: "Photon Energy",
  description: "Calculate photon energy from wavelength or frequency",
  category: "physics",
  icon: "💫",
  keywords: ["photon", "energy", "light", "wavelength", "frequency"],
  faqs: PHOTON_ENERGY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/PotentialEnergyCalculator")),
  slug: "potential-energy-calculator",
  title: "Potential Energy Calculator",
  shortTitle: "Potential Energy",
  description: "Calculate gravitational potential energy at a given height",
  category: "physics",
  icon: "⛰️",
  keywords: ["potential energy", "gravitational energy", "height", "physics"],
  faqs: POTENTIAL_ENERGY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/PressureCalculator")),
  slug: "pressure-calculator",
  title: "Pressure Calculator",
  shortTitle: "Pressure",
  description: "Calculate pressure and convert between pressure units",
  category: "physics",
  icon: "🌡️",
  keywords: ["pressure", "force", "area", "units"],
  faqs: PRESSURE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/ProjectileMotionCalculator")),
  slug: "projectile-motion-calculator",
  title: "Projectile Motion Calculator",
  shortTitle: "Projectile Motion",
  description: "Calculate projectile motion trajectory, range, and velocity",
  category: "physics",
  icon: "🎯",
  keywords: ["projectile motion", "physics calculator", "trajectory", "kinematics"],
  faqs: PROJECTILE_MOTION_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/RelativisticKineticEnergyCalculator")),
  slug: "relativistic-kinetic-energy-calculator",
  title: "Relativistic Kinetic Energy Calculator",
  shortTitle: "Relativistic KE",
  description: "Calculate kinetic energy at relativistic speeds using E = (γ-1)mc²",
  category: "physics",
  icon: "🚀",
  keywords: ["relativistic", "kinetic energy", "special relativity", "Einstein"],
  faqs: RELATIVISTIC_KE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/ResistorCalculator")),
  slug: "resistor-calculator",
  title: "Resistor Calculator",
  shortTitle: "Resistor",
  description: "Calculate total resistance in series and parallel circuits",
  category: "physics",
  icon: "🔌",
  keywords: ["resistor", "resistance", "series", "parallel", "circuit"],
  faqs: RESISTOR_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/SoundIntensityCalculator")),
  slug: "sound-intensity-calculator",
  title: "Sound Intensity Calculator",
  shortTitle: "Sound Intensity",
  description: "Calculate decibel level from sound intensity",
  category: "physics",
  icon: "🔊",
  keywords: ["sound intensity", "decibels", "acoustics", "dB"],
  faqs: SOUND_INTENSITY_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/TemperatureConverterCalculator")),
  slug: "temperature-converter-calculator",
  title: "Temperature Converter Calculator",
  shortTitle: "Temperature Converter",
  description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine",
  category: "physics",
  icon: "🌡️",
  keywords: ["temperature", "converter", "Celsius", "Fahrenheit", "Kelvin"],
  faqs: TEMPERATURE_CONVERTER_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/ThermalExpansionCalculator")),
  slug: "thermal-expansion-calculator",
  title: "Thermal Expansion Calculator",
  shortTitle: "Thermal Expansion",
  description: "Calculate thermal expansion of materials with temperature change",
  category: "physics",
  icon: "📏",
  keywords: ["thermal expansion", "temperature", "coefficient", "material"],
  faqs: THERMAL_EXPANSION_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/TorqueCalculator")),
  slug: "torque-calculator",
  title: "Torque Calculator",
  shortTitle: "Torque",
  description: "Calculate torque from force, lever arm, and angle",
  category: "physics",
  icon: "🔧",
  keywords: ["torque", "rotational force", "lever", "physics"],
  faqs: TORQUE_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/WaveSpeedCalculator")),
  slug: "wave-speed-calculator",
  title: "Wave Speed Calculator",
  shortTitle: "Wave Speed",
  description: "Calculate wave speed from frequency and wavelength",
  category: "physics",
  icon: "〰️",
  keywords: ["wave speed", "velocity", "frequency", "wavelength"],
  faqs: WAVE_SPEED_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/physics/WavelengthCalculator")),
  slug: "wavelength-calculator",
  title: "Wavelength Calculator",
  shortTitle: "Wavelength",
  description: "Calculate wavelength from frequency and wave speed",
  category: "physics",
  icon: "🌊",
  keywords: ["wavelength", "frequency", "wave", "light"],
  faqs: WAVELENGTH_FAQS,
  dateModified: "2026-04-09",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/AluminumValueCalculator")),
  ...metal,
  title: "Aluminum Value Calculator",
  shortTitle: "Aluminum Value",
  category: "metals",
  popular: false,
  faqs: ALUMINUM_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/CopperValueCalculator")),
  ...metal,
  title: "Copper Value Calculator",
  shortTitle: "Copper Value",
  category: "metals",
  popular: true,
  faqs: COPPER_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/GoldValueCalculator")),
  ...metal,
  title: "Gold Value Calculator",
  shortTitle: "Gold Value",
  category: "metals",
  popular: true,
  faqs: GOLD_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/LeadValueCalculator")),
  ...metal,
  title: "Lead Value Calculator",
  shortTitle: "Lead Value",
  category: "metals",
  popular: false,
  faqs: LEAD_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/NickelValueCalculator")),
  ...metal,
  title: "Nickel Value Calculator",
  shortTitle: "Nickel Value",
  category: "metals",
  popular: false,
  faqs: NICKEL_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/PalladiumValueCalculator")),
  ...metal,
  title: "Palladium Value Calculator",
  shortTitle: "Palladium Value",
  category: "metals",
  popular: false,
  faqs: PALLADIUM_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/PlatinumValueCalculator")),
  ...metal,
  title: "Platinum Value Calculator",
  shortTitle: "Platinum Value",
  category: "metals",
  popular: false,
  faqs: PLATINUM_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/SilverValueCalculator")),
  ...metal,
  title: "Silver Value Calculator",
  shortTitle: "Silver Value",
  category: "metals",
  popular: true,
  faqs: SILVER_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/metals/ZincValueCalculator")),
  ...metal,
  title: "Zinc Value Calculator",
  shortTitle: "Zinc Value",
  category: "metals",
  popular: false,
  faqs: ZINC_VALUE_FAQS,
  dateModified: "2026-04-10",
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/BTUCalculator")),
  slug: "btu-calculator",
  title: "HVAC BTU Calculator",
  shortTitle: "HVAC BTU",
  description: "Calculate required BTU for heating and cooling HVAC systems",
  category: "construction",
  icon: "❄️",
  keywords: ["HVAC", "BTU", "air conditioning", "heating", "cooling"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How is BTU calculated for a room?",
      answer: "Start with 20 BTU per square foot as a baseline. For a 300 sqft room, that's 6,000 BTU. Adjust for insulation quality (poor +25%, good -15%), sun exposure (high +15%), and climate zone. Each window adds about 500 BTU. Example: 6,000 base + (6,000 {'×'} 0.25 poor insulation) + 1,500 (3 windows) = 8,500 BTU needed.",
    },
    {
      question: "What is a refrigeration ton and how does it relate to BTU?",
      answer: "A refrigeration ton equals 12,000 BTU per hour of cooling capacity. AC units are sized in tons: 0.5 ton (6,000 BTU), 1 ton (12,000 BTU), 1.5 tons (18,000 BTU), 2 tons (24,000 BTU), etc. A room needing 18,000 BTU requires a 1.5-ton AC unit. Tonnage represents the unit's capacity to cool or heat.",
    },
    {
      question: "What happens if my AC unit is oversized or undersized?",
      answer: "Oversized units cool too quickly and short-cycle (turn on/off frequently), reducing efficiency and humidity control. Undersized units run constantly and can't maintain temperature. Proper sizing achieves efficiency and comfort. A unit should be selected to meet or slightly exceed calculated BTU needs, not drastically oversized.",
    },
    {
      question: "How does insulation quality affect HVAC sizing?",
      answer: "Poor insulation increases heating/cooling load by 25%. Average insulation is the baseline (no adjustment). Good insulation reduces load by 15%. Excellent insulation reduces by 30%. Upgrading insulation from poor to good effectively reduces HVAC capacity needed by 40%, saving significant money on equipment and energy costs.",
    },
    {
      question: "What is SEER and why does it matter?",
      answer: "SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency on a scale of 13-25+. Higher SEER means lower operating costs. A SEER 16 unit uses about 20% less energy than SEER 13. Most modern codes require minimum SEER 13-14. Investing in higher SEER saves money over time through reduced energy bills.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/DeckCalculator")),
  slug: "deck-calculator",
  title: "Deck Calculator",
  shortTitle: "Deck",
  description: "Calculate deck materials and costs for different wood types",
  category: "construction",
  icon: "🏗️",
  keywords: ["deck", "boards", "joists", "pressure-treated", "composite"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is the difference between pressure-treated, cedar, and composite decking?",
      answer: "Pressure-treated is affordable ($0.80-1.00/bf) and rot-resistant but requires periodic sealing. Cedar is attractive and natural ($1.50-2.00/bf) but needs annual staining and is expensive. Composite is maintenance-free and long-lasting ($2.00-3.00/bf) but costs more upfront. Choose based on budget and maintenance willingness.",
    },
    {
      question: "What joist spacing should I use for my deck?",
      answer: "Use 12 inches on center (OC) for maximum strength and minimal bounce. 16 inches OC is standard and adequate for most residential decks. 24 inches OC saves money but results in more bounce and supports lighter loads. Spacing affects deflection and load capacity; always follow local building codes.",
    },
    {
      question: "How deep should posts be buried?",
      answer: "Posts should be on concrete piers set 2-3 feet deep (below frost line). The frost line depth varies by region; check local building codes. Proper depth prevents heaving in winter and ensures stability. Posts should rest on gravel for drainage. Never set posts directly on soil without concrete.",
    },
    {
      question: "What does board feet mean and how do I calculate it?",
      answer: "Board feet (bf) is lumber measurement: 1 bf = 1 ft long x 1 ft wide x 1 inch thick. To calculate: (length in ft {'×'} width in inches {'×'} thickness in inches) / 12 = board feet. For a 10 ft long, 6 inch wide, 1 inch thick board: (10 {'×'} 6 {'×'} 1) / 12 = 5 bf.",
    },
    {
      question: "Do I need a deck permit and building inspection?",
      answer: "Most jurisdictions require permits for decks over 12-24 inches high or larger than 200 sqft. Permits ensure proper construction, load capacity, and safety. Inspections verify joist spacing, post depth, handrails, and code compliance. Unpermitted decks may need to be removed or rebuilt. Always check local regulations before building.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/DrywallCalculator")),
  slug: "drywall-calculator",
  title: "Drywall Calculator",
  shortTitle: "Drywall",
  description: "Calculate drywall sheets, compound, tape, and hardware for interior walls",
  category: "construction",
  icon: "🪜",
  keywords: ["drywall", "sheetrock", "joint compound", "tape", "wall"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How many sheets of drywall do I need?",
      answer: "Calculate total wall area (perimeter {'×'} height), subtract door and window areas (approx 21 sqft per door, 15 sqft per window), then divide by sheet area. For example, 320 sqft drywall area divided by 32 sqft (4x8 sheet) = 10 sheets. Always add 5-10% for waste and mistakes.",
    },
    {
      question: "What size drywall sheet should I use?",
      answer: "4x8 foot sheets (32 sqft) are most common and affordable. 4x10 sheets (40 sqft) reduce seams but are heavier. 4x12 sheets (48 sqft) minimize seams further but are the heaviest. Use 1/2-inch thickness for standard walls, 5/8-inch for fire-rated walls. Moisture-resistant drywall is essential for bathrooms and kitchens.",
    },
    {
      question: "How much joint compound do I need for three coats?",
      answer: "Plan on approximately 30 sqft per gallon for one coat. For three complete coats (typical for professional finish), you need roughly 3 gallons per 100 sqft, or 1 gallon per 30-35 sqft. Always add extra for practice and mistakes. One 5-gallon bucket covers about 150-200 sqft of seams.",
    },
    {
      question: "What is the difference between paper and mesh drywall tape?",
      answer: "Paper tape is cheaper ($5-8 per roll) but requires skill to apply properly without air bubbles. Mesh tape is easier for beginners ($8-12 per roll), self-adhesive, and resists air bubbles better. Both work well; choice depends on experience and preference. Tape width is typically 2 inches.",
    },
    {
      question: "How many coats of joint compound are needed?",
      answer: "Standard finishing requires three coats: first coat (setting coat) fills seams and covers fasteners, second coat (topping coat) smooths and extends beyond first coat, third coat (finish coat) smooths further and is lightly sanded. Some light areas may need a fourth thin coat. Each coat must dry completely before the next application.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/FenceCalculator")),
  slug: "fence-calculator",
  title: "Fence Calculator",
  shortTitle: "Fence",
  description: "Calculate fence materials and costs for wood, chain-link, and vinyl fencing",
  category: "construction",
  icon: "🪵",
  keywords: ["fence", "post", "picket", "perimeter", "property boundary"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How many posts do I need for my fence?",
      answer: "The number of posts equals (perimeter divided by post spacing) plus 1. For example, a 200 ft perimeter with 6 ft spacing needs (200 {'/'} 6) + 1 = 34 posts. Spacing of 6-8 ft is standard; narrower spacing provides better support for taller fences.",
    },
    {
      question: "What is the proper post spacing for a fence?",
      answer: "Standard post spacing is 6-8 feet. Use 6 ft spacing for tall fences (6-8 ft) to ensure structural integrity. Use 8 ft spacing for shorter fences (4 ft) to save on materials. Post spacing affects how much fence sags over time and how resistant it is to wind and lateral forces.",
    },
    {
      question: "How deep should fence posts be buried?",
      answer: "Fence posts should be set 2-3 feet deep in concrete. The depth should be approximately 1/3 of the total post length. For a 6 ft tall fence, use an 8-9 ft post (2-3 ft underground, 6 ft above ground). Posts must be set in concrete below the frost line to prevent heaving in freezing climates.",
    },
    {
      question: "How do I choose between wood, chain-link, and vinyl fencing?",
      answer: "Wood is affordable and customizable but requires maintenance (staining, repairs). Chain-link is durable and low-maintenance but less attractive. Vinyl is maintenance-free and long-lasting but costs more upfront. Consider budget, climate, aesthetics, and willingness to maintain when choosing fence type.",
    },
    {
      question: "Do I need a permit to build a fence?",
      answer: "Most jurisdictions require permits for fences over 4-6 feet tall. Always verify property lines before building. Many areas have setback requirements (minimum distance from property line). HOA communities may have additional restrictions. Check local regulations before starting. Call 811 to locate underground utilities before digging.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/GravelCalculator")),
  slug: "gravel-calculator",
  title: "Gravel Calculator",
  shortTitle: "Gravel",
  description: "Calculate gravel, sand, and aggregate volume and weight needed for projects",
  category: "construction",
  icon: "⛰️",
  keywords: ["gravel", "stone", "aggregate", "sand", "landscape"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is a cubic yard and how do I calculate it?",
      answer: "A cubic yard is 27 cubic feet (3 feet {'×'} 3 feet {'×'} 3 feet). To calculate: multiply length {'×'} width {'×'} depth (all in feet), then divide by 27. For example, a 30 ft {'×'} 20 ft area with 4 inches (0.33 feet) depth = (30 {'×'} 20 {'×'} 0.33) / 27 = 7.4 cubic yards.",
    },
    {
      question: "How much gravel do I need for a driveway?",
      answer: "A typical driveway needs 4-6 inches of gravel base. Calculate cubic yards using length {'×'} width {'×'} depth (in feet) / 27. For a 12 ft {'×'} 30 ft driveway with 4 inches depth: (12 {'×'} 30 {'×'} 0.33) / 27 = 4.4 cubic yards. Order 5 cubic yards to account for settling and spreading loss.",
    },
    {
      question: "What is the difference between gravel, crushed stone, and sand?",
      answer: "Gravel is rounded pebbles, good for drainage. Crushed stone is angular and compacts better for stable bases. Sand is fine and used for foundations and drainage. All have different densities (gravel 1.4 t/cy, stone 1.5 t/cy, sand 1.3 t/cy). Choose based on purpose: drainage needs gravel, structural bases need crushed stone, fine work needs sand.",
    },
    {
      question: "How much does gravel weigh per cubic yard?",
      answer: "Gravel weighs approximately 1.4 tons per cubic yard. Crushed stone weighs 1.5 tons/cy. Sand weighs 1.3 tons/cy. Topsoil weighs 1.1 tons/cy. Weight varies by material moisture and density. Knowing weight is important for delivery truck capacity and labor requirements. Heavier materials require more delivery trips.",
    },
    {
      question: "Should I order extra gravel for settling and waste?",
      answer: "Yes, always order 10-15% extra. Materials settle and compact after spreading, reducing volume. Spreading and application cause some waste. Extra material covers settling and allows for future maintenance. For a 10 cubic yard project, order 11-12 cubic yards to ensure adequate coverage.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/InsulationCalculator")),
  slug: "insulation-calculator",
  title: "Insulation Calculator",
  shortTitle: "Insulation",
  description: "Calculate insulation needed by type and desired R-value",
  category: "construction",
  icon: "📐",
  keywords: ["insulation", "R-value", "thermal", "energy efficiency"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is an R-value and why does it matter?",
      answer: "R-value measures how well insulation resists heat transfer. Higher R-values provide better insulation. Walls typically need R-13 to R-21, attics R-38 to R-60, depending on climate. Building codes specify minimum R-values by location. R-values are additive; two layers of R-13 create R-26. Better insulation reduces heating/cooling costs and improves comfort.",
    },
    {
      question: "What is the difference between fiberglass, blown-in, and spray foam insulation?",
      answer: "Fiberglass batts are affordable ($0.50-1.00/sqft) and easy to install but leave air gaps. Blown-in cellulose ($1.00-1.50/sqft) fills irregular spaces and seals better. Spray foam ($1.50-2.50/sqft) provides excellent air-sealing and moisture resistance but is expensive. Choose based on location, budget, and air-sealing needs.",
    },
    {
      question: "How do I know what R-value I need for my area?",
      answer: "R-value requirements vary by climate zone and building location. The U.S. Department of Energy provides maps showing recommended R-values. Cold climates need higher R-values (R-38 to R-60 in attics). Moderate climates need R-19 to R-30. Check local building codes for minimum requirements in your area.",
    },
    {
      question: "Can I stack insulation layers to achieve higher R-values?",
      answer: "Yes, R-values are additive. Two layers of R-13 batt insulation create R-26 total. However, ensure proper ventilation; some combinations trap moisture and cause mold. Consult building codes before stacking different insulation types. Spray foam and rigid board typically don't need additional insulation.",
    },
    {
      question: "Is professional installation necessary for insulation?",
      answer: "Fiberglass batts can be DIY-installed if done carefully (wear protection, cut accurately). Blown-in and spray foam require professional equipment and expertise for optimal results. Professional installation ensures proper coverage, density, and air-sealing. The cost difference is often worth it for performance and warranty. Improper installation reduces effectiveness significantly.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/MulchCalculator")),
  slug: "mulch-calculator",
  title: "Mulch Calculator",
  shortTitle: "Mulch",
  description: "Calculate mulch needed for landscaping and compare bulk vs. bagged options",
  category: "construction",
  icon: "🍂",
  keywords: ["mulch", "landscape", "ground cover", "gardening", "yard"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How much mulch should I apply to my garden beds?",
      answer: "Standard mulch depth is 2-3 inches. Three inches provides the best weed suppression and moisture retention. Shallower applications (1-2 inches) provide basic coverage but may allow weeds through. Deeper mulch (4+ inches) can suffocate shallow-rooted plants. Keep mulch 6 inches away from tree trunks to prevent rot and pest issues.",
    },
    {
      question: "Is bulk or bagged mulch cheaper?",
      answer: "For large areas (over 5-10 cubic yards), bulk is usually cheaper per cubic yard. Bulk mulch costs less per unit but requires delivery. Bagged mulch is convenient for small areas and doesn't require storage. For a 10 cubic yard project, bulk is often $30-50 cheaper than bagged. Compare both options for your specific quantity.",
    },
    {
      question: "How do I calculate the amount of mulch needed?",
      answer: "Multiply length {'×'} width {'×'} depth (all in feet), then divide by 27 to get cubic yards. For example, a 30 ft {'×'} 20 ft area with 3 inches depth: (30 {'×'} 20 {'×'} 0.25) / 27 = 5.6 cubic yards. Always add 10% extra for settling and coverage gaps.",
    },
    {
      question: "What types of mulch are available and which should I choose?",
      answer: "Hardwood mulch (shredded wood) lasts 3-5 years and is most common. Cedar/pine smells great but breaks down faster (2-3 years). Colored mulch is dyed and long-lasting (3-5 years). Bark mulch is natural and attractive. Rubber mulch is durable but expensive. Choose based on longevity, appearance, and budget.",
    },
    {
      question: "How often should I replace or refresh mulch?",
      answer: "Mulch breaks down over time as it decomposes and adds organic matter to soil. Top-dress with 1-2 inches of fresh mulch annually to maintain depth. Complete mulch replacement is needed every 2-4 years depending on type and climate. Hardwood and colored mulch lasts longer than cedar. Regular refreshing maintains appearance and weed suppression.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/PaintCalculator")),
  slug: "paint-calculator",
  title: "Paint Calculator",
  shortTitle: "Paint",
  description: "Calculate interior paint needed for rooms with doors and windows",
  category: "construction",
  icon: "🎨",
  keywords: ["paint", "interior", "room", "wall", "home improvement"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How do I calculate the square footage of walls in a room?",
      answer: "Calculate perimeter (2 {'×'} (length + width)), then multiply by ceiling height. For a 20x15 room with 8-foot ceilings: perimeter is 70 feet, so wall area is 70 {'×'} 8 = 560 sqft. Subtract approximately 21 sqft per door and 15 sqft per window to avoid overordering paint.",
    },
    {
      question: "How many coats of paint do I need?",
      answer: "Most interior painting requires 2 coats for even coverage. One coat rarely provides adequate color uniformity and coverage. Some colors, especially light colors over dark walls, require 3 coats. Primer is a separate product applied first to new drywall, stains, or when changing colors dramatically.",
    },
    {
      question: "What does paint coverage mean?",
      answer: "Paint coverage (typically 300-400 sqft per gallon) indicates how much area one gallon of paint covers. Higher-quality paints cover more area and require fewer coats. Textured or porous surfaces require more paint than smooth surfaces. Always check the manufacturer's coverage on the can, as it varies by product.",
    },
    {
      question: "Which paint finish should I use for different rooms?",
      answer: "Use flat finish in bedrooms and living areas (hides imperfections but marks easily). Eggshell and satin are ideal for family living spaces (durable, subtle sheen). Semi-gloss is best for kitchens, bathrooms, and trim (highly durable and washable). Choose moisture-resistant paint for bathrooms and kitchens to prevent mildew.",
    },
    {
      question: "How much extra paint should I buy?",
      answer: "Always add 10-20% extra for touch-ups and future maintenance. Buying extra in the same batch ensures consistent color matching. Save leftover paint in airtight containers for up to 5 years. Store in a cool, dry location. Having extra paint available makes repairs and refreshes much easier over time.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/RoofingCalculator")),
  slug: "roofing-calculator",
  title: "Roofing Calculator",
  shortTitle: "Roofing",
  description: "Calculate roofing materials and costs based on roof pitch and dimensions",
  category: "construction",
  icon: "🏠",
  keywords: ["roofing", "shingles", "roof pitch", "materials", "home improvement"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How does roof pitch affect the amount of materials needed?",
      answer: "Roof pitch directly affects material quantity because steeper roofs have greater actual surface area than their horizontal footprint. A 6/12 pitch multiplies the area by 1.118, while a 12/12 pitch multiplies by 1.414. Always use the pitch-adjusted area, not just the horizontal dimensions, to order the correct amount of materials.",
    },
    {
      question: "What is a roofing square and why is it important?",
      answer: "A roofing square equals 100 square feet of roof area. Roofing materials are priced and estimated in squares. A 2,000 sqft roof is 20 squares. Most shingle bundles cover one-third of a square, so you need 3 bundles per square. Understanding squares helps you communicate with contractors and order materials accurately.",
    },
    {
      question: "How many shingle bundles do I need per square?",
      answer: "A standard roofing square (100 sqft) requires 3 bundles of asphalt shingles. Each bundle covers approximately 33 sqft. Always add 10-15% extra bundles for waste, repairs, and future touch-ups. Premium or architectural shingles may require more or fewer bundles depending on coverage rates.",
    },
    {
      question: "What is underlayment and is it necessary?",
      answer: "Underlayment is a water barrier installed under shingles to prevent water infiltration and extend roof life. It is essential in most climates and is often required by building codes. Synthetic underlayment is more durable than traditional felt. Plan on approximately 1 roll per 400 sqft of roof area.",
    },
    {
      question: "What should I budget for labor costs on a roofing project?",
      answer: "Labor typically accounts for 50-60% of total roofing costs, while materials are 40-50%. Professional installation ensures proper ventilation, flashing, and waterproofing. Always hire licensed, insured roofers. Get multiple quotes and ensure all labor quotes include underlayment, ridge cap, flashing, and proper installation techniques.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/SquareFootageCalculator")),
  slug: "square-footage-calculator",
  title: "Square Footage Calculator",
  shortTitle: "Square Footage",
  description: "Calculate area of rooms and spaces in multiple shapes and units",
  category: "construction",
  icon: "📐",
  keywords: ["square footage", "area", "room size", "flooring", "paint calculator"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How do I calculate square footage for a rectangular room?",
      answer: "For a rectangular room, multiply length by width. For example, a room that is 20 feet long and 15 feet wide is 300 square feet (20 {'×'} 15 = 300 sqft). Always measure in feet for accurate results.",
    },
    {
      question: "How is square footage used for cost estimation?",
      answer: "Once you know the square footage, multiply by the cost per square foot to get the total project cost. For example, if flooring costs $8 per square foot and your room is 300 sqft, the total cost would be $2,400 (300 {'×'} $8). Always add 10-15% for waste.",
    },
    {
      question: "How do I convert square feet to square meters?",
      answer: "Divide square feet by 10.764 to get square meters. For example, 300 sqft divided by 10.764 equals approximately 27.9 sqm. This conversion is useful for international comparisons or construction specifications.",
    },
    {
      question: "What is the difference between an acre and square feet?",
      answer: "One acre equals 43,560 square feet. Acres are used to measure land area, while square feet measure smaller spaces like rooms or buildings. For example, a property of 0.5 acres contains 21,780 square feet.",
    },
    {
      question: "How do I calculate square footage for irregular or L-shaped rooms?",
      answer: "For L-shaped or complex rooms, divide the space into simple rectangles, calculate the area of each rectangle separately, then add them together. Alternatively, subtract the cutout area from the full area. This method works for any irregular shape.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/StairsCalculator")),
  slug: "stairs-calculator",
  title: "Stairs Calculator",
  shortTitle: "Stairs",
  description: "Calculate stair dimensions and verify building code compliance",
  category: "construction",
  icon: "📐",
  keywords: ["stairs", "steps", "riser", "tread", "stringer"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How do I calculate the number of stairs needed?",
      answer: "Divide the total rise (in inches) by your desired riser height. For example, 9.5 feet (114 inches) divided by 7.5 inches per riser = 15.2, round up to 16 risers. Then divide total rise by 16 to get actual riser height: 114 {'/'} 16 = 7.13 inches. Uniform riser heights are essential for safety.",
    },
    {
      question: "What is the building code for riser and tread heights?",
      answer: "Building codes require risers between 7.0 and 7.75 inches (varies by jurisdiction). Treads must be at least 10 inches deep. All risers must be uniform; variation greater than 3/8 inch is a trip hazard. The formula riser + tread = 17-18 inches creates comfortable, safe stairs. Always check local codes before building.",
    },
    {
      question: "How do I calculate tread depth?",
      answer: "Use the formula: tread = 25 minus riser height. For a 7.5 inch riser, tread = 25 - 7.5 = 17.5 inches. Alternatively, use riser + tread = 17-18 inches: a 7.5 inch riser needs a 10-10.5 inch tread. Treads must be at least 10 inches to meet code. Deeper treads (11-12 inches) are more comfortable.",
    },
    {
      question: "What is a stringer and how do I calculate its length?",
      answer: "A stringer is the diagonal support beam (usually 2x10 or 2x12 lumber) that holds stairs. Calculate length using the Pythagorean theorem: √(total rise² + total run²). For stairs with 9.5 ft rise and 13.5 ft run: √(114² + 162²) = √(12,996 + 26,244) = 197.5 inches. Stringers typically support the stairs on walls or posts.",
    },
    {
      question: "Do I need a permit to build stairs?",
      answer: "Yes, stairs typically require permits and inspection in most jurisdictions. Building codes specify riser/tread heights, handrails (required for 4+ risers), and handrail strength (200 lbs force). Always check local codes and get approval before building. Inspectors verify safety and code compliance. Unpermitted work may need to be corrected or removed.",
    },
  ],
});

registerCalculator({
  component: lazy(() => import("@/calculators/construction/TileCalculator")),
  slug: "tile-calculator",
  title: "Tile Calculator",
  shortTitle: "Tile",
  description: "Calculate tiles, grout, and adhesive for floors and walls",
  category: "construction",
  icon: "🧱",
  keywords: ["tile", "flooring", "grout", "adhesive", "installation"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How many tiles do I need for my project?",
      answer: "Convert your floor area to square inches, then divide by the area of a single tile in square inches. For example, a 300 sqft floor (43,200 sq in) with 12x12 tiles (144 sq in each) needs 300 tiles. Always add 10-15% for waste, cuts, and future repairs.",
    },
    {
      question: "What should the grout joint width be?",
      answer: "Standard grout joint width is 1/8 inch (0.125 inches), which is a good compromise between strength and appearance. Tighter joints (1/16 inch) create a modern look but are harder to maintain. Wider joints (1/4 inch) hide imperfections and provide a rustic appearance. Choose based on your tile type and aesthetic preference.",
    },
    {
      question: "How much grout do I need?",
      answer: "You need roughly 5-15 lbs of grout per 100 sqft depending on tile size and joint width. Smaller tiles and wider joints require more grout. The calculator estimates based on standard joint widths. Always add extra for waste. Grout comes in 5-25 lb bags.",
    },
    {
      question: "What is the difference between tile adhesive and mortar?",
      answer: "Tile adhesive (thin-set or mastic) bonds tiles to the substrate (wall, floor, or backerboard). Modern installations use thin-set mortar, which is stronger and more water-resistant than mastic. Use thin-set for wet areas and exterior applications. Plan on 50-75 lbs per 100 sqft. Apply with a notched trowel at 45 degrees.",
    },
    {
      question: "Do I need to seal tiles and grout after installation?",
      answer: "Yes, sealing extends the life of your installation. Grout should always be sealed after curing (7-10 days) to prevent staining and moisture infiltration. Porous tiles (natural stone, some ceramics) should also be sealed. Use penetrating sealers for tiles and membrane sealers for grout. Resealing every 1-3 years maintains protection.",
    },
  ],
});

