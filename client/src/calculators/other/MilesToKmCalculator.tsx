import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MilesToKmCalculator() {
  const [miles, setMiles] = useState(10);
  const kilometers = miles * 1.60934;

  // Reference table data for chart
  const refData = [1, 5, 10, 26.2, 50, 100, 500, 1000].map((v) => ({
    miles: v,
    kilometers: parseFloat((v * 1.60934).toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Miles" value={formatNumber(miles, 2)} />
      <ResultCard label="Kilometers" value={formatNumber(kilometers, 2)} highlight />
      <ResultCard label="Formula" value="miles × 1.60934 = km" />
      <ResultCard
        label="Reference"
        value={`1 mile = 1.609 km, 10 miles = 16.09 km`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Miles to Kilometers Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="miles" label={{ value: "Miles", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Kilometers", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="kilometers"
            stroke="#f59e0b"
            dot={{ fill: "#f59e0b", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The miles-to-kilometers conversion is one of the most important measurement conversions for travel and transportation. One mile equals 1.60934 kilometers, a standardized conversion factor. This conversion is essential for international drivers, travelers, runners, and anyone comparing distances across regions that use different measurement systems. Understanding miles-to-kilometers helps bridge the gap between the US imperial system and the metric system used in most of the world.
      </p>

      <p>
        <strong>Travel and Driving Context:</strong> The United States measures road distances in miles and displays speed limits in miles per hour (mph), while most other countries use kilometers and kilometers per hour (kmh). When driving internationally or renting a car abroad, you must convert between these units. A 60 mph speed limit equals approximately 97 kmh. A 100 kmh highway speed limit equals approximately 62 mph. Road distances on signs may use only one system, making conversion knowledge essential for safe driving and accurate trip planning. GPS devices typically allow switching between miles and kilometers, but understanding the conversion helps you interpret maps and signs correctly.
      </p>

      <p>
        <strong>Sports and Running:</strong> Marathon distance is standardized at 42.195 kilometers, or 26.2 miles (often called 26.2 or a marathon for short). Runners might train for races listed in kilometers while living in a miles-based country. A 5-kilometer run equals 3.1 miles, and a 10-kilometer run equals 6.2 miles. Track events list distances in meters or kilometers. Running apps typically show both units for global audiences. Understanding the conversion helps runners compare race times across different distance standards and training plans globally.
      </p>

      <p>
        <strong>Historical Note:</strong> The mile has ancient origins, likely derived from Roman military distances. The exact modern mile (5,280 feet) was standardized in England. The kilometer is part of the metric system, defined as 1/1000th of the distance from the equator to the North Pole along the Prime Meridian. The conversion factor 1.60934 precisely relates these two systems. This historical divergence in measurement systems reflects the different development paths of imperial and metric systems, now making conversion a necessary skill for global communication.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Miles to Kilometers Converter"
      description="Convert miles to kilometers with conversion formula and reference table"
      slug="miles-to-km"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="miles"
        label="Miles"
        value={miles}
        onChange={setMiles}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MilesToKmCalculator,
  slug: "miles-to-km",
  title: "Miles to Kilometers Converter",
  shortTitle: "Miles to KM",
  description: "Convert miles to kilometers with formula and reference table",
  category: "other",
  icon: "🛣️",
  keywords: ["miles to km", "miles to kilometers", "mi to km", "convert miles", "driving distance"],
  popular: false,
  faqs: [
    {
      question: "How many kilometers are in a mile?",
      answer:
        "One mile equals 1.60934 kilometers. To convert miles to kilometers, multiply by 1.60934. For example, 10 miles = 10 × 1.60934 = 16.0934 kilometers. A quick approximation is that 1 mile ≈ 1.6 km, useful for mental math. So 5 miles ≈ 8 km, and 100 miles ≈ 160 km. For casual estimates, you can use 1.6, but for precise conversions especially in transportation or sports, use the full 1.60934 factor.",
    },
    {
      question: "What are common miles-to-kilometers conversions?",
      answer:
        "Useful benchmarks: 1 mile = 1.609 km, 5 miles = 8.05 km, 10 miles = 16.09 km, 26.2 miles (marathon) = 42.195 km, 50 miles = 80.47 km, 100 miles = 160.93 km. For speed limits, 30 mph ≈ 48 kmh, 60 mph ≈ 97 kmh, 100 mph ≈ 161 kmh. Memorizing these benchmarks helps with quick mental conversions without a calculator, useful for driving, running, and international travel.",
    },
    {
      question: "How do I convert speed in mph to kmh?",
      answer:
        "Use the same 1.60934 conversion factor. A speed in mph multiplied by 1.60934 gives kmh. Example: 60 mph × 1.60934 = 96.56 kmh. Common conversions: 30 mph = 48.3 kmh, 55 mph = 88.5 kmh, 65 mph = 104.6 kmh. For quick mental math, multiply by 1.6 or by 8/5 (since 1.6 = 8/5). So 50 mph × 1.6 = 80 kmh. Knowing these conversions is essential for international driving and understanding speed limits on road signs.",
    },
    {
      question: "Is the conversion factor always 1.60934?",
      answer:
        "Yes, 1.60934 is the exact, internationally standardized conversion factor. It's defined precisely: 1 mile = 1.60934 kilometers exactly. This factor is never rounded in official measurements. However, for casual mental math, using 1.6 or even 8/5 is acceptable. For scientific work, engineering, navigation, and official records, always use 1.60934 to avoid cumulative rounding errors. This precision is critical in aviation, maritime navigation, and international regulations.",
    },
    {
      question: "Why do the US and UK use miles when the rest of the world uses kilometers?",
      answer:
        "The United States and several other countries (including the UK historically, now metric) standardized the mile long before the metric system was developed. The mile has ancient Roman origins and became deeply embedded in American culture, infrastructure, and commerce. Changing nationwide would require massive expense and coordination. Roads, speed limits, vehicle odometers, and all transportation infrastructure are built around miles. While the US signed the Metre Convention (metric), it never legally adopted the metric system for all measurements. Cost and cultural inertia maintain the mile system despite most of the world using kilometers.",
    },
  ],
  dateModified: "2026-04-10",
});
