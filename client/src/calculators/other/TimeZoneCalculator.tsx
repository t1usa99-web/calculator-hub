import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { registerCalculator } from "@/lib/calculator-registry";

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

registerCalculator({
  component: TimeZoneCalculator,
  slug: "time-zone-calculator",
  title: "Time Zone Calculator",
  shortTitle: "Time Zone",
  description: "Convert times between world time zones",
  category: "other",
  icon: "🌍",
  keywords: ["time zone converter", "UTC offset", "world time", "convert time", "timezone"],
  popular: true,
  faqs: [
    {
      question: "What is UTC and how do time zones relate to it?",
      answer: "UTC (Coordinated Universal Time) is the international standard time, also called Greenwich Mean Time (GMT). All time zones are based on UTC offsets. Eastern Time is UTC-5 (5 hours behind UTC). Central Europe is UTC+1 (1 hour ahead). Tokyo is UTC+9. When it's noon UTC, it's 7am in New York (UTC-5) and 9pm in Tokyo (UTC+9). Most digital systems and aviation use UTC internally, then convert to local time for display. Understanding UTC helps when working with international teams, logs, and scheduling.",
    },
    {
      question: "How do I calculate time differences between zones?",
      answer: "Find the UTC offset for each timezone, then subtract. Example: New York (UTC-5) to London (UTC+0): 0 - (-5) = 5 hours difference. If it's 3pm in New York, add 5 hours to get 8pm in London. If the result exceeds 24 hours or goes negative, add or subtract 24 hours to stay within a single day. Example: 9pm in New York to Tokyo (UTC+9): 9 + 14 hours = 11am next day in Tokyo. Most calendars and time apps do this automatically, but understanding the math helps you verify conversions.",
    },
    {
      question: "What is daylight saving time and how does it affect time zones?",
      answer: "Daylight saving time (DST) shifts local time one hour forward during warmer months to use daylight more efficiently. In the U.S., it starts on the second Sunday in March and ends on the first Sunday in November. Europe has similar dates but not identical. Some places don't observe DST (Arizona, Hawaii, parts of Canada). During DST, New York becomes UTC-4 instead of UTC-5. Time differences between regions that observe DST on different dates are confusing. Always use timezone-aware tools that account for DST; manual calculations are error-prone during transitions.",
    },
    {
      question: "What are the major world time zones?",
      answer: "Major time zones include: Hawaii (UTC-10), Los Angeles (UTC-8), Denver (UTC-7), Chicago (UTC-6), New York (UTC-5), London/GMT (UTC+0), Paris/Central Europe (UTC+1), Cairo/Eastern Europe (UTC+2), New Delhi (UTC+5:30), Singapore (UTC+8), Tokyo (UTC+9), Sydney (UTC+10). These are standard time offsets; add 1 hour for daylight saving time in observing regions. Large countries like Russia, China, and Australia span multiple time zones. Use a map or timezone app to determine the correct zone for specific cities.",
    },
    {
      question: "How do I schedule a call across multiple time zones?",
      answer: "Find a time that works for all participants' working hours (typically 9am-6pm). Use a time zone converter to see what times correspond across regions. For example, 9am Pacific (UTC-8) is 12pm Eastern (UTC-5) and 5pm London (UTC+0). Consider each region's standard working hours and lunch times. Google Calendar automatically shows events in each attendee's local time. Always confirm the timezone in meeting invitations to prevent confusion. When deadlines are international, specify both the timezone and UTC time for clarity.",
    },
  ],
  dateModified: "2026-04-10",
});
