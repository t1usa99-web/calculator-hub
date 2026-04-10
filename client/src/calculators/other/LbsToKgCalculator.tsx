import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function LbsToKgCalculator() {
  const [pounds, setPounds] = useState(154.32);
  const kilograms = pounds * 0.453592;

  // Reference table data for chart
  const refData = [1, 25, 50, 100, 154.32, 175, 200, 300].map((v) => ({
    lbs: v,
    kg: parseFloat((v * 0.453592).toFixed(1)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Pounds" value={formatNumber(pounds, 1)} />
      <ResultCard label="Kilograms" value={formatNumber(kilograms, 2)} highlight />
      <ResultCard label="Formula" value="pounds × 0.453592 = kg" />
      <ResultCard
        label="Reference"
        value={`1 lbs = 0.4536 kg, 154.32 lbs = 70 kg`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Pounds to Kilograms Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lbs" label={{ value: "Pounds", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Kilograms", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="kg"
            stroke="#6366f1"
            dot={{ fill: "#6366f1", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The pounds-to-kilograms conversion is the reverse of the kg-to-lbs conversion, essential for converting imperial weight measurements to metric. One pound equals 0.453592 kilograms, a precise conversion factor. This conversion is critical when traveling internationally, comparing health metrics with metric-using regions, following metric-based recipes, or working with scientific literature. Understanding lbs-to-kg conversion enables seamless communication about weight across the world's two primary weight measurement systems.
      </p>

      <p>
        <strong>International Health and Medical Context:</strong> Medical records from the US use pounds for body weight, while most other countries use kilograms. When communicating with international healthcare providers or comparing health research, you must convert weights. A 200-pound adult is 90.7 kilograms. A newborn weighing 7 pounds (common in the US) is 3.2 kilograms. Prescription dosages in grams or milligrams per kilogram of body weight require knowing your weight in kilograms. Health recommendations from metric regions may be expressed per kilogram, requiring conversion from your weight in pounds.
      </p>

      <p>
        <strong>Fitness and Athletic Performance:</strong> Sports leagues may have weight classes or limits in either pounds or kilograms. Boxing weight classes, wrestling divisions, and weightlifting categories use different standards. An athlete competing internationally must understand weight conversions. Training programs designed in one country might reference weights in different units. Strength training lifts (squat, deadlift, bench press) are often recorded in pounds in the US but kilograms internationally. Converting between units helps athletes understand relative performance and compare achievements globally.
      </p>

      <p>
        <strong>Cargo and Shipping Weight:</strong> Packages and freight may be weighed in pounds when shipping from the US but in kilograms elsewhere. Customs declarations require understanding weight in both systems. Luggage weight limits for international flights are specified in kilograms, but if you weigh your baggage in pounds, conversion is necessary. Shipping costs might be calculated per kilogram but measured in pounds, requiring quick conversions. A 50-pound package is 22.7 kilograms, useful for determining shipping class and cost.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pounds to Kilograms Converter"
      description="Convert pounds to kilograms with conversion formula and reference table"
      slug="lbs-to-kg"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="pounds"
        label="Pounds"
        value={pounds}
        onChange={setPounds}
        step={0.5}
        min={0}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: LbsToKgCalculator,
  slug: "lbs-to-kg",
  title: "Pounds to Kilograms Converter",
  shortTitle: "LBS to KG",
  description: "Convert pounds to kilograms with formula and reference table",
  category: "other",
  icon: "⚖️",
  keywords: ["lbs to kg", "pounds to kilograms", "convert pounds", "weight conversion"],
  popular: false,
  faqs: [
    {
      question: "How many kilograms are in a pound?",
      answer:
        "One pound equals 0.453592 kilograms. To convert pounds to kilograms, multiply by 0.453592. For example, 100 pounds = 100 × 0.453592 = 45.3592 kilograms. A quick approximation is that 1 lb ≈ 0.45 kg or 1 lb ≈ 0.5 kg for very rough estimates. So 100 lbs ≈ 45 kg, and 200 lbs ≈ 90 kg. For casual estimates, using 0.45 works well, but for medical or official purposes, use the full 0.453592 factor.",
    },
    {
      question: "What's my weight in kilograms if I weigh 180 pounds?",
      answer:
        "Multiply pounds by 0.453592 to convert to kilograms. 180 lbs × 0.453592 = 81.6 kg. Common conversions: 100 lbs = 45.4 kg, 150 lbs = 68 kg, 180 lbs = 81.6 kg, 200 lbs = 90.7 kg. For mental math, multiply by 0.45 for a quick approximation: 180 × 0.45 = 81 kg. Understanding your weight in kilograms is important for international health contexts, fitness tracking, and comparing weight statistics globally.",
    },
    {
      question: "What's a good rule of thumb for pounds to kilograms?",
      answer:
        "Remember that 2.2 pounds ≈ 1 kilogram, so 1 pound ≈ 0.45 kg. Another way: 1 kg ≈ 2.2 lbs, so divide pounds by 2.2 for a quick estimate. For example, 110 pounds ÷ 2.2 = 50 kg. Or multiply by 0.45: 110 × 0.45 = 49.5 kg. Both methods give approximately 50 kg (actual is 49.9 kg). These mental math tricks work well for casual estimates, but precision work requires the exact 0.453592 factor.",
    },
    {
      question: "How do I convert body weight in pounds to kilograms for medical use?",
      answer:
        "For medical purposes requiring precision, multiply your weight in pounds by 0.453592. Example: 175 lbs × 0.453592 = 79.4 kg. Medication dosages, clinical guidelines, and health assessments often require weight in kilograms. Never use approximations for medical calculations — use the exact factor. If your weight is 175 pounds, your medical weight is 79.4 kilograms. Always double-check conversions in medical contexts to ensure accuracy and patient safety.",
    },
    {
      question: "Is 0.453592 the exact conversion factor?",
      answer:
        "Yes, 0.453592 is the exact, internationally standardized conversion factor. It's the reciprocal of 2.20462 (the kg-to-lbs factor). These are based on the SI definition of the kilogram and the avoirdupois pound. The relationship is exact: 1 pound = 453.592 grams exactly. This precision is maintained in all official measurements, medical applications, and international regulations. While casual mental math might use 0.45 or 0.5, professional and medical contexts require the full precision.",
    },
  ],
  dateModified: "2026-04-10",
});
