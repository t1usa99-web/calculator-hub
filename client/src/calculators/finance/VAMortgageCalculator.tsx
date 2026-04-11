import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function VAMortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);
  const [loanTermMonths, setLoanTermMonths] = useState(360);
  const [interestRate, setInterestRate] = useState(6.5);
  const [fundingFeeTier, setFundingFeeTier] = useState("first-time");

  const fundingFeeOptions = [
    { value: "first-time", label: "First-Time Use (2.15%)" },
    { value: "subsequent", label: "Subsequent Use (3.3%)" },
    { value: "disabled", label: "Disabled Veteran (0%)" },
  ];

  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const baseLoadAmount = homePrice - downPaymentAmount;

  // Funding fee calculation
  let fundingFeeRate = 0;
  if (fundingFeeTier === "first-time") fundingFeeRate = 0.0215;
  else if (fundingFeeTier === "subsequent") fundingFeeRate = 0.033;
  else fundingFeeRate = 0; // Disabled veteran

  // Funding fee can be reduced by down payment {greater than} 5%
  let adjustedFundingFeeRate = fundingFeeRate;
  if (downPaymentPercent >= 5 && downPaymentPercent < 10) {
    adjustedFundingFeeRate = fundingFeeRate * 0.9; // 10% reduction
  } else if (downPaymentPercent >= 10) {
    adjustedFundingFeeRate = fundingFeeRate * 0.75; // 25% reduction
  }

  const fundingFeeAmount = baseLoadAmount * adjustedFundingFeeRate;
  const totalLoanAmount = baseLoadAmount + fundingFeeAmount;

  // Monthly Payment Calculation (VA loans have no mortgage insurance)
  const monthlyRate = interestRate / 100 / 12;
  let monthlyPayment = 0;

  if (monthlyRate === 0) {
    monthlyPayment = totalLoanAmount / loanTermMonths;
  } else {
    monthlyPayment =
      (totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  }

  // Generate amortization data
  const amortizationData = [];
  let remainingBalance = totalLoanAmount;

  for (let month = 1; month <= Math.min(loanTermMonths, 360); month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance = Math.max(0, remainingBalance - principalPayment);

    amortizationData.push({
      month,
      principal: principalPayment,
      interest: interestPayment,
    });
  }

  const totalPayments = monthlyPayment * loanTermMonths;
  const totalInterest = totalPayments - totalLoanAmount;
  const totalCost = homePrice + totalInterest;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Home Price"
        value={formatCurrency(homePrice)}
      />
      <ResultCard
        label="Down Payment"
        value={formatCurrency(downPaymentAmount)}
        subtext={`${downPaymentPercent}% (VA allows 0%)`}
      />
      <ResultCard
        label="Funding Fee"
        value={formatCurrency(fundingFeeAmount)}
        subtext={`${formatNumber(adjustedFundingFeeRate * 100, 2)}% of loan`}
      />
      <ResultCard
        label="Total Loan Amount"
        value={formatCurrency(totalLoanAmount)}
        subtext="Including funding fee"
      />
      <ResultCard
        label="Monthly Payment (No MIP)"
        value={formatCurrency(monthlyPayment)}
        highlight
        subtext="Principal + interest only"
      />
      <ResultCard
        label="Total Interest Paid"
        value={formatCurrency(totalInterest)}
        subtext="Over loan term"
      />
      <ResultCard
        label="Entitlement Available"
        value={formatCurrency(625000)}
        subtext="VA loan guarantee amount"
      />
      <ResultCard
        label="Comparison: FHA + MIP"
        value={`Save ~${formatCurrency((totalLoanAmount * 0.005 * (loanTermMonths / 12)))}`}
        subtext="No mortgage insurance with VA"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">First 60 Months: Payment Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={amortizationData.filter((_, i) => i < 60 && i % 12 === 0)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -5 }} />
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
      <p>
        A VA loan (Veterans Affairs loan) is a mortgage benefit for eligible military service members, veterans, and surviving spouses. VA loans offer significant advantages: no down payment required, no mortgage insurance, and often lower interest rates than conventional loans. The VA guarantees a portion of the loan, allowing lenders to offer more favorable terms. This makes VA loans an excellent wealth-building tool for veterans—you can purchase a home with {'<'} 1% out-of-pocket costs compared to 10-20% for conventional loans.
      </p>

      <p>
        <strong>VA Funding Fee:</strong> VA loans charge a one-time funding fee instead of mortgage insurance. First-time users pay 2.15%, subsequent users pay 3.3%, and disabled veterans pay 0%. On a {formatCurrency(400000)} loan, first-time funding fee is {formatCurrency(8600)}, typically rolled into the loan. Down payments of 5%+ reduce the fee: 5-10% down gets 1.9% fee, 10%+ gets 1.6%. Disabled veterans (service-connected) are exempt, making VA loans free of insurance for this group. The funding fee funds the entire VA loan program, not insurance claims.
      </p>

      <p>
        <strong>No Mortgage Insurance Premium (MIP):</strong> Unlike FHA loans (0.55% annual MIP) or conventional loans (0.3-1.2% annual PMI), VA loans have <strong>zero mortgage insurance</strong>. This saves {formatCurrency(2000)}-{formatCurrency(5000)}/year on a typical home purchase. Over 30 years, eliminating mortgage insurance can save {'>='}{formatCurrency(50000)} in monthly payments. This is one of VA loans' greatest advantages—the government guarantee replaces insurance, benefiting the veteran.
      </p>

      <p>
        <strong>VA Entitlement and Reuse:</strong> Your VA loan benefit provides up to {formatCurrency(625000)} in guaranteeable loan amount (as of 2026, adjusting annually). You can use your VA benefit multiple times, once per property (if you sell and pay off a prior VA loan). This means you can buy multiple properties using the VA benefit, building wealth through real estate. After using your benefit once, you restore full entitlement by either paying off the first loan or by having the VA formally release the guarantee. Many veterans use VA loans sequentially to build investment properties.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="VA Mortgage Calculator"
      description="Calculate VA loan payments with funding fees and compare to conventional/FHA options"
      slug="va-mortgage-calculator"
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
          step={25000}
          min={50000}
        />
        <InputField
          id="down-payment-percent"
          label="Down Payment Percentage"
          value={downPaymentPercent}
          onChange={setDownPaymentPercent}
          suffix="%"
          step={1}
          min={0}
          max={50}
          hint="VA allows 0% down; higher {greater than} 5% reduces funding fee"
        />
        <SelectField
          id="funding-fee-tier"
          label="Funding Fee Tier"
          value={fundingFeeTier}
          onChange={setFundingFeeTier}
          options={fundingFeeOptions}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={2}
          max={12}
          hint="VA loans often have lower rates"
        />
        <InputField
          id="loan-term"
          label="Loan Term"
          value={loanTermMonths / 12}
          onChange={(value) => setLoanTermMonths(value * 12)}
          suffix="years"
          step={1}
          min={5}
          max={40}
        />
      </div>
    </CalculatorLayout>
  );
}
