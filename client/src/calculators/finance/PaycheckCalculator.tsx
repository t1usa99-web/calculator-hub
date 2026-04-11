import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";

export default function PaycheckCalculator() {
  const [grossSalary, setGrossSalary] = useState(60000);
  const [payFrequency, setPayFrequency] = useState("biweekly");
  const [filingStatus, setFilingStatus] = useState("single");
  const [state, setState] = useState("CA");
  const [contribution401k, setContribution401k] = useState(6);

  // Tax brackets for 2024 (single filer)
  const taxBrackets = {
    single: [
      { min: 0, max: 11000, rate: 0.1 },
      { min: 11000, max: 44725, rate: 0.12 },
      { min: 44725, max: 95375, rate: 0.22 },
      { min: 95375, max: 182100, rate: 0.24 },
      { min: 182100, max: 231250, rate: 0.32 },
      { min: 231250, max: 578125, rate: 0.35 },
      { min: 578125, max: Infinity, rate: 0.37 },
    ],
    married: [
      { min: 0, max: 22000, rate: 0.1 },
      { min: 22000, max: 89075, rate: 0.12 },
      { min: 89075, max: 190750, rate: 0.22 },
      { min: 190750, max: 364200, rate: 0.24 },
      { min: 364200, max: 462500, rate: 0.32 },
      { min: 462500, max: 693750, rate: 0.35 },
      { min: 693750, max: Infinity, rate: 0.37 },
    ],
  };

  // State tax rates (simplified)
  const stateTaxRates: Record<string, number> = {
    CA: 0.093,
    NY: 0.065,
    TX: 0,
    FL: 0,
    WA: 0,
    IL: 0.045,
    PA: 0.0307,
    OH: 0.0575,
    default: 0.05,
  };

  // Calculate pay periods
  let payPeriods = 26;
  if (payFrequency === "weekly") payPeriods = 52;
  else if (payFrequency === "monthly") payPeriods = 12;

  const grossPayPerPeriod = grossSalary / payPeriods;

  // Calculate 401k deduction (pre-tax)
  const contribution401kAmount = grossPayPerPeriod * (contribution401k / 100);
  const taxableWages = grossPayPerPeriod - contribution401kAmount;

  // Calculate federal tax
  const brackets = taxBrackets[filingStatus as "single" | "married"] || taxBrackets.single;
  const standardDeduction = filingStatus === "married" ? 29200 : 14600;
  const annualTaxableIncome = Math.max(0, grossSalary - standardDeduction);
  const annualFederalTax = brackets.reduce((tax, bracket) => {
    const income = Math.max(0, Math.min(annualTaxableIncome, bracket.max) - bracket.min);
    return tax + income * bracket.rate;
  }, 0);
  const federalTaxPerPeriod = annualFederalTax / payPeriods;

  // Calculate FICA (Social Security and Medicare)
  const socialSecurityRate = 0.062; // 6.2%
  const medicareRate = 0.0145; // 1.45%
  const socialSecurityTax = grossPayPerPeriod * socialSecurityRate;
  const medicareTax = grossPayPerPeriod * medicareRate;
  const ficaTax = socialSecurityTax + medicareTax;

  // Calculate state tax
  const stateRate = stateTaxRates[state] || stateTaxRates.default;
  const stateTax = taxableWages * stateRate;

  // Total deductions
  const totalDeductions = federalTaxPerPeriod + stateTax + ficaTax + contribution401kAmount;
  const netPay = grossPayPerPeriod - totalDeductions;

  // Annual totals
  const annualGross = grossSalary;
  const annualFederal = federalTaxPerPeriod * payPeriods;
  const annualState = stateTax * payPeriods;
  const annualFica = ficaTax * payPeriods;
  const annual401k = contribution401kAmount * payPeriods;
  const annualNet = netPay * payPeriods;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Gross Pay" value={formatCurrency(grossPayPerPeriod)} highlight />
      <ResultCard label="Federal Tax" value={formatCurrency(federalTaxPerPeriod)} />
      <ResultCard label="State Tax" value={formatCurrency(stateTax)} />
      <ResultCard label="FICA Tax" value={formatCurrency(ficaTax)} />
      <ResultCard label="401k Deduction" value={formatCurrency(contribution401kAmount)} />
      <ResultCard label="Net Pay" value={formatCurrency(netPay)} highlight />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Your paycheck represents the money you receive after various deductions from your gross salary. Understanding your pay stub is essential for personal finance management. Gross pay is your earnings before taxes and other deductions, while net pay (take-home) is what you actually receive after all deductions are applied.
      </p>

      <p>
        <strong>Federal Income Tax:</strong> This is withheld based on your filing status and the W-4 form you completed with your employer. The IRS uses tax brackets where different portions of your income are taxed at different rates. Your effective tax rate (total tax divided by gross income) is typically lower than your marginal tax rate (the rate applied to your last dollar earned). By adjusting your W-4 withholding, you can increase or decrease how much tax is withheld per paycheck.
      </p>

      <p>
        <strong>FICA Taxes:</strong> These include Social Security (6.2% up to a wage base limit) and Medicare (1.45%, with an additional 0.9% for high earners). Both employee and employer contribute equal amounts. These taxes fund your future Social Security benefits and Medicare coverage. Unlike income tax, FICA taxes are deducted the same way regardless of your filing status or tax bracket.
      </p>

      <p>
        <strong>Other Deductions:</strong> Pre-tax deductions like 401k contributions reduce your taxable income, lowering both federal and state income taxes. State income taxes vary by location, from 0% in some states to over 13% in others. Post-tax deductions like Roth contributions don't reduce your current tax burden but provide tax-free growth. Always verify your pay stub for accuracy and adjust your withholdings as needed.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Paycheck Calculator"
      description="Calculate your take-home pay and understand all your paycheck deductions"
      slug="paycheck-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="gross-salary"
          label="Annual Gross Salary"
          value={grossSalary}
          onChange={setGrossSalary}
          prefix="$"
          step={5000}
          min={0}
        />
        <SelectField
          id="pay-frequency"
          label="Pay Frequency"
          value={payFrequency}
          onChange={setPayFrequency}
          options={[
            { value: "weekly", label: "Weekly (52 periods)" },
            { value: "biweekly", label: "Biweekly (26 periods)" },
            { value: "monthly", label: "Monthly (12 periods)" },
          ]}
        />
        <SelectField
          id="filing-status"
          label="Filing Status"
          value={filingStatus}
          onChange={setFilingStatus}
          options={[
            { value: "single", label: "Single" },
            { value: "married", label: "Married Filing Jointly" },
          ]}
        />
        <SelectField
          id="state"
          label="State"
          value={state}
          onChange={setState}
          options={[
            { value: "CA", label: "California" },
            { value: "NY", label: "New York" },
            { value: "TX", label: "Texas (No State Tax)" },
            { value: "FL", label: "Florida (No State Tax)" },
            { value: "WA", label: "Washington (No State Tax)" },
            { value: "IL", label: "Illinois" },
            { value: "PA", label: "Pennsylvania" },
            { value: "OH", label: "Ohio" },
          ]}
        />
        <InputField
          id="401k"
          label="401k Contribution"
          value={contribution401k}
          onChange={setContribution401k}
          suffix="%"
          step={1}
          min={0}
          max={50}
        />
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
          <p className="font-semibold mb-2">Annual Summary:</p>
          <p>Gross: {formatCurrency(annualGross)}</p>
          <p>Federal Tax: {formatCurrency(annualFederal)}</p>
          <p>State Tax: {formatCurrency(annualState)}</p>
          <p>FICA: {formatCurrency(annualFica)}</p>
          <p>401k: {formatCurrency(annual401k)}</p>
          <p className="font-semibold mt-2">Net Pay: {formatCurrency(annualNet)}</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
