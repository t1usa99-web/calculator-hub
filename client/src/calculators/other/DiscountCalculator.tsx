import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState(100);
  const [discountPercent, setDiscountPercent] = useState(20);
  const [taxRate, setTaxRate] = useState(8);

  // Calculate discounted price
  const discountAmount = originalPrice * (discountPercent / 100);
  const priceAfterDiscount = originalPrice - discountAmount;

  // Calculate tax
  const taxAmount = priceAfterDiscount * (taxRate / 100);
  const finalPrice = priceAfterDiscount + taxAmount;

  // Total savings (discount only, not tax)
  const totalSavings = discountAmount;

  const pieData = [
    { name: "Original Price", value: originalPrice },
    { name: "Discount", value: discountAmount },
    { name: "Tax", value: taxAmount },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Discount Amount"
        value={formatCurrency(discountAmount)}
        highlight
      />
      <ResultCard
        label="Price After Discount"
        value={formatCurrency(priceAfterDiscount)}
      />
      <ResultCard
        label="Tax Amount"
        value={formatCurrency(taxAmount)}
        highlight
      />
      <ResultCard
        label="Final Price (with Tax)"
        value={formatCurrency(finalPrice)}
        highlight
      />
      <ResultCard
        label="You Save"
        value={formatCurrency(totalSavings)}
      />
      <ResultCard
        label="Effective Discount"
        value={formatPercent(discountPercent)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Price Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell fill="#3b82f6" />
            <Cell fill="#10b981" />
            <Cell fill="#f59e0b" />
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A discount calculator helps you understand the true cost of purchases when discounts and taxes are involved. Retail discounts are reductions in the original price, typically expressed as a percentage. A 20% discount means you pay 80% of the original price. Sales tax is an additional cost added to the discounted price. By calculating both the discount and tax together, you can determine the actual amount you'll pay at checkout. This is especially useful when shopping online, comparing prices, or evaluating promotional offers.
      </p>

      <p>
        <strong>Types of Discounts:</strong> Percentage discounts are most common, offering a percentage reduction from the original price. Fixed-amount discounts reduce the price by a specific dollar amount. "Buy one, get one" (BOGO) discounts apply to quantities. Volume discounts give larger reductions for buying more. Clearance or seasonal discounts reduce prices on off-season items. Coupon discounts combine with other offers. Loyalty program discounts reward repeat customers. Promotional discounts are temporary offers designed to attract customers. Understanding the type of discount helps you calculate the actual savings and compare deals across different retailers and products.
      </p>

      <p>
        <strong>Sales Tax Considerations:</strong> Sales tax is not uniform and varies by location. In the United States, sales tax rates range from 0% in some states to over 8% in others. Most countries outside the U.S. use a Value Added Tax (VAT) system with higher rates (typically 15-25%). Sales tax is calculated on the discounted price, not the original price, which means larger discounts result in lower tax amounts. Some products (like groceries or medications) may be tax-exempt in certain jurisdictions. Understanding your local tax rate helps you budget accurately and avoid surprises at checkout.
      </p>

      <p>
        <strong>Smart Shopping Tips:</strong> When comparing deals, always calculate the final price including tax. A larger percentage discount on an expensive item might save more money than a smaller percentage on a cheaper item. Watch for promotional tactics like "50% off one item" when you must buy two at full price. Calculate the unit price to compare different brands and sizes. Time your purchases for major sale events, seasonal clearances, or when using store coupons. Use discount calculators before checkout to ensure you're getting the best deal and to budget accurately for purchases.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Discount Calculator"
      description="Calculate savings, final price after discount and tax"
      slug="discount-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="original-price"
          label="Original Price"
          value={originalPrice}
          onChange={setOriginalPrice}
          prefix="$"
          step={0.01}
          min={0}
        />
        <InputField
          id="discount-percent"
          label="Discount Percentage"
          value={discountPercent}
          onChange={setDiscountPercent}
          suffix="%"
          step={0.5}
          min={0}
          max={100}
          hint={`You save ${formatCurrency(discountAmount)}`}
        />
        <InputField
          id="tax-rate"
          label="Tax Rate"
          value={taxRate}
          onChange={setTaxRate}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
          hint={`Tax amount: ${formatCurrency(taxAmount)}`}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DiscountCalculator,
  slug: "discount-calculator",
  title: "Discount Calculator",
  shortTitle: "Discount",
  description: "Calculate savings and final price with discount and tax",
  category: "other",
  icon: "🏷️",
  keywords: ["discount calculator", "sales tax", "price after discount", "calculate savings"],
  popular: true,
});
