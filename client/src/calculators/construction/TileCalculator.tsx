import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";

export default function TileCalculator() {
  const [areaLength, setAreaLength] = useState(20);
  const [areaWidth, setAreaWidth] = useState(15);
  const [tileSize, setTileSize] = useState("12x12");
  const [groutWidth, setGroutWidth] = useState(0.125); // 1/8 inch standard
  const [waste, setWaste] = useState(10);
  const [tilePrice, setTilePrice] = useState(3);
  const [groutPrice, setGroutPrice] = useState(35);
  const [adhesivePrice, setAdhesivePrice] = useState(40);

  // Tile sizes in inches
  const tileSizes: { [key: string]: { width: number; height: number; tilesPerBox: number } } = {
    "6x6": { width: 6, height: 6, tilesPerBox: 45 },
    "12x12": { width: 12, height: 12, tilesPerBox: 10 },
    "12x24": { width: 12, height: 24, tilesPerBox: 8 },
    "18x18": { width: 18, height: 18, tilesPerBox: 6 },
    "24x24": { width: 24, height: 24, tilesPerBox: 4 },
  };

  const tileInfo = tileSizes[tileSize];
  const areaSquareFeet = areaLength * areaWidth;
  const areaSquareInches = areaSquareFeet * 144;

  // Single tile area in square inches
  const singleTileArea = tileInfo.width * tileInfo.height;
  const tilesNeeded = Math.ceil(areaSquareInches / singleTileArea);
  const tilesWithWaste = Math.ceil(tilesNeeded * (1 + waste / 100));
  const boxes = Math.ceil(tilesWithWaste / tileInfo.tilesPerBox);

  // Grout calculation (simplified)
  // Grout needed (lbs) = (area in sqft / tile coverage) * depth * density
  // Roughly 1 lb per 10 sqft with 1/8" grout joint
  const groutNeeded = Math.ceil((areaSquareFeet / 10) * 1.2); // Buffer for waste
  const groutBags = Math.ceil(groutNeeded / 5); // 5 lb bags typical

  // Adhesive calculation (roughly 50 lbs covers 100 sqft)
  const adhesiveNeeded = Math.ceil((areaSquareFeet / 100) * 50);
  const adhesiveBags = Math.ceil(adhesiveNeeded / 50); // 50 lb bags

  const tileCost = tilesWithWaste * tilePrice;
  const groutCost = groutBags * groutPrice;
  const adhesiveCost = adhesiveBags * adhesivePrice;
  const totalCost = tileCost + groutCost + adhesiveCost;

  const chartData = [
    { name: "Tiles", value: tileCost },
    { name: "Grout", value: groutCost },
    { name: "Adhesive", value: adhesiveCost },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Area" value={formatNumber(areaSquareFeet, 0) + " sqft"} />
      <ResultCard label="Tile Size" value={tileSize} />
      <ResultCard label="Tiles Needed (no waste)" value={formatNumber(tilesNeeded, 0)} />
      <ResultCard label="Tiles with Waste" value={formatNumber(tilesWithWaste, 0)} highlight={true} />
      <ResultCard label="Boxes Required" value={formatNumber(boxes, 0)} />
      <ResultCard label="Grout Bags (5 lb)" value={formatNumber(groutBags, 0)} />
      <ResultCard label="Adhesive Bags (50 lb)" value={formatNumber(adhesiveBags, 0)} />
      <ResultCard label="Tile Cost" value={formatCurrency(tileCost)} />
      <ResultCard label="Grout Cost" value={formatCurrency(groutCost)} />
      <ResultCard label="Adhesive Cost" value={formatCurrency(adhesiveCost)} />
      <ResultCard label="Total Material Cost" value={formatCurrency(totalCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Material Cost Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Tile Installation Essentials</h3>
      <p>
        <strong>Tile Sizing:</strong> Common floor tile sizes are 6x6, 12x12, 12x24, 18x18, and 24x24 inches. Larger tiles appear more spacious and require fewer pieces, but need perfectly level surfaces. Smaller tiles (6x6) offer more flexibility with uneven floors. Wall tiles are often smaller (4x4, 6x6, 8x8) for better grip and pattern options.
      </p>
      <p>
        <strong>Calculating Tiles Needed:</strong> Convert floor area to square inches, then divide by single tile area in square inches. Always add 10-15% waste for cuts, breakage, and future repairs. A 300 sqft floor with 12x12 tiles needs approximately 300 tiles, but order 330-345 tiles with waste factored in.
      </p>
      <p>
        <strong>Grout Joints:</strong> Standard grout joint width is 1/8 inch, though it can range from 1/16 inch (tight, modern look) to 1/4 inch (rustic, wider gaps). Wider grout joints require more grout material and hide imperfections better. Grout comes in many colors; darker grout hides stains better than light grout. Always seal grout after installation to prevent staining and moisture infiltration.
      </p>
      <p>
        <strong>Tile Adhesive and Grout:</strong> Tile adhesive (also called mortar or thin-set) bonds tiles to the substrate. Plan on 50-75 lbs per 100 sqft depending on substrate and tile thickness. Grout fills joints between tiles. You need roughly 5-15 lbs of grout per 100 sqft depending on joint width. Both come in bags that must be mixed with water.
      </p>
      <p>
        <strong>Professional Installation Tips:</strong> Ensure the substrate is level, clean, and dry before tiling. Use appropriate adhesive for the tile type and substrate. Apply adhesive with a notched trowel at a 45-degree angle. Allow proper drying time (24-48 hours) before grouting. Seal grout and use appropriate sealers for porous tiles. Proper preparation ensures tile longevity.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Tile Calculator"
      description="Calculate floor and wall tile, grout, and adhesive materials"
      slug="tile-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="area-length"
          label="Area Length (ft)"
          value={areaLength}
          onChange={setAreaLength}
          min={1}
          step={0.5}
        />

        <InputField
          id="area-width"
          label="Area Width (ft)"
          value={areaWidth}
          onChange={setAreaWidth}
          min={1}
          step={0.5}
        />

        <SelectField
          id="tile-size"
          label="Tile Size"
          value={tileSize}
          onChange={setTileSize}
          options={[
            { value: "6x6", label: "6x6 inches" },
            { value: "12x12", label: "12x12 inches" },
            { value: "12x24", label: "12x24 inches" },
            { value: "18x18", label: "18x18 inches" },
            { value: "24x24", label: "24x24 inches" },
          ]}
        />

        <InputField
          id="grout-width"
          label="Grout Joint Width (inches)"
          value={groutWidth}
          onChange={setGroutWidth}
          min={0.0625}
          max={0.5}
          step={0.0625}
        />

        <InputField
          id="waste"
          label="Waste Factor (%)"
          value={waste}
          onChange={setWaste}
          suffix="%"
          min={5}
          max={25}
          step={1}
        />

        <InputField
          id="tile-price"
          label="Price per Tile"
          value={tilePrice}
          onChange={setTilePrice}
          prefix="$"
          min={0}
          step={0.50}
        />

        <InputField
          id="grout-price"
          label="Grout Price per Bag (5 lb)"
          value={groutPrice}
          onChange={setGroutPrice}
          prefix="$"
          min={0}
          step={1}
        />

        <InputField
          id="adhesive-price"
          label="Adhesive Price per Bag (50 lb)"
          value={adhesivePrice}
          onChange={setAdhesivePrice}
          prefix="$"
          min={0}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}
