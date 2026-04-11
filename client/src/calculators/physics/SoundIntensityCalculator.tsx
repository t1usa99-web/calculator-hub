import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

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

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Sound Intensity and the Decibel Scale</h3>
      <p>
        Sound intensity is the acoustic power per unit area (W/m²), spanning an enormous range from 10⁻¹² W/m² (threshold of human hearing) to 10 W/m² (threshold of pain). Because this range is so vast, the logarithmic decibel scale is used: <strong>L = 10 log₁₀(I/I₀)</strong>, where I₀ = 10⁻¹² W/m² is the reference intensity (softest sound humans hear). Each 10 dB increase represents a 10-fold increase in intensity. Common reference levels: 0 dB (threshold of hearing), 30 dB (whisper), 60 dB (normal conversation), 90 dB (heavy traffic), 120 dB (jet engine near runway), 130+ dB (threshold of pain and hearing damage). The logarithmic scale compresses this trillion-fold range into manageable numbers. A 60 dB sound is not three times louder than a 20 dB sound; it's 10,000 times more intense (40 dB = 4 decades = 10⁴).
      </p>
      <p>
        <strong>Physics of Sound Intensity:</strong> Intensity depends on amplitude and frequency via <strong>I ∝ A²f²</strong>. Doubling sound pressure amplitude quadruples intensity (energy is proportional to amplitude squared). Doubling frequency also quadruples intensity because more compressions per unit time mean more work done. For a plane sound wave: <strong>I = ½ρvωA²</strong>, where ρ is medium density, v is wave speed, ω is angular frequency (2πf), and A is amplitude. In air: I = ½(1.2)(343)(2π × 440)(A²) ≈ 930 × A² W/m². A musical note at reasonable listening level (~60 dB) has intensity 10⁻⁶ W/m² and amplitude A = √(10⁻⁶/930) ≈ 0.001 m = 1 mm (eardrum displacement)—impossibly small! This shows why hearing is an incredibly sensitive mechanism.
      </p>
      <p>
        <strong>Inverse Square Law and Distance Dependence:</strong> As sound spreads from a point source into a sphere, intensity decreases with distance squared: <strong>I ∝ 1/r²</strong>. More precisely, sound pressure level (SPL) decreases 6 dB for each doubling of distance in open space (far field). A speaker producing 100 dB at 1 m produces: 94 dB at 2 m, 88 dB at 4 m, 82 dB at 8 m. This rapid falloff explains why concert venues feel silent from a distance—the intensity diminishes quadratically. In enclosed spaces, reflections complicate this simple law; reverberant rooms maintain higher levels than predicted by inverse-square. This relationship is crucial for auditorium design: concert halls must balance directness with acoustic loss over distance.
      </p>
      <p>
        <strong>Loudness versus Intensity and Equal-Loudness Curves:</strong> Loudness is subjective perception, not objective intensity. Human ears are most sensitive at 2-4 kHz and less sensitive at very low or very high frequencies. An 8 kHz tone at 60 dB sounds equally loud as a 1 kHz tone at ~65 dB, despite different intensities. A-weighting compensates for frequency-dependent sensitivity, with measurements in dB(A) roughly matching perceived loudness. OSHA occupational limits are 90 dB(A) for 8 hours—cumulative exposure matters. A person exposed to 100 dB for 1 hour receives the same "dose" as 90 dB for 8 hours. This energy-equal model explains why intermittent loud exposure is safer than continuous lower levels.
      </p>
      <p>
        <strong>Hearing Damage and Safe Exposure Limits:</strong> Exposure to 85+ dB causes cumulative hearing loss through hair cell damage in the cochlea—permanent and irreversible. Professional musicians, construction workers, and military personnel face high occupational risks. Peak noise (like gunshots or explosions) can cause immediate permanent damage even in short bursts. Prevention requires controlling intensity at source (quieter equipment), increasing distance (move away), or using protection (earplugs reduce 15-30 dB). The threshold of pain (~120-130 dB) causes immediate tissue damage. Industrial hygiene standards require hearing protection, audiometry monitoring, and noise control engineering. Understanding intensity and safe exposure levels is essential for workplace safety, event management, and personal hearing health.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Sound Intensity Calculator"
      description="Calculate decibel level from sound intensity"
      slug="sound-intensity-calculator"
      results={results}
      educational={educational}
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
