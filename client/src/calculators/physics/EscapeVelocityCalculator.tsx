import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { ESCAPE_VELOCITY_FAQS } from "@/lib/faq-physics-advanced";

export default function EscapeVelocityCalculator() {
  const [mass, setMass] = useState(5.972e24);
  const [radius, setRadius] = useState(6371000);

  const G = 6.674e-11;
  const escapeVelocity = Math.sqrt((2 * G * mass) / radius);
  const escapeVelocityKms = escapeVelocity / 1000;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Escape Velocity"
        value={`${formatNumber(escapeVelocity, 2)} m/s`}
        highlight={true}
      />
      <ResultCard label="In km/s" value={`${formatNumber(escapeVelocityKms, 3)} km/s`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Escape Velocity and Gravitational Binding</h3>
      <p>
        Escape velocity is the minimum speed needed at a planet's surface for an object to escape its gravitational pull without further propulsion. The formula is <strong>v_e = √(2GM/r)</strong>, where G is the gravitational constant (6.674 × 10⁻¹¹ m³/(kg·s²)), M is the planet's mass in kilograms, and r is its radius in meters. For Earth (M = 5.972 × 10²⁴ kg, r = 6,371,000 m): v_e = √(2 × 6.674 × 10⁻¹¹ × 5.972 × 10²⁴ / 6,371,000) ≈ 11.2 km/s or 40,300 km/h. This is independent of the escaping object's mass—a pebble and a spacecraft both need 11.2 km/s. The Moon (one-sixth Earth's mass and radius), has v_e ≈ 2.4 km/s. Jupiter (318 times Earth's mass but 11 times larger radius) has v_e ≈ 59.5 km/s. For a black hole, v_e ≥ c (light speed), so not even light escapes—hence "black." Escape velocity determines orbital mechanics, satellite design, and planetary atmospheres (lighter molecules can escape if their thermal speeds exceed escape velocity).
      </p>
      <p>
        <strong>Understanding Orbital Velocity and Energy:</strong> Escape velocity differs from orbital velocity. To orbit Earth at the surface, velocity is v_orbit ≈ 7.9 km/s (slower than escape velocity). Orbital velocity satisfies gravity = centripetal force: GM/r² = v²/r, so v_orbit = √(GM/r) = v_e / √2. To escape, an object must have kinetic energy exceeding gravitational potential energy: ½mv_e² = GMm/r, which derives the formula. This energy relationship shows escape velocity increases with mass and decreases with radius. Compact objects (high M, small r) have extreme escape velocities. A neutron star (M ~ 1.4 solar masses, r ~ 10 km) has v_e ~ 130,000 km/s (nearly half light speed). The concept of escape velocity assumes no atmosphere (which would provide drag); real rockets benefit from air resistance at launch.
      </p>
      <p>
        <strong>Worked Example:</strong> Mars has mass M ≈ 6.417 × 10²³ kg and radius r ≈ 3,389,500 m. Escape velocity: v_e = √(2 × 6.674 × 10⁻¹¹ × 6.417 × 10²³ / 3,389,500) ≈ √(2.53 × 10¹⁴ / 3.39 × 10⁶) ≈ √(7.47 × 10⁷) ≈ 8,600 m/s ≈ 8.6 km/s. Venus, with similar mass to Earth but 95% of radius (r ≈ 6,051,800 m) and M ≈ 4.867 × 10²⁴ kg, has v_e ≈ 10.4 km/s. This variation explains why Venus retains a thick atmosphere (high escape velocity, lighter molecules stay) while Mars lost much of its atmosphere (lower escape velocity, lighter molecules escaped).
      </p>
      <p>
        <strong>Real-World Applications:</strong> Spacecraft design requires reaching escape velocity to leave planets. Moon landers don't need full Earth escape velocity (11.2 km/s) because they're far from Earth; they only need lunar escape velocity. Multi-stage rockets accelerate progressively, each stage dropping as fuel is consumed, finally reaching escape velocity. Atmospheric re-entry vehicles enter at speeds below escape velocity, so gravity slows them without infinite heat. Planetary science uses escape velocity to explain atmospheric evolution: Earth retained light gases (N₂, O₂) because v_e is high; the Moon and Mercury lost them because v_e is low. Exoplanet atmospheres are inferred from escape velocities and stellar radiation. Black hole event horizons are defined where escape velocity equals light speed.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing escape velocity with orbital velocity. Orbital velocity is v_orbit = √(GM/r), which is v_e/√2. For Earth, v_orbit ≈ 7.9 km/s (not 11.2 km/s). Error 2: Using wrong units. M must be in kilograms, r in meters, and G = 6.674 × 10⁻¹¹ SI units. If mass is in solar masses, convert first. Error 3: Applying the formula at the surface only. Escape velocity at height h above surface is v_e(h) = √(2GM/(r+h)), which decreases with altitude. Error 4: Forgetting escape velocity is independent of direction. It applies equally upward, sideways, or at any angle. Error 5: Confusing escape velocity with relative velocity. Escape velocity relative to the planet is absolute; relative to Earth's orbital motion around the Sun, spacecraft can reach the Sun with less energy.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Escape Velocity Calculator"
      description="Calculate escape velocity from planet mass and radius"
      slug="escape-velocity-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="planet-mass"
          label="Planet Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={1e20}
          step={1e23}
          hint="Earth: 5.972e24 kg"
        />
        <InputField
          id="planet-radius"
          label="Planet Radius"
          value={radius}
          onChange={setRadius}
          suffix="m"
          min={1000}
          step={100000}
          hint="Earth: 6,371,000 m"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "escape-velocity-calculator",
  title: "Escape Velocity Calculator",
  shortTitle: "Escape Velocity",
  description: "Calculate escape velocity from planetary mass and radius",
  category: "physics",
  icon: "🛸",
  keywords: ["escape velocity", "gravitational", "planet", "space"],
  component: EscapeVelocityCalculator,
  faqs: ESCAPE_VELOCITY_FAQS,
  dateModified: "2026-04-09",
});
