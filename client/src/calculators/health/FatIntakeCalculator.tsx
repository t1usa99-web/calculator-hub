import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FatIntakeCalculator() {
  const [weight, setWeight] = useState(175);
  const [calories, setCalories] = useState(2500);
  const [approach, setApproach] = useState("standard");

  // Determine fat percentage by approach
  let fatPercentMin = 0;
  let fatPercentMax = 0;
  let saturatedMax = 0;
  let unsaturatedTarget = 0;

  if (approach === "lowfat") {
    fatPercentMin = 20;
    fatPercentMax = 25;
    saturatedMax = 0.07; // max 7% saturated
    unsaturatedTarget = 0.15; // 15% unsaturated
  } else if (approach === "standard") {
    fatPercentMin = 25;
    fatPercentMax = 35;
    saturatedMax = 0.1; // max 10% saturated
    unsaturatedTarget = 0.2; // 20% unsaturated
  } else if (approach === "keto") {
    fatPercentMin = 65;
    fatPercentMax = 75;
    saturatedMax = 0.25; // higher in keto
    unsaturatedTarget = 0.45;
  }

  // Calculate fat targets
  const fatCaloriesMin = Math.round(calories * (fatPercentMin / 100));
  const fatCaloriesMax = Math.round(calories * (fatPercentMax / 100));
  const fatCaloriesAvg = Math.round((fatCaloriesMin + fatCaloriesMax) / 2);
  const fatGramsMin = Math.round(fatCaloriesMin / 9);
  const fatGramsMax = Math.round(fatCaloriesMax / 9);
  const fatGramsAvg = Math.round(fatCaloriesAvg / 9);

  // Calculate saturated and unsaturated breakdown
  const saturatedCalsMin = Math.round(calories * saturatedMax);
  const saturatedGramsMin = Math.round(saturatedCalsMin / 9);
  const unsaturatedCalsTarget = Math.round(calories * unsaturatedTarget);
  const unsaturatedGramsTarget = Math.round(unsaturatedCalsTarget / 9);

  // Fat per pound of body weight
  const fatPerLb = (fatGramsAvg / weight).toFixed(2);

  // Chart data - fat type distribution
  const fatBreakdown = [
    { name: "Saturated", value: saturatedCalsMin, color: "#ef4444" },
    { name: "Unsaturated", value: unsaturatedCalsTarget, color: "#10b981" },
  ];

  // Chart data - recommended ranges
  const rangeData = [
    { label: "Low-Fat\nApproach", min: 0.2 * 100, max: 0.25 * 100 },
    { label: "Standard\nApproach", min: 0.25 * 100, max: 0.35 * 100 },
    { label: "Keto\nApproach", min: 0.65 * 100, max: 0.75 * 100 },
  ];

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard label="Daily Calorie Intake" value={`${calories} cal`} />
        <ResultCard label="Fat Percentage Range" value={`${fatPercentMin}{'\u2013'}${fatPercentMax}%`} />
        <ResultCard label="Daily Fat (grams)" value={`${fatGramsMin}{'\u2013'}${fatGramsMax}g`} highlight />
        <ResultCard label="Target Fat Intake" value={`${fatGramsAvg}g`} highlight />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard label="Fat Calories Daily" value={`${fatCaloriesAvg} cal`} hint={`${fatPercentMin}{'\u2013'}${fatPercentMax}% of total`} />
        <ResultCard label="Fat per Pound" value={`${fatPerLb}g/lb`} hint="Body weight ratio" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultCard label="Saturated Fat Max" value={`${saturatedGramsMin}g`} hint={`Limit to {'{'}saturatedMax * 100}{'}%`} />
        <ResultCard label="Unsaturated Target" value={`${unsaturatedGramsTarget}g`} hint="MUFA + PUFA" />
        <ResultCard label="Omega-3s" value="1.1{'\u2013'}1.6g" hint="ALA; 250{'\u2013'}500mg EPA+DHA" />
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          <strong>Daily Breakdown:</strong> Consume {fatGramsAvg}g total fat {'\u2013'} limit saturated to {saturatedGramsMin}g, and aim for {unsaturatedGramsTarget}g unsaturated from oils, nuts, fish, and avocados.
        </p>
      </div>
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Saturated vs Unsaturated Fat Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={fatBreakdown} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
              {fatBreakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value as number} cal`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Fat Percentage by Approach</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={rangeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis label={{ value: "Calories from Fat (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => `${value as number}%`} />
            <Bar dataKey="min" stackId="a" fill="#3b82f6" name="Minimum" />
            <Bar dataKey="max" stackId="a" fill="#93c5fd" name="Maximum" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Dietary fat is essential for hormone production, nutrient absorption (vitamins A, D, E, K), brain health, and cell structure. This calculator determines appropriate daily fat intake based on calorie needs and your chosen dietary approach. The three approaches {'\u2013'} low-fat, standard, and keto {'\u2013'} represent different philosophies, each with evidence supporting their use depending on individual goals and preferences.
      </p>

      <p>
        <strong>Low-Fat Approach (20{'\u2013'}25% of calories):</strong> Emphasizes carbs over fat, often recommended for weight loss and heart health according to older guidelines. Low-fat diets can work, but hunger management is crucial since fat is satiating. Modern nutrition science recognizes that saturated fat isn{'\u2019'}t universally harmful; what matters is type of fat, overall pattern, and individual response. This approach works well for some people, especially those who feel satisfied with higher carbs.
      </p>

      <p>
        <strong>Standard Approach (25{'\u2013'}35% of calories):</strong> A balanced middle ground, recommended by most nutrition organizations including the American Heart Association. This range accommodates diverse preferences: some people thrive on higher fat with lower carbs, others on lower fat with higher carbs. Within this range, emphasize unsaturated fats (olive oil, avocados, nuts, fatty fish) and limit saturated fat to {'{'}less than 10% of calories. This flexibility makes it sustainable for most people.
      </p>

      <p>
        <strong>Ketogenic Approach (65{'\u2013'}75% of calories):</strong> Provides the fat needed to enter and maintain ketosis. At this level, fat becomes your primary fuel. Saturated fat is higher but not a major concern in ketosis {'\u2013'} metabolic effects differ from high-carb diets. Unsaturated fats still matter; include olive oil, avocados, nuts, and fatty fish. This approach requires careful planning to hit fat targets without exceeding overall calories.
      </p>

      <p>
        <strong>Fat Quality Matters:</strong> All approaches should prioritize unsaturated fats (monounsaturated and polyunsaturated). Sources include: olive oil, avocados, nuts (almonds, walnuts), seeds, fatty fish (salmon, sardines), and plant oils. These support heart health and reduce inflammation. Limit trans fats (hydrogenated oils, fried foods) and minimize processed foods high in refined carbs and low-quality fats. Omega-3 fatty acids (from fish or flax) are particularly beneficial for brain and heart health.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Fat Intake Calculator"
      description="Calculate daily fat intake recommendations by dietary approach (standard, low-fat, or keto)"
      slug="fat-intake-calculator"
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

        <InputField
          id="calories"
          label="Daily Calorie Intake"
          value={calories}
          onChange={setCalories}
          suffix="cal"
          step={50}
          min={1200}
          max={5000}
        />

        <SelectField
          id="approach"
          label="Dietary Approach"
          value={approach}
          onChange={setApproach}
          options={[
            { value: "lowfat", label: "Low-Fat (20{'\u2013'}25% calories)" },
            { value: "standard", label: "Standard (25{'\u2013'}35% calories)" },
            { value: "keto", label: "Ketogenic (65{'\u2013'}75% calories)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: FatIntakeCalculator,
  slug: "fat-intake-calculator",
  title: "Fat Intake Calculator",
  shortTitle: "Fat Intake",
  description: "Calculate daily fat intake based on your calorie needs and preferred dietary approach",
  category: "health",
  icon: "🧈",
  keywords: ["fat intake calculator", "dietary fat", "saturated fat", "unsaturated fat", "nutrition macros"],
  popular: true,
  faqs: [
    {
      question: "Is saturated fat bad for heart health?",
      answer: "The relationship is complex. Modern research shows saturated fat{'\u2019'}s effect depends on type (stearic acid vs. palmitic acid), food source (butter vs. coconut oil vs. beef), and individual factors (genetics, overall diet, inflammation). Some saturated fat in a healthy diet isn{'\u2019'}t inherently harmful; the American Heart Association recommends limiting it to {'{'}less than 10% of calories. Quality matters: butter in whole foods is different from trans fats in processed foods. Individual response varies; some people see no adverse effects at higher saturated fat intake.",
    },
    {
      question: "What are the best sources of unsaturated fat?",
      answer: "Top sources: extra virgin olive oil, avocados, nuts (almonds, walnuts, cashews), seeds (chia, flax, pumpkin), fatty fish (salmon, sardines, mackerel {'\u2013'} rich in omega-3s), and plant oils (canola, safflower). These provide unsaturated fats plus nutrients like vitamin E, magnesium, and polyphenols. Include a variety; different sources offer different benefits. Whole food sources are preferable to oils for satiety and nutrient density, though oils are acceptable in moderation.",
    },
    {
      question: "How much omega-3 should I eat daily?",
      answer: "The FDA and most organizations recommend 1.1{'\u2013'}1.6g daily alpha-linolenic acid (ALA), found in flax, chia, and walnuts. For EPA and DHA (long-chain omega-3s from fish), 250{'\u2013'}500mg daily is beneficial for heart and brain health. If you don{'\u2019'}t eat fatty fish, consider: 2{'\u2013'}3x weekly (about 8 oz total), flax/chia seeds daily, or a fish oil supplement. Plant-based sources are less efficiently converted to EPA/DHA; vegetarians might benefit from algae supplements.",
    },
    {
      question: "Can I lose weight on a high-fat diet?",
      answer: "Yes, if total calories are in deficit. Fat is satiating {'\u2013'} 1g provides 9 calories but often keeps you fuller longer than carbs (4 cal/g) because fat slows digestion. A higher-fat, lower-carb diet works well for many people because they eat fewer total calories naturally. However, fat is calorie-dense; it{'\u2019'}s easy to overeat if not mindful. Track intake; weight loss still requires calorie deficit regardless of macro split. Find the approach that makes eating less feel sustainable for you.",
    },
    {
      question: "Are there fats I should avoid entirely?",
      answer: "Yes, avoid or minimize trans fats (hydrogenated oils, some margarines, fried foods), which increase inflammation and heart disease risk. Also limit highly processed fats and oils combined with refined carbs and additives. Focus on whole food sources of fat and minimize processed foods. If choosing between avocado oil and vegetable shortening, avocado oil is clearly superior. Avoid deep-fried foods regularly; occasional fried food in an otherwise healthy diet isn{'\u2019'}t catastrophic but shouldn{'\u2019'}t be regular.",
    },
  ],
  dateModified: "2026-04-10",
});
