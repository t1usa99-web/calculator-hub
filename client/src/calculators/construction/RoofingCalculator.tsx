import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function RoofingCalculator() {
  const [roofLength, setRoofLength] = useState(40);
  const [roofWidth, setRoofWidth] = useState(30);
  const [pitch, setPitch] = useState("6/12");
  const [shingleCostPerBundle, setShingleCostPerBundle] = useState(30);
  const [underlaymentCostPerRoll, setUnderlaymentCostPerRoll] = useState(50);
  const [ridgeCapCostPerBundle, setRidgeCapCostPerBundle] = useState(60);

  // Pitch multipliers (converts horizontal area to actual roof area)
  const pitchMultipliers: { [key: string]: number } = {
    "4/12": 1.0541,
    "6/12": 1.1180,
    "8/12": 1.2019,
    "10/12": 1.3054,
    "12/12": 1.4142,
  };

  const multiplier = pitchMultipliers[pitch] || 1.1180;
  const horizontalArea = roofLength * roofWidth;
  const actualRoofArea = horizontalArea * multiplier;

  // Calculate materials needed
  // 1 square = 100 sqft
  const roofingSquares = actualRoofArea / 100;
  // 3 bundles per square
  const shingleBundles = roofingSquares * 3;
  // 1 roll per 400 sqft
  const underlaymentRolls = Math.ceil(actualRoofArea / 400);
  // Ridge cap: 1 bundle per 35 linear feet of ridge
  const ridgeLinearFeet = roofLength;
  const ridgeCapBundles = Math.ceil(ridgeLinearFeet / 35);

  // Cost calculations
  const shingleCost = shingleBundles * shingleCostPerBundle;
  const underlaymentCost = underlaymentRolls * underlaymentCostPerRoll;
  const ridgeCapCost = ridgeCapBundles * ridgeCapCostPerBundle;
  const totalMaterialsCost = shingleCost + underlaymentCost + ridgeCapCost;

  const chartData = [
    { name: "Shingles", cost: shingleCost },
    { name: "Underlayment", cost: underlaymentCost },
    { name: "Ridge Cap", cost: ridgeCapCost },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Horizontal Area" value={formatNumber(horizontalArea, 0) + " sqft"} />
      <ResultCard label="Actual Roof Area (with pitch)" value={formatNumber(actualRoofArea, 0) + " sqft"} highlight={true} />
      <ResultCard label="Roofing Squares" value={formatNumber(roofingSquares, 2)} />
      <ResultCard label="Shingle Bundles" value={formatNumber(shingleBundles, 0)} />
      <ResultCard label="Underlayment Rolls" value={formatNumber(underlaymentRolls, 0)} />
      <ResultCard label="Ridge Cap Bundles" value={formatNumber(ridgeCapBundles, 0)} />
      <ResultCard label="Shingles Cost" value={formatCurrency(shingleCost)} />
      <ResultCard label="Underlayment Cost" value={formatCurrency(underlaymentCost)} />
      <ResultCard label="Ridge Cap Cost" value={formatCurrency(ridgeCapCost)} />
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
      <h3 className="text-lg font-semibold text-gray-900">Roofing Materials & Installation</h3>
      <p>
        <strong>Roof Pitch:</strong> Roof pitch is the slope or angle of a roof, expressed as rise over run (e.g., 6/12 means 6 inches of rise for every 12 inches of horizontal distance). Higher pitches (steeper roofs) require more materials because the actual roof area is larger than the horizontal footprint. A 6/12 pitch multiplies the horizontal area by 1.118, while a 12/12 pitch (45 degrees) multiplies by 1.414.
      </p>
      <p>
        <strong>Roofing Squares:</strong> A roofing square is 100 square feet. Roofing materials are commonly sold and estimated in squares. For example, a 2,000 sqft roof is 20 squares. Understanding squares helps you communicate with contractors and purchase materials correctly. Most shingle bundles cover about one-third of a square (33.3 sqft), so 3 bundles complete one square.
      </p>
      <p>
        <strong>Asphalt Shingle Bundles:</strong> Standard asphalt shingles come in bundles that weigh 50-80 lbs and cover approximately 33-40 sqft. Most roofing projects use 3-4 bundles per 100 sqft (per square). Always purchase extra bundles (10-15% overage) for waste, repairs, and future maintenance. Higher quality shingles (architectural, designer grades) may have different coverage rates.
      </p>
      <p>
        <strong>Underlayment and Ridge Cap:</strong> Underlayment (also called roofing felt or synthetic membrane) goes under shingles to prevent water infiltration. It comes in rolls covering 400 sqft. Ridge cap is the shingle covering the peak where two roof slopes meet, requiring special pieces priced separately from standard shingles. A typical roof with 35 linear feet of ridge needs about 1 bundle of ridge cap.
      </p>
      <p>
        <strong>Labor Costs:</strong> Material costs are typically 40-50% of total roofing costs; labor is 50-60%. Professional installation ensures proper ventilation, flashing, and waterproofing. Always hire licensed, insured roofers. Get multiple quotes and verify they include underlayment, ridge cap, flashing, and proper ventilation installation.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Roofing Calculator"
      description="Estimate roofing materials and costs by roof pitch"
      slug="roofing-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="roof-length"
          label="Roof Length (ft)"
          value={roofLength}
          onChange={setRoofLength}
          min={10}
          step={5}
        />

        <InputField
          id="roof-width"
          label="Roof Width (ft)"
          value={roofWidth}
          onChange={setRoofWidth}
          min={10}
          step={5}
        />

        <SelectField
          id="pitch"
          label="Roof Pitch"
          value={pitch}
          onChange={setPitch}
          options={[
            { value: "4/12", label: "4/12 (Low)" },
            { value: "6/12", label: "6/12 (Standard)" },
            { value: "8/12", label: "8/12 (Moderate)" },
            { value: "10/12", label: "10/12 (Steep)" },
            { value: "12/12", label: "12/12 (Very Steep)" },
          ]}
        />

        <InputField
          id="shingle-cost-per-bundle"
          label="Shingle Cost per Bundle"
          value={shingleCostPerBundle}
          onChange={setShingleCostPerBundle}
          prefix="$"
          min={0}
          step={5}
        />

        <InputField
          id="underlayment-cost-per-roll"
          label="Underlayment Cost per Roll"
          value={underlaymentCostPerRoll}
          onChange={setUnderlaymentCostPerRoll}
          prefix="$"
          min={0}
          step={5}
        />

        <InputField
          id="ridge-cap-cost-per-bundle"
          label="Ridge Cap Cost per Bundle"
          value={ridgeCapCostPerBundle}
          onChange={setRidgeCapCostPerBundle}
          prefix="$"
          min={0}
          step={5}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: RoofingCalculator,
  slug: "roofing-calculator",
  title: "Roofing Calculator",
  shortTitle: "Roofing",
  description: "Calculate roofing materials and costs based on roof pitch and dimensions",
  category: "construction",
  icon: "🏠",
  keywords: ["roofing", "shingles", "roof pitch", "materials", "home improvement"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How does roof pitch affect the amount of materials needed?",
      answer: "Roof pitch directly affects material quantity because steeper roofs have greater actual surface area than their horizontal footprint. A 6/12 pitch multiplies the area by 1.118, while a 12/12 pitch multiplies by 1.414. Always use the pitch-adjusted area, not just the horizontal dimensions, to order the correct amount of materials.",
    },
    {
      question: "What is a roofing square and why is it important?",
      answer: "A roofing square equals 100 square feet of roof area. Roofing materials are priced and estimated in squares. A 2,000 sqft roof is 20 squares. Most shingle bundles cover one-third of a square, so you need 3 bundles per square. Understanding squares helps you communicate with contractors and order materials accurately.",
    },
    {
      question: "How many shingle bundles do I need per square?",
      answer: "A standard roofing square (100 sqft) requires 3 bundles of asphalt shingles. Each bundle covers approximately 33 sqft. Always add 10-15% extra bundles for waste, repairs, and future touch-ups. Premium or architectural shingles may require more or fewer bundles depending on coverage rates.",
    },
    {
      question: "What is underlayment and is it necessary?",
      answer: "Underlayment is a water barrier installed under shingles to prevent water infiltration and extend roof life. It is essential in most climates and is often required by building codes. Synthetic underlayment is more durable than traditional felt. Plan on approximately 1 roll per 400 sqft of roof area.",
    },
    {
      question: "What should I budget for labor costs on a roofing project?",
      answer: "Labor typically accounts for 50-60% of total roofing costs, while materials are 40-50%. Professional installation ensures proper ventilation, flashing, and waterproofing. Always hire licensed, insured roofers. Get multiple quotes and ensure all labor quotes include underlayment, ridge cap, flashing, and proper installation techniques.",
    },
  ],
});
