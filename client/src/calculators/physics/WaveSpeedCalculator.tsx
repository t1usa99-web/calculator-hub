import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { WAVE_SPEED_FAQS } from "@/lib/faq-physics-advanced";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Wave Speed in Different Media</h3>
      <p>
        Wave speed is the velocity at which a wave propagates through a medium, calculated simply as v = λf (wavelength times frequency). This fundamental equation applies universally to all waves: sound, light, water ripples, seismic waves. In air at 20°C, sound travels at 343 m/s; the same sound in water travels at ~1,480 m/s (4.3 times faster); in steel, it reaches ~5,960 m/s (17 times faster). Light in vacuum always travels at c = 299,792,458 m/s, but slows in denser media—in water (refractive index n = 1.33), light travels at c/n ≈ 2.26 × 10⁸ m/s. These speed differences are fundamental to how we experience the world: light bends at material boundaries (refraction) due to speed changes; ultrasound penetrates tissue differently than audible sound because speed depends on tissue density and elasticity.
      </p>
      <p>
        <strong>Physical Factors Determining Wave Speed:</strong> Wave speed depends on the medium's properties. For sound, speed is determined by density and elastic modulus: v = √(E/ρ), where E is the elastic modulus and ρ is density. Counterintuitively, denser solids often have faster sound because their higher elasticity compensates for density—diamond has both high density and extremely high elasticity, producing sound speeds ~12,000 m/s, the fastest in any solid. For electromagnetic waves in matter, speed is c/n where n {'>'} 1 is the refractive index. For water waves in deep water, speed depends on wavelength: v = √(gλ/2π), explaining why ocean swells (long wavelength) travel faster than ripples. For gases, speed increases with temperature: v_sound ∝ √T, which is why a clarinet sounds higher-pitched in summer than winter.
      </p>
      <p>
        <strong>Worked Example and SI Units:</strong> A 440 Hz acoustic note (A4, the tuning standard) with wavelength 0.78 m in air has speed v = 440 × 0.78 ≈ 343 m/s, matching the known speed of sound in air. If the same frequency were propagated in water (where speed is ~1,480 m/s), the wavelength would be λ = 1,480 / 440 ≈ 3.36 m—the wavelength increases proportionally because the speed increased while frequency stayed constant. This shows why SONAR (underwater sound navigation) uses much lower frequencies than visible light imaging: longer wavelengths are needed for equivalent penetration depth. The SI unit for wave speed is meters per second (m/s), for frequency is hertz (Hz = cycles/second), and for wavelength is meters (m).
      </p>
      <p>
        <strong>Real-World Applications:</strong> Earthquake seismologists use different wave speeds to locate epicenters—P-waves (compression) travel ~6 km/s, S-waves (shear) travel ~3.5 km/s through rock, and their arrival time difference reveals distance. Ultrasound medical imaging (20–200 MHz) produces wavelengths of 0.075–0.0075 mm in tissue, enabling fine spatial resolution. Sonar systems transmit frequencies 10–200 kHz to detect ships and submarines using echoes. Wireless communications use frequency and wavelength to design antennas—AM radio (0.5–1.6 MHz) requires antennas ~100–600 m tall; cellular (800 MHz–6 GHz) uses compact 5–30 cm antennas. Understanding wave speed in different media is essential for audio engineering, medical imaging, telecommunications, and geophysics.
      </p>
      <p>
        <strong>Speed, Wavelength, and Frequency Relationships:</strong> The key insight is the invariance of frequency as waves transition between media. When light enters water, its speed drops, wavelength decreases, but frequency remains constant. This explains why light bends at boundaries—the wave "prefers" to maintain frequency while adjusting speed and wavelength. In dense media, this creates strong refraction. Fiber-optic technology exploits this: different wavelengths (colors) of light travel slightly different speeds in glass, causing dispersion—but systems are designed to minimize this effect for clear signal transmission. Students sometimes confuse these three quantities; remember: v = λf is always true, but when crossing media, v changes proportionally to wavelength (with f staying constant), maintaining the equation's validity.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Wave Speed Calculator"
      description="Calculate wave speed from frequency and wavelength"
      slug="wave-speed-calculator"
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
  faqs: WAVE_SPEED_FAQS,
  dateModified: "2026-04-09",
});
