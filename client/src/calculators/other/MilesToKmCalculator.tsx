import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function MilesToKmCalculator() {
  const [miles, setMiles] = useState(10);
  const kilometers = miles * 1.60934;

  // Reference table data for chart
  const refData = [1, 5, 10, 26.2, 50, 100, 500, 1000].map((v) => ({
    miles: v,
    kilometers: parseFloat((v * 1.60934).toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Miles" value={formatNumber(miles, 2)} />
      <ResultCard label="Kilometers" value={formatNumber(kilometers, 2)} highlight />
      <ResultCard label="Formula" value="miles × 1.60934 = km" />
      <ResultCard
        label="Reference"
        value={`1 mile = 1.609 km, 10 miles = 16.09 km`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Miles to Kilometers Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="miles" label={{ value: "Miles", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Kilometers", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="kilometers"
            stroke="#f59e0b"
            dot={{ fill: "#f59e0b", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The miles-to-kilometers conversion is one of the most important measurement conversions for travel and transportation. One mile equals 1.60934 kilometers, a standardized conversion factor. This conversion is essential for international drivers, travelers, runners, and anyone comparing distances across regions that use different measurement systems. Understanding miles-to-kilometers helps bridge the gap between the US imperial system and the metric system used in most of the world.
      </p>

      <p>
        <strong>Travel and Driving Context:</strong> The United States measures road distances in miles and displays speed limits in miles per hour (mph), while most other countries use kilometers and kilometers per hour (kmh). When driving internationally or renting a car abroad, you must convert between these units. A 60 mph speed limit equals approximately 97 kmh. A 100 kmh highway speed limit equals approximately 62 mph. Road distances on signs may use only one system, making conversion knowledge essential for safe driving and accurate trip planning. GPS devices typically allow switching between miles and kilometers, but understanding the conversion helps you interpret maps and signs correctly.
      </p>

      <p>
        <strong>Sports and Running:</strong> Marathon distance is standardized at 42.195 kilometers, or 26.2 miles (often called 26.2 or a marathon for short). Runners might train for races listed in kilometers while living in a miles-based country. A 5-kilometer run equals 3.1 miles, and a 10-kilometer run equals 6.2 miles. Track events list distances in meters or kilometers. Running apps typically show both units for global audiences. Understanding the conversion helps runners compare race times across different distance standards and training plans globally.
      </p>

      <p>
        <strong>Historical Note:</strong> The mile has ancient origins, likely derived from Roman military distances. The exact modern mile (5,280 feet) was standardized in England. The kilometer is part of the metric system, defined as 1/1000th of the distance from the equator to the North Pole along the Prime Meridian. The conversion factor 1.60934 precisely relates these two systems. This historical divergence in measurement systems reflects the different development paths of imperial and metric systems, now making conversion a necessary skill for global communication.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Miles to Kilometers Converter"
      description="Convert miles to kilometers with conversion formula and reference table"
      slug="miles-to-km"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="miles"
        label="Miles"
        value={miles}
        onChange={setMiles}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}
