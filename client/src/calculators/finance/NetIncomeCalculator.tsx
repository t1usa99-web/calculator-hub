import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export default function NetIncomeCalculator() {
  const [revenue, setRevenue] = useState(500000);
  const [cogs, setCogs] = useState(150000);
  const [operatingExpenses, setOperatingExpenses] = useState(100000);
  const [depreciation, setDepreciation] = useState(25000);
  const [interestExpense, setInterestExpense] = useState(10000);
  const [taxRate, setTaxRate] = useState(25);

  // Income Statement Waterfall
  const grossProfit = revenue - cogs;
  const grossMargin = (grossProfit / revenue) * 100;

  const ebitda = grossProfit - operatingExpenses;
  const ebitdaMargin = (ebitda / revenue) * 100;

  const ebit = ebitda - depreciation;
  const operatingMargin = (ebit / revenue) * 100;

  const ebt = ebit - interestExpense;
  const incomeTaxes = ebt * (taxRate / 100);
  const netIncome = ebt - incomeTaxes;
  const netMargin = (netIncome / revenue) * 100;

  // Profitability Ratios
  const roa = netMargin; // Simplified (typically: Net Income / Total Assets)
  const roe = netMargin; // Simplified (typically: Net Income / Shareholders Equity)

  // Waterfall chart data
  const waterfallData = [
    { name: "Revenue", value: revenue },
    { name: "COGS", value: -cogs },
    { name: "Gross Profit", value: grossProfit },
    { name: "Operating Exp", value: -operatingExpenses },
    { name: "EBITDA", value: ebitda },
    { name: "Depreciation", value: -depreciation },
    { name: "EBIT", value: ebit },
    { name: "Interest", value: -interestExpense },
    { name: "EBT", value: ebt },
    { name: "Taxes", value: -incomeTaxes },
    { name: "Net Income", value: netIncome },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Revenue"
        value={formatCurrency(revenue)}
      />
      <ResultCard
        label="Cost of Goods Sold (COGS)"
        value={formatCurrency(cogs)}
        subtext={formatNumber((cogs / revenue) * 100, 1) + "% of revenue"}
      />
      <ResultCard
        label="Gross Profit"
        value={formatCurrency(grossProfit)}
        subtext={`Gross margin: ${formatNumber(grossMargin, 1)}%`}
      />
      <ResultCard
        label="Operating Expenses"
        value={formatCurrency(operatingExpenses)}
        subtext={formatNumber((operatingExpenses / revenue) * 100, 1) + "% of revenue"}
      />
      <ResultCard
        label="EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization)"
        value={formatCurrency(ebitda)}
        subtext={`EBITDA margin: ${formatNumber(ebitdaMargin, 1)}%`}
      />
      <ResultCard
        label="Depreciation & Amortization"
        value={formatCurrency(depreciation)}
        subtext="Non-cash expense"
      />
      <ResultCard
        label="EBIT (Operating Income)"
        value={formatCurrency(ebit)}
        subtext={`Operating margin: ${formatNumber(operatingMargin, 1)}%`}
      />
      <ResultCard
        label="Interest Expense"
        value={formatCurrency(interestExpense)}
        subtext="Debt servicing cost"
      />
      <ResultCard
        label="Earnings Before Tax (EBT)"
        value={formatCurrency(ebt)}
        subtext="Pre-tax profit"
      />
      <ResultCard
        label="Income Taxes"
        value={formatCurrency(incomeTaxes)}
        subtext={`${taxRate}% tax rate`}
      />
      <ResultCard
        label="Net Income"
        value={formatCurrency(netIncome)}
        highlight
        subtext={`Net margin: ${formatNumber(netMargin, 1)}%`}
      />
      <ResultCard
        label="Operating Leverage (EBIT / Gross Profit)"
        value={formatNumber((ebit / grossProfit) * 100, 1) + "%"}
        subtext="How operating costs affect profitability"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Income Statement Components (Absolute Values)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={[
          { name: "Revenue", value: revenue },
          { name: "COGS", value: cogs },
          { name: "OpEx", value: operatingExpenses },
          { name: "Depreciation", value: depreciation },
          { name: "Interest", value: interestExpense },
          { name: "Taxes", value: incomeTaxes },
          { name: "Net Income", value: Math.max(0, netIncome) },
        ]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Net income is a business's profit—the "bottom line" after all expenses. The income statement (P{'{&}'} L) is a financial snapshot showing how revenue becomes net income. Starting with revenue and subtracting costs: (1) Cost of Goods Sold (COGS) = direct manufacturing costs. (2) Gross Profit = revenue - COGS. (3) Operating Expenses = overhead (salaries, rent, marketing). (4) EBITDA = Gross Profit - OpEx (earnings before interest, taxes, depreciation). (5) Depreciation = spreading asset cost over time. (6) EBIT = operating income. (7) Interest Expense = cost of debt. (8) EBT = pre-tax profit. (9) Taxes. (10) Net Income = final profit.
      </p>

      <p>
        <strong>Key Profit Margins:</strong> <strong>Gross margin</strong> (Gross Profit ÷ Revenue) shows manufacturing efficiency. A 60% gross margin means 60 cents profit per dollar revenue after direct costs. <strong>Operating margin</strong> (EBIT ÷ Revenue) shows operational efficiency after overhead. A 20% operating margin is strong; 5% is weak. <strong>Net margin</strong> (Net Income ÷ Revenue) shows overall profitability. A 10% net margin means 10 cents profit per dollar revenue. Healthy businesses have: gross margin 40-60%, operating margin 15-25%, net margin 8-15%. Margins vary by industry (retail 2-5%, software 25-40%).
      </p>

      <p>
        <strong>EBITDA vs. Net Income:</strong> EBITDA ({formatCurrency(ebitda)}) is earnings before interest, taxes, depreciation, amortization. Net Income ({formatCurrency(netIncome)}) is the true profit after all expenses. EBITDA is useful for comparing companies with different capital structures and tax situations (equity vs. debt-financed). However, EBITDA can be misleading: high EBITDA but massive debt or taxes can result in low net income. Always use both EBITDA (operational performance) and net income (shareholder return) in analysis.
      </p>

      <p>
        <strong>Impact of Each Expense Line:</strong> (1) {formatCurrency(cogs)} COGS: improve through manufacturing efficiency or supplier negotiation. (2) {formatCurrency(operatingExpenses)} OpEx: reduce by automating, outsourcing, or cutting overhead. (3) {formatCurrency(depreciation)} Depreciation: non-cash; affects tax but not cash flow. (4) {formatCurrency(interestExpense)} Interest: refinance debt to lower rates; reduce leverage. (5) {formatCurrency(incomeTaxes)} Taxes: manage through deductions, timing, structure. Each {formatCurrency(1)} reduction in COGS flows directly to gross profit; each {formatCurrency(1)} reduction in OpEx reduces operating leverage. Improving net income requires attacking the largest expense categories.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Net Income (P&L) Calculator"
      description="Analyze business profitability through income statement components and margins"
      slug="net-income-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="revenue"
          label="Total Revenue"
          value={revenue}
          onChange={setRevenue}
          prefix="$"
          step={50000}
          min={10000}
        />
        <InputField
          id="cogs"
          label="Cost of Goods Sold (COGS)"
          value={cogs}
          onChange={setCogs}
          prefix="$"
          step={25000}
          min={0}
          hint="Direct manufacturing/production costs"
        />
        <InputField
          id="operating-expenses"
          label="Operating Expenses"
          value={operatingExpenses}
          onChange={setOperatingExpenses}
          prefix="$"
          step={25000}
          min={0}
          hint="Salaries, rent, utilities, marketing, admin"
        />
        <InputField
          id="depreciation"
          label="Depreciation & Amortization"
          value={depreciation}
          onChange={setDepreciation}
          prefix="$"
          step={10000}
          min={0}
          hint="Spreading asset cost; non-cash expense"
        />
        <InputField
          id="interest-expense"
          label="Interest Expense"
          value={interestExpense}
          onChange={setInterestExpense}
          prefix="$"
          step={5000}
          min={0}
          hint="Cost of debt (loans, bonds)"
        />
        <InputField
          id="tax-rate"
          label="Tax Rate"
          value={taxRate}
          onChange={setTaxRate}
          suffix="%"
          step={1}
          min={0}
          max={40}
          hint="Corporate or income tax rate"
        />
      </div>
    </CalculatorLayout>
  );
}
