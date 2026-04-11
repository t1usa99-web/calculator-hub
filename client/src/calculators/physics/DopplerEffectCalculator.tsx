import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">The Doppler Effect: Motion and Frequency Shift</h3>
      <p>
        The Doppler Effect describes the apparent change in wave frequency when the source or observer moves relative to the medium. When an ambulance approaches, its siren sounds higher-pitched; after passing, it sounds lower-pitched. This occurs because motion compresses or stretches the wave crests. The observed frequency is: <strong>f' = f × (v + v_observer) / (v - v_source)</strong>, where f is source frequency, v is wave speed, and velocities are positive when moving toward each other. For an approaching 1,000 Hz siren at 30 m/s in air (343 m/s): f' = 1,000 × (343 + 0) / (343 - 30) ≈ 1,098 Hz (9.8% higher). After passing at 30 m/s away: f' = 1,000 × 343 / (343 + 30) ≈ 919 Hz (8.1% lower). The total shift from approaching to receding is ~179 Hz, which is the audio signature we all recognize from emergency vehicles.
      </p>
      <p>
        <strong>Mathematical Derivation and Sign Conventions:</strong> The formula emerges from considering wave crests: as a source moves toward you, successive crests are emitted from progressively closer positions, arriving more frequently. For a source moving at v_s toward a stationary observer, crests are compressed into distance (v - v_s)T instead of vT (where T is period), yielding shorter effective wavelength λ' = (v - v_s)/f and higher frequency f' = v/λ' = vf/(v - v_s). Observer motion matters too: moving toward a stationary source effectively encounters more crests per unit time. The complete formula unifies both effects: <strong>f' = f(v + v_observer)/(v - v_source)</strong>. Sign convention matters—positive velocities mean motion toward each other; negative means away. Common mistake: confusing which direction is positive leads to inverted Doppler shifts.
      </p>
      <p>
        <strong>Applications in Technology and Science:</strong> Police radar guns use the Doppler Effect with electromagnetic waves (~35 GHz): a car approaching at 100 km/h (27.8 m/s) shifts the reflected frequency by Δf ≈ 2 × 27.8 × 35 × 10⁹ / (3 × 10⁸) ≈ 6.5 kHz. Medical ultrasound Doppler imaging measures blood flow: normal arterial flow toward the probe increases frequency, while flow away decreases it. Detecting these shifts reveals clots (no flow) or blockages (abnormal patterns). Astronomical observations use spectroscopic redshift: distant galaxies show longer wavelengths (lower frequencies), indicating recession—this Doppler shift proved the universe is expanding. Astrophysicists measure recession velocity of galaxies using Δf/f = v_recession/c, directly from the Doppler formula.
      </p>
      <p>
        <strong>Worked Example and Common Mistakes:</strong> Train whistle approaching at 20 m/s emits 400 Hz. Observer stationary, sound speed 340 m/s: f' = 400 × 340 / (340 - 20) = 400 × 340/320 ≈ 425 Hz. After passing, moving away at 20 m/s: f' = 400 × 340 / (340 + 20) ≈ 380 Hz. The shift is dramatic enough to be musically obvious—a whole tone difference. Mistake 1: forgetting to use absolute sound speed in the medium (not relative speed). Mistake 2: confusing source and observer velocities (they affect frequency differently). Mistake 3: applying non-relativistic Doppler to light near light speed (must use relativistic formula). The classic "approaching fire truck" scenario makes the effect intuitive, but quantitative problems require careful attention to signs and motion direction.
      </p>
      <p>
        <strong>Relativistic Doppler and Limitations:</strong> The formula above is non-relativistic, valid for v_source, v_observer {'<<'} c. For light and high speeds, the relativistic Doppler formula applies: <strong>f{'\''}  = f√((1 + β)/(1 - β))</strong>, where β = v/c. At relativistic speeds, longitudinal and transverse Doppler effects differ significantly. For electromagnetic waves, there's no Doppler effect for motion perpendicular to the line of sight (transverse), unlike sound. These subtleties matter for astrophysics (quasar jets, pulsars), laser spectroscopy, and particle physics. Modern frequency stabilization in atomic clocks exploits the Doppler shift to cool atoms to microkelvin temperatures, a technique used in quantum computing and precision metrology.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Doppler Effect Calculator"
      description="Calculate observed frequency due to Doppler shift"
      slug="doppler-effect-calculator"
      results={results}
      educational={educational}
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
