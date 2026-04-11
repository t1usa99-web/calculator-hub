import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function GolfHandicapCalculator() {
  const [scoresInput, setScoresInput] = useState("85,84,86,83,87,85,88,84,85,86");
  const [courseRating, setCourseRating] = useState(72.5);
  const [slopeRating, setSlopeRating] = useState(125);

  // Parse scores from comma-separated input
  const scores = scoresInput
    .split(",")
    .map((s) => parseFloat(s.trim()))
    .filter((s) => !isNaN(s) && s > 0)
    .sort((a, b) => a - b);

  // Calculate differentials
  const differentials = scores.map(
    (score) => (score - courseRating) * (113 / slopeRating)
  );

  // Handicap Index = average of best 8 differentials × 0.96
  const handicapIndex =
    scores.length >= 8
      ? (differentials.slice(0, 8).reduce((a, b) => a + b, 0) / 8) * 0.96
      : scores.length > 0
        ? (differentials.reduce((a, b) => a + b, 0) / scores.length) * 0.96
        : 0;

  // Course Handicap = Handicap Index × (Slope / 113) + (Course Rating - 72)
  const courseHandicap =
    handicapIndex * (slopeRating / 113) + (courseRating - 72);

  const chartData = scores.map((score, idx) => ({
    scoreNum: idx + 1,
    score,
    differential: parseFloat(differentials[idx].toFixed(2)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Scores Entered" value={scores.length} />
      <ResultCard label="Course Rating" value={formatNumber(courseRating, 1)} />
      <ResultCard label="Slope Rating" value={slopeRating} />
      <ResultCard label="Handicap Index" value={formatNumber(handicapIndex, 1)} highlight />
      <ResultCard label="Course Handicap" value={formatNumber(courseHandicap, 1)} highlight />
      <ResultCard
        label="Formula"
        value="(avg of best 8 differentials) × 0.96"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Scores and Differentials
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="scoreNum" label={{ value: "Score #", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Score", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Bar dataKey="score" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A golf handicap measures a golfer's potential ability and allows players of different skill levels to compete fairly. The handicap index is a standardized number that adjusts based on the difficulty of the course (course rating and slope) where scores are recorded. Lower handicaps indicate better players. A handicap of 0 means the player can consistently shoot par (standard score for the course).
      </p>

      <p>
        <strong>How Handicaps Work:</strong> The handicap system uses recent scores (typically the best 8 of the last 20 rounds) to calculate a handicap index. This index is then converted to a course handicap, which accounts for that specific course's difficulty. The course rating (72.0 for a standard course) and slope rating (113 for average difficulty) define the difficulty. A slope of 120 is harder than 113, requiring a higher handicap. The formula multiplies the average differential by 0.96 to account for variability in player performance.
      </p>

      <p>
        <strong>Differential Calculation:</strong> The differential is (score - course rating) × (113 / slope rating). This normalizes scores across different courses. A score of 85 on a course with a 72.5 rating and 125 slope produces a differential of (85 - 72.5) × (113 / 125) = 11.73. Using the best 8 differentials ensures that occasional poor rounds don't overly penalize a handicap, making the system fair and stable.
      </p>

      <p>
        <strong>Handicap Classifications:</strong> Scratch golfers (handicap 0) shoot par consistently. Bogey golfers (handicap 20+) typically score one over par per hole. A handicap of 10 means the player should shoot about 82 on a par-72 course. Most casual golfers have handicaps between 15 and 30. Women's handicaps may be calculated on slightly different courses or tees. Professional golfers have negative handicaps, meaning they shoot better than par even on the easiest courses.
      </p>

      <p>
        <strong>Course Adjustments:</strong> The same golfer will have different course handicaps at different courses. At a harder course (higher slope), the course handicap is higher (more strokes allowed). At an easier course (lower slope), the course handicap is lower. This allows fair competition across different venues. Public courses typically have slopes between 110-125, while championship courses can exceed 140. Always check your course handicap before competing in tournaments to ensure accurate scoring and fair handicapping.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Golf Handicap Calculator"
      description="Calculate golf handicap index and course handicap from scores"
      slug="golf-handicap-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="scoresInput"
        label="Scores (comma-separated)"
        value={scoresInput}
        onChange={setScoresInput}
        placeholder="85,84,86,83,87..."
      />
      <InputField
        id="courseRating"
        label="Course Rating"
        value={courseRating}
        onChange={setCourseRating}
        step={0.1}
        min={60}
        max={80}
      />
      <InputField
        id="slopeRating"
        label="Slope Rating"
        value={slopeRating}
        onChange={setSlopeRating}
        step={1}
        min={55}
        max={160}
      />
    </CalculatorLayout>
  );
}
