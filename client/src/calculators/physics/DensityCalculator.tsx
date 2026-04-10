import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { DENSITY_FAQS } from "@/lib/faq-physics-advanced";

export default function DensityCalculator() {
  const [mass, setMass] = useState(1000);
  const [volume, setVolume] = useState(1);

  const density = mass / volume;
  const densityGcm3 = density / 1000;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Density"
        value={`${formatNumber(density, 2)} kg/m³`}
        highlight={true}
      />
      <ResultCard label="In g/cm³" value={`${formatNumber(densityGcm3, 4)} g/cm³`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Density and Buoyancy</h3>
      <p>
        Density is the mass per unit volume: <strong>ρ = m / V</strong>, where ρ (rho) is density, m is mass in kilograms (kg), and V is volume in cubic meters (m³). SI density is kg/m³. Water at 4°C has density 1,000 kg/m³, the reference standard. Materials denser than water sink; less dense float. Gold (19,300 kg/m³) is much denser; cork (~240 kg/m³) is much less dense. The cgs unit g/cm³ is convenient for smaller quantities: 1,000 kg/m³ = 1 g/cm³. Density is an intensive property—it depends on material type, not amount. A cubic meter of lead and a grain of lead have the same density. Density varies with temperature (most materials expand when heated, so density decreases). Density is crucial in identifying materials, predicting buoyancy, calculating masses from volumes, and understanding phase behavior.
      </p>
      <p>
        <strong>Buoyancy and Archimedes' Principle:</strong> An object immersed in a fluid experiences an upward buoyant force equal to the weight of displaced fluid: F_buoy = ρ_fluid × g × V_submerged. If the object's density ρ_object {'<'} ρ_fluid, the object floats. If ρ_object {'>'} ρ_fluid, it sinks. Example: human body density (~1,000–1,050 kg/m³) is close to water, so humans are nearly neutral buoyant (slight sinking). Ice (917 kg/m³) floats in water because it's less dense—a key difference from most substances, which sink when frozen. This property regulates aquatic ecosystems: as surface water cools, it contracts, becomes denser, and sinks. At 4°C, water is densest; below that, density decreases (anomalous expansion), so ice forms at the top and insulates water below, allowing aquatic life to survive winter. Submarines control buoyancy by pumping ballast water in and out.
      </p>
      <p>
        <strong>Worked Example:</strong> An object has mass 7,850 kg and volume 1 m³. Density ρ = 7,850 / 1 = 7,850 kg/m³ ≈ 7.85 g/cm³. This matches steel. Another: a piece of cork weighs 12 kg and occupies 0.05 m³. Density ρ = 12 / 0.05 = 240 kg/m³ ≈ 0.24 g/cm³ (confirmed, cork is about 240 kg/m³). If submerged in water (1,000 kg/m³), buoyant force F = 1,000 × 9.8 × 0.05 = 490 N upward. Cork's weight W = 12 × 9.8 = 117.6 N downward. Net force = 490 − 117.6 = 372.4 N upward, so cork accelerates upward and floats, displacing only m_water / ρ_water = 12 / 1,000 = 0.012 m³ at equilibrium (about 24% submerged).
      </p>
      <p>
        <strong>Real-World Applications:</strong> Materials science relies on density: aluminum (2,700 kg/m³) is lighter than steel (7,850 kg/m³) for equal volume, valuable in aircraft. Mercury (13,600 kg/m³) is liquid, used in barometers and older thermometers. Ice skating exploits density: ice is less dense than water, allowing thin blades to cut through a layer. Ships must displace enough water to support their weight; hull shape maximizes volume (low density overall) while material is high-density steel. Petroleum exploration uses density contrasts (oil vs. rock) in seismic surveys. Purification: salt crystallizes at different density than water, allowing separation. Food science uses density to classify ingredients and predict mixing behavior (oil floats on water due to density).
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing mass with density. Mass is amount of matter (kg); density is mass per volume (kg/m³). A large, low-density object (foam) can have less mass than a small, high-density object (lead). Error 2: Unit conversion errors. Water is 1,000 kg/m³ = 1 g/cm³. Iron is 7,874 kg/m³ ≈ 7.874 g/cm³. If confused, use the water standard: iron is about 7.9 times denser than water. Error 3: Ignoring temperature dependence. Water at 20°C is 998 kg/m³, not exactly 1,000. For precision work, use tables. Error 4: Applying solid density to gases. Gas density depends on pressure and temperature (ideal gas law ρ = PM/RT). Error 5: Assuming density applies to mixtures. A mixture's density is a weighted average, not simple arithmetic. A 50-50 mixture of oil and water by mass has density between them but depends on mixing (not perfectly additive if there's volume change).
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Density Calculator"
      description="Calculate density from mass and volume"
      slug="density-calculator"
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
          step={10}
        />
        <InputField
          id="volume"
          label="Volume"
          value={volume}
          onChange={setVolume}
          suffix="m³"
          min={0.0001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "density-calculator",
  title: "Density Calculator",
  shortTitle: "Density",
  description: "Calculate density from mass and volume",
  category: "physics",
  icon: "⚖️",
  keywords: ["density", "mass", "volume", "material"],
  component: DensityCalculator,
  faqs: DENSITY_FAQS,
  dateModified: "2026-04-09",
});
