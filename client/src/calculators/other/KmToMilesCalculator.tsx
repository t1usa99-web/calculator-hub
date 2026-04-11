import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function KmToMilesCalculator() {
  const [kilometers, setKilometers] = useState(16.09344);
  const miles = kilometers * 0.621371;

  // Reference table data for chart
  const refData = [1, 5, 10, 42.195, 50, 100, 500, 1000].map((v) => ({
    kilometers: v,
    miles: parseFloat((v * 0.621371).toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Kilometers" value={formatNumber(kilometers, 2)} />
      <ResultCard label="Miles" value={formatNumber(miles, 2)} highlight />
      <ResultCard label="Formula" value="kilometers × 0.621371 = miles" />
      <ResultCard
        label="Reference"
        value={`1 km = 0.621 miles, 42.195 km = 26.2 miles`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Kilometers to Miles Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="kilometers" label={{ value: "Kilometers", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Miles", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="miles"
            stroke="#06b6d4"
            dot={{ fill: "#06b6d4", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The kilometers-to-miles conversion is the reverse of the miles-to-kilometers conversion, essential for understanding distances expressed in metric units when you're more familiar with imperial measurements. One kilometer equals 0.621371 miles, the precise reciprocal of the miles-to-kilometers factor. This conversion is vital for international travelers, sports enthusiasts, and professionals working with metric measurements who need to communicate distances to imperial-using audiences. Understanding this conversion enables seamless communication across measurement systems.
      </p>

      <p>
        <strong>International Travel and Navigation:</strong> When traveling internationally, road signs display distances in kilometers. Rental car odometers show kilometers in metric countries. GPS devices can display both units, but understanding the conversion helps you estimate travel times and distances accurately. A sign indicating 25 kilometers to your destination means 15.5 miles. A 100-kilometer drive is 62.1 miles. Understanding these conversions helps with route planning, fuel consumption estimates, and trip duration calculations. Many travelers find kilometers difficult until they learn key benchmarks: 1 km ≈ 0.6 miles, so 10 km ≈ 6 miles, and 100 km ≈ 60 miles.
      </p>

      <p>
        <strong>Sports and Fitness:</strong> Runners and cyclists often encounter race distances in kilometers, especially in international or metric-using countries. A 5K race is 5 kilometers or 3.1 miles. A 10K race is 10 kilometers or 6.2 miles. Half marathons are 21.1 kilometers (13.1 miles) and marathons are 42.195 kilometers (26.2 miles). Cycling events like sportives often list distances in kilometers. Converting these distances helps runners and cyclists understand race length and compare times across different distance standards globally. Training plans and performance data often use different units in different regions.
      </p>

      <p>
        <strong>Velocity and Speed Conversion:</strong> Kilometers per hour (kmh) is the standard speed unit in most countries. To convert speed in kmh to mph, multiply by 0.621371. A 100 kmh speed limit equals 62.1 mph. A 130 kmh highway speed limit equals 80.8 mph. Understanding this helps drivers safely navigate international roads and interpret speed limits correctly. Modern speedometers in international cars typically show both units. The conversion factor is the same as for distance, making it easy to apply the same mental math techniques to speed conversions.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Kilometers to Miles Converter"
      description="Convert kilometers to miles with conversion formula and reference table"
      slug="km-to-miles"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="kilometers"
        label="Kilometers"
        value={kilometers}
        onChange={setKilometers}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}
