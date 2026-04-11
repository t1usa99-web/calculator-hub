import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";

export default function PregnancyConceptionCalculator() {
  const [dueDate, setDueDate] = useState("2026-12-25");

  const parseDate = (dateStr: string): Date => {
    return new Date(dateStr + "T00:00:00Z");
  };

  const dueDateObj = parseDate(dueDate);

  // Estimated conception date: due date - 266 days
  const conceptionDate = new Date(dueDateObj);
  conceptionDate.setDate(conceptionDate.getDate() - 266);

  // Estimated last menstrual period: due date - 280 days (40 weeks)
  const lmpDate = new Date(dueDateObj);
  lmpDate.setDate(lmpDate.getDate() - 280);

  // Current gestational week (assuming "today" is now)
  const today = new Date();
  const lmpObj = lmpDate;
  const daysElapsed = Math.floor(
    (today.getTime() - lmpObj.getTime()) / (1000 * 60 * 60 * 24)
  );
  const gestationalWeek = Math.floor(daysElapsed / 7);
  const gestationalDay = daysElapsed % 7;

  // Trimester
  let trimester = "Unknown";
  if (gestationalWeek < 13) {
    trimester = "First Trimester (weeks 1-12)";
  } else if (gestationalWeek < 27) {
    trimester = "Second Trimester (weeks 13-26)";
  } else if (gestationalWeek < 40) {
    trimester = "Third Trimester (weeks 27-40)";
  }

  const formatDateNice = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Estimated Conception Date"
        value={formatDateNice(conceptionDate)}
        highlight={true}
      />
      <ResultCard
        label="Estimated Last Menstrual Period"
        value={formatDateNice(lmpDate)}
        highlight={true}
      />
      <ResultCard
        label="Due Date"
        value={formatDateNice(dueDateObj)}
      />
      <ResultCard
        label="Current Gestational Age"
        value={`${gestationalWeek} weeks, ${gestationalDay} days`}
      />
      <ResultCard
        label="Current Trimester"
        value={trimester}
      />
      <ResultCard
        label="Days Until Due Date"
        value={Math.floor((dueDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)).toString()}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Pregnancy Dating</h3>
      <p>
        Pregnancy is dated from the first day of the last menstrual period (LMP), even though conception typically occurs 10–14 days later. This dating system is used worldwide because most women can recall their LMP date, whereas conception is harder to pinpoint. Medical professionals call this <strong>gestational age</strong>, which differs from <strong>fetal age</strong> (age since conception). A pregnancy of '10 weeks gestation' means 10 weeks from LMP, but the fetus is only approximately 8 weeks old. This 2-week difference can confuse parents, so clarify with your healthcare provider which measurement they're using.
      </p>
      <p>
        <strong>How Due Date is Calculated:</strong> The due date is estimated 280 days (40 weeks) from LMP, based on Naegele's Rule. This assumes a 28-day menstrual cycle with ovulation on day 14. If your cycle is longer or shorter, your actual conception date shifts. For example, a 30-day cycle means ovulation occurs around day 15, so conception is about 15 days after LMP, pushing the due date later. Ultrasound dating in the first trimester (8–13 weeks) is more accurate (±3–5 days error) than LMP-based calculation, especially for irregular cycles. Always discuss your specific due date with your healthcare provider.
      </p>
      <p>
        <strong>Trimester Breakdown:</strong> The first trimester (weeks 1–13) is when most critical organ development occurs; miscarriage risk is highest this period. The second trimester (weeks 14–27) sees rapid fetal growth and maternal body changes. The third trimester (weeks 28–40) focuses on final fetal development, weight gain, and preparation for birth. Understanding which trimester you're in helps contextualize prenatal testing schedules and expected symptoms. <strong>Important note:</strong> This calculator provides estimates for educational purposes. Always consult your healthcare provider for medical decisions related to pregnancy dating and care.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pregnancy Conception Calculator"
      description="Calculate estimated conception date, LMP, and current gestational age"
      slug="pregnancy-conception-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-2">
            Typically 40 weeks (280 days) from the last menstrual period
          </p>
        </div>

        <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg text-sm">
          Note: This calculator provides estimates. Always consult with a
          healthcare provider for accurate pregnancy dates and medical advice.
        </div>
      </div>
    </CalculatorLayout>
  );
}
