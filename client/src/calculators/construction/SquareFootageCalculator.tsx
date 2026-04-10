import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function SquareFootageCalculator() {
  const [shape, setShape] = useState("rectangle");
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(0); // For triangle
  const [radius, setRadius] = useState(0); // For circle
  const [parallelSide1, setParallelSide1] = useState(0); // For trapezoid
  const [parallelSide2, setParallelSide2] = useState(0);
  const [trapezoidHeight, setTrapezoidHeight] = useState(0);
  const [costPerSqft, setCostPerSqft] = useState(15);

  let squareFeet = 0;

  if (shape === "rectangle") {
    squareFeet = length * width;
  } else if (shape === "triangle") {
    squareFeet = (length * height) / 2;
  } else if (shape === "circle") {
    squareFeet = Math.PI * radius * radius;
  } else if (shape === "trapezoid") {
    squareFeet = ((parallelSide1 + parallelSide2) / 2) * trapezoidHeight;
  } else if (shape === "l-shape") {
    // L-shape: length x width minus a rectangular cutout
    const cutoutWidth = width * 0.4;
    const cutoutHeight = length * 0.4;
    squareFeet = length * width - cutoutWidth * cutoutHeight;
  }

  const squareMeters = squareFeet * 0.092903;
  const acres = squareFeet / 43560;
  const estimatedCost = squareFeet * costPerSqft;

  const chartData = [
    { name: "Square Feet", value: squareFeet },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Square Feet" value={formatNumber(squareFeet, 2)} highlight={true} />
      <ResultCard label="Square Meters" value={formatNumber(squareMeters, 2)} />
      <ResultCard label="Acres" value={formatNumber(acres, 4)} />
      <ResultCard label="Estimated Cost (@ ${`${costPerSqft}`}/sqft)" value={formatCurrency(estimatedCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Area Calculation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Legend />
          <Bar dataKey="value" fill="#3b82f6" name="Square Feet" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Square Footage</h3>
      <p>
        <strong>Square footage</strong> is the total area of a space measured in square feet. It is calculated by multiplying length by width for rectangular spaces. Square footage is essential for construction, flooring, painting, and cost estimation. Knowing the exact square footage of a room helps you purchase the right amount of materials and budget for projects accurately.
      </p>
      <p>
        <strong>Common Shapes:</strong> Most rooms are rectangular, but some spaces are triangular (attic rooms), circular (domes, round structures), trapezoidal (angled walls), or L-shaped (combined spaces). Each shape requires a different formula. For complex shapes, divide them into simpler shapes, calculate each area separately, then add them together.
      </p>
      <p>
        <strong>Unit Conversions:</strong> Square footage can be converted to square meters (1 sqft = 0.092903 sqm) or acres (1 acre = 43,560 sqft). These conversions are useful for international comparisons or large land areas. For property valuation, square footage is often the primary metric used to determine value per unit area.
      </p>
      <p>
        <strong>Cost Estimation:</strong> Once you know square footage, multiply by the cost per square foot to estimate project budgets. Flooring, painting, landscaping, roofing, and many construction materials are priced per square foot. Always add a 10-15% buffer for waste and overages when ordering materials.
      </p>
      <p>
        <strong>Practical Applications:</strong> Use square footage to calculate paint quantity (350 sqft per gallon), flooring material (tiles per sqft), landscaping soil (cubic yards from sqft and depth), and facility leasing costs (often charged at $/sqft per year). Accurate measurements save money and prevent material shortages.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Square Footage Calculator"
      description="Calculate area in different shapes and units"
      slug="square-footage-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="shape"
          label="Room/Space Shape"
          value={shape}
          onChange={setShape}
          options={[
            { value: "rectangle", label: "Rectangle" },
            { value: "triangle", label: "Triangle" },
            { value: "circle", label: "Circle" },
            { value: "trapezoid", label: "Trapezoid" },
            { value: "l-shape", label: "L-Shape" },
          ]}
        />

        {(shape === "rectangle" || shape === "trapezoid" || shape === "l-shape") && (
          <InputField
            id="length"
            label={shape === "trapezoid" ? "Height (ft)" : "Length (ft)"}
            value={length}
            onChange={setLength}
            min={0}
            step={0.5}
          />
        )}

        {(shape === "rectangle" || shape === "trapezoid" || shape === "l-shape") && (
          <InputField
            id="width"
            label="Width (ft)"
            value={width}
            onChange={setWidth}
            min={0}
            step={0.5}
          />
        )}

        {shape === "triangle" && (
          <>
            <InputField
              id="base"
              label="Base (ft)"
              value={length}
              onChange={setLength}
              min={0}
              step={0.5}
            />
            <InputField
              id="height"
              label="Height (ft)"
              value={height}
              onChange={setHeight}
              min={0}
              step={0.5}
            />
          </>
        )}

        {shape === "circle" && (
          <InputField
            id="radius"
            label="Radius (ft)"
            value={radius}
            onChange={setRadius}
            min={0}
            step={0.5}
          />
        )}

        {shape === "trapezoid" && (
          <>
            <InputField
              id="parallel-side-1"
              label="Parallel Side 1 (ft)"
              value={parallelSide1}
              onChange={setParallelSide1}
              min={0}
              step={0.5}
            />
            <InputField
              id="parallel-side-2"
              label="Parallel Side 2 (ft)"
              value={parallelSide2}
              onChange={setParallelSide2}
              min={0}
              step={0.5}
            />
            <InputField
              id="trapezoid-height"
              label="Height (ft)"
              value={trapezoidHeight}
              onChange={setTrapezoidHeight}
              min={0}
              step={0.5}
            />
          </>
        )}

        <InputField
          id="cost-per-sqft"
          label="Cost per Square Foot"
          value={costPerSqft}
          onChange={setCostPerSqft}
          prefix="$"
          min={0}
          step={1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SquareFootageCalculator,
  slug: "square-footage-calculator",
  title: "Square Footage Calculator",
  shortTitle: "Square Footage",
  description: "Calculate area of rooms and spaces in multiple shapes and units",
  category: "construction",
  icon: "📐",
  keywords: ["square footage", "area", "room size", "flooring", "paint calculator"],
  popular: true,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How do I calculate square footage for a rectangular room?",
      answer: "For a rectangular room, multiply length by width. For example, a room that is 20 feet long and 15 feet wide is 300 square feet (20 {'×'} 15 = 300 sqft). Always measure in feet for accurate results.",
    },
    {
      question: "How is square footage used for cost estimation?",
      answer: "Once you know the square footage, multiply by the cost per square foot to get the total project cost. For example, if flooring costs $8 per square foot and your room is 300 sqft, the total cost would be $2,400 (300 {'×'} $8). Always add 10-15% for waste.",
    },
    {
      question: "How do I convert square feet to square meters?",
      answer: "Divide square feet by 10.764 to get square meters. For example, 300 sqft divided by 10.764 equals approximately 27.9 sqm. This conversion is useful for international comparisons or construction specifications.",
    },
    {
      question: "What is the difference between an acre and square feet?",
      answer: "One acre equals 43,560 square feet. Acres are used to measure land area, while square feet measure smaller spaces like rooms or buildings. For example, a property of 0.5 acres contains 21,780 square feet.",
    },
    {
      question: "How do I calculate square footage for irregular or L-shaped rooms?",
      answer: "For L-shaped or complex rooms, divide the space into simple rectangles, calculate the area of each rectangle separately, then add them together. Alternatively, subtract the cutout area from the full area. This method works for any irregular shape.",
    },
  ],
});
