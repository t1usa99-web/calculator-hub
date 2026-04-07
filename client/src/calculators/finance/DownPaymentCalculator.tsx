import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DownPaymentCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [desiredDownPaymentPercent, setDesiredDownPaymentPercent] = useState(20);
  const [currentSavings, setCurrentSavings] = useState(25000);
  const [monthlySavings, setMonthlySavings] = useState(1500);

  // Calculate down payment needed
  const downPaymentNeeded = homePrice * (desiredDownPaymentPercent / 100);
  const amountRemaining = Math.max(0, downPaymentNeeded - currentSavings);
  const monthsToGoal = amountRemaining > 0 ? Math.ceil(amountRemaining / monthlySavings) : 0;

  // Calculate target date
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), today.getMonth() + monthsToGoal, today.getDate());
  const yearsToGoal = (monthsToGoal / 12).toFixed(1);

  // PMI calculation (if down payment less than 20%)
  const pmiNeeded = desiredDownPaymentPercent < 20;
  const estimatedPMIMonthly = pmiNeeded ? (homePrice * 0.005) / 12 : 0; // 0.5% annually as estimate

  // Generate savings progress chart
  const chartData = [];
  for (let month = 0; month <= Math.min(monthsToGoal, 60); month++) {
    const savedAmount = currentSavings + monthlySavings * month;
    chartData.push({
      month,
      saved: Math.min(Math.round(savedAmount), downPaymentNeeded),
      goal: downPaymentNeeded,
    });
  }

  // Additional down payment percentages info
  const pmiCosts = {
    10: { pmi: (homePrice * 0.008) / 12, equity: homePrice * 0.1 },
    15: { pmi: (homePrice * 0.006) / 12, equity: homePrice * 0.15 },
    20: { pmi: 0, equity: homePrice * 0.2 },
  };

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Home Price" value={formatCurrency(homePrice)} />
      <ResultCard label="Down Payment Needed" value={formatCurrency(downPaymentNeeded)} highlight />
      <ResultCard label="Current Savings" value={formatCurrency(currentSavings)} />
      <ResultCard label="Amount Remaining" value={formatCurrency(amountRemaining)} />
      <ResultCard label="Months to Goal" value={monthsToGoal > 0 ? `${monthsToGoal} months` : "Ready now!"} highlight />
      <ResultCard label="Target Purchase Date" value={monthsToGoal > 0 ? targetDate.toLocaleDateString() : "Ready now!"} />
      {pmiNeeded && (
        <ResultCard
          label="Estimated Monthly PMI"
          value={formatCurrency(estimatedPMIMonthly)}
          subtext="Until 20% equity is reached"
        />
      )}
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Savings Progress Toward Goal</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Savings ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="saved" stroke="#10b981" strokeWidth={2} name="Your Savings" />
            <Line type="monotone" dataKey="goal" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="Down Payment Goal" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Down Payment vs PMI Comparison</h3>
        <div className="space-y-2 text-sm">
          {Object.entries(pmiCosts).map(([percent, costs]) => (
            <div key={percent} className="flex justify-between items-start p-2 rounded hover:bg-blue-100">
              <div>
                <p className="font-semibold text-gray-900">{percent}% Down Payment</p>
                <p className="text-xs text-gray-600">Initial equity: {formatCurrency(costs.equity)}</p>
              </div>
              <div className="text-right">
                {costs.pmi > 0 ? (
                  <>
                    <p className="font-semibold text-gray-900">{formatCurrency(costs.pmi)}/month PMI</p>
                    <p className="text-xs text-gray-600">Until 20% equity</p>
                  </>
                ) : (
                  <p className="font-semibold text-green-700">No PMI</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A down payment is the amount of money you put toward a home purchase upfront, with the remainder financed through a mortgage. The down payment percentage significantly impacts your mortgage approval, interest rate, and monthly payments. While conventional wisdom suggests 20% is standard, first-time buyers can often qualify with as little as 3% down. Understanding down payment requirements and timing is crucial for homeownership goals.
      </p>

      <p>
        <strong>Down Payment Percentages:</strong> A 20% down payment avoids Private Mortgage Insurance (PMI), which protects the lender but costs you 0.5-1.5% of the loan amount annually. With only 10% down, you'll pay PMI until you reach 20% equity. With 5% down, PMI costs are higher but you need less upfront capital. Some programs like FHA loans allow 3.5% down with mortgage insurance built in. The trade-off is borrowing more (higher monthly payments) versus saving more upfront. First-time buyer programs often offer down payment assistance.
      </p>

      <p>
        <strong>Building Your Down Payment:</strong> Most financial advisors recommend saving 10-20% of the home price. This requires discipline and may take years depending on home prices in your area. Automatic monthly transfers to a dedicated savings account help—make it as automatic as your utility bill. Consider high-yield savings accounts (currently 4-5% APY) to earn interest on your down payment fund. Tax-advantaged accounts like First Home Saver Accounts (if available in your state) or Roth IRAs can be used for first-time home purchases.
      </p>

      <p>
        <strong>First-Time Buyer Strategies:</strong> Research first-time buyer programs in your state—many offer down payment assistance, favorable loan terms, or tax credits. Don't neglect closing costs (2-5% of purchase price) in your savings plan. Build an emergency fund separate from your down payment fund. A larger down payment lowers your loan amount and monthly mortgage payment significantly—over a 30-year mortgage, a $20,000 larger down payment saves you $100,000+ in total interest. However, don't delay homeownership indefinitely for a perfect down payment if you're ready and qualified.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Down Payment Calculator"
      description="Calculate how long it will take to save for your down payment and understand PMI impact"
      slug="down-payment-calculator"
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
          id="down-payment-percent"
          label="Desired Down Payment"
          value={desiredDownPaymentPercent}
          onChange={setDesiredDownPaymentPercent}
          suffix="%"
          step={1}
          min={0}
          max={100}
          hint={`${formatCurrency(downPaymentNeeded)} needed`}
        />

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Savings Plan</h3>
          <InputField
            id="current-savings"
            label="Current Savings"
            value={currentSavings}
            onChange={setCurrentSavings}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="monthly-savings"
            label="Monthly Savings Amount"
            value={monthlySavings}
            onChange={setMonthlySavings}
            prefix="$"
            step={100}
            min={0}
          />
        </div>

        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-900">
          <p className="font-semibold mb-2">Your Down Payment Goal:</p>
          <div className="space-y-1">
            <p>Total Needed: <span className="font-bold">{formatCurrency(downPaymentNeeded)}</span></p>
            <p>Already Saved: <span className="font-bold">{formatCurrency(currentSavings)}</span></p>
            <p>Still Need: <span className="font-bold">{formatCurrency(amountRemaining)}</span></p>
            {monthsToGoal > 0 && (
              <>
                <p className="border-t border-green-300 pt-1 mt-1">
                  Timeline: <span className="font-bold">{monthsToGoal} months</span> ({yearsToGoal} years)
                </p>
                <p>Target Purchase: <span className="font-bold">{targetDate.toLocaleDateString()}</span></p>
              </>
            )}
            {monthsToGoal === 0 && (
              <p className="border-t border-green-300 pt-1 mt-1 font-bold text-green-700">
                You have enough saved! Ready to purchase.
              </p>
            )}
          </div>
        </div>

        {pmiNeeded && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
            <p className="font-semibold mb-1">Note: PMI Required</p>
            <p>With {desiredDownPaymentPercent}% down, you'll pay Private Mortgage Insurance (~{formatCurrency(estimatedPMIMonthly)}/month) until you reach 20% equity in the home.</p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DownPaymentCalculator,
  slug: "down-payment-calculator",
  title: "Down Payment Calculator",
  shortTitle: "Down Payment",
  description: "Calculate savings needed for your down payment and understand PMI impact",
  category: "finance",
  icon: "🏦",
  keywords: ["down payment", "home savings", "PMI", "first-time buyer", "mortgage"],
});
