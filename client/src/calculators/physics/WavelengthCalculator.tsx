import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function WavelengthCalculator() {
  const [frequency, setFrequency] = useState(500e12);
  const [waveSpeed, setWaveSpeed] = useState(299792458);

  const wavelength = waveSpeed / frequency;
  const wavelengthNm = wavelength * 1e9;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Wavelength"
        value={`${wavelength.toExponential(3)} m`}
        highlight={true}
      />
      <ResultCard label="In Nanometers" value={`${formatNumber(wavelengthNm, 2)} nm`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Wavelength Calculator"
      description="Calculate wavelength from frequency and wave speed"
      slug="wavelength-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="frequency"
          label="Frequency"
          value={frequency}
          onChange={setFrequency}
          suffix="Hz"
          min={0.1}
          step={1e12}
        />
        <InputField
          id="wave-speed"
          label="Wave Speed"
          value={waveSpeed}
          onChange={setWaveSpeed}
          suffix="m/s"
          min={1}
          step={1000}
          hint="Default: speed of light (299,792,458 m/s)"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "wavelength-calculator",
  title: "Wavelength Calculator",
  shortTitle: "Wavelength",
  description: "Calculate wavelength from frequency and wave speed",
  category: "physics",
  icon: "🌊",
  keywords: ["wavelength", "frequency", "wave", "light"],
  component: WavelengthCalculator,
  dateModified: "2026-04-09",
});
