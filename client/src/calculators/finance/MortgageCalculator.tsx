import { useState } from "react";
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate mortgage
  const downPaymentAmount = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numPayments;
  } else {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - loanAmount;

  // Generate amortization schedule for chart
  let remainingBalance = loanAmount;
  const amortizationData = [];
  for (let month = 0; month < numPayments; month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;
    if (remainingBalance < 0) remainingBalance = 0;

    if (month % Math.ceil(numPayments / 360) === 0 || month === numPayments - 1) {
      amortizationData.push({
        month: Math.floor(month / 12),
        balance: Math.max(0, remainingBalance),
        principal: month === 0 ? 0 : loanAmount - remainingBalance,
      });
    }
  }

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Monthly Payment" value={formatCurrency(monthlyPayment)} highlight />
      <ResultCard label="Total Interest" value={formatCurrency(totalInterest)} />
      <ResultCard label="Total Amount Paid" value={formatCurrency(totalPaid)} highlight />
      <ResultCard label="Loan Amount" value={formatCurrency(loanAmount)} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Principal vs Interest</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value, percent }) => `${name}: ${formatCurrency(value)} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="#3b82f6" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Loan Balance Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={amortizationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Area type="monotone" dataKey="balance" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A mortgage is a long-term loan used to purchase real estate, typically a home. The property itself serves as collateral for the loan. Most mortgages are amortized, meaning you make regular monthly payments that include both principal (the original loan amount) and interest. Over time, more of each payment goes toward principal as the loan balance decreases.
      </p>

      <p>
        <strong>Types of Mortgages:</strong> Fixed-rate mortgages have a constant interest rate throughout the loan term, making payments predictable. Adjustable-rate mortgages (ARMs) start with a lower rate that increases after an initial period. Common loan terms are 15 and 30 years, with shorter terms having higher monthly payments but lower total interest, while longer terms spread payments over more months with higher total interest costs.
      </p>

      <p>
        <strong>How Interest Works:</strong> Lenders charge interest on the remaining loan balance. In the early years of your mortgage, most of your payment goes toward interest. The interest rate (APR) is quoted annually but applied monthly. Your down payment (typically 10-20% of the home price) reduces the loan amount and can help you avoid private mortgage insurance (PMI). A larger down payment means lower monthly payments and less total interest paid.
      </p>

      <p>
        <strong>Additional Costs:</strong> Beyond the monthly principal and interest payment, homeowners must consider property taxes, homeowners insurance, HOA fees, and maintenance costs. Many lenders use the debt-to-income ratio (typically 28-36% of gross income for housing costs) to determine how much you can borrow. It's important to get pre-approved and shop around with different lenders to compare rates and terms.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mortgage Calculator"
      description="Calculate monthly mortgage payments, total interest, and create an amortization schedule"
      slug="mortgage-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="home-price"
          label="Home Price"
          value={homePrice}
          onChange={setHomePrice}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="down-payment"
          label="Down Payment"
          value={downPaymentPercent}
          onChange={setDownPaymentPercent}
          suffix="%"
          step={1}
          min={0}
          max={100}
          hint={`${formatCurrency(downPaymentAmount)}`}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
        />
        <SelectField
          id="loan-term"
          label="Loan Term"
          value={loanTerm.toString()}
          onChange={(val) => setLoanTerm(parseInt(val))}
          options={[
            { value: "10", label: "10 years" },
            { value: "15", label: "15 years" },
            { value: "20", label: "20 years" },
            { value: "30", label: "30 years" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MortgageCalculator,
  slug: "mortgage-calculator",
  title: "Mortgage Calculator",
  shortTitle: "Mortgage",
  description: "Calculate monthly mortgage payments, total interest, and amortization schedule",
  category: "finance",
  icon: "🏠",
  keywords: ["mortgage", "home loan", "monthly payment", "amortization"],
  popular: true,
});
