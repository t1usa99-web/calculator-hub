import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

registerCalculator({
  component: InchesToCmCalculator,
  slug: "inches-to-cm",
  title: "Inches to Centimeters Converter",
  shortTitle: "Inches to CM",
  description: "Convert inches to centimeters with formula and reference table",
  category: "other",
  icon: "📏",
  keywords: ["inches to cm", "inches to centimeters", "in to cm", "imperial to metric", "convert inches"],
  popular: false,
  faqs: [
    {
      question: "How many centimeters are in an inch?",
      answer:
        "One inch equals exactly 2.54 centimeters. This is the internationally standardized conversion factor established in 1959. The relationship is fixed and unchanging: simply multiply inches by 2.54 to convert to centimeters. For example, 6 inches equals 15.24 centimeters, 12 inches equals 30.48 centimeters. This precise conversion allows seamless translation between imperial and metric measurements across fields like manufacturing, fashion, and engineering.",
    },
    {
      question: "Why use inches when centimeters are more decimal?",
      answer:
        "The inch is part of the imperial measurement system still widely used in the United States, and some other countries. Inches are convenient for many applications because they divide easily into fractions (1/2, 1/4, 1/8 inch), which is useful in woodworking, construction, and tool sizing. However, the metric system (centimeters) is decimal-based, making mathematical calculations simpler. Many industries use both systems depending on tradition, regulation, or customer preference. Global trade requires fluency in both measurements.",
    },
    {
      question: "How do I convert fractional inches to centimeters?",
      answer:
        "Convert fractional inches the same way as whole numbers: multiply by 2.54. For example, 2.5 inches × 2.54 = 6.35 centimeters. If working with fractions like 1/4 inch, convert to decimal first: 1/4 inch = 0.25 inches, then 0.25 × 2.54 = 0.635 centimeters. This calculator handles decimal inputs, so you can enter 2.5, 3.75, or 10.5 inches directly. For more precision, most converters display results to 2 or more decimal places.",
    },
    {
      question: "What are common inch-to-centimeter conversions I should memorize?",
      answer:
        "Useful benchmarks include: 1 inch = 2.54 cm, 3 inches = 7.62 cm (roughly a thumb width), 6 inches = 15.24 cm (credit card width), 12 inches = 30.48 cm (one foot), and 36 inches = 91.44 cm (one yard). Knowing these helps with quick mental math without a calculator. For body measurements, a typical adult thumb width is about 1 inch (2.54 cm), and a foot length is about 12 inches (30.48 cm). These mental shortcuts are invaluable in DIY projects and everyday life.",
    },
    {
      question: "Is 2.54 an exact conversion or an approximation?",
      answer:
        "The 2.54 conversion factor is exact and internationally standardized, not an approximation. It was defined by the 1959 International Yard and Pound Agreement to provide a precise relationship between imperial and metric measurements. All scientific and engineering conversions use this exact factor. In everyday use, you might round results (e.g., 1 inch ≈ 2.5 cm for quick mental math), but the true conversion is always 2.54 centimeters per inch. This precision is critical in manufacturing, aerospace, and precision engineering.",
    },
  ],
  dateModified: "2026-04-10",
});
