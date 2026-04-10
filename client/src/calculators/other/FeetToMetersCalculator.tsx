import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FeetToMetersCalculator() {
  const [feet, setFeet] = useState(6);
  const meters = feet * 0.3048;

  // Reference table data for chart
  const refData = [1, 3, 5, 6, 10, 20, 50, 100].map((v) => ({
    feet: v,
    meters: parseFloat((v * 0.3048).toFixed(3)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Feet" value={formatNumber(feet, 2)} />
      <ResultCard label="Meters" value={formatNumber(meters, 3)} highlight />
      <ResultCard label="Formula" value="feet × 0.3048 = meters" />
      <ResultCard
        label="Reference"
        value={`1 ft = 0.3048 m, 6 ft = 1.8288 m`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Feet to Meters Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="feet" label={{ value: "Feet", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Meters", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 3)} />
          <Line
            type="monotone"
            dataKey="meters"
            stroke="#8b5cf6"
            dot={{ fill: "#8b5cf6", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Converting feet to meters bridges imperial and metric measurements for larger distances. One foot equals exactly 0.3048 meters, a standardized conversion factor. This conversion is critical in construction, real estate, aviation, and international trade where property dimensions and distances must be expressed in different systems. Understanding feet-to-meters conversion helps professionals and consumers communicate measurements across regions that use different systems.
      </p>

      <p>
        <strong>The Meter's Definition:</strong> The meter is the SI (International System) base unit of length, originally defined as 1/10,000,000th of the distance from the equator to the North Pole. Today, it's defined by the speed of light. The foot originated as the length of a man's foot, then standardized to exactly 0.3048 meters by international agreement. This precise relationship allows seamless conversion between the two systems in science, engineering, and global commerce. A foot is approximately 12 inches, and a meter is approximately 3.28 feet (reciprocal of 0.3048).
      </p>

      <p>
        <strong>Practical Applications:</strong> Real estate and property listings in metric countries express dimensions in meters and square meters, while US properties use feet and square feet. Sports fields and stadium dimensions must accommodate both systems for international events. Aircraft altitude and runway lengths use both feet (in US) and meters (internationally). Building codes vary by region but must sometimes be converted between systems. A standard ceiling height of 8 feet equals 2.4384 meters, while a 10-foot ceiling equals 3.048 meters. Ceiling fan blade spans, ladder heights, and scaffolding dimensions all require these conversions.
      </p>

      <p>
        <strong>Height Conversions:</strong> Average adult heights are often expressed in feet and inches in the US. A 5-foot-tall person (60 inches) is 1.524 meters. A 6-foot-tall person is 1.8288 meters. These height conversions are essential for sports statistics, medical records, dating profiles, and international communication. Most countries outside the US express height in centimeters (1 meter = 100 centimeters), making feet-to-meters conversion a necessary skill for comparing populations and understanding average heights globally.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Feet to Meters Converter"
      description="Convert feet to meters with conversion formula and reference table"
      slug="feet-to-meters"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="feet"
        label="Feet"
        value={feet}
        onChange={setFeet}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: FeetToMetersCalculator,
  slug: "feet-to-meters",
  title: "Feet to Meters Converter",
  shortTitle: "Feet to Meters",
  description: "Convert feet to meters with formula and reference table",
  category: "other",
  icon: "📐",
  keywords: ["feet to meters", "ft to m", "convert feet", "imperial to metric length"],
  popular: false,
  faqs: [
    {
      question: "What is the exact conversion factor from feet to meters?",
      answer:
        "The exact conversion is 1 foot = 0.3048 meters. This was established by international agreement as a precise, unchanging constant. To convert feet to meters, multiply by 0.3048. For example, 10 feet = 10 × 0.3048 = 3.048 meters. The inverse conversion is 1 meter = 3.28084 feet. This precise relationship allows exact conversions in all fields, from construction to aviation to international trade, ensuring consistency and preventing measurement errors.",
    },
    {
      question: "How do I convert feet and inches to meters?",
      answer:
        "First, convert feet and inches to total feet, then multiply by 0.3048. Example: 5 feet 10 inches = 5 + (10/12) feet = 5.833 feet. Then 5.833 × 0.3048 = 1.778 meters. Alternatively, convert feet to meters (5 × 0.3048 = 1.524 m) and inches to centimeters (10 × 2.54 = 25.4 cm = 0.254 m), then add them: 1.524 + 0.254 = 1.778 meters. The first method is simpler for calculator use.",
    },
    {
      question: "What are common feet-to-meters conversions I should know?",
      answer:
        "Useful benchmarks: 1 foot = 0.3048 m, 3 feet = 0.9144 m (1 yard), 5 feet = 1.524 m, 6 feet = 1.8288 m, 10 feet = 3.048 m. For height, 5 feet tall = 1.524 m, 6 feet tall = 1.8288 m. For building dimensions, a standard 8-foot ceiling = 2.4384 m, a 10-foot ceiling = 3.048 m. A basketball hoop at 10 feet = 3.048 m. Knowing these mental benchmarks helps with quick estimates without a calculator.",
    },
    {
      question: "Is feet-to-meters conversion used in sports?",
      answer:
        "Yes, extensively. Soccer (football) goals are 8 feet tall and 24 feet wide, or 2.44 m × 7.32 m. American football fields are 100 yards (300 feet) or 91.44 meters long. Basketball hoops are 10 feet (3.048 m) high. Tennis courts are measured in meters internationally but feet in the US. Boxing rings are typically 16-20 feet (4.9-6.1 m) per side. High jump and pole vault records are often listed in meters internationally. Athletes, coaches, and broadcasters frequently convert between systems to communicate with global audiences.",
    },
    {
      question: "How do I quickly estimate feet to meters?",
      answer:
        "A simple rule: divide by 3 to get an approximation. 12 feet ÷ 3 ≈ 4 meters (actual is 3.66 m). A more accurate mental math trick: remember that 1 foot ≈ 0.3 m, so 10 feet ≈ 3 m. For heights, 5 feet ≈ 1.5 m, 6 feet ≈ 1.8 m. These approximations work for casual estimates but aren't precise enough for construction, engineering, or scientific work. Always use 0.3048 for accuracy, or use this calculator for instant conversions.",
    },
  ],
  dateModified: "2026-04-10",
});
