import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FutureValueCalculator() {
  const [presentValue, setPresentValue] = useState(50000);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [monthlyContribution, setMonthlyContribution] = useState(500);

  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;

  // FV = PV * (1 + r)^n + PMT * (((1 + r)^n - 1) / r)
  let fv = 0;
  if (monthlyRate === 0) {
    fv = presentValue + monthlyContribution * months;
  } else {
    const pvFv = presentValue * Math.pow(1 + monthlyRate, months);
    const pmt =
      monthlyContribution *
      (Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate;
    fv = pvFv + pmt;
  }

  const totalContributions =
    presentValue + monthlyContribution * months;
  const totalGrowth = fv - totalContributions;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Future Value"
        value={formatCurrency(fv)}
        highlight={true}
      />
      <ResultCard
        label="Total Growth"
        value={formatCurrency(totalGrowth)}
        highlight={true}
      />
      <ResultCard
        label="Total Contributions"
        value={formatCurrency(totalContributions)}
      />
      <ResultCard
        label="Growth as % of Contributions"
        value={formatNumber((totalGrowth / totalContributions) * 100) + "%"}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Future Value Calculator"
      description="Calculate the future value of investments with regular contributions"
      slug="future-value-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="present-value"
          label="Initial Investment"
          value={presentValue}
          onChange={setPresentValue}
          prefix="$"
          min={0}
          step={1000}
        />

        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          min={0}
          step={50}
        />

        <InputField
          id="annual-rate"
          label="Annual Return Rate"
          value={annualRate}
          onChange={setAnnualRate}
          suffix="%"
          min={0}
          max={30}
          step={0.1}
        />

        <InputField
          id="years"
          label="Time Period"
          value={years}
          onChange={setYears}
          suffix="years"
          min={0}
          max={100}
          step={0.5}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: FutureValueCalculator,
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
