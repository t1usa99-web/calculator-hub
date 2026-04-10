import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
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

export default function GCFCalculator() {
  const [inputText, setInputText] = useState("48, 36");

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

  let gcfValue = 1;
  let lcmValue = 1;
  let steps: string[] = [];
  const factorizations: { [key: number]: string } = {};

  if (!parseError && numbers.length >= 2) {
    // Calculate GCF
    gcfValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      gcfValue = gcd(gcfValue, numbers[i]);
    }

    // Calculate LCM: LCM(a,b) = (a × b) / GCD(a,b)
    lcmValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      lcmValue = (lcmValue * numbers[i]) / gcd(lcmValue, numbers[i]);
    }

    // Get factorizations
    for (const num of numbers) {
      const factors = getPrimeFactors(num);
      factorizations[num] = formatFactorization(factors);
    }

    // Generate steps
    steps.push(`Numbers: ${numbers.join(", ")}`);
    if (numbers.length === 2) {
      steps.push(`GCF using Euclidean algorithm:`);
      let a = numbers[0];
      let b = numbers[1];
      while (b !== 0) {
        const remainder = a % b;
        steps.push(`  ${a} = ${b} × ${Math.floor(a / b)} + ${remainder}`);
        a = b;
        b = remainder;
      }
      steps.push(`GCF = ${gcfValue}`);
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
            label="GCF (Greatest Common Factor)"
            value={formatNumber(gcfValue)}
            highlight
          />
          <ResultCard
            label="LCM (Least Common Multiple)"
            value={formatNumber(lcmValue)}
            highlight
          />
          <ResultCard
            label="Prime Factorizations"
            value={numbers
              .slice(0, 3)
              .map((n) => `${n} = ${factorizations[n]}`)
              .join(", ")}
          />
          <ResultCard
            label="GCF Formula (2 numbers)"
            value="GCF(a,b) = (a × b) / LCM(a,b)"
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
        The Greatest Common Factor (GCF), also called the Greatest Common Divisor (GCD), is the largest positive integer that divides all given numbers without leaving a remainder. Finding the GCF is essential in simplifying fractions, factoring polynomials, and solving many mathematical problems. It appears frequently in algebra, number theory, and practical applications.
      </p>

      <p>
        <strong>Finding GCF Using Prime Factorization:</strong> Write each number as a product of prime factors, then identify the common primes. Multiply the common primes using the smallest exponent for each. For example, for 48 = 2^4 × 3 and 36 = 2^2 × 3^2, the common factors are 2^2 and 3^1, so GCF = 2^2 × 3 = 12. This method is intuitive but slow for large numbers.
      </p>

      <p>
        <strong>Euclidean Algorithm:</strong> This efficient method uses repeated division. For GCF(48, 36): 48 = 36 × 1 + 12, then 36 = 12 × 3 + 0. When remainder is 0, the divisor is the GCF. So GCF(48, 36) = 12. This algorithm is much faster for large numbers and is what computers use.
      </p>

      <p>
        <strong>GCF and LCM Relationship:</strong> The Least Common Multiple (LCM) is the smallest positive integer divisible by all given numbers. There{'\''}s an important relationship: GCF(a, b) × LCM(a, b) = a × b. For 48 and 36: GCF = 12, LCM = 144, and 12 × 144 = 17,280 = 48 × 36. This helps solve problems involving common denominators and shared scheduling.
      </p>

      <p>
        <strong>Practical Applications:</strong> GCF simplifies fractions: 48/36 has GCF 12, so it reduces to 4/3. It helps solve problems like "divide 48 cookies and 36 candies equally into groups"—the maximum group size is 12. LCM finds common denominators for adding fractions and solves scheduling problems: "Event A repeats every 48 minutes, Event B every 36 minutes, when do they align?" Answer: at LCM = 144 minutes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="GCF Calculator"
      description="Find the Greatest Common Factor and Least Common Multiple of numbers"
      slug="gcf-calculator"
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
            placeholder="48, 36"
          />
        </div>
        {!parseError && numbers.length >= 2 && steps.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Steps (Euclidean Algorithm)</h4>
            <div className="space-y-1 text-sm text-gray-700 font-mono">
              {steps.map((step, idx) => (
                <p key={idx}>{step}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: GCFCalculator,
  slug: "gcf-calculator",
  title: "GCF Calculator",
  shortTitle: "GCF / LCM",
  description: "Calculate greatest common factor and least common multiple",
  category: "math",
  icon: "🔄",
  keywords: ["gcf", "gcd", "lcm", "greatest common factor", "least common multiple", "common divisor"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between GCF and LCM?",
      answer: "GCF is the largest number that divides all given numbers. LCM is the smallest number that all given numbers divide into. For 12 and 18: GCF is 6 (largest factor both share), LCM is 36 (smallest number both divide evenly). GCF is used for reducing fractions; LCM for finding common denominators."
    },
    {
      question: "How do I simplify a fraction using GCF?",
      answer: "Find the GCF of the numerator and denominator, then divide both by the GCF. For 48/36, GCF(48,36) = 12, so 48/36 = (48÷12)/(36÷12) = 4/3. This gives the fraction in lowest terms."
    },
    {
      question: "What is the Euclidean Algorithm?",
      answer: "It{'\''}s an efficient method to find GCF: repeatedly divide and take remainders until the remainder is 0. The last non-zero remainder is the GCF. For GCF(48, 36): 48 mod 36 = 12, then 36 mod 12 = 0, so GCF = 12. It works for any two positive integers."
    },
    {
      question: "Can GCF and LCM be equal?",
      answer: "Only when the numbers are identical. For example, GCF(5,5) = 5 and LCM(5,5) = 5. For any two different numbers, GCF is always smaller than LCM. If numbers are coprime (GCF = 1), then LCM = a × b."
    },
    {
      question: "What does coprime mean?",
      answer: "Two numbers are coprime if their GCF is 1, meaning they share no common factors except 1. For example, 7 and 12 are coprime because GCF(7,12) = 1. Coprime numbers are useful in cryptography and have special properties in number theory."
    }
  ],
  dateModified: "2026-04-10",
});
