import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function TimeCalculator() {
  const [hours1, setHours1] = useState(2);
  const [minutes1, setMinutes1] = useState(30);
  const [seconds1, setSeconds1] = useState(0);
  const [operation, setOperation] = useState("add");
  const [hours2, setHours2] = useState(1);
  const [minutes2, setMinutes2] = useState(15);
  const [seconds2, setSeconds2] = useState(30);

  // Convert to total seconds
  const totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
  const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;

  let resultSeconds = 0;
  if (operation === "add") {
    resultSeconds = totalSeconds1 + totalSeconds2;
  } else {
    resultSeconds = Math.abs(totalSeconds1 - totalSeconds2);
  }

  // Convert back to hours, minutes, seconds
  const resultHours = Math.floor(resultSeconds / 3600);
  const resultMinutes = Math.floor((resultSeconds % 3600) / 60);
  const resultSecs = resultSeconds % 60;

  // Decimal hours
  const decimalHours = (resultSeconds / 3600).toFixed(2);

  const timeData = [
    { name: "Hours", value: resultHours },
    { name: "Minutes", value: resultMinutes },
    { name: "Seconds", value: resultSecs },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Time"
        value={`${resultHours}h ${resultMinutes}m ${resultSecs}s`}
        highlight
      />
      <ResultCard
        label="Decimal Hours"
        value={decimalHours}
      />
      <ResultCard
        label="Total Minutes"
        value={formatNumber(Math.floor(resultSeconds / 60))}
        highlight
      />
      <ResultCard
        label="Total Seconds"
        value={formatNumber(resultSeconds)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Time Components</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={timeData}>
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
        A time calculator helps you add, subtract, and convert time values between different units. Whether you're calculating work hours, planning events, or managing time zones, understanding how to work with hours, minutes, and seconds is essential. Time calculations are used in project management, payroll systems, sports timing, cooking, travel planning, and many other fields where precise time measurement is critical.
      </p>

      <p>
        <strong>Time Units and Conversion:</strong> The standard measurement system divides one day into 24 hours, each hour into 60 minutes, and each minute into 60 seconds. This sexagesimal (base-60) system has been used for thousands of years and originates from ancient Babylonian mathematics. To convert between units: multiply hours by 60 to get minutes, multiply minutes by 60 to get seconds, or multiply hours by 3600 to get total seconds. Conversely, divide seconds by 60 to get minutes, or divide by 3600 to get hours. Decimal hours are useful in payroll and scientific calculations, where 1.5 hours equals 1 hour and 30 minutes.
      </p>

      <p>
        <strong>Time Zones and International Time:</strong> The world is divided into 24 major time zones, each roughly one hour apart. Time zones are defined relative to Coordinated Universal Time (UTC), also called Greenwich Mean Time (GMT). Military time uses a 24-hour format (00:00 to 23:59) instead of the 12-hour AM/PM format, which eliminates ambiguity in scheduling. Daylight Saving Time affects some regions, advancing clocks by one hour during warmer months to extend evening daylight. Understanding these systems is crucial for coordinating international meetings, travel, and communication.
      </p>

      <p>
        <strong>Practical Time Applications:</strong> Calculating elapsed time is essential in many contexts. Employers use time calculations for payroll and work scheduling. Athletes and coaches track performance durations. Teachers manage classroom time allocation. Project managers use time tracking for resource planning. In cooking and baking, precise timing ensures proper results. Understanding how to add and subtract time values helps with schedule planning, calculating deadlines, determining work duration, and managing time across different activities and commitments.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Time Calculator"
      description="Add or subtract time values and convert between hours, minutes, and seconds"
      slug="time-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4">
          <p className="text-sm text-blue-900 font-medium">First Time</p>
        </div>
        <InputField
          id="hours1"
          label="Hours"
          value={hours1}
          onChange={setHours1}
          type="number"
          step={1}
          min={0}
        />
        <InputField
          id="minutes1"
          label="Minutes"
          value={minutes1}
          onChange={setMinutes1}
          type="number"
          step={1}
          min={0}
          max={59}
        />
        <InputField
          id="seconds1"
          label="Seconds"
          value={seconds1}
          onChange={setSeconds1}
          type="number"
          step={1}
          min={0}
          max={59}
        />
        <SelectField
          id="operation"
          label="Operation"
          value={operation}
          onChange={setOperation}
          options={[
            { value: "add", label: "Add (+)" },
            { value: "subtract", label: "Subtract (-)" },
          ]}
        />
        <div className="bg-green-50 border border-green-200 rounded p-3 my-4">
          <p className="text-sm text-green-900 font-medium">Second Time</p>
        </div>
        <InputField
          id="hours2"
          label="Hours"
          value={hours2}
          onChange={setHours2}
          type="number"
          step={1}
          min={0}
        />
        <InputField
          id="minutes2"
          label="Minutes"
          value={minutes2}
          onChange={setMinutes2}
          type="number"
          step={1}
          min={0}
          max={59}
        />
        <InputField
          id="seconds2"
          label="Seconds"
          value={seconds2}
          onChange={setSeconds2}
          type="number"
          step={1}
          min={0}
          max={59}
        />
      </div>
    </CalculatorLayout>
  );
}
