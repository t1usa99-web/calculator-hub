import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { HALF_LIFE_FAQS } from "@/lib/faq-physics-advanced";

export default function HalfLifeCalculator() {
  const [initialAmount, setInitialAmount] = useState(100);
  const [halfLife, setHalfLife] = useState(5.27);
  const [elapsedTime, setElapsedTime] = useState(10);

  const remaining = initialAmount * Math.pow(0.5, elapsedTime / halfLife);
  const decayConstant = Math.LN2 / halfLife;
  const percentRemaining = (remaining / initialAmount) * 100;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Remaining Amount"
        value={`${formatNumber(remaining, 2)} units`}
        highlight={true}
      />
      <ResultCard label="Decay Constant (λ)" value={`${decayConstant.toExponential(3)} /unit time`} />
      <ResultCard label="Percent Remaining" value={`${formatNumber(percentRemaining, 2)}%`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Radioactive Decay and Half-Life</h3>
      <p>
        Radioactive decay is the spontaneous transformation of unstable atomic nuclei into more stable forms, emitting particles (alpha, beta, gamma rays). The decay rate follows exponential decay: <strong>N(t) = N₀ × (½)^(t/T)</strong>, where N(t) is the number of nuclei remaining after time t, N₀ is the initial amount, T is the half-life (time for half to decay), and t is elapsed time. The half-life is characteristic to each isotope: Uranium-238 has T ≈ 4.5 billion years, Carbon-14 ≈ 5,730 years, Iodine-131 ≈ 8 days, Technetium-99m ≈ 6 hours. After one half-life, 50% remains. After two, 25%. After ten half-lives, only 0.1% remains. This predictable behavior is fundamental to carbon dating, medical imaging, nuclear power, and radiation safety. The decay constant λ (lambda) relates to half-life: λ = ln(2) / T ≈ 0.693 / T, and the decay formula can also be written N(t) = N₀ e^(−λt), showing exponential decay.
      </p>
      <p>
        <strong>Understanding Exponential Decay and Applications:</strong> Exponential decay means the fraction decaying per unit time is constant, regardless of total amount. If 10% decay per hour, then 10% of whatever remains decays the next hour. This contrasts with linear decay (fixed amount per unit time). Radioactive dating exploits this: Carbon-14 is constantly produced in the atmosphere by cosmic rays and incorporated into living organisms. When an organism dies, it stops absorbing C-14, and existing C-14 decays. By measuring the C-14/C-12 ratio, age is calculated: N(t) / N₀ = (age / half-life), solve for age. Example: a sample retains 25% of C-14, meaning it's (2 × 5,730) = 11,460 years old (two half-lives). Limits: C-14 dating works to ~50,000 years (about 8 half-lives, where measurement becomes unreliable). Potassium-40 (T ≈ 1.3 billion years) dates older rocks.
      </p>
      <p>
        <strong>Worked Example:</strong> Iodine-131 (T = 8 days) is released in nuclear accidents. A sample contains 1,000 Bq (decays per second). After 24 days (3 half-lives): N = 1,000 × (0.5)³ = 1,000 × 0.125 = 125 Bq. Remaining fraction: 12.5%. For safety, contamination is often monitored until 10 half-lives (80 days), leaving 0.1%, considered negligible. Carbon-14 dating: a 10,000-year-old artifact has N/N₀ = (0.5)^(10,000/5,730) = (0.5)^1.746 ≈ 0.297 = 29.7% of original C-14. Measuring C-14 in the sample and comparing to living standards reveals this ratio, allowing age calculation.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Medical imaging: Technetium-99m (T = 6 hours) is injected into patients; its location in the body is tracked via gamma-ray detection. The short half-life minimizes radiation dose. PET scanners use fluorine-18 (T = 110 minutes) or other short-lived isotopes synthesized at the facility. Radiation therapy uses cobalt-60 (T = 5.3 years) or iridium-192 for cancer treatment. Sterilization of medical equipment uses gamma rays from Cobalt-60. Nuclear power plants manage spent fuel with decaying isotopes; plutonium-239 (T = 24,000 years) requires long-term containment. Smoke detectors use Americium-241 (T = 432 years) to ionize air. Archaeological dating via C-14 has revolutionized historical chronology.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing half-life with mean lifetime. Mean lifetime = T / ln(2) ≈ 1.44 × T. After mean lifetime, 36.8% remains (not 50%). Error 2: Linear extrapolation. Assuming linear decay gives wrong results quickly. Exponential decay always is used. Error 3: Unit mismatch. If half-life is in years and elapsed time in days, convert to the same units first. Error 4: Applying the formula beyond reasonable range. C-14 dating becomes unreliable beyond ~50,000 years due to measurement precision limits, not the formula. Error 5: Confusing activity (decays per second, measured in Becquerels or Curies) with amount of substance. Activity A = λN, so both decay and amount matter. A dose of radiation depends on activity, type of radiation, and organ sensitivity, not just decay constant.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Half-Life Calculator"
      description="Calculate radioactive decay and remaining amount"
      slug="half-life-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-amount"
          label="Initial Amount"
          value={initialAmount}
          onChange={setInitialAmount}
          min={0.01}
          step={1}
        />
        <InputField
          id="half-life"
          label="Half-Life"
          value={halfLife}
          onChange={setHalfLife}
          suffix="(time units)"
          min={0.001}
          step={0.1}
          hint="C-14: 5,730 years; Y-90: 64.1 hours"
        />
        <InputField
          id="elapsed-time"
          label="Elapsed Time"
          value={elapsedTime}
          onChange={setElapsedTime}
          suffix="(same units as half-life)"
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "half-life-calculator",
  title: "Half-Life Calculator",
  shortTitle: "Half-Life",
  description: "Calculate radioactive decay using half-life formula",
  category: "physics",
  icon: "☢️",
  keywords: ["half-life", "radioactive decay", "nuclear", "dating"],
  component: HalfLifeCalculator,
  faqs: HALF_LIFE_FAQS,
  dateModified: "2026-04-09",
});
