import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState(50000);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState(25);
  const [sellingPricePerUnit, setSellingPricePerUnit] = useState(75);

  // Calculate breakeven point
  const contributionMarginPerUnit = sellingPricePerUnit - variableCostPerUnit;
  const breakEvenUnits = fixedCosts / contributionMarginPerUnit;
  const breakEvenRevenue = breakEvenUnits * sellingPricePerUnit;
  const breakEvenVariableCosts = breakEvenUnits * variableCostPerUnit;

  // Calculate profit/loss at various unit levels
  const profitMarginPercent = (contributionMarginPerUnit / sellingPricePerUnit) * 100;

  // Generate chart data for units from 0 to 2x breakeven
  const chartData = [];
  const maxUnits = Math.ceil(breakEvenUnits * 2);
  const step = Math.max(1, Math.ceil(maxUnits / 50));

  for (let units = 0; units <= maxUnits; units += step) {
    const revenue = units * sellingPricePerUnit;
    const variableCosts = units * variableCostPerUnit;
    const totalCosts = fixedCosts + variableCosts;
    const profit = revenue - totalCosts;

    chartData.push({
      units,
      revenue,
      totalCosts,
      profit,
    });
  }

  // Scenario analysis at different volumes
  const scenarios = [
    { units: Math.floor(breakEvenUnits * 0.5), label: "50% of breakeven" },
    { units: Math.floor(breakEvenUnits), label: "At breakeven" },
    { units: Math.floor(breakEvenUnits * 1.5), label: "150% of breakeven" },
    { units: Math.floor(breakEvenUnits * 2), label: "200% of breakeven" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Breakeven Units" value={formatNumber(breakEvenUnits)} highlight />
      <ResultCard label="Breakeven Revenue" value={formatCurrency(breakEvenRevenue)} highlight />
      <ResultCard label="Fixed Costs" value={formatCurrency(fixedCosts)} />
      <ResultCard label="Contribution Margin (per unit)" value={formatCurrency(contributionMarginPerUnit)} />
      <ResultCard label="Contribution Margin %" value={`${profitMarginPercent.toFixed(1)}%`} />
      <ResultCard label="Selling Price per Unit" value={formatCurrency(sellingPricePerUnit)} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Revenue vs Costs (Breakeven Analysis)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="units"
              label={{ value: "Units Sold", position: "insideBottomRight", offset: -5 }}
            />
            <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue" />
            <Line type="monotone" dataKey="totalCosts" stroke="#ef4444" strokeWidth={2} name="Total Costs" />
            <Line type="monotone" dataKey="profit" stroke="#3b82f6" strokeWidth={2} name="Profit" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Scenario Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 px-3 font-semibold">Scenario</th>
                <th className="text-right py-2 px-3 font-semibold">Units</th>
                <th className="text-right py-2 px-3 font-semibold">Revenue</th>
                <th className="text-right py-2 px-3 font-semibold">Total Costs</th>
                <th className="text-right py-2 px-3 font-semibold">Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario, idx) => {
                const revenue = scenario.units * sellingPricePerUnit;
                const variableCosts = scenario.units * variableCostPerUnit;
                const totalCosts = fixedCosts + variableCosts;
                const profit = revenue - totalCosts;

                return (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-2 px-3">{scenario.label}</td>
                    <td className="text-right py-2 px-3">{formatNumber(scenario.units)}</td>
                    <td className="text-right py-2 px-3">{formatCurrency(revenue)}</td>
                    <td className="text-right py-2 px-3">{formatCurrency(totalCosts)}</td>
                    <td
                      className={`text-right py-2 px-3 font-semibold ${
                        profit >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {formatCurrency(profit)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Breakeven analysis is a fundamental business tool that determines the point at which your business covers all its costs without making a profit or loss. Understanding your breakeven point helps you make pricing decisions, set sales targets, and evaluate business viability.
      </p>

      <p>
        <strong>Key Concepts:</strong> Fixed costs are expenses that don't change with production volume (rent, salaries, insurance). Variable costs change with production (materials, packaging, commissions). Contribution margin is the selling price minus variable cost per unit—the amount each sale contributes to covering fixed costs. Once fixed costs are fully covered, all remaining contribution margin becomes profit.
      </p>

      <p>
        <strong>Calculating Breakeven:</strong> The breakeven point in units equals fixed costs divided by contribution margin per unit. For example, if fixed costs are $50,000 and contribution margin is $50 per unit, you need to sell 1,000 units to break even. Breakeven revenue is breakeven units times selling price. In the same example, if you sell at $100 per unit, breakeven revenue is $100,000.
      </p>

      <p>
        <strong>Using Breakeven for Decision Making:</strong> Know your breakeven point before launching a product or service. If the breakeven volume is unrealistically high, reconsider your pricing or cost structure. Lowering variable costs (negotiate supplier prices, improve efficiency) or increasing selling price both lower your breakeven point. After breaking even, every unit sold at the same contribution margin becomes pure profit, assuming fixed costs don't increase.
      </p>

      <p>
        <strong>Safety Margin:</strong> The safety margin is how far actual or projected sales exceed breakeven. A 50% safety margin means sales are 50% above breakeven—you could lose half your sales and still break even. Higher safety margins indicate lower business risk. Target a safety margin of at least 20-30% for stability, and 50%+ for comfort. Industries with high fixed costs (manufacturing) typically need higher safety margins than low-overhead businesses.
      </p>

      <p>
        <strong>Multi-Product Scenarios:</strong> For businesses selling multiple products with different margins, calculate a weighted-average contribution margin and breakeven. Products with high margins can subsidize lower-margin products. Monitor which products are truly profitable after allocating fixed costs, rather than just looking at individual product margins.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Breakeven Calculator"
      description="Calculate breakeven point and analyze profit/loss at different sales volumes"
      slug="breakeven-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="fixed-costs"
          label="Fixed Costs (Annual)"
          value={fixedCosts}
          onChange={setFixedCosts}
          prefix="$"
          step={5000}
          min={0}
          hint="Rent, salaries, insurance, etc."
        />
        <InputField
          id="variable-cost-per-unit"
          label="Variable Cost per Unit"
          value={variableCostPerUnit}
          onChange={setVariableCostPerUnit}
          prefix="$"
          step={1}
          min={0}
          hint="Materials, packaging, shipping, etc."
        />
        <InputField
          id="selling-price-per-unit"
          label="Selling Price per Unit"
          value={sellingPricePerUnit}
          onChange={setSellingPricePerUnit}
          prefix="$"
          step={1}
          min={0}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BreakEvenCalculator,
  slug: "breakeven-calculator",
  title: "Breakeven Calculator",
  shortTitle: "Breakeven",
  description: "Calculate breakeven point and analyze profit/loss at different sales volumes",
  category: "finance",
  icon: "📊",
  keywords: ["breakeven", "business analysis", "cost analysis", "profit"],
  popular: false,
});
