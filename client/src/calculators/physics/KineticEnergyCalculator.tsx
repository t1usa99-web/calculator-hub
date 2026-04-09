import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function KineticEnergyCalculator() {
  const [mass, setMass] = useState(60);
  const [velocity, setVelocity] = useState(10);

  const ke = 0.5 * mass * velocity * velocity;
  const keKJ = ke / 1000;
  const keKcal = ke / 4184;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Kinetic Energy"
        value={`${formatNumber(ke, 2)} J`}
        highlight={true}
      />
      <ResultCard label="In Kilojoules" value={`${formatNumber(keKJ, 4)} kJ`} />
      <ResultCard label="In Kilocalories" value={`${formatNumber(keKcal, 4)} kcal`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Kinetic Energy Calculator"
      description="Calculate kinetic energy from mass and velocity"
      slug="kinetic-energy-calculator"
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
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "kinetic-energy-calculator",
  title: "Kinetic Energy Calculator",
  shortTitle: "Kinetic Energy",
  description: "Calculate kinetic energy of moving objects",
  category: "physics",
  icon: "⚡",
  keywords: ["kinetic energy", "energy", "physics", "motion"],
  component: KineticEnergyCalculator,
  dateModified: "2026-04-09",
});
