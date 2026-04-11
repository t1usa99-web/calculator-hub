import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

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
