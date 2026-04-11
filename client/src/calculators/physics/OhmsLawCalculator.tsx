import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState(12);
  const [current, setCurrent] = useState(2);
  const [resistance, setResistance] = useState(6);
  const [solveFor, setSolveFor] = useState("power");

  let resultValue = voltage * current;
  let resultLabel = "Power";
  let resultUnit = "W";

  if (solveFor === "voltage") {
    resultValue = current * resistance;
    resultLabel = "Voltage";
    resultUnit = "V";
  } else if (solveFor === "current") {
    resultValue = voltage / resistance;
    resultLabel = "Current";
    resultUnit = "A";
  } else if (solveFor === "resistance") {
    resultValue = resistance > 0 ? voltage / current : 0;
    resultLabel = "Resistance";
    resultUnit = "Ω";
  }

  const power = voltage * current;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label={resultLabel} value={`${formatNumber(resultValue, 2)} ${resultUnit}`} highlight={true} />
      {solveFor !== "power" && (
        <ResultCard label="Power" value={`${formatNumber(power, 2)} W`} />
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Ohm's Law and Circuit Fundamentals</h3>
      <p>
        Ohm's Law states: <strong>V = IR</strong> (voltage equals current times resistance). This simple linear relationship describes how current flows through a conductor when voltage is applied. Georg Ohm discovered this empirically in 1827, and it forms the foundation of circuit analysis. In SI units, V is measured in volts (V), I in amperes (A), and R in ohms (Ω). Example: a 12 V battery through a 4 Ω resistor produces I = 12/4 = 3 A of current. Conversely, if 2 A flows through a 5 Ω resistor, the voltage drop is V = 2 × 5 = 10 V. The relationship is linear for most materials (called ohmic materials), meaning doubling voltage doubles current. Non-ohmic materials like diodes and light bulb filaments violate this linear relationship, their resistance changing with voltage or temperature.
      </p>
      <p>
        <strong>Three Forms of Ohm's Law:</strong> The equation can be rearranged to solve for any unknown. <strong>For voltage:</strong> V = IR (example: 5 A through 3 Ω requires 15 V). <strong>For current:</strong> I = V/R (example: 10 V across 2 Ω allows 5 A flow). <strong>For resistance:</strong> R = V/I (example: if 3 A flows at 12 V, resistance is 4 Ω). A memory aid is the "Ohm's Law triangle"—cover the unknown variable and the remaining two show the relationship. These forms solve real problems: sizing power supplies, selecting resistors, calculating wire gauges, and preventing dangerous overcurrent conditions. Practical work requires fluency with all three forms.
      </p>
      <p>
        <strong>Power and Ohm's Law:</strong> Electric power P = VI (voltage times current) in watts. Combined with Ohm's Law, power can be expressed three ways: <strong>P = VI = I²R = V²/R</strong>. Example: a 100 W light bulb at 120 V draws I = 100/120 ≈ 0.83 A. Using P = I²R: if we measure 0.83 A, then R = 120/0.83 ≈ 145 Ω and P = (0.83)² × 145 ≈ 100 W (confirmed). The I²R form shows that power dissipation increases with the square of current—doubling current quadruples heat. This is why high-current applications use thick wires (lower resistance, less heating) and why power lines use high voltage to reduce current for the same power (P = VI is constant, so lower I means lower losses).
      </p>
      <p>
        <strong>Real-World Applications:</strong> Household circuits typically have 15–20 A capacity. A 120 V / 15 A circuit can safely handle P = 120 × 15 = 1,800 W. Plugging in a 2,000 W heater overloads it, tripping the breaker. Smartphone chargers output 5 V at up to 3 A (15 W). Laptop chargers often 19 V at 3–4 A (60–76 W). Electric cars charge at 240 V, 30–50 A (7–12 kW). Understanding Ohm's Law explains why higher voltage charging is faster—at constant power, higher voltage means lower current, which heats wires less and allows faster charging without fire risk.
      </p>
      <p>
        <strong>Common Mistakes and Limits:</strong> Error 1: Forgetting Ohm's Law applies to conductors under normal conditions, not to devices with active components (transistors, ICs). Error 2: Using ohms when resistances are given in different units (kilohms, megohms). Convert first: 1 kΩ = 1,000 Ω. Error 3: Applying the law across voltage drops in circuits without identifying which components are in series or parallel. Error 4: Confusing voltage (potential difference) with energy. Voltage is energy per charge; current is charge per time. At extreme temperatures, very high voltages, or with non-ohmic materials, the linear relationship breaks down. Superconductors have R = 0, violating Ohm's Law. Semiconductors exhibit complex nonlinear behavior. Understanding when Ohm's Law applies and when alternative models are needed is crucial for advanced circuit design.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ohm's Law Calculator"
      description="Calculate voltage, current, resistance, and power"
      slug="ohms-law-calculator"
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
            { value: "power", label: "Power (V × I)" },
            { value: "voltage", label: "Voltage (I × R)" },
            { value: "current", label: "Current (V / R)" },
            { value: "resistance", label: "Resistance (V / I)" },
          ]}
        />
        <InputField
          id="voltage"
          label="Voltage"
          value={voltage}
          onChange={setVoltage}
          suffix="V"
          min={0}
          step={0.1}
        />
        <InputField
          id="current"
          label="Current"
          value={current}
          onChange={setCurrent}
          suffix="A"
          min={0.001}
          step={0.1}
        />
        <InputField
          id="resistance"
          label="Resistance"
          value={resistance}
          onChange={setResistance}
          suffix="Ω"
          min={0.001}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}
