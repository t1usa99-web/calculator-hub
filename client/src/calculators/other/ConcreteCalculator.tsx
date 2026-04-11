import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function ConcreteCalculator() {
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(10);
  const [depth, setDepth] = useState(0.5);
  const [shape, setShape] = useState("slab");

  // Calculate volume based on shape
  let cubicFeet = 0;

  if (shape === "slab") {
    // Rectangular slab: length × width × depth
    cubicFeet = length * width * depth;
  } else if (shape === "column") {
    // Circular column: π × radius² × height
    // Assume width is the diameter
    const radius = width / 2;
    cubicFeet = Math.PI * radius * radius * depth;
  } else if (shape === "tube") {
    // Hollow cylindrical tube
    // Assume length is height, width is outer diameter
    const outerRadius = width / 2;
    const innerRadius = outerRadius - 0.5; // assume 6 inch walls (simplified)
    cubicFeet =
      Math.PI *
      (outerRadius * outerRadius - innerRadius * innerRadius) *
      length;
  }

  // Convert to cubic yards (1 cubic yard = 27 cubic feet)
  const cubicYards = cubicFeet / 27;

  // Calculate bags needed (standard bags: 60 lb and 80 lb)
  // 1 cubic yard needs about 45 × 60-lb bags or 34 × 80-lb bags
  const bags60lb = Math.ceil(cubicYards * 45);
  const bags80lb = Math.ceil(cubicYards * 34);

  // Cost calculation (typical prices)
  const cost60lb = bags60lb * 4.5; // $4.50 per bag
  const cost80lb = bags80lb * 5.5; // $5.50 per bag

  const materialData = [
    { name: "Cubic Feet", value: cubicFeet },
    { name: "Cubic Yards", value: Math.round(cubicYards * 10) / 10 },
    { name: "60lb Bags", value: bags60lb },
    { name: "80lb Bags", value: bags80lb },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Cubic Feet"
        value={cubicFeet.toFixed(2)}
      />
      <ResultCard
        label="Cubic Yards"
        value={cubicYards.toFixed(2)}
        highlight
      />
      <ResultCard
        label="60lb Bags Needed"
        value={formatNumber(bags60lb)}
      />
      <ResultCard
        label="80lb Bags Needed"
        value={formatNumber(bags80lb)}
      />
      <ResultCard
        label="Cost (60lb bags)"
        value={formatCurrency(cost60lb)}
        highlight
      />
      <ResultCard
        label="Cost (80lb bags)"
        value={formatCurrency(cost80lb)}
        highlight
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Material Requirements</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={materialData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A concrete calculator helps you determine how much concrete you need for construction projects. Whether you're pouring a patio, driveway, foundation, or building columns, accurate concrete calculations prevent waste and ensure adequate material. Concrete is sold by volume, typically measured in cubic yards. Understanding volume calculations for different shapes (slabs, columns, tubes) is essential for accurate project planning and cost estimation. Ordering the right amount prevents costly delays if you run short and minimizes waste if you order too much.
      </p>

      <p>
        <strong>Concrete Measurement and Volume:</strong> Concrete volume is typically measured in cubic feet or cubic yards. One cubic yard equals 27 cubic feet and is approximately the size of a cube 3 feet on each side. For rectangular slabs (the most common application), calculate volume by multiplying length × width × depth. For cylindrical columns, use the formula π × radius² × height. For hollow tubes, subtract the inner cylinder volume from the outer cylinder volume. It's important to include the depth dimension—a common mistake is forgetting to include thickness, which dramatically affects the volume. Even a small error in measurement (for example, being off by half an inch on a large slab) can result in ordering significantly more or less material than needed.
      </p>

      <p>
        <strong>Concrete Bag Options and Coverage:</strong> Concrete is sold in bags of dry concrete mix that you water and mix on-site, or as ready-mix concrete delivered by truck. Bag sizes typically come in 60-pound and 80-pound options. A 60-pound bag makes about 0.45 cubic feet of concrete, while an 80-pound bag makes about 0.6 cubic feet. One cubic yard (27 cubic feet) requires approximately 45 bags of 60-pound concrete or 34 bags of 80-pound concrete. For small projects (under a cubic yard), bagged concrete is convenient. For larger projects, ready-mix is more efficient and ensures uniform quality. Prices vary by location and time of year, with costs typically ranging from $4-6 per 60-pound bag or $5-7 per 80-pound bag.
      </p>

      <p>
        <strong>Project Planning and Safety:</strong> When planning a concrete project, add 5-10% extra to your calculated volume to account for settling, uneven ground, and measurement error. Concrete work is physically demanding—one cubic yard of concrete weighs about 4,000 pounds. Ensure proper tools and help for mixing or placing. Allow proper curing time—concrete continues strengthening for 28 days, but is usually safe to use after 7 days. Weather affects curing; cold temperatures slow hydration while hot weather can cause rapid drying and cracking. Never skip reinforcement (rebar or wire mesh) for structural slabs, as it significantly increases durability and prevents cracking under stress.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Concrete Calculator"
      description="Calculate concrete volume and bags needed for construction projects"
      slug="concrete-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="shape"
          label="Shape"
          value={shape}
          onChange={setShape}
          options={[
            { value: "slab", label: "Rectangular Slab" },
            { value: "column", label: "Circular Column" },
            { value: "tube", label: "Hollow Tube" },
          ]}
        />

        {shape === "slab" && (
          <>
            <InputField
              id="length"
              label="Length"
              value={length}
              onChange={setLength}
              suffix="feet"
              step={0.5}
              min={0}
            />
            <InputField
              id="width"
              label="Width"
              value={width}
              onChange={setWidth}
              suffix="feet"
              step={0.5}
              min={0}
            />
            <InputField
              id="depth"
              label="Depth/Thickness"
              value={depth}
              onChange={setDepth}
              suffix="feet"
              step={0.25}
              min={0}
              hint="Common: 4-6 inches (0.33-0.5 feet)"
            />
          </>
        )}

        {shape === "column" && (
          <>
            <InputField
              id="diameter"
              label="Diameter"
              value={width}
              onChange={setWidth}
              suffix="feet"
              step={0.25}
              min={0}
            />
            <InputField
              id="height"
              label="Height"
              value={depth}
              onChange={setDepth}
              suffix="feet"
              step={0.5}
              min={0}
            />
          </>
        )}

        {shape === "tube" && (
          <>
            <InputField
              id="outer-diameter"
              label="Outer Diameter"
              value={width}
              onChange={setWidth}
              suffix="feet"
              step={0.25}
              min={0}
            />
            <InputField
              id="tube-height"
              label="Height"
              value={length}
              onChange={setLength}
              suffix="feet"
              step={0.5}
              min={0}
            />
            <p className="text-sm text-gray-600">Wall thickness: 6 inches (automatic)</p>
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}
