import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function BMICalculator() {
  const [weight, setWeight] = useState(170);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);

  // Convert height to total inches
  const totalInches = feet * 12 + inches;

  // BMI calculation: (weight in pounds / (height in inches)^2) * 703
  const bmi = (weight / (totalInches * totalInches)) * 703;

  // Determine BMI category
  let category = "";
  let categoryColor = "";
  if (bmi < 18.5) {
    category = "Underweight";
    categoryColor = "#3b82f6";
  } else if (bmi < 25) {
    category = "Normal Weight";
    categoryColor = "#10b981";
  } else if (bmi < 30) {
    category = "Overweight";
    categoryColor = "#f59e0b";
  } else {
    category = "Obese";
    categoryColor = "#ef4444";
  }

  // Calculate healthy weight range (BMI 18.5 - 24.9)
  const minHealthyWeight = Math.round((18.5 * totalInches * totalInches) / 703);
  const maxHealthyWeight = Math.round((24.9 * totalInches * totalInches) / 703);

  // Chart data showing BMI ranges
  const chartData = [
    { range: "Underweight", value: 18.5, color: "#3b82f6" },
    { range: "Normal", value: 6.5, color: "#10b981" },
    { range: "Overweight", value: 5, color: "#f59e0b" },
    { range: "Obese", value: 100, color: "#ef4444" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Your BMI" value={formatNumber(bmi, 1)} highlight />
      <ResultCard label="Category" value={category} />
      <ResultCard label="Healthy Weight Range" value={`${minHealthyWeight} - ${maxHealthyWeight} lbs`} />
      <ResultCard label="Weight to Goal" value={weight > maxHealthyWeight ? `${weight - maxHealthyWeight} lbs to lose` : weight < minHealthyWeight ? `${minHealthyWeight - weight} lbs to gain` : "On target"} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">BMI Categories</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis label={{ value: "BMI Range", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
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
        Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. It's one of the most widely used screening tools for determining whether someone has a healthy weight. BMI is calculated by dividing a person's weight in pounds by their height in inches squared, then multiplying by 703. While BMI is not a perfect measure (it doesn't account for muscle mass, bone density, or body composition), it remains useful as a general health indicator and screening tool for many populations.
      </p>

      <p>
        <strong>BMI Categories:</strong> The standard BMI categories are: Underweight (below 18.5), Normal Weight (18.5-24.9), Overweight (25-29.9), and Obese (30+). These ranges are used by health organizations like the CDC and WHO. People with BMI in the normal range typically have lower risk of weight-related health problems. However, individual health depends on many factors including diet, exercise, genetics, and overall lifestyle.
      </p>

      <p>
        <strong>Limitations of BMI:</strong> BMI does not distinguish between muscle and fat. Athletes and very muscular individuals may have a high BMI despite having low body fat. Conversely, sedentary people may have a normal BMI while having high body fat. Additionally, BMI doesn't account for age, sex, ethnicity, or body shape variations. Body Fat Percentage is often considered a more accurate measure of health.
      </p>

      <p>
        <strong>Healthy Weight Management:</strong> Achieving and maintaining a healthy weight involves balanced nutrition, regular physical activity, adequate sleep, and stress management. A healthy weight range varies for each individual based on factors like frame size, muscle mass, and personal health goals. If you're concerned about your weight or health, consult with a healthcare professional or registered dietitian for personalized advice.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your Body Mass Index and determine if you're at a healthy weight"
      slug="bmi-calculator"
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
      </div>
    </CalculatorLayout>
  );
}
