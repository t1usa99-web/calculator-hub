import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MortgagePayoffCalculator() {
  const [loanBalance, setLoanBalance] = useState(250000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [remainingYears, setRemainingYears] = useState(25);
  const [extraPayment, setExtraPayment] = useState(200);

  const monthlyRate = annualRate / 100 / 12;
  let remainingMonths = remainingYears * 12;

  // Calculate regular monthly payment
  let regularPayment = 0;
  if (monthlyRate === 0) {
    regularPayment = loanBalance / remainingMonths;
  } else {
    const pow = Math.pow(1 + monthlyRate, remainingMonths);
    regularPayment =
      (loanBalance * (monthlyRate * pow)) / (pow - 1);
  }

  // Simulate with extra payment
  let balance = loanBalance;
  let monthsWithExtra = 0;
  let totalInterestPaid = 0;
  const maxMonths = 600; // Safety limit

  while (balance > 0 && monthsWithExtra < maxMonths) {
    const interestCharge = balance * monthlyRate;
    totalInterestPaid += interestCharge;

    const principalPayment = regularPayment + extraPayment - interestCharge;

    if (principalPayment >= balance) {
      balance = 0;
      break;
    }

    balance -= principalPayment;
    monthsWithExtra++;
  }

  // Calculate original payoff time
  const originalMonths = remainingMonths;
  const monthsSaved = originalMonths - monthsWithExtra;
  const yearsSaved = monthsSaved / 12;

  // Calculate original total interest
  let originalTotalInterest = 0;
  let tempBalance = loanBalance;
  for (let i = 0; i < originalMonths; i++) {
    const interest = tempBalance * monthlyRate;
    originalTotalInterest += interest;
    tempBalance = tempBalance * (1 + monthlyRate) - regularPayment;
    if (tempBalance <= 0) break;
  }

  const interestSaved = originalTotalInterest - totalInterestPaid;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="New Payoff Time"
        value={
          formatNumber(monthsWithExtra / 12) + " years (" + monthsWithExtra + " months)"
        }
        highlight={true}
      />
      <ResultCard
        label="Months Saved"
        value={formatNumber(monthsSaved) + " months"}
        highlight={true}
      />
      <ResultCard
        label="Years Saved"
        value={formatNumber(yearsSaved) + " years"}
      />
      <ResultCard
        label="Interest Saved"
        value={formatCurrency(interestSaved)}
        highlight={true}
      />
      <ResultCard
        label="Regular Monthly Payment"
        value={formatCurrency(regularPayment)}
      />
      <ResultCard
        label="Total Monthly Payment"
        value={formatCurrency(regularPayment + extraPayment)}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Mortgage Payoff Calculator"
      description="Calculate how extra payments can accelerate mortgage payoff and save interest"
      slug="mortgage-payoff-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="loan-balance"
          label="Current Loan Balance"
          value={loanBalance}
          onChange={setLoanBalance}
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
          id="remaining-years"
          label="Remaining Loan Term"
          value={remainingYears}
          onChange={setRemainingYears}
          suffix="years"
          min={0.5}
          max={50}
          step={0.5}
        />

        <InputField
          id="extra-payment"
          label="Extra Monthly Payment"
          value={extraPayment}
          onChange={setExtraPayment}
          prefix="$"
          min={0}
          step={50}
          hint="Additional amount to apply to principal each month"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MortgagePayoffCalculator,
  slug: "mortgage-payoff-calculator",
  title: "Mortgage Payoff Calculator",
  shortTitle: "Mortgage Payoff",
  description:
    "Calculate payoff time and interest savings with extra mortgage payments",
  category: "finance",
  icon: "🏡",
  keywords: [
    "mortgage payoff",
    "extra payment",
    "interest savings",
    "acceleration",
    "home loan",
  ],
  ymyl: true,
  dateModified: "2026-04-09",
});
