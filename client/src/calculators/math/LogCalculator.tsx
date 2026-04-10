import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function LogCalculator() {
  const [number, setNumber] = useState(100);
  const [base, setBase] = useState(10);
  const [mode, setMode] = useState("custom");

  let result = 0;
  const isValidInput = number > 0;

  if (isValidInput) {
    if (mode === "custom") {
      result = Math.log(number) / Math.log(base);
    } else if (mode === "log") {
      result = Math.log10(number);
    } else if (mode === "ln") {
      result = Math.log(number);
    } else if (mode === "log2") {
      result = Math.log2(number);
    }
  }

  const log10Value = Math.log10(number);
  const ln = Math.log(number);
  const log2Value = Math.log2(number);

  // Generate logarithmic curve
  const chartData = [];
  for (let x = 0.1; x <= 100; x += 1) {
    chartData.push({
      x: parseFloat(x.toFixed(2)),
      y: parseFloat(Math.log10(x).toFixed(4)),
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isValidInput ? (
        <>
          <ResultCard
            label={mode === "custom" ? `Log${base}` : mode === "log" ? "Log10" : mode === "ln" ? "Natural Log (ln)" : "Log2"}
            value={formatNumber(result)}
            highlight={true}
          />
          <ResultCard
            label="Log10"
            value={formatNumber(log10Value)}
          />
          <ResultCard
            label="Natural Log (ln)"
            value={formatNumber(ln)}
          />
          <ResultCard
            label="Log2"
            value={formatNumber(log2Value)}
          />
          {mode === "custom" && base !== 10 && (
            <ResultCard
              label={`Result as exponent: ${base}^${formatNumber(result)} = ${number}`}
              value="Verified"
            />
          )}
        </>
      ) : (
        <ResultCard
          label="Error"
          value="Number must be greater than 0"
          highlight={true}
        />
      )}
    </div>
  );

  const chart = (
    <div className="w-full h-96 bg-white p-4 rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold mb-4">Log10 Curve</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} name="log10(x)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Logarithms</h3>
      <p>
        A <strong>logarithm</strong> answers the question: {'\"'}To what power must I raise the base to get this number?{'\""'}. In equation form: if b^x = n, then log_b(n) = x. For example, 10^2 = 100, so log₁₀(100) = 2. The <strong>common logarithm</strong> (log or log₁₀) uses base 10 and is widely used in science. The <strong>natural logarithm</strong> (ln) uses base e ({String.fromCharCode(8776)} 2.718) and appears in calculus and physics.
      </p>
      <p>
        Logarithms have key properties that make complex calculations easier: <strong>log(a × b) = log(a) + log(b)</strong>, <strong>log(a / b) = log(a) - log(b)</strong>, and <strong>log(a^n) = n × log(a)</strong>. These rules transformed multiplication and division into addition and subtraction, which is why logarithm tables were essential before calculators. Logarithms appear everywhere: pH in chemistry (log-scale), decibels in sound, Richter scale in earthquakes, and in data analysis when working with exponential growth.
      </p>
      <p>
        The change of base formula allows you to calculate logs with any base: <strong>log_b(n) = log(n) / log(b)</strong>. This is crucial because most calculators only have log₁₀ and ln. Understanding logarithms is essential for solving exponential equations, analyzing data that spans many orders of magnitude, and understanding natural phenomena from bacterial growth to radioactive decay.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Logarithm Calculator"
      description="Calculate logarithms in any base, including log10, natural log, and log2"
      slug="log-calculator"
      results={results}
      chart={chart}
    >
      <div className="space-y-4">
        <InputField
          id="number"
          label="Number"
          value={number}
          onChange={setNumber}
          min={0.01}
          step={0.1}
        />

        <SelectField
          id="mode"
          label="Logarithm Type"
          value={mode}
          onChange={setMode}
          options={[
            { value: "log", label: "Log10 (common logarithm)" },
            { value: "ln", label: "Natural Log (base e)" },
            { value: "log2", label: "Log2 (binary logarithm)" },
            { value: "custom", label: "Custom Base" },
          ]}
        />

        {mode === "custom" && (
          <InputField
            id="base"
            label="Base"
            value={base}
            onChange={setBase}
            min={0.01}
            step={0.1}
          />
        )}

        {!isValidInput && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            Number must be greater than 0 for logarithm to be defined.
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: LogCalculator,
  slug: "log-calculator",
  title: "Logarithm Calculator",
  shortTitle: "Logarithm",
  description: "Calculate logarithms in any base: log10, natural log, log2, and custom bases",
  category: "math",
  icon: "🔢",
  keywords: ["logarithm", "log", "natural log", "log base", "exponent", "inverse"],
  popular: true,
  faqs: [
    {
      question: "What is a logarithm?",
      answer: "A logarithm answers: to what power must I raise the base to get this number? If b^x = n, then log_b(n) = x."
    },
    {
      question: "What are common logarithm types?",
      answer: "Log10 (common log, base 10) is used in science. ln (natural log, base e) appears in calculus. Log2 (binary) is used in computer science."
    },
    {
      question: "What is the change of base formula?",
      answer: "log_b(n) = log(n) / log(b). This lets you calculate any logarithm using log10 or ln."
    },
    {
      question: "Why can{'\''}t I take the log of zero or negative numbers?",
      answer: "Logarithms are only defined for positive numbers. No power of a positive base equals zero or a negative number."
    },
    {
      question: "What are logarithm properties?",
      answer: "Key properties: log(a×b) = log(a) + log(b), log(a/b) = log(a) - log(b), and log(a^n) = n × log(a)."
    }
  ],
  dateModified: "2026-04-10",
});
