import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PensionCalculator() {
  const [yearsOfService, setYearsOfService] = useState(25);
  const [finalAverageSalary, setFinalAverageSalary] = useState(75000);
  const [benefitMultiplier, setBenefitMultiplier] = useState(2.0);
  const [retirementAge, setRetirementAge] = useState(65);
  const [colaAdjustment, setColaAdjustment] = useState(2.5);
  const [currentAge, setCurrentAge] = useState(40);

  // Calculate monthly pension
  const monthlyPension = (yearsOfService * finalAverageSalary * benefitMultiplier) / 100 / 12;
  const annualPension = monthlyPension * 12;

  // Lump sum equivalent (using 4% discount rate)
  const discountRate = 0.04;
  let lumpSumEquivalent = 0;
  const yearsToRetirement = Math.max(0, retirementAge - currentAge);
  const yearsInRetirement = 30; // Assume 30 years of retirement

  // PV of annuity formula: PV = PMT × [1 - (1 + r)^(-n)] / r
  const r = discountRate;
  const n = yearsInRetirement;
  if (r > 0) {
    lumpSumEquivalent = monthlyPension * 12 * ((1 - Math.pow(1 + r, -n)) / r);
    // Discount back to present if not yet retired
    lumpSumEquivalent = lumpSumEquivalent / Math.pow(1 + r, yearsToRetirement);
  }

  // Build projection chart (COLA-adjusted)
  const projectionData = [];
  let projectedAge = retirementAge;
  let projectedMonthlyAmount = monthlyPension;

  for (let year = 0; year <= 30; year++) {
    projectionData.push({
      age: projectedAge + year,
      monthlyIncome: Math.round(projectedMonthlyAmount),
      annualIncome: Math.round(projectedMonthlyAmount * 12),
    });
    projectedMonthlyAmount = projectedMonthlyAmount * (1 + colaAdjustment / 100);
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Monthly Pension (at 0% COLA)"
        value={formatCurrency(monthlyPension)}
        highlight={true}
      />
      <ResultCard
        label="Annual Pension (at 0% COLA)"
        value={formatCurrency(annualPension)}
        highlight={true}
      />
      <ResultCard
        label="Lump Sum Equivalent (today's dollars)"
        value={formatCurrency(lumpSumEquivalent)}
      />
      <ResultCard
        label="Years of Service"
        value={`${yearsOfService} years`}
      />
      <ResultCard
        label="Retirement Age"
        value={`Age ${retirementAge}`}
      />
      <ResultCard
        label="Benefit Multiplier"
        value={`${formatNumber(benefitMultiplier, 2)}%`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Projected Pension Income (with {colaAdjustment}% COLA)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={projectionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: "Age", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Annual Income ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Legend />
          <Line type="monotone" dataKey="annualIncome" stroke="#10b981" strokeWidth={2} name="Annual Pension" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A pension is a defined-benefit retirement plan where employers guarantee a fixed income stream for life based on salary history and years of service. Pensions were once common but are declining; today, most private-sector employees have defined-contribution plans (401k) instead. Government and union workers still often have pensions. Pensions provide retirement security but lack flexibility—you can't access the lump sum or adjust payments. Understanding your pension calculation helps you plan for retirement and evaluate job changes.
      </p>

      <p>
        <strong>Pension Benefit Formula:</strong> Most pensions use: Monthly Benefit = Years of Service × Final Average Salary × Benefit Multiplier. The benefit multiplier varies by plan (1-2.5%; government is often 1.5-2%, some union plans reach 2.5%). A public employee with 25 years of service, $75,000 final average salary, and 2% multiplier receives: (25 × $75,000 × 2%) / 100 / 12 = $3,125 per month. A 1% difference in multiplier changes this by $1,250/month or $15,000/year—massive over a 30-year retirement.
      </p>

      <p>
        <strong>Final Average Salary Calculation:</strong> Final average salary is typically the average of your highest-earning years (often 3 years) or a career average, depending on the plan. Some plans cap salary growth; others don't. This is critical because a final year salary of $85,000 vs. $75,000 (13% difference) increases your pension by 13%. Be aware of how your plan calculates this; some exclude bonuses, others include them. Maximizing earnings in final years significantly increases pension benefits.
      </p>

      <p>
        <strong>COLA (Cost-of-Living Adjustment) and Inflation:</strong> Most pensions include COLA adjustments (typically 2-3% annually) to maintain purchasing power. This is invaluable in retirement because your pension income keeps pace with inflation. An unadjusted $3,125/month pension loses 50% of purchasing power in 28 years at 2.5% inflation. With COLA, the nominal amount grows but real value is maintained. COLA is one advantage pensions have over fixed-income investments—it's built-in inflation protection.
      </p>

      <p>
        <strong>Lump Sum vs. Monthly Income:</strong> Some pensions offer a choice: take lifetime monthly payments or a lump sum. A $3,125/month pension over 30 years totals $1.125 million. The lump sum equivalent (discounted to present value) might be $600,000-700,000. Which is better depends on life expectancy, investment returns, and your risk tolerance. Monthly income is safer and guaranteed. Lump sums are flexible but require investment discipline and carry longevity risk. Government assumptions use 4% discount rates; compare to current investment yields.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pension Calculator"
      description="Calculate pension benefits and project lifetime income with COLA adjustments"
      slug="pension-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="years-of-service"
          label="Years of Service"
          value={yearsOfService}
          onChange={setYearsOfService}
          suffix="years"
          step={1}
          min={1}
          max={50}
        />
        <InputField
          id="final-average-salary"
          label="Final Average Salary"
          value={finalAverageSalary}
          onChange={setFinalAverageSalary}
          prefix="$"
          step={5000}
          min={20000}
          max={500000}
        />
        <InputField
          id="benefit-multiplier"
          label="Benefit Multiplier"
          value={benefitMultiplier}
          onChange={setBenefitMultiplier}
          suffix="%"
          step={0.1}
          min={0.5}
          max={3}
        />
        <InputField
          id="current-age"
          label="Current Age"
          value={currentAge}
          onChange={setCurrentAge}
          suffix="years"
          step={1}
          min={20}
          max={70}
        />
        <InputField
          id="retirement-age"
          label="Retirement Age"
          value={retirementAge}
          onChange={setRetirementAge}
          suffix="years"
          step={1}
          min={55}
          max={75}
        />
        <InputField
          id="cola-adjustment"
          label="COLA Adjustment"
          value={colaAdjustment}
          onChange={setColaAdjustment}
          suffix="% per year"
          step={0.5}
          min={0}
          max={5}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PensionCalculator,
  slug: "pension-calculator",
  title: "Pension Calculator",
  shortTitle: "Pension",
  description: "Calculate pension benefits and lifetime retirement income projections",
  category: "finance",
  icon: "👴",
  keywords: ["pension", "retirement", "pension benefit", "defined benefit", "retirement income"],
  popular: false,
  faqs: [
    {
      question: "How is the benefit multiplier determined?",
      answer: "The benefit multiplier is set by the pension plan and varies by employer. Government pensions typically use 1.5-2%; union pensions 2-2.5%; some 457/403b plans use 1%. Check your plan documents for the exact multiplier. Even a 0.5% difference significantly impacts lifetime benefits."
    },
    {
      question: "What's final average salary and how does it affect my pension?",
      answer: "Final average salary is typically your highest-earning years (3-5 years average). A $10,000 increase in FAS increases pension by $10,000 × years × multiplier / 1200. On a 25-year career at 2%, $10k more FAS = $416/month more pension. Maximize earnings in final years."
    },
    {
      question: "Why is COLA important?",
      answer: "Without COLA, your pension loses 50% purchasing power in 28 years at 2.5% inflation. With COLA, the nominal amount grows to maintain real value. This is crucial for retirees who live 30+ years. COLA is one major advantage pensions have over fixed investments."
    },
    {
      question: "Should I take a lump sum or monthly pension?",
      answer: "Monthly pension is safer—guaranteed income for life. Lump sum is flexible but requires investing discipline and carries longevity risk. If you live past your life expectancy, monthly pension wins. If you die early, lump sum heirs get the remainder. Consider your health and investment comfort."
    },
    {
      question: "What happens to my pension if I change jobs?",
      answer: "Vesting rules determine if you keep your pension after leaving. Many plans require 5-10 years of service to be vested. Once vested, your pension is usually locked based on service and salary at departure—not final salary if you leave early. Job changes can significantly reduce pension benefits."
    }
  ],
  dateModified: "2026-04-10",
});
