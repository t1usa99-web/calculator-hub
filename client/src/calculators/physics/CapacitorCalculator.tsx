import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CapacitorCalculator() {
  const [capacitance, setCapacitance] = useState(0.001);
  const [voltage, setVoltage] = useState(12);

  const charge = capacitance * voltage;
  const energy = 0.5 * capacitance * voltage * voltage;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Charge"
        value={`${formatNumber(charge, 4)} C`}
        highlight={true}
      />
      <ResultCard
        label="Energy Stored"
        value={`${formatNumber(energy, 4)} J`}
        highlight={true}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Capacitors and Charge Storage</h3>
      <p>
        A capacitor is a two-terminal electronic component that stores electrical charge and energy. The relationship between charge, capacitance, and voltage is <strong>Q = CV</strong>, where Q is charge in coulombs (C), C is capacitance in farads (F), and V is voltage in volts (V). One farad is enormous—most practical capacitors are measured in microfarads (μF = 10⁻⁶ F), nanofarads (nF = 10⁻⁹ F), or picofarads (pF = 10⁻¹² F). The energy stored in a capacitor is <strong>U = ½CV²</strong> in joules, showing that energy scales with the square of voltage—doubling the voltage quadruples stored energy. Capacitors block direct current but allow alternating current through, making them essential for signal coupling, filtering, and timing circuits. Unlike resistors, ideal capacitors dissipate no power; they store and release energy. In combination, capacitors in series share voltage (inverse relationship like parallel resistors), and capacitors in parallel share charge (additive like series resistors).
      </p>
      <p>
        <strong>Understanding Capacitance and Energy:</strong> Capacitance is the ability to store charge at a given voltage; it depends on physical geometry (plate area, separation) and dielectric material between the plates. A larger plate area or smaller separation increases capacitance. The dielectric constant (relative permittivity) of the material between plates multiplies the base capacitance—this is why ceramic, film, and electrolytic capacitors have different values for the same physical size. The energy formula U = ½CV² reveals that voltage matters far more than capacitance: a 100 V capacitor stores 100 times more energy than a 10 V capacitor of the same faradic value. In applications like camera flash circuits or power factor correction, large capacitors charged to high voltages store substantial energy and can deliver powerful, fast pulses. Time constant RC (resistance × capacitance, in seconds) governs charge/discharge rates: a 1 kΩ resistor and 1 μF capacitor have RC = 1 kΩ × 1 μF = 10⁻³ seconds = 1 millisecond.
      </p>
      <p>
        <strong>Worked Example:</strong> A 10 μF (0.00001 F) capacitor charged to 48 V stores charge Q = 0.00001 × 48 = 0.00048 C = 0.48 mC (millicoulombs) and energy U = 0.5 × 0.00001 × 48² = 0.5 × 0.00001 × 2,304 = 0.01152 J ≈ 11.5 millijoules. If this capacitor discharges through a 1 kΩ resistor, the RC time constant is 0.00001 × 1,000 = 0.01 seconds. The voltage decays exponentially: after 0.01 s, it falls to 48 × e⁻¹ ≈ 17.7 V. This governs filter response and is fundamental in signal processing and amplifier design.
      </p>
      <p>
        <strong>Real-World Applications:</strong> Smoothing capacitors in power supplies remove ripple from rectified AC. Coupling capacitors block DC while passing AC signals to the next stage. Timing circuits (like 555 timers) use RC time constants for delay and oscillation. Touchscreen displays rely on capacitive sensing. Defibrillators and flashcubes use large capacitors to deliver rapid energy pulses. Power factor correction capacitors improve efficiency in AC systems by compensating for reactive power. Audio crossovers use capacitors to route high frequencies to tweeters and low frequencies to woofers. Understanding capacitor ratings (voltage, capacitance, ESR for high-frequency use) is critical for circuit reliability.
      </p>
      <p>
        <strong>Common Mistakes:</strong> Error 1: Exceeding voltage rating. A 16 V capacitor charged to 50 V will fail or explode. Electrolytic capacitors are particularly sensitive and are polarized—reversing the connection destroys them. Error 2: Confusing series and parallel rules. Capacitors in series divide voltage (so use lower-rated capacitors in high-voltage applications) and reduce total capacitance. Error 3: Ignoring leakage current in electrolytic capacitors. Over time, they slowly discharge (unlike ideal capacitors). Error 4: Forgetting that RC time constants are temperature-dependent—heating a circuit changes charge and discharge rates. Error 5: Using capacitors without considering equivalent series resistance (ESR), which matters in switching supplies and high-frequency circuits. Higher ESR causes heat and efficiency losses.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Capacitor Calculator"
      description="Calculate charge and energy stored in a capacitor"
      slug="capacitor-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="capacitance"
          label="Capacitance"
          value={capacitance}
          onChange={setCapacitance}
          suffix="F"
          min={1e-12}
          step={0.00001}
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
      </div>
    </CalculatorLayout>
  );
}
