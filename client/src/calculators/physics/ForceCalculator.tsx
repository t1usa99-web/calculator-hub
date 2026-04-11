import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function ForceCalculator() {
  const [mass, setMass] = useState(50);
  const [acceleration, setAcceleration] = useState(5);

  const force = mass * acceleration;
  const weightComparison = force / 9.81;
  const forceLbs = force * 0.22481;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Force"
        value={`${formatNumber(force, 2)} N`}
        highlight={true}
      />
      <ResultCard label="Weight Equivalent" value={`${formatNumber(weightComparison, 2)} kg`} />
      <ResultCard label="In Pounds Force" value={`${formatNumber(forceLbs, 2)} lbf`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Newton's Second Law of Motion</h3>
      <p>
        Newton's Second Law states that <strong>Force = Mass × Acceleration</strong>, or <strong>F = ma</strong>. This fundamental principle of classical mechanics describes how objects respond to forces. When a force acts on an object, the object accelerates in the direction of the force. The strength of acceleration depends on two factors: the magnitude of the applied force and the mass of the object. A heavier object (larger mass) requires more force to achieve the same acceleration as a lighter object.
      </p>
      <p>
        <strong>Understanding Units:</strong> Force is measured in Newtons (N). One Newton equals the force required to accelerate a 1 kilogram object at 1 meter per second squared. This relationship is fundamental to physics. When you push something, you apply a force that causes acceleration. An automobile engine produces force that accelerates the car. Gravity exerts a force that keeps us on Earth. All of these applications follow F = ma, making this one of the most important equations in science.
      </p>
      <p>
        <strong>Practical Examples:</strong> Consider a 1500 kg car accelerating from rest to 100 km/h (27.8 m/s) in 8 seconds. The acceleration is 27.8 / 8 ≈ 3.475 m/s². The required force is 1500 × 3.475 ≈ 5,213 N. A person (75 kg) pushing with 200 N of force experiences acceleration: a = 200 / 75 ≈ 2.67 m/s² (assuming no friction). These calculations show how F = ma connects everyday motion to quantifiable physics.
      </p>
      <p>
        <strong>Multiple Forces:</strong> Real-world scenarios often involve multiple forces acting simultaneously. A car experiences engine force (forward), friction and air resistance (backward), and gravity (downward). The net force (vector sum) determines acceleration. Engineers use F = ma to design vehicles, brakes, and safety systems. Knowing how to calculate and apply forces allows us to predict and control motion in countless applications from transportation to sports to industrial machinery.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Force Calculator"
      description="Calculate force using Newton's Second Law (F = ma)"
      slug="force-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="mass"
          label="Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="acceleration"
          label="Acceleration"
          value={acceleration}
          onChange={setAcceleration}
          suffix="m/s²"
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}
