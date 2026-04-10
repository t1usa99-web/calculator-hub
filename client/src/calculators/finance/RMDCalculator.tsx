import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RMDCalculator() {
  const [currentAge, setCurrentAge] = useState(73);
  const [accountBalance, setAccountBalance] = useState(500000);
  const [expectedReturn, setExpectedReturn] = useState(5);

  // IRS Uniform Lifetime Table divisors (simplified for common ages)
  const irsTable: { [key: number]: number } = {
    72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1,
    80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.1, 87: 14.3,
    88: 13.4, 89: 12.7, 90: 11.9, 91: 11.2, 92: 10.5, 93: 9.9, 94: 9.1, 95: 8.6,
    96: 8.1, 97: 7.6, 98: 7.1, 99: 6.7, 100: 6.3,
  };

  const getIRSDivisor = (age: number): number => {
    if (irsTable[age]) return irsTable[age];
    if (age < 72) return 0;
    if (age > 100) return 6.3;
    // Linear interpolation for ages in between
    const lower = Math.floor(age);
    const upper = Math.ceil(age);
    const lowerDiv = irsTable[lower] || 6.3;
    const upperDiv = irsTable[upper] || 6.3;
    return lowerDiv - (age - lower) * (lowerDiv - upperDiv);
  };

  // Calculate RMDs for next 10 years
  let balance = accountBalance;
  const chartData = [];
  const annualReturn = expectedReturn / 100;

  for (let year = 0; year <= 10; year++) {
    const age = currentAge + year;
    const divisor = getIRSDivisor(age);
    const rmd = balance / divisor;

    chartData.push({
      year,
      age,
      rmd: Math.max(0, rmd),
      balance: Math.max(0, balance),
    });

    // Update balance for next year (after withdrawal, plus growth)
    if (year < 10 && balance > 0) {
      balance = (balance - rmd) * (1 + annualReturn);
    }
  }

  const thisYearRMD = accountBalance / getIRSDivisor(currentAge);
  const totalRMDsNext10Years = chartData.reduce((sum, d) => sum + d.rmd, 0);
  const averageRMD = totalRMDsNext10Years / 11;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="This Year's Required Minimum Distribution"
        value={formatCurrency(thisYearRMD)}
        highlight
        subtext={`Age ${currentAge} (Divisor: ${getIRSDivisor(currentAge).toFixed(1)})`}
      />
      <ResultCard
        label="IRS Life Expectancy Divisor"
        value={getIRSDivisor(currentAge).toFixed(1)}
        subtext="Balance divided by this = RMD"
      />
      <ResultCard
        label="Total RMDs (Next 10 Years)"
        value={formatCurrency(totalRMDsNext10Years)}
        subtext="All RMD amounts combined"
      />
      <ResultCard
        label="Average Annual RMD"
        value={formatCurrency(averageRMD)}
        subtext="Over 10 years"
      />
      <ResultCard
        label="Projected Balance in 10 Years"
        value={formatCurrency(Math.max(0, chartData[10].balance))}
        subtext="After RMDs and growth"
      />
      <ResultCard
        label="Penalty for Not Taking RMD"
        value={`${formatNumber((thisYearRMD * 0.25), 0)}`}
        subtext="25% of shortfall (if not taken)"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Required Minimum Distributions Over 10 Years</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: "Age", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Annual RMD ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="rmd" fill="#f59e0b" name="Annual RMD" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A Required Minimum Distribution (RMD) is the minimum amount you must withdraw from a Traditional IRA, 401(k), or other tax-deferred retirement account each year, starting at age 73 (as of 2023). The IRS imposes this requirement to ensure taxes are paid on the accumulated, tax-deductible contributions and earnings. Your RMD is calculated by dividing your December 31 account balance by an IRS life expectancy divisor that decreases each year, resulting in larger required withdrawals as you age.
      </p>

      <p>
        <strong>How RMDs Are Calculated:</strong> The IRS publishes the Uniform Lifetime Table, which provides divisors based on your age. For example, at age 73, the divisor is 26.5, so a {formatCurrency(500000)} account balance requires an RMD of {formatCurrency(18868)}. At age 80, the divisor drops to 20.2, so the same balance would require {formatCurrency(24752)}. These divisors ensure that your account balance is depleted over your statistical lifetime, preventing indefinite tax deferral. Your financial institution typically provides RMD calculations, but verify them to avoid penalties.
      </p>

      <p>
        <strong>Penalties for Missing RMDs:</strong> If you fail to withdraw your full RMD, the IRS imposes a penalty of 25% of the shortfall amount (reduced to 10% if corrected within 2 years). For example, if your RMD is {formatCurrency(20000)} and you only withdraw {formatCurrency(15000)}, the {formatCurrency(5000)} shortfall triggers a {formatCurrency(1250)} penalty (25% of {formatCurrency(5000)}). These penalties are steep, so take RMDs seriously. You can take your RMD anytime during the year, but the deadline is December 31. For your first RMD (age 73), you have until April 1 of the following year, but taking it then means taking two RMDs that calendar year.
      </p>

      <p>
        <strong>Roth IRA Exception and Withdrawal Strategy:</strong> Roth IRAs have no RMD requirement during your lifetime, making them a valuable tool for those who don't need retirement income. If you have both Traditional and Roth accounts, you can minimize taxes by taking a larger RMD from the Traditional IRA, which is taxed, while letting the Roth grow untouched. You can also use the RMD to fund charitable donations (Qualified Charitable Distributions), donate directly to charities without paying income tax on the distribution, and reduce your taxable income.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Required Minimum Distribution (RMD) Calculator"
      description="Calculate your Required Minimum Distribution using IRS Uniform Lifetime Table"
      slug="rmd-calculator"
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
          min={73}
          max={120}
          hint="RMDs begin at age 73"
        />
        <InputField
          id="account-balance"
          label="Retirement Account Balance (Dec 31 of Prior Year)"
          value={accountBalance}
          onChange={setAccountBalance}
          prefix="$"
          step={50000}
          min={0}
          hint="Use Dec 31 balance from previous year"
        />
        <InputField
          id="expected-return"
          label="Expected Annual Return"
          value={expectedReturn}
          onChange={setExpectedReturn}
          suffix="%"
          step={0.5}
          min={0}
          max={15}
          hint="Conservative estimate for projection"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RMDCalculator,
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
