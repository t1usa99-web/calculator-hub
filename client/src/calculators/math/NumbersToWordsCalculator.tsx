import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { registerCalculator } from "@/lib/calculator-registry";

const ONES = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const TEENS = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function convertBelowThousand(n: number): string {
  if (n === 0) return "";

  let result = "";

  // Hundreds place
  const hundreds = Math.floor(n / 100);
  if (hundreds > 0) {
    result += ONES[hundreds] + " hundred";
  }

  // Tens and ones place
  const remainder = n % 100;
  if (remainder > 0) {
    if (result) result += " ";

    if (remainder < 10) {
      result += ONES[remainder];
    } else if (remainder < 20) {
      result += TEENS[remainder - 10];
    } else {
      const tens = Math.floor(remainder / 10);
      const ones = remainder % 10;
      result += TENS[tens];
      if (ones > 0) {
        result += " " + ONES[ones];
      }
    }
  }

  return result;
}

function numberToWords(n: number): string {
  if (n === 0) return "zero";

  const isNegative = n < 0;
  n = Math.abs(n);

  // Handle decimals
  let integerPart = Math.floor(n);
  const decimalPart = Math.round((n - integerPart) * 100000000);

  let result = "";

  // Break into groups of three digits
  const scales = [
    { value: 1000000000000, name: "trillion" },
    { value: 1000000000, name: "billion" },
    { value: 1000000, name: "million" },
    { value: 1000, name: "thousand" },
  ];

  for (const scale of scales) {
    if (integerPart >= scale.value) {
      const count = Math.floor(integerPart / scale.value);
      integerPart %= scale.value;

      if (result) result += " ";
      result += convertBelowThousand(count) + " " + scale.name;
    }
  }

  if (integerPart > 0) {
    if (result) result += " ";
    result += convertBelowThousand(integerPart);
  }

  if (decimalPart > 0) {
    result += " point " + decimalPart.toString().split("").map(d => ONES[parseInt(d)]).join(" ");
  }

  if (isNegative) {
    result = "negative " + result;
  }

  return result.trim();
}

export default function NumbersToWordsCalculator() {
  const [number, setNumber] = useState(1234);

  const words = numberToWords(number);

  const results = (
    <div className="grid grid-cols-1 gap-4">
      <ResultCard
        label="In Words"
        value={words}
        highlight={true}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Numbers to Words Calculator"
      description="Convert numbers to English words"
      slug="numbers-to-words-calculator"
      results={results}
    >
      <div className="space-y-4">
        <InputField
          id="number"
          label="Enter a Number"
          value={number}
          onChange={setNumber}
          min={-999999999999}
          max={999999999999}
          step={1}
          hint="Integers and decimals supported"
        />

        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
          This calculator converts numbers up to 999 trillion and supports
          decimal numbers. Negative numbers are prefixed with "negative".
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: NumbersToWordsCalculator,
  slug: "numbers-to-words-calculator",
  title: "Numbers to Words Calculator",
  shortTitle: "Numbers to Words",
  description: "Convert numbers into their English word equivalents",
  category: "math",
  icon: "🔤",
  keywords: [
    "numbers to words",
    "number conversion",
    "spell numbers",
    "english words",
    "numerals",
  ],
  dateModified: "2026-04-09",
});
