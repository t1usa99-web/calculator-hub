import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { STANDARD_DEVIATION_FAQS } from "@/lib/faq-math";
import { registerCalculator } from "@/lib/calculator-registry";

export default function StandardDeviationCalculator() {
  const [input, setInput] = useState("10, 12, 15, 14, 11, 13, 16, 12");

  // Parse input
  const numbers = input
    .split(",")
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));

  const n = numbers.length;
  const sum = numbers.reduce((a, b) => a + b, 0);
  const mean = n > 0 ? sum / n : 0;

  // Median
  const sorted = [...numbers].sort((a, b) => a - b);
  const median = n > 0 ? (n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)]) : 0;

  // Mode
  const frequency: { [key: number]: number } = {};
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  const maxFreq = Math.max(...Object.values(frequency), 0);
  const modes = Object.keys(frequency)
    .filter(k => frequency[parseFloat(k)] === maxFreq)
    .map(k => parseFloat(k));
  const mode = modes.length > 0 ? modes.join(", ") : "No mode";

  // Variance and Standard Deviation
  const populationVariance =
    n > 0 ? numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / n : 0;
  const sampleVariance =
    n > 1 ? numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / (n - 1) : 0;

  const populationStdDev = Math.sqrt(populationVariance);
  const sampleStdDev = Math.sqrt(sampleVariance);

  // Range
  const range = n > 0 ? Math.max(...numbers) - Math.min(...numbers) : 0;

  // Prepare chart data
  const chartData = numbers.map((num, idx) => ({
    index: `${idx + 1}`,
    value: num,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Mean" value={formatNumber(mean, 4)} highlight />
      <ResultCard label="Median" value={formatNumber(median, 4)} />
      <ResultCard label="Mode" value={mode} />
      <ResultCard label="Range" value={formatNumber(range, 4)} />
      <ResultCard label="Population Variance" value={formatNumber(populationVariance, 4)} />
      <ResultCard label="Sample Variance" value={formatNumber(sampleVariance, 4)} />
      <ResultCard label="Population Std Dev" value={formatNumber(populationStdDev, 4)} highlight />
      <ResultCard label="Sample Std Dev" value={formatNumber(sampleStdDev, 4)} highlight />
      <ResultCard label="Data Points" value={n.toString()} />
      <ResultCard label="Sum" value={formatNumber(sum, 4)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Data Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" />
          <YAxis label={{ value: "Value", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Standard deviation is a statistical measure that quantifies how spread out data points are from the average (mean). A small standard deviation means the data points cluster closely around the mean, indicating consistency. A large standard deviation means the data points are scattered far from the mean, indicating high variability. Standard deviation is fundamental in statistics, quality control, finance, and scientific research. Understanding it helps you interpret data, assess risk, and make informed decisions based on data variability.
      </p>

      <p>
        <strong>Population vs Sample Standard Deviation:</strong> Population standard deviation (σ) is used when you have data for an entire population, while sample standard deviation (s) is used when you have data from a sample representing a larger population. Sample standard deviation uses n-1 in the denominator (Bessel's correction) rather than n, which provides a better estimate when working with samples. The calculation involves finding deviations from the mean, squaring them, calculating the average (variance), and taking the square root.
      </p>

      <p>
        <strong>Measures of Central Tendency:</strong> Beyond standard deviation, three key measures describe data distribution. The mean (average) is the sum of all values divided by the count. The median is the middle value when data is sorted, unaffected by extreme outliers. The mode is the most frequently occurring value. Together with range (maximum minus minimum), these measures provide a complete picture of your data's center and spread. Understanding all these measures helps you fully characterize a dataset.
      </p>

      <p>
        <strong>Practical Applications:</strong> Quality control teams use standard deviation to monitor manufacturing consistency. Financial analysts use it to assess investment risk and portfolio volatility. Scientists use it to determine statistical significance of results. Educators use it to understand test score distributions. Meteorologists use it for weather variability. In any field where you need to understand data variation and consistency, standard deviation is an essential analytical tool that guides decision-making and helps identify anomalies or unusual patterns.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Standard Deviation Calculator"
      description="Calculate mean, median, mode, variance, and standard deviation for a dataset"
      slug="standard-deviation-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data Values (comma-separated)
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter numbers separated by commas, e.g., 10, 12, 15, 14"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
            rows={3}
          />
          <p className="mt-1 text-xs text-gray-500">
            Enter at least 2 numbers. Example: 10, 12, 15, 14, 11
          </p>
        </div>

        {n < 2 && input.trim() && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-sm text-yellow-800">
              Please enter at least 2 numbers to calculate standard deviation.
            </p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: StandardDeviationCalculator,
  slug: "standard-deviation-calculator",
  title: "Standard Deviation Calculator",
  shortTitle: "Std Deviation",
  description: "Calculate standard deviation, variance, mean, median, and mode for any dataset",
  category: "math",
  icon: "📈",
  keywords: ["standard deviation", "statistics", "variance", "mean", "median", "mode", "data analysis"],
  popular: false,
  faqs: STANDARD_DEVIATION_FAQS,
  dateModified: "2026-04-09"
});
