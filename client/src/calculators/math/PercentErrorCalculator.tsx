import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PercentErrorCalculator() {
  const [experimentalValue, setExperimentalValue] = useState(9.8);
  const [theoreticalValue, setTheoreticalValue] = useState(10);

  let absoluteError = 0;
  let relativeError = 0;
  let percentError = 0;
  let chartData = [];

  if (theoreticalValue !== 0) {
    absoluteError = Math.abs(experimentalValue - theoreticalValue);
    relativeError = absoluteError / Math.abs(theoreticalValue);
    percentError = relativeError * 100;
  }

  chartData = [
    { name: "Experimental", value: Math.abs(experimentalValue), fill: "#3b82f6" },
    { name: "Theoretical", value: Math.abs(theoreticalValue), fill: "#10b981" },
    { name: "Error", value: absoluteError, fill: "#ef4444" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Absolute Error" value={formatNumber(absoluteError, 4)} highlight />
      <ResultCard label="Relative Error" value={formatNumber(relativeError, 4)} />
      <ResultCard label="Percent Error (%)" value={formatNumber(percentError, 2)} highlight />
      <ResultCard
        label="Formula"
        value="|exp - theo| / |theo| × 100"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Error Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number, 4)} />
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
        Percent error is a way to measure how far an experimental result is from the theoretical or expected value. It's commonly used in science, engineering, and laboratory settings to evaluate the accuracy of measurements and calculations. A lower percent error indicates a measurement closer to the true value.
      </p>

      <p>
        <strong>Understanding Absolute Error:</strong> The absolute error is the difference between the experimental and theoretical values without regard to direction. For example, if you measure a string as 9.8 cm when it's actually 10 cm, the absolute error is 0.2 cm. This tells you the magnitude of the difference but not whether you over- or under-measured.
      </p>

      <p>
        <strong>Relative Error Concept:</strong> The relative error puts the absolute error into perspective by comparing it to the theoretical value. A 0.2 cm error on a 10 cm measurement (relative error of 0.02) is more significant than a 0.2 cm error on a 100 cm measurement (relative error of 0.002). Relative error is unit-independent and useful for comparing accuracy across different scales.
      </p>

      <p>
        <strong>Percent Error Formula:</strong> Percent error is calculated as (|experimental - theoretical| / |theoretical|) × 100. This expresses the relative error as a percentage, making it intuitive to understand. A 5% error means you were off by 5 out of every 100 units. Percent error is always positive (due to absolute value) and is essential in quality control, calibration, and scientific research.
      </p>

      <p>
        <strong>Applications in Real Life:</strong> Scientists use percent error to validate experimental methods, engineers use it to check manufacturing precision, and lab technicians use it to verify instrument calibration. Understanding this concept helps you evaluate the reliability of measurements and identify whether systematic errors (consistent bias) or random errors (unpredictable variation) are affecting your results.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Percent Error Calculator"
      description="Calculate absolute error, relative error, and percent error from experimental and theoretical values"
      slug="percent-error-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="experimental-value"
          label="Experimental Value"
          value={experimentalValue}
          onChange={setExperimentalValue}
          step={0.01}
          placeholder="9.8"
        />
        <InputField
          id="theoretical-value"
          label="Theoretical Value"
          value={theoreticalValue}
          onChange={setTheoreticalValue}
          step={0.01}
          placeholder="10"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PercentErrorCalculator,
  slug: "percent-error-calculator",
  title: "Percent Error Calculator",
  shortTitle: "Percent Error",
  description: "Calculate percent error between experimental and theoretical values",
  category: "math",
  icon: "🎯",
  keywords: ["percent error", "error calculation", "experimental error", "accuracy", "precision"],
  popular: true,
  faqs: [
    {
      question: "What is the difference between percent error and percent difference?",
      answer: "Percent error compares an experimental value to a known theoretical value. Percent difference compares two measurements when neither is definitely correct. Percent error assumes one value is the standard."
    },
    {
      question: "Why do we use absolute value in the percent error formula?",
      answer: "The absolute value ensures percent error is always positive. Whether you over- or under-measured, the magnitude of error is what matters. This makes it easy to compare accuracy across different measurements."
    },
    {
      question: "What is a good percent error?",
      answer: "In most lab settings, percent error under 5% is excellent, 5-10% is good, and 10-20% is acceptable. The threshold depends on the field: pharmaceutical manufacturing requires less than 1%, while some physical measurements accept 10-15%."
    },
    {
      question: "Can percent error be zero?",
      answer: "Yes, percent error is zero only when the experimental value exactly equals the theoretical value, which is rare in practice. Even precise instruments have some measurement error."
    },
    {
      question: "How do I reduce percent error?",
      answer: "Improve your measuring technique, use more precise instruments, minimize environmental interference, and take multiple measurements to average out random errors. Identifying and correcting systematic errors is also crucial."
    }
  ],
  dateModified: "2026-04-10",
});
