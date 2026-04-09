import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function IdealGasLawCalculator() {
  const [pressure, setPressure] = useState(101325);
  const [volume, setVolume] = useState(0.1);
  const [moles, setMoles] = useState(1);
  const [temperature, setTemperature] = useState(298.15);
  const [solveFor, setSolveFor] = useState("moles");

  const R = 8.314;

  let resultValue = (pressure * volume) / (R * temperature);
  let resultLabel = "Moles";
  let resultUnit = "mol";

  if (solveFor === "pressure") {
    resultValue = (moles * R * temperature) / volume;
    resultLabel = "Pressure";
    resultUnit = "Pa";
  } else if (solveFor === "volume") {
    resultValue = (moles * R * temperature) / pressure;
    resultLabel = "Volume";
    resultUnit = "m³";
  } else if (solveFor === "temperature") {
    resultValue = (pressure * volume) / (moles * R);
    resultLabel = "Temperature";
    resultUnit = "K";
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={resultLabel}
        value={`${formatNumber(resultValue, 4)} ${resultUnit}`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Ideal Gas Law Calculator"
      description="Calculate pressure, volume, temperature, or moles using ideal gas law"
      slug="ideal-gas-law-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="solve-for"
          label="Calculate"
          value={solveFor}
          onChange={setSolveFor}
          options={[
            { value: "moles", label: "Moles (n)" },
            { value: "pressure", label: "Pressure (P)" },
            { value: "volume", label: "Volume (V)" },
            { value: "temperature", label: "Temperature (T)" },
          ]}
        />
        <InputField
          id="pressure"
          label="Pressure"
          value={pressure}
          onChange={setPressure}
          suffix="Pa"
          min={0.1}
          step={1000}
        />
        <InputField
          id="volume"
          label="Volume"
          value={volume}
          onChange={setVolume}
          suffix="m³"
          min={0.001}
          step={0.01}
        />
        <InputField
          id="moles"
          label="Moles"
          value={moles}
          onChange={setMoles}
          suffix="mol"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="temperature"
          label="Temperature"
          value={temperature}
          onChange={setTemperature}
          suffix="K"
          min={1}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "ideal-gas-law-calculator",
  title: "Ideal Gas Law Calculator",
  shortTitle: "Ideal Gas Law",
  description: "Calculate gas properties using the ideal gas law (PV = nRT)",
  category: "physics",
  icon: "💨",
  keywords: ["ideal gas law", "pressure", "volume", "temperature"],
  component: IdealGasLawCalculator,
  dateModified: "2026-04-09",
});
