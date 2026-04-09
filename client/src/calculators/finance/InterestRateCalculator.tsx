import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function InterestRateCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [monthlyPayment, setMonthlyPayment] = useState(1897);
  const [loanTermMonths, setLoanTermMonths] = useState(360);

  // Solve for r (monthly interest rate) using Newton's method
  // PMT = P * [r(1+r)^n] / [(1+r)^n - 1]
  const solveForRate = (
    principal: number,
    payment: number,
    months: number
  ): number => {
    if (principal <= 0 || payment <= 0 || months <= 0) return 0;

    // Handle edge case where monthly payment equals principal/months (zero interest)
    if (Math.abs(payment - principal / months) < 0.01) return 0;

    let r = 0.01; // Initial guess: 1% monthly
    const tolerance = 0.000001;
    const maxIterations = 100;

    for (let i = 0; i < maxIterations; i++) {
      const pow = Math.pow(1 + r, months);
      const numerator = payment * (pow - 1) - principal * r * pow;
      const denominator =
        payment * months * pow + principal * r * (r * months - 1) * pow -
        payment * pow;

      const nextR = r - numerator / denominator;

      if (Math.abs(nextR - r) < tolerance) {
        return nextR;
      }
      r = nextR;

      // Prevent runaway iteration
      if (isNaN(r) || !isFinite(r)) return 0;
    }
    return r;
  };

  const monthlyRate = solveForRate(loanAmount, monthlyPayment, loanTermMonths);
  const annualRate = monthlyRate * 12 * 100;

  // Verify the solution
  let verifyPayment = 0;
  if (monthlyRate === 0) {
    verifyPayment = loanAmount / loanTermMonths;
  } else {
    const pow = Math.pow(1 + monthlyRate, loanTermMonths);
    verifyPayment =
      (loanAmount * (monthlyRate * pow)) / (pow - 1);
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Implied Annual Interest Rate (APR)"
        value={formatNumber(annualRate) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Monthly Interest Rate"
        value={formatNumber(monthlyRate * 100) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Verification - Calculated Payment"
        value={formatCurrency(verifyPayment)}
        subtext={`Input: ${formatCurrency(monthlyPayment)}`}
      />
      <ResultCard
        label="Total Interest on Loan"
        value={formatCurrency(monthlyPayment * loanTermMonths - loanAmount)}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Interest Rate Calculator"
      description="Calculate the implied interest rate from loan amount, payment, and term"
      slug="interest-rate-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="loan-amount"
          label="Original Loan Amount"
          value={loanAmount}
          onChange={setLoanAmount}
          prefix="$"
          min={1000}
          step={1000}
        />

        <InputField
          id="monthly-payment"
          label="Monthly Payment"
          value={monthlyPayment}
          onChange={setMonthlyPayment}
          prefix="$"
          min={1}
          step={1}
        />

        <InputField
          id="loan-term-months"
          label="Loan Term"
          value={loanTermMonths}
          onChange={setLoanTermMonths}
          suffix="months"
          min={1}
          max={600}
          step={1}
        />

        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
          This calculator uses Newton's method to solve for the interest rate
          that produces your specified monthly payment.
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InterestRateCalculator,
  slug: "interest-rate-calculator",
  title: "Interest Rate Calculator",
  shortTitle: "Interest Rate",
  description:
    "Determine the implied interest rate from loan payment and term",
  category: "finance",
  icon: "📉",
  keywords: [
    "interest rate",
    "APR",
    "loan analysis",
    "effective rate",
    "mortgage rate",
  ],
  ymyl: true,
  dateModified: "2026-04-09",
});
