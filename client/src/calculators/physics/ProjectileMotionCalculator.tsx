import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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
  dateModified: "2026-04-09",
});
