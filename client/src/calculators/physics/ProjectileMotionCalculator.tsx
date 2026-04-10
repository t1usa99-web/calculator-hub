import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { PROJECTILE_MOTION_FAQS } from "@/lib/faq-physics-mechanics";

export default function ProjectileMotionCalculator() {
  const [velocity, setVelocity] = useState(50);
  const [angle, setAngle] = useState(45);
  const [height, setHeight] = useState(0);
  const [g, setG] = useState(9.81);

  const angleRad = (angle * Math.PI) / 180;
  const vx = velocity * Math.cos(angleRad);
  const vy = velocity * Math.sin(angleRad);

  const maxHeight = height + (vy * vy) / (2 * g);
  const timeOfFlight = (vy + Math.sqrt(vy * vy + 2 * g * height)) / g;
  const range = vx * timeOfFlight;
  const finalVelocity = Math.sqrt(vx * vx + (vy + g * timeOfFlight) ** 2);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Max Height"
        value={`${formatNumber(maxHeight, 2)} m`}
        highlight={true}
      />
      <ResultCard
        label="Range"
        value={`${formatNumber(range, 2)} m`}
        highlight={true}
      />
      <ResultCard label="Time of Flight" value={`${formatNumber(timeOfFlight, 2)} s`} />
      <ResultCard label="Final Velocity" value={`${formatNumber(finalVelocity, 2)} m/s`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Projectile Motion Fundamentals</h3>
      <p>
        Projectile motion combines horizontal (constant velocity) and vertical (constant acceleration) components. Horizontal velocity remains constant: <strong>vx = v × cos(θ)</strong>, where v is initial velocity and θ is launch angle. Vertical velocity changes due to gravity: <strong>vy = v × sin(θ) − g × t</strong>. Position: <strong>x = vx × t</strong>, <strong>y = vy × t − 0.5g × t²</strong>. Example: launching at 20 m/s at 45°, vx = vy ≈ 14.1 m/s. Maximum height occurs when vy = 0: <strong>hmax = vy² / (2g)</strong> ≈ 10.2 m. Range: <strong>R = (v² × sin(2θ)) / g</strong> ≈ 40.8 m. Maximum range occurs at 45° for level ground.
      </p>
      <p>
        <strong>Key Observations:</strong> Launch angle significantly affects trajectory. A 30° launch and 60° launch have equal ranges but different maximum heights (30° is lower, flatter; 60° is higher, steeper). Doubling initial velocity quadruples range and maximum height (v² dependence). Vertical motion is independent of horizontal motion—each component can be analyzed separately. Air resistance, neglected in ideal calculations, becomes significant in real scenarios, reducing range and maximum height. Understanding these components allows prediction of projectile paths in sports, ballistics, and engineering.
      </p>
      <p>
        <strong>Time of Flight Calculation:</strong> Total flight time depends on initial height and vertical velocity: <strong>y = y₀ + vy × t − 0.5g × t²</strong>. Setting y = 0 (landing height) and solving for t gives time of flight. For level ground (y₀ = 0): <strong>t = 2vy / g = (2v × sin(θ)) / g</strong>. Example: 20 m/s at 45° gives t ≈ 2.88 seconds. Higher launch angles increase flight time. Initial height also increases flight time—launching from a cliff extends range. Steeper angles maximize height but reduce range; optimal angle depends on the specific problem.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Projectile motion applies to sports (basketball, baseball, soccer), ballistics (bullet trajectory), and water fountains. Athletes intuitively understand optimal angles for distance vs. height. Artillery and firearms use ballistics calculations accounting for air resistance, wind, and gravity variations. Fireworks trajectories follow parabolic paths. Skydiving and parachute deployment involve projectile motion analysis. Understanding projectile motion helps design safer equipment, predict motion outcomes, and optimize performance in numerous applications from sports to warfare.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Projectile Motion Calculator"
      description="Calculate trajectory, range, and velocity for projectile motion"
      slug="projectile-motion-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="initial-velocity"
          label="Initial Velocity"
          value={velocity}
          onChange={setVelocity}
          suffix="m/s"
          min={0}
          step={0.1}
        />
        <InputField
          id="launch-angle"
          label="Launch Angle"
          value={angle}
          onChange={setAngle}
          suffix="°"
          min={0}
          max={90}
          step={0.1}
        />
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
  slug: "projectile-motion-calculator",
  title: "Projectile Motion Calculator",
  shortTitle: "Projectile Motion",
  description: "Calculate projectile motion trajectory, range, and velocity",
  category: "physics",
  icon: "🎯",
  keywords: ["projectile motion", "physics calculator", "trajectory", "kinematics"],
  component: ProjectileMotionCalculator,
  faqs: PROJECTILE_MOTION_FAQS,
  dateModified: "2026-04-09",
});
