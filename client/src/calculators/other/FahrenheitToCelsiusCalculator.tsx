import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function FahrenheitToCelsiusCalculator() {
  const [fahrenheit, setFahrenheit] = useState(72);

  const celsius = (fahrenheit - 32) * (5 / 9);

  // Chart data: conversion reference points
  const chartData = [];
  for (let f = -40; f <= 212; f += 10) {
    const c = (f - 32) * (5 / 9);
    chartData.push({ fahrenheit: f, celsius: parseFloat(c.toFixed(1)) });
  }

  // Reference table data
  const referenceData = [
    { f: 32, c: 0, description: "Water freezes" },
    { f: 50, c: 10, description: "Cool day" },
    { f: 68, c: 20, description: "Room temperature" },
    { f: 72, c: 22.2, description: "Comfortable indoor" },
    { f: 86, c: 30, description: "Warm day" },
    { f: 100, c: 37.8, description: "Very hot day" },
    { f: 212, c: 100, description: "Water boils" },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Celsius"
          value={`${formatNumber(celsius, 2)}°C`}
          highlight
        />
        <ResultCard
          label="Fahrenheit"
          value={`${formatNumber(fahrenheit)}°F`}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Conversion Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Fahrenheit</th>
                <th className="text-left py-2 px-2">Celsius</th>
                <th className="text-left py-2 px-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {referenceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-100">
                  <td className="py-2 px-2">{row.f}°F</td>
                  <td className="py-2 px-2">{formatNumber(row.c, 1)}°C</td>
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
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Fahrenheit to Celsius Conversion</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fahrenheit" label={{ value: "Fahrenheit (°F)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Celsius (°C)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Legend />
          <Line type="monotone" dataKey="celsius" stroke="#ef4444" name="Celsius" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The Fahrenheit and Celsius scales are two different ways to measure temperature. Fahrenheit is primarily used in the United States, while Celsius (also called Centigrade) is used in most countries worldwide and in scientific work. The conversion between them is linear: subtract 32 from Fahrenheit, then multiply by 5/9. The opposite direction multiplies Celsius by 9/5, then adds 32. Understanding both scales is useful for travel, science, cooking, and weather interpretation.
      </p>

      <p>
        <strong>Historical Context:</strong> The Fahrenheit scale was developed by Daniel Fahrenheit in 1724, initially using the freezing point of salt water (0°F) and normal body temperature (96°F) as reference points. The Celsius scale was created by Anders Celsius in 1742, using the freezing point of water (0°C) and boiling point of water (100°C) as references. Water's behavior provided a more universal and reproducible standard, making Celsius more suitable for science and international use. Fahrenheit persists in the United States due to historical momentum and cultural preference.
      </p>

      <p>
        <strong>Practical Applications:</strong> Weather reports in the US use Fahrenheit (68°F is comfortable), while most countries use Celsius (20°C is comfortable). Cooking temperatures in American recipes are Fahrenheit; international recipes use Celsius. Medical thermometers in the US read Fahrenheit; global medical instruments use Celsius. Scientists universally use Celsius for consistency in research. When traveling internationally, knowing the conversion helps adjust to local weather and cooking instructions. Climate data published globally typically uses Celsius, so understanding the scale is important for interpreting global warming data.
      </p>

      <p>
        <strong>Interesting Facts:</strong> The two scales intersect at -40°, which is the same in both Fahrenheit and Celsius (-40°F = -40°C). Absolute zero, the lowest possible temperature, is -459.67°F or -273.15°C. Water has unusual behavior near freezing in both scales: ice actually expands when it freezes, contrary to most materials. The Kelvin scale, used in science, starts at absolute zero (0 K = -273.15°C). Temperature differences of 1°C represent the same physical change as differences of 1.8°F, so small temperature variations require more precision when using Fahrenheit.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Fahrenheit to Celsius Calculator"
      description="Convert Fahrenheit to Celsius with reference data and chart"
      slug="fahrenheit-to-celsius"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="fahrenheit"
          label="Temperature (Fahrenheit)"
          value={fahrenheit}
          onChange={setFahrenheit}
          suffix="°F"
          step={0.1}
          min={-459.67}
          max={1000}
        />
      </div>
    </CalculatorLayout>
  );
}
