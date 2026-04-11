import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function AreaCalculator() {
  const [shape, setShape] = useState("circle");
  const [radius, setRadius] = useState(5);
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(8);
  const [base, setBase] = useState(6);
  const [height, setHeight] = useState(4);
  const [topBase, setTopBase] = useState(4);

  let area = 0;
  let perimeter = 0;
  let formula = "";

  if (shape === "circle") {
    area = Math.PI * radius * radius;
    perimeter = 2 * Math.PI * radius;
    formula = `Area = πr² = π × ${radius}² = ${formatNumber(area, 2)}`;
  } else if (shape === "rectangle") {
    area = length * width;
    perimeter = 2 * (length + width);
    formula = `Area = length × width = ${length} × ${width} = ${formatNumber(area, 2)}`;
  } else if (shape === "triangle") {
    area = (base * height) / 2;
    perimeter = base + height + Math.sqrt(base * base / 4 + height * height);
    formula = `Area = (base × height) / 2 = (${base} × ${height}) / 2 = ${formatNumber(area, 2)}`;
  } else if (shape === "trapezoid") {
    area = ((base + topBase) / 2) * height;
    perimeter = base + topBase + 2 * height;
    formula = `Area = ((b1 + b2) / 2) × h = ((${base} + ${topBase}) / 2) × ${height} = ${formatNumber(area, 2)}`;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Area" value={formatNumber(area, 2) + " sq units"} highlight />
      <ResultCard label="Perimeter/Circumference" value={formatNumber(perimeter, 2) + " units"} />
      <ResultCard label="Formula" value={formula} />
      {shape === "circle" && (
        <ResultCard label="Diameter" value={formatNumber(2 * radius, 2) + " units"} />
      )}
    </div>
  );

  const visualization = (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Shape Visualization</h3>
      {shape === "circle" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <circle cx="100" cy="100" r={Math.min(80, radius * 8)} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          <line x1="100" y1="100" x2={100 + Math.min(80, radius * 8)} y2="100" stroke="#ef4444" strokeWidth="2" />
          <text x="140" y="105" fontSize="12" fill="#ef4444">r</text>
        </svg>
      )}
      {shape === "rectangle" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <rect x="40" y="60" width="120" height={Math.min(80, (width / length) * 120)} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="40" fontSize="12" fill="#ef4444" textAnchor="middle">{length}</text>
          <text x="20" y="100" fontSize="12" fill="#ef4444">{width}</text>
        </svg>
      )}
      {shape === "triangle" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <polygon points="50,150 150,150 100,50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="170" fontSize="12" fill="#ef4444" textAnchor="middle">{base}</text>
          <text x="30" y="120" fontSize="12" fill="#ef4444">{height}</text>
        </svg>
      )}
      {shape === "trapezoid" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <polygon points="40,150 160,150 130,70 70,70" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="170" fontSize="12" fill="#ef4444" textAnchor="middle">{base}</text>
          <text x="100" y="60" fontSize="12" fill="#ef4444" textAnchor="middle">{topBase}</text>
        </svg>
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Area is the measure of the space enclosed by a two-dimensional shape, expressed in square units. Whether you're calculating the amount of paint needed for a wall, the size of a piece of land, the fabric required for a project, or the coverage of a floor, understanding how to calculate area is essential. Different shapes require different formulas, but they all serve the same fundamental purpose: quantifying the space a shape occupies.
      </p>

      <p>
        <strong>Common Shapes and Their Formulas:</strong> A circle's area depends on its radius (distance from center to edge): Area = πr². A rectangle's area is simply length times width. A triangle's area is half the base times height: Area = (base × height) / 2. A trapezoid (with two parallel sides) uses the average of its parallel sides times height: Area = ((b1 + b2) / 2) × h. Each shape has a unique formula because their dimensions relate to area differently.
      </p>

      <p>
        <strong>Perimeter and Circumference:</strong> While area measures the space inside a shape, perimeter measures the distance around it. For a rectangle, perimeter = 2(length + width). For a circle, we call the perimeter the "circumference" and calculate it as 2πr. Perimeter is useful when you need to know how much material is needed to border or enclose a space, such as fencing a yard or trimming a decorative border.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Architects and engineers use area calculations in building design, construction, and land surveying. Farmers calculate field areas for crop planning. Urban planners use area to analyze city spaces. Manufacturers determine material requirements based on area. Understanding area also helps in scaling recipes, adjusting fabric quantities, or planning garden layouts. Mastering area calculations provides practical skills applicable across many professions and everyday situations.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Area Calculator"
      description="Calculate area and perimeter for circles, rectangles, triangles, and trapezoids"
      slug="area-calculator"
      results={results}
      chart={visualization}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="shape"
          label="Shape"
          value={shape}
          onChange={setShape}
          options={[
            { value: "circle", label: "Circle" },
            { value: "rectangle", label: "Rectangle" },
            { value: "triangle", label: "Triangle" },
            { value: "trapezoid", label: "Trapezoid" },
          ]}
        />

        {shape === "circle" && (
          <InputField
            id="radius"
            label="Radius"
            value={radius}
            onChange={setRadius}
            step={0.1}
            min={0.1}
            max={1000}
          />
        )}

        {shape === "rectangle" && (
          <>
            <InputField
              id="length"
              label="Length"
              value={length}
              onChange={setLength}
              step={0.1}
              min={0.1}
            />
            <InputField
              id="width"
              label="Width"
              value={width}
              onChange={setWidth}
              step={0.1}
              min={0.1}
            />
          </>
        )}

        {shape === "triangle" && (
          <>
            <InputField
              id="triangle-base"
              label="Base"
              value={base}
              onChange={setBase}
              step={0.1}
              min={0.1}
            />
            <InputField
              id="triangle-height"
              label="Height"
              value={height}
              onChange={setHeight}
              step={0.1}
              min={0.1}
            />
          </>
        )}

        {shape === "trapezoid" && (
          <>
            <InputField
              id="base1"
              label="Base 1 (longer)"
              value={base}
              onChange={setBase}
              step={0.1}
              min={0.1}
            />
            <InputField
              id="base2"
              label="Base 2 (shorter)"
              value={topBase}
              onChange={setTopBase}
              step={0.1}
              min={0.1}
            />
            <InputField
              id="trap-height"
              label="Height"
              value={height}
              onChange={setHeight}
              step={0.1}
              min={0.1}
            />
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}
