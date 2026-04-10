import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DrywallCalculator() {
  const [wallLength, setWallLength] = useState(20);
  const [wallHeight, setWallHeight] = useState(8);
  const [numWalls, setNumWalls] = useState(4);
  const [doorCount, setDoorCount] = useState(2);
  const [windowCount, setWindowCount] = useState(2);
  const [sheetSize, setSheetSize] = useState("4x8");
  const [sheetCost, setSheetCost] = useState(12);
  const [jointCompoundPrice, setJointCompoundPrice] = useState(15);
  const [tapeCost, setTapeCost] = useState(6);
  const [screwsCost, setScrewsCost] = useState(8);

  // Sheet sizes in sqft
  const sheetSizes: { [key: string]: number } = {
    "4x8": 32,
    "4x10": 40,
    "4x12": 48,
  };

  const sheetArea = sheetSizes[sheetSize];

  // Calculate wall area
  const totalWallArea = wallLength * wallHeight * numWalls;

  // Deduct doors (21 sqft each) and windows (15 sqft each)
  const deductedArea = (doorCount * 21) + (windowCount * 15);
  const drywallArea = totalWallArea - deductedArea;

  // Calculate sheets needed with 5% waste
  const sheetsNeeded = Math.ceil((drywallArea / sheetArea) * 1.05);

  // Joint compound (mud) - roughly 30 sqft per gallon
  // 3 coats typical: first (sweep), second, finish (sand light)
  const galloonsCompoundNeeded = Math.ceil((drywallArea / 30) * 2); // 2 gallons for 3 coats

  // Tape - roughly 400 linear feet per room
  // Each roll is typically 500 feet
  const linearFeetTape = drywallArea / 10; // Rough estimate: 1 ft tape per 10 sqft
  const tapeRolls = Math.ceil(linearFeetTape / 500);

  // Screws - roughly 1000 screws per 1000 sqft
  const screwsBoxes = Math.ceil((drywallArea / 1000) * 2); // 2 boxes (1000 screws each)

  // Calculate costs
  const sheetCostTotal = sheetsNeeded * sheetCost;
  const compoundCostTotal = galloonsCompoundNeeded * jointCompoundPrice;
  const tapeCostTotal = tapeRolls * tapeCost;
  const screwsCostTotal = screwsBoxes * screwsCost;
  const totalMaterialsCost = sheetCostTotal + compoundCostTotal + tapeCostTotal + screwsCostTotal;

  const chartData = [
    { name: "Drywall Sheets", cost: sheetCostTotal },
    { name: "Joint Compound", cost: compoundCostTotal },
    { name: "Tape", cost: tapeCostTotal },
    { name: "Screws", cost: screwsCostTotal },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Total Wall Area" value={formatNumber(totalWallArea, 0) + " sqft"} />
      <ResultCard label="Doors & Windows Deduction" value={formatNumber(deductedArea, 0) + " sqft"} />
      <ResultCard label="Drywall Area" value={formatNumber(drywallArea, 0) + " sqft"} highlight={true} />
      <ResultCard label="Sheet Size" value={sheetSize + " (" + formatNumber(sheetArea, 0) + " sqft)"} />
      <ResultCard label="Sheets Needed" value={formatNumber(sheetsNeeded, 0)} highlight={true} />
      <ResultCard label="Joint Compound (gallons)" value={formatNumber(galloonsCompoundNeeded, 0)} />
      <ResultCard label="Tape Rolls" value={formatNumber(tapeRolls, 0)} />
      <ResultCard label="Screw Boxes" value={formatNumber(screwsBoxes, 0)} />
      <ResultCard label="Drywall Cost" value={formatCurrency(sheetCostTotal)} />
      <ResultCard label="Joint Compound Cost" value={formatCurrency(compoundCostTotal)} />
      <ResultCard label="Tape Cost" value={formatCurrency(tapeCostTotal)} />
      <ResultCard label="Screws Cost" value={formatCurrency(screwsCostTotal)} />
      <ResultCard label="Total Materials Cost" value={formatCurrency(totalMaterialsCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Material Costs Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
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
      <h3 className="text-lg font-semibold text-gray-900">Drywall Installation and Finishing</h3>
      <p>
        <strong>Sheet Sizes and Selection:</strong> Drywall (also called sheetrock, plasterboard, or gypsum board) comes in 4x8, 4x10, and 4x12 foot sheets. 4x8 is the most common and affordable. Larger sheets (4x10, 4x12) reduce seams and labor but are heavier and harder to handle. 1/2-inch thickness is standard for interior walls, 5/8-inch for fire-rated walls. Moisture-resistant drywall is essential for bathrooms and kitchens.
      </p>
      <p>
        <strong>Joint Compound and Finishing:</strong> Joint compound (also called mud) fills gaps between sheets and covers fasteners. Three coats are typical: first coat (setting coat) fills gaps, second coat (topping coat) smooths, third coat (finish coat) is sanded smooth. Plan on approximately 30 sqft per gallon for one coat. One gallon covers 150-200 linear feet of seams. Professional finishing requires skill and patience; uneven finishing shows under paint.
      </p>
      <p>
        <strong>Taping and Mudding Process:</strong> Tape is applied over joints with joint compound. Paper tape is cheaper but requires skill; mesh tape is easier for beginners and reduces air bubbles. Tape is typically 2 inches wide. Drywall screws hold sheets to studs (approximately every 12 inches). Nails can pop out over time; screws are superior. Fasteners should be spaced per building code (typically 16 or 24 inches on center).
      </p>
      <p>
        <strong>Drywall Preparation and Safety:</strong> Drywall is heavy (1/2-inch sheet weighs about 50 lbs) and requires proper handling and support. Use a drywall lift for ceiling installation. Ensure studs are properly spaced and square before hanging. All seams must be taped and finished for a professional appearance. The finishing process is labor-intensive; consider hiring professionals for visible areas or ceilings.
      </p>
      <p>
        <strong>Special Considerations:</strong> Fire-rated drywall (5/8-inch Type X) is required in certain locations (between living spaces and garages, around furnaces). Water-resistant drywall is essential in bathrooms and kitchens. Soundproof drywall reduces noise transmission. Always follow local building codes. Ensure proper ventilation to prevent moisture accumulation. Prime and paint all drywall after finishing to protect it.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Drywall Calculator"
      description="Calculate drywall, joint compound, tape, and screws needed"
      slug="drywall-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="wall-length"
          label="Wall Length (ft)"
          value={wallLength}
          onChange={setWallLength}
          min={5}
          step={1}
        />

        <InputField
          id="wall-height"
          label="Wall Height (ft)"
          value={wallHeight}
          onChange={setWallHeight}
          min={6}
          max={12}
          step={0.5}
        />

        <InputField
          id="num-walls"
          label="Number of Walls"
          value={numWalls}
          onChange={setNumWalls}
          min={1}
          max={10}
          step={1}
        />

        <InputField
          id="door-count"
          label="Number of Doors"
          value={doorCount}
          onChange={setDoorCount}
          min={0}
          max={10}
          step={1}
        />

        <InputField
          id="window-count"
          label="Number of Windows"
          value={windowCount}
          onChange={setWindowCount}
          min={0}
          max={20}
          step={1}
        />

        <SelectField
          id="sheet-size"
          label="Sheet Size"
          value={sheetSize}
          onChange={setSheetSize}
          options={[
            { value: "4x8", label: "4x8 feet (32 sqft)" },
            { value: "4x10", label: "4x10 feet (40 sqft)" },
            { value: "4x12", label: "4x12 feet (48 sqft)" },
          ]}
        />

        <InputField
          id="sheet-cost"
          label="Sheet Cost"
          value={sheetCost}
          onChange={setSheetCost}
          prefix="$"
          min={5}
          step={1}
        />

        <InputField
          id="compound-price"
          label="Joint Compound Price per Gallon"
          value={jointCompoundPrice}
          onChange={setJointCompoundPrice}
          prefix="$"
          min={5}
          step={1}
        />

        <InputField
          id="tape-cost"
          label="Tape Roll Cost"
          value={tapeCost}
          onChange={setTapeCost}
          prefix="$"
          min={2}
          step={0.50}
        />

        <InputField
          id="screws-cost"
          label="Screws Box Cost"
          value={screwsCost}
          onChange={setScrewsCost}
          prefix="$"
          min={3}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DrywallCalculator,
  slug: "drywall-calculator",
  title: "Drywall Calculator",
  shortTitle: "Drywall",
  description: "Calculate drywall sheets, compound, tape, and hardware for interior walls",
  category: "construction",
  icon: "🪜",
  keywords: ["drywall", "sheetrock", "joint compound", "tape", "wall"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How many sheets of drywall do I need?",
      answer: "Calculate total wall area (perimeter {'×'} height), subtract door and window areas (approx 21 sqft per door, 15 sqft per window), then divide by sheet area. For example, 320 sqft drywall area divided by 32 sqft (4x8 sheet) = 10 sheets. Always add 5-10% for waste and mistakes.",
    },
    {
      question: "What size drywall sheet should I use?",
      answer: "4x8 foot sheets (32 sqft) are most common and affordable. 4x10 sheets (40 sqft) reduce seams but are heavier. 4x12 sheets (48 sqft) minimize seams further but are the heaviest. Use 1/2-inch thickness for standard walls, 5/8-inch for fire-rated walls. Moisture-resistant drywall is essential for bathrooms and kitchens.",
    },
    {
      question: "How much joint compound do I need for three coats?",
      answer: "Plan on approximately 30 sqft per gallon for one coat. For three complete coats (typical for professional finish), you need roughly 3 gallons per 100 sqft, or 1 gallon per 30-35 sqft. Always add extra for practice and mistakes. One 5-gallon bucket covers about 150-200 sqft of seams.",
    },
    {
      question: "What is the difference between paper and mesh drywall tape?",
      answer: "Paper tape is cheaper ($5-8 per roll) but requires skill to apply properly without air bubbles. Mesh tape is easier for beginners ($8-12 per roll), self-adhesive, and resists air bubbles better. Both work well; choice depends on experience and preference. Tape width is typically 2 inches.",
    },
    {
      question: "How many coats of joint compound are needed?",
      answer: "Standard finishing requires three coats: first coat (setting coat) fills seams and covers fasteners, second coat (topping coat) smooths and extends beyond first coat, third coat (finish coat) smooths further and is lightly sanded. Some light areas may need a fourth thin coat. Each coat must dry completely before the next application.",
    },
  ],
});
