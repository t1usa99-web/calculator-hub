import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SleepCalculator() {
  const [mode, setMode] = useState("wakeup");
  const [hour, setHour] = useState(22);
  const [minute, setMinute] = useState(0);

  // Sleep cycle duration in minutes
  const SLEEP_CYCLE = 90;
  const FALL_ASLEEP_TIME = 14;

  // Convert time to minutes since midnight
  const selectedMinutes = hour * 60 + minute;

  // Generate sleep cycle options (4-6 cycles)
  const generateSleepTimes = (startMinutes: number, isBedtime: boolean) => {
    const times = [];
    for (let cycles = 4; cycles <= 6; cycles++) {
      const totalMinutes = FALL_ASLEEP_TIME + cycles * SLEEP_CYCLE;
      const resultMinutes = isBedtime ? startMinutes + totalMinutes : startMinutes - totalMinutes;

      const nextDayMinutes = resultMinutes < 0 ? 1440 + resultMinutes : resultMinutes % 1440;
      const resultHour = Math.floor(nextDayMinutes / 60);
      const resultMin = nextDayMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const totalMins = totalMinutes % 60;

      times.push({
        cycles,
        hour: resultHour,
        minute: resultMin,
        totalHours,
        totalMins,
      });
    }
    return times;
  };

  const sleepTimes = generateSleepTimes(selectedMinutes, mode === "bedtime");

  // Chart data
  const chartData = sleepTimes.map((time) => ({
    cycles: `${time.cycles} cycles`,
    hours: time.totalHours,
    mins: time.totalMins,
    totalLabel: `${time.totalHours}h ${time.totalMins}m`,
    color: ["#3b82f6", "#8b5cf6", "#06b6d4"][time.cycles - 4] || "#10b981",
  }));

  const results = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          {mode === "bedtime" ? "Optimal Wake-Up Times" : "Optimal Bedtimes"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sleepTimes.map((time, idx) => (
            <ResultCard
              key={idx}
              label={`${time.cycles} Cycles (${time.totalHours}h ${time.totalMins}m)`}
              value={`${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`}
              highlight={idx === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Sleep Duration by Cycle Count</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cycles" />
          <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value}h`} />
          <Bar dataKey="hours" radius={[8, 8, 0, 0]}>
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
        <strong>Disclaimer:</strong> This calculator provides estimated sleep times based on sleep cycle science. Individual sleep needs vary. Most adults require 7{'\u2013'}9 hours of sleep nightly. Always prioritize consistent sleep schedules and quality over optimizing wake times.
      </p>

      <p>
        Sleep occurs in cycles of approximately 90 minutes, progressing through light sleep, deeper sleep, and REM (Rapid Eye Movement) sleep where most dreaming occurs. Waking during lighter stages of the cycle results in feeling more refreshed; waking during deep sleep causes grogginess. This calculator assumes a 14-minute sleep onset time (how long it takes to fall asleep) and adds multiples of 90-minute cycles to find optimal wake or sleep times. The sweet spot is typically 4{'\u2013'}6 complete cycles (6{'\u2013'}9 hours), though individual needs vary.
      </p>

      <p>
        <strong>How to Use This Calculator:</strong> Choose whether you know your bedtime or desired wake time. Select the hour and minute, then review the recommended times. The highlighted time (usually 5 cycles) is a common target for adults. If you must wake at 7 AM, work backward to find the best bedtime (try 10:30 PM or earlier). If going to bed at 11 PM, waking at 6:30 AM aligns with sleep cycles better than 7:15 AM.
      </p>

      <p>
        <strong>Sleep Quality Factors:</strong> Beyond sleep cycles, quality matters. Keep your bedroom cool (65{'\u2013'}68°F), dark, and quiet. Avoid screens 30{'\u2013'}60 minutes before bed {'\u2014'} blue light suppresses melatonin. Consistent sleep schedules (same bedtime/wake time) strengthen circadian rhythms. Caffeine, alcohol, large meals, and intense exercise near bedtime disrupt sleep. Exercise, sunlight exposure, and relaxation techniques improve sleep quality.
      </p>

      <p>
        <strong>Sleep Debt and Recovery:</strong> Missing sleep accumulates a "debt" {'\u2014'} one poor night reduces alertness for days. Recovery is possible but takes time: one all-nighter requires multiple nights of 9{'\u2013'}10 hours to fully recover. Naps can help (20{'\u2013'}30 min naps improve alertness without causing grogginess), but long naps mid-afternoon can interfere with nighttime sleep. Prioritize consistent sleep over catching up on weekends.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Sleep Calculator"
      description="Calculate optimal sleep times based on 90-minute sleep cycles"
      slug="sleep-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="mode"
          label="I want to..."
          value={mode}
          onChange={setMode}
          options={[
            { value: "bedtime", label: "Know what time to go to bed to wake up at..." },
            { value: "wakeup", label: "Know what time to wake up if I go to bed at..." },
          ]}
        />
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            id="hour"
            label="Hour"
            value={String(hour)}
            onChange={(val) => setHour(parseInt(val))}
            options={Array.from({ length: 24 }, (_, i) => ({
              value: String(i),
              label: String(i).padStart(2, "0"),
            }))}
          />
          <SelectField
            id="minute"
            label="Minute"
            value={String(minute)}
            onChange={(val) => setMinute(parseInt(val))}
            options={[
              { value: "0", label: "00" },
              { value: "15", label: "15" },
              { value: "30", label: "30" },
              { value: "45", label: "45" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SleepCalculator,
  slug: "sleep-calculator",
  title: "Sleep Calculator",
  shortTitle: "Sleep Cycles",
  description: "Calculate optimal sleep and wake times aligned with 90-minute sleep cycles for better rest",
  category: "health",
  icon: "💤",
  keywords: ["sleep calculator", "sleep cycles", "optimal bedtime", "wake time", "sleep quality"],
  popular: true,
  faqs: [
    {
      question: "Why are sleep cycles 90 minutes?",
      answer: "Sleep occurs in cycles lasting approximately 90 minutes, during which your brain progresses through light sleep (NREM stage 1{'\u2013'}2), deep sleep (NREM stage 3), and REM sleep. This 90-minute pattern repeats throughout the night, with longer and more intense REM periods toward morning. Most people complete 4{'\u2013'}6 full cycles per night, totaling 6{'\u2013'}9 hours of sleep.",
    },
    {
      question: "What is REM sleep and why is it important?",
      answer: "REM (Rapid Eye Movement) sleep is when most vivid dreaming occurs and is essential for memory consolidation, emotional regulation, and brain development. Adults spend about 20{'\u2013'}25% of sleep in REM, occurring primarily in later cycles. Missing REM sleep impairs learning, mood, and cognitive function. Getting full cycles ensures adequate REM time.",
    },
    {
      question: "How long does it take to fall asleep?",
      answer: "On average, it takes 10{'\u2013'}20 minutes to fall asleep for healthy sleepers. This calculator uses 14 minutes as a standard estimate. Sleep-deprived individuals may fall asleep in minutes, while insomniacs may take much longer. If falling asleep takes consistently over 30 minutes, consult a sleep specialist. Relaxation techniques can help reduce sleep onset time.",
    },
    {
      question: "Is waking during light sleep better than deep sleep?",
      answer: "Yes. Waking during light sleep (NREM stages 1{'\u2013'}2) results in feeling refreshed; waking during deep sleep or transitioning out of REM causes sleep inertia {'\u2014'} grogginess that can last 30{'\u2013'}60 minutes. This calculator aligns wake times with the end of sleep cycles when you{'\u2019'}re naturally in lighter sleep stages, making waking easier and leaving you more alert.",
    },
    {
      question: "Do I really need 7{'\u2013'}9 hours of sleep every night?",
      answer: "Most adults need 7{'\u2013'}9 hours to function optimally, but individual needs vary (6{'\u2013'}10 hours is normal range). Age matters: teenagers need 8{'\u2013'}10 hours, while older adults may need slightly less. Consistently getting less than 6 hours increases risk of heart disease, diabetes, obesity, and cognitive decline. Quality matters too {'\u2014'} 7 hours of quality sleep beats 9 hours of fragmented sleep.",
    },
  ],
  dateModified: "2026-04-10",
});
