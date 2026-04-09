import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function CentripetalForceCalculator() {
  const [mass, setMass] = useState(5);
  const [velocity, setVelocity] = useState(10);
  const [radius, setRadius] = useState(2);

  const centripetal = (mass * velocity * velocity) / radius;
  const centripetalAccel = (velocity * velocity) / radius;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Centripetal Force"
        value={`${formatNumber(centripetal, 2)} N`}
        highlight={true}
      />
      <ResultCard
        label="Centripetal Acceleration"
        value={`${formatNumber(centripetalAccel, 2)} m/s²`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Centripetal Force Calculator"
      description="Calculate centripetal force and acceleration for circular motion"
      slug="centripetal-force-calculator"
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
        <InputField
          id="radius"
          label="Radius"
          value={radius}
          onChange={setRadius}
          suffix="m"
          min={0.01}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "centripetal-force-calculator",
  title: "Centripetal Force Calculator",
  shortTitle: "Centripetal Force",
  description: "Calculate centripetal force and acceleration for circular motion",
  category: "physics",
  icon: "🌀",
  keywords: ["centripetal", "circular motion", "force", "acceleration"],
  component: CentripetalForceCalculator,
  dateModified: "2026-04-09",
});
