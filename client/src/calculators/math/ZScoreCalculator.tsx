import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ZScoreCalculator() {
  const [value, setValue] = useState(75);
  const [mean, setMean] = useState(70);
  const [stdDev, setStdDev] = useState(5);

  // Calculate Z-score
  const zScore = stdDev !== 0 ? (value - mean) / stdDev : 0;

  // Standard normal distribution CDF approximation (error function)
  // This is a simplified approximation for percentile calculation
  const erfApprox = (x: number): number => {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x);
    const t = 1.0 / (1.0 + p * absX);

    const y = 1.0 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-absX * absX);
    return sign * y;
  };

  const cdf = (z: number): number => (1 + erfApprox(z / Math.sqrt(2))) / 2;
  const percentile = cdf(zScore) * 100;
  const probAbove = (1 - cdf(zScore)) * 100;
  const probBelow = cdf(zScore) * 100;

  // Generate distribution curve
  const distributionData = [];
  for (let z = -4; z <= 4; z += 0.2) {
    const x = mean + z * stdDev;
    const prob = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow(z, 2));
    distributionData.push({
      x: formatNumber(x, 1),
      prob: prob * 100,
      z: z,
      isCurrent: Math.abs(z - zScore) < 0.3,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Z-Score" value={formatNumber(zScore, 4)} highlight />
      <ResultCard label="Percentile" value={formatPercent(percentile / 100)} highlight />
      <ResultCard label="Probability {'<'} Z" value={formatPercent(probBelow / 100)} />
      <ResultCard label="Probability {'>'} Z" value={formatPercent(probAbove / 100)} />
      <ResultCard label="Standard Deviations from Mean" value={formatNumber(Math.abs(zScore), 2)} />
      <ResultCard
        label="Interpretation"
        value={Math.abs(zScore) > 2 ? "Unusual (Outlier)" : Math.abs(zScore) > 1 ? "Moderately rare" : "Common"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Normal Distribution Curve</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={distributionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: "Value", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Probability Density", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 4)} />
          <Line
            type="monotone"
            dataKey="prob"
            stroke="#3b82f6"
            dot={false}
            isAnimationActive={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 mt-2">
        Current value: {formatNumber(value, 1)} (Z-score: {formatNumber(zScore, 2)})
      </p>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A Z-score measures how many standard deviations a data point is from the mean. It's a standardization technique that converts any data point into a comparable value on the standard normal distribution (mean = 0, standard deviation = 1). Z-scores are essential in statistics, quality control, and data science for identifying outliers and comparing values across different scales.
      </p>

      <p>
        <strong>Understanding Z-Scores:</strong> A Z-score of 0 means the value equals the mean. A positive Z-score means the value is above the mean, and a negative Z-score means it's below. For example, a Z-score of 2 means the value is 2 standard deviations above the mean, occurring in only about 2.3% of a normal distribution. Z-scores of {'>'}2 or {'<'}-2 are considered unusual or outliers.
      </p>

      <p>
        <strong>Percentiles and Probabilities:</strong> Z-scores convert directly to percentiles on the standard normal distribution. A Z-score of 1.96 corresponds to the 97.5th percentile, meaning 97.5% of data falls below that value. This relationship enables hypothesis testing, confidence intervals, and probability calculations. Z-scores help determine if an observation is statistically significant or just random variation.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Quality control uses Z-scores to monitor manufacturing processes and detect when they drift from targets. Medical professionals use them to interpret test scores and identify abnormal results. Financial analysts use Z-scores to detect credit risk (Altman Z-score). Educators use them to compare student performance across different tests. In any field involving statistics, Z-scores are essential for standardization and comparison.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Z-Score Calculator"
      description="Calculate Z-scores and determine percentiles and probabilities in a normal distribution"
      slug="z-score-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="value"
          label="Value (X)"
          value={value}
          onChange={setValue}
          step={0.1}
        />
        <InputField
          id="mean"
          label="Mean (μ)"
          value={mean}
          onChange={setMean}
          step={0.1}
        />
        <InputField
          id="std-dev"
          label="Standard Deviation (σ)"
          value={stdDev}
          onChange={setStdDev}
          step={0.1}
          min={0.01}
        />

        {stdDev === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-sm text-yellow-800">
              Standard deviation must be greater than 0.
            </p>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
          <p>
            <strong>Formula:</strong> Z = (X - μ) / σ
          </p>
          <p className="mt-2">
            <strong>Your calculation:</strong> Z = ({formatNumber(value, 2)} - {formatNumber(mean, 2)}) / {formatNumber(stdDev, 2)} = {formatNumber(zScore, 4)}
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: ZScoreCalculator,
  slug: "z-score-calculator",
  title: "Z-Score Calculator",
  shortTitle: "Z-Score",
  description: "Calculate Z-scores, percentiles, and probabilities in a normal distribution",
  category: "math",
  icon: "📊",
  keywords: ["z-score", "standard score", "normal distribution", "percentile", "statistics", "standardization"],
  popular: false,
  dateModified: "2026-04-10"
});
