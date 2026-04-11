import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
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

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

function getPrimeFactors(num: number): { [key: number]: number } {
  const factors: { [key: number]: number } = {};
  let n = Math.abs(num);

  for (let i = 2; i * i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      count++;
      n /= i;
    }
    if (count > 0) factors[i] = count;
  }

  if (n > 1) factors[n] = 1;

  return factors;
}

function formatFactorization(factors: { [key: number]: number }): string {
  const entries = Object.entries(factors)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([prime, exp]) => (parseInt(exp) > 1 ? `${prime}^${exp}` : prime))
    .join(" × ");
  return entries || "1";
}

export default function LCMCalculator() {
  const [inputText, setInputText] = useState("12, 18");

  let numbers: number[] = [];
  let parseError = false;

  try {
    numbers = inputText
      .split(",")
      .map((s) => {
        const num = parseInt(s.trim(), 10);
        if (isNaN(num) || num === 0) throw new Error("Invalid");
        return Math.abs(num);
      })
      .filter((n) => n > 0);

    if (numbers.length < 2) parseError = true;
  } catch {
    parseError = true;
  }

  let lcmValue = 1;
  let gcfValue = 1;
  const factorizations: { [key: number]: string } = {};
  let lcmMultiples: number[] = [];

  if (!parseError && numbers.length >= 2) {
    // Calculate LCM
    lcmValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      lcmValue = lcm(lcmValue, numbers[i]);
    }

    // Calculate GCF
    gcfValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      gcfValue = gcd(gcfValue, numbers[i]);
    }

    // Get factorizations
    for (const num of numbers) {
      const factors = getPrimeFactors(num);
      factorizations[num] = formatFactorization(factors);
    }

    // Generate multiples of first number up to LCM
    for (let i = 1; i * numbers[0] <= lcmValue * 1.5; i++) {
      lcmMultiples.push(i * numbers[0]);
    }
  }

  const chartData = numbers.slice(0, 5).map((num) => ({
    name: `${num}`,
    value: num,
    fill: "#3b82f6",
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {!parseError && numbers.length >= 2 ? (
        <>
          <ResultCard
            label="LCM (Least Common Multiple)"
            value={formatNumber(lcmValue)}
            highlight
          />
          <ResultCard
            label="GCF (Greatest Common Factor)"
            value={formatNumber(gcfValue)}
          />
          <ResultCard
            label="Prime Factorizations"
            value={numbers
              .slice(0, 3)
              .map((n) => `${n} = ${factorizations[n]}`)
              .join(", ")}
          />
          <ResultCard
            label="LCM Formula (2 numbers)"
            value="LCM(a,b) = |a × b| / GCD(a,b)"
          />
          <ResultCard
            label="Verification"
            value={`${numbers.length === 2 ? `LCM(${numbers[0]}, ${numbers[1]}) = ${lcmValue}` : `LCM(${numbers.join(", ")}) = ${lcmValue}`}`}
          />
          <ResultCard
            label="Common Multiples"
            value={lcmMultiples.slice(0, 5).join(", ") + (lcmMultiples.length > 5 ? "..." : "")}
          />
        </>
      ) : (
        <ResultCard label="Error" value="Enter at least 2 numbers separated by commas" />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Numbers Comparison</h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => formatNumber(value as number)} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {chartData.map((entry, index) => (
                <Bar key={index} dataKey="value" fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The Least Common Multiple (LCM), also called the Lowest Common Multiple, is the smallest positive integer that is divisible by all given numbers. Finding the LCM is essential when adding or subtracting fractions, solving problems involving repeating cycles or events, and in many algebra and number theory applications. It helps synchronize schedules and align timing.
      </p>

      <p>
        <strong>Finding LCM Using Prime Factorization:</strong> Express each number as a product of prime factors, then take each prime factor with its highest exponent across all numbers. For example, 12 = 2² × 3 and 18 = 2 × 3². The LCM takes 2² (highest power of 2) and 3² (highest power of 3), so LCM = 2² × 3² = 36. This method is intuitive and works for any set of numbers.
      </p>

      <p>
        <strong>Using GCD to Find LCM:</strong> For two numbers, use the formula LCM(a, b) = |a × b| / GCD(a, b). For 12 and 18, GCD is 6, so LCM = (12 × 18) / 6 = 36. This formula is efficient for computation. For more than two numbers, find LCM iteratively: LCM(a, b, c) = LCM(LCM(a, b), c).
      </p>

      <p>
        <strong>Understanding Common Multiples:</strong> Multiples of 12 are: 12, 24, 36, 48, 60... Multiples of 18 are: 18, 36, 54, 72... Common multiples are: 36, 72, 108... The LCM is the smallest common multiple. Once you find the LCM, all other common multiples are multiples of the LCM (36, 72, 108, etc.).
      </p>

      <p>
        <strong>Practical Applications:</strong> Adding fractions 5/12 + 7/18 requires a common denominator of 36 (the LCM). Scheduling: if Event A repeats every 12 days and Event B every 18 days, they align every 36 days. In music, LCM finds when two instruments with different beat frequencies synchronize. In manufacturing, LCM determines when machines producing different quantities need coordination.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="LCM Calculator"
      description="Find the Least Common Multiple of numbers"
      slug="lcm-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Numbers (comma-separated)
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="12, 18"
          />
        </div>
        {!parseError && numbers.length >= 2 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Prime Factorizations</h4>
            <div className="space-y-1 text-sm text-gray-700 font-mono">
              {numbers.map((num) => (
                <p key={num}>{num} = {factorizations[num]}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
