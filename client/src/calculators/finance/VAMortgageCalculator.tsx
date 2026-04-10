import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

registerCalculator({
  component: VAMortgageCalculator,
  slug: "va-mortgage-calculator",
  title: "VA Mortgage Calculator",
  shortTitle: "VA Loan",
  description: "Calculate VA loan payments and compare funding fees across service levels",
  category: "finance",
  icon: "🇺🇸",
  keywords: ["VA loan", "mortgage", "veteran", "military", "funding fee", "no down payment"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "Who is eligible for a VA loan?",
      answer: "VA loans are available to veterans with honorable discharge, active-duty service members (with 90+ days service), National Guard/Reserve with 6+ years service, and surviving spouses of veterans who died in service or from service-connected disability. You must obtain a Certificate of Eligibility (CoE) from the VA. Service members can apply before discharge. Surviving spouses of service-connected deaths can use the benefit once for a home purchase.",
    },
    {
      question: "What is a VA funding fee and can it be waived?",
      answer: "The VA funding fee replaces mortgage insurance and funds the VA loan program. First-time users pay 2.15%, subsequent users pay 3.3%. Disabled veterans with service-connected disabilities (any percentage) are <strong>exempt from funding fees entirely</strong>, making VA loans essentially free. Down payments of 5%+ reduce the fee: 5-10% down is 1.9%, 10%+ is 1.6%. The funding fee is typically rolled into the loan and paid over 30 years.",
    },
    {
      question: "Can I use my VA benefit more than once?",
      answer: "<strong>Yes, VA benefits can be used multiple times.</strong> Each time you buy a home with a VA loan, you use a portion of your {formatCurrency(625000)} entitlement. If you sell and pay off a prior VA loan, your full entitlement is restored for another purchase. This allows veterans to buy multiple properties. Some veterans use VA loans to buy investment properties, building real estate wealth. However, you cannot have two active VA loans simultaneously (except in limited circumstances).",
    },
    {
      question: "What is VA entitlement and how much can I borrow?",
      answer: "VA entitlement is your maximum borrowing power under the VA program, currently {formatCurrency(625000)} (2026, adjusts annually). Your lender may lend up to 100% of the home value without down payment, as long as the VA appraisal supports the price. No down payment is required. If the home appraises lower than the purchase price, you must make up the difference (or negotiate). You are responsible for the full loan amount; the VA guarantee only protects the lender if you default.",
    },
    {
      question: "Why are VA loans better than FHA or conventional loans?",
      answer: "<strong>VA advantages:</strong> 0% down (vs. 3.5% FHA, 10-20% conventional), no mortgage insurance (vs. 0.55% FHA MIP or 0.3-1.2% conventional PMI), often lower rates (lenders take less risk with VA guarantee), can use multiple times. Disabled veterans pay no funding fee at all. Over 30 years, a VA loan can save {greater than}{formatCurrency(100000)} vs. conventional due to eliminating down payment, PMI, and often having lower rates. VA loans are generally the best option for eligible veterans.",
    },
  ],
});
