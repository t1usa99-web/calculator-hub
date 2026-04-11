import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function ElectricPowerCalculator() {
  const [voltage, setVoltage] = useState(120);
  const [current, setCurrent] = useState(5);

  const power = voltage * current;
  const powerKw = power / 1000;
  const powerHp = power / 745.7;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Power"
        value={`${formatNumber(power, 2)} W`}
        highlight={true}
      />
      <ResultCard label="In Kilowatts" value={`${formatNumber(powerKw, 4)} kW`} />
      <ResultCard label="In Horsepower" value={`${formatNumber(powerHp, 4)} HP`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Electric Power and Energy</h3>
      <p>
        Electric power is the rate at which electrical energy is consumed or delivered by a circuit. The fundamental formula is <strong>P = V &times; I</strong> where P is power in watts (W), V is voltage in volts (V), and I is current in amperes (A). A watt is defined as one joule of energy delivered per second. Power represents the rate of energy flow—higher power means faster delivery or consumption of energy. This is why a 100 W light bulb is brighter than a 40 W bulb: it uses energy four times faster. Power can also be expressed as <strong>P = I²R</strong> (resistive dissipation) or <strong>P = V²/R</strong> (voltage across a load), all derived from Ohm's Law. In household applications, power is often quoted in kilowatts (kW), where 1 kW = 1,000 W. Energy consumption is power integrated over time: a 1 kW appliance run for 1 hour consumes 1 kilowatt-hour (kWh), the unit your electricity meter measures.
      </p>
      <p>
        <strong>Understanding the Formula:</strong> P = V × I shows that power is the product of voltage and current. Doubling the voltage doubles power; doubling the current also doubles power—but the I² term in P = I²R shows that resistive heating increases with the square of current. This is why power lines transmit electricity at high voltage and low current: the I²R losses in transmission wires are minimized. Example: a 120 V household outlet with 10 A flowing delivers P = 120 × 10 = 1,200 W. The same 1,200 W at higher voltage (240 V) requires only I = 1,200 / 240 = 5 A, cutting transmission losses fourfold (from 10² to 5² in the I²R term). Horsepower (HP), an older imperial unit, equals 745.7 W—so a 1 HP motor consumes 745.7 W of power.
      </p>
      <p>
        <strong>Worked Example:</strong> A typical household microwave oven operates at 120 V and draws 10 A. Its power consumption is P = 120 × 10 = 1,200 W = 1.2 kW. Running this microwave for 30 minutes consumes energy = 1.2 kW × 0.5 hours = 0.6 kWh. At a typical US electricity rate of 12 cents per kWh, this half-hour of microwaving costs 0.6 × $0.12 = $0.072, or about 7 cents. A laptop charger rated 65 W running for 8 hours daily consumes 65 × 8 / 1,000 = 0.52 kWh daily, or about 15.6 kWh per month—roughly 2 dollars a month at typical rates.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Household circuits are typically rated 15 A at 120 V (total capacity 1,800 W) or 20 A (2,400 W). This is why plugging a 2,000 W space heater and a 1,500 W hair dryer into the same 15 A circuit trips the breaker. Electric vehicle chargers at home use 240 V (US) and 30–50 A, delivering 7–12 kW—orders of magnitude faster than 120 V charging. Industrial motors and machinery operate at three-phase AC and higher voltages to deliver power efficiently. Understanding power ratings lets you safely plan electrical loads and avoid overloads.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Confusing power (watts) with energy (joules or kilowatt-hours). Power is an instantaneous rate; energy is cumulative. Error 2: Forgetting to convert units—mixing milliamps with amps, or milliwatts with watts. A device rated 500 mA at 5 V is 500 × 10⁻³ × 5 = 2.5 W, not 2,500 W. Error 3: Assuming high-voltage devices are more dangerous. Risk comes from power (especially current through the body), not voltage alone—though both matter. Error 4: Forgetting that real appliances vary in power—a refrigerator compressor cycles on and off, so average power differs from nameplate rating. Accounting for actual duty cycles gives true energy costs.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Electric Power Calculator"
      description="Calculate power from voltage and current"
      slug="electric-power-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
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
      </div>
    </CalculatorLayout>
  );
}
