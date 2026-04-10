import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function NumberSequenceCalculator() {
  const [inputText, setInputText] = useState("2, 4, 6, 8, 10");

  let numbers: number[] = [];
  let parseError = false;
  let sequenceType = "Unknown";
  let commonValue = 0;
  let nextTerms: number[] = [];
  let formula = "";

  try {
    numbers = inputText
      .split(",")
      .map((s) => parseFloat(s.trim()))
      .filter((n) => !isNaN(n));

    if (numbers.length >= 2) {
      // Check for arithmetic sequence
      const differences = [];
      for (let i = 1; i < numbers.length; i++) {
        differences.push(numbers[i] - numbers[i - 1]);
      }
      const allSameDiff = differences.every((d) => d === differences[0]);

      if (allSameDiff && differences.length > 0) {
        sequenceType = "Arithmetic";
        commonValue = differences[0];
        formula = `a(n) = ${numbers[0]} + (n-1)×${commonValue}`;
        nextTerms = [];
        let current = numbers[numbers.length - 1];
        for (let i = 0; i < 5; i++) {
          current += commonValue;
          nextTerms.push(current);
        }
      } else {
        // Check for geometric sequence
        const ratios = [];
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i - 1] !== 0) {
            ratios.push(numbers[i] / numbers[i - 1]);
          }
        }
        const allSameRatio = ratios.length > 0 && ratios.every((r) => Math.abs(r - ratios[0]) < 0.0001);

        if (allSameRatio) {
          sequenceType = "Geometric";
          commonValue = ratios[0];
          formula = `a(n) = ${numbers[0]} × ${commonValue}^(n-1)`;
          nextTerms = [];
          let current = numbers[numbers.length - 1];
          for (let i = 0; i < 5; i++) {
            current *= commonValue;
            nextTerms.push(current);
          }
        } else {
          // Check for Fibonacci-like
          let isFibonacci = true;
          for (let i = 2; i < numbers.length; i++) {
            if (Math.abs(numbers[i] - (numbers[i - 1] + numbers[i - 2])) > 0.0001) {
              isFibonacci = false;
              break;
            }
          }

          if (isFibonacci && numbers.length >= 3) {
            sequenceType = "Fibonacci-like";
            formula = `a(n) = a(n-1) + a(n-2)`;
            nextTerms = [];
            let prev = numbers[numbers.length - 2];
            let curr = numbers[numbers.length - 1];
            for (let i = 0; i < 5; i++) {
              const next = prev + curr;
              nextTerms.push(next);
              prev = curr;
              curr = next;
            }
          } else {
            sequenceType = "Pattern Not Identified";
          }
        }
      }
    } else {
      parseError = true;
    }
  } catch {
    parseError = true;
  }

  const allNumbers = [...numbers, ...nextTerms];
  const chartData = allNumbers.map((num, index) => ({
    name: `Term ${index + 1}`,
    value: num,
    isNext: index >= numbers.length,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {!parseError && numbers.length >= 2 ? (
        <>
          <ResultCard
            label="Sequence Type"
            value={sequenceType}
            highlight
          />
          <ResultCard
            label={sequenceType === "Arithmetic" ? "Common Difference" : sequenceType === "Geometric" ? "Common Ratio" : "Pattern"}
            value={commonValue !== 0 ? formatNumber(commonValue, 4) : "N/A"}
          />
          <ResultCard
            label="Formula"
            value={formula || "N/A"}
          />
          <ResultCard
            label="Next 5 Terms"
            value={nextTerms.length > 0 ? nextTerms.map((n) => formatNumber(n, 2)).join(", ") : "N/A"}
          />
        </>
      ) : (
        <ResultCard label="Error" value="Enter at least 2 numbers to detect pattern" />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Sequence Visualization (Blue: input, Green: predicted)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            dot={{ fill: (props: any) => (props.payload.isNext ? "#10b981" : "#3b82f6"), r: 5 }}
            name="Terms"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Number sequences are ordered lists of numbers that follow a specific pattern or rule. Identifying the pattern allows you to predict future terms and understand the underlying mathematical relationship. Sequences are fundamental in mathematics and appear in nature, finance, computer science, and many other fields.
      </p>

      <p>
        <strong>Arithmetic Sequences:</strong> An arithmetic sequence has a constant difference between consecutive terms called the common difference. For example, 2, 4, 6, 8, 10 has a common difference of 2. The formula is a(n) = a(1) + (n-1)d, where d is the common difference. Arithmetic sequences appear in everyday situations like payment schedules, temperature changes, and distance traveled at constant speed.
      </p>

      <p>
        <strong>Geometric Sequences:</strong> A geometric sequence has a constant ratio between consecutive terms called the common ratio. For example, 2, 6, 18, 54 has a common ratio of 3. The formula is a(n) = a(1) × r^(n-1), where r is the common ratio. Geometric sequences model exponential growth or decay, such as bacteria population, radioactive decay, and investment returns with compound interest.
      </p>

      <p>
        <strong>Fibonacci-like Sequences:</strong> A Fibonacci-like sequence is where each term is the sum of the two previous terms. Starting with 1, 1, the sequence becomes 1, 1, 2, 3, 5, 8, 13... Fibonacci sequences appear throughout nature in spiral shells, flower petals, and DNA structures. They also have applications in computer algorithms and financial analysis.
      </p>

      <p>
        <strong>Using This Calculator:</strong> Enter your sequence as comma-separated numbers. The calculator identifies the pattern type, displays the formula, and predicts the next five terms. This helps verify your understanding, check homework, and explore mathematical relationships in data you collect from experiments or observations.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Number Sequence Calculator"
      description="Identify sequence patterns and predict the next terms"
      slug="number-sequence-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Sequence (comma-separated numbers)
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="2, 4, 6, 8, 10"
          />
        </div>
        <div className="text-sm text-gray-600">
          {!parseError && numbers.length > 0 && (
            <p>Parsed {numbers.length} numbers: {numbers.slice(0, 8).join(", ")}{numbers.length > 8 ? "..." : ""}</p>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: NumberSequenceCalculator,
  slug: "number-sequence-calculator",
  title: "Number Sequence Calculator",
  shortTitle: "Number Sequence",
  description: "Identify patterns in number sequences and predict next terms",
  category: "math",
  icon: "📈",
  keywords: ["sequence", "pattern", "arithmetic", "geometric", "fibonacci", "series"],
  popular: false,
  faqs: [
    {
      question: "What is the difference between a sequence and a series?",
      answer: "A sequence is an ordered list of numbers. A series is the sum of the terms in a sequence. For example, the sequence 1, 2, 3, 4 has a series sum of 1+2+3+4=10."
    },
    {
      question: "How do I find the common difference in an arithmetic sequence?",
      answer: "Subtract any term from the next term: d = a(n+1) - a(n). For example, in 5, 8, 11, 14, the common difference is 8-5=3. This should be the same for all consecutive pairs."
    },
    {
      question: "What if my sequence doesn{'\''}t match any pattern?",
      answer: "Not all sequences follow simple arithmetic, geometric, or Fibonacci patterns. Your sequence might follow a quadratic, cubic, or more complex rule. Try calculating differences of differences or analyzing the underlying context."
    },
    {
      question: "Can a sequence be both arithmetic and geometric?",
      answer: "Yes, if all terms are identical. For example, 5, 5, 5, 5 has both common difference 0 and common ratio 1. A non-constant sequence cannot be both types."
    },
    {
      question: "Where do sequences appear in real life?",
      answer: "Arithmetic sequences: loan payments, hourly wage increases. Geometric: bacteria growth, radioactive decay, population growth. Fibonacci: spiral patterns in nature, stock market analysis, algorithm analysis."
    }
  ],
  dateModified: "2026-04-10",
});
