import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";

export default function TimeZoneCalculator() {
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(30);
  const [sourceTimezone, setSourceTimezone] = useState("EST");
  const [targetTimezone, setTargetTimezone] = useState("PST");

  // UTC offsets for major timezones (standard time, not DST)
  const timezoneOffsets: { [key: string]: number } = {
    "HST": -10, // Hawaii
    "AKST": -9, // Alaska
    "PST": -8, // Pacific
    "MST": -7, // Mountain
    "CST": -6, // Central
    "EST": -5, // Eastern
    "AST": -4, // Atlantic
    "GMT": 0, // Greenwich
    "WET": 0, // Western Europe
    "CET": 1, // Central Europe
    "EET": 2, // Eastern Europe
    "IST": 5.5, // India
    "SGT": 8, // Singapore
    "JST": 9, // Japan
    "AEST": 10, // Australia Eastern
  };

  const timezoneLabels: { [key: string]: string } = {
    "HST": "Hawaii (HST)",
    "AKST": "Alaska (AKST)",
    "PST": "Pacific (PST)",
    "MST": "Mountain (MST)",
    "CST": "Central (CST)",
    "EST": "Eastern (EST)",
    "AST": "Atlantic (AST)",
    "GMT": "Greenwich (GMT)",
    "WET": "Western Europe (WET)",
    "CET": "Central Europe (CET)",
    "EET": "Eastern Europe (EET)",
    "IST": "India (IST)",
    "SGT": "Singapore (SGT)",
    "JST": "Japan (JST)",
    "AEST": "Australia Eastern (AEST)",
  };

  const sourceOffset = timezoneOffsets[sourceTimezone] || 0;
  const targetOffset = timezoneOffsets[targetTimezone] || 0;
  const offsetDifference = targetOffset - sourceOffset;

  // Convert time
  let totalMinutes = hours * 60 + minutes + offsetDifference * 60;
  // Handle day wrapping
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60;
  } else if (totalMinutes >= 24 * 60) {
    totalMinutes -= 24 * 60;
  }

  const convertedHours = Math.floor(totalMinutes / 60);
  const convertedMinutes = totalMinutes % 60;

  const sourceTimeStr = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  const convertedTimeStr = `${String(convertedHours).padStart(2, "0")}:${String(convertedMinutes).padStart(2, "0")}`;

  // Major cities
  const majorCities: { [key: string]: string } = {
    "EST": "New York",
    "CST": "Chicago",
    "MST": "Denver",
    "PST": "Los Angeles",
    "GMT": "London",
    "CET": "Paris",
    "EET": "Cairo",
    "IST": "New Delhi",
    "JST": "Tokyo",
    "SGT": "Singapore",
  };

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={`Time in ${timezoneLabels[sourceTimezone]}`}
        value={sourceTimeStr}
      />
      <ResultCard
        label={`Time in ${timezoneLabels[targetTimezone]}`}
        value={convertedTimeStr}
        highlight
      />
      <ResultCard
        label="Time Difference"
        value={`${offsetDifference > 0 ? '+' : ''}${offsetDifference} hours`}
      />
      <ResultCard
        label="Source UTC Offset"
        value={`UTC${sourceOffset > 0 ? '+' : ''}${sourceOffset}`}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The world is divided into 24 time zones, each roughly 15 degrees of longitude apart. Time zones are based on Coordinated Universal Time (UTC), the international standard. Most inhabited locations use standard time in winter and daylight saving time (DST) in summer, which shifts local time one hour forward. Time zone calculators help you plan calls, meetings, and travel across regions. Major business hubs have dedicated time zone references for international coordination.
      </p>

      <p>
        <strong>Understanding UTC and Time Zone Offsets:</strong> UTC (Coordinated Universal Time) is the basis for all time zones. Time zones are expressed as UTC offsets (UTC-8, UTC+5:30, etc.). Eastern Standard Time is UTC-5, meaning local time is 5 hours behind UTC. Central Europe is UTC+1, meaning local time is 1 hour ahead of UTC. Some regions have non-standard offsets like India (UTC+5:30 with 30-minute difference) or Nepal (UTC+5:45). These offsets change during daylight saving time transitions. Calculators typically use standard time offsets; DST variations are complex and require location-specific rules.
      </p>

      <p>
        <strong>Daylight Saving Time Complications:</strong> Most U.S. states and European countries observe DST, shifting time one hour forward in spring and back in fall. Dates vary by region; the U.S. changes around March and November, while Europe changes on different dates. Some locations (Arizona, Hawaii, parts of Canada) don't observe DST. Calculating time differences during DST transitions is complex because not all regions change on the same date. A 3-hour difference between New York and Los Angeles shifts to 2 hours for brief periods when DST starts and ends on different dates. Time zone apps and official time servers handle DST automatically; manual calculations are error-prone during transitions.
      </p>

      <p>
        <strong>Planning Across Time Zones:</strong> When scheduling calls, find a time convenient for all parties. Consider working hours (typically 9am-6pm in each region). For 9am in New York (UTC-5), it's 2pm in London (UTC+0) and midnight in Tokyo (UTC+9). Many organizations use a shared timezone (often UTC) for scheduling. Apps like Google Calendar automatically convert meeting times to attendees' local zones. Always confirm time zone in meeting invitations to avoid confusion. When traveling, gradually adjust sleep schedule several days before departure to minimize jet lag. When communicating deadlines, always specify the timezone explicitly.
      </p>
    </div>
  );

  const timezoneOptions = Object.entries(timezoneLabels).map(([key, label]) => ({
    value: key,
    label,
  }));

  return (
    <CalculatorLayout
      title="Time Zone Calculator"
      description="Convert times between different time zones worldwide"
      slug="time-zone-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="hours"
            label="Hours"
            value={hours}
            onChange={setHours}
            step={1}
            min={0}
            max={23}
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
        </div>

        <SelectField
          id="source-timezone"
          label="From Timezone"
          value={sourceTimezone}
          onChange={setSourceTimezone}
          options={timezoneOptions}
        />

        <SelectField
          id="target-timezone"
          label="To Timezone"
          value={targetTimezone}
          onChange={setTargetTimezone}
          options={timezoneOptions}
        />

        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Converted Time:</strong> {convertedTimeStr} {timezoneLabels[targetTimezone]}
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
