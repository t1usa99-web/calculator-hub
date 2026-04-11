import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function LeanBodyMassCalculator() {
  const [weight, setWeight] = useState(170);
  const [unit, setUnit] = useState("lbs");
  const [height, setHeight] = useState(70);
  const [heightUnit, setHeightUnit] = useState("in");
  const [gender, setGender] = useState("male");
  const [bodyFatMethod, setBodyFatMethod] = useState("manual");
  const [bodyFat, setBodyFat] = useState(20);
  const [waist, setWaist] = useState(32);
  const [waistUnit, setWaistUnit] = useState("in");

  // Convert to kg and cm if needed
  const weightKg = unit === "lbs" ? weight * 0.453592 : weight;
  const heightCm = heightUnit === "in" ? height * 2.54 : height;
  const waistCm = waistUnit === "in" ? waist * 2.54 : waist;

  // Estimate body fat if needed (simplified estimate)
  let estimatedBodyFat = bodyFat;
  if (bodyFatMethod === "estimate") {
    if (gender === "male") {
      estimatedBodyFat = 1.2 * (waistCm - 15.75 * Math.log10(heightCm)) - 10.8 * 1 - 5.4;
    } else {
      estimatedBodyFat = 1.2 * (waistCm + 0) - 2.65 * heightCm - 76.76;
    }
    estimatedBodyFat = Math.max(5, Math.min(50, estimatedBodyFat));
  }

  // Calculate LBM
  const lbm = weightKg * (1 - estimatedBodyFat / 100);
  const fatMass = weightKg * (estimatedBodyFat / 100);

  // Boer formula
  let boerLbm = 0;
  if (gender === "male") {
    boerLbm = 0.407 * weightKg + 0.267 * heightCm - 19.2;
  } else {
    boerLbm = 0.252 * weightKg + 0.473 * heightCm - 48.3;
  }

  const muscleToFatRatio = fatMass > 0 ? lbm / fatMass : 0;

  const chartData = [
    { name: "Lean Mass", value: Math.round(lbm) },
    { name: "Fat Mass", value: Math.round(fatMass) },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Lean Body Mass (LBM)"
        value={`${formatNumber(lbm, 1)} kg`}
        highlight={true}
      />
      <ResultCard
        label="Fat Mass"
        value={`${formatNumber(fatMass, 1)} kg`}
      />
      <ResultCard
        label="Body Fat Percentage"
        value={`${formatNumber(estimatedBodyFat, 1)}%`}
      />
      <ResultCard
        label="LBM (Boer Formula)"
        value={`${formatNumber(boerLbm, 1)} kg`}
      />
      <ResultCard
        label="Muscle-to-Fat Ratio"
        value={`${formatNumber(muscleToFatRatio, 2)}:1`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Body Composition Breakdown (kg)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value, 0)} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} name="Mass (kg)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Lean Body Mass (LBM), also called Fat-Free Mass, is your total body weight minus all stored fat. It includes muscle, bone, organs, water, and connective tissue. Understanding your LBM is crucial for fitness and health because it's the metabolically active portion of your body—muscle tissue burns more calories at rest than fat tissue. LBM helps you assess training progress more accurately than weight alone, since muscle is denser than fat.
      </p>

      <p>
        <strong>Why LBM Matters:</strong> Two people weighing 200 lbs can have vastly different body compositions. One with 15% body fat has 170 lbs of LBM; another with 35% body fat has only 130 lbs of LBM. Despite the same scale weight, they're very different fitness levels. LBM is the key driver of your Basal Metabolic Rate (BMR)—the calories you burn at rest. Gaining muscle increases LBM and metabolism; losing fat without losing muscle preserves LBM. This is why the scale alone is a poor fitness metric; body composition matters much more.
      </p>

      <p>
        <strong>Methods to Measure Body Composition:</strong> This calculator uses two approaches. The direct method requires you to know your body fat percentage from methods like DEXA scanning, underwater weighing, bioelectrical impedance, or skinfold calipers—these are most accurate. The estimate method uses Navy-style measurements (waist, height) to approximate body fat percentage, which is less precise but works as a general guide. Medical professionals rely on direct measurements; fitness tracking typically uses estimates. For precision, get a DEXA scan; for quick estimates, this calculator provides reasonable approximations.
      </p>

      <p>
        <strong>Boer Formula vs. LBM Formula:</strong> This calculator shows results from both approaches. The standard LBM formula (weight × (1 - body fat %)) is straightforward and works well with accurate body fat measurements. The Boer formula uses height and weight to estimate LBM directly, useful when body fat percentage is unknown. The two methods often give slightly different results because they model body composition differently. For true body composition assessment, direct body fat measurement is most reliable.
      </p>

      <p>
        <strong>Using LBM for Fitness Goals:</strong> During weight loss, preserve LBM by combining resistance training with adequate protein intake (0.8-1g per pound of LBM). During bulking phases, track LBM gains to confirm you're building muscle, not just gaining fat. Strength training builds LBM; cardio alone typically doesn't. A healthy goal is losing 1-2 lbs per week (roughly 50% fat, 50% from water/muscle loss) while preserving LBM through protein and resistance training.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Lean Body Mass Calculator"
      description="Calculate your lean body mass, fat mass, and body composition"
      slug="lean-body-mass-calculator"
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
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="weight"
            label="Weight"
            value={weight}
            onChange={setWeight}
            suffix={unit === "lbs" ? "lbs" : "kg"}
            step={1}
            min={30}
            max={500}
          />
          <SelectField
            id="weight-unit"
            label="Unit"
            value={unit}
            onChange={setUnit}
            options={[
              { value: "lbs", label: "Pounds (lbs)" },
              { value: "kg", label: "Kilograms (kg)" },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="height"
            label="Height"
            value={height}
            onChange={setHeight}
            suffix={heightUnit === "in" ? "in" : "cm"}
            step={1}
            min={100}
            max={220}
          />
          <SelectField
            id="height-unit"
            label="Unit"
            value={heightUnit}
            onChange={setHeightUnit}
            options={[
              { value: "in", label: "Inches (in)" },
              { value: "cm", label: "Centimeters (cm)" },
            ]}
          />
        </div>
        <SelectField
          id="body-fat-method"
          label="Body Fat Method"
          value={bodyFatMethod}
          onChange={setBodyFatMethod}
          options={[
            { value: "manual", label: "Manual Entry (DEXA/Calipers)" },
            { value: "estimate", label: "Estimate from Waist" },
          ]}
        />
        {bodyFatMethod === "manual" && (
          <InputField
            id="body-fat"
            label="Body Fat Percentage"
            value={bodyFat}
            onChange={setBodyFat}
            suffix="%"
            step={0.1}
            min={5}
            max={50}
          />
        )}
        {bodyFatMethod === "estimate" && (
          <div className="grid grid-cols-2 gap-4">
            <InputField
              id="waist"
              label="Waist Circumference"
              value={waist}
              onChange={setWaist}
              suffix={waistUnit === "in" ? "in" : "cm"}
              step={0.1}
              min={20}
              max={60}
            />
            <SelectField
              id="waist-unit"
              label="Unit"
              value={waistUnit}
              onChange={setWaistUnit}
              options={[
                { value: "in", label: "Inches (in)" },
                { value: "cm", label: "Centimeters (cm)" },
              ]}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
