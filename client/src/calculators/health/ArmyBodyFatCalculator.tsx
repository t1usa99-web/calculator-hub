import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ArmyBodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(70);
  const [neck, setNeck] = useState(15);
  const [waist, setWaist] = useState(32);
  const [hip, setHip] = useState(0);
  const [ageGroup, setAgeGroup] = useState("17-20");

  // Calculate body fat percentage using Army formula
  let bodyFat = 0;

  if (gender === "male") {
    // Men: 86.010 × log10(waist-neck) - 70.041 × log10(height) + 36.76
    const logValue = Math.log10(waist - neck);
    const logHeight = Math.log10(height);
    bodyFat = 86.01 * logValue - 70.041 * logHeight + 36.76;
  } else {
    // Women: 163.205 × log10(waist+hip-neck) - 97.684 × log10(height) - 78.387
    const logValue = Math.log10(waist + hip - neck);
    const logHeight = Math.log10(height);
    bodyFat = 163.205 * logValue - 97.684 * logHeight - 78.387;
  }

  bodyFat = Math.max(0, Math.min(60, bodyFat)); // Clamp to reasonable range

  // Army standards by age group (maximum allowable body fat %)
  const standardsData = {
    "17-20": { male: 20, female: 32 },
    "21-25": { male: 22, female: 33 },
    "26-30": { male: 22, female: 34 },
    "31-35": { male: 23, female: 35 },
    "36-40": { male: 24, female: 36 },
    "41-45": { male: 25, female: 37 },
    "46-50": { male: 26, female: 38 },
    "51+": { male: 27, female: 39 },
  };

  const maxAllowed = standardsData[ageGroup][gender];
  const passes = bodyFat <= maxAllowed;
  const excess = bodyFat - maxAllowed;

  const chartData = [
    { name: "Your Body Fat %", value: Math.round(bodyFat * 10) / 10 },
    { name: "Max Allowed", value: maxAllowed },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Body Fat Percentage"
        value={`${formatNumber(bodyFat, 1)}%`}
        highlight={true}
      />
      <ResultCard
        label="Status"
        value={passes ? "PASS" : "EXCEED"}
        highlight={passes}
      />
      <ResultCard
        label="Army Maximum for Your Age"
        value={`${maxAllowed}%`}
      />
      {!passes && (
        <ResultCard
          label="Amount Over Limit"
          value={`${formatNumber(excess, 1)}%`}
        />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Your Body Fat vs. Army Standards</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value, 1)} />
          <Bar dataKey="value" fill={passes ? "#10b981" : "#ef4444"} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The U.S. Army body fat calculation method is a field-expedient way to estimate body fat percentage using circumference measurements rather than direct methods like DEXA scanning. It's used by military services worldwide to assess physical readiness and ensure soldiers meet fitness standards. The Army method requires just a measuring tape and is practical for rapid screening of large groups. While not as precise as laboratory methods, it's reasonably accurate for population-level assessment.
      </p>

      <p>
        <strong>How the Army Formula Works:</strong> For men, the formula uses waist and neck circumference plus height: body fat % = 86.010 × log₁₀(waist - neck) - 70.041 × log₁₀(height) + 36.76. For women, it also includes hip circumference: body fat % = 163.205 × log₁₀(waist + hip - neck) - 97.684 × log₁₀(height) - 78.387. The formula is based on regression analysis comparing tape measurements to reference populations. Accuracy depends on proper measurement technique—measurements should be snug but not compressive, taken at specific anatomical landmarks.
      </p>

      <p>
        <strong>Measurement Technique Matters:</strong> Neck is measured below the larynx with the tape horizontal. Waist is measured at the navel level while standing at ease, without holding your breath. For women, hip is measured at the widest point. Small measurement errors can significantly affect results. Professional fitness assessors use standardized protocols to ensure consistency. If your result seems off, have measurements retaken by a certified person to ensure accuracy.
      </p>

      <p>
        <strong>Army Standards by Age and Gender:</strong> Standards increase slightly with age to account for natural changes in body composition over a career. A 17-20 year old male must stay at or below 20% body fat, while a 51+ male can be up to 27%. Women's standards are 4-7% higher than men's, reflecting normal physiological differences. These standards represent the maximum allowable for active duty; soldiers exceeding these may face remedial physical training or discharge.
      </p>

      <p>
        <strong>Limitations and Accuracy:</strong> The Army method has a margin of error of ±3-5% compared to underwater weighing or DEXA. It underestimates body fat in very muscular individuals (like athletes) and overestimates in very sedentary people. The formula assumes typical body proportions; it doesn't work well for people with unusual fat distribution, amputees, or those with atypical body shapes. For medical or research purposes, use direct measurement methods. For military/fitness screening, this method is accepted and practical.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Army Body Fat Calculator"
      description="Calculate body fat percentage using U.S. Army measurement standards"
      slug="army-body-fat-calculator"
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
          id="height"
          label="Height"
          value={height}
          onChange={setHeight}
          suffix="inches"
          step={0.5}
          min={50}
          max={90}
        />
        <InputField
          id="neck"
          label="Neck Circumference"
          value={neck}
          onChange={setNeck}
          suffix="inches"
          step={0.1}
          min={8}
          max={25}
        />
        <InputField
          id="waist"
          label="Waist Circumference (at navel)"
          value={waist}
          onChange={setWaist}
          suffix="inches"
          step={0.1}
          min={15}
          max={60}
        />
        {gender === "female" && (
          <InputField
            id="hip"
            label="Hip Circumference (widest point)"
            value={hip}
            onChange={setHip}
            suffix="inches"
            step={0.1}
            min={20}
            max={70}
          />
        )}
        <SelectField
          id="age-group"
          label="Age Group"
          value={ageGroup}
          onChange={setAgeGroup}
          options={[
            { value: "17-20", label: "17-20 years" },
            { value: "21-25", label: "21-25 years" },
            { value: "26-30", label: "26-30 years" },
            { value: "31-35", label: "31-35 years" },
            { value: "36-40", label: "36-40 years" },
            { value: "41-45", label: "41-45 years" },
            { value: "46-50", label: "46-50 years" },
            { value: "51+", label: "51+ years" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: ArmyBodyFatCalculator,
  slug: "army-body-fat-calculator",
  title: "Army Body Fat Calculator",
  shortTitle: "Army Body Fat",
  description: "Calculate body fat percentage using U.S. Army circumference measurements",
  category: "health",
  icon: "🎖️",
  keywords: ["army body fat", "military fitness", "body fat percentage", "body composition", "circumference"],
  popular: false,
  faqs: [
    {
      question: "How accurate is the Army method compared to DEXA?",
      answer: "The Army method has a margin of error of about ±3-5% compared to DEXA or underwater weighing. It's accurate enough for military screening purposes but not as precise as direct measurement methods. Very muscular or sedentary individuals may see larger discrepancies."
    },
    {
      question: "What if I exceed the Army standard?",
      answer: "In active military, exceeding standards typically triggers remedial physical training. Soldiers are given a timeline to meet standards or face discharge. Standards increase slightly with age to account for natural changes. Seek fitness guidance to safely reduce body fat while maintaining health and muscle."
    },
    {
      question: "Why are women's standards higher than men's?",
      answer: "Women naturally have more essential body fat due to biological differences (hormones, reproductive tissue). A woman at 28% body fat is healthier than a man at 28%. Army standards reflect these physiological differences while maintaining fitness expectations."
    },
    {
      question: "Do I need to measure at specific times of day?",
      answer: "Measure in the morning before eating or exercising for consistency. Hydration status, food intake, and exercise can cause fluid shifts affecting measurements. Consistent measurement timing reduces variability between repeated measurements."
    },
    {
      question: "Can I use this calculator if I'm not in the military?",
      answer: "Yes. The Army method is used by fitness professionals, civilian employers, and health researchers worldwide. It's a standard body composition assessment method. If you don't meet military standards, that doesn't mean you're unhealthy—civilian fitness varies widely by sport and goals."
    }
  ],
  dateModified: "2026-04-10",
});
