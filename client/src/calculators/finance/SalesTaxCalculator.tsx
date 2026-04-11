import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";

export default function SalesTaxCalculator() {
  const [amount, setAmount] = useState(100);
  const [taxRate, setTaxRate] = useState(8.875);
  const [mode, setMode] = useState("forward");

  const modeOptions = [
    { value: "forward", label: "Pre-tax Amount → Total" },
    { value: "reverse", label: "Total Amount → Pre-tax" },
  ];

  let taxAmount = 0;
  let totalAmount = 0;
  let preTaxAmount = 0;

  if (mode === "forward") {
    preTaxAmount = amount;
    taxAmount = amount * (taxRate / 100);
    totalAmount = amount + taxAmount;
  } else {
    totalAmount = amount;
    preTaxAmount = totalAmount / (1 + taxRate / 100);
    taxAmount = totalAmount - preTaxAmount;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Pre-tax Amount"
        value={formatCurrency(preTaxAmount)}
        highlight={true}
      />
      <ResultCard
        label="Tax Amount"
        value={formatCurrency(taxAmount)}
        highlight={true}
      />
      <ResultCard
        label="Total with Tax"
        value={formatCurrency(totalAmount)}
      />
      <ResultCard
        label="Effective Rate"
        value={formatPercent(taxAmount / preTaxAmount)}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Sales Tax</h3>
      <p>
        Sales tax is a percentage-based tax on the purchase of goods and services. It's calculated as: Tax Amount = Pre-tax Price × (Tax Rate ÷ 100). For example, if you buy a $100 item in a region with 8% sales tax, you pay $100 + ($100 × 0.08) = $108 total. Sales tax rates vary significantly by location, ranging from 0% (Alaska, Delaware, Montana, New Hampshire, Oregon) to over 10% in some cities. What you pay at the register is the pre-tax price plus the applicable sales tax based on where the purchase is made.
      </p>
      <p>
        <strong>Tax-Exempt Items:</strong> Not all purchases are subject to sales tax. In most states, groceries and prescription medications are tax-exempt because they're considered essential items. However, prepared foods, restaurant meals, energy drinks, and vitamins may be taxable. Some states exempt clothing or children's clothing. Business-to-business purchases are often exempt. Tax-exempt status varies by state — always check your local tax rules, especially for purchases near state borders where neighbors might pay different rates.
      </p>
      <p>
        <strong>Online Shopping and Sales Tax:</strong> Prior to 2018, small online retailers weren't required to collect sales tax based on a Supreme Court ruling. That changed in June 2018. Now, all major online retailers (Amazon, eBay, Walmart) collect and remit sales tax for most purchases based on your shipping address. Some small sellers may not collect tax; if you're not charged tax on an online purchase, you're technically liable for "use tax" — a self-reported tax that few people pay. Many states have started enforcement initiatives to collect unpaid use taxes.
      </p>
      <p>
        <strong>Sales Tax vs VAT:</strong> The United States uses sales tax, while about 170 countries use Value-Added Tax (VAT). Sales tax is collected only at the final sale to consumers, while VAT is collected at each step of the supply chain. From a consumer perspective, the final price is similar, but VAT is more complex for businesses because they must track and remit taxes at multiple stages. The U.S. sales tax system is simpler for businesses but places the full burden on the end consumer.
      </p>
      <p>
        <strong>Planning for Sales Tax:</strong> When budgeting for purchases, always add sales tax to the listed price to know your true cost. This calculator allows you to work backwards — if you know the total amount you're willing to spend, you can calculate the maximum pre-tax price. Understanding local tax rates also helps when deciding whether to buy locally versus online, or whether to travel across state lines for large purchases. For businesses, sales tax is a cost of doing business and affects profit margins, especially in high-tax regions.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Sales Tax Calculator"
      description="Calculate sales tax and total amounts with forward and reverse calculations"
      slug="sales-tax-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="mode"
          label="Calculation Mode"
          value={mode}
          onChange={setMode}
          options={modeOptions}
        />

        <InputField
          id="amount"
          label={
            mode === "forward"
              ? "Pre-tax Amount"
              : "Total with Tax (Including Tax)"
          }
          value={amount}
          onChange={setAmount}
          prefix="$"
          min={0}
          step={0.01}
        />

        <InputField
          id="tax-rate"
          label="Sales Tax Rate"
          value={taxRate}
          onChange={setTaxRate}
          suffix="%"
          min={0}
          max={15}
          step={0.01}
        />
      </div>
    </CalculatorLayout>
  );
}
