import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { BMR_FAQS } from "@/lib/faq-health";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BMRCalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(170);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);

  const heightCm = feet * 30.48 + inches * 2.54;

  // Mifflin-St Jeor equation for BMR
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age - 161;
  }

  // Activity multipliers
  const activityLevels = [
    { name: "Sedentary", multiplier: 1.2 },
    { name: "Lightly Active", multiplier: 1.375 },
    { name: "Moderately Active", multiplier: 1.55 },
    { name: "Very Active", multiplier: 1.725 },
    { name: "Extremely Active", multiplier: 1.9 },
  ];

  const chartData = activityLevels.map((level) => ({
    name: level.name,
    calories: Math.round(bmr * level.multiplier),
    color: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"][activityLevels.indexOf(level)],
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Basal Metabolic Rate (BMR)" value={`${formatNumber(bmr, 0)} cal/day`} highlight />
      <ResultCard label="Height in cm" value={`${formatNumber(heightCm, 1)} cm`} />
      <ResultCard label="Weight in kg" value={`${formatNumber(weight * 0.453592, 1)} kg`} />
      <ResultCard label="Formula Used" value="Mifflin-St Jeor" />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Daily Calories by Activity Level</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
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
        Your Basal Metabolic Rate (BMR) represents the number of calories your body burns at rest to maintain essential physiological functions such as breathing, circulation, cell production, and nutrient processing. The Mifflin-St Jeor equation is considered one of the most accurate and widely used formulas for calculating BMR, developed through research on large population samples. This equation accounts for your age, sex, height, and weight—the key factors that influence your resting metabolic rate. BMR is typically the largest component of your total daily energy expenditure, accounting for 60-75% of calories burned in sedentary individuals.
      </p>

      <p>
        <strong>Understanding the Mifflin-St Jeor Formula:</strong> Unlike older formulas (Harris-Benedict), the Mifflin-St Jeor formula was developed with modern data and is more accurate for contemporary populations. It accounts for the reality that metabolism changes with age—BMR naturally decreases by approximately 2% per decade after age 20. This formula is used by healthcare professionals, nutritionists, and fitness experts worldwide. The equation differs slightly for men and women to account for differences in body composition and hormonal factors.
      </p>

      <p>
        <strong>From BMR to TDEE:</strong> Your Total Daily Energy Expenditure (TDEE) is calculated by multiplying your BMR by an activity factor. Sedentary individuals (little exercise) have a factor of 1.2, while extremely active individuals (intense daily training) have a factor of 1.9. The gap between activity levels can be significant—a very active person might burn 400-500 calories more per day than a sedentary person with the same BMR. This is why both exercise and TDEE matter for weight management.
      </p>

      <p>
        <strong>Factors Affecting BMR:</strong> Beyond the variables in the equation, BMR is influenced by muscle mass (more muscle increases BMR), hormones, genetics, sleep quality, and overall health. Building muscle through strength training can increase BMR by up to 6 calories per pound of muscle gained. Crash dieting, conversely, can lower BMR as your body adapts to reduced calorie intake. Understanding your BMR helps you set realistic calorie targets for weight loss, maintenance, or gain.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="BMR Calculator"
      description="Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation"
      slug="bmr-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="age"
          label="Age"
          value={age}
          onChange={setAge}
          step={1}
          min={13}
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
        <InputField
          id="weight"
          label="Weight"
          value={weight}
          onChange={setWeight}
          suffix="lbs"
          step={1}
          min={50}
          max={500}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="feet"
            label="Height (Feet)"
            value={feet}
            onChange={setFeet}
            step={1}
            min={2}
            max={8}
          />
          <InputField
            id="inches"
            label="Inches"
            value={inches}
            onChange={setInches}
            step={1}
            min={0}
            max={11}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BMRCalculator,
  slug: "bmr-calculator",
  title: "BMR Calculator",
  shortTitle: "BMR",
  description: "Calculate your Basal Metabolic Rate using the accurate Mifflin-St Jeor equation",
  category: "health",
  icon: "🔋",
  keywords: ["BMR", "basal metabolic rate", "resting metabolic rate", "metabolism"],
  popular: false,
  faqs: BMR_FAQS,
  dateModified: "2026-04-09",
});
