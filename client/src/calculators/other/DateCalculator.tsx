import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { DATE_FAQS } from "@/lib/faq-other";

export default function DateCalculator() {
  const [startYear, setStartYear] = useState(2024);
  const [startMonth, setStartMonth] = useState(1);
  const [startDay, setStartDay] = useState(1);
  const [endYear, setEndYear] = useState(2024);
  const [endMonth, setEndMonth] = useState(12);
  const [endDay, setEndDay] = useState(31);

  const startDate = new Date(startYear, startMonth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = Math.floor(totalDays / 30.44);
  const totalYears = Math.floor(totalDays / 365.25);
  const totalHours = Math.floor(totalDays * 24);
  const totalMinutes = totalHours * 60;

  // Calculate business days (approximate, weekdays only)
  let businessDays = 0;
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      businessDays++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const timeBreakdownData = useMemo(() => {
    return [
      { name: "Years", value: totalYears },
      { name: "Months", value: totalMonths },
      { name: "Weeks", value: totalWeeks },
      { name: "Days", value: totalDays },
    ];
  }, [totalYears, totalMonths, totalWeeks, totalDays]);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Total Days" value={formatNumber(totalDays)} highlight />
      <ResultCard label="Total Weeks" value={formatNumber(totalWeeks)} />
      <ResultCard label="Total Months" value={formatNumber(totalMonths)} highlight />
      <ResultCard label="Total Years" value={formatNumber(totalYears)} />
      <ResultCard label="Business Days" value={formatNumber(businessDays)} />
      <ResultCard label="Total Hours" value={formatNumber(totalHours)} highlight />
      <ResultCard label="Total Minutes" value={formatNumber(totalMinutes)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Time Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={timeBreakdownData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A date calculator determines the number of days, weeks, months, and years between two dates. This is useful for project planning, event management, historical research, and general curiosity. When calculating the time between dates, it's important to account for the varying number of days in each month (28-31 days) and the occurrence of leap years every four years, which add an extra day to February. Accurate date calculations are essential in many fields including finance, law, healthcare, and administration.
      </p>

      <p>
        <strong>Types of Date Calculations:</strong> The most common calculation is the number of days between two dates, but you might also want to know the count in weeks, months, or years. Some applications require business day calculations, which exclude weekends (Saturdays and Sundays) and sometimes holidays. For project management, understanding the business day count is more practical than calendar days, as work typically doesn't happen on weekends. Historians and genealogists often need precise date calculations spanning decades or centuries to track events and family timelines.
      </p>

      <p>
        <strong>Calendar Systems:</strong> The Gregorian calendar, used internationally, has months ranging from 28 to 31 days. A regular year has 365 days, while leap years have 366 days. Leap years occur every four years, except for years divisible by 100 (unless also divisible by 400). This system corrects the slight difference between the calendar year and the actual solar year. Other calendar systems exist worldwide, including the Islamic lunar calendar and various traditional calendars, each with their own methods for calculating time intervals between dates.
      </p>

      <p>
        <strong>Practical Applications:</strong> Date calculators are invaluable for many situations: calculating how long you've lived (combined with a birth date), determining pregnancy duration, calculating contract durations, planning project timelines, calculating interest accrual periods, and managing deadlines. In finance, the number of days between dates affects interest calculations on loans and investments. In law, date calculations determine statute of limitations and contractual obligations. Understanding date calculations helps you better manage time-sensitive projects and deadlines in both personal and professional contexts.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Date Calculator"
      description="Calculate the number of days, weeks, months, and years between two dates"
      slug="date-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4">
          <p className="text-sm text-blue-900 font-medium">Start Date</p>
        </div>
        <InputField
          id="start-year"
          label="Start Year"
          value={startYear}
          onChange={setStartYear}
          type="number"
          step={1}
          min={1900}
        />
        <InputField
          id="start-month"
          label="Start Month"
          value={startMonth}
          onChange={setStartMonth}
          type="number"
          step={1}
          min={1}
          max={12}
        />
        <InputField
          id="start-day"
          label="Start Day"
          value={startDay}
          onChange={setStartDay}
          type="number"
          step={1}
          min={1}
          max={31}
        />
        <div className="bg-green-50 border border-green-200 rounded p-3 my-4">
          <p className="text-sm text-green-900 font-medium">End Date</p>
        </div>
        <InputField
          id="end-year"
          label="End Year"
          value={endYear}
          onChange={setEndYear}
          type="number"
          step={1}
          min={1900}
        />
        <InputField
          id="end-month"
          label="End Month"
          value={endMonth}
          onChange={setEndMonth}
          type="number"
          step={1}
          min={1}
          max={12}
        />
        <InputField
          id="end-day"
          label="End Day"
          value={endDay}
          onChange={setEndDay}
          type="number"
          step={1}
          min={1}
          max={31}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DateCalculator,
  slug: "date-calculator",
  title: "Date Calculator",
  shortTitle: "Date",
  description: "Calculate days between dates, weeks, months, and business days",
  category: "other",
  icon: "📅",
  keywords: ["date calculator", "days between dates", "date difference", "business days"],
  popular: false,
  faqs: DATE_FAQS,
  dateModified: "2026-04-09",
});
