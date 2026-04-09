import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FrequencyCalculator() {
  const [wavelength, setWavelength] = useState(6e-7);
  const [waveSpeed, setWaveSpeed] = useState(299792458);

  const frequency = waveSpeed / wavelength;
  const frequencyKhz = frequency / 1000;
  const frequencyMhz = frequency / 1e6;
  const frequencyGhz = frequency / 1e9;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Frequency"
        value={`${frequency.toExponential(3)} Hz`}
        highlight={true}
      />
      <ResultCard label="In kHz" value={`${frequencyKhz.toExponential(3)} kHz`} />
      <ResultCard label="In MHz" value={`${frequencyMhz.toExponential(3)} MHz`} />
      <ResultCard label="In GHz" value={`${frequencyGhz.toExponential(3)} GHz`} />
    </div>
  );

  return (
    <CalculatorLayout
      title="Frequency Calculator"
      description="Calculate frequency from wavelength and wave speed"
      slug="frequency-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="wavelength"
          label="Wavelength"
          value={wavelength}
          onChange={setWavelength}
          suffix="m"
          min={1e-15}
          step={1e-7}
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
  slug: "frequency-calculator",
  title: "Frequency Calculator",
  shortTitle: "Frequency",
  description: "Calculate frequency from wavelength and wave speed",
  category: "physics",
  icon: "📻",
  keywords: ["frequency", "wavelength", "wave", "hertz"],
  component: FrequencyCalculator,
  dateModified: "2026-04-09",
});
