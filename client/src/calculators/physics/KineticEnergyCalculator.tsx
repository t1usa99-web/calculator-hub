import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { KINETIC_ENERGY_FAQS } from "@/lib/faq-physics-mechanics";

export default function KineticEnergyCalculator() {
  const [mass, setMass] = useState(60);
  const [velocity, setVelocity] = useState(10);

  const ke = 0.5 * mass * velocity * velocity;
  const keKJ = ke / 1000;
  const keKcal = ke / 4184;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Kinetic Energy"
        value={`${formatNumber(ke, 2)} J`}
        highlight={true}
      />
      <ResultCard label="In Kilojoules" value={`${formatNumber(keKJ, 4)} kJ`} />
      <ResultCard label="In Kilocalories" value={`${formatNumber(keKcal, 4)} kcal`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Kinetic Energy and Motion</h3>
      <p>
        Kinetic energy is the energy an object possesses due to motion. The formula is <strong>KE = 0.5 × m × v²</strong>, where m is mass (kg) and v is velocity (m/s). Energy is measured in Joules (J), where 1 J = 1 kg⋅m²/s². Example: a 70 kg person running at 5 m/s has kinetic energy = 0.5 × 70 × 25 = 875 J. A critical observation: kinetic energy depends on the square of velocity. Doubling speed quadruples kinetic energy. This is why collisions at high speeds are far more destructive than at low speeds—not because the force is 2× greater, but because the energy is 4× greater.
      </p>
      <p>
        <strong>Work-Energy Theorem:</strong> The work-energy theorem states that work done equals change in kinetic energy: <strong>W = ΔKE = 0.5m(vf² − vi²)</strong>. To accelerate a 1000 kg car from rest (0 m/s) to 20 m/s requires work = 0.5 × 1000 × 400 = 200,000 J. Accelerating from 20 m/s to 40 m/s requires 0.5 × 1000 × (1600 − 400) = 600,000 J—three times more work, illustrating the quadratic relationship. This principle helps engineers design engines, brakes, and safety systems by calculating energy requirements.
      </p>
      <p>
        <strong>Relationship to Stopping Distance:</strong> Kinetic energy and stopping distance are directly related. Braking force dissipates kinetic energy: <strong>F × d = 0.5mv²</strong>, so <strong>d = mv² / (2F)</strong>. A 1500 kg car at 20 m/s with 6000 N braking force stops in: d = 1500 × 400 / 12,000 = 50 meters. At 40 m/s, stopping distance = 200 meters (four times longer). This explains why speed limits near schools and residential areas are lower—the physics of stopping distance makes high speeds inherently unsafe in populated areas.
      </p>
      <p>
        <strong>Energy Conservation:</strong> In many scenarios, kinetic energy converts to other forms: potential energy (going uphill), heat (friction and brakes), or deformation (crashes). A roller coaster converts kinetic energy to potential energy going uphill, then back to kinetic energy going downhill. Without friction, the same speed returns at the same height (energy conservation). Real systems lose energy to friction and air resistance. Understanding kinetic energy allows prediction of motion outcomes, design of efficient systems, and proper safety analysis of high-speed scenarios.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Kinetic Energy Calculator"
      description="Calculate kinetic energy from mass and velocity"
      slug="kinetic-energy-calculator"
      results={results}
      educational={educational}
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
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "kinetic-energy-calculator",
  title: "Kinetic Energy Calculator",
  shortTitle: "Kinetic Energy",
  description: "Calculate kinetic energy of moving objects",
  category: "physics",
  icon: "⚡",
  keywords: ["kinetic energy", "energy", "physics", "motion"],
  component: KineticEnergyCalculator,
  faqs: KINETIC_ENERGY_FAQS,
  dateModified: "2026-04-09",
});
