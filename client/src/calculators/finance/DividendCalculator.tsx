import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function DividendCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [dividendYield, setDividendYield] = useState(4);
  const [frequency, setFrequency] = useState("quarterly");
  const [yearsToInvest, setYearsToInvest] = useState(10);
  const [dividendGrowthRate, setDividendGrowthRate] = useState(2);

  const frequencyOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "annual", label: "Annual" },
  ];

  const paymentsPerYear =
    frequency === "monthly" ? 12 : frequency === "quarterly" ? 4 : 1;

  // Calculate annual dividend income
  const annualDividendIncome = (investmentAmount * dividendYield) / 100;
  const monthlyDividendIncome = annualDividendIncome / 12;
  const frequencyPaymentAmount = annualDividendIncome / paymentsPerYear;

  // Calculate dividends over time with growth and reinvestment
  const dividendData = [];
  let cumulativeDividends = 0;
  let sharesValue = investmentAmount;
  let growthRate = dividendGrowthRate / 100;

  for (let year = 0; year <= yearsToInvest; year++) {
    // Current year dividend (with growth)
    const yearlyDividend = (sharesValue * dividendYield) / 100 * Math.pow(1 + growthRate, year);
    cumulativeDividends += yearlyDividend;

    // Reinvest dividends to increase shares value
    sharesValue = sharesValue * (1 + growthRate);

    dividendData.push({
      year,
      annual: yearlyDividend,
      cumulative: cumulativeDividends,
      sharesValue,
    });
  }

  const totalDividendsWithReinvestment = cumulativeDividends;
  const endingValueWithReinvestment = sharesValue;

  // Calculate ending value without reinvestment (simplified - no growth)
  const endingValueWithoutReinvestment =
    investmentAmount + annualDividendIncome * yearsToInvest;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Annual Dividend Income"
        value={formatCurrency(annualDividendIncome)}
        highlight={true}
      />
      <ResultCard
        label="Monthly Dividend Income"
        value={formatCurrency(monthlyDividendIncome)}
        highlight={true}
      />
      <ResultCard
        label="Total Dividends (With Reinvestment)"
        value={formatCurrency(totalDividendsWithReinvestment)}
      />
      <ResultCard
        label="Ending Value (With Reinvestment)"
        value={formatCurrency(endingValueWithReinvestment)}
      />
      <ResultCard
        label="Ending Value (Without Reinvestment)"
        value={formatCurrency(endingValueWithoutReinvestment)}
      />
      <ResultCard
        label="Benefit of Reinvestment"
        value={formatCurrency(
          endingValueWithReinvestment - endingValueWithoutReinvestment
        )}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Dividend Income Over {yearsToInvest} Years
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={dividendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{ value: "Year", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis
            label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Area
            type="monotone"
            dataKey="annual"
            stackId="1"
            stroke="#3b82f6"
            fill="#3b82f6"
            name="Annual Dividend"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="cumulative"
            stackId="2"
            stroke="#10b981"
            fill="#10b981"
            name="Cumulative Dividends"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Dividend Income and Reinvestment
      </h3>
      <p>
        Dividends are periodic payments made by companies to shareholders, typically from profits. They provide a source of passive income beyond stock price appreciation. Dividend yield is calculated as: Annual Dividend / Stock Price {'{'}x{'}'} 100. For example, if a stock priced at $100 pays $4 annual dividends, the yield is 4%. Dividend frequency varies: some companies pay annually, others quarterly (most common), and some monthly. Higher-yielding stocks attract income investors, though they often represent mature, slower-growth companies.
      </p>
      <p>
        <strong>Dividend Reinvestment:</strong> Many investors use dividend reinvestment plans (DRIPs) to automatically buy additional shares with dividend payouts. Reinvestment dramatically increases long-term wealth due to compounding. For example, $50,000 invested at 4% yield over 10 years with 2% dividend growth and reinvestment grows to approximately $63,000 (vs. $55,000 without reinvestment). The extra $8,000 comes purely from compounding. Over 30 years, the difference becomes even more dramatic: reinvestment can double or triple wealth compared to taking dividends as cash income.
      </p>
      <p>
        <strong>Dividend Growth Strategy:</strong> A dividend growth strategy focuses on companies that consistently increase their dividend payments year over year. This approach combines income with appreciation, as growing dividends often signal a healthy, profitable company. Investors who buy dividend growth stocks early can see significant income growth over decades. For instance, a stock yielding 3% that grows its dividend at 5% annually yields 5% within 10 years and 8% within 20 years (on the original investment), even if the stock price never changes. This turns a modest income stream into a substantial one.
      </p>
      <p>
        <strong>Dividend Yield Comparison:</strong> Dividend yields vary significantly by sector. Utilities typically yield 3-5%, REITs yield 4-8%, growth tech stocks yield 0-2%, and mature industrials yield 2-4%. A high yield can be attractive, but it may indicate the market expects the company to cut dividends or that the stock is undervalued (and risky). Conversely, a low yield on a growth stock may be fine if the company is reinvesting earnings for expansion. Always evaluate dividend sustainability by checking the dividend payout ratio (annual dividend / annual earnings) — ratios above 75% are risky.
      </p>
      <p>
        <strong>Tax Considerations:</strong> Dividend tax treatment varies by type. Qualified dividends from U.S. stocks held over 60 days are taxed at favorable long-term capital gains rates (0%, 15%, or 20% depending on income). Non-qualified dividends are taxed as ordinary income. International dividends may face withholding taxes. Tax-loss harvesting and dividend timing can help minimize tax drag. In retirement accounts like 401(k)s and IRAs, dividend income grows tax-deferred, making reinvestment even more powerful. Consider using tax-advantaged accounts for high-dividend stocks.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Dividend Calculator"
      description="Calculate dividend income and compare reinvestment vs. cash strategies"
      slug="dividend-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="investment-amount"
          label="Investment Amount"
          value={investmentAmount}
          onChange={setInvestmentAmount}
          prefix="$"
          min={1000}
          step={1000}
        />

        <InputField
          id="dividend-yield"
          label="Dividend Yield"
          value={dividendYield}
          onChange={setDividendYield}
          suffix="%"
          min={0}
          max={20}
          step={0.1}
        />

        <SelectField
          id="frequency"
          label="Dividend Frequency"
          value={frequency}
          onChange={setFrequency}
          options={frequencyOptions}
        />

        <InputField
          id="years-to-invest"
          label="Years to Invest"
          value={yearsToInvest}
          onChange={setYearsToInvest}
          suffix="years"
          min={1}
          max={50}
          step={1}
        />

        <InputField
          id="dividend-growth-rate"
          label="Dividend Growth Rate"
          value={dividendGrowthRate}
          onChange={setDividendGrowthRate}
          suffix="%"
          min={0}
          max={10}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}
