import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function ProteinCalculator() {
  const [weight, setWeight] = useState(170);
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [goal, setGoal] = useState("maintain");
  const [mealsPerDay, setMealsPerDay] = useState(3);

  // Convert to kg
  const weightKg = weightUnit === "lbs" ? weight * 0.453592 : weight;

  // Protein requirements by goal (grams per kg)
  const proteinTargets: { [key: string]: number } = {
    maintain: 0.8,
    lose_weight: 1.6,
    build_muscle: 1.8,
    athlete: 2.0,
  };

  const proteinGPerKg = proteinTargets[goal] || 0.8;
  const dailyProteinGrams = Math.round(weightKg * proteinGPerKg);
  const proteinPerMeal = Math.round(dailyProteinGrams / mealsPerDay);

  // Chart data showing protein sources
  const chartData = [
    { source: "Chicken Breast", protein: 26, grams: 100, color: "#ef4444" },
    { source: "Salmon", protein: 25, grams: 100, color: "#f97316" },
    { source: "Eggs", protein: 6, grams: 1, color: "#f59e0b" },
    { source: "Greek Yogurt", protein: 10, grams: 100, color: "#10b981" },
    { source: "Beans", protein: 8, grams: 100, color: "#8b5cf6" },
    { source: "Lentils", protein: 9, grams: 100, color: "#3b82f6" },
    { source: "Tofu", protein: 15, grams: 100, color: "#06b6d4" },
    { source: "Almonds", protein: 6, grams: 28, color: "#ec4899" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Daily Protein Target" value={`${dailyProteinGrams}g`} highlight />
      <ResultCard label="Protein Per Meal" value={`${proteinPerMeal}g`} />
      <ResultCard label="Grams per kg" value={`${formatNumber(proteinGPerKg, 2)}g/kg`} />
      <ResultCard label="Meals Per Day" value={mealsPerDay} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Protein Content by Food Source</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="source" angle={-45} textAnchor="end" height={100} />
          <YAxis label={{ value: "Protein (g)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value}g protein`} />
          <Bar dataKey="protein" radius={[8, 8, 0, 0]}>
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
        <strong>Disclaimer:</strong> This calculator provides general protein recommendations. Individual needs vary based on age, fitness level, health status, and metabolism. Consult a registered dietitian or doctor before making significant dietary changes, especially if you have kidney disease or other health conditions.
      </p>

      <p>
        Protein is an essential macronutrient required for building and repairing tissues, producing enzymes and hormones, and maintaining immune function. Daily protein needs depend primarily on body weight and activity goals. A sedentary adult needs ~0.8 g/kg to maintain basic physiological function. Athletes and people building muscle need 1.6{'\u2013'}2.2 g/kg. The formula: Daily Protein (g) {'\u003d'} Body Weight (kg) {'\u00d7'} Target Grams per Kilogram.
      </p>

      <p>
        <strong>Protein for Different Goals:</strong> <strong>Weight Maintenance:</strong> 0.8{'\u2013'}1.0 g/kg for sedentary individuals. <strong>Weight Loss:</strong> 1.4{'\u2013'}2.0 g/kg to preserve muscle mass during calorie deficit; higher protein increases satiety and thermic effect (calories burned digesting protein). <strong>Muscle Building:</strong> 1.6{'\u2013'}2.2 g/kg combined with progressive resistance training; excess beyond 2.2 g/kg provides minimal additional benefit. <strong>Athletes:</strong> 1.6{'\u2013'}2.2 g/kg (endurance) to 2.2{'\u2013'}3.0 g/kg (strength/power).
      </p>

      <p>
        <strong>Complete vs. Incomplete Proteins:</strong> Complete proteins contain all 9 essential amino acids (cannot be synthesized by your body): meat, fish, eggs, dairy, and most soy products. Incomplete proteins lack one or more: most plant proteins (beans, nuts, grains). Vegetarians/vegans should combine complementary proteins (beans + rice, hummus + pita) or eat soy/quinoa (complete). Eating varied protein sources throughout the day ensures amino acid balance.
      </p>

      <p>
        <strong>Practical Tips:</strong> Spread protein intake across 3{'\u2013'}6 meals for optimal muscle protein synthesis. Aim for ~20{'\u2013'}40g per meal for adults; higher amounts in single meals don{'\u2019'}t increase protein synthesis. Mix animal and plant sources for nutrient diversity. Don{'\u2019'}t exceed 3{'\u2013'}4 g/kg daily {'\u2014'} excess is oxidized for fuel or stored as fat, not as muscle. Stay hydrated when eating high-protein diets {'\u2014'} protein metabolism requires adequate water.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Protein Calculator"
      description="Calculate your daily protein requirement based on weight and fitness goals"
      slug="protein-calculator"
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
          id="goal"
          label="Goal"
          value={goal}
          onChange={setGoal}
          options={[
            { value: "maintain", label: "Maintain Weight (sedentary)" },
            { value: "lose_weight", label: "Lose Weight" },
            { value: "build_muscle", label: "Build Muscle" },
            { value: "athlete", label: "Athlete / Very Active" },
          ]}
        />

        <SelectField
          id="mealsPerDay"
          label="Meals Per Day"
          value={String(mealsPerDay)}
          onChange={(val) => setMealsPerDay(parseInt(val))}
          options={[
            { value: "2", label: "2 Meals" },
            { value: "3", label: "3 Meals" },
            { value: "4", label: "4 Meals" },
            { value: "5", label: "5 Meals" },
            { value: "6", label: "6 Meals" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
