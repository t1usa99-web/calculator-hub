import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CentripetalForceCalculator() {
  const [mass, setMass] = useState(5);
  const [velocity, setVelocity] = useState(10);
  const [radius, setRadius] = useState(2);

  const centripetal = (mass * velocity * velocity) / radius;
  const centripetalAccel = (velocity * velocity) / radius;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Centripetal Force"
        value={`${formatNumber(centripetal, 2)} N`}
        highlight={true}
      />
      <ResultCard
        label="Centripetal Acceleration"
        value={`${formatNumber(centripetalAccel, 2)} m/s²`}
        highlight={true}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Circular Motion and Centripetal Force</h3>
      <p>
        Centripetal force is the net force directed toward the center of a circular path, required to keep an object moving in a circle. The formula is <strong>Fc = mv²/r</strong>, where m is mass (kg), v is velocity (m/s), and r is the radius of the circular path (m). This force is always perpendicular to velocity and does no work on the object. Example: a 2 kg ball rotating at 5 m/s in a 0.5 m circle experiences Fc = (2 × 25) / 0.5 = 100 N directed toward the center. Without this force, the object would continue in a straight line due to inertia.
      </p>
      <p>
        <strong>Sources of Centripetal Force:</strong> In real-world scenarios, centripetal force comes from various sources. A satellite orbiting Earth experiences gravitational force pointing toward Earth's center. A car turning on a flat road relies on friction between tires and road. A ball on a rope experiences tension pulling toward the center. A person riding a roller coaster feels normal force from the track. Understanding which force provides the centripetal acceleration is crucial for analyzing circular motion. The faster the speed or tighter the radius, the more centripetal force is required. Insufficient force causes an object to skid or lose its circular path.
      </p>
      <p>
        <strong>Centripetal Acceleration:</strong> Centripetal acceleration is the rate of change of velocity direction, given by <strong>ac = v²/r</strong>. Unlike linear acceleration (which changes speed), centripetal acceleration changes only direction, keeping speed constant in uniform circular motion. A car traveling 20 m/s around a curve of radius 100 m has centripetal acceleration ac = 400 / 100 = 4 m/s². Doubling velocity quadruples the required acceleration, explaining why high-speed turns are dangerous. This acceleration is always directed toward the center, perpendicular to the velocity.
      </p>
      <p>
        <strong>Practical Applications:</strong> Centripetal force principles apply everywhere circular motion occurs. Amusement park rides (loops, spinners, carousels) use centripetal force to keep riders on circular paths. Planets orbit stars, moons orbit planets, and electrons orbit nuclei—all via centripetal force. Road design includes banking (tilting curves) to provide additional centripetal force components, reducing reliance on friction alone. Understanding centripetal force helps engineers design safe curves, predict orbital mechanics, and explain natural and engineered circular motion systems.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Centripetal Force Calculator"
      description="Calculate centripetal force and acceleration for circular motion"
      slug="centripetal-force-calculator"
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
          id="velocity"
          label="Velocity"
          value={velocity}
          onChange={setVelocity}
          suffix="m/s"
          min={0}
          step={0.1}
        />
        <InputField
          id="radius"
          label="Radius"
          value={radius}
          onChange={setRadius}
          suffix="m"
          min={0.01}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}
