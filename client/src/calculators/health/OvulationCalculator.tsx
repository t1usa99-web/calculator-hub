import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("2026-03-15");
  const [cycleLength, setCycleLength] = useState(28);

  // Parse date
  const periodDate = new Date(lastPeriodDate);
  const today = new Date();

  // Calculate ovulation date (cycle length - 14 days)
  const ovulationDayOfCycle = cycleLength - 14;
  const ovulationDate = new Date(periodDate);
  ovulationDate.setDate(ovulationDate.getDate() + ovulationDayOfCycle);

  // Calculate fertile window (5 days before ovulation + 1 day after)
  const fertileWindowStart = new Date(ovulationDate);
  fertileWindowStart.setDate(fertileWindowStart.getDate() - 5);

  const fertileWindowEnd = new Date(ovulationDate);
  fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 1);

  // Generate next 3 cycles
  const generateCycles = () => {
    const cycles = [];
    for (let c = 1; c <= 3; c++) {
      const cycleStartDate = new Date(periodDate);
      cycleStartDate.setDate(cycleStartDate.getDate() + (c - 1) * cycleLength);

      const cycleOvulationDate = new Date(cycleStartDate);
      cycleOvulationDate.setDate(cycleOvulationDate.getDate() + ovulationDayOfCycle);

      const cycleFertileStart = new Date(cycleOvulationDate);
      cycleFertileStart.setDate(cycleFertileStart.getDate() - 5);

      const cycleFertileEnd = new Date(cycleOvulationDate);
      cycleFertileEnd.setDate(cycleFertileEnd.getDate() + 1);

      cycles.push({
        cycle: c,
        periodDate: cycleStartDate,
        ovulationDate: cycleOvulationDate,
        fertileStart: cycleFertileStart,
        fertileEnd: cycleFertileEnd,
      });
    }
    return cycles;
  };

  const cycles = generateCycles();

  // Chart data - fertility probability by day
  const chartData = [];
  for (let day = -5; day <= 2; day++) {
    const dayDate = new Date(ovulationDate);
    dayDate.setDate(dayDate.getDate() + day);

    let probability = 0;
    if (day === -5) probability = 10;
    else if (day === -4) probability = 20;
    else if (day === -3) probability = 35;
    else if (day === -2) probability = 45;
    else if (day === -1) probability = 50;
    else if (day === 0) probability = 52;
    else if (day === 1) probability = 15;

    chartData.push({
      day: `${day > 0 ? '+' : ''}${day}`,
      probability,
      isFertile: day >= -5 && day <= 1,
    });
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const daysUntilOvulation = Math.ceil((ovulationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const results = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard label="Estimated Ovulation Date" value={formatDate(ovulationDate)} highlight />
        <ResultCard label="Days Until Ovulation" value={daysUntilOvulation >= 0 ? `${daysUntilOvulation} days` : `${Math.abs(daysUntilOvulation)} days ago`} />
        <ResultCard label="Fertile Window Starts" value={formatDate(fertileWindowStart)} />
        <ResultCard label="Fertile Window Ends" value={formatDate(fertileWindowEnd)} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Next 3 Cycles</h3>
        <div className="space-y-2">
          {cycles.map((cycle) => (
            <div key={cycle.cycle} className="p-3 bg-gray-50 rounded-lg text-sm">
              <p className="font-semibold text-gray-900">Cycle {cycle.cycle}</p>
              <p className="text-gray-700">Period: {formatDate(cycle.periodDate)}</p>
              <p className="text-gray-700">Ovulation: {formatDate(cycle.ovulationDate)}</p>
              <p className="text-gray-700">Fertile: {formatDate(cycle.fertileStart)} {'\u2013'} {formatDate(cycle.fertileEnd)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Fertility Probability by Day</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" label={{ value: "Days Relative to Ovulation", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Pregnancy Probability (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="probability" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.isFertile ? "#ef4444" : "#cbd5e1"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Ovulation is the release of a mature egg from the ovary, typically occurring about 12{'\u2013'}16 days before the start of your next menstrual period. The fertile window is the period during which pregnancy can occur, spanning about 5 days before ovulation through 1 day after, since sperm can survive 3{'\u2013'}5 days and the egg survives about 12{'\u2013'}24 hours after ovulation.
      </p>

      <p>
        <strong>How This Calculator Works:</strong> This calculator estimates ovulation based on your menstrual cycle length. Most cycles are 28 days, but normal cycles range from 21{'\u2013'}35 days. Ovulation typically occurs 14 days before your next period (cycle length minus 14 days). The fertile window is calculated as 5 days before ovulation plus 1 day after. Keep in mind this is an estimate; actual ovulation timing varies based on hormones, stress, health, and lifestyle.
      </p>

      <p>
        <strong>Signs of Ovulation:</strong> Beyond calendar calculations, you might notice physical signs: slight temperature rise (basal body temperature method), changes in cervical mucus (becomes clear, stretchy, and abundant), mild pelvic pain or cramping (mittelschmerz), breast tenderness, and increased libido. Tracking multiple signs improves ovulation prediction accuracy compared to calendar method alone.
      </p>

      <p>
        <strong>For Pregnancy Planning:</strong> Intercourse during the fertile window, especially 2{'\u2013'}3 days before ovulation, maximizes conception chances. Sperm quality is highest after 2{'\u2013'}3 days of abstinence, and sperm survival is longest in the days before ovulation when cervical mucus is receptive. Regular intercourse (every 2{'\u2013'}3 days) throughout your cycle also increases pregnancy odds without timing pressure.
      </p>

      <p>
        <strong>Cycle Regularity Matters:</strong> If your cycles vary significantly (more than 3{'\u2013'}5 days between cycles), ovulation timing is less predictable. Irregular cycles can result from stress, exercise, diet changes, medications, or underlying conditions. If you have irregular cycles or are struggling to conceive, consult a healthcare provider. Apps that combine calendar tracking, basal body temperature, and cervical mucus monitoring provide better predictions than any single method.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ovulation Calculator"
      description="Calculate your ovulation date and fertile window based on your menstrual cycle"
      slug="ovulation-calculator"
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
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: OvulationCalculator,
  slug: "ovulation-calculator",
  title: "Ovulation Calculator",
  shortTitle: "Ovulation",
  description: "Estimate your ovulation date and fertile window based on your menstrual cycle length",
  category: "health",
  icon: "🔬",
  keywords: ["ovulation calculator", "fertile window", "menstrual cycle", "pregnancy planning", "conception"],
  popular: true,
  faqs: [
    {
      question: "How accurate is this calculator?",
      answer: "This calculator estimates ovulation for a typical cycle but individual timing varies. On average, it's accurate within a few days for people with regular cycles. Accuracy decreases significantly with irregular cycles. Combining this calendar method with basal body temperature tracking or cervical mucus observation increases reliability. For most accurate results, track actual ovulation signs over multiple cycles.",
    },
    {
      question: "Can I get pregnant outside the fertile window?",
      answer: "Pregnancy requires intercourse during the fertile window when an egg is present or when sperm can survive until ovulation. However, calculating the exact fertile window is difficult because ovulation timing varies. Some people ovulate earlier or later than predicted. Having regular intercourse throughout your cycle (every 2{'\u2013'}3 days) removes timing stress and improves conception odds without needing precise ovulation prediction.",
    },
    {
      question: "What if my cycle length varies?",
      answer: "Cycle variation is common and normal. If your cycles range from 21{'\u2013'}35 days, use your average length or calculate separately for shortest and longest cycles to identify your range of possible fertile windows. More significant variation (28 to 40 days or longer) makes calendar predictions unreliable. Track additional ovulation signs (temperature, cervical mucus, ovulation tests) for better prediction, or consult a fertility specialist.",
    },
    {
      question: "How long can sperm survive?",
      answer: "Sperm can survive in the female reproductive tract for 3{'\u2013'}5 days in optimal cervical mucus conditions, which occurs around ovulation. This is why the fertile window extends 5 days before ovulation {'\u2013'} sperm deposited then can fertilize an egg released later. Sperm survival is shorter in less-receptive cervical environments. The egg itself survives about 12{'\u2013'}24 hours after ovulation.",
    },
    {
      question: "What is basal body temperature and how does it help?",
      answer: "Basal body temperature (BBT) is your resting temperature measured immediately upon waking, before any activity. It rises slightly (0.5{'\u2013'}1 degree) after ovulation due to progesterone. Tracking daily BBT reveals ovulation retrospectively (confirming it happened) rather than predicting it in advance. BBT combined with cervical mucus observation and cycle calendar provides the most reliable natural fertility tracking method for both conception planning and avoiding pregnancy.",
    },
  ],
  dateModified: "2026-04-10",
});
