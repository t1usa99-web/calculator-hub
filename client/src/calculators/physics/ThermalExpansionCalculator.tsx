import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ThermalExpansionCalculator() {
  const [length, setLength] = useState(1);
  const [tempChange, setTempChange] = useState(100);
  const [coefficient, setCoefficient] = useState(1.2e-5);

  const deltaL = coefficient * length * tempChange;
  const newLength = length + deltaL;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Length Change (ΔL)"
        value={`${deltaL.toExponential(3)} m`}
        highlight={true}
      />
      <ResultCard label="New Length" value={`${formatNumber(newLength, 6)} m`} highlight={true} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Thermal Expansion Calculator"
      description="Calculate thermal expansion of materials"
      slug="thermal-expansion-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="original-length"
          label="Original Length"
          value={length}
          onChange={setLength}
          suffix="m"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="temp-change"
          label="Temperature Change"
          value={tempChange}
          onChange={setTempChange}
          suffix="K"
          step={1}
        />
        <InputField
          id="coefficient"
          label="Coefficient of Expansion"
          value={coefficient}
          onChange={setCoefficient}
          suffix="1/K"
          step={1e-6}
          hint="Steel: 1.2e-5, Aluminum: 2.3e-5, Copper: 1.7e-5"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "thermal-expansion-calculator",
  title: "Thermal Expansion Calculator",
  shortTitle: "Thermal Expansion",
  description: "Calculate thermal expansion of materials with temperature change",
  category: "physics",
  icon: "📏",
  keywords: ["thermal expansion", "temperature", "coefficient", "material"],
  component: ThermalExpansionCalculator,
  dateModified: "2026-04-09",
});
