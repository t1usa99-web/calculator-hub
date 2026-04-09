import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { COMPOUND_INTEREST_FAQS } from "@/lib/faq-content";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(20);
  const [compoundingFrequency, setCompoundingFrequency] = useState("12");

  const compoundingMap = {
    "1": { label: "Annually", periods: 1 },
    "2": { label: "Semi-annually", periods: 2 },
    "4": { label: "Quarterly", periods: 4 },
    "12": { label: "Monthly", periods: 12 },
    "365": { label: "Daily", periods: 365 },
  };

  const compounding = compoundingMap[compoundingFrequency as keyof typeof compoundingMap];
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = years * 12;

  // Calculate future value with contributions
  let futureValue = principal;
  let totalContributions = principal;
  const chartData = [];

  for (let month = 0; month <= totalMonths; month++) {
    futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
    totalContributions = principal + monthlyContribution * month;

    if (month % Math.max(1, Math.floor(totalMonths / 60)) === 0) {
      chartData.push({
        month,
        year: (month / 12).toFixed(1),
        totalValue: futureValue,
        contributions: totalContributions,
        interest: Math.max(0, futureValue - totalContributions),
      });
    }
  }

  // Ensure final point is included
  if (chartData[chartData.length - 1]?.month !== totalMonths) {
    chartData.push({
      month: totalMonths,
      year: years.toFixed(1),
      totalValue: futureValue,
      contributions: totalContributions,
      interest: Math.max(0, futureValue - totalContributions),
    });
  }

  const totalInterest = futureValue - totalContributions;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Future Value" value={formatCurrency(futureValue)} highlight />
      <ResultCard label="Total Contributions" value={formatCurrency(totalContributions)} />
      <ResultCard label="Total Interest Earned" value={formatCurrency(totalInterest)} highlight />
      <ResultCard
        label="Interest as % of Total"
        value={formatPercent(totalInterest / futureValue * 100, 1)}
        subtext={`${formatPercent((totalInterest / futureValue) * 100, 1)} of final value`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Investment Growth Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Years", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Value ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Area type="monotone" dataKey="contributions" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.8} name="Contributions" />
          <Area type="monotone" dataKey="interest" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.8} name="Interest Earned" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Compound interest is the interest earned on both your original principal and the accumulated interest from previous periods. It's often called "interest on interest" and is one of the most powerful forces in personal finance. When you earn interest, that interest itself earns interest in the next period, creating exponential growth over time. The longer your money compounds, the more dramatic the effect becomes, which is why starting to invest early is crucial.
      </p>

      <p>
        <strong>How Compounding Works:</strong> If you deposit $10,000 at 7% annual interest, you earn $700 in year one. In year two, you earn 7% not just on your original $10,000, but on $10,700, earning $749. By year three, you're earning on $11,449, generating $801 in interest. This acceleration continues indefinitely. The frequency of compounding (daily, monthly, or quarterly) also matters—more frequent compounding results in slightly higher returns because interest is calculated and added more often.
      </p>

      <p>
        <strong>The Rule of 72:</strong> A quick way to estimate how long it takes money to double is the Rule of 72. Simply divide 72 by your interest rate to get approximately how many years it takes to double. For example, at 7% interest, 72 ÷ 7 = approximately 10.3 years for your money to double. This rule works for any interest rate and is surprisingly accurate, helping you quickly understand the power of compound growth at different rates.
      </p>

      <p>
        <strong>Regular Contributions Accelerate Growth:</strong> Adding regular contributions (like monthly deposits) dramatically increases your final amount because each deposit also earns compound interest. A person who invests $500 monthly at 7% for 20 years ends up with far more than someone who makes a single $10,000 investment. Consistent, regular investing combined with compound interest is the foundation of long-term wealth building. Starting with any amount, even small contributions, and being consistent over time creates significant wealth.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="See how your investments grow through compound interest with regular contributions"
      slug="compound-interest-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="principal"
          label="Starting Principal"
          value={principal}
          onChange={setPrincipal}
          prefix="$"
          step={5000}
          min={0}
        />
        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          step={50}
          min={0}
        />
        <InputField
          id="interest-rate"
          label="Annual Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={0}
          max={30}
        />
        <InputField
          id="years"
          label="Time Period"
          value={years}
          onChange={setYears}
          suffix="years"
          step={1}
          min={1}
          max={60}
        />
        <SelectField
          id="compounding-frequency"
          label="Compounding Frequency"
          value={compoundingFrequency}
          onChange={setCompoundingFrequency}
          options={[
            { value: "1", label: "Annually" },
            { value: "2", label: "Semi-annually" },
            { value: "4", label: "Quarterly" },
            { value: "12", label: "Monthly" },
            { value: "365", label: "Daily" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CompoundInterestCalculator,
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
