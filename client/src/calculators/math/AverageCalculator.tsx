import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function AverageCalculator() {
  const [inputText, setInputText] = useState("2, 4, 6, 8, 10");

  // Parse comma-separated input
  let numbers: number[] = [];
  let parseError = false;

  try {
    numbers = inputText
      .split(",")
      .map((s) => {
        const num = parseFloat(s.trim());
        if (isNaN(num)) {
          throw new Error("Invalid number");
        }
        return num;
      })
      .filter((n) => !isNaN(n));

    if (numbers.length === 0) {
      parseError = true;
    }
  } catch {
    parseError = true;
  }

  let mean = 0;
  let median = 0;
  let mode = "N/A";
  let range = 0;
  let sum = 0;

  if (!parseError && numbers.length > 0) {
    // Mean
    sum = numbers.reduce((a, b) => a + b, 0);
    mean = sum / numbers.length;

    // Median
    const sorted = [...numbers].sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
      median = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    } else {
      median = sorted[Math.floor(sorted.length / 2)];
    }

    // Mode (most frequent value)
    const frequency: { [key: number]: number } = {};
    for (const num of numbers) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency)
      .filter((k) => frequency[parseInt(k)] === maxFreq)
      .map((k) => parseFloat(k));
    mode = modes.length === numbers.length ? "No mode" : modes.join(", ");

    // Range
    range = Math.max(...numbers) - Math.min(...numbers);
  }

  // Chart data
  const chartData = numbers.map((num, index) => ({
    name: `Value ${index + 1}`,
    value: num,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {!parseError && numbers.length > 0 ? (
        <>
          <ResultCard
            label="Mean (Average)"
            value={formatNumber(mean)}
            highlight={true}
          />
          <ResultCard
            label="Median (Middle)"
            value={formatNumber(median)}
            highlight={true}
          />
          <ResultCard
            label="Mode (Most Frequent)"
            value={mode}
          />
          <ResultCard
            label="Range (Max - Min)"
            value={formatNumber(range)}
          />
          <ResultCard
            label="Sum"
            value={formatNumber(sum)}
          />
          <ResultCard
            label="Count"
            value={numbers.length.toString()}
          />
        </>
      ) : (
        <ResultCard
          label="Error"
          value="Please enter valid comma-separated numbers"
          highlight={true}
        />
      )}
    </div>
  );

  const chart = !parseError && numbers.length > 0 ? (
    <div className="w-full h-96 bg-white p-4 rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold mb-4">Value Distribution</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="Value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : undefined;

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Averages and Statistics</h3>
      <p>
        The <strong>mean</strong> (average) is the sum of all values divided by the count: mean = sum / count. Example: for 2, 4, 6, 8, 10, sum = 30, count = 5, mean = 6. The <strong>median</strong> is the middle value when sorted. For an even number of values, it{'\''}s the average of the two middle values. The <strong>mode</strong> is the most frequently occurring value. It{'\''}s useful when you want to know what appears most often, like the most common shoe size.
      </p>
      <p>
        The <strong>range</strong> is simply the difference between the largest and smallest values: range = max - min. It tells you how spread out your data is. For 2, 4, 6, 8, 10, the range is 10 - 2 = 8. These measures help summarize data: mean for typical value, median to avoid outlier effects, mode for most common, range for variability. In a normal distribution, mean = median = mode. When data is skewed, median often better represents the center than mean because outliers affect the mean more.
      </p>
      <p>
        These statistics are fundamental in data analysis, research, and decision-making. When analyzing test scores, salaries, measurements, or any dataset, these four numbers provide crucial insight into the data{'\''}s characteristics and center. In finance, mean is used for expected returns, median for typical house prices, and range for volatility. Understanding these helps interpret real-world data responsibly.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Average Calculator"
      description="Calculate mean, median, mode, range, and sum of numbers"
      slug="average-calculator"
      results={results}
      chart={chart}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Numbers (comma-separated)
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="2, 4, 6, 8, 10"
          />
        </div>
        <div className="text-sm text-gray-600">
          {!parseError && numbers.length > 0 && (
            <p>Parsed {numbers.length} numbers: {numbers.join(", ")}</p>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
