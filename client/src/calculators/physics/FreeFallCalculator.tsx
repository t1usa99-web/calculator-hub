import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { FREE_FALL_FAQS } from "@/lib/faq-physics-mechanics";

export default function FreeFallCalculator() {
  const [height, setHeight] = useState(100);
  const [initialVelocity, setInitialVelocity] = useState(0);
  const [g, setG] = useState(9.81);

  // h = v₀t + ½gt² → solve for t using quadratic formula
  const a = g / 2;
  const b = initialVelocity;
  const c = -height;
  const discriminant = b * b - 4 * a * c;
  const timeToFall = discriminant >= 0 ? (-b + Math.sqrt(discriminant)) / (2 * a) : 0;
  const finalVelocity = initialVelocity + g * timeToFall;
  const distanceFallen = height;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Time to Fall"
        value={`${formatNumber(timeToFall, 2)} s`}
        highlight={true}
      />
      <ResultCard
        label="Final Velocity"
        value={`${formatNumber(finalVelocity, 2)} m/s`}
        highlight={true}
      />
      <ResultCard label="Distance Fallen" value={`${formatNumber(distanceFallen, 2)} m`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Free Fall Motion</h3>
      <p>
        Free fall is motion under the influence of gravity alone, with no air resistance. This idealized scenario is fundamental to physics education. When an object is dropped, released, or launched upward, it experiences constant acceleration due to gravity: <strong>g ≈ 9.81 m/s²</strong> (on Earth's surface). This acceleration is independent of the object's mass, meaning all objects fall at the same rate in a vacuum—a principle famously demonstrated by dropping a hammer and feather on the Moon.
      </p>
      <p>
        <strong>Key Equations:</strong> The primary equations of free fall are: <strong>v = gt</strong> (velocity as a function of time) and <strong>d = 0.5gt²</strong> (distance fallen). From these, we can derive <strong>v² = 2gd</strong> (velocity as a function of distance). Example: an object falls for 5 seconds; velocity = 9.81 × 5 ≈ 49 m/s, and distance = 0.5 × 9.81 × 25 ≈ 123 m. The relationships show that velocity increases linearly with time but distance increases quadratically, explaining why impact forces become extreme at greater heights.
      </p>
      <p>
        <strong>Practical Implications:</strong> Free fall calculations are essential for safety engineering, impact analysis, and understanding motion. A person falling from 10 meters reaches about 14 m/s (50 km/h), and stopping this velocity requires enormous forces. Doubling the fall height does not double the impact velocity but increases it by √2 (roughly 40%), yet the impact force can be significantly greater due to kinetic energy relationships. This is why fall protection systems, airbags, and crumple zones are critical—they extend collision time to reduce peak forces.
      </p>
      <p>
        <strong>Real-World Complications:</strong> Air resistance, often neglected in basic free fall problems, becomes significant for light objects or at high velocities. A skydiver reaches terminal velocity (about 53 m/s) where drag force equals weight, and no further acceleration occurs. Feathers, balloons, and parachutes are heavily affected by air. For dense objects falling short distances (most everyday scenarios), ignoring air resistance yields reasonable approximations. Understanding free fall principles helps predict safety limits, design protective equipment, and comprehend the physics of motion in our everyday world.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Free Fall Calculator"
      description="Calculate time, velocity, and distance for falling objects"
      slug="free-fall-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-height"
          label="Initial Height"
          value={height}
          onChange={setHeight}
          suffix="m"
          min={0}
          step={0.1}
        />
        <InputField
          id="initial-velocity"
          label="Initial Velocity"
          value={initialVelocity}
          onChange={setInitialVelocity}
          suffix="m/s"
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
  slug: "free-fall-calculator",
  title: "Free Fall Calculator",
  shortTitle: "Free Fall",
  description: "Calculate free fall time, velocity, and distance",
  category: "physics",
  icon: "🪂",
  keywords: ["free fall", "gravity", "kinematics", "velocity"],
  component: FreeFallCalculator,
  faqs: FREE_FALL_FAQS,
  dateModified: "2026-04-09",
});
