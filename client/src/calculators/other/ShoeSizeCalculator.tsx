import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function ShoeSizeCalculator() {
  const [size, setSize] = useState(10);
  const [system, setSystem] = useState("us-mens");
  const [gender, setGender] = useState("mens");

  // Shoe size conversion tables
  // Approximate conversions based on standard measurements

  const convertSize = (inputSize: number, fromSystem: string, toSystem: string): number => {
    // First convert to EU as a standard reference point
    let eu = 0;

    if (fromSystem === "us-mens") {
      eu = inputSize + 31.5;
    } else if (fromSystem === "us-womens") {
      eu = inputSize + 32.5;
    } else if (fromSystem === "uk") {
      eu = inputSize + 31.5;
    } else if (fromSystem === "eu") {
      eu = inputSize;
    }

    // Convert from EU to target system
    if (toSystem === "us-mens") {
      return eu - 31.5;
    } else if (toSystem === "us-womens") {
      return eu - 32.5;
    } else if (toSystem === "uk") {
      return eu - 31.5;
    } else if (toSystem === "eu") {
      return eu;
    }

    return inputSize;
  };

  // Convert to all systems
  const usMensSize = convertSize(size, system, "us-mens");
  const usWomensSize = convertSize(size, system, "us-womens");
  const ukSize = convertSize(size, system, "uk");
  const euSize = convertSize(size, system, "eu");

  const getSystemLabel = (): string => {
    if (system === "us-mens") return "US Men";
    if (system === "us-womens") return "US Women";
    if (system === "uk") return "UK";
    return "EU";
  };

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="US Men Size"
        value={formatNumber(usMensSize, 1)}
        highlight={system === "us-mens"}
      />
      <ResultCard
        label="US Women Size"
        value={formatNumber(usWomensSize, 1)}
        highlight={system === "us-womens"}
      />
      <ResultCard
        label="UK Size"
        value={formatNumber(ukSize, 1)}
        highlight={system === "uk"}
      />
      <ResultCard
        label="EU Size"
        value={formatNumber(euSize, 1)}
        highlight={system === "eu"}
      />
      <ResultCard
        label="Selected System"
        value={getSystemLabel()}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Shoe sizes vary significantly by country and gender. The United States uses different scales for men's and women's shoes, while the UK uses its own system, and Europe uses the EU scale. Converting between systems is common when buying shoes internationally or wearing different brands. Understanding conversions helps when shopping online from foreign retailers, traveling, or purchasing shoes for people in different countries. Always verify fit because conversions are approximate and individual brands vary.
      </p>

      <p>
        <strong>US Sizing Systems:</strong> US Men's shoes start at size 1 (very small children's) and go up to size 15+. US Women's shoes typically range from size 5 to 12, but the same physical shoe size as a men's size 7 is labeled as a women's size 8.5 or 9 (varies by brand). This 1.5 to 2-size difference between men's and women's systems creates confusion. Children's sizes go from 0 to 13, then transition to men's or women's sizes. When converting between men's and women's, add approximately 1.5-2 sizes to a men's size to get the women's equivalent.
      </p>

      <p>
        <strong>UK and EU Sizing:</strong> The UK system is similar to the US Men's system but with slight differences. The EU system is universal and consistent across Europe for both men and women. EU sizes run 30-50+, with larger numbers indicating larger shoes. EU sizes are based on centimeters (EU size 40 is roughly 25.9 cm long). EU sizing is more uniform and predictable than US sizing, making international shopping easier. Most luxury European brands use EU sizing, which is why conversions matter when buying designer shoes.
      </p>

      <p>
        <strong>Measuring Your Shoe Size Accurately:</strong> Measure your foot length in centimeters or inches from heel to longest toe. Measure both feet (they may be slightly different). Measure while wearing the socks or hosiery you'll wear with the shoes. Measure in the afternoon when feet are slightly swollen from daily activity. Use a ruler or measuring tape on a flat surface. Compare your measurement to the brand's size chart before purchasing. Different brands have different lasts (mold shapes), so sizes may vary between brands. A size 10 in one brand might be slightly larger or smaller in another. When buying online, check the return policy in case the size doesn't fit.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Shoe Size Calculator"
      description="Convert between US, UK, and EU shoe sizing systems"
      slug="shoe-size-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="size"
          label="Shoe Size"
          value={size}
          onChange={setSize}
          step={0.5}
          min={1}
          max={20}
        />

        <SelectField
          id="system"
          label="Sizing System"
          value={system}
          onChange={setSystem}
          options={[
            { value: "us-mens", label: "US Men's" },
            { value: "us-womens", label: "US Women's" },
            { value: "uk", label: "UK" },
            { value: "eu", label: "EU (European)" },
          ]}
        />

        <SelectField
          id="gender"
          label="Gender (for reference)"
          value={gender}
          onChange={setGender}
          options={[
            { value: "mens", label: "Men's" },
            { value: "womens", label: "Women's" },
            { value: "unisex", label: "Unisex" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}
