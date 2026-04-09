import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PotentialEnergyCalculator() {
  const [mass, setMass] = useState(10);
  const [height, setHeight] = useState(100);
  const [g, setG] = useState(9.81);

  const pe = mass * g * height;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Gravitational Potential Energy"
        value={`${formatNumber(pe, 2)} J`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Potential Energy Calculator"
      description="Calculate gravitational potential energy"
      slug="potential-energy-calculator"
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
          id="height"
          label="Height"
          value={height}
          onChange={setHeight}
          suffix="m"
          min={0}
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
  slug: "potential-energy-calculator",
  title: "Potential Energy Calculator",
  shortTitle: "Potential Energy",
  description: "Calculate gravitational potential energy at a given height",
  category: "physics",
  icon: "⛰️",
  keywords: ["potential energy", "gravitational energy", "height", "physics"],
  component: PotentialEnergyCalculator,
  dateModified: "2026-04-09",
});
