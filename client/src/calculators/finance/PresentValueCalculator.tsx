import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PresentValueCalculator() {
  const [futureValue, setFutureValue] = useState(100000);
  const [discountRate, setDiscountRate] = useState(5);
  const [years, setYears] = useState(10);

  // PV = FV / (1 + r)^n
  const presentValue =
    futureValue / Math.pow(1 + discountRate / 100, years);
  const discountAmount = futureValue - presentValue;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Present Value"
        value={formatCurrency(presentValue)}
        highlight={true}
      />
      <ResultCard
        label="Discount Amount"
        value={formatCurrency(discountAmount)}
        highlight={true}
      />
      <ResultCard
        label="Future Value"
        value={formatCurrency(futureValue)}
      />
      <ResultCard
        label="Discount as % of Future Value"
        value={formatNumber((discountAmount / futureValue) * 100) + "%"}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Present Value Calculator"
      description="Calculate what a future amount is worth in today's money"
      slug="present-value-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="future-value"
          label="Future Value"
          value={futureValue}
          onChange={setFutureValue}
          prefix="$"
          min={0}
          step={1000}
        />

        <InputField
          id="discount-rate"
          label="Discount Rate (Annual)"
          value={discountRate}
          onChange={setDiscountRate}
          suffix="%"
          min={0}
          max={50}
          step={0.1}
          hint="Rate of return or inflation used for discounting"
        />

        <InputField
          id="years"
          label="Time Period"
          value={years}
          onChange={setYears}
          suffix="years"
          min={0}
          max={100}
          step={0.5}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PresentValueCalculator,
  slug: "present-value-calculator",
  title: "Present Value Calculator",
  shortTitle: "Present Value",
  description:
    "Determine the current worth of a future sum of money",
  category: "finance",
  icon: "⏱️",
  keywords: [
    "present value",
    "NPV",
    "discounting",
    "investment analysis",
    "finance",
  ],
  dateModified: "2026-04-09",
});
