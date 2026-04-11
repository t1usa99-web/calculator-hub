import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

// Normal distribution approximation (CDF)
function normalCDF(z: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = z < 0 ? -1 : 1;
  z = Math.abs(z) / Math.sqrt(2);

  const t = 1.0 / (1.0 + p * z);
  const y = 1.0 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-z * z);

  return 0.5 * (1.0 + sign * y);
}

export default function PValueCalculator() {
  const [testStatistic, setTestStatistic] = useState(1.96);
  const [testType, setTestType] = useState("two-tail");

  const z = testStatistic;
  let pValue = 0;

  if (testType === "one-tail-left") {
    pValue = normalCDF(z);
  } else if (testType === "one-tail-right") {
    pValue = 1 - normalCDF(z);
  } else {
    // Two-tailed
    pValue = 2 * (1 - normalCDF(Math.abs(z)));
  }

  const sig001 = pValue < 0.01 ? "Yes" : "No";
  const sig005 = pValue < 0.05 ? "Yes" : "No";
  const sig010 = pValue < 0.10 ? "Yes" : "No";

  const chartData = [
    { name: "p-value", value: pValue * 100, fill: "#3b82f6" },
    { name: "1 - p", value: (1 - pValue) * 100, fill: "#e5e7eb" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="P-value"
        value={formatNumber(pValue, 6)}
        highlight
      />
      <ResultCard
        label="Test Type"
        value={testType === "one-tail-left" ? "One-tail (left)" : testType === "one-tail-right" ? "One-tail (right)" : "Two-tail"}
      />
      <ResultCard
        label="Significant at α=0.01?"
        value={sig001}
        highlight={sig001 === "Yes"}
      />
      <ResultCard
        label="Significant at α=0.05?"
        value={sig005}
        highlight={sig005 === "Yes"}
      />
      <ResultCard
        label="Significant at α=0.10?"
        value={sig010}
      />
      <ResultCard
        label="Interpretation"
        value={pValue < 0.001 ? "Highly significant" : pValue < 0.05 ? "Significant" : "Not significant"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">P-value vs Confidence</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2) + "%"} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
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
        The p-value is a fundamental concept in statistics used to determine the statistical significance of your test results. It represents the probability of obtaining results as extreme as or more extreme than what you observed, assuming the null hypothesis is true. A smaller p-value suggests stronger evidence against the null hypothesis.
      </p>

      <p>
        <strong>Understanding P-values:</strong> A p-value of 0.05 means there{'\''}s a 5% chance of observing your results if the null hypothesis is true. This doesn{'\''}t mean there{'\''}s a 5% chance the null hypothesis is true. P-values range from 0 to 1. Smaller values indicate stronger evidence against the null hypothesis. The p-value threshold for significance, called alpha (α), is typically 0.05, though 0.01 and 0.10 are also common.
      </p>

      <p>
        <strong>One-tailed vs Two-tailed Tests:</strong> A two-tailed test checks if the effect exists in either direction (different from), while one-tailed tests check for direction-specific effects (greater than or less than). Two-tailed tests are more conservative and split the significance level across both tails. Use two-tailed when you have no prior expectation about direction, and one-tailed when you predict a specific direction.
      </p>

      <p>
        <strong>Interpreting Results:</strong> If p {'<'} 0.05, reject the null hypothesis (statistically significant). If p ≥ 0.05, fail to reject the null hypothesis (not significant). This doesn{'\''}t prove the null hypothesis is true; it just means you lack sufficient evidence to reject it. Statistical significance doesn{'\''}t always mean practical significance—a large study might find significant results that are trivial in real-world impact.
      </p>

      <p>
        <strong>Common Significance Levels:</strong> α = 0.01 (highly significant, 1% error rate), α = 0.05 (standard in most fields), α = 0.10 (exploratory research). Different fields use different thresholds. Medical research often uses 0.01 for safety, while social sciences commonly use 0.05. Always choose your significance level before conducting the test to avoid p-hacking.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="P-Value Calculator"
      description="Calculate p-values from test statistics using normal distribution"
      slug="p-value-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="test-statistic"
          label="Test Statistic (z-score or t-score)"
          value={testStatistic}
          onChange={setTestStatistic}
          step={0.01}
          placeholder="1.96"
        />
        <SelectField
          id="test-type"
          label="Test Type"
          value={testType}
          onChange={setTestType}
          options={[
            { value: "two-tail", label: "Two-tailed (≠)" },
            { value: "one-tail-right", label: "One-tailed Right (>)" },
            { value: "one-tail-left", label: "One-tailed Left (<)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
