import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { DEBT_PAYOFF_FAQS } from "@/lib/faq-finance-loans";

export default function DebtPayoffCalculator() {
  const [totalDebt, setTotalDebt] = useState(15000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [monthlyPayment, setMonthlyPayment] = useState(400);
  const [extraPayment, setExtraPayment] = useState(0);

  // Calculate standard payoff
  let balance = totalDebt;
  let months = 0;
  let totalInterest = 0;
  const maxMonths = 600;
  const chartData = [];

  while (balance > 0 && months < maxMonths) {
    const interestCharge = balance * (interestRate / 100 / 12);
    const principalPayment = monthlyPayment - interestCharge;

    if (principalPayment <= 0) {
      break;
    }

    balance -= principalPayment;
    totalInterest += interestCharge;
    months++;

    if (months % Math.ceil(months / 20) === 0 || months <= 3) {
      chartData.push({
        month: months,
        balance: Math.max(0, balance),
        totalInterest: totalInterest,
      });
    }

    if (balance <= 0) {
      chartData.push({
        month: months,
        balance: 0,
        totalInterest: totalInterest,
      });
      break;
    }
  }

  const standardMonths = months;
  const standardTotalInterest = totalInterest;
  const standardTotalPaid = totalDebt + totalInterest;

  // Calculate with extra payment
  balance = totalDebt;
  months = 0;
  totalInterest = 0;
  const totalExtraPayment = extraPayment * standardMonths;
  let extraMonthsSaved = 0;
  let extraInterestSaved = 0;

  while (balance > 0 && months < maxMonths) {
    const interestCharge = balance * (interestRate / 100 / 12);
    const principalPayment = monthlyPayment + extraPayment - interestCharge;

    if (principalPayment <= 0) {
      break;
    }

    balance -= principalPayment;
    totalInterest += interestCharge;
    months++;

    if (balance <= 0) {
      break;
    }
  }

  extraMonthsSaved = standardMonths - months;
  extraInterestSaved = standardTotalInterest - totalInterest;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Months to Payoff (Standard)"
        value={`${standardMonths} months`}
        highlight={true}
      />
      <ResultCard
        label="Total Interest (Standard)"
        value={formatCurrency(standardTotalInterest)}
      />
      <ResultCard
        label="Total Amount Paid"
        value={formatCurrency(standardTotalPaid)}
      />
      {extraPayment > 0 && (
        <>
          <ResultCard
            label="Months with Extra Payment"
            value={`${months} months`}
          />
          <ResultCard
            label="Time Saved"
            value={`${extraMonthsSaved} months`}
          />
          <ResultCard
            label="Interest Saved"
            value={formatCurrency(extraInterestSaved)}
          />
        </>
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Debt Payoff Timeline
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Months", position: "insideBottomRight", offset: -10 }}
          />
          <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#ef4444"
            name="Remaining Balance"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="totalInterest"
            stroke="#f59e0b"
            name="Cumulative Interest"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Debt Payoff Strategies
      </h3>
      <p>
        Carrying high-interest debt can significantly impact your financial
        health and limit your future opportunities. This calculator helps you
        understand how different payment strategies affect your payoff timeline
        and total interest costs. The key insight is that every extra dollar you
        pay toward debt reduces the interest you'll pay and gets you debt-free
        faster. For example, adding $50 extra per month to a $15,000 debt at
        8.5% APR can save you thousands in interest and shorten your payoff by
        several years.
      </p>
      <p>
        Two popular strategies for paying off multiple debts are the debt
        snowball and debt avalanche methods. The snowball method involves paying
        minimums on all debts while attacking the smallest balance first—this
        provides quick wins that build momentum and motivation. The avalanche
        method targets the highest interest rate first, saving the most money in
        total interest. Choose snowball for motivation or avalanche for maximum
        savings.
      </p>
      <p>
        Interest rates compound monthly, meaning unpaid interest itself generates
        interest. This is why paying only the minimum payment can trap you in
        debt for decades. For credit cards with 20% APR and $5,000 balance
        paying only minimums (2-3% of balance), you could take 10+ years to pay
        off while paying $5,000+ in interest. By paying extra, you break this
        cycle and regain control of your finances much faster.
      </p>
      <p>
        Consider debt consolidation if you have multiple high-interest debts.
        Consolidating into a single loan with a lower interest rate can reduce
        total interest costs and simplify payments. Balance transfers to 0% APR
        credit cards, personal loans, or home equity loans are options to explore.
        However, only consolidate if you commit to not accumulating new debt while
        paying off the consolidated balance.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Debt Payoff Calculator"
      description="Calculate your debt payoff timeline and see how extra payments save you money"
      slug="debt-payoff"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="total-debt"
          label="Total Debt"
          value={totalDebt}
          onChange={setTotalDebt}
          prefix="$"
          min={0}
          step={100}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate (APR)"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          min={0}
          max={30}
          step={0.1}
        />
        <InputField
          id="monthly-payment"
          label="Monthly Payment"
          value={monthlyPayment}
          onChange={setMonthlyPayment}
          prefix="$"
          min={0}
          step={25}
        />
        <InputField
          id="extra-payment"
          label="Extra Monthly Payment"
          value={extraPayment}
          onChange={setExtraPayment}
          prefix="$"
          min={0}
          step={25}
          hint="Additional amount paid each month to accelerate payoff"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "debt-payoff",
  title: "Debt Payoff Calculator",
  shortTitle: "Debt Payoff",
  description: "Calculate your debt payoff timeline and savings with extra payments",
  category: "finance",
  icon: "💳",
  keywords: ["debt", "payoff", "loan", "credit", "interest"],
  popular: true,
  component: DebtPayoffCalculator,
  faqs: DEBT_PAYOFF_FAQS,
});
