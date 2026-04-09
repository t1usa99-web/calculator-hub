import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { LOAN_FAQS } from "@/lib/faq-content";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");

  // Calculate payment frequency multiplier and period
  const frequencyMap = {
    weekly: { multiplier: 52, label: "weekly" },
    biweekly: { multiplier: 26, label: "bi-weekly" },
    monthly: { multiplier: 12, label: "monthly" },
    quarterly: { multiplier: 4, label: "quarterly" },
  };

  const frequency = frequencyMap[paymentFrequency as keyof typeof frequencyMap];
  const periodsPerYear = frequency.multiplier;
  const numPayments = loanTerm * periodsPerYear;
  const periodicRate = interestRate / 100 / periodsPerYear;

  let payment = 0;
  if (periodicRate === 0) {
    payment = loanAmount / numPayments;
  } else {
    payment =
      (loanAmount * (periodicRate * Math.pow(1 + periodicRate, numPayments))) /
      (Math.pow(1 + periodicRate, numPayments) - 1);
  }

  const totalPaid = payment * numPayments;
  const totalInterest = totalPaid - loanAmount;

  // Generate amortization data for chart
  let remainingBalance = loanAmount;
  const chartData = [];
  const pointsToShow = Math.min(120, numPayments); // Show up to 120 points
  const interval = Math.max(1, Math.floor(numPayments / pointsToShow));

  for (let i = 0; i < numPayments; i++) {
    const interestPayment = remainingBalance * periodicRate;
    const principalPayment = payment - interestPayment;
    remainingBalance -= principalPayment;
    if (remainingBalance < 0) remainingBalance = 0;

    if (i % interval === 0 || i === numPayments - 1) {
      chartData.push({
        period: i + 1,
        balance: Math.max(0, remainingBalance),
      });
    }
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={`${frequency.label.charAt(0).toUpperCase() + frequency.label.slice(1)} Payment`}
        value={formatCurrency(payment)}
        highlight
      />
      <ResultCard label="Total Interest Paid" value={formatCurrency(totalInterest)} />
      <ResultCard label="Total Amount Paid" value={formatCurrency(totalPaid)} />
      <ResultCard label="Loan Amount" value={formatCurrency(loanAmount)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Remaining Loan Balance Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" label={{ value: `Payment Number`, position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Area type="monotone" dataKey="balance" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A loan is a sum of money borrowed from a lender that must be repaid with interest over a specified period. Loans are used for various purposes including personal expenses, education, business, or consolidating debt. The key factors that determine your loan costs are the principal (amount borrowed), interest rate, and loan term. Understanding these components helps you make informed borrowing decisions and find the best loan terms available.
      </p>

      <p>
        <strong>Types of Loans:</strong> Personal loans are unsecured (no collateral required) with fixed interest rates and terms. Auto loans are secured by the vehicle and typically have lower rates due to collateral. Student loans have special terms and may offer income-driven repayment options. Payday loans should be avoided as they have extremely high interest rates. Business loans fund entrepreneurial ventures, while home equity loans allow you to borrow against your home's equity. Each type has different requirements, rates, and terms.
      </p>

      <p>
        <strong>APR vs Interest Rate:</strong> The interest rate is the percentage charged on the principal. The Annual Percentage Rate (APR) includes the interest rate plus any other fees or costs, giving you the true cost of borrowing. A 5% APR costs more than a 5% interest rate because the APR includes additional charges. Always compare APR when shopping for loans, as it provides a more complete picture of the total cost. Some loans may have variable rates that change over time, while others have fixed rates that remain constant.
      </p>

      <p>
        <strong>Payment Frequency Impact:</strong> More frequent payments (weekly or bi-weekly) reduce the principal faster and result in less total interest paid compared to less frequent payments. However, payment frequency may not always be an option depending on the lender. Early repayment can significantly reduce your total interest costs, but some loans may have prepayment penalties. Always read the loan agreement carefully to understand all terms, fees, and options for paying down your debt faster.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Loan Calculator"
      description="Calculate loan payments, total interest, and remaining balance over time"
      slug="loan-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="loan-amount"
          label="Loan Amount"
          value={loanAmount}
          onChange={setLoanAmount}
          prefix="$"
          step={5000}
          min={0}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate (APR)"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={0}
          max={30}
        />
        <InputField
          id="loan-term"
          label="Loan Term"
          value={loanTerm}
          onChange={setLoanTerm}
          suffix="years"
          step={0.5}
          min={0.25}
          max={50}
        />
        <SelectField
          id="payment-frequency"
          label="Payment Frequency"
          value={paymentFrequency}
          onChange={setPaymentFrequency}
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "biweekly", label: "Bi-weekly" },
            { value: "monthly", label: "Monthly" },
            { value: "quarterly", label: "Quarterly" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: LoanCalculator,
  slug: "loan-calculator",
  title: "Loan Calculator",
  shortTitle: "Loan",
  description: "Calculate loan payments and total interest for any loan type",
  category: "finance",
  icon: "💳",
  keywords: ["loan", "payment", "interest", "APR", "debt"],
  popular: true,
  faqs: LOAN_FAQS,
  dateModified: "2026-04-09",
});
