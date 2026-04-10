import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SqmToSqftCalculator() {
  const [squareMeters, setSquareMeters] = useState(100);

  const squareFeet = squareMeters * 10.7639;

  // Chart data: conversion reference
  const chartData = [];
  for (let sm = 0; sm <= 1000; sm += 100) {
    const sf = sm * 10.7639;
    chartData.push({ squareMeters: sm, squareFeet: parseFloat(sf.toFixed(0)) });
  }

  // Reference table data
  const referenceData = [
    { sqm: 10, sqft: 107.6, desc: "Small room" },
    { sqm: 20, sqft: 215.3, desc: "Medium room" },
    { sqm: 40, sqft: 430.6, desc: "Large room" },
    { sqm: 100, sqft: 1076.4, desc: "Apartment" },
    { sqm: 200, sqft: 2152.8, desc: "House" },
    { sqm: 500, sqft: 5381.9, desc: "Large property" },
    { sqm: 1000, sqft: 10763.9, desc: "Very large property" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Square Feet"
          value={`${formatNumber(squareFeet, 2)} ft²`}
          highlight
        />
        <ResultCard
          label="Square Meters"
          value={`${formatNumber(squareMeters, 2)} m²`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Square Meters</th>
                <th className="text-left py-2 px-2">Square Feet</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.sqm}</td>
                  <td className="py-2 px-2">{formatNumber(row.sqft, 1)}</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Square Meters to Square Feet Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="squareMeters" label={{ value: "Square Meters", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Square Feet", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Legend />
          <Line type="monotone" dataKey="squareFeet" stroke="#10b981" name="Square Feet" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Converting square meters to square feet is essential when working with international real estate, construction plans, or property valuations. One square meter equals 10.7639 square feet. Square meters are the metric standard used globally in real estate, architecture, and construction. The US remains the primary exception, using square feet. Understanding this conversion helps compare property prices and sizes across international markets, interpret architectural drawings from different countries, and estimate renovation costs when working with international contractors.
      </p>

      <p>
        <strong>International Real Estate Comparison:</strong> European, Asian, and other international property listings show size in square meters; US listings use square feet. A 100 square meter apartment (1076 square feet) is medium-sized in many cities worldwide. To assess whether property is overpriced or a good value, converting to a common unit allows fair comparison. A 100 square meter apartment in Paris might cost significantly more than a 100 square meter apartment in other cities, but knowing the size in familiar units helps make informed decisions. Real estate investors comparing international markets rely on these conversions.
      </p>

      <p>
        <strong>Architecture and Construction:</strong> Architects and construction firms use different units depending on region: US professionals use square feet; most others use square meters. Building codes, material specifications, and cost estimates are often based on area. When international architects collaborate with US contractors, both units appear in plans and contracts. Construction material prices per square meter must be converted to price per square foot for US cost estimation, or vice versa. Understanding both systems prevents costly errors in project estimation and planning.
      </p>

      <p>
        <strong>Furniture and Interior Design:</strong> International furniture and appliance specifications often list dimensions and space requirements in meters. Understanding square meter conversions helps estimate whether furniture will fit in a space measured in feet. IKEA, European design firms, and international retailers list room dimensions in square meters on websites. Converting these to square feet helps visualize whether a room will accommodate desired furniture. Floor plans from international sources need metric-to-feet conversion for US applications.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Square Meters to Square Feet Calculator"
      description="Convert square meters to square feet for international real estate"
      slug="sqm-to-sqft"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="squareMeters"
          label="Area (Square Meters)"
          value={squareMeters}
          onChange={setSquareMeters}
          suffix="m²"
          step={1}
          min={0}
          max={100000}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SqmToSqftCalculator,
  slug: "sqm-to-sqft",
  title: "Square Meters to Square Feet Calculator",
  shortTitle: "m² to ft²",
  description: "Convert square meters to square feet for real estate",
  category: "other",
  icon: "📐",
  keywords: ["square meters to square feet", "area conversion", "international real estate", "property size"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from square meters to square feet?",
      answer: "One square meter equals 10.7639 square feet. For practical purposes, multiply square meters by 10.76 or round to 10.8. A quick approximation: multiply by 11 for easy mental math, which is accurate within about 2%. Example: 100 square meters × 11 = 1100 square feet (actual is 1076). These approximations work well for real estate and property comparisons.",
    },
    {
      question: "How many square feet is a typical European apartment?",
      answer: "European apartments typically range from 40-120 square meters. A 50 square meter apartment (538 square feet) is small but common in city centers. A 75 square meter apartment (807 square feet) is considered medium-sized. A 100 square meter apartment (1076 square feet) is spacious. These are smaller than typical US apartments of 600-1200 square feet (56-111 square meters) because land is more expensive and space more limited in European cities.",
    },
    {
      question: "How do I quickly estimate square meters to square feet in my head?",
      answer: "The simplest method: multiply square meters by 10. Example: 50 m² × 10 = 500 ft² (actual is 538). For more accuracy, multiply by 11 instead. A 100 m² property × 11 = 1100 ft² (actual is 1076). These approximations are within 5% and helpful when browsing international real estate listings. With practice, you'll develop intuition for common property sizes without calculating.",
    },
    {
      question: "Why do real estate prices differ so much between countries?",
      answer: "Land scarcity, demand, location, local economy, and building regulations all affect prices. Additionally, direct comparison requires understanding both area units and local market conditions. A 100 square meter apartment in London costs far more than a 100 square meter apartment in many other cities due to high demand and limited supply. Knowing size conversions allows you to compare price per square unit across markets. Price per square meter in one city versus price per square foot in another requires conversion to make fair comparisons.",
    },
    {
      question: "How can I convert square feet back to square meters?",
      answer: "Divide square feet by 10.7639 to get square meters. For approximation, divide by 11 for quick estimates. Example: 1000 square feet ÷ 11 = 91 square meters (actual is 92.9). A 2000 square foot house is about 186 square meters. This reverse conversion helps when reading US property listings and comparing them to international markets.",
    },
  ],
  dateModified: "2026-04-10",
});
