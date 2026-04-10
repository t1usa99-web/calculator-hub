import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SampleSizeCalculator() {
  const [confidenceLevel, setConfidenceLevel] = useState("95");
  const [marginOfError, setMarginOfError] = useState(5);
  const [populationProportion, setPopulationProportion] = useState(0.5);
  const [populationSize, setPopulationSize] = useState(0);

  // Z-scores for confidence levels
  const zScores: { [key: string]: number } = {
    "90": 1.645,
    "95": 1.96,
    "99": 2.576,
  };

  const z = zScores[confidenceLevel] || 1.96;
  const p = populationProportion;
  const e = marginOfError / 100;

  // Sample size formula: n = (Z² × p × (1-p)) / e²
  let sampleSize = Math.ceil((Math.pow(z, 2) * p * (1 - p)) / Math.pow(e, 2));

  // For finite population correction (if population size is specified)
  if (populationSize > 0) {
    // Adjusted formula: n = n₀ / (1 + (n₀ - 1) / N)
    const adjustedSampleSize = Math.ceil(sampleSize / (1 + (sampleSize - 1) / populationSize));
    sampleSize = Math.min(adjustedSampleSize, populationSize);
  }

  const chartData = [
    { name: "Sample Size", value: sampleSize, fill: "#3b82f6" },
    { name: "Population (if N=" + (populationSize > 0 ? populationSize : "∞") + ")", value: populationSize > 0 ? populationSize - sampleSize : 0, fill: "#e5e7eb" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Required Sample Size"
        value={formatNumber(sampleSize)}
        highlight
      />
      <ResultCard
        label="Confidence Level"
        value={confidenceLevel + "%"}
      />
      <ResultCard
        label="Margin of Error"
        value={marginOfError + "%"}
      />
      <ResultCard
        label="Population Proportion (p)"
        value={formatNumber(p, 2)}
      />
      <ResultCard
        label="Z-Score"
        value={formatNumber(z, 3)}
      />
      <ResultCard
        label="Formula"
        value="n = (Z² × p × (1-p)) / e²"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Sample Size Visualization</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
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
        Sample size is the number of observations or respondents you need to collect to make statistically valid conclusions about a population. Determining the right sample size is crucial in research, surveys, and quality control. Too small a sample may not represent the population accurately, while an unnecessarily large sample wastes resources.
      </p>

      <p>
        <strong>Understanding Confidence Level:</strong> The confidence level indicates how certain you are that the true population parameter falls within your margin of error. A 95% confidence level means if you repeated your study 100 times, approximately 95 of those studies would capture the true population value. Common confidence levels are 90% (Z=1.645), 95% (Z=1.96), and 99% (Z=2.576). Higher confidence requires larger sample sizes.
      </p>

      <p>
        <strong>Margin of Error Explained:</strong> The margin of error is the acceptable range of error around your sample result. For example, a 5% margin of error means your result could be 5 percentage points higher or lower than the true value. Smaller margins of error require larger sample sizes. If you want more precision, you need more data.
      </p>

      <p>
        <strong>Population Proportion (p):</strong> This represents the expected prevalence of the characteristic you{'\''}re studying. Use 0.5 when you don{'\''}t know the proportion, as it requires the largest sample size. If you expect 30% of people to prefer option A, use 0.3. The further the proportion is from 0.5, the smaller the required sample size.
      </p>

      <p>
        <strong>Sample Size Formula:</strong> The formula is n = (Z² × p × (1-p)) / e², where Z is the critical value, p is the population proportion, and e is the margin of error (as a decimal). For finite populations, an adjustment factor applies. Use this calculator to ensure your study has adequate statistical power and to plan research budgets efficiently.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Sample Size Calculator"
      description="Calculate the required sample size for your research study"
      slug="sample-size-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="confidence-level"
          label="Confidence Level"
          value={confidenceLevel}
          onChange={setConfidenceLevel}
          options={[
            { value: "90", label: "90% Confidence" },
            { value: "95", label: "95% Confidence (recommended)" },
            { value: "99", label: "99% Confidence" },
          ]}
        />
        <InputField
          id="margin-of-error"
          label="Margin of Error (%)"
          value={marginOfError}
          onChange={setMarginOfError}
          step={0.5}
          min={0.1}
          max={50}
          suffix="%"
        />
        <InputField
          id="population-proportion"
          label="Population Proportion (0-1, use 0.5 if unknown)"
          value={populationProportion}
          onChange={setPopulationProportion}
          step={0.01}
          min={0}
          max={1}
        />
        <InputField
          id="population-size"
          label="Population Size (optional, leave 0 for infinite)"
          value={populationSize}
          onChange={setPopulationSize}
          step={100}
          min={0}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SampleSizeCalculator,
  slug: "sample-size-calculator",
  title: "Sample Size Calculator",
  shortTitle: "Sample Size",
  description: "Calculate required sample size for research studies and surveys",
  category: "math",
  icon: "📊",
  keywords: ["sample size", "statistics", "survey", "confidence level", "margin of error", "research"],
  popular: true,
  faqs: [
    {
      question: "What is the relationship between confidence level and sample size?",
      answer: "Higher confidence levels require larger sample sizes. To be 99% confident instead of 95%, you need a larger sample. This is because you{'\''}re asking to be more certain about your results."
    },
    {
      question: "Should I use 0.5 as the population proportion?",
      answer: "Yes, use 0.5 when you don{'\''}t know the expected proportion. This gives the most conservative (largest) sample size. If you have prior information that the proportion is around 30%, using 0.3 will require a smaller sample."
    },
    {
      question: "What if I can{'\''}t reach the recommended sample size?",
      answer: "If budget or time constraints prevent reaching the calculated sample size, your results will have wider confidence intervals and lower precision. Be transparent about this limitation and interpret results cautiously. Consider if a smaller margin of error or lower confidence level is acceptable."
    },
    {
      question: "When do I include population size?",
      answer: "Include population size only when it{'\''}s small relative to your sample size (usually under 10,000). For large populations (over 100,000), the correction has minimal effect. This correction accounts for sampling without replacement."
    },
    {
      question: "Why does 5% margin of error need more samples than 10%?",
      answer: "A smaller margin of error means you want greater precision. To be more precise, you need more data points. The relationship is inverse and non-linear: cutting margin of error in half requires 4 times as many samples."
    }
  ],
  dateModified: "2026-04-10",
});
