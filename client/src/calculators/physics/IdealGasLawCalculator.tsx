import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { IDEAL_GAS_LAW_FAQS } from "@/lib/faq-physics-advanced";

export default function IdealGasLawCalculator() {
  const [pressure, setPressure] = useState(101325);
  const [volume, setVolume] = useState(0.1);
  const [moles, setMoles] = useState(1);
  const [temperature, setTemperature] = useState(298.15);
  const [solveFor, setSolveFor] = useState("moles");

  const R = 8.314;

  let resultValue = (pressure * volume) / (R * temperature);
  let resultLabel = "Moles";
  let resultUnit = "mol";

  if (solveFor === "pressure") {
    resultValue = (moles * R * temperature) / volume;
    resultLabel = "Pressure";
    resultUnit = "Pa";
  } else if (solveFor === "volume") {
    resultValue = (moles * R * temperature) / pressure;
    resultLabel = "Volume";
    resultUnit = "m³";
  } else if (solveFor === "temperature") {
    resultValue = (pressure * volume) / (moles * R);
    resultLabel = "Temperature";
    resultUnit = "K";
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={resultLabel}
        value={`${formatNumber(resultValue, 4)} ${resultUnit}`}
        highlight={true}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">The Ideal Gas Law and Gas Behavior</h3>
      <p>
        The ideal gas law is a fundamental equation relating pressure, volume, temperature, and moles of gas: <strong>PV = nRT</strong>. Here, P is pressure in pascals (Pa), V is volume in cubic meters (m³), n is moles of gas, R is the universal gas constant (8.314 J/(mol·K)), and T is absolute temperature in kelvins (K). This single equation explains gas behavior under most everyday conditions. Rearranging: n = PV/(RT), P = nRT/V, V = nRT/P, T = PV/(nR). The law emerges from kinetic theory: gas molecules move randomly and collide with container walls, creating pressure. Higher temperature increases molecular speed and pressure; larger volume allows molecules to spread, decreasing pressure; more moles increases collisions and pressure. Ideal gas behavior assumes molecules have negligible size compared to container volume and exert no intermolecular forces—valid for low-density gases at moderate temperatures. Real gases deviate at high pressures or low temperatures where molecular size and interactions matter (van der Waals corrections apply).
      </p>
      <p>
        <strong>Understanding Variables and STP:</strong> Standard Temperature and Pressure (STP) is 0°C (273.15 K) and 1 atm (101,325 Pa). At STP, one mole of ideal gas occupies 22.4 liters (0.0224 m³). This is useful: if you know moles at STP, volume = 0.0224 × n m³. At room temperature (298.15 K) and 1 atm, one mole occupies ~0.024 m³. Isothermal processes (constant T) follow Boyle's Law: P₁V₁ = P₂V₂. Isobaric processes (constant P) follow Charles's Law: V/T = constant. Isochoric processes (constant V) follow Gay-Lussac's Law: P/T = constant. Adiabatic processes (no heat exchange) are more complex but fundamental to refrigeration and engine operation. Using absolute temperature (Kelvin) is essential—ratios only work with Kelvin, not Celsius.
      </p>
      <p>
        <strong>Worked Example:</strong> A tire contains 0.5 moles of air at 298.15 K (25°C) and atmospheric pressure (101,325 Pa). Volume: V = nRT/P = (0.5 × 8.314 × 298.15) / 101,325 ≈ 0.0122 m³ ≈ 12.2 liters. If you increase temperature to 323.15 K (50°C) at constant volume, new pressure: P = nRT/V = (0.5 × 8.314 × 323.15) / 0.0122 ≈ 109,700 Pa. The pressure increased about 8% for a 25 K (25°C) rise—this is why car tires inflate in heat and deflate in cold. Cooling that same tire to 273.15 K (0°C): P = (0.5 × 8.314 × 273.15) / 0.0122 ≈ 93,100 Pa, down 8%, confirming P ∝ T at constant V.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Balloons, weather balloons, and airships use PV = nRT to predict altitude and expansion. Pneumatic tools (air compressors, pneumatic drills) rely on ideal gas behavior for power delivery. Scuba diving tables use gas behavior at depth to prevent decompression sickness. Weather forecasting uses thermodynamics and gas laws for atmospheric modeling. Industrial processes (air separation to make liquid nitrogen, natural gas distribution) depend on precise gas calculations. Turbochargers and superchargers in engines compress air to increase density and power. Medical devices (oxygen delivery, anesthesia) use gas laws for precise dosing.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Forgetting to use absolute temperature (Kelvin). If you use Celsius directly in PV = nRT, the calculation fails completely—the equation is linear in T, so 0°C behaves as zero energy, which is wrong. Always add 273.15. Error 2: Unit confusion. R = 8.314 J/(mol·K) requires SI units: Pa, m³, mol, K. If pressure is in atm or kPa, convert first (1 atm = 101,325 Pa; 1 kPa = 1,000 Pa). Or use R in different units: 0.0821 L·atm/(mol·K) if P is in atm and V in liters. Error 3: Applying ideal gas law to liquids or solids—it only applies to gases. Error 4: Ignoring real-gas behavior at extreme conditions. Diving gases, cryogenic applications, and high-pressure systems need van der Waals equations or empirical corrections. Error 5: Confusing molar quantities with total amounts. The equation uses moles (n), not grams. Moles = mass / molar mass.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ideal Gas Law Calculator"
      description="Calculate pressure, volume, temperature, or moles using ideal gas law"
      slug="ideal-gas-law-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="solve-for"
          label="Calculate"
          value={solveFor}
          onChange={setSolveFor}
          options={[
            { value: "moles", label: "Moles (n)" },
            { value: "pressure", label: "Pressure (P)" },
            { value: "volume", label: "Volume (V)" },
            { value: "temperature", label: "Temperature (T)" },
          ]}
        />
        <InputField
          id="pressure"
          label="Pressure"
          value={pressure}
          onChange={setPressure}
          suffix="Pa"
          min={0.1}
          step={1000}
        />
        <InputField
          id="volume"
          label="Volume"
          value={volume}
          onChange={setVolume}
          suffix="m³"
          min={0.001}
          step={0.01}
        />
        <InputField
          id="moles"
          label="Moles"
          value={moles}
          onChange={setMoles}
          suffix="mol"
          min={0.01}
          step={0.1}
        />
        <InputField
          id="temperature"
          label="Temperature"
          value={temperature}
          onChange={setTemperature}
          suffix="K"
          min={1}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "ideal-gas-law-calculator",
  title: "Ideal Gas Law Calculator",
  shortTitle: "Ideal Gas Law",
  description: "Calculate gas properties using the ideal gas law (PV = nRT)",
  category: "physics",
  icon: "💨",
  keywords: ["ideal gas law", "pressure", "volume", "temperature"],
  component: IdealGasLawCalculator,
  faqs: IDEAL_GAS_LAW_FAQS,
  dateModified: "2026-04-09",
});
