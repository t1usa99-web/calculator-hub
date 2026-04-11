import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function LongDivisionCalculator() {
  const [dividend, setDividend] = useState(125);
  const [divisor, setDivisor] = useState(7);

  let quotient = 0;
  let remainder = 0;
  let decimalResult = 0;
  let mixedNumber = "";
  let steps: string[] = [];

  if (divisor !== 0) {
    quotient = Math.floor(dividend / divisor);
    remainder = dividend % divisor;
    decimalResult = dividend / divisor;

    if (quotient > 0 && remainder > 0) {
      mixedNumber = `${quotient} ${remainder}/${divisor}`;
    } else if (remainder === 0) {
      mixedNumber = `${quotient}`;
    } else {
      mixedNumber = `0 ${remainder}/${divisor}`;
    }

    // Generate steps
    let current = dividend;
    let position = 0;
    let step = 1;

    steps.push(`Step 1: Divide ${dividend} by ${divisor}`);
    steps.push(`${dividend} ÷ ${divisor} = ${quotient} R${remainder}`);
    steps.push(`Verification: ${divisor} × ${quotient} + ${remainder} = ${divisor * quotient + remainder}`);
  }

  const chartData = [
    { name: "Quotient", value: quotient, fill: "#3b82f6" },
    { name: "Remainder", value: remainder, fill: "#ef4444" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Quotient" value={formatNumber(quotient)} highlight />
      <ResultCard label="Remainder" value={formatNumber(remainder)} />
      <ResultCard label="Decimal Result" value={formatNumber(decimalResult, 6)} highlight />
      <ResultCard label="Mixed Number" value={mixedNumber} />
      <ResultCard label="Verification" value={`${divisor} × ${quotient} + ${remainder} = ${dividend}`} />
      <ResultCard label="Equation" value={`${dividend} = ${divisor} × ${quotient} + ${remainder}`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Division Components</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Long division is a method for dividing large numbers by breaking the division problem down into smaller steps. It's one of the foundational mathematical skills taught in elementary school. Understanding long division helps you perform calculations without a calculator and provides insight into how division algorithms work in computers.
      </p>

      <p>
        <strong>Division Components:</strong> In the division problem 125 ÷ 7, we have 125 as the dividend (the number being divided), 7 as the divisor (the number we{'\''}re dividing by), 17 as the quotient (the answer), and 6 as the remainder (what{'\''}s left over). The relationship is: dividend = (divisor × quotient) + remainder. This can also be expressed as a mixed number: 17 6/7 or a decimal: 17.857...
      </p>

      <p>
        <strong>The Long Division Process:</strong> Start from the leftmost digit of the dividend. Find how many times the divisor goes into the current portion without exceeding it. Write the quotient digit above that portion. Multiply the quotient digit by the divisor and subtract from the current portion to get the remainder. Bring down the next digit of the dividend. Repeat until all digits are processed. The final remainder is the leftover amount.
      </p>

      <p>
        <strong>Interpreting Results:</strong> If the remainder is zero, the dividend is perfectly divisible. If there{'\''}s a remainder, you can express it as a fraction (remainder/divisor) in a mixed number, or convert to a decimal by continuing the process with decimal places. For example, 125 ÷ 7 = 17 R6 = 17 6/7 ≈ 17.857. Understanding remainders is crucial in real-world applications like distributing items or calculating repeating decimals.
      </p>

      <p>
        <strong>Practical Applications:</strong> Long division is used in partitioning problems (dividing items equally), calculating rates (miles per gallon), finding averages, and understanding fractions. While calculators are convenient, knowing how to perform long division builds mathematical confidence and helps you estimate answers to check calculator results for reasonableness.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Long Division Calculator"
      description="Perform long division with quotient, remainder, and decimal results"
      slug="long-division-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="dividend"
          label="Dividend (number to divide)"
          value={dividend}
          onChange={setDividend}
          step={1}
          min={0}
        />
        <InputField
          id="divisor"
          label="Divisor (divide by)"
          value={divisor}
          onChange={setDivisor}
          step={1}
          min={1}
        />
        {steps.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Steps</h4>
            <div className="space-y-1 text-sm text-gray-700">
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
