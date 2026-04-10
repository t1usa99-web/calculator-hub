import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { VOLUME_FAQS } from "@/lib/faq-math";
import { registerCalculator } from "@/lib/calculator-registry";

export default function VolumeCalculator() {
  const [shape, setShape] = useState("sphere");
  const [radius, setRadius] = useState(5);
  const [height, setHeight] = useState(10);
  const [sideLength, setSideLength] = useState(5);
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(6);

  let volume = 0;
  let surfaceArea = 0;
  let formula = "";
  let surfaceFormula = "";

  if (shape === "sphere") {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
    formula = `V = (4/3)πr³ = (4/3)π × ${radius}³ = ${formatNumber(volume, 2)}`;
    surfaceFormula = `SA = 4πr² = 4π × ${radius}² = ${formatNumber(surfaceArea, 2)}`;
  } else if (shape === "cylinder") {
    volume = Math.PI * Math.pow(radius, 2) * height;
    surfaceArea = 2 * Math.PI * radius * (radius + height);
    formula = `V = πr²h = π × ${radius}² × ${height} = ${formatNumber(volume, 2)}`;
    surfaceFormula = `SA = 2πr(r + h) = 2π × ${radius} × (${radius} + ${height}) = ${formatNumber(surfaceArea, 2)}`;
  } else if (shape === "cone") {
    volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    const slantHeight = Math.sqrt(radius * radius + height * height);
    surfaceArea = Math.PI * radius * (radius + slantHeight);
    formula = `V = (1/3)πr²h = (1/3)π × ${radius}² × ${height} = ${formatNumber(volume, 2)}`;
    surfaceFormula = `SA = πr(r + l) = π × ${radius} × (${radius} + ${formatNumber(slantHeight, 2)}) = ${formatNumber(surfaceArea, 2)}`;
  } else if (shape === "cube") {
    volume = Math.pow(sideLength, 3);
    surfaceArea = 6 * Math.pow(sideLength, 2);
    formula = `V = s³ = ${sideLength}³ = ${formatNumber(volume, 2)}`;
    surfaceFormula = `SA = 6s² = 6 × ${sideLength}² = ${formatNumber(surfaceArea, 2)}`;
  } else if (shape === "rectangular") {
    volume = length * width * height;
    surfaceArea = 2 * (length * width + width * height + height * length);
    formula = `V = l × w × h = ${length} × ${width} × ${height} = ${formatNumber(volume, 2)}`;
    surfaceFormula = `SA = 2(lw + wh + hl) = ${formatNumber(surfaceArea, 2)}`;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Volume" value={formatNumber(volume, 2) + " cubic units"} highlight />
      <ResultCard label="Surface Area" value={formatNumber(surfaceArea, 2) + " sq units"} />
      <ResultCard label="Volume Formula" value={formula} />
      <ResultCard label="Surface Area Formula" value={surfaceFormula} />
    </div>
  );

  const visualization = (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">3D Shape Visualization</h3>
      {shape === "sphere" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <defs>
            <radialGradient id="sphereGradient">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1e40af" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="70" fill="url(#sphereGradient)" stroke="#1e40af" strokeWidth="2" />
          <line x1="100" y1="100" x2="100" y2="30" stroke="#ef4444" strokeWidth="2" />
          <text x="110" y="65" fontSize="12" fill="#ef4444">r</text>
        </svg>
      )}
      {shape === "cylinder" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <ellipse cx="100" cy="50" rx="50" ry="20" fill="#93c5fd" stroke="#1e40af" strokeWidth="2" />
          <rect x="50" y="50" width="100" height="80" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
          <ellipse cx="100" cy="130" rx="50" ry="20" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="130" stroke="#ef4444" strokeWidth="2" />
          <text x="35" y="90" fontSize="12" fill="#ef4444">h</text>
        </svg>
      )}
      {shape === "cone" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <polygon points="100,30 50,150 150,150" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
          <ellipse cx="100" cy="150" rx="50" ry="20" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
          <line x1="100" y1="30" x2="100" y2="150" stroke="#ef4444" strokeWidth="2" />
          <text x="110" y="90" fontSize="12" fill="#ef4444">h</text>
        </svg>
      )}
      {shape === "cube" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <polygon points="60,60 140,60 140,140 60,140" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
          <polygon points="140,60 170,30 170,110 140,140" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
          <polygon points="60,60 30,30 170,30 140,60" fill="#93c5fd" stroke="#1e40af" strokeWidth="2" />
          <line x1="60" y1="60" x2="140" y2="60" stroke="#ef4444" strokeWidth="2" />
          <text x="100" y="50" fontSize="12" fill="#ef4444" textAnchor="middle">s</text>
        </svg>
      )}
      {shape === "rectangular" && (
        <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
          <polygon points="50,80 130,80 140,140 60,140" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
          <polygon points="130,80 150,60 150,120 140,140" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
          <polygon points="50,80 30,60 150,60 130,80" fill="#93c5fd" stroke="#1e40af" strokeWidth="2" />
          <line x1="50" y1="80" x2="130" y2="80" stroke="#ef4444" strokeWidth="2" />
          <text x="90" y="70" fontSize="12" fill="#ef4444">l</text>
        </svg>
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Volume is the measure of how much three-dimensional space an object occupies, expressed in cubic units. Whether you're calculating the capacity of a storage container, the amount of concrete needed for a foundation, the size of a swimming pool, or the capacity of a beverage can, understanding volume calculations is essential. Different 3D shapes have different volume formulas, but they all serve the purpose of quantifying the space contained within a shape.
      </p>

      <p>
        <strong>Basic 3D Shapes and Their Formulas:</strong> A sphere (ball) has volume V = (4/3)πr³. A cylinder (like a can) uses V = πr²h where r is the radius and h is the height. A cone (like an ice cream cone) uses V = (1/3)πr²h. A cube (six equal square faces) uses V = s³ where s is the side length. A rectangular prism (box shape) uses V = length × width × height. Each formula reflects the unique geometry and structure of the shape.
      </p>

      <p>
        <strong>Surface Area Calculations:</strong> While volume measures the interior space, surface area measures the total area of all the outer surfaces. Surface area is important when you need to know how much material is needed to cover an object (paint for a sphere, sheet metal for a cylinder, fabric for a box). For a sphere, SA = 4πr². For a cylinder, SA = 2πr(r + h). Understanding both volume and surface area provides complete information about a 3D object.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Engineers use volume calculations to design tanks, pipes, and containers. Architects calculate room volumes for HVAC and climate control planning. Manufacturers determine packaging sizes and material quantities. Chemists use volume in concentration calculations. Construction professionals calculate material volumes. Understanding volume is crucial in packaging optimization, resource planning, and countless industrial and professional applications.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Volume Calculator"
      description="Calculate volume and surface area for spheres, cylinders, cones, cubes, and rectangular prisms"
      slug="volume-calculator"
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
            { value: "sphere", label: "Sphere" },
            { value: "cylinder", label: "Cylinder" },
            { value: "cone", label: "Cone" },
            { value: "cube", label: "Cube" },
            { value: "rectangular", label: "Rectangular Prism" },
          ]}
        />

        {(shape === "sphere" || shape === "cylinder" || shape === "cone") && (
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

        {(shape === "cylinder" || shape === "cone" || shape === "rectangular") && (
          <InputField
            id="height"
            label="Height"
            value={height}
            onChange={setHeight}
            step={0.1}
            min={0.1}
            max={1000}
          />
        )}

        {shape === "cube" && (
          <InputField
            id="side-length"
            label="Side Length"
            value={sideLength}
            onChange={setSideLength}
            step={0.1}
            min={0.1}
            max={1000}
          />
        )}

        {shape === "rectangular" && (
          <>
            <InputField
              id="rect-length"
              label="Length"
              value={length}
              onChange={setLength}
              step={0.1}
              min={0.1}
            />
            <InputField
              id="rect-width"
              label="Width"
              value={width}
              onChange={setWidth}
              step={0.1}
              min={0.1}
            />
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: VolumeCalculator,
  slug: "volume-calculator",
  title: "Volume Calculator",
  shortTitle: "Volume",
  description: "Calculate volume and surface area of 3D shapes",
  category: "math",
  icon: "📦",
  keywords: ["volume", "surface area", "sphere", "cylinder", "cone", "cube"],
  popular: false,
  faqs: VOLUME_FAQS,
  dateModified: "2026-04-09"
});
