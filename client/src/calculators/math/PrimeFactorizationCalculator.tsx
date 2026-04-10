import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

interface FactorCount {
  factor: number;
  count: number;
}

function getPrimeFactorization(num: number): FactorCount[] {
  const factors: FactorCount[] = [];
  let n = num;

  if (n <= 1) return factors;

  // Check for factor 2
  let count = 0;
  while (n % 2 === 0) {
    count++;
    n /= 2;
  }
  if (count > 0) factors.push({ factor: 2, count });

  // Check for odd factors
  for (let i = 3; i * i <= n; i += 2) {
    count = 0;
    while (n % i === 0) {
      count++;
      n /= i;
    }
    if (count > 0) factors.push({ factor: i, count });
  }

  // If n is still > 1, it's a prime factor
  if (n > 1) {
    factors.push({ factor: n, count: 1 });
  }

  return factors;
}

function getAllDivisors(num: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}

function formatFactorization(factors: FactorCount[]): string {
  return factors.map((f) => (f.count > 1 ? `${f.factor}^${f.count}` : `${f.factor}`)).join(" × ");
}

export default function PrimeFactorizationCalculator() {
  const [inputNumber, setInputNumber] = useState(60);

  const num = Math.floor(inputNumber);
  const factors = getPrimeFactorization(num);
  const divisors = getAllDivisors(num);
  const factorization = formatFactorization(factors);
  const totalFactors = divisors.length;

  // Calculate prime factor counts for chart
  const chartData = factors.map((f) => ({
    name: `${f.factor}`,
    count: f.count,
    fill: "#3b82f6",
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Prime Factorization"
        value={factorization || "1"}
        highlight
      />
      <ResultCard
        label="Number of Unique Primes"
        value={formatNumber(factors.length)}
      />
      <ResultCard
        label="Total Number of Divisors"
        value={formatNumber(totalFactors)}
        highlight
      />
      <ResultCard
        label="Is Prime?"
        value={factors.length === 1 && factors[0]?.count === 1 ? "Yes" : "No"}
      />
      <ResultCard
        label="All Divisors"
        value={divisors.slice(0, 12).join(", ") + (divisors.length > 12 ? "..." : "")}
      />
      <ResultCard
        label="Formula"
        value={factors.length > 0 ? `n = ${factorization}` : "n = 1"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Prime Factor Exponents</h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" radius={[8, 8, 0, 0]}>
              {chartData.map((entry, index) => (
                <Bar key={index} dataKey="count" fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-center text-gray-500 py-12">No prime factors (input is 1)</div>
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Prime factorization is the process of finding all prime numbers that multiply together to produce a given number. Every integer greater than 1 either is prime or can be uniquely expressed as a product of prime numbers. This fundamental theorem of arithmetic is essential in number theory, cryptography, and mathematics education.
      </p>

      <p>
        <strong>What are Prime Numbers?</strong> A prime number is a natural number greater than 1 that has exactly two divisors: 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. The number 1 is not prime. Every non-prime number greater than 1 is called composite and can be factored into primes. For example, 60 = 2² × 3 × 5.
      </p>

      <p>
        <strong>Finding Prime Factors:</strong> Use trial division: start with the smallest prime (2), divide as many times as possible, then move to the next prime. Continue until the remaining number is 1. For example, factoring 60: 60 ÷ 2 = 30, 30 ÷ 2 = 15, 15 ÷ 3 = 5, 5 ÷ 5 = 1. So 60 = 2² × 3 × 5. This calculator automates the process.
      </p>

      <p>
        <strong>Understanding Divisors:</strong> All divisors of a number are products of its prime factors. If n = 2² × 3 × 5, the divisors are formed by taking each prime 0, 1, or 2 times for 2, and 0 or 1 time for 3 and 5. The total count of divisors is (2+1)(1+1)(1+1) = 12. This formula comes from combinatorics: you independently choose exponents for each prime.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Prime factorization is used in cryptography (RSA encryption relies on the difficulty of factoring large numbers), simplifying fractions, finding GCD and LCM, and analyzing recurring decimals. It's also fundamental in computer science algorithms and in pure mathematics research related to number theory and prime patterns.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Prime Factorization Calculator"
      description="Find prime factors, divisors, and factorization of numbers"
      slug="prime-factorization-calculator"
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
          placeholder="60"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PrimeFactorizationCalculator,
  slug: "prime-factorization-calculator",
  title: "Prime Factorization Calculator",
  shortTitle: "Prime Factorization",
  description: "Find prime factors and divisors of any number",
  category: "math",
  icon: "🔢",
  keywords: ["prime factorization", "prime factors", "divisors", "number theory", "factors"],
  popular: true,
  faqs: [
    {
      question: "What is a prime number?",
      answer: "A prime number is a natural number greater than 1 that has exactly two divisors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13. The number 1 is not prime. The number 2 is the only even prime. Prime numbers are the building blocks of all other numbers."
    },
    {
      question: "Why is factorization important?",
      answer: "Prime factorization reveals the structure of numbers. It{'\''}s essential for simplifying fractions, finding GCD and LCM, understanding divisibility, and in cryptography where large number factorization is computationally hard. It also helps in algebra and solving equations."
    },
    {
      question: "What does 2^3 mean in factorization?",
      answer: "2^3 means 2 is multiplied by itself 3 times: 2 × 2 × 2 = 8. In factorization, exponents show how many times each prime appears. For 60 = 2² × 3 × 5, the prime 2 appears twice, while 3 and 5 each appear once."
    },
    {
      question: "How many divisors does a number have?",
      answer: "If n = p1^a × p2^b × p3^c, the number of divisors is (a+1)(b+1)(c+1). For example, 60 = 2² × 3¹ × 5¹ has (2+1)(1+1)(1+1) = 12 divisors: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60."
    },
    {
      question: "Is 1 considered a prime number?",
      answer: "No, 1 is not prime by modern definition. A prime must have exactly two distinct divisors. The number 1 has only one divisor (itself). Excluding 1 from primes simplifies theorems like the Fundamental Theorem of Arithmetic, which states every integer has a unique prime factorization."
    }
  ],
  dateModified: "2026-04-10",
});
