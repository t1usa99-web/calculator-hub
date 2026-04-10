import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function GFRCalculator() {
  const [age, setAge] = useState(45);
  const [gender, setGender] = useState("male");
  const [creatinine, setCreatinine] = useState(1.0);
  const [race, setRace] = useState("other");

  // CKD-EPI 2021 formula (race-free)
  const κ = gender === "male" ? 0.9 : 0.7;
  const α = gender === "male" ? -0.411 : -0.329;

  const eGFR =
    142 *
    Math.pow(Math.min(creatinine / κ, 1), α) *
    Math.pow(Math.max(creatinine / κ, 1), -1.2) *
    Math.pow(0.9938, age) *
    (gender === "female" ? 1.012 : 1);

  // Determine CKD stage
  let stage = "";
  let stageName = "";
  if (eGFR >= 90) {
    stage = "1";
    stageName = "Normal or High (≥90)";
  } else if (eGFR >= 60) {
    stage = "2";
    stageName = "Mild Decrease (60-89)";
  } else if (eGFR >= 45) {
    stage = "3a";
    stageName = "Mild to Moderate Decrease (45-59)";
  } else if (eGFR >= 30) {
    stage = "3b";
    stageName = "Moderate to Severe Decrease (30-44)";
  } else if (eGFR >= 15) {
    stage = "4";
    stageName = "Severe Decrease (15-29)";
  } else {
    stage = "5";
    stageName = "Kidney Failure (less than 15)";
  }

  const stageData = [
    { name: "Normal", value: 100, color: "#10b981" },
    { name: "Stage 1", value: 100, color: "#10b981" },
    { name: "Stage 2", value: 75, color: "#84cc16" },
    { name: "Stage 3a", value: 52, color: "#f59e0b" },
    { name: "Stage 3b", value: 37, color: "#f97316" },
    { name: "Stage 4", value: 22, color: "#ef4444" },
    { name: "Stage 5", value: 7, color: "#7f1d1d" },
  ];

  const chartData = [
    { name: "Your eGFR", value: Math.round(eGFR) },
    { name: "Stage Threshold", value: eGFR >= 90 ? 90 : eGFR >= 60 ? 60 : eGFR >= 45 ? 45 : eGFR >= 30 ? 30 : eGFR >= 15 ? 15 : 0 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Estimated GFR (eGFR)"
        value={`${formatNumber(eGFR, 1)} mL/min/1.73m²`}
        highlight={true}
      />
      <ResultCard
        label="CKD Stage"
        value={`${stage} - ${stageName}`}
      />
      <ResultCard
        label="Interpretation"
        value={eGFR >= 60 ? "Kidney function normal or mild decrease" : eGFR >= 30 ? "Moderate to severe decrease in kidney function" : "Kidney failure or near failure"}
      />
      <ResultCard
        label="Serum Creatinine"
        value={`${formatNumber(creatinine, 2)} mg/dL`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Kidney Function by CKD Stage (% Normal)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `${formatNumber(value, 0)}%`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Estimated Glomerular Filtration Rate (eGFR) measures how well your kidneys filter waste from your blood. It's expressed in mL/min/1.73m² and represents the volume of blood filtered by the glomeruli (kidney's filtering units) per minute. eGFR is calculated from serum creatinine, age, gender, and body surface area. This simple blood test is the best way to assess kidney function and detect chronic kidney disease (CKD) early, when treatment can slow or prevent further decline.
      </p>

      <p>
        <strong>Understanding CKD Stages:</strong> CKD is classified into 5 stages based on eGFR. Stage 1 (eGFR {'>'}90) means normal kidney function; kidney damage may be present but not apparent. Stage 2 (60-89) is mild decrease; you might live normally with no restrictions. Stage 3a (45-59) and 3b (30-44) involve moderate decrease; monitoring becomes more important. Stage 4 (15-29) is severe decrease; preparing for possible kidney failure becomes necessary. Stage 5 ({'{<}'}15) is kidney failure requiring dialysis or transplant. Early detection and management can slow or stop CKD progression.
      </p>

      <p>
        <strong>CKD-EPI 2021 Formula:</strong> This calculator uses the newest race-free CKD-EPI formula, released in 2021 to remove racial adjustments that perpetuated healthcare disparities. The formula: eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^(-1.200) × 0.9938^age × (1.012 if female). Where Scr is serum creatinine, κ is 0.9 for men and 0.7 for women, and α is -0.411 for men and -0.329 for women. This replaces older versions that used different equations by race.
      </p>

      <p>
        <strong>Limitations of eGFR:</strong> eGFR is less accurate in very obese patients, at extremes of age, and in muscle-depleted individuals. Creatinine depends on muscle mass—athletic people have higher creatinine, while elderly or frail people have lower creatinine despite poor kidney function. In these cases, cystatin C (another filtration marker) may be used alongside eGFR. eGFR is also less accurate when eGFR is very high or very low; in these cases, a more direct measurement like inulin clearance may be considered.
      </p>

      <p>
        <strong>Medical Disclaimer:</strong> This calculator provides educational estimates only. Never use this to replace professional medical evaluation. Kidney disease diagnosis and treatment require a nephrologist's expertise. eGFR should be confirmed with actual lab work, and repeat measurements over time are needed to assess kidney function trends. If you have risk factors for kidney disease (diabetes, hypertension, family history) get regular kidney function tests. Treatment depends on the underlying cause and stage of disease.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="GFR Calculator (CKD-EPI 2021)"
      description="Calculate estimated glomerular filtration rate to assess kidney function"
      slug="gfr-calculator"
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
          suffix="years"
          step={1}
          min={18}
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
          id="creatinine"
          label="Serum Creatinine"
          value={creatinine}
          onChange={setCreatinine}
          suffix="mg/dL"
          step={0.1}
          min={0.4}
          max={10}
        />
        <SelectField
          id="race"
          label="Race/Ethnicity"
          value={race}
          onChange={setRace}
          options={[
            { value: "other", label: "Other" },
            { value: "black", label: "Black/African American" },
            { value: "white", label: "White" },
            { value: "asian", label: "Asian/Pacific Islander" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: GFRCalculator,
  slug: "gfr-calculator",
  title: "GFR Calculator (CKD-EPI 2021)",
  shortTitle: "GFR Calculator",
  description: "Estimate glomerular filtration rate to assess chronic kidney disease stage",
  category: "health",
  icon: "🫘",
  keywords: ["GFR", "eGFR", "kidney function", "CKD", "creatinine", "kidney disease"],
  popular: false,
  faqs: [
    {
      question: "What's a normal eGFR value?",
      answer: "Normal eGFR is 90 or higher, meaning normal kidney function. Values of 60-89 show mild decrease. Below 60 is abnormal and may indicate chronic kidney disease. Consult your doctor if your eGFR is consistently below 60."
    },
    {
      question: "Why did my eGFR drop but creatinine stayed the same?",
      answer: "eGFR also depends on age—eGFR naturally declines with age even if creatinine stays stable. Kidney function typically declines about 1 mL/min/year after age 30. This is normal aging unless eGFR drops rapidly."
    },
    {
      question: "Can I improve my eGFR?",
      answer: "You can slow kidney disease progression by managing blood pressure (target less than 130/80), controlling diabetes, avoiding NSAIDs, eating a kidney-healthy diet, and quitting smoking. Once significant damage occurs, it's usually not reversible."
    },
    {
      question: "What does the race-free formula mean?",
      answer: "The 2021 CKD-EPI formula removed racial adjustments that were discriminatory. All patients now use the same formula regardless of race. This gives more accurate estimates and fairer kidney disease diagnosis across all populations."
    },
    {
      question: "Should I worry if my eGFR is 55?",
      answer: "An eGFR of 55 indicates Stage 3a CKD (mild to moderate decrease). One test alone isn't diagnostic; kidney disease is confirmed when eGFR stays below 60 for 3+ months. See your doctor for monitoring and treatment planning."
    }
  ],
  dateModified: "2026-04-10",
});
