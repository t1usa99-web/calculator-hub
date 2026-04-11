import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CelsiusToFahrenheitCalculator() {
  const [celsius, setCelsius] = useState(22);

  const fahrenheit = celsius * (9 / 5) + 32;

  // Chart data: conversion reference points
  const chartData = [];
  for (let c = -40; c <= 100; c += 5) {
    const f = c * (9 / 5) + 32;
    chartData.push({ celsius: c, fahrenheit: parseFloat(f.toFixed(1)) });
  }

  // Reference table data
  const referenceData = [
    { c: 0, f: 32, description: "Water freezes" },
    { c: 10, f: 50, description: "Cool day" },
    { c: 20, f: 68, description: "Room temperature" },
    { c: 22.2, f: 72, description: "Comfortable indoor" },
    { c: 30, f: 86, description: "Warm day" },
    { c: 37.8, f: 100, description: "Very hot day" },
    { c: 100, f: 212, description: "Water boils" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Fahrenheit"
          value={`${formatNumber(fahrenheit, 2)}°F`}
          highlight
        />
        <ResultCard
          label="Celsius"
          value={`${formatNumber(celsius, 2)}°C`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Celsius</th>
                <th className="text-left py-2 px-2">Fahrenheit</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.c}°C</td>
                  <td className="py-2 px-2">{formatNumber(row.f, 1)}°F</td>
                  <td className="py-2 px-2">{row.description}</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Celsius to Fahrenheit Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="celsius" label={{ value: "Celsius (°C)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Fahrenheit (°F)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Legend />
          <Line type="monotone" dataKey="fahrenheit" stroke="#f59e0b" name="Fahrenheit" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Converting Celsius to Fahrenheit is essential for understanding temperature across different regions and contexts. Celsius is the global standard used in most countries, scientific research, and medical practice. Fahrenheit remains the primary scale in the United States. The conversion formula multiplies Celsius by 9/5 (or 1.8), then adds 32. This formula accounts for both the different starting points (0°C vs 32°F for freezing water) and the different step sizes between the scales. One degree Celsius change equals 1.8 degrees Fahrenheit change.
      </p>

      <p>
        <strong>Scale Origins and Differences:</strong> Anders Celsius designed his scale in 1742 with water freezing at 0°C and boiling at 100°C, creating a scale with 100 units between these fixed points. Daniel Fahrenheit's scale, from 1724, placed water's freezing point at 32°F and boiling point at 212°F, creating 180 units. This means Celsius intervals are larger: 1°C = 1.8°F. The two scales only intersect at -40, where -40°F = -40°C. Understanding this relationship helps when interpreting international weather, cooking instructions, and scientific data.
      </p>

      <p>
        <strong>Real-World Applications:</strong> International travelers must convert temperature information from local sources. Cooking recipes from other countries often specify Celsius temperatures; home ovens may display Fahrenheit. Medical professionals working internationally need to interpret temperature readings in both scales. HVAC technicians, meteorologists, and climate scientists use Celsius globally but may need Fahrenheit for US-based clients. Weather apps often toggle between scales depending on location settings. Air conditioning and heating systems in different countries may use different scales for their thermostat displays.
      </p>

      <p>
        <strong>Interesting Temperature Facts:</strong> Absolute zero, the lowest possible temperature, is -273.15°C or -459.67°F. Room temperature is typically defined as 20-22°C (68-72°F). Summer heat that feels unbearable is usually 30-35°C (86-95°F). Hypothermia begins when body temperature drops below 35°C (95°F). Comfortable sleeping temperature is slightly lower than daytime comfort temperature: 15-19°C (59-66°F). The coldest naturally occurring temperature ever recorded is around -89.2°C (-128.6°F) in Antarctica. The hottest is around 54°C (129.2°F) in Death Valley.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Celsius to Fahrenheit Calculator"
      description="Convert Celsius to Fahrenheit with reference data and chart"
      slug="celsius-to-fahrenheit"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="celsius"
          label="Temperature (Celsius)"
          value={celsius}
          onChange={setCelsius}
          suffix="°C"
          step={0.1}
          min={-273.15}
          max={500}
        />
      </div>
    </CalculatorLayout>
  );
}
