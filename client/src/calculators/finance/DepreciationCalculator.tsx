import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function DepreciationCalculator() {
  const [assetCost, setAssetCost] = useState(100000);
  const [salvageValue, setSalvageValue] = useState(10000);
  const [usefulLife, setUsefulLife] = useState(10);
  const [depreciationMethod, setDepreciationMethod] = useState("straight-line");

  const methodOptions = [
    { value: "straight-line", label: "Straight-Line" },
    { value: "declining-balance", label: "Double Declining Balance" },
    { value: "sum-of-years", label: "Sum-of-Years Digits" },
  ];

  const depreciableAmount = assetCost - salvageValue;
  const chartData = [];

  let bookValue = assetCost;

  for (let year = 0; year <= usefulLife; year++) {
    let annualDepreciation = 0;

    if (depreciationMethod === "straight-line") {
      annualDepreciation = depreciableAmount / usefulLife;
    } else if (depreciationMethod === "declining-balance") {
      const rate = (2 / usefulLife);
      annualDepreciation = bookValue * rate;
    } else if (depreciationMethod === "sum-of-years") {
      const sumOfYears = (usefulLife * (usefulLife + 1)) / 2;
      const remainingYears = usefulLife - year;
      annualDepreciation = (remainingYears / sumOfYears) * depreciableAmount;
    }

    chartData.push({
      year,
      bookValue: Math.max(salvageValue, bookValue),
      annualDepreciation,
      cumulativeDepreciation: assetCost - Math.max(salvageValue, bookValue),
    });

    bookValue = Math.max(salvageValue, bookValue - annualDepreciation);
  }

  const totalDepreciation = assetCost - Math.max(salvageValue, bookValue);
  const currentYearDepreciation = chartData[1]?.annualDepreciation || 0;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Asset Cost"
        value={formatCurrency(assetCost)}
      />
      <ResultCard
        label="Salvage Value"
        value={formatCurrency(salvageValue)}
      />
      <ResultCard
        label="Depreciable Amount"
        value={formatCurrency(depreciableAmount)}
        subtext="Cost minus salvage value"
      />
      <ResultCard
        label="Useful Life"
        value={usefulLife.toString()}
        subtext="years"
      />
      <ResultCard
        label="Year 1 Depreciation"
        value={formatCurrency(currentYearDepreciation)}
        highlight
      />
      <ResultCard
        label="Total Depreciation Over Life"
        value={formatCurrency(totalDepreciation)}
        highlight
        subtext={`Book value reduces to ${formatCurrency(salvageValue)}`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Asset Book Value Over Time ({depreciationMethod})</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Book Value ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="bookValue" stroke="#3b82f6" name="Book Value" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Depreciation is an accounting method that spreads the cost of an asset over its useful life. When a business buys equipment, vehicles, or machinery, it doesn't expense the entire cost immediately. Instead, it allocates the cost across years the asset is used. This matches expenses to revenue and accurately reflects the asset's declining value. Different depreciation methods produce different expense patterns, affecting taxable income and cash flow timing.
      </p>

      <p>
        <strong>Straight-Line Depreciation:</strong> The most common method divides the depreciable amount equally across all years. For a {formatCurrency(100000)} asset with a {formatCurrency(10000)} salvage value over 10 years, annual depreciation is {formatCurrency(9000)} ({formatCurrency(90000)} ÷ 10). Each year reduces book value by the same amount, creating a linear decline. This method is simple, predictable, and best for assets with even wear-and-tear like buildings or furniture.
      </p>

      <p>
        <strong>Double Declining Balance (DDB):</strong> An accelerated method that doubles the straight-line rate and applies it to the declining book value. Year 1 rate is 20% (2 ÷ 10 years), applied to {formatCurrency(100000)} = {formatCurrency(20000)}. Year 2: 20% of {formatCurrency(80000)} = {formatCurrency(16000)}. This front-loads depreciation, reducing taxable income significantly in early years. It's ideal for technology and vehicles that lose value faster initially.
      </p>

      <p>
        <strong>Sum-of-Years-Digits (SYD):</strong> Another accelerated method that uses a declining fraction. For a 10-year asset, sum of years is 1+2+...+10 = 55. Year 1 depreciation: (10/55) × {formatCurrency(90000)} = {formatCurrency(16364)}. Year 2: (9/55) × {formatCurrency(90000)} = {formatCurrency(14727)}. This moderately accelerates deductions between straight-line and DDB, useful for machinery and equipment with predictable decline patterns.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Asset Depreciation Calculator"
      description="Calculate depreciation schedules using straight-line, declining balance, or sum-of-years methods"
      slug="depreciation-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="asset-cost"
          label="Asset Cost (Purchase Price)"
          value={assetCost}
          onChange={setAssetCost}
          prefix="$"
          step={10000}
          min={1000}
        />
        <InputField
          id="salvage-value"
          label="Salvage Value (Residual Value)"
          value={salvageValue}
          onChange={setSalvageValue}
          prefix="$"
          step={5000}
          min={0}
          hint="Expected value at end of useful life"
        />
        <InputField
          id="useful-life"
          label="Useful Life"
          value={usefulLife}
          onChange={setUsefulLife}
          suffix="years"
          step={1}
          min={1}
          max={50}
          hint="Expected years of productive use"
        />
        <SelectField
          id="depreciation-method"
          label="Depreciation Method"
          value={depreciationMethod}
          onChange={setDepreciationMethod}
          options={methodOptions}
        />
      </div>
    </CalculatorLayout>
  );
}
