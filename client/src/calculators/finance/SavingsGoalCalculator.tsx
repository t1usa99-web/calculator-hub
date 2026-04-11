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

export default function SavingsGoalCalculator() {
  const [goalAmount, setGoalAmount] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [interestRate, setInterestRate] = useState(4.5);
  const [timeFrameMonths, setTimeFrameMonths] = useState(60);

  const needed = Math.max(0, goalAmount - currentSavings);
  const monthlyRate = interestRate / 100 / 12;
  let balance = currentSavings;
  let months = 0;
  const maxMonths = 360;
  let goalAchievable = false;

  // Calculate months to reach goal with current contribution
  while (balance < goalAmount && months < maxMonths) {
    balance += monthlyContribution;
    balance *= 1 + monthlyRate;
    months++;
  }

  if (months < maxMonths) {
    goalAchievable = true;
  }

  // Calculate total contributions and interest for timeframe
  let projectedBalance = currentSavings;
  let totalContributions = 0;
  const chartData = [];

  for (let i = 0; i <= timeFrameMonths; i++) {
    if (i > 0) {
      projectedBalance += monthlyContribution;
      projectedBalance *= 1 + monthlyRate;
      totalContributions += monthlyContribution;
    }

    if (i % Math.ceil(timeFrameMonths / 12) === 0 || i === timeFrameMonths) {
      const interestEarned = projectedBalance - currentSavings - totalContributions;
      chartData.push({
        month: i,
        balance: projectedBalance,
        contributions: currentSavings + totalContributions,
        interest: Math.max(0, interestEarned),
      });
    }
  }

  const finalBalance = projectedBalance;
  const finalContributions = currentSavings + totalContributions;
  const totalInterestEarned = finalBalance - finalContributions;

  // Calculate required monthly contribution if different from input
  let requiredMonthly = monthlyContribution;
  if (needed > 0 && timeFrameMonths > 0) {
    const rate = interestRate / 100 / 12;
    const periodFactor =
      rate === 0
        ? timeFrameMonths
        : (Math.pow(1 + rate, timeFrameMonths) - 1) / rate;
    requiredMonthly = (needed - currentSavings * Math.pow(1 + rate, timeFrameMonths)) / periodFactor;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Projected Balance"
        value={formatCurrency(finalBalance)}
        highlight={true}
      />
      <ResultCard
        label="Goal Amount"
        value={formatCurrency(goalAmount)}
      />
      <ResultCard
        label="Total Contributions"
        value={formatCurrency(finalContributions)}
      />
      <ResultCard
        label="Interest Earned"
        value={formatCurrency(totalInterestEarned)}
      />
      <ResultCard
        label={goalAchievable ? "Months to Goal" : "Goal Status"}
        value={goalAchievable ? `${months} months` : "Not achievable"}
      />
      <ResultCard
        label="Required Monthly"
        value={formatCurrency(Math.max(0, requiredMonthly))}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Savings Growth Projection
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
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            name="Total Balance"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="contributions"
            stroke="#10b981"
            name="Contributions"
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
        Building Your Savings Strategy
      </h3>
      <p>
        Saving money systematically is one of the most powerful ways to build
        wealth and financial security. This calculator helps you understand how
        regular contributions combined with compound interest can help you reach
        your goals. The key to successful saving is consistency—even small
        monthly amounts add up significantly over time when combined with
        interest earnings.
      </p>
      <p>
        Emergency funds are a critical part of any savings plan. Financial
        experts recommend building an emergency fund equal to 3-6 months of
        living expenses before aggressively saving for other goals. This safety
        net helps protect you from unexpected expenses and prevents you from
        going into debt during difficult times. Start by aiming for $1,000 in
        your emergency fund, then build up to a full 3-6 month cushion.
      </p>
      <p>
        High-yield savings accounts (HYSAs) offer significantly better interest
        rates than traditional savings accounts. While traditional accounts
        might earn 0.01-0.5% APY, HYSAs currently offer 4-5% APY, meaning your
        money works harder for you. For a $10,000 balance, the difference
        between 0.01% and 4.5% is roughly $450 per year—money you can redirect
        toward your goals. HYSAs are FDIC-insured, making them as safe as
        traditional banks while offering superior returns.
      </p>
      <p>
        The power of compound interest means that starting early makes an enormous
        difference. Saving $200/month from age 25 to 65 at 4.5% interest yields
        approximately $284,000, with nearly $104,000 coming from interest alone.
        Starting at 35 instead yields only $148,000. This demonstrates why
        starting your savings journey early is one of the best financial decisions
        you can make, regardless of the amount.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Savings Goal Calculator"
      description="Plan your savings strategy and track progress toward your financial goals"
      slug="savings-goal"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="goal-amount"
          label="Goal Amount"
          value={goalAmount}
          onChange={setGoalAmount}
          prefix="$"
          min={0}
          step={1000}
        />
        <InputField
          id="current-savings"
          label="Current Savings"
          value={currentSavings}
          onChange={setCurrentSavings}
          prefix="$"
          min={0}
          step={1000}
        />
        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          min={0}
          step={50}
        />
        <InputField
          id="interest-rate"
          label="Interest Rate (APY)"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          min={0}
          max={10}
          step={0.1}
        />
        <InputField
          id="timeframe"
          label="Time Frame (Months)"
          value={timeFrameMonths}
          onChange={setTimeFrameMonths}
          min={1}
          max={360}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}
