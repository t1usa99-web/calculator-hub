import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PeriodCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("2026-03-15");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodDuration, setPeriodDuration] = useState(5);

  // Parse date
  const periodDate = new Date(lastPeriodDate);
  const today = new Date();

  // Generate next 6 periods
  const generatePeriods = () => {
    const periods = [];
    for (let p = 1; p <= 6; p++) {
      const startDate = new Date(periodDate);
      startDate.setDate(startDate.getDate() + (p - 1) * cycleLength);

      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + periodDuration - 1);

      const daysUntilStart = Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      periods.push({
        period: p,
        startDate,
        endDate,
        daysUntilStart,
      });
    }
    return periods;
  };

  const periods = generatePeriods();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Chart data - period days across cycles
  const chartData = periods.map((p) => ({
    cycle: `Cycle ${p.period}`,
    startDay: (p.startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    duration: periodDuration,
  }));

  const upcomingPeriod = periods[0];
  const daysUntilNextPeriod = upcomingPeriod.daysUntilStart;

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label="Next Period Starts"
          value={formatDate(upcomingPeriod.startDate)}
          highlight={daysUntilNextPeriod >= 0}
        />
        <ResultCard label="Days Until Next Period" value={daysUntilNextPeriod >= 0 ? `${daysUntilNextPeriod} days` : `${Math.abs(daysUntilNextPeriod)} days ago`} />
        <ResultCard label="Next Period Ends" value={formatDate(upcomingPeriod.endDate)} />
        <ResultCard label="Average Cycle Length" value={`${cycleLength} days`} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Next 6 Periods</h3>
        <div className="space-y-2">
          {periods.map((period) => (
            <div key={period.period} className="p-3 bg-gray-50 rounded-lg text-sm">
              <p className="font-semibold text-gray-900">Period {period.period}</p>
              <p className="text-gray-700">
                {formatDate(period.startDate)} {'\u2013'} {formatDate(period.endDate)}
              </p>
              <p className="text-xs text-gray-600">
                {period.daysUntilStart >= 0
                  ? `In ${period.daysUntilStart} days`
                  : `${Math.abs(period.daysUntilStart)} days ago`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Period Schedule Timeline</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cycle" />
          <YAxis label={{ value: "Days From Today", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${Math.round(value as number)} days from today`} />
          <Bar dataKey="startDay" radius={[8, 8, 0, 0]} fill="#f472b6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The menstrual cycle is a monthly process involving hormonal changes that prepare the body for possible pregnancy. Understanding your cycle helps with period prediction, fertility awareness, and identifying changes that might indicate health issues. A typical menstrual period lasts 3{'\u2013'}7 days and occurs roughly every 21{'\u2013'}35 days (with 28 days being average).
      </p>

      <p>
        <strong>Menstrual Cycle Phases:</strong> The cycle is divided into menstruation (days 1{'\u2013'}5, where the uterine lining sheds), the follicular phase (days 1{'\u2013'}13, when follicles develop and estrogen rises), ovulation (day 14, when the mature egg is released), and the luteal phase (days 15{'\u2013'}28, when progesterone supports the uterine lining). If conception doesn't occur, progesterone levels drop, triggering menstruation and starting the cycle again.
      </p>

      <p>
        <strong>Tracking Your Period:</strong> Note the first day of bleeding (day 1 of your cycle). Count the days until your next period starts to determine your cycle length. Tracking for 2{'\u2013'}3 months reveals your personal pattern. Regular tracking helps predict future periods, plan activities, and identify irregularities. Smartphone apps, calendars, or simple notes all work well. Consistent tracking data improves prediction accuracy and helps healthcare providers identify issues.
      </p>

      <p>
        <strong>Hormonal Changes Across Your Cycle:</strong> Estrogen peaks mid-cycle (around ovulation), creating a surge in energy, confidence, and mood. Progesterone rises after ovulation, sometimes causing breast tenderness, bloating, mood changes, and cravings {'\u2013'} premenstrual syndrome (PMS). Symptoms vary widely; some people experience significant PMS while others notice minimal changes. Hormonal birth control can eliminate cyclical symptoms by preventing ovulation.
      </p>

      <p>
        <strong>Irregular Periods:</strong> Variation of a few days is normal, but cycles that consistently vary {'\u2013'} or sudden changes in length or flow {'\u2013'} warrant evaluation. Causes include stress, significant weight changes, intense exercise, medications, polycystic ovary syndrome (PCOS), thyroid disorders, or endometriosis. Track any changes and discuss them with a healthcare provider. Irregular periods can make prediction difficult and sometimes indicate health conditions requiring treatment.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Period Calculator"
      description="Predict your next periods based on your menstrual cycle length and duration"
      slug="period-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Period Start Date</label>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <InputField
          id="cycleLength"
          label="Average Cycle Length"
          value={cycleLength}
          onChange={setCycleLength}
          suffix="days"
          step={1}
          min={21}
          max={35}
        />
        <InputField
          id="periodDuration"
          label="Average Period Duration"
          value={periodDuration}
          onChange={setPeriodDuration}
          suffix="days"
          step={1}
          min={2}
          max={10}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PeriodCalculator,
  slug: "period-calculator",
  title: "Period Calculator",
  shortTitle: "Period Tracker",
  description: "Predict your upcoming periods based on your average cycle length and period duration",
  category: "health",
  icon: "📅",
  keywords: ["period calculator", "menstrual cycle", "period tracker", "period prediction", "cycle calendar"],
  popular: true,
  faqs: [
    {
      question: "How accurate is period prediction?",
      answer: "This calculator is accurate for people with regular, predictable cycles. If your cycle length is consistent within 2{'\u2013'}3 days, predictions are reliable. However, cycles can shift due to stress, travel, illness, weight changes, intense exercise, or medications. Hormonal birth control typically makes cycles very predictable (or eliminates them). Irregular cycles (varying by 5+ days) make prediction difficult; track multiple months to find your pattern or discuss irregularities with a healthcare provider.",
    },
    {
      question: "What's considered a normal period?",
      answer: "Normal periods typically last 2{'\u2013'}7 days and occur every 21{'\u2013'}35 days. Flow varies from light to heavy. Most people use 5{'\u2013'}8 tampons or pads daily at peak flow. You might pass small clots (golf ball size is normal). Periods are usually heaviest the first 2{'\u2013'}3 days and taper toward the end. If your period is unusually heavy (soaking a pad hourly for consecutive hours), lasts longer than 7 days, or is extremely painful, consult a healthcare provider.",
    },
    {
      question: "Why do I have period pain and what helps?",
      answer: "Period pain (dysmenorrhea) results from uterine muscle contractions as the lining sheds. Prostaglandin hormones trigger these contractions. Over-the-counter pain relievers like ibuprofen block prostaglandins and are most effective if taken at the first sign of pain or before it starts. Heat therapy (heating pad or warm bath), light exercise, massage, and relaxation techniques also help. If pain is severe or interferes with daily life, stronger medications or underlying conditions may need evaluation.",
    },
    {
      question: "Can I predict ovulation based on my period?",
      answer: "Yes, roughly. Ovulation typically occurs about 14 days before your next period (or cycle length minus 14 days). If your cycle is 28 days, ovulation usually occurs around day 14. If it's 30 days, ovulation is around day 16. However, ovulation timing varies more than period timing in the same person. For more accurate ovulation prediction, use ovulation tests, track basal body temperature, observe cervical mucus changes, or use an ovulation calculator alongside period tracking.",
    },
    {
      question: "What if my period suddenly changes?",
      answer: "Sudden changes in flow, duration, or timing can indicate hormonal shifts or health changes. Common causes: stress, dietary changes, new medications, pregnancy (if applicable), thyroid issues, PCOS, fibroids, or polyps. Tracking your normal pattern helps identify changes. Report sudden changes to your healthcare provider, especially if accompanied by new pain, excessive bleeding, or missed periods. Documenting the change (duration, flow, dates) helps your provider diagnose any underlying issues.",
    },
  ],
  dateModified: "2026-04-10",
});
