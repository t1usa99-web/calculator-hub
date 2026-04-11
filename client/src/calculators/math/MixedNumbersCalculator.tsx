import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
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
  return a;
}

function simplifyFraction(
  numerator: number,
  denominator: number
): [number, number] {
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

function improperToMixed(
  numerator: number,
  denominator: number
): [number, number, number] {
  const whole = Math.floor(Math.abs(numerator) / Math.abs(denominator));
  const frac = Math.abs(numerator) % Math.abs(denominator);
  const sign = numerator < 0 ? -1 : 1;
  return [whole * sign, frac, denominator];
}

export default function MixedNumbersCalculator() {
  const [whole1, setWhole1] = useState(2);
  const [numerator1, setNumerator1] = useState(1);
  const [denominator1, setDenominator1] = useState(2);

  const [whole2, setWhole2] = useState(1);
  const [numerator2, setNumerator2] = useState(3);
  const [denominator2, setDenominator2] = useState(4);

  const [operation, setOperation] = useState("add");

  const operationOptions = [
    { value: "add", label: "Add (+)" },
    { value: "subtract", label: "Subtract (-)" },
    { value: "multiply", label: "Multiply (×)" },
    { value: "divide", label: "Divide (÷)" },
  ];

  // Convert mixed to improper
  const improper1 = whole1 * denominator1 + numerator1;
  const improper2 = whole2 * denominator2 + numerator2;

  let resultNum = 0;
  let resultDen = 1;

  if (operation === "add") {
    resultNum = improper1 * denominator2 + improper2 * denominator1;
    resultDen = denominator1 * denominator2;
  } else if (operation === "subtract") {
    resultNum = improper1 * denominator2 - improper2 * denominator1;
    resultDen = denominator1 * denominator2;
  } else if (operation === "multiply") {
    resultNum = improper1 * improper2;
    resultDen = denominator1 * denominator2;
  } else if (operation === "divide") {
    resultNum = improper1 * denominator2;
    resultDen = denominator1 * improper2;
  }

  // Simplify
  const [simpleNum, simpleDen] = simplifyFraction(resultNum, resultDen);

  // Decimal
  const decimal = simpleDen !== 0 ? simpleNum / simpleDen : 0;

  // Mixed form
  const [mixedWhole, mixedNumer, mixedDenom] = improperToMixed(
    simpleNum,
    simpleDen
  );

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Result (Improper Fraction)"
        value={`${simpleNum}/${simpleDen}`}
        highlight={true}
      />
      <ResultCard
        label="Result (Mixed Number)"
        value={
          mixedWhole === 0
            ? `${mixedNumer}/${mixedDenom}`
            : `${mixedWhole} ${mixedNumer}/${mixedDenom}`
        }
        highlight={true}
      />
      <ResultCard
        label="Result (Decimal)"
        value={formatNumber(decimal)}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Working with Mixed Numbers</h3>
      <p>
        A <strong>mixed number</strong> combines a whole number and a proper fraction (numerator {'<'} denominator): 2 3/5 means "two and three-fifths" or 2 + 3/5. Mixed numbers are intuitive for everyday measurements—2 3/4 cups flour is clearer than 11/4 cups. <strong>Converting to improper fractions:</strong> Multiply the whole by the denominator, add the numerator, place over the denominator. Example: 2 3/5 = (2×5+3)/5 = 13/5. <strong>Converting improper to mixed:</strong> Divide numerator by denominator; quotient is the whole, remainder is the new numerator. Example: 13/5 ÷ 5 = 2 remainder 3, so 13/5 = 2 3/5. Always simplify the fraction part (3/6 becomes 1/2).
      </p>
      <p>
        <strong>Arithmetic with Mixed Numbers:</strong> For addition/subtraction, you can add wholes and fractions separately (if denominators match) or convert to improper fractions first. Example: 2 1/3 + 1 1/3 = (2+1) + (1/3+1/3) = 3 2/3, or 7/3 + 4/3 = 11/3 = 3 2/3. For multiplication/division, <strong>always convert to improper fractions first</strong> because mixed number arithmetic is undefined. Example: 2 1/2 × 1 1/3 = 5/2 × 4/3 = 20/6 = 10/3 = 3 1/3. Forgetting to convert is a common mistake.
      </p>
      <p>
        <strong>Real-World Uses:</strong> Cooking (2 1/2 cups), construction (boards 8 3/4 inches wide), time (1 1/2 hours). Mixed numbers are practical and human-friendly. When calculating, convert to improper for accuracy, then convert back to mixed for clarity. Understanding both forms is essential for practical mathematics and communication with others about measurements and quantities.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mixed Numbers Calculator"
      description="Add, subtract, multiply, or divide mixed numbers"
      slug="mixed-numbers-calculator"
      results={results}
    >
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            First Mixed Number
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <InputField
              id="whole1"
              label="Whole"
              value={whole1}
              onChange={setWhole1}
              min={0}
              step={1}
            />
            <InputField
              id="numerator1"
              label="Numerator"
              value={numerator1}
              onChange={setNumerator1}
              min={0}
              step={1}
            />
            <InputField
              id="denominator1"
              label="Denominator"
              value={denominator1}
              onChange={setDenominator1}
              min={1}
              step={1}
            />
          </div>
        </div>

        <SelectField
          id="operation"
          label="Operation"
          value={operation}
          onChange={setOperation}
          options={operationOptions}
        />

        <div className="border-b pb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Second Mixed Number
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <InputField
              id="whole2"
              label="Whole"
              value={whole2}
              onChange={setWhole2}
              min={0}
              step={1}
            />
            <InputField
              id="numerator2"
              label="Numerator"
              value={numerator2}
              onChange={setNumerator2}
              min={0}
              step={1}
            />
            <InputField
              id="denominator2"
              label="Denominator"
              value={denominator2}
              onChange={setDenominator2}
              min={1}
              step={1}
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
