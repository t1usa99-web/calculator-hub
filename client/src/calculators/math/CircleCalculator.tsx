import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CircleCalculator() {
  const [radius, setRadius] = useState(5);
  const [inputType, setInputType] = useState("radius");

  // Calculate all properties based on input type
  let r = radius;

  if (inputType === "diameter") {
    r = radius / 2;
  } else if (inputType === "circumference") {
    r = radius / (2 * Math.PI);
  } else if (inputType === "area") {
    r = Math.sqrt(radius / Math.PI);
  }

  const diameter = 2 * r;
  const circumference = 2 * Math.PI * r;
  const area = Math.PI * r * r;

  // Arc and sector (for 45 degrees as example)
  const angleDegrees = 45;
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const arcLength = r * angleRadians;
  const sectorArea = (r * r * angleRadians) / 2;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Radius"
        value={formatNumber(r)}
        highlight={true}
      />
      <ResultCard
        label="Diameter"
        value={formatNumber(diameter)}
        highlight={true}
      />
      <ResultCard
        label="Circumference"
        value={formatNumber(circumference)}
      />
      <ResultCard
        label="Area"
        value={formatNumber(area)}
      />
      <ResultCard
        label={`Arc Length (${angleDegrees}°)`}
        value={formatNumber(arcLength)}
      />
      <ResultCard
        label={`Sector Area (${angleDegrees}°)`}
        value={formatNumber(sectorArea)}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Circle Properties</h3>
      <p>
        A <strong>circle</strong> is defined by its center and radius (distance from center to edge). Key properties include: <strong>radius</strong> (r), <strong>diameter</strong> (d = 2r, the widest distance across), <strong>circumference</strong> (C = 2πr, the perimeter), and <strong>area</strong> (A = πr²). The constant π ({String.fromCharCode(960)}) {String.fromCharCode(8776)} 3.14159 appears in all circle formulas and relates to the ratio of circumference to diameter.
      </p>
      <p>
        <strong>Arc length</strong> is a portion of the circumference: arc = rθ, where θ is the angle in radians. <strong>Sector area</strong> is a slice of the circle: area = (r²θ)/2. These concepts extend to circular motion, planet orbits, and rotational dynamics. In practical applications: a wheel{'\''}s circumference determines how far it travels per rotation, area calculates paint needed, and arc length measures distances along curved paths. Understanding circles is essential in geometry, trigonometry, physics, and engineering.
      </p>
      <p>
        The relationship between a circle and its inscribed or circumscribed shapes creates fascinating geometry. A circle is the most efficient shape for enclosing area with a given perimeter (isoperimetric problem). This appears in nature (bubbles, cells, planets) and engineering design (pipes, tanks, structures) because of its optimal properties for strength and efficiency.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Circle Calculator"
      description="Calculate radius, diameter, circumference, area, and arc properties of circles"
      slug="circle-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="input-type"
          label="Input Type"
          value={inputType}
          onChange={setInputType}
          options={[
            { value: "radius", label: "Radius" },
            { value: "diameter", label: "Diameter" },
            { value: "circumference", label: "Circumference" },
            { value: "area", label: "Area" },
          ]}
        />

        <InputField
          id="value"
          label={
            inputType === "radius"
              ? "Radius"
              : inputType === "diameter"
              ? "Diameter"
              : inputType === "circumference"
              ? "Circumference"
              : "Area"
          }
          value={radius}
          onChange={setRadius}
          min={0.01}
          step={0.1}
        />

        <div className="p-3 bg-blue-50 text-blue-800 rounded-lg text-sm">
          <p>
            <strong>π {String.fromCharCode(8776)} 3.14159</strong> - The ratio of circumference to diameter
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
