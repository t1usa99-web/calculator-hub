import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function CupsToMlCalculator() {
  const [cups, setCups] = useState(1);

  const milliliters = cups * 236.588;

  // Chart data: conversion reference
  const chartData = [];
  for (let c = 0; c <= 10; c += 0.5) {
    const ml = c * 236.588;
    chartData.push({ cups: parseFloat(c.toFixed(1)), milliliters: parseFloat(ml.toFixed(0)) });
  }

  // Reference table data
  const referenceData = [
    { cups: 0.25, ml: 59.147, desc: "1/4 cup" },
    { cups: 0.33, ml: 78.156, desc: "1/3 cup" },
    { cups: 0.5, ml: 118.294, desc: "1/2 cup" },
    { cups: 0.67, ml: 158.312, desc: "2/3 cup" },
    { cups: 0.75, ml: 177.441, desc: "3/4 cup" },
    { cups: 1, ml: 236.588, desc: "1 cup" },
    { cups: 2, ml: 473.176, desc: "2 cups" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Milliliters"
          value={`${formatNumber(milliliters, 1)} ml`}
          highlight
        />
        <ResultCard
          label="Cups"
          value={`${formatNumber(cups, 2)} cups`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Cups</th>
                <th className="text-left py-2 px-2">Milliliters</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.cups}</td>
                  <td className="py-2 px-2">{formatNumber(row.ml, 1)}</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cups to Milliliters Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cups" label={{ value: "Cups", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Milliliters (ml)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Legend />
          <Line type="monotone" dataKey="milliliters" stroke="#f59e0b" name="Milliliters" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The cup and milliliter are both units of volume commonly used in cooking and baking. One cup equals 236.588 milliliters, though 240 ml is often used as an approximation. Cups are primarily used in US recipes, while milliliters are the metric standard used internationally and in scientific work. Understanding the conversion is essential for scaling recipes, following international cookbooks, and precise baking. Note that a cooking cup differs slightly from a measuring cup, and different countries may have slightly different standard cup sizes, though the US cup (236.6 ml) is most common in recipes.
      </p>

      <p>
        <strong>Common Cooking Measurements:</strong> Most recipes list cup measurements for liquid and dry ingredients, but metric measurements are more precise. Quarter cup (1/4 cup = 59 ml) is used for butter, cheese, or spices. Half cup (1/2 cup = 118 ml) is common for milk, oil, or flour. Full cup (1 cup = 237 ml) is standard for base ingredients. International recipes often specify grams for dry ingredients and milliliters for liquids, which is more accurate than cup measurements. Bakers especially prefer grams and milliliters because they're weight-based and volume-based respectively, providing better consistency than loose cup measurements which vary by how tightly ingredients are packed.
      </p>

      <p>
        <strong>Measurement Precision:</strong> A cup of flour weighed can vary by 20-30% depending on how it's scooped and packed, making volume-based cooking less precise than weight-based measurements. Milliliters are more consistent for liquids since they're volume-based, but even better is using a kitchen scale for both liquids and solids. Modern recipes increasingly include both cup and metric measurements. When converting recipes, remember that 1 cup liquids and 1 cup flour measure roughly the same volume but have very different weights. Precision matters in baking; casual cooking is more forgiving with slight variations.
      </p>

      <p>
        <strong>Kitchen Tools and Standards:</strong> US measuring cups are typically sold in sets of 1/4 cup, 1/3 cup, 1/2 cup, and 1 cup sizes. Most of these cups hold almost exactly their labeled amount when filled level. Metric cup sets use 250 ml as the standard (slightly larger than US cups), creating differences when converting recipes. Liquid measuring cups (graduated cylinders) are separate from dry measuring cups for accuracy. Digital kitchen scales that measure in milliliters are increasingly popular for precision. When using recipes from different sources, check whether cup measurements assume US cups (237 ml), metric cups (250 ml), or metric milliliters for consistency.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Cups to Milliliters Calculator"
      description="Convert cups to milliliters for cooking and baking"
      slug="cups-to-ml"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="cups"
          label="Volume (Cups)"
          value={cups}
          onChange={setCups}
          suffix="cups"
          step={0.1}
          min={0}
          max={100}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CupsToMlCalculator,
  slug: "cups-to-ml",
  title: "Cups to Milliliters Calculator",
  shortTitle: "Cups to ml",
  description: "Convert cups to milliliters for recipes and cooking",
  category: "other",
  icon: "🥤",
  keywords: ["cups to milliliters", "cooking conversion", "recipe measurement", "ml converter"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from cups to milliliters?",
      answer: "One US cup equals 236.588 milliliters. For practical cooking, 240 ml is often used as a convenient approximation. The difference between 236.6 ml and 240 ml is about 1.4%, which is negligible for most recipes. In baking, where precision matters, use 236.6 ml for accuracy. Note that a metric cup used in some countries equals 250 ml, which is slightly larger, creating a small difference when following international recipes.",
    },
    {
      question: "How much is 1/4 cup in milliliters?",
      answer: "One quarter cup (1/4 cup) equals approximately 59 milliliters. This is a commonly used measurement in recipes, especially for butter, shredded cheese, nuts, or small amounts of spices. A quarter cup dry measuring cup filled level will hold roughly 59 ml. Some recipes list it as 60 ml for simplicity. Quarter cup measurements are useful for controlling portion sizes of rich or flavorful ingredients without using the full cup quantity.",
    },
    {
      question: "What is 1/2 cup in milliliters?",
      answer: "One half cup (1/2 cup) equals approximately 118 milliliters, often rounded to 120 ml for practical purposes. Half cup is one of the most common recipe measurements, used for milk, oil, flour, sugar, and other ingredients. A half cup liquid measuring cup or a heaping half cup of dry ingredients will hold roughly this volume. This is a standard portion that appears frequently in American recipes.",
    },
    {
      question: "Are US cups different from metric cups?",
      answer: "Yes, they differ slightly. The US cup (236.6 ml) is smaller than the metric cup (250 ml), a difference of about 5.7%. When following recipes from different countries, verify which cup size is assumed. US cookbooks use US cups; metric recipes and international cookbooks use either metric cups (250 ml) or milliliters directly. Bakers who use cups from one system with recipes designed for another will get slightly different results. Modern recipe books often include both cup and metric measurements to avoid confusion.",
    },
    {
      question: "Why are milliliters better for precise recipes?",
      answer: "Milliliters measure volume directly and consistently. Cups depend on how tightly you pack ingredients: flour can vary by 20-30% in weight when using cups due to packing differences. Milliliters provide a stable volume measure, though for dry ingredients, weight (grams) is even better. Professional bakers weigh ingredients in grams rather than measuring by volume. Liquids work well in milliliters since their density doesn't change with packing. For casual cooking, cups work fine; for baking or precision work, use ml or grams.",
    },
  ],
  dateModified: "2026-04-10",
});
