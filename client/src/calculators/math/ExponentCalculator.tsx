import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function ExponentCalculator() {
  const [base, setBase] = useState(2);
  const [exponent, setExponent] = useState(8);

  const result = Math.pow(base, exponent);

  // Scientific notation
  const scientificNotation = result.toExponential(4);

  // Square root (exponent = 0.5)
  const squareRoot = Math.sqrt(base);

  // Cube root (exponent = 1/3)
  const cubeRoot = Math.cbrt(base);

  // Reciprocal (negative exponent)
  const reciprocal = 1 / result;

  // Generate exponential curve
  const chartData = [];
  for (let x = -2; x <= 5; x += 0.2) {
    const y = Math.pow(base, x);
    chartData.push({
      x: parseFloat(x.toFixed(2)),
      y: parseFloat(y.toFixed(4)),
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={`${base}^${exponent}`}
        value={formatNumber(result)}
        highlight={true}
      />
      <ResultCard
        label="Scientific Notation"
        value={scientificNotation}
        highlight={true}
      />
      <ResultCard
        label={`Square Root of ${base}`}
        value={formatNumber(squareRoot)}
      />
      <ResultCard
        label={`Cube Root of ${base}`}
        value={formatNumber(cubeRoot)}
      />
      <ResultCard
        label={`Reciprocal (${base}^-${exponent})`}
        value={formatNumber(reciprocal, 6)}
      />
      <ResultCard
        label="Number of digits"
        value={Math.floor(result).toString().length.toString()}
      />
    </div>
  );

  const chart = (
    <div className="w-full h-96 bg-white p-4 rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold mb-4">Exponential Curve: y = {base}^x</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} name={`${base}^x`} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Exponents</h3>
      <p>
        An <strong>exponent</strong> tells you how many times to multiply a number by itself. In the expression a^n, a is the base and n is the exponent. For example, 2^3 = 2 × 2 × 2 = 8. The exponent 3 means multiply 2 by itself three times. <strong>Rules of exponents:</strong> a^0 = 1 (any number to the power 0 equals 1), a^1 = a (any number to the power 1 equals itself), and a^(-n) = 1/a^n (negative exponents give reciprocals).
      </p>
      <p>
        <strong>Fractional exponents:</strong> a^(1/2) is the square root, a^(1/3) is the cube root, and a^(2/3) means (a^2)^(1/3). <strong>Properties:</strong> a^m × a^n = a^(m+n) (multiply: add exponents), a^m / a^n = a^(m-n) (divide: subtract exponents), and (a^m)^n = a^(mn) (power of power: multiply exponents). These properties make complex calculations manageable and are fundamental to algebra and higher mathematics.
      </p>
      <p>
        <strong>Scientific notation</strong> expresses large or small numbers compactly: 6.02 × 10^23 (Avogadro{'\''}s number) is easier than 602,000,000,000,000,000,000,000. Exponential growth appears everywhere: compound interest grows as (1 + r)^t, bacteria double as 2^n, and radioactive decay follows 2^(-t/half-life). Understanding exponents is crucial for science, finance, computer science, and analyzing any system with exponential behavior.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Exponent Calculator"
      description="Calculate powers, roots, and exponential functions with visualization"
      slug="exponent-calculator"
      results={results}
      chart={chart}
    >
      <div className="space-y-4">
        <InputField
          id="base"
          label="Base"
          value={base}
          onChange={setBase}
          step={0.1}
        />
        <InputField
          id="exponent"
          label="Exponent"
          value={exponent}
          onChange={setExponent}
          step={0.1}
        />
        {base === 0 && exponent < 0 && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            Cannot raise 0 to a negative power.
          </div>
        )}
        {base < 0 && !Number.isInteger(exponent) && (
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-lg text-sm">
            Result may be complex for negative base with fractional exponent.
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
