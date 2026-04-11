import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import SelectField from "@/components/SelectField";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function RomanNumeralCalculator() {
  const [mode, setMode] = useState<"toRoman" | "toDecimal">("toRoman");
  const [input, setInput] = useState("1994");

  // Roman numeral conversion functions
  const decimalToRoman = (num: number): string => {
    if (num <= 0 || num >= 4000) return "Invalid (1-3999)";

    const romanMap = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"],
    ] as const;

    let result = "";
    let remaining = num;

    for (const [value, roman] of romanMap) {
      while (remaining >= value) {
        result += roman;
        remaining -= value;
      }
    }

    return result;
  };

  const romanToDecimal = (roman: string): number => {
    const romanMap: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;
    const upper = roman.toUpperCase();

    for (let i = 0; i < upper.length; i++) {
      const current = romanMap[upper[i]];
      const next = romanMap[upper[i + 1]];

      if (!current) return -1;
      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }

    return total;
  };

  let result = "";
  let breakdown = "";

  if (mode === "toRoman") {
    const num = parseInt(input);
    if (!isNaN(num) && num >= 1 && num <= 3999) {
      result = decimalToRoman(num);
      const parts = [];
      let temp = num;
      if (temp >= 1000) {
        const thousands = Math.floor(temp / 1000);
        parts.push(`${thousands}000 = ${"M".repeat(thousands)}`);
        temp %= 1000;
      }
      if (temp >= 900) {
        parts.push(`900 = CM`);
        temp -= 900;
      } else if (temp >= 500) {
        const hundreds = Math.floor(temp / 100);
        parts.push(`${hundreds}00 = D${"C".repeat(hundreds - 5)}`);
        temp %= 500;
      }
      if (temp >= 90) {
        parts.push(`90 = XC`);
        temp -= 90;
      } else if (temp >= 50) {
        parts.push(`50 = L`);
        temp -= 50;
        if (temp >= 10) {
          const tens = Math.floor(temp / 10);
          parts.push(`${tens}0 = X${tens === 1 ? "" : "X"}`);
          temp %= 10;
        }
      }
      if (temp >= 10) {
        const tens = Math.floor(temp / 10);
        parts.push(`${tens}0 = ${"X".repeat(tens)}`);
        temp %= 10;
      }
      if (temp >= 9) {
        parts.push(`9 = IX`);
        temp -= 9;
      } else if (temp >= 5) {
        parts.push(`5 = V`);
        temp -= 5;
        if (temp > 0) {
          parts.push(`${temp} = ${"I".repeat(temp)}`);
        }
      } else if (temp > 0) {
        parts.push(`${temp} = ${"I".repeat(temp)}`);
      }
      breakdown = parts.join(" + ");
    } else {
      result = "Invalid input";
    }
  } else {
    const decimal = romanToDecimal(input);
    if (decimal > 0 && decimal < 4000) {
      result = decimal.toString();
      breakdown = `Roman numeral ${input.toUpperCase()} = ${decimal}`;
    } else {
      result = "Invalid Roman numeral";
    }
  }

  const referenceTable = (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Roman Numeral Reference</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        <div>I = 1</div>
        <div>II = 2</div>
        <div>III = 3</div>
        <div>IV = 4</div>
        <div>V = 5</div>
        <div>VI = 6</div>
        <div>X = 10</div>
        <div>L = 50</div>
        <div>C = 100</div>
        <div>D = 500</div>
        <div>M = 1000</div>
        <div>CM = 900</div>
      </div>
    </div>
  );

  const results = (
    <div className="grid grid-cols-1 gap-4">
      <ResultCard
        label={mode === "toRoman" ? "Roman Result" : "Decimal Result"}
        value={result}
        highlight
      />
      <ResultCard
        label="Breakdown"
        value={breakdown || "Enter a value"}
      />
      {referenceTable}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Roman numerals are an ancient numeral system used by the Romans and still seen in clocks, book chapters, movie release years, and formal documents. They use letters (I, V, X, L, C, D, M) to represent values. Unlike the modern decimal system, Roman numerals have no zero and are additive/subtractive, making arithmetic more complex. Understanding Roman numerals helps appreciate historical documents and deciphering formal numbering systems.
      </p>

      <p>
        <strong>The Seven Symbols:</strong> Roman numerals use only seven base symbols: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000). Combinations create all other numbers. I, X, C, and M can be repeated up to three times (III, XXX, CCC, MMM). V, L, and D cannot be repeated. Repetition adds values (XX = 20). Placing a smaller symbol before a larger symbol subtracts it (IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900). Only powers of 10 (I, X, C, M) can be placed before a larger symbol for subtraction.
      </p>

      <p>
        <strong>Subtractive Principle:</strong> A smaller numeral before a larger numeral subtracts from it. IV means 5 - 1 = 4. IX means 10 - 1 = 9. XL means 50 - 10 = 40. Importantly, only specific subtractions are valid: I can only precede V and X, X can only precede L and C, and C can only precede D and M. Violations like IC or VX are not standard. The subtractive notation was used for brevity (IV instead of IIII), though some clocks still show IIII instead of IV.
      </p>

      <p>
        <strong>Historical and Modern Uses:</strong> Roman numerals appeared on ancient monuments and coins. Today they're used for book chapter numbers, movie release years (MMXXVI = 2026), formal event numbering (Super Bowl LVIII), clock faces, and academic degrees. Medical prescriptions sometimes use Roman numerals. Knowing Roman numerals helps interpret historical dates, understand classical literature, and read formal documents. However, they're impractical for large numbers or complex calculations, which is why the Hindu-Arabic system (0-9) replaced them in most applications.
      </p>

      <p>
        <strong>Limitations:</strong> Roman numerals cannot efficiently represent zero, negative numbers, or fractions. There's no standard way to write numbers above 3999 without special notation (vinculums or apostrophes). Mathematical operations (addition, multiplication) are cumbersome with Roman numerals compared to decimal. This is why Roman numerals gave way to the decimal system in scientific, mathematical, and commercial applications. They remain culturally significant and are still taught in schools as part of classical education.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Roman Numeral Converter"
      description="Convert between decimal and Roman numerals"
      slug="roman-numeral-calculator"
      results={results}
      educational={educational}
    >
      <SelectField
        id="mode"
        label="Conversion Mode"
        value={mode}
        onChange={(v) => setMode(v as "toRoman" | "toDecimal")}
        options={[
          { label: "Decimal to Roman", value: "toRoman" },
          { label: "Roman to Decimal", value: "toDecimal" },
        ]}
      />
      <InputField
        id="input"
        label={mode === "toRoman" ? "Enter Decimal Number (1-3999)" : "Enter Roman Numeral"}
        value={input}
        onChange={setInput}
        placeholder={mode === "toRoman" ? "1994" : "MCMXCIV"}
      />
    </CalculatorLayout>
  );
}
