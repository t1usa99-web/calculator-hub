import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Temperature Scales and Conversions</h3>
      <p>
        Temperature measures thermal energy and is expressed in different scales. The four most common are Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (°R). <strong>Kelvin is the SI unit</strong> for thermodynamic temperature, defined with absolute zero at 0 K (−273.15°C). Kelvin has no degree symbol and is the standard in physics and engineering. Celsius is familiar in everyday use, with water freezing at 0°C and boiling at 100°C at 1 atmosphere pressure. Fahrenheit, used in the US, has water freezing at 32°F and boiling at 212°F—an offset scale lacking physical significance. Rankine (uncommon) is the Fahrenheit equivalent of Kelvin: 0°R = absolute zero, and water freezes at 491.67°R. Conversion formulas: °C = (°F − 32) × 5/9, K = °C + 273.15, °R = (°C + 273.15) × 9/5. Understanding scale differences is critical for scientific calculations, calibrating instruments, and avoiding errors in thermodynamics and materials science.
      </p>
      <p>
        <strong>Understanding Absolute Zero and Scale Origins:</strong> Absolute zero (0 K, −273.15°C, −459.67°F) is the theoretical lowest temperature where all molecular motion ceases. Kelvin and Rankine scales are absolute—zero means zero thermal energy. Celsius and Fahrenheit are relative scales with arbitrary zero points. This distinction matters: heating from 10°C to 20°C (a 10°C change) is the same energy as 20°C to 30°C, because temperature differences are the same. But on Kelvin, 283 K to 293 K is a 10 K change. In gas laws and thermodynamic calculations, absolute temperature (Kelvin) must be used: the ideal gas law PV = nRT requires T in kelvins, not Celsius. Using Celsius gives nonsensical results. Fahrenheit's odd scaling (180 degrees between freezing and boiling instead of 100) stems from historical calibration and complicates science, which is why scientists worldwide use Kelvin.
      </p>
      <p>
        <strong>Worked Example:</strong> Convert 98.6°F (normal human body temperature) to Celsius and Kelvin. Celsius: °C = (98.6 − 32) × 5/9 = 66.6 × 5/9 = 37°C. Kelvin: K = 37 + 273.15 = 310.15 K. Conversely, room temperature 20°C: °F = 20 × 9/5 + 32 = 36 + 32 = 68°F. For a temperature change: if a material expands 0.1% per 10°C change, it expands 0.1% per 10 K change—differences are identical across Celsius and Kelvin, but absolute calculations require Kelvin (e.g., volume ratios in Charles's Law V₁/T₁ = V₂/T₂ need T in Kelvin).
      </p>
      <p>
        <strong>Real-World Applications:</strong> Weather reporting uses Celsius (most of world) or Fahrenheit (US). Cooking temperatures are Fahrenheit (US) or Celsius (elsewhere). Scientific instruments measure in Kelvin or Celsius. Cryogenic applications (liquid nitrogen, −196°C = 77 K) require absolute temperature awareness. Thermostats often use Celsius or Fahrenheit; industrial controllers may use Kelvin for precision. Medical instruments (thermometers, incubators) use Celsius or Fahrenheit locally but Kelvin internally. Astronomical measurements and fundamental physics use Kelvin exclusively. Material properties (expansion coefficients, resistivity temperature dependencies) are specified per Kelvin change.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Forgetting to convert to Kelvin in thermodynamic equations. Using Celsius in PV = nRT or other gas laws gives wrong results by orders of magnitude. Error 2: Confusing temperature and temperature change. To convert a change of 10°C, you don't subtract 32—changes are the same on all linear scales: 10°C = 10 K = 18°F change. Error 3: Misremembering conversion constants. Remember: 0°C = 32°F, 100°C = 212°F. The factor 9/5 converts Celsius to Fahrenheit. Error 4: Using Fahrenheit in scientific contexts. Modern science uses Kelvin; Fahrenheit should be converted immediately for calculations. Error 5: Rounding absolute zero to −273°C instead of −273.15°C. For precision work (e.g., gas law calculations), use −273.15°C or 0 K.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Temperature Converter Calculator"
      description="Convert between Celsius, Fahrenheit, Kelvin, and Rankine"
      slug="temperature-converter-calculator"
      results={results}
      educational={educational}
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
