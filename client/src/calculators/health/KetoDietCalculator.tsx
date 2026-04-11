import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function KetoDietCalculator() {
  const [weight, setWeight] = useState(175);
  const [height, setHeight] = useState(70);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [deficit, setDeficit] = useState(20);

  // Calculate BMR (Mifflin-St Jeor equation)
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Apply activity multiplier
  let activityMultiplier = 1.2;
  if (activity === "light") activityMultiplier = 1.375;
  else if (activity === "moderate") activityMultiplier = 1.55;
  else if (activity === "heavy") activityMultiplier = 1.725;

  let tdee = Math.round(bmr * activityMultiplier);

  // Apply goal adjustment
  let targetCalories = tdee;
  if (goal === "lose") {
    targetCalories = Math.round(tdee * (1 - deficit / 100));
  } else if (goal === "gain") {
    targetCalories = Math.round(tdee * 1.1);
  }

  // Ketogenic macros: 70% fat, 25% protein, 5% carbs
  const fatCalories = Math.round(targetCalories * 0.7);
  const proteinCalories = Math.round(targetCalories * 0.25);
  const carbCalories = Math.round(targetCalories * 0.05);

  // Convert to grams (fat: 9 cal/g, protein: 4 cal/g, carbs: 4 cal/g)
  const fatGrams = Math.round(fatCalories / 9);
  const proteinGrams = Math.round(proteinCalories / 4);
  const carbGrams = Math.round(carbCalories / 4);

  // Macros chart
  const macroData = [
    { name: "Fat (70%)", value: fatCalories, color: "#f59e0b" },
    { name: "Protein (25%)", value: proteinCalories, color: "#ef4444" },
    { name: "Carbs (5%)", value: carbCalories, color: "#3b82f6" },
  ];

  // Daily breakdown chart
  const breakdownData = [
    { name: "Fat", grams: fatGrams, calories: fatCalories },
    { name: "Protein", grams: proteinGrams, calories: proteinCalories },
    { name: "Carbs", grams: carbGrams, calories: carbCalories },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard label="BMR" value={`${Math.round(bmr)} cal/day`} />
        <ResultCard label="TDEE" value={`${tdee} cal/day`} highlight />
        <ResultCard label="Target Calories" value={`${targetCalories} cal/day`} highlight />
        <ResultCard label="Calorie Adjustment" value={goal === "lose" ? `${deficit}% deficit` : goal === "gain" ? `+10% surplus` : "No change"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultCard label="Daily Fat" value={`${fatGrams}g`} hint={`${fatCalories} cal`} />
        <ResultCard label="Daily Protein" value={`${proteinGrams}g`} hint={`${proteinCalories} cal`} />
        <ResultCard label="Daily Carbs" value={`${carbGrams}g`} hint={`${carbCalories} cal`} />
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          <strong>Daily Breakdown:</strong> Fat {fatGrams}g {'\u00d7'} 9 cal/g = {fatCalories} cal {'\u2022'} Protein {proteinGrams}g {'\u00d7'} 4 cal/g = {proteinCalories} cal {'\u2022'} Carbs {carbGrams}g {'\u00d7'} 4 cal/g = {carbCalories} cal
        </p>
      </div>
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Macro Calorie Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={macroData} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
              {macroData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value as number} cal`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Macros Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={breakdownData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Grams per Day", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="grams" radius={[8, 8, 0, 0]} fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The ketogenic diet is a high-fat, low-carb eating approach designed to push the body into ketosis {'\u2013'} a metabolic state where fat becomes the primary fuel source instead of carbohydrates. This calculator determines the keto macro targets (70% fat, 25% protein, 5% carbs) based on your TDEE and fitness goals. The aim is to maintain ketosis while meeting caloric needs for your goal (maintain, lose, or gain weight).
      </p>

      <p>
        <strong>Understanding Ketosis:</strong> When carbohydrate intake drops below 20{'\u2013'}50g daily, the body depletes glucose stores and shifts to burning fat for energy, producing ketones in the liver. Ketones become the brain{'\u2019'}s preferred fuel. This shift typically takes 3{'\u2013'}7 days but varies by individual metabolism, prior diet, and exercise level. Some people experience "keto flu" (fatigue, headaches) during adaptation, usually lasting 1{'\u2013'}2 weeks.
      </p>

      <p>
        <strong>Protein on Keto:</strong> Adequate protein (25% of calories or about 0.7{'\u2013'}1g per pound of body weight) supports muscle maintenance and recovery, especially with calorie deficit. Too little protein risks muscle loss and slower recovery. Too much protein {'\u2013'} exceeding about 30% of calories {'\u2013'} can convert to glucose through gluconeogenesis, potentially disrupting ketosis. Balance protein intake to meet needs without excess.
      </p>

      <p>
        <strong>Fat on Keto:</strong> 70% of calories from fat might sound extreme, but it{'\u2019'}s necessary to reach ketosis and provide satiety. Focus on quality fats: olive oil, avocados, nuts, fatty fish (omega-3s), and grass-fed butter. Saturation doesn{'\u2019'}t matter much in ketosis (cholesterol effects differ); prioritize fats you enjoy for adherence. Moderate calorie counting; fat is satiating so overeating is less common than on high-carb diets.
      </p>

      <p>
        <strong>Weight Loss on Keto:</strong> Initial rapid weight loss is largely water (glycogen binds water; depleting carbs releases it). Sustained loss requires calorie deficit. Keto{'\u2019'}s advantage is often appetite suppression and sustained energy, making calorie deficit easier to maintain. Track progress by weight, measurements, and how clothes fit rather than daily scale fluctuations. Adapt calories if weight stalls after 4{'\u2013'}6 weeks.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Keto Diet Calculator"
      description="Calculate ketogenic diet macros (70% fat, 25% protein, 5% carbs) for your fitness goals"
      slug="keto-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="weight"
            label="Weight"
            value={weight}
            onChange={setWeight}
            suffix="lbs"
            step={1}
            min={80}
            max={350}
          />
          <InputField
            id="height"
            label="Height"
            value={height}
            onChange={setHeight}
            suffix="in"
            step={0.5}
            min={48}
            max={84}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="age"
            label="Age"
            value={age}
            onChange={setAge}
            suffix="years"
            step={1}
            min={15}
            max={100}
          />
          <SelectField
            id="gender"
            label="Gender"
            value={gender}
            onChange={setGender}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
        </div>

        <SelectField
          id="activity"
          label="Activity Level"
          value={activity}
          onChange={setActivity}
          options={[
            { value: "sedentary", label: "Sedentary (little exercise)" },
            { value: "light", label: "Light (1{'\u2013'}3 days/week)" },
            { value: "moderate", label: "Moderate (3{'\u2013'}5 days/week)" },
            { value: "heavy", label: "Heavy (6{'\u2013'}7 days/week)" },
          ]}
        />

        <SelectField
          id="goal"
          label="Goal"
          value={goal}
          onChange={setGoal}
          options={[
            { value: "lose", label: "Lose Weight" },
            { value: "maintain", label: "Maintain Weight" },
            { value: "gain", label: "Gain Muscle" },
          ]}
        />

        {goal === "lose" && (
          <InputField
            id="deficit"
            label="Calorie Deficit"
            value={deficit}
            onChange={setDeficit}
            suffix="%"
            step={5}
            min={10}
            max={40}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
