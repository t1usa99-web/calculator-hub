// SEO data for all calculators - used for sitemap generation and metadata
export interface CalculatorSEOData {
  slug: string;
  title: string;
  description: string;
  category: "finance" | "math" | "health" | "other";
}

export const ALL_CALCULATORS: CalculatorSEOData[] = [
  // Finance (28)
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator",
    description: "Calculate monthly mortgage payments, interest, and amortization schedules",
    category: "finance",
  },
  {
    slug: "loan-calculator",
    title: "Loan Calculator",
    description: "Calculate loan payments, total interest, and payoff dates",
    category: "finance",
  },
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    description: "Calculate compound interest growth on your investments",
    category: "finance",
  },
  {
    slug: "investment-calculator",
    title: "Investment Calculator",
    description: "Project investment growth with regular contributions",
    category: "finance",
  },
  {
    slug: "retirement-calculator",
    title: "Retirement Calculator",
    description: "Plan your retirement savings and calculate if you're on track",
    category: "finance",
  },
  {
    slug: "auto-loan-calculator",
    title: "Auto Loan Calculator",
    description: "Calculate car loan payments and total interest costs",
    category: "finance",
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    description: "Calculate how much to save monthly to reach your financial goals",
    category: "finance",
  },
  {
    slug: "debt-payoff-calculator",
    title: "Debt Payoff Calculator",
    description: "Plan your debt repayment strategy and calculate payoff dates",
    category: "finance",
  },
  {
    slug: "credit-card-calculator",
    title: "Credit Card Calculator",
    description: "Calculate credit card interest and minimum payments",
    category: "finance",
  },
  {
    slug: "tip-calculator",
    title: "Tip Calculator",
    description: "Calculate tips, split bills, and per-person costs",
    category: "finance",
  },
  {
    slug: "paycheck-calculator",
    title: "Paycheck Calculator",
    description: "Estimate your net paycheck after taxes and deductions",
    category: "finance",
  },
  {
    slug: "budget-calculator",
    title: "Budget Calculator",
    description: "Create and manage your personal budget",
    category: "finance",
  },
  {
    slug: "net-worth-calculator",
    title: "Net Worth Calculator",
    description: "Calculate your total net worth and track financial progress",
    category: "finance",
  },
  {
    slug: "rent-vs-buy-calculator",
    title: "Rent vs Buy Calculator",
    description: "Compare the financial benefits of renting versus buying a home",
    category: "finance",
  },
  {
    slug: "student-loan-calculator",
    title: "Student Loan Calculator",
    description: "Calculate student loan payments and repayment plans",
    category: "finance",
  },
  {
    slug: "salary-calculator",
    title: "Salary Calculator",
    description: "Convert between annual, monthly, weekly, and hourly wages",
    category: "finance",
  },
  {
    slug: "roi-calculator",
    title: "ROI Calculator",
    description: "Calculate return on investment and analyze investment performance",
    category: "finance",
  },
  {
    slug: "inflation-calculator",
    title: "Inflation Calculator",
    description: "Calculate the impact of inflation on purchasing power",
    category: "finance",
  },
  {
    slug: "tax-calculator",
    title: "Tax Calculator",
    description: "Estimate income tax and tax implications of financial decisions",
    category: "finance",
  },
  {
    slug: "down-payment-calculator",
    title: "Down Payment Calculator",
    description: "Calculate how much down payment you can afford for a home",
    category: "finance",
  },
  {
    slug: "refinance-calculator",
    title: "Refinance Calculator",
    description: "Evaluate whether to refinance your mortgage or loan",
    category: "finance",
  },
  {
    slug: "home-affordability-calculator",
    title: "Home Affordability Calculator",
    description: "Determine the maximum home price you can afford",
    category: "finance",
  },
  {
    slug: "cost-of-living-calculator",
    title: "Cost of Living Calculator",
    description: "Compare cost of living between different cities and regions",
    category: "finance",
  },
  {
    slug: "business-loan-calculator",
    title: "Business Loan Calculator",
    description: "Calculate business loan payments and terms",
    category: "finance",
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    description: "Convert between different currencies at current exchange rates",
    category: "finance",
  },
  {
    slug: "break-even-calculator",
    title: "Break-Even Calculator",
    description: "Calculate break-even point for business decisions",
    category: "finance",
  },
  {
    slug: "margin-calculator",
    title: "Margin Calculator",
    description: "Calculate profit margin, markup, and related metrics",
    category: "finance",
  },
  {
    slug: "annuity-calculator",
    title: "Annuity Calculator",
    description: "Calculate annuity payments and present value",
    category: "finance",
  },

  // Health (10)
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and health category",
    category: "health",
  },
  {
    slug: "calorie-calculator",
    title: "Calorie Calculator",
    description: "Estimate daily calorie needs based on activity level",
    category: "health",
  },
  {
    slug: "body-fat-calculator",
    title: "Body Fat Calculator",
    description: "Estimate body fat percentage using multiple methods",
    category: "health",
  },
  {
    slug: "bmr-calculator",
    title: "BMR Calculator",
    description: "Calculate your Basal Metabolic Rate",
    category: "health",
  },
  {
    slug: "tdee-calculator",
    title: "TDEE Calculator",
    description: "Calculate Total Daily Energy Expenditure for fitness goals",
    category: "health",
  },
  {
    slug: "pregnancy-due-date-calculator",
    title: "Pregnancy Due Date Calculator",
    description: "Calculate your estimated due date based on conception date",
    category: "health",
  },
  {
    slug: "ideal-weight-calculator",
    title: "Ideal Weight Calculator",
    description: "Calculate healthy weight range based on height and age",
    category: "health",
  },
  {
    slug: "macro-calculator",
    title: "Macro Calculator",
    description: "Calculate macronutrient targets for your diet and fitness goals",
    category: "health",
  },
  {
    slug: "pace-calculator",
    title: "Pace Calculator",
    description: "Calculate running/walking pace, distance, and time",
    category: "health",
  },
  {
    slug: "bac-calculator",
    title: "BAC Calculator",
    description: "Estimate blood alcohol content and intoxication level",
    category: "health",
  },

  // Math (10)
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    description: "Calculate percentages, discounts, and percentage changes",
    category: "math",
  },
  {
    slug: "fraction-calculator",
    title: "Fraction Calculator",
    description: "Perform arithmetic operations with fractions",
    category: "math",
  },
  {
    slug: "scientific-calculator",
    title: "Scientific Calculator",
    description: "Advanced calculator with trigonometric and logarithmic functions",
    category: "math",
  },
  {
    slug: "gpa-calculator",
    title: "GPA Calculator",
    description: "Calculate and track your Grade Point Average",
    category: "math",
  },
  {
    slug: "grade-calculator",
    title: "Grade Calculator",
    description: "Determine the grade you need to achieve your target",
    category: "math",
  },
  {
    slug: "square-root-calculator",
    title: "Square Root Calculator",
    description: "Calculate square roots and powers",
    category: "math",
  },
  {
    slug: "area-calculator",
    title: "Area Calculator",
    description: "Calculate area of various geometric shapes",
    category: "math",
  },
  {
    slug: "volume-calculator",
    title: "Volume Calculator",
    description: "Calculate volume of 3D shapes and containers",
    category: "math",
  },
  {
    slug: "standard-deviation-calculator",
    title: "Standard Deviation Calculator",
    description: "Calculate standard deviation and other statistical measures",
    category: "math",
  },
  {
    slug: "probability-calculator",
    title: "Probability Calculator",
    description: "Calculate probabilities and combinations",
    category: "math",
  },

  // Other (10)
  {
    slug: "age-calculator",
    title: "Age Calculator",
    description: "Calculate your age in years, months, and days",
    category: "other",
  },
  {
    slug: "date-calculator",
    title: "Date Calculator",
    description: "Calculate days between dates and add/subtract days",
    category: "other",
  },
  {
    slug: "time-calculator",
    title: "Time Calculator",
    description: "Add, subtract, and convert time durations",
    category: "other",
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    description: "Calculate discounts and final prices after reductions",
    category: "other",
  },
  {
    slug: "fuel-cost-calculator",
    title: "Fuel Cost Calculator",
    description: "Calculate fuel costs and gas mileage for trips",
    category: "other",
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    description: "Convert between different units of measurement",
    category: "other",
  },
  {
    slug: "random-number-generator",
    title: "Random Number Generator",
    description: "Generate random numbers with custom parameters",
    category: "other",
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    description: "Generate secure passwords with custom requirements",
    category: "other",
  },
  {
    slug: "electricity-cost-calculator",
    title: "Electricity Cost Calculator",
    description: "Calculate electricity costs for appliances and usage",
    category: "other",
  },
  {
    slug: "concrete-calculator",
    title: "Concrete Calculator",
    description: "Calculate concrete needed for construction projects",
    category: "other",
  },
];

export const CATEGORY_DATA = [
  {
    id: "finance",
    label: "Financial",
    description: "Mortgage, loan, investment, and retirement calculators",
    title: "Financial Calculators",
    seoTitle: "Free Financial Calculators | Mortgage, Loan, Investment & More | CalcHub",
  },
  {
    id: "math",
    label: "Math",
    description: "Scientific, algebra, geometry, and statistics calculators",
    title: "Math Calculators",
    seoTitle: "Free Math Calculators | Scientific, Algebra & Statistics | CalcHub",
  },
  {
    id: "health",
    label: "Health & Fitness",
    description: "BMI, calorie, body fat, and wellness calculators",
    title: "Health & Fitness Calculators",
    seoTitle: "Free Health & Fitness Calculators | BMI, Calorie & More | CalcHub",
  },
  {
    id: "other",
    label: "Everyday",
    description: "Age, tip, GPA, fuel cost, and conversion calculators",
    title: "Everyday Calculators",
    seoTitle: "Free Everyday Calculators | Age, Tip, Unit Converter & More | CalcHub",
  },
];

export function getCalculatorSEOData(slug: string): CalculatorSEOData | undefined {
  return ALL_CALCULATORS.find((c) => c.slug === slug);
}

export function getCategorySEOData(categoryId: string) {
  return CATEGORY_DATA.find((c) => c.id === categoryId);
}
