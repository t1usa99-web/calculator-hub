import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState(170);
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [climate, setClimate] = useState("temperate");

  // Convert weight to kg
  const weightKg = weightUnit === "lbs" ? weight * 0.453592 : weight;

  // Base water intake: 0.033 liters per kg
  let baseWater = weightKg * 0.033;

  // Activity level multiplier
  const activityMultipliers: { [key: string]: number } = {
    sedentary: 1.0,
    moderate: 1.3,
    active: 1.5,
    very_active: 1.8,
  };

  const activityMultiplier = activityMultipliers[activityLevel] || 1.3;

  // Climate adjustment
  const climateMultipliers: { [key: string]: number } = {
    cold: 1.0,
    temperate: 1.0,
    hot: 1.2,
  };

  const climateMultiplier = climateMultipliers[climate] || 1.0;

  // Calculate final recommendation
  let dailyWater = baseWater * activityMultiplier * climateMultiplier;

  // Convert to different units
  const liters = dailyWater;
  const ounces = dailyWater * 33.814;
  const cups = dailyWater * 4.227;
  const glasses = dailyWater * 8.454;

  // Chart data
  const chartData = [
    { label: "Base (Sedentary)", liters: baseWater, color: "#3b82f6" },
    { label: "With Activity", liters: baseWater * activityMultiplier, color: "#8b5cf6" },
    { label: "Final (Activity + Climate)", liters: dailyWater, color: "#10b981" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Daily Water Target" value={`${formatNumber(liters, 2)} L`} highlight />
      <ResultCard label="In Ounces" value={`${formatNumber(ounces, 0)} oz`} />
      <ResultCard label="In Cups" value={`${formatNumber(cups, 1)} cups`} />
      <ResultCard label="In Glasses" value={`${formatNumber(glasses, 1)} glasses`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Water Intake Adjustment by Factors</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis label={{ value: "Liters per Day", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${formatNumber(value as number, 2)} L`} />
          <Bar dataKey="liters" radius={[8, 8, 0, 0]}>
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
        <strong>Disclaimer:</strong> This calculator provides general hydration guidelines. Individual water needs vary based on metabolism, diet, climate, and health conditions. Consult a healthcare professional for personalized advice, especially if you have kidney disease or heart conditions that require fluid restriction.
      </p>

      <p>
        Daily water intake requirements vary by individual, but a common baseline is 0.033 liters (about 1 liter) per kilogram of body weight for sedentary individuals. This translates to roughly 2{'\u2013'}3 liters daily for a 150{'\u2013'}200 lb person at rest. However, activity level and climate significantly increase needs. The formula accounts for metabolic demands: more activity means more sweat and water loss, while hot climates increase evaporation. Cold, dry climates also increase water needs through respiratory water loss.
      </p>

      <p>
        <strong>Activity Level Impact:</strong> Sedentary individuals need baseline water; moderate activity (3{'\u2013'}5 hours/week exercise) increases needs by ~30%; active people (5{'\u2013'}7 hours/week) need ~50% more; very active athletes need ~80% more. During intense exercise, you may lose 1{'\u2013'}2 liters per hour depending on temperature and effort. Replace lost fluids: drink 500{'\u2013'}1000 mL of water for every kg of body weight lost during exercise.
      </p>

      <p>
        <strong>Climate Effects:</strong> Hot climates increase evaporative water loss through sweating; cold climates increase loss through respiration and reduced thirst sensation (people forget to drink when cold). High altitude increases respiratory water loss. Humidity affects sweat evaporation efficiency: high humidity reduces cooling, causing more sweat and dehydration. Always drink to thirst, monitor urine color (pale yellow is hydrated; dark is dehydrated), and increase intake if active in heat.
      </p>

      <p>
        <strong>Hydration Tips:</strong> Drink water consistently throughout the day rather than large amounts at once. About 20{'\u2013'}30% of water intake comes from food (fruits, vegetables contain 80{'\u2013'}95% water). Caffeinated and alcoholic beverages increase fluid loss through increased urination. During exercise, drink 150{'\u2013'}250 mL every 15{'\u2013'}20 minutes. Post-exercise, drink 150% of fluid lost over 4{'\u2013'}6 hours to rehydrate fully.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Water Intake Calculator"
      description="Calculate your daily water intake recommendation based on weight, activity, and climate"
      slug="water-intake-calculator"
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
          id="activityLevel"
          label="Activity Level"
          value={activityLevel}
          onChange={setActivityLevel}
          options={[
            { value: "sedentary", label: "Sedentary (little to no exercise)" },
            { value: "moderate", label: "Moderate (3-5 hours/week)" },
            { value: "active", label: "Active (5-7 hours/week)" },
            { value: "very_active", label: "Very Active (intense daily training)" },
          ]}
        />
        <SelectField
          id="climate"
          label="Climate"
          value={climate}
          onChange={setClimate}
          options={[
            { value: "cold", label: "Cold" },
            { value: "temperate", label: "Temperate" },
            { value: "hot", label: "Hot" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: WaterIntakeCalculator,
  slug: "water-intake-calculator",
  title: "Water Intake Calculator",
  shortTitle: "Water Intake",
  description: "Calculate your daily water intake recommendation based on body weight, activity level, and climate conditions",
  category: "health",
  icon: "💧",
  keywords: ["water intake", "daily hydration", "water requirement", "fluid intake", "thirst calculator"],
  popular: true,
  faqs: [
    {
      question: "Is the {'\u0022'}8 glasses a day{'\u0022'} rule accurate?",
      answer: "The {'\u0022'}8 glasses a day{'\u0022'} rule (about 2 liters) is a reasonable general guideline but not one-size-fits-all. Individual needs depend on weight, activity, climate, diet, and health status. A 200 lb active person needs more than a 120 lb sedentary person. About 20{'\u2013'}30% of water intake comes from food. The {'\u0022'}drink to thirst{'\u0022'} approach often works well for healthy people, though athletes and older adults should drink more intentionally.",
    },
    {
      question: "Does drinking more water help with weight loss?",
      answer: "Adequate hydration supports metabolism and can help with weight management indirectly. Drinking water before meals may reduce calorie intake slightly (25{'\u2013'}50 calories per meal). Proper hydration maintains energy for exercise and prevents fatigue. However, water itself has no calories {'\u2014'} weight loss comes from calorie deficit. Replacing sugary drinks with water definitely helps reduce calorie intake and supports overall health.",
    },
    {
      question: "Can you drink too much water?",
      answer: "Yes. Hyponatremia (water intoxication) occurs when drinking excessive water without electrolytes, diluting blood sodium. This is rare and typically occurs in endurance athletes or psychiatric patients but is a real danger. Drink to thirst for most people. During intense exercise over 1{'\u2013'}2+ hours, consume sports drinks with sodium and carbs, not just water. Signs of overhydration include nausea, headache, and swelling {'\u2014'} seek medical attention if these occur.",
    },
    {
      question: "How do I know if I{'\u2019'}m dehydrated?",
      answer: "Signs of dehydration include thirst, dark urine, dry mouth, fatigue, dizziness, and reduced urination. Urine color is a reliable indicator: pale yellow {'\u003d'} well-hydrated, dark yellow/brown {'\u003d'} dehydrated. Mild dehydration causes fatigue and reduced performance; severe dehydration is dangerous and requires medical attention. Prevent dehydration by drinking regularly and increasing intake with activity or heat. Older adults and children dehydrate more easily and should drink proactively.",
    },
    {
      question: "Do electrolytes (sodium, potassium) matter in hydration?",
      answer: "Electrolytes {'\u2014'} especially sodium and potassium {'\u2014'} are essential for hydration. Water alone doesn{'\u2019'}t fully rehydrate; you need electrolytes to help your body retain water. During exercise lasting over 1{'\u2013'}2 hours, drink sports drinks containing sodium (300{'\u2013'}600 mg/L) and carbs to improve fluid absorption and prevent hyponatremia. Regular diet provides enough electrolytes for daily life; supplementation is mainly for intense/prolonged exercise.",
    },
  ],
  dateModified: "2026-04-10",
});
