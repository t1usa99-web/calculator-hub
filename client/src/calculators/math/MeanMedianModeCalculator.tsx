import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { MEAN_MEDIAN_MODE_FAQS } from "@/lib/faq-math";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MeanMedianModeCalculator() {
  const [input, setInput] = useState("1, 2, 3, 4, 5, 5, 6, 7, 8, 9");

  // Parse input - split by comma, space, or newline
  const parseNumbers = (text: string): number[] => {
    return text
      .split(/[,\s\n]+/)
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));
  };

  const numbers = parseNumbers(input);
  const sorted = [...numbers].sort((a, b) => a - b);

  // Mean
  const mean =
    numbers.length > 0 ? numbers.reduce((a, b) => a + b, 0) / numbers.length : 0;

  // Median
  let median = 0;
  if (numbers.length > 0) {
    const mid = Math.floor(numbers.length / 2);
    median =
      numbers.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
  }

  // Mode (find all modes in case of multimodal)
  const frequency: Record<number, number> = {};
  numbers.forEach((n) => {
    frequency[n] = (frequency[n] || 0) + 1;
  });
  const maxFreq = Math.max(...Object.values(frequency), 0);
  const modes =
    maxFreq > 1
      ? Object.keys(frequency)
          .filter((k) => frequency[Number(k)] === maxFreq)
          .map(Number)
      : [];

  // Range, Count, Sum
  const range = numbers.length > 0 ? sorted[numbers.length - 1] - sorted[0] : 0;
  const count = numbers.length;
  const sum = numbers.reduce((a, b) => a + b, 0);

  // Standard Deviation
  let stdDev = 0;
  if (numbers.length > 1) {
    const variance =
      numbers.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) /
      numbers.length;
    stdDev = Math.sqrt(variance);
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Mean (Average)"
        value={formatNumber(mean)}
        highlight={true}
      />
      <ResultCard
        label="Median"
        value={formatNumber(median)}
        highlight={true}
      />
      <ResultCard
        label="Mode"
        value={
          modes.length > 0
            ? modes.map((m) => formatNumber(m)).join(", ")
            : "No mode"
        }
      />
      <ResultCard
        label="Range"
        value={formatNumber(range)}
      />
      <ResultCard
        label="Count"
        value={count.toString()}
      />
      <ResultCard
        label="Sum"
        value={formatNumber(sum)}
      />
      <ResultCard
        label="Standard Deviation"
        value={formatNumber(stdDev)}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Descriptive Statistics</h3>
      <p>
        Descriptive statistics summarize data using a few key numbers. The <strong>mean</strong> (average) is calculated by summing all values and dividing by count. Example: {1, 2, 3, 4, 5} has mean = 15 ÷ 5 = 3. The <strong>median</strong> is the middle value when sorted. For {1, 2, 3, 4, 5}, median = 3. For even counts like {1, 2, 3, 4}, median = (2+3) ÷ 2 = 2.5. The <strong>mode</strong> is the most frequent value. In {1, 1, 2, 3}, mode = 1. Each measure tells a different story: mean is sensitive to outliers (extreme values), median is robust to outliers, and mode reveals the most common observation.
      </p>
      <p>
        <strong>When to Use Each Measure:</strong> Use the <strong>mean</strong> for symmetric data without outliers (like test scores for a full class). Use the <strong>median</strong> for skewed data or when outliers are present (income, house prices). Use the <strong>mode</strong> for categorical data (favorite color) or discrete counts (most common shoe size). Real example: Five salaries {$40k, $45k, $50k, $55k, $500k}. Mean = $138k (misleading—pulled up by the outlier). Median = $50k (representative). Mode = none (all appear once). The median better reflects typical salary than the mean here.
      </p>
      <p>
        <strong>Range and Spread:</strong> The <strong>range</strong> (max − min) shows how spread out data is. For {1, 2, 3, 4, 100}, range = 99 (large spread). <strong>Standard deviation</strong> measures average distance from the mean—higher values indicate more variability. In statistics, understanding center (mean/median/mode) and spread (range/standard deviation) together gives complete insight into your data. Never rely on just one measure; always look at all three dimensions: central tendency, spread, and distribution shape.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mean, Median, Mode Calculator"
      description="Calculate mean, median, mode, range, and standard deviation from a dataset"
      slug="mean-median-mode-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Numbers (comma, space, or newline separated)
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            rows={5}
            placeholder="1, 2, 3, 4, 5"
          />
          <p className="text-xs text-gray-500 mt-2">
            {count > 0 ? `${count} numbers detected` : "Enter numbers above"}
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MeanMedianModeCalculator,
  slug: "mean-median-mode-calculator",
  title: "Mean, Median, Mode Calculator",
  shortTitle: "Mean, Median, Mode",
  description:
    "Calculate mean, median, mode, range, and standard deviation from a dataset",
  category: "math",
  icon: "📈",
  keywords: [
    "statistics",
    "mean",
    "median",
    "mode",
    "standard deviation",
    "data analysis",
  ],
  faqs: MEAN_MEDIAN_MODE_FAQS,
  dateModified: "2026-04-09",
});
