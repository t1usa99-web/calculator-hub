import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(150000);
  const [monthlyContribution, setMonthlyContribution] = useState(1500);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(2.5);
  const [lifeExpectancy, setLifeExpectancy] = useState(90);

  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;
  const monthlyReturn = expectedReturn / 100 / 12;
  const monthlyInflation = inflationRate / 100 / 12;
  const monthsToRetirement = yearsToRetirement * 12;

  // Calculate retirement savings at retirement age
  let retirementSavings = currentSavings;
  const savingsGrowthChart = [];

  for (let month = 1; month <= monthsToRetirement; month++) {
    retirementSavings = retirementSavings * (1 + monthlyReturn) + monthlyContribution;

    if (month % Math.max(1, Math.floor(monthsToRetirement / 20)) === 0) {
      const year = currentAge + month / 12;
      savingsGrowthChart.push({
        year: year.toFixed(1),
        age: Math.floor(year),
        savings: retirementSavings,
      });
    }
  }

  // Ensure final point at retirement
  if (savingsGrowthChart[savingsGrowthChart.length - 1]?.age !== retirementAge) {
    savingsGrowthChart.push({
      year: retirementAge.toFixed(1),
      age: retirementAge,
      savings: retirementSavings,
    });
  }

  // Calculate 4% rule safe withdrawal
  const annualWithdrawal = retirementSavings * 0.04;
  const monthlyIncome = annualWithdrawal / 12;

  // Calculate inflation-adjusted income over time
  let inflationAdjustedIncome = monthlyIncome;
  let remainingBalance = retirementSavings;
  const retirementChart = [];

  for (let year = 0; year <= yearsInRetirement; year++) {
    const age = retirementAge + year;
    let currentBalance = remainingBalance;

    for (let month = 0; month < 12 && year < yearsInRetirement; month++) {
      currentBalance = currentBalance * (1 + monthlyReturn) - monthlyIncome;
      monthlyIncome * (1 + monthlyInflation);
    }

    retirementChart.push({
      year,
      age,
      balance: Math.max(0, currentBalance),
      annualWithdrawal: annualWithdrawal * Math.pow(1 + inflationRate / 100, year),
    });

    remainingBalance = currentBalance;
  }

  // Calculate real income in today's dollars
  const inflationAdjustedMonthlyIncome = monthlyIncome / Math.pow(1 + monthlyInflation, monthsToRetirement);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Estimated Retirement Savings" value={formatCurrency(retirementSavings)} highlight />
      <ResultCard
        label="Monthly Retirement Income (4% Rule)"
        value={formatCurrency(monthlyIncome)}
        highlight
        subtext="Safe sustainable withdrawal"
      />
      <ResultCard
        label="Monthly Income (Today's Dollars)"
        value={formatCurrency(inflationAdjustedMonthlyIncome)}
        subtext="Adjusted for inflation"
      />
      <ResultCard
        label="Annual Income from Retirement Savings"
        value={formatCurrency(annualWithdrawal)}
        subtext="Before inflation adjustment"
      />
      <ResultCard
        label="Years of Retirement Funding"
        value={yearsInRetirement.toString()}
        subtext={`Age ${retirementAge} to ${lifeExpectancy}`}
      />
      <ResultCard
        label="Total Contributions to Retirement"
        value={formatCurrency(currentSavings + monthlyContribution * monthsToRetirement)}
        subtext="Initial + monthly savings"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Retirement Balance Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={retirementChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: "Age", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Area type="monotone" dataKey="balance" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Retirement planning is the process of determining your retirement income needs and creating a strategy to accumulate the necessary funds. The goal is to have enough savings and income sources (Social Security, pensions, investments) to maintain your desired lifestyle once you stop working. A common rule of thumb is to have saved 25 times your annual retirement spending, which allows you to safely withdraw 4% per year (the 4% Rule). This calculator helps you estimate if you're on track to achieve your retirement goals based on current savings, contributions, and expected investment returns.
      </p>

      <p>
        <strong>The 4% Rule:</strong> This widely-used guideline suggests you can safely withdraw 4% of your retirement portfolio annually and adjust that amount for inflation each year. The rule is based on historical market data showing that a diversified portfolio has a high probability of sustaining this withdrawal rate over a 30-year retirement. For example, if you have $1 million saved, the 4% rule suggests you can withdraw $40,000 in the first year, then increase that amount by inflation each subsequent year. This conservative approach aims to preserve your principal while providing reliable income throughout retirement.
      </p>

      <p>
        <strong>401(k) and IRA Accounts:</strong> These tax-advantaged retirement accounts are crucial tools for building retirement savings. A 401(k) is offered by employers and allows you to contribute pre-tax dollars (reducing your current taxable income) up to $23,500 annually (2024 limits). Traditional IRAs and Roth IRAs are individual accounts with $7,000 annual contribution limits. Traditional contributions are tax-deductible, while Roth contributions are made with after-tax money but grow tax-free. Many employers offer 401(k) matching (free money!) up to a certain percentage of your salary—always contribute enough to capture the full match.
      </p>

      <p>
        <strong>Social Security and Other Income:</strong> Don't forget that most retirees also receive Social Security benefits, which provide a baseline of guaranteed income. The average Social Security benefit is around $1,900 per month, though this varies based on your work history and claiming age. Delaying Social Security from age 62 to 70 increases benefits by about 75%. Combining Social Security with investment income gives you more stability in retirement. This calculator focuses on investment-based retirement income, but factor in Social Security and any pension income when planning your actual retirement needs.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Retirement Calculator"
      description="Plan your retirement savings and estimate sustainable retirement income"
      slug="retirement-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="current-age"
          label="Current Age"
          value={currentAge}
          onChange={setCurrentAge}
          suffix="years"
          step={1}
          min={18}
          max={100}
        />
        <InputField
          id="retirement-age"
          label="Desired Retirement Age"
          value={retirementAge}
          onChange={setRetirementAge}
          suffix="years"
          step={1}
          min={currentAge + 1}
          max={100}
        />
        <InputField
          id="life-expectancy"
          label="Life Expectancy"
          value={lifeExpectancy}
          onChange={setLifeExpectancy}
          suffix="years"
          step={1}
          min={retirementAge + 1}
          max={120}
          hint="Planning to age 90+ is common"
        />
        <InputField
          id="current-savings"
          label="Current Retirement Savings"
          value={currentSavings}
          onChange={setCurrentSavings}
          prefix="$"
          step={25000}
          min={0}
        />
        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          step={250}
          min={0}
          hint="Including 401(k), IRA, and other savings"
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
          hint="Conservative: 5-7%, Moderate: 7-8%"
        />
        <InputField
          id="inflation-rate"
          label="Expected Inflation Rate"
          value={inflationRate}
          onChange={setInflationRate}
          suffix="%"
          step={0.1}
          min={0}
          max={10}
          hint="Historical average is ~2.5%"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RetirementCalculator,
  slug: "retirement-calculator",
  title: "Retirement Calculator",
  shortTitle: "Retirement",
  description: "Plan your retirement savings and income using the 4% rule and inflation",
  category: "finance",
  icon: "🏖️",
  keywords: ["retirement", "savings", "401k", "IRA", "income planning"],
  popular: true,
});
