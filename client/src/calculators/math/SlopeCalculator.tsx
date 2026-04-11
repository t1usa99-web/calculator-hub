import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function SlopeCalculator() {
  const [x1, setX1] = useState(1);
  const [y1, setY1] = useState(2);
  const [x2, setX2] = useState(5);
  const [y2, setY2] = useState(10);

  // Calculate slope: (y2 - y1) / (x2 - x1)
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const slope = deltaX !== 0 ? deltaY / deltaX : 0;

  // Y-intercept: y = mx + b, so b = y - mx
  const yIntercept = y1 - slope * x1;

  // Line equation: y = mx + b
  const lineEquation = `y = ${formatNumber(slope)}x + ${formatNumber(yIntercept)}`;

  // Distance between two points: √((x2-x1)² + (y2-y1)²)
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Angle of line: atan(slope) in degrees
  const angleRadians = Math.atan(slope);
  const angleDegrees = (angleRadians * 180) / Math.PI;

  // Generate line data for chart
  const lineData = [];
  const minX = Math.min(x1, x2) - 2;
  const maxX = Math.max(x1, x2) + 2;
  for (let x = minX; x <= maxX; x += 0.5) {
    const y = slope * x + yIntercept;
    lineData.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }

  // Add the two input points
  const pointsData = [
    { x: parseFloat(x1.toFixed(2)), y: parseFloat(y1.toFixed(2)), label: "Point 1" },
    { x: parseFloat(x2.toFixed(2)), y: parseFloat(y2.toFixed(2)), label: "Point 2" },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Slope (m)"
        value={formatNumber(slope)}
        highlight={true}
      />
      <ResultCard
        label="Y-Intercept (b)"
        value={formatNumber(yIntercept)}
        highlight={true}
      />
      <ResultCard
        label="Distance between points"
        value={formatNumber(distance)}
      />
      <ResultCard
        label="Angle (degrees)"
        value={formatNumber(angleDegrees)}
      />
      <ResultCard
        label="Line Equation"
        value={lineEquation}
      />
    </div>
  );

  const chart = (
    <div className="w-full h-96 bg-white p-4 rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold mb-4">Line Graph</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} name="Line" />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={200}>
          <ScatterChart data={pointsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Scatter name="Points" data={pointsData} fill="#ff7300" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Slope and Lines</h3>
      <p>
        The <strong>slope</strong> of a line measures its steepness. It{'\''}s calculated as the change in y divided by the change in x: <strong>slope = (y2 - y1) / (x2 - x1)</strong>. A positive slope means the line goes upward from left to right. A negative slope means downward. A slope of 0 is a horizontal line, and undefined slope (vertical line) occurs when x2 = x1.
      </p>
      <p>
        The <strong>line equation</strong> is typically written as <strong>y = mx + b</strong>, where m is the slope and b is the y-intercept (where the line crosses the y-axis). If you know two points, you can calculate the slope and then find b using the formula: <strong>b = y - mx</strong>. This allows you to write the complete equation of any line through those two points.
      </p>
      <p>
        The <strong>distance between two points</strong> uses the distance formula: <strong>d = √((x2-x1)² + (y2-y1)²)</strong>. The <strong>angle of inclination</strong> is found using arctan(slope), measured from the positive x-axis. These concepts are fundamental in coordinate geometry, physics (velocity, acceleration), and engineering (structural analysis). Understanding slope helps in analyzing rates of change, which appears everywhere from economics (cost per unit) to medicine (drug dosage rates).
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Slope Calculator"
      description="Calculate slope, distance, and line equation from two points"
      slug="slope-calculator"
      results={results}
      chart={chart}
    >
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Point 1</h4>
          <InputField
            id="x1"
            label="X1"
            value={x1}
            onChange={setX1}
            step={0.1}
          />
          <InputField
            id="y1"
            label="Y1"
            value={y1}
            onChange={setY1}
            step={0.1}
          />
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Point 2</h4>
          <InputField
            id="x2"
            label="X2"
            value={x2}
            onChange={setX2}
            step={0.1}
          />
          <InputField
            id="y2"
            label="Y2"
            value={y2}
            onChange={setY2}
            step={0.1}
          />
        </div>

        {x1 === x2 && (
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-lg text-sm">
            Points have the same x-coordinate. The line is vertical with undefined slope.
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
