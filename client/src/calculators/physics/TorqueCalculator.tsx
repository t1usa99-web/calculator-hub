import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

  return (
    <CalculatorLayout
      title="Torque Calculator"
      description="Calculate torque from force and lever arm"
      slug="torque-calculator"
      results={results}
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
  dateModified: "2026-04-09",
});
