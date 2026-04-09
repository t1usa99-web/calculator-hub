import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function WaveSpeedCalculator() {
  const [frequency, setFrequency] = useState(440);
  const [wavelength, setWavelength] = useState(0.78);

  const waveSpeed = frequency * wavelength;
  const waveSpeedKms = waveSpeed / 1000;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Wave Speed"
        value={`${formatNumber(waveSpeed, 2)} m/s`}
        highlight={true}
      />
      <ResultCard label="In km/s" value={`${formatNumber(waveSpeedKms, 4)} km/s`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Wave Speed Calculator"
      description="Calculate wave speed from frequency and wavelength"
      slug="wave-speed-calculator"
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
          step={1}
        />
        <InputField
          id="wavelength"
          label="Wavelength"
          value={wavelength}
          onChange={setWavelength}
          suffix="m"
          min={0.001}
          step={0.01}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "wave-speed-calculator",
  title: "Wave Speed Calculator",
  shortTitle: "Wave Speed",
  description: "Calculate wave speed from frequency and wavelength",
  category: "physics",
  icon: "〰️",
  keywords: ["wave speed", "velocity", "frequency", "wavelength"],
  component: WaveSpeedCalculator,
  dateModified: "2026-04-09",
});
