import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(10);
  const [compoundFrequency, setCompoundFrequency] = useState("12");

  const compoundOptions = [
    { value: "1", label: "Annually (1x/year)" },
    { value: "4", label: "Quarterly (4x/year)" },
    { value: "12", label: "Monthly (12x/year)" },
    { value: "365", label: "Daily (365x/year)" },
  ];

  const n = parseInt(compoundFrequency, 10);
  const r = annualRate / 100;
  const t = years;

  const finalAmount = principal * Math.pow(1 + r / n, n * t);
  const totalInterest = finalAmount - principal;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Final Amount"
        value={formatCurrency(finalAmount)}
        highlight={true}
      />
      <ResultCard
        label="Total Interest Earned"
        value={formatCurrency(totalInterest)}
        highlight={true}
      />
      <ResultCard
        label="Principal"
        value={formatCurrency(principal)}
      />
      <ResultCard
        label="Interest as % of Principal"
        value={formatNumber((totalInterest / principal) * 100) + "%"}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="Calculate compound interest with various compounding frequencies"
      slug="interest-calculator"
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

        <SelectField
          id="compound-frequency"
          label="Compound Frequency"
          value={compoundFrequency}
          onChange={setCompoundFrequency}
          options={compoundOptions}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InterestCalculator,
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
  ymyl: true,
  dateModified: "2026-04-09",
});
