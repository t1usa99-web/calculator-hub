import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { ROUNDING_FAQS } from "@/lib/faq-math";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RoundingCalculator() {
  const [value, setValue] = useState(3.14159);
  const [precision, setPrecision] = useState("0");

  const precisionOptions = [
    { value: "1000", label: "Nearest 1,000" },
    { value: "100", label: "Nearest 100" },
    { value: "10", label: "Nearest 10" },
    { value: "1", label: "Nearest Whole Number" },
    { value: "0.1", label: "Nearest Tenth (1 decimal)" },
    { value: "0.01", label: "Nearest Hundredth (2 decimals)" },
    { value: "0.001", label: "Nearest Thousandth (3 decimals)" },
  ];

  const precisionValue = parseFloat(precision);
  const scale = 1 / precisionValue;

  // Standard rounding (round half up)
  const rounded = Math.round(value * scale) / scale;

  // Ceiling (round up)
  const roundedUp = Math.ceil(value * scale) / scale;

  // Floor (round down)
  const roundedDown = Math.floor(value * scale) / scale;

  // Round to nearest even (banker's rounding)
  const roundedEven = (() => {
    const scaled = value * scale;
    const floored = Math.floor(scaled);
    const remainder = scaled - floored;

    if (remainder < 0.5) return floored / scale;
    if (remainder > 0.5) return (floored + 1) / scale;

    // Exactly 0.5 - round to nearest even
    return (floored % 2 === 0 ? floored : floored + 1) / scale;
  })();

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Rounded (Half Up)"
        value={formatNumber(rounded)}
        highlight={true}
      />
      <ResultCard
        label="Rounded Up (Ceiling)"
        value={formatNumber(roundedUp)}
        highlight={true}
      />
      <ResultCard
        label="Rounded Down (Floor)"
        value={formatNumber(roundedDown)}
      />
      <ResultCard
        label="Rounded to Nearest Even"
        value={formatNumber(roundedEven)}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Rounding</h3>
      <p>
        <strong>Rounding</strong> replaces a number with a simpler approximation while keeping it close to the original value. <strong>Basic rule:</strong> Identify the rounding place (e.g., nearest tenth). Look at the digit to the right (test digit). If test ≥ 5, round up; if {'<'} 5, round down. Example: 3.46 rounded to nearest tenth: test digit = 6 ≥ 5, so round up → 3.5. Another: 3.44 → test = 4 {'<'} 5 → round down → 3.4. <strong>Rounding place values:</strong> To nearest whole: look at tenths. To nearest tenth: look at hundredths. To nearest hundred: look at tens. Always remember the rule: 5 and above, give it a shove (round up); 4 and below, let it go (round down).
      </p>
      <p>
        <strong>Why Round?</strong> Simplifies numbers for communication and mental math. $3.486 is awkward; $3.49 or $3.50 is clearer. Scientific measurements often round to significant figures to convey precision. <strong>Cascading carries:</strong> Sometimes rounding causes a carry. Example: 9.96 rounded to nearest tenth: hundredths = 6 ≥ 5, round tenths from 9 to 10, which carries: 9.96 → 10.0. <strong>Rounding vs. Truncating:</strong> Rounding adjusts based on the test digit. Truncating (chopping) simply removes digits without adjustment. 3.67 rounded → 3.7; truncated → 3.6. Rounding is more accurate; truncating is faster in programming.
      </p>
      <p>
        <strong>Significant Figures and Precision:</strong> Rounding to significant figures (sig figs) controls the precision of your answer. 1.234 to 2 sig figs = 1.2. To 3 sig figs = 1.23. Sig figs account for measurement uncertainty. A measurement of "100 m" is ambiguous (could be ±0.5 to ±50 m); "1.00 × 10² m" is clearer (±0.5 m). In science, rounding appropriately prevents false precision and communicates confidence in your measurements.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Rounding Calculator"
      description="Round numbers up, down, or to nearest value with various precision options"
      slug="rounding-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="value"
          label="Value to Round"
          value={value}
          onChange={setValue}
          min={-1000000}
          max={1000000}
          step={0.01}
        />

        <SelectField
          id="precision"
          label="Precision"
          value={precision}
          onChange={setPrecision}
          options={precisionOptions}
        />

        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
          <p className="font-semibold mb-2">Rounding Methods:</p>
          <ul className="space-y-1 text-xs">
            <li>
              <strong>Half Up:</strong> Standard rounding (0.5 rounds up)
            </li>
            <li>
              <strong>Ceiling:</strong> Always round up
            </li>
            <li>
              <strong>Floor:</strong> Always round down
            </li>
            <li>
              <strong>Banker's Rounding:</strong> Round 0.5 to nearest even
              number
            </li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RoundingCalculator,
  slug: "rounding-calculator",
  title: "Rounding Calculator",
  shortTitle: "Rounding",
  description:
    "Round numbers with various methods including ceiling, floor, and banker's rounding",
  category: "math",
  icon: "🎯",
  keywords: [
    "rounding",
    "round up",
    "round down",
    "ceiling",
    "floor",
    "precision",
  ],
  faqs: ROUNDING_FAQS,
  dateModified: "2026-04-09",
});
