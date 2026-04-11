import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CaloriesBurnedCalculator() {
  const [weight, setWeight] = useState(170);
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [activity, setActivity] = useState("running");
  const [duration, setDuration] = useState(30);

  // Convert weight to kg
  const weightKg = weightUnit === "lbs" ? weight * 0.453592 : weight;

  // MET values for different activities
  const activities: { [key: string]: number } = {
    running: 8.0,
    jogging: 6.0,
    walking: 3.5,
    cycling: 7.5,
    swimming: 6.0,
    elliptical: 5.5,
    rowing: 7.0,
    jump_rope: 12.0,
    basketball: 7.0,
    tennis: 7.3,
    soccer: 7.0,
    hiking: 5.8,
  };

  const metValue = activities[activity] || 8.0;
  const durationHours = duration / 60;
  const caloriesBurned = Math.round(metValue * weightKg * durationHours);

  // Chart data showing all activities for comparison
  const chartData = Object.entries(activities).map(([act, met]) => ({
    activity: act.replace("_", " ").charAt(0).toUpperCase() + act.slice(1).replace("_", " "),
    calories: Math.round(met * weightKg * durationHours),
    color: act === activity ? "#ef4444" : "#94a3b8",
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Calories Burned" value={`${caloriesBurned} cal`} highlight />
      <ResultCard label="Activity" value={activity.replace("_", " ").charAt(0).toUpperCase() + activity.slice(1).replace("_", " ")} />
      <ResultCard label="Duration" value={`${duration} min`} />
      <ResultCard label="MET Value" value={`${formatNumber(metValue, 1)}`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Calories Burned by Activity ({duration} min)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="activity" angle={-45} textAnchor="end" height={100} />
          <YAxis label={{ value: "Calories", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Bar dataKey="calories" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes. Actual calorie burn varies based on individual fitness level, intensity, age, metabolism, and other factors. Always consult a healthcare professional before starting a new exercise program.
      </p>

      <p>
        Calories burned during exercise are calculated using MET (Metabolic Equivalent of Task) values, which measure the intensity of physical activity relative to your resting metabolic rate. One MET is approximately 1 calorie per kilogram of body weight per hour at rest. Running at 8.0 METs, for example, means you're working at 8 times your resting metabolic rate. The formula used is: Calories {'\u003d'} MET {'\u00d7'} Weight (kg) {'\u00d7'} Duration (hours).
      </p>

      <p>
        <strong>Factors Affecting Calorie Burn:</strong> The MET values provided are averages for moderate-intensity exercise. Higher intensities burn more calories {'\u2014'} a sprint burns significantly more than a casual jog. Fitness level also matters: a trained athlete's body is more efficient at movement, which can actually reduce calorie burn for the same activity. Body composition, age, and genetics influence resting metabolism, affecting total burn. Environmental factors like temperature and elevation also play a role {'\u2014'} exercising in heat or at high altitude increases energy expenditure.
      </p>

      <p>
        <strong>Building an Exercise Routine:</strong> Consistency matters more than single workout sessions. Combining cardio (running, cycling, swimming) with strength training maximizes calorie burn both during and after exercise (due to EPOC {'\u2014'} Excess Post-Exercise Oxygen Consumption). Aim for 150 minutes of moderate cardio weekly, plus 2 sessions of strength training. Remember: weight loss requires a calorie deficit from both diet and exercise {'\u2014'} you cannot out-exercise a poor diet.
      </p>

      <p>
        <strong>Recovery and Safety:</strong> Rest days are crucial for muscle recovery and preventing overtraining. Gradually increase intensity and duration to avoid injury. Staying hydrated and fueling properly before and after exercise enhances performance and recovery. If you experience pain during exercise, stop and consult a healthcare provider.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Calories Burned Calculator"
      description="Estimate how many calories you burn during different activities"
      slug="calories-burned-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="weight"
          label="Weight"
          value={weight}
          onChange={setWeight}
          suffix={weightUnit}
          step={1}
          min={50}
          max={500}
        />
        <SelectField
          id="weightUnit"
          label="Weight Unit"
          value={weightUnit}
          onChange={setWeightUnit}
          options={[
            { value: "lbs", label: "Pounds (lbs)" },
            { value: "kg", label: "Kilograms (kg)" },
          ]}
        />
        <SelectField
          id="activity"
          label="Activity"
          value={activity}
          onChange={setActivity}
          options={[
            { value: "running", label: "Running" },
            { value: "jogging", label: "Jogging" },
            { value: "walking", label: "Walking" },
            { value: "cycling", label: "Cycling" },
            { value: "swimming", label: "Swimming" },
            { value: "elliptical", label: "Elliptical" },
            { value: "rowing", label: "Rowing" },
            { value: "jump_rope", label: "Jump Rope" },
            { value: "basketball", label: "Basketball" },
            { value: "tennis", label: "Tennis" },
            { value: "soccer", label: "Soccer" },
            { value: "hiking", label: "Hiking" },
          ]}
        />
        <InputField
          id="duration"
          label="Duration"
          value={duration}
          onChange={setDuration}
          suffix="minutes"
          step={5}
          min={5}
          max={480}
        />
      </div>
    </CalculatorLayout>
  );
}
