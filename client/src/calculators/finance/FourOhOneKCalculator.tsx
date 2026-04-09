import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

  return (
    <CalculatorLayout
      title="401(k) Calculator"
      description="Project 401(k) growth with compound returns and employer matching"
      slug="401k-calculator"
      results={results}
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

registerCalculator({
  component: FourOhOneKCalculator,
  slug: "401k-calculator",
  title: "401(k) Calculator",
  shortTitle: "401(k)",
  description:
    "Estimate your 401(k) balance at retirement with employer matching and growth projections",
  category: "finance",
  icon: "🏦",
  keywords: [
    "401k",
    "retirement",
    "employer match",
    "investment growth",
    "retirement planning",
  ],
  ymyl: true,
  dateModified: "2026-04-09",
});
