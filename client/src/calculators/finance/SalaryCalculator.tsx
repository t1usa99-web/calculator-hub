import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function SalaryCalculator() {
  const [amount, setAmount] = useState(75000);
  const [inputFrequency, setInputFrequency] = useState("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);

  // Convert input to annual salary
  let annualSalary = 0;
  switch (inputFrequency) {
    case "hourly":
      annualSalary = amount * hoursPerWeek * weeksPerYear;
      break;
    case "weekly":
      annualSalary = amount * weeksPerYear;
      break;
    case "biweekly":
      annualSalary = amount * 26;
      break;
    case "monthly":
      annualSalary = amount * 12;
      break;
    case "annual":
      annualSalary = amount;
      break;
  }

  // Calculate conversions
  const hourlyRate = annualSalary / (hoursPerWeek * weeksPerYear);
  const weeklyPay = annualSalary / weeksPerYear;
  const biweeklyPay = annualSalary / 26;
  const monthlyPay = annualSalary / 12;
  const dailyPay = annualSalary / 260; // 52 weeks * 5 days

  // Estimate taxes (30% average)
  const estimatedTaxRate = 0.3;
  const afterTaxAnnual = annualSalary * (1 - estimatedTaxRate);
  const afterTaxMonthly = monthlyPay * (1 - estimatedTaxRate);

  const results = (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Salary Conversion Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-2 px-3 font-semibold text-gray-900">Frequency</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-900">Gross</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-900">After Tax (Est.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="py-2 px-3 text-gray-900 font-medium">Hourly</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(hourlyRate)}</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(hourlyRate * (1 - estimatedTaxRate))}</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="py-2 px-3 text-gray-900 font-medium">Daily</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(dailyPay)}</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(dailyPay * (1 - estimatedTaxRate))}</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="py-2 px-3 text-gray-900 font-medium">Weekly</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(weeklyPay)}</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(weeklyPay * (1 - estimatedTaxRate))}</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="py-2 px-3 text-gray-900 font-medium">Biweekly</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(biweeklyPay)}</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(biweeklyPay * (1 - estimatedTaxRate))}</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="py-2 px-3 text-gray-900 font-medium">Monthly</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(monthlyPay)}</td>
                <td className="text-right py-2 px-3 text-gray-900">{formatCurrency(afterTaxMonthly)}</td>
              </tr>
              <tr className="bg-primary-50 hover:bg-primary-100">
                <td className="py-2 px-3 text-gray-900 font-bold">Annual</td>
                <td className="text-right py-2 px-3 text-gray-900 font-bold">{formatCurrency(annualSalary)}</td>
                <td className="text-right py-2 px-3 text-gray-900 font-bold">{formatCurrency(afterTaxAnnual)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg p-4 bg-primary-50 border border-primary-200">
          <p className="text-sm text-gray-600 mb-1">Gross Annual</p>
          <p className="text-2xl font-bold text-primary-700">{formatCurrency(annualSalary)}</p>
        </div>
        <div className="rounded-lg p-4 bg-green-50 border border-green-200">
          <p className="text-sm text-gray-600 mb-1">Est. After-Tax Annual</p>
          <p className="text-2xl font-bold text-green-700">{formatCurrency(afterTaxAnnual)}</p>
        </div>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Understanding how to convert between different salary frequencies is essential for comparing job offers and managing your finances. A salary can be expressed as hourly, weekly, biweekly, monthly, or annual—each useful in different contexts. Converting between these helps you understand your true income level and make informed decisions about job changes and budget planning.
      </p>

      <p>
        <strong>Common Pay Frequencies:</strong> Hourly rates are typical for part-time and service jobs, calculated as annual hours worked (usually 40 hours/week × 52 weeks). Biweekly is the most common paycheck frequency for full-time employees (26 paychecks per year). Monthly is often used for salary discussions and budgeting. Annual salary is what you see in job postings and tax documents. Understanding these conversions prevents surprises when comparing offers or budgeting based on different income information.
      </p>

      <p>
        <strong>Salary Negotiation:</strong> When negotiating salary, always think in annual terms to understand the full value. A $3/hour raise sounds small but equals $6,240 more annually (for 40 hours/week, 52 weeks). Consider total compensation, including benefits, vacation days, retirement matching, and flexibility. Some employers offer benefits that dramatically increase total value—health insurance worth $10,000+, 401k matching, flexible schedules, or remote work savings. Factor in these non-salary benefits when evaluating offers.
      </p>

      <p>
        <strong>Budget Planning:</strong> Most people budget on a monthly basis, so converting your pay to a monthly figure is crucial for creating a realistic budget. After-tax income (estimated at 30% for a typical U.S. earner, but varies significantly by location and situation) is what actually reaches your account. Remember that freelancers and gig workers need to account for self-employment taxes (15.3%), making their effective rate higher than salaried employees.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Salary Calculator"
      description="Convert salary between different time periods and understand your total compensation"
      slug="salary-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="space-y-4">
          <InputField
            id="amount"
            label="Amount"
            value={amount}
            onChange={setAmount}
            prefix="$"
            step={500}
            min={0}
          />
          <SelectField
            id="frequency"
            label="Pay Frequency"
            value={inputFrequency}
            onChange={setInputFrequency}
            options={[
              { value: "hourly", label: "Hourly Rate" },
              { value: "weekly", label: "Weekly" },
              { value: "biweekly", label: "Biweekly" },
              { value: "monthly", label: "Monthly" },
              { value: "annual", label: "Annual" },
            ]}
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Work Schedule</h3>
          <InputField
            id="hours-per-week"
            label="Hours Per Week"
            value={hoursPerWeek}
            onChange={setHoursPerWeek}
            step={1}
            min={0}
            max={80}
          />
          <InputField
            id="weeks-per-year"
            label="Weeks Per Year"
            value={weeksPerYear}
            onChange={setWeeksPerYear}
            step={1}
            min={1}
            max={52}
            hint="Standard is 52 weeks, subtract vacation weeks"
          />
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
          <p className="font-semibold mb-1">Note on Taxes:</p>
          <p>The estimated after-tax amount assumes a 30% tax rate. Your actual tax rate depends on location, filing status, and deductions.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
