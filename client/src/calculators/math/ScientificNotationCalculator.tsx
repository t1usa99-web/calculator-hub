import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

function parseScientific(str: string): number | null {
  const trimmed = str.trim();
  // Try parsing as regular number first
  const asNum = parseFloat(trimmed);
  if (!isNaN(asNum)) return asNum;

  // Try parsing as scientific notation (e.g., "1.5e-3")
  const scientificRegex = /^(-?\d+\.?\d*)[eE]([+-]?\d+)$/;
  const match = trimmed.match(scientificRegex);
  if (match) {
    const mantissa = parseFloat(match[1]);
    const exponent = parseInt(match[2], 10);
    return mantissa * Math.pow(10, exponent);
  }

  return null;
}

function getScientificNotation(num: number): { mantissa: number; exponent: number } {
  if (num === 0) return { mantissa: 0, exponent: 0 };

  const absNum = Math.abs(num);
  const exponent = Math.floor(Math.log10(absNum));
  const mantissa = num / Math.pow(10, exponent);

  return { mantissa, exponent };
}

function getEngineeringNotation(num: number): { mantissa: number; exponent: number } {
  if (num === 0) return { mantissa: 0, exponent: 0 };

  const absNum = Math.abs(num);
  const exponent = Math.floor(Math.log10(absNum) / 3) * 3;
  const mantissa = num / Math.pow(10, exponent);

  return { mantissa, exponent };
}

function countSignificantFigures(str: string): number {
  const trimmed = str.trim().replace(/[eE].*$/, "");
  let count = 0;
  let foundNonZero = false;

  for (const char of trimmed) {
    if (char === "." || char === "-" || char === "+") continue;
    if (char === "0" && !foundNonZero) continue;
    foundNonZero = true;
    count++;
  }

  return Math.max(1, count);
}

export default function ScientificNotationCalculator() {
  const [inputText, setInputText] = useState("0.0025");
  const [displayMode, setDisplayMode] = useState("all");

  const parsed = parseScientific(inputText);
  const num = parsed ?? 0;

  const scientificNotation = getScientificNotation(num);
  const engineeringNotation = getEngineeringNotation(num);
  const sigFigs = countSignificantFigures(inputText);

  const standardForm = num.toString();
  const scientificForm = `${formatNumber(scientificNotation.mantissa, 6)} × 10^${scientificNotation.exponent}`;
  const engineeringForm = `${formatNumber(engineeringNotation.mantissa, 6)} × 10^${engineeringNotation.exponent}`;

  const chartData = [
    { name: "Scientific", value: num, fill: "#3b82f6" },
    { name: "Standard", value: num, fill: "#10b981" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Standard Form"
        value={standardForm}
        highlight
      />
      <ResultCard
        label="Scientific Notation"
        value={scientificForm}
        highlight
      />
      <ResultCard
        label="Engineering Notation"
        value={engineeringForm}
      />
      <ResultCard
        label="Mantissa (Scientific)"
        value={formatNumber(scientificNotation.mantissa, 6)}
      />
      <ResultCard
        label="Exponent (Scientific)"
        value={formatNumber(scientificNotation.exponent)}
      />
      <ResultCard
        label="Significant Figures"
        value={formatNumber(sigFigs)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Number Representation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => {
            const absVal = Math.abs(value as number);
            if (absVal < 0.001 || absVal >= 1e6) return scientificForm;
            return formatNumber(value as number, 6);
          }} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Bar key={index} dataKey="value" fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Scientific notation is a method of expressing numbers as a product of a mantissa and a power of 10. It{'\''}s particularly useful for representing very large or very small numbers in a compact, standardized form. Scientists, engineers, and mathematicians use scientific notation daily to simplify calculations and avoid writing long strings of zeros.
      </p>

      <p>
        <strong>Standard Scientific Notation:</strong> Scientific notation is written as a × 10^n, where a is the mantissa (1 ≤ {'|'}a{'|'} {'<'} 10) and n is the exponent (an integer). For example, 5,000 = 5 × 10^3 and 0.0025 = 2.5 × 10^-3. The mantissa has one non-zero digit before the decimal point. This standardization makes comparisons and calculations easier.
      </p>

      <p>
        <strong>Understanding Exponents:</strong> The exponent indicates how many places to move the decimal point. Positive exponents move right (large numbers), negative exponents move left (small numbers). 10^3 = 1,000, so 2.5 × 10^3 = 2,500. 10^-3 = 0.001, so 2.5 × 10^-3 = 0.0025. This exponent is crucial for understanding the magnitude of numbers.
      </p>

      <p>
        <strong>Engineering Notation:</strong> Engineering notation is similar but restricts the exponent to multiples of 3 (×10^-9, ×10^-6, ×10^-3, ×10^0, ×10^3, etc.). This aligns with metric prefixes: nano (10^-9), micro (10^-6), milli (10^-3), kilo (10^3), mega (10^6), giga (10^9). Engineers use this for practical applications with standard unit prefixes.
      </p>

      <p>
        <strong>Significant Figures:</strong> Significant figures are the meaningful digits in a measurement. For 2,500, it could have 2, 3, or 4 significant figures depending on context. In scientific notation, 2.50 × 10^3 clearly shows 3 significant figures. This helps communicate precision in scientific and engineering work, ensuring calculations maintain appropriate accuracy throughout measurements and computations.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Scientific Notation Calculator"
      description="Convert between standard, scientific, and engineering notation"
      slug="scientific-notation-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="input-number"
          label="Enter a Number (standard or scientific: e.g., 0.0025 or 2.5e-3)"
          value={inputText}
          onChange={setInputText}
          placeholder="0.0025"
        />
        <SelectField
          id="display-mode"
          label="Display Mode"
          value={displayMode}
          onChange={setDisplayMode}
          options={[
            { value: "all", label: "All Formats" },
            { value: "scientific", label: "Scientific Only" },
            { value: "engineering", label: "Engineering Only" },
          ]}
        />
        {parsed === null && inputText.trim() !== "" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
            Could not parse input. Try "0.0025", "2.5e-3", or "1500".
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
