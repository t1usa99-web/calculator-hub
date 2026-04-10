import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { TORQUE_FAQS } from "@/lib/faq-physics-mechanics";

export default function TorqueCalculator() {
  const [force, setForce] = useState(100);
  const [leverArm, setLeverArm] = useState(2);
  const [angle, setAngle] = useState(90);

  const angleRad = (angle * Math.PI) / 180;
  const torque = force * leverArm * Math.sin(angleRad);
  const torqueFtLbs = torque * 0.7376;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Torque"
        value={`${formatNumber(torque, 2)} N·m`}
        highlight={true}
      />
      <ResultCard label="In ft·lbs" value={`${formatNumber(torqueFtLbs, 2)} ft·lbs`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Torque and Rotational Motion</h3>
      <p>
        Torque is the rotational equivalent of force: <strong>τ = r × F × sin(θ)</strong>, where r is the distance from the pivot (m), F is applied force (N), and θ is the angle between the force and the lever arm. Torque is measured in Newton-meters (N⋅m). For perpendicular force (θ = 90°, sin(90°) = 1): <strong>τ = r × F</strong>. Example: applying 50 N perpendicular to a 0.3 m wrench produces τ = 0.3 × 50 = 15 N⋅m. Torque is a vector; direction (clockwise/counterclockwise) matters. Greater distance from the pivot or greater force increases torque. This is why long wrenches and long handles provide mechanical advantage—more torque for the same applied force.
      </p>
      <p>
        <strong>Angular Acceleration from Torque:</strong> Just as F = ma relates force to linear acceleration, torque produces angular acceleration: <strong>τ = I × α</strong>, where I is moment of inertia (kg⋅m²) and α is angular acceleration (rad/s²). A rotating disk with I = 2 kg⋅m² and τ = 10 N⋅m experiences α = 10 / 2 = 5 rad/s². Moment of inertia depends on mass distribution: concentrated near the pivot (small I) spins easily; distributed far from the pivot (large I) resists spinning. A thin rod spins faster than a thick disk of the same mass because mass is concentrated near the center for the rod.
      </p>
      <p>
        <strong>Mechanical Advantage via Levers:</strong> Levers multiply force through torque balance. At equilibrium: <strong>F_in × d_in = F_out × d_out</strong>. A 1 m lever with pivot at 0.2 m from the output end provides mechanical advantage = 1.0 / 0.2 = 5. A 100 N input produces 500 N output force. Trade-off: the output moves 5× less distance. First-class levers (pivot in middle, like seesaws) multiply force. Second-class levers (output in middle, like wheelbarrows) multiply force even more. Crowbars, prying tools, and scissors all use lever principles to magnify force via torque.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Torque is crucial in engineering and everyday life. Car engines produce torque, transmitted through transmissions to wheels. Tools (wrenches, screwdrivers) apply torque to rotate bolts or screws. Athletes understand torque intuitively: a longer baseball bat increases torque, helping hit farther. Gyroscopes use rotational inertia and torque to maintain orientation. Power drills, motors, and turbines all rely on torque to function. Understanding torque helps design efficient machinery, use tools safely, and predict rotational motion in countless systems.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Torque Calculator"
      description="Calculate torque from force and lever arm"
      slug="torque-calculator"
      results={results}
      educational={educational}
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
          id="lever-arm"
          label="Lever Arm"
          value={leverArm}
          onChange={setLeverArm}
          suffix="m"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="angle"
          label="Angle"
          value={angle}
          onChange={setAngle}
          suffix="°"
          min={0}
          max={90}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "torque-calculator",
  title: "Torque Calculator",
  shortTitle: "Torque",
  description: "Calculate torque from force, lever arm, and angle",
  category: "physics",
  icon: "🔧",
  keywords: ["torque", "rotational force", "lever", "physics"],
  component: TorqueCalculator,
  faqs: TORQUE_FAQS,
  dateModified: "2026-04-09",
});
