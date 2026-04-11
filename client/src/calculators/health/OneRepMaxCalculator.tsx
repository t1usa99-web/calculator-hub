import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function OneRepMaxCalculator() {
  const [weight, setWeight] = useState(225);
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [reps, setReps] = useState(5);

  // Convert to lbs for consistency
  const weightLbs = weightUnit === "lbs" ? weight : weight * 2.20462;

  // Different 1RM formulas
  const brzycki = weightLbs / (1.0278 - 0.0278 * reps);
  const epley = weightLbs * (1 + reps / 30);
  const lander = (100 * weightLbs) / (101.3 - 2.67123 * reps);
  const oconner = weightLbs * (1 + reps / 40);

  // Average of all formulas
  const average = (brzycki + epley + lander + oconner) / 4;

  // Percentage table
  const percentages = [
    { percent: 95, reps: 1 },
    { percent: 90, reps: 2 },
    { percent: 85, reps: 3 },
    { percent: 80, reps: 4 },
    { percent: 75, reps: 5 },
    { percent: 70, reps: 7 },
    { percent: 65, reps: 10 },
    { percent: 60, reps: 15 },
  ];

  const workingWeights = percentages.map((p) => ({
    percent: p.percent,
    reps: p.reps,
    weight: Math.round((average / 100) * p.percent),
  }));

  // Chart data
  const chartData = workingWeights.map((w) => ({
    percent: `${w.percent}%`,
    weight: w.weight,
    label: `${w.weight} lbs (${w.reps} reps)`,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Estimated 1RM (Average)" value={`${formatNumber(average, 0)} ${weightUnit}`} highlight />
      <ResultCard label="Brzycki Formula" value={`${formatNumber(brzycki, 0)} ${weightUnit}`} />
      <ResultCard label="Epley Formula" value={`${formatNumber(epley, 0)} ${weightUnit}`} />
      <ResultCard label="Lander Formula" value={`${formatNumber(lander, 0)} ${weightUnit}`} />
      <ResultCard label="O{'\u2019'}Connor Formula" value={`${formatNumber(oconner, 0)} ${weightUnit}`} />
      <ResultCard label="Weight Lifted" value={`${formatNumber(weightLbs, 0)} lbs @ ${reps} reps`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Working Weight Percentages of 1RM</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="percent" />
          <YAxis label={{ value: "Weight (lbs)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value} lbs`} />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        <strong>Disclaimer:</strong> This calculator provides estimates for programming purposes. Actual 1RM varies based on training age, muscle composition, technique, and individual variation. Different formulas work better for different rep ranges. Only test true 1RM under controlled conditions with proper form and spotters. Never attempt max lifts without proper preparation, warm-up, and safety measures.
      </p>

      <p>
        The one-rep max (1RM) is the maximum weight you can lift for a single repetition with proper form. Testing true 1RM is risky and taxing; estimating from submaximal lifts is safer. Four common formulas exist, each developed from different research populations and rep ranges. <strong>Brzycki</strong> and <strong>Epley</strong> are most popular and tend to be accurate for 2{'\u2013'}10 rep ranges. <strong>Lander</strong> works well for lower rep ranges ({'\u003c'} 10 reps). <strong>O{'\u2019'}Connor</strong> tends to underestimate. Averaging all four provides a reasonable estimate; actual 1RM may vary {'\u00b1'} 10{'\u2013'}15%.
      </p>

      <p>
        <strong>Understanding Percentage-Based Training:</strong> Once you know your estimated 1RM, you can program strength training at percentages. A 5x5 workout at 80% 1RM develops strength; 70% 1RM for higher reps builds hypertrophy; 50{'\u2013'}60% 1RM develops power and speed. Periodized programs cycle through these percentages. Example: if your estimated squat 1RM is 300 lbs, an 80% working set is 240 lbs. Most successful strength programs use percentage-based loading to ensure appropriate intensity.
      </p>

      <p>
        <strong>Why Multiple Formulas?</strong> No single formula is perfect for everyone. Individual leverages, training experience, and exercise matter. Powerlifters (who test 1RM regularly) may have actual 1RM {'\u00b1'} 5{'\u2013'}10% different from estimates. These formulas are guidelines for setting initial loads {'\u2014'} adjust based on how the weight feels. If a working set feels too heavy, reduce weight; if too easy, increase. Train smart: focus on technique and progressive overload, not max weights.
      </p>

      <p>
        <strong>Safety Notes:</strong> Only estimate 1RM; don{'\u2019'}t test it frequently. Testing requires full recovery, proper warm-up (gradually increasing weight), spotters for barbell lifts, and perfect form {'\u2014'} ego lifting leads to injury. After estimating, use percentage-based programs for most training. Test 1RM at most every 4{'\u2013'}8 weeks during a strength block. Technique matters infinitely more than weight {'\u2014'} a lighter rep with perfect form beats a heavier rep with bad form.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="One Rep Max Calculator"
      description="Estimate your one-rep max from submaximal lifts using multiple formulas"
      slug="one-rep-max-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="weight"
          label="Weight Lifted"
          value={weight}
          onChange={setWeight}
          suffix={weightUnit}
          step={2.5}
          min={20}
          max={1000}
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

        <InputField
          id="reps"
          label="Reps Completed"
          value={reps}
          onChange={setReps}
          step={1}
          min={1}
          max={20}
        />
      </div>
    </CalculatorLayout>
  );
}
