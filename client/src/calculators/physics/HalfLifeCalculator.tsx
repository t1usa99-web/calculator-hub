import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function HalfLifeCalculator() {
  const [initialAmount, setInitialAmount] = useState(100);
  const [halfLife, setHalfLife] = useState(5.27);
  const [elapsedTime, setElapsedTime] = useState(10);

  const remaining = initialAmount * Math.pow(0.5, elapsedTime / halfLife);
  const decayConstant = Math.LN2 / halfLife;
  const percentRemaining = (remaining / initialAmount) * 100;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Remaining Amount"
        value={`${formatNumber(remaining, 2)} units`}
        highlight={true}
      />
      <ResultCard label="Decay Constant (λ)" value={`${decayConstant.toExponential(3)} /unit time`} />
      <ResultCard label="Percent Remaining" value={`${formatNumber(percentRemaining, 2)}%`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Half-Life Calculator"
      description="Calculate radioactive decay and remaining amount"
      slug="half-life-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="initial-amount"
          label="Initial Amount"
          value={initialAmount}
          onChange={setInitialAmount}
          min={0.01}
          step={1}
        />
        <InputField
          id="half-life"
          label="Half-Life"
          value={halfLife}
          onChange={setHalfLife}
          suffix="(time units)"
          min={0.001}
          step={0.1}
          hint="C-14: 5,730 years; Y-90: 64.1 hours"
        />
        <InputField
          id="elapsed-time"
          label="Elapsed Time"
          value={elapsedTime}
          onChange={setElapsedTime}
          suffix="(same units as half-life)"
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "half-life-calculator",
  title: "Half-Life Calculator",
  shortTitle: "Half-Life",
  description: "Calculate radioactive decay using half-life formula",
  category: "physics",
  icon: "☢️",
  keywords: ["half-life", "radioactive decay", "nuclear", "dating"],
  component: HalfLifeCalculator,
  dateModified: "2026-04-09",
});
