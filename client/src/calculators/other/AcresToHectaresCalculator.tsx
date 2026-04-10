import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

registerCalculator({
  component: AcresToHectaresCalculator,
  slug: "acres-to-hectares",
  title: "Acres to Hectares Calculator",
  shortTitle: "Acres to ha",
  description: "Convert acres to hectares for farmland and land transactions",
  category: "other",
  icon: "🏞️",
  keywords: ["acres to hectares", "land conversion", "farm size", "real estate", "agriculture"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from acres to hectares?",
      answer: "One acre equals 0.404686 hectares. For practical purposes, multiply acres by 0.405 or round to 0.4. A quick approximation: divide acres by 2.5 to estimate hectares. Example: 10 acres ÷ 2.5 = 4 hectares (actual is 4.047). These approximations are useful for farmland and real estate conversions without a calculator.",
    },
    {
      question: "How many hectares in a typical farm?",
      answer: "A small family farm might be 40-50 acres (16-20 hectares). A medium farm is 100-200 acres (40-81 hectares). A large commercial farm is 500+ acres (200+ hectares). In Europe, a 10-hectare (25-acre) farm is considered small but viable. The definition varies by country and what's grown. US farms average around 400 acres (162 hectares), though this varies significantly by region and crop type.",
    },
    {
      question: "Why do different countries use different land measurements?",
      answer: "The acre comes from British imperial tradition and is used in English-speaking countries. The hectare is part of the metric system and adopted globally. Historically, the acre was defined as the area of land a team of oxen could plow in one day. The hectare (100 meters × 100 meters) fits neatly into the metric system. Most countries switched to hectares when adopting the metric system; the US and UK retained acres. For international farming and land trading, understanding both is essential.",
    },
    {
      question: "How can I estimate acres to hectares quickly?",
      answer: "The simplest approximation: multiply acres by 0.4 or divide by 2.5. Example: 100 acres ÷ 2.5 = 40 hectares (actual is 40.47). Another method: remember that 1 hectare ≈ 2.5 acres, so 10 acres ≈ 4 hectares, 50 acres ≈ 20 hectares. With practice, you'll develop intuition for common farm and property sizes. For precise calculations, use 0.404686.",
    },
    {
      question: "What is the reverse conversion from hectares to acres?",
      answer: "One hectare equals 2.47105 acres. Multiply hectares by 2.47 to get acres, or for approximation, multiply by 2.5. Example: 20 hectares × 2.47 = 49.4 acres. This reverse conversion helps when reading international agricultural data or comparing land prices across countries. A 100-hectare estate (247 acres) is substantial in most places.",
    },
  ],
  dateModified: "2026-04-10",
});
