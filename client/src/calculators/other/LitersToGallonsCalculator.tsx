import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function LitersToGallonsCalculator() {
  const [liters, setLiters] = useState(20);

  const gallons = liters * 0.264172;

  // Chart data: conversion reference
  const chartData = [];
  for (let l = 0; l <= 200; l += 10) {
    const g = l * 0.264172;
    chartData.push({ liters: l, gallons: parseFloat(g.toFixed(2)) });
  }

  // Reference table data
  const referenceData = [
    { lit: 1, gal: 0.264, desc: "1 liter" },
    { lit: 2, gal: 0.528, desc: "2-liter bottle" },
    { lit: 5, gal: 1.321, desc: "5 liters" },
    { lit: 10, gal: 2.642, desc: "10 liters" },
    { lit: 20, gal: 5.283, desc: "20 liters" },
    { lit: 50, gal: 13.209, desc: "50 liters" },
    { lit: 100, gal: 26.417, desc: "100 liters" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Gallons"
          value={`${formatNumber(gallons, 2)} gal`}
          highlight
        />
        <ResultCard
          label="Liters"
          value={`${formatNumber(liters, 2)} L`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Liters</th>
                <th className="text-left py-2 px-2">Gallons</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.lit}</td>
                  <td className="py-2 px-2">{formatNumber(row.gal, 3)}</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Liters to Gallons Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="liters" label={{ value: "Liters", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Gallons", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Line type="monotone" dataKey="gallons" stroke="#10b981" name="Gallons" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Converting liters to gallons is important when dealing with international products, vehicles, or cooking measurements. One liter equals 0.264172 US gallons. The liter is the metric standard used worldwide for measuring volume in liquids, cooking, and scientific work. The US gallon is primarily used in the United States. Understanding this conversion helps when comparing product sizes across regions, fuel efficiency ratings, and recipe scaling. Always ensure you're using US gallons, not imperial gallons (UK), as the conversion differs significantly.
      </p>

      <p>
        <strong>Liters in Everyday Life:</strong> Most beverages globally are sold in liters: 1-liter bottles, 2-liter bottles of soda, and 3-liter wine bottles are common internationally. A 2-liter bottle equals about 0.53 US gallons. Coffee machines often specify capacity in liters. Water bottles, sports drinks, and cooking oils use liters as the standard worldwide. Many cars sold internationally have fuel tank capacities listed in liters; understanding the conversion to gallons helps US drivers assess tank size. Medical fluids, pharmaceuticals, and laboratory supplies also use liters as the standard measurement.
      </p>

      <p>
        <strong>International Travel and Shopping:</strong> When traveling to countries using the metric system, fuel pumps display prices per liter and tank capacity in liters. Knowing that a 50-liter tank equals about 13.2 US gallons helps estimate fuel costs and consumption. Recipe ingredients from international cookbooks are listed in liters. When buying beverages, cleaning supplies, or other liquids abroad, understanding liter-to-gallon conversion helps you judge value and compare prices. Import/export businesses frequently need to convert between the systems to understand shipment volumes and weights.
      </p>

      <p>
        <strong>Scientific and Industrial Applications:</strong> Scientists, chemists, and engineers worldwide use liters as the standard for measuring liquids. pH testing, chemical reactions, and lab work all use milliliters and liters. The metric system's consistency (1 liter = 1000 milliliters = 1 cubic decimeter) makes conversions within the system straightforward. Beverage and food industries use liters even in the US when dealing with international standards. Water treatment plants, swimming pools, and aquariums often list capacities in both units to serve diverse audiences.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Liters to Gallons Calculator"
      description="Convert liters to gallons instantly with reference data"
      slug="liters-to-gallons"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="liters"
          label="Volume (Liters)"
          value={liters}
          onChange={setLiters}
          suffix="L"
          step={0.1}
          min={0}
          max={10000}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: LitersToGallonsCalculator,
  slug: "liters-to-gallons",
  title: "Liters to Gallons Calculator",
  shortTitle: "L to Gal",
  description: "Convert liters to gallons instantly",
  category: "other",
  icon: "🫗",
  keywords: ["liters to gallons", "volume conversion", "l to gal", "liquid measurement"],
  popular: false,
  faqs: [
    {
      question: "What is the conversion factor from liters to gallons?",
      answer: "One liter equals 0.264172 US gallons. For quick mental math, you can use 0.26 or even round to 0.25 (1/4) for rough estimates. The conversion factor is consistent: 10 liters = 2.64 gallons, 20 liters = 5.28 gallons. Remember this is for US gallons; imperial gallons (UK) have a different conversion of 0.220 gallons per liter.",
    },
    {
      question: "How many gallons are in a 2-liter soda bottle?",
      answer: "A 2-liter bottle contains approximately 0.528 US gallons. This is why 2-liter bottles are common international sizes: they represent a familiar volume that's slightly smaller than a US gallon (which is 3.78 liters). Other common international sizes include 1-liter bottles (0.26 gallons) and 3-liter bottles (0.79 gallons). Understanding these conversions helps when comparing beverage prices and sizes across different countries.",
    },
    {
      question: "How do I quickly estimate liters to gallons in my head?",
      answer: "The simplest method: divide liters by 4 (since 1 gallon ≈ 4 liters). Example: 20 liters ÷ 4 = 5 gallons (actual is 5.28). For better accuracy, multiply by 0.26 instead. Another approach: remember that 1 liter ≈ 1/4 gallon, so 4 liters ≈ 1 gallon, 8 liters ≈ 2 gallons, etc. This approximation method is fast and good enough for most practical purposes like cooking or fuel estimation.",
    },
    {
      question: "Why is liter the global standard instead of gallon?",
      answer: "The liter is part of the metric system, which was adopted internationally as the scientific and commercial standard. The metric system is based on units of 10, making conversions simple: 1 liter = 1000 milliliters. The imperial gallon system has awkward conversions and isn't part of a unified standard. In the 1970s and 1980s, most countries officially adopted the metric system. The US never made this transition, keeping gallons for consumer products. For global trade and scientific work, liters are standard.",
    },
    {
      question: "What is the difference between US gallons and imperial gallons?",
      answer: "The US gallon (3.78541 liters) is smaller than the imperial gallon (4.546 liters) used in the UK and some Commonwealth countries. When converting: 1 imperial gallon = 4.546 liters = 1.201 US gallons. A liter equals 0.264 US gallons but only 0.220 imperial gallons. Always verify which gallon is being used, especially when working with historical documents, UK measurements, or Canadian sources. Most liquid volume discussions in the US refer to US gallons unless otherwise specified.",
    },
  ],
  dateModified: "2026-04-10",
});
