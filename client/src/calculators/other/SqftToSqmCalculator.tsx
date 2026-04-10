import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SqftToSqmCalculator() {
  const [squareFeet, setSquareFeet] = useState(1000);

  const squareMeters = squareFeet * 0.092903;

  // Chart data: conversion reference
  const chartData = [];
  for (let sf = 0; sf <= 10000; sf += 1000) {
    const sm = sf * 0.092903;
    chartData.push({ squareFeet: sf, squareMeters: parseFloat(sm.toFixed(1)) });
  }

  // Reference table data
  const referenceData = [
    { sqft: 100, sqm: 9.29, desc: "Small room" },
    { sqft: 200, sqm: 18.58, desc: "Medium room" },
    { sqft: 400, sqm: 37.16, desc: "Apartment" },
    { sqft: 1000, sqm: 92.9, desc: "Small house" },
    { sqft: 2000, sqm: 185.8, desc: "Medium house" },
    { sqft: 5000, sqm: 464.5, desc: "Large house" },
    { sqft: 10000, sqm: 929, desc: "Mansion" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Square Meters"
          value={`${formatNumber(squareMeters, 2)} m²`}
          highlight
        />
        <ResultCard
          label="Square Feet"
          value={`${formatNumber(squareFeet, 0)} ft²`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Square Feet</th>
                <th className="text-left py-2 px-2">Square Meters</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{formatNumber(row.sqft, 0)}</td>
                  <td className="py-2 px-2">{formatNumber(row.sqm, 2)}</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Square Feet to Square Meters Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="squareFeet" label={{ value: "Square Feet", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Square Meters", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Legend />
          <Line type="monotone" dataKey="squareMeters" stroke="#3b82f6" name="Square Meters" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Square feet and square meters are units of area used to measure land, buildings, and floor space. One square foot equals 0.092903 square meters. Square feet are primarily used in the United States, while square meters are the metric standard used globally. Understanding the conversion is essential for real estate transactions, property comparisons across countries, construction projects, and interior design. A square foot is the area of a 1-foot by 1-foot space; a square meter is 1 meter by 1 meter, making it roughly 10.76 times larger.
      </p>

      <p>
        <strong>Real Estate and Housing:</strong> US real estate listings show property size in square feet; international listings use square meters. A typical US home is 2000-3000 square feet (186-279 square meters). Apartments might range from 500-1500 square feet (46-139 square meters). Commercial properties, warehouses, and office buildings are also measured in square feet in the US. When comparing housing costs internationally, converting between units helps determine relative value and pricing per unit area. Price per square foot in the US translates to price per square meter internationally, making this conversion important for investment decisions.
      </p>

      <p>
        <strong>Construction and Renovation:</strong> Contractors, architects, and builders in the US work with square feet; most other countries use square meters. Building materials, flooring, and paint coverage are often specified in square feet in the US but square meters elsewhere. When estimating project costs or material quantities, accurate area conversion prevents errors. Land surveying uses both units depending on location: the US uses square feet or acres; most countries use square meters or hectares. Understanding both systems is essential for international construction projects.
      </p>

      <p>
        <strong>Quick Conversion Tips:</strong> To convert square feet to square meters, multiply by 0.093 (or roughly 1/11). To convert square meters to square feet, multiply by 10.76 (roughly 11). A 100 square foot room is about 9.3 square meters. A 1000 square foot apartment is about 93 square meters. These quick approximations help when browsing real estate listings in different regions without needing a calculator. The factor is roughly 1 square meter = 10.76 square feet, or 1 square foot = 0.093 square meters for easy mental math.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Square Feet to Square Meters Calculator"
      description="Convert square feet to square meters for real estate and construction"
      slug="sqft-to-sqm"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="squareFeet"
          label="Area (Square Feet)"
          value={squareFeet}
          onChange={setSquareFeet}
          suffix="ft²"
          step={10}
          min={0}
          max={1000000}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SqftToSqmCalculator,
  slug: "sqft-to-sqm",
  title: "Square Feet to Square Meters Calculator",
  shortTitle: "ft² to m²",
  description: "Convert square feet to square meters for real estate",
  category: "other",
  icon: "📐",
  keywords: ["square feet to square meters", "area conversion", "real estate", "property size"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from square feet to square meters?",
      answer: "One square foot equals 0.092903 square meters. For practical purposes, multiply square feet by 0.0929 or round to 0.093. A quick approximation: divide square feet by 10.76 to get square meters. Example: 1000 square feet ÷ 10.76 = 92.9 square meters. These approximations are accurate enough for real estate and construction purposes.",
    },
    {
      question: "How many square meters in a typical US home?",
      answer: "A typical US single-family home is 2000-2500 square feet, which equals 186-232 square meters. Smaller homes might be 1200 square feet (111 square meters); larger homes 4000 square feet (371 square meters). Apartments typically range from 600-1200 square feet (56-111 square meters). These ranges help when comparing housing internationally, understanding that US homes are often larger than typical European homes of similar price points.",
    },
    {
      question: "Why do real estate listings use different units?",
      answer: "Square feet is the standard in the US due to historical tradition; metric systems are used globally. When comparing housing prices between countries, converting to a common unit (usually square meters) allows fair comparison. US price per square foot converts to international price per square meter. Knowing both allows you to understand whether a property in one market is more expensive than comparable property in another. Real estate apps increasingly show both units for international users.",
    },
    {
      question: "How can I estimate square feet to square meters quickly?",
      answer: "The easiest approximation: multiply square feet by 0.1 (ignore the last digit) for a rough estimate. Example: 1200 ft² ≈ 120 m² (actual is 111). For better accuracy, multiply by 0.093 instead. Another method: remember that 1 square meter is about 10.76 square feet, so roughly 1 square meter for every 11 square feet. With practice, you'll develop intuition for common home sizes without calculating.",
    },
    {
      question: "How do I convert square meters back to square feet?",
      answer: "Multiply square meters by 10.7639 to get square feet. For quick approximation, multiply by 10.76 or even round to 11. Example: 100 square meters × 10.76 = 1076 square feet. A 50 square meter apartment is about 538 square feet. This reverse conversion helps when reading international property listings or comparing housing markets across countries.",
    },
  ],
  dateModified: "2026-04-10",
});
