import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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
