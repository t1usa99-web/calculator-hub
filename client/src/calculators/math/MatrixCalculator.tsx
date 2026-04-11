import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function MatrixCalculator() {
  const [mode, setMode] = useState("2x2");
  const [operation, setOperation] = useState("add");

  // 2x2 matrices
  const [a11, setA11] = useState(1);
  const [a12, setA12] = useState(2);
  const [a21, setA21] = useState(3);
  const [a22, setA22] = useState(4);

  const [b11, setB11] = useState(5);
  const [b12, setB12] = useState(6);
  const [b21, setB21] = useState(7);
  const [b22, setB22] = useState(8);

  // 3x3 matrices
  const [c11, setC11] = useState(1);
  const [c12, setC12] = useState(0);
  const [c13, setC13] = useState(0);
  const [c21, setC21] = useState(0);
  const [c22, setC22] = useState(1);
  const [c23, setC23] = useState(0);
  const [c31, setC31] = useState(0);
  const [c32, setC32] = useState(0);
  const [c33, setC33] = useState(1);

  const [d11, setD11] = useState(2);
  const [d12, setD12] = useState(1);
  const [d13, setD13] = useState(0);
  const [d21, setD21] = useState(0);
  const [d22, setD22] = useState(3);
  const [d23, setD23] = useState(1);
  const [d31, setD31] = useState(1);
  const [d32, setD32] = useState(0);
  const [d33, setD33] = useState(2);

  // Helper functions
  const det2x2 = (m: number[][]) => m[0][0] * m[1][1] - m[0][1] * m[1][0];

  const det3x3 = (m: number[][]) => {
    return (
      m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
      m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
      m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0])
    );
  };

  let resultMatrix: number[][] = [];
  let resultDet = 0;

  if (mode === "2x2") {
    const matrixA = [[a11, a12], [a21, a22]];
    const matrixB = [[b11, b12], [b21, b22]];

    if (operation === "add") {
      resultMatrix = [
        [a11 + b11, a12 + b12],
        [a21 + b21, a22 + b22],
      ];
    } else if (operation === "subtract") {
      resultMatrix = [
        [a11 - b11, a12 - b12],
        [a21 - b21, a22 - b22],
      ];
    } else if (operation === "multiply") {
      resultMatrix = [
        [a11 * b11 + a12 * b21, a11 * b12 + a12 * b22],
        [a21 * b11 + a22 * b21, a21 * b12 + a22 * b22],
      ];
    } else if (operation === "determinant") {
      resultDet = det2x2(matrixA);
      resultMatrix = [[resultDet]];
    } else if (operation === "inverse") {
      const det = det2x2(matrixA);
      if (det !== 0) {
        resultMatrix = [
          [a22 / det, -a12 / det],
          [-a21 / det, a11 / det],
        ];
      }
    } else if (operation === "transpose") {
      resultMatrix = [
        [a11, a21],
        [a12, a22],
      ];
    }
  } else {
    const matrixC = [[c11, c12, c13], [c21, c22, c23], [c31, c32, c33]];
    const matrixD = [[d11, d12, d13], [d21, d22, d23], [d31, d32, d33]];

    if (operation === "add") {
      resultMatrix = [
        [c11 + d11, c12 + d12, c13 + d13],
        [c21 + d21, c22 + d22, c23 + d23],
        [c31 + d31, c32 + d32, c33 + d33],
      ];
    } else if (operation === "subtract") {
      resultMatrix = [
        [c11 - d11, c12 - d12, c13 - d13],
        [c21 - d21, c22 - d22, c23 - d23],
        [c31 - d31, c32 - d32, c33 - d33],
      ];
    } else if (operation === "determinant") {
      resultDet = det3x3(matrixC);
      resultMatrix = [[resultDet]];
    } else if (operation === "transpose") {
      resultMatrix = [
        [c11, c21, c31],
        [c12, c22, c32],
        [c13, c23, c33],
      ];
    }
  }

  const results = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Result Matrix</h3>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          {resultMatrix.map((row, i) => (
            <div key={i} className="flex gap-3 justify-center mb-2">
              {row.map((val, j) => (
                <div key={j} className="w-16 text-right">
                  {formatNumber(val, 2)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {(operation === "determinant" || resultDet !== 0) && (
        <ResultCard label="Determinant" value={formatNumber(resultDet, 4)} highlight />
      )}
    </div>
  );

  const chartData = resultMatrix.map((row, i) => ({
    row: `Row ${i + 1}`,
    sum: row.reduce((a, b) => a + b, 0),
  }));

  const chart = chartData.length > 0 ? (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Row Sums</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="row" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line type="monotone" dataKey="sum" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A matrix is a rectangular array of numbers arranged in rows and columns. Matrices are fundamental tools in linear algebra, used extensively in engineering, physics, computer graphics, economics, and data science. Matrix operations allow you to solve systems of equations, perform transformations, and analyze complex data relationships.
      </p>

      <p>
        <strong>Basic Matrix Operations:</strong> Addition and subtraction add or subtract corresponding elements. Matrix multiplication combines rows and columns using dot products, producing a new matrix where each element is the sum of products. Determinants (scalar values) are computed from square matrices and are essential for understanding invertibility and volume scaling. The transpose operation flips a matrix across its diagonal, swapping rows and columns.
      </p>

      <p>
        <strong>Matrix Inverse and Determinants:</strong> A matrix inverse (when it exists) is like a reciprocal for matrices. Only square matrices with non-zero determinants are invertible. A determinant of zero means a matrix is singular and non-invertible. For 2x2 matrices, the determinant equals ad minus bc. For larger matrices, determinants become more complex but follow similar algebraic rules.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Graphics professionals use matrices for 3D rotations, scaling, and transformations. Engineers use matrices to solve systems of equations in structural analysis. Economists use matrices for input-output analysis. Machine learning and data science rely heavily on matrix operations for neural networks and linear regression. Understanding matrix operations is essential for advanced technical fields.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Matrix Calculator"
      description="Perform matrix operations including addition, subtraction, multiplication, determinant, inverse, and transpose"
      slug="matrix-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-6">
        <SelectField
          id="matrix-mode"
          label="Matrix Size"
          value={mode}
          onChange={setMode}
          options={[
            { value: "2x2", label: "2x2 Matrix" },
            { value: "3x3", label: "3x3 Matrix" },
          ]}
        />

        <SelectField
          id="operation"
          label="Operation"
          value={operation}
          onChange={setOperation}
          options={[
            { value: "add", label: "Add" },
            { value: "subtract", label: "Subtract" },
            { value: "multiply", label: "Multiply" },
            { value: "determinant", label: "Determinant" },
            { value: "transpose", label: "Transpose" },
            ...(mode === "2x2" ? [{ value: "inverse", label: "Inverse (2x2 only)" }] : []),
          ]}
        />

        {mode === "2x2" && (
          <>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm text-blue-900 mb-3">Matrix A</h4>
              <div className="grid grid-cols-2 gap-3">
                <InputField id="a11" label="a11" value={a11} onChange={setA11} />
                <InputField id="a12" label="a12" value={a12} onChange={setA12} />
                <InputField id="a21" label="a21" value={a21} onChange={setA21} />
                <InputField id="a22" label="a22" value={a22} onChange={setA22} />
              </div>
            </div>

            {(operation !== "determinant" && operation !== "transpose") && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-green-900 mb-3">Matrix B</h4>
                <div className="grid grid-cols-2 gap-3">
                  <InputField id="b11" label="b11" value={b11} onChange={setB11} />
                  <InputField id="b12" label="b12" value={b12} onChange={setB12} />
                  <InputField id="b21" label="b21" value={b21} onChange={setB21} />
                  <InputField id="b22" label="b22" value={b22} onChange={setB22} />
                </div>
              </div>
            )}
          </>
        )}

        {mode === "3x3" && (
          <>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm text-blue-900 mb-3">Matrix C</h4>
              <div className="grid grid-cols-3 gap-2">
                <InputField id="c11" label="c11" value={c11} onChange={setC11} />
                <InputField id="c12" label="c12" value={c12} onChange={setC12} />
                <InputField id="c13" label="c13" value={c13} onChange={setC13} />
                <InputField id="c21" label="c21" value={c21} onChange={setC21} />
                <InputField id="c22" label="c22" value={c22} onChange={setC22} />
                <InputField id="c23" label="c23" value={c23} onChange={setC23} />
                <InputField id="c31" label="c31" value={c31} onChange={setC31} />
                <InputField id="c32" label="c32" value={c32} onChange={setC32} />
                <InputField id="c33" label="c33" value={c33} onChange={setC33} />
              </div>
            </div>

            {(operation !== "determinant" && operation !== "transpose") && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-green-900 mb-3">Matrix D</h4>
                <div className="grid grid-cols-3 gap-2">
                  <InputField id="d11" label="d11" value={d11} onChange={setD11} />
                  <InputField id="d12" label="d12" value={d12} onChange={setD12} />
                  <InputField id="d13" label="d13" value={d13} onChange={setD13} />
                  <InputField id="d21" label="d21" value={d21} onChange={setD21} />
                  <InputField id="d22" label="d22" value={d22} onChange={setD22} />
                  <InputField id="d23" label="d23" value={d23} onChange={setD23} />
                  <InputField id="d31" label="d31" value={d31} onChange={setD31} />
                  <InputField id="d32" label="d32" value={d32} onChange={setD32} />
                  <InputField id="d33" label="d33" value={d33} onChange={setD33} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}
