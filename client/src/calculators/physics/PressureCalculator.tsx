import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { PRESSURE_FAQS } from "@/lib/faq-physics-mechanics";

export default function PressureCalculator() {
  const [force, setForce] = useState(1000);
  const [area, setArea] = useState(1);

  const pressure = force / area;
  const pressureKpa = pressure / 1000;
  const pressureBar = pressure / 100000;
  const pressureAtm = pressure / 101325;
  const pressurePsi = pressure / 6894.76;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Pressure (Pa)"
        value={`${formatNumber(pressure, 2)} Pa`}
        highlight={true}
      />
      <ResultCard label="In kPa" value={`${formatNumber(pressureKpa, 4)} kPa`} />
      <ResultCard label="In bar" value={`${formatNumber(pressureBar, 4)} bar`} />
      <ResultCard label="In atm" value={`${formatNumber(pressureAtm, 4)} atm`} />
      <ResultCard label="In psi" value={`${formatNumber(pressurePsi, 4)} psi`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Pressure in Physics</h3>
      <p>
        Pressure is force per unit area: <strong>P = F / A</strong>, measured in Pascals (Pa), where 1 Pa = 1 N/m². Example: a 1000 N force distributed over 2 m² exerts pressure = 1000 / 2 = 500 Pa. The same 1000 N force over 0.1 m² exerts 10,000 Pa (100 times higher pressure). This illustrates why a thumbtack punctures skin easily (force concentrated on tiny point) while a full hand doesn't (same force distributed over large area). Pressure = force / area means smaller area dramatically increases pressure for the same force.
      </p>
      <p>
        <strong>Common Pressure Units:</strong> Different fields use different units. <strong>Pascal (Pa):</strong> SI unit, 1 Pa = 1 N/m². <strong>Kilopascal (kPa):</strong> 1,000 Pa, used in weather and engineering. <strong>Bar:</strong> approximately 100,000 Pa, used in fluid systems. <strong>Atmosphere (atm):</strong> sea-level air pressure ≈ 101,325 Pa. <strong>PSI (pounds per square inch):</strong> ≈ 6,895 Pa, used in US (tire pressure, hydraulics). Converting between units allows communication across industries. Example: tire pressure 32 psi ≈ 220 kPa ≈ 2.2 bar ≈ 0.22 atm (in different unit systems).
      </p>
      <p>
        <strong>Pressure and Depth in Fluids:</strong> Pressure increases with depth in fluids: <strong>P = P₀ + ρgh</strong>, where P₀ is atmospheric pressure, ρ is fluid density, g is gravity, and h is depth. In water (ρ ≈ 1000 kg/m³), pressure increases about 1 atm (101,325 Pa) per 10 meters depth. At 40 m depth: P ≈ 1 atm (surface) + 4 atm (water) = 5 atm ≈ 500 kPa. Deep-sea creatures have adapted to crushing pressures; submarines must withstand enormous forces. Understanding fluid pressure is critical for diving safety, submarine design, and hydraulic systems.
      </p>
      <p>
        <strong>Practical Applications:</strong> Pressure principles apply everywhere. Hydraulic systems use incompressible fluid to multiply force: small pressure on small area creates same pressure on large area, producing large force. Breathing involves pressure differences (lung pressure lower than atmosphere draws air in). Tire pressure maintains vehicle suspension. Water pressure drives dams and hydroelectric plants. Medical applications (blood pressure, anesthesia) depend on pressure understanding. Cooking uses pressure cookers to raise boiling point. Understanding pressure helps design safe systems, predict fluid behavior, and explain everyday phenomena.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pressure Calculator"
      description="Calculate pressure from force and area with multiple units"
      slug="pressure-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="force"
          label="Force"
          value={force}
          onChange={setForce}
          suffix="N"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="area"
          label="Area"
          value={area}
          onChange={setArea}
          suffix="m²"
          min={0.001}
          step={0.01}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "pressure-calculator",
  title: "Pressure Calculator",
  shortTitle: "Pressure",
  description: "Calculate pressure and convert between pressure units",
  category: "physics",
  icon: "🌡️",
  keywords: ["pressure", "force", "area", "units"],
  component: PressureCalculator,
  faqs: PRESSURE_FAQS,
  dateModified: "2026-04-09",
});
