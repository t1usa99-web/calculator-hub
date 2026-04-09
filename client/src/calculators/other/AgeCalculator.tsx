import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function AgeCalculator() {
  const [birthYear, setBirthYear] = useState(1990);
  const [birthMonth, setBirthMonth] = useState(6);
  const [birthDay, setBirthDay] = useState(15);

  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

  // Calculate age in years, months, days
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Calculate total days lived
  const daysLived = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));

  // Calculate next birthday
  let nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);
  if (nextBirthday < today) {
    nextBirthday = new Date(today.getFullYear() + 1, birthMonth - 1, birthDay);
  }
  const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Calculate zodiac sign
  const getZodiacSign = (month: number, day: number) => {
    const zodiacSigns = [
      { sign: "Capricorn", start: [12, 22], end: [1, 19] },
      { sign: "Aquarius", start: [1, 20], end: [2, 18] },
      { sign: "Pisces", start: [2, 19], end: [3, 20] },
      { sign: "Aries", start: [3, 21], end: [4, 19] },
      { sign: "Taurus", start: [4, 20], end: [5, 20] },
      { sign: "Gemini", start: [5, 21], end: [6, 20] },
      { sign: "Cancer", start: [6, 21], end: [7, 22] },
      { sign: "Leo", start: [7, 23], end: [8, 22] },
      { sign: "Virgo", start: [8, 23], end: [9, 22] },
      { sign: "Libra", start: [9, 23], end: [10, 22] },
      { sign: "Scorpio", start: [10, 23], end: [11, 21] },
      { sign: "Sagittarius", start: [11, 22], end: [12, 21] },
    ];

    for (const zodiac of zodiacSigns) {
      const [startMonth, startDay] = zodiac.start;
      const [endMonth, endDay] = zodiac.end;

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        return zodiac.sign;
      }
    }
    return "Capricorn";
  };

  const zodiacSign = getZodiacSign(birthMonth, birthDay);

  // Calculate day of week
  const dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const birthDayOfWeek = dayOfWeekNames[birthDate.getDay()];

  // Create milestone data for chart
  const milestoneData = useMemo(() => {
    return [
      { name: "Age (Years)", value: ageYears, full: ageYears },
      { name: "Months", value: ageMonths, full: ageYears * 12 + ageMonths },
      { name: "Weeks", value: Math.floor(daysLived / 7), full: Math.floor(daysLived / 7) },
      { name: "Days", value: daysLived, full: daysLived },
    ];
  }, [ageYears, ageMonths, daysLived]);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Current Age" value={`${ageYears} yrs, ${ageMonths} mo, ${ageDays} days`} highlight />
      <ResultCard label="Total Days Lived" value={formatNumber(daysLived)} />
      <ResultCard label="Days Until Birthday" value={formatNumber(daysUntilBirthday)} highlight />
      <ResultCard label="Zodiac Sign" value={zodiacSign} />
      <ResultCard label="Born On" value={birthDayOfWeek} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Life Milestones</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={milestoneData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Bar dataKey="full" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Calculating your exact age involves more than just counting years since your birth year. Age is typically expressed in years, but it's often more precise to include months and days, especially for infants and young children. An age calculator determines the complete time span from your date of birth to today's date, accounting for the varying lengths of months and leap years in the calendar system.
      </p>

      <p>
        <strong>Why Age Matters:</strong> Age is essential for numerous official and practical purposes. Governments use age to determine eligibility for voting, driving, and accessing age-restricted services. Medical professionals use age to assess appropriate healthcare treatments and screenings. Insurance companies calculate premiums based on age. Schools and educational institutions use age to place students in appropriate grades. Understanding your exact age in years, months, and days can be useful for precise calculations in scientific research, demographic studies, and actuarial analysis.
      </p>

      <p>
        <strong>Zodiac Signs and Astrology:</strong> In astrology, your birth date determines your zodiac sign, which astrologers believe influences personality traits and characteristics. There are 12 zodiac signs, each spanning roughly 30 days of the year. While astrology is not scientifically proven, many people find the zodiac information interesting as part of cultural and historical traditions. Your birth day of the week can also be calculated from your birth date, which was sometimes used historically to make predictions about personality.
      </p>

      <p>
        <strong>Life Milestones and Planning:</strong> Tracking your age in different units (years, months, days, hours, minutes) can provide perspective on how much time you've lived and help with life planning. Understanding your total days lived puts life into perspective, while knowing the days until your next birthday helps with celebration planning. Age is also used in demographic analysis, helping researchers understand population structures and generational trends across societies and cultures.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Age Calculator"
      description="Calculate your exact age in years, months, and days, plus zodiac sign and life milestones"
      slug="age-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="birth-year"
          label="Birth Year"
          value={birthYear}
          onChange={setBirthYear}
          type="number"
          step={1}
          min={1900}
          max={new Date().getFullYear()}
        />
        <InputField
          id="birth-month"
          label="Birth Month"
          value={birthMonth}
          onChange={setBirthMonth}
          type="number"
          step={1}
          min={1}
          max={12}
        />
        <InputField
          id="birth-day"
          label="Birth Day"
          value={birthDay}
          onChange={setBirthDay}
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
  component: AgeCalculator,
  slug: "age-calculator",
  title: "Age Calculator",
  shortTitle: "Age",
  description: "Calculate your exact age in years, months, and days with zodiac sign",
  category: "other",
  icon: "🎂",
  keywords: ["age calculator", "how old am I", "calculate age", "zodiac sign"],
  popular: true,
});
