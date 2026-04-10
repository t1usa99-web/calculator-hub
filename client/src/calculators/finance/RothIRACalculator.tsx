import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RothIRACalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [annualContribution, setAnnualContribution] = useState(7000);
  const [expectedReturn, setExpectedReturn] = useState(7);

  const yearsToRetirement = retirementAge - currentAge;
  const annualReturn = expectedReturn / 100;

  // Calculate projected Roth IRA balance
  let balance = currentBalance;
  const chartData = [];

  for (let year = 0; year <= yearsToRetirement; year++) {
    const age = currentAge + year;
    chartData.push({
      year,
      age,
      balance,
      contributions: currentBalance + annualContribution * year,
    });
    if (year < yearsToRetirement) {
      balance = balance * (1 + annualReturn) + annualContribution;
    }
  }

  const projectedBalance = balance;
  const totalContributions = currentBalance + annualContribution * yearsToRetirement;
  const totalGrowth = projectedBalance - totalContributions;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Projected Roth IRA Balance at Retirement"
        value={formatCurrency(projectedBalance)}
        highlight
      />
      <ResultCard
        label="Tax-Free Growth"
        value={formatCurrency(totalGrowth)}
        highlight
        subtext="All growth is tax-free"
      />
      <ResultCard
        label="Total Contributions"
        value={formatCurrency(totalContributions)}
        subtext={`Initial + ${yearsToRetirement} years of ${formatCurrency(annualContribution)}`}
      />
      <ResultCard
        label="Growth Percentage"
        value={`${formatNumber(totalGrowth > 0 ? (totalGrowth / totalContributions) * 100 : 0, 1)}%`}
        subtext="Return on contributions"
      />
      <ResultCard
        label="Years Until Retirement"
        value={yearsToRetirement.toString()}
        subtext={`Age ${currentAge} to ${retirementAge}`}
      />
      <ResultCard
        label="Annual Contribution Limit (2026)"
        value={formatCurrency(7000)}
        subtext={`Currently contributing ${formatCurrency(annualContribution)}`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Roth IRA Balance Growth Projection</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: "Age", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Area type="monotone" dataKey="balance" stroke="#10b981" fill="#10b981" fillOpacity={0.1} name="Total Balance" />
          <Area type="monotone" dataKey="contributions" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.05} name="Contributions" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A Roth IRA is a retirement savings account with significant tax advantages. Unlike Traditional IRAs, Roth IRA contributions are made with after-tax dollars, meaning you pay income tax now. However, the key benefit is that all earnings and withdrawals in retirement are completely tax-free, as long as the account is at least 5 years old and you are at least 59½ years old.
      </p>

      <p>
        <strong>Contribution Limits and Eligibility:</strong> For 2026, you can contribute up to {formatCurrency(7000)} annually to a Roth IRA (age 50+ can contribute {formatCurrency(8000)} with catch-up). Eligibility phases out for high earners: single filers start losing eligibility at {formatCurrency(146000)} income and completely at {formatCurrency(161000)}, while married filing jointly ranges from {formatCurrency(230000)} to {formatCurrency(240000)}. You can only contribute earned income up to the limit, so you cannot contribute more than your annual earned income.
      </p>

      <p>
        <strong>Tax-Free Growth and Withdrawals:</strong> The power of Roth IRAs is that investment gains grow completely tax-free. A {formatCurrency(50000)} initial balance growing at 7% annually becomes {formatCurrency(projectedBalance.toLocaleString())} in 30 years, and you owe zero taxes on the gains. In retirement, you can withdraw contributions anytime tax-free, and if your account meets the 5-year rule, you can withdraw earnings tax-free after age 59½. This makes Roth IRAs ideal for younger investors with decades of compound growth ahead.
      </p>

      <p>
        <strong>No Required Minimum Distributions (RMDs):</strong> Unlike Traditional IRAs and 401(k)s, Roth IRAs have no RMDs during your lifetime. This means you can leave your Roth IRA untouched to grow for 30+ years if you don't need the money, maximizing tax-free compounding. Your heirs also benefit, as inherited Roth IRAs grow tax-free for them. This makes Roth IRAs excellent for wealth building and passing wealth to the next generation.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Roth IRA Calculator"
      description="Project your Roth IRA growth and see tax-free retirement savings potential"
      slug="roth-ira-calculator"
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
          label="Current Roth IRA Balance"
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
          max={7000}
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
          hint="Conservative: 5-7%, Moderate: 7-9%"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RothIRACalculator,
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
