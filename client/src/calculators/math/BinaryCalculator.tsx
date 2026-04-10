import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BinaryCalculator() {
  const [decimal, setDecimal] = useState(42);
  const [binary1, setBinary1] = useState("00101010");
  const [binary2, setBinary2] = useState("00001111");

  // Convert decimal to various bases
  const hexValue = decimal.toString(16).toUpperCase();
  const octalValue = decimal.toString(8);
  const binaryValue = decimal.toString(2);

  // Convert binary to decimal
  let binaryToDecimal = 0;
  try {
    binaryToDecimal = parseInt(binary1, 2);
  } catch {
    binaryToDecimal = 0;
  }

  // Binary addition
  let binarySum = "0";
  let binaryDifference = "0";
  try {
    const bin1Decimal = parseInt(binary1, 2);
    const bin2Decimal = parseInt(binary2, 2);
    const sum = bin1Decimal + bin2Decimal;
    const diff = bin1Decimal - bin2Decimal;
    binarySum = sum.toString(2);
    binaryDifference = Math.max(0, diff).toString(2);
  } catch {
    binarySum = "0";
    binaryDifference = "0";
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Decimal"
        value={formatNumber(decimal, 0)}
        highlight={true}
      />
      <ResultCard
        label="Binary"
        value={binaryValue}
        highlight={true}
      />
      <ResultCard
        label="Hexadecimal"
        value={hexValue}
        highlight={true}
      />
      <ResultCard
        label="Octal"
        value={octalValue}
        highlight={true}
      />
      <ResultCard
        label={`${binary1} in Decimal`}
        value={formatNumber(binaryToDecimal, 0)}
      />
      <ResultCard
        label="Binary Addition Result"
        value={binarySum}
      />
      <ResultCard
        label="Binary Subtraction Result"
        value={binaryDifference}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Number Systems</h3>
      <p>
        Different <strong>number systems</strong> represent numbers using different bases. <strong>Decimal</strong> (base 10) uses digits 0-9 and is our everyday system. <strong>Binary</strong> (base 2) uses digits 0-1 and is the foundation of computers; every digital device ultimately works in binary. <strong>Hexadecimal</strong> (base 16) uses digits 0-9 and letters A-F; it{'\''}s used in programming for color codes (#FF5733) and memory addresses. <strong>Octal</strong> (base 8) uses digits 0-7; historically used in computing but less common now.
      </p>
      <p>
        To convert from any base to decimal, multiply each digit by the base raised to its position power, then sum. For example, binary 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11. Conversely, to convert decimal to any base, repeatedly divide by the base and collect remainders in reverse order. <strong>Binary operations</strong> like addition and subtraction work the same as decimal: add or subtract each position, carry if needed. 1010 + 0101 = 1111 in binary, which is 10 + 5 = 15 in decimal.
      </p>
      <p>
        Understanding number systems is crucial for computer science, digital electronics, programming, and cybersecurity. Binary is how computers process data. Hexadecimal is standard for specifying colors in web design. Being fluent in base conversion helps debug code, understand memory, and work with digital systems. Modern development often requires thinking in multiple bases simultaneously.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Binary Calculator"
      description="Convert between binary, decimal, octal, and hexadecimal; perform binary arithmetic"
      slug="binary-calculator"
      results={results}
    >
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Decimal to Base Conversion</h4>
          <InputField
            id="decimal"
            label="Decimal Number"
            value={decimal}
            onChange={setDecimal}
            min={0}
            step={1}
          />
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Binary Operations</h4>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Binary Number 1
            </label>
            <input
              type="text"
              value={binary1}
              onChange={(e) => setBinary1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="00101010"
            />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Binary Number 2
            </label>
            <input
              type="text"
              value={binary2}
              onChange={(e) => setBinary2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="00001111"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BinaryCalculator,
  slug: "binary-calculator",
  title: "Binary Calculator",
  shortTitle: "Binary",
  description: "Convert between binary, decimal, octal, and hex; perform binary operations",
  category: "math",
  icon: "💻",
  keywords: ["binary", "decimal", "hexadecimal", "octal", "base conversion", "computer science"],
  popular: false,
  faqs: [
    {
      question: "What is binary?",
      answer: "Binary (base 2) uses only digits 0 and 1. It{'\''}s the language of computers. Every number, letter, and image is ultimately represented in binary."
    },
    {
      question: "How do I convert decimal to binary?",
      answer: "Repeatedly divide by 2 and collect remainders in reverse order. For example, 10 ÷ 2 = 5 r0, 5 ÷ 2 = 2 r1, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Reading upward: 1010."
    },
    {
      question: "What is hexadecimal and why use it?",
      answer: "Hexadecimal (base 16) uses 0-9 and A-F. It{'\''}s used in programming for color codes, memory addresses, and data representation because it{'\''}s compact and easier to read than binary."
    },
    {
      question: "How do binary operations work?",
      answer: "Binary addition and subtraction work like decimal: 1 + 1 = 10 (2 in decimal), 10 - 1 = 1, carry rules apply. Each digit position is powers of 2."
    },
    {
      question: "Why do computers use binary?",
      answer: "Binary is perfect for electronic circuits with two states: on/off, high/low voltage. It{'\''}s reliable, simple to implement, and fundamental to digital electronics."
    }
  ],
  dateModified: "2026-04-10",
});
