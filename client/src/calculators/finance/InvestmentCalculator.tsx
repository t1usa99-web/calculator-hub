import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { INVESTMENT_FAQS } from "@/lib/faq-content";

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [years, setYears] = useState(25);
  const [inflationRate, setInflationRate] = useState(2.5);

  const monthlyReturn = expectedReturn / 100 / 12;
  const totalMonths = years * 12;
  const monthlyInflation = inflationRate / 100 / 12;

  // Calculate future value
  let futureValue = initialInvestment;
  let totalContributions = initialInvestment;
  const chartData = [];

  for (let month = 1; month <= totalMonths; month++) {
    futureValue = futureValue * (1 + monthlyReturn) + monthlyContribution;
    totalContributions = initialInvestment + monthlyContribution * month;

    if (month % Math.max(1, Math.floor(totalMonths / 25)) === 0) {
      const year = Math.floor(month / 12);
      const investmentGain = futureValue - totalContributions;
      chartData.push({
        year,
        contributions: totalContributions,
        gains: investmentGain,
        total: futureValue,
      });
    }
  }

  // Ensure final year is included
  if (chartData[chartData.length - 1]?.year !== years) {
    const investmentGain = futureValue - totalContributions;
    chartData.push({
      year: years,
      contributions: totalContributions,
      gains: investmentGain,
      total: futureValue,
    });
  }

  // Calculate inflation-adjusted value
  let inflationAdjustedValue = futureValue;
  for (let month = 1; month <= totalMonths; month++) {
    inflationAdjustedValue = inflationAdjustedValue / (1 + monthlyInflation);
  }

  const totalInvestmentGain = futureValue - totalContributions;
  const realGain = inflationAdjustedValue - initialInvestment;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Future Value" value={formatCurrency(futureValue)} highlight />
      <ResultCard
        label="Inflation-Adjusted Value"
        value={formatCurrency(inflationAdjustedValue)}
        subtext="In today's dollars"
      />
      <ResultCard label="Total Contributions" value={formatCurrency(totalContributions)} />
      <ResultCard label="Investment Gains" value={formatCurrency(totalInvestmentGain)} highlight />
      <ResultCard
        label="Return on Investment"
        value={formatPercent((totalInvestmentGain / totalContributions) * 100, 1)}
      />
      <ResultCard
        label="Real Gain (Inflation-Adjusted)"
        value={formatCurrency(realGain)}
        subtext={`${formatPercent((realGain / initialInvestment) * 100, 1)} real return`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Year-by-Year Investment Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Value ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="contributions" stackId="a" fill="#3b82f6" name="Contributions" />
          <Bar dataKey="gains" stackId="a" fill="#10b981" name="Investment Gains" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Investing is the process of deploying money with the expectation that it will grow over time through returns such as interest, dividends, or capital appreciation. Unlike saving (which focuses on safety), investing accepts some risk in exchange for the potential of higher returns. The stock market, bonds, real estate, and mutual funds are common investment vehicles. Time is one of your biggest advantages as an investor—the longer your money has to compound, the more forgiving market downturns become and the greater your potential returns.
      </p>

      <p>
        <strong>Diversification:</strong> "Don't put all your eggs in one basket" is the principle behind diversification. By spreading your investments across different asset classes (stocks, bonds, real estate), sectors (technology, healthcare, energy), and geographies, you reduce the risk that any single investment loss significantly impacts your portfolio. A well-diversified portfolio typically includes stocks for growth, bonds for stability, and other assets based on your time horizon and risk tolerance. Diversification doesn't guarantee profits but helps smooth out the bumpy ride of investing.
      </p>

      <p>
        <strong>Impact of Inflation:</strong> Inflation erodes the purchasing power of your money over time. If inflation is 2.5% annually and your investments return 5%, your real return is only about 2.5%. This calculator accounts for inflation to show you the actual buying power of your future wealth. It's one reason why investing in assets that historically outpace inflation (like stocks, which average 10% long-term returns) is important for long-term wealth building. Keeping money in a savings account earning near 0% is actually a losing proposition after accounting for inflation.
      </p>

      <p>
        <strong>Consistent Contributions:</strong> Making regular monthly contributions (dollar-cost averaging) is a powerful strategy that reduces the impact of market volatility. By investing the same amount regularly, you buy more shares when prices are low and fewer when prices are high, naturally averaging your cost over time. This removes emotion from investing and ensures you're always contributing toward your goals. Even modest monthly contributions of $500-$1,000 can grow into significant wealth over 20+ years through the combination of compound interest and consistent savings.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Investment Calculator"
      description="Project investment growth with contributions, returns, and inflation adjustment"
      slug="investment-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-investment"
          label="Initial Investment"
          value={initialInvestment}
          onChange={setInitialInvestment}
          prefix="$"
          step={5000}
          min={0}
        />
        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          step={100}
          min={0}
        />
        <InputField
          id="expected-return"
          label="Expected Annual Return"
          value={expectedReturn}
          onChange={setExpectedReturn}
          suffix="%"
          step={0.1}
          min={0}
          max={50}
          hint="Historical stock market average is ~10%"
        />
        <InputField
          id="years"
          label="Investment Period"
          value={years}
          onChange={setYears}
          suffix="years"
          step={1}
          min={1}
          max={60}
        />
        <InputField
          id="inflation-rate"
          label="Expected Inflation Rate"
          value={inflationRate}
          onChange={setInflationRate}
          suffix="%"
          step={0.1}
          min={0}
          max={10}
          hint="Long-term average is ~2-3%"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InvestmentCalculator,
  slug: "investment-calculator",
  title: "Investment Calculator",
  shortTitle: "Investment",
  description: "Calculate investment growth with returns and inflation adjustment",
  category: "finance",
  icon: "💰",
  keywords: ["investment", "stock market", "growth", "returns", "portfolio"],
  popular: true,
  faqs: INVESTMENT_FAQS,
  ymyl: true,
  dateModified: "2026-04-09",
});
