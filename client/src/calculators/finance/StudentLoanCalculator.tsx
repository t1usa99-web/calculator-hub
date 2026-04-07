import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function StudentLoanCalculator() {
  const [loanBalance, setLoanBalance] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(10);
  const [paymentPlan, setPaymentPlan] = useState("standard");

  // Calculate based on payment plan
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = loanBalance / numPayments;
  } else {
    monthlyPayment =
      (loanBalance * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  // Adjust for payment plan (simplified)
  if (paymentPlan === "graduated") {
    monthlyPayment = monthlyPayment * 0.9; // Graduated starts lower
  }

  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - loanBalance;
  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + numPayments);

  // Generate payoff schedule
  const payoffData = [];
  let balance = loanBalance;
  let totalInterestPaid = 0;

  for (let month = 0; month <= numPayments; month++) {
    if (month % Math.ceil(numPayments / 100) === 0 || month === numPayments) {
      payoffData.push({
        month: Math.floor(month / 12),
        balance: Math.max(0, balance),
        interest: totalInterestPaid,
      });
    }

    if (month < numPayments) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      totalInterestPaid += interestPayment;
      balance -= principalPayment;
      if (balance < 0) balance = 0;
    }
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Monthly Payment" value={formatCurrency(monthlyPayment)} highlight />
      <ResultCard label="Loan Term" value={`${loanTerm} years`} />
      <ResultCard label="Total Interest" value={formatCurrency(totalInterest)} />
      <ResultCard label="Total Amount Paid" value={formatCurrency(totalPaid)} />
      <ResultCard label="Payoff Date" value={payoffDate.toLocaleDateString()} />
      <ResultCard label="Interest per Month" value={formatCurrency(totalInterest / numPayments)} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Loan Balance Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={payoffData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} name="Loan Balance" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Student loans are a significant financial commitment that can take decades to repay. Understanding your repayment options, interest rates, and total cost is crucial for managing this debt effectively. Federal student loans offer more protections and flexible repayment plans than private loans. It's important to understand the difference between subsidized loans (government pays interest while in school) and unsubsidized loans (you pay all interest).
      </p>

      <p>
        <strong>Repayment Plans:</strong> The standard repayment plan requires fixed payments over 10 years. Graduated repayment starts lower and increases over time, helpful if you expect income growth. Income-based repayment (IBR, PAYE, REPAYE) caps payments at a percentage of discretionary income, useful for lower-income borrowers. Extended repayment spreads payments over 25 years with lower monthly costs but higher total interest. Public Service Loan Forgiveness (PSLF) forgives remaining balance after 10 years of on-time payments while working in public service.
      </p>

      <p>
        <strong>Managing Student Debt:</strong> Consider refinancing if you have private loans and a strong credit score, as lower rates can save thousands in interest. Federal loans offer protections like income-driven repayment and forgiveness programs that private loans don't. Paying extra toward principal when possible significantly reduces total interest paid and shortens your payoff timeline. Be cautious about income-based plans—while they lower monthly payments, they extend the loan term and increase total interest unless forgiveness applies.
      </p>

      <p>
        <strong>Strategic Payoff:</strong> Prioritize paying off high-interest private loans first, then federal loans. Consider your overall financial situation—if interest rates are low, investing the money instead of paying extra toward loans might yield better returns. However, paying off debt provides psychological benefits and reduces financial stress. Student loan debt affects your ability to borrow for homes, cars, and other major purchases. As your income grows, increase your payments to reduce the loan term and total interest significantly.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Student Loan Calculator"
      description="Calculate student loan payments, payoff timeline, and total interest"
      slug="student-loan-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="loan-balance"
          label="Loan Balance"
          value={loanBalance}
          onChange={setLoanBalance}
          prefix="$"
          step={5000}
          min={0}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={0}
          max={15}
        />
        <InputField
          id="loan-term"
          label="Loan Term"
          value={loanTerm}
          onChange={setLoanTerm}
          suffix="years"
          step={1}
          min={1}
          max={30}
        />
        <SelectField
          id="payment-plan"
          label="Repayment Plan"
          value={paymentPlan}
          onChange={setPaymentPlan}
          options={[
            { value: "standard", label: "Standard (10 years)" },
            { value: "graduated", label: "Graduated (10-25 years)" },
            { value: "income-based", label: "Income-Based (20-25 years)" },
            { value: "extended", label: "Extended (25 years)" },
          ]}
        />

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
          <p className="font-semibold mb-2">Repayment Summary:</p>
          <p>Monthly Payment: <span className="font-bold">{formatCurrency(monthlyPayment)}</span></p>
          <p>Total Interest: <span className="font-bold">{formatCurrency(totalInterest)}</span></p>
          <p>Total Paid: <span className="font-bold">{formatCurrency(totalPaid)}</span></p>
          <p>Payoff Year: <span className="font-bold">{payoffDate.getFullYear()}</span></p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: StudentLoanCalculator,
  slug: "student-loan-calculator",
  title: "Student Loan Calculator",
  shortTitle: "Student Loans",
  description: "Calculate student loan payments and find your payoff timeline",
  category: "finance",
  icon: "🎓",
  keywords: ["student loans", "loan repayment", "education debt", "interest", "payoff"],
});
