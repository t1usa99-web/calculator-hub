import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { MARGIN_FAQS } from "@/lib/faq-finance-invest";

export default function MarginCalculator() {
  const [costPrice, setCostPrice] = useState(50);
  const [sellingPrice, setSellingPrice] = useState(100);

  // Calculate margins
  const profit = sellingPrice - costPrice;
  const markupPercent = (profit / costPrice) * 100;
  const profitMarginPercent = (profit / sellingPrice) * 100;
  const grossMarginPercent = (profit / sellingPrice) * 100;

  // Generate pricing scenarios at different markup percentages
  const markupScenarios = [10, 20, 30, 40, 50, 75, 100, 150, 200];
  const pricingData = markupScenarios.map((markup) => {
    const price = costPrice * (1 + markup / 100);
    const prof = price - costPrice;
    const margin = (prof / price) * 100;
    return {
      markup,
      price,
      profit: prof,
      margin,
    };
  });

  // Comparison of different cost bases at same markup
  const costBases = [10, 25, 50, 100, 200, 500];
  const comparisonData = costBases.map((cost) => ({
    costPrice: cost,
    price50Markup: cost * 1.5,
    price100Markup: cost * 2,
    price200Markup: cost * 3,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Cost Price" value={formatCurrency(costPrice)} />
      <ResultCard label="Selling Price" value={formatCurrency(sellingPrice)} highlight />
      <ResultCard label="Profit per Unit" value={formatCurrency(profit)} highlight={profit > 0} />
      <ResultCard label="Markup %" value={formatPercent(markupPercent / 100)} highlight />
      <ResultCard label="Profit Margin %" value={formatPercent(profitMarginPercent / 100)} highlight />
      <ResultCard label="Gross Margin %" value={formatPercent(grossMarginPercent / 100)} highlight />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          {`Pricing at Different Markups (Cost: ${formatCurrency(costPrice)})`}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pricingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="markup" label={{ value: "Markup %", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Bar dataKey="price" fill="#3b82f6" name="Selling Price" />
            <Bar dataKey="profit" fill="#10b981" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Profit Margin at Different Markups</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pricingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="markup" label={{ value: "Markup %", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Profit Margin %", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => `${(value as number).toFixed(1)}%`} />
            <Line type="monotone" dataKey="margin" stroke="#f59e0b" strokeWidth={2} name="Profit Margin %" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Price Comparison Across Cost Bases</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="costPrice" label={{ value: "Cost Price ($)", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Selling Price ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Bar dataKey="price50Markup" fill="#3b82f6" name="50% Markup" />
            <Bar dataKey="price100Markup" fill="#10b981" name="100% Markup" />
            <Bar dataKey="price200Markup" fill="#f59e0b" name="200% Markup" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Markup and profit margin are two different ways of measuring profitability, and it's important to understand both. Many business owners confuse these terms, but using the correct metric is essential for pricing decisions and financial analysis.
      </p>

      <p>
        <strong>Markup vs Margin:</strong> Markup is the percentage increase from cost to selling price, calculated as (Profit / Cost) × 100. For example, if you buy an item for $100 and sell it for $150, that's a 50% markup. Profit margin (or gross margin) is the percentage of the selling price that's profit, calculated as (Profit / Selling Price) × 100. In the same example, the profit margin is 33.3% because $50 profit ÷ $150 selling price = 33.3%. The key difference: markup is based on cost, margin is based on selling price.
      </p>

      <p>
        <strong>Why They Matter Differently:</strong> A 50% markup doesn't equal 50% profit margin. In fact, a 100% markup (doubling the cost) results in a 50% profit margin. A 200% markup results in a 66.7% margin. This matters for understanding true profitability. If your goal is a 40% profit margin, you need a 67% markup, not 40%.
      </p>

      <p>
        <strong>Industry Standards:</strong> Typical markups vary by industry. Grocery stores typically work with 20-30% margins (only 20-30% of revenue is profit). Retail clothing often has 40-50% margins. Software and services can have 60-80% margins. However, higher margins alone don't guarantee profitability—you also need to control operating expenses and volume. A high-margin business with low volume might be less profitable than a low-margin business with high volume.
      </p>

      <p>
        <strong>Break-Even Pricing:</strong> Some businesses have very low margins due to competition or market conditions. A grocery store with a 25% margin must sell 4 units to make profit equivalent to 1 unit's cost price. High-volume businesses can thrive on thin margins if they have efficient operations. However, prices set too low to achieve required margins will never be sustainable.
      </p>

      <p>
        <strong>Pricing Strategy:</strong> When setting prices, consider costs, competition, value perception, and desired profit margin. Start with your target profit margin, then work backward to set price: Selling Price = Cost / (1 - Target Margin). For example, if your cost is $100 and you want a 40% margin, price = $100 / 0.60 = $166.67. Then compare this to competitor prices and customer willingness to pay to ensure your pricing is competitive.
      </p>

      <p>
        <strong>Remember:</strong> Profit margin is your true profitability metric. A 50% gross margin is excellent, but you still need to subtract operating expenses (salaries, rent, marketing, etc.) to get to net profit. Only revenue above your true cost of doing business—including all fixed costs—becomes net profit.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Margin Calculator"
      description="Calculate markup and profit margins to understand true profitability"
      slug="margin-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="cost-price"
          label="Cost Price"
          value={costPrice}
          onChange={setCostPrice}
          prefix="$"
          step={1}
          min={0}
          hint="What you pay for the item"
        />
        <InputField
          id="selling-price"
          label="Selling Price"
          value={sellingPrice}
          onChange={setSellingPrice}
          prefix="$"
          step={1}
          min={0}
          hint="What you sell the item for"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MarginCalculator,
  faqs: MARGIN_FAQS,
  slug: "margin-calculator",
  title: "Margin Calculator",
  shortTitle: "Margin",
  description: "Calculate markup and profit margins for accurate pricing",
  category: "finance",
  icon: "💲",
  keywords: ["margin", "markup", "profitability", "pricing"],
  popular: false,
});
