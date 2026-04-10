import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { BUSINESS_LOAN_FAQS } from "@/lib/faq-finance-loans";

export default function BusinessLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [originationFeePercent, setOriginationFeePercent] = useState(3);

  // Calculate origination fee
  const originationFee = loanAmount * (originationFeePercent / 100);
  const netProceeds = loanAmount - originationFee;
  const totalBorrow = loanAmount; // The borrower needs to borrow enough to cover the fee

  // Calculate monthly payment
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

  const totalInterest = monthlyPayment * numPayments - loanAmount;
  const totalCost = monthlyPayment * numPayments + originationFee;

  // Calculate effective APR (including origination fee)
  // This is more complex; we'll approximate it
  // Simple approach: spread the fee over the loan term
  const adjustedMonthlyPayment = (totalCost / numPayments);
  const effectiveAPRSimple = ((totalCost / loanAmount) / loanTerm) * 100;

  // Generate amortization schedule
  let remainingBalance = loanAmount;
  const amortizationData = [];
  for (let month = 0; month < numPayments; month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;
    if (remainingBalance < 0) remainingBalance = 0;

    if (month % Math.ceil(numPayments / 60) === 0 || month === numPayments - 1) {
      amortizationData.push({
        month: Math.floor(month / 12),
        interest: interestPayment,
        principal: principalPayment,
        balance: Math.max(0, remainingBalance),
      });
    }
  }

  // Chart data for comparison
  const costBreakdown = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
    { name: "Origination Fee", value: originationFee },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Loan Amount" value={formatCurrency(loanAmount)} />
      <ResultCard label="Monthly Payment" value={formatCurrency(monthlyPayment)} highlight />
      <ResultCard label="Total Interest" value={formatCurrency(totalInterest)} />
      <ResultCard label="Origination Fee" value={formatCurrency(originationFee)} />
      <ResultCard label="Total Cost" value={formatCurrency(totalCost)} highlight />
      <ResultCard label="Effective APR (Simple)" value={formatPercent(effectiveAPRSimple / 100)} />
      <ResultCard label="Net Proceeds" value={formatCurrency(netProceeds)} />
      <ResultCard label="Loan Term" value={`${loanTerm} years (${numPayments} payments)`} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={costBreakdown}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Bar dataKey="value" fill="#3b82f6">
              <Cell fill="#3b82f6" />
              <Cell fill="#ef4444" />
              <Cell fill="#f59e0b" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Loan Balance Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={amortizationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Business loans are essential financing tools for small businesses to start, expand, or manage cash flow. Understanding the full cost of borrowing, including interest and fees, helps you make informed decisions about whether a loan makes financial sense for your business.
      </p>

      <p>
        <strong>Types of Business Loans:</strong> SBA loans (Small Business Administration) offer government-backed financing with favorable terms, typically 5-10 year terms and 6-10% interest rates. Traditional bank loans have stricter requirements but competitive rates. Lines of credit provide flexible access to funds. Equipment loans are secured by the equipment being financed. Invoice financing lets you borrow against unpaid invoices. Merchant cash advances provide quick funding but charge very high rates. Online lenders offer fast approval but often at higher interest rates.
      </p>

      <p>
        <strong>Understanding Fees:</strong> Origination fees (typically 1-5%) are charged upfront and cover the lender's administrative costs. SBA loans include a guaranteed fee (2-3% of loan amount). Some lenders charge prepayment penalties if you pay off the loan early, while others don't. Annual fees or maintenance fees may apply. Understanding all fees is crucial for calculating your true borrowing cost.
      </p>

      <p>
        <strong>Effective APR vs Stated Rate:</strong> The interest rate quoted is the stated APR, but when you add origination fees and other costs, your effective cost is higher. The effective APR (or "all-in" cost) is what you actually pay. Always compare loans based on total cost, not just the stated interest rate. A loan with a slightly higher interest rate but no origination fee might be cheaper overall than a loan with a lower rate but higher fees.
      </p>

      <p>
        <strong>Loan Terms and Monthly Payments:</strong> Longer loan terms (10 years vs 5 years) result in lower monthly payments but significantly higher total interest paid. For example, a $100,000 loan at 8% interest costs $6,657 in interest over 5 years but $27,574 over 10 years. Shorter terms mean higher monthly payments but substantial savings on interest. Choose a term your business can comfortably service—missing payments damages credit and can jeopardize your business.
      </p>

      <p>
        <strong>Business Readiness:</strong> Before taking on a business loan, ensure your business plan is solid, you have adequate cash flow to service the debt, and you're not overextending. Many small businesses fail due to taking on too much debt too quickly. Use loan proceeds for growth investments with positive ROI, not to cover operational shortfalls. Have a clear repayment plan and emergency reserves.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Business Loan Calculator"
      description="Calculate monthly payments and total costs for business loans including fees"
      slug="business-loan-calculator"
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
          step={10000}
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
          max={20}
        />
        <SelectField
          id="loan-term"
          label="Loan Term"
          value={loanTerm.toString()}
          onChange={(val) => setLoanTerm(parseInt(val))}
          options={[
            { value: "1", label: "1 year" },
            { value: "2", label: "2 years" },
            { value: "3", label: "3 years" },
            { value: "5", label: "5 years" },
            { value: "7", label: "7 years" },
            { value: "10", label: "10 years" },
          ]}
        />
        <InputField
          id="origination-fee"
          label="Origination Fee"
          value={originationFeePercent}
          onChange={setOriginationFeePercent}
          suffix="%"
          step={0.1}
          min={0}
          max={10}
          hint="Lender's administrative fee, typically 1-5%"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BusinessLoanCalculator,
  slug: "business-loan-calculator",
  title: "Business Loan Calculator",
  shortTitle: "Business Loan",
  description: "Calculate monthly payments and costs for business loans with origination fees",
  category: "finance",
  icon: "💼",
  keywords: ["business loan", "SBA loan", "small business", "loan payment"],
  popular: false,
  faqs: BUSINESS_LOAN_FAQS,
});
