import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function DewPointCalculator() {
  const [temperature, setTemperature] = useState(70);
  const [humidity, setHumidity] = useState(60);

  // Magnus formula for dew point
  // Td = 243.04 × [ln(RH/100) + (17.625×T)/(243.04+T)] / [17.625 - ln(RH/100) - (17.625×T)/(243.04+T)]
  const calculateDewPoint = (t: number, rh: number): number => {
    const a = 17.625;
    const b = 243.04;
    const ln = Math.log;

    const rhFraction = rh / 100;
    const numerator = ln(rhFraction) + (a * t) / (b + t);
    const denominator = a - ln(rhFraction) - (a * t) / (b + t);

    return (b * numerator) / denominator;
  };

  const dewPoint = calculateDewPoint(temperature, humidity);
  const dewPointDifference = temperature - dewPoint;

  // Get comfort level based on dew point
  const getComfortLevel = (): string => {
    if (dewPoint < 40) return "Very dry and uncomfortable";
    if (dewPoint < 50) return "Dry";
    if (dewPoint < 60) return "Comfortable";
    if (dewPoint < 70) return "Very humid";
    if (dewPoint < 80) return "Uncomfortable";
    return "Very uncomfortable and potentially dangerous";
  };

  // Chart data: dew point at different humidity levels
  const chartData = [];
  for (let h = 10; h <= 100; h += 10) {
    const dp = calculateDewPoint(temperature, h);
    chartData.push({ humidity: h, dewPoint: dp });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Dew Point"
        value={`${formatNumber(dewPoint)}°F`}
        highlight
      />
      <ResultCard
        label="Temperature"
        value={`${formatNumber(temperature)}°F`}
      />
      <ResultCard
        label="Relative Humidity"
        value={`${formatNumber(humidity)}%`}
      />
      <ResultCard
        label="Spread"
        value={`${formatNumber(dewPointDifference)}°F`}
      />
      <ResultCard
        label="Comfort Level"
        value={getComfortLevel()}
        highlight
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Dew Point at Different Humidity Levels</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="humidity" label={{ value: "Relative Humidity (%)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Dew Point (°F)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="dewPoint" stroke="#3b82f6" name="Dew Point" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Dew point is the temperature at which air becomes saturated and water condenses into liquid droplets (dew). It depends on temperature and relative humidity. If the air temperature drops to the dew point, 100% relative humidity is reached, and condensation occurs. Dew point is an absolute measure of atmospheric moisture, unlike relative humidity which depends on temperature. Two locations can have the same relative humidity but different dew points if temperatures differ. Dew point is useful for predicting frost, fog, and moisture-related problems.
      </p>

      <p>
        <strong>How Dew Point Differs from Relative Humidity:</strong> Relative humidity is the percentage of moisture in air compared to its maximum capacity. Relative humidity changes with temperature; the same air mass has different relative humidity at different temperatures. Dew point is the actual temperature needed for saturation, regardless of the current temperature. Example: 70°F with 50% RH has a dew point of about 50°F. If temperature drops to 50°F, RH becomes 100% and condensation occurs. If temperature drops to 40°F (below dew point), condensation has already occurred. Dew point is more reliable for predicting when condensation will happen.
      </p>

      <p>
        <strong>Practical Applications:</strong> Meteorologists use dew point to forecast fog and frost. If overnight low temperature will drop below dew point, frost forms. HVAC technicians use dew point to prevent condensation in air conditioning systems. People with humidity-sensitive products (electronics, antiques, instruments) monitor dew point to maintain proper storage conditions. Musicians use dew point to prevent wood swelling in guitars and pianos. Photographers concerned about lens condensation when moving between environments use dew point to determine safe temperature ranges.
      </p>

      <p>
        <strong>Comfort Ranges Based on Dew Point:</strong> Below 40°F: Very dry, can cause dry skin and respiratory irritation. 40-50°F: Dry and comfortable for most. 50-60°F: Comfortable for most people. 60-70°F: Humid but tolerable. 70-80°F: Uncomfortably humid; moisture feels sticky. Above 80°F: Very uncomfortable; heat and humidity combine for dangerous conditions. Indoor comfort range for most people is 30-60% RH, which corresponds to dew points roughly between 30-50°F at typical indoor temperatures. Different activities and preferences affect the ideal range.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Dew Point Calculator"
      description="Calculate dew point and assess humidity comfort levels"
      slug="dew-point-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="temperature"
          label="Temperature"
          value={temperature}
          onChange={setTemperature}
          suffix="°F"
          step={1}
          min={-50}
          max={130}
        />
        <InputField
          id="humidity"
          label="Relative Humidity"
          value={humidity}
          onChange={setHumidity}
          suffix="%"
          step={1}
          min={0}
          max={100}
        />
      </div>
    </CalculatorLayout>
  );
}
