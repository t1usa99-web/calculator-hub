import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { MACRO_FAQS } from "@/lib/faq-health";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MacroCalculator() {
  const [weight, setWeight] = useState(170);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState("maintain");
  const [dietType, setDietType] = useState("balanced");

  const heightCm = feet * 30.48 + inches * 2.54;

  // BMR calculation
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age - 161;
  }

  // TDEE
  let tdee = Math.round(bmr * parseFloat(activity));

  // Adjust for goal
  if (goal === "loss") {
    tdee = Math.round(tdee - 500);
  } else if (goal === "gain") {
    tdee = Math.round(tdee + 500);
  }

  // Macro ratios by diet type
  let proteinPercent = 0.3;
  let carbsPercent = 0.4;
  let fatPercent = 0.3;

  if (dietType === "highProtein") {
    proteinPercent = 0.35;
    carbsPercent = 0.35;
    fatPercent = 0.3;
  } else if (dietType === "lowCarb") {
    proteinPercent = 0.35;
    carbsPercent = 0.25;
    fatPercent = 0.4;
  } else if (dietType === "ketogenic") {
    proteinPercent = 0.25;
    carbsPercent = 0.05;
    fatPercent = 0.7;
  }

  // Calculate macros
  const proteinCalories = tdee * proteinPercent;
  const carbsCalories = tdee * carbsPercent;
  const fatCalories = tdee * fatPercent;

  const protein = Math.round(proteinCalories / 4);
  const carbs = Math.round(carbsCalories / 4);
  const fat = Math.round(fatCalories / 9);

  const macroData = [
    { name: "Protein", value: Math.round(proteinPercent * 100), grams: protein, color: "#ef4444" },
    { name: "Carbs", value: Math.round(carbsPercent * 100), grams: carbs, color: "#f59e0b" },
    { name: "Fat", value: Math.round(fatPercent * 100), grams: fat, color: "#10b981" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Daily Calorie Target" value={`${formatNumber(tdee, 0)} cal`} highlight />
      <ResultCard label="Protein" value={`${protein}g (${Math.round(proteinCalories)} cal)`} />
      <ResultCard label="Carbs" value={`${carbs}g (${Math.round(carbsCalories)} cal)`} />
      <ResultCard label="Fat" value={`${fat}g (${Math.round(fatCalories)} cal)`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Macronutrient Distribution</h3>
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
        Macronutrients—protein, carbohydrates, and fat—are the three main nutrient groups that provide calories and energy for your body. While total calorie intake is crucial for weight management, the macronutrient balance affects satiety, energy levels, muscle preservation, and overall body composition changes. Different dietary approaches emphasize different macro ratios, and the optimal distribution depends on your individual health status, preferences, and goals. This calculator helps you determine the ideal macro targets for your specific situation.
      </p>

      <p>
        <strong>Protein for Muscle and Satiety:</strong> Protein is essential for muscle repair and growth, immune function, and hormone production. During weight loss, adequate protein helps preserve muscle mass and increases satiety, making it easier to maintain a calorie deficit. During muscle-building phases, protein supports muscle protein synthesis. The recommended range is 0.7-1g per pound of body weight, depending on activity level and goals. High-protein diets are particularly effective for body composition changes and maintaining metabolic rate during weight loss.
      </p>

      <p>
        <strong>Carbohydrates for Energy:</strong> Carbs are your body's preferred energy source and are essential for brain function, athletic performance, and recovery. They're particularly important if you engage in intense exercise. Carb timing—consuming them around workouts—optimizes performance and recovery. While low-carb diets can work for weight loss, they may impact athletic performance and aren't necessary for fat loss if total calories are controlled. Choose complex carbs like whole grains, vegetables, and legumes for sustained energy and nutrition.
      </p>

      <p>
        <strong>Choosing Your Approach:</strong> The balanced approach (40% carbs, 30% protein, 30% fat) works well for most people. High-protein diets are excellent for weight loss and muscle building. Low-carb approaches may reduce appetite but can impact endurance performance. Ketogenic diets shift metabolism to fat burning but require careful planning. The best diet is one you can sustain long-term with whole foods, adequate nutrition, and proper hydration. If you have health conditions or take medications, consult with a healthcare provider before making major dietary changes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Macro Calculator"
      description="Calculate your personalized macronutrient targets based on your goals and diet type"
      slug="macro-calculator"
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
        <SelectField
          id="activity"
          label="Activity Level"
          value={activity}
          onChange={setActivity}
          options={[
            { value: "1.2", label: "Sedentary" },
            { value: "1.375", label: "Lightly active" },
            { value: "1.55", label: "Moderately active" },
            { value: "1.725", label: "Very active" },
            { value: "1.9", label: "Extremely active" },
          ]}
        />
        <SelectField
          id="goal"
          label="Goal"
          value={goal}
          onChange={setGoal}
          options={[
            { value: "loss", label: "Weight Loss" },
            { value: "maintain", label: "Maintain Weight" },
            { value: "gain", label: "Muscle Gain" },
          ]}
        />
        <SelectField
          id="diet-type"
          label="Diet Type"
          value={dietType}
          onChange={setDietType}
          options={[
            { value: "balanced", label: "Balanced (40/30/30)" },
            { value: "highProtein", label: "High Protein (35/35/30)" },
            { value: "lowCarb", label: "Low Carb (35/25/40)" },
            { value: "ketogenic", label: "Ketogenic (25/5/70)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MacroCalculator,
  slug: "macro-calculator",
  title: "Macro Calculator",
  shortTitle: "Macros",
  description: "Calculate your personalized macronutrient targets based on your goals and preferred diet type",
  category: "health",
  icon: "🥗",
  keywords: ["macro calculator", "macronutrients", "protein", "carbs", "fat", "nutrition", "diet"],
  popular: false,
  faqs: MACRO_FAQS,
  dateModified: "2026-04-09",
});
