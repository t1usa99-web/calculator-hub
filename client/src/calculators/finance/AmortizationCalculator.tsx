import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function AmortizationCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
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

  // First payment breakdown
  const firstPaymentInterest = loanAmount * monthlyRate;
  const firstPaymentPrincipal = monthlyPayment - firstPaymentInterest;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Monthly Payment"
        value={formatCurrency(monthlyPayment)}
        highlight={true}
      />
      <ResultCard
        label="Total Interest Paid"
        value={formatCurrency(totalInterest)}
        highlight={true}
      />
      <ResultCard
        label="Total Amount Paid"
        value={formatCurrency(totalPaid)}
      />
      <ResultCard
        label="First Payment - Interest"
        value={formatCurrency(firstPaymentInterest)}
        subtext={`Principal: ${formatCurrency(firstPaymentPrincipal)}`}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Amortization Calculator"
      description="Calculate monthly payments and interest for loans"
      slug="amortization-calculator"
      results={results}
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
          label="Annual Interest Rate"
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

registerCalculator({
  component: AmortizationCalculator,
  slug: "amortization-calculator",
  title: "Amortization Calculator",
  shortTitle: "Amortization",
  description:
    "Calculate monthly loan payments, total interest, and amortization schedule breakdown",
  category: "finance",
  icon: "🗓️",
  keywords: [
    "amortization",
    "loan payment",
    "mortgage",
    "interest calculation",
    "monthly payment",
  ],
  dateModified: "2026-04-09",
});
