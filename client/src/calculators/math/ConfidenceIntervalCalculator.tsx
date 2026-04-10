import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ConfidenceIntervalCalculator() {
  const [mean, setMean] = useState(100);
  const [sampleSize, setSampleSize] = useState(50);
  const [stdDev, setStdDev] = useState(10);
  const [confidenceLevel, setConfidenceLevel] = useState(95);

  // Z-scores for different confidence levels
  const zScores: { [key: number]: number } = {
    90: 1.645,
    95: 1.96,
    99: 2.576,
  };

  const zScore = zScores[confidenceLevel] || 1.96;

  // Calculate standard error
  const standardError = stdDev / Math.sqrt(sampleSize);

  // Calculate margin of error
  const marginOfError = zScore * standardError;

  // Calculate confidence interval bounds
  const lowerBound = mean - marginOfError;
  const upperBound = mean + marginOfError;

  // Chart data showing the interval
  const chartData = [
    { label: "Lower Bound", value: lowerBound },
    { label: "Mean", value: mean },
    { label: "Upper Bound", value: upperBound },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Confidence Level" value={`${confidenceLevel}%`} highlight />
      <ResultCard label="Z-Score" value={formatNumber(zScore, 3)} />
      <ResultCard label="Standard Error" value={formatNumber(standardError, 4)} />
      <ResultCard label="Margin of Error" value={formatNumber(marginOfError, 4)} highlight />
      <ResultCard label="Lower Bound" value={formatNumber(lowerBound, 2)} />
      <ResultCard label="Upper Bound" value={formatNumber(upperBound, 2)} />
      <ResultCard
        label="Confidence Interval"
        value={`[${formatNumber(lowerBound, 2)}, ${formatNumber(upperBound, 2)}]`}
        highlight
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Confidence Interval Visualization</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="label" type="category" width={95} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-700">
        <p>
          The interval [{formatNumber(lowerBound, 2)}, {formatNumber(upperBound, 2)}] has a {confidenceLevel}% probability of containing the true population mean.
        </p>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A confidence interval is a range of values that likely contains the true population parameter (like the mean). Rather than providing a single estimate, confidence intervals show the uncertainty in your estimate. A 95% confidence interval means that if you repeated your study many times, approximately 95% of the calculated intervals would contain the true population mean.
      </p>

      <p>
        <strong>Components of Confidence Intervals:</strong> The confidence level (90%, 95%, or 99%) represents how confident you want to be. The margin of error (also called error bound) is the distance from the sample mean to the interval bounds. Standard error measures the variability of the sample mean, calculated as standard deviation divided by the square root of sample size. Larger sample sizes reduce the margin of error, making intervals narrower and more precise.
      </p>

      <p>
        <strong>Formula and Interpretation:</strong> The confidence interval is calculated as: Mean ± (Z × Standard Error). For a 95% confidence level, the Z-score is 1.96, meaning the interval extends 1.96 standard errors on each side of the mean. A wider interval (lower confidence or smaller sample) reflects more uncertainty. A narrower interval (higher confidence or larger sample) reflects more certainty about where the true mean lies.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Polling organizations report election results with 95% confidence intervals (the margin of error). Medical researchers use confidence intervals to estimate treatment effects and drug efficacy. Quality control teams use them to ensure manufacturing specifications are met. Business analysts use them for forecasting and risk assessment. A-B testing in marketing relies on confidence intervals to determine if results are statistically significant.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Confidence Interval Calculator"
      description="Calculate confidence intervals for population means with specified confidence levels"
      slug="confidence-interval-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="sample-mean"
          label="Sample Mean"
          value={mean}
          onChange={setMean}
          step={0.1}
        />
        <InputField
          id="sample-size"
          label="Sample Size (n)"
          value={sampleSize}
          onChange={setSampleSize}
          min={1}
          step={1}
        />
        <InputField
          id="std-deviation"
          label="Standard Deviation"
          value={stdDev}
          onChange={setStdDev}
          min={0.01}
          step={0.1}
        />
        <SelectField
          id="confidence-level"
          label="Confidence Level"
          value={confidenceLevel.toString()}
          onChange={(val) => setConfidenceLevel(parseInt(val))}
          options={[
            { value: "90", label: "90% (Z = 1.645)" },
            { value: "95", label: "95% (Z = 1.96)" },
            { value: "99", label: "99% (Z = 2.576)" },
          ]}
        />

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
          <p>
            <strong>Formula:</strong> CI = Mean ± (Z × (σ / √n))
          </p>
          <p className="mt-2">
            <strong>Your calculation:</strong> {formatNumber(mean, 2)} ± ({formatNumber(zScore, 3)} × {formatNumber(standardError, 4)})
          </p>
          <p className="mt-1">
            = {formatNumber(mean, 2)} ± {formatNumber(marginOfError, 4)}
          </p>
        </div>

        {sampleSize < 30 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-sm text-yellow-800">
              Sample size is less than 30. For better accuracy with small samples, consider using t-distribution instead of Z-distribution.
            </p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: ConfidenceIntervalCalculator,
  slug: "confidence-interval-calculator",
  title: "Confidence Interval Calculator",
  shortTitle: "Confidence Interval",
  description: "Calculate confidence intervals for population means with margin of error calculations",
  category: "math",
  icon: "📈",
  keywords: ["confidence interval", "margin of error", "statistics", "standard error", "hypothesis testing", "confidence level"],
  popular: false,
  dateModified: "2026-04-10"
});
