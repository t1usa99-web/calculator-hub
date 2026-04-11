import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import SelectField from "@/components/SelectField";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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
