import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MmToInchesCalculator() {
  const [millimeters, setMillimeters] = useState(100);

  const inches = millimeters * 0.0393701;

  // Chart data: conversion reference
  const chartData = [];
  for (let mm = 0; mm <= 500; mm += 50) {
    const inches_val = mm * 0.0393701;
    chartData.push({ millimeters: mm, inches: parseFloat(inches_val.toFixed(2)) });
  }

  // Reference table data
  const referenceData = [
    { mm: 1, inches: 0.0394, desc: "Very small" },
    { mm: 10, inches: 0.3937, desc: "Centimeter" },
    { mm: 25.4, inches: 1, desc: "1 inch" },
    { mm: 50, inches: 1.9685, desc: "About 2 inches" },
    { mm: 100, inches: 3.937, desc: "About 4 inches" },
    { mm: 254, inches: 10, desc: "10 inches" },
    { mm: 304.8, inches: 12, desc: "1 foot" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Inches"
          value={`${formatNumber(inches, 3)}"` }
          highlight
        />
        <ResultCard
          label="Millimeters"
          value={`${formatNumber(millimeters, 2)} mm`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Millimeters</th>
                <th className="text-left py-2 px-2">Inches</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.mm}</td>
                  <td className="py-2 px-2">{formatNumber(row.inches, 4)}</td>
                  <td className="py-2 px-2">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Millimeters to Inches Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="millimeters" label={{ value: "Millimeters (mm)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Inches (in)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Line type="monotone" dataKey="inches" stroke="#8b5cf6" name="Inches" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Millimeters and inches are both units of linear measurement. One millimeter equals 0.0393701 inches (or 1 inch = 25.4 millimeters). Millimeters are part of the metric system and are used globally for precision measurements, particularly in engineering, manufacturing, and 3D printing. Inches are primarily used in the United States, UK, and Canada. Understanding the conversion is essential for engineers, machinists, designers, and 3D printing enthusiasts who work with international specifications or use metric tools and equipment.
      </p>

      <p>
        <strong>3D Printing and CAD Design:</strong> 3D printers accept dimensions in millimeters; digital designs are created in metric or imperial units depending on software. A wall thickness of 2 mm is a common specification (0.0787 inches). 3D models downloaded from international repositories often include millimeter dimensions. Nozzle sizes, bed dimensions, and print speeds in 3D printing are typically specified in millimeters and millimeters per second. Converting designs from inches to millimeters ensures proper scaling and prevents material waste. Precision parts and replacement components often require exact dimensional tolerances, making accurate conversion critical.
      </p>

      <p>
        <strong>Engineering and Manufacturing:</strong> Industrial equipment, parts, and tolerances are specified in millimeters internationally; US manufacturers may still use inches. A bearing rated for 50 mm (1.9685 inches) requires understanding both measurements. Drill bits, screws, bolts, and fasteners are often sized in millimeters globally, though US equipment may use fractional or decimal inches. Machinists switching between metric and imperial tools must convert dimensions. Engineering drawings frequently include both units to serve diverse audiences. Precision CNC machining requires accurate conversions to prevent defects.
      </p>

      <p>
        <strong>Photography and Optics:</strong> Camera sensors, lenses, and optical equipment are specified in millimeters. A camera sensor measuring 36 mm × 24 mm (standard full-frame, or about 1.42 × 0.94 inches) is the reference standard. Lens focal lengths (50 mm, 85 mm, 200 mm) are specified in millimeters regardless of region. Filter thread sizes for cameras are in millimeters. Understanding these conversions helps photographers compare equipment internationally and source compatible accessories. Microscope objectives, telescope focal lengths, and optical instruments similarly use millimeters.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Millimeters to Inches Calculator"
      description="Convert millimeters to inches for engineering and 3D printing"
      slug="mm-to-inches"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="millimeters"
          label="Length (Millimeters)"
          value={millimeters}
          onChange={setMillimeters}
          suffix="mm"
          step={0.1}
          min={0}
          max={10000}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MmToInchesCalculator,
  slug: "mm-to-inches",
  title: "Millimeters to Inches Calculator",
  shortTitle: "mm to in",
  description: "Convert millimeters to inches for engineering and 3D printing",
  category: "other",
  icon: "📏",
  keywords: ["millimeters to inches", "mm to inches", "measurement conversion", "3d printing", "engineering"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from millimeters to inches?",
      answer: "One millimeter equals 0.0393701 inches. One inch equals exactly 25.4 millimeters (this is the defined conversion). For practical purposes, multiply millimeters by 0.0394 or divide by 25.4. Example: 100 mm ÷ 25.4 = 3.937 inches. These conversions are critical for precision work where even small errors cause problems.",
    },
    {
      question: "How many millimeters are in an inch?",
      answer: "One inch equals exactly 25.4 millimeters. This is the defined international standard. A half inch equals 12.7 mm. A quarter inch equals 6.35 mm. An eighth inch equals 3.175 mm. A sixteenth inch equals 1.5875 mm. These fractional inch conversions are important for machinists and precision engineers working with imperial measurements.",
    },
    {
      question: "Why do 3D printing models use millimeters?",
      answer: "Millimeters provide a natural scale for 3D printing: most hobby 3D printers have build plates around 200-300 mm. Precision tolerances are specified in millimeters (e.g., 0.5 mm wall thickness). Using millimeters avoids decimal places compared to inches: 5 mm is easier to read than 0.197 inches. Internationally, designs use millimeters for consistency. 3D printing slicing software accepts millimeters as the standard unit. Converting inch-based designs to millimeters ensures proper scaling of prints.",
    },
    {
      question: "What are common metric and imperial drill sizes?",
      answer: "Metric drill sizes are specified in millimeters: 1 mm, 1.5 mm, 2 mm, 2.5 mm, 3 mm, 4 mm, 5 mm, 6 mm, 8 mm, 10 mm, etc. Imperial drill sizes use fractional inches: 1/16\", 1/8\", 3/16\", 1/4\", 5/16\", 3/8\", etc. A 5 mm drill is close to 3/16\" (0.1875\" or 4.76 mm). Understanding approximate equivalents helps when metric drills aren't available or vice versa. Precision work requires exact matching.",
    },
    {
      question: "How can I estimate millimeters to inches quickly?",
      answer: "The simplest approximation: divide millimeters by 25. Example: 100 mm ÷ 25 = 4 inches (actual is 3.937). For better accuracy, divide by 25.4 or multiply by 0.04. Another approach: remember that 25 mm ≈ 1 inch, so 50 mm ≈ 2 inches, 100 mm ≈ 4 inches. These approximations help when converting specifications or comparing tool sizes across measurement systems.",
    },
  ],
  dateModified: "2026-04-10",
});
