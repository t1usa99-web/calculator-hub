import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(num: number, den: number): [number, number] {
  if (den === 0) return [0, 1];
  const divisor = gcd(Math.abs(num), Math.abs(den));
  return [num / divisor, den / divisor];
}

function mixedNumber(num: number, den: number): string {
  if (den === 0) return "Undefined";
  const whole = Math.floor(Math.abs(num) / Math.abs(den));
  const remainder = Math.abs(num) % Math.abs(den);
  const sign = (num < 0) !== (den < 0) ? "-" : "";
  if (whole === 0) return `${sign}${remainder}/${Math.abs(den)}`;
  if (remainder === 0) return `${sign}${whole}`;
  return `${sign}${whole} ${remainder}/${Math.abs(den)}`;
}

export default function FractionCalculator() {
  const [num1, setNum1] = useState(1);
  const [den1, setDen1] = useState(4);
  const [num2, setNum2] = useState(1);
  const [den2, setDen2] = useState(2);
  const [operation, setOperation] = useState("add");

  let resultNum = 0;
  let resultDen = 1;

  if (operation === "add") {
    resultNum = num1 * den2 + num2 * den1;
    resultDen = den1 * den2;
  } else if (operation === "subtract") {
    resultNum = num1 * den2 - num2 * den1;
    resultDen = den1 * den2;
  } else if (operation === "multiply") {
    resultNum = num1 * num2;
    resultDen = den1 * den2;
  } else if (operation === "divide") {
    resultNum = num1 * den2;
    resultDen = den1 * num2;
  }

  const [simplifiedNum, simplifiedDen] = simplifyFraction(resultNum, resultDen);
  const decimal = simplifiedDen !== 0 ? resultNum / resultDen : 0;

  const pieData = [
    { name: "Numerator", value: Math.abs(simplifiedNum) },
    { name: "Denominator", value: Math.abs(simplifiedDen) },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Result (Simplified)"
        value={simplifiedDen !== 0 ? `${simplifiedNum}/${simplifiedDen}` : "Undefined"}
        highlight
      />
      <ResultCard label="Decimal Form" value={formatNumber(decimal, 4)} />
      <ResultCard label="Mixed Number" value={mixedNumber(simplifiedNum, simplifiedDen)} />
      <ResultCard label="Decimal Percentage" value={formatNumber(decimal * 100, 2) + "%"} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Fraction Visualization</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell fill="#3b82f6" />
            <Cell fill="#10b981" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A fraction represents a part of a whole, expressed as the ratio of two numbers called the numerator and denominator. The numerator (top number) indicates how many parts you have, while the denominator (bottom number) shows how many equal parts make up the whole. For example, 3/4 means you have 3 parts out of a total of 4 equal parts. Fractions are fundamental in mathematics and appear in cooking, construction, finance, and numerous other fields.
      </p>

      <p>
        <strong>Operations with Fractions:</strong> When adding or subtracting fractions, you need a common denominator (the same bottom number). For example, 1/4 + 1/2 requires converting 1/2 to 2/4, then adding to get 3/4. Multiplication of fractions is simpler: multiply the numerators together and the denominators together (1/2 × 3/4 = 3/8). Division of fractions involves flipping the second fraction (called taking the reciprocal) and then multiplying (1/2 ÷ 1/4 = 1/2 × 4/1 = 2).
      </p>

      <p>
        <strong>Simplifying Fractions:</strong> A fraction in its simplest form has no common factors between the numerator and denominator other than 1. To simplify, find the greatest common divisor (GCD) of both numbers and divide each by it. For instance, 6/8 simplifies to 3/4 because both can be divided by 2. Mixed numbers combine a whole number with a fraction, like 2 3/4, which equals 11/4 as an improper fraction.
      </p>

      <p>
        <strong>Converting Between Forms:</strong> Fractions, decimals, and percentages are different ways of expressing the same value. To convert a fraction to a decimal, simply divide the numerator by the denominator (3/4 = 0.75). To convert to a percentage, multiply the decimal by 100 (0.75 × 100 = 75%). Understanding these conversions helps in comparing values and solving real-world problems involving parts and wholes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Fraction Calculator"
      description="Perform operations on fractions and simplify results"
      slug="fraction-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <InputField
            id="num1"
            label="Numerator 1"
            value={num1}
            onChange={setNum1}
            step={1}
            min={-100}
            max={100}
          />
          <InputField
            id="den1"
            label="Denominator 1"
            value={den1}
            onChange={setDen1}
            step={1}
            min={1}
            max={100}
          />
        </div>

        <SelectField
          id="operation"
          label="Operation"
          value={operation}
          onChange={setOperation}
          options={[
            { value: "add", label: "Add (+)" },
            { value: "subtract", label: "Subtract (-)" },
            { value: "multiply", label: "Multiply (×)" },
            { value: "divide", label: "Divide (÷)" },
          ]}
        />

        <div className="grid grid-cols-2 gap-2">
          <InputField
            id="num2"
            label="Numerator 2"
            value={num2}
            onChange={setNum2}
            step={1}
            min={-100}
            max={100}
          />
          <InputField
            id="den2"
            label="Denominator 2"
            value={den2}
            onChange={setDen2}
            step={1}
            min={1}
            max={100}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}
