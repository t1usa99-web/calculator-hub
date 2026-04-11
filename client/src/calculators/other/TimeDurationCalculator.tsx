import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function TimeDurationCalculator() {
  const [mode, setMode] = useState<"between" | "addsubtract">("between");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:30");
  const [baseTime, setBaseTime] = useState("09:00");
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  // Parse time string to seconds
  const parseTime = (timeStr: string) => {
    const [h, m, s] = timeStr.split(":").map(Number);
    return (h || 0) * 3600 + (m || 0) * 60 + (s || 0);
  };

  // Convert seconds to time string
  const secondsToTime = (totalSecs: number): { h: number; m: number; s: number } => {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return { h, m, s };
  };

  // Format as HH:MM:SS
  const formatTimeString = (h: number, m: number, s: number): string => {
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  let resultSeconds = 0;
  let resultH = 0;
  let resultM = 0;
  let resultS = 0;
  let totalMinutes = 0;
  let decimalHours = 0;

  if (mode === "between") {
    const startSecs = parseTime(startTime);
    const endSecs = parseTime(endTime);
    resultSeconds =
      endSecs >= startSecs ? endSecs - startSecs : 86400 - (startSecs - endSecs);
    const time = secondsToTime(resultSeconds);
    resultH = time.h;
    resultM = time.m;
    resultS = time.s;
    totalMinutes = Math.floor(resultSeconds / 60);
    decimalHours = resultSeconds / 3600;
  } else {
    const baseSecs = parseTime(baseTime);
    const changeSecs = hours * 3600 + minutes * 60 + seconds;
    resultSeconds =
      operation === "add" ? baseSecs + changeSecs : baseSecs - changeSecs;

    // Handle day wraparound
    if (resultSeconds < 0) {
      resultSeconds += 86400;
    } else if (resultSeconds >= 86400) {
      resultSeconds -= 86400;
    }

    const time = secondsToTime(resultSeconds);
    resultH = time.h;
    resultM = time.m;
    resultS = time.s;
    totalMinutes = Math.floor(resultSeconds / 60);
    decimalHours = resultSeconds / 3600;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mode === "between" && (
        <>
          <ResultCard label="Start Time" value={startTime} />
          <ResultCard label="End Time" value={endTime} />
        </>
      )}
      {mode === "addsubtract" && (
        <>
          <ResultCard label="Base Time" value={baseTime} />
          <ResultCard
            label={operation === "add" ? "Add" : "Subtract"}
            value={formatTimeString(hours, minutes, seconds)}
          />
        </>
      )}
      <ResultCard
        label="Duration (HH:MM:SS)"
        value={formatTimeString(resultH, resultM, resultS)}
        highlight
      />
      <ResultCard label="Total Minutes" value={formatNumber(totalMinutes, 0)} />
      <ResultCard label="Total Seconds" value={formatNumber(resultSeconds, 0)} />
      <ResultCard label="Decimal Hours" value={formatNumber(decimalHours, 2)} />
      {mode === "addsubtract" && (
        <ResultCard
          label="Result Time"
          value={formatTimeString(resultH, resultM, resultS)}
          highlight
        />
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Time duration calculations are essential for payroll, project management, scheduling, and event planning. Understanding how to calculate the duration between two times and how to add or subtract time from a given moment helps with time management and accurate record-keeping. Converting between formats (hours, minutes, seconds, decimal hours) is necessary for timesheets, invoicing, and coordination across systems.
      </p>

      <p>
        <strong>Time Between Two Times:</strong> To find duration, subtract the start time from the end time. If the end time is earlier in the day (e.g., midnight scenarios), add 24 hours (86400 seconds). For example, from 9:00 AM to 5:30 PM is 8 hours 30 minutes. From 11:00 PM to 2:00 AM (next day) is 3 hours. When calculating across midnight, treating it as the next day's time from midnight prevents errors. This calculator handles wraparound automatically, so you can calculate duration crossing midnight without manual adjustment.
      </p>

      <p>
        <strong>Adding and Subtracting Time:</strong> To add time to a moment, simply add the hours, minutes, and seconds to the base time. Adding 2 hours 30 minutes to 3:00 PM results in 5:30 PM. Subtracting time works similarly but in reverse. Subtracting 1 hour 15 minutes from 2:00 PM gives 12:45 PM. When subtraction results in a negative time (e.g., 1:00 AM minus 2 hours), the result wraps to the previous day (11:00 PM). This is useful for calculating meeting start times, delivery windows, and shift timing.
      </p>

      <p>
        <strong>Decimal Hours for Payroll and Billing:</strong> Some systems use decimal hours (8.5 hours instead of 8:30) for easier calculation. 1 hour = 1.0, and 30 minutes = 0.5, so 8:30 = 8.5. To convert minutes to decimal: 30 minutes ÷ 60 = 0.5, 15 minutes ÷ 60 = 0.25, 45 minutes ÷ 60 = 0.75. This format is common in timekeeping software and invoicing. When billing hourly, decimal hours simplify calculations: 8.5 hours at 50/hour = 425. Manual time tracking often requires conversion between HH:MM:SS and decimal formats.
      </p>

      <p>
        <strong>Practical Applications:</strong> Work shifts, commute times, project duration, meeting scheduling, and event planning all require accurate time calculations. A shift from 8:00 AM to 4:30 PM with a 1-hour lunch break is 7.5 hours of work. Project tasks estimated at 16 hours can be split into 2-day blocks (8 hours per day) or 4-day blocks (4 hours per day). Understanding these conversions helps managers allocate resources and employees track their time accurately. Billing clients often requires tracking hours and converting to billable amounts based on hourly rates.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Time Duration Calculator"
      description="Calculate time between two times or add/subtract time from a given moment"
      slug="time-duration-calculator"
      results={results}
      educational={educational}
    >
      <SelectField
        id="mode"
        label="Calculation Mode"
        value={mode}
        onChange={(v) => setMode(v as "between" | "addsubtract")}
        options={[
          { label: "Time Between", value: "between" },
          { label: "Add/Subtract Time", value: "addsubtract" },
        ]}
      />

      {mode === "between" && (
        <>
          <InputField
            id="startTime"
            label="Start Time"
            value={startTime}
            onChange={setStartTime}
            type="time"
          />
          <InputField
            id="endTime"
            label="End Time"
            value={endTime}
            onChange={setEndTime}
            type="time"
          />
        </>
      )}

      {mode === "addsubtract" && (
        <>
          <InputField
            id="baseTime"
            label="Base Time"
            value={baseTime}
            onChange={setBaseTime}
            type="time"
          />
          <SelectField
            id="operation"
            label="Operation"
            value={operation}
            onChange={(v) => setOperation(v as "add" | "subtract")}
            options={[
              { label: "Add", value: "add" },
              { label: "Subtract", value: "subtract" },
            ]}
          />
          <InputField
            id="hours"
            label="Hours"
            value={hours}
            onChange={setHours}
            step={1}
            min={0}
          />
          <InputField
            id="minutes"
            label="Minutes"
            value={minutes}
            onChange={setMinutes}
            step={1}
            min={0}
            max={59}
          />
          <InputField
            id="seconds"
            label="Seconds"
            value={seconds}
            onChange={setSeconds}
            step={1}
            min={0}
            max={59}
          />
        </>
      )}
    </CalculatorLayout>
  );
}
