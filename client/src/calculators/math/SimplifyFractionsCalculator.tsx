import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Simplifying Fractions</h3>
      <p>
        <strong>Simplifying</strong> (or reducing) a fraction means dividing both numerator and denominator by their greatest common factor (GCF) to get an equivalent fraction in lowest terms. <strong>Why simplify?</strong> It makes fractions easier to understand, compare, and use in calculations. 12/18 and 2/3 represent the same value, but 2/3 is simpler. <strong>Finding the GCF:</strong> List factors of both numbers and find the largest common one. For 12 and 18: factors of 12 are {1,2,3,4,6,12}, factors of 18 are {1,2,3,6,9,18}, so GCF = 6. Divide both by 6: 12/18 ÷ 6/6 = 2/3. <strong>Checking if simplified:</strong> A fraction is fully simplified when the GCF of numerator and denominator is 1.
      </p>
      <p>
        <strong>Prime Factorization Method:</strong> Break both numbers into prime factors. Example: 24 = 2³×3, 36 = 2²×3². GCF = 2²×3 = 12. So 24/36 = 2/3. <strong>Simplifying before multiplying:</strong> If you're multiplying fractions, simplify first to avoid large numbers. 4/6 × 3/8: simplify 4/6 to 2/3 first, then 2/3 × 3/8 = 6/24 = 1/4. Without simplifying: 12/48 = 1/4 (same answer, more work). <strong>Standard convention:</strong> Always present final answers in simplified form. It's the expected, clearest mathematical expression.
      </p>
      <p>
        <strong>Equivalent Fractions:</strong> Multiplying numerator and denominator by the same number creates an equivalent but unsimplified fraction. 1/2 × 3/3 = 3/6 (both = 0.5). All equivalent fractions simplify to the same lowest terms. Example: 4/8, 6/12, 10/20 all simplify to 1/2. This property helps verify equality: if two fractions simplify to the same form, they're equal. Always simplify to check equivalence.
      </p>
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
