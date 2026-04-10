import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { RANDOM_NUMBER_FAQS } from "@/lib/faq-other";

export default function RandomNumberCalculator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [quantity, setQuantity] = useState(10);
  const [allowDuplicates, setAllowDuplicates] = useState("no");
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  // Generate random numbers on load and when inputs change
  useEffect(() => {
    generateNumbers();
  }, [min, max, quantity, allowDuplicates]);

  const generateNumbers = () => {
    const numbers: number[] = [];
    const range = max - min + 1;

    if (allowDuplicates === "yes") {
      // With duplicates allowed
      for (let i = 0; i < quantity; i++) {
        numbers.push(Math.floor(Math.random() * range) + min);
      }
    } else {
      // Without duplicates
      const available = Array.from({ length: range }, (_, i) => i + min);
      const qty = Math.min(quantity, available.length);
      for (let i = 0; i < qty; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        numbers.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }
    }

    setRandomNumbers(numbers);
  };

  // Calculate statistics
  const sum = randomNumbers.reduce((a, b) => a + b, 0);
  const average = randomNumbers.length > 0 ? sum / randomNumbers.length : 0;
  const min_value = randomNumbers.length > 0 ? Math.min(...randomNumbers) : 0;
  const max_value = randomNumbers.length > 0 ? Math.max(...randomNumbers) : 0;

  // Create frequency distribution
  const frequencyMap: Record<number, number> = {};
  randomNumbers.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  const distributionData = Object.entries(frequencyMap)
    .map(([num, freq]) => ({
      number: num,
      frequency: freq,
    }))
    .sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Numbers Generated"
        value={formatNumber(randomNumbers.length)}
        highlight
      />
      <ResultCard
        label="Sum"
        value={formatNumber(sum)}
      />
      <ResultCard
        label="Average"
        value={average.toFixed(2)}
        highlight
      />
      <ResultCard
        label="Min Value"
        value={formatNumber(min_value)}
      />
      <ResultCard
        label="Max Value"
        value={formatNumber(max_value)}
        highlight
      />
      <ResultCard
        label="Range"
        value={formatNumber(max_value - min_value)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={distributionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Bar dataKey="frequency" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A random number generator creates unpredictable sequences of numbers for various purposes. Random number generation is fundamental in statistics, gaming, cryptography, scientific simulations, and lottery systems. Computer-based random number generators are essential for applications requiring unbiased number selection. Understanding random number generation helps with probability theory, statistical sampling, and understanding concepts like randomness and distribution. True randomness is surprisingly difficult to achieve in deterministic computer systems, which is why cryptographic random number generators are designed with special care.
      </p>

      <p>
        <strong>With and Without Duplicates:</strong> Random numbers generated with duplicates allowed means the same number can appear multiple times in the sequence. This simulates drawing with replacement, like rolling a die repeatedly—any number could appear on consecutive rolls. Generating without duplicates, like drawing from a deck of cards, ensures each number appears at most once. The method you choose depends on your application: dice rolls allow duplicates, but drawing raffle tickets don't. Without duplicates, you can generate at most as many numbers as exist in your range. Understanding this distinction is crucial for accurate probability calculations and simulations.
      </p>

      <p>
        <strong>Applications in Real Life:</strong> Random numbers appear everywhere. Lotteries use randomization to ensure fairness. Quality control in manufacturing uses random sampling to test products. Researchers use random number generation to select representative samples from populations. Online gaming and gambling platforms rely on random number generators for fair outcomes. Statistical software uses random numbers for simulations and Monte Carlo methods. Encryption algorithms depend on cryptographically secure random number generation. Even social networks use randomization for algorithm testing (A/B testing). Understanding randomness helps you appreciate the fairness of systems and the rigor of statistical research.
      </p>

      <p>
        <strong>Statistics and Distribution:</strong> When you generate many random numbers, they should be roughly evenly distributed across your range. The frequency chart shows how often each number appears—a truly random sequence should show similar frequencies for each number. This is important for verifying randomness quality. Statistical methods rely on this uniformity assumption. Real random number generators are tested extensively to ensure they don't have patterns or biases. Deviations from uniform distribution might indicate a problem with the generator or suggest biases in your data, both important considerations for statistical analysis and decision-making.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Random Number Generator"
      description="Generate random numbers with customizable range and options"
      slug="random-number-generator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="min"
          label="Minimum Value"
          value={min}
          onChange={setMin}
          type="number"
          step={1}
        />
        <InputField
          id="max"
          label="Maximum Value"
          value={max}
          onChange={setMax}
          type="number"
          step={1}
          min={min}
        />
        <InputField
          id="quantity"
          label="Quantity of Numbers"
          value={quantity}
          onChange={setQuantity}
          type="number"
          step={1}
          min={1}
          max={1000}
        />
        <SelectField
          id="allow-duplicates"
          label="Allow Duplicates"
          value={allowDuplicates}
          onChange={setAllowDuplicates}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
        <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
          <p className="text-sm text-gray-900 font-semibold mb-3">Generated Numbers:</p>
          <div className="text-sm text-gray-700 space-y-2 max-h-48 overflow-y-auto">
            {randomNumbers.map((num, idx) => (
              <span key={idx} className="inline-block mr-2 mb-2 px-2 py-1 bg-blue-100 text-blue-900 rounded">
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RandomNumberCalculator,
  slug: "random-number-generator",
  title: "Random Number Generator",
  shortTitle: "Random Numbers",
  description: "Generate random numbers with customizable range and distribution",
  category: "other",
  icon: "🎲",
  keywords: ["random number generator", "random number", "lottery", "random selection"],
  popular: false,
  faqs: RANDOM_NUMBER_FAQS,
  dateModified: "2026-04-09",
});
