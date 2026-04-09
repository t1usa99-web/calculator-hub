import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DensityCalculator() {
  const [mass, setMass] = useState(1000);
  const [volume, setVolume] = useState(1);

  const density = mass / volume;
  const densityGcm3 = density / 1000;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Density"
        value={`${formatNumber(density, 2)} kg/m³`}
        highlight={true}
      />
      <ResultCard label="In g/cm³" value={`${formatNumber(densityGcm3, 4)} g/cm³`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Density Calculator"
      description="Calculate density from mass and volume"
      slug="density-calculator"
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
          step={10}
        />
        <InputField
          id="volume"
          label="Volume"
          value={volume}
          onChange={setVolume}
          suffix="m³"
          min={0.0001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "density-calculator",
  title: "Density Calculator",
  shortTitle: "Density",
  description: "Calculate density from mass and volume",
  category: "physics",
  icon: "⚖️",
  keywords: ["density", "mass", "volume", "material"],
  component: DensityCalculator,
  dateModified: "2026-04-09",
});
