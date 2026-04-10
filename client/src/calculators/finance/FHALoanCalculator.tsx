import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FHALoanCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [loanTermMonths, setLoanTermMonths] = useState(360);
  const [interestRate, setInterestRate] = useState(6.5);

  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const baseLoadAmount = homePrice - downPaymentAmount;

  // FHA Upfront Mortgage Insurance Premium (UFMIP) - 1.75% as of 2026
  const upfrontMIP = baseLoadAmount * 0.0175;

  // Loan amount including upfront MIP
  const totalLoanAmount = baseLoadAmount + upfrontMIP;

  // Monthly Payment Calculation
  const monthlyRate = interestRate / 100 / 12;
  let monthlyPayment = 0;

  if (monthlyRate === 0) {
    monthlyPayment = totalLoanAmount / loanTermMonths;
  } else {
    monthlyPayment =
      (totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  }

  // Annual MIP (Mortgage Insurance Premium) - 0.55% for loans with {'<'} 10% down
  const annualMIPRate = downPaymentPercent < 10 ? 0.0055 : 0.003;
  const annualMIP = totalLoanAmount * annualMIPRate;
  const monthlyMIP = annualMIP / 12;

  // Total Monthly Payment (including MIP)
  const totalMonthlyPayment = monthlyPayment + monthlyMIP;

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
      mip: monthlyMIP,
    });
  }

  const totalPayments = totalMonthlyPayment * loanTermMonths;
  const totalInterest = totalPayments - totalLoanAmount;
  const totalCost = homePrice + totalInterest + annualMIP * (loanTermMonths / 12);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Home Price"
        value={formatCurrency(homePrice)}
      />
      <ResultCard
        label="Down Payment"
        value={formatCurrency(downPaymentAmount)}
        subtext={`${downPaymentPercent}% of home price`}
      />
      <ResultCard
        label="Upfront Mortgage Insurance (UFMIP)"
        value={formatCurrency(upfrontMIP)}
        subtext="1.75% added to loan"
      />
      <ResultCard
        label="Total Loan Amount"
        value={formatCurrency(totalLoanAmount)}
        subtext="Including upfront MIP"
      />
      <ResultCard
        label="Principal + Interest Payment"
        value={formatCurrency(monthlyPayment)}
        subtext="Monthly"
      />
      <ResultCard
        label="Annual MIP Payment"
        value={formatCurrency(monthlyMIP)}
        subtext={`${formatNumber(annualMIPRate * 100, 2)}% monthly of loan`}
      />
      <ResultCard
        label="Total Monthly Payment (with MIP)"
        value={formatCurrency(totalMonthlyPayment)}
        highlight
        subtext={`Principal + Interest + MIP`}
      />
      <ResultCard
        label="Total Interest Paid"
        value={formatCurrency(totalInterest)}
        subtext="Over loan term"
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
          <Bar dataKey="mip" stackId="a" fill="#f59e0b" name="MIP" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        An FHA loan (Federal Housing Administration) is a government-backed mortgage designed to help first-time homebuyers and those with lower credit scores or down payments. The FHA insures the loan, allowing lenders to offer more favorable terms. FHA loans have lower down payment requirements (as low as 3.5%) compared to conventional loans (typically 10-20%), making homeownership more accessible. However, FHA loans include mortgage insurance premiums (MIP) that protect the lender if you default.
      </p>

      <p>
        <strong>Upfront Mortgage Insurance Premium (UFMIP):</strong> FHA loans include an upfront insurance premium of 1.75% added directly to the loan amount. On a {formatCurrency(250000)} home, this adds {formatCurrency(4375)} to what you owe. This is funded by either paying upfront at closing or rolling it into the loan and paying over time. Most borrowers roll it into the loan, increasing monthly payments slightly but preserving cash flow at closing. This premium protects the lender against your default.
      </p>

      <p>
        <strong>Annual Mortgage Insurance Premium (Annual MIP):</strong> FHA loans also charge annual MIP, currently 0.55% for loans with {'<'} 10% down and 0.3% for 10%+ down. This is divided into 12 monthly payments. For a {formatCurrency(300000)} FHA loan, annual MIP is {formatCurrency(1650)}, adding {formatCurrency(137.50)} monthly. MIP can be removed once you build 20% equity (by paying down to 80% LTV), but you must request cancellation. MIP typically continues for the life of the loan if you put down {'<'} 10% initially.
      </p>

      <p>
        <strong>When to Choose FHA:</strong> FHA loans are ideal if you have {'<'} 20% down, credit score between 580-620, or significant debt. FHA's lower down payment and insurance requirements make homeownership possible sooner. However, after saving 20% down for a conventional loan, you'll save on insurance costs. Compare FHA total costs (with MIP) to conventional loan costs to determine the best path. FHA is best for first-time buyers; conventional is better long-term for those with strong credit and down payments.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="FHA Loan Calculator"
      description="Calculate FHA mortgage payments including upfront and annual mortgage insurance"
      slug="fha-loan-calculator"
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
          step={0.5}
          min={3.5}
          max={20}
          hint="FHA minimum is 3.5%"
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
  component: FHALoanCalculator,
  slug: "fha-loan-calculator",
  title: "FHA Loan Calculator",
  shortTitle: "FHA Loan",
  description: "Calculate FHA mortgage payments with upfront and annual mortgage insurance premiums",
  category: "finance",
  icon: "🏠",
  keywords: ["FHA loan", "mortgage", "first-time homebuyer", "MIP", "mortgage insurance", "down payment"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is an FHA loan and who qualifies?",
      answer: "An FHA loan is a government-backed mortgage insured by the Federal Housing Administration, designed for homebuyers with lower credit scores or down payments. You typically need a credit score of 580+, though 620+ gets better rates. Income must be stable and verified. Debt-to-income ratio must be {'<'} 43-50% depending on compensating factors. FHA loans allow down payments as low as 3.5% (vs. 10-20% for conventional), making homeownership accessible to more buyers, especially first-time homebuyers.",
    },
    {
      question: "What is the upfront mortgage insurance premium (UFMIP)?",
      answer: "The upfront MIP is a one-time insurance premium of 1.75% of the base loan amount, added to your total loan. On a {formatCurrency(250000)} loan, UFMIP is {formatCurrency(4375)}. Most borrowers roll this into the loan and pay it over 30 years rather than paying upfront at closing. This premium insures the lender against default. Unlike annual MIP, you cannot remove UFMIP once added.",
    },
    {
      question: "What is annual mortgage insurance premium (Annual MIP) and can it be removed?",
      answer: "<strong>Annual MIP</strong> is 0.55% of the loan for down payments below 10%, or 0.3% above 10%, paid monthly. On a {formatCurrency(300000)} loan with 5% down, annual MIP is {formatCurrency(1650)}, or {formatCurrency(137.50)}/month. You <strong>can remove annual MIP</strong> once you reach 20% equity by paying down the loan or home appreciation. You must request cancellation from your lender. However, if you put down {'<'} 10%, MIP typically continues for the loan's full term unless you refinance to remove it.",
    },
    {
      question: "How does FHA compare to conventional loans?",
      answer: "FHA allows 3.5% down vs. 10-20% for conventional, making it accessible for those without large down payments. FHA requires mortgage insurance (MIP), while conventional loans above 20% down have no insurance. FHA has more lenient credit requirements (580+ vs. 620+). However, FHA total costs (with MIP) can exceed conventional by {'>='} 1% annually. After saving 20% down, conventional loans often cost less over time. FHA is best for first-time buyers; conventional works for those with savings and strong credit.",
    },
    {
      question: "Can I remove FHA mortgage insurance and refinance to conventional?",
      answer: "Yes. Once you reach 20% equity, you can refinance to a conventional loan (without FHA insurance) to save on MIP costs. For example, if your {formatCurrency(300000)} FHA loan is now {formatCurrency(240000)} (20% equity), refinancing to conventional eliminates MIP. However, refinancing has closing costs ({formatCurrency(3000)}-{formatCurrency(9000)}), so calculate breakeven. If you'll stay {greater than} 5 years, refinancing usually saves money; if {'<'} 2 years, closing costs may not justify it.",
    },
  ],
});
