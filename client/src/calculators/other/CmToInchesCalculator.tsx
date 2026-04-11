import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CmToInchesCalculator() {
  const [centimeters, setCentimeters] = useState(30.48);
  const inches = centimeters / 2.54;

  // Reference table data for chart
  const refData = [2.54, 10, 15.24, 30.48, 50, 76.2, 91.44, 100].map((v) => ({
    centimeters: v,
    inches: parseFloat((v / 2.54).toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Centimeters" value={formatNumber(centimeters, 2)} />
      <ResultCard label="Inches" value={formatNumber(inches, 2)} highlight />
      <ResultCard label="Formula" value="centimeters ÷ 2.54 = inches" />
      <ResultCard
        label="Reference"
        value={`2.54 cm = 1 inch, 30.48 cm = 12 inches`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Centimeters to Inches Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="centimeters" label={{ value: "Centimeters", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Inches", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="inches"
            stroke="#10b981"
            dot={{ fill: "#10b981", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Converting centimeters to inches is the reverse of the more common inches-to-centimeters conversion. It's essential when working with metric measurements and needing to express them in imperial units. One centimeter equals 0.3937 inches, derived from the standard conversion factor of 1 inch = 2.54 centimeters. This conversion is particularly useful in international contexts where metric measurements are standard but imperial units are still needed for communication or legacy systems.
      </p>

      <p>
        <strong>When You Need This Conversion:</strong> International travel and clothing shopping often display measurements in centimeters, while sizing information for US-market products uses inches. Medical records in metric countries express height and measurements in centimeters but may need conversion for communication with imperial-using colleagues. Furniture dimensions and artwork sizes might be listed in centimeters internationally but required in inches for US market specifications. Understanding this conversion helps with home improvement projects, furniture shopping, and professional communication across measurement systems.
      </p>

      <p>
        <strong>The Mathematical Relationship:</strong> Since 1 inch = 2.54 cm exactly, then 1 cm = 1 ÷ 2.54 inches, which equals approximately 0.3937 inches. This fractional relationship means centimeters to inches requires division rather than multiplication. A typical conversion might be 180 centimeters (an average adult height) ÷ 2.54 = approximately 70.87 inches or 5 feet 10.87 inches. The conversion factor is precise and standardized internationally, allowing exact conversions in manufacturing, science, and engineering.
      </p>

      <p>
        <strong>Practical Examples:</strong> A 50-centimeter measurement equals 19.69 inches, useful for fabric or rope lengths. A 100-centimeter (1 meter) measurement equals 39.37 inches, roughly 3.28 feet. Monitor screen sizes like 58 centimeters equal about 23 inches. A newborn baby that is 50 centimeters long at birth is 19.69 inches. A 170-centimeter adult is about 5 feet 7 inches tall. These conversions help bridge the gap between metric and imperial measurements in everyday contexts.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Centimeters to Inches Converter"
      description="Convert centimeters to inches with conversion formula and reference table"
      slug="cm-to-inches"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="centimeters"
        label="Centimeters"
        value={centimeters}
        onChange={setCentimeters}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}
