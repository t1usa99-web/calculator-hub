import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { RELATIVISTIC_KE_FAQS } from "@/lib/faq-physics-advanced";

export default function RelativisticKineticEnergyCalculator() {
  const [mass, setMass] = useState(1);
  const [velocityFraction, setVelocityFraction] = useState(0.5);

  const c = 299792458;
  const velocity = velocityFraction * c;

  const gamma = 1 / Math.sqrt(1 - (velocityFraction * velocityFraction));
  const relativisticKe = (gamma - 1) * mass * c * c;
  const newtonianKe = 0.5 * mass * velocity * velocity;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Relativistic KE"
        value={`${relativisticKe.toExponential(3)} J`}
        highlight={true}
      />
      <ResultCard
        label="Newtonian KE"
        value={`${newtonianKe.toExponential(3)} J`}
      />
      <ResultCard label="Lorentz Factor (γ)" value={`${formatNumber(gamma, 4)}`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Relativistic Kinetic Energy</h3>
      <p>
        At everyday speeds, kinetic energy is KE = ½mv². However, as objects approach the speed of light (3 × 10⁸ m/s), this formula breaks down. Special relativity gives the correct formula: <strong>KE = (γ − 1)mc²</strong>, where m is rest mass, c is light speed, and γ (gamma, the Lorentz factor) is γ = 1 / √(1 − v²/c²). At low speeds (v {'<<'} c), γ {'≈'} 1, and KE {'≈'} ½mv² (Newtonian limit). As v approaches c, γ → ∞, and kinetic energy diverges—no massive object can reach light speed. This formula reveals Einstein's insight: rest energy E₀ = mc² is equivalent to kinetic energy. The total energy of a moving object is E = γmc², combining rest energy and kinetic energy. Relativistic mechanics is essential for particle accelerators, cosmic rays, atomic nuclei, and compact objects near black holes.
      </p>
      <p>
        <strong>Understanding the Lorentz Factor and Speed Dependence:</strong> At v = 0, γ = 1. At v = 0.1c, γ ≈ 1.005 (5% correction, barely noticeable). At v = 0.5c, γ ≈ 1.155 (15% increase, relativistic effects matter). At v = 0.9c, γ ≈ 2.29 (KE more than doubles the Newtonian value). At v = 0.99c, γ ≈ 7.1 (seven times larger than Newtonian). At v = 0.999c, γ ≈ 22.4 (22 times larger). The Lorentz factor accounts for time dilation and length contraction: moving clocks run slow and moving objects contract in the direction of motion. Particles in accelerators near light speed require enormous energy to accelerate slightly faster—a 10 GeV electron at 0.99999999c has γ ≈ 100,000, making further acceleration extremely energy-intensive. This is why the Large Hadron Collider requires petawatt-scale power.
      </p>
      <p>
        <strong>Worked Example:</strong> A 1 kg object moving at v = 0.6c. First, γ = 1 / √(1 − 0.6²) = 1 / √(1 − 0.36) = 1 / √0.64 = 1 / 0.8 = 1.25. Relativistic KE = (1.25 − 1) × 1 × (3 × 10⁸)² = 0.25 × 9 × 10¹⁶ = 2.25 × 10¹⁶ J. Newtonian KE = 0.5 × 1 × (0.6 × 3 × 10⁸)² = 0.5 × (1.8 × 10⁸)² = 1.62 × 10¹⁶ J. The relativistic result is 39% higher. Rest energy E₀ = 1 × (3 × 10⁸)² = 9 × 10¹⁶ J. Total energy E = 1.25 × 9 × 10¹⁶ = 1.125 × 10¹⁷ J (rest energy plus kinetic).
      </p>
      <p>
        <strong>Real-World Applications:</strong> Particle accelerators (linear accelerators, cyclotrons, synchrotrons) use relativistic kinematics to design magnet fields and predict collision products. Cosmic-ray muons traveling near light speed live much longer due to time dilation—they reach Earth's surface when they should decay in the atmosphere. Positron emission tomography (PET) scans detect gamma rays from electron-positron annihilation, converting rest mass to energy via E = mc². Astrophysics near neutron stars and black holes requires relativistic calculations. Synchrotron radiation (bremsstrahlung) from relativistic electrons is used in X-ray sources. GPS satellites must account for relativistic effects in their atomic clocks for accuracy.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Using Newtonian KE = ½mv² at relativistic speeds. This underestimates energy dramatically at high speeds. Always check: if v {'>'} 0.1c, use relativistic formula. Error 2: Forgetting c in the formula. It's (γ − 1)mc² not (γ − 1)m or (γ − 1)v². Error 3: Confusing rest mass m with relativistic mass (m_rel = γm). Modern physics uses rest mass exclusively; relativistic mass is outdated. Error 4: Using velocity as a decimal instead of as a fraction of c. If v = 0.8c, use v/c = 0.8 in the formula, not v = 0.8 m/s. Error 5: Applying the formula to speeds exceeding c. The formula (and physics) forbids v {'≥'} c for massive objects. Tachyons (hypothetical faster-than-light particles) would require imaginary mass and violate causality.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Relativistic Kinetic Energy Calculator"
      description="Calculate kinetic energy at relativistic speeds"
      slug="relativistic-kinetic-energy-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="mass"
          label="Rest Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="velocity-fraction"
          label="Velocity as Fraction of c"
          value={velocityFraction}
          onChange={setVelocityFraction}
          suffix="c"
          min={0}
          max={0.999}
          step={0.01}
          hint="0 = stationary, 1 = speed of light"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "relativistic-kinetic-energy-calculator",
  title: "Relativistic Kinetic Energy Calculator",
  shortTitle: "Relativistic KE",
  description: "Calculate kinetic energy at relativistic speeds using E = (γ-1)mc²",
  category: "physics",
  icon: "🚀",
  keywords: ["relativistic", "kinetic energy", "special relativity", "Einstein"],
  component: RelativisticKineticEnergyCalculator,
  faqs: RELATIVISTIC_KE_FAQS,
  dateModified: "2026-04-09",
});
