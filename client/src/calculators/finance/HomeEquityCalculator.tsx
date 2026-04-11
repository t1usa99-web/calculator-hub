import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export default function HomeEquityCalculator() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(350000);
  const [desiredLoanAmount, setDesiredLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [drawPeriodYears, setDrawPeriodYears] = useState(10);
  const [repaymentPeriodYears, setRepaymentPeriodYears] = useState(10);

  // Calculate equity
  const homeEquity = homeValue - mortgageBalance;
  const equityPercent = (homeEquity / homeValue) * 100;

  // LTV Ratio
  const ltvRatio = (mortgageBalance / homeValue) * 100;

  // Maximum typically available (80% LTV - current mortgage)
  const maxAvailableEquity = homeValue * 0.8 - mortgageBalance;

  // HELOC vs HELOAN comparison
  const drawPeriodMonths = drawPeriodYears * 12;
  const repaymentPeriodMonths = repaymentPeriodYears * 12;
  const monthlyRate = interestRate / 100 / 12;

  // During draw period - interest only
  const monthlyInterestOnly = (desiredLoanAmount * monthlyRate);

  // After draw period - principal + interest repayment
  const remainingMonths = repaymentPeriodMonths;
  let monthlyFullPayment = 0;
  if (monthlyRate === 0) {
    monthlyFullPayment = desiredLoanAmount / remainingMonths;
  } else {
    monthlyFullPayment =
      (desiredLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, remainingMonths))) /
      (Math.pow(1 + monthlyRate, remainingMonths) - 1);
  }

  const drawPeriodData = [];
  let balance = 0;
  for (let month = 1; month <= Math.min(drawPeriodMonths, 120); month++) {
    balance += (desiredLoanAmount / drawPeriodMonths);
    if (month % Math.max(1, Math.floor(drawPeriodMonths / 10)) === 0) {
      drawPeriodData.push({
        month,
        balance: balance,
        monthlyPayment: balance * monthlyRate,
      });
    }
  }

  const totalInterestDraw = monthlyInterestOnly * drawPeriodMonths;
  const totalInterestRepayment = monthlyFullPayment * repaymentPeriodMonths - desiredLoanAmount;
  const totalInterestCost = totalInterestDraw + totalInterestRepayment;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Home Value"
        value={formatCurrency(homeValue)}
      />
      <ResultCard
        label="Current Mortgage Balance"
        value={formatCurrency(mortgageBalance)}
      />
      <ResultCard
        label="Home Equity"
        value={formatCurrency(homeEquity)}
        highlight
        subtext={`${formatNumber(equityPercent, 1)}% of home value`}
      />
      <ResultCard
        label="Loan-to-Value (LTV) Ratio"
        value={`${formatNumber(ltvRatio, 1)}%`}
        subtext="Lower is better (80% max typical)"
      />
      <ResultCard
        label="Maximum Available to Borrow"
        value={formatCurrency(Math.max(0, maxAvailableEquity))}
        subtext="At 80% LTV"
      />
      <ResultCard
        label="Your Desired Loan Amount"
        value={formatCurrency(desiredLoanAmount)}
      />
      <ResultCard
        label="Monthly Payment (Draw Period)"
        value={formatCurrency(monthlyInterestOnly)}
        subtext={`Interest-only for ${drawPeriodYears} years`}
      />
      <ResultCard
        label="Monthly Payment (Repayment Period)"
        value={formatCurrency(monthlyFullPayment)}
        subtext={`Principal + interest for ${repaymentPeriodYears} years`}
      />
      <ResultCard
        label="Total Interest Cost"
        value={formatCurrency(totalInterestCost)}
        subtext="Over entire term"
      />
      <ResultCard
        label="Total Amount Repaid"
        value={formatCurrency(desiredLoanAmount + totalInterestCost)}
        subtext="Principal + interest"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Balance and Monthly Payment During Draw Period</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={drawPeriodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="balance" fill="#3b82f6" name="Outstanding Balance" />
          <Bar dataKey="monthlyPayment" fill="#ef4444" name="Monthly Interest" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A home equity loan or HELOC (Home Equity Line of Credit) allows homeowners to borrow against the equity they've built in their home. Home equity is the difference between your home's current value and the mortgage balance owed. If your home is worth {formatCurrency(500000)} and you owe {formatCurrency(350000)}, you have {formatCurrency(150000)} in equity. Lenders typically allow you to borrow up to 80% of your home's value minus your mortgage balance, called the "80% LTV rule." Home equity borrowing can finance renovations, consolidate debt, or fund investments, often at lower rates than unsecured personal loans or credit cards.
      </p>

      <p>
        <strong>Home Equity Loan vs. HELOC:</strong> A home equity loan is a lump-sum, fixed-rate borrowing: you receive {formatCurrency(50000)} upfront and repay over a set term (typically 5-15 years) with fixed monthly payments. A HELOC is a line of credit like a credit card: you can draw funds as needed during the "draw period" (typically 5-10 years), pay interest-only on drawn amounts, then repay principal + interest during the "repayment period" (typically 10-20 years). HELOCs are flexible; home equity loans are simpler for those who need a specific amount upfront.
      </p>

      <p>
        <strong>Interest Rate and Tax Deductibility:</strong> Home equity rates are typically 0.5-2% above mortgage rates (currently 8-10%), higher than mortgages due to second lien position. However, interest may be tax-deductible if funds are used for home improvements (not consumption). Consult a tax professional about deductibility in your situation. The main advantage is lower rates than unsecured debt: a {formatCurrency(50000)} home equity loan at 8.5% costs {formatCurrency(21000)} in interest over 10 years, vs. {formatCurrency(41000)} for a credit card at 20% APR (same {formatCurrency(50000)}).
      </p>

      <p>
        <strong>Risk: Your Home Is Collateral:</strong> The critical risk is that your home secures the loan. If you cannot repay, the lender can foreclose and take your home. This is why rates are lower—the lender's risk is lower. Before taking a HELOC or home equity loan, ensure you can afford payments even if interest rates rise (HELOCs often have variable rates). Use home equity strategically: for home improvements that increase value, debt consolidation, or investments expected to outpace borrowing costs. Avoid using home equity for consumption (vacations, cars) that doesn't build long-term wealth.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Home Equity Calculator"
      description="Calculate available home equity and compare loan vs. HELOC payment options"
      slug="home-equity-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="home-value"
          label="Current Home Value"
          value={homeValue}
          onChange={setHomeValue}
          prefix="$"
          step={50000}
          min={100000}
        />
        <InputField
          id="mortgage-balance"
          label="Current Mortgage Balance"
          value={mortgageBalance}
          onChange={setMortgageBalance}
          prefix="$"
          step={25000}
          min={0}
        />
        <InputField
          id="desired-loan"
          label="Desired Loan Amount"
          value={desiredLoanAmount}
          onChange={setDesiredLoanAmount}
          prefix="$"
          step={10000}
          min={5000}
          hint="Amount you want to borrow"
        />
        <InputField
          id="interest-rate"
          label="Home Equity Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.25}
          min={2}
          max={15}
          hint="Typically 0.5-2% above mortgage rate"
        />
        <InputField
          id="draw-period"
          label="Draw Period (HELOC)"
          value={drawPeriodYears}
          onChange={setDrawPeriodYears}
          suffix="years"
          step={1}
          min={1}
          max={20}
          hint="Interest-only phase for HELOC"
        />
        <InputField
          id="repayment-period"
          label="Repayment Period"
          value={repaymentPeriodYears}
          onChange={setRepaymentPeriodYears}
          suffix="years"
          step={1}
          min={1}
          max={25}
          hint="Principal + interest phase"
        />
      </div>
    </CalculatorLayout>
  );
}
