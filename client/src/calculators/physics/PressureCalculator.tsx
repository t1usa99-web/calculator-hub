import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PressureCalculator() {
  const [force, setForce] = useState(1000);
  const [area, setArea] = useState(1);

  const pressure = force / area;
  const pressureKpa = pressure / 1000;
  const pressureBar = pressure / 100000;
  const pressureAtm = pressure / 101325;
  const pressurePsi = pressure / 6894.76;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Pressure (Pa)"
        value={`${formatNumber(pressure, 2)} Pa`}
        highlight={true}
      />
      <ResultCard label="In kPa" value={`${formatNumber(pressureKpa, 4)} kPa`} />
      <ResultCard label="In bar" value={`${formatNumber(pressureBar, 4)} bar`} />
      <ResultCard label="In atm" value={`${formatNumber(pressureAtm, 4)} atm`} />
      <ResultCard label="In psi" value={`${formatNumber(pressurePsi, 4)} psi`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Pressure Calculator"
      description="Calculate pressure from force and area with multiple units"
      slug="pressure-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="force"
          label="Force"
          value={force}
          onChange={setForce}
          suffix="N"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="area"
          label="Area"
          value={area}
          onChange={setArea}
          suffix="m²"
          min={0.001}
          step={0.01}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "pressure-calculator",
  title: "Pressure Calculator",
  shortTitle: "Pressure",
  description: "Calculate pressure and convert between pressure units",
  category: "physics",
  icon: "🌡️",
  keywords: ["pressure", "force", "area", "units"],
  component: PressureCalculator,
  dateModified: "2026-04-09",
});
