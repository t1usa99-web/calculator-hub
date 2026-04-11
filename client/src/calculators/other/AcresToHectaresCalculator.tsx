import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function AcresToHectaresCalculator() {
  const [acres, setAcres] = useState(10);

  const hectares = acres * 0.404686;

  // Chart data: conversion reference
  const chartData = [];
  for (let a = 0; a <= 500; a += 50) {
    const h = a * 0.404686;
    chartData.push({ acres: a, hectares: parseFloat(h.toFixed(2)) });
  }

  // Reference table data
  const referenceData = [
    { acres: 0.5, hectares: 0.202, desc: "Small plot" },
    { acres: 1, hectares: 0.405, desc: "Standard lot" },
    { acres: 5, hectares: 2.023, desc: "Small farm" },
    { acres: 10, hectares: 4.047, desc: "Farm property" },
    { acres: 50, hectares: 20.234, desc: "Medium farm" },
    { acres: 100, hectares: 40.469, desc: "Large farm" },
    { acres: 500, hectares: 202.343, desc: "Very large property" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Hectares"
          value={`${formatNumber(hectares, 2)} ha`}
          highlight
        />
        <ResultCard
          label="Acres"
          value={`${formatNumber(acres, 2)} ac`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Acres</th>
                <th className="text-left py-2 px-2">Hectares</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.acres}</td>
                  <td className="py-2 px-2">{formatNumber(row.hectares, 3)}</td>
                  <td className="py-2 px-2">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Acres to Hectares Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="acres" label={{ value: "Acres", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Hectares", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Line type="monotone" dataKey="hectares" stroke="#ef4444" name="Hectares" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Acres and hectares are units of land area used in agriculture, real estate, and land management. One acre equals 0.404686 hectares. The acre is primarily used in the United States, UK, Australia, and Canada; the hectare is the metric standard used globally, especially in Europe and Asia. Understanding the conversion is essential for comparing farmland values across countries, international real estate transactions, and agricultural operations. One hectare is roughly 2.47 acres, making it significantly larger than an acre. Land prices, crop yields, and property sizes are often compared internationally using these conversions.
      </p>

      <p>
        <strong>Agricultural Applications:</strong> Farmers worldwide use acres or hectares to describe farmland. US farm data is reported in acres; European and Asian data in hectares. A 100-acre farm in the US (40.5 hectares) is small to medium; a 100-hectare farm (247 acres) is considered moderate-sized internationally. Crop yields are compared in bushels per acre (US) or kilograms per hectare (international), requiring conversion for global comparisons. Agricultural subsidies, land values, and commodity prices often need acre-hectare conversion for accurate comparison across markets.
      </p>

      <p>
        <strong>Real Estate and Land Transactions:</strong> US land is typically sold by the acre; international land by the hectare. A 10-acre property (4 hectares) is considered small residential or development property in the US. A 50-acre farm (20 hectares) is typical small-to-medium size. Large estates, conservation lands, and national parks are measured in acres or hectares depending on location. Real estate professionals dealing internationally must be fluent in both units. Land taxation, zoning regulations, and development planning often require understanding both measurement systems.
      </p>

      <p>
        <strong>Environmental and Conservation Uses:</strong> Deforestation, reforestation, and land conservation are tracked globally using hectares. International environmental databases use hectares as the standard. A 100-hectare forest (247 acres) is significant for carbon sequestration studies. Protected areas and national parks report their size in hectares internationally, though US lands are in acres. Conservation organizations working across borders need to convert between units. Climate and agriculture studies often compare land use across regions using hectares for consistency.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Acres to Hectares Calculator"
      description="Convert acres to hectares for farmland and real estate"
      slug="acres-to-hectares"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="acres"
          label="Area (Acres)"
          value={acres}
          onChange={setAcres}
          suffix="ac"
          step={0.5}
          min={0}
          max={10000}
        />
      </div>
    </CalculatorLayout>
  );
}
