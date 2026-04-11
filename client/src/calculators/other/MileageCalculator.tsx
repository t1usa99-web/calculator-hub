import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function MileageCalculator() {
  const [milesDriven, setMilesDriven] = useState(500);
  const [rate, setRate] = useState(0.67); // IRS 2026 rate
  const [purpose, setPurpose] = useState("business");

  // IRS rates for 2026 (example rates, verify with current IRS data)
  const irsRates: { [key: string]: number } = {
    business: 0.67,
    medical: 0.21,
    charity: 0.14,
  };

  const reimbursement = milesDriven * rate;

  // Tax deduction estimate (rough calculation for business use)
  // Self-employed rate is lower than employee reimbursement
  const selfEmployedDeductionRate = 0.60;
  const taxDeductionEstimate = milesDriven * selfEmployedDeductionRate;

  // Chart data: reimbursement at different miles
  const chartData = [];
  for (let miles = 100; miles <= milesDriven; miles += Math.max(100, milesDriven / 5)) {
    chartData.push({
      miles,
      reimbursement: miles * rate,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Reimbursement Amount"
        value={formatCurrency(reimbursement)}
        highlight
      />
      <ResultCard
        label="Miles Driven"
        value={formatNumber(milesDriven)}
      />
      <ResultCard
        label="Rate per Mile"
        value={formatCurrency(rate)}
      />
      <ResultCard
        label="Purpose"
        value={purpose.charAt(0).toUpperCase() + purpose.slice(1)}
      />
      {purpose === "business" && (
        <ResultCard
          label="Tax Deduction Estimate"
          value={formatCurrency(taxDeductionEstimate)}
        />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Reimbursement by Miles Driven</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="miles" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="reimbursement" fill="#3b82f6" name="Reimbursement" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Mileage reimbursement is a standard business practice for compensating employees or contractors for vehicle use. The IRS publishes standard mileage rates annually, which serve as benchmarks for many organizations. Business mileage rates are typically higher than medical or charity rates because they account for higher wear and tear. Self-employed individuals can deduct mileage at the IRS rate when claiming business expenses. Keeping accurate mileage records is essential for both reimbursement and tax deductions.
      </p>

      <p>
        <strong>IRS Standard Mileage Rates:</strong> Business mileage is reimbursed at the highest rate (used for employee vehicles and delivery services). Medical and dental treatment mileage is reimbursed at a lower rate. Charity mileage (volunteer work) is reimbursed at the lowest rate. The IRS adjusts these rates annually based on fuel costs and vehicle operating expenses. These rates are minimums; employers can pay more if they choose. Employees should always use their employer's rate, not the IRS rate, for reimbursement requests. Tax purposes allow deductions at the IRS rate for self-employed individuals and qualifying business expenses.
      </p>

      <p>
        <strong>Tracking Mileage for Reimbursement:</strong> Maintain detailed mileage logs including dates, starting location, destination, purpose, and miles driven. Use mileage apps or spreadsheets to automate tracking. Gather receipts for tolls, parking, and fuel. Submit reimbursement requests within your company's deadline, typically monthly or quarterly. Most companies require supporting documentation. The IRS requires contemporaneous written records to substantiate deductions; mileage logs created after the fact may not be accepted. Digital tracking (GPS apps) and traditional logs both work; choose whichever is most reliable for your situation.
      </p>

      <p>
        <strong>Tax Implications for Self-Employed:</strong> Self-employed individuals can deduct actual vehicle expenses (depreciation, maintenance, fuel, insurance) or the IRS standard mileage rate, whichever is higher. Choose the method that maximizes deductions based on your actual expenses. If you use actual expenses in the first year, you're typically locked into that method; switching methods later is complex. For most people, the standard mileage deduction is simpler and sufficient. Document mileage carefully throughout the year; claiming mileage deductions without supporting documentation can trigger IRS audits. Business miles do not include commuting from home to the regular workplace.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mileage Calculator"
      description="Calculate vehicle mileage reimbursement and tax deductions"
      slug="mileage-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="miles-driven"
          label="Miles Driven"
          value={milesDriven}
          onChange={setMilesDriven}
          suffix="miles"
          step={1}
          min={0}
        />

        <SelectField
          id="purpose"
          label="Purpose"
          value={purpose}
          onChange={setPurpose}
          options={[
            { value: "business", label: "Business (IRS 2026: $0.67/mi)" },
            { value: "medical", label: "Medical (IRS 2026: $0.21/mi)" },
            { value: "charity", label: "Charity (IRS 2026: $0.14/mi)" },
          ]}
        />

        <InputField
          id="rate"
          label="Rate per Mile"
          value={rate}
          onChange={setRate}
          prefix="$"
          step={0.01}
          min={0}
          max={2}
          hint={`${purpose.charAt(0).toUpperCase() + purpose.slice(1)} standard: $${irsRates[purpose]}/mi`}
        />
      </div>
    </CalculatorLayout>
  );
}
