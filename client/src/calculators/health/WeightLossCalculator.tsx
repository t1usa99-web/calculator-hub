import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function WeightLossCalculator() {
  const [currentWeight, setCurrentWeight] = useState(200);
  const [goalWeight, setGoalWeight] = useState(180);
  const [timeframe, setTimeframe] = useState(12);
  const [activityLevel, setActivityLevel] = useState("1.55");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(30);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);

  // Convert height to cm
  const heightCm = feet * 30.48 + inches * 2.54;

  // Calculate BMR using Mifflin-St Jeor
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * currentWeight + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * currentWeight + 6.25 * heightCm - 5 * age - 161;
  }

  // Calculate TDEE
  const tdee = Math.round(bmr * parseFloat(activityLevel));

  // Weight to lose
  const weightToLose = currentWeight - goalWeight;

  // Calories per pound of fat
  const CALORIES_PER_LB = 3500;

  // Total calories to deficit
  const totalCaloriesToDeficit = weightToLose * CALORIES_PER_LB;

  // Days in timeframe
  const days = timeframe * 7;

  // Daily calorie deficit needed
  const dailyDeficit = Math.round(totalCaloriesToDeficit / days);

  // Target daily calories
  const minDailyCalories = 1200;
  const targetDailyCalories = Math.max(tdee - dailyDeficit, minDailyCalories);

  // Actual deficit achieved
  const actualDailyDeficit = tdee - targetDailyCalories;

  // Realistic timeframe if using 1200 cal minimum
  const realisticWeeks = Math.ceil((totalCaloriesToDeficit / (actualDailyDeficit * 7)));

  // Chart data
  const chartData = [
    { label: "TDEE", calories: tdee, color: "#3b82f6" },
    { label: "Target Daily", calories: targetDailyCalories, color: "#ef4444" },
    { label: "Daily Deficit", calories: actualDailyDeficit, color: "#f59e0b" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Daily Calorie Target" value={`${formatNumber(targetDailyCalories, 0)} cal`} highlight />
      <ResultCard label="TDEE (Maintenance)" value={`${formatNumber(tdee, 0)} cal`} />
      <ResultCard label="Daily Deficit Needed" value={`${formatNumber(actualDailyDeficit, 0)} cal`} />
      <ResultCard label="Weight to Lose" value={`${formatNumber(weightToLose, 1)} lbs`} />
      <ResultCard label="Realistic Timeline" value={`${Math.ceil(realisticWeeks / 4)} months`} />
      <ResultCard label="Weekly Loss Rate" value={`~${formatNumber((actualDailyDeficit * 7) / CALORIES_PER_LB, 2)} lbs/week`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Daily Calorie Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
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
        <strong>Important Disclaimer:</strong> This calculator is for educational purposes. Sustainable weight loss requires medical guidance. Never eat below 1,200 calories without medical supervision. If you have diabetes, thyroid conditions, or other health issues, consult your doctor before starting any weight loss program. Rapid weight loss can be dangerous and lead to muscle loss, nutritional deficiencies, and metabolic slowdown.
      </p>

      <p>
        Weight loss fundamentally requires a calorie deficit: consuming fewer calories than you burn. Your TDEE (Total Daily Energy Expenditure) is calculated using the Mifflin-St Jeor equation for BMR, multiplied by an activity factor. One pound of body fat equals approximately 3,500 calories, so a 500-calorie daily deficit yields ~1 lb of weight loss per week. However, this is approximate {'\u2014'} metabolism, hormones, water retention, and muscle loss complicate the math.
      </p>

      <p>
        <strong>Safe Deficit Range:</strong> Aim for 0.5{'\u2013'}2 lbs per week; faster loss often includes muscle and water loss, not just fat. A 1,000-calorie daily deficit (2 lbs/week) is aggressive and difficult to maintain. Most people succeed with a 300{'\u2013'}700 calorie deficit combined with exercise. The calculator imposes a 1,200-calorie minimum for women and 1,500 for men {'\u2014'} below this, nutritional deficiency and metabolic adaptation (starvation mode) become serious risks.
      </p>

      <p>
        <strong>Why You Can{'\u2019'}t Just Count Calories:</strong> Individual calorie burn varies 20{'\u2013'}30% based on genetics, metabolism, muscle mass, and hormones. Hunger hormones (ghrelin) increase when in deficit, making adherence hard. Food quality matters: 2,000 calories from whole foods vs. junk food affects satiety, energy, and health differently. Protein intake preserves muscle during weight loss. Sleep, stress, and exercise quality all impact success.
      </p>

      <p>
        <strong>Best Practices for Success:</strong> Combine a moderate calorie deficit (300{'\u2013'}500 cal/day) with strength training (preserves muscle), adequate protein (1.2{'\u2013'}2.2 g/kg), and regular cardio. Focus on sustainable habits {'\u2014'} crash diets fail long-term. Track progress by measurements and how clothes fit, not just scale weight (muscle weighs more than fat). Expect weight loss to slow as you approach goal weight. After reaching goal, slowly increase calories to maintenance to avoid rapid regain.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Weight Loss Calculator"
      description="Calculate daily calorie targets for safe, sustainable weight loss"
      slug="weight-loss-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="currentWeight"
            label="Current Weight"
            value={currentWeight}
            onChange={setCurrentWeight}
            suffix="lbs"
            step={1}
            min={50}
            max={500}
          />
          <InputField
            id="goalWeight"
            label="Goal Weight"
            value={goalWeight}
            onChange={setGoalWeight}
            suffix="lbs"
            step={1}
            min={50}
            max={500}
          />
        </div>

        <InputField
          id="timeframe"
          label="Timeframe"
          value={timeframe}
          onChange={setTimeframe}
          suffix="weeks"
          step={1}
          min={4}
          max={104}
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
          id="age"
          label="Age"
          value={age}
          onChange={setAge}
          step={1}
          min={13}
          max={100}
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
          id="activityLevel"
          label="Activity Level"
          value={activityLevel}
          onChange={setActivityLevel}
          options={[
            { value: "1.2", label: "Sedentary (little exercise)" },
            { value: "1.375", label: "Lightly Active (1-3 days/week)" },
            { value: "1.55", label: "Moderately Active (3-5 days/week)" },
            { value: "1.725", label: "Very Active (6-7 days/week)" },
            { value: "1.9", label: "Extremely Active (intense training)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
