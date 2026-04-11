import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function TriangleCalculator() {
  const [sideA, setSideA] = useState(3);
  const [sideB, setSideB] = useState(4);
  const [sideC, setSideC] = useState(5);

  // Triangle validation
  const isValidTriangle =
    sideA > 0 &&
    sideB > 0 &&
    sideC > 0 &&
    sideA + sideB > sideC &&
    sideB + sideC > sideA &&
    sideA + sideC > sideB;

  // Perimeter
  const perimeter = sideA + sideB + sideC;

  // Area using Heron's formula
  const s = perimeter / 2; // semi-perimeter
  const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  // Triangle type
  const sides = [sideA, sideB, sideC].sort((a, b) => a - b);
  let triangleType = "Scalene";
  if (
    Math.abs(sideA - sideB) < 0.0001 &&
    Math.abs(sideB - sideC) < 0.0001
  ) {
    triangleType = "Equilateral";
  } else if (
    Math.abs(sideA - sideB) < 0.0001 ||
    Math.abs(sideB - sideC) < 0.0001 ||
    Math.abs(sideA - sideC) < 0.0001
  ) {
    triangleType = "Isosceles";
  }

  // Angles using Law of Cosines: cos(A) = (b² + c² - a²) / (2bc)
  const angleA = Math.acos(
    (sideB * sideB + sideC * sideC - sideA * sideA) /
      (2 * sideB * sideC)
  );
  const angleB = Math.acos(
    (sideA * sideA + sideC * sideC - sideB * sideB) /
      (2 * sideA * sideC)
  );
  const angleC = Math.acos(
    (sideA * sideA + sideB * sideB - sideC * sideC) /
      (2 * sideA * sideB)
  );

  const angleADeg = (angleA * 180) / Math.PI;
  const angleBDeg = (angleB * 180) / Math.PI;
  const angleCDeg = (angleC * 180) / Math.PI;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isValidTriangle ? (
        <>
          <ResultCard
            label="Perimeter"
            value={formatNumber(perimeter)}
            highlight={true}
          />
          <ResultCard
            label="Area"
            value={formatNumber(area)}
            highlight={true}
          />
          <ResultCard
            label="Triangle Type"
            value={triangleType}
          />
          <ResultCard
            label="Angle A (opposite side a)"
            value={formatNumber(angleADeg) + "°"}
          />
          <ResultCard
            label="Angle B (opposite side b)"
            value={formatNumber(angleBDeg) + "°"}
          />
          <ResultCard
            label="Angle C (opposite side c)"
            value={formatNumber(angleCDeg) + "°"}
          />
        </>
      ) : (
        <ResultCard
          label="Error"
          value="Invalid Triangle"
          highlight={true}
        />
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Triangle Properties</h3>
      <p>
        Triangles are defined by three vertices connected by three sides. <strong>Sum of angles:</strong> All three interior angles always sum to 180°. This fundamental rule allows you to find the third angle if you know two others. <strong>Triangle inequality:</strong> The sum of any two sides must be greater than the third side. For example, if two sides are 3 and 4, the third must be less than 7 and greater than 1. <strong>Triangle types by sides:</strong> Equilateral (all equal), isosceles (two equal), scalene (none equal). <strong>By angles:</strong> Acute (all {'<'} 90°), right (one = 90°), obtuse (one {'>'} 90°). The relationships between sides and angles matter: longer sides are opposite larger angles. A right triangle satisfies the Pythagorean theorem: a² + b² = c².
      </p>
      <p>
        <strong>Calculating Area and Perimeter:</strong> Perimeter is simply the sum of all three sides. Area depends on what you know: <strong>base × height ÷ 2</strong> if you know base and perpendicular height. <strong>Heron's formula:</strong> A = √[s(s−a)(s−b)(s−c)], where s = (a+b+c)/2 (semi-perimeter). This works when you know all three sides. For right triangles, the two legs serve as base and height, making area calculation straightforward. Example: right triangle with legs 5 and 12. Area = 5 × 12 ÷ 2 = 30. Using Pythagorean theorem, hypotenuse = √(25+144) = √169 = 13.
      </p>
      <p>
        <strong>Practical Applications:</strong> Triangles are fundamental in surveying, architecture, and construction. The law of sines and law of cosines extend calculations to any triangle (not just right triangles), solving real-world problems like finding distances or angles in landscapes. Understanding triangle properties helps in geometry, trigonometry, and even physics (forces, motion). When working with triangles, always verify the triangle inequality to ensure sides can form a valid triangle.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Triangle Calculator"
      description="Calculate area, perimeter, angles, and type of a triangle"
      slug="triangle-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="side-a"
          label="Side A"
          value={sideA}
          onChange={setSideA}
          min={0.01}
          step={0.1}
        />

        <InputField
          id="side-b"
          label="Side B"
          value={sideB}
          onChange={setSideB}
          min={0.01}
          step={0.1}
        />

        <InputField
          id="side-c"
          label="Side C"
          value={sideC}
          onChange={setSideC}
          min={0.01}
          step={0.1}
        />

        {!isValidTriangle && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            Invalid triangle: The sum of any two sides must be greater than the
            third side.
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
