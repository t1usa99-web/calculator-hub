import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CoulombsLawCalculator() {
  const [charge1, setCharge1] = useState(1e-6);
  const [charge2, setCharge2] = useState(1e-6);
  const [distance, setDistance] = useState(1);

  const k = 8.9875e9;
  const force = (k * charge1 * charge2) / (distance * distance);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Force"
        value={`${formatNumber(force, 4)} N`}
        highlight={true}
      />
      <ResultCard
        label="Force (Scientific)"
        value={`${force.toExponential(3)} N`}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Coulomb's Law and Electrostatic Force</h3>
      <p>
        Coulomb's Law describes the electrostatic force between two stationary point charges. The law states: <strong>F = k × q₁ × q₂ / r²</strong>, where F is force in newtons (N), q₁ and q₂ are charges in coulombs (C), r is separation distance in meters (m), and k is Coulomb's constant (8.9875 × 10⁹ N⋅m²/C²). Like charges (both positive or both negative) repel; opposite charges attract. The force follows an inverse-square law—doubling distance reduces force to one-quarter. This relationship mirrors gravity's inverse-square law, but electromagnetic force is vastly stronger: the electrostatic repulsion between two electrons at 1 meter exceeds their gravitational attraction by a factor of 10⁴². Coulomb's Law is foundational to understanding atomic structure, chemical bonding, and all classical electromagnetism. The principle of superposition applies: the total force on a charge is the vector sum of forces from all other charges.
      </p>
      <p>
        <strong>Understanding the Law:</strong> The constant k = 8.9875 × 10⁹ N⋅m²/C² (sometimes written as 1/(4πε₀)) reflects the geometry of 3D space and the permittivity of free space. The inverse-square dependence on r² means force falls off rapidly—at 10 meters, force is 1% of its 1-meter value. The product q₁ × q₂ shows charge magnitudes are multiplied: larger charges produce stronger forces. For two charges of the same sign (both positive or both negative), the force is repulsive (positive sign). For opposite signs, it is attractive (negative sign, indicating direction toward each other). In practice, charges are distributed, not point-like, so Coulomb's Law applies to point charges or to spherically symmetric charge distributions. The SI unit coulomb (C) is enormous—a 1 C charge is rare. Most real charges are picocoulombs (pC = 10⁻¹² C) to microcoulombs (μC = 10⁻⁶ C).
      </p>
      <p>
        <strong>Worked Example:</strong> Two charges, q₁ = 2 × 10⁻⁶ C and q₂ = 3 × 10⁻⁶ C, are separated by r = 0.5 m. The force is F = (8.9875 × 10⁹) × (2 × 10⁻⁶) × (3 × 10⁻⁶) / (0.5²) = (8.9875 × 10⁹) × (6 × 10⁻¹²) / 0.25 = 53.925 × 10⁻³ / 0.25 = 0.216 N. If the charges are the same sign, this is a repulsive force of 0.216 N (about 22 grams of weight force). Tripling the distance to 1.5 m reduces the force by a factor of 9: F = 0.024 N. This dramatic dependence on distance explains why electrostatic effects diminish rapidly at large scales.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Coulomb's Law is the basis for capacitors, which store charge and create electric fields. Lightning involves enormous charge separation and attracts charges between clouds and ground. Van de Graaff generators use Coulomb repulsion to create high voltages. Molecular bonding and chemical reactions are governed by electrostatic forces between electrons and nuclei. Atoms are stable because attractive Coulomb force between electrons and nucleus is balanced by quantum mechanical effects. Electrostatic actuators, sensors, and MEMS (microelectromechanical systems) exploit Coulomb forces. Electrophoresis, used in DNA analysis, uses Coulomb force to separate charged molecules.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Using incorrect units. Charges must be in coulombs, distance in meters, and k = 8.9875 × 10⁹. If distance is in centimeters, convert first (1 cm = 0.01 m). Error 2: Forgetting the inverse-square law—force is proportional to 1/r², not 1/r. Error 3: Ignoring the sign convention. Like charges repel (positive force), opposite charges attract (negative force). This matters in vector addition when multiple charges are present. Error 4: Confusing Coulomb's Law with electric field. Electric field E = kq/r² (force per unit charge); Coulomb's Law is the force between two charges. Error 5: Applying Coulomb's Law to moving charges—the formula is valid only for stationary charges. Moving charges create magnetic fields that modify the force.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Coulomb's Law Calculator"
      description="Calculate electrostatic force between two charges"
      slug="coulombs-law-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="charge-1"
          label="Charge 1"
          value={charge1}
          onChange={setCharge1}
          suffix="C"
          step={1e-7}
        />
        <InputField
          id="charge-2"
          label="Charge 2"
          value={charge2}
          onChange={setCharge2}
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
