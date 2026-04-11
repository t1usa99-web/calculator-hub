import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function UnitConverterCalculator() {
  const [category, setCategory] = useState("length");
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("foot");

  // Unit conversion factors (to base unit)
  // Temperature is handled specially — see convertTemperature()
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
      "nautical mile": 1852,
    },
    weight: {
      milligram: 0.001,
      gram: 1,
      kilogram: 1000,
      ounce: 28.3495,
      pound: 453.592,
      "stone": 6350.29,
      "metric ton": 1000000,
      "short ton": 907185,
    },
    volume: {
      milliliter: 0.001,
      liter: 1,
      "fluid ounce": 0.0295735,
      cup: 0.236588,
      pint: 0.473176,
      quart: 0.946353,
      gallon: 3.78541,
      "cubic meter": 1000,
    },
    temperature: {
      fahrenheit: 1,
      celsius: 1,
      kelvin: 1,
    },
    area: {
      "square inch": 0.00064516,
      "square foot": 0.092903,
      "square yard": 0.836127,
      "square meter": 1,
      "square kilometer": 1000000,
      acre: 4046.86,
      hectare: 10000,
      "square mile": 2590000,
    },
    speed: {
      "meters per second": 1,
      "kilometers per hour": 0.277778,
      "miles per hour": 0.44704,
      "feet per second": 0.3048,
      knot: 0.514444,
    },
    energy: {
      joule: 1,
      kilojoule: 1000,
      calorie: 4.184,
      kilocalorie: 4184,
      "watt hour": 3600,
      "kilowatt hour": 3600000,
      btu: 1055.06,
      "foot pound": 1.35582,
    },
  };

  // Temperature requires special conversion (not ratio-based)
  function convertTemperature(val: number, from: string, to: string): number {
    if (from === to) return val;
    // Convert to Celsius first
    let c = val;
    if (from === "fahrenheit") c = (val - 32) * (5 / 9);
    else if (from === "kelvin") c = val - 273.15;
    // Convert from Celsius to target
    if (to === "celsius") return c;
    if (to === "fahrenheit") return c * (9 / 5) + 32;
    return c + 273.15; // kelvin
  }

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
      { value: "nautical mile", label: "Nautical Mile (nmi)" },
    ],
    weight: [
      { value: "milligram", label: "Milligram (mg)" },
      { value: "gram", label: "Gram (g)" },
      { value: "kilogram", label: "Kilogram (kg)" },
      { value: "ounce", label: "Ounce (oz)" },
      { value: "pound", label: "Pound (lb)" },
      { value: "stone", label: "Stone (st)" },
      { value: "metric ton", label: "Metric Ton (t)" },
      { value: "short ton", label: "Short Ton (US)" },
    ],
    volume: [
      { value: "milliliter", label: "Milliliter (ml)" },
      { value: "liter", label: "Liter (L)" },
      { value: "fluid ounce", label: "Fluid Ounce (fl oz)" },
      { value: "cup", label: "Cup" },
      { value: "pint", label: "Pint (pt)" },
      { value: "quart", label: "Quart (qt)" },
      { value: "gallon", label: "Gallon (gal)" },
      { value: "cubic meter", label: "Cubic Meter (m³)" },
    ],
    temperature: [
      { value: "fahrenheit", label: "Fahrenheit (°F)" },
      { value: "celsius", label: "Celsius (°C)" },
      { value: "kelvin", label: "Kelvin (K)" },
    ],
    area: [
      { value: "square inch", label: "Square Inch (in²)" },
      { value: "square foot", label: "Square Foot (ft²)" },
      { value: "square yard", label: "Square Yard (yd²)" },
      { value: "square meter", label: "Square Meter (m²)" },
      { value: "square kilometer", label: "Square Kilometer (km²)" },
      { value: "acre", label: "Acre" },
      { value: "hectare", label: "Hectare (ha)" },
      { value: "square mile", label: "Square Mile (mi²)" },
    ],
    speed: [
      { value: "meters per second", label: "Meters per Second (m/s)" },
      { value: "kilometers per hour", label: "Kilometers per Hour (km/h)" },
      { value: "miles per hour", label: "Miles per Hour (mph)" },
      { value: "feet per second", label: "Feet per Second (ft/s)" },
      { value: "knot", label: "Knot (kn)" },
    ],
    energy: [
      { value: "joule", label: "Joule (J)" },
      { value: "kilojoule", label: "Kilojoule (kJ)" },
      { value: "calorie", label: "Calorie (cal)" },
      { value: "kilocalorie", label: "Kilocalorie (kcal)" },
      { value: "watt hour", label: "Watt Hour (Wh)" },
      { value: "kilowatt hour", label: "Kilowatt Hour (kWh)" },
      { value: "btu", label: "BTU" },
      { value: "foot pound", label: "Foot-Pound (ft·lb)" },
    ],
  };

  // Convert value — temperature uses special function, everything else is ratio-based
  const isTemp = category === "temperature";
  const baseValue = isTemp ? value : value * conversions[category][fromUnit];
  const convertedValue = isTemp
    ? convertTemperature(value, fromUnit, toUnit)
    : baseValue / conversions[category][toUnit];

  // Get unit display names
  const fromUnitDisplay =
    categoryOptions[category]?.find((opt) => opt.value === fromUnit)?.label || fromUnit;
  const toUnitDisplay =
    categoryOptions[category]?.find((opt) => opt.value === toUnit)?.label || toUnit;

  // Common conversions data — show value in all units of this category
  const commonConversions = categoryOptions[category]
    .filter((opt) => opt.value !== fromUnit)
    .slice(0, 5)
    .map((opt) => {
      const converted = isTemp
        ? convertTemperature(value, fromUnit, opt.value)
        : baseValue / conversions[category][opt.value];
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
      description="Convert between units of length, weight, volume, temperature, area, speed, and energy"
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
            { value: "temperature", label: "Temperature" },
            { value: "area", label: "Area" },
            { value: "speed", label: "Speed" },
            { value: "energy", label: "Energy" },
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
