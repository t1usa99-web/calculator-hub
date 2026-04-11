import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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
