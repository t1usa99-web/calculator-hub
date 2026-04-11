import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function TDEECalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(170);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);
  const [activityLevel, setActivityLevel] = useState("1.55");
  const [goal, setGoal] = useState("maintain");

  const heightCm = feet * 30.48 + inches * 2.54;

  // Mifflin-St Jeor BMR
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age - 161;
  }

  const tdee = Math.round(bmr * parseFloat(activityLevel));

  // Calorie targets for goals
  let targetCalories = tdee;
  if (goal === "loss") {
    targetCalories = Math.round(tdee - 500);
  } else if (goal === "gain") {
    targetCalories = Math.round(tdee + 500);
  }

  // Standard macro split: 40% carbs, 30% protein, 30% fat
  const protein = Math.round((targetCalories * 0.30) / 4); // 4 cal per gram
  const carbs = Math.round((targetCalories * 0.40) / 4); // 4 cal per gram
  const fat = Math.round((targetCalories * 0.30) / 9); // 9 cal per gram

  const macroData = [
    { name: "Protein", value: Math.round((protein * 4) / targetCalories * 100), color: "#ef4444", grams: protein },
    { name: "Carbs", value: Math.round((carbs * 4) / targetCalories * 100), color: "#f59e0b", grams: carbs },
    { name: "Fat", value: Math.round((fat * 9) / targetCalories * 100), color: "#10b981", grams: fat },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="TDEE" value={`${formatNumber(tdee, 0)} cal/day`} highlight />
      <ResultCard label="Goal Calories" value={`${formatNumber(targetCalories, 0)} cal/day`} highlight />
      <ResultCard label="Protein Target" value={`${protein}g (${Math.round((protein * 4))}cal)`} />
      <ResultCard label="Carbs Target" value={`${carbs}g (${Math.round((carbs * 4))}cal)`} />
      <ResultCard label="Fat Target" value={`${fat}g (${Math.round((fat * 9))}cal)`} />
      <ResultCard label="Daily Deficit/Surplus" value={goal === "loss" ? "-500 cal" : goal === "gain" ? "+500 cal" : "Balanced"} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Macro Breakdown ({formatNumber(targetCalories, 0)} calories)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={macroData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value, grams }) => `${name}: ${value}% (${grams}g)`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {macroData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day through basal metabolic rate, digestion, and physical activity. Understanding your TDEE is crucial for weight management because it serves as your baseline for calorie planning. By comparing your actual calorie intake to your TDEE, you can determine whether you'll lose, maintain, or gain weight. This calculator provides personalized TDEE estimates based on your individual characteristics and activity level.
      </p>

      <p>
        <strong>Macronutrients and Energy:</strong> Your daily calories come from three macronutrients: protein (4 calories per gram), carbohydrates (4 calories per gram), and fat (9 calories per gram). The standard macro split recommended here is 40% carbs, 30% protein, and 30% fat, which works well for most people aiming for body composition changes. Protein is particularly important as it supports muscle preservation during weight loss, aids satiety, and has a higher thermic effect than carbs or fat.
      </p>

      <p>
        <strong>Weight Loss vs. Gain Goals:</strong> A calorie deficit of 500 per day creates a weekly deficit of 3,500 calories, resulting in approximately 1 pound of weight loss per week. Similarly, a 500-calorie surplus supports muscle gain when combined with resistance training. Extreme deficits (1000+ calories below TDEE) often result in muscle loss, fatigue, and metabolic adaptation. Gradual changes of 500 calories per day are sustainable and preserve metabolic health while supporting your goals.
      </p>

      <p>
        <strong>Fine-tuning Your Plan:</strong> Use these calculations as a starting point and track your weight and energy levels for 2-3 weeks. If progress stalls, adjust calories by 100-200 in the appropriate direction. Remember that hydration, sleep, stress, and hormones significantly affect both hunger and metabolism. Food quality matters alongside calorie quantity—focus on whole foods, adequate fiber, and proper hydration. Consider working with a registered dietitian for personalized nutrition guidance tailored to your specific health needs and goals.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="TDEE Calculator"
      description="Calculate your total daily energy expenditure, macro targets, and calorie goals"
      slug="tdee-calculator"
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
        <SelectField
          id="goal"
          label="Goal"
          value={goal}
          onChange={setGoal}
          options={[
            { value: "loss", label: "Weight Loss (-500 cal)" },
            { value: "maintain", label: "Maintain Weight" },
            { value: "gain", label: "Muscle Gain (+500 cal)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
