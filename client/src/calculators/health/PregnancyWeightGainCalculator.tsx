import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PregnancyWeightGainCalculator() {
  const [preWeight, setPreWeight] = useState(150);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(6);
  const [currentWeek, setCurrentWeek] = useState(20);

  // Convert height to BMI
  const totalInches = feet * 12 + inches;
  const bmi = (preWeight / (totalInches * totalInches)) * 703;

  // Determine BMI category and recommended weight gain
  let category = "";
  let minGain = 0;
  let maxGain = 0;
  let categoryColor = "";

  if (bmi < 18.5) {
    category = "Underweight";
    minGain = 28;
    maxGain = 40;
    categoryColor = "#3b82f6";
  } else if (bmi < 25) {
    category = "Normal Weight";
    minGain = 25;
    maxGain = 35;
    categoryColor = "#10b981";
  } else if (bmi < 30) {
    category = "Overweight";
    minGain = 15;
    maxGain = 25;
    categoryColor = "#f59e0b";
  } else {
    category = "Obese";
    minGain = 11;
    maxGain = 20;
    categoryColor = "#ef4444";
  }

  // Calculate weight gain progression (linear progression over 40 weeks)
  const generateWeightGainChart = () => {
    const data = [];
    for (let week = 0; week <= 40; week++) {
      const minAtWeek = (minGain * week) / 40;
      const maxAtWeek = (maxGain * week) / 40;
      data.push({
        week,
        min: Math.round(minAtWeek * 10) / 10,
        max: Math.round(maxAtWeek * 10) / 10,
        avg: Math.round(((minAtWeek + maxAtWeek) / 2) * 10) / 10,
      });
    }
    return data;
  };

  const chartData = generateWeightGainChart();

  // Calculate recommended gain at current week
  const weekRatio = Math.min(currentWeek / 40, 1);
  const minAtWeek = Math.round(minGain * weekRatio * 10) / 10;
  const maxAtWeek = Math.round(maxGain * weekRatio * 10) / 10;
  const avgAtWeek = Math.round(((minAtWeek + maxAtWeek) / 2) * 10) / 10;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Pre-pregnancy BMI" value={formatNumber(bmi, 1)} highlight />
      <ResultCard label="BMI Category" value={category} />
      <ResultCard label="Total Recommended Gain (40 weeks)" value={`${minGain} - ${maxGain} lbs`} />
      <ResultCard label="Recommended Gain at Week {currentWeek}" value={`${minAtWeek} - ${maxAtWeek} lbs`} />
      <ResultCard label="Mid-range Target Weight" value={`${Math.round(preWeight + avgAtWeek)} lbs`} />
      <ResultCard label="Weeks Remaining" value={`${40 - currentWeek} weeks`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Recommended Weight Gain Progression</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" label={{ value: "Week of Pregnancy", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Weight Gain (lbs)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Legend />
          <Line type="monotone" dataKey="min" stroke="#3b82f6" dot={false} name="Minimum Gain" />
          <Line type="monotone" dataKey="avg" stroke="#10b981" dot={false} name="Average Gain" strokeWidth={2} />
          <Line type="monotone" dataKey="max" stroke="#f59e0b" dot={false} name="Maximum Gain" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        During pregnancy, healthy weight gain supports fetal development, maternal health, and successful delivery. The American College of Obstetricians and Gynecologists (ACOG) recommends different total weight gains based on pre-pregnancy BMI to optimize maternal and infant outcomes. These recommendations help reduce risks of gestational diabetes, preeclampsia, and complications during labor.
      </p>

      <p>
        <strong>Weight Gain by BMI Category:</strong> Underweight women should gain 28{'\u2013'}40 lbs to support healthy fetal development and prevent low birth weight. Normal weight women should gain 25{'\u2013'}35 lbs. Overweight women should gain 15{'\u2013'}25 lbs. Obese women should gain 11{'\u2013'}20 lbs. These ranges account for increased blood volume, amniotic fluid, placenta weight, and maternal tissue expansion needed during pregnancy.
      </p>

      <p>
        <strong>Weekly Gain Progression:</strong> Weight gain typically occurs gradually throughout pregnancy. In the first trimester (weeks 1{'\u2013'}13), gains are usually modest (1{'\u2013'}5 lbs total). Second trimester (weeks 14{'\u2013'}27) shows increased weight gain (0.5{'\u2013'}1 lb per week). Third trimester (weeks 28{'\u2013'}40) continues at 0.5{'\u2013'}1 lb per week. Individual patterns vary; some women gain more early and plateau later. Regular prenatal check-ups help monitor progress and identify concerns.
      </p>

      <p>
        <strong>Components of Pregnancy Weight:</strong> The typical 30-lb weight gain breaks down as: fetus (7.5 lbs), placenta (1.5 lbs), amniotic fluid (2 lbs), increased blood volume (4 lbs), expanded uterus (2.5 lbs), breast tissue growth (1.5 lbs), and maternal fat and fluid stores (approximately 11 lbs). Most pregnancy weight is normal and necessary; postpartum weight loss occurs gradually as the body returns to baseline.
      </p>

      <p>
        <strong>Health Considerations:</strong> Gaining too little increases risks of preterm birth and low birth weight. Gaining too much increases risks of gestational diabetes, preeclampsia, and prolonged labor. Nutrition quality matters more than quantity; focus on nutrient-dense foods rather than empty calories. Consult your healthcare provider about personalized nutrition and exercise guidelines for your pregnancy.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pregnancy Weight Gain Calculator"
      description="Calculate recommended pregnancy weight gain based on pre-pregnancy BMI"
      slug="pregnancy-weight-gain-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="preWeight"
          label="Pre-pregnancy Weight"
          value={preWeight}
          onChange={setPreWeight}
          suffix="lbs"
          step={1}
          min={80}
          max={300}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="feet"
            label="Height (Feet)"
            value={feet}
            onChange={setFeet}
            step={1}
            min={4}
            max={7}
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
        <InputField
          id="currentWeek"
          label="Current Week of Pregnancy"
          value={currentWeek}
          onChange={setCurrentWeek}
          step={1}
          min={1}
          max={40}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PregnancyWeightGainCalculator,
  slug: "pregnancy-weight-gain-calculator",
  title: "Pregnancy Weight Gain Calculator",
  shortTitle: "Pregnancy Weight Gain",
  description: "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI and current week",
  category: "health",
  icon: "🤰",
  keywords: ["pregnancy weight gain", "prenatal calculator", "fetal development", "gestational health", "BMI pregnancy"],
  popular: true,
  faqs: [
    {
      question: "Why do weight gain recommendations differ by BMI?",
      answer: "Different BMI categories have different risks and benefits from weight gain. Underweight women and babies benefit from higher gains to support healthy fetal development. Normal weight women achieve optimal outcomes with moderate gains. Overweight and obese women have higher inherent risks of gestational diabetes and preeclampsia, so lower gains are recommended to reduce complications while still supporting fetal development.",
    },
    {
      question: "What if I'm gaining too fast or too slow?",
      answer: "Some variation from the linear progression shown here is normal. Discuss your specific weight gain pattern with your healthcare provider at prenatal visits. Too-rapid gains might indicate fluid retention or excessive fat gain (adjustable through diet and activity). Too-slow gains might need investigation if accompanied by other symptoms. Your provider can give personalized guidance based on your health and fetal development.",
    },
    {
      question: "How much of pregnancy weight is baby and how much is me?",
      answer: "Of a typical 30-lb gain, only about 7.5 lbs is the baby itself. Other components include: placenta (1.5 lbs), amniotic fluid (2 lbs), increased blood volume (4 lbs), expanded uterus (2.5 lbs), breast tissue (1.5 lbs), and maternal fat/fluid stores (about 11 lbs). Most of the mother's weight gain is essential for pregnancy health and is naturally lost postpartum through delivery, lactation, and normal metabolism.",
    },
    {
      question: "When does most pregnancy weight gain occur?",
      answer: "First trimester brings minimal weight gain (1{'\u2013'}5 lbs). Weight gain accelerates in the second trimester as the fetus grows. Third trimester continues at moderate rates (0.5{'\u2013'}1 lb per week). Most women gain about 1 lb per week on average during the second and third trimesters. Individual patterns vary based on pre-pregnancy weight, metabolism, diet, and activity level. Your provider tracks your progress at each visit.",
    },
    {
      question: "How do I lose pregnancy weight after delivery?",
      answer: "About 10{'\u2013'}13 lbs are immediately lost at delivery (baby, placenta, amniotic fluid). Additional loss occurs in the next few weeks as the body sheds excess fluid through sweating and urination. Breastfeeding burns extra calories (about 300{'\u2013'}500 daily), aiding weight loss. The remaining fat stores may take 6{'\u2013'}12 months to lose through balanced nutrition and regular activity. Consult your healthcare provider before starting exercise postpartum.",
    },
  ],
  dateModified: "2026-04-10",
});
