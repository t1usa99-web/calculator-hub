import { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatPercent } from "@/lib/utils";

export default function WACCCalculator() {
  const [equityValue, setEquityValue] = useState(500000);
  const [debtValue, setDebtValue] = useState(300000);
  const [costOfEquity, setCostOfEquity] = useState(10);
  const [costOfDebt, setCostOfDebt] = useState(5);
  const [taxRate, setTaxRate] = useState(25);

  // Total value
  const totalValue = equityValue + debtValue;

  // Weights
  const equityWeight = equityValue / totalValue;
  const debtWeight = debtValue / totalValue;

  // After-tax cost of debt
  const afterTaxCostOfDebt = costOfDebt * (1 - taxRate / 100);

  // WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc)
  const wacc = equityWeight * costOfEquity + debtWeight * afterTaxCostOfDebt;

  // Debt-to-equity ratio
  const debtToEquityRatio = equityValue > 0 ? debtValue / equityValue : 0;

  // Debt-to-value ratio
  const debtToValueRatio = debtWeight;

  // Cost of capital components
  const equityCost = equityWeight * costOfEquity;
  const debtCostComponent = debtWeight * afterTaxCostOfDebt;

  // Capital structure pie chart
  const capitalStructure = [
    { name: "Equity", value: equityValue },
    { name: "Debt", value: debtValue },
  ];

  // Component costs bar chart
  const componentData = [
    { label: "Cost of Equity\nComponent", value: equityCost, fill: "#3b82f6" },
    { label: "Cost of Debt\nComponent", value: debtCostComponent, fill: "#ef4444" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="WACC (Weighted Average Cost of Capital)" value={formatPercent(wacc / 100)} highlight />
      <ResultCard label="Total Capital Value" value={`$${formatNumber(totalValue, 0)}`} />
      <ResultCard label="Equity Weight" value={formatPercent(equityWeight)} />
      <ResultCard label="Debt Weight" value={formatPercent(debtWeight)} />
      <ResultCard label="Cost of Equity" value={formatPercent(costOfEquity / 100)} />
      <ResultCard label="Cost of Debt (after-tax)" value={formatPercent(afterTaxCostOfDebt / 100)} />
      <ResultCard label="Debt-to-Equity Ratio" value={formatNumber(debtToEquityRatio, 2)} />
      <ResultCard label="Debt-to-Value Ratio" value={formatPercent(debtToValueRatio)} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Capital Structure</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={capitalStructure}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value, percent }) => `${name}: $${formatNumber(value, 0)} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="#3b82f6" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip formatter={(value) => `$${formatNumber(value as number, 0)}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">WACC Components</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={componentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis label={{ value: "Weighted Cost (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatPercent((value as number) / 100)} />
            <Bar dataKey="value" fill="#8884d8">
              {componentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        WACC (Weighted Average Cost of Capital) represents the average rate a company must pay to finance its assets, weighted by the proportion of debt and equity in its capital structure. It's a critical metric for corporate finance, investment analysis, and capital budgeting decisions. WACC reflects the cost of money the company raises through both borrowing and equity, and is used as the discount rate for evaluating projects and company valuations.
      </p>

      <p>
        <strong>Understanding WACC Formula:</strong> WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc), where E is equity value, D is debt value, V is total value (E + D), Re is cost of equity, Rd is cost of debt, and Tc is the corporate tax rate. The tax shield factor (1 - Tc) reflects that debt interest is tax-deductible, reducing its effective cost. Higher leverage (more debt) lowers WACC if debt is cheaper than equity, but increases financial risk. The optimal capital structure balances cost reduction with risk management.
      </p>

      <p>
        <strong>Cost of Equity vs Cost of Debt:</strong> Cost of equity (Re) is what shareholders expect as return, typically calculated using CAPM (Capital Asset Pricing Model). Cost of debt (Rd) is the interest rate paid on borrowed funds. Debt is usually cheaper than equity because it's senior in bankruptcy and has tax advantages. However, increasing debt increases financial risk and bankruptcy costs. Companies must balance cheaper financing (debt) against increased risk, finding their optimal capital structure.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Investment banks use WACC to value companies and evaluate M and A deals. Corporate finance teams use WACC as the discount rate for NPV calculations on capital projects. Private equity firms use WACC to evaluate acquisition targets. Ratings agencies consider WACC when assessing creditworthiness. Higher WACC means projects must generate higher returns to be worthwhile. Understanding your industry's typical WACC helps benchmark your company's cost of capital and identify optimization opportunities.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="WACC Calculator"
      description="Calculate weighted average cost of capital and capital structure analysis"
      slug="wacc-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="equity-value"
          label="Market Value of Equity"
          value={equityValue}
          onChange={setEquityValue}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="debt-value"
          label="Market Value of Debt"
          value={debtValue}
          onChange={setDebtValue}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="cost-of-equity"
          label="Cost of Equity (Re)"
          value={costOfEquity}
          onChange={setCostOfEquity}
          suffix="%"
          step={0.1}
          min={0}
          max={50}
        />
        <InputField
          id="cost-of-debt"
          label="Cost of Debt (Rd)"
          value={costOfDebt}
          onChange={setCostOfDebt}
          suffix="%"
          step={0.1}
          min={0}
          max={25}
        />
        <InputField
          id="tax-rate"
          label="Corporate Tax Rate"
          value={taxRate}
          onChange={setTaxRate}
          suffix="%"
          step={1}
          min={0}
          max={60}
        />

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
          <p>
            <strong>Formula:</strong> WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc)
          </p>
          <p className="mt-2">
            <strong>Your calculation:</strong> ({formatPercent(equityWeight)}) × {formatPercent(costOfEquity / 100)} + ({formatPercent(debtWeight)}) × {formatPercent(costOfDebt / 100)} × (1 - {formatPercent(taxRate / 100)})
          </p>
          <p className="mt-1">
            = {formatPercent(wacc / 100)}
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
