import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function TemperatureConverterCalculator() {
  const [value, setValue] = useState(20);
  const [fromUnit, setFromUnit] = useState("C");
  const [toUnit, setToUnit] = useState("F");

  const convertTemperature = (val, from, to) => {
    let celsius = 0;
    if (from === "C") celsius = val;
    else if (from === "F") celsius = ((val - 32) * 5) / 9;
    else if (from === "K") celsius = val - 273.15;
    else if (from === "R") celsius = ((val - 491.67) * 5) / 9;

    if (to === "C") return celsius;
    else if (to === "F") return (celsius * 9) / 5 + 32;
    else if (to === "K") return celsius + 273.15;
    else if (to === "R") return (celsius + 273.15) * 9 / 5;
    return celsius;
  };

  const converted = convertTemperature(value, fromUnit, toUnit);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={`${value}° ${fromUnit}`}
        value={`${formatNumber(converted, 2)}° ${toUnit}`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Temperature Converter Calculator"
      description="Convert between Celsius, Fahrenheit, Kelvin, and Rankine"
      slug="temperature-converter-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="temperature-value"
          label="Temperature Value"
          value={value}
          onChange={setValue}
          step={0.1}
        />
        <SelectField
          id="from-unit"
          label="From Unit"
          value={fromUnit}
          onChange={setFromUnit}
          options={[
            { value: "C", label: "Celsius (°C)" },
            { value: "F", label: "Fahrenheit (°F)" },
            { value: "K", label: "Kelvin (K)" },
            { value: "R", label: "Rankine (°R)" },
          ]}
        />
        <SelectField
          id="to-unit"
          label="To Unit"
          value={toUnit}
          onChange={setToUnit}
          options={[
            { value: "C", label: "Celsius (°C)" },
            { value: "F", label: "Fahrenheit (°F)" },
            { value: "K", label: "Kelvin (K)" },
            { value: "R", label: "Rankine (°R)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "temperature-converter-calculator",
  title: "Temperature Converter Calculator",
  shortTitle: "Temperature Converter",
  description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine",
  category: "physics",
  icon: "🌡️",
  keywords: ["temperature", "converter", "Celsius", "Fahrenheit", "Kelvin"],
  component: TemperatureConverterCalculator,
  dateModified: "2026-04-09",
});
