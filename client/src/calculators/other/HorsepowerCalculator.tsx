import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function HorsepowerCalculator() {
  const [mode, setMode] = useState<"torque" | "weight" | "electrical">("torque");
  const [torque, setTorque] = useState(300);
  const [rpm, setRpm] = useState(6000);
  const [weight, setWeight] = useState(3000);
  const [speed, setSpeed] = useState(100);
  const [watts, setWatts] = useState(7460);

  // Horsepower calculations
  let hp = 0;
  let kw = 0;
  let ps = 0;

  if (mode === "torque") {
    // HP = torque × RPM / 5252
    hp = (torque * rpm) / 5252;
  } else if (mode === "weight") {
    // HP = weight × (speed / 234)^3
    hp = weight * Math.pow(speed / 234, 3);
  } else if (mode === "electrical") {
    // HP = watts / 745.7
    hp = watts / 745.7;
  }

  // Conversions
  kw = hp * 0.7457;
  ps = hp * 1.014; // PS (metric HP)

  const chartData = [
    { label: "HP", value: hp },
    { label: "kW", value: kw },
    { label: "PS", value: ps },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mode === "torque" && (
        <>
          <ResultCard label="Torque (ft-lbs)" value={formatNumber(torque, 1)} />
          <ResultCard label="RPM" value={formatNumber(rpm, 0)} />
        </>
      )}
      {mode === "weight" && (
        <>
          <ResultCard label="Weight (lbs)" value={formatNumber(weight, 1)} />
          <ResultCard label="Speed (mph)" value={formatNumber(speed, 1)} />
        </>
      )}
      {mode === "electrical" && (
        <ResultCard label="Watts" value={formatNumber(watts, 1)} />
      )}
      <ResultCard label="Horsepower (HP)" value={formatNumber(hp, 2)} highlight />
      <ResultCard label="Kilowatts (kW)" value={formatNumber(kw, 2)} />
      <ResultCard label="Metric HP (PS)" value={formatNumber(ps, 2)} />
      <ResultCard
        label={mode === "torque" ? "Formula" : "Mode"}
        value={mode === "torque" ? "HP = torque × RPM / 5252" : mode === "weight" ? "HP = weight × (speed / 234)³" : "HP = watts / 745.7"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Power Unit Comparison
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis label={{ value: "Power", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Bar dataKey="value" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Horsepower is a unit of power measuring the rate of work done. One horsepower is defined as 746 watts or 550 foot-pounds per second. Engines, motors, and vehicles are rated in horsepower to indicate their performance capability. Understanding horsepower helps evaluate machinery, vehicles, and equipment. Higher horsepower means more power output, translating to faster acceleration, better towing capacity, or higher speed potential.
      </p>

      <p>
        <strong>Torque vs. Horsepower:</strong> Torque is rotational force (measured in foot-pounds or Newton-meters), while horsepower is the rate at which work is done. A low-RPM engine with high torque (diesel trucks) can move heavy loads slowly. A high-RPM engine with lower torque but high horsepower (sports cars) accelerates quickly but may struggle with heavy loads. The relationship is HP = (torque × RPM) / 5252. Diesel engines peak torque at low RPM, then horsepower increases linearly. Gasoline engines build both more gradually. Understanding both is essential for choosing vehicles or equipment suited to specific tasks.
      </p>

      <p>
        <strong>Power Unit Conversions:</strong> Horsepower (HP) is commonly used in the US. Kilowatts (kW) are standard internationally and in electrical contexts. Metric horsepower (PS, "Pferdestärke") is used in European vehicle specs and is slightly higher than mechanical HP (1 HP = 0.7457 kW, 1 kW = 1.341 HP). Cars rated at 200 HP are 149.1 kW or 203 PS. This difference matters when comparing vehicles across regions. Modern electric motors are rated in kW, while older machinery often uses HP. All convert proportionally using standard factors.
      </p>

      <p>
        <strong>Vehicle and Equipment Applications:</strong> Small cars have 100-150 HP, midsize sedans 180-250 HP, performance cars 300+ HP. Trucks often emphasize torque over peak horsepower. Electric motors rate power in kW (typically 40-100 kW for EVs). Industrial equipment (compressors, pumps) ranges from fractional horsepower to thousands of HP. Aircraft engines produce thousands of horsepower. Understanding power requirements helps select equipment that can handle tasks without overloading or wasting capacity. Oversizing equipment increases cost; undersizing leads to poor performance and early failure.
      </p>

      <p>
        <strong>Practical Implications:</strong> A car's acceleration depends on the power-to-weight ratio. A 200 HP car weighing 3000 lbs has better acceleration than a 200 HP car weighing 5000 lbs. Towing capacity depends on torque, available power, and engine cooling. Trailer braking, transmission heat, and structural limits also matter. Hauling heavy loads uphill requires sustained high torque; level-ground towing requires less. Choosing a vehicle or engine involves balancing horsepower, torque, efficiency, and the specific demands of your use case. This calculator helps evaluate engines and motors for your needs.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Horsepower Calculator"
      description="Convert between horsepower, kilowatts, and metric horsepower"
      slug="horsepower-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <SelectField
        id="mode"
        label="Calculation Mode"
        value={mode}
        onChange={(v) => setMode(v as "torque" | "weight" | "electrical")}
        options={[
          { label: "Torque to HP", value: "torque" },
          { label: "Weight-Based HP", value: "weight" },
          { label: "Electrical (Watts)", value: "electrical" },
        ]}
      />

      {mode === "torque" && (
        <>
          <InputField
            id="torque"
            label="Torque (ft-lbs)"
            value={torque}
            onChange={setTorque}
            step={10}
            min={0}
          />
          <InputField
            id="rpm"
            label="RPM"
            value={rpm}
            onChange={setRpm}
            step={100}
            min={0}
          />
        </>
      )}

      {mode === "weight" && (
        <>
          <InputField
            id="weight"
            label="Vehicle Weight (lbs)"
            value={weight}
            onChange={setWeight}
            step={100}
            min={1000}
          />
          <InputField
            id="speed"
            label="Speed (mph)"
            value={speed}
            onChange={setSpeed}
            step={5}
            min={10}
          />
        </>
      )}

      {mode === "electrical" && (
        <InputField
          id="watts"
          label="Power (Watts)"
          value={watts}
          onChange={setWatts}
          step={100}
          min={0}
        />
      )}
    </CalculatorLayout>
  );
}

registerCalculator({
  component: HorsepowerCalculator,
  slug: "horsepower-calculator",
  title: "Horsepower Calculator",
  shortTitle: "Horsepower",
  description: "Calculate horsepower from torque, weight, or electrical power",
  category: "other",
  icon: "🏎️",
  keywords: ["horsepower calculator", "hp to kw", "torque to hp", "power conversion"],
  popular: false,
  faqs: [
    {
      question: "How is horsepower defined and why is 745.7 watts equal to 1 HP?",
      answer:
        "Horsepower (HP) was defined by James Watt as a way to compare steam engines to horses. 1 HP = 550 foot-pounds of work per second. Converting: 1 foot-pound is 1.3558 joules, so 550 ft-lbs = 745.7 joules per second = 745.7 watts. This historical definition remains standard. Electrical power uses watts, making the conversion essential for comparing mechanical and electrical systems. A 10 HP motor produces 7.457 kW of power. Understanding this conversion helps evaluate equipment across different industries and eras.",
    },
    {
      question: "What is the difference between metric horsepower (PS) and mechanical HP?",
      answer:
        "Metric horsepower (PS, Pferdestärke from German/French) was defined as 75 kilograms-force meter per second, slightly different from mechanical HP. 1 PS = 735.5 watts, while 1 mechanical HP = 745.7 watts. The difference is about 1.4%: 1 HP = 1.0139 PS. European cars are rated in PS; American cars in HP. A 200 HP engine is 203 PS. When comparing vehicles internationally, convert carefully—don't confuse HP with PS. Most conversion calculators handle this, but manual calculations require the specific conversion factors.",
    },
    {
      question: "How does the torque-to-horsepower formula work?",
      answer:
        "The formula HP = (torque × RPM) / 5252 comes from the definition of power. Torque is rotational force; RPM is rotational speed. Combining them gives power. The 5252 is a conversion constant derived from 33,000 foot-pounds per minute (1 HP) divided by 2π radians. At 5252 RPM, torque in foot-pounds equals horsepower numerically (e.g., 100 ft-lbs at 5252 RPM = 100 HP). This magic number is crucial for engine calculations. Below 5252 RPM, engines are torque-dominant; above, horsepower is dominant.",
    },
    {
      question: "Why do diesel engines have high torque but lower horsepower than gas engines?",
      answer:
        "Diesel engines produce peak torque at much lower RPM (1500-2500) due to their combustion design and heavy construction. They're designed for sustained work, not high-speed performance. A diesel might have 600 ft-lbs torque at 1500 RPM (about 171 HP), while a gas engine with 300 ft-lbs at 6000 RPM also makes 342 HP. Diesels excel at towing and hauling due to high torque. Gas engines achieve horsepower through higher RPM but lower torque. For trucks, high torque matters for pulling; for sports cars, high horsepower at high RPM enables speed. The application determines which is more useful.",
    },
    {
      question: "How does power-to-weight ratio affect vehicle performance?",
      answer:
        "Power-to-weight ratio (HP per lb or kW per kg) determines acceleration and performance. A 200 HP car weighing 2500 lbs has a better ratio than 200 HP at 4000 lbs. The first car accelerates faster because the same power moves less weight. Supercars often have 1+ HP per pound; economy cars might be 0.05 HP per pound. For reference, a 300 HP car at 3000 lbs has 0.1 HP/lb (reasonable sport sedan). A 500 HP supercar at 3500 lbs has 0.143 HP/lb (high performance). Lightweight sports cars with moderate horsepower can out-accelerate heavy luxury cars with high horsepower due to superior power-to-weight ratios.",
    },
  ],
  dateModified: "2026-04-10",
});
