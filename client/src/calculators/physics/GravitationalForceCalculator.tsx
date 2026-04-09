import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function GravitationalForceCalculator() {
  const [mass1, setMass1] = useState(5.972e24);
  const [mass2, setMass2] = useState(1000);
  const [distance, setDistance] = useState(6371000);

  const G = 6.674e-11;
  const force = (G * mass1 * mass2) / (distance * distance);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Gravitational Force"
        value={`${formatNumber(force, 2)} N`}
        highlight={true}
      />
      <ResultCard
        label="Force (Scientific)"
        value={`${force.toExponential(3)} N`}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Gravitational Force Calculator"
      description="Calculate gravitational force between two masses"
      slug="gravitational-force-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="mass-1"
          label="Mass 1"
          value={mass1}
          onChange={setMass1}
          suffix="kg"
          min={0.01}
          step={1e20}
        />
        <InputField
          id="mass-2"
          label="Mass 2"
          value={mass2}
          onChange={setMass2}
          suffix="kg"
          min={0.01}
          step={100}
        />
        <InputField
          id="distance"
          label="Distance"
          value={distance}
          onChange={setDistance}
          suffix="m"
          min={1}
          step={1000}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "gravitational-force-calculator",
  title: "Gravitational Force Calculator",
  shortTitle: "Gravitational Force",
  description: "Calculate gravitational force between two masses",
  category: "physics",
  icon: "🌍",
  keywords: ["gravity", "gravitational force", "Newton", "physics"],
  component: GravitationalForceCalculator,
  dateModified: "2026-04-09",
});
