import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function HexCalculator() {
  const [hexInput, setHexInput] = useState("FF5733");

  // Validate hex
  const isValidHex = /^[0-9A-Fa-f]{1,8}$/.test(hexInput);

  let decimal = 0;
  let binary = "0";
  let octal = "0";
  let isValidColor = false;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (isValidHex) {
    decimal = parseInt(hexInput, 16);
    binary = decimal.toString(2);
    octal = decimal.toString(8);

    // Check if it's a valid 6-digit color code
    if (hexInput.length === 6) {
      isValidColor = true;
      red = parseInt(hexInput.substring(0, 2), 16);
      green = parseInt(hexInput.substring(2, 4), 16);
      blue = parseInt(hexInput.substring(4, 6), 16);
    }
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isValidHex ? (
        <>
          <ResultCard
            label="Hexadecimal"
            value={hexInput.toUpperCase()}
            highlight={true}
          />
          <ResultCard
            label="Decimal"
            value={formatNumber(decimal, 0)}
            highlight={true}
          />
          <ResultCard
            label="Binary"
            value={binary}
          />
          <ResultCard
            label="Octal"
            value={octal}
          />
          {isValidColor && (
            <>
              <ResultCard
                label="Red (R)"
                value={red.toString()}
              />
              <ResultCard
                label="Green (G)"
                value={green.toString()}
              />
              <ResultCard
                label="Blue (B)"
                value={blue.toString()}
              />
              <div className="col-span-1 md:col-span-2 p-4 border border-gray-300 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Color Preview</p>
                <div
                  className="w-full h-16 rounded-lg border-2 border-gray-300"
                  style={{ backgroundColor: `#${hexInput}` }}
                />
                <p className="text-xs text-gray-600 mt-2">RGB({red}, {green}, {blue})</p>
              </div>
            </>
          )}
        </>
      ) : (
        <ResultCard
          label="Error"
          value="Please enter a valid hexadecimal number (0-9, A-F)"
          highlight={true}
        />
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Understanding Hexadecimal Numbers</h3>
      <p>
        <strong>Hexadecimal</strong> (hex, base 16) uses digits 0-9 and letters A-F (A=10, B=11, C=12, D=13, E=14, F=15). It{'\''}s the language of web colors, memory addresses, and digital design. A 6-digit hex code like #FF5733 represents a color: the first two digits (FF) are red intensity, the next two (57) are green, and the last two (33) are blue. Each pair ranges from 00 (no intensity) to FF (255 in decimal, maximum intensity).
      </p>
      <p>
        Converting hex to decimal: multiply each digit by 16 raised to its position power. For example, 1A = 1×16¹ + 10×16⁰ = 16 + 10 = 26. The reverse: divide repeatedly by 16 and collect remainders. Hex is preferred in computing because it{'\''}s compact (fewer digits than binary) yet easy to convert to/from binary (each hex digit = 4 binary digits). Programmers use hex for color codes (#FFFFFF = white), memory addresses (0xDEADBEEF), and bitwise operations.
      </p>
      <p>
        In web design and graphic applications, understanding hex colors is essential. #000000 is black, #FFFFFF is white, #FF0000 is pure red. CSS, HTML, and design software all use hex color codes. Understanding the relationship between hex and RGB (Red, Green, Blue) helps optimize colors and create consistent palettes across digital platforms. This knowledge bridges programming, design, and digital literacy.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Hexadecimal Calculator"
      description="Convert hex to decimal, binary, octal, and preview colors (RGB breakdown)"
      slug="hex-calculator"
      results={results}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hexadecimal Number
          </label>
          <input
            type="text"
            value={hexInput}
            onChange={(e) => setHexInput(e.target.value.toUpperCase())}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="FF5733"
            maxLength={8}
          />
          <p className="text-xs text-gray-600 mt-2">
            Enter hex digits (0-9, A-F). For color codes, use 6 digits like FF5733.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: HexCalculator,
  slug: "hex-calculator",
  title: "Hexadecimal Calculator",
  shortTitle: "Hex",
  description: "Convert hexadecimal to decimal, binary, octal, and view color codes",
  category: "math",
  icon: "🎨",
  keywords: ["hexadecimal", "hex", "color", "RGB", "web color", "conversion", "web design"],
  popular: false,
  faqs: [
    {
      question: "What is hexadecimal?",
      answer: "Hexadecimal (base 16) uses digits 0-9 and letters A-F. It{'\''}s widely used in computing for colors, memory, and data representation."
    },
    {
      question: "How do hex color codes work?",
      answer: "A 6-digit hex code like #FF5733 specifies RGB: first two digits are red intensity (00-FF), next two green, last two blue. #FF0000 is pure red, #00FF00 is pure green."
    },
    {
      question: "Why use hexadecimal instead of decimal?",
      answer: "Hex is more compact than binary yet converts easily to/from binary (each hex digit = 4 binary digits). It{'\''}s practical for programmers and designers."
    },
    {
      question: "How do I convert hex to decimal?",
      answer: "Multiply each digit by 16 raised to its position. Example: 1A = 1×16 + 10×1 = 26. Use our calculator for larger numbers."
    },
    {
      question: "What is RGB and how does it relate to hex?",
      answer: "RGB specifies color using Red, Green, Blue values (0-255). Hex encodes RGB: pairs of hex digits map to RGB values. #FF0000 is RGB(255,0,0) = pure red."
    }
  ],
  dateModified: "2026-04-10",
});
