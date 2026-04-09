import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

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

  return (
    <CalculatorLayout
      title="Coulomb's Law Calculator"
      description="Calculate electrostatic force between two charges"
      slug="coulombs-law-calculator"
      results={results}
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

registerCalculator({
  slug: "coulombs-law-calculator",
  title: "Coulomb's Law Calculator",
  shortTitle: "Coulomb's Law",
  description: "Calculate electrostatic force between two charges",
  category: "physics",
  icon: "⚛️",
  keywords: ["Coulomb's law", "electrostatic", "charge", "force"],
  component: CoulombsLawCalculator,
  dateModified: "2026-04-09",
});
