import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MetersToFeetCalculator() {
  const [meters, setMeters] = useState(1.8288);
  const feet = meters * 3.28084;

  // Reference table data for chart
  const refData = [0.3048, 1, 1.5, 1.8288, 3, 5, 10, 30].map((v) => ({
    meters: v,
    feet: parseFloat((v * 3.28084).toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Meters" value={formatNumber(meters, 3)} />
      <ResultCard label="Feet" value={formatNumber(feet, 2)} highlight />
      <ResultCard label="Formula" value="meters × 3.28084 = feet" />
      <ResultCard
        label="Reference"
        value={`1 m = 3.28084 ft, 1.8288 m = 6 ft`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Meters to Feet Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="meters" label={{ value: "Meters", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Feet", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="feet"
            stroke="#ec4899"
            dot={{ fill: "#ec4899", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Converting meters to feet is the reverse of feet-to-meters conversion, essential when working with metric measurements that need to be expressed in imperial units. One meter equals 3.28084 feet, the inverse of the feet-to-meters conversion factor. This conversion is vital for international professionals, travelers, and anyone comparing measurements across metric and imperial regions. Understanding meters-to-feet conversion helps bridge communication gaps in global industries.
      </p>

      <p>
        <strong>International Context:</strong> Most of the world uses the metric system, expressing distances in meters, kilometers, and centimeters. The United States, along with a few other countries, primarily uses feet and miles. International aviation, maritime, and trade require constant conversion between these systems. Mountain heights, building dimensions, and geographical features are often listed in meters but may need conversion to feet for US-based audiences. Water depth, runway lengths, and altitude measurements are frequently expressed in both units simultaneously to serve global audiences.
      </p>

      <p>
        <strong>Common Real-World Examples:</strong> Mount Everest is 8,849 meters tall, or 29,032 feet. A swimming pool that is 25 meters long is approximately 82 feet. A 100-meter dash track is 328 feet. A basketball hoop at 3.048 meters (10 feet) allows for easy comparison. Professional soccer fields are approximately 100-130 meters long, or 328-426 feet. Building ceiling heights of 3 meters equal approximately 10 feet. Understanding these conversions helps with international travel, sports understanding, and professional communication across regions.
      </p>

      <p>
        <strong>Precision in Different Fields:</strong> In construction and engineering, precise conversions are critical to avoid costly errors. A difference of even a fraction of a foot can affect building alignment and structural integrity. In sports, precise measurements ensure fair competition. In aviation, altitude measurements must be accurate for safety. In medicine and fitness, height measurements for health assessments must be consistent. The conversion factor 3.28084 provides the precision needed across all these fields, more accurate than rounding to 3.28 or 3.3 feet per meter.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Meters to Feet Converter"
      description="Convert meters to feet with conversion formula and reference table"
      slug="meters-to-feet"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="meters"
        label="Meters"
        value={meters}
        onChange={setMeters}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MetersToFeetCalculator,
  slug: "meters-to-feet",
  title: "Meters to Feet Converter",
  shortTitle: "Meters to Feet",
  description: "Convert meters to feet with formula and reference table",
  category: "other",
  icon: "📐",
  keywords: ["meters to feet", "m to ft", "convert meters", "metric to imperial length"],
  popular: false,
  faqs: [
    {
      question: "How many feet are in a meter?",
      answer:
        "One meter equals 3.28084 feet. This is the precise conversion factor. To convert meters to feet, multiply by 3.28084. For example, 2 meters = 2 × 3.28084 = 6.56168 feet. A quick mental approximation is that 1 meter ≈ 3.3 feet, useful for rough estimates. The inverse conversion is 1 foot = 0.3048 meters. This exact relationship ensures consistency in international engineering, construction, and scientific measurements across the globe.",
    },
    {
      question: "What's the easiest way to convert meters to feet?",
      answer:
        "The most straightforward method is to multiply meters by 3.28084. For a quick mental approximation, multiply by 3.3. For example, 10 meters × 3.3 ≈ 33 feet (actual is 32.8 feet). Another approach: remember that 1 meter ≈ 3 feet, so 5 meters ≈ 15 feet, and 10 meters ≈ 30 feet. These approximations work well for casual estimates but aren't precise. For exact conversions in professional contexts, always use 3.28084 or this calculator.",
    },
    {
      question: "How do I convert meters to feet and inches?",
      answer:
        "Multiply meters by 3.28084 to get total feet, then extract the decimal part and multiply by 12 to get remaining inches. Example: 1.8 meters × 3.28084 = 5.905 feet. The 0.905 feet × 12 = 10.86 inches. So 1.8 meters = 5 feet 10.86 inches. Alternatively, use a calculator that displays the result in feet and inches format directly. This format is more intuitive for height, ceiling, and architectural measurements commonly expressed in feet and inches.",
    },
    {
      question: "Why is the conversion factor 3.28084 and not a simpler number?",
      answer:
        "The conversion factor 3.28084 is the reciprocal of 0.3048 (the feet-to-meters conversion). These precise values were established by international agreement based on the relationship between imperial and metric systems. While the number isn't simple, it's exact and internationally recognized, ensuring consistency in science, engineering, and global trade. Using a simpler approximation like 3.3 or 3.28 introduces errors that accumulate in precision work. For professional applications, the full 3.28084 factor is essential.",
    },
    {
      question: "What are some common meter-to-feet conversions?",
      answer:
        "Common conversions include: 1 m = 3.28 ft, 1.5 m = 4.92 ft, 1.8 m = 5.91 ft (average male height), 2 m = 6.56 ft, 3 m = 9.84 ft (typical ceiling height), 5 m = 16.4 ft, 10 m = 32.8 ft, 100 m = 328 ft. A 25-meter swimming pool = 82 feet. An Olympic-size pool (50 meters) = 164 feet. Mount Everest (8,849 m) = 29,032 feet. Knowing these benchmarks helps with quick comparisons without calculation.",
    },
  ],
  dateModified: "2026-04-10",
});
