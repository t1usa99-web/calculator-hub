import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function EscapeVelocityCalculator() {
  const [mass, setMass] = useState(5.972e24);
  const [radius, setRadius] = useState(6371000);

  const G = 6.674e-11;
  const escapeVelocity = Math.sqrt((2 * G * mass) / radius);
  const escapeVelocityKms = escapeVelocity / 1000;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Escape Velocity"
        value={`${formatNumber(escapeVelocity, 2)} m/s`}
        highlight={true}
      />
      <ResultCard label="In km/s" value={`${formatNumber(escapeVelocityKms, 3)} km/s`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Escape Velocity Calculator"
      description="Calculate escape velocity from planet mass and radius"
      slug="escape-velocity-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="planet-mass"
          label="Planet Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={1e20}
          step={1e23}
          hint="Earth: 5.972e24 kg"
        />
        <InputField
          id="planet-radius"
          label="Planet Radius"
          value={radius}
          onChange={setRadius}
          suffix="m"
          min={1000}
          step={100000}
          hint="Earth: 6,371,000 m"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "escape-velocity-calculator",
  title: "Escape Velocity Calculator",
  shortTitle: "Escape Velocity",
  description: "Calculate escape velocity from planetary mass and radius",
  category: "physics",
  icon: "🛸",
  keywords: ["escape velocity", "gravitational", "planet", "space"],
  component: EscapeVelocityCalculator,
  dateModified: "2026-04-09",
});
