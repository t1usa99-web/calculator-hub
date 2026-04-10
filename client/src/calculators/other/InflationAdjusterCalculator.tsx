import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function InflationAdjusterCalculator() {
  const [originalAmount, setOriginalAmount] = useState(100);
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2026);
  const [inflationRate, setInflationRate] = useState(3);

  const years = endYear - startYear;
  const adjustedValue = originalAmount * Math.pow(1 + inflationRate / 100, years);
  const inflationAmount = adjustedValue - originalAmount;
  const purchasingPowerChange = ((originalAmount - adjustedValue) / originalAmount) * 100;

  // Chart data: value over time
  const chartData = [];
  for (let i = 0; i <= years; i++) {
    const value = originalAmount * Math.pow(1 + inflationRate / 100, i);
    chartData.push({
      year: startYear + i,
      value,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Original Amount"
        value={formatCurrency(originalAmount)}
      />
      <ResultCard
        label="Adjusted Amount"
        value={formatCurrency(adjustedValue)}
        highlight
      />
      <ResultCard
        label="Inflation Total"
        value={formatCurrency(inflationAmount)}
        highlight
      />
      <ResultCard
        label="Time Period"
        value={`${years} years`}
      />
      <ResultCard
        label="Annual Inflation Rate"
        value={formatPercent(inflationRate)}
      />
      <ResultCard
        label="Purchasing Power Change"
        value={`${formatNumber(purchasingPowerChange, 1)}%`}
        highlight
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Value Growth Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" name="Value" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Inflation is the sustained increase in the general price level of goods and services over time. It reduces the purchasing power of money; a dollar today buys less than a dollar did a year ago if inflation occurs. Central banks like the Federal Reserve aim for moderate inflation (typically 2-3% annually) as a sign of a healthy economy. However, high inflation (5%+) erodes savings and retirement accounts. This calculator adjusts amounts for inflation, showing how much money would be needed in the future to equal the purchasing power of a current amount. Understanding inflation helps with financial planning, comparing historical prices, and assessing real returns on investments.
      </p>

      <p>
        <strong>How Inflation Affects Purchasing Power:</strong> If inflation is 3% per year, $100 today will need to become $109 in 3 years to have the same purchasing power. Conversely, $100 three years ago had the purchasing power of about $109 today. Example: a $20 item in 2000 would cost about $35-40 in 2024 due to cumulative inflation. Inflation rates vary by time period and country. The U.S. average inflation from 2000-2024 is about 2.5% annually, but recent years (2021-2023) saw much higher inflation (7-9%). Savings accounts earning less than inflation rate actually lose purchasing power over time.
      </p>

      <p>
        <strong>Nominal vs. Real Values:</strong> Nominal value is the face value (what you see on the price tag). Real value is adjusted for inflation (purchasing power). A salary increase of 2% in a year with 3% inflation is actually a real decrease of 1% in purchasing power. Investment returns of 5% in a year with 3% inflation represent a real return of about 2%. When comparing values from different time periods, always adjust for inflation to make meaningful comparisons. Financial planning should account for expected inflation to ensure purchasing power of savings and retirement accounts.
      </p>

      <p>
        <strong>Historical Inflation Rates and Examples:</strong> Average U.S. inflation (2015-2023) is about 2.5-3% annually, but recent years are higher (2022-2023: 7-9%). The 1970s saw double-digit inflation (10%+), devastating to savings. The 2008-2009 financial crisis saw very low inflation and deflation. Using 3% as a long-term average is reasonable for planning. A $100,000 salary today would need to be about $126,000 in 10 years at 3% annual inflation. A $300,000 house today would need to cost about $403,000 in 10 years at 3% inflation (not accounting for supply/demand factors). Actual home price growth often exceeds inflation, while some goods cost less due to productivity improvements.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Inflation Adjuster Calculator"
      description="Adjust monetary values for inflation over time"
      slug="inflation-adjuster-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="original-amount"
          label="Original Amount"
          value={originalAmount}
          onChange={setOriginalAmount}
          prefix="$"
          step={0.01}
          min={0}
        />

        <InputField
          id="start-year"
          label="Start Year"
          value={startYear}
          onChange={setStartYear}
          step={1}
          min={1900}
          max={2100}
        />

        <InputField
          id="end-year"
          label="End Year"
          value={endYear}
          onChange={setEndYear}
          step={1}
          min={1900}
          max={2100}
          hint={`Period: ${years} years`}
        />

        <InputField
          id="inflation-rate"
          label="Annual Inflation Rate"
          value={inflationRate}
          onChange={setInflationRate}
          suffix="%"
          step={0.1}
          min={-10}
          max={20}
          hint="U.S. long-term average: ~3% annually"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InflationAdjusterCalculator,
  slug: "inflation-adjuster-calculator",
  title: "Inflation Adjuster Calculator",
  shortTitle: "Inflation",
  description: "Calculate inflation-adjusted values to compare purchasing power across time",
  category: "other",
  icon: "📈",
  keywords: ["inflation calculator", "purchasing power", "inflation adjustment", "real value", "nominal value"],
  popular: false,
  faqs: [
    {
      question: "What is inflation and why does it matter?",
      answer: "Inflation is the rate at which the general price level of goods and services increases over time. It matters because it reduces purchasing power; money is worth less as prices rise. Example: if inflation is 3%, something costing $100 today will cost $103 next year. Your salary, savings, and investments are all affected by inflation. Moderate inflation (2-3%) is considered healthy for an economy. High inflation (5%+) damages savings and retirement accounts. Understanding inflation helps you plan financially and compare values from different time periods.",
    },
    {
      question: "How do I calculate the effect of inflation?",
      answer: "Use the formula: Future Value = Present Value × (1 + inflation rate)^years. Example: $100 with 3% inflation for 5 years = $100 × (1.03)^5 = $115.93. This means $100 today will have the purchasing power of about $116 in 5 years if inflation continues at 3%. Conversely, $100 five years ago would have the purchasing power of about $86 today. Higher inflation rates or longer time periods increase the effect. Savings accounts earning less than the inflation rate actually lose purchasing power over time. This is why savers look for investments exceeding inflation rates.",
    },
    {
      question: "What is the difference between nominal and real value?",
      answer: "Nominal value is the face value at a specific time (what you see on price tags and paychecks). Real value is adjusted for inflation (purchasing power). Example: a $50,000 salary is nominal. If inflation is 3% and your salary doesn't increase, your real value decreases because you can buy less with the same money. A 2% salary raise in a 3% inflation year is actually a real decrease of 1%. Real returns on investments are the return minus inflation. A 5% investment return in a 3% inflation year has a real return of about 2%. Always consider real value when making long-term financial plans.",
    },
    {
      question: "How does inflation affect savings and retirement accounts?",
      answer: "Inflation erodes the purchasing power of savings. A savings account earning 1% interest in a year with 3% inflation has a real loss of 2%. Over 30-year retirement, significant inflation reduces your savings' purchasing power substantially. Example: $500,000 in retirement savings with an average 2.5% inflation over 30 years has the purchasing power of about $197,000 in today's dollars. To maintain purchasing power, investments should earn at least the inflation rate. Conservative savers should seek returns of 4-5% to exceed typical inflation and build real wealth. This is why savers shift to stocks or bonds for better returns during low interest rate environments.",
    },
    {
      question: "What are typical inflation rates?",
      answer: "U.S. inflation averages about 2-3% annually over long periods. Recent history: 2000-2019 averaged 2.2% annually, 2020 was 1.2%, 2021 was 7%, 2022 was 8%, 2023 was 4%. The 1970s saw double-digit inflation (10%+). The 2008 financial crisis saw near-zero inflation and deflation. For planning purposes, assuming 3% annual inflation is reasonable. Other countries have different rates: some developed nations average 2-3%, while emerging markets may see higher inflation. Central banks target specific inflation rates (U.S. Fed targets 2%). Actual results vary, especially during economic crises or supply shocks.",
    },
  ],
  dateModified: "2026-04-10",
});
