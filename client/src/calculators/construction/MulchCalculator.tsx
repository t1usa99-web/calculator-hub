import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";

export default function MulchCalculator() {
  const [areaLength, setAreaLength] = useState(30);
  const [areaWidth, setAreaWidth] = useState(20);
  const [depth, setDepth] = useState(3); // inches
  const [pricePerCubicYard, setPricePerCubicYard] = useState(40);
  const [pricePerBag, setPricePerBag] = useState(5);
  const [bulkPricingMin, setBulkPricingMin] = useState(150);

  // Calculate cubic yards
  const area = areaLength * areaWidth;
  const depthFeet = depth / 12;
  const cubicFeet = area * depthFeet;
  const cubicYards = cubicFeet / 27;

  // Calculate bags needed (2 cu ft per bag)
  const bagsNeeded = Math.ceil((cubicFeet / 2) * 1.1); // 10% extra for settling

  // Calculate costs
  const bulkCost = cubicYards * pricePerCubicYard;
  const baggingCost = bagsNeeded * pricePerBag;

  // Determine which is cheaper
  const isBulkCheaper = bulkCost < baggingCost;
  const recommendedCost = Math.min(bulkCost, baggingCost);

  const chartData = [
    { name: "Bulk (cubic yards)", cost: bulkCost, amount: cubicYards },
    { name: "Bagged", cost: baggingCost, amount: bagsNeeded },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Area" value={formatNumber(area, 0) + " sqft"} />
      <ResultCard label="Depth" value={formatNumber(depth, 0) + " in (" + formatNumber(depthFeet, 2) + " ft)"} />
      <ResultCard label="Cubic Feet" value={formatNumber(cubicFeet, 0)} />
      <ResultCard label="Cubic Yards" value={formatNumber(cubicYards, 2)} highlight={true} />
      <ResultCard label="Bags Needed (2 cu ft)" value={formatNumber(bagsNeeded, 0)} />
      <ResultCard label="Bulk Cost" value={formatCurrency(bulkCost)} />
      <ResultCard label="Bagged Cost" value={formatCurrency(baggingCost)} />
      <ResultCard
        label="Recommended Option"
        value={isBulkCheaper ? "Bulk" : "Bagged"}
        highlight={true}
      />
      <ResultCard
        label="Best Total Cost"
        value={formatCurrency(recommendedCost)}
        highlight={true}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cost Comparison: Bulk vs. Bagged</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" label={{ value: "Cost ($)", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Amount", angle: 90, position: "insideRight" }} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "cost") return formatCurrency(value as number);
              return formatNumber(value as number, 1);
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="cost" fill="#3b82f6" name="Cost ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Mulch Landscaping Guide</h3>
      <p>
        <strong>Mulch Depth and Coverage:</strong> Standard mulch depth is 2-3 inches for aesthetics and moisture retention. Deeper mulch (3-4 inches) provides better weed suppression and moisture control but costs more. Shallow mulch (1-2 inches) provides basic ground cover but may allow weeds to grow through. Professional landscapers typically use 3 inches as the standard. Mulch settles over time, so add extra during application.
      </p>
      <p>
        <strong>Bulk vs. Bagged Mulch:</strong> Bulk mulch is more economical for large areas (20+ cubic yards). Bulk delivery costs less per cubic yard but requires proper storage and spreading equipment. Bagged mulch is convenient for smaller areas, provides precise quantities, and is easier to apply manually. For projects over 5 cubic yards, bulk is usually cheaper. Bags (typically 2 cubic feet) make bulk and bagging costs easy to compare.
      </p>
      <p>
        <strong>Types of Mulch:</strong> Hardwood mulch is long-lasting and attractive. Cedar/pine mulch smells great but breaks down faster. Colored mulch lasts longer but may contain dyes. Shredded bark provides a natural appearance. Rubber mulch is durable and good for play areas but expensive. Choose based on aesthetics, longevity, and budget. Higher-quality mulch lasts 3-5 years; cheaper mulch breaks down in 1-2 years.
      </p>
      <p>
        <strong>Benefits and Maintenance:</strong> Mulch conserves soil moisture, suppresses weeds, regulates soil temperature, and improves aesthetics. Apply mulch annually to maintain depth (1 inch per year typical breakdown). Keep mulch 6 inches from tree trunks to prevent rot. Mulch breaks down over time, adding organic matter to soil. Remove old mulch annually or just top-dress with fresh mulch.
      </p>
      <p>
        <strong>Calculating Your Needs:</strong> Calculate cubic yards using length {'×'} width {'×'} depth (in feet) / 27. Order 10% extra to account for settling. For bagged mulch, divide cubic feet by 2 (size of typical bag). Always order slightly extra to ensure adequate coverage. Bulk suppliers often have minimum orders; confirm before purchasing.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mulch Calculator"
      description="Calculate mulch needed and compare bulk vs. bagged pricing"
      slug="mulch-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="area-length"
          label="Area Length (ft)"
          value={areaLength}
          onChange={setAreaLength}
          min={1}
          step={5}
        />

        <InputField
          id="area-width"
          label="Area Width (ft)"
          value={areaWidth}
          onChange={setAreaWidth}
          min={1}
          step={5}
        />

        <InputField
          id="depth"
          label="Mulch Depth (inches)"
          value={depth}
          onChange={setDepth}
          min={1}
          max={6}
          step={0.5}
        />

        <InputField
          id="bulk-price"
          label="Bulk Price per Cubic Yard"
          value={pricePerCubicYard}
          onChange={setPricePerCubicYard}
          prefix="$"
          min={20}
          step={5}
        />

        <InputField
          id="bag-price"
          label="Bagged Price per Bag (2 cu ft)"
          value={pricePerBag}
          onChange={setPricePerBag}
          prefix="$"
          min={2}
          step={0.50}
        />

        <InputField
          id="bulk-min"
          label="Bulk Minimum Order (cu yd)"
          value={bulkPricingMin}
          onChange={setBulkPricingMin}
          min={1}
          step={10}
        />
      </div>
    </CalculatorLayout>
  );
}
