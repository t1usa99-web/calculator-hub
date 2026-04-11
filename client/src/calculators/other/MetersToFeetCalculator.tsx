import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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
