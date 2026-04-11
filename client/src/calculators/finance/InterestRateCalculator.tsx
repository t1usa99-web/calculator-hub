import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Interest Rates</h3>
      <p>
        An interest rate is the cost of borrowing money, expressed as a percentage of the loan amount per year (APR). If you borrow $10,000 at 6% APR, you owe $600 in annual interest. Interest rates are determined by multiple factors: your credit score (better credit = lower rates), the type of loan (mortgages are lower than personal loans), the loan term (shorter terms often have lower rates), current market conditions (set partly by the Federal Reserve), and your down payment (larger down = lower rate). Shopping around with multiple lenders is essential — rates vary significantly, and even a 0.5% difference costs tens of thousands over a 30-year mortgage.
      </p>
      <p>
        <strong>Fixed vs Variable Interest Rates:</strong> A fixed interest rate stays the same for the entire loan term, making your payment predictable and stable. A variable interest rate adjusts periodically based on market conditions. Fixed rates are typically higher than starting variable rates but offer certainty. Variable rates start lower but can increase substantially, making budgeting difficult. When the Federal Reserve is raising rates or you're risk-averse, fixed rates are preferable. ARMs are risky for borrowers — they can save money short-term but create payment shock when rates jump.
      </p>
      <p>
        <strong>The Impact of Credit Score on Rates:</strong> Your credit score is one of the largest determinants of loan rates. Credit ranges: 760+ (excellent), 700-759 (good), 670-699 (fair), 580-669 (poor), below 580 (very poor). On a $300,000 mortgage over 30 years, the difference between 740+ credit (5% rate) and 620-639 credit (7% rate) is roughly $200/month or $72,000 total over the loan's life. Improving your credit score by 50-100 points before applying can save tens of thousands. It's worth waiting 3-6 months to improve your score if you're on the borderline between rate tiers.
      </p>
      <p>
        <strong>Shopping for the Best Rate:</strong> Interest rates change daily. You should get quotes from at least 3-5 lenders to compare rates and terms. Ask about APR (which includes fees, not just interest rate). Request lock-in periods (how long the rate quote is valid). Understand rate sheets — points and fees affect the final cost. A lower rate might come with higher fees, which may not be worth it if you're refinancing (planning to keep the loan less than 5 years). Use this calculator to understand what rate you're actually paying based on your payment amount.
      </p>
      <p>
        <strong>Factors Beyond Your Control:</strong> The broader economy influences all interest rates. The Federal Funds Rate (controlled by the Federal Reserve) affects the prime rate, which influences all consumer lending. Inflation expectations, inflation itself, and economic growth all push rates up or down. Loan supply and demand also matter — when lenders have excess capital, they lower rates to attract borrowers. When capital is scarce, rates rise. You can't control these factors, but understanding them helps you recognize when it's a "good time" to borrow (rates declining or at historical lows) versus a "bad time" (rates rising or at historical highs).
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Interest Rate Calculator"
      description="Calculate the implied interest rate from loan amount, payment, and term"
      slug="interest-rate-calculator"
      results={results}
      educational={educational}
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
