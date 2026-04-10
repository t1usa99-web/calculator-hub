import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { ELECTRIC_FIELD_FAQS } from "@/lib/faq-physics-advanced";

export default function ElectricFieldCalculator() {
  const [charge, setCharge] = useState(1e-6);
  const [distance, setDistance] = useState(1);

  const k = 8.9875e9;
  const electricField = (k * charge) / (distance * distance);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Electric Field"
        value={`${formatNumber(electricField, 2)} V/m`}
        highlight={true}
      />
      <ResultCard
        label="Field (Scientific)"
        value={`${electricField.toExponential(3)} V/m`}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Electric Field and Field Lines</h3>
      <p>
        An electric field is the region around a charge where an electric force acts on other charges. It is defined as force per unit charge: <strong>E = F / q</strong> or equivalently <strong>E = kQ / r²</strong>, where E is field strength in volts per meter (V/m), k is Coulomb's constant (8.9875 × 10⁹ N⋅m²/C²), Q is the source charge in coulombs (C), and r is distance in meters (m). The field is a vector quantity pointing radially outward from positive charges and inward toward negative charges. Unlike Coulomb's Law, which calculates force between two charges, the electric field concept describes the environment around a single charge independent of test charges. If a test charge q is placed in a field E, it experiences force F = qE. The SI unit V/m is equivalent to N/C (newtons per coulomb), emphasizing the interpretation of field as force per charge. Electric field is fundamental to understanding circuits, capacitors, and atomic interactions.
      </p>
      <p>
        <strong>Field Lines and Superposition:</strong> Electric field lines are imaginary curves tangent to the field direction at each point. They originate from positive charges and terminate on negative charges. The density of field lines represents field magnitude—closely spaced lines indicate stronger field. For a point charge, field lines radiate radially; between two opposite charges (dipole), they curve from positive to negative. Multiple charges create fields that superpose linearly: the total field at any point is the vector sum of fields from all charges. Between two identical positive charges, a null point (zero field) exists on the line joining them, at the midpoint. Field magnitude obeys the inverse-square law: doubling distance reduces field strength to one-quarter. This makes field calculations predictable for symmetrical charge distributions like uniform spheres or parallel plates (which create constant field between them).
      </p>
      <p>
        <strong>Worked Example:</strong> A charge Q = 5 × 10⁻⁶ C creates an electric field. At r = 2 m: E = (8.9875 × 10⁹) × (5 × 10⁻⁶) / (2²) = 44,937.5 / 4 ≈ 11,234 V/m. If a test charge q = 2 × 10⁻⁷ C is placed at this point, it experiences force F = qE = (2 × 10⁻⁷) × 11,234 ≈ 2.25 × 10⁻³ N (2.25 millinewtons). At r = 1 m, the same source charge produces E = 44,937.5 V/m (four times stronger), and the test force is F = 8.99 × 10⁻³ N—confirming the inverse-square relationship.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Uniform electric fields between parallel capacitor plates accelerate electrons in oscilloscopes and old TV tubes. Nonuniform fields focus particle beams in particle accelerators. Lightning involves enormous field strengths (~ 3 × 10⁶ V/m) that ionize air. Field shaping controls current flow in semiconductors and determines device performance. Electrostatic lenses use field patterns to focus charged particles. Sensor design exploits field sensitivity in capacitive touchscreens and proximity sensors. Understanding field patterns guides antenna design and electromagnetic shielding strategies.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing electric field with electric potential. Field E is force per charge (V/m), while potential V is energy per charge (volts). Relationship: E = -dV/dr (field is the potential gradient). Error 2: Forgetting the vector nature of fields. Fields add as vectors, not scalars. Two equal field magnitudes at 90 degrees yield a resultant of √2 times larger, not 2 times. Error 3: Using kilocoulombs when the formula expects coulombs. Convert: 1 kC = 1,000 C. Error 4: Applying point-charge formula to extended objects. For extended charge distributions, use Gauss's Law or integration instead. Error 5: Ignoring the medium's effect. In water or other dielectrics, the relative permittivity reduces the field by a factor (typically 2–80), so E = kQ / (εᵣr²) where εᵣ is relative permittivity.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Electric Field Calculator"
      description="Calculate electric field from charge and distance"
      slug="electric-field-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="charge"
          label="Charge"
          value={charge}
          onChange={setCharge}
          suffix="C"
          step={1e-7}
        />
        <InputField
          id="distance"
          label="Distance"
          value={distance}
          onChange={setDistance}
          suffix="m"
          min={0.001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "electric-field-calculator",
  title: "Electric Field Calculator",
  shortTitle: "Electric Field",
  description: "Calculate electric field from charge and distance",
  category: "physics",
  icon: "🌩️",
  keywords: ["electric field", "charge", "distance", "voltage"],
  component: ElectricFieldCalculator,
  faqs: ELECTRIC_FIELD_FAQS,
  dateModified: "2026-04-09",
});
