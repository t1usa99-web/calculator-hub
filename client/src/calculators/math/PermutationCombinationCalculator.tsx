import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function PermutationCombinationCalculator() {
  const [n, setN] = useState(10);
  const [r, setR] = useState(3);
  const [mode, setMode] = useState("both");

  // Calculate factorials
  const factorial = (num: number): number => {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
  };

  const nFactorial = factorial(n);
  const rFactorial = factorial(r);
  const nMinusRFactorial = factorial(n - r);

  // Permutation: nPr = n! / (n - r)!
  const permutation = n >= r && r >= 0 ? nFactorial / nMinusRFactorial : 0;

  // Combination: nCr = n! / (r! * (n - r)!)
  const combination = n >= r && r >= 0 ? nFactorial / (rFactorial * nMinusRFactorial) : 0;

  const chartData = [
    { label: "n!", value: nFactorial > 1e10 ? 1e10 : nFactorial },
    { label: "r!", value: rFactorial },
    { label: "(n-r)!", value: nMinusRFactorial > 1e10 ? 1e10 : nMinusRFactorial },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {(mode === "both" || mode === "permutation") && (
        <>
          <ResultCard
            label="Permutation (nPr)"
            value={permutation > 1e15 ? permutation.toExponential(2) : formatNumber(permutation, 0)}
            highlight
          />
          <ResultCard
            label="Formula"
            value={`${n}! / (${n} - ${r})! = ${n}! / ${n - r}!`}
          />
        </>
      )}
      {(mode === "both" || mode === "combination") && (
        <>
          <ResultCard
            label="Combination (nCr)"
            value={combination > 1e15 ? combination.toExponential(2) : formatNumber(combination, 0)}
            highlight
          />
          <ResultCard
            label="Formula"
            value={`${n}! / (${r}! × ${n - r}!)`}
          />
        </>
      )}
      <ResultCard label="n! (factorial)" value={nFactorial > 1e15 ? nFactorial.toExponential(2) : formatNumber(nFactorial, 0)} />
      <ResultCard label="r! (factorial)" value={rFactorial > 1e15 ? rFactorial.toExponential(2) : formatNumber(rFactorial, 0)} />
      <ResultCard label="(n - r)! (factorial)" value={nMinusRFactorial > 1e15 ? nMinusRFactorial.toExponential(2) : formatNumber(nMinusRFactorial, 0)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Factorial Values (capped at 10B for visualization)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value) => {
              const num = value as number;
              return num > 1e10 ? "1e10+ (capped)" : formatNumber(num, 0);
            }}
          />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Permutations and combinations are fundamental counting techniques used in probability, statistics, and combinatorics. Both involve selecting items from a group, but they differ in whether order matters. Understanding the difference is essential for solving problems in probability, password generation, tournament scheduling, and data analysis.
      </p>

      <p>
        <strong>Permutations (nPr):</strong> A permutation is an arrangement of items where order matters. nPr represents the number of ways to arrange r items selected from n total items. The formula is nPr = n! / (n - r)!. For example, arranging 3 students in a line from 10 students uses permutations because the order (first, second, third) matters. Permutations grow quickly as n increases, making them useful for security (like password combinations) and scheduling problems.
      </p>

      <p>
        <strong>Combinations (nCr):</strong> A combination is a selection of items where order doesn't matter. nCr represents the number of ways to choose r items from n items. The formula is nCr = n! / (r! × (n - r)!). For example, selecting 3 students from 10 for a team uses combinations because order doesn't matter. Combinations are always smaller than or equal to permutations for the same n and r values. They're used in lottery drawings, committee selection, and probability problems.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Lotteries use combinations (number of ways to select winning numbers). Password security uses permutations (total possible arrangements). Sports use combinations (tournament brackets, team selection). Insurance companies use combinations to calculate risk probabilities. Biologists use them to analyze genetic combinations. In any situation involving selection or arrangement, permutations and combinations help you quantify all possible outcomes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Permutation and Combination Calculator"
      description="Calculate permutations and combinations with factorial values"
      slug="permutation-combination-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="n"
          label="Total Items (n)"
          value={n}
          onChange={setN}
          min={0}
          max={170}
          step={1}
        />
        <InputField
          id="r"
          label="Items to Select (r)"
          value={r}
          onChange={setR}
          min={0}
          max={n}
          step={1}
        />
        <SelectField
          id="calculation-mode"
          label="Calculate"
          value={mode}
          onChange={setMode}
          options={[
            { value: "both", label: "Both Permutation and Combination" },
            { value: "permutation", label: "Permutation Only" },
            { value: "combination", label: "Combination Only" },
          ]}
        />

        {r > n && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-sm text-yellow-800">
              r cannot be greater than n. Please adjust your values.
            </p>
          </div>
        )}

        {n > 170 && (
          <div className="bg-orange-50 border border-orange-200 rounded p-3">
            <p className="text-sm text-orange-800">
              Large values may result in very large numbers or scientific notation.
            </p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
