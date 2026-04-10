import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

registerCalculator({
  component: WindChillCalculator,
  slug: "wind-chill-calculator",
  title: "Wind Chill Calculator",
  shortTitle: "Wind Chill",
  description: "Calculate wind chill factor and frostbite risk from temperature and wind speed",
  category: "other",
  icon: "❄️",
  keywords: ["wind chill", "frostbite risk", "cold weather", "temperature wind", "weather safety"],
  popular: true,
  faqs: [
    {
      question: "What is wind chill and why does it matter?",
      answer: "Wind chill is the apparent temperature felt by exposed skin due to the combined effect of temperature and wind speed. Wind accelerates heat loss from skin, making it feel colder than the actual air temperature. For example, 0°F with 20 mph wind creates a wind chill of about -20°F. Wind chill doesn't affect indoor temperatures or objects, only exposed skin. It matters for outdoor safety because it determines how quickly frostbite can develop. People planning outdoor activities need to account for wind chill to dress appropriately and limit exposure time.",
    },
    {
      question: "At what wind chill is frostbite risk highest?",
      answer: "Frostbite risk increases dramatically below -20°F wind chill. At -20°F, frostbite can develop within 30 minutes on exposed skin. At -35°F, frostbite occurs within 10 minutes. Below -50°F, frostbite can occur within 5 minutes. At wind chills above 0°F, frostbite risk is very low even with prolonged exposure. Windproof, insulated clothing significantly reduces risk. Watch for warning signs: numbness, white or grayish-yellow skin, or tingling as skin rewarms. Severe frostbite can cause permanent tissue damage, so prevention through proper clothing and limiting exposure is critical.",
    },
    {
      question: "How is wind chill calculated?",
      answer: "The National Weather Service uses the Rothfusz regression formula: Wind Chill = 35.74 + 0.6215T - 35.75V^0.16 + 0.4275T×V^0.16, where T is temperature in Fahrenheit and V is wind speed in mph. The formula applies only when wind speed exceeds 3 mph and temperature is below 50°F. The exponent 0.16 (16th root of wind speed) reflects how wind chill increases rapidly with light winds but levels off at higher speeds. Wind chill can only be calculated in Fahrenheit; conversion between Fahrenheit and Celsius first.",
    },
    {
      question: "Why doesn't wind chill apply above 50°F?",
      answer: "Wind chill calculations only apply when temperature is below 50°F and wind speed exceeds 3 mph because wind's cooling effect becomes insignificant above 50°F. Above 50°F, the human body regulates temperature effectively, and factors like humidity and sun exposure matter more than wind. Additionally, above 50°F, wind can actually feel refreshing rather than dangerous. The wind chill concept is specifically designed for cold-weather safety warnings, making it irrelevant in warmer conditions.",
    },
    {
      question: "How can I protect myself from wind chill and frostbite?",
      answer: "Wear multiple layers of windproof, insulated clothing. Cover all exposed skin with a hat, scarf, gloves, and warm socks. Keep inner layers dry because moisture accelerates heat loss. Limit time outdoors in extreme wind chill conditions, especially below -20°F. Take breaks indoors to warm up and check for frostbite signs. Avoid touching cold metal or wet surfaces with bare skin. Keep moving to maintain body heat. Be aware of your risk: young children, elderly people, and those with circulation problems face higher frostbite risk. Watch weather forecasts and adjust outdoor plans accordingly.",
    },
  ],
  dateModified: "2026-04-10",
});
