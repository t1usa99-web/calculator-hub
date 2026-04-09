import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ElectricFieldCalculator() {
  const [charge, setCharge] = useState(1e-6);
  const [distance, setDistance] = useState(1);

  const k = 8.9875e9;
  const electricField = (k * charge) / (distance * distance);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Electric Field"
        value={`${formatNumber(electricField, 2)} V/m`}
        highlight={true}
      />
      <ResultCard
        label="Field (Scientific)"
        value={`${electricField.toExponential(3)} V/m`}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Electric Field Calculator"
      description="Calculate electric field from charge and distance"
      slug="electric-field-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="charge"
          label="Charge"
          value={charge}
          onChange={setCharge}
          suffix="C"
          step={1e-7}
        />
        <InputField
          id="distance"
          label="Distance"
          value={distance}
          onChange={setDistance}
          suffix="m"
          min={0.001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "electric-field-calculator",
  title: "Electric Field Calculator",
  shortTitle: "Electric Field",
  description: "Calculate electric field from charge and distance",
  category: "physics",
  icon: "🌩️",
  keywords: ["electric field", "charge", "distance", "voltage"],
  component: ElectricFieldCalculator,
  dateModified: "2026-04-09",
});
