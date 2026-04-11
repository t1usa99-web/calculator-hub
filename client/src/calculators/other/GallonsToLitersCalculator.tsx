import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function GallonsToLitersCalculator() {
  const [gallons, setGallons] = useState(5);

  const liters = gallons * 3.78541;

  // Chart data: conversion reference
  const chartData = [];
  for (let g = 0; g <= 50; g += 5) {
    const l = g * 3.78541;
    chartData.push({ gallons: g, liters: parseFloat(l.toFixed(2)) });
  }

  // Reference table data
  const referenceData = [
    { gal: 0.25, lit: 0.946, desc: "1 quart" },
    { gal: 0.5, lit: 1.893, desc: "2 quarts" },
    { gal: 1, lit: 3.785, desc: "Standard gallon" },
    { gal: 5, lit: 18.927, desc: "5-gallon bucket" },
    { gal: 10, lit: 37.854, desc: "10 gallons" },
    { gal: 20, lit: 75.708, desc: "Large container" },
    { gal: 55, lit: 208.197, desc: "Oil drum" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Liters"
          value={`${formatNumber(liters, 2)} L`}
          highlight
        />
        <ResultCard
          label="Gallons"
          value={`${formatNumber(gallons, 2)} gal`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Gallons</th>
                <th className="text-left py-2 px-2">Liters</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.gal}</td>
                  <td className="py-2 px-2">{formatNumber(row.lit, 3)}</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Gallons to Liters Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="gallons" label={{ value: "Gallons", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Liters", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Line type="monotone" dataKey="liters" stroke="#3b82f6" name="Liters" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The gallon and liter are units of volume used to measure liquids. One gallon equals 3.78541 liters. The gallon is primarily used in the United States, while the liter is the metric standard used globally. Understanding the conversion is essential for cooking, fuel consumption, beverage containers, and industrial applications. The US gallon differs from the imperial gallon used in the UK (1 imperial gallon = 4.546 liters), so it's important to verify which gallon you're using when converting.
      </p>

      <p>
        <strong>Common Uses for Gallons and Liters:</strong> In the US, milk, juice, and water are sold in gallons; gasoline is also measured in gallons (though sometimes called "fuel gallons"). Globally, beverages and cooking oil are sold in liters. Car fuel efficiency in the US is measured as miles per gallon (mpg), while most countries use liters per 100 kilometers (L/100km). Paint, cleaning products, and other chemicals can be labeled in either unit depending on where they're sold. Water heaters in the US are rated by gallon capacity; international ones use liters. Understanding both units helps compare product sizes across regions.
      </p>

      <p>
        <strong>Real-World Context:</strong> A typical US gas tank holds 12-16 gallons (45-60 liters). A 5-gallon bucket holds 18.9 liters, which is why it's a common size for paint, water, and cleaning products. Large soda bottles are 2 liters (about 0.53 gallons). A bathtub typically holds 40-80 gallons (150-300 liters) of water. Understanding these relationships helps estimate quantities without a calculator. Industrial applications like swimming pools, aquariums, and water storage tanks use both units depending on region and industry standards.
      </p>

      <p>
        <strong>Metric Advantage:</strong> The liter is part of the metric system, making it easier to convert to other metric units: 1 liter = 1000 milliliters, 1 milliliter = 1 cubic centimeter. The gallon doesn't convert as cleanly in imperial units. Scientists and engineers prefer liters for this reason. When working with international projects or scientific data, liters are the standard. Many modern US industries (pharmaceuticals, food processing) have adopted liters as their standard measurement to align with global practices.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Gallons to Liters Calculator"
      description="Convert gallons to liters instantly with reference data"
      slug="gallons-to-liters"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="gallons"
          label="Volume (Gallons)"
          value={gallons}
          onChange={setGallons}
          suffix="gal"
          step={0.1}
          min={0}
          max={1000}
        />
      </div>
    </CalculatorLayout>
  );
}
