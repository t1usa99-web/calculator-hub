import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function FourOhOneKCalculator() {
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [annualSalary, setAnnualSalary] = useState(100000);
  const [contributionPercent, setContributionPercent] = useState(6);
  const [employerMatchPercent, setEmployerMatchPercent] = useState(3);
  const [matchLimit, setMatchLimit] = useState(6);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState(25);
  const [salaryGrowthPercent, setSalaryGrowthPercent] = useState(2);

  let balance = currentBalance;
  let totalEmployeeContributions = 0;
  let totalEmployerMatch = 0;

  // Simulate year by year
  let currentSalary = annualSalary;
  for (let year = 0; year < yearsUntilRetirement; year++) {
    // Employee contribution
    const employeeContribution = currentSalary * (contributionPercent / 100);
    totalEmployeeContributions += employeeContribution;

    // Employer match (up to the match limit)
    const matchableAmount = Math.min(
      employeeContribution,
      currentSalary * (matchLimit / 100)
    );
    const employerMatch = matchableAmount * (employerMatchPercent / 100);
    totalEmployerMatch += employerMatch;

    // Total added this year
    const totalAdded = employeeContribution + employerMatch;

    // Apply investment return
    balance = balance * (1 + annualReturn / 100) + totalAdded;

    // Salary growth for next year
    currentSalary = currentSalary * (1 + salaryGrowthPercent / 100);
  }

  const totalGrowth = balance - currentBalance - totalEmployeeContributions - totalEmployerMatch;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Balance at Retirement"
        value={formatCurrency(balance)}
        highlight={true}
      />
      <ResultCard
        label="Total Growth"
        value={formatCurrency(totalGrowth)}
        highlight={true}
      />
      <ResultCard
        label="Total Employee Contributions"
        value={formatCurrency(totalEmployeeContributions)}
      />
      <ResultCard
        label="Total Employer Match"
        value={formatCurrency(totalEmployerMatch)}
      />
      <ResultCard
        label="Starting Balance"
        value={formatCurrency(currentBalance)}
      />
      <ResultCard
        label="Growth as % of Contributions"
        value={formatNumber(
          (totalGrowth / (totalEmployeeContributions + totalEmployerMatch)) * 100
        ) + "%"}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        401(k) Plans and Retirement Savings Strategy
      </h3>
      <p>
        A 401(k) is an employer-sponsored retirement plan allowing employees to save for retirement with significant tax advantages. You contribute pre-tax dollars (reducing taxable income), employers often match contributions, and investments grow tax-deferred until withdrawal. For 2024, the contribution limit is $23,500 annually. An employee earning $60,000 contributing 6% ($3,600) with a 3% employer match ($1,800) totals $5,400 saved annually. Over 25 years at 7% returns, this grows to approximately $640,000—with roughly $240,000 from employer match alone. Failing to contribute at least enough to capture full employer matching is leaving free money on the table.
      </p>
      <p>
        <strong>Maximizing employer match:</strong> Most employers match 50-100% of contributions up to 3-6% of salary. Contributing less than the full match is suboptimal. For a $100,000 salary with a 3% match, contributing only 2% yields $2,000 in match (on $2,000 contributions), but contributing the full 3% yields $3,000 in match—a $1,000 annual advantage. Over 20 years, this $1,000 annual difference compounds to roughly $50,000 in additional retirement savings. Salary growth amplifies match value: by retirement, compound growth and increased salaries make early match capture exponentially more valuable.
      </p>
      <p>
        <strong>Investment allocation:</strong> Choose a diversified mix of stocks and bonds appropriate for your age. Use the rule of "110 minus age" for stock allocation: a 30-year-old allocates roughly 80% stocks, 20% bonds. Younger workers can tolerate volatility and benefit from long-term growth; older workers need stability. Use low-cost index funds (expense ratios under 0.20%) rather than actively managed funds charging 0.5-1% annually. A 0.5% expense ratio difference, compounded over 30 years on $500,000, costs over $200,000 in lost growth. Rebalance annually to maintain target allocation.
      </p>
      <p>
        <strong>Withdrawal strategy:</strong> 401(k) withdrawals before age 59.5 incur a 10% early withdrawal penalty plus income taxes, making emergency borrowing expensive. Aim to let money compound until retirement, using other savings for short-term needs. At retirement, Required Minimum Distributions (RMDs) begin at age 73 (2023 rules), forcing taxable withdrawals. Plan withdrawals to minimize taxes: consider Roth conversions while income is lower, harvest losses on taxable accounts, and coordinate with Social Security timing. A disciplined 401(k) strategy—maximizing match, diversifying appropriately, and minimizing fees—creates substantial wealth by retirement.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="401(k) Calculator"
      description="Project 401(k) growth with compound returns and employer matching"
      slug="401k-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="current-balance"
          label="Current 401(k) Balance"
          value={currentBalance}
          onChange={setCurrentBalance}
          prefix="$"
          min={0}
          step={1000}
        />

        <InputField
          id="annual-salary"
          label="Current Annual Salary"
          value={annualSalary}
          onChange={setAnnualSalary}
          prefix="$"
          min={10000}
          step={1000}
        />

        <InputField
          id="contribution-percent"
          label="Your Contribution %"
          value={contributionPercent}
          onChange={setContributionPercent}
          suffix="%"
          min={0}
          max={100}
          step={0.5}
          hint="Percent of salary"
        />

        <InputField
          id="employer-match"
          label="Employer Match %"
          value={employerMatchPercent}
          onChange={setEmployerMatchPercent}
          suffix="%"
          min={0}
          max={100}
          step={0.5}
        />

        <InputField
          id="match-limit"
          label="Match Limit %"
          value={matchLimit}
          onChange={setMatchLimit}
          suffix="%"
          min={0}
          max={100}
          step={0.5}
          hint="Employer matches up to this % of salary"
        />

        <InputField
          id="annual-return"
          label="Expected Annual Return"
          value={annualReturn}
          onChange={setAnnualReturn}
          suffix="%"
          min={0}
          max={30}
          step={0.5}
        />

        <InputField
          id="salary-growth"
          label="Expected Annual Salary Growth"
          value={salaryGrowthPercent}
          onChange={setSalaryGrowthPercent}
          suffix="%"
          min={0}
          max={10}
          step={0.1}
        />

        <InputField
          id="years-to-retirement"
          label="Years Until Retirement"
          value={yearsUntilRetirement}
          onChange={setYearsUntilRetirement}
          suffix="years"
          min={1}
          max={50}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}
