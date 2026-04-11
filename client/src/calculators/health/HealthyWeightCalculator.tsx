import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function HealthyWeightCalculator() {
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);
  const [heightUnit, setHeightUnit] = useState("ft");
  const [gender, setGender] = useState("male");
  const [frameSize, setFrameSize] = useState("medium");

  // Convert to inches
  let heightInchesTotal = heightFeet * 12 + heightInches;
  if (heightUnit === "cm") {
    heightInchesTotal = heightFeet / 2.54; // Using heightFeet field for cm input
  }

  // BMI-based range (18.5-24.9)
  const heightMeters = heightInchesTotal * 0.0254;
  const bmiLow = 18.5 * heightMeters * heightMeters;
  const bmiHigh = 24.9 * heightMeters * heightMeters;

  // Hamwi formula: Men: 106 + 6×(H-60), Women: 100 + 5×(H-60)
  let hamwiIdeal = 0;
  if (gender === "male") {
    hamwiIdeal = 106 + 6 * (heightInchesTotal - 60);
  } else {
    hamwiIdeal = 100 + 5 * (heightInchesTotal - 60);
  }

  // Frame size adjustment (±10%)
  let frameAdjustment = 1.0;
  if (frameSize === "small") {
    frameAdjustment = 0.9;
  } else if (frameSize === "large") {
    frameAdjustment = 1.1;
  }

  const hamwiLow = hamwiIdeal * frameAdjustment * 0.95;
  const hamwiHigh = hamwiIdeal * frameAdjustment * 1.05;

  // Average the two methods
  const avgLow = (bmiLow + hamwiLow) / 2;
  const avgHigh = (bmiHigh + hamwiHigh) / 2;

  const chartData = [
    { weight: Math.round(Math.min(bmiLow, hamwiLow)), method: "Low Range" },
    { weight: Math.round((bmiLow + bmiHigh) / 2), method: "Mid Range" },
    { weight: Math.round(Math.max(bmiHigh, hamwiHigh)), method: "High Range" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Healthy Weight Range (BMI)"
        value={`${formatNumber(bmiLow, 0)} - ${formatNumber(bmiHigh, 0)} lbs`}
      />
      <ResultCard
        label="Healthy Weight Range (Hamwi)"
        value={`${formatNumber(hamwiLow, 0)} - ${formatNumber(hamwiHigh, 0)} lbs`}
      />
      <ResultCard
        label="Recommended Average Range"
        value={`${formatNumber(avgLow, 0)} - ${formatNumber(avgHigh, 0)} lbs`}
        highlight={true}
      />
      <ResultCard
        label="Hamwi Ideal Weight"
        value={`${formatNumber(hamwiIdeal * frameAdjustment, 0)} lbs`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Healthy Weight Range (lbs)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="method" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value, 0)} />
          <Area type="monotone" dataKey="weight" fill="#3b82f6" stroke="#2563eb" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A healthy weight is a complex question because it varies by individual based on age, gender, genetics, muscle mass, and overall health. This calculator uses two evidence-based approaches: BMI (Body Mass Index) and the Hamwi formula. BMI is simple and population-validated; the Hamwi formula accounts for gender and height. The healthy weight range is typically expressed as a band rather than a single number because healthy bodies vary in composition. Someone muscular at the high end of the range may be healthier than someone sedentary at the low end.
      </p>

      <p>
        <strong>BMI-Based Range (18.5-24.9):</strong> BMI categories 18.5-24.9 are considered normal weight for adults. BMI below 18.5 is underweight; 25-29.9 is overweight; 30+ is obese. BMI is easy to calculate and useful for population studies, but it doesn't distinguish between muscle and fat, so very muscular people may be classified as overweight despite being healthy. Use BMI as a starting point but not the only health marker. For most people, being within the BMI normal range correlates with lower disease risk.
      </p>

      <p>
        <strong>Hamwi Formula:</strong> Developed by nutritionists, the Hamwi formula estimates ideal body weight based on height and gender: Men: 106 lbs for first 5 feet, plus 6 lbs per inch above 5 feet; Women: 100 lbs for first 5 feet, plus 5 lbs per inch above 5 feet. This formula assumes medium frame size. For small frames, subtract 10%; for large frames, add 10%. The Hamwi formula works well for people with typical proportions but may overestimate or underestimate for those with unusual body shapes.
      </p>

      <p>
        <strong>Frame Size Estimation:</strong> Frame size is traditionally estimated from wrist circumference or elbow breadth. Small frames are lighter-boned, typically wrist less than 5.5 inches (women) or 6.5 inches (men). Large frames are heavier-boned, typically wrist more than 6.25 inches (women) or 7.5 inches (men). If you don't know your frame size, medium is a safe default. Frame size is genetic and doesn't change, so once you determine it, use it consistently.
      </p>

      <p>
        <strong>Beyond Weight—Health is Multifaceted:</strong> Your weight is just one health marker. More important are fitness level, blood pressure, cholesterol, blood sugar, diet quality, sleep, stress, and cardiovascular function. You can be healthy at various weights; conversely, someone at a "healthy weight" can have poor fitness. Focus on building healthy habits: regular activity, whole foods, adequate sleep, and stress management. If you have health concerns, work with your doctor or a registered dietitian rather than chasing a specific number.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Healthy Weight Calculator"
      description="Calculate your healthy weight range using BMI and Hamwi formulas"
      slug="healthy-weight-calculator"
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
        {heightUnit === "ft" ? (
          <div className="grid grid-cols-2 gap-4">
            <InputField
              id="height-feet"
              label="Height (Feet)"
              value={heightFeet}
              onChange={setHeightFeet}
              step={1}
              min={2}
              max={8}
            />
            <InputField
              id="height-inches"
              label="Inches"
              value={heightInches}
              onChange={setHeightInches}
              step={1}
              min={0}
              max={11}
            />
          </div>
        ) : (
          <InputField
            id="height-cm"
            label="Height (cm)"
            value={heightFeet}
            onChange={setHeightFeet}
            step={1}
            min={100}
            max={230}
          />
        )}
        <SelectField
          id="height-unit"
          label="Height Unit"
          value={heightUnit}
          onChange={setHeightUnit}
          options={[
            { value: "ft", label: "Feet & Inches" },
            { value: "cm", label: "Centimeters" },
          ]}
        />
        <SelectField
          id="frame-size"
          label="Frame Size"
          value={frameSize}
          onChange={setFrameSize}
          options={[
            { value: "small", label: "Small (wrist {'{<'} 5.5in/6.5in)" },
            { value: "medium", label: "Medium (typical)" },
            { value: "large", label: "Large (wrist {'{>'} 6.25in/7.5in)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
