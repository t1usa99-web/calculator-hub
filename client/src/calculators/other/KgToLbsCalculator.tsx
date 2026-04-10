import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function KgToLbsCalculator() {
  const [kilograms, setKilograms] = useState(70);
  const pounds = kilograms * 2.20462;

  // Reference table data for chart
  const refData = [1, 10, 25, 50, 70, 80, 100, 150].map((v) => ({
    kg: v,
    lbs: parseFloat((v * 2.20462).toFixed(1)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Kilograms" value={formatNumber(kilograms, 1)} />
      <ResultCard label="Pounds" value={formatNumber(pounds, 1)} highlight />
      <ResultCard label="Formula" value="kg × 2.20462 = lbs" />
      <ResultCard
        label="Reference"
        value={`1 kg = 2.205 lbs, 70 kg = 154.3 lbs`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Kilograms to Pounds Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="kg" label={{ value: "Kilograms", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Pounds", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Line
            type="monotone"
            dataKey="lbs"
            stroke="#ef4444"
            dot={{ fill: "#ef4444", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The kilogram-to-pound conversion is essential for comparing body weight, food quantities, and package weights across metric and imperial systems. One kilogram equals 2.20462 pounds, a standardized conversion factor. This conversion is particularly important in health, fitness, nutrition, and international commerce where weight measurements must be understood regardless of the system used. Understanding kg-to-lbs conversion helps you monitor health metrics, follow recipes, and compare product weights globally.
      </p>

      <p>
        <strong>Health and Fitness Context:</strong> Body weight is measured in pounds in the US and inches in many metric countries that use kilograms. A healthy BMI calculation requires consistent units. Average adult males weigh approximately 70-80 kilograms (154-176 pounds), and females approximately 60-70 kilograms (132-154 pounds). Fitness and health recommendations often come from different regions using different units. A weight loss goal might be expressed as "lose 10 pounds" or "lose 5 kilograms." Understanding the conversion helps you compare personal health data across regions and evaluate your progress against global standards.
      </p>

      <p>
        <strong>Nutrition and Cooking:</strong> Recipes and nutrition labels vary by region. US recipes often specify ingredients in pounds or ounces, while international recipes use grams or kilograms. A 1-pound package of butter converts to 0.45 kilograms. Meat prices might be listed per pound in the US but per kilogram in metric countries. Nutritional databases list both units. Understanding kg-to-lbs conversion helps you follow recipes accurately, calculate nutrition information for meal planning, and compare food prices across regions. For larger quantities like bulk flour or sugar, converting kilograms to pounds helps estimate storage and usage.
      </p>

      <p>
        <strong>International Commerce and Shipping:</strong> Package weights for shipping are specified in either pounds or kilograms depending on origin and destination. Customs declarations and international mail may list weight in different units. Heavy equipment, machinery, and industrial products often use different weight measurements. Understanding the conversion helps with inventory management, cost calculations, and compliance with international regulations. A 2-kilogram package weighs 4.41 pounds, important for calculating shipping costs and ensuring compliance with carrier weight restrictions.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Kilograms to Pounds Converter"
      description="Convert kilograms to pounds with conversion formula and reference table"
      slug="kg-to-lbs"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="kilograms"
        label="Kilograms"
        value={kilograms}
        onChange={setKilograms}
        step={0.5}
        min={0}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: KgToLbsCalculator,
  slug: "kg-to-lbs",
  title: "Kilograms to Pounds Converter",
  shortTitle: "KG to LBS",
  description: "Convert kilograms to pounds with formula and reference table",
  category: "other",
  icon: "⚖️",
  keywords: ["kg to lbs", "kilograms to pounds", "convert kg", "weight conversion"],
  popular: false,
  faqs: [
    {
      question: "How many pounds are in a kilogram?",
      answer:
        "One kilogram equals 2.20462 pounds. To convert kilograms to pounds, multiply by 2.20462. For example, 10 kilograms = 10 × 2.20462 = 22.0462 pounds. A quick approximation is that 1 kg ≈ 2.2 lbs, useful for mental math. So 5 kg ≈ 11 lbs, and 100 kg ≈ 220 lbs. For casual estimates, using 2.2 or even 2 works well, but for medical or official purposes, use the full 2.20462 factor.",
    },
    {
      question: "What's my weight in kilograms if I weigh 150 pounds?",
      answer:
        "Divide pounds by 2.20462 to convert to kilograms. 150 lbs ÷ 2.20462 = 68 kg. Common conversions: 100 lbs = 45.4 kg, 150 lbs = 68 kg, 180 lbs = 81.6 kg, 200 lbs = 90.7 kg. For quick mental math, divide by 2.2 or multiply by 0.45. Using 0.45 as a multiplier gives 150 × 0.45 = 67.5 kg, a very close approximation. Understanding your weight in both units helps when comparing health metrics internationally.",
    },
    {
      question: "What are common weight conversions I should know?",
      answer:
        "Useful benchmarks: 1 kg = 2.2 lbs, 10 kg = 22 lbs, 25 kg = 55 lbs, 50 kg = 110 lbs, 70 kg = 154 lbs (average adult male), 80 kg = 176 lbs, 100 kg = 220 lbs. Newborn babies typically weigh 3-4 kg (7-9 lbs). Dogs often weigh 10-30 kg (22-66 lbs). Large athletes might weigh 100+ kg (220+ lbs). Knowing these benchmarks helps with quick estimates without calculation.",
    },
    {
      question: "Is 2.20462 an exact or approximate conversion?",
      answer:
        "The 2.20462 factor is the precise, internationally standardized conversion factor. It's based on the definition that 1 kilogram = the mass of 1 liter of water at 4°C in the metric system, and 1 pound is 0.453592 kg exactly. These definitions make the conversion exact: 1 kg = 1 ÷ 0.453592 = 2.20462 lbs exactly. For casual mental math, using 2.2 or even 2 is acceptable, but official measurements require the full precision.",
    },
    {
      question: "Why do different countries use different weight units?",
      answer:
        "The pound is part of the imperial system that developed in England and was adopted by the United States and some other countries. The kilogram is the SI (International System) metric unit. Most of the world adopted metric, but the US and a few others retained imperial. Changing would be economically disruptive: all scales, labels, and regulations would need updating. International standards now require dual labeling in many cases. Historical divergence and practical inertia maintain two parallel weight systems, making conversion knowledge essential for global communication.",
    },
  ],
  dateModified: "2026-04-10",
});
