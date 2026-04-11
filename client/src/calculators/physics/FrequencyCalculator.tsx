import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Frequency and Wave Behavior</h3>
      <p>
        Frequency is the number of complete wave cycles passing a fixed point per unit time, measured in hertz (Hz), where 1 Hz = 1 cycle per second. The relationship v = λf connects frequency to wavelength and wave speed; rearranging gives f = v/λ. For electromagnetic waves in vacuum, the speed is constant (c = 3 × 10⁸ m/s), so frequency and wavelength are inversely proportional—doubling frequency halves the wavelength. A visible light photon with wavelength 600 nm (red) corresponds to frequency f = (3 × 10⁸) / (600 × 10⁻⁹) = 5 × 10¹⁴ Hz. In audio engineering, the musical note A4 (concert tuning) is exactly 440 Hz, establishing a frequency standard used globally for instrument tuning and acoustic reference.
      </p>
      <p>
        <strong>Frequency Ranges Across Domains:</strong> The electromagnetic spectrum spans from extremely low frequency (ELF, {'<'} 100 Hz) power systems to gamma rays ({'>'} 10¹⁸ Hz). Audible sound ranges 20 Hz (subsonic) to 20,000 Hz (ultrasonic threshold). Radio broadcasts use: AM (0.5–1.6 MHz), FM (88–108 MHz), and cellular (700 MHz–6 GHz). The human ear perceives pitch based on frequency, with lower frequencies sounding deeper and higher frequencies sounding sharper. Interestingly, our frequency perception is logarithmic—doubling frequency (an octave in music) perceptually sounds like a consistent interval, whether from 440 Hz to 880 Hz or 100 Hz to 200 Hz.
      </p>
      <p>
        <strong>Energy and Frequency Connection:</strong> In quantum mechanics, photon energy is directly proportional to frequency via E = hf, where h is Planck's constant (6.626 × 10⁻³⁴ J·s). This fundamental relationship explains why high-frequency UV light ionizes atoms (breaks molecular bonds) while low-frequency radio waves pass harmlessly through. A UV photon at 300 nm (1 × 10¹⁵ Hz) carries energy E = (6.626 × 10⁻³⁴) × (10¹⁵) ≈ 6.6 × 10⁻¹⁹ J ≈ 4.1 eV, sufficient to damage DNA. In contrast, a radio photon at 100 MHz carries only ~10⁻⁷ eV, harmless to biological systems. This is why radio towers don't cause cancer, but UV exposure does.
      </p>
      <p>
        <strong>Practical Measurement and Calculation:</strong> Digital instruments measure frequency using frequency counters, oscilloscopes, and spectrum analyzers. The calculation f = v/λ requires knowing the wave speed in the medium. Common speeds to remember: light in vacuum 3 × 10⁸ m/s, sound in air (20°C) ≈ 343 m/s, sound in water ≈ 1,480 m/s. A tuba note at 50 Hz in air has wavelength λ = 343 / 50 ≈ 6.9 m—long enough to be felt more than heard clearly, which is why low-frequency rumble penetrates walls.
      </p>
      <p>
        <strong>Frequency Independence from Medium Changes:</strong> A crucial insight is that frequency never changes when a wave enters a different medium—only wavelength and speed change. Light with frequency 5 × 10¹⁴ Hz keeps this frequency whether traveling in vacuum, water, or glass. The speed decreases proportionally to the refractive index, and wavelength decreases accordingly, but frequency stays constant. This property is exploited in color sorting and optical fiber communication—wavelength-dependent dispersion doesn't affect the information carried by frequency. Fiber-optic cables transmit terabits per second because they're essentially frequency-multiplexed light signals.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Frequency Calculator"
      description="Calculate frequency from wavelength and wave speed"
      slug="frequency-calculator"
      results={results}
      educational={educational}
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
