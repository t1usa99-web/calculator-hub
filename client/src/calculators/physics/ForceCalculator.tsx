import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ForceCalculator() {
  const [mass, setMass] = useState(50);
  const [acceleration, setAcceleration] = useState(5);

  const force = mass * acceleration;
  const weightComparison = force / 9.81;
  const forceLbs = force * 0.22481;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Force"
        value={`${formatNumber(force, 2)} N`}
        highlight={true}
      />
      <ResultCard label="Weight Equivalent" value={`${formatNumber(weightComparison, 2)} kg`} />
      <ResultCard label="In Pounds Force" value={`${formatNumber(forceLbs, 2)} lbf`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Force Calculator"
      description="Calculate force using Newton's Second Law (F = ma)"
      slug="force-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="mass"
          label="Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="acceleration"
          label="Acceleration"
          value={acceleration}
          onChange={setAcceleration}
          suffix="m/s²"
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "force-calculator",
  title: "Force Calculator",
  shortTitle: "Force",
  description: "Calculate force from mass and acceleration",
  category: "physics",
  icon: "💪",
  keywords: ["force", "Newton's laws", "acceleration", "physics"],
  component: ForceCalculator,
  dateModified: "2026-04-09",
});
