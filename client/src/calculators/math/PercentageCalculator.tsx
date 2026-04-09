import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { PERCENTAGE_FAQS } from "@/lib/faq-content";

export default function PercentageCalculator() {
  const [mode, setMode] = useState("of");
  const [valueX, setValueX] = useState(25);
  const [valueY, setValueY] = useState(100);
  const [percentChange, setPercentChange] = useState(20);

  let result = 0;
  let explanation = "";
  let chartData = [];

  if (mode === "of") {
    // What is X% of Y?
    result = (valueX / 100) * valueY;
    explanation = `${formatPercent(valueX)} of ${formatNumber(valueY)} = ${formatNumber(result)}`;
    chartData = [
      { name: "Result", value: result, fill: "#3b82f6" },
      { name: "Remainder", value: Math.max(0, valueY - result), fill: "#e5e7eb" },
    ];
  } else if (mode === "is") {
    // X is what % of Y?
    result = valueY > 0 ? (valueX / valueY) * 100 : 0;
    explanation = `${formatNumber(valueX)} is ${formatPercent(result)} of ${formatNumber(valueY)}`;
    chartData = [
      { name: "Part", value: valueX, fill: "#3b82f6" },
      { name: "Whole", value: Math.max(0, valueY - valueX), fill: "#e5e7eb" },
    ];
  } else {
    // % change from X to Y?
    result = valueX > 0 ? ((valueY - valueX) / valueX) * 100 : 0;
    explanation = `Change from ${formatNumber(valueX)} to ${formatNumber(valueY)} is ${formatPercent(result)}`;
    chartData = [
      { name: "Original", value: Math.abs(valueX), fill: "#3b82f6" },
      { name: "Change", value: Math.abs(valueY - valueX), fill: result >= 0 ? "#10b981" : "#ef4444" },
    ];
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Result" value={mode === "is" ? formatPercent(result) : formatNumber(result)} highlight />
      <ResultCard label="Explanation" value={explanation} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Visual Representation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Bar dataKey="value" fill="#3b82f6">
            {chartData.map((entry, index) => (
              <Bar key={index} dataKey="value" fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Percentages are a way to express a part of a whole as a fraction of 100. The word "percent" literally means "per hundred," so 50% means 50 out of every 100 units. Percentages are widely used in everyday life, from discounts in stores to interest rates on savings accounts, tax calculations, and grading systems. Understanding how to calculate percentages is an essential skill for managing finances, comparing values, and interpreting data.
      </p>

      <p>
        <strong>Finding a Percentage of a Number:</strong> To find what percentage of a number equals, multiply the number by the percentage (expressed as a decimal). For example, to find 25% of 200, multiply 200 by 0.25 to get 50. This type of calculation is useful for calculating discounts, tips, commissions, and portions of a whole. If a jacket costs $100 and is 30% off, the discount amount is $30, so you pay $70.
      </p>

      <p>
        <strong>Finding What Percentage One Number Is of Another:</strong> To determine what percentage one number is of another, divide the first number by the second, then multiply by 100. For instance, if you scored 45 out of 50 on a test, divide 45 by 50 to get 0.9, then multiply by 100 to get 90%. This is commonly used for grade calculations, market share analysis, and performance metrics.
      </p>

      <p>
        <strong>Percentage Change:</strong> Percentage change shows how much a value has increased or decreased over time. Calculate it by finding the difference between the new and original values, dividing by the original value, and multiplying by 100. If a stock price rises from $50 to $60, the percentage increase is ((60-50)/50) × 100 = 20%. Negative values indicate a decrease. This is essential for analyzing growth rates, inflation, population changes, and investment returns.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      description="Calculate percentages, find percentages of numbers, and determine percentage changes"
      slug="percentage-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="mode"
          label="Calculation Mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "of", label: "What is X% of Y?" },
            { value: "is", label: "X is what % of Y?" },
            { value: "change", label: "What is the % change from X to Y?" },
          ]}
        />
        {mode === "of" && (
          <>
            <InputField
              id="percent-value"
              label="Percentage"
              value={valueX}
              onChange={setValueX}
              suffix="%"
              step={1}
              min={0}
              max={1000}
            />
            <InputField
              id="base-value"
              label="Base Value"
              value={valueY}
              onChange={setValueY}
              step={1}
              min={0}
            />
          </>
        )}
        {mode === "is" && (
          <>
            <InputField
              id="part-value"
              label="Part Value"
              value={valueX}
              onChange={setValueX}
              step={0.01}
              min={0}
            />
            <InputField
              id="whole-value"
              label="Whole Value"
              value={valueY}
              onChange={setValueY}
              step={0.01}
              min={0}
            />
          </>
        )}
        {mode === "change" && (
          <>
            <InputField
              id="original-value"
              label="Original Value"
              value={valueX}
              onChange={setValueX}
              step={0.01}
              min={0}
            />
            <InputField
              id="new-value"
              label="New Value"
              value={valueY}
              onChange={setValueY}
              step={0.01}
              min={0}
            />
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PercentageCalculator,
  slug: "percentage-calculator",
  title: "Percentage Calculator",
  shortTitle: "Percentage",
  description: "Calculate percentages, percentage of values, and percentage changes",
  category: "math",
  icon: "📊",
  keywords: ["percentage", "percent", "calculate percentage", "percentage change", "discount"],
  popular: true,
  faqs: PERCENTAGE_FAQS,
  dateModified: "2026-04-09",
});
