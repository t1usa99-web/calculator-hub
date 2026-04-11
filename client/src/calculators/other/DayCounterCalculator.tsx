import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function DayCounterCalculator() {
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2026-04-10");

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate total days
  const totalMs = end.getTime() - start.getTime();
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));

  // Count business days (exclude weekends)
  const countBusinessDays = (from: Date, to: Date) => {
    let count = 0;
    const current = new Date(from);
    while (current <= to) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }
    return count;
  };

  const businessDays = countBusinessDays(start, end);
  const weekends = totalDays - businessDays;

  // Calculate weeks, months, years
  const weeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;

  let months = 0;
  let tempDate = new Date(start);
  while (tempDate <= end) {
    tempDate.setMonth(tempDate.getMonth() + 1);
    if (tempDate <= end) months++;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  // Get day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const startDayName = dayNames[start.getDay()];
  const endDayName = dayNames[end.getDay()];

  // Chart data
  const chartData = [
    { type: "Business Days", count: businessDays },
    { type: "Weekend Days", count: weekends },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Start Date" value={startDate + " (" + startDayName + ")"} />
      <ResultCard label="End Date" value={endDate + " (" + endDayName + ")"} />
      <ResultCard label="Total Days" value={formatNumber(totalDays, 0)} highlight />
      <ResultCard label="Total Weeks" value={formatNumber(weeks, 0) + " weeks " + remainingDays + " days"} />
      <ResultCard label="Total Months" value={formatNumber(months, 0) + " months"} />
      <ResultCard label="Years, Months" value={years + " years " + remainingMonths + " months"} highlight />
      <ResultCard label="Business Days" value={formatNumber(businessDays, 0)} />
      <ResultCard label="Weekend Days" value={formatNumber(weekends, 0)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Business Days vs. Weekends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis label={{ value: "Days", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Counting days between dates is useful for project planning, business calculations, age determination, and event tracking. Understanding how to calculate total days, business days, weeks, and months helps with deadline planning, payroll calculations, and project management. Different contexts require different calculations—business planning counts only weekdays, while personal calendars count all days.
      </p>

      <p>
        <strong>Business Days vs. Calendar Days:</strong> Business days exclude weekends (Saturday and Sunday), and sometimes holidays (depending on the calculation). For a two-week span including one weekend, there are 14 calendar days but only 10 business days. Payroll, project timelines, and delivery schedules typically use business days. Shipping estimates might say "5-7 business days" meaning weekdays only. When planning projects or deadlines, always clarify whether dates include weekends or are business days only. A deadline on Friday is the same day as Monday's deadline when measured in business days but different for calendar days.
      </p>

      <p>
        <strong>Age Calculations:</strong> Calculating age in years, months, and days requires accounting for varying month lengths and leap years. From birth date to today, you can determine exact age in years, months, and days. For example, someone born January 1, 2000, and today being April 10, 2026, would be 26 years, 3 months, and 9 days old. This granular calculation matters for legal documents, eligibility requirements (voting age, retirement), and medical applications. This calculator provides exact age breakdown rather than just rounding to nearest year.
      </p>

      <p>
        <strong>Project Management Applications:</strong> Understanding duration in various units helps schedule tasks and allocate resources. A task that takes 180 calendar days is about 26 weeks, roughly 6 months, or multiple sprints if using agile methodology. Converting between units helps communicate timelines to different stakeholders. Development teams might think in weeks (sprints), while executives think in months or quarters. Project managers must translate durations into terms stakeholders understand. This calculator helps teams ensure everyone understands the same timeline using their preferred time units.
      </p>

      <p>
        <strong>Special Considerations:</strong> Leap years add an extra day in February (every 4 years, with exceptions for century years). Some months have 30 days, others 31, and February has 28 or 29. When calculating months and years, proper accounting for these variations is essential for accuracy. Historical date calculations (far past dates) require careful handling of calendar system changes. Different cultures use different calendar systems (lunar, solar, lunisolar), affecting date calculations. This calculator uses the Gregorian calendar, standard in most modern contexts.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Day Counter Calculator"
      description="Calculate days between dates, business days, and age"
      slug="day-counter-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="startDate"
        label="Start Date"
        value={startDate}
        onChange={setStartDate}
        type="date"
      />
      <InputField
        id="endDate"
        label="End Date"
        value={endDate}
        onChange={setEndDate}
        type="date"
      />
    </CalculatorLayout>
  );
}
