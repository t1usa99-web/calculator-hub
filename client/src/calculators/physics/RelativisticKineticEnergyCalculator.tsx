import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RelativisticKineticEnergyCalculator() {
  const [mass, setMass] = useState(1);
  const [velocityFraction, setVelocityFraction] = useState(0.5);

  const c = 299792458;
  const velocity = velocityFraction * c;

  const gamma = 1 / Math.sqrt(1 - (velocityFraction * velocityFraction));
  const relativisticKe = (gamma - 1) * mass * c * c;
  const newtonianKe = 0.5 * mass * velocity * velocity;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Relativistic KE"
        value={`${relativisticKe.toExponential(3)} J`}
        highlight={true}
      />
      <ResultCard
        label="Newtonian KE"
        value={`${newtonianKe.toExponential(3)} J`}
      />
      <ResultCard label="Lorentz Factor (γ)" value={`${formatNumber(gamma, 4)}`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Relativistic Kinetic Energy Calculator"
      description="Calculate kinetic energy at relativistic speeds"
      slug="relativistic-kinetic-energy-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="mass"
          label="Rest Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="velocity-fraction"
          label="Velocity as Fraction of c"
          value={velocityFraction}
          onChange={setVelocityFraction}
          suffix="c"
          min={0}
          max={0.999}
          step={0.01}
          hint="0 = stationary, 1 = speed of light"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "relativistic-kinetic-energy-calculator",
  title: "Relativistic Kinetic Energy Calculator",
  shortTitle: "Relativistic KE",
  description: "Calculate kinetic energy at relativistic speeds using E = (γ-1)mc²",
  category: "physics",
  icon: "🚀",
  keywords: ["relativistic", "kinetic energy", "special relativity", "Einstein"],
  component: RelativisticKineticEnergyCalculator,
  dateModified: "2026-04-09",
});
