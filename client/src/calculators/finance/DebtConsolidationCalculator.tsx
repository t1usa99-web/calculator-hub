import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DebtConsolidationCalculator() {
  const [debt1Balance, setDebt1Balance] = useState(5000);
  const [debt1Rate, setDebt1Rate] = useState(18);
  const [debt2Balance, setDebt2Balance] = useState(8000);
  const [debt2Rate, setDebt2Rate] = useState(20);
  const [debt3Balance, setDebt3Balance] = useState(3000);
  const [debt3Rate, setDebt3Rate] = useState(22);
  const [consolidationRate, setConsolidationRate] = useState(9);
  const [consolidationTermMonths, setConsolidationTermMonths] = useState(60);

  // Current debts
  const totalDebt = debt1Balance + debt2Balance + debt3Balance;

  // Calculate minimum payments (assume 2% of balance as minimum)
  const minPayment1 = debt1Balance * 0.02;
  const minPayment2 = debt2Balance * 0.02;
  const minPayment3 = debt3Balance * 0.02;
  const totalMinPaymentCurrent = minPayment1 + minPayment2 + minPayment3;

  // Calculate interest cost over time on current debts (72 months)
  let balance1 = debt1Balance;
  let balance2 = debt2Balance;
  let balance3 = debt3Balance;
  let totalInterestCurrent = 0;

  for (let month = 1; month <= 72; month++) {
    const interest1 = balance1 * (debt1Rate / 100 / 12);
    const interest2 = balance2 * (debt2Rate / 100 / 12);
    const interest3 = balance3 * (debt3Rate / 100 / 12);

    totalInterestCurrent += interest1 + interest2 + interest3;

    balance1 = Math.max(0, balance1 * (1 + debt1Rate / 100 / 12) - minPayment1);
    balance2 = Math.max(0, balance2 * (1 + debt2Rate / 100 / 12) - minPayment2);
    balance3 = Math.max(0, balance3 * (1 + debt3Rate / 100 / 12) - minPayment3);

    if (balance1 <= 0 && balance2 <= 0 && balance3 <= 0) break;
  }

  // Consolidation payment
  const monthlyRate = consolidationRate / 100 / 12;
  let consolidationPayment = 0;

  if (monthlyRate === 0) {
    consolidationPayment = totalDebt / consolidationTermMonths;
  } else {
    consolidationPayment =
      (totalDebt * (monthlyRate * Math.pow(1 + monthlyRate, consolidationTermMonths))) /
      (Math.pow(1 + monthlyRate, consolidationTermMonths) - 1);
  }

  const totalConsolidationPayments = consolidationPayment * consolidationTermMonths;
  const totalInterestConsolidation = totalConsolidationPayments - totalDebt;

  const interestSavings = totalInterestCurrent - totalInterestConsolidation;
  const payoffTimeSavings = Math.max(0, 72 - consolidationTermMonths);

  const comparisonData = [
    {
      name: "Current Debts",
      interest: totalInterestCurrent,
      principal: totalDebt,
    },
    {
      name: "Consolidated Loan",
      interest: totalInterestConsolidation,
      principal: totalDebt,
    },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Current Debt"
        value={formatCurrency(totalDebt)}
        subtext="Across all creditors"
      />
      <ResultCard
        label="Current Total Minimum Payment"
        value={formatCurrency(totalMinPaymentCurrent)}
        subtext="Per month"
      />
      <ResultCard
        label="Interest Cost (72 months, current)"
        value={formatCurrency(totalInterestCurrent)}
        highlight
      />
      <ResultCard
        label="Consolidation Monthly Payment"
        value={formatCurrency(consolidationPayment)}
        highlight
        subtext="Fixed rate, fixed term"
      />
      <ResultCard
        label="Total Interest (Consolidated)"
        value={formatCurrency(totalInterestConsolidation)}
      />
      <ResultCard
        label="Interest Savings"
        value={formatCurrency(interestSavings)}
        highlight={interestSavings > 0}
        subtext={interestSavings > 0 ? "You save" : "You pay more"}
      />
      <ResultCard
        label="Payoff Time Savings"
        value={`${payoffTimeSavings} months`}
        subtext={payoffTimeSavings > 0 ? `Faster payoff` : "Same timeline"}
      />
      <ResultCard
        label="Average Interest Rate (Current)"
        value={formatNumber((debt1Rate + debt2Rate + debt3Rate) / 3, 1) + "%"}
        subtext="Weighted average"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Total Cost Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Total Cost ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="principal" fill="#3b82f6" name="Principal" />
          <Bar dataKey="interest" fill="#ef4444" name="Interest" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Debt consolidation combines multiple debts (usually high-interest credit cards) into a single loan with a lower interest rate. If you owe {formatCurrency(5000)} at 18%, {formatCurrency(8000)} at 20%, and {formatCurrency(3000)} at 22%, consolidating into a single {formatCurrency(16000)} loan at 9% simplifies payments and dramatically reduces interest costs. Consolidation works because secured loans (home equity, auto loans) have lower rates than unsecured credit cards, and a single fixed-rate loan is easier to manage than juggling multiple creditors.
      </p>

      <p>
        <strong>How Consolidation Works:</strong> You take out a new loan (home equity, personal, or balance transfer) for your total debt balance. Use the proceeds to pay off all existing debts in full. Now you owe one creditor instead of many. Your new payment depends on the interest rate and term. A {formatCurrency(16000)} debt at 9% for 5 years = {formatCurrency(304)}/month (principal + interest). This is simpler than managing three separate accounts at {formatCurrency(100)}, {formatCurrency(160)}, and {formatCurrency(60)}/month, and you pay far less interest.
      </p>

      <p>
        <strong>Interest Savings with Consolidation:</strong> Credit card debt accrues interest at 18-25% APR. A {formatCurrency(5000)} balance paying {formatCurrency(100)}/month takes 7+ years to pay off and costs {'>='}{formatCurrency(2500)} in interest. Consolidating at 9% and paying {formatCurrency(200)}/month for 3 years costs only {formatCurrency(1200)} in interest, saving {'>='}{formatCurrency(1300)}. The longer you carry credit card debt, the greater consolidation savings. Always compare total costs (principal + interest) rather than just monthly payments.
      </p>

      <p>
        <strong>Consolidation Risks and Warnings:</strong> The critical risk is psychological: after consolidating credit card debt, many people run up balances again, ending up with the original debt {plus} the consolidation loan. This doubles your total debt. To avoid this, immediately close or freeze cards after consolidation. Second, some consolidation methods (especially balance transfer cards) have hidden costs: transfer fees (3-5%), promotional rate expiration (0% → 20%+ after 12 months), and annual fees. Always read the fine print. Use consolidation as a tool to get out of debt, not as a way to free up credit to borrow more.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Debt Consolidation Calculator"
      description="Compare current debt costs with consolidation savings and payoff timeline"
      slug="debt-consolidation-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-3">Debt 1</h4>
          <InputField
            id="debt1-balance"
            label="Balance"
            value={debt1Balance}
            onChange={setDebt1Balance}
            prefix="$"
            step={1000}
            min={0}
          />
          <InputField
            id="debt1-rate"
            label="Interest Rate"
            value={debt1Rate}
            onChange={setDebt1Rate}
            suffix="%"
            step={0.5}
            min={0}
            max={36}
          />
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-3">Debt 2</h4>
          <InputField
            id="debt2-balance"
            label="Balance"
            value={debt2Balance}
            onChange={setDebt2Balance}
            prefix="$"
            step={1000}
            min={0}
          />
          <InputField
            id="debt2-rate"
            label="Interest Rate"
            value={debt2Rate}
            onChange={setDebt2Rate}
            suffix="%"
            step={0.5}
            min={0}
            max={36}
          />
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-3">Debt 3</h4>
          <InputField
            id="debt3-balance"
            label="Balance"
            value={debt3Balance}
            onChange={setDebt3Balance}
            prefix="$"
            step={1000}
            min={0}
          />
          <InputField
            id="debt3-rate"
            label="Interest Rate"
            value={debt3Rate}
            onChange={setDebt3Rate}
            suffix="%"
            step={0.5}
            min={0}
            max={36}
          />
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-3">Consolidation Loan</h4>
          <InputField
            id="consolidation-rate"
            label="Consolidation Interest Rate"
            value={consolidationRate}
            onChange={setConsolidationRate}
            suffix="%"
            step={0.1}
            min={2}
            max={15}
          />
          <InputField
            id="consolidation-term"
            label="Consolidation Term"
            value={consolidationTermMonths / 12}
            onChange={(value) => setConsolidationTermMonths(value * 12)}
            suffix="years"
            step={1}
            min={2}
            max={10}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DebtConsolidationCalculator,
  slug: "debt-consolidation-calculator",
  title: "Debt Consolidation Calculator",
  shortTitle: "Debt Consolidation",
  description: "Calculate consolidation savings and compare multiple debts with single loan option",
  category: "finance",
  icon: "💰",
  keywords: ["debt consolidation", "credit card debt", "loan", "interest savings", "payoff"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "Is debt consolidation a good idea?",
      answer: "Consolidation is excellent <strong>if</strong> the new loan rate is significantly lower than your current average rate. Consolidating {formatCurrency(16000)} of 20% credit card debt into 9% personal loan saves thousands in interest. However, consolidation only works if you commit to not re-borrowing. Many people consolidate, run up credit cards again, and end up with {'>='} {formatCurrency(30000)} total debt. Consolidation is a tool to escape debt, not to free up spending capacity.",
    },
    {
      question: "What types of consolidation loans are available?",
      answer: "Options: (1) Personal loan: unsecured, 6-15% rates, no collateral risk, {formatCurrency(5000)}-{formatCurrency(50000)} limits. (2) Home equity loan/HELOC: secured by home, 5-10% rates, but puts home at risk if you default. (3) Balance transfer card: 0% for 6-21 months, then 18-25%, includes 3-5% transfer fee. (4) Debt management plan: work with nonprofit, negotiate lower rates, avoid new debt. (5) 401(k) loan: borrow from retirement savings, repay to yourself, but risks retirement if you leave job. Evaluate all options.",
    },
    {
      question: "How much can I save with consolidation?",
      answer: "Savings depend on the rate difference and payoff speed. Example: {formatCurrency(16000)} at 20% APR takes {'>='} 6 years to pay off paying {formatCurrency(300)}/month and costs {formatCurrency(5200)} in interest. Same debt at 9% for 5 years costs {formatCurrency(1900)} in interest—a savings of {formatCurrency(3300)}. The larger your debt, the longer the payoff timeline, and the greater the rate reduction, the larger your savings. Use this calculator to estimate your specific savings.",
    },
    {
      question: "What happens to my credit score after consolidation?",
      answer: "Consolidation temporarily lowers your credit score (hard inquiry, new account, credit mix change), but rebuilds quickly as you make on-time payments. If consolidation reduces your overall debt and you don't re-borrow, your score improves over 6-12 months. The longer-term benefit is discipline: a single on-time payment is easier than juggling multiple accounts. Within 1-2 years of consolidation, your score is typically higher than before due to lower utilization and payment history.",
    },
    {
      question: "What should I do with credit cards after consolidation?",
      answer: "<strong>Don't close them immediately</strong>, as closing accounts lowers your credit score. Instead, <strong>freeze or lock them</strong> so you can't use them. After 6-12 months of consolidation discipline, you can close old accounts safely. Many people close cards after consolidation and immediately open new ones, replicating the original debt. Commit to a spending freeze: pay off the consolidation loan aggressively, build an emergency fund, then rebuild credit responsibly. Consolidation is only successful if you change habits.",
    },
  ],
});
