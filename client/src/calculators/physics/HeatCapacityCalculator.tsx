import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { HEAT_CAPACITY_FAQS } from "@/lib/faq-physics-advanced";

export default function HeatCapacityCalculator() {
  const [mass, setMass] = useState(1);
  const [specificHeat, setSpecificHeat] = useState(4186);
  const [tempChange, setTempChange] = useState(10);

  const heat = mass * specificHeat * tempChange;
  const heatKj = heat / 1000;
  const heatKcal = heat / 4184;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Heat Energy"
        value={`${formatNumber(heat, 2)} J`}
        highlight={true}
      />
      <ResultCard label="In Kilojoules" value={`${formatNumber(heatKj, 4)} kJ`} />
      <ResultCard label="In Kilocalories" value={`${formatNumber(heatKcal, 4)} kcal`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Heat Capacity and Specific Heat</h3>
      <p>
        Heat capacity is the amount of thermal energy required to raise the temperature of a substance by one degree. The fundamental relationship is <strong>Q = m c ΔT</strong>, where Q is heat in joules (J), m is mass in kilograms (kg), c is specific heat capacity in joules per kilogram-kelvin (J/(kg·K)), and ΔT is temperature change in kelvins (K) or degrees Celsius (°C, same magnitude). Specific heat is an intensive property—it depends on the material, not the amount. Water has a remarkably high specific heat of 4,186 J/(kg·K), meaning it takes 4,186 joules to warm 1 kg of water by 1 K. This high value explains why water is an excellent heat storage medium: oceans moderate climate, and hot water systems efficiently store thermal energy. Different materials have different specific heats: aluminum (897 J/(kg·K)) and steel (490 J/(kg·K)) warm faster than water. Molar heat capacity is similar but per mole instead of per kilogram: Cᵥ (constant volume) and Cₚ (constant pressure) differ slightly for gases.
      </p>
      <p>
        <strong>Understanding Heat and Temperature:</strong> Heat is energy in transit due to temperature difference; temperature measures average molecular kinetic energy. The SI unit for heat is joule (J); older calorie units (1 cal ≈ 4.184 J) persist in cooking (food "calories" are actually kilocalories, 1,000 cal). Heat flows from hot to cold. The sign convention: Q is positive when heat is added to a substance (warming), negative when removed (cooling). The equation Q = mcΔT applies to phase changes differently—during melting or boiling, temperature stays constant while heat is consumed (latent heat), not used for temperature rise. The distinction matters: boiling water from 90°C to 100°C uses far less energy than the phase change at 100°C.
      </p>
      <p>
        <strong>Worked Example:</strong> Heat 2 kg of aluminum (c = 897 J/(kg·K)) from 20°C to 80°C (ΔT = 60 K): Q = 2 × 897 × 60 = 107,640 J ≈ 107.6 kJ ≈ 25.7 kcal. The same 2 kg of water would require Q = 2 × 4,186 × 60 = 502,320 J ≈ 502.3 kJ ≈ 120 kcal—nearly five times more energy. This is why heating water for showers and baths dominates household energy consumption, and why swimming pools retain heat longer than aluminum ponds.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Building thermal mass (concrete, brick, water) absorbs daytime heat and releases it at night, moderating temperature swings. Heat sink designs for electronics use high-conductivity metals with reasonable specific heat to dissipate power. Climate systems and refrigeration exploit specific heat differences. Food cooking relies on controlled heat transfer; understanding specific heat predicts heating times. Thermal comfort in buildings depends on material thermal properties. Cryogenic systems use materials with low specific heat at extreme temperatures. Industrial processes optimize energy consumption by selecting appropriate materials and temperatures.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing heat (joules) with temperature (kelvins). Q = mcΔT has heat and temperature as separate variables. Error 2: Using calories instead of joules without converting—1 cal ≈ 4.184 J. If given c in cal/(g·°C), convert to SI before calculations. Error 3: Forgetting mass and specific heat both matter. Doubling mass doubles required heat; doubling specific heat also doubles heat. Error 4: Applying the formula across phase changes. Ice warming to 0°C uses Q = mcΔT, but melting at 0°C uses latent heat of fusion (334 kJ/kg for ice), independent of temperature change. Error 5: Ignoring pressure effects. Cₚ (at constant pressure, as in open containers) exceeds Cᵥ (constant volume) for gases. For liquids and solids, the difference is negligible.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Heat Capacity Calculator"
      description="Calculate heat energy required to change temperature"
      slug="heat-capacity-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="mass"
          label="Mass"
          value={mass}
          onChange={setMass}
          suffix="kg"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="specific-heat"
          label="Specific Heat"
          value={specificHeat}
          onChange={setSpecificHeat}
          suffix="J/(kg·K)"
          min={1}
          step={100}
          hint="Water: 4186, Aluminum: 897, Steel: 490"
        />
        <InputField
          id="temp-change"
          label="Temperature Change"
          value={tempChange}
          onChange={setTempChange}
          suffix="K"
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "heat-capacity-calculator",
  title: "Heat Capacity Calculator",
  shortTitle: "Heat Capacity",
  description: "Calculate heat energy from mass, specific heat, and temperature change",
  category: "physics",
  icon: "🔥",
  keywords: ["heat", "specific heat capacity", "temperature", "thermodynamics"],
  component: HeatCapacityCalculator,
  faqs: HEAT_CAPACITY_FAQS,
  dateModified: "2026-04-09",
});
