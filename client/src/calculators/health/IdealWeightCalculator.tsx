import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { IDEAL_WEIGHT_FAQS } from "@/lib/faq-health";
import { registerCalculator } from "@/lib/calculator-registry";

export default function IdealWeightCalculator() {
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);
  const [gender, setGender] = useState("male");
  const [frameSize, setFrameSize] = useState("medium");

  const totalInches = feet * 12 + inches;

  // Calculate ideal weight using different formulas
  // Devine formula
  const devineBase = gender === "male" ? 50 : 45.5;
  const devineMultiplier = 2.3;
  const devine = Math.round(devineBase + (totalInches - 60) * devineMultiplier);

  // Robinson formula
  const robinsonBase = gender === "male" ? 52 : 49;
  const robinsonMultiplier = 1.9;
  const robinson = Math.round(robinsonBase + (totalInches - 60) * robinsonMultiplier);

  // Miller formula
  const millerBase = gender === "male" ? 56.2 : 53.1;
  const millerMultiplier = 1.41;
  const miller = Math.round(millerBase + (totalInches - 60) * millerMultiplier);

  // Hamwi formula
  const hamwiBase = gender === "male" ? 48 : 45.5;
  const hamwiMultiplier = 2.7;
  const hamwi = Math.round(hamwiBase + (totalInches - 60) * hamwiMultiplier);

  // Apply frame size adjustments (10% variance)
  const adjustedDevine = frameSize === "small" ? Math.round(devine * 0.9) : frameSize === "large" ? Math.round(devine * 1.1) : devine;
  const adjustedRobinson = frameSize === "small" ? Math.round(robinson * 0.9) : frameSize === "large" ? Math.round(robinson * 1.1) : robinson;
  const adjustedMiller = frameSize === "small" ? Math.round(miller * 0.9) : frameSize === "large" ? Math.round(miller * 1.1) : miller;
  const adjustedHamwi = frameSize === "small" ? Math.round(hamwi * 0.9) : frameSize === "large" ? Math.round(hamwi * 1.1) : hamwi;

  const averageIdeal = Math.round((adjustedDevine + adjustedRobinson + adjustedMiller + adjustedHamwi) / 4);

  const chartData = [
    { name: "Devine", weight: adjustedDevine, color: "#3b82f6" },
    { name: "Robinson", weight: adjustedRobinson, color: "#8b5cf6" },
    { name: "Miller", weight: adjustedMiller, color: "#10b981" },
    { name: "Hamwi", weight: adjustedHamwi, color: "#f59e0b" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Average Ideal Weight" value={`${averageIdeal} lbs`} highlight />
      <ResultCard label="Weight Range" value={`${Math.min(...chartData.map(d => d.weight))} - ${Math.max(...chartData.map(d => d.weight))} lbs`} />
      <ResultCard label="Devine Formula" value={`${adjustedDevine} lbs`} />
      <ResultCard label="Robinson Formula" value={`${adjustedRobinson} lbs`} />
      <ResultCard label="Miller Formula" value={`${adjustedMiller} lbs`} />
      <ResultCard label="Hamwi Formula" value={`${adjustedHamwi} lbs`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Ideal Weight by Formula ({frameSize} frame)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Weight (lbs)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Bar dataKey="weight" radius={[8, 8, 0, 0]}>
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
        Ideal weight is not a single fixed number but rather a range based on multiple factors including height, gender, age, and body frame size. Several mathematical formulas have been developed to estimate healthy weight ranges. The calculator uses four of the most respected formulas: Devine, Robinson, Miller, and Hamwi. These formulas were developed by medical professionals and are widely used in clinical and fitness settings. The average of these formulas provides a comprehensive estimate, with the range showing the variation between different calculation methods.
      </p>

      <p>
        <strong>Understanding the Formulas:</strong> The Devine formula is one of the most commonly used and was developed in 1974. The Robinson formula is sometimes considered more conservative. The Miller and Hamwi formulas provide alternative calculations that may be more accurate for certain populations. All formulas provide base weight for 5 feet and add a multiplier for each inch above that height. Frame size adjustments account for natural variation in skeletal structure—someone with a large frame naturally weighs more than someone with a small frame at the same height.
      </p>

      <p>
        <strong>Frame Size Determination:</strong> Frame size can be estimated by measuring your wrist circumference or the width of your elbow. Your frame size significantly affects your ideal weight range. A person with a large frame might have a healthy weight 10-20% higher than someone with a small frame at the same height. Rather than aiming for an exact number, focus on achieving a weight within your healthy range that you can maintain long-term with a balanced diet and regular exercise.
      </p>

      <p>
        <strong>Beyond the Number:</strong> Ideal weight is just one aspect of health. Body composition (muscle vs. fat ratio), cardiovascular fitness, strength, flexibility, and overall wellness matter more than a specific number on the scale. Two people at the same height and weight can look completely different based on muscle mass. Build muscle through resistance training increases your weight but improves your body composition and metabolism. Focus on how you feel, your energy levels, and your fitness improvements rather than achieving a specific target weight.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ideal Weight Calculator"
      description="Calculate your ideal healthy weight using multiple medical formulas"
      slug="ideal-weight-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
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
        <SelectField
          id="frame-size"
          label="Frame Size"
          value={frameSize}
          onChange={setFrameSize}
          options={[
            { value: "small", label: "Small frame" },
            { value: "medium", label: "Medium frame" },
            { value: "large", label: "Large frame" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: IdealWeightCalculator,
  slug: "ideal-weight-calculator",
  title: "Ideal Weight Calculator",
  shortTitle: "Ideal Weight",
  description: "Calculate your ideal healthy weight range using medical formulas (Devine, Robinson, Miller, Hamwi)",
  category: "health",
  icon: "🎯",
  keywords: ["ideal weight", "healthy weight", "weight calculator", "Devine formula"],
  popular: false,
  faqs: IDEAL_WEIGHT_FAQS,
  dateModified: "2026-04-09",
});
