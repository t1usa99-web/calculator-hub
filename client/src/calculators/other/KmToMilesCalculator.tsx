import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function KmToMilesCalculator() {
  const [kilometers, setKilometers] = useState(16.09344);
  const miles = kilometers * 0.621371;

  // Reference table data for chart
  const refData = [1, 5, 10, 42.195, 50, 100, 500, 1000].map((v) => ({
    kilometers: v,
    miles: parseFloat((v * 0.621371).toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Kilometers" value={formatNumber(kilometers, 2)} />
      <ResultCard label="Miles" value={formatNumber(miles, 2)} highlight />
      <ResultCard label="Formula" value="kilometers × 0.621371 = miles" />
      <ResultCard
        label="Reference"
        value={`1 km = 0.621 miles, 42.195 km = 26.2 miles`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Kilometers to Miles Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="kilometers" label={{ value: "Kilometers", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Miles", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="miles"
            stroke="#06b6d4"
            dot={{ fill: "#06b6d4", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The kilometers-to-miles conversion is the reverse of the miles-to-kilometers conversion, essential for understanding distances expressed in metric units when you're more familiar with imperial measurements. One kilometer equals 0.621371 miles, the precise reciprocal of the miles-to-kilometers factor. This conversion is vital for international travelers, sports enthusiasts, and professionals working with metric measurements who need to communicate distances to imperial-using audiences. Understanding this conversion enables seamless communication across measurement systems.
      </p>

      <p>
        <strong>International Travel and Navigation:</strong> When traveling internationally, road signs display distances in kilometers. Rental car odometers show kilometers in metric countries. GPS devices can display both units, but understanding the conversion helps you estimate travel times and distances accurately. A sign indicating 25 kilometers to your destination means 15.5 miles. A 100-kilometer drive is 62.1 miles. Understanding these conversions helps with route planning, fuel consumption estimates, and trip duration calculations. Many travelers find kilometers difficult until they learn key benchmarks: 1 km ≈ 0.6 miles, so 10 km ≈ 6 miles, and 100 km ≈ 60 miles.
      </p>

      <p>
        <strong>Sports and Fitness:</strong> Runners and cyclists often encounter race distances in kilometers, especially in international or metric-using countries. A 5K race is 5 kilometers or 3.1 miles. A 10K race is 10 kilometers or 6.2 miles. Half marathons are 21.1 kilometers (13.1 miles) and marathons are 42.195 kilometers (26.2 miles). Cycling events like sportives often list distances in kilometers. Converting these distances helps runners and cyclists understand race length and compare times across different distance standards globally. Training plans and performance data often use different units in different regions.
      </p>

      <p>
        <strong>Velocity and Speed Conversion:</strong> Kilometers per hour (kmh) is the standard speed unit in most countries. To convert speed in kmh to mph, multiply by 0.621371. A 100 kmh speed limit equals 62.1 mph. A 130 kmh highway speed limit equals 80.8 mph. Understanding this helps drivers safely navigate international roads and interpret speed limits correctly. Modern speedometers in international cars typically show both units. The conversion factor is the same as for distance, making it easy to apply the same mental math techniques to speed conversions.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Kilometers to Miles Converter"
      description="Convert kilometers to miles with conversion formula and reference table"
      slug="km-to-miles"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="kilometers"
        label="Kilometers"
        value={kilometers}
        onChange={setKilometers}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: KmToMilesCalculator,
  slug: "km-to-miles",
  title: "Kilometers to Miles Converter",
  shortTitle: "KM to Miles",
  description: "Convert kilometers to miles with formula and reference table",
  category: "other",
  icon: "🛣️",
  keywords: ["km to miles", "kilometers to miles", "convert kilometers", "metric to imperial distance"],
  popular: false,
  faqs: [
    {
      question: "How many miles are in a kilometer?",
      answer:
        "One kilometer equals 0.621371 miles. To convert kilometers to miles, multiply by 0.621371. For example, 10 kilometers = 10 × 0.621371 = 6.21371 miles. A quick approximation is that 1 km ≈ 0.6 miles, useful for mental math. So 10 km ≈ 6 miles, and 100 km ≈ 60 miles. For casual estimates, using 0.6 is sufficient, but for precision in navigation or sports timing, use the full 0.621371 factor.",
    },
    {
      question: "What are common kilometers-to-miles conversions?",
      answer:
        "Useful benchmarks: 1 km = 0.621 miles, 5 km = 3.11 miles, 10 km = 6.21 miles, 21.1 km (half marathon) = 13.1 miles, 42.195 km (marathon) = 26.2 miles, 100 km = 62.1 miles. For speed limits, 100 kmh = 62.1 mph, 120 kmh = 74.6 mph. Memorizing that 1 km ≈ 0.6 miles or 8 km ≈ 5 miles helps with quick mental estimates without a calculator.",
    },
    {
      question: "How do I convert speed in kmh to mph?",
      answer:
        "Use the same 0.621371 conversion factor. Speed in kmh multiplied by 0.621371 gives mph. Example: 100 kmh × 0.621371 = 62.1 mph. Common conversions: 50 kmh = 31.1 mph, 80 kmh = 49.7 mph, 100 kmh = 62.1 mph, 130 kmh = 80.8 mph. For mental math, remember that 8 kmh ≈ 5 mph, or multiply kmh by 0.6 for a quick approximation. This is essential knowledge for safe driving when traveling internationally or driving rental cars in metric countries.",
    },
    {
      question: "Is 0.621371 the exact conversion factor?",
      answer:
        "Yes, 0.621371 is the exact reciprocal of 1.60934 (the miles-to-kilometers factor). These are the precise, standardized conversion factors. In practice, both systems define 1 mile = 1.60934 kilometers exactly, making 1 km = 1/1.60934 = 0.621371 miles exactly. This precision is maintained in all official measurements, navigation, and regulations. While casual mental math might use 0.6 or even 5/8, professional work requires the full precision factor.",
    },
    {
      question: "Why is the conversion factor different for kilometers and miles?",
      answer:
        "The conversion factors are reciprocals of each other: 1 mile × 1.60934 = 1.60934 km, and 1 km × 0.621371 ≈ 1 mile (actually 0.621371 km × 1.60934 = 1 mile exactly). They're different because one represents miles-to-km and the other km-to-miles, but they're mathematically linked. Using the correct factor for each direction ensures accurate conversions. The factors aren't simple whole numbers because the mile and kilometer were developed independently and then related by international agreement.",
    },
  ],
  dateModified: "2026-04-10",
});
