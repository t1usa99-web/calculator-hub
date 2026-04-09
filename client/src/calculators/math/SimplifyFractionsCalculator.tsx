import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a || 1;
}

export default function SimplifyFractionsCalculator() {
  const [numerator, setNumerator] = useState(24);
  const [denominator, setDenominator] = useState(36);

  const divisor = denominator !== 0 ? gcd(numerator, denominator) : 1;
  const simplifiedNum = numerator / divisor;
  const simplifiedDen = denominator / divisor;

  const decimalValue = denominator !== 0 ? numerator / denominator : 0;

  // Mixed number form (if improper)
  const whole = Math.floor(Math.abs(simplifiedNum) / Math.abs(simplifiedDen));
  const remainder = Math.abs(simplifiedNum) % Math.abs(simplifiedDen);
  const sign = simplifiedNum < 0 ? -1 : 1;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Simplified Fraction"
        value={`${simplifiedNum}/${simplifiedDen}`}
        highlight={true}
      />
      <ResultCard
        label="GCD Used"
        value={divisor.toString()}
        highlight={true}
      />
      <ResultCard
        label="Decimal Value"
        value={formatNumber(decimalValue)}
      />
      <ResultCard
        label="Mixed Number Form"
        value={
          whole === 0
            ? `${simplifiedNum}/${simplifiedDen}`
            : `${whole * sign} ${remainder}/${simplifiedDen}`
        }
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Simplify Fractions Calculator"
      description="Reduce fractions to their simplest form and convert to mixed numbers"
      slug="simplify-fractions-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="numerator"
          label="Numerator"
          value={numerator}
          onChange={setNumerator}
          min={-1000}
          max={1000}
          step={1}
        />

        <InputField
          id="denominator"
          label="Denominator"
          value={denominator}
          onChange={setDenominator}
          min={1}
          max={1000}
          step={1}
        />

        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
          This calculator finds the Greatest Common Divisor (GCD) of the
          numerator and denominator to simplify the fraction to its lowest
          terms.
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SimplifyFractionsCalculator,
  slug: "simplify-fractions-calculator",
  title: "Simplify Fractions Calculator",
  shortTitle: "Simplify Fractions",
  description:
    "Reduce fractions to simplest form with GCD and mixed number conversion",
  category: "math",
  icon: "⅓",
  keywords: [
    "simplify fractions",
    "GCD",
    "reduce fractions",
    "mixed numbers",
    "improper fractions",
  ],
  dateModified: "2026-04-09",
});
