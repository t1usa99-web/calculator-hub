import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function PythagoreanTheoremCalculator() {
  const [side1, setSide1] = useState(3);
  const [side2, setSide2] = useState(4);
  const [hypotenuse, setHypotenuse] = useState(5);
  const [solveFor, setSolveFor] = useState("hypotenuse");

  let result = 0;
  let isValidTriangle = false;

  if (solveFor === "hypotenuse") {
    result = Math.sqrt(side1 * side1 + side2 * side2);
    isValidTriangle = side1 > 0 && side2 > 0;
  } else if (solveFor === "side1") {
    result = Math.sqrt(hypotenuse * hypotenuse - side2 * side2);
    isValidTriangle = side2 > 0 && hypotenuse > side2;
  } else if (solveFor === "side2") {
    result = Math.sqrt(hypotenuse * hypotenuse - side1 * side1);
    isValidTriangle = side1 > 0 && hypotenuse > side1;
  }

  // Area of right triangle: (leg1 * leg2) / 2
  let area = 0;
  let perimeter = 0;

  if (solveFor === "hypotenuse" && isValidTriangle) {
    area = (side1 * side2) / 2;
    perimeter = side1 + side2 + result;
  } else if (solveFor === "side1" && isValidTriangle) {
    area = (result * side2) / 2;
    perimeter = result + side2 + hypotenuse;
  } else if (solveFor === "side2" && isValidTriangle) {
    area = (side1 * result) / 2;
    perimeter = side1 + result + hypotenuse;
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isValidTriangle ? (
        <>
          <ResultCard
            label={solveFor === "hypotenuse" ? "Hypotenuse" : solveFor === "side1" ? "Side 1" : "Side 2"}
            value={formatNumber(result)}
            highlight={true}
          />
          <ResultCard
            label="Area"
            value={formatNumber(area)}
            highlight={true}
          />
          <ResultCard
            label="Perimeter"
            value={formatNumber(perimeter)}
          />
          {solveFor === "hypotenuse" && (
            <ResultCard
              label="Verification (a² + b²)"
              value={formatNumber(side1 * side1 + side2 * side2)}
            />
          )}
        </>
      ) : (
        <ResultCard
          label="Error"
          value="Invalid Input"
          highlight={true}
        />
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding the Pythagorean Theorem</h3>
      <p>
        The <strong>Pythagorean theorem</strong> states that in a right triangle, the square of the hypotenuse (longest side) equals the sum of squares of the other two sides: <strong>a² + b² = c²</strong>. The hypotenuse is always opposite the 90-degree angle. This fundamental relationship holds for all right triangles and is one of the most important theorems in mathematics.
      </p>
      <p>
        The theorem has many practical applications: <strong>construction and surveying</strong> use it to ensure right angles, <strong>navigation</strong> uses it to calculate distances, <strong>physics</strong> applies it to vector problems, and <strong>computer graphics</strong> use it constantly. For example, to check if a corner is truly square, measure distances of 3, 4, and 5 units: if 3² + 4² = 9 + 16 = 25 = 5², then it{'\''}s a perfect right angle.
      </p>
      <p>
        The <strong>area of a right triangle</strong> is simply (leg1 × leg2) / 2. If you have a 3-4-5 right triangle, the area is (3 × 4) / 2 = 6 square units. The <strong>perimeter</strong> is just the sum of all three sides. Understanding these relationships helps solve real-world problems in architecture, engineering, and design where precise measurements matter.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Pythagorean Theorem Calculator"
      description="Calculate missing sides of a right triangle using the Pythagorean theorem"
      slug="pythagorean-theorem-calculator"
      results={results}
    >
      <div className="space-y-4">
        <SelectField
          id="solve-for"
          label="Solve For"
          value={solveFor}
          onChange={setSolveFor}
          options={[
            { value: "hypotenuse", label: "Hypotenuse (c)" },
            { value: "side1", label: "Side 1 (a)" },
            { value: "side2", label: "Side 2 (b)" },
          ]}
        />

        {(solveFor === "hypotenuse" || solveFor === "side2") && (
          <InputField
            id="side-1"
            label="Side 1 (a)"
            value={side1}
            onChange={setSide1}
            min={0.01}
            step={0.1}
          />
        )}

        {(solveFor === "hypotenuse" || solveFor === "side1") && (
          <InputField
            id="side-2"
            label="Side 2 (b)"
            value={side2}
            onChange={setSide2}
            min={0.01}
            step={0.1}
          />
        )}

        {solveFor !== "hypotenuse" && (
          <InputField
            id="hypotenuse"
            label="Hypotenuse (c)"
            value={hypotenuse}
            onChange={setHypotenuse}
            min={0.01}
            step={0.1}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
