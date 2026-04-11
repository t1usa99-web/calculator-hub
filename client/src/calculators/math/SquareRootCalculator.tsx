import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function SquareRootCalculator() {
  const [number, setNumber] = useState(64);
  const [rootIndex, setRootIndex] = useState(2);

  const squareRoot = Math.sqrt(number);
  const cubeRoot = Math.cbrt(number);
  const nthRoot = Math.pow(number, 1 / rootIndex);

  // Check if perfect square
  const isPerfectSquare = squareRoot === Math.floor(squareRoot) && number >= 0;

  // Simplify radical for square root
  let simplifiedRadical = "";
  if (number >= 0) {
    const sqrtInt = Math.floor(squareRoot);
    let remainder = number - sqrtInt * sqrtInt;

    let outer = 1;
    let inner = number;
    for (let i = Math.floor(Math.sqrt(number)); i > 1; i--) {
      if (number % (i * i) === 0) {
        outer = i;
        inner = number / (i * i);
        break;
      }
    }

    if (outer === 1) {
      simplifiedRadical = `√${number}`;
    } else if (inner === 1) {
      simplifiedRadical = outer.toString();
    } else {
      simplifiedRadical = `${outer}√${inner}`;
    }
  } else {
    simplifiedRadical = "Undefined (complex number)";
  }

  // Generate chart data
  const chartData = [];
  for (let i = 0; i <= 100; i += 10) {
    chartData.push({
      x: i,
      sqrt: Math.sqrt(i),
      cbrt: Math.cbrt(i),
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Square Root (√)" value={formatNumber(squareRoot, 6)} highlight />
      <ResultCard label="Simplified Radical" value={simplifiedRadical} />
      <ResultCard label="Cube Root (∛)" value={formatNumber(cubeRoot, 6)} />
      <ResultCard label={`${rootIndex}th Root`} value={formatNumber(nthRoot, 6)} />
      <ResultCard label="Perfect Square?" value={isPerfectSquare ? "Yes" : "No"} />
      <ResultCard label="Decimal Form" value={formatNumber(squareRoot, 8)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Square Root and Cube Root Functions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: "Number", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Root Value", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 3)} />
          <Legend />
          <Line type="monotone" dataKey="sqrt" stroke="#3b82f6" dot={false} name="Square Root" />
          <Line type="monotone" dataKey="cbrt" stroke="#10b981" dot={false} name="Cube Root" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A square root is a value that, when multiplied by itself, produces the original number. For example, the square root of 16 is 4, because 4 × 4 = 16. The symbol √ denotes the square root operation. Square roots are fundamental in mathematics, appearing in geometry (calculating diagonal lengths), physics (kinetic energy formulas), engineering (structural calculations), and many other fields. Understanding square roots is essential for solving quadratic equations and working with areas and distances.
      </p>

      <p>
        <strong>Types of Roots:</strong> While square roots (second root) are most common, nth roots exist for any positive integer n. A cube root (third root) finds the value that, when multiplied by itself three times, equals the original number (for example, ∛27 = 3 because 3 × 3 × 3 = 27). The nth root generalizes this concept: the nth root of a number is the value that, when raised to the power n, equals that number. These functions are inverse operations of exponents.
      </p>

      <p>
        <strong>Perfect Squares and Simplifying Radicals:</strong> A perfect square is a number that is the square of an integer (1, 4, 9, 16, 25, etc.). When you calculate the square root of a perfect square, you get a whole number. For non-perfect squares, the square root is irrational (cannot be expressed as a simple fraction). You can simplify radicals by factoring out perfect squares. For example, √72 = √(36 × 2) = 6√2. Simplified radicals are more useful in mathematical calculations and cleaner in final answers.
      </p>

      <p>
        <strong>Practical Applications:</strong> Square roots appear in countless real-world scenarios. In construction, finding the diagonal of a room requires square roots (Pythagorean theorem). In statistics, standard deviation calculations use square roots. In physics, velocity and acceleration formulas often involve roots. Financial professionals use square roots in risk calculations. Understanding roots helps interpret and solve problems involving areas, volumes, distances, rates of change, and many scientific phenomena.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Square Root Calculator"
      description="Calculate square roots, cube roots, and nth roots with radical simplification"
      slug="square-root-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="number"
          label="Number"
          value={number}
          onChange={setNumber}
          step={1}
          min={0}
          max={10000}
        />
        <InputField
          id="root-index"
          label="Root Index (for nth root)"
          value={rootIndex}
          onChange={setRootIndex}
          step={1}
          min={2}
          max={10}
          hint="2 = square root, 3 = cube root, etc."
        />
      </div>
    </CalculatorLayout>
  );
}
