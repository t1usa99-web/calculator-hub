import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Accelerating Mortgage Payoff</h3>
      <p>
        One of the most powerful wealth-building strategies is paying off your mortgage early through extra principal payments. Even small additional payments compound into massive interest savings over decades. The key principle is that any payment above your required minimum that's applied directly to principal reduces your loan balance faster. With a smaller balance, less interest accrues each month (because interest = balance × monthly rate). This creates a compounding effect where extra payments save exponentially more interest as time goes on.
      </p>
      <p>
        <strong>The Math Behind Early Payoff:</strong> On a $300,000 mortgage at 6.5% for 30 years, the standard payment is roughly $1,896/month. Over 30 years, you pay about $682,560 total, of which $382,560 is interest. By paying an extra $200/month toward principal, you reduce the loan to about 22 years (96 months faster) and save approximately $120,000 in total interest. Paying an extra $500/month saves roughly $200,000 in interest and shortens the loan to about 17 years. The earlier in the loan you make extra payments, the more interest you save, because the balance is higher and interest accrues faster on larger balances.
      </p>
      <p>
        <strong>Common Acceleration Strategies:</strong> (1) <strong>Biweekly payments:</strong> Instead of paying monthly, pay half your mortgage every two weeks. This results in 26 half-payments per year, equivalent to 13 full monthly payments, adding one extra payment annually. Biweekly payments cut 4+ years off a 30-year mortgage. (2) <strong>Round-up payments:</strong> If your payment is $1,896, pay $2,000 — the $104 extra goes to principal. (3) <strong>Windfalls:</strong> Apply bonuses, tax refunds, or annual raises directly to principal. (4) <strong>Lump-sum payments:</strong> When possible, make a large principal payment to significantly reduce the balance.
      </p>
      <p>
        <strong>Should You Invest Instead?</strong> This is a legitimate question. Mortgages at 6.5% guaranteed return from paying them off compete with stock market returns (historically 8-10% annually). Mathematically, investing might win over long time horizons. However, paying off the mortgage delivers a guaranteed return, reduces financial stress, and simplifies finances. Many people prefer the psychological certainty of being mortgage-free. A balanced approach: max out employer 401(k) matches (free money), then decide between extra mortgage payments and additional investing based on your risk tolerance and financial goals.
      </p>
      <p>
        <strong>Important: Verify No Prepayment Penalties:</strong> Always confirm your mortgage allows penalty-free prepayment. Federal law prohibits prepayment penalties on mortgages originated after 2009 for most borrowers, but some ARM loans and older mortgages may have limited penalties. Check your loan documents or call your lender. If your lender allows biweekly payments, set up automatic withdrawals to ensure consistency. Even if you can't afford extra payments every month, making one extra payment per year (during bonus season or tax refund) meaningfully accelerates payoff.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mortgage Payoff Calculator"
      description="Calculate how extra payments can accelerate mortgage payoff and save interest"
      slug="mortgage-payoff-calculator"
      results={results}
      educational={educational}
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
