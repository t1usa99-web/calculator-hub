import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency } from "@/lib/utils";

export default function RentVsBuyCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [mortgageRate, setMortgageRate] = useState(6.5);
  const [propertyTaxPercent, setPropertyTaxPercent] = useState(1.2);
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [rentIncreasePercent, setRentIncreasePercent] = useState(3);
  const [homeAppreciationPercent, setHomeAppreciationPercent] = useState(3);
  const [years, setYears] = useState(15);

  // Mortgage calculations
  const loanAmount = homePrice - downPayment;
  const monthlyRate = mortgageRate / 100 / 12;
  const numPayments = years * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numPayments;
  } else {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  // Property tax and insurance estimates
  const monthlyPropertyTax = (homePrice * (propertyTaxPercent / 100)) / 12;
  const monthlyInsurance = (homePrice * 0.007) / 12; // ~0.7% annually
  const monthlyMaintenance = homePrice * 0.006 / 12; // ~0.6% annually

  // Generate year-by-year comparison
  const comparisonData = [];
  let remainingMortgageBalance = loanAmount;
  let cumulativeRent = 0;
  let cumulativeBuy = 0;
  let breakEvenYear = 0;

  for (let year = 0; year <= years; year++) {
    // Rent costs
    const yearlyRent = monthlyRent * 12 * Math.pow(1 + rentIncreasePercent / 100, year);
    cumulativeRent += yearlyRent;

    // Buy costs
    let yearlyMortgage = 0;
    let yearlyPropertyTax = 0;
    let yearlyInsurance = 0;
    let yearlyMaintenance = 0;

    if (year > 0) {
      for (let month = 0; month < 12; month++) {
        yearlyMortgage += monthlyPayment;
        yearlyPropertyTax += monthlyPropertyTax;
        yearlyInsurance += monthlyInsurance;
        yearlyMaintenance += monthlyMaintenance;

        // Update balance
        const interestPayment = remainingMortgageBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingMortgageBalance -= principalPayment;
        if (remainingMortgageBalance < 0) remainingMortgageBalance = 0;
      }
    }

    const yearlyBuyCost = yearlyMortgage + yearlyPropertyTax + yearlyInsurance + yearlyMaintenance;
    cumulativeBuy += yearlyBuyCost;

    // Home value appreciation
    const homeValue = homePrice * Math.pow(1 + homeAppreciationPercent / 100, year);
    const netWorth = homeValue - remainingMortgageBalance;
    const rentCostAdjusted = cumulativeRent;
    const buyCostAdjusted = cumulativeBuy - netWorth; // Subtract equity built

    if (breakEvenYear === 0 && buyCostAdjusted < rentCostAdjusted && year > 0) {
      breakEvenYear = year;
    }

    comparisonData.push({
      year,
      rent: Math.round(cumulativeRent),
      buy: Math.round(cumulativeBuy),
      netWorth: Math.round(netWorth),
      homeValue: Math.round(homeValue),
    });
  }

  const finalRentCost = cumulativeRent;
  const finalBuyCost = cumulativeBuy;
  const finalHomeValue = homePrice * Math.pow(1 + homeAppreciationPercent / 100, years);
  const finalMortgageBalance = Math.max(0, remainingMortgageBalance);
  const finalEquity = finalHomeValue - finalMortgageBalance;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Total Rent Paid" value={formatCurrency(finalRentCost)} />
      <ResultCard label="Total Mortgage Payments" value={formatCurrency(finalBuyCost)} />
      <ResultCard label="Home Value After" value={formatCurrency(finalHomeValue)} />
      <ResultCard label="Remaining Mortgage" value={formatCurrency(finalMortgageBalance)} />
      <ResultCard label="Home Equity Built" value={formatCurrency(finalEquity)} highlight />
      {breakEvenYear > 0 && (
        <ResultCard label={`Break-Even Year`} value={`Year ${breakEvenYear}`} subtext="When buying becomes cheaper" highlight />
      )}
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Cumulative Cost Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Cumulative Cost ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="rent" stroke="#ef4444" strokeWidth={2} name="Rent Paid" />
            <Line type="monotone" dataKey="buy" stroke="#3b82f6" strokeWidth={2} name="Buy Cost" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The rent versus buy decision is one of the most important financial choices you'll make. Renting offers flexibility and lower upfront costs, while buying builds equity and offers stability but requires significant capital and maintenance. The right choice depends on your timeline, financial situation, local market conditions, and personal preferences. This calculator helps you compare the long-term financial implications of each option.
      </p>

      <p>
        <strong>The True Cost of Renting:</strong> Many people focus only on monthly rent, but renting also includes renters insurance, utilities, and regular rent increases. The calculator shows cumulative rent paid over your timeline. Rent typically increases 2-4% annually with inflation. The advantage of renting is flexibility—you can move without selling property—and no responsibility for repairs or maintenance. Renters also avoid property taxes and homeowners insurance, which are significant costs for homeowners.
      </p>

      <p>
        <strong>The True Cost of Buying:</strong> Homeownership involves mortgage payments, property taxes, insurance, maintenance (typically 0.5-1% of home value annually), and HOA fees if applicable. However, buying builds equity in your home. As you pay down your mortgage, you own more of the property. Plus, homes typically appreciate 2-4% annually over time. Tax benefits like the mortgage interest deduction can also make homeownership more affordable. The break-even point depends on these factors—in hot real estate markets with high appreciation, buying wins quickly; in flat markets, renting may be cheaper.
      </p>

      <p>
        <strong>Making Your Decision:</strong> If you plan to stay in one place for 5+ years, buying often makes financial sense. If you value flexibility or may relocate, renting is better. Consider your income stability, down payment savings, credit score, and local market conditions. Remember that housing should typically be 25-30% of gross income. Don't forget closing costs when buying (2-5% of home price) and moving costs when renting. Work with local real estate professionals to understand your specific market.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Rent vs Buy Calculator"
      description="Compare the financial impact of renting versus buying a home over time"
      slug="rent-vs-buy-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Buying Parameters</h3>
          <InputField
            id="home-price"
            label="Home Price"
            value={homePrice}
            onChange={setHomePrice}
            prefix="$"
            step={10000}
            min={0}
          />
          <InputField
            id="down-payment"
            label="Down Payment"
            value={downPayment}
            onChange={setDownPayment}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="mortgage-rate"
            label="Mortgage Rate"
            value={mortgageRate}
            onChange={setMortgageRate}
            suffix="%"
            step={0.1}
            min={0}
          />
          <InputField
            id="property-tax"
            label="Property Tax Rate"
            value={propertyTaxPercent}
            onChange={setPropertyTaxPercent}
            suffix="%"
            step={0.1}
            min={0}
          />
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Renting Parameters</h3>
          <InputField
            id="monthly-rent"
            label="Monthly Rent"
            value={monthlyRent}
            onChange={setMonthlyRent}
            prefix="$"
            step={100}
            min={0}
          />
          <InputField
            id="rent-increase"
            label="Annual Rent Increase"
            value={rentIncreasePercent}
            onChange={setRentIncreasePercent}
            suffix="%"
            step={0.5}
            min={0}
          />
        </div>

        <div className="pt-3">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">General Parameters</h3>
          <InputField
            id="appreciation"
            label="Home Appreciation Rate"
            value={homeAppreciationPercent}
            onChange={setHomeAppreciationPercent}
            suffix="%"
            step={0.5}
            min={0}
          />
          <InputField
            id="years"
            label="Time Period"
            value={years}
            onChange={setYears}
            suffix="years"
            step={1}
            min={1}
            max={50}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}
