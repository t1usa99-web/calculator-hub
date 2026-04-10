import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

function getAllFactors(num: number): number[] {
  const factors: number[] = [];
  const absNum = Math.abs(num);

  if (absNum === 0) return [0];

  for (let i = 1; i <= Math.sqrt(absNum); i++) {
    if (absNum % i === 0) {
      factors.push(i);
      if (i !== absNum / i) {
        factors.push(absNum / i);
      }
    }
  }

  return factors.sort((a, b) => a - b);
}

function getFactorPairs(num: number): Array<[number, number]> {
  const absNum = Math.abs(num);
  const pairs: Array<[number, number]> = [];

  for (let i = 1; i <= Math.sqrt(absNum); i++) {
    if (absNum % i === 0) {
      pairs.push([i, absNum / i]);
    }
  }

  return pairs;
}

function getPrimeFactors(num: number): number[] {
  const factors: number[] = [];
  let n = Math.abs(num);

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 1) factors.push(n);

  return factors;
}

function isPrime(num: number): boolean {
  const n = Math.abs(num);
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

export default function FactorCalculator() {
  const [inputNumber, setInputNumber] = useState(24);

  const num = Math.floor(inputNumber);
  const factors = getAllFactors(num);
  const pairs = getFactorPairs(num);
  const primeFactors = getPrimeFactors(num);
  const prime = isPrime(num);
  const totalFactors = factors.length;

  // Chart data: factor pairs
  const chartData = pairs.slice(0, 8).map((pair, idx) => ({
    name: `${pair[0]}×${pair[1]}`,
    value: Math.min(pair[0], pair[1]),
    fill: "#3b82f6",
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="All Factors"
        value={factors.join(", ")}
        highlight
      />
      <ResultCard
        label="Total Number of Factors"
        value={formatNumber(totalFactors)}
        highlight
      />
      <ResultCard
        label="Prime Factors"
        value={primeFactors.length > 0 ? primeFactors.join(" × ") : "1"}
      />
      <ResultCard
        label="Is Prime?"
        value={prime ? "Yes" : "No"}
      />
      <ResultCard
        label="Factor Pairs"
        value={pairs.map((p) => `${p[0]} × ${p[1]}`).join(", ")}
      />
      <ResultCard
        label="Largest Factor"
        value={formatNumber(factors[factors.length - 1] || 1)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Factor Pairs (smaller factor)</h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
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
        Factors are numbers that divide evenly into a given number without leaving a remainder. Finding all factors of a number is fundamental to number theory, simplifying fractions, and solving various mathematical problems. Understanding factors helps you identify patterns, solve divisibility problems, and explore properties of numbers.
      </p>

      <p>
        <strong>What are Factors?</strong> A factor of n is any positive integer that divides n evenly. For example, factors of 12 are 1, 2, 3, 4, 6, and 12. These are all the numbers that divide 12 without remainder. Every positive integer has at least two factors: 1 and itself. Numbers with exactly two factors are prime numbers. Numbers with more than two factors are composite.
      </p>

      <p>
        <strong>Finding Factors Efficiently:</strong> You only need to check divisors up to the square root of the number. For each divisor i found, n/i is also a divisor. For example, finding factors of 24: check 1 through √24 ≈ 4.9. When 1 divides 24, we get both 1 and 24. When 2 divides 24, we get both 2 and 12. When 3 divides 24, we get both 3 and 8. When 4 divides 24, we get both 4 and 6. This is more efficient than checking every number.
      </p>

      <p>
        <strong>Factor Pairs and Prime Factorization:</strong> Factor pairs are two numbers whose product equals n. For 24: (1, 24), (2, 12), (3, 8), (4, 6). Prime factorization expresses n as a product of only prime factors. For 24 = 2³ × 3. Every composite number has a unique prime factorization (Fundamental Theorem of Arithmetic). This helps understand the complete divisor structure.
      </p>

      <p>
        <strong>Applications of Factors:</strong> Simplify fractions using common factors: 24/36 has common factor 12, reducing to 2/3. Solve distribution problems: 24 items divided equally requires a factor of 24. Find patterns in divisibility. In algebra, factoring polynomials uses similar principles. Understanding factors is essential for arithmetic, pre-algebra, and higher mathematics.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Factor Calculator"
      description="Find all factors, divisors, and factor pairs of a number"
      slug="factor-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="input-number"
          label="Enter a Number"
          value={inputNumber}
          onChange={setInputNumber}
          step={1}
          min={1}
          max={999999}
          placeholder="24"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: FactorCalculator,
  slug: "factor-calculator",
  title: "Factor Calculator",
  shortTitle: "Factors",
  description: "Find all factors and divisors of any number",
  category: "math",
  icon: "🔢",
  keywords: ["factors", "divisors", "factor pairs", "prime factors", "factorization"],
  popular: true,
  faqs: [
    {
      question: "What is a factor?",
      answer: "A factor of a number n is any positive integer that divides n evenly with no remainder. For example, factors of 12 are 1, 2, 3, 4, 6, and 12. Every number is a factor of itself, and 1 is a factor of every number."
    },
    {
      question: "What is the difference between factors and multiples?",
      answer: "A factor divides a number evenly. A multiple is a number you get by multiplying. For example, 3 is a factor of 12, and 12 is a multiple of 3. Factors are smaller or equal; multiples are larger or equal. They are inverse relationships."
    },
    {
      question: "What are factor pairs?",
      answer: "Factor pairs are two numbers whose product equals the original number. For 24, the pairs are (1, 24), (2, 12), (3, 8), and (4, 6). Every factorization can be viewed as organizing factor pairs. The middle factor pair is closest when the number is not a perfect square."
    },
    {
      question: "How many factors does a number have?",
      answer: "If the prime factorization is n = p1^a × p2^b × p3^c, then the number of factors is (a+1)(b+1)(c+1). For example, 24 = 2³ × 3¹ has (3+1)(1+1) = 8 factors. This formula comes from combinatorics: independently choose exponents for each prime."
    },
    {
      question: "What is the relationship between factors and simplifying fractions?",
      answer: "To simplify a fraction, divide both numerator and denominator by their common factors (ideally the GCF). For 24/36, factors of 24 are 1,2,3,4,6,8,12,24 and factors of 36 are 1,2,3,4,6,9,12,18,36. Common factors are 1,2,3,4,6,12. The GCF is 12, so 24/36 = 2/3."
    }
  ],
  dateModified: "2026-04-10",
});
