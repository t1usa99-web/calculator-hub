import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function WindChillCalculator() {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(10);

  // Wind chill formula: 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

  // Frostbite risk calculation (minutes to frostbite)
  let frostbiteTime = null;
  if (windChill <= -50) {
    frostbiteTime = 5;
  } else if (windChill <= -40) {
    frostbiteTime = 10;
  } else if (windChill <= -35) {
    frostbiteTime = 30;
  } else if (windChill <= -25) {
    frostbiteTime = 60;
  } else if (windChill <= -10) {
    frostbiteTime = 120;
  }

  // Get frostbite risk description
  const getFrostbiteRisk = (): string => {
    if (windChill >= 0) return "No risk";
    if (windChill >= -10) return "Low risk (exposed skin safe for extended periods)";
    if (windChill >= -25) return "Moderate risk (frostbite possible within 30 min)";
    if (windChill >= -35) return "High risk (frostbite within 10-30 min)";
    if (windChill >= -50) return "Very high risk (frostbite within 5-10 min)";
    return "Extreme risk (frostbite within 5 minutes or less)";
  };

  // Chart data: wind chill at different wind speeds
  const chartData = [];
  for (let v = 0; v <= 50; v += 5) {
    const wc = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(v, 0.16) + 0.4275 * temperature * Math.pow(v, 0.16);
    chartData.push({ windSpeed: v, windChill: wc });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Wind Chill"
        value={`${formatNumber(windChill)}°F`}
        highlight
      />
      <ResultCard
        label="Temperature"
        value={`${formatNumber(temperature)}°F`}
      />
      <ResultCard
        label="Wind Speed"
        value={`${formatNumber(windSpeed)} mph`}
      />
      <ResultCard
        label="Frostbite Risk"
        value={getFrostbiteRisk()}
        highlight
      />
      {frostbiteTime && (
        <ResultCard
          label="Time to Frostbite"
          value={`~${frostbiteTime} minutes`}
          highlight
        />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Wind Chill at Different Wind Speeds</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="windSpeed" label={{ value: "Wind Speed (mph)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Wind Chill (°F)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="windChill" stroke="#3b82f6" name="Wind Chill" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Wind chill measures how cold the air feels due to the combined effect of temperature and wind speed. Moving air accelerates heat loss from exposed skin, making it feel colder than the actual air temperature. This is especially important in winter for outdoor safety. The National Weather Service calculates wind chill using temperature and wind speed to warn people of frostbite risk. Wind chill values can only be calculated when wind speed is at least 3 mph; below that, wind chill equals the actual temperature.
      </p>

      <p>
        <strong>Understanding Wind Chill Numbers:</strong> A wind chill of -20°F means exposed skin will freeze at the same rate as it would in still air at -20°F. Importantly, wind chill does not affect objects or indoor temperatures; it only measures the cooling effect on exposed skin. At 0°F with a 20 mph wind, wind chill is about -20°F. At the same temperature with 40 mph wind, wind chill drops to about -30°F. Understanding wind chill helps you decide how much protective clothing to wear and how long you can safely spend outdoors.
      </p>

      <p>
        <strong>Frostbite Risk and Prevention:</strong> Frostbite occurs when skin freezes due to prolonged exposure to cold. At wind chills below -20°F, frostbite can develop within 30 minutes on exposed skin. Below -50°F, frostbite can occur within minutes. Prevention requires covering all exposed skin with insulated, windproof clothing. Wear gloves, hats, and scarves. Keep extremities (fingers, toes, nose) protected. Take breaks indoors to warm up. People working or exercising outdoors in cold, windy conditions face higher frostbite risk. Watch for symptoms: numbness, white or pale skin, then blistering and tissue damage as frostbite progresses.
      </p>

      <p>
        <strong>Wind Chill Formula:</strong> The modern Rothfusz regression formula used by the National Weather Service is: Wind Chill = 35.74 + 0.6215T - 35.75V^0.16 + 0.4275T×V^0.16, where T is temperature in °F and V is wind speed in mph. This formula applies only when wind speed is above 3 mph and temperature is below 50°F. Above 50°F, wind chill is typically not calculated because the cooling effect is minimal and heat gain from sun exposure becomes significant.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Wind Chill Calculator"
      description="Calculate wind chill and assess frostbite risk"
      slug="wind-chill-calculator"
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
          max={50}
        />
        <InputField
          id="wind-speed"
          label="Wind Speed"
          value={windSpeed}
          onChange={setWindSpeed}
          suffix="mph"
          step={1}
          min={0}
          max={100}
          hint={windSpeed < 3 ? "Wind chill applies only at 3+ mph" : ""}
        />
      </div>
    </CalculatorLayout>
  );
}
