import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { WAVELENGTH_FAQS } from "@/lib/faq-physics-advanced";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Wavelength and Wave Motion</h3>
      <p>
        Wavelength is the spatial distance over which a wave completes one full cycle, from one peak to the next. The fundamental relationship between wavelength (λ), frequency (f), and wave speed (v) is: <strong>v = λf</strong>. This equation defines how these three properties interconnect — if you know any two, you can calculate the third. For electromagnetic waves like light, the wave speed is constant in vacuum at 299,792,458 m/s (the speed of light, c), making wavelength and frequency inversely proportional. A radio wave with frequency 100 MHz has wavelength λ = (3 × 10⁸) / (100 × 10⁶) = 3 m, while visible light at 500 nm corresponds to frequency f = (3 × 10⁸) / (500 × 10⁻⁹) ≈ 6 × 10¹⁴ Hz.
      </p>
      <p>
        <strong>The Wave Equation and SI Units:</strong> In the SI system, wavelength is measured in meters (m), frequency in hertz (Hz, which equals cycles per second), and wave speed in meters per second (m/s). This universal equation applies to all wave types: sound waves, water waves, electromagnetic radiation, and seismic waves. For sound in air (v ≈ 343 m/s), a 440 Hz note has wavelength λ = 343 / 440 ≈ 0.78 m, which you can verify by dividing the speed of sound by the frequency. The standard tuning frequency for musical instruments is precisely 440 Hz (A4 note), demonstrating how wavelength and frequency relate directly to the physics of sound we experience.
      </p>
      <p>
        <strong>Wavelength Across the Electromagnetic Spectrum:</strong> The electromagnetic spectrum spans wavelengths from less than 10⁻¹² m (gamma rays from radioactive decay) to kilometers (radio waves). Visible light occupies a narrow band: violet at ~380 nm (high energy, high frequency) to red at ~750 nm (lower energy, lower frequency). The same wave equation explains why UV light has shorter wavelengths (higher frequency, more energy per photon) than infrared. For practical example, microwave ovens operate at 2.45 GHz frequency, producing wavelengths around 1.2 cm—long enough to penetrate food but short enough to be absorbed by water molecules, heating food efficiently.
      </p>
      <p>
        <strong>Wavelength Changes in Different Media:</strong> A critical insight is that wavelength changes when light enters different media (water, glass, diamond), while frequency remains constant. Light with a 500 nm wavelength in vacuum has wavelength 500/1.33 ≈ 376 nm in water (where the refractive index is 1.33), because the speed of light in water is reduced proportionally. This is why objects underwater appear closer and magnified—light bends (refracts) due to the wavelength change, and the brain interprets the bent light incorrectly. Understanding this principle explains rainbow formation (prisms separate colors because different wavelengths refract at different angles), mirages, and optical fiber design.
      </p>
      <p>
        <strong>Common Applications and Mistakes:</strong> Engineers use wavelength calculations when designing antennas (antenna length relates to operating wavelength), fiber optics (wavelength affects dispersion), and diffraction systems. A common mistake is forgetting that the wave equation uses the speed in the current medium, not vacuum. Another error is confusing wavelength with frequency in qualitative discussions—remember that higher frequency always means shorter wavelength (and vice versa) for a given medium. In quantum mechanics, particles exhibit wave-like behavior with de Broglie wavelength λ = h/p, where h is Planck's constant and p is momentum, revealing the deep connection between particle and wave nature at atomic scales.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Wavelength Calculator"
      description="Calculate wavelength from frequency and wave speed"
      slug="wavelength-calculator"
      results={results}
      educational={educational}
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
  faqs: WAVELENGTH_FAQS,
  dateModified: "2026-04-09",
});
