import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTermMonths, setLoanTermMonths] = useState(60);
  const [originationFeePercent, setOriginationFeePercent] = useState(2.5);
  const [termType, setTermType] = useState("months");

  const termTypeOptions = [
    { value: "months", label: "Months" },
    { value: "years", label: "Years" },
  ];

  // Convert years to months if needed
  const termMonths = termType === "years" ? loanTermMonths * 12 : loanTermMonths;

  // Calculate origination fee
  const originationFeeAmount = (loanAmount * originationFeePercent) / 100;
  const netLoanAmount = loanAmount - originationFeeAmount;

  // Calculate monthly payment
  const monthlyRate = interestRate / 100 / 12;
  let monthlyPayment = 0;

  if (monthlyRate === 0) {
    monthlyPayment = netLoanAmount / termMonths;
  } else {
    monthlyPayment =
      (netLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
  }

  const totalPayments = monthlyPayment * termMonths;
  const totalInterest = totalPayments - netLoanAmount;
  const totalCost = loanAmount + totalInterest; // Principal + fees + interest

  // Estimate APR (includes fees)
  let aprRate = interestRate / 100;

  for (let i = 0; i < 10; i++) {
    const monthlyAPRRate = aprRate / 12;
    const pv =
      monthlyAPRRate === 0
        ? monthlyPayment * termMonths
        : (monthlyPayment * (Math.pow(1 + monthlyAPRRate, termMonths) - 1)) /
          (monthlyAPRRate * Math.pow(1 + monthlyAPRRate, termMonths));

    if (Math.abs(pv - loanAmount) < 1) break;

    const monthlyAPRRateDelta = aprRate / 12 + 0.0001;
    const pvDelta =
      monthlyAPRRateDelta === 0
        ? monthlyPayment * termMonths
        : (monthlyPayment * (Math.pow(1 + monthlyAPRRateDelta, termMonths) - 1)) /
          (monthlyAPRRateDelta * Math.pow(1 + monthlyAPRRateDelta, termMonths));

    aprRate = aprRate - (pv - loanAmount) / (pvDelta - pv) * 0.0001;
  }

  const aprPercent = aprRate * 100;

  // Generate amortization schedule
  const amortizationData = [];
  let remainingBalance = netLoanAmount;

  for (let month = 1; month <= Math.min(termMonths, 360); month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance = Math.max(0, remainingBalance - principalPayment);

    amortizationData.push({
      month,
      principal: principalPayment,
      interest: interestPayment,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Loan Amount"
        value={formatCurrency(loanAmount)}
      />
      <ResultCard
        label="Origination Fee"
        value={formatCurrency(originationFeeAmount)}
      />
      <ResultCard
        label="Monthly Payment"
        value={formatCurrency(monthlyPayment)}
        highlight={true}
      />
      <ResultCard
        label="Interest Rate"
        value={formatNumber(interestRate, 2) + "%"}
      />
      <ResultCard
        label="APR (with Fees)"
        value={formatNumber(aprPercent, 2) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Total Interest"
        value={formatCurrency(totalInterest)}
      />
      <ResultCard
        label="Total Cost"
        value={formatCurrency(totalCost)}
        highlight={true}
      />
      <ResultCard
        label="Loan Term"
        value={`${termMonths} months (${(termMonths / 12).toFixed(1)} years)`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Amortization Schedule (First {Math.min(termMonths, 360)} Months)
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={amortizationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Month", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis
            label={{ value: "Payment ($)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="principal" stackId="a" fill="#10b981" name="Principal">
            {amortizationData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? "#10b981" : "#06b6d4"}
              />
            ))}
          </Bar>
          <Bar dataKey="interest" stackId="a" fill="#ef4444" name="Interest" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Personal Loans
      </h3>
      <p>
        A personal loan is an unsecured loan borrowed from a bank, credit union, or online lender. Unlike mortgages (secured by a house) or auto loans (secured by a car), personal loans have no collateral, making them riskier for lenders. This risk is reflected in higher interest rates (typically 6-36% depending on credit score and lender). Personal loans are popular for consolidating high-interest credit card debt, financing large purchases, or covering unexpected expenses. Repayment terms typically range from 12 to 84 months. Personal loans are installment loans, meaning you make fixed payments over time, unlike credit cards where you can carry a balance indefinitely.
      </p>
      <p>
        <strong>Origination Fees and APR:</strong> Many personal loans charge an origination fee (1-8% of loan amount, most commonly 2-5%), an upfront cost paid by the lender for processing and underwriting. This fee is usually deducted from the loan disbursement: if you borrow $25,000 with a 2.5% fee, you receive $24,375. However, you still owe the full $25,000, meaning the effective cost is higher. APR (Annual Percentage Rate) includes the stated interest rate plus origination fees and other costs, expressed as an annualized percentage. A personal loan with a 9% stated rate and 2.5% origination fee might have a 10.5-11% APR. Always compare APR when evaluating loan offers, not just the stated rate.
      </p>
      <p>
        <strong>Credit Score Impact on Rates:</strong> Personal loan interest rates vary dramatically by credit score. Excellent credit (740+) qualifies for 6-12% APR, good credit (670-739) qualifies for 12-20% APR, fair credit (580-669) qualifies for 18-36% APR, and poor credit (below 580) sees 25-36%+ APR. A $25,000 personal loan over 5 years at 8% costs $2,855 in interest, while the same loan at 25% costs $10,075 — a difference of $7,220. Improving credit score before applying for a personal loan can save thousands. Always check your credit score (free at annualcreditreport.com) before applying.
      </p>
      <p>
        <strong>Personal Loan vs. Credit Card:</strong> Personal loans and credit cards serve different purposes. Credit cards offer flexibility (borrow only what you use, variable repayment) but charge higher interest (15-25% average). Personal loans offer fixed payments and lower interest rates (6-36% depending on credit). Personal loans are better for large expenses or debt consolidation (consolidating $10,000 in credit card debt at 20% APR into a personal loan at 12% APR saves significantly). Credit cards work better for small purchases and rewards. Never use a personal loan for credit card convenience unless consolidating; paying off the personal loan as scheduled is critical because missing payments damages credit severely.
      </p>
      <p>
        <strong>Debt Consolidation Strategy:</strong> Personal loans are excellent tools for consolidating high-interest credit card debt. If you have $10,000 across three credit cards at 19% APR and consolidate into a personal loan at 12% APR for 5 years, you save roughly $2,500 in interest and simplify your finances (one payment instead of three). However, after consolidation, close or freeze the credit cards to avoid running them back up and doubling your debt. Some people consolidate and then re-borrow on credit cards, ending up with more total debt. The goal is to consolidate high-interest debt into lower-rate installment loans and pay them down systematically.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Personal Loan Calculator"
      description="Calculate personal loan payments, interest, and APR with origination fees"
      slug="personal-loan-calculator"
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
          min={500}
          step={500}
        />

        <InputField
          id="interest-rate"
          label="Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          min={0}
          max={50}
          step={0.1}
        />

        <InputField
          id="loan-term"
          label="Loan Term"
          value={loanTermMonths}
          onChange={setLoanTermMonths}
          suffix={termType === "years" ? "years" : "months"}
          min={termType === "years" ? 1 : 12}
          max={termType === "years" ? 7 : 84}
          step={termType === "years" ? 1 : 12}
        />

        <SelectField
          id="term-type"
          label="Term Type"
          value={termType}
          onChange={setTermType}
          options={termTypeOptions}
        />

        <InputField
          id="origination-fee"
          label="Origination Fee"
          value={originationFeePercent}
          onChange={setOriginationFeePercent}
          suffix="%"
          min={0}
          max={10}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}
