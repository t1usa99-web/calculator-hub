import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DopplerEffectCalculator() {
  const [sourceFrequency, setSourceFrequency] = useState(440);
  const [sourceVelocity, setSourceVelocity] = useState(0);
  const [observerVelocity, setObserverVelocity] = useState(0);
  const [waveSpeed, setWaveSpeed] = useState(343);

  const observedFrequency =
    sourceFrequency * ((waveSpeed + observerVelocity) / (waveSpeed - sourceVelocity));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Observed Frequency"
        value={`${formatNumber(observedFrequency, 2)} Hz`}
        highlight={true}
      />
      <ResultCard
        label="Frequency Shift"
        value={`${formatNumber(observedFrequency - sourceFrequency, 2)} Hz`}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Doppler Effect Calculator"
      description="Calculate observed frequency due to Doppler shift"
      slug="doppler-effect-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="source-frequency"
          label="Source Frequency"
          value={sourceFrequency}
          onChange={setSourceFrequency}
          suffix="Hz"
          min={1}
          step={1}
        />
        <InputField
          id="source-velocity"
          label="Source Velocity"
          value={sourceVelocity}
          onChange={setSourceVelocity}
          suffix="m/s"
          step={0.1}
          hint="Positive = toward observer"
        />
        <InputField
          id="observer-velocity"
          label="Observer Velocity"
          value={observerVelocity}
          onChange={setObserverVelocity}
          suffix="m/s"
          step={0.1}
          hint="Positive = toward source"
        />
        <InputField
          id="wave-speed"
          label="Wave Speed"
          value={waveSpeed}
          onChange={setWaveSpeed}
          suffix="m/s"
          min={1}
          step={1}
          hint="Default: sound in air (343 m/s)"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "doppler-effect-calculator",
  title: "Doppler Effect Calculator",
  shortTitle: "Doppler Effect",
  description: "Calculate frequency shift due to Doppler effect",
  category: "physics",
  icon: "🚑",
  keywords: ["Doppler", "frequency shift", "sound", "wave"],
  component: DopplerEffectCalculator,
  dateModified: "2026-04-09",
});
