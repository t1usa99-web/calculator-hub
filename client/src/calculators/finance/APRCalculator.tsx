import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function APRCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [feesAmount, setFeesAmount] = useState(4000);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  // Calculate monthly payment (principal + interest only)
  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numberOfPayments;
  } else {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  // Total interest paid
  const totalInterest = monthlyPayment * numberOfPayments - loanAmount;
  const totalCost = loanAmount + totalInterest + feesAmount;

  // Estimate APR (includes fees spread over loan term)
  // APR = interest rate that equates loan amount to monthly payments
  // Using Newton's method approximation
  const effectiveLoanAmount = loanAmount - feesAmount; // Reduce principal by upfront fees
  let aprRate = interestRate / 100;

  for (let i = 0; i < 10; i++) {
    const monthlyAPRRate = aprRate / 12;
    const pv =
      monthlyAPRRate === 0
        ? monthlyPayment * numberOfPayments
        : (monthlyPayment * (Math.pow(1 + monthlyAPRRate, numberOfPayments) - 1)) /
          (monthlyAPRRate * Math.pow(1 + monthlyAPRRate, numberOfPayments));

    if (Math.abs(pv - effectiveLoanAmount) < 1) break;

    const monthlyAPRRateDelta = aprRate / 12 + 0.0001;
    const pvDelta =
      monthlyAPRRateDelta === 0
        ? monthlyPayment * numberOfPayments
        : (monthlyPayment * (Math.pow(1 + monthlyAPRRateDelta, numberOfPayments) - 1)) /
          (monthlyAPRRateDelta * Math.pow(1 + monthlyAPRRateDelta, numberOfPayments));

    aprRate = aprRate - (pv - effectiveLoanAmount) / (pvDelta - pv) * 0.0001;
  }

  const aprPercent = aprRate * 100;
  const monthlyAPRRate = aprRate / 12;

  // Create comparison data
  const comparisonData = [
    {
      name: "Stated Rate",
      rate: interestRate,
      totalCost: loanAmount + totalInterest,
    },
    {
      name: "APR (with Fees)",
      rate: aprPercent,
      totalCost: totalCost,
    },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Stated Interest Rate"
        value={formatNumber(interestRate, 2) + "%"}
      />
      <ResultCard
        label="APR (with Fees)"
        value={formatNumber(aprPercent, 2) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Monthly Payment"
        value={formatCurrency(monthlyPayment)}
        highlight={true}
      />
      <ResultCard
        label="Total Interest"
        value={formatCurrency(totalInterest)}
      />
      <ResultCard
        label="Closing Costs/Fees"
        value={formatCurrency(feesAmount)}
      />
      <ResultCard
        label="Total Cost (Principal + Interest + Fees)"
        value={formatCurrency(totalCost)}
        highlight={true}
      />
      <ResultCard
        label="Loan Amount"
        value={formatCurrency(loanAmount)}
      />
      <ResultCard
        label="Loan Term"
        value={`${loanTermYears} years (${numberOfPayments} payments)`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Interest Rate vs. APR Comparison
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" label={{ value: "Rate (%)", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Total Cost ($)", angle: 90, position: "insideRight" }} />
          <Tooltip formatter={(value) => {
            if (typeof value === "number" && value > 1000) return formatCurrency(value);
            return formatNumber(value as number, 2) + "%";
          }} />
          <Legend />
          <Bar yAxisId="left" dataKey="rate" fill="#3b82f6" name="Rate (%)">
            {comparisonData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? "#3b82f6" : "#ef4444"} />
            ))}
          </Bar>
          <Bar yAxisId="right" dataKey="totalCost" fill="#10b981" name="Total Cost ($)">
            {comparisonData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? "#10b981" : "#f59e0b"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding APR vs. Interest Rate
      </h3>
      <p>
        APR (Annual Percentage Rate) and the stated interest rate are not the same. The stated interest rate (also called the note rate) is the percentage of interest charged on the loan balance. APR, however, includes the stated interest rate plus other costs of borrowing, such as origination fees, closing costs, and points, expressed as an annualized percentage. For example, a mortgage with a 6.5% stated rate and $4,000 in closing costs might have a 6.75% APR. The APR is always equal to or higher than the stated interest rate.
      </p>
      <p>
        <strong>Why APR Matters:</strong> APR is more important than the stated rate when comparing loans, because it reflects the true cost of borrowing. Two lenders might offer the same stated rate but different closing costs or origination fees. The one with lower closing costs will have a lower APR. For example, Lender A offers 6% with $3,000 fees while Lender B offers 6% with $5,000 fees. Despite identical stated rates, Lender A's APR is lower, making it the better choice. APR helps you make apples-to-apples comparisons and understand the true annual cost of the loan.
      </p>
      <p>
        <strong>Common Loan Fees Included in APR:</strong> Several fees are included in the APR calculation: origination fees (1-2% of loan amount, charged by the lender), underwriting/processing fees, appraisal fees, title insurance, recording fees, and discount points (prepaid interest bought to lower the rate). The Truth in Lending Act (TILA) requires lenders to disclose APR on all loan documents. Some fees, like property taxes or homeowner insurance escrow, are not included in APR because they don't represent the cost of credit.
      </p>
      <p>
        <strong>APR for Different Loan Types:</strong> APR is most important for mortgages and auto loans, where fees are significant. A 30-year mortgage with a 0.5% difference in APR might cost you $50,000-80,000 more over the life of the loan. Credit cards also disclose APR, which reflects the interest rate charged on balances (not origination fees). Payday loans often have APRs exceeding 400%, making them extremely expensive borrowing solutions. Student loans may not fully account for fees in APR if fees are deducted from the disbursement. Always request a Loan Estimate (within 3 days of application for mortgages) to see the APR.
      </p>
      <p>
        <strong>How to Use APR When Shopping for Loans:</strong> When comparing loans, prioritize APR over stated rate. Calculate the total cost of each loan option (principal + interest + fees) over the full term to understand the true expense. Consider your timeline: if you plan to refinance or sell in 5 years, a higher rate with lower fees may be better than a lower rate with high upfront costs. However, for long-term loans (mortgages, student loans), lower APR is nearly always better. Use online calculators to compare scenarios and always request written loan estimates with full APR disclosure before committing.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="APR Calculator"
      description="Calculate APR including fees and compare to stated interest rate"
      slug="apr-calculator"
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
          min={1000}
          step={10000}
        />

        <InputField
          id="interest-rate"
          label="Stated Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          min={0}
          max={20}
          step={0.1}
        />

        <InputField
          id="loan-term-years"
          label="Loan Term"
          value={loanTermYears}
          onChange={setLoanTermYears}
          suffix="years"
          min={1}
          max={50}
          step={1}
        />

        <InputField
          id="fees-amount"
          label="Closing Costs & Fees"
          value={feesAmount}
          onChange={setFeesAmount}
          prefix="$"
          min={0}
          step={100}
        />
      </div>
    </CalculatorLayout>
  );
}
