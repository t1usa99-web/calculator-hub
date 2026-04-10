import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function CAGRCalculator() {
  const [beginningValue, setBeginningValue] = useState(10000);
  const [endingValue, setEndingValue] = useState(25000);
  const [years, setYears] = useState(10);

  // CAGR formula: (ending/beginning)^(1/years) - 1
  const cagr = years > 0 ? Math.pow(endingValue / beginningValue, 1 / years) - 1 : 0;
  const totalReturn = ((endingValue - beginningValue) / beginningValue) * 100;
  const annualizedReturn = cagr * 100;

  // Generate year-by-year growth curve
  const growthData = [];
  for (let year = 0; year <= years; year++) {
    const value = beginningValue * Math.pow(1 + cagr, year);
    growthData.push({
      year,
      value,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="CAGR"
        value={formatNumber(annualizedReturn, 2) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Total Return"
        value={formatNumber(totalReturn, 2) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Beginning Value"
        value={formatCurrency(beginningValue)}
      />
      <ResultCard
        label="Ending Value"
        value={formatCurrency(endingValue)}
      />
      <ResultCard
        label="Period"
        value={`${years} ${years === 1 ? "year" : "years"}`}
      />
      <ResultCard
        label="Total Gain"
        value={formatCurrency(endingValue - beginningValue)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Investment Growth at {formatNumber(annualizedReturn, 2)}% CAGR
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={growthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{ value: "Year", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis
            label={{ value: "Value ($)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            name="Portfolio Value"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Compound Annual Growth Rate (CAGR)
      </h3>
      <p>
        CAGR is a metric that measures the average annual growth rate of an investment over a specified period. It smooths out volatility and represents what an investment would have grown at if it had grown at a constant rate each year. CAGR is particularly useful for comparing the performance of different investments over the same time period, regardless of how much the value fluctuated year-to-year. The formula is: CAGR = (Ending Value / Beginning Value)^(1/Number of Years) {'-'} 1.
      </p>
      <p>
        <strong>Why CAGR Matters:</strong> CAGR provides a clearer picture of investment performance than simple annualized returns because it accounts for the compounding effect of gains. For example, if a stock investment grew from $10,000 to $25,000 over 10 years, the simple total return is 150%, but the CAGR is approximately 9.6% per year. This tells you that if the investment had grown steadily at 9.6% annually, you would have reached the same endpoint. CAGR is preferred by investors and analysts because it isolates the consistent yearly growth rate.
      </p>
      <p>
        <strong>CAGR vs. Average Annual Return:</strong> CAGR differs from average annual return. Average annual return adds up yearly returns and divides by the number of years, which can be misleading with volatile investments. CAGR focuses on the actual beginning and ending values, making it immune to volatility. For instance, an investment that gains 50% one year and loses 10% the next has a simple average return of 20%, but the actual CAGR from start to end depends on the dollar amounts, not just the percentages. This makes CAGR superior for investment comparison.
      </p>
      <p>
        <strong>Real-World Applications:</strong> CAGR is used across finance for multiple purposes. Stock market analysts use it to report index performance over decades (the S{'{'}'{'}'}P 500's CAGR is typically 10% annually over long periods). Mutual fund companies use CAGR to advertise fund returns over 1, 5, 10, and 20-year periods. Business analysts use CAGR to measure company revenue or profit growth. Investors use it to evaluate portfolio performance and set return expectations. A 9% CAGR over 30 years turns $100,000 into roughly $1.3 million, demonstrating the power of compound growth over long periods.
      </p>
      <p>
        <strong>Limitations and Best Practices:</strong> CAGR has limitations: it doesn't account for risk or volatility (two investments with the same CAGR can have very different volatility profiles), it ignores the timing of cash flows, and it assumes consistent growth which rarely happens in reality. To use CAGR effectively: (1) compare investments with similar risk profiles, (2) use CAGR alongside other metrics like standard deviation to understand volatility, (3) consider the time period (shorter periods can be skewed by market timing), and (4) remember that past CAGR doesn't guarantee future returns. Always evaluate investments holistically.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="CAGR Calculator"
      description="Calculate compound annual growth rate and investment growth curves"
      slug="cagr-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="beginning-value"
          label="Beginning Value"
          value={beginningValue}
          onChange={setBeginningValue}
          prefix="$"
          min={1}
          step={1000}
        />

        <InputField
          id="ending-value"
          label="Ending Value"
          value={endingValue}
          onChange={setEndingValue}
          prefix="$"
          min={1}
          step={1000}
        />

        <InputField
          id="years"
          label="Number of Years"
          value={years}
          onChange={setYears}
          suffix="years"
          min={0.1}
          max={100}
          step={0.5}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CAGRCalculator,
  slug: "cagr-calculator",
  title: "CAGR Calculator",
  shortTitle: "CAGR",
  description:
    "Calculate compound annual growth rate and visualize investment growth over time",
  category: "finance",
  icon: "📈",
  keywords: [
    "CAGR",
    "compound annual growth rate",
    "investment return",
    "growth rate",
    "investment performance",
  ],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is CAGR?",
      answer:
        "CAGR (Compound Annual Growth Rate) is the average annual growth rate of an investment over a specified period, smoothing out volatility. The formula is: CAGR = (Ending Value / Beginning Value)^(1/Years) - 1.",
    },
    {
      question: "How is CAGR different from average annual return?",
      answer:
        "CAGR focuses on actual beginning and ending values using compounding logic, while average annual return adds yearly percentages and divides. CAGR is preferred because it accurately reflects consistent yearly growth regardless of volatility.",
    },
    {
      question: "Can CAGR be negative?",
      answer:
        "Yes, CAGR can be negative if your ending value is less than your beginning value. A negative CAGR indicates the investment declined on average each year over the period.",
    },
    {
      question: "What is a good CAGR?",
      answer:
        "A good CAGR depends on the asset type and time period. Stocks historically average 10% CAGR over long periods, bonds average 4-5%, and real estate averages 5-8%. Compare CAGR to benchmarks like the S&P 500 for context.",
    },
    {
      question: "Does CAGR account for risk?",
      answer:
        "No, CAGR does not measure volatility or risk. Two investments with identical CAGR can have very different risk profiles. Always evaluate CAGR alongside risk metrics like standard deviation and compare investments with similar risk levels.",
    },
  ],
});
