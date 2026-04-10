import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BodySurfaceAreaCalculator() {
  const [weight, setWeight] = useState(70);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [height, setHeight] = useState(170);
  const [heightUnit, setHeightUnit] = useState("cm");

  // Convert to kg and cm
  const weightKg = weightUnit === "kg" ? weight : weight * 0.453592;
  const heightCm = heightUnit === "cm" ? height : height * 30.48;

  // Mosteller formula
  const mosteller = Math.sqrt((heightCm * weightKg) / 3600);

  // DuBois formula
  const dubois = 0.20247 * Math.pow(heightCm, 0.725) * Math.pow(weightKg, 0.425);

  // Haycock formula
  const haycock = 0.024265 * Math.pow(heightCm, 0.3964) * Math.pow(weightKg, 0.5378);

  // Average
  const average = (mosteller + dubois + haycock) / 3;

  const chartData = [
    { name: "Mosteller", value: Math.round(mosteller * 100) / 100 },
    { name: "DuBois", value: Math.round(dubois * 100) / 100 },
    { name: "Haycock", value: Math.round(haycock * 100) / 100 },
    { name: "Average", value: Math.round(average * 100) / 100 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Mosteller Formula"
        value={`${formatNumber(mosteller, 2)} m²`}
      />
      <ResultCard
        label="DuBois Formula"
        value={`${formatNumber(dubois, 2)} m²`}
      />
      <ResultCard
        label="Haycock Formula"
        value={`${formatNumber(haycock, 2)} m²`}
      />
      <ResultCard
        label="Average BSA"
        value={`${formatNumber(average, 2)} m²`}
        highlight={true}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Body Surface Area by Formula (m²)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value, 2)} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Body Surface Area (BSA) is the total external surface area of the human body, measured in square meters (m²). It's a critical measurement in medicine for calculating drug dosages, chemotherapy regimens, fluid requirements, and metabolic rate estimates. BSA is more accurate than body weight alone because surface area better reflects metabolic needs and physiological requirements. Adults typically have a BSA between 1.7 and 2.0 m², while children have considerably less.
      </p>

      <p>
        <strong>Three Formula Approaches:</strong> This calculator uses three widely-recognized formulas. The Mosteller formula is the simplest and most commonly used in clinical settings: BSA = √(H × W / 3600). The DuBois formula, derived from cadaver measurements, uses more complex exponents and was historically popular. The Haycock formula was developed specifically for pediatric patients and works well for all ages. All three typically agree within 5-10%, with Mosteller being fastest for mental math and most commonly taught in medical schools.
      </p>

      <p>
        <strong>Medical Applications:</strong> BSA is essential for chemotherapy dosing—cancer drugs are typically dosed at mg/m² because tumor burden and metabolic capacity scale with surface area, not weight. A 150-lb child and 150-lb adult need vastly different drug doses; BSA accounts for this. Renal function assessment, cardiac output calculations, and severe burn treatment all rely on BSA. Hospitals use specialized nomograms or calculators to avoid dosing errors, which is why accurate BSA measurement is critical in clinical care.
      </p>

      <p>
        <strong>Why Multiple Formulas?</strong> The three formulas sometimes yield different results, especially in very obese or very lean individuals. Medical teams often use the average or select the most validated formula for their specific population. Mosteller is preferred for adults due to its simplicity and validation in large populations. Haycock is preferred for children. Some institutions may have protocols specifying which formula to use, so always verify your facility's standard.
      </p>

      <p>
        <strong>Limitations and Accuracy:</strong> These formulas estimate BSA from height and weight but don't account for body composition, body shape, or disability. A very muscular person and a very obese person of the same height and weight will have different actual surface areas. Actual measurement (wrapping the patient in paper) is rarely done except in research. For clinical dosing, these formulas are accurate enough within ±15% for most purposes, which is acceptable for medical use.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Body Surface Area Calculator"
      description="Calculate body surface area using Mosteller, DuBois, and Haycock formulas"
      slug="body-surface-area-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="weight"
            label="Weight"
            value={weight}
            onChange={setWeight}
            suffix={weightUnit === "kg" ? "kg" : "lbs"}
            step={1}
            min={20}
            max={300}
          />
          <SelectField
            id="weight-unit"
            label="Unit"
            value={weightUnit}
            onChange={setWeightUnit}
            options={[
              { value: "kg", label: "Kilograms (kg)" },
              { value: "lbs", label: "Pounds (lbs)" },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="height"
            label="Height"
            value={height}
            onChange={setHeight}
            suffix={heightUnit === "cm" ? "cm" : "in"}
            step={1}
            min={50}
            max={230}
          />
          <SelectField
            id="height-unit"
            label="Unit"
            value={heightUnit}
            onChange={setHeightUnit}
            options={[
              { value: "cm", label: "Centimeters (cm)" },
              { value: "in", label: "Inches (in)" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BodySurfaceAreaCalculator,
  slug: "body-surface-area-calculator",
  title: "Body Surface Area Calculator",
  shortTitle: "Body Surface Area",
  description: "Calculate BSA using Mosteller, DuBois, and Haycock formulas for medical dosing",
  category: "health",
  icon: "📐",
  keywords: ["body surface area", "BSA", "medical dosing", "chemotherapy", "healthcare"],
  popular: false,
  faqs: [
    {
      question: "What's the normal BSA range?",
      answer: "Adults typically have BSA between 1.7 and 2.0 m². Children range from 0.5 m² (newborns) to 1.8 m² (teenagers). BSA increases with height and weight, reaching maximum in adulthood."
    },
    {
      question: "Why is BSA used instead of weight for dosing?",
      answer: "BSA better reflects metabolic capacity and organ function than weight alone. A 100-lb child and 200-lb adult have vastly different surface areas and metabolic needs. BSA standardizes dosing across different body sizes."
    },
    {
      question: "Which formula is most accurate?",
      answer: "Mosteller is preferred for adults and is most commonly used clinically. Haycock is preferred for children. All three agree within ~5-10%. Your healthcare provider will specify which formula to use."
    },
    {
      question: "How does obesity affect BSA?",
      answer: "BSA formulas slightly underestimate surface area in very obese patients because they don't fully account for fat distribution. Some institutions adjust dosing for obese patients; consult your healthcare provider."
    },
    {
      question: "Can I use BSA to estimate daily calorie needs?",
      answer: "Roughly, yes. BSA correlates with metabolic rate. An average adult burns about 40-50 calories per m² per day at rest. So a 1.8 m² person might burn 72-90 calories/hour at rest, helping estimate daily needs."
    }
  ],
  dateModified: "2026-04-10",
});
