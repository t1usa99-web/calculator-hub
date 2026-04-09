import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";
import { registerCalculator } from "@/lib/calculator-registry";

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

  return (
    <CalculatorLayout
      title="Pregnancy Conception Calculator"
      description="Calculate estimated conception date, LMP, and current gestational age"
      slug="pregnancy-conception-calculator"
      results={results}
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

registerCalculator({
  component: PregnancyConceptionCalculator,
  slug: "pregnancy-conception-calculator",
  title: "Pregnancy Conception Calculator",
  shortTitle: "Pregnancy Conception",
  description:
    "Calculate estimated conception date, last menstrual period, and current gestational age",
  category: "health",
  icon: "👶",
  keywords: [
    "pregnancy",
    "conception",
    "LMP",
    "gestational age",
    "due date",
    "prenatal",
  ],
  dateModified: "2026-04-09",
});
