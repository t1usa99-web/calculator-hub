import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function CarLeaseCalculator() {
  const [msrp, setMsrp] = useState(35000);
  const [negotiatedPrice, setNegotiatedPrice] = useState(33000);
  const [residualPercent, setResidualPercent] = useState(55);
  const [moneyFactor, setMoneyFactor] = useState(0.0015);
  const [leaseTermMonths, setLeaseTermMonths] = useState(36);
  const [downPayment, setDownPayment] = useState(3000);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [acquisitionFee, setAcquisitionFee] = useState(695);
  const [dispositionFee, setDispositionFee] = useState(395);
  const [annualMileageAllowance, setAnnualMileageAllowance] = useState(12000);

  // Calculate residual value
  const residualValue = negotiatedPrice * (residualPercent / 100);

  // Calculate depreciation
  const depreciation = negotiatedPrice - residualValue;

  // Calculate finance charge
  const capitalizedCost = negotiatedPrice + acquisitionFee - downPayment - tradeInValue;
  const adjustedCapitalizedCost = capitalizedCost;
  const avgCapitalizedCost = (capitalizedCost + residualValue) / 2;
  const financeCharge = avgCapitalizedCost * moneyFactor * leaseTermMonths;

  // Monthly payment
  const depreciationMonthly = depreciation / leaseTermMonths;
  const financeMonthly = financeCharge / leaseTermMonths;
  const monthlyPayment = depreciationMonthly + financeMonthly;

  // Total costs
  const totalMonthlyPayments = monthlyPayment * leaseTermMonths;
  const totalLeaseCost = totalMonthlyPayments + acquisitionFee + dispositionFee + downPayment;
  const mileageAllowance = (annualMileageAllowance * leaseTermMonths) / 12;
  const excessMileageFee = 0.25; // Per mile excess

  const chartData = [
    { category: "Depreciation", cost: Math.round(depreciation) },
    { category: "Finance Charges", cost: Math.round(financeCharge) },
    { category: "Acquisition Fee", cost: acquisitionFee },
    { category: "Disposition Fee", cost: dispositionFee },
    { category: "Down Payment", cost: downPayment },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Monthly Lease Payment"
        value={formatCurrency(monthlyPayment)}
        highlight={true}
      />
      <ResultCard
        label="Total Monthly Payments"
        value={formatCurrency(totalMonthlyPayments)}
      />
      <ResultCard
        label="Depreciation Cost"
        value={formatCurrency(depreciation)}
      />
      <ResultCard
        label="Finance Charges"
        value={formatCurrency(financeCharge)}
      />
      <ResultCard
        label="Total Lease Cost"
        value={formatCurrency(totalLeaseCost)}
        highlight={true}
      />
      <ResultCard
        label="Mileage Allowance"
        value={`${formatNumber(mileageAllowance, 0)} miles`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Lease Cost Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Bar dataKey="cost" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A car lease is essentially a long-term rental agreement where you pay for the right to use a vehicle for a set period (typically 2-4 years), after which you return it to the dealership. Leasing appeals to drivers who want a new car every few years with minimal maintenance and warranty coverage. However, leasing costs more over time than buying and keeping a car, and you're responsible for excess mileage charges, wear-and-tear repairs, and gap insurance. Leasing makes sense for those who drive under 12,000 miles per year, prefer new cars, and want predictable monthly costs.
      </p>

      <p>
        <strong>How Lease Payments Are Calculated:</strong> The monthly payment has two components: depreciation and finance charges. Depreciation is the difference between negotiated price and residual value (estimated value at lease end), divided by lease term. Finance charges are based on the money factor (similar to interest rate) applied to the average capitalized cost. The formula: Monthly Payment = (Depreciation + Finance Charges) / Lease Term. Acquisition fees, disposition fees, and down payments affect the total cost but not the monthly payment directly.
      </p>

      <p>
        <strong>Money Factor Explained:</strong> The money factor is a small decimal (typically 0.0010-0.0030) that acts like an interest rate for the lease. Multiply it by the average capitalized cost and lease months to get total finance charges. A money factor of 0.0015 is equivalent to about 3.6% APR. Better credit scores qualify for lower money factors. Comparing money factors between dealers helps negotiate better lease terms—a 0.0001 difference affects hundreds of dollars over a 3-year lease.
      </p>

      <p>
        <strong>Residual Value and Mileage Importance:</strong> Residual value is the estimated car value at lease end—higher is better for lease payments. Luxury and sports cars depreciate more, so their leases are expensive. Reliable brands with high resale value (Toyota, Honda) have better lease deals. Mileage allowances (typically 10,000-15,000 miles/year) are crucial. Excess mileage charges (usually $0.15-0.30 per mile) add up fast; 5,000 excess miles at $0.25/mile costs $1,250. Overestimate your mileage rather than underestimate.
      </p>

      <p>
        <strong>Lease vs. Buy Decision:</strong> Lease if you drive under 12,000 miles/year, like new cars frequently, want predictable monthly costs, and prefer warranty coverage. Buy if you drive more than 15,000 miles/year, want to keep a car beyond 5 years, or want to customize your vehicle. Long-term, buying and keeping a car 7-10 years is cheaper than continuously leasing. Factor in insurance (often higher for leases due to required coverage), maintenance (covered under warranty for leases), and wear-and-tear fees (can be $500-1,500+ at lease end).
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Car Lease Calculator"
      description="Calculate monthly lease payments and total lease costs"
      slug="car-lease-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="msrp"
          label="MSRP (Sticker Price)"
          value={msrp}
          onChange={setMsrp}
          prefix="$"
          min={10000}
          step={1000}
          max={150000}
        />
        <InputField
          id="negotiated-price"
          label="Negotiated Sale Price"
          value={negotiatedPrice}
          onChange={setNegotiatedPrice}
          prefix="$"
          min={5000}
          step={1000}
          max={150000}
        />
        <InputField
          id="residual-percent"
          label="Residual Value (%)"
          value={residualPercent}
          onChange={setResidualPercent}
          suffix="%"
          min={20}
          step={1}
          max={80}
        />
        <InputField
          id="money-factor"
          label="Money Factor"
          value={moneyFactor}
          onChange={setMoneyFactor}
          step={0.0001}
          min={0.0005}
          max={0.005}
        />
        <InputField
          id="lease-term-months"
          label="Lease Term"
          value={leaseTermMonths}
          onChange={setLeaseTermMonths}
          suffix="months"
          min={12}
          step={12}
          max={60}
        />
        <InputField
          id="down-payment"
          label="Down Payment"
          value={downPayment}
          onChange={setDownPayment}
          prefix="$"
          min={0}
          step={500}
          max={50000}
        />
        <InputField
          id="trade-in-value"
          label="Trade-In Value"
          value={tradeInValue}
          onChange={setTradeInValue}
          prefix="$"
          min={0}
          step={500}
          max={50000}
        />
        <InputField
          id="acquisition-fee"
          label="Acquisition Fee"
          value={acquisitionFee}
          onChange={setAcquisitionFee}
          prefix="$"
          min={0}
          step={50}
          max={2000}
        />
        <InputField
          id="disposition-fee"
          label="Disposition Fee"
          value={dispositionFee}
          onChange={setDispositionFee}
          prefix="$"
          min={0}
          step={50}
          max={2000}
        />
        <InputField
          id="annual-mileage"
          label="Annual Mileage Allowance"
          value={annualMileageAllowance}
          onChange={setAnnualMileageAllowance}
          suffix="miles/year"
          min={5000}
          step={1000}
          max={25000}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CarLeaseCalculator,
  slug: "car-lease-calculator",
  title: "Car Lease Calculator",
  shortTitle: "Car Lease",
  description: "Calculate car lease payments, residual value, and total lease costs",
  category: "finance",
  icon: "🚗",
  keywords: ["car lease", "lease payment", "auto lease", "lease cost", "vehicle lease"],
  popular: false,
  faqs: [
    {
      question: "What's a money factor and how does it compare to APR?",
      answer: "Money factor is the financing charge on a lease, similar to interest rate on a loan. Multiply by 2400 to approximate APR. A money factor of 0.0015 equals about 3.6% APR. Better credit gets lower money factors. Always negotiate the money factor—even 0.0001 difference saves hundreds over 3 years."
    },
    {
      question: "What happens if I exceed mileage allowance?",
      answer: "You pay excess mileage charges, typically $0.15-0.30 per mile, depending on the lease agreement. On a 36-month lease with 12,000 miles/year allowance, you can drive 36,000 miles total. If you drive 40,000 miles, you owe 4,000 × $0.25 = $1,000. Estimate conservatively."
    },
    {
      question: "Does lease payment include insurance?",
      answer: "No. The monthly payment is depreciation + finance charges. Insurance, registration, maintenance, and taxes are separate costs. Leases typically require comprehensive and collision insurance with low deductibles, which costs more than typical auto insurance."
    },
    {
      question: "What's the residual value and why does it matter?",
      answer: "Residual value is the estimated car worth at lease end. Higher residual value = lower depreciation = lower lease payment. Toyota and Honda typically have high residuals; luxury cars have lower residuals. A 1% difference in residual value changes the monthly payment by about $10-20."
    },
    {
      question: "Is leasing or buying cheaper long-term?",
      answer: "Buying and keeping a car 7-10 years is typically cheaper. However, leasing wins if you drive under 12,000 miles/year, want predictable costs, value warranty coverage, and like new cars frequently. Calculate your total cost including maintenance, insurance, and taxes to compare."
    }
  ],
  dateModified: "2026-04-10",
});
