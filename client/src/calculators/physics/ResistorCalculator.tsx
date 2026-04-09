import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ResistorCalculator() {
  const [resistor1, setResistor1] = useState(100);
  const [resistor2, setResistor2] = useState(100);
  const [configuration, setConfiguration] = useState("series");

  let totalResistance = 0;
  if (configuration === "series") {
    totalResistance = resistor1 + resistor2;
  } else if (configuration === "parallel") {
    totalResistance = (resistor1 * resistor2) / (resistor1 + resistor2);
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Resistance"
        value={`${formatNumber(totalResistance, 2)} Ω`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Resistor Calculator"
      description="Calculate total resistance for series and parallel circuits"
      slug="resistor-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="configuration"
          label="Configuration"
          value={configuration}
          onChange={setConfiguration}
          options={[
            { value: "series", label: "Series (R = R₁ + R₂)" },
            { value: "parallel", label: "Parallel (R = R₁ × R₂ / (R₁ + R₂))" },
          ]}
        />
        <InputField
          id="resistor-1"
          label="Resistor 1"
          value={resistor1}
          onChange={setResistor1}
          suffix="Ω"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="resistor-2"
          label="Resistor 2"
          value={resistor2}
          onChange={setResistor2}
          suffix="Ω"
          min={0.001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "resistor-calculator",
  title: "Resistor Calculator",
  shortTitle: "Resistor",
  description: "Calculate total resistance in series and parallel circuits",
  category: "physics",
  icon: "🔌",
  keywords: ["resistor", "resistance", "series", "parallel", "circuit"],
  component: ResistorCalculator,
  dateModified: "2026-04-09",
});
