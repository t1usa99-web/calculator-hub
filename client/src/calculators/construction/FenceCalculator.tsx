import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";

export default function FenceCalculator() {
  const [perimeterLength, setPerimeterLength] = useState(200);
  const [fenceHeight, setFenceHeight] = useState(6);
  const [postSpacing, setPostSpacing] = useState(6);
  const [fenceType, setFenceType] = useState("wood");
  const [postCost, setPostCost] = useState(25);
  const [railCost, setRailCost] = useState(15);
  const [picketCost, setPicketCost] = useState(2);
  const [gateCost, setGateCost] = useState(150);

  // Calculate posts needed
  // Posts = (perimeter / spacing) + 1 for closed fence
  const numPosts = Math.ceil(perimeterLength / postSpacing) + 1;

  // Calculate rails needed
  // Typically 2-3 rails per section, assuming 3 for standard height
  const numSections = Math.ceil(perimeterLength / postSpacing);
  const railsPerSection = Math.ceil(fenceHeight / 2);
  const numRails = numSections * railsPerSection;

  // Calculate pickets for wood fences
  // Pickets typically 6-8 inches wide with 1-2 inch spacing
  // Roughly 2 pickets per linear foot per side
  const picketsPerLinearFoot = 2;
  const numPickets = perimeterLength * picketsPerLinearFoot;

  // Gate count (assume 1 gate per 100 linear feet)
  const numGates = Math.max(1, Math.floor(perimeterLength / 100));

  // Calculate costs
  const postTotal = numPosts * postCost;
  const railTotal = numRails * railCost;
  const picketTotal = fenceType === "wood" ? numPickets * picketCost : 0;
  const gateTotal = numGates * gateCost;
  const totalMaterialsCost = postTotal + railTotal + picketTotal + gateTotal;

  const chartData = [
    { name: "Posts", cost: postTotal },
    { name: "Rails", cost: railTotal },
    ...(fenceType === "wood" ? [{ name: "Pickets", cost: picketTotal }] : []),
    { name: "Gates", cost: gateTotal },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Perimeter Length" value={formatNumber(perimeterLength, 0) + " ft"} />
      <ResultCard label="Fence Height" value={formatNumber(fenceHeight, 0) + " ft"} />
      <ResultCard label="Post Spacing" value={formatNumber(postSpacing, 0) + " ft"} />
      <ResultCard label="Number of Posts" value={formatNumber(numPosts, 0)} highlight={true} />
      <ResultCard label="Number of Sections" value={formatNumber(numSections, 0)} />
      <ResultCard label="Rails per Section" value={formatNumber(railsPerSection, 0)} />
      <ResultCard label="Total Rails" value={formatNumber(numRails, 0)} />
      {fenceType === "wood" && <ResultCard label="Pickets" value={formatNumber(numPickets, 0)} />}
      <ResultCard label="Gates" value={formatNumber(numGates, 0)} />
      <ResultCard label="Posts Cost" value={formatCurrency(postTotal)} />
      <ResultCard label="Rails Cost" value={formatCurrency(railTotal)} />
      {fenceType === "wood" && <ResultCard label="Pickets Cost" value={formatCurrency(picketTotal)} />}
      <ResultCard label="Gates Cost" value={formatCurrency(gateTotal)} />
      <ResultCard label="Total Materials Cost" value={formatCurrency(totalMaterialsCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Material Costs Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="cost" fill="#3b82f6" name="Cost ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Fence Installation Planning</h3>
      <p>
        <strong>Post Spacing and Strength:</strong> Standard post spacing is 6-8 feet apart. Wider spacing (8 ft) saves on posts but may sag over time, especially in windy areas. Narrower spacing (6 ft) provides better structural integrity and is recommended for taller fences (6-8 ft). Posts should be set 2-3 feet deep in concrete for stability. Posts should be 4x4 inches for wood, 2-3 inch diameter for metal.
      </p>
      <p>
        <strong>Rails and Pickets:</strong> Horizontal rails connect posts and provide structural support. Most fences use 2-3 rails per section (spacing determined by fence height). Pickets are the vertical slats on wood fences, typically 6-8 inches wide with 1-2 inch gaps. Picket density affects privacy: solid pickets block view, while spaced pickets allow airflow and light. Pickets attach perpendicular to rails with nails or screws.
      </p>
      <p>
        <strong>Fence Types and Maintenance:</strong> Wood fences are affordable and customizable but require regular maintenance (staining, sealing, repairs). Chain-link is durable and low-maintenance but less aesthetically appealing. Vinyl is maintenance-free and long-lasting but higher upfront cost. Composite blends durability with minimal upkeep. Choose based on budget, aesthetics, climate, and maintenance tolerance.
      </p>
      <p>
        <strong>Planning for Gates:</strong> Include at least one gate per 100 linear feet for access. Gates should open both directions if possible. Standard gate width is 3-4 feet. A 200 ft perimeter fence needs 2 gates. Gates require additional hardware (hinges, latches, springs) and should be professionally installed for proper operation and longevity. Budget extra for quality gate mechanisms.
      </p>
      <p>
        <strong>Permits and Property Lines:</strong> Always verify property lines before building a fence. Many jurisdictions require permits for fences over 4-6 feet. Some areas have setback requirements (how far from property line). Check HOA rules if applicable. Call 811 to locate underground utilities before digging post holes. Improper installation or encroachment can result in costly removal or legal issues.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Fence Calculator"
      description="Calculate fence materials and costs for different fence types"
      slug="fence-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="perimeter-length"
          label="Perimeter Length (ft)"
          value={perimeterLength}
          onChange={setPerimeterLength}
          min={50}
          step={10}
        />

        <InputField
          id="fence-height"
          label="Fence Height (ft)"
          value={fenceHeight}
          onChange={setFenceHeight}
          min={2}
          max={8}
          step={0.5}
        />

        <InputField
          id="post-spacing"
          label="Post Spacing (ft)"
          value={postSpacing}
          onChange={setPostSpacing}
          min={4}
          max={10}
          step={0.5}
        />

        <SelectField
          id="fence-type"
          label="Fence Type"
          value={fenceType}
          onChange={setFenceType}
          options={[
            { value: "wood", label: "Wood" },
            { value: "chain-link", label: "Chain Link" },
            { value: "vinyl", label: "Vinyl" },
          ]}
        />

        <InputField
          id="post-cost"
          label="Post Cost"
          value={postCost}
          onChange={setPostCost}
          prefix="$"
          min={0}
          step={5}
        />

        <InputField
          id="rail-cost"
          label="Rail Cost"
          value={railCost}
          onChange={setRailCost}
          prefix="$"
          min={0}
          step={5}
        />

        {fenceType === "wood" && (
          <InputField
            id="picket-cost"
            label="Picket Cost (each)"
            value={picketCost}
            onChange={setPicketCost}
            prefix="$"
            min={0}
            step={0.5}
          />
        )}

        <InputField
          id="gate-cost"
          label="Gate Cost (each)"
          value={gateCost}
          onChange={setGateCost}
          prefix="$"
          min={50}
          step={10}
        />
      </div>
    </CalculatorLayout>
  );
}
