import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { PACE_FAQS } from "@/lib/faq-health";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PaceCalculator() {
  const [distance, setDistance] = useState(5);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(31);
  const [seconds, setSeconds] = useState(0);

  // Total time in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Total time in hours (as decimal)
  const totalHours = totalSeconds / 3600;

  // Avoid division by zero
  if (totalSeconds === 0 || distance === 0) {
    return (
      <CalculatorLayout
        title="Running/Cycling Pace Calculator"
        description="Calculate your running or cycling pace and projected finish times"
        slug="pace-calculator"
        results={<div className="text-gray-500">Enter your distance and time to see results</div>}
        chart={null}
        educational={<div />}
      >
        <div className="space-y-4">
          <InputField
            id="distance"
            label="Distance"
            value={distance}
            onChange={setDistance}
            suffix="miles"
            step={0.1}
            min={0.1}
            max={100}
          />
          <div className="grid grid-cols-3 gap-2">
            <InputField id="hours" label="Hours" value={hours} onChange={setHours} step={1} min={0} max={23} />
            <InputField id="minutes" label="Minutes" value={minutes} onChange={setMinutes} step={1} min={0} max={59} />
            <InputField id="seconds" label="Seconds" value={seconds} onChange={setSeconds} step={1} min={0} max={59} />
          </div>
        </div>
      </CalculatorLayout>
    );
  }

  // Pace per mile (in seconds)
  const pacePerMileSeconds = totalSeconds / distance;
  const paceMinutes = Math.floor(pacePerMileSeconds / 60);
  const paceSecondsOnly = Math.round(pacePerMileSeconds % 60);

  // Speed in mph
  const speedMph = distance / totalHours;

  // Projected times for standard distances
  const projectedK5 = (5 * pacePerMileSeconds) / 60; // 5K in minutes
  const projectedK10 = (10 * pacePerMileSeconds) / 60; // 10K in minutes
  const projectedHalf = (13.1 * pacePerMileSeconds) / 60; // Half marathon in minutes
  const projectedFull = (26.2 * pacePerMileSeconds) / 60; // Marathon in minutes

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    const secs = Math.round((minutes % 1) * 60);
    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  const chartData = [
    { distance: "5K (3.1 mi)", time: Math.round(projectedK5 * 60) / 60, color: "#3b82f6" },
    { distance: "10K (6.2 mi)", time: Math.round(projectedK10 * 60) / 60, color: "#8b5cf6" },
    { distance: "Half Marathon (13.1 mi)", time: Math.round(projectedHalf * 60) / 60, color: "#10b981" },
    { distance: "Marathon (26.2 mi)", time: Math.round(projectedFull * 60) / 60, color: "#f59e0b" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Pace per Mile" value={`${paceMinutes}:${paceSecondsOnly.toString().padStart(2, "0")}`} highlight />
      <ResultCard label="Speed" value={`${formatNumber(speedMph, 2)} mph`} />
      <ResultCard label="5K Finish Time" value={formatTime(projectedK5)} />
      <ResultCard label="10K Finish Time" value={formatTime(projectedK10)} />
      <ResultCard label="Half Marathon Time" value={formatTime(projectedHalf)} />
      <ResultCard label="Marathon Time" value={formatTime(projectedFull)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Projected Finish Times</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="distance" angle={-15} textAnchor="end" height={80} />
          <YAxis label={{ value: "Time (hours)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Bar dataKey="time" radius={[8, 8, 0, 0]}>
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
        Running and cycling pace is a critical metric for athletes and fitness enthusiasts. Pace—measured as time per mile or kilometer—directly relates to speed and is essential for training, race planning, and performance tracking. Understanding your pace allows you to set realistic goals, monitor training progress, and estimate finish times for various race distances. Whether you're a beginner establishing a baseline or an experienced runner targeting a personal record, knowing your pace helps guide your training strategy.
      </p>

      <p>
        <strong>Pace vs. Speed:</strong> Pace is time per distance unit (minutes per mile), while speed is distance per time unit (miles per hour). They're inversely related—a faster pace means lower numbers (e.g., 8 min/mile is faster than 10 min/mile). For running, pace is the standard metric used in training and racing. A 10-minute pace means you cover one mile in 10 minutes. Your pace will vary with effort level, terrain, weather, fitness level, and fatigue. Elite marathoners run sub-6-minute paces, while recreational runners typically run 8-12 minute paces.
      </p>

      <p>
        <strong>Training with Pace:</strong> Effective training uses different paces for different workouts. Easy runs should feel conversational (usually 60-70 seconds per mile slower than race pace). Tempo runs are done at a harder effort. Speed work and intervals are done faster for short periods. Most training distance should be at easy pace to build aerobic base and prevent injury. As fitness improves, you can sustain faster paces for the same effort. Tracking your pace over time shows fitness gains and helps prevent overtraining.
      </p>

      <p>
        <strong>Race Prediction and Planning:</strong> Current pace helps predict potential performance at longer distances, though pacing strategy matters significantly. Running a marathon at consistent pace requires practice and differs from shorter race strategies. Factors like heat, humidity, terrain, and altitude affect pace. Most runners can't maintain their 5K pace for a marathon; expect 20-30% slower per-mile pace for marathons compared to 5K efforts. Use these projections as guides, train appropriately for your target distance, and practice your race plan during long training runs. Proper pacing prevents early burnout and maximizes your finishing time.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Running/Cycling Pace Calculator"
      description="Calculate your pace per mile and projected finish times for standard race distances"
      slug="pace-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="distance"
          label="Distance"
          value={distance}
          onChange={setDistance}
          suffix="miles"
          step={0.1}
          min={0.1}
          max={100}
        />
        <div className="grid grid-cols-3 gap-2">
          <InputField id="hours" label="Hours" value={hours} onChange={setHours} step={1} min={0} max={23} />
          <InputField id="minutes" label="Minutes" value={minutes} onChange={setMinutes} step={1} min={0} max={59} />
          <InputField id="seconds" label="Seconds" value={seconds} onChange={setSeconds} step={1} min={0} max={59} />
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PaceCalculator,
  slug: "pace-calculator",
  title: "Running/Cycling Pace Calculator",
  shortTitle: "Pace",
  description: "Calculate your running or cycling pace per mile and estimate finish times for common race distances",
  category: "health",
  icon: "🏃",
  keywords: ["pace calculator", "running pace", "cycling pace", "race time", "marathon calculator"],
  popular: false,
  faqs: PACE_FAQS,
  dateModified: "2026-04-09",
});
