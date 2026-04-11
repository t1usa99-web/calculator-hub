import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function TimeCardCalculator() {
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [breakMinutes, setBreakMinutes] = useState(60);
  const [hourlyRate, setHourlyRate] = useState(15);

  // Parse time string (HH:MM) to minutes since midnight
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  let startMin = timeToMinutes(startTime);
  let endMin = timeToMinutes(endTime);

  // Handle case where end time is before start time (next day)
  if (endMin < startMin) {
    endMin += 24 * 60;
  }

  const totalMinutesWorked = endMin - startMin - breakMinutes;
  const totalHours = totalMinutesWorked / 60;
  const regularHours = Math.min(totalHours, 8);
  const overtimeHours = Math.max(totalHours - 8, 0);

  const regularPay = regularHours * hourlyRate;
  const overtimePay = overtimeHours * hourlyRate * 1.5;
  const totalPay = regularPay + overtimePay;

  // Chart data: daily pay at different hours worked
  const chartData = [];
  for (let h = 1; h <= Math.ceil(totalHours) + 2; h++) {
    const reg = Math.min(h, 8);
    const over = Math.max(h - 8, 0);
    chartData.push({
      hours: h,
      pay: reg * hourlyRate + over * hourlyRate * 1.5,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Hours"
        value={formatNumber(totalHours, 2)}
        highlight
      />
      <ResultCard
        label="Regular Hours"
        value={formatNumber(regularHours, 2)}
      />
      <ResultCard
        label="Overtime Hours"
        value={formatNumber(overtimeHours, 2)}
      />
      <ResultCard
        label="Break Time"
        value={`${breakMinutes} minutes`}
      />
      <ResultCard
        label="Regular Pay"
        value={formatCurrency(regularPay)}
      />
      <ResultCard
        label="Overtime Pay"
        value={formatCurrency(overtimePay)}
      />
      <ResultCard
        label="Total Daily Pay"
        value={formatCurrency(totalPay)}
        highlight
      />
      <ResultCard
        label="Hourly Rate"
        value={formatCurrency(hourlyRate)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Daily Pay by Hours Worked</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hours" label={{ value: "Hours Worked", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Daily Pay", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="pay" fill="#3b82f6" name="Daily Pay" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A time card calculator tracks hours worked and calculates pay, including overtime. Most hourly employees work 8 hours per day. Hours beyond 8 per day (or 40 per week, depending on employer policy) qualify for overtime pay, typically 1.5 times the regular hourly rate. This is the standard for most U.S. employers, though some states and industries have different rules. Accurate time tracking is essential for ensuring fair compensation and resolving disputes. Digital time cards and smartphone apps are increasingly replacing paper records.
      </p>

      <p>
        <strong>Overtime Rules and Regulations:</strong> The Fair Labor Standards Act (FLSA) requires overtime pay of at least 1.5 times the regular rate for hours over 40 per week. Some states require daily overtime (after 8 hours per day). Some industries have different requirements; check your local labor laws. Exempt employees (salaried managers, professionals) typically don't receive overtime pay. Non-exempt hourly employees are entitled to overtime. Breaks (unpaid) are deducted from working time; breaks are required in many states. Holiday and vacation pay may not count toward the 40-hour threshold for overtime calculations. Keep detailed records to protect yourself and your employer in case of disputes.
      </p>

      <p>
        <strong>Calculating Overtime Pay:</strong> Identify regular hours (typically 8 per day or 40 per week) and overtime hours. Multiply regular hours by hourly rate. Multiply overtime hours by 1.5 times the hourly rate. Add both amounts for total pay. Example: 10 hours at $15/hour = 8 regular hours at $15 = $120, plus 2 overtime hours at $22.50 = $45, total $165. Some employers use a weekly calculation instead of daily. Always verify your employer's overtime policy. Double-check calculations on your paycheck to ensure accuracy. Report discrepancies immediately to payroll.
      </p>

      <p>
        <strong>Best Practices for Time Tracking:</strong> Start and end times should be recorded accurately. Use a time clock, app, or digital system for consistency. Document all breaks and meal periods. Note any unusual circumstances (worked lunch, early departure approval, etc.). Review your time card before submitting for accuracy. Keep personal records in case of disputes. Punch out promptly at the end of your shift; clocking out late or early affects calculations. If you work for multiple locations or shifts, track separately. Digital time tracking eliminates guesswork and provides automatic calculations, reducing errors and disputes.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Time Card Calculator"
      description="Calculate daily hours worked and pay including overtime"
      slug="time-card-calculator"
      results={results}
      chart={chart}
      educational={educational}
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
          label="Hourly Rate"
          value={hourlyRate}
          onChange={setHourlyRate}
          prefix="$"
          min={0}
          step={0.25}
        />
      </div>
    </CalculatorLayout>
  );
}
