import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(170);
  const [neck, setNeck] = useState(15);
  const [waist, setWaist] = useState(32);
  const [hip, setHip] = useState(0);

  // US Navy Body Fat Formula
  let bodyFatPercent = 0;
  if (gender === "male") {
    bodyFatPercent = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(195 - age) + 36.76;
  } else {
    bodyFatPercent = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(195 - age) - 78.387;
  }

  bodyFatPercent = Math.max(0, Math.min(100, bodyFatPercent)); // Clamp between 0-100

  // Determine body fat category
  let category = "";
  let categoryColor = "";
  if (gender === "male") {
    if (bodyFatPercent < 6) {
      category = "Essential Fat";
      categoryColor = "#3b82f6";
    } else if (bodyFatPercent < 14) {
      category = "Athletes";
      categoryColor = "#10b981";
    } else if (bodyFatPercent < 18) {
      category = "Fitness";
      categoryColor = "#8b5cf6";
    } else if (bodyFatPercent < 25) {
      category = "Average";
      categoryColor = "#f59e0b";
    } else {
      category = "Obese";
      categoryColor = "#ef4444";
    }
  } else {
    if (bodyFatPercent < 14) {
      category = "Essential Fat";
      categoryColor = "#3b82f6";
    } else if (bodyFatPercent < 21) {
      category = "Athletes";
      categoryColor = "#10b981";
    } else if (bodyFatPercent < 25) {
      category = "Fitness";
      categoryColor = "#8b5cf6";
    } else if (bodyFatPercent < 32) {
      category = "Average";
      categoryColor = "#f59e0b";
    } else {
      category = "Obese";
      categoryColor = "#ef4444";
    }
  }

  const fatMass = weight * (bodyFatPercent / 100);
  const leanMass = weight - fatMass;

  const chartData = [
    { name: "Fat Mass", value: Math.round(fatMass), color: "#ef4444" },
    { name: "Lean Mass", value: Math.round(leanMass), color: "#10b981" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Body Fat %" value={formatNumber(bodyFatPercent, 1)} highlight />
      <ResultCard label="Category" value={category} />
      <ResultCard label="Fat Mass" value={`${formatNumber(fatMass, 1)} lbs`} />
      <ResultCard label="Lean Mass" value={`${formatNumber(leanMass, 1)} lbs`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Body Composition</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value, percent }) => `${name}: ${value} lbs (${(percent * 100).toFixed(0)}%)`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
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
        Body fat percentage is a more accurate measure of fitness and health than BMI because it measures the actual proportion of fat in your body versus lean mass (muscle, bone, and organs). The US Navy method is one of the most accurate non-invasive formulas for estimating body fat percentage using just body measurements. This method uses circumference measurements of the neck, waist, and hip (for women) to calculate body fat percentage, making it accessible and practical for regular monitoring.
      </p>

      <p>
        <strong>Body Fat Categories:</strong> For men, essential fat ranges from 2-5% (necessary for biological functions), athletes typically 6-13%, fitness level 14-17%, and average ranges 18-24%. For women, essential fat is 10-13%, athletes are 14-20%, fitness level 21-24%, and average is 25-31%. These ranges reflect differences in biological fat distribution. Having too low body fat can be unhealthy, while excessive body fat increases risk of cardiovascular disease, diabetes, and other health conditions.
      </p>

      <p>
        <strong>Lean Mass and Health:</strong> Lean mass includes muscle tissue, bones, organs, and water—all metabolically active tissues that burn calories at rest. Maintaining or building lean mass through resistance training is important for metabolic health, strength, and long-term weight management. As we age, we naturally lose lean mass, which is why strength training becomes increasingly important for maintaining metabolism and functional fitness.
      </p>

      <p>
        <strong>Measurement Tips:</strong> For accurate measurements, measure your neck at the narrow point, waist at the narrowest point (usually at navel level), and hip at the widest point. Take measurements in the morning before eating or exercising. The US Navy formula is most accurate for people between 18-55 years old and may have limitations for very lean or obese individuals. For the most accurate assessment, consider methods like DEXA scans or hydrostatic weighing.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Body Fat Calculator"
      description="Calculate your body fat percentage using the US Navy method based on body measurements"
      slug="body-fat-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
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
        <InputField
          id="neck"
          label="Neck Circumference"
          value={neck}
          onChange={setNeck}
          suffix="in"
          step={0.1}
          min={8}
          max={25}
        />
        <InputField
          id="waist"
          label="Waist Circumference"
          value={waist}
          onChange={setWaist}
          suffix="in"
          step={0.1}
          min={15}
          max={60}
        />
        {gender === "female" && (
          <InputField
            id="hip"
            label="Hip Circumference"
            value={hip}
            onChange={setHip}
            suffix="in"
            step={0.1}
            min={20}
            max={65}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
