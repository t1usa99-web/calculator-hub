import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(10);

  // Simple Interest: I = P * r * t
  const interestEarned = principal * (annualRate / 100) * years;
  const finalAmount = principal + interestEarned;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Interest Earned"
        value={formatCurrency(interestEarned)}
        highlight={true}
      />
      <ResultCard
        label="Final Amount"
        value={formatCurrency(finalAmount)}
        highlight={true}
      />
      <ResultCard
        label="Principal"
        value={formatCurrency(principal)}
      />
      <ResultCard
        label="Interest as % of Principal"
        value={formatNumber((interestEarned / principal) * 100) + "%"}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Simple Interest</h3>
      <p>
        Simple interest is interest calculated only on the principal (the original amount), not on accumulated interest. The formula is straightforward: I = P × r × t, where I is interest earned, P is principal, r is the annual interest rate (as a decimal), and t is time in years. For example, $10,000 at 5% simple interest for 3 years earns: $10,000 × 0.05 × 3 = $1,500. The final amount is $11,500. Unlike compound interest, which creates exponential growth, simple interest creates linear growth — the same amount earned each year.
      </p>
      <p>
        <strong>Where Simple Interest is Used:</strong> Simple interest is less common than compound interest but does appear in some consumer loans and financial products. Certain auto loans use simple interest calculations. Some personal loans and short-term loans use simple interest. Treasury bills and bonds sometimes use simple interest for their interest calculations. Simple interest is more favorable for borrowers (you pay less) and less favorable for savers/investors (you earn less compared to compound interest). When shopping for loans or savings products, simple interest is generally better for borrowing but worse for saving.
      </p>
      <p>
        <strong>Comparing Simple vs Compound Interest:</strong> The difference grows larger with time and higher rates. Over 30 years at 5% interest, $10,000 earning simple interest becomes $25,000 (earning $15,000). The same amount with compound interest becomes $43,219 (earning $33,219) — more than double the earnings. For short-term loans or savings (under 2 years), the difference is minimal. For long-term investments or debt, compound interest's advantage is dramatic. This is why you should demand compound interest on savings accounts and offer simple interest when borrowing.
      </p>
      <p>
        <strong>Calculating Simple Interest for Any Time Period:</strong> The formula works for any time period. For 6 months (t = 0.5): I = $10,000 × 0.05 × 0.5 = $250. For 18 months (t = 1.5): I = $10,000 × 0.05 × 1.5 = $750. You can convert months to years (divide by 12) or use days (divide by 365). Simple interest's predictability is valuable for planning — you always know exactly what you'll earn or pay, with no surprises from compounding.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Banks use simple interest for some short-term products and promotional offerings because it's easy to calculate and understand. If you see "earn 5% simple interest" on a high-yield savings account, that's a red flag — modern savings accounts should offer compound interest (usually daily compounding). For loans, simple interest is technically better for the borrower, but most auto loans and mortgages use amortized calculations (which is more complex but still results in interest on interest as unpaid interest accrues). Always check whether a financial product uses simple or compound interest.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Simple Interest Calculator"
      description="Calculate simple interest without compounding"
      slug="simple-interest-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="principal"
          label="Principal Amount"
          value={principal}
          onChange={setPrincipal}
          prefix="$"
          min={0}
          step={100}
        />

        <InputField
          id="annual-rate"
          label="Annual Interest Rate"
          value={annualRate}
          onChange={setAnnualRate}
          suffix="%"
          min={0}
          max={50}
          step={0.1}
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
