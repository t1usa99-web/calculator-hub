import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function StairsCalculator() {
  const [totalRise, setTotalRise] = useState(9.5); // feet (9.5 feet typical between floors)
  const [desiredRiserHeight, setDesiredRiserHeight] = useState(7.5); // inches

  // Building code limits
  const minRiser = 7.0;
  const maxRiser = 7.75;
  const minTread = 10.0;
  const standardTread = 10.5;

  // Convert totalRise to inches
  const totalRiseInches = totalRise * 12;

  // Calculate number of risers (steps up)
  // Each step has one riser (vertical) and one tread (horizontal)
  const numRisers = Math.ceil(totalRiseInches / desiredRiserHeight);

  // Calculate actual riser height
  const actualRiserHeight = totalRiseInches / numRisers;

  // Calculate tread depth (typical 10-11 inches, we'll use formula: tread = 25 - riser)
  // Standard formula for comfort: riser + tread = 17-18 inches
  const calculatedTread = 25 - actualRiserHeight;
  const treadsNeeded = numRisers - 1; // One less tread than risers (bottom floor is not a step)

  // Calculate total run (horizontal distance)
  const totalRun = treadsNeeded * calculatedTread;

  // Calculate stringer length (hypotenuse using Pythagorean theorem)
  const stringerLength = Math.sqrt(totalRiseInches ** 2 + (totalRun ** 2));

  // Check building code compliance
  const isRiserCompliant = actualRiserHeight >= minRiser && actualRiserHeight <= maxRiser;
  const isTreadCompliant = calculatedTread >= minTread;
  const isCompliant = isRiserCompliant && isTreadCompliant;

  const chartData = [
    { name: "Total Rise", value: totalRiseInches, unit: "in" },
    { name: "Total Run", value: totalRun, unit: "in" },
    { name: "Stringer Length", value: stringerLength, unit: "in" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Total Rise (Floor to Floor)" value={formatNumber(totalRise, 2) + " ft"} />
      <ResultCard label="Total Rise" value={formatNumber(totalRiseInches, 0) + " in"} />
      <ResultCard label="Desired Riser Height" value={formatNumber(desiredRiserHeight, 2) + " in"} />
      <ResultCard label="Number of Risers" value={formatNumber(numRisers, 0)} highlight={true} />
      <ResultCard label="Actual Riser Height" value={formatNumber(actualRiserHeight, 2) + " in"} />
      <ResultCard
        label="Riser Compliance"
        value={isRiserCompliant ? "✓ Code Compliant" : "✗ Non-Compliant"}
        highlight={isRiserCompliant}
      />
      <ResultCard label="Number of Treads" value={formatNumber(treadsNeeded, 0)} />
      <ResultCard label="Tread Depth" value={formatNumber(calculatedTread, 2) + " in"} />
      <ResultCard
        label="Tread Compliance"
        value={isTreadCompliant ? "✓ Code Compliant" : "✗ Non-Compliant"}
        highlight={isTreadCompliant}
      />
      <ResultCard label="Total Run (Horizontal)" value={formatNumber(totalRun, 0) + '"'} />
      <ResultCard label="Stringer Length" value={formatNumber(stringerLength, 2) + '"'} />
      <ResultCard
        label="Overall Compliance"
        value={isCompliant ? "✓ Code Compliant" : "✗ Review with Inspector"}
        highlight={isCompliant}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Stair Dimensions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Inches", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Legend />
          <Bar dataKey="value" fill="#3b82f6" name="Measurement (inches)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Stair Design and Building Codes</h3>
      <p>
        <strong>Riser and Tread Heights:</strong> A riser is the vertical part of a step; tread is the horizontal part you step on. Building codes require risers between 7 and 7.75 inches for safety and comfort. Treads must be at least 10 inches deep. Inconsistent riser or tread heights create trip hazards; uniform heights are critical. The formula riser + tread = 17-18 inches ensures ergonomic, comfortable stairs.
      </p>
      <p>
        <strong>Calculating Stairs:</strong> Divide total rise by desired riser height to get number of risers needed (round up). For example, 9.5 feet (114 inches) divided by 7.5 inches per riser = 15.2, round to 16 risers. Actual riser height becomes 114 / 16 = 7.13 inches. Treads equal one fewer than risers (15 treads for 16 risers). Calculate total run (horizontal distance) by multiplying treads by tread depth.
      </p>
      <p>
        <strong>Stringer and Support:</strong> The stringer is the diagonal support beam that holds the stairs. Calculate stringer length using the Pythagorean theorem: √(rise² + run²). Stairs typically need 2-3 stringers depending on width. Stringers must be sized to support load (typically 2x10 or 2x12 lumber). Install stringers on wall or against posts, never floating. Proper support ensures safety and longevity.
      </p>
      <p>
        <strong>Building Code Compliance:</strong> Risers must be 7-7.75 inches (varies by jurisdiction). Treads must be at least 10 inches. Tread depth must be uniform; variation greater than 0.375 inches creates a trip hazard. Handrails are required for stairs with 4 or more risers. Handrails must support 200 lbs of force. Local codes vary; always check before building. Permit and inspection are typically required.
      </p>
      <p>
        <strong>Design Considerations:</strong> Stairs that are too steep or shallow are uncomfortable. Calculate the slope angle using arctan(rise/run); 30-35 degrees is comfortable. Wider stairs (36' minimum) accommodate movement and furniture. Landing space improves safety. Lighting is essential. Choose durable materials for treads (hardwood, stone, or rubber) to handle wear. Proper design ensures both safety and functionality.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Stairs Calculator"
      description="Calculate stair dimensions and building code compliance"
      slug="stairs-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="total-rise"
          label="Total Rise Floor to Floor (feet)"
          value={totalRise}
          onChange={setTotalRise}
          min={5}
          max={20}
          step={0.1}
        />

        <InputField
          id="desired-riser"
          label="Desired Riser Height (inches)"
          value={desiredRiserHeight}
          onChange={setDesiredRiserHeight}
          min={6.5}
          max={8.5}
          step={0.1}
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Building Code Limits</h4>
          <p className="text-sm text-gray-700">
            Risers: 7.0-7.75 inches | Treads: Min 10 inches | Riser+Tread: 17-18 inches
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
