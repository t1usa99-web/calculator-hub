import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

  return (
    <CalculatorLayout
      title="Sales Tax Calculator"
      description="Calculate sales tax and total amounts with forward and reverse calculations"
      slug="sales-tax-calculator"
      results={results}
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

registerCalculator({
  component: SalesTaxCalculator,
  slug: "sales-tax-calculator",
  title: "Sales Tax Calculator",
  shortTitle: "Sales Tax",
  description:
    "Calculate sales tax, total amounts, and reverse-calculate pre-tax prices",
  category: "finance",
  icon: "🛒",
  keywords: ["sales tax", "tax calculation", "total", "price", "retail"],
  ymyl: true,
  dateModified: "2026-04-09",
});
