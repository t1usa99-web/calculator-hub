import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function ScientificCalculator() {
  const [number, setNumber] = useState(16);
  const [operation, setOperation] = useState("sqrt");
  const [exponent, setExponent] = useState(2);

  let result = 0;
  let explanation = "";
  let relatedValues: Array<{ label: string; value: string }> = [];

  if (operation === "sqrt") {
    result = Math.sqrt(number);
    explanation = `Square root of ${formatNumber(number)} = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Original", value: formatNumber(number) },
      { label: "Square Root", value: formatNumber(result, 6) },
      { label: "Is Perfect Square", value: Math.sqrt(number) === Math.floor(Math.sqrt(number)) ? "Yes" : "No" },
    ];
  } else if (operation === "cbrt") {
    result = Math.cbrt(number);
    explanation = `Cube root of ${formatNumber(number)} = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Original", value: formatNumber(number) },
      { label: "Cube Root", value: formatNumber(result, 6) },
      { label: "Is Perfect Cube", value: Math.cbrt(number) === Math.floor(Math.cbrt(number)) ? "Yes" : "No" },
    ];
  } else if (operation === "power") {
    result = Math.pow(number, exponent);
    explanation = `${formatNumber(number)}^${exponent} = ${formatNumber(result, 4)}`;
    relatedValues = [
      { label: "Base", value: formatNumber(number) },
      { label: "Exponent", value: exponent.toString() },
      { label: "Result", value: formatNumber(result, 4) },
    ];
  } else if (operation === "log") {
    result = number > 0 ? Math.log10(number) : 0;
    explanation = `Log₁₀(${formatNumber(number)}) = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Number", value: formatNumber(number) },
      { label: "Log Base 10", value: formatNumber(result, 6) },
      { label: "Scientific Notation", value: number > 0 ? `10^${formatNumber(result, 2)}` : "Undefined" },
    ];
  } else if (operation === "ln") {
    result = number > 0 ? Math.log(number) : 0;
    explanation = `ln(${formatNumber(number)}) = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Number", value: formatNumber(number) },
      { label: "Natural Log", value: formatNumber(result, 6) },
      { label: "As Power of e", value: number > 0 ? `e^${formatNumber(result, 2)}` : "Undefined" },
    ];
  } else if (operation === "sin") {
    result = Math.sin((number * Math.PI) / 180);
    explanation = `sin(${number}°) = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Angle (degrees)", value: number.toString() },
      { label: "sin(θ)", value: formatNumber(result, 6) },
      { label: "Angle (radians)", value: formatNumber((number * Math.PI) / 180, 4) },
    ];
  } else if (operation === "cos") {
    result = Math.cos((number * Math.PI) / 180);
    explanation = `cos(${number}°) = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Angle (degrees)", value: number.toString() },
      { label: "cos(θ)", value: formatNumber(result, 6) },
      { label: "Angle (radians)", value: formatNumber((number * Math.PI) / 180, 4) },
    ];
  } else if (operation === "tan") {
    result = Math.tan((number * Math.PI) / 180);
    explanation = `tan(${number}°) = ${formatNumber(result, 6)}`;
    relatedValues = [
      { label: "Angle (degrees)", value: number.toString() },
      { label: "tan(θ)", value: formatNumber(result, 6) },
      { label: "Angle (radians)", value: formatNumber((number * Math.PI) / 180, 4) },
    ];
  } else if (operation === "factorial") {
    if (number > 20) {
      result = Infinity;
      explanation = `${Math.floor(number)}! = Too large to display`;
    } else if (number < 0) {
      result = 0;
      explanation = "Factorial of negative numbers is undefined";
    } else {
      let fact = 1;
      for (let i = 2; i <= Math.floor(number); i++) {
        fact *= i;
      }
      result = fact;
      explanation = `${Math.floor(number)}! = ${formatNumber(fact, 0)}`;
    }
    relatedValues = [
      { label: "Number", value: Math.floor(number).toString() },
      { label: "Factorial", value: result === Infinity ? "∞" : formatNumber(result, 0) },
    ];
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Result" value={isFinite(result) ? formatNumber(result, 6) : "∞"} highlight />
      <ResultCard label="Calculation" value={explanation} />
      {relatedValues.map((item, idx) => (
        <ResultCard key={idx} label={item.label} value={item.value} />
      ))}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Scientific calculations are essential in mathematics, physics, engineering, and many other fields. A scientific calculator extends basic arithmetic to include advanced functions like square roots, exponents, logarithms, and trigonometric functions. These tools help solve complex problems that range from simple geometry to advanced calculus and data analysis.
      </p>

      <p>
        <strong>Roots and Powers:</strong> Square roots (√) find the number that, when multiplied by itself, equals the original value. For example, √16 = 4 because 4 × 4 = 16. Exponents represent repeated multiplication: 2³ = 2 × 2 × 2 = 8. Cube roots and higher-order roots work similarly. These concepts are crucial in geometry (calculating areas and volumes), physics (kinetic energy formulas), and financial calculations (compound growth).
      </p>

      <p>
        <strong>Logarithms and Natural Logarithms:</strong> A logarithm is the inverse of exponentiation. If 10² = 100, then log₁₀(100) = 2. The natural logarithm (ln) uses the constant e (≈2.718) as its base and appears frequently in calculus, physics, and biology. Logarithms are invaluable for solving exponential equations, measuring sound intensity (decibels), pH calculations, and earthquake magnitude scales.
      </p>

      <p>
        <strong>Trigonometric Functions:</strong> Sine, cosine, and tangent are trigonometric functions that relate angles in right triangles to the ratios of their sides. These functions are fundamental in physics (wave motion, oscillations), engineering (structural design), navigation, and astronomy. Understanding these functions allows you to solve problems involving periodic phenomena, rotations, and wave behavior. Factorials (n!) calculate the number of ways to arrange n objects and are essential in probability and combinatorics.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Scientific Calculator"
      description="Perform advanced mathematical calculations including roots, powers, logarithms, and trigonometry"
      slug="scientific-calculator"
      results={results}
      chart={<div className="p-4 bg-blue-50 rounded-lg text-gray-700">Scientific calculations displayed in results above</div>}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="number"
          label="Number"
          value={number}
          onChange={setNumber}
          step={0.01}
          min={-1000}
          max={1000}
        />

        <SelectField
          id="operation"
          label="Operation"
          value={operation}
          onChange={setOperation}
          options={[
            { value: "sqrt", label: "Square Root (√)" },
            { value: "cbrt", label: "Cube Root (∛)" },
            { value: "power", label: "Power (x^y)" },
            { value: "log", label: "Log Base 10" },
            { value: "ln", label: "Natural Log (ln)" },
            { value: "sin", label: "Sine (sin)" },
            { value: "cos", label: "Cosine (cos)" },
            { value: "tan", label: "Tangent (tan)" },
            { value: "factorial", label: "Factorial (n!)" },
          ]}
        />

        {operation === "power" && (
          <InputField
            id="exponent"
            label="Exponent"
            value={exponent}
            onChange={setExponent}
            step={0.1}
            min={-10}
            max={10}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
