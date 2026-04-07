import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BudgetCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [housingPercent, setHousingPercent] = useState(30);
  const [transportationPercent, setTransportationPercent] = useState(15);
  const [foodPercent, setFoodPercent] = useState(12);
  const [savingsPercent, setSavingsPercent] = useState(20);
  const [debtPercent, setDebtPercent] = useState(8);
  const [otherPercent, setOtherPercent] = useState(15);

  // Calculate dollar amounts
  const housing = monthlyIncome * (housingPercent / 100);
  const transportation = monthlyIncome * (transportationPercent / 100);
  const food = monthlyIncome * (foodPercent / 100);
  const savings = monthlyIncome * (savingsPercent / 100);
  const debt = monthlyIncome * (debtPercent / 100);
  const other = monthlyIncome * (otherPercent / 100);

  const totalAllocated = housingPercent + transportationPercent + foodPercent + savingsPercent + debtPercent + otherPercent;
  const unallocated = 100 - totalAllocated;

  // 50/30/20 rule comparison
  const needs50 = monthlyIncome * 0.5;
  const wants30 = monthlyIncome * 0.3;
  const savings20 = monthlyIncome * 0.2;

  const needsAmount = housing + transportation + food;
  const wantsAmount = other;

  const pieData = [
    { name: "Housing", value: Math.round(housing), percent: housingPercent },
    { name: "Transportation", value: Math.round(transportation), percent: transportationPercent },
    { name: "Food", value: Math.round(food), percent: foodPercent },
    { name: "Savings", value: Math.round(savings), percent: savingsPercent },
    { name: "Debt", value: Math.round(debt), percent: debtPercent },
    { name: "Other", value: Math.round(other), percent: otherPercent },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#6366f1"];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Housing" value={formatCurrency(housing)} hint={`${housingPercent}%`} />
      <ResultCard label="Transportation" value={formatCurrency(transportation)} hint={`${transportationPercent}%`} />
      <ResultCard label="Food" value={formatCurrency(food)} hint={`${foodPercent}%`} />
      <ResultCard label="Savings" value={formatCurrency(savings)} hint={`${savingsPercent}%`} highlight />
      <ResultCard label="Debt Payments" value={formatCurrency(debt)} hint={`${debtPercent}%`} />
      <ResultCard label="Other/Personal" value={formatCurrency(other)} hint={`${otherPercent}%`} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Budget Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${percent}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {COLORS.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
            <ResponsiveContainer />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">50/30/20 Rule Comparison</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span>Needs (50%)</span>
            <div className="flex-1 ml-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(needsAmount / needs50) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="ml-4 font-semibold">{formatCurrency(needsAmount)}</span>
          </div>
          <div className="text-xs text-gray-600">Target: {formatCurrency(needs50)} | Your needs: {((needsAmount / monthlyIncome) * 100).toFixed(1)}%</div>

          <div className="flex justify-between items-center mt-3">
            <span>Wants (30%)</span>
            <div className="flex-1 ml-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(wantsAmount / wants30) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="ml-4 font-semibold">{formatCurrency(wantsAmount)}</span>
          </div>
          <div className="text-xs text-gray-600">Target: {formatCurrency(wants30)} | Your wants: {((wantsAmount / monthlyIncome) * 100).toFixed(1)}%</div>

          <div className="flex justify-between items-center mt-3">
            <span>Savings (20%)</span>
            <div className="flex-1 ml-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${(savings / savings20) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="ml-4 font-semibold">{formatCurrency(savings)}</span>
          </div>
          <div className="text-xs text-gray-600">Target: {formatCurrency(savings20)} | Your savings: {((savings / monthlyIncome) * 100).toFixed(1)}%</div>
        </div>
      </div>

      {unallocated !== 0 && (
        <div className={`rounded-lg p-4 ${unallocated > 0 ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className="text-sm font-semibold text-gray-900">
            {unallocated > 0 ? "Unallocated Budget" : "Budget Exceeded"}
          </p>
          <p className={`text-lg font-bold ${unallocated > 0 ? "text-green-700" : "text-red-700"}`}>
            {unallocated > 0 ? "+" : ""}{formatPercent(unallocated)} ({formatCurrency(monthlyIncome * (unallocated / 100))})
          </p>
        </div>
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A budget is a plan for your money that allocates your income across different spending categories. Creating a realistic budget helps you control spending, achieve financial goals, and ensure you are living within your means. There are several popular budgeting methods, each with different approaches to managing your money.
      </p>

      <p>
        <strong>The 50/30/20 Rule:</strong> This simple budgeting method allocates 50% of your income to needs (housing, food, transportation), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment. This is an excellent starting point for those new to budgeting, though your actual percentages may differ based on your situation, location, and life stage. High-income earners often save more than 20%, while those with student loans may allocate more to debt.
      </p>

      <p>
        <strong>Other Budgeting Methods:</strong> The envelope method involves dividing cash into envelopes for each category, making overspending physically impossible. Zero-based budgeting assigns every dollar to a specific category so income minus expenses equals zero. The 60/20/20 rule allocates more to needs for those with higher fixed costs. The key is finding a method that matches your spending patterns and financial goals.
      </p>

      <p>
        <strong>Effective Budgeting:</strong> Track your actual spending for a month to understand where your money goes, then adjust your budget based on reality. Review your budget monthly and adjust categories as needed. Build an emergency fund within your savings allocation (3-6 months of expenses). Remember that budgets are flexible—life changes, and your budget should adapt. The goal is not perfection but awareness and progress toward your financial goals.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Budget Calculator"
      description="Allocate your income across spending categories and compare to the 50/30/20 rule"
      slug="budget-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="monthly-income"
          label="Monthly Income"
          value={monthlyIncome}
          onChange={setMonthlyIncome}
          prefix="$"
          step={500}
          min={0}
        />
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Budget Allocation (%)</h3>
          <InputField
            id="housing"
            label="Housing"
            value={housingPercent}
            onChange={setHousingPercent}
            suffix="%"
            step={1}
            min={0}
          />
          <InputField
            id="transportation"
            label="Transportation"
            value={transportationPercent}
            onChange={setTransportationPercent}
            suffix="%"
            step={1}
            min={0}
          />
          <InputField
            id="food"
            label="Food"
            value={foodPercent}
            onChange={setFoodPercent}
            suffix="%"
            step={1}
            min={0}
          />
          <InputField
            id="savings"
            label="Savings"
            value={savingsPercent}
            onChange={setSavingsPercent}
            suffix="%"
            step={1}
            min={0}
          />
          <InputField
            id="debt"
            label="Debt Payments"
            value={debtPercent}
            onChange={setDebtPercent}
            suffix="%"
            step={1}
            min={0}
          />
          <InputField
            id="other"
            label="Other/Personal"
            value={otherPercent}
            onChange={setOtherPercent}
            suffix="%"
            step={1}
            min={0}
          />
        </div>
        <div className="text-sm text-gray-600">
          Total allocated: <span className="font-semibold">{totalAllocated}%</span>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BudgetCalculator,
  slug: "budget-calculator",
  title: "Budget Calculator",
  shortTitle: "Budget",
  description: "Allocate your income and compare to the 50/30/20 budgeting rule",
  category: "finance",
  icon: "📊",
  keywords: ["budget", "income allocation", "50/30/20", "spending", "financial planning"],
  popular: true,
});
