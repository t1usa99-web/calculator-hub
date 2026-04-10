import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { INFLATION_FAQS } from "@/lib/faq-finance-invest";

export default function InflationCalculator() {
  const [amount, setAmount] = useState(100000);
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2024);
  const [useCustomRate, setUseCustomRate] = useState(false);
  const [customInflationRate, setCustomInflationRate] = useState(3.5);

  // Historical average inflation rates (2020-2024)
  const historicalRates: Record<number, number> = {
    2020: 0.0124,
    2021: 0.0470,
    2022: 0.0801,
    2023: 0.0417,
    2024: 0.0302,
  };

  // Calculate average inflation rate
  let totalInflationRate = 1;
  let years = endYear - startYear;
  let yearCount = 0;

  if (useCustomRate) {
    totalInflationRate = Math.pow(1 + customInflationRate / 100, years);
  } else {
    for (let year = startYear; year < endYear; year++) {
      const rate = historicalRates[year] || 0.03; // Default 3% if no data
      totalInflationRate *= 1 + rate;
      yearCount++;
    }
  }

  const equivalentValue = amount * totalInflationRate;
  const purchasingPowerChange = equivalentValue - amount;
  const percentChange = ((totalInflationRate - 1) * 100);
  const annualizedInflationRate = useCustomRate
    ? customInflationRate
    : ((Math.pow(totalInflationRate, 1 / years) - 1) * 100);

  // Generate chart data
  const chartData = [];
  let currentValue = amount;
  for (let i = 0; i <= years; i++) {
    if (useCustomRate) {
      currentValue = amount * Math.pow(1 + customInflationRate / 100, i);
    } else {
      currentValue = amount;
      for (let year = startYear; year < startYear + i; year++) {
        const rate = historicalRates[year] || 0.03;
        currentValue *= 1 + rate;
      }
    }
    chartData.push({
      year: startYear + i,
      value: Math.round(currentValue),
      purchasing_power: Math.round(amount),
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Original Amount"
        value={formatCurrency(amount)}
      />
      <ResultCard
        label="Equivalent Value Today"
        value={formatCurrency(equivalentValue)}
        highlight
      />
      <ResultCard
        label="Purchasing Power Loss"
        value={formatCurrency(purchasingPowerChange)}
        subtext={`${formatPercent(percentChange)} increase needed`}
      />
      <ResultCard
        label="Annualized Inflation"
        value={formatPercent(annualizedInflationRate)}
        subtext={`Over ${years} year${years !== 1 ? 's' : ''}`}
      />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Money Value Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Value ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} name="Money Needed" />
            <Line type="monotone" dataKey="purchasing_power" stroke="#3b82f6" strokeWidth={2} name="Original Amount" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Inflation is the general increase in prices for goods and services over time, which reduces the purchasing power of money. A dollar today buys less than a dollar did 10 years ago because prices have risen. Understanding inflation is crucial for financial planning, saving, and investing. Inflation is measured by the Consumer Price Index (CPI), which tracks prices of a basket of common goods and services. The Federal Reserve targets an inflation rate of 2% annually as healthy for the economy.
      </p>

      <p>
        <strong>Impact on Savings:</strong> If you keep money in a savings account earning 0.5% while inflation is 3%, you're actually losing purchasing power at 2.5% per year. This is why saving in low-interest accounts is risky for long-term goals. To maintain purchasing power, your investments must earn at least the inflation rate. This is why the traditional advice to invest in stocks is important—stocks historically return 7-10% annually, easily outpacing inflation. Bonds typically return 3-4%, barely keeping up with historical inflation.
      </p>

      <p>
        <strong>Inflation and Debt:</strong> Inflation is good for borrowers (like homeowners with mortgages) because they repay with dollars that are worth less than when they borrowed. It's bad for savers and people on fixed incomes. A 3% mortgage looks better when inflation is 3-4%. However, governments control inflation through Federal Reserve interest rate policy, and the relationship is complex. Recent years have shown that even with interest rate increases, inflation can remain stubborn.
      </p>

      <p>
        <strong>Protecting Against Inflation:</strong> Invest in assets that appreciate with inflation—stocks, real estate, and commodities. Treasury Inflation-Protected Securities (TIPS) bonds are specifically designed to maintain purchasing power. Consider increasing your income and negotiating raises that match or exceed inflation. Fixed-rate debt works in your favor during inflation. Diversify investments rather than holding cash. Plan for inflation in long-term financial goals—a 20-year retirement plan needs significantly more savings to account for inflation reducing purchasing power.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Inflation Calculator"
      description="Understand how inflation impacts purchasing power and plan accordingly"
      slug="inflation-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="amount"
          label="Amount"
          value={amount}
          onChange={setAmount}
          prefix="$"
          step={10000}
          min={0}
        />

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Time Period</h3>
          <InputField
            id="start-year"
            label="Start Year"
            value={startYear}
            onChange={setStartYear}
            step={1}
            min={2000}
            max={2024}
          />
          <InputField
            id="end-year"
            label="End Year"
            value={endYear}
            onChange={setEndYear}
            step={1}
            min={startYear + 1}
            max={2050}
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input
              type="checkbox"
              checked={useCustomRate}
              onChange={(e) => setUseCustomRate(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">Use Custom Inflation Rate</span>
          </label>

          {useCustomRate && (
            <div className="mt-3">
              <InputField
                id="inflation-rate"
                label="Annual Inflation Rate"
                value={customInflationRate}
                onChange={setCustomInflationRate}
                suffix="%"
                step={0.5}
                min={0}
                max={20}
              />
            </div>
          )}

          {!useCustomRate && (
            <div className="mt-3 text-xs text-gray-600 space-y-1 p-3 bg-blue-50 rounded">
              <p className="font-semibold">Historical Inflation Rates Used:</p>
              {Array.from({ length: endYear - startYear }).map((_, i) => {
                const year = startYear + i;
                const rate = historicalRates[year] || 0.03;
                return (
                  <p key={year}>
                    {year}: {formatPercent(rate * 100)}
                  </p>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
          <p className="font-semibold mb-2">Inflation Impact:</p>
          <p>You need {formatCurrency(equivalentValue)} to have the same purchasing power as {formatCurrency(amount)} had in {startYear}</p>
          <p className="text-xs mt-2">That's {formatPercent(percentChange)} more money needed</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InflationCalculator,
  faqs: INFLATION_FAQS,
  slug: "inflation-calculator",
  title: "Inflation Calculator",
  shortTitle: "Inflation",
  description: "Calculate purchasing power changes due to inflation over time",
  category: "finance",
  icon: "📉",
  keywords: ["inflation", "purchasing power", "CPI", "cost of living", "money value"],
});
