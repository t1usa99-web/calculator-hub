import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { THERMAL_EXPANSION_FAQS } from "@/lib/faq-physics-advanced";

export default function ThermalExpansionCalculator() {
  const [length, setLength] = useState(1);
  const [tempChange, setTempChange] = useState(100);
  const [coefficient, setCoefficient] = useState(1.2e-5);

  const deltaL = coefficient * length * tempChange;
  const newLength = length + deltaL;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Length Change (ΔL)"
        value={`${deltaL.toExponential(3)} m`}
        highlight={true}
      />
      <ResultCard label="New Length" value={`${formatNumber(newLength, 6)} m`} highlight={true} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Thermal Expansion and Material Behavior</h3>
      <p>
        Materials expand when heated due to increased atomic motion. The linear thermal expansion formula is <strong>ΔL = α L₀ ΔT</strong>, where ΔL is length change in meters (m), α is the linear coefficient of thermal expansion in 1/kelvin (1/K), L₀ is initial length in meters, and ΔT is temperature change in kelvins (K). Typical values for α range from 10⁻⁶ to 10⁻⁵ 1/K: steel ~1.2 × 10⁻⁵ 1/K, aluminum ~2.3 × 10⁻⁵ 1/K, copper ~1.7 × 10⁻⁵ 1/K. The volumetric expansion coefficient γ is approximately 3α (for isotropic materials). Example: a 1-meter steel rod heated by 100 K expands by ΔL = (1.2 × 10⁻⁵) × 1 × 100 = 1.2 × 10⁻³ m = 1.2 mm. This small expansion is crucial in engineering—railroad tracks, bridges, and pipelines must have expansion joints to accommodate thermal changes. Ignoring thermal expansion causes buckling, warping, and failure.
      </p>
      <p>
        <strong>Understanding Thermal Stress and Design Constraints:</strong> Thermal expansion creates internal stress if expansion is constrained (e.g., a rod fastened at both ends). Thermal stress σ = E × α × ΔT, where E is Young's modulus in pascals (Pa). Example: a constrained steel rod at 100 K change experiences stress σ = (200 × 10⁹) × (1.2 × 10⁻⁵) × 100 = 240 × 10⁶ Pa = 240 MPa. Steel's yield strength is ~250 MPa, so this rod is near breaking point. Bridges include expansion joints and bearings allowing movement. Bimetallic thermostats use two metals with different α values: heating causes unequal expansion, bending the strip to activate a switch. Precision instruments (telescopes, lasers, electron microscopes) use materials with low α (Invar alloy, α ~ 1.2 × 10⁻⁶ 1/K) to maintain alignment despite temperature variation. Aircraft fuselages can flex significantly due to thermal gradients at high speeds, requiring design margins.
      </p>
      <p>
        <strong>Worked Example:</strong> A concrete bridge is 100 meters long at 15°C. Concrete has α ≈ 1.2 × 10⁻⁵ 1/K. In summer at 45°C, ΔT = 30 K, and expansion is ΔL = (1.2 × 10⁻⁵) × 100 × 30 = 0.036 m = 3.6 cm. In winter at −5°C, ΔT = −20 K, and contraction is ΔL = (1.2 × 10⁻⁵) × 100 × (−20) = −0.024 m = −2.4 cm. Total movement is 6 cm between extremes. Expansion joints allow this without damage. A railway track of 100 meters with steel (α = 1.2 × 10⁻⁵ 1/K) undergoes similar expansion, requiring rails to be laid with gaps and expansion plates.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Paved roads and bridges have expansion joints every 30–50 meters to accommodate thermal movement without cracking. Power transmission lines sag more in summer heat due to thermal expansion and contraction. Aircraft experience temperature swings from air friction heating and altitude; fuselage gaps must accommodate this. Dental fillings and crowns must have similar thermal expansion to tooth material to prevent gaps. Microelectronics (chips) suffer from thermal stress due to different expansion coefficients of silicon, copper, and insulating layers—underfill materials are designed to match. Precision optical instruments use low-expansion materials (Zerodur, Invar) to maintain focus. Thermometers rely on liquid expansion (mercury or alcohol) linearly with temperature—the coefficient is known and reproducible.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing linear and volumetric expansion. Linear expansion ΔL = αL₀ΔT applies to length; volumetric ΔV = γV₀ΔT applies to volume. For isotropic materials, γ ≈ 3α, but don't mix them. Error 2: Using Celsius temperature change when the formula requires kelvins. However, for ΔT (changes), Celsius and Kelvin are equivalent—a 1°C change is 1 K change. Absolute temperatures must be in Kelvin. Error 3: Forgetting that expansion creates stress if constrained. A free rod expands harmlessly; a fastened rod can buckle or break. Error 4: Applying the linear formula to large temperature changes. Technically α varies slightly with temperature; for large ΔT, integrate or use tabulated values. Error 5: Ignoring anisotropic expansion. Some materials (wood, crystals) expand differently along different directions—this can cause warping and internal stress.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Thermal Expansion Calculator"
      description="Calculate thermal expansion of materials"
      slug="thermal-expansion-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="original-length"
          label="Original Length"
          value={length}
          onChange={setLength}
          suffix="m"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="temp-change"
          label="Temperature Change"
          value={tempChange}
          onChange={setTempChange}
          suffix="K"
          step={1}
        />
        <InputField
          id="coefficient"
          label="Coefficient of Expansion"
          value={coefficient}
          onChange={setCoefficient}
          suffix="1/K"
          step={1e-6}
          hint="Steel: 1.2e-5, Aluminum: 2.3e-5, Copper: 1.7e-5"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "thermal-expansion-calculator",
  title: "Thermal Expansion Calculator",
  shortTitle: "Thermal Expansion",
  description: "Calculate thermal expansion of materials with temperature change",
  category: "physics",
  icon: "📏",
  keywords: ["thermal expansion", "temperature", "coefficient", "material"],
  component: ThermalExpansionCalculator,
  faqs: THERMAL_EXPANSION_FAQS,
  dateModified: "2026-04-09",
});
