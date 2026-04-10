import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { GRADE_FAQS } from "@/lib/faq-math";
import { registerCalculator } from "@/lib/calculator-registry";

export default function GradeCalculator() {
  const [currentGrade, setCurrentGrade] = useState(85);
  const [finalExamWeight, setFinalExamWeight] = useState(20);
  const [desiredGrade, setDesiredGrade] = useState(90);

  // Calculate needed final exam score
  const currentWeight = 100 - finalExamWeight;
  const currentContribution = (currentGrade / 100) * currentWeight;
  const neededContribution = (desiredGrade / 100) * 100 - currentContribution;
  const neededExamScore = finalExamWeight > 0 ? (neededContribution / finalExamWeight) * 100 : 0;

  // Calculate final grades for different exam scores
  const examScores = [0, 25, 50, 75, 100];
  const projections = examScores.map(score => ({
    examScore: score,
    finalGrade: (currentGrade * currentWeight + score * finalExamWeight) / 100,
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Needed Final Exam Score"
        value={Math.max(0, Math.min(100, neededExamScore)).toFixed(2) + "%"}
        highlight={neededExamScore >= 0 && neededExamScore <= 100}
      />
      <ResultCard
        label="Current Standing"
        value={currentGrade.toFixed(1) + "%"}
      />
      <ResultCard
        label="Current Grade Weight"
        value={currentWeight + "%"}
      />
      <ResultCard
        label="Final Exam Weight"
        value={finalExamWeight + "%"}
      />
      {neededExamScore < 0 && (
        <ResultCard
          label="Status"
          value="Goal Already Achieved!"
        />
      )}
      {neededExamScore > 100 && (
        <ResultCard
          label="Status"
          value="Impossible to Achieve"
        />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Final Grade Projections</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={projections}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="examScore" label={{ value: "Final Exam Score (%)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Final Grade (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1) + "%"} />
          <Legend />
          <Bar dataKey="finalGrade" fill="#3b82f6" name="Projected Final Grade" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Understanding how your final grade is calculated is essential for academic planning and performance management. Your overall course grade typically combines multiple components: class participation, quizzes, assignments, midterm exams, and a final exam. Each component carries a specific weight that determines its contribution to the final grade. Knowing these weights and your current performance allows you to calculate what score you need on remaining assessments to achieve your desired final grade.
      </p>

      <p>
        <strong>Weighted Grade Calculations:</strong> Professors often use a weighted grading system where different assessment types contribute different percentages to the final grade. For example, a typical distribution might be: assignments (20%), quizzes (15%), midterm (25%), and final exam (40%). To calculate your projected final grade, multiply each component's score by its weight, then sum the results. If you scored 90% on assignments, 85% on quizzes, 80% on the midterm, these would contribute (90×0.20) + (85×0.15) + (80×0.25) = 53.75 points to your final grade.
      </p>

      <p>
        <strong>Strategic Grade Planning:</strong> A grade calculator helps you identify which assessments have the biggest impact on your final grade. If the final exam is worth 40% of your grade, improving that score has a significant effect on your final grade. Conversely, if assignments are only 10%, spending extra time on those provides less return. This tool helps you prioritize your study time and effort on the components that matter most to your desired outcome, enabling more efficient and effective academic strategies.
      </p>

      <p>
        <strong>What-If Analysis:</strong> By adjusting the final exam score and seeing how it affects your projected grade, you can determine the minimum score needed to achieve your academic goals. This can be motivating if you're close to a higher grade, or it might reveal that certain goals are unrealistic given your current performance. Understanding these calculations removes the guesswork from academic planning and empowers you to take control of your grades through informed decision-making.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Grade Calculator"
      description="Calculate the final exam score needed to reach your desired grade"
      slug="grade-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="current-grade"
          label="Current Grade"
          value={currentGrade}
          onChange={setCurrentGrade}
          suffix="%"
          step={0.1}
          min={0}
          max={100}
        />
        <InputField
          id="final-exam-weight"
          label="Final Exam Weight"
          value={finalExamWeight}
          onChange={setFinalExamWeight}
          suffix="%"
          step={1}
          min={0}
          max={100}
          hint={`Current grade weight: ${100 - finalExamWeight}%`}
        />
        <InputField
          id="desired-grade"
          label="Desired Final Grade"
          value={desiredGrade}
          onChange={setDesiredGrade}
          suffix="%"
          step={0.1}
          min={0}
          max={100}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: GradeCalculator,
  slug: "grade-calculator",
  title: "Grade Calculator",
  shortTitle: "Grade",
  description: "Determine what final exam score you need to reach your desired grade",
  category: "math",
  icon: "📝",
  keywords: ["grade calculator", "final exam score", "calculate grade", "needed grade"],
  popular: false,
  faqs: GRADE_FAQS,
  dateModified: "2026-04-09"
});
