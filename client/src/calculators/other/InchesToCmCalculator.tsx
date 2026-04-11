import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function InchesToCmCalculator() {
  const [inches, setInches] = useState(12);
  const centimeters = inches * 2.54;

  // Reference table data for chart
  const refData = [1, 6, 12, 24, 36, 48, 60, 72].map((v) => ({
    inches: v,
    centimeters: v * 2.54,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Inches" value={formatNumber(inches, 2)} />
      <ResultCard label="Centimeters" value={formatNumber(centimeters, 2)} highlight />
      <ResultCard label="Formula" value="inches × 2.54 = cm" />
      <ResultCard
        label="Reference"
        value={`1 inch = 2.54 cm, 12 inches = 30.48 cm`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Inches to Centimeters Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="inches" label={{ value: "Inches", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Centimeters", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="centimeters"
            stroke="#3b82f6"
            dot={{ fill: "#3b82f6", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The inch-to-centimeter conversion is one of the most common unit conversions between the imperial and metric systems. One inch equals exactly 2.54 centimeters, a standard established internationally. This conversion is essential in fields like fashion, engineering, construction, and manufacturing, where precise measurements are critical. Understanding how to convert inches to centimeters helps you compare measurements across different regions and standards.
      </p>

      <p>
        <strong>Historical Context:</strong> The inch originated in medieval England as the width of a man's thumb, while the centimeter is part of the metric system developed during the French Revolution. The metric system was designed to be decimal-based for easy calculation, while the imperial system divides into fractions (1/2, 1/4, 1/8 inch). The inch-to-centimeter conversion factor (2.54) was officially standardized in 1959 by the International Yard and Pound Agreement, making it a precise, unchanging constant.
      </p>

      <p>
        <strong>Practical Applications:</strong> Clothing sizes often list measurements in inches or centimeters depending on region. Monitors, screens, and device sizes are typically measured in inches (diagonal). Screen print measurements might be given in inches, while European construction uses centimeters. Body measurements for medical records or fitness tracking may use either unit. International manufacturing requires conversion between systems. A 6-foot-tall person is approximately 183 centimeters, useful for international height comparisons.
      </p>

      <p>
        <strong>Quick Reference:</strong> Common conversions include 1 inch (2.54 cm), 6 inches (15.24 cm, roughly the width of a credit card), 12 inches (30.48 cm, one foot), and 36 inches (91.44 cm, one yard). Knowing these benchmarks helps with quick mental approximations without a calculator, useful in DIY projects or everyday measurements.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Inches to Centimeters Converter"
      description="Convert inches to centimeters instantly with conversion formula and reference table"
      slug="inches-to-cm"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="inches"
        label="Inches"
        value={inches}
        onChange={setInches}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}
