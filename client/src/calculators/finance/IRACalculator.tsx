import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function IRACalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [annualContribution, setAnnualContribution] = useState(7000);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [currentTaxBracket, setCurrentTaxBracket] = useState(22);
  const [retirementTaxBracket, setRetirementTaxBracket] = useState(12);

  const yearsToRetirement = retirementAge - currentAge;
  const annualReturn = expectedReturn / 100;

  // Calculate Traditional IRA balance
  let iraBalance = currentBalance;
  const chartData = [];

  for (let year = 0; year <= yearsToRetirement; year++) {
    const age = currentAge + year;
    chartData.push({
      year,
      age,
      iraBalance,
      rothEquivalent: iraBalance * (1 - retirementTaxBracket / 100),
    });
    if (year < yearsToRetirement) {
      iraBalance = iraBalance * (1 + annualReturn) + annualContribution;
    }
  }

  const projectedIRABalance = iraBalance;
  const totalContributions = currentBalance + annualContribution * yearsToRetirement;
  const totalGrowth = projectedIRABalance - totalContributions;

  // Tax savings: deductions now vs taxes in retirement
  const taxSavingsNow = (annualContribution * yearsToRetirement) * (currentTaxBracket / 100);
  const taxesDueInRetirement = projectedIRABalance * (retirementTaxBracket / 100);
  const afterTaxRetirementFunds = projectedIRABalance * (1 - retirementTaxBracket / 100);

  // Roth comparison: same contributions taxed differently
  let rothBalance = currentBalance;
  for (let year = 0; year < yearsToRetirement; year++) {
    rothBalance = rothBalance * (1 + annualReturn) + annualContribution;
  }
  const rothAfterTax = rothBalance; // No taxes due
  const taxAdvantage = afterTaxRetirementFunds - rothAfterTax;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Projected Traditional IRA Balance"
        value={formatCurrency(projectedIRABalance)}
        highlight
      />
      <ResultCard
        label="After-Tax Value (at retirement tax rate)"
        value={formatCurrency(afterTaxRetirementFunds)}
        highlight
        subtext="What you'll actually have to spend"
      />
      <ResultCard
        label="Total Tax Savings Now"
        value={formatCurrency(taxSavingsNow)}
        subtext={`Deductions at ${currentTaxBracket}% bracket`}
      />
      <ResultCard
        label="Taxes Due in Retirement"
        value={formatCurrency(taxesDueInRetirement)}
        subtext={`Taxed at ${retirementTaxBracket}% bracket`}
      />
      <ResultCard
        label="vs. Roth IRA Comparison"
        value={taxAdvantage > 0 ? `+${formatCurrency(taxAdvantage)}` : formatCurrency(taxAdvantage)}
        subtext={taxAdvantage > 0 ? "Traditional better" : "Roth better"}
      />
      <ResultCard
        label="Investment Growth"
        value={formatCurrency(totalGrowth)}
        subtext="Pretax earnings over time"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Traditional IRA: Pretax vs. After-Tax Value</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData.filter((_, i) => i % Math.max(1, Math.floor(chartData.length / 10)) === 0 || i === chartData.length - 1)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: "Age", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="iraBalance" fill="#6366f1" name="Pretax Balance" />
          <Bar dataKey="rothEquivalent" fill="#8b5cf6" name="After-Tax Value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A Traditional IRA (Individual Retirement Account) allows you to make tax-deductible contributions, reducing your current taxable income. Your investments grow tax-free inside the account, but withdrawals in retirement are taxed as ordinary income. This strategy is best if you expect to be in a lower tax bracket during retirement, as you save taxes now at a high rate and pay taxes later at a low rate.
      </p>

      <p>
        <strong>Tax Deduction and Tax Deferral:</strong> When you contribute {formatCurrency(7000)} to a Traditional IRA, you typically deduct the full amount from your taxable income that year. If you're in the 22% tax bracket, that deduction saves you {formatCurrency(1540)} in taxes immediately. Your investments grow without paying annual capital gains taxes, allowing compound growth on the full amount. However, when you withdraw in retirement, the entire withdrawal is taxed at your retirement tax rate.
      </p>

      <p>
        <strong>RMDs (Required Minimum Distributions):</strong> At age 73, you must begin taking Required Minimum Distributions (RMDs) from your Traditional IRA, based on IRS life expectancy tables. For example, at age 73 with a {formatCurrency(500000)} balance, the divisor is 24.4, so your RMD would be {formatCurrency(20492)}. You must withdraw this minimum annually or face a 25% penalty on the shortfall (10% for certain violations). Roth IRAs have no RMDs during your lifetime, making them better if you want the account to keep growing.
      </p>

      <p>
        <strong>Traditional vs. Roth Decision:</strong> Choose Traditional IRA if: (1) you want to reduce your current taxes (in a high bracket), (2) you expect lower income in retirement, (3) you need the tax break now. Choose Roth IRA if: (1) you're young with decades of growth ahead, (2) you expect higher income in retirement, (3) you want flexibility and no RMDs. Some investors use both: Traditional for current tax savings, Roth for tax-free growth and flexibility.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Traditional IRA Calculator"
      description="Compare Traditional IRA tax benefits with Roth IRA and project retirement funds"
      slug="ira-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="current-age"
          label="Current Age"
          value={currentAge}
          onChange={setCurrentAge}
          suffix="years"
          step={1}
          min={18}
          max={70}
        />
        <InputField
          id="retirement-age"
          label="Retirement Age"
          value={retirementAge}
          onChange={setRetirementAge}
          suffix="years"
          step={1}
          min={currentAge + 1}
          max={85}
        />
        <InputField
          id="current-balance"
          label="Current IRA Balance"
          value={currentBalance}
          onChange={setCurrentBalance}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="annual-contribution"
          label="Annual Contribution"
          value={annualContribution}
          onChange={setAnnualContribution}
          prefix="$"
          step={500}
          min={0}
          max={8000}
          hint="2026 limit is $7,000 (or $8,000 if age 50+)"
        />
        <InputField
          id="expected-return"
          label="Expected Annual Return"
          value={expectedReturn}
          onChange={setExpectedReturn}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
          hint="Historical stock market: 7-10%"
        />
        <InputField
          id="current-tax-bracket"
          label="Current Tax Bracket"
          value={currentTaxBracket}
          onChange={setCurrentTaxBracket}
          suffix="%"
          step={1}
          min={0}
          max={37}
          hint="Your federal tax rate now"
        />
        <InputField
          id="retirement-tax-bracket"
          label="Expected Retirement Tax Bracket"
          value={retirementTaxBracket}
          onChange={setRetirementTaxBracket}
          suffix="%"
          step={1}
          min={0}
          max={37}
          hint="Expected tax rate in retirement"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: IRACalculator,
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
