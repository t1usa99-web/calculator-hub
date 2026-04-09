import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function CapacitorCalculator() {
  const [capacitance, setCapacitance] = useState(0.001);
  const [voltage, setVoltage] = useState(12);

  const charge = capacitance * voltage;
  const energy = 0.5 * capacitance * voltage * voltage;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Charge"
        value={`${formatNumber(charge, 4)} C`}
        highlight={true}
      />
      <ResultCard
        label="Energy Stored"
        value={`${formatNumber(energy, 4)} J`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Capacitor Calculator"
      description="Calculate charge and energy stored in a capacitor"
      slug="capacitor-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="capacitance"
          label="Capacitance"
          value={capacitance}
          onChange={setCapacitance}
          suffix="F"
          min={1e-12}
          step={0.00001}
        />
        <InputField
          id="voltage"
          label="Voltage"
          value={voltage}
          onChange={setVoltage}
          suffix="V"
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "capacitor-calculator",
  title: "Capacitor Calculator",
  shortTitle: "Capacitor",
  description: "Calculate charge and energy in a capacitor",
  category: "physics",
  icon: "🔋",
  keywords: ["capacitor", "charge", "capacitance", "energy"],
  component: CapacitorCalculator,
  dateModified: "2026-04-09",
});
