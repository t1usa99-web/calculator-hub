import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numberOfPayments;
  } else {
    monthlyPayment =
      (loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - loanAmount;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Monthly Payment"
        value={formatCurrency(monthlyPayment)}
        highlight={true}
      />
      <ResultCard
        label="Total Interest"
        value={formatCurrency(totalInterest)}
        highlight={true}
      />
      <ResultCard
        label="Total Amount Paid"
        value={formatCurrency(totalPaid)}
      />
      <ResultCard
        label="Interest as % of Principal"
        value={formatNumber((totalInterest / loanAmount) * 100) + "%"}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Loan Payments</h3>
      <p>
        A loan payment is the fixed monthly amount you pay a lender to repay a loan. The payment is calculated using a precise formula that ensures the same payment amount covers both interest and principal throughout the loan term. The standard formula is: M = P × [r(1+r)^n] / [(1+r)^n − 1], where M is the monthly payment, P is the principal (loan amount), r is the monthly interest rate, and n is the total number of payments. This formula creates amortization — a payment schedule where each payment is identical but the proportion going to interest versus principal changes monthly.
      </p>
      <p>
        <strong>How Loan Term Affects Your Payment:</strong> The longer your loan term, the lower your monthly payment but the higher the total amount you'll pay in interest. For example, a $250,000 loan at 6.5% interest: 15-year term = $2,140/month, total paid = $385,200, total interest = $135,200. A 30-year term = $1,580/month, total paid = $568,560, total interest = $318,560. The 30-year payment is $560 lower per month but costs $183,360 more in total interest. Choosing a term is a balance between affordability (lower payments) and cost (total interest).
      </p>
      <p>
        <strong>Impact of Interest Rates:</strong> Interest rates dramatically affect your monthly payment. The same $250,000 30-year loan at different rates: 5% = $1,342/month, 6.5% = $1,580/month, 8% = $1,834/month. A 3% rate difference ($492/month) adds $177,120 to total interest paid over 30 years. This is why shopping for the best rate is worthwhile — even a 0.25% lower rate saves tens of thousands over the loan's life. Your credit score, loan type, and down payment all affect the rate you qualify for.
      </p>
      <p>
        <strong>Prepayment Strategies:</strong> You can reduce the total interest paid by making extra principal payments toward your loan. Any amount above your regular payment that's applied to principal reduces the balance faster, so less interest accrues. Strategies include: making biweekly payments (which equals one extra payment per year), rounding up each payment by $100-200, or applying windfalls (bonuses, tax refunds) directly to principal. Even $50/month extra saves tens of thousands over 30 years. Some lenders offer "accelerated payment plans" where you pay biweekly; just ensure there are no penalties for paying early.
      </p>
      <p>
        <strong>Fixed vs Variable Payments:</strong> Fixed-rate loans have the same payment for the entire term, making budgeting predictable. Adjustable-rate loans (ARMs) start with a lower payment but can increase significantly when the rate adjusts. Variable-rate loans can change monthly. Fixed rates provide certainty; variable rates offer short-term savings but future uncertainty. When interest rates are rising, fixed rates are preferable. When rates are falling, variable rates might offer savings, but the risk of future increases is significant.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Payment Calculator"
      description="Calculate monthly loan payments based on amount, rate, and term"
      slug="payment-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="loan-amount"
          label="Loan Amount"
          value={loanAmount}
          onChange={setLoanAmount}
          prefix="$"
          min={1000}
          step={1000}
        />

        <InputField
          id="annual-rate"
          label="Annual Interest Rate (APR)"
          value={annualRate}
          onChange={setAnnualRate}
          suffix="%"
          min={0}
          max={20}
          step={0.1}
        />

        <InputField
          id="loan-term"
          label="Loan Term"
          value={loanTerm}
          onChange={setLoanTerm}
          suffix="years"
          min={1}
          max={50}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}
