import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { RESISTOR_FAQS } from "@/lib/faq-physics-advanced";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Resistor Combinations and Color Codes</h3>
      <p>
        Resistors are passive components that oppose current flow. Their value is measured in ohms (Ω), and they can be combined in two fundamental configurations: series and parallel. In <strong>series</strong>, resistors are connected end-to-end, and the total resistance is the sum: <strong>R_total = R₁ + R₂ + ... + Rₙ</strong>. In <strong>parallel</strong>, all resistors share the same voltage, and the reciprocal of total resistance equals the sum of reciprocals: <strong>1/R_total = 1/R₁ + 1/R₂</strong>, which simplifies for two resistors to <strong>R_total = (R₁ × R₂) / (R₁ + R₂)</strong>. Series resistances add directly (larger total), while parallel resistances always decrease the total (smaller than any single resistor). Series is used to drop voltage across multiple stages; parallel is used to split current or achieve a specific resistance value not available in single components. Understanding these combinations is essential for circuit design and troubleshooting.
      </p>
      <p>
        <strong>Resistor Color Code:</strong> Through-hole resistors use colored bands to indicate their value and tolerance. Standard resistors use four bands: first two digits, multiplier (power of 10), and tolerance. Example: brown-black-red-gold = 10 × 10² = 1,000 Ω (1 kΩ) with ±5% tolerance. Five-band and six-band resistors add precision bands for temperature coefficients. The color sequence is: black (0), brown (1), red (2), orange (3), yellow (4), green (5), blue (6), violet (7), grey (8), white (9). Gold = ×0.1, silver = ×0.01. Tolerance bands: gold = ±5%, silver = ±10%, brown = ±1%, red = ±2%. Learning the code avoids measuring with a multimeter and speeds circuit assembly.
      </p>
      <p>
        <strong>Worked Example:</strong> Two resistors, 100 Ω and 200 Ω, are combined. In series: R_total = 100 + 200 = 300 Ω (all current flows through both, high opposition). In parallel: R_total = (100 × 200) / (100 + 200) = 20,000 / 300 ≈ 66.7 Ω (current splits, lower opposition). Note that the parallel result (66.7 Ω) is less than the smallest resistor (100 Ω). If a 12 V source drives the series combination, I = 12 / 300 = 0.04 A flows. The same source across the parallel combination draws I = 12 / 66.7 ≈ 0.18 A (4.5 times more current), showing why parallel configurations are used to increase current capacity.
      </p>
      <p>
        <strong>Real-World Applications:</strong> LED circuits often use a series resistor to limit current and protect the LED. Household lights and appliances are wired in parallel so each can be independently switched and fully powered. Audio amplifiers use series resistors for impedance matching and parallel combinations for biasing networks. Temperature sensors and precision circuits use low-tolerance resistors (1% or better). Power resistors dissipate heat and must be rated by wattage (e.g., a 10 W resistor) to avoid burning out. Understanding series vs. parallel guides decisions in everything from simple breadboard prototyping to industrial power distribution.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Misreading color bands—always read from left to right, and check the tolerance band. A gold band is a multiplier (×0.1), not tolerance. Error 2: Forgetting that parallel resistance is always less than the smallest resistor. If your calculation gives a higher value, you made an arithmetic error. Error 3: Confusing tolerance with measured error. A 1 kΩ resistor with ±5% tolerance can be 950 Ω to 1,050 Ω by design, and manufacturing variance is normal. Error 4: Ignoring resistor power ratings. A 0.25 W resistor carrying 1 A (P = I²R = 1² × R) can only safely be 0.25 Ω—a tiny value. Most circuit resistors are 0.25 W or 0.5 W; power supplies and amplifiers may need 1–10 W or higher.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Resistor Calculator"
      description="Calculate total resistance for series and parallel circuits"
      slug="resistor-calculator"
      results={results}
      educational={educational}
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
  faqs: RESISTOR_FAQS,
  dateModified: "2026-04-09",
});
