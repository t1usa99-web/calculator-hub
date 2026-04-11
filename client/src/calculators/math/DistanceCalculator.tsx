import { useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function DistanceCalculator() {
  const [x1, setX1] = useState(1);
  const [y1, setY1] = useState(2);
  const [z1, setZ1] = useState(0);
  const [x2, setX2] = useState(4);
  const [y2, setY2] = useState(6);
  const [z2, setZ2] = useState(0);
  const [dimension, setDimension] = useState("2d");

  // Calculate distance
  let distance = 0;
  if (dimension === "2d") {
    distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  } else {
    distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
  }

  // Midpoint
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const midZ = (z1 + z2) / 2;

  // Components
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const deltaZ = z2 - z1;

  // Chart data for scatter plot
  const chartData = [
    { x: parseFloat(x1.toFixed(2)), y: parseFloat(y1.toFixed(2)), name: "Point 1" },
    { x: parseFloat(x2.toFixed(2)), y: parseFloat(y2.toFixed(2)), name: "Point 2" },
    { x: parseFloat(midX.toFixed(2)), y: parseFloat(midY.toFixed(2)), name: "Midpoint" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={dimension === "2d" ? "Distance (2D)" : "Distance (3D)"}
        value={formatNumber(distance)}
        highlight={true}
      />
      <ResultCard
        label="Distance Formula"
        value={dimension === "2d" ? "√((x₂-x₁)² + (y₂-y₁)²)" : "√((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)"}
      />
      <ResultCard
        label="Midpoint X"
        value={formatNumber(midX)}
      />
      <ResultCard
        label="Midpoint Y"
        value={formatNumber(midY)}
      />
      {dimension === "3d" && (
        <ResultCard
          label="Midpoint Z"
          value={formatNumber(midZ)}
        />
      )}
      <ResultCard
        label="ΔX (x₂ - x₁)"
        value={formatNumber(deltaX)}
      />
      <ResultCard
        label="ΔY (y₂ - y₁)"
        value={formatNumber(deltaY)}
      />
      {dimension === "3d" && (
        <ResultCard
          label="ΔZ (z₂ - z₁)"
          value={formatNumber(deltaZ)}
        />
      )}
    </div>
  );

  const chart = (
    <div className="w-full h-96 bg-white p-4 rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold mb-4">Point Visualization (2D)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="X" />
          <YAxis type="number" dataKey="y" name="Y" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Point 1" data={[chartData[0]]} fill="#8884d8" />
          <Scatter name="Point 2" data={[chartData[1]]} fill="#ff7300" />
          <Scatter name="Midpoint" data={[chartData[2]]} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Distance and Midpoints</h3>
      <p>
        The <strong>distance formula</strong> calculates the straight-line distance between two points. In 2D, it is <strong>d = √((x₂-x₁)² + (y₂-y₁)²)</strong>, derived from the Pythagorean theorem. In 3D space, it extends to <strong>d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)</strong>. For example, points (1,2) and (4,6) are √((4-1)² + (6-2)²) = √(9+16) = √25 = 5 units apart.
      </p>
      <p>
        The <strong>midpoint</strong> is the point exactly halfway between two points. In 2D, it is ((x₁+x₂)/2, (y₁+y₂)/2). In 3D, add the z-coordinate: ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2). The midpoint has practical applications: finding the center of a line segment, locating the meeting point between two locations, and bisecting geometric shapes. The <strong>displacement vector</strong> (Δx, Δy, Δz) shows direction and magnitude from point 1 to point 2.
      </p>
      <p>
        These concepts are fundamental in GPS navigation (calculating distances between coordinates), computer graphics (positioning objects in 3D space), physics (motion in space), and surveying. Understanding distance and midpoint calculations is essential for coordinate geometry, vector analysis, and spatial reasoning. From plotting a route on a map to positioning particles in a 3D simulation, these formulas are everywhere in modern technology and science.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Distance Calculator"
      description="Calculate distance and midpoint between two points in 2D or 3D space"
      slug="distance-calculator"
      results={results}
      chart={chart}
    >
      <div className="space-y-4">
        <SelectField
          id="dimension"
          label="Dimension"
          value={dimension}
          onChange={setDimension}
          options={[
            { value: "2d", label: "2D (x, y)" },
            { value: "3d", label: "3D (x, y, z)" },
          ]}
        />

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Point 1</h4>
          <InputField
            id="x1"
            label="X₁"
            value={x1}
            onChange={setX1}
            step={0.1}
          />
          <InputField
            id="y1"
            label="Y₁"
            value={y1}
            onChange={setY1}
            step={0.1}
          />
          {dimension === "3d" && (
            <InputField
              id="z1"
              label="Z₁"
              value={z1}
              onChange={setZ1}
              step={0.1}
            />
          )}
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Point 2</h4>
          <InputField
            id="x2"
            label="X₂"
            value={x2}
            onChange={setX2}
            step={0.1}
          />
          <InputField
            id="y2"
            label="Y₂"
            value={y2}
            onChange={setY2}
            step={0.1}
          />
          {dimension === "3d" && (
            <InputField
              id="z2"
              label="Z₂"
              value={z2}
              onChange={setZ2}
              step={0.1}
            />
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
