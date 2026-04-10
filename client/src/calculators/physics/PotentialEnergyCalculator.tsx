import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { POTENTIAL_ENERGY_FAQS } from "@/lib/faq-physics-mechanics";

export default function PotentialEnergyCalculator() {
  const [mass, setMass] = useState(10);
  const [height, setHeight] = useState(100);
  const [g, setG] = useState(9.81);

  const pe = mass * g * height;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Gravitational Potential Energy"
        value={`${formatNumber(pe, 2)} J`}
        highlight={true}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Gravitational Potential Energy</h3>
      <p>
        Gravitational potential energy is the energy an object possesses due to its position relative to a reference level (usually the ground). The formula is <strong>PE = m × g × h</strong>, where m is mass (kg), g ≈ 9.81 m/s² is gravitational acceleration, and h is height above the reference level (m). Energy is measured in Joules (J). Example: a 50 kg object at 20 m height has PE = 50 × 9.81 × 20 ≈ 9,810 J. The reference level is arbitrary—choosing ground level, table surface, or any other level is valid. PE is relative; only changes in PE matter for most applications.
      </p>
      <p>
        <strong>Energy Conversion:</strong> Potential energy converts to kinetic energy when an object falls. As height decreases, PE decreases and KE increases; total mechanical energy is conserved (ignoring air resistance): <strong>KE + PE = constant</strong>. An object dropped from 100 m has initial PE ≈ 490,500 J (for 50 kg) and KE = 0. Just before hitting the ground, PE = 0 and KE ≈ 490,500 J, corresponding to impact velocity ≈ 44.3 m/s. This energy must be dissipated upon impact—through deformation, heat, sound, and other mechanisms.
      </p>
      <p>
        <strong>Work and Potential Energy:</strong> Work done against gravity equals change in potential energy: <strong>W = ΔPE = m × g × Δh</strong>. Lifting a 75 kg person up 2 meters requires work = 75 × 9.81 × 2 ≈ 1,472 J. The path taken doesn't matter (stairs, ramp, or elevator); only the height change determines work. This principle helps explain exercise (climbing stairs uses more energy than walking), transportation (elevators require more energy going up), and machinery design (pumps lifting fluids must overcome gravitational PE).
      </p>
      <p>
        <strong>Practical Applications:</strong> Hydroelectric dams store water at height, using gravitational PE converted to electrical energy. Roller coasters use PE and KE conversion for thrills. Pendulums exchange PE and KE continuously. Trampoline jumpers experience PE at the peak of jump (zero velocity, maximum height) converting to KE going down. Understanding PE helps design safer heights for construction, predict energy needs for lifting, and explain why high falls are dangerous—more PE means more energy to dissipate, resulting in greater damage upon impact.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Potential Energy Calculator"
      description="Calculate gravitational potential energy"
      slug="potential-energy-calculator"
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
          id="height"
          label="Height"
          value={height}
          onChange={setHeight}
          suffix="m"
          min={0}
          step={0.1}
        />
        <InputField
          id="gravity"
          label="Gravity (g)"
          value={g}
          onChange={setG}
          suffix="m/s²"
          min={0.1}
          step={0.01}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "potential-energy-calculator",
  title: "Potential Energy Calculator",
  shortTitle: "Potential Energy",
  description: "Calculate gravitational potential energy at a given height",
  category: "physics",
  icon: "⛰️",
  keywords: ["potential energy", "gravitational energy", "height", "physics"],
  component: PotentialEnergyCalculator,
  faqs: POTENTIAL_ENERGY_FAQS,
  dateModified: "2026-04-09",
});
