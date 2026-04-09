import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function UnitConverterCalculator() {
  const [category, setCategory] = useState("length");
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("foot");

  // Unit conversion factors (to base unit)
  const conversions: Record<string, Record<string, number>> = {
    length: {
      millimeter: 0.001,
      centimeter: 0.01,
      meter: 1,
      kilometer: 1000,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.34,
    },
    weight: {
      milligram: 0.001,
      gram: 1,
      kilogram: 1000,
      ounce: 28.35,
      pound: 453.59,
      ton: 1000000,
    },
    volume: {
      milliliter: 0.001,
      liter: 1,
      "fluid ounce": 0.0295735,
      cup: 0.236588,
      gallon: 3.78541,
      "cubic meter": 1000,
    },
  };

  const categoryOptions: Record<string, Array<{ value: string; label: string }>> = {
    length: [
      { value: "millimeter", label: "Millimeter (mm)" },
      { value: "centimeter", label: "Centimeter (cm)" },
      { value: "meter", label: "Meter (m)" },
      { value: "kilometer", label: "Kilometer (km)" },
      { value: "inch", label: "Inch (in)" },
      { value: "foot", label: "Foot (ft)" },
      { value: "yard", label: "Yard (yd)" },
      { value: "mile", label: "Mile (mi)" },
    ],
    weight: [
      { value: "milligram", label: "Milligram (mg)" },
      { value: "gram", label: "Gram (g)" },
      { value: "kilogram", label: "Kilogram (kg)" },
      { value: "ounce", label: "Ounce (oz)" },
      { value: "pound", label: "Pound (lb)" },
      { value: "ton", label: "Ton (t)" },
    ],
    volume: [
      { value: "milliliter", label: "Milliliter (ml)" },
      { value: "liter", label: "Liter (l)" },
      { value: "fluid ounce", label: "Fluid Ounce (fl oz)" },
      { value: "cup", label: "Cup" },
      { value: "gallon", label: "Gallon (gal)" },
      { value: "cubic meter", label: "Cubic Meter (m³)" },
    ],
  };

  // Convert value
  const baseValue = value * conversions[category][fromUnit];
  const convertedValue = baseValue / conversions[category][toUnit];

  // Get unit display names
  const fromUnitDisplay =
    categoryOptions[category]?.find((opt) => opt.value === fromUnit)?.label || fromUnit;
  const toUnitDisplay =
    categoryOptions[category]?.find((opt) => opt.value === toUnit)?.label || toUnit;

  // Common conversions data
  const commonConversions = categoryOptions[category]
    .slice(0, 4)
    .map((opt) => {
      const converted = baseValue / conversions[category][opt.value];
      return {
        unit: opt.label.split(" ")[0],
        value: parseFloat(converted.toFixed(4)),
      };
    });

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={`From (${fromUnitDisplay})`}
        value={formatNumber(value)}
        highlight
      />
      <ResultCard
        label={`To (${toUnitDisplay})`}
        value={formatNumber(convertedValue)}
        highlight
      />
      <ResultCard
        label="Conversion Factor"
        value={`1 ${fromUnit} = ${(conversions[category][toUnit] / conversions[category][fromUnit]).toFixed(6)} ${toUnit}`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Common Conversions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={commonConversions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="unit" />
          <YAxis />
          <Tooltip formatter={(v) => formatNumber(v as number)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A unit converter is a tool for translating measurements from one unit to another. Unit conversion is essential in many fields including science, engineering, cooking, construction, travel, and international commerce. The metric system (used in most countries) and the imperial system (used primarily in the United States) require regular conversions. By understanding conversion factors, you can quickly determine equivalences between different measurement systems and ensure accuracy in calculations, recipes, and professional work.
      </p>

      <p>
        <strong>The Metric System:</strong> The metric system uses base units (meters for length, grams for weight, liters for volume) and prefixes to indicate multiples or fractions (kilo- = 1000, centi- = 1/100, milli- = 1/1000). This logical system makes conversions straightforward: moving one step in the metric scale means multiplying or dividing by 10. Nearly every country in the world uses the metric system as their official measurement standard. Scientific research worldwide relies exclusively on metric units. Understanding metric conversions is increasingly important as global trade and scientific collaboration expand across borders.
      </p>

      <p>
        <strong>Imperial to Metric Conversions:</strong> The United States is one of the few countries still using the imperial system (feet, pounds, gallons). Common conversions include: 1 inch = 2.54 centimeters, 1 pound = 453.6 grams, 1 gallon = 3.785 liters. International travelers, scientists, engineers, and businesses frequently need to convert between these systems. Recipes from different countries may use different volume measurements. Understanding these conversions prevents errors in cooking, travel planning, and professional applications. Many digital devices and tools now automatically perform these conversions to reduce confusion.
      </p>

      <p>
        <strong>Precision and Practical Applications:</strong> Unit conversion accuracy matters in many contexts. In cooking, slight measurement errors can affect results. In construction and engineering, precision is critical for structural integrity. In medicine and pharmaceuticals, dosage calculations require exact conversions. In scientific research, measurement standards ensure reproducibility and comparison across studies. When converting units, it's important to consider significant figures—the number of meaningful digits in your answer. For most everyday applications, rounding to 2-4 decimal places provides sufficient accuracy while remaining practical.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Unit Converter"
      description="Convert between different units of length, weight, temperature, and volume"
      slug="unit-converter"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="category"
          label="Measurement Category"
          value={category}
          onChange={setCategory}
          options={[
            { value: "length", label: "Length" },
            { value: "weight", label: "Weight" },
            { value: "volume", label: "Volume" },
          ]}
        />
        <InputField
          id="value"
          label="Value to Convert"
          value={value}
          onChange={setValue}
          step={0.01}
          min={0}
        />
        <SelectField
          id="from-unit"
          label="From Unit"
          value={fromUnit}
          onChange={setFromUnit}
          options={categoryOptions[category]}
        />
        <SelectField
          id="to-unit"
          label="To Unit"
          value={toUnit}
          onChange={setToUnit}
          options={categoryOptions[category]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: UnitConverterCalculator,
  slug: "unit-converter",
  title: "Unit Converter",
  shortTitle: "Unit Converter",
  description: "Convert between length, weight, and volume units",
  category: "other",
  icon: "📏",
  keywords: ["unit converter", "metric conversion", "length converter", "weight converter"],
  popular: true,
});
