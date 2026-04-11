import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export default function FIRECalculator() {
  const [annualExpenses, setAnnualExpenses] = useState(40000);
  const [savingsRate, setSavingsRate] = useState(50);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [expectedReturn, setExpectedReturn] = useState(7);

  // FIRE calculations using the 4% rule
  // FIRE Number = Annual Expenses × 25
  const fireNumber = annualExpenses * 25;

  // How much more to save
  const amountNeeded = Math.max(0, fireNumber - currentSavings);

  // Assuming savings rate is percentage of income
  // We need to back-calculate income from savings rate and expenses
  // If savings rate is S%, and we spend E, then income I = E / (1 - S%)
  // Annual savings = I × (S%)
  const annualIncome = annualExpenses / (1 - savingsRate / 100);
  const annualSavings = annualIncome * (savingsRate / 100);

  // Years to FIRE - compound interest formula
  // FV = PV(1+r)^n + PMT * [((1+r)^n - 1) / r]
  // We need to solve for n when FV = fireNumber
  let yearsToFire = 0;
  const returnRate = expectedReturn / 100;

  if (annualSavings > 0) {
    // Using numerical approximation to solve for years
    for (let years = 0; years <= 100; years += 0.1) {
      const futureValue =
        currentSavings * Math.pow(1 + returnRate, years) +
        annualSavings * (Math.pow(1 + returnRate, years) - 1) / returnRate;

      if (futureValue >= fireNumber) {
        yearsToFire = years;
        break;
      }
    }
  }

  // Generate projection data
  const projectionData = [];
  const yearsToProject = Math.min(Math.ceil(yearsToFire) + 5, 50);

  for (let year = 0; year <= yearsToProject; year++) {
    const balance =
      currentSavings * Math.pow(1 + returnRate, year) +
      (annualSavings > 0 ? annualSavings * (Math.pow(1 + returnRate, year) - 1) / returnRate : 0);

    projectionData.push({
      year,
      savings: balance,
      target: fireNumber,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="FIRE Number (4% Rule)" value={formatCurrency(fireNumber)} highlight />
      <ResultCard label="Amount Needed" value={formatCurrency(Math.max(0, fireNumber - currentSavings))} />
      <ResultCard label="Annual Income (Implied)" value={formatCurrency(annualIncome)} />
      <ResultCard label="Annual Savings" value={formatCurrency(annualSavings)} />
      <ResultCard label="Years to FIRE" value={formatNumber(yearsToFire, 1)} highlight />
      <ResultCard label="Monthly Savings Needed" value={formatCurrency(annualSavings / 12)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Path to Financial Independence</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={projectionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Years", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Portfolio Value ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Area type="monotone" dataKey="savings" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} name="Your Savings" />
          <Area type="monotone" dataKey="target" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} name="FIRE Target" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        FIRE stands for Financial Independence, Retire Early. It's a lifestyle and financial strategy focused on accumulating enough wealth to retire decades before the traditional retirement age. The FIRE movement combines aggressive saving, smart investing, and mindful spending to achieve financial freedom. The core principle is the 4% rule, which suggests you can safely withdraw 4% of your invested wealth annually without depleting it.
      </p>

      <p>
        <strong>The 4% Rule and FIRE Number:</strong> The FIRE Number is your annual expenses multiplied by 25. This comes from the 4% rule: if you withdraw 4% of your portfolio annually, a $1 million portfolio provides $40,000 per year. So if you need $40,000 annually, you need $1,000,000 saved (40,000 × 25). This assumes 7% average investment returns and a 30-year retirement horizon. The rule provides a sustainable withdrawal rate based on historical market data.
      </p>

      <p>
        <strong>The Savings Rate Impact:</strong> Your path to FIRE depends heavily on your savings rate (the percentage of income you save). A 50% savings rate means you save and spend equally. Higher savings rates dramatically shorten your timeline to financial independence. Even a 10% difference in savings rate can mean years of difference in when you reach FIRE. Time horizon also matters: with higher investment returns and longer timescales, compound growth accelerates your progress.
      </p>

      <p>
        <strong>Real-World Considerations:</strong> FIRE requires discipline with spending and investing, preferably in low-cost index funds. Healthcare costs, inflation, taxes, and lifestyle changes should all be considered. Many FIRE practitioners retire before age 40-50, allowing 40+ years of living on 4% withdrawals. Some pursue FIRE at a specific number (lean FIRE on less, coast FIRE with part-time work), or geographic arbitrage (retiring to lower cost-of-living areas). Understanding the 4% rule helps you set realistic financial independence goals.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="FIRE Calculator (Financial Independence, Retire Early)"
      description="Calculate when you can achieve financial independence using the 4% rule and compound growth"
      slug="fire-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="annual-expenses"
          label="Annual Living Expenses"
          value={annualExpenses}
          onChange={setAnnualExpenses}
          prefix="$"
          step={1000}
          min={0}
        />
        <InputField
          id="savings-rate"
          label="Savings Rate"
          value={savingsRate}
          onChange={setSavingsRate}
          suffix="%"
          step={1}
          min={0}
          max={95}
        />
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
          id="expected-return"
          label="Expected Annual Return"
          value={expectedReturn}
          onChange={setExpectedReturn}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
        />

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
          <p>
            <strong>4% Rule:</strong> FIRE Number = Annual Expenses × 25
          </p>
          <p className="mt-2">
            <strong>Your FIRE Number:</strong> {formatCurrency(annualExpenses)} × 25 = {formatCurrency(fireNumber)}
          </p>
        </div>

        {annualSavings <= 0 && savingsRate > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-sm text-yellow-800">
              Annual savings must be positive. Check your expenses and savings rate.
            </p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
