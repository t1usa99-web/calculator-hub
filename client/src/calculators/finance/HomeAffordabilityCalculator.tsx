import { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { HOME_AFFORDABILITY_FAQS } from "@/lib/faq-finance-loans";

export default function HomeAffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [insuranceMonthly, setInsuranceMonthly] = useState(150);

  // Calculate DTI-based affordability
  const monthlyIncome = annualIncome / 12;
  const maxHousingPayment28Percent = monthlyIncome * 0.28;
  const maxTotalDebtPayment36Percent = monthlyIncome * 0.36;
  const maxHousingPayment36Rule = maxTotalDebtPayment36Percent - monthlyDebts;

  // Use the lower of the two housing payment limits
  const maxMonthlyPayment = Math.min(maxHousingPayment28Percent, maxHousingPayment36Rule);

  // Back-calculate the maximum home price
  // Monthly payment = (Loan Amount × Monthly Rate × (1 + Monthly Rate)^360) / ((1 + Monthly Rate)^360 - 1)
  // We need to account for principal, interest, taxes, and insurance
  // Start with an estimated max home price and iterate
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPropertyTaxRate = propertyTaxRate / 100 / 12;

  // Maximum loan amount calculation (30-year term)
  let maxLoanAmount = 0;
  if (monthlyRate === 0) {
    // If no interest, just use remaining payment capacity / 360
    maxLoanAmount = maxMonthlyPayment * 360;
  } else {
    // P&I payment = Loan * [r(1+r)^n] / [(1+r)^n - 1]
    // Rearrange: Loan = P&I payment / {[r(1+r)^n] / [(1+r)^n - 1]}
    const numPayments = 360;
    const paymentFactor = (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

    // Available for P&I = max payment - insurance - property tax (estimated)
    // Property tax = home price * rate / 12
    // This requires iteration, so we'll use a simpler approach:
    // Estimate that insurance + taxes = ~30% of P&I payment, so P&I ≈ 70% of max payment
    const estimatedPIPayment = maxMonthlyPayment * 0.7;
    maxLoanAmount = estimatedPIPayment / paymentFactor;
  }

  // Home price = down payment + loan amount
  const maxHomePrice = downPayment + maxLoanAmount;

  // Now calculate the actual monthly payment breakdown for the max home price
  const propertyTaxMonthly = maxHomePrice * monthlyPropertyTaxRate;
  const loanAmount = maxHomePrice - downPayment;
  let monthlyPI = 0;
  if (monthlyRate === 0) {
    monthlyPI = loanAmount / 360;
  } else {
    monthlyPI =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, 360))) /
      (Math.pow(1 + monthlyRate, 360) - 1);
  }

  const totalMonthlyPayment = monthlyPI + propertyTaxMonthly + insuranceMonthly;

  // Calculate DTI ratio
  const totalMonthlyDebt = totalMonthlyPayment + monthlyDebts;
  const dtiRatio = (totalMonthlyDebt / monthlyIncome) * 100;
  const housingRatio = (totalMonthlyPayment / monthlyIncome) * 100;

  // Chart data
  const paymentBreakdown = [
    { name: "Principal & Interest", value: monthlyPI },
    { name: "Property Tax", value: propertyTaxMonthly },
    { name: "Insurance", value: insuranceMonthly },
  ];

  const dtiData = [
    { name: "Housing Costs", value: housingRatio },
    { name: "Other Debts", value: (monthlyDebts / monthlyIncome) * 100 },
    { name: "Remaining", value: Math.max(0, 100 - dtiRatio) },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Maximum Home Price" value={formatCurrency(maxHomePrice)} highlight />
      <ResultCard label="Monthly Payment (P&I)" value={formatCurrency(monthlyPI)} />
      <ResultCard label="Monthly Property Tax" value={formatCurrency(propertyTaxMonthly)} />
      <ResultCard label="Monthly Insurance" value={formatCurrency(insuranceMonthly)} />
      <ResultCard label="Total Monthly Payment" value={formatCurrency(totalMonthlyPayment)} highlight />
      <ResultCard label="Housing Ratio" value={formatPercent(housingRatio / 100)} />
      <ResultCard label="Debt-to-Income Ratio" value={formatPercent(dtiRatio / 100)} highlight={dtiRatio > 36} />
      <ResultCard label="Down Payment" value={formatCurrency(downPayment)} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Monthly Payment Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentBreakdown}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="#3b82f6" />
              <Cell fill="#f59e0b" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Debt-to-Income Allocation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dtiData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Percentage of Income (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => `${(value as number).toFixed(1)}%`} />
            <Bar dataKey="value" fill="#3b82f6">
              <Cell fill="#3b82f6" />
              <Cell fill="#ef4444" />
              <Cell fill="#d1d5db" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Home affordability is determined by your income, existing debts, and the lender's lending criteria. Lenders use debt-to-income (DTI) ratios to determine how much they'll lend you, ensuring you can comfortably make mortgage payments alongside your other obligations.
      </p>

      <p>
        <strong>The 28/36 Rule:</strong> Most lenders follow the 28/36 rule. The 28% rule means your total housing costs (principal, interest, taxes, insurance, HOA) shouldn't exceed 28% of your gross monthly income. The 36% rule means your total debt payments (housing plus car loans, credit cards, student loans, etc.) shouldn't exceed 36% of gross income. Lenders will typically limit you to whichever is lower.
      </p>

      <p>
        <strong>Housing Costs:</strong> Beyond the mortgage principal and interest (P&I), homeownership includes property taxes, homeowners insurance, HOA fees (if applicable), and maintenance. Property taxes vary by location (0.5% to 2% of home value annually). Insurance typically costs 0.5-1.2% of home value annually. Maintenance is often estimated at 1% of home value per year.
      </p>

      <p>
        <strong>Down Payment Impact:</strong> A larger down payment reduces your loan amount, lowering monthly P&I payments and potentially eliminating private mortgage insurance (PMI). PMI is required when your down payment is less than 20% and can add $100-500+ to your monthly payment. Down payments of 20% or more allow you to avoid PMI entirely, improving affordability and long-term savings.
      </p>

      <p>
        <strong>Other Factors:</strong> Your credit score affects the interest rate you qualify for, significantly impacting affordability. Improving your score before applying can save tens of thousands in interest. Employment stability matters—lenders typically want 2 years of income history. Self-employed individuals may face stricter requirements. Keep debt levels low and avoid major new debts right before applying for a mortgage.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Home Affordability Calculator"
      description="Calculate maximum home price based on income, debts, and DTI ratios"
      slug="home-affordability-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="annual-income"
          label="Annual Gross Income"
          value={annualIncome}
          onChange={setAnnualIncome}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="monthly-debts"
          label="Monthly Debt Payments"
          value={monthlyDebts}
          onChange={setMonthlyDebts}
          prefix="$"
          step={100}
          min={0}
          hint="Car loans, credit cards, student loans, etc."
        />
        <InputField
          id="down-payment"
          label="Down Payment Available"
          value={downPayment}
          onChange={setDownPayment}
          prefix="$"
          step={10000}
          min={0}
        />
        <InputField
          id="interest-rate"
          label="Expected Interest Rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
        />
        <InputField
          id="property-tax-rate"
          label="Property Tax Rate"
          value={propertyTaxRate}
          onChange={setPropertyTaxRate}
          suffix="%"
          step={0.1}
          min={0}
          max={5}
          hint="Annual rate, varies by location"
        />
        <InputField
          id="insurance-monthly"
          label="Estimated Monthly Insurance"
          value={insuranceMonthly}
          onChange={setInsuranceMonthly}
          prefix="$"
          step={10}
          min={0}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: HomeAffordabilityCalculator,
  slug: "home-affordability-calculator",
  title: "Home Affordability Calculator",
  shortTitle: "Home Affordability",
  description: "Calculate maximum home price based on income and debt-to-income ratios",
  category: "finance",
  icon: "🏡",
  keywords: ["home affordability", "DTI ratio", "housing budget", "max home price"],
  popular: true,
  faqs: HOME_AFFORDABILITY_FAQS,
});
