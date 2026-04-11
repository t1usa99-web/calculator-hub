import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Loan Amortization</h3>
      <p>
        Amortization is the process of paying off a loan through regular monthly payments. Each payment includes two components: interest (what the lender charges for lending you money) and principal (the amount you borrowed). An amortization schedule breaks down exactly how much of each payment goes to interest versus principal. This is crucial for understanding your loan and making strategic decisions about extra payments.
      </p>
      <p>
        In the early months of a loan, most of your payment goes toward interest. This is because interest is calculated on the remaining balance, which is highest at the beginning. As you pay down the principal, the remaining balance decreases, so less of each payment goes to interest and more goes to principal. For a 30-year mortgage, the first payment might be 80% interest and 20% principal, while the last payment is mostly principal. This front-loaded interest structure is why paying extra toward principal early in a loan's life saves the most money.
      </p>
      <p>
        The amortization formula used is: <strong>M = P × [r(1+r)^n] / [(1+r)^n − 1]</strong>. This formula ensures that your monthly payment stays constant over the loan term (for fixed-rate loans), even though the interest-to-principal ratio changes each month. Understanding this formula helps you appreciate why longer loan terms cost so much more in total interest — more payments means more interest accrues.
      </p>
      <p>
        To accelerate loan payoff, you can make extra principal payments. Even small amounts make a big difference. For example, paying an extra $100 per month on a $300,000 mortgage at 6.5% for 30 years reduces the loan duration by approximately 4 years and saves about $80,000 in total interest. Alternatively, making biweekly payments instead of monthly payments results in 26 half-payments per year (equivalent to 13 full monthly payments) rather than 12, which naturally accelerates payoff without requiring extra funds.
      </p>
      <p>
        Amortization schedules are valuable tools for tax planning, refinancing decisions, and loan payoff strategies. Many lenders provide detailed amortization schedules at loan origination showing every payment's breakdown. You can also request updated schedules anytime. When considering refinancing, comparing amortization schedules of your current loan versus the new loan helps you understand the true cost of refinancing versus staying the course.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Amortization Calculator"
      description="Calculate monthly payments and interest for loans"
      slug="amortization-calculator"
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
