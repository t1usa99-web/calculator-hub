import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ElectricPowerCalculator() {
  const [voltage, setVoltage] = useState(120);
  const [current, setCurrent] = useState(5);

  const power = voltage * current;
  const powerKw = power / 1000;
  const powerHp = power / 745.7;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Power"
        value={`${formatNumber(power, 2)} W`}
        highlight={true}
      />
      <ResultCard label="In Kilowatts" value={`${formatNumber(powerKw, 4)} kW`} />
      <ResultCard label="In Horsepower" value={`${formatNumber(powerHp, 4)} HP`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Electric Power Calculator"
      description="Calculate power from voltage and current"
      slug="electric-power-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="voltage"
          label="Voltage"
          value={voltage}
          onChange={setVoltage}
          suffix="V"
          min={0}
          step={0.1}
        />
        <InputField
          id="current"
          label="Current"
          value={current}
          onChange={setCurrent}
          suffix="A"
          min={0.001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "electric-power-calculator",
  title: "Electric Power Calculator",
  shortTitle: "Electric Power",
  description: "Calculate power from voltage and current",
  category: "physics",
  icon: "⚡",
  keywords: ["power", "voltage", "current", "watt"],
  component: ElectricPowerCalculator,
  dateModified: "2026-04-09",
});
