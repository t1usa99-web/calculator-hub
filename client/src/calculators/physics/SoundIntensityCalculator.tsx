import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SoundIntensityCalculator() {
  const [intensity, setIntensity] = useState(1e-5);

  const I0 = 1e-12;
  const decibelLevel = 10 * Math.log10(intensity / I0);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Decibel Level"
        value={`${formatNumber(decibelLevel, 2)} dB`}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Sound Intensity Calculator"
      description="Calculate decibel level from sound intensity"
      slug="sound-intensity-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="intensity"
          label="Sound Intensity"
          value={intensity}
          onChange={setIntensity}
          suffix="W/m²"
          min={1e-20}
          step={1e-6}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "sound-intensity-calculator",
  title: "Sound Intensity Calculator",
  shortTitle: "Sound Intensity",
  description: "Calculate decibel level from sound intensity",
  category: "physics",
  icon: "🔊",
  keywords: ["sound intensity", "decibels", "acoustics", "dB"],
  component: SoundIntensityCalculator,
  dateModified: "2026-04-09",
});
