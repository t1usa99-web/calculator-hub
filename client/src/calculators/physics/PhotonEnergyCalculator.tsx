import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PhotonEnergyCalculator() {
  const [wavelength, setWavelength] = useState(5e-7);
  const [frequency, setFrequency] = useState(6e14);
  const [inputType, setInputType] = useState("wavelength");

  const h = 6.626e-34;
  const c = 299792458;
  const eVToJ = 1.602e-19;

  let energy = 0;
  if (inputType === "wavelength") {
    energy = (h * c) / wavelength;
  } else {
    energy = h * frequency;
  }

  const energyEv = energy / eVToJ;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Photon Energy"
        value={`${energy.toExponential(3)} J`}
        highlight={true}
      />
      <ResultCard label="In Electron Volts" value={`${formatNumber(energyEv, 2)} eV`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Photon Energy Calculator"
      description="Calculate photon energy from wavelength or frequency"
      slug="photon-energy-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="input-type"
          label="Input Type"
          value={inputType}
          onChange={setInputType}
          options={[
            { value: "wavelength", label: "Wavelength" },
            { value: "frequency", label: "Frequency" },
          ]}
        />
        {inputType === "wavelength" && (
          <InputField
            id="wavelength"
            label="Wavelength"
            value={wavelength}
            onChange={setWavelength}
            suffix="m"
            min={1e-15}
            step={1e-7}
          />
        )}
        {inputType === "frequency" && (
          <InputField
            id="frequency"
            label="Frequency"
            value={frequency}
            onChange={setFrequency}
            suffix="Hz"
            min={0.1}
            step={1e12}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "photon-energy-calculator",
  title: "Photon Energy Calculator",
  shortTitle: "Photon Energy",
  description: "Calculate photon energy from wavelength or frequency",
  category: "physics",
  icon: "💫",
  keywords: ["photon", "energy", "light", "wavelength", "frequency"],
  component: PhotonEnergyCalculator,
  dateModified: "2026-04-09",
});
