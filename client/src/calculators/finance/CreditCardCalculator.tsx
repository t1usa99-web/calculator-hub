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
import { formatCurrency } from "@/lib/utils";

export default function CreditCardCalculator() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(18.5);
  const [minPaymentPercent, setMinPaymentPercent] = useState(2);
  const [fixedPayment, setFixedPayment] = useState(200);

  // Calculate minimum payment payoff
  let balanceMin = balance;
  let monthsMin = 0;
  let interestMin = 0;
  const maxMonths = 600;
  const chartDataMin = [];

  while (balanceMin > 0 && monthsMin < maxMonths) {
    const monthlyRate = apr / 100 / 12;
    const interestCharge = balanceMin * monthlyRate;
    const minPayment = Math.max(
      balanceMin * (minPaymentPercent / 100),
      interestCharge + 1
    );

    balanceMin -= minPayment;
    interestMin += interestCharge;
    monthsMin++;

    if (monthsMin % Math.ceil(monthsMin / 20) === 0 || monthsMin <= 3) {
      chartDataMin.push({
        month: monthsMin,
        balance: Math.max(0, balanceMin),
        totalInterest: interestMin,
        scenario: "Minimum",
      });
    }

    if (balanceMin <= 0) {
      chartDataMin.push({
        month: monthsMin,
        balance: 0,
        totalInterest: interestMin,
        scenario: "Minimum",
      });
      break;
    }
  }

  // Calculate fixed payment payoff
  let balanceFixed = balance;
  let monthsFixed = 0;
  let interestFixed = 0;
  const chartDataFixed = [];

  while (balanceFixed > 0 && monthsFixed < maxMonths) {
    const monthlyRate = apr / 100 / 12;
    const interestCharge = balanceFixed * monthlyRate;
    const principalPayment = fixedPayment - interestCharge;

    if (principalPayment <= 0) {
      break;
    }

    balanceFixed -= principalPayment;
    interestFixed += interestCharge;
    monthsFixed++;

    if (monthsFixed % Math.ceil(monthsFixed / 20) === 0 || monthsFixed <= 3) {
      chartDataFixed.push({
        month: monthsFixed,
        balance: Math.max(0, balanceFixed),
        totalInterest: interestFixed,
        scenario: "Fixed",
      });
    }

    if (balanceFixed <= 0) {
      chartDataFixed.push({
        month: monthsFixed,
        balance: 0,
        totalInterest: interestFixed,
        scenario: "Fixed",
      });
      break;
    }
  }

  const combinedChartData = [
    ...chartDataMin.slice(0, -1),
    ...chartDataFixed.slice(0, -1),
    { month: Math.max(monthsMin, monthsFixed), balance: 0, totalInterest: 0, scenario: "End" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Minimum Payment Scenario"
        value={formatCurrency(balance * (minPaymentPercent / 100))}
        highlight={false}
      />
      <ResultCard
        label="Payoff Time (Minimum)"
        value={monthsMin >= maxMonths ? "10+ years" : `${monthsMin} months`}
      />
      <ResultCard
        label="Total Interest (Minimum)"
        value={formatCurrency(interestMin)}
      />
      <ResultCard
        label="Total Paid (Minimum)"
        value={formatCurrency(balance + interestMin)}
      />
      <ResultCard
        label="Fixed Payment Scenario"
        value={formatCurrency(fixedPayment)}
        highlight={true}
      />
      <ResultCard
        label="Payoff Time (Fixed)"
        value={monthsFixed >= maxMonths ? "10+ years" : `${monthsFixed} months`}
      />
      <ResultCard
        label="Total Interest (Fixed)"
        value={formatCurrency(interestFixed)}
      />
      <ResultCard
        label="Total Paid (Fixed)"
        value={formatCurrency(balance + interestFixed)}
      />
      {monthsMin > monthsFixed && (
        <>
          <ResultCard
            label="Time Saved"
            value={`${monthsMin - monthsFixed} months`}
          />
          <ResultCard
            label="Interest Saved"
            value={formatCurrency(interestMin - interestFixed)}
          />
        </>
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Payoff Comparison: Minimum vs Fixed Payment
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartDataMin}
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
            name="Minimum Payment"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="totalInterest"
            stroke="#f59e0b"
            name="Interest Charged"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
      {monthsFixed < monthsMin && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Paying {formatCurrency(fixedPayment)} instead of minimum saves you:</strong>
            <br />
            {formatCurrency(interestMin - interestFixed)} in interest and{" "}
            {monthsMin - monthsFixed} months of payments
          </p>
        </div>
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Credit Card Debt
      </h3>
      <p>
        Credit card interest is among the most expensive debt you can carry.
        With average APRs between 15-25%, credit card companies profit heavily
        when you carry a balance. The minimum payment is designed to keep you in
        debt as long as possible—banks make more money from interest than from
        your principal payment. On a $5,000 balance at 18% APR, paying only the
        minimum might take 10+ years and cost over $5,000 in interest alone, more
        than doubling your original debt.
      </p>
      <p>
        The credit card industry uses the "minimum payment trap" strategically.
        Paying the minimum feels manageable, which discourages people from paying
        more. However, this trap costs consumers billions annually. If you paid
        {" "}
        {formatCurrency(fixedPayment)} instead of the minimum (
        {formatCurrency(balance * (minPaymentPercent / 100))}), you'd save{" "}
        {formatCurrency(interestMin - interestFixed)} in interest and be debt-free
        in {monthsFixed} months instead of {monthsMin}. This demonstrates why
        paying more than the minimum—even a modest increase—has dramatic effects.
      </p>
      <p>
        Balance transfers offer another strategy: you can transfer your balance
        to a new card offering 0% APR for 6-12 months (usually 3% balance
        transfer fee). This gives you breathing room to pay principal without
        interest accruing. However, be disciplined—if you don't pay off the entire
        balance before the promotional period ends, you'll face even higher rates.
        This strategy works best when combined with a solid payoff plan.
      </p>
      <p>
        Prevention is the most powerful tool. The best credit card strategy is
        paying your full balance every month to avoid interest entirely. If you
        can't do that consistently, consider cutting up the card or switching to
        debit. Credit cards are powerful tools for building credit and earning
        rewards, but only if you pay them responsibly. If you're already in credit
        card debt, prioritize paying it off aggressively—your future self will
        thank you enormously.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Credit Card Payoff Calculator"
      description="Compare minimum payment vs fixed payment and understand the cost of credit card debt"
      slug="credit-card"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="balance"
          label="Credit Card Balance"
          value={balance}
          onChange={setBalance}
          prefix="$"
          min={0}
          step={100}
        />
        <InputField
          id="apr"
          label="Interest Rate (APR)"
          value={apr}
          onChange={setApr}
          suffix="%"
          min={0}
          max={40}
          step={0.1}
        />
        <InputField
          id="min-payment-percent"
          label="Minimum Payment %"
          value={minPaymentPercent}
          onChange={setMinPaymentPercent}
          suffix="%"
          min={0}
          max={10}
          step={0.1}
          hint="Typical credit card minimum is 1-3% of balance"
        />
        <InputField
          id="fixed-payment"
          label="Fixed Payment Amount"
          value={fixedPayment}
          onChange={setFixedPayment}
          prefix="$"
          min={0}
          step={25}
          hint="Amount you plan to pay each month"
        />
      </div>
    </CalculatorLayout>
  );
}
