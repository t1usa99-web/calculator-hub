import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function SurfaceAreaCalculator() {
  const [shape, setShape] = useState("sphere");
  const [radius, setRadius] = useState(5);
  const [height, setHeight] = useState(10);
  const [sideLength, setSideLength] = useState(4);
  const [length, setLength] = useState(5);
  const [width, setWidth] = useState(3);
  const [slantHeight, setSlantHeight] = useState(8);

  let surfaceArea = 0;
  let volume = 0;

  if (shape === "sphere") {
    // Surface area = 4πr²
    surfaceArea = 4 * Math.PI * radius * radius;
    // Volume = (4/3)πr³
    volume = (4 / 3) * Math.PI * radius * radius * radius;
  } else if (shape === "cube") {
    // Surface area = 6s²
    surfaceArea = 6 * sideLength * sideLength;
    // Volume = s³
    volume = sideLength * sideLength * sideLength;
  } else if (shape === "cylinder") {
    // Surface area = 2πr(r + h)
    surfaceArea = 2 * Math.PI * radius * (radius + height);
    // Volume = πr²h
    volume = Math.PI * radius * radius * height;
  } else if (shape === "cone") {
    // Surface area = πr(r + s) where s is slant height
    surfaceArea = Math.PI * radius * (radius + slantHeight);
    // Volume = (1/3)πr²h
    volume = (1 / 3) * Math.PI * radius * radius * height;
  } else if (shape === "rectangular_prism") {
    // Surface area = 2(lw + lh + wh)
    surfaceArea = 2 * (length * width + length * height + width * height);
    // Volume = l × w × h
    volume = length * width * height;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Surface Area"
        value={formatNumber(surfaceArea)}
        highlight={true}
      />
      <ResultCard
        label="Volume"
        value={formatNumber(volume)}
        highlight={true}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding 3D Surface Area and Volume</h3>
      <p>
        <strong>Surface area</strong> is the total area of all outer surfaces of a 3D shape. <strong>Volume</strong> is the amount of space it encloses. Different shapes have different formulas. A <strong>sphere</strong> (ball) has surface area 4πr² and volume (4/3)πr³. A <strong>cube</strong> (square box) with side s has surface area 6s² and volume s³. A <strong>cylinder</strong> (can) with radius r and height h has surface area 2πr(r+h) and volume πr²h. A <strong>cone</strong> has surface area πr(r+s) where s is slant height, and volume (1/3)πr²h. A <strong>rectangular prism</strong> (box) with dimensions l, w, h has surface area 2(lw+lh+wh) and volume lwh.
      </p>
      <p>
        <strong>Practical applications:</strong> Surface area matters for materials needed to wrap or paint an object. Volume matters for capacity (how much liquid a container holds) or mass (multiplying volume by density). For example, a soda can needs material for its surface area, holds liquid according to its volume. In construction, knowing surface area and volume helps estimate paint, insulation, concrete, and material costs. Engineers use these to optimize designs for strength and efficiency.
      </p>
      <p>
        A sphere encloses maximum volume with minimum surface area (isoperimetric property), which is why bubbles, cells, and planets are spherical. Understanding these relationships helps in manufacturing, packaging, construction, and spatial reasoning. The ratio of surface area to volume affects how quickly an object cools or how bacteria can absorb nutrients, making these concepts vital in biology, physics, and engineering.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Surface Area Calculator"
      description="Calculate surface area and volume of 3D shapes: sphere, cube, cylinder, cone, and rectangular prism"
      slug="surface-area-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="shape"
          label="Shape"
          value={shape}
          onChange={setShape}
          options={[
            { value: "sphere", label: "Sphere" },
            { value: "cube", label: "Cube" },
            { value: "cylinder", label: "Cylinder" },
            { value: "cone", label: "Cone" },
            { value: "rectangular_prism", label: "Rectangular Prism" },
          ]}
        />

        {(shape === "sphere" || shape === "cylinder" || shape === "cone") && (
          <InputField
            id="radius"
            label="Radius"
            value={radius}
            onChange={setRadius}
            min={0.01}
            step={0.1}
          />
        )}

        {(shape === "cylinder" || shape === "cone" || shape === "rectangular_prism") && (
          <InputField
            id="height"
            label="Height"
            value={height}
            onChange={setHeight}
            min={0.01}
            step={0.1}
          />
        )}

        {shape === "cube" && (
          <InputField
            id="side-length"
            label="Side Length"
            value={sideLength}
            onChange={setSideLength}
            min={0.01}
            step={0.1}
          />
        )}

        {shape === "rectangular_prism" && (
          <>
            <InputField
              id="length"
              label="Length"
              value={length}
              onChange={setLength}
              min={0.01}
              step={0.1}
            />
            <InputField
              id="width"
              label="Width"
              value={width}
              onChange={setWidth}
              min={0.01}
              step={0.1}
            />
          </>
        )}

        {shape === "cone" && (
          <InputField
            id="slant-height"
            label="Slant Height"
            value={slantHeight}
            onChange={setSlantHeight}
            min={0.01}
            step={0.1}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
