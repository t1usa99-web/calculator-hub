import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function HeatIndexCalculator() {
  const [temperature, setTemperature] = useState(90);
  const [humidity, setHumidity] = useState(50);

  // Rothfusz regression equation for heat index
  // Only valid for T >= 80°F and RH >= 40%
  const calculateHeatIndex = (t: number, rh: number): number => {
    if (t < 80) return t; // Heat index not calculated below 80°F

    const c1 = -42.379;
    const c2 = 2.04901523;
    const c3 = 10.14333127;
    const c4 = -0.22475541;
    const c5 = -0.00683783;
    const c6 = -0.05481717;
    const c7 = 0.00122874;
    const c8 = 0.00085282;
    const c9 = -0.00000199;

    const hi =
      c1 +
      c2 * t +
      c3 * rh +
      c4 * t * rh +
      c5 * t * t +
      c6 * rh * rh +
      c7 * t * t * rh +
      c8 * t * rh * rh +
      c9 * t * t * rh * rh;

    return hi;
  };

  const heatIndex = calculateHeatIndex(temperature, humidity);

  // Determine danger level
  const getDangerLevel = (): { label: string; color: string; description: string } => {
    if (heatIndex < 80) {
      return { label: "Normal", color: "green", description: "No heat stress expected" };
    } else if (heatIndex < 91) {
      return { label: "Caution", color: "yellow", description: "Fatigue possible with prolonged exposure" };
    } else if (heatIndex < 104) {
      return { label: "Extreme Caution", color: "orange", description: "Heat exhaustion possible; limit outdoor activity" };
    } else if (heatIndex < 125) {
      return { label: "Danger", color: "red", description: "Heat exhaustion and heat cramps likely; avoid exertion" };
    } else {
      return { label: "Extreme Danger", color: "darkred", description: "Heat stroke likely; avoid outdoor activity" };
    }
  };

  const danger = getDangerLevel();

  // Chart data: heat index at different humidity levels
  const chartData = [];
  for (let h = 20; h <= 100; h += 10) {
    const hi = calculateHeatIndex(temperature, h);
    chartData.push({ humidity: h, heatIndex: hi });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Heat Index"
        value={`${formatNumber(heatIndex)}°F`}
        highlight
      />
      <ResultCard
        label="Actual Temperature"
        value={`${formatNumber(temperature)}°F`}
      />
      <ResultCard
        label="Relative Humidity"
        value={`${formatNumber(humidity)}%`}
      />
      <ResultCard
        label="Danger Level"
        value={danger.label}
        highlight
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Heat Index at Different Humidity Levels</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="humidity" label={{ value: "Relative Humidity (%)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Heat Index (°F)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="heatIndex" stroke="#3b82f6" name="Heat Index" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Heat index measures how hot the air feels when humidity is factored in. When humidity is high, sweat cannot evaporate efficiently from skin, making it feel hotter than the actual air temperature. The National Weather Service uses the Rothfusz regression equation to calculate heat index. Unlike wind chill, heat index is only calculated when temperature exceeds 80°F. At 95°F with 60% humidity, the heat index might be 110°F, making conditions extremely dangerous for outdoor exertion.
      </p>

      <p>
        <strong>Understanding Heat Index Danger Levels:</strong> Caution ({'{'}less than{'}'} 91°F): Fatigue possible with prolonged exposure. Extreme Caution (91-104°F): Heat exhaustion and heat cramps likely; limit outdoor activity. Danger (104-125°F): Heat exhaustion likely; avoid strenuous activity. Extreme Danger ({'>'}125°F): Heat stroke likely; avoid outdoor activity entirely. Each level reflects increasing risk of heat-related illness. High-risk groups include the elderly, young children, people with medical conditions, and outdoor workers. Even healthy people face risk at extreme heat indices.
      </p>

      <p>
        <strong>Heat-Related Illness Symptoms:</strong> Heat exhaustion includes heavy sweating, weakness, dizziness, nausea, and cool, clammy skin. Seek shade, drink water, and cool down. Heat stroke (medical emergency) includes high body temperature (103°F+), red hot dry skin, confusion, loss of consciousness. Call emergency services immediately. Prevention requires adequate hydration (drink water continuously, not just when thirsty), light-colored loose clothing, frequent breaks in shade, and avoiding peak sun hours (10am-4pm). Check on elderly neighbors and vulnerable people during heat waves.
      </p>

      <p>
        <strong>Why Humidity Matters in Heat:</strong> The human body cools itself primarily through sweating and evaporation. When relative humidity is high, the air already contains moisture, so sweat cannot evaporate efficiently. This traps heat in the body, raising core temperature dangerously. At 95°F and 40% humidity, heat index is about 107°F. At 95°F and 80% humidity, heat index exceeds 125°F. The higher the humidity, the more dangerous the heat. Coastal and tropical regions with high humidity face severe heat index values even at moderate temperatures.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Heat Index Calculator"
      description="Calculate apparent temperature and assess heat illness risk"
      slug="heat-index-calculator"
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
          min={50}
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
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm font-semibold text-gray-900">Danger Level: {danger.label}</p>
          <p className="text-sm text-gray-700 mt-1">{danger.description}</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: HeatIndexCalculator,
  slug: "heat-index-calculator",
  title: "Heat Index Calculator",
  shortTitle: "Heat Index",
  description: "Calculate heat index and assess risk of heat-related illness",
  category: "other",
  icon: "🌡️",
  keywords: ["heat index", "humidity temperature", "heat illness", "apparent temperature", "weather safety"],
  popular: true,
  faqs: [
    {
      question: "What is heat index and why is it different from temperature?",
      answer: "Heat index is the apparent temperature felt by the human body when humidity is factored in. Temperature is just air temperature. When humidity is high, sweat cannot evaporate from skin, so the body cannot cool efficiently and feels hotter than the actual temperature. Example: 95°F with 60% humidity has a heat index of around 110°F. Weather forecasts often report heat index during hot spells because it better represents the danger to human health. Air conditioning units measure actual temperature, but human comfort and safety depend on heat index.",
    },
    {
      question: "At what heat index is it dangerous to be outside?",
      answer: "Heat index above 91°F is caution level (fatigue possible). Above 104°F is danger level (heat exhaustion likely). Above 125°F is extreme danger (heat stroke likely). However, vulnerability varies by person. Elderly people, young children, those with medical conditions, outdoor workers, and athletes face danger at lower heat indices. Never leave children or pets in vehicles during high heat index days; interior temperatures can exceed 130°F in minutes. Limit strenuous outdoor activity when heat index exceeds 91°F, especially during peak sun hours (10am-4pm).",
    },
    {
      question: "How is heat index calculated?",
      answer: "The National Weather Service uses the Rothfusz regression equation, which includes temperature and relative humidity values in a complex formula. Heat index is only calculated when temperature exceeds 80°F. Below 80°F, the heat index equals the actual temperature. The equation accounts for the physical process of evaporative cooling and how humidity inhibits that process. Different equations exist for metric units (Celsius and percent), but the concept is identical: higher humidity increases the apparent temperature.",
    },
    {
      question: "What should I do if I experience heat exhaustion symptoms?",
      answer: "Heat exhaustion signs include heavy sweating, weakness, dizziness, nausea, fast heartbeat, and cool clammy skin. Move to a cool place immediately (indoor air conditioning or shade). Drink cool water, not ice water. Apply cool water to skin or take a cool shower. Lie down and elevate legs. If symptoms don't improve within 30 minutes, or if you develop high body temperature, confusion, or loss of consciousness, call emergency services. Heat stroke is a medical emergency requiring immediate professional help. Prevention is key: drink water before you're thirsty, wear light clothing, take breaks, and avoid peak sun hours.",
    },
    {
      question: "How much water should I drink during hot weather?",
      answer: "Drink water continuously throughout the day, not just when thirsty. Thirst is a late indicator of dehydration. Most people need at least 8-10 glasses (64-80 ounces) daily, more if active or in heat. During outdoor activity in heat, drink 4-8 ounces every 15-20 minutes. Don't rely on caffeinated or alcoholic beverages; they increase dehydration. Check urine color: pale yellow indicates adequate hydration, dark yellow indicates dehydration. Athletes and outdoor workers need more. In extreme heat (heat index above 105°F), even sedentary people should increase water intake significantly. Electrolyte replacement drinks can help during prolonged activity.",
    },
  ],
  dateModified: "2026-04-10",
});
