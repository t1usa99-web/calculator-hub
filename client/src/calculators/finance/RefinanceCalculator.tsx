import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(300000);
  const [currentRate, setCurrentRate] = useState(6.5);
  const [currentRemainingTerm, setCurrentRemainingTerm] = useState(25);
  const [newRate, setNewRate] = useState(5.5);
  const [newTerm, setNewTerm] = useState(20);
  const [closingCosts, setClosingCosts] = useState(5000);

  // Current mortgage calculation
  const currentMonthlyRate = currentRate / 100 / 12;
  const currentNumPayments = currentRemainingTerm * 12;
  let currentMonthlyPayment = 0;
  if (currentMonthlyRate === 0) {
    currentMonthlyPayment = currentBalance / currentNumPayments;
  } else {
    currentMonthlyPayment =
      (currentBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentNumPayments))) /
      (Math.pow(1 + currentMonthlyRate, currentNumPayments) - 1);
  }
  const currentTotalCost = currentMonthlyPayment * currentNumPayments;

  // New mortgage calculation
  const newMonthlyRate = newRate / 100 / 12;
  const newNumPayments = newTerm * 12;
  let newMonthlyPayment = 0;
  if (newMonthlyRate === 0) {
    newMonthlyPayment = currentBalance / newNumPayments;
  } else {
    newMonthlyPayment =
      (currentBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newNumPayments))) /
      (Math.pow(1 + newMonthlyRate, newNumPayments) - 1);
  }
  const newTotalCost = newMonthlyPayment * newNumPayments + closingCosts;

  // Calculate savings
  const monthlyPaymentDifference = currentMonthlyPayment - newMonthlyPayment;
  const totalPaymentDifference = currentTotalCost - newTotalCost;
  const breakEvenMonths = closingCosts > 0 ? Math.ceil(closingCosts / monthlyPaymentDifference) : 0;

  // Generate comparison chart data
  const comparisonData = [];
  for (let month = 0; month <= Math.max(currentNumPayments, newNumPayments); month++) {
    let currentCumulativeCost = currentMonthlyPayment * month;
    let newCumulativeCost = newMonthlyPayment * month + (month > 0 ? closingCosts : 0);

    comparisonData.push({
      month,
      current: currentCumulativeCost,
      new: newCumulativeCost,
    });
  }

  // Limit chart data to first 5 years for visibility
  const chartData = comparisonData.filter((_, idx) => idx % 12 === 0).slice(0, 61);

  const barData = [
    { name: "Current", value: currentMonthlyPayment },
    { name: "After Refinance", value: newMonthlyPayment },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Current Monthly Payment" value={formatCurrency(currentMonthlyPayment)} />
      <ResultCard label="New Monthly Payment" value={formatCurrency(newMonthlyPayment)} highlight />
      <ResultCard label="Monthly Savings" value={formatCurrency(monthlyPaymentDifference)} highlight={monthlyPaymentDifference > 0} />
      <ResultCard label="Total Savings (over loan life)" value={formatCurrency(totalPaymentDifference)} highlight={totalPaymentDifference > 0} />
      <ResultCard label="Closing Costs" value={formatCurrency(closingCosts)} />
      <ResultCard label="Breakeven Months" value={breakEvenMonths > 0 ? `${breakEvenMonths} months` : "Breakeven immediately"} highlight />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Monthly Payment Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Bar dataKey="value" fill="#3b82f6">
              <Cell fill="#3b82f6" />
              <Cell fill="#10b981" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Cumulative Cost Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: "Months", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Cumulative Cost ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="current" stroke="#ef4444" name="Keep Current" strokeWidth={2} />
            <Line type="monotone" dataKey="new" stroke="#10b981" name="Refinance" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Refinancing is when you replace your current mortgage with a new one, typically to take advantage of lower interest rates or change your loan terms. The main advantage is potentially lower monthly payments and less total interest paid over the life of the loan.
      </p>

      <p>
        <strong>When to Refinance:</strong> The traditional rule is that refinancing makes sense if the new rate is at least 0.5-1% lower than your current rate and you plan to stay in the home long enough to recoup closing costs. The breakeven point is when your monthly savings equal your closing costs. If you're planning to move or refinance again soon, a lower breakeven period is critical.
      </p>

      <p>
        <strong>Types of Refinances:</strong> A rate-and-term refinance changes your interest rate and/or loan term without borrowing additional money. A cash-out refinance lets you borrow more than you owe and take the difference in cash, but increases your loan amount. An FHA streamline refinance has lower costs for FHA loans. An ARM-to-fixed refinance locks in a fixed rate when your adjustable-rate mortgage is about to increase.
      </p>

      <p>
        <strong>Costs to Consider:</strong> Closing costs typically range from 2-5% of the loan amount and include appraisals, underwriting, origination fees, and title work. Some lenders offer no-closing-cost refinances where costs are rolled into the loan, increasing your balance and total interest paid. Shorter loan terms (like 15 years) have higher monthly payments but much lower total interest, while longer terms spread payments but increase total interest significantly.
      </p>

      <p>
        <strong>Tax Implications:</strong> Mortgage interest may be tax-deductible if you itemize deductions, but consult a tax professional about your specific situation. Refinancing doesn't change whether interest is deductible, but changing loan terms can affect total deductible interest over time.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Refinance Calculator"
      description="Compare your current mortgage to a refinanced option and calculate breakeven points"
      slug="refinance-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="current-balance"
          label="Current Loan Balance"
          value={currentBalance}
          onChange={setCurrentBalance}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="current-rate"
          label="Current Interest Rate"
          value={currentRate}
          onChange={setCurrentRate}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
        />
        <InputField
          id="current-remaining-term"
          label="Current Remaining Term"
          value={currentRemainingTerm}
          onChange={setCurrentRemainingTerm}
          suffix="years"
          step={1}
          min={0}
          max={40}
        />
        <InputField
          id="new-rate"
          label="New Interest Rate"
          value={newRate}
          onChange={setNewRate}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
        />
        <InputField
          id="new-term"
          label="New Loan Term"
          value={newTerm}
          onChange={setNewTerm}
          suffix="years"
          step={1}
          min={0}
          max={40}
        />
        <InputField
          id="closing-costs"
          label="Closing Costs"
          value={closingCosts}
          onChange={setClosingCosts}
          prefix="$"
          step={500}
          min={0}
        />
      </div>
    </CalculatorLayout>
  );
}
