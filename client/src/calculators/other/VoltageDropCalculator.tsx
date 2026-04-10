import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function VoltageDropCalculator() {
  const [voltage, setVoltage] = useState(120);
  const [current, setCurrent] = useState(20);
  const [length, setLength] = useState(100);
  const [gauge, setGauge] = useState("12");

  // Wire resistance per 1000 feet at 68°F (ohms)
  const wireResistance: Record<string, number> = {
    "14": 3.06,
    "12": 1.93,
    "10": 1.21,
    "8": 0.764,
    "6": 0.481,
    "4": 0.302,
    "2": 0.192,
    "1": 0.153,
    "0": 0.121,
    "00": 0.096,
    "000": 0.076,
    "0000": 0.06,
  };

  const resistance = (wireResistance[gauge] * length) / 1000;

  // Voltage drop formula: Vdrop = 2 × I × R × L / 1000
  // Simplified: Vdrop = (wireResistance[gauge] * 2 * current * length) / 1000
  const voltageDrop = (wireResistance[gauge] * 2 * current * length) / 1000;
  const percentDrop = (voltageDrop / voltage) * 100;
  const endVoltage = voltage - voltageDrop;

  const necMax = voltage * 0.03; // NEC allows max 3%
  const isWithinNEC = percentDrop <= 3;

  const chartData = [
    { metric: "Supply Voltage", value: voltage },
    { metric: "End Voltage", value: endVoltage },
    { metric: "Voltage Drop", value: voltageDrop },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Supply Voltage" value={formatNumber(voltage, 1) + " V"} />
      <ResultCard label="Current" value={formatNumber(current, 1) + " A"} />
      <ResultCard label="Wire Gauge" value={"AWG " + gauge} />
      <ResultCard label="Wire Length" value={formatNumber(length, 1) + " ft"} />
      <ResultCard label="Wire Resistance" value={formatNumber(resistance, 4) + " Ω"} />
      <ResultCard label="Voltage Drop" value={formatNumber(voltageDrop, 2) + " V"} highlight />
      <ResultCard label="Percent Drop" value={formatNumber(percentDrop, 2) + "%"} />
      <ResultCard label="End Voltage" value={formatNumber(endVoltage, 2) + " V"} highlight={isWithinNEC} />
      <ResultCard
        label="NEC Compliance"
        value={isWithinNEC ? "OK (" + formatNumber(percentDrop, 2) + "% {<} 3%)" : "EXCEEDS (" + formatNumber(percentDrop, 2) + "% {>} 3%)"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Voltage at Different Points
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="metric" />
          <YAxis label={{ value: "Voltage (V)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Bar dataKey="value" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Voltage drop occurs when electrical current flows through a wire, losing some voltage due to the wire's resistance. In long runs (like outdoor wiring or remote equipment), voltage drop can be significant, reducing the voltage available at the load. The National Electrical Code (NEC) recommends maximum voltage drop of 3% on branch circuits and 5% combined for feeder and branch. Excessive voltage drop reduces equipment efficiency, causes motors to run slowly, dims lights, and can damage sensitive electronics.
      </p>

      <p>
        <strong>The Voltage Drop Formula:</strong> Vdrop = (2 × Resistance per 1000 ft × Current × Length) / 1000. The factor 2 accounts for round-trip current (to and from the load). Wire gauge (AWG) determines resistance per 1000 feet. Smaller gauges (higher numbers like 14 AWG) have higher resistance; larger gauges (2, 0, 000) have lower resistance. Doubling the wire gauge reduces resistance significantly. For example, 12 AWG has 1.93 ohms per 1000 ft, while 10 AWG has only 1.21 ohms. Choosing the right gauge prevents voltage drop problems.
      </p>

      <p>
        <strong>Wire Gauge Selection:</strong> Proper gauge depends on current, distance, and acceptable voltage drop. A 20-amp circuit at 120V over 100 feet requires 12 AWG wire (14 AWG would exceed 3% drop). Longer distances or higher currents need larger gauges. Subpanels or outdoor circuits require careful calculation to prevent drops. Undersizing wire (too small gauge) costs less upfront but causes heat, efficiency loss, and potential fire risk. Oversizing wire costs more but ensures safe, efficient operation. This calculator helps determine if a given wire size is adequate for your application.
      </p>

      <p>
        <strong>Real-world Applications:</strong> Outdoor lighting on long runs (50+ feet) often requires larger gauge to prevent voltage drop that dims lights. Pool pumps and hot tubs far from the main panel need oversized wiring. EV chargers drawing high current over distance require careful gauge selection. RV extension cords and marine wiring have specific gauge requirements based on distance and current. Solar installations with long DC runs from panels to inverter need appropriately sized conductors. Agricultural equipment in barns far from power requires proper gauge to prevent motor performance issues. Always follow NEC and local electrical code requirements.
      </p>

      <p>
        <strong>Temperature Effects:</strong> Wire resistance increases with temperature, so voltage drop is worse in hot weather or in hot conduits. Copper wire changes resistance by about 0.4% per degree Fahrenheit. This calculator assumes 68°F standard. In extreme heat, actual voltage drop can be higher. Proper ventilation, conduit spacing, and wire sizing help manage heat-related resistance increase. Aluminum wire has higher resistance than copper and is less commonly used in residential wiring, but when used requires larger gauges. Underground runs and conduit routing affect cooling and should be considered in voltage drop calculations.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Voltage Drop Calculator"
      description="Calculate voltage drop in electrical circuits by wire length and gauge"
      slug="voltage-drop-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <SelectField
        id="voltage"
        label="Supply Voltage"
        value={voltage.toString()}
        onChange={(v) => setVoltage(parseInt(v))}
        options={[
          { label: "120V", value: "120" },
          { label: "240V", value: "240" },
          { label: "277V", value: "277" },
          { label: "480V", value: "480" },
        ]}
      />
      <InputField
        id="current"
        label="Current (Amps)"
        value={current}
        onChange={setCurrent}
        step={1}
        min={1}
      />
      <InputField
        id="length"
        label="Wire Length (feet, one-way)"
        value={length}
        onChange={setLength}
        step={10}
        min={1}
      />
      <SelectField
        id="gauge"
        label="Wire Gauge (AWG)"
        value={gauge}
        onChange={setGauge}
        options={[
          { label: "14 AWG (3.06 Ω/1000ft)", value: "14" },
          { label: "12 AWG (1.93 Ω/1000ft)", value: "12" },
          { label: "10 AWG (1.21 Ω/1000ft)", value: "10" },
          { label: "8 AWG (0.764 Ω/1000ft)", value: "8" },
          { label: "6 AWG (0.481 Ω/1000ft)", value: "6" },
          { label: "4 AWG (0.302 Ω/1000ft)", value: "4" },
          { label: "2 AWG (0.192 Ω/1000ft)", value: "2" },
          { label: "1 AWG (0.153 Ω/1000ft)", value: "1" },
          { label: "0 AWG (0.121 Ω/1000ft)", value: "0" },
          { label: "00 AWG (0.096 Ω/1000ft)", value: "00" },
        ]}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: VoltageDropCalculator,
  slug: "voltage-drop-calculator",
  title: "Voltage Drop Calculator",
  shortTitle: "Voltage Drop",
  description: "Calculate voltage drop in electrical wiring by distance and gauge",
  category: "other",
  icon: "⚡",
  keywords: ["voltage drop calculator", "wire gauge", "electrical voltage", "NEC"],
  popular: false,
  faqs: [
    {
      question: "What is voltage drop and why should I care about it?",
      answer:
        "Voltage drop is the loss of electrical voltage as current travels through a wire due to the wire's resistance. A 120V circuit over a long distance might deliver only 115V at the end, losing 5V to resistance. This matters because devices need sufficient voltage to operate correctly. Lights dim, motors run slower and hotter, and electronics may malfunction or be damaged. The National Electrical Code limits voltage drop to 3% on branch circuits and 5% combined, ensuring equipment receives adequate voltage for proper operation and safety.",
    },
    {
      question: "How do I choose the correct wire gauge to prevent excessive voltage drop?",
      answer:
        "Use this calculator to determine voltage drop for your specific current, distance, and wire gauge. If drop exceeds 3%, try the next larger gauge (smaller AWG number). For example, if 12 AWG exceeds 3%, try 10 AWG. Larger gauges have lower resistance and less voltage drop. For a 20-amp, 120V circuit over 100 feet, 12 AWG is usually adequate. For 30 amps over 50 feet, 8 AWG might be needed. Always verify with local electrical code and consult a licensed electrician for critical applications. Oversizing wire is safer than undersizing.",
    },
    {
      question: "What does AWG mean and why are larger gauges smaller numbers?",
      answer:
        "AWG stands for American Wire Gauge. Confusingly, larger wires have smaller numbers: 14 AWG is thin, 0000 AWG is very thick. The scale is logarithmic. Each reduction of 3 in gauge approximately doubles the cross-sectional area and halves the resistance. So 12 AWG is roughly twice the cross-section and half the resistance of 14 AWG. This backward convention originated from manufacturing but causes confusion. Remember: higher numbers = thinner wire = higher resistance. Always check the gauge number when selecting wire; don't confuse it with wire diameter.",
    },
    {
      question: "How does temperature affect voltage drop?",
      answer:
        "Wire resistance increases with temperature. Copper wire increases resistance by about 0.4% per degree Fahrenheit above the standard 68°F reference. In hot summer conditions (95°F), wire resistance is noticeably higher, increasing voltage drop. This means circuits in attics, conduits in direct sun, or enclosed spaces have higher actual drop than calculations suggest. Proper ventilation and spacing of wires in conduits helps manage heat. Underground runs and conduit routing should consider thermal effects. For precise calculations in extreme conditions, consult electrical engineering tables for temperature-adjusted resistance values.",
    },
    {
      question: "What is the difference between copper and aluminum wire for voltage drop?",
      answer:
        "Copper has lower resistivity (about 10.37 microohms per cm) than aluminum (about 16.78 microohms per cm). Copper wire has 35-40% lower resistance than aluminum wire of the same gauge. This means aluminum requires larger gauges to achieve the same voltage drop as copper. Aluminum wire is cheaper but less common in residential use due to corrosion and connection issues. In commercial and industrial applications, aluminum is sometimes used for large runs (2 AWG and larger). If using aluminum, consult resistance tables and increase gauge compared to copper. Mixed copper-aluminum connections require special precautions to prevent corrosion.",
    },
  ],
  dateModified: "2026-04-10",
});
