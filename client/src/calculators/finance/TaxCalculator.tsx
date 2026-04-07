import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function TaxCalculator() {
  const [filingStatus, setFilingStatus] = useState("single");
  const [grossIncome, setGrossIncome] = useState(75000);
  const [deductionType, setDeductionType] = useState("standard");
  const [itemizedDeductions, setItemizedDeductions] = useState(13000);
  const [dependents, setDependents] = useState(0);

  // 2024 Tax brackets and standard deductions
  const taxData = {
    single: {
      standardDeduction: 14600,
      brackets: [
        { min: 0, max: 11000, rate: 0.1 },
        { min: 11000, max: 44725, rate: 0.12 },
        { min: 44725, max: 95375, rate: 0.22 },
        { min: 95375, max: 182100, rate: 0.24 },
        { min: 182100, max: 231250, rate: 0.32 },
        { min: 231250, max: 578125, rate: 0.35 },
        { min: 578125, max: Infinity, rate: 0.37 },
      ],
    },
    married: {
      standardDeduction: 29200,
      brackets: [
        { min: 0, max: 22000, rate: 0.1 },
        { min: 22000, max: 89075, rate: 0.12 },
        { min: 89075, max: 190750, rate: 0.22 },
        { min: 190750, max: 364200, rate: 0.24 },
        { min: 364200, max: 462500, rate: 0.32 },
        { min: 462500, max: 693750, rate: 0.35 },
        { min: 693750, max: Infinity, rate: 0.37 },
      ],
    },
    head: {
      standardDeduction: 21900,
      brackets: [
        { min: 0, max: 15700, rate: 0.1 },
        { min: 15700, max: 59850, rate: 0.12 },
        { min: 59850, max: 95350, rate: 0.22 },
        { min: 95350, max: 182100, rate: 0.24 },
        { min: 182100, max: 231250, rate: 0.32 },
        { min: 231250, max: 578125, rate: 0.35 },
        { min: 578125, max: Infinity, rate: 0.37 },
      ],
    },
  };

  const status = filingStatus as "single" | "married" | "head";
  const standardDed = taxData[status].standardDeduction;
  const brackets = taxData[status].brackets;
  const deduction = deductionType === "standard" ? standardDed : itemizedDeductions;

  // Calculate taxable income
  const taxableIncome = Math.max(0, grossIncome - deduction);

  // Calculate federal tax using brackets
  let federalTax = 0;
  let taxByBracket: Array<{ bracket: string; tax: number }> = [];

  brackets.forEach((bracket) => {
    const income = Math.max(0, Math.min(taxableIncome, bracket.max) - bracket.min);
    const tax = income * bracket.rate;
    federalTax += tax;

    if (income > 0) {
      taxByBracket.push({
        bracket: `${formatPercent(bracket.rate)}`,
        tax: tax,
      });
    }
  });

  // Calculate child tax credit (simplified - $2000 per dependent)
  const dependentCredit = dependents * 2000;
  const taxAfterCredits = Math.max(0, federalTax - dependentCredit);

  // Calculate effective and marginal rates
  const effectiveTaxRate = grossIncome > 0 ? (taxAfterCredits / grossIncome) * 100 : 0;
  const marginalBracket = brackets.find((b) => taxableIncome >= b.min && taxableIncome < b.max);
  const marginalRate = marginalBracket ? marginalBracket.rate * 100 : 37;

  const takeHome = grossIncome - taxAfterCredits;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Gross Income" value={formatCurrency(grossIncome)} />
      <ResultCard label="Taxable Income" value={formatCurrency(taxableIncome)} />
      <ResultCard label="Federal Tax" value={formatCurrency(federalTax)} />
      <ResultCard label="Dependent Credits" value={formatCurrency(dependentCredit)} />
      <ResultCard label="Tax After Credits" value={formatCurrency(taxAfterCredits)} highlight />
      <ResultCard label="Take-Home Pay" value={formatCurrency(takeHome)} highlight />
      <ResultCard label="Effective Tax Rate" value={formatPercent(effectiveTaxRate)} />
      <ResultCard label="Marginal Tax Rate" value={formatPercent(marginalRate)} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Understanding how federal income tax works is essential for financial planning and tax optimization. The U.S. uses a progressive tax system where different portions of your income are taxed at different rates, called tax brackets. You do not pay the top marginal rate on all your income—only the portion falling within that bracket. This is a common misconception that leads people to avoid promotions or raises thinking they'll owe more in taxes than they earn.
      </p>

      <p>
        <strong>Tax Brackets vs Effective Rate:</strong> Your marginal tax rate is the rate applied to your last dollar earned (the highest bracket your income reaches). Your effective tax rate is your total tax divided by total income, which is always lower than your marginal rate. For example, someone earning $75,000 as a single filer might have a 22% marginal rate but only a 10.4% effective rate because much of their income is taxed at lower rates. Tax credits (like dependent credits) reduce taxes dollar-for-dollar, while deductions reduce taxable income.
      </p>

      <p>
        <strong>Deductions and Credits:</strong> Standard deductions are fixed amounts that reduce taxable income (2024: $14,600 single, $29,200 married). Itemized deductions allow you to deduct specific expenses like mortgage interest, charitable donations, and state taxes, useful if they total more than the standard deduction. Tax credits are more valuable than deductions—a $2,000 credit saves $2,000 in taxes regardless of your bracket. Child Tax Credit ($2,000 per child) is one of the largest credits available.
      </p>

      <p>
        <strong>Tax Planning:</strong> Increase deductions by bunching charitable donations, paying property taxes, and paying mortgage interest. Maximize tax credits by understanding eligibility. Consider retirement contributions (pre-tax 401k, traditional IRA) which reduce current taxable income. Tax-loss harvesting in investment accounts offsets gains. Track estimated quarterly taxes if self-employed. Remember that tax optimization should not drive major life decisions—earning more money is nearly always beneficial despite higher taxes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Tax Calculator"
      description="Calculate your federal income tax based on 2024 tax brackets and deductions"
      slug="tax-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="filing-status"
          label="Filing Status"
          value={filingStatus}
          onChange={setFilingStatus}
          options={[
            { value: "single", label: "Single" },
            { value: "married", label: "Married Filing Jointly" },
            { value: "head", label: "Head of Household" },
          ]}
        />
        <InputField
          id="gross-income"
          label="Gross Income"
          value={grossIncome}
          onChange={setGrossIncome}
          prefix="$"
          step={5000}
          min={0}
        />

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Deductions</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="standard"
                checked={deductionType === "standard"}
                onChange={(e) => setDeductionType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">
                Standard Deduction: <span className="font-semibold">{formatCurrency(standardDed)}</span>
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="itemized"
                checked={deductionType === "itemized"}
                onChange={(e) => setDeductionType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Itemized Deductions</span>
            </label>
          </div>

          {deductionType === "itemized" && (
            <InputField
              id="itemized-deductions"
              label="Itemized Deductions Amount"
              value={itemizedDeductions}
              onChange={setItemizedDeductions}
              prefix="$"
              step={1000}
              min={0}
              hint={`Standard is ${formatCurrency(standardDed)}`}
            />
          )}
        </div>

        <div className="border-t border-gray-200 pt-4">
          <InputField
            id="dependents"
            label="Number of Dependents"
            value={dependents}
            onChange={setDependents}
            step={1}
            min={0}
            max={15}
            hint="$2,000 tax credit per dependent"
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
          <p className="font-semibold mb-2">Tax Breakdown:</p>
          <div className="space-y-1 text-xs">
            <p>Gross Income: {formatCurrency(grossIncome)}</p>
            <p>Deduction: {formatCurrency(deduction)}</p>
            <p>Taxable Income: {formatCurrency(taxableIncome)}</p>
            <p className="border-t border-blue-300 pt-1 mt-1 font-semibold">
              Federal Tax: {formatCurrency(federalTax)}
            </p>
            <p>Tax Credits: -{formatCurrency(dependentCredit)}</p>
            <p className="font-bold border-t border-blue-300 pt-1 mt-1">
              Total Tax: {formatCurrency(taxAfterCredits)}
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: TaxCalculator,
  slug: "tax-calculator",
  title: "Tax Calculator",
  shortTitle: "Taxes",
  description: "Calculate federal income tax using 2024 tax brackets and deductions",
  category: "finance",
  icon: "🧾",
  keywords: ["tax", "federal income tax", "brackets", "deductions", "credits", "filing status"],
  popular: true,
});
