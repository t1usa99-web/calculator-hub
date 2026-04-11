import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency } from "@/lib/utils";

export default function NetWorthCalculator() {
  const [cash, setCash] = useState(5000);
  const [savings, setSavings] = useState(25000);
  const [investments, setInvestments] = useState(50000);
  const [propertyValue, setPropertyValue] = useState(400000);
  const [vehicleValue, setVehicleValue] = useState(30000);
  const [otherAssets, setOtherAssets] = useState(10000);
  const [mortgageBalance, setMortgageBalance] = useState(320000);
  const [studentLoans, setStudentLoans] = useState(0);
  const [creditCard, setCreditCard] = useState(5000);
  const [otherDebts, setOtherDebts] = useState(0);

  // Calculate totals
  const totalAssets = cash + savings + investments + propertyValue + vehicleValue + otherAssets;
  const totalLiabilities = mortgageBalance + studentLoans + creditCard + otherDebts;
  const netWorth = totalAssets - totalLiabilities;

  // Pie chart data for assets
  const assetData = [
    { name: "Cash", value: cash, percent: ((cash / totalAssets) * 100).toFixed(1) },
    { name: "Savings", value: savings, percent: ((savings / totalAssets) * 100).toFixed(1) },
    { name: "Investments", value: investments, percent: ((investments / totalAssets) * 100).toFixed(1) },
    { name: "Property", value: propertyValue, percent: ((propertyValue / totalAssets) * 100).toFixed(1) },
    { name: "Vehicles", value: vehicleValue, percent: ((vehicleValue / totalAssets) * 100).toFixed(1) },
    { name: "Other", value: otherAssets, percent: ((otherAssets / totalAssets) * 100).toFixed(1) },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4"];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Total Assets" value={formatCurrency(totalAssets)} highlight />
      <ResultCard label="Total Liabilities" value={formatCurrency(totalLiabilities)} />
      <div className="md:col-span-2">
        <div className={`rounded-lg p-4 ${netWorth >= 0 ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className="text-sm text-gray-600 mb-1">Net Worth</p>
          <p className={`text-3xl font-bold ${netWorth >= 0 ? "text-green-700" : "text-red-700"}`}>{formatCurrency(netWorth)}</p>
        </div>
      </div>
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Asset Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={assetData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${percent}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {COLORS.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
            <ResponsiveContainer />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Assets vs Liabilities</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Assets</span>
              <span>{formatCurrency(totalAssets)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Liabilities</span>
              <span>{formatCurrency(totalLiabilities)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-red-500 h-3 rounded-full" style={{ width: `${(totalLiabilities / totalAssets) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Net worth is the difference between your total assets (what you own) and total liabilities (what you owe). It's a snapshot of your overall financial position at a specific point in time. A positive net worth means you own more than you owe, while a negative net worth (common for recent graduates with student loans) means you owe more than you own. Tracking net worth over time is one of the best ways to measure financial progress.
      </p>

      <p>
        <strong>Assets Include:</strong> Liquid assets like cash and savings accounts (accessible quickly), investments in stocks, bonds, and retirement accounts (longer-term growth), real estate and vehicles (physical property), and collectibles or other valuable items. Assets are typically categorized as liquid (easily converted to cash) or illiquid (takes time to convert). Building net worth requires either increasing assets or decreasing liabilities, ideally both.
      </p>

      <p>
        <strong>Liabilities Include:</strong> Mortgages, student loans, credit card debt, auto loans, personal loans, and any other money owed. Interest rates vary significantly—credit card debt is expensive (15-25% APR) while mortgage rates are lower (3-7% APR). Paying down high-interest debt is usually the most effective way to build net worth quickly. However, not all debt is bad; low-interest debt used to finance appreciating assets (like a home) can actually help build wealth.
      </p>

      <p>
        <strong>Building Net Worth:</strong> The typical path involves earning more, spending less, investing the difference, and paying down expensive debt. Net worth benchmarks by age vary but generally you should aim for roughly one year's salary by age 30, three times by 40, and six times by 50. However, individual circumstances vary greatly based on income, education, starting point, and life choices. Focus on consistent improvement rather than comparing to others.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Net Worth Calculator"
      description="Calculate your total net worth by tracking assets and liabilities"
      slug="net-worth-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-3">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 text-green-700">Assets</h3>
          <InputField
            id="cash"
            label="Cash/Checking"
            value={cash}
            onChange={setCash}
            prefix="$"
            step={1000}
            min={0}
          />
          <InputField
            id="savings"
            label="Savings Account"
            value={savings}
            onChange={setSavings}
            prefix="$"
            step={1000}
            min={0}
          />
          <InputField
            id="investments"
            label="Investments/Brokerage"
            value={investments}
            onChange={setInvestments}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="property"
            label="Property Value"
            value={propertyValue}
            onChange={setPropertyValue}
            prefix="$"
            step={10000}
            min={0}
          />
          <InputField
            id="vehicles"
            label="Vehicle(s) Value"
            value={vehicleValue}
            onChange={setVehicleValue}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="other-assets"
            label="Other Assets"
            value={otherAssets}
            onChange={setOtherAssets}
            prefix="$"
            step={1000}
            min={0}
          />
        </div>

        <div className="pt-3">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 text-red-700">Liabilities</h3>
          <InputField
            id="mortgage"
            label="Mortgage Balance"
            value={mortgageBalance}
            onChange={setMortgageBalance}
            prefix="$"
            step={10000}
            min={0}
          />
          <InputField
            id="student-loans"
            label="Student Loans"
            value={studentLoans}
            onChange={setStudentLoans}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="credit-card"
            label="Credit Card Debt"
            value={creditCard}
            onChange={setCreditCard}
            prefix="$"
            step={500}
            min={0}
          />
          <InputField
            id="other-debt"
            label="Other Debts"
            value={otherDebts}
            onChange={setOtherDebts}
            prefix="$"
            step={1000}
            min={0}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}
