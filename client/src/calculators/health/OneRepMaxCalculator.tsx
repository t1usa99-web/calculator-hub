import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

registerCalculator({
  component: OneRepMaxCalculator,
  slug: "one-rep-max-calculator",
  title: "One Rep Max Calculator",
  shortTitle: "1RM Estimator",
  description: "Estimate your one-rep max from submaximal lifts using Brzycki, Epley, Lander, and O'Connor formulas",
  category: "health",
  icon: "💪",
  keywords: ["one rep max", "1RM calculator", "strength training", "lifting calculator", "powerlifting"],
  popular: true,
  faqs: [
    {
      question: "Why are there different 1RM formulas?",
      answer: "Different formulas were developed from different research populations with different rep ranges and exercise types. Brzycki and Epley, the most popular, work well for 2{'\u2013'}10 rep ranges but can diverge at extreme rep ranges. Lander was developed specifically for power athletes and tends to work well below 10 reps. No single formula is universally perfect {'\u2014'} individual leverages, training age, and genetics cause variation. Averaging multiple formulas (as this calculator does) provides a better estimate than any single formula.",
    },
    {
      question: "How accurate are 1RM estimates?",
      answer: "Estimates are typically accurate within {'\u00b1'}10{'\u2013'}15% of actual 1RM. Trained lifters with good technique may be closer {'\u00b1'}5{'\u2013'}10%. The further you are from 1 rep, the larger potential error {'\u2014'} estimating from 10 reps is more reliable than from 1 rep. These estimates are useful for programming training intensity, but don{'\u2019'}t treat them as exact. Use them as starting points; adjust based on how weights feel during training.",
    },
    {
      question: "When should I test my actual 1RM?",
      answer: "Test actual 1RM at most every 4{'\u2013'}8 weeks during a dedicated strength block, with full recovery, proper warm-up, and spotters. Only test if your technique is solid; bad form during a max lift causes injury. For most people, estimated 1RM is sufficient for training purposes. If you{'\u2019'}re a competitive powerlifter, test more frequently during competition seasons. Always prioritize technique over weight.",
    },
    {
      question: "What rep range should I use for the most accurate estimate?",
      answer: "Estimates are most accurate when using 3{'\u2013'}8 reps. Estimating from 1{'\u2013'}2 reps is unreliable because you{'\u2019'}re already near your max. Estimating from 15{'\u2013'}20 reps is also unreliable because you{'\u2019'}re far from 1RM and muscular endurance factors in heavily. The sweet spot is 5{'\u2013'}8 reps {'\u2014'} heavy enough to be close to 1RM, but multiple reps reduce variation and nerves.",
    },
    {
      question: "How do I use 1RM estimates for programming?",
      answer: "Once you have an estimated 1RM, use percentages to set working weights. Strength work (1{'\u2013'}5 reps): 85{'\u2013'}95% 1RM. Hypertrophy (6{'\u2013'}12 reps): 65{'\u2013'}85% 1RM. Power (3{'\u2013'}5 reps): 75{'\u2013'}90% 1RM, explosive. Endurance (12+ reps): 50{'\u2013'}70% 1RM. Most effective programs cycle through these intensities. Start conservative {'\u2014'} if an estimated weight feels easy, increase; if it feels heavy, decrease. Progressive overload (gradually increasing weight or reps) over weeks/months builds strength.",
    },
  ],
  dateModified: "2026-04-10",
});
