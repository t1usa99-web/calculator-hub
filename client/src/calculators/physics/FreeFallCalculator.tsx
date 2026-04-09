import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FreeFallCalculator() {
  const [height, setHeight] = useState(100);
  const [initialVelocity, setInitialVelocity] = useState(0);
  const [g, setG] = useState(9.81);

  // h = v₀t + ½gt² → solve for t using quadratic formula
  const a = g / 2;
  const b = initialVelocity;
  const c = -height;
  const discriminant = b * b - 4 * a * c;
  const timeToFall = discriminant >= 0 ? (-b + Math.sqrt(discriminant)) / (2 * a) : 0;
  const finalVelocity = initialVelocity + g * timeToFall;
  const distanceFallen = height;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Time to Fall"
        value={`${formatNumber(timeToFall, 2)} s`}
        highlight={true}
      />
      <ResultCard
        label="Final Velocity"
        value={`${formatNumber(finalVelocity, 2)} m/s`}
        highlight={true}
      />
      <ResultCard label="Distance Fallen" value={`${formatNumber(distanceFallen, 2)} m`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Free Fall Calculator"
      description="Calculate time, velocity, and distance for falling objects"
      slug="free-fall-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="initial-height"
          label="Initial Height"
          value={height}
          onChange={setHeight}
          suffix="m"
          min={0}
          step={0.1}
        />
        <InputField
          id="initial-velocity"
          label="Initial Velocity"
          value={initialVelocity}
          onChange={setInitialVelocity}
          suffix="m/s"
          step={0.1}
        />
        <InputField
          id="gravity"
          label="Gravity (g)"
          value={g}
          onChange={setG}
          suffix="m/s²"
          min={0.1}
          step={0.01}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "free-fall-calculator",
  title: "Free Fall Calculator",
  shortTitle: "Free Fall",
  description: "Calculate free fall time, velocity, and distance",
  category: "physics",
  icon: "🪂",
  keywords: ["free fall", "gravity", "kinematics", "velocity"],
  component: FreeFallCalculator,
  dateModified: "2026-04-09",
});
