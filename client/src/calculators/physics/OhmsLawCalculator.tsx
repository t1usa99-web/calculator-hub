import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState(12);
  const [current, setCurrent] = useState(2);
  const [resistance, setResistance] = useState(6);
  const [solveFor, setSolveFor] = useState("power");

  let resultValue = voltage * current;
  let resultLabel = "Power";
  let resultUnit = "W";

  if (solveFor === "voltage") {
    resultValue = current * resistance;
    resultLabel = "Voltage";
    resultUnit = "V";
  } else if (solveFor === "current") {
    resultValue = voltage / resistance;
    resultLabel = "Current";
    resultUnit = "A";
  } else if (solveFor === "resistance") {
    resultValue = resistance > 0 ? voltage / current : 0;
    resultLabel = "Resistance";
    resultUnit = "Ω";
  }

  const power = voltage * current;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label={resultLabel} value={`${formatNumber(resultValue, 2)} ${resultUnit}`} highlight={true} />
      {solveFor !== "power" && (
        <ResultCard label="Power" value={`${formatNumber(power, 2)} W`} />
      )}
    </div>
  );

  return (
    <CalculatorLayout
      title="Ohm's Law Calculator"
      description="Calculate voltage, current, resistance, and power"
      slug="ohms-law-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="solve-for"
          label="Calculate"
          value={solveFor}
          onChange={setSolveFor}
          options={[
            { value: "power", label: "Power (V × I)" },
            { value: "voltage", label: "Voltage (I × R)" },
            { value: "current", label: "Current (V / R)" },
            { value: "resistance", label: "Resistance (V / I)" },
          ]}
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
        <InputField
          id="current"
          label="Current"
          value={current}
          onChange={setCurrent}
          suffix="A"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="resistance"
          label="Resistance"
          value={resistance}
          onChange={setResistance}
          suffix="Ω"
          min={0.001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "ohms-law-calculator",
  title: "Ohm's Law Calculator",
  shortTitle: "Ohm's Law",
  description: "Calculate voltage, current, resistance, and power",
  category: "physics",
  icon: "💡",
  keywords: ["Ohm's law", "voltage", "current", "resistance"],
  component: OhmsLawCalculator,
  dateModified: "2026-04-09",
});
