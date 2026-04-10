import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PaintCalculator() {
  const [roomLength, setRoomLength] = useState(20);
  const [roomWidth, setRoomWidth] = useState(15);
  const [ceilingHeight, setCeilingHeight] = useState(8);
  const [numDoors, setNumDoors] = useState(2);
  const [numWindows, setNumWindows] = useState(4);
  const [coats, setCoats] = useState(2);
  const [paintPrice, setPaintPrice] = useState(35);
  const [coverage, setCoverage] = useState(350); // sqft per gallon

  // Standard door area (approx)
  const doorArea = 21;
  // Standard window area (approx)
  const windowArea = 15;

  // Calculate wall area
  // Perimeter = 2 * (length + width)
  const perimeter = 2 * (roomLength + roomWidth);
  // Wall area = perimeter * height
  const totalWallArea = perimeter * ceilingHeight;
  // Subtract door and window areas
  const deductedArea = (numDoors * doorArea) + (numWindows * windowArea);
  const paintableArea = totalWallArea - deductedArea;

  // Calculate paint needed
  const gallonsPerCoat = paintableArea / coverage;
  const totalGallons = gallonsPerCoat * coats;
  const gallonsToOrder = Math.ceil(totalGallons);

  // Cost
  const totalCost = gallonsToOrder * paintPrice;

  const chartData = [
    { name: "Coat 1", area: paintableArea },
    ...(coats > 1 ? [{ name: "Coat 2", area: paintableArea }] : []),
    ...(coats > 2 ? [{ name: "Coat 3", area: paintableArea }] : []),
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Total Wall Area" value={formatNumber(totalWallArea, 0) + " sqft"} />
      <ResultCard label="Doors & Windows Deduction" value={formatNumber(deductedArea, 0) + " sqft"} />
      <ResultCard label="Paintable Area" value={formatNumber(paintableArea, 0) + " sqft"} highlight={true} />
      <ResultCard label="Gallons per Coat" value={formatNumber(gallonsPerCoat, 2)} />
      <ResultCard label="Total Coats" value={formatNumber(coats, 0)} />
      <ResultCard label="Gallons to Order" value={formatNumber(gallonsToOrder, 0)} highlight={true} />
      <ResultCard label="Paint Cost" value={formatCurrency(totalCost)} highlight={true} />
      <ResultCard label="Coverage" value={formatNumber(coverage, 0) + " sqft/gal"} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Paintable Area by Coat</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Square Feet", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Legend />
          <Bar dataKey="area" fill="#3b82f6" name="Area (sqft)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Interior Painting Guide</h3>
      <p>
        <strong>Paint Coverage:</strong> Typical latex interior paint covers 300-400 sqft per gallon, depending on surface texture and quality. Higher-quality paints cover more area and require fewer coats. Textured or porous surfaces (drywall, plaster) may require more paint. Always check the manufacturer's coverage specifications on the can.
      </p>
      <p>
        <strong>Number of Coats:</strong> Most interior painting jobs require 2 coats for even, professional coverage. One coat rarely provides adequate coverage and color uniformity. Some colors (especially light colors over dark walls) require 3 coats. Primer is a separate product applied before paint, especially over new drywall, stains, or dramatically different colors.
      </p>
      <p>
        <strong>Calculating Wall Area:</strong> Wall area equals perimeter times ceiling height. Perimeter is 2 times (length plus width). For a 20x15 room with 8-foot ceilings, perimeter is 70 feet, and wall area is 560 sqft. Subtract door areas (approximately 21 sqft each) and window areas (approximately 15 sqft each) to avoid overordering. This calculation is for walls only; ceiling is separate.
      </p>
      <p>
        <strong>Paint Types and Finishes:</strong> Interior paint comes in flat (matte), eggshell, satin, and semi-gloss finishes. Flat finish hides imperfections but marks easily. Eggshell and satin offer durability with slight sheen and are ideal for living areas. Semi-gloss is best for trim, doors, and bathrooms due to durability and washability. Always use paint appropriate for the room type (bathroom/kitchen need moisture-resistant paint).
      </p>
      <p>
        <strong>Professional Preparation:</strong> Proper preparation is key to a professional finish. Patch holes and cracks, sand rough spots, prime new drywall and repairs, protect floors and furniture with drop cloths, and use painter{"'"}s tape on trim. Remove outlet covers and switch plates. Prime before painting dark colors over light walls. Quality paint and proper technique ensure a long-lasting, beautiful finish.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Paint Calculator"
      description="Calculate paint needed for interior rooms"
      slug="paint-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="room-length"
          label="Room Length (ft)"
          value={roomLength}
          onChange={setRoomLength}
          min={5}
          step={1}
        />

        <InputField
          id="room-width"
          label="Room Width (ft)"
          value={roomWidth}
          onChange={setRoomWidth}
          min={5}
          step={1}
        />

        <InputField
          id="ceiling-height"
          label="Ceiling Height (ft)"
          value={ceilingHeight}
          onChange={setCeilingHeight}
          min={6}
          max={20}
          step={0.5}
        />

        <InputField
          id="num-doors"
          label="Number of Doors"
          value={numDoors}
          onChange={setNumDoors}
          min={0}
          max={10}
          step={1}
        />

        <InputField
          id="num-windows"
          label="Number of Windows"
          value={numWindows}
          onChange={setNumWindows}
          min={0}
          max={20}
          step={1}
        />

        <InputField
          id="coats"
          label="Number of Coats"
          value={coats}
          onChange={setCoats}
          min={1}
          max={3}
          step={1}
        />

        <InputField
          id="paint-price"
          label="Paint Price per Gallon"
          value={paintPrice}
          onChange={setPaintPrice}
          prefix="$"
          min={10}
          step={5}
        />

        <InputField
          id="coverage"
          label="Paint Coverage (sqft per gallon)"
          value={coverage}
          onChange={setCoverage}
          min={200}
          max={500}
          step={10}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PaintCalculator,
  slug: "paint-calculator",
  title: "Paint Calculator",
  shortTitle: "Paint",
  description: "Calculate interior paint needed for rooms with doors and windows",
  category: "construction",
  icon: "🎨",
  keywords: ["paint", "interior", "room", "wall", "home improvement"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How do I calculate the square footage of walls in a room?",
      answer: "Calculate perimeter (2 {'×'} (length + width)), then multiply by ceiling height. For a 20x15 room with 8-foot ceilings: perimeter is 70 feet, so wall area is 70 {'×'} 8 = 560 sqft. Subtract approximately 21 sqft per door and 15 sqft per window to avoid overordering paint.",
    },
    {
      question: "How many coats of paint do I need?",
      answer: "Most interior painting requires 2 coats for even coverage. One coat rarely provides adequate color uniformity and coverage. Some colors, especially light colors over dark walls, require 3 coats. Primer is a separate product applied first to new drywall, stains, or when changing colors dramatically.",
    },
    {
      question: "What does paint coverage mean?",
      answer: "Paint coverage (typically 300-400 sqft per gallon) indicates how much area one gallon of paint covers. Higher-quality paints cover more area and require fewer coats. Textured or porous surfaces require more paint than smooth surfaces. Always check the manufacturer's coverage on the can, as it varies by product.",
    },
    {
      question: "Which paint finish should I use for different rooms?",
      answer: "Use flat finish in bedrooms and living areas (hides imperfections but marks easily). Eggshell and satin are ideal for family living spaces (durable, subtle sheen). Semi-gloss is best for kitchens, bathrooms, and trim (highly durable and washable). Choose moisture-resistant paint for bathrooms and kitchens to prevent mildew.",
    },
    {
      question: "How much extra paint should I buy?",
      answer: "Always add 10-20% extra for touch-ups and future maintenance. Buying extra in the same batch ensures consistent color matching. Save leftover paint in airtight containers for up to 5 years. Store in a cool, dry location. Having extra paint available makes repairs and refreshes much easier over time.",
    },
  ],
});
