import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { AUTO_LOAN_FAQS } from "@/lib/faq-finance-loans";

export default function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState("60");

  const months = parseInt(loanTerm);
  const principal = Math.max(0, vehiclePrice - downPayment - tradeInValue);
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment =
    principal === 0
      ? 0
      : (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1);
  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - principal;

  // Generate amortization data for chart
  const chartData = [];
  let remainingBalance = principal;
  let cumulativePrincipal = 0;
  let cumulativeInterest = 0;

  for (let i = 1; i <= months; i++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance = Math.max(0, remainingBalance - principalPayment);
    cumulativePrincipal += principalPayment;
    cumulativeInterest += interestPayment;

    if (i % Math.ceil(months / 12) === 0 || i === 1 || i === months) {
      chartData.push({
        month: i,
        principal: cumulativePrincipal,
        interest: cumulativeInterest,
      });
    }
  }

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
      />
      <ResultCard label="Loan Amount" value={formatCurrency(principal)} />
      <ResultCard label="Total Amount Paid" value={formatCurrency(totalPaid)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Principal vs Interest Over Time
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Months", position: "insideBottomRight", offset: -10 }}
          />
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="principal" stackId="a" fill="#3b82f6" name="Principal" />
          <Bar dataKey="interest" stackId="a" fill="#ef4444" name="Interest" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Auto Loans
      </h3>
      <p>
        An auto loan is a type of secured loan where the vehicle serves as
        collateral. The monthly payment depends on three key factors: the loan
        amount (vehicle price minus down payment and trade-in), the interest
        rate, and the loan term. Even small differences in interest rates can
        significantly impact your total cost over the life of the loan. For
        example, a 1% difference on a $20,000 loan over 60 months can cost you
        over $1,000 in additional interest.
      </p>
      <p>
        Interest rates vary based on your credit score, the vehicle type (new
        vs. used), and current market conditions. New car loans typically have
        lower interest rates (averaging 4-6%) compared to used car loans
        (averaging 6-9%), as new vehicles are less risky for lenders. Building
        good credit before applying can help you secure better rates and save
        thousands over the loan term.
      </p>
      <p>
        When planning your down payment, aim for at least 10-20% of the
        vehicle's purchase price. A larger down payment reduces your loan
        amount, which lowers your monthly payment and total interest. It also
        protects you from being "underwater" on the loan (owing more than the
        car's value), which can happen quickly due to depreciation.
      </p>
      <p>
        Consider purchasing GAP insurance (Guaranteed Asset Protection) if you
        make a smaller down payment. GAP insurance covers the difference between
        what you owe on the loan and what the vehicle is worth if it's totaled,
        protecting you from financial loss. This is especially important for
        vehicles that depreciate quickly, like luxury cars.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Auto Loan Calculator"
      description="Calculate your monthly car payment and total loan cost"
      slug="auto-loan"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="vehicle-price"
          label="Vehicle Price"
          value={vehiclePrice}
          onChange={setVehiclePrice}
          prefix="$"
          min={0}
          step={100}
        />
        <InputField
          id="down-payment"
          label="Down Payment"
          value={downPayment}
          onChange={setDownPayment}
          prefix="$"
          min={0}
          step={100}
        />
        <InputField
          id="trade-in"
          label="Trade-In Value"
          value={tradeInValue}
          onChange={setTradeInValue}
          prefix="$"
          min={0}
          step={100}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate (APR)"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          min={0}
          max={20}
          step={0.1}
        />
        <SelectField
          id="loan-term"
          label="Loan Term"
          value={loanTerm}
          onChange={setLoanTerm}
          options={[
            { value: "36", label: "36 months (3 years)" },
            { value: "48", label: "48 months (4 years)" },
            { value: "60", label: "60 months (5 years)" },
            { value: "72", label: "72 months (6 years)" },
            { value: "84", label: "84 months (7 years)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "auto-loan",
  title: "Auto Loan Calculator",
  shortTitle: "Auto Loan",
  description: "Calculate monthly payments, total interest, and loan costs",
  category: "finance",
  icon: "🚗",
  keywords: ["auto", "car", "loan", "payment", "vehicle"],
  popular: true,
  component: AutoLoanCalculator,
  faqs: AUTO_LOAN_FAQS,
});
