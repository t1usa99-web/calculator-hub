import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RatioCalculator() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(8);
  const [c, setC] = useState(15);
  const [solveMode, setSolveMode] = useState("solve-d");

  // GCD function
  function gcd(x: number, y: number): number {
    return y === 0 ? x : gcd(y, x % y);
  }

  // Simplify ratio
  const divisor = gcd(Math.abs(a), Math.abs(b));
  const simplifiedA = a / divisor;
  const simplifiedB = b / divisor;

  // Solve proportion
  let unknownValue = 0;
  let unknownLabel = "D";

  if (solveMode === "solve-d") {
    // A:B = C:D, solve for D
    unknownValue = (b * c) / a;
    unknownLabel = "D";
  } else if (solveMode === "solve-c") {
    // A:B = C:D, solve for C
    unknownValue = (a * c) / b;
    unknownLabel = "C";
  }

  // Cross multiplication check
  const crossProduct1 = a * unknownValue;
  const crossProduct2 = b * c;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Original Ratio A:B"
        value={`${a}:${b}`}
        highlight={true}
      />
      <ResultCard
        label="Simplified Ratio"
        value={`${formatNumber(simplifiedA, 0)}:${formatNumber(simplifiedB, 0)}`}
        highlight={true}
      />
      {divisor > 1 && (
        <ResultCard
          label="GCD (Greatest Common Divisor)"
          value={formatNumber(divisor, 0)}
        />
      )}
      <ResultCard
        label={solveMode === "solve-d" ? `Proportion: ${a}:${b} = ${c}:${unknownLabel}` : `Proportion: ${a}:${b} = ${unknownLabel}:${c}`}
        value={formatNumber(unknownValue)}
        highlight={true}
      />
      <ResultCard
        label="Cross Product Verification"
        value={`${formatNumber(a, 0)} × ${formatNumber(unknownValue)} = ${formatNumber(crossProduct1)}`}
      />
      <ResultCard
        label="Cross Product Verification"
        value={`${formatNumber(b, 0)} × ${formatNumber(c, 0)} = ${formatNumber(crossProduct2)}`}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Ratios and Proportions</h3>
      <p>
        A <strong>ratio</strong> compares two quantities: A:B means A divided by B. Ratios can be simplified by dividing both parts by their <strong>greatest common divisor (GCD)</strong>. For example, 12:8 simplifies to 3:2 (dividing by 4). A <strong>proportion</strong> is an equation of two ratios: A:B = C:D, read as {"\""}A is to B as C is to D{"\""}.
      </p>
      <p>
        To solve a proportion, use <strong>cross multiplication</strong>: if A:B = C:D, then A × D = B × C. For example, 3:5 = 6:x gives 3x = 30, so x = 10. This method finds missing values in proportions. Ratios and proportions appear everywhere: cooking (ingredient ratios), maps (scale ratios), finance (debt-to-income ratio), and engineering (gear ratios). Simplifying ratios helps identify patterns and compare quantities fairly.
      </p>
      <p>
        Understanding ratios is fundamental to scaling: if a recipe serves 4 and you need to serve 10, you multiply all ingredients by 10/4 = 2.5. In engineering, scale models use ratios to represent real objects. In mathematics, ratios lead to percentages, probabilities, and linear relationships. Mastering ratios is essential for proportional reasoning across science, commerce, and practical problem-solving.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ratio Calculator"
      description="Simplify ratios, solve proportions, and find equivalent ratios"
      slug="ratio-calculator"
      results={results}
    >
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Simplify Ratio</h4>
          <InputField
            id="ratio-a"
            label="A (first part)"
            value={a}
            onChange={setA}
            min={1}
            step={1}
          />
          <InputField
            id="ratio-b"
            label="B (second part)"
            value={b}
            onChange={setB}
            min={1}
            step={1}
          />
          <p className="text-sm text-gray-600 mt-2">
            Ratio A:B = {a}:{b}
          </p>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Solve Proportion</h4>
          <SelectField
            id="solve-mode"
            label="Solve for"
            value={solveMode}
            onChange={setSolveMode}
            options={[
              { value: "solve-d", label: "A:B = C:D (solve for D)" },
              { value: "solve-c", label: "A:B = C:D (solve for C)" },
            ]}
          />

          <InputField
            id="proportional-c"
            label={solveMode === "solve-d" ? "C" : "C (solving for C)"}
            value={c}
            onChange={setC}
            step={0.1}
          />

          <p className="text-sm text-gray-600 mt-2">
            Proportion: {a}:{b} = {solveMode === "solve-d" ? `${c}:?` : `?:${c}`}
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RatioCalculator,
  slug: "ratio-calculator",
  title: "Ratio Calculator",
  shortTitle: "Ratio",
  description: "Simplify ratios, solve proportions using cross multiplication, and find GCD",
  category: "math",
  icon: "⚖️",
  keywords: ["ratio", "proportion", "GCD", "simplify", "cross multiplication", "equivalent ratio"],
  popular: false,
  faqs: [
    {
      question: "What is a ratio?",
      answer: "A ratio compares two quantities. A:B means A divided by B. For example, 3:5 means 3 parts to 5 parts."
    },
    {
      question: "How do I simplify a ratio?",
      answer: "Divide both parts by their greatest common divisor (GCD). For example, 12:8 divided by GCD(12,8)=4 gives 3:2."
    },
    {
      question: "What is a proportion?",
      answer: "A proportion is an equation of two ratios: A:B = C:D. It says that one ratio equals another. Cross multiply to solve: A×D = B×C."
    },
    {
      question: "What is cross multiplication?",
      answer: "For proportion A:B = C:D, multiply across: A×D = B×C. This creates an equation you can solve for an unknown value."
    },
    {
      question: "How are ratios used in real life?",
      answer: "Ratios are used in cooking (ingredient ratios), maps (scale ratios), finance (debt-to-income), and engineering (gear ratios). Understanding ratios helps scale recipes, read maps, and compare quantities fairly."
    }
  ],
  dateModified: "2026-04-10",
});
