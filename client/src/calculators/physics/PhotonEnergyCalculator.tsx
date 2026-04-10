import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { PHOTON_ENERGY_FAQS } from "@/lib/faq-physics-advanced";

export default function PhotonEnergyCalculator() {
  const [wavelength, setWavelength] = useState(5e-7);
  const [frequency, setFrequency] = useState(6e14);
  const [inputType, setInputType] = useState("wavelength");

  const h = 6.626e-34;
  const c = 299792458;
  const eVToJ = 1.602e-19;

  let energy = 0;
  if (inputType === "wavelength") {
    energy = (h * c) / wavelength;
  } else {
    energy = h * frequency;
  }

  const energyEv = energy / eVToJ;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Photon Energy"
        value={`${energy.toExponential(3)} J`}
        highlight={true}
      />
      <ResultCard label="In Electron Volts" value={`${formatNumber(energyEv, 2)} eV`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Photon Energy and Light</h3>
      <p>
        A photon is a discrete packet of electromagnetic energy. Its energy is given by <strong>E = hf = hc/λ</strong>, where h is Planck's constant (6.626 × 10⁻³⁴ J⋅s), f is frequency in hertz (Hz), c is the speed of light (3 × 10⁸ m/s), and λ is wavelength in meters (m). The relationship c = fλ links frequency and wavelength: higher frequency means shorter wavelength and higher energy. Red light (~700 nm) has lower energy (~1.8 eV) than blue light (~450 nm, ~2.8 eV) or ultraviolet (~100 nm, ~12 eV). The electron-volt (eV) is convenient for microscopic energies: 1 eV = 1.602 × 10⁻¹⁹ joules. Visible light ranges 1.7–3.1 eV. X-rays (10⁻¹⁰ m) are ~10 keV. Gamma rays are MeV to GeV. This quantization explains the photoelectric effect: photons with energy exceeding the work function eject electrons from metals. Photon energy underlies lasers, LEDs, solar cells, and atomic spectroscopy.
      </p>
      <p>
        <strong>Understanding Photon Behavior and the Photoelectric Effect:</strong> Photons are massless particles traveling at light speed, carrying momentum p = E/c = h/λ. The photoelectric effect, explained by Einstein in 1905, shows that light's energy is quantized. A single photon can eject one electron if its energy exceeds the material's work function W: E = hf = W + KE_electron. Example: copper has work function 4.5 eV. Visible light (1.8–3.1 eV) cannot eject electrons. Ultraviolet at 3.9 eV (λ ≈ 318 nm) can: KE = 3.9 − 4.5 = not possible. At 4.8 eV (λ ≈ 258 nm), KE = 4.8 − 4.5 = 0.3 eV. This explains why photosynthesis uses visible light (chlorophyll absorbs 1.8–3.0 eV) and why skin damage requires UV (3–4 eV).
      </p>
      <p>
        <strong>Worked Example:</strong> Calculate energy of green light at λ = 550 nm = 5.5 × 10⁻⁷ m. E = hc/λ = (6.626 × 10⁻³⁴) × (3 × 10⁸) / (5.5 × 10⁻⁷) = (6.626 × 3 / 5.5) × 10⁻³⁴⁺⁸⁺⁷ = 3.6 × 10⁻¹⁹ J. In eV: E = (3.6 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) ≈ 2.25 eV. A 100 W green laser operating 24 hours produces photons at 2.25 eV each. Power = energy per time: 100 J/s ÷ (3.6 × 10⁻¹⁹ J/photon) ≈ 2.8 × 10²⁰ photons/s—trillions per second.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Solar cells convert photon energy to electricity; silicon bandgap is 1.1 eV, so photons must exceed this. LEDs emit specific wavelengths (colors) depending on semiconductor bandgap. Fluorescence: a material absorbs high-energy UV photons, and electrons relax via multiple steps, emitting visible photons (lower energy). Thermal radiation from hot objects: Stefan-Boltzmann law predicts total power; Planck's law gives spectral distribution. Lasers emit coherent photons at a single frequency. Medical imaging (X-rays, gamma-ray tomography) uses high-energy photons to penetrate tissue. Atomic spectroscopy: elements absorb/emit photons at characteristic energies, creating absorption and emission line spectra.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing wavelength and frequency directions. Longer wavelength means lower frequency and lower energy. Visible red (~700 nm) has less energy than visible blue (~450 nm). Error 2: Using the wrong formula—E = hf for frequency input, E = hc/λ for wavelength input. Error 3: Unit errors. If λ is in nanometers, convert to meters first (1 nm = 10⁻⁹ m). If calculating in eV, use h = 4.136 × 10⁻¹⁵ eV·s directly instead of converting from joules. Error 4: Forgetting Planck's constant value: h = 6.626 × 10⁻³⁴ J·s or 4.136 × 10⁻¹⁵ eV·s. Error 5: Assuming photons have mass. Photons are massless; they have energy and momentum, but mass = 0. This is why they travel at light speed and cannot be slowed down.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Photon Energy Calculator"
      description="Calculate photon energy from wavelength or frequency"
      slug="photon-energy-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="input-type"
          label="Input Type"
          value={inputType}
          onChange={setInputType}
          options={[
            { value: "wavelength", label: "Wavelength" },
            { value: "frequency", label: "Frequency" },
          ]}
        />
        {inputType === "wavelength" && (
          <InputField
            id="wavelength"
            label="Wavelength"
            value={wavelength}
            onChange={setWavelength}
            suffix="m"
            min={1e-15}
            step={1e-7}
          />
        )}
        {inputType === "frequency" && (
          <InputField
            id="frequency"
            label="Frequency"
            value={frequency}
            onChange={setFrequency}
            suffix="Hz"
            min={0.1}
            step={1e12}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "photon-energy-calculator",
  title: "Photon Energy Calculator",
  shortTitle: "Photon Energy",
  description: "Calculate photon energy from wavelength or frequency",
  category: "physics",
  icon: "💫",
  keywords: ["photon", "energy", "light", "wavelength", "frequency"],
  component: PhotonEnergyCalculator,
  faqs: PHOTON_ENERGY_FAQS,
  dateModified: "2026-04-09",
});
