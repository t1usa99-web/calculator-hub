import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DeckCalculator() {
  const [deckLength, setDeckLength] = useState(16);
  const [deckWidth, setDeckWidth] = useState(12);
  const [joistSpacing, setJoistSpacing] = useState("16");
  const [deckingType, setDeckingType] = useState("pressure-treated");
  const [boardLength, setBoardLength] = useState(12);
  const [ptCostPerBoardFoot, setPtCostPerBoardFoot] = useState(0.85);
  const [compositeCostPerBoardFoot, setCompositeCostPerBoardFoot] = useState(2.5);
  const [cedarCostPerBoardFoot, setCedarCostPerBoardFoot] = useState(1.5);

  // Deck area
  const deckArea = deckLength * deckWidth;

  // Decking board calculation
  // Standard deck boards are 5/4" x 6" (actual 6" nominal width)
  // Board feet = (length in ft * width in inches / 12) * quantity
  const boardWidthInches = 5.5; // Actual 6" board is ~5.5"
  const boardsPerRow = Math.ceil(deckWidth / (boardWidthInches / 12));
  const boardsNeeded = boardsPerRow * Math.ceil(deckLength / boardLength);
  const deckingBoardFeet = boardsNeeded * boardLength * (5.5 / 12);

  // Joists calculation
  // Joists run perpendicular to deck boards (along the length)
  // Spacing: 12", 16", or 24" on center (OC)
  const joistSpacingInches = parseInt(joistSpacing);
  const numJoists = Math.ceil(deckWidth * 12 / joistSpacingInches) + 1;
  // Joists are typically 2x8 or 2x10 (assume 2x8, 7.25" actual width)
  const joistBoardFeet = numJoists * deckLength * (7.25 / 12) * 2; // 2 joists deep

  // Posts (typically 4x4, set every 8 ft)
  const postsPerRow = Math.ceil(deckLength / 8) + 1;
  const postsPerColumn = Math.ceil(deckWidth / 8) + 1;
  const numPosts = postsPerRow * postsPerColumn;
  const postBoardFeet = numPosts * 8 * (3.5 / 12) * 4;

  // Beam (assume 2x12 beam, 12" wide)
  const beamBoardFeet = Math.ceil(deckWidth / 8) * 12 * (11.25 / 12) * 2;

  // Total board feet for frame
  const frameboardFeet = joistBoardFeet + postBoardFeet + beamBoardFeet;
  const totalBoardFeet = deckingBoardFeet + frameboardFeet;

  // Cost calculations
  let materialCost = 0;
  if (deckingType === "pressure-treated") {
    materialCost = deckingBoardFeet * ptCostPerBoardFoot + frameboardFeet * ptCostPerBoardFoot;
  } else if (deckingType === "composite") {
    materialCost = deckingBoardFeet * compositeCostPerBoardFoot + frameboardFeet * ptCostPerBoardFoot;
  } else if (deckingType === "cedar") {
    materialCost = deckingBoardFeet * cedarCostPerBoardFoot + frameboardFeet * ptCostPerBoardFoot;
  }

  const chartData = [
    {
      type: "Pressure-Treated",
      cost: deckingBoardFeet * ptCostPerBoardFoot + frameboardFeet * ptCostPerBoardFoot,
    },
    {
      type: "Composite",
      cost: deckingBoardFeet * compositeCostPerBoardFoot + frameboardFeet * ptCostPerBoardFoot,
    },
    {
      type: "Cedar",
      cost: deckingBoardFeet * cedarCostPerBoardFoot + frameboardFeet * ptCostPerBoardFoot,
    },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Deck Area" value={formatNumber(deckArea, 0) + " sqft"} />
      <ResultCard label="Joist Spacing" value={joistSpacing + '" OC'} />
      <ResultCard label="Decking Boards" value={formatNumber(boardsNeeded, 0)} />
      <ResultCard label="Decking Board Feet" value={formatNumber(deckingBoardFeet, 0) + " bf"} />
      <ResultCard label="Joists (2x8)" value={formatNumber(numJoists, 0)} />
      <ResultCard label="Posts (4x4)" value={formatNumber(numPosts, 0)} />
      <ResultCard label="Frame Board Feet" value={formatNumber(frameboardFeet, 0) + " bf"} />
      <ResultCard label="Total Board Feet" value={formatNumber(totalBoardFeet, 0) + " bf"} />
      <ResultCard label="Material Type" value={deckingType} />
      <ResultCard label="Material Cost" value={formatCurrency(materialCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Material Cost by Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
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
      <h3 className="text-lg font-semibold text-gray-900">Deck Design and Construction</h3>
      <p>
        <strong>Decking Materials:</strong> Pressure-treated lumber is the most affordable ($0.80-1.00/bf), rot-resistant, and suitable for outdoor use. Cedar is attractive and natural but expensive ($1.50-2.00/bf) and requires regular maintenance. Composite decking is maintenance-free and long-lasting ($2.00-3.00/bf) but costs significantly more upfront. Choose based on budget, climate, maintenance tolerance, and aesthetic preferences.
      </p>
      <p>
        <strong>Joist Spacing:</strong> Joists (support beams) should be spaced 12 inches on center (OC) for maximum strength, 16 inches OC for standard decks, or 24 inches OC for budget options. Closer spacing (12 inches) prevents deck bounce and supports heavier loads. 16 inches OC is the most common balance between cost and strength. Always use joist hangers and lag bolts to connect to beams properly.
      </p>
      <p>
        <strong>Board Feet and Lumber Sizing:</strong> Board feet (bf) is the lumber industry standard: 1 bf = 1 foot long x 1 foot wide x 1 inch thick. Decking boards are typically 5/4 inches thick (about 1 inch actual) and 6 inches wide (5.5 inches actual). Joists are 2x8 or 2x10 (actual 1.5 x 7.25 or 9.25 inches). Posts are 4x4 (actual 3.5 x 3.5 inches). Always buy standard lengths to minimize waste.
      </p>
      <p>
        <strong>Load Capacity and Safety:</strong> Residential decks must support 40 lbs per square foot (live load) plus the deck weight. Posts should be on concrete piers below frost line (2-3 feet deep depending on region). Beams must be sized for the span and load. Railings are required if deck is over 30 inches high. Handrails must support 200 lbs of force. Always follow local building codes and obtain permits before building.
      </p>
      <p>
        <strong>Maintenance Considerations:</strong> Pressure-treated wood should be sealed every 2-3 years to prevent weathering. Cedar requires annual staining to maintain appearance. Composite requires occasional cleaning but no staining or sealing. Ensure proper drainage under the deck to prevent rot. Remove leaves and debris. Check fasteners annually and tighten as needed. Proper drainage and ventilation extend deck life significantly.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Deck Calculator"
      description="Calculate deck materials and cost estimates by type"
      slug="deck-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="deck-length"
          label="Deck Length (ft)"
          value={deckLength}
          onChange={setDeckLength}
          min={8}
          step={1}
        />

        <InputField
          id="deck-width"
          label="Deck Width (ft)"
          value={deckWidth}
          onChange={setDeckWidth}
          min={8}
          step={1}
        />

        <SelectField
          id="joist-spacing"
          label="Joist Spacing (On Center)"
          value={joistSpacing}
          onChange={setJoistSpacing}
          options={[
            { value: "12", label: '12" (Maximum Strength)' },
            { value: "16", label: '16" (Standard)' },
            { value: "24", label: '24" (Budget)' },
          ]}
        />

        <SelectField
          id="decking-type"
          label="Decking Type"
          value={deckingType}
          onChange={setDeckingType}
          options={[
            { value: "pressure-treated", label: "Pressure-Treated" },
            { value: "composite", label: "Composite" },
            { value: "cedar", label: "Cedar" },
          ]}
        />

        <InputField
          id="board-length"
          label="Standard Board Length (ft)"
          value={boardLength}
          onChange={setBoardLength}
          min={6}
          max={20}
          step={1}
        />

        <InputField
          id="pt-cost"
          label="Pressure-Treated Cost ($/bf)"
          value={ptCostPerBoardFoot}
          onChange={setPtCostPerBoardFoot}
          prefix="$"
          min={0}
          step={0.1}
        />

        <InputField
          id="composite-cost"
          label="Composite Cost ($/bf)"
          value={compositeCostPerBoardFoot}
          onChange={setCompositeCostPerBoardFoot}
          prefix="$"
          min={0}
          step={0.1}
        />

        <InputField
          id="cedar-cost"
          label="Cedar Cost ($/bf)"
          value={cedarCostPerBoardFoot}
          onChange={setCedarCostPerBoardFoot}
          prefix="$"
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DeckCalculator,
  slug: "deck-calculator",
  title: "Deck Calculator",
  shortTitle: "Deck",
  description: "Calculate deck materials and costs for different wood types",
  category: "construction",
  icon: "🏗️",
  keywords: ["deck", "boards", "joists", "pressure-treated", "composite"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is the difference between pressure-treated, cedar, and composite decking?",
      answer: "Pressure-treated is affordable ($0.80-1.00/bf) and rot-resistant but requires periodic sealing. Cedar is attractive and natural ($1.50-2.00/bf) but needs annual staining and is expensive. Composite is maintenance-free and long-lasting ($2.00-3.00/bf) but costs more upfront. Choose based on budget and maintenance willingness.",
    },
    {
      question: "What joist spacing should I use for my deck?",
      answer: "Use 12 inches on center (OC) for maximum strength and minimal bounce. 16 inches OC is standard and adequate for most residential decks. 24 inches OC saves money but results in more bounce and supports lighter loads. Spacing affects deflection and load capacity; always follow local building codes.",
    },
    {
      question: "How deep should posts be buried?",
      answer: "Posts should be on concrete piers set 2-3 feet deep (below frost line). The frost line depth varies by region; check local building codes. Proper depth prevents heaving in winter and ensures stability. Posts should rest on gravel for drainage. Never set posts directly on soil without concrete.",
    },
    {
      question: "What does board feet mean and how do I calculate it?",
      answer: "Board feet (bf) is lumber measurement: 1 bf = 1 ft long x 1 ft wide x 1 inch thick. To calculate: (length in ft {'×'} width in inches {'×'} thickness in inches) / 12 = board feet. For a 10 ft long, 6 inch wide, 1 inch thick board: (10 {'×'} 6 {'×'} 1) / 12 = 5 bf.",
    },
    {
      question: "Do I need a deck permit and building inspection?",
      answer: "Most jurisdictions require permits for decks over 12-24 inches high or larger than 200 sqft. Permits ensure proper construction, load capacity, and safety. Inspections verify joist spacing, post depth, handrails, and code compliance. Unpermitted decks may need to be removed or rebuilt. Always check local regulations before building.",
    },
  ],
});
