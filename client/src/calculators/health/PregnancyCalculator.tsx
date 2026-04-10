import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { PREGNANCY_FAQS } from "@/lib/faq-health";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PregnancyCalculator() {
  const [lmpDate, setLmpDate] = useState("2026-01-08");
  const [cycleLength, setCycleLength] = useState(28);

  const parseDate = (dateString: string) => {
    const parts = dateString.split("-");
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  };

  const lmp = parseDate(lmpDate);
  const today = new Date(2026, 3, 8); // April 8, 2026

  // Due date is approximately 280 days (40 weeks) from LMP
  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280);

  // Estimated conception date (approximately 14 days after LMP for standard 28-day cycle)
  const conceptionDate = new Date(lmp);
  conceptionDate.setDate(conceptionDate.getDate() + Math.round(cycleLength / 2));

  // Calculate gestational age (in days)
  const daysPregnant = Math.floor((today - lmp) / (1000 * 60 * 60 * 24));
  const weeksPregnant = Math.floor(daysPregnant / 7);
  const daysInCurrentWeek = daysPregnant % 7;
  const gestationalAge = `${weeksPregnant}w ${daysInCurrentWeek}d`;

  // Determine trimester
  let trimester = "";
  let trimesterColor = "";
  if (weeksPregnant < 14) {
    trimester = "First Trimester (Weeks 1-13)";
    trimesterColor = "#3b82f6";
  } else if (weeksPregnant < 28) {
    trimester = "Second Trimester (Weeks 14-27)";
    trimesterColor = "#10b981";
  } else {
    trimester = "Third Trimester (Weeks 28-40)";
    trimesterColor = "#f59e0b";
  }

  // Days until due date
  const daysUntilDue = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
  const weeksUntilDue = Math.floor(daysUntilDue / 7);

  // Chart data showing trimester timeline
  const chartData = [
    { name: "First Trimester", weeks: 13, color: "#3b82f6" },
    { name: "Second Trimester", weeks: 14, color: "#10b981" },
    { name: "Third Trimester", weeks: 13, color: "#f59e0b" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Current Gestational Age" value={gestationalAge} highlight />
      <ResultCard label="Estimated Due Date" value={dueDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} highlight />
      <ResultCard label="Current Trimester" value={trimester} />
      <ResultCard label="Estimated Conception Date" value={conceptionDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} />
      <ResultCard label="Days Until Due Date" value={daysUntilDue > 0 ? `${daysUntilDue} days (${weeksUntilDue} weeks)` : "Past due date"} />
      <ResultCard label="Progress" value={`${formatNumber((weeksPregnant / 40) * 100, 0)}%`} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Pregnancy Timeline (40 Weeks)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: "Weeks", position: "insideBottom", offset: -5 }} />
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value) => `${value} weeks`} />
          <Bar dataKey="weeks" radius={[0, 8, 8, 0]}>
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
        Pregnancy typically lasts about 40 weeks, calculated from the first day of your last menstrual period (LMP). This due date is an estimate—only about 5% of babies are born exactly on their due date. The pregnancy calculator helps you track your gestational age and expected due date based on your last menstrual period and cycle length. Accurate dating is important for prenatal care, monitoring fetal development, and determining the appropriate timing for delivery.
      </p>

      <p>
        <strong>Understanding the Three Trimesters:</strong> Pregnancy is divided into three trimesters. The first trimester (weeks 1-13) is when major organs and systems develop; this is when miscarriage risk is highest and screening tests occur. The second trimester (weeks 14-27) is often called the "honeymoon period" with decreased morning sickness and visible fetal movements. The third trimester (weeks 28-40) focuses on fetal growth and preparation for delivery. Each trimester brings different physical changes, symptoms, and prenatal care needs.
      </p>

      <p>
        <strong>Prenatal Care and Development:</strong> Regular prenatal appointments monitor maternal and fetal health, including ultrasounds to confirm due date, blood tests, glucose screening, and fetal monitoring. Proper nutrition (especially folic acid, iron, and calcium), prenatal vitamins, regular exercise (as approved by your doctor), and avoiding harmful substances are critical during pregnancy. Gestational age is important because certain tests and interventions are recommended at specific weeks of pregnancy.
      </p>

      <p>
        <strong>Important Notes:</strong> If you have irregular menstrual cycles, your actual due date may differ from the calculated one—an ultrasound in the first trimester provides the most accurate dating. Premature birth is before 37 weeks, while full-term is 39-40 weeks. Contact your healthcare provider immediately if you experience vaginal bleeding, severe abdominal pain, fluid leakage, or decreased fetal movement. Every pregnancy is unique, so discuss your specific situation and any concerns with your prenatal care team.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pregnancy Due Date Calculator"
      description="Calculate your due date, gestational age, and pregnancy timeline"
      slug="pregnancy-due-date-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Menstrual Period (LMP)</label>
          <input
            type="date"
            value={lmpDate}
            onChange={(e) => setLmpDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Enter the first day of your last menstrual period</p>
        </div>
        <SelectField
          id="cycle-length"
          label="Average Menstrual Cycle Length"
          value={cycleLength.toString()}
          onChange={(val) => setCycleLength(parseInt(val))}
          options={[
            { value: "21", label: "21 days" },
            { value: "24", label: "24 days" },
            { value: "25", label: "25 days" },
            { value: "26", label: "26 days" },
            { value: "27", label: "27 days" },
            { value: "28", label: "28 days (standard)" },
            { value: "29", label: "29 days" },
            { value: "30", label: "30 days" },
            { value: "35", label: "35 days" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PregnancyCalculator,
  slug: "pregnancy-due-date-calculator",
  title: "Pregnancy Due Date Calculator",
  shortTitle: "Due Date",
  description: "Calculate your estimated due date and track your pregnancy week by week",
  category: "health",
  icon: "🤰",
  keywords: ["pregnancy", "due date", "pregnancy calculator", "gestational age", "trimester"],
  popular: true,
  faqs: PREGNANCY_FAQS,
  dateModified: "2026-04-09",
});
