import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MomentumCalculator() {
  const [mass, setMass] = useState(5);
  const [velocity, setVelocity] = useState(20);
  const [timeInterval, setTimeInterval] = useState(0);

  const momentum = mass * velocity;
  const impulse = timeInterval > 0 ? momentum * timeInterval : 0;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Momentum"
        value={`${formatNumber(momentum, 2)} kg·m/s`}
        highlight={true}
      />
      {timeInterval > 0 && (
        <ResultCard
          label="Impulse"
          value={`${formatNumber(impulse, 2)} N·s`}
          highlight={true}
        />
      )}
    </div>
  );

  return (
    <CalculatorLayout
      title="Momentum Calculator"
      description="Calculate momentum and impulse"
      slug="momentum-calculator"
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
          id="velocity"
          label="Velocity"
          value={velocity}
          onChange={setVelocity}
          suffix="m/s"
          step={0.1}
        />
        <InputField
          id="time-interval"
          label="Time Interval (for Impulse)"
          value={timeInterval}
          onChange={setTimeInterval}
          suffix="s"
          min={0}
          step={0.01}
          hint="Leave at 0 to skip impulse calculation"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "momentum-calculator",
  title: "Momentum Calculator",
  shortTitle: "Momentum",
  description: "Calculate momentum and impulse from mass and velocity",
  category: "physics",
  icon: "🎱",
  keywords: ["momentum", "impulse", "physics", "collision"],
  component: MomentumCalculator,
  dateModified: "2026-04-09",
});
