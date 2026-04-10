import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SpeedCalculator() {
  const [mode, setMode] = useState("speed");
  const [value1, setValue1] = useState(100);
  const [value2, setValue2] = useState(2);
  const [unit, setUnit] = useState("mph");

  // Convert speeds to m/s for calculations
  const toMS = (speed: number, unitType: string): number => {
    switch (unitType) {
      case "mph":
        return speed * 0.44704;
      case "kmh":
        return speed / 3.6;
      case "ms":
        return speed;
      case "knots":
        return speed * 0.51444;
      default:
        return speed;
    }
  };

  const fromMS = (speed: number, unitType: string): number => {
    switch (unitType) {
      case "mph":
        return speed / 0.44704;
      case "kmh":
        return speed * 3.6;
      case "ms":
        return speed;
      case "knots":
        return speed / 0.51444;
      default:
        return speed;
    }
  };

  let distance = 0;
  let speed = 0;
  let time = 0;

  if (mode === "speed") {
    distance = value1;
    time = value2;
    speed = time > 0 ? distance / time : 0;
  } else if (mode === "distance") {
    speed = value1;
    time = value2;
    distance = speed * time;
  } else if (mode === "time") {
    distance = value1;
    speed = value2;
    time = speed > 0 ? distance / speed : 0;
  }

  // Convert to different units
  const speedMs = toMS(speed, unit);
  const speedMph = fromMS(speedMs, "mph");
  const speedKmh = fromMS(speedMs, "kmh");
  const speedKnots = fromMS(speedMs, "knots");

  const chartData = [
    { unitType: "mph", speed: speedMph },
    { unitType: "km/h", speed: speedKmh },
    { unitType: "m/s", speed: fromMS(speedMs, "ms") },
    { unitType: "knots", speed: speedKnots },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Distance"
        value={`${formatNumber(distance)} km`}
        highlight
      />
      <ResultCard
        label="Speed"
        value={`${formatNumber(speed)} ${unit}`}
        highlight
      />
      <ResultCard
        label="Time"
        value={`${formatNumber(time)} hours`}
        highlight
      />
      <ResultCard
        label="Speed (mph)"
        value={`${formatNumber(speedMph)} mph`}
      />
      <ResultCard
        label="Speed (km/h)"
        value={`${formatNumber(speedKmh)} km/h`}
      />
      <ResultCard
        label="Speed (m/s)"
        value={`${formatNumber(fromMS(speedMs, "ms"))} m/s`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Speed in Different Units</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="unitType" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="speed" stroke="#3b82f6" name="Speed" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Speed is the distance traveled per unit of time. The speed calculator helps you find any one of three variables when you know the other two. The fundamental formula is: <strong>Speed = Distance / Time</strong>. This relationship is used across physics, transportation, and everyday calculations like calculating your driving speed or average workout pace.
      </p>

      <p>
        <strong>Common Speed Units:</strong> Miles per hour (mph) is standard in the United States and UK. Kilometers per hour (km/h) is used almost everywhere else. Meters per second (m/s) is the scientific standard. Knots measure nautical speed (nautical miles per hour), used in aviation and maritime navigation. One knot equals 1.15 mph. Always verify which unit is expected in your context, especially in international or professional settings where confusion could be costly.
      </p>

      <p>
        <strong>Speed Calculations in Real Life:</strong> Highway driving speed limits are typically posted in mph or km/h. Running or cycling pace is often measured in minutes per kilometer or minutes per mile. Wind speed is reported in mph, km/h, or knots. Aircraft speed (true airspeed) is measured in knots. Internet speeds are in megabits per second (Mbps). Understanding speed conversions helps you compare performance across different activities and contexts. For example, a 10-minute-mile running pace (6 mph) is faster than a casual bicycle pace of 12 mph.
      </p>

      <p>
        <strong>Average Speed vs. Instantaneous Speed:</strong> Average speed is the total distance divided by total time, which is what this calculator computes. Instantaneous speed is your speed at any given moment, which varies during travel. If you drive 100 miles in 2 hours, your average speed is 50 mph, but you may have accelerated to 70 mph on highways and slowed to 25 mph in towns. Using average speed is sufficient for most planning purposes, such as calculating travel time or fuel efficiency.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Speed Calculator"
      description="Calculate speed, distance, or time using the distance = speed × time formula"
      slug="speed-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="mode"
          label="Calculate"
          value={mode}
          onChange={setMode}
          options={[
            { value: "speed", label: "Speed (from distance and time)" },
            { value: "distance", label: "Distance (from speed and time)" },
            { value: "time", label: "Time (from distance and speed)" },
          ]}
        />

        <SelectField
          id="unit"
          label="Speed Unit"
          value={unit}
          onChange={setUnit}
          options={[
            { value: "mph", label: "Miles per hour (mph)" },
            { value: "kmh", label: "Kilometers per hour (km/h)" },
            { value: "ms", label: "Meters per second (m/s)" },
            { value: "knots", label: "Knots" },
          ]}
        />

        {mode === "speed" && (
          <>
            <InputField
              id="distance"
              label="Distance"
              value={value1}
              onChange={setValue1}
              suffix="km"
              step={0.1}
              min={0}
            />
            <InputField
              id="time"
              label="Time"
              value={value2}
              onChange={setValue2}
              suffix="hours"
              step={0.1}
              min={0}
            />
          </>
        )}

        {mode === "distance" && (
          <>
            <InputField
              id="speed"
              label="Speed"
              value={value1}
              onChange={setValue1}
              suffix={unit}
              step={0.1}
              min={0}
            />
            <InputField
              id="time"
              label="Time"
              value={value2}
              onChange={setValue2}
              suffix="hours"
              step={0.1}
              min={0}
            />
          </>
        )}

        {mode === "time" && (
          <>
            <InputField
              id="distance"
              label="Distance"
              value={value1}
              onChange={setValue1}
              suffix="km"
              step={0.1}
              min={0}
            />
            <InputField
              id="speed"
              label="Speed"
              value={value2}
              onChange={setValue2}
              suffix={unit}
              step={0.1}
              min={0}
            />
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SpeedCalculator,
  slug: "speed-calculator",
  title: "Speed Calculator",
  shortTitle: "Speed",
  description: "Calculate speed, distance, or time with multiple unit support",
  category: "other",
  icon: "🚀",
  keywords: ["speed calculator", "distance time", "velocity", "mph", "km/h", "knots"],
  popular: true,
  faqs: [
    {
      question: "What's the formula for calculating speed?",
      answer: "Speed equals distance divided by time. The formula is: Speed = Distance / Time. Example: if you travel 100 miles in 2 hours, your speed is 100 / 2 = 50 mph. This works for any distance and time units, as long as you keep them consistent. Speed calculators help convert between different units (mph, km/h, m/s, knots) so you can express the result in whatever unit you need.",
    },
    {
      question: "How do I convert between mph and km/h?",
      answer: "One mile equals approximately 1.60934 kilometers. To convert mph to km/h, multiply by 1.609. Example: 50 mph × 1.609 = 80.45 km/h. To convert km/h to mph, divide by 1.609. Example: 100 km/h / 1.609 = 62.14 mph. A quick approximation: multiply mph by 1.6 or divide km/h by 1.6. Speed calculators do this conversion automatically for you across all common units.",
    },
    {
      question: "What are knots and when are they used?",
      answer: "A knot is a nautical mile per hour, used in aviation, maritime, and military contexts. One knot equals 1.15078 mph or 1.852 km/h. Aircraft cruising speed is typically 450-500 knots. Ships measure speed in knots. Weather reports may also express wind speed in knots. Understanding knots is important when traveling by plane or boat, reading aviation charts, or interpreting meteorological data. Knots are preferred in these fields because they relate to latitude and longitude on nautical charts.",
    },
    {
      question: "How do I calculate travel time from speed and distance?",
      answer: "Rearrange the speed formula to: Time = Distance / Speed. Example: if you drive 200 miles at 50 mph, the time is 200 / 50 = 4 hours. Account for rest stops, traffic, and speed variations in real-world driving. Average speed calculators assume constant speed, but actual trips vary. For better estimates, use lower average speeds during rush hours or unfamiliar terrain. Modern navigation apps estimate travel time by accounting for real-time traffic and typical speeds on each road segment.",
    },
    {
      question: "What's the difference between average speed and instantaneous speed?",
      answer: "Average speed is the total distance divided by total time, which is what this calculator computes. Instantaneous speed is your speed at any exact moment, which changes constantly during travel. If you drive 100 miles in 2 hours with varying speeds (70 mph on the highway, 30 mph in towns), your average speed is 50 mph, but your instantaneous speed varies. Speedometers show instantaneous speed. Trip computers calculate average speed. For planning trips or comparing performance, average speed is usually what matters.",
    },
  ],
  dateModified: "2026-04-10",
});
