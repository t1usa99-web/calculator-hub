import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(10);

  // Simple Interest: I = P * r * t
  const interestEarned = principal * (annualRate / 100) * years;
  const finalAmount = principal + interestEarned;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Interest Earned"
        value={formatCurrency(interestEarned)}
        highlight={true}
      />
      <ResultCard
        label="Final Amount"
        value={formatCurrency(finalAmount)}
        highlight={true}
      />
      <ResultCard
        label="Principal"
        value={formatCurrency(principal)}
      />
      <ResultCard
        label="Interest as % of Principal"
        value={formatNumber((interestEarned / principal) * 100) + "%"}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Simple Interest Calculator"
      description="Calculate simple interest without compounding"
      slug="simple-interest-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="principal"
          label="Principal Amount"
          value={principal}
          onChange={setPrincipal}
          prefix="$"
          min={0}
          step={100}
        />

        <InputField
          id="annual-rate"
          label="Annual Interest Rate"
          value={annualRate}
          onChange={setAnnualRate}
          suffix="%"
          min={0}
          max={50}
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
  component: SimpleInterestCalculator,
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
});
