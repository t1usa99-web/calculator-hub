import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { MOMENTUM_FAQS } from "@/lib/faq-physics-mechanics";

export default function MomentumCalculator() {
  const [mass, setMass] = useState(5);
  const [velocity, setVelocity] = useState(20);
  const [timeInterval, setTimeInterval] = useState(0);

  const momentum = mass * velocity;
  const impulse = timeInterval > 0 ? momentum * timeInterval : 0;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Momentum"
        value={`${formatNumber(momentum, 2)} kg·m/s`}
        highlight={true}
      />
      {timeInterval > 0 && (
        <ResultCard
          label="Impulse"
          value={`${formatNumber(impulse, 2)} N·s`}
          highlight={true}
        />
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Momentum and Impulse in Physics</h3>
      <p>
        Momentum is the product of mass and velocity: <strong>p = m × v</strong>, measured in kg⋅m/s. It represents how much "oomph" an object has due to its motion. Example: a 1000 kg car at 10 m/s has momentum = 10,000 kg⋅m/s. A 100 kg person at 10 m/s has momentum = 1,000 kg⋅m/s (ten times less, despite same velocity). Momentum is a vector; direction matters. Momentum is conserved in collisions: total momentum before equals total momentum after (if no external forces). A moving object carries momentum, and stopping it requires removing that momentum via forces over time.
      </p>
      <p>
        <strong>Impulse and Force:</strong> Impulse is the change in momentum produced by a force: <strong>Impulse = F × Δt = Δp</strong>. Example: a 100 N force applied for 5 seconds produces impulse = 500 N⋅s = 500 kg⋅m/s of momentum change. The same momentum change over 10 seconds requires only 50 N (distributed over longer time). This is why airbags and crumple zones work—they extend collision time, reducing peak force while maintaining the same total impulse. A baseball catcher extends arm motion to increase collision time, reducing force on the hand.
      </p>
      <p>
        <strong>Conservation of Momentum:</strong> In an isolated system (no external forces), momentum is conserved. In a collision between two cars (inelastic: stick together): (m₁v₁ + m₂v₂) before = (m₁ + m₂)vf after. A 1500 kg car at 10 m/s hitting a 1000 kg car at rest: (1500 × 10 + 1000 × 0) = 2500 × vf → vf = 6 m/s. The final velocity depends on masses and initial velocities, not the impact force. This principle predicts collision outcomes regardless of collision complexity, making it invaluable for accident reconstruction and physics problems.
      </p>
      <p>
        <strong>Practical Applications:</strong> Momentum principles apply to vehicle safety (airbags extend time to reduce force), sports (catching and throwing involve momentum transfer), and space physics (rockets use momentum conservation). Athletes understand momentum intuitively: a heavier object at the same speed carries more momentum and is harder to stop. Designers use momentum conservation to predict crash outcomes and design protective systems. Understanding momentum helps explain everyday motion and design safer, more efficient systems.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Momentum Calculator"
      description="Calculate momentum and impulse"
      slug="momentum-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="mass"
          label="Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="velocity"
          label="Velocity"
          value={velocity}
          onChange={setVelocity}
          suffix="m/s"
          step={0.1}
        />
        <InputField
          id="time-interval"
          label="Time Interval (for Impulse)"
          value={timeInterval}
          onChange={setTimeInterval}
          suffix="s"
          min={0}
          step={0.01}
          hint="Leave at 0 to skip impulse calculation"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "momentum-calculator",
  title: "Momentum Calculator",
  shortTitle: "Momentum",
  description: "Calculate momentum and impulse from mass and velocity",
  category: "physics",
  icon: "🎱",
  keywords: ["momentum", "impulse", "physics", "collision"],
  component: MomentumCalculator,
  faqs: MOMENTUM_FAQS,
  dateModified: "2026-04-09",
});
