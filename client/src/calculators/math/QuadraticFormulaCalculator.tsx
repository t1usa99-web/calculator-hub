import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function QuadraticFormulaCalculator() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);

  // Discriminant: b² - 4ac
  const discriminant = b * b - 4 * a * c;

  // Roots using quadratic formula: (-b ± √discriminant) / (2a)
  let root1: string | number = "N/A";
  let root2: string | number = "N/A";
  let isReal = discriminant >= 0;

  if (a !== 0) {
    if (isReal) {
      const sqrtDisc = Math.sqrt(discriminant);
      root1 = (-b + sqrtDisc) / (2 * a);
      root2 = (-b - sqrtDisc) / (2 * a);
    } else {
      // Complex roots
      const realPart = -b / (2 * a);
      const imagPart = Math.sqrt(-discriminant) / (2 * a);
      root1 = `${formatNumber(realPart)} + ${formatNumber(imagPart)}i`;
      root2 = `${formatNumber(realPart)} - ${formatNumber(imagPart)}i`;
    }
  }

  // Vertex: (-b/2a, c - b²/4a)
  const vertexX = a !== 0 ? -b / (2 * a) : 0;
  const vertexY = a !== 0 ? c - (b * b) / (4 * a) : 0;

  // Generate parabola chart data
  const chartData = [];
  const range = Math.max(Math.abs(vertexX) + 5, 5);
  for (let x = vertexX - range; x <= vertexX + range; x += range / 20) {
    const y = a * x * x + b * x + c;
    chartData.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Discriminant"
        value={formatNumber(discriminant)}
        highlight={true}
      />
      <ResultCard
        label="Root 1"
        value={typeof root1 === "number" ? formatNumber(root1) : root1}
        highlight={true}
      />
      <ResultCard
        label="Root 2"
        value={typeof root2 === "number" ? formatNumber(root2) : root2}
        highlight={true}
      />
      <ResultCard
        label="Vertex X-coordinate"
        value={formatNumber(vertexX)}
      />
      <ResultCard
        label="Vertex Y-coordinate"
        value={formatNumber(vertexY)}
      />
      <ResultCard
        label="Root Type"
        value={isReal ? "Real Roots" : "Complex Roots"}
      />
    </div>
  );

  const chart = (
    <div className="w-full h-96 bg-white p-4 rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold mb-4">Parabola Graph</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} name="y = ax² + bx + c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Quadratic Equations</h3>
      <p>
        A quadratic equation has the form <strong>ax² + bx + c = 0</strong>, where a, b, and c are constants and a {String.fromCharCode(8800)} 0. The solutions (roots) can be found using the quadratic formula: <strong>x = (-b ± √(b² - 4ac)) / 2a</strong>. The expression under the square root is called the <strong>discriminant</strong>.
      </p>
      <p>
        The <strong>discriminant (b² - 4ac)</strong> determines the nature of roots: If discriminant {'>'} 0, there are two distinct real roots. If discriminant = 0, there is one repeated real root (the parabola touches the x-axis). If discriminant {'<'} 0, there are two complex conjugate roots (no real solutions). This tells you whether the parabola crosses the x-axis, touches it, or doesn{'\''}t touch it at all.
      </p>
      <p>
        The <strong>vertex</strong> is the turning point of the parabola, located at x = -b/2a. This is the minimum or maximum point. The parabola opens upward if a {'>'} 0 and downward if a {'<'} 0. Understanding these properties helps solve real-world problems in physics (projectile motion), finance (profit optimization), and engineering.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Quadratic Formula Calculator"
      description="Solve quadratic equations ax² + bx + c = 0 and find discriminant, roots, and vertex"
      slug="quadratic-formula-calculator"
      results={results}
      chart={chart}
    >
      <div className="space-y-4">
        <InputField
          id="coefficient-a"
          label="Coefficient a"
          value={a}
          onChange={setA}
          step={0.1}
        />
        <InputField
          id="coefficient-b"
          label="Coefficient b"
          value={b}
          onChange={setB}
          step={0.1}
        />
        <InputField
          id="coefficient-c"
          label="Coefficient c"
          value={c}
          onChange={setC}
          step={0.1}
        />
        {a === 0 && (
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-lg text-sm">
            Coefficient a cannot be 0 for a quadratic equation.
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: QuadraticFormulaCalculator,
  slug: "quadratic-formula-calculator",
  title: "Quadratic Formula Calculator",
  shortTitle: "Quadratic Formula",
  description: "Solve quadratic equations and find roots, discriminant, and vertex",
  category: "math",
  icon: "📐",
  keywords: ["quadratic", "formula", "roots", "discriminant", "algebra", "equation"],
  popular: true,
  faqs: [
    {
      question: "What is the quadratic formula?",
      answer: "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a. It solves any equation in the form ax² + bx + c = 0."
    },
    {
      question: "What does the discriminant tell us?",
      answer: "The discriminant (b² - 4ac) determines if roots are real or complex. If positive: two real roots. If zero: one repeated root. If negative: two complex roots."
    },
    {
      question: "What is the vertex?",
      answer: "The vertex is the turning point of the parabola at x = -b/2a, y = c - b²/4a. It{'\''}s the minimum or maximum point depending on whether a is positive or negative."
    },
    {
      question: "When does a quadratic have no real solutions?",
      answer: "When the discriminant is negative (b² - 4ac {'<'} 0), the equation has no real solutions, only complex roots."
    },
    {
      question: "How do parabolas relate to quadratic equations?",
      answer: "A quadratic equation y = ax² + bx + c represents a parabola. The roots are where the parabola crosses the x-axis."
    }
  ],
  dateModified: "2026-04-10",
});
