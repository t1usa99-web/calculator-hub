import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { COST_OF_LIVING_FAQS } from "@/lib/faq-finance-invest";

// Cost of living indices for major US cities (relative to national average of 100)
const CITY_INDICES = {
  "New York, NY": 187,
  "San Francisco, CA": 194,
  "Los Angeles, CA": 166,
  "Chicago, IL": 107,
  "Houston, TX": 95,
  "Phoenix, AZ": 103,
  "Philadelphia, PA": 126,
  "San Diego, CA": 150,
  "Seattle, WA": 146,
  "Miami, FL": 124,
  "Boston, MA": 162,
  "Washington, DC": 144,
  "Denver, CO": 131,
  "Atlanta, GA": 108,
  "Austin, TX": 116,
};

export default function CostOfLivingCalculator() {
  const [currentSalary, setCurrentSalary] = useState(75000);
  const [currentCity, setCurrentCity] = useState("Chicago, IL");
  const [newCity, setNewCity] = useState("San Francisco, CA");

  const currentIndex = CITY_INDICES[currentCity as keyof typeof CITY_INDICES] || 100;
  const newIndex = CITY_INDICES[newCity as keyof typeof CITY_INDICES] || 100;

  // Calculate equivalent salary for new city
  // If current salary supports current cost of living index,
  // equivalent salary = current salary * (new index / current index)
  const equivalentSalary = currentSalary * (newIndex / currentIndex);
  const salaryDifference = equivalentSalary - currentSalary;
  const percentageChange = ((salaryDifference / currentSalary) * 100);

  // Generate comparison data
  const comparisonData = [
    {
      category: "Current City",
      salary: currentSalary,
      costIndex: currentIndex,
      adjustedForComparison: currentSalary,
    },
    {
      category: "New City (Adjusted)",
      salary: equivalentSalary,
      costIndex: newIndex,
      adjustedForComparison: equivalentSalary,
    },
  ];

  // Sample monthly expense breakdown (using median US household)
  const monthlyIncome = currentSalary / 12;
  const currentMonthlyExpenses = monthlyIncome * (currentIndex / 100);
  const newMonthlyExpenses = monthlyIncome * (newIndex / 100);

  const expenseBreakdown = [
    { category: "Housing", currentCity: currentMonthlyExpenses * 0.28, newCity: newMonthlyExpenses * 0.28 },
    { category: "Food", currentCity: currentMonthlyExpenses * 0.12, newCity: newMonthlyExpenses * 0.12 },
    { category: "Transportation", currentCity: currentMonthlyExpenses * 0.18, newCity: newMonthlyExpenses * 0.18 },
    { category: "Utilities", currentCity: currentMonthlyExpenses * 0.08, newCity: newMonthlyExpenses * 0.08 },
    { category: "Healthcare", currentCity: currentMonthlyExpenses * 0.08, newCity: newMonthlyExpenses * 0.08 },
    { category: "Other", currentCity: currentMonthlyExpenses * 0.26, newCity: newMonthlyExpenses * 0.26 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Current Salary" value={formatCurrency(currentSalary)} />
      <ResultCard label="Equivalent Salary" value={formatCurrency(equivalentSalary)} highlight />
      <ResultCard label="Salary Difference" value={formatCurrency(salaryDifference)} highlight={salaryDifference > 0} />
      <ResultCard label="Percentage Change" value={formatPercent(percentageChange / 100)} highlight={percentageChange > 0} />
      <ResultCard label="Current City Index" value={formatNumber(currentIndex)} />
      <ResultCard label="New City Index" value={formatNumber(newIndex)} />
      <ResultCard label="Monthly Income (Current)" value={formatCurrency(monthlyIncome)} />
      <ResultCard label="Monthly Expenses (Current)" value={formatCurrency(currentMonthlyExpenses)} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Estimated Monthly Expense Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={expenseBreakdown}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis label={{ value: "Monthly Cost ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Bar dataKey="currentCity" fill="#3b82f6" name={currentCity} />
            <Bar dataKey="newCity" fill="#10b981" name={newCity} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Cost of Living Indices</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis label={{ value: "Cost Index", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="costIndex" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Cost of living varies significantly across the United States. Moving to a more expensive city requires a higher salary to maintain your current standard of living. Cost of living indices compare expenses (housing, food, transportation, utilities, etc.) between cities, with the national average set at 100.
      </p>

      <p>
        <strong>What's Included in Cost Index:</strong> The cost of living index includes housing (rent or mortgage, property taxes, insurance), food and groceries, transportation (car payments, insurance, fuel), utilities, healthcare, childcare, and entertainment. A city with an index of 150 means the same basket of goods costs 50% more than the national average, while an index of 75 means it costs 25% less.
      </p>

      <p>
        <strong>Housing is the Biggest Factor:</strong> Housing typically represents 25-35% of living expenses and varies the most between cities. San Francisco and New York have housing costs 2-3 times the national average, while smaller cities may have housing costs well below average. When comparing salaries between cities, housing differences often account for 50-70% of the total cost difference.
      </p>

      <p>
        <strong>Making the Move:</strong> When relocating, research not just the salary difference but the total cost adjustment needed. A job offer in an expensive city might seem attractive until you realize you'd need a much higher salary to maintain your lifestyle. Conversely, a move to a lower-cost area could significantly increase your purchasing power and savings potential, even with a lower salary.
      </p>

      <p>
        <strong>Beyond Salary:</strong> Consider non-financial factors too—career opportunities, quality of life, weather, commute times, and proximity to family. Sometimes a lower standard of living in a lower-cost city isn't worth it, while other times the financial benefits of a move are overwhelming. Use this calculator as part of a broader evaluation of relocation decisions.
      </p>

      <p>
        <strong>Note:</strong> This calculator uses approximate cost of living indices. Actual costs vary by neighborhood and specific lifestyle choices. For detailed comparisons, use dedicated cost of living websites that let you compare specific expenses and neighborhoods.
      </p>
    </div>
  );

  const cityOptions = Object.keys(CITY_INDICES).map((city) => ({
    value: city,
    label: city,
  }));

  return (
    <CalculatorLayout
      title="Cost of Living Calculator"
      description="Compare cost of living between cities and calculate equivalent salary"
      slug="cost-of-living-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="current-salary"
          label="Current Salary"
          value={currentSalary}
          onChange={setCurrentSalary}
          prefix="$"
          step={10000}
          min={0}
        />
        <SelectField
          id="current-city"
          label="Current City"
          value={currentCity}
          onChange={setCurrentCity}
          options={cityOptions}
        />
        <SelectField
          id="new-city"
          label="New City"
          value={newCity}
          onChange={setNewCity}
          options={cityOptions}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CostOfLivingCalculator,
  faqs: COST_OF_LIVING_FAQS,
  slug: "cost-of-living-calculator",
  title: "Cost of Living Calculator",
  shortTitle: "Cost of Living",
  description: "Compare cost of living between cities and calculate equivalent salary",
  category: "finance",
  icon: "🏙️",
  keywords: ["cost of living", "relocation", "salary comparison", "city comparison"],
  popular: true,
});
