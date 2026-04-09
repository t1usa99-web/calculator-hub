import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function HeatCapacityCalculator() {
  const [mass, setMass] = useState(1);
  const [specificHeat, setSpecificHeat] = useState(4186);
  const [tempChange, setTempChange] = useState(10);

  const heat = mass * specificHeat * tempChange;
  const heatKj = heat / 1000;
  const heatKcal = heat / 4184;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Heat Energy"
        value={`${formatNumber(heat, 2)} J`}
        highlight={true}
      />
      <ResultCard label="In Kilojoules" value={`${formatNumber(heatKj, 4)} kJ`} />
      <ResultCard label="In Kilocalories" value={`${formatNumber(heatKcal, 4)} kcal`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Heat Capacity Calculator"
      description="Calculate heat energy required to change temperature"
      slug="heat-capacity-calculator"
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
          id="specific-heat"
          label="Specific Heat"
          value={specificHeat}
          onChange={setSpecificHeat}
          suffix="J/(kg·K)"
          min={1}
          step={100}
          hint="Water: 4186, Aluminum: 897, Steel: 490"
        />
        <InputField
          id="temp-change"
          label="Temperature Change"
          value={tempChange}
          onChange={setTempChange}
          suffix="K"
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "heat-capacity-calculator",
  title: "Heat Capacity Calculator",
  shortTitle: "Heat Capacity",
  description: "Calculate heat energy from mass, specific heat, and temperature change",
  category: "physics",
  icon: "🔥",
  keywords: ["heat", "specific heat capacity", "temperature", "thermodynamics"],
  component: HeatCapacityCalculator,
  dateModified: "2026-04-09",
});
