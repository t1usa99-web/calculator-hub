import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function TakeHomePayCalculator() {
  const [grossSalary, setGrossSalary] = useState(60000);
  const [salaryFrequency, setSalaryFrequency] = useState("annual");
  const [payFrequency, setPayFrequency] = useState("biweekly");
  const [filingStatus, setFilingStatus] = useState("single");
  const [state, setState] = useState("CA");

  const frequencyOptions = [
    { value: "annual", label: "Annual" },
    { value: "monthly", label: "Monthly" },
    { value: "hourly", label: "Hourly" },
  ];

  const payFrequencyOptions = [
    { value: "weekly", label: "Weekly" },
    { value: "biweekly", label: "Biweekly (every 2 weeks)" },
    { value: "semimonthly", label: "Semi-Monthly (2x/month)" },
    { value: "monthly", label: "Monthly" },
  ];

  const filingOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married Filing Jointly" },
    { value: "mfd", label: "Married Filing Separately" },
    { value: "hoh", label: "Head of Household" },
  ];

  const stateOptions = [
    { value: "CA", label: "California" },
    { value: "TX", label: "Texas (No Income Tax)" },
    { value: "FL", label: "Florida (No Income Tax)" },
    { value: "NY", label: "New York" },
    { value: "IL", label: "Illinois" },
    { value: "PA", label: "Pennsylvania" },
    { value: "WA", label: "Washington (No Income Tax)" },
    { value: "CO", label: "Colorado" },
  ];

  // Convert to annual salary
  let annualSalary = grossSalary;
  if (salaryFrequency === "monthly") {
    annualSalary = grossSalary * 12;
  } else if (salaryFrequency === "hourly") {
    annualSalary = grossSalary * 40 * 52; // 40 hours/week, 52 weeks/year
  }

  // Federal income tax (simplified 2024 brackets)
  const federalTaxBrackets = {
    single: [
      { limit: 11600, rate: 0.10 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
    married: [
      { limit: 23200, rate: 0.10 },
      { limit: 94300, rate: 0.12 },
      { limit: 201050, rate: 0.22 },
      { limit: 383900, rate: 0.24 },
      { limit: 487450, rate: 0.32 },
      { limit: 731200, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  };

  let federalTax = 0;
  let previousLimit = 0;
  const brackets = federalTaxBrackets[filingStatus === "married" ? "married" : "single"];

  for (const bracket of brackets) {
    const taxableInThisBracket = Math.min(annualSalary, bracket.limit) - previousLimit;
    if (taxableInThisBracket > 0) {
      federalTax += taxableInThisBracket * bracket.rate;
    }
    previousLimit = bracket.limit;
    if (annualSalary <= bracket.limit) break;
  }

  // FICA taxes
  const socialSecurityWageBase = 168600; // 2024
  const socialSecurityTax = Math.min(annualSalary, socialSecurityWageBase) * 0.062;
  const medicareTax = annualSalary * 0.0145;
  const additionalMedicareTax = annualSalary > 200000 ? (annualSalary - 200000) * 0.009 : 0;
  const ficaTax = socialSecurityTax + medicareTax + additionalMedicareTax;

  // State tax (simplified rates)
  let stateTax = 0;
  if (state === "CA") {
    stateTax = annualSalary * 0.093; // CA ~9.3% top rate, simplified
  } else if (state === "NY") {
    stateTax = annualSalary * 0.0685;
  } else if (state === "IL") {
    stateTax = annualSalary * 0.0495;
  } else if (state === "PA") {
    stateTax = annualSalary * 0.0307;
  } else if (state === "CO") {
    stateTax = annualSalary * 0.044;
  }
  // TX, FL, WA have no state income tax

  const totalTaxes = federalTax + ficaTax + stateTax;
  const netAnnualPay = annualSalary - totalTaxes;

  // Calculate per-paycheck amounts
  let paychecksPerYear = 26; // biweekly default
  if (payFrequency === "weekly") paychecksPerYear = 52;
  else if (payFrequency === "semimonthly") paychecksPerYear = 24;
  else if (payFrequency === "monthly") paychecksPerYear = 12;

  const grossPaycheck = annualSalary / paychecksPerYear;
  const netPaycheck = netAnnualPay / paychecksPerYear;

  const breakdownData = [
    { name: "Federal Tax", value: federalTax },
    { name: "FICA (SS + Medicare)", value: ficaTax },
    { name: "State Tax", value: stateTax },
    { name: "Net Pay", value: netAnnualPay },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Gross Annual Salary"
        value={formatCurrency(annualSalary)}
      />
      <ResultCard
        label="Federal Income Tax (Estimated)"
        value={formatCurrency(federalTax)}
        subtext={formatNumber((federalTax / annualSalary) * 100, 1) + "% of gross"}
      />
      <ResultCard
        label="FICA Taxes (Social Security + Medicare)"
        value={formatCurrency(ficaTax)}
        subtext={formatNumber((ficaTax / annualSalary) * 100, 1) + "% of gross"}
      />
      <ResultCard
        label="State Income Tax (Estimated)"
        value={formatCurrency(stateTax)}
        subtext={formatNumber((stateTax / annualSalary) * 100, 1) + "% of gross"}
      />
      <ResultCard
        label="Total Tax Burden"
        value={formatCurrency(totalTaxes)}
        subtext={formatNumber((totalTaxes / annualSalary) * 100, 1) + "% of gross"}
      />
      <ResultCard
        label="Net Annual Pay (Take-Home)"
        value={formatCurrency(netAnnualPay)}
        highlight
        subtext={formatNumber((netAnnualPay / annualSalary) * 100, 1) + "% of gross"}
      />
      <ResultCard
        label={`Gross Per Paycheck (${payFrequency})`}
        value={formatCurrency(grossPaycheck)}
        subtext={`${paychecksPerYear}x per year`}
      />
      <ResultCard
        label={`Net Per Paycheck (${payFrequency})`}
        value={formatCurrency(netPaycheck)}
        highlight
        subtext="Actual take-home per paycheck"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Annual Tax Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={breakdownData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Take-home pay is your gross salary minus taxes. A {formatCurrency(60000)} annual salary might result in only {formatCurrency(45000)} take-home after federal, FICA (Social Security and Medicare), and state income taxes. Understanding your net pay is critical for budgeting and financial planning. Taxes typically consume 25-35% of gross income for middle-income earners, varying by state (no income tax in Texas/Florida/Washington vs. 9.3% in California). This calculator estimates your take-home based on 2024 tax brackets and your specific situation.
      </p>

      <p>
        <strong>Federal Income Tax:</strong> Calculated using 2024 progressive tax brackets. Single filers pay 10% on the first {formatCurrency(11600)}, 12% on income {formatCurrency(11600)}-{formatCurrency(47150)}, 22% on {formatCurrency(47150)}-{formatCurrency(100525)}, and higher rates above. Married filers have wider brackets. Actual federal tax depends on filing status, deductions, and credits. This calculator uses simplified brackets; your actual federal tax may differ. The more you earn, the higher your marginal tax rate.
      </p>

      <p>
        <strong>FICA Taxes (6.2% Social Security + 1.45% Medicare):</strong> These are fixed-rate payroll taxes. Social Security tax (6.2%) applies only up to {formatCurrency(168600)} of income (2024 wage base); income above is untaxed for Social Security. Medicare tax (1.45%) applies to all income. High earners (over {formatCurrency(200000)} single) pay additional 0.9% Medicare tax. FICA is mandatory and funds Social Security and Medicare. Unlike income tax, FICA has a cap on Social Security contributions.
      </p>

      <p>
        <strong>State Income Tax Varies Widely:</strong> Nine states (Texas, Florida, Washington, Nevada, South Dakota, Tennessee, Wyoming, Alaska, New Hampshire) have no income tax. Others range from 3% (Pennsylvania) to 13%+ (California at high incomes). Moving to a no-income-tax state can significantly increase take-home. A {formatCurrency(100000)} salary takes home {formatCurrency(73000)} in Texas but {formatCurrency(66000)} in California—{formatCurrency(7000)} difference annually! This calculator estimates state tax; actual tax depends on deductions, credits, and local taxes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Take-Home Pay Calculator"
      description="Calculate net pay after federal, FICA, and state income taxes"
      slug="take-home-pay-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="gross-salary"
          label="Gross Salary"
          value={grossSalary}
          onChange={setGrossSalary}
          prefix="$"
          step={5000}
          min={100}
        />
        <SelectField
          id="salary-frequency"
          label="Salary Frequency"
          value={salaryFrequency}
          onChange={setSalaryFrequency}
          options={frequencyOptions}
        />
        <SelectField
          id="pay-frequency"
          label="Pay Frequency"
          value={payFrequency}
          onChange={setPayFrequency}
          options={payFrequencyOptions}
        />
        <SelectField
          id="filing-status"
          label="Filing Status"
          value={filingStatus}
          onChange={setFilingStatus}
          options={filingOptions}
        />
        <SelectField
          id="state"
          label="State"
          value={state}
          onChange={setState}
          options={stateOptions}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: TakeHomePayCalculator,
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
