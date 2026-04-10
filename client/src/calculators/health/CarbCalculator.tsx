import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function CarbCalculator() {
  const [weight, setWeight] = useState(175);
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintenance");

  // Determine carb target based on activity and goal
  let minCarbs = 0;
  let maxCarbs = 0;
  let recommendation = "";

  if (activity === "sedentary") {
    minCarbs = weight * 2;
    maxCarbs = weight * 3;
    recommendation = "Sedentary lifestyle";
  } else if (activity === "moderate") {
    minCarbs = weight * 3;
    maxCarbs = weight * 5;
    recommendation = "Moderate activity";
  } else if (activity === "active") {
    minCarbs = weight * 5;
    maxCarbs = weight * 7;
    recommendation = "Active lifestyle";
  } else if (activity === "endurance") {
    minCarbs = weight * 7;
    maxCarbs = weight * 10;
    recommendation = "Endurance athlete";
  }

  // Adjust for goal
  if (goal === "performance") {
    maxCarbs = Math.round(maxCarbs * 1.15);
    recommendation += " + Performance focus (high carbs)";
  } else if (goal === "maintenance") {
    recommendation += " + Weight maintenance";
  } else if (goal === "loss") {
    minCarbs = Math.round(minCarbs * 0.7);
    maxCarbs = Math.round(maxCarbs * 0.7);
    recommendation += " + Weight loss focus (reduced carbs)";
  }

  const avgCarbs = Math.round((minCarbs + maxCarbs) / 2);
  const carbsPerMeal = Math.round(avgCarbs / 3);

  // Fiber recommendation (10{'\u2013'}15g per 1000 calories, assume ~14-16 cals per lb)
  const estimatedCalories = weight * 15;
  const fiberMin = Math.round((estimatedCalories / 1000) * 10);
  const fiberMax = Math.round((estimatedCalories / 1000) * 15);

  // Chart data
  const chartData = [
    { label: "Sedentary\n(2{'\u2013'}3g/kg)", value: Math.round((weight / 2.2) * 2.5) },
    { label: "Moderate\n(3{'\u2013'}5g/kg)", value: Math.round((weight / 2.2) * 4) },
    { label: "Active\n(5{'\u2013'}7g/kg)", value: Math.round((weight / 2.2) * 6) },
    { label: "Endurance\n(7{'\u2013'}10g/kg)", value: Math.round((weight / 2.2) * 8.5) },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard label="Daily Carbs (Low)" value={`${minCarbs}g`} />
        <ResultCard label="Daily Carbs (High)" value={`${maxCarbs}g`} highlight />
        <ResultCard label="Recommended Target" value={`${avgCarbs}g`} highlight />
        <ResultCard label="Per Meal (3 meals)" value={`~${carbsPerMeal}g`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard label="Fiber Intake Goal" value={`${fiberMin}{'\u2013'}${fiberMax}g/day`} hint="10{'\u2013'}15g per 1000 cal" />
        <ResultCard label="Net Carbs (Carbs {'\u2013'} Fiber)" value={`${avgCarbs - Math.round((fiberMin + fiberMax) / 2)}g`} hint="If tracking net carbs" />
      </div>

      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-sm text-amber-900 font-semibold mb-1">Recommendation:</p>
        <p className="text-sm text-amber-900">{recommendation}</p>
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Carb Recommendations by Activity Level</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis label={{ value: "Grams per Day", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value as number}g carbs`} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={["#cbd5e1", "#3b82f6", "#8b5cf6", "#ef4444"][index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Carbohydrate needs vary dramatically based on activity level and fitness goals. This calculator helps determine optimal daily carb intake to fuel performance, support recovery, and achieve body composition goals. The guidelines are based on grams per kilogram of body weight, a common sports nutrition approach.
      </p>

      <p>
        <strong>Carbs and Performance:</strong> Carbohydrates are your body{'\u2019'}s preferred fuel for high-intensity exercise and endurance activities. They replenish muscle glycogen (stored carbs used during exercise), maintain blood glucose, and support mental performance. Athletes with low carb intake often experience fatigue, poor recovery, and strength loss. Matching carb intake to training intensity and duration maximizes performance and adaptation.
      </p>

      <p>
        <strong>Activity-Based Guidelines:</strong> Sedentary individuals need fewer carbs (2{'\u2013'}3g per kg body weight). Moderate activity (3{'\u2013'}5x/week) requires 3{'\u2013'}5g/kg. Active individuals (5{'\u2013'}6x/week) benefit from 5{'\u2013'}7g/kg. Endurance athletes (intense training 6{'\u2013'}7 days/week) may need 7{'\u2013'}10g/kg to fuel workouts and recovery. These ranges provide adequate energy without excess that might impair fat loss or increase fat storage.
      </p>

      <p>
        <strong>Carbs for Weight Loss:</strong> Reducing carbs moderately (by 20{'\u2013'}30%) supports fat loss while maintaining energy for training. Carbs should match activity: low-carb days follow low-activity days; higher carbs support intense training days. Fiber intake becomes more important on reduced carbs as it provides fullness with fewer calories. Never eliminate carbs entirely unless working with a coach or healthcare provider, especially if training intensely.
      </p>

      <p>
        <strong>Fiber and Digestive Health:</strong> Aim for 10{'\u2013'}15g fiber per 1000 calories (typically 25{'\u2013'}35g daily). Fiber supports digestion, stabilizes blood sugar, feeds beneficial gut bacteria, and improves satiety. If tracking "net carbs" (total carbs minus fiber), subtract fiber from your carb target {'\u2013'} the impact on blood sugar and energy is lower. Increase fiber gradually to avoid bloating; drink plenty of water to aid digestion.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Carb Calculator"
      description="Calculate daily carbohydrate needs based on activity level and fitness goals"
      slug="carb-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="weight"
          label="Body Weight"
          value={weight}
          onChange={setWeight}
          suffix="lbs"
          step={1}
          min={80}
          max={350}
        />

        <SelectField
          id="activity"
          label="Activity Level"
          value={activity}
          onChange={setActivity}
          options={[
            { value: "sedentary", label: "Sedentary (little/no exercise)" },
            { value: "moderate", label: "Moderate (3{'\u2013'}5 days/week)" },
            { value: "active", label: "Active (5{'\u2013'}6 days/week)" },
            { value: "endurance", label: "Endurance Athlete (6{'\u2013'}7 days/week)" },
          ]}
        />

        <SelectField
          id="goal"
          label="Goal"
          value={goal}
          onChange={setGoal}
          options={[
            { value: "performance", label: "Athletic Performance (high carbs)" },
            { value: "maintenance", label: "Weight Maintenance" },
            { value: "loss", label: "Weight Loss (reduced carbs)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CarbCalculator,
  slug: "carb-calculator",
  title: "Carb Calculator",
  shortTitle: "Carbs",
  description: "Calculate your daily carbohydrate needs based on activity level and fitness goals",
  category: "health",
  icon: "🍞",
  keywords: ["carbohydrate calculator", "carbs daily intake", "sports nutrition", "athletic performance", "carb cycling"],
  popular: true,
  faqs: [
    {
      question: "Why do carb needs depend on activity level?",
      answer: "Carbohydrates fuel high-intensity exercise and replenish muscle glycogen depleted during training. Athletes performing intense workouts need more carbs to support performance, recovery, and adaptation. Sedentary individuals need fewer carbs since they{'\u2019'}re not depleting muscle glycogen. Matching carb intake to training prevents fatigue during workouts and poor recovery afterward. Excess carbs without training are stored as fat or glycogen, potentially contributing to weight gain.",
    },
    {
      question: "Can I lose weight eating high carbs?",
      answer: "Yes, if total calories are in deficit. Weight loss depends on calorie balance, not macronutrient split. High-carb diets work for many people because carbs are satiating and lower in calories per gram than fat (4 cal/g for carbs vs. 9 for fat). However, if carbs spike blood sugar without fiber and trigger hunger, a moderate-carb approach might feel easier to sustain. Experiment to find what works; some prefer higher carbs, others prefer lower carbs with higher fat.",
    },
    {
      question: "What are good sources of carbohydrates?",
      answer: "Choose whole grain carbs: oats, brown rice, quinoa, whole wheat bread/pasta. Include vegetables (broccoli, sweet potatoes, spinach) for carbs, fiber, and nutrients. Fruits (berries, bananas, apples) provide carbs, fiber, and antioxidants. Legumes (lentils, beans) offer carbs and plant protein. Limit refined carbs (white bread, sugary cereals, candy) that spike blood sugar and lack fiber. Timing carbs around workouts {'\u2013'} more carbs before/after intense training {'\u2013'} optimizes energy and recovery.",
    },
    {
      question: "Is there such a thing as too many carbs?",
      answer: "Yes. Excess carbs {'\u2013'} beyond what you burn plus a modest surplus {'\u2013'} are stored as muscle glycogen (limited by muscle size) or converted to fat. Very high carbs (10+ g/kg) without intense training typically leads to excess body fat gain. Additionally, chronically very high carbs without adequate fiber can elevate triglycerides and impair insulin sensitivity in some people. However, for athletes in heavy training, 8{'\u2013'}10 g/kg is appropriate and necessary.",
    },
    {
      question: "What's the difference between total carbs and net carbs?",
      answer: "Total carbs = all carbohydrates in a food. Net carbs = total carbs minus fiber. Fiber is a carb but isn{'\u2019'}t digested for energy; it passes through largely intact. If you{'\u2019'}re counting net carbs (common in low-carb diets), you subtract fiber. For example, 30g total carbs with 10g fiber = 20g net carbs. For general health and sports nutrition, total carbs matter most. Net carbs are useful if tracking a low-carb diet or managing diabetes.",
    },
  ],
  dateModified: "2026-04-10",
});
