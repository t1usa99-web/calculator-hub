import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { HOURS_FAQS } from "@/lib/faq-other";

export default function HoursCalculator() {
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [breakMinutes, setBreakMinutes] = useState(60);
  const [hourlyRate, setHourlyRate] = useState(0);

  // Parse time string (HH:MM) to minutes since midnight
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  let startMin = timeToMinutes(startTime);
  let endMin = timeToMinutes(endTime);

  // Handle case where end time < start time (next day)
  if (endMin < startMin) {
    endMin += 24 * 60; // Add a full day in minutes
  }

  const totalMinutesWorked = endMin - startMin - breakMinutes;
  const totalHours = totalMinutesWorked / 60;
  const decimalHours = totalHours;

  const pay = decimalHours * hourlyRate;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Hours Worked"
        value={formatNumber(totalHours)}
        highlight={true}
      />
      <ResultCard
        label="Total Minutes Worked"
        value={formatNumber(totalMinutesWorked)}
        highlight={true}
      />
      <ResultCard
        label="Decimal Hours"
        value={formatNumber(decimalHours)}
      />
      {hourlyRate > 0 && (
        <ResultCard
          label="Total Pay"
          value={formatCurrency(pay)}
          highlight={true}
        />
      )}
    </div>
  );

  return (
    <CalculatorLayout
      title="Hours Calculator"
      description="Calculate total hours worked with break deductions and optional pay calculation"
      slug="hours-calculator"
      results={results}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Time
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Time
          </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            If end time is before start time, it will be treated as next day
          </p>
        </div>

        <InputField
          id="break-minutes"
          label="Break Duration"
          value={breakMinutes}
          onChange={setBreakMinutes}
          suffix="minutes"
          min={0}
          step={5}
        />

        <InputField
          id="hourly-rate"
          label="Hourly Rate (Optional)"
          value={hourlyRate}
          onChange={setHourlyRate}
          prefix="$"
          min={0}
          step={0.5}
          hint="Leave at 0 to skip pay calculation"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: HoursCalculator,
  slug: "hours-calculator",
  title: "Hours Calculator",
  shortTitle: "Hours",
  description:
    "Calculate total hours worked with breaks and optional wage calculation",
  category: "other",
  icon: "⏰",
  keywords: [
    "hours worked",
    "time tracking",
    "wage calculation",
    "break time",
    "payroll",
  ],
  faqs: HOURS_FAQS,
  dateModified: "2026-04-09",
});
