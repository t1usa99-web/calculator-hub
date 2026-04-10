import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import SelectField from "@/components/SelectField";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DiceRollerCalculator() {
  const [numDice, setNumDice] = useState(3);
  const [sides, setSides] = useState(6);
  const [rolls, setRolls] = useState<number[]>([]);

  const rollDice = () => {
    const newRolls: number[] = [];
    for (let i = 0; i < numDice; i++) {
      newRolls.push(Math.floor(Math.random() * sides) + 1);
    }
    setRolls(newRolls);
  };

  const total = rolls.reduce((a, b) => a + b, 0);
  const average = rolls.length > 0 ? total / rolls.length : 0;
  const min = rolls.length > 0 ? Math.min(...rolls) : 0;
  const max = rolls.length > 0 ? Math.max(...rolls) : 0;

  // Probability calculation
  const possibleOutcomes = numDice * sides;
  const probabilityPercent = rolls.length > 0 ? 1 / possibleOutcomes * 100 : 0;

  // Distribution chart data
  const distributionData = Array.from({ length: sides }, (_, i) => {
    const value = i + 1;
    const count = rolls.filter((r) => r === value).length;
    return { value, count };
  });

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Number of Dice" value={numDice} />
      <ResultCard label="Sides per Die" value={sides} />
      <ResultCard label="Total" value={total} highlight />
      <ResultCard label="Average per Die" value={formatNumber(average, 2)} />
      <ResultCard label="Min Roll" value={min} />
      <ResultCard label="Max Roll" value={max} />
      <ResultCard label="Probability of Total" value={formatNumber(probabilityPercent, 4) + '%'} />
      <ResultCard label="Rolls Count" value={rolls.length} />
    </div>
  );

  const chart = rolls.length > 0 ? (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Roll Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={distributionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" label={{ value: "Die Value", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Frequency", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="text-center py-8 text-gray-500">
      Roll the dice to see the distribution chart
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Dice rolling is fundamental to games, gambling, and probability. A fair die has equal chances for each face. Six-sided dice (d6) are the most common, but twenty-sided (d20) and other polyhedra are used in tabletop games like Dungeons and Dragons. Understanding probabilities helps players make strategic decisions based on odds.
      </p>

      <p>
        <strong>Probability Basics:</strong> With a single fair die, each face has a 1/6 chance (about 16.67%). With two dice, there are 36 possible outcomes (6 × 6). The probability of rolling a 7 with two dice is 6/36 = 16.67%, as there are six ways to make 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1). Rolling higher numbers becomes less likely. The average roll of a six-sided die is 3.5 ((1+2+3+4+5+6)/6). Multiple dice increase the likelihood of middle values due to the law of large numbers.
      </p>

      <p>
        <strong>Gaming Applications:</strong> Tabletop RPGs use d20 for skill checks and combat. Rolling high is better. Many games use multiple dice for damage, like 2d6 (two six-sided dice). Craps uses two six-sided dice and relies heavily on probability (7 is the most common total with 6/36 odds). Board games often use dice for movement and randomness. Understanding these odds helps players calculate risks and make informed decisions during gameplay. Some games allow re-rolls, changing probability calculations significantly.
      </p>

      <p>
        <strong>Distribution and Patterns:</strong> Rolling a single die many times produces a uniform distribution—each value appears roughly equally. Rolling multiple dice produces a bell curve (normal distribution) centered on the average. This calculator visualizes the distribution of your rolls, showing which values came up most frequently. With few rolls, randomness dominates; with many rolls, the true probability distribution becomes visible. This is why casinos require many bets—individual randomness evens out over time.
      </p>

      <p>
        <strong>Fair Dice Requirements:</strong> A fair die must be balanced so each face has equal probability. Weighted or loaded dice are unfair and illegal in gambling. Modern dice are manufactured to strict tolerances. Polyhedral dice used in RPGs must be carefully made so all faces have equal probability. Slightly imperfect dice can still be acceptable if the bias is minimal. Testing dice through many rolls can reveal biases—significant deviation from expected values suggests an unfair die that should be replaced.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Dice Roller Calculator"
      description="Roll virtual dice and analyze probability distribution"
      slug="dice-roller-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <SelectField
        id="numDice"
        label="Number of Dice"
        value={numDice.toString()}
        onChange={(v) => setNumDice(parseInt(v))}
        options={Array.from({ length: 10 }, (_, i) => ({
          label: (i + 1).toString(),
          value: (i + 1).toString(),
        }))}
      />
      <SelectField
        id="sides"
        label="Sides per Die"
        value={sides.toString()}
        onChange={(v) => setSides(parseInt(v))}
        options={[
          { label: "4 (d4)", value: "4" },
          { label: "6 (d6)", value: "6" },
          { label: "8 (d8)", value: "8" },
          { label: "10 (d10)", value: "10" },
          { label: "12 (d12)", value: "12" },
          { label: "20 (d20)", value: "20" },
          { label: "100 (d100)", value: "100" },
        ]}
      />
      <div className="mt-6">
        <button
          onClick={rollDice}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"
        >
          Roll the Dice
        </button>
      </div>
      {rolls.length > 0 && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-semibold text-gray-700 mb-2">Last Roll Results:</p>
          <div className="flex flex-wrap gap-2">
            {rolls.map((roll, idx) => (
              <span
                key={idx}
                className="inline-block bg-blue-500 text-white font-bold px-3 py-1 rounded-full text-sm"
              >
                {roll}
              </span>
            ))}
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DiceRollerCalculator,
  slug: "dice-roller-calculator",
  title: "Dice Roller Calculator",
  shortTitle: "Dice Roller",
  description: "Roll virtual dice and see probability distribution",
  category: "other",
  icon: "🎲",
  keywords: ["dice roller", "dice probability", "d20 roller", "random dice"],
  popular: true,
  faqs: [
    {
      question: "What is the probability of rolling a specific number on a die?",
      answer:
        "On a fair six-sided die, each number (1-6) has a 1/6 probability, or about 16.67%. On a twenty-sided die (d20), each outcome has a 1/20 probability (5%). Probability is calculated as (favorable outcomes) / (total possible outcomes). For a single die, there's only one way to roll a 3, so probability is 1/6. With two dice, rolling a sum of 7 has six favorable outcomes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 total, giving 6/36 = 1/6 probability.",
    },
    {
      question: "What is the expected value (average) of dice rolls?",
      answer:
        "The expected value is the average outcome over many rolls. For a six-sided die: (1+2+3+4+5+6)/6 = 3.5. For a twenty-sided die: (1+2+...+20)/20 = 10.5. The formula is: sum of all values / number of sides. For multiple dice, add the expected values. Two d6 have an expected value of 3.5 + 3.5 = 7. This is why 7 is the most common sum with two dice. Understanding expected values helps in games to assess long-term outcomes and fair wagers.",
    },
    {
      question: "Why do some games use different types of dice?",
      answer:
        "Different dice provide different probability curves and ranges. A d4 (4-sided) ranges 1-4, a d6 (6-sided) ranges 1-6, and a d20 ranges 1-20. d20 is popular in RPGs because rolling high is exciting and the odds feel uncertain. d6 is standard for board games and craps due to familiarity. Multi-dice rolls (like 2d6) create bell-curve distributions where middle values are more likely. Designers choose dice based on desired game balance—more sides increase variance and excitement, fewer sides make outcomes more predictable.",
    },
    {
      question: "How do I know if a physical die is fair?",
      answer:
        "Roll it many times (at least 100-200 rolls) and record results. A fair die shows each face appearing roughly equally (about 16.67% for d6). Compare actual percentages to expected percentages. A chi-squared test can measure bias statistically. If one face appears significantly more often (e.g., 20%+ instead of 16.67%), the die is likely biased. Weighted dice are used in cheating and are illegal in casinos. Always use casino-grade dice or proven fair dice in games where money is at stake.",
    },
    {
      question: "What is the difference between rolling with and without replacement?",
      answer:
        "Rolling without replacement means once a die shows a value, it's removed (impossible with single die rolls, but applies in drawing cards or balls from an urn). Rolling with replacement means each roll is independent with the same probability each time. Dice rolls are inherently with replacement—rolling a 6 doesn't make the next 6 less likely. This is why the gambler's fallacy is a common mistake: past rolls don't affect future rolls. Each roll of a fair die has the same 1/6 probability regardless of previous results.",
    },
  ],
  dateModified: "2026-04-10",
});
