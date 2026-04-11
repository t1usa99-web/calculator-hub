import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function GravitationalForceCalculator() {
  const [mass1, setMass1] = useState(5.972e24);
  const [mass2, setMass2] = useState(1000);
  const [distance, setDistance] = useState(6371000);

  const G = 6.674e-11;
  const force = (G * mass1 * mass2) / (distance * distance);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Gravitational Force"
        value={`${formatNumber(force, 2)} N`}
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
      <h3 className="text-lg font-semibold text-gray-900">Newton's Law of Universal Gravitation</h3>
      <p>
        Gravitational force is the attractive force between all objects with mass. Newton's Law of Universal Gravitation states: <strong>F = G(m₁ × m₂)/r²</strong>, where G is the gravitational constant (6.674 × 10⁻¹¹ N⋅m²/kg²), m₁ and m₂ are the masses, and r is the distance between their centers. This law applies everywhere—from everyday objects to planets and stars. Example: Earth (6 × 10²⁴ kg) and a 70 kg person 6,371 km apart experience mutual gravitational force. Earth pulls on the person (what we feel as weight ≈ 686 N), and the person pulls equally on Earth (Newton's third law).
      </p>
      <p>
        <strong>The Inverse-Square Law:</strong> Gravitational force follows an inverse-square relationship with distance. Doubling the distance reduces force to 1/4. Tripling distance reduces force to 1/9. This means gravity's influence extends infinitely but weakens rapidly with distance. The Sun's gravity holds planets in orbit at vast distances. A 1000 kg satellite experiences different gravitational force depending on orbital altitude. At Earth's surface (r = 6,371 km), surface gravity is 9.81 m/s². At geostationary orbit (42,164 km), gravity is only 0.03 m/s², yet strong enough to maintain orbital motion.
      </p>
      <p>
        <strong>Gravity vs. Weight:</strong> Weight is the gravitational force exerted by a celestial body on an object. Your weight on Earth (686 N) differs from your weight on the Moon (117 N) because the Moon's mass is smaller and gravity is weaker. Mass is constant; weight varies by location. Astronauts are "weightless" in orbit not because there's no gravity, but because they're in free fall together with their spacecraft, resulting in zero net apparent force. Understanding this distinction is crucial for physics, space exploration, and practical applications.
      </p>
      <p>
        <strong>Orbital Mechanics:</strong> Gravity provides the centripetal force that keeps planets orbiting stars, moons orbiting planets, and satellites orbiting Earth. For circular orbits: <strong>GM/r² = v²/r</strong>, so orbital velocity <strong>v = √(GM/r)</strong>. Objects closer to a massive body orbit faster than distant objects. This principle explains planetary motion, satellite design, and celestial mechanics. Understanding gravitational force allows us to predict planetary positions, calculate escape velocities, and design spacecraft trajectories.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Gravitational Force Calculator"
      description="Calculate gravitational force between two masses"
      slug="gravitational-force-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="mass-1"
          label="Mass 1"
          value={mass1}
          onChange={setMass1}
          suffix="kg"
          min={0.01}
          step={1e20}
        />
        <InputField
          id="mass-2"
          label="Mass 2"
          value={mass2}
          onChange={setMass2}
          suffix="kg"
          min={0.01}
          step={100}
        />
        <InputField
          id="distance"
          label="Distance"
          value={distance}
          onChange={setDistance}
          suffix="m"
          min={1}
          step={1000}
        />
      </div>
    </CalculatorLayout>
  );
}
