import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CalorieCalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(170);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);
  const [activityLevel, setActivityLevel] = useState("1.55");

  const totalInches = feet * 12 + inches;

  // Mifflin-St Jeor equation for BMR
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * (totalInches * 2.54) - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * (totalInches * 2.54) - 5 * age - 161;
  }

  // TDEE = BMR * Activity Level
  const tdee = Math.round(bmr * parseFloat(activityLevel));
  const weightLoss = Math.round(tdee - 500); // 500 calorie deficit
  const weightGain = Math.round(tdee + 500); // 500 calorie surplus

  const chartData = [
    { label: "BMR", value: Math.round(bmr), color: "#3b82f6" },
    { label: "Weight Loss", value: weightLoss, color: "#10b981" },
    { label: "Maintenance", value: tdee, color: "#f59e0b" },
    { label: "Weight Gain", value: weightGain, color: "#ef4444" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="BMR" value={`${formatNumber(bmr, 0)} cal/day`} />
      <ResultCard label="TDEE" value={`${formatNumber(tdee, 0)} cal/day`} highlight />
      <ResultCard label="Weight Loss" value={`${formatNumber(weightLoss, 0)} cal/day`} />
      <ResultCard label="Weight Gain" value={`${formatNumber(weightGain, 0)} cal/day`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Daily Calorie Targets</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis label={{ value: "Calories", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
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
        Calorie intake is fundamental to weight management and health. Your daily calorie needs are determined by your Basal Metabolic Rate (BMR), which is the number of calories your body burns at rest, multiplied by your activity level. The Mifflin-St Jeor equation is one of the most accurate methods for calculating BMR, accounting for age, sex, height, and weight. Understanding your total daily energy expenditure (TDEE) helps you determine whether to create a calorie deficit for weight loss, maintain your current weight, or create a surplus for muscle gain.
      </p>

      <p>
        <strong>Understanding BMR and TDEE:</strong> Your Basal Metabolic Rate is the minimum calories your body needs to maintain basic physiological functions like breathing, circulation, and cell production. When you multiply BMR by your activity level factor, you get your TDEE. Activity levels typically range from 1.2 (sedentary) to 1.9 (very active). TDEE represents the total calories you burn through basal metabolism, digestion, and exercise. This is your baseline for weight management.
      </p>

      <p>
        <strong>Weight Loss and Gain:</strong> To lose weight, you need a calorie deficit—consuming fewer calories than your TDEE. A deficit of 500 calories per day typically results in losing about 1 pound per week. Conversely, to gain weight (muscle), you need a calorie surplus of 300-500 calories above TDEE combined with resistance training. It's important to lose weight gradually (no more than 2 pounds per week) to preserve muscle mass and maintain metabolic health.
      </p>

      <p>
        <strong>Practical Application:</strong> Use your TDEE as a starting point and track your actual results over 2-3 weeks. If you're not seeing changes, adjust calories by 100-200 in the appropriate direction. Remember that factors like sleep quality, stress levels, and hormones affect appetite and metabolism. A balanced diet with adequate protein, healthy fats, and whole carbohydrates is important for sustainable weight management and overall health.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Calorie Calculator"
      description="Calculate your daily calorie needs including BMR, TDEE, and weight loss/gain targets"
      slug="calorie-calculator"
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
        <SelectField
          id="activity-level"
          label="Activity Level"
          value={activityLevel}
          onChange={setActivityLevel}
          options={[
            { value: "1.2", label: "Sedentary (little to no exercise)" },
            { value: "1.375", label: "Lightly active (1-3 days/week)" },
            { value: "1.55", label: "Moderately active (3-5 days/week)" },
            { value: "1.725", label: "Very active (6-7 days/week)" },
            { value: "1.9", label: "Extremely active (physical job)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
