import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatPercent } from "@/lib/utils";
import { PROBABILITY_FAQS } from "@/lib/faq-math";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ProbabilityCalculator() {
  const [favorableOutcomes, setFavorableOutcomes] = useState(3);
  const [totalOutcomes, setTotalOutcomes] = useState(6);
  const [numEvents, setNumEvents] = useState(2);

  // Calculate probability
  const probability = totalOutcomes > 0 ? favorableOutcomes / totalOutcomes : 0;
  const probabilityPercent = probability * 100;
  const complementaryProb = 1 - probability;
  const complementaryPercent = complementaryProb * 100;

  // Odds
  const oddsFor = `${favorableOutcomes}:${Math.max(0, totalOutcomes - favorableOutcomes)}`;
  const oddsRatio = totalOutcomes > favorableOutcomes ? (totalOutcomes - favorableOutcomes) / favorableOutcomes : Infinity;
  const oddsAgainst = oddsRatio === Infinity ? "∞:1" : `${oddsRatio.toFixed(2)}:1`;

  // Expected value (simple version: number of successes in n trials)
  const expectedValue = probability * numEvents;

  // Probability of event occurring exactly once in n trials (binomial approximation)
  const probAtLeastOnce = 1 - Math.pow(1 - probability, numEvents);

  // Pie chart data
  const pieData = [
    { name: "Success", value: favorableOutcomes },
    { name: "Failure", value: Math.max(0, totalOutcomes - favorableOutcomes) },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Probability of Success"
        value={formatPercent(probabilityPercent) + ` (${formatNumber(probability, 4)})`}
        highlight
      />
      <ResultCard
        label="Probability of Failure"
        value={formatPercent(complementaryPercent) + ` (${formatNumber(complementaryProb, 4)})`}
      />
      <ResultCard label="Odds For" value={oddsFor} />
      <ResultCard label="Odds Against" value={oddsAgainst} />
      <ResultCard
        label={`Expected Successes in ${numEvents} Trials`}
        value={formatNumber(expectedValue, 2)}
        highlight
      />
      <ResultCard
        label={`Probability of At Least One Success in ${numEvents} Trials`}
        value={formatPercent(probAtLeastOnce * 100)}
      />
      <ResultCard label="Favorable Outcomes" value={favorableOutcomes.toString()} />
      <ResultCard label="Total Outcomes" value={totalOutcomes.toString()} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Outcome Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell fill="#10b981" />
            <Cell fill="#ef4444" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Probability is the measure of how likely an event is to occur, expressed as a number between 0 and 1 (or 0% to 100%). A probability of 0 means the event is impossible, while a probability of 1 means it's certain. Probability appears everywhere in real life: weather forecasting, medical testing, insurance calculations, gambling, quality control, and scientific research. Understanding probability helps you make informed decisions, assess risks, and interpret statistics in news, research, and everyday situations.
      </p>

      <p>
        <strong>Basic Probability Concepts:</strong> The probability of an event equals the number of favorable outcomes divided by the total number of possible outcomes. For example, rolling a 6 on a die has a probability of 1/6 since there's one favorable outcome (rolling a 6) and six total outcomes (1-6). The complementary probability is the probability that an event does NOT occur, which equals 1 minus the probability of occurrence. If an event has a 30% chance of happening, it has a 70% chance of not happening.
      </p>

      <p>
        <strong>Odds vs Probability:</strong> While often confused, odds and probability are different. Probability expresses the likelihood as a ratio of favorable outcomes to total outcomes. Odds express the likelihood as a ratio of favorable outcomes to unfavorable outcomes. For a coin flip, the probability of heads is 0.5 (or 50%), while the odds are 1:1 (one to one). Understanding the difference helps you interpret betting odds, medical test results, and risk assessments correctly.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Insurance companies use probability to calculate premiums based on risk. Doctors use probability to communicate test results and treatment success rates. Financial professionals use probability in portfolio analysis and risk management. Quality control teams use probability to determine acceptable defect rates. Scientists use probability to determine statistical significance of research findings. Mastering probability helps you understand uncertainty, make better predictions, and navigate a data-driven world more effectively.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Probability Calculator"
      description="Calculate probability, odds, and expected value for events"
      slug="probability-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="favorable"
          label="Favorable Outcomes"
          value={favorableOutcomes}
          onChange={setFavorableOutcomes}
          step={1}
          min={0}
          max={10000}
          hint="Number of outcomes that represent success"
        />
        <InputField
          id="total"
          label="Total Outcomes"
          value={totalOutcomes}
          onChange={setTotalOutcomes}
          step={1}
          min={1}
          max={10000}
          hint="Total number of possible outcomes"
        />
        <InputField
          id="events"
          label="Number of Trials/Events"
          value={numEvents}
          onChange={setNumEvents}
          step={1}
          min={1}
          max={1000}
          hint="How many times the event occurs"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: ProbabilityCalculator,
  slug: "probability-calculator",
  title: "Probability Calculator",
  shortTitle: "Probability",
  description: "Calculate probability, odds, expected value, and complementary probability",
  category: "math",
  icon: "🎲",
  keywords: ["probability", "odds", "expected value", "statistics", "likelihood"],
  popular: false,
  faqs: PROBABILITY_FAQS,
  dateModified: "2026-04-09"
});
