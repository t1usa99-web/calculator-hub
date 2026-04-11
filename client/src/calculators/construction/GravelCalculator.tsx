import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";

export default function GravelCalculator() {
  const [length, setLength] = useState(30);
  const [width, setWidth] = useState(20);
  const [depth, setDepth] = useState(4); // inches
  const [material, setMaterial] = useState("gravel");
  const [pricePerCubicYard, setPricePerCubicYard] = useState(35);

  // Material densities (tons per cubic yard)
  const densities: { [key: string]: number } = {
    gravel: 1.4,
    "crushed-stone": 1.5,
    sand: 1.3,
    topsoil: 1.1,
    mulch: 0.7,
  };

  const density = densities[material] || 1.4;

  // Calculate cubic yards
  // 1 cubic yard = 27 cubic feet
  // depth in inches / 12 = depth in feet
  const depthFeet = depth / 12;
  const cubicFeet = length * width * depthFeet;
  const cubicYards = cubicFeet / 27;

  // Calculate tonnage
  const tons = cubicYards * density;

  // Calculate cost
  const estimatedCost = cubicYards * pricePerCubicYard;

  const chartData = [
    { name: "Cubic Yards", value: cubicYards },
    { name: "Tons", value: tons },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Area" value={formatNumber(length * width, 0) + " sqft"} />
      <ResultCard label="Depth" value={formatNumber(depth, 0) + " in (" + formatNumber(depthFeet, 2) + " ft)"} />
      <ResultCard label="Cubic Feet" value={formatNumber(cubicFeet, 0)} />
      <ResultCard label="Cubic Yards" value={formatNumber(cubicYards, 2)} highlight={true} />
      <ResultCard label="Material Type" value={material.replace(/-/g, " ")} />
      <ResultCard label="Density" value={formatNumber(density, 2) + " tons/cy"} />
      <ResultCard label="Total Tonnage" value={formatNumber(tons, 2)} highlight={true} />
      <ResultCard label="Price per Cubic Yard" value={formatCurrency(pricePerCubicYard)} />
      <ResultCard label="Estimated Cost" value={formatCurrency(estimatedCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Volume Calculations</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" label={{ value: "Cubic Yards", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Tons", angle: 90, position: "insideRight" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Bar yAxisId="left" dataKey="value" fill="#3b82f6" name="Amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Gravel and Aggregate Calculation</h3>
      <p>
        <strong>Understanding Cubic Yards:</strong> A cubic yard is 27 cubic feet (3 feet x 3 feet x 3 feet). Landscaping and construction materials are typically sold by the cubic yard. To calculate cubic yards: multiply length by width by depth (all in feet), then divide by 27. For example, a 30 ft x 20 ft area with 4 inches of depth (0.33 feet) is 200 cubic feet, or 7.4 cubic yards.
      </p>
      <p>
        <strong>Material Density and Tonnage:</strong> Different materials have different densities. Gravel weighs about 1.4 tons per cubic yard, crushed stone 1.5 tons, sand 1.3 tons, topsoil 1.1 tons, and mulch 0.7 tons. Heavier materials (stone) require stronger equipment and more effort to move. Weight affects delivery truck capacity; heavier materials require more trips for the same volume.
      </p>
      <p>
        <strong>Material Selection:</strong> Gravel provides good drainage for driveways and landscaping. Crushed stone is more angular and compacts better for base layers. Sand is used for foundations, sandboxes, and drainage. Topsoil supports grass and plants. Mulch provides ground cover and moisture retention. Choose based on purpose (drainage, durability, aesthetics, cost).
      </p>
      <p>
        <strong>Depth Recommendations:</strong> Driveways need 4-6 inches of gravel base. Landscaping beds need 2-3 inches of mulch. Pathways need 2-3 inches of gravel. Play areas need 6-12 inches of mulch for safety. Proper depth ensures good coverage and prevents material from shifting or washing away. More depth provides better results but increases cost.
      </p>
      <p>
        <strong>Ordering Tips:</strong> Order slightly extra (10%) for settling and compaction. Delivery costs may vary; compare bulk pricing with bagged alternatives. Some suppliers offer bulk discounts for large orders. Ensure property access for delivery trucks. Compact gravel with a roller after spreading for stability. Plan delivery timing to match your ability to spread material.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Gravel Calculator"
      description="Calculate gravel and aggregate volume and weight needed"
      slug="gravel-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="length"
          label="Length (ft)"
          value={length}
          onChange={setLength}
          min={1}
          step={5}
        />

        <InputField
          id="width"
          label="Width (ft)"
          value={width}
          onChange={setWidth}
          min={1}
          step={5}
        />

        <InputField
          id="depth"
          label="Depth (inches)"
          value={depth}
          onChange={setDepth}
          min={0.5}
          max={24}
          step={0.5}
        />

        <SelectField
          id="material"
          label="Material Type"
          value={material}
          onChange={setMaterial}
          options={[
            { value: "gravel", label: "Gravel (1.4 t/cy)" },
            { value: "crushed-stone", label: "Crushed Stone (1.5 t/cy)" },
            { value: "sand", label: "Sand (1.3 t/cy)" },
            { value: "topsoil", label: "Topsoil (1.1 t/cy)" },
            { value: "mulch", label: "Mulch (0.7 t/cy)" },
          ]}
        />

        <InputField
          id="price-per-cubic-yard"
          label="Price per Cubic Yard"
          value={pricePerCubicYard}
          onChange={setPricePerCubicYard}
          prefix="$"
          min={0}
          step={5}
        />
      </div>
    </CalculatorLayout>
  );
}
