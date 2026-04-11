import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function OzToGramsCalculator() {
  const [ounces, setOunces] = useState(28);
  const grams = ounces * 28.3495;

  // Reference table data for chart
  const refData = [1, 2, 4, 8, 16, 28, 56, 100].map((v) => ({
    oz: v,
    grams: parseFloat((v * 28.3495).toFixed(1)),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Ounces" value={formatNumber(ounces, 1)} />
      <ResultCard label="Grams" value={formatNumber(grams, 1)} highlight />
      <ResultCard label="Formula" value="ounces × 28.3495 = grams" />
      <ResultCard
        label="Reference"
        value={`1 oz = 28.35 g, 28 oz = 794 g`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Ounces to Grams Reference
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={refData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="oz" label={{ value: "Ounces", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Grams", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Line
            type="monotone"
            dataKey="grams"
            stroke="#14b8a6"
            dot={{ fill: "#14b8a6", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The ounce-to-gram conversion is essential for cooking, baking, and nutrition tracking. One ounce equals 28.3495 grams, a standardized conversion factor. This conversion is particularly important when using recipes from different regions or countries, as US recipes often specify ingredients in ounces while international recipes use grams. Understanding oz-to-grams conversion ensures accurate baking, proper nutrition tracking, and successful meal preparation across different measurement systems.
      </p>

      <p>
        <strong>Cooking and Baking Precision:</strong> Accurate ingredient measurements are crucial in baking, where precise ratios affect the final product. US recipes list ingredients in ounces or cups, while most international recipes use grams. A recipe might call for 8 ounces of flour (227 grams) or 2 ounces of yeast (56 grams). Baking by weight is more accurate than measuring by volume, so converting ounces to grams improves recipe results. A kitchen scale that measures in both ounces and grams makes conversion easier, but understanding the conversion helps when scaling recipes up or down.
      </p>

      <p>
        <strong>Nutrition and Dietary Tracking:</strong> Nutrition labels in the US list serving sizes in ounces (often abbreviated as oz), while metric countries use grams. A nutrition label might specify "serving size: 2 oz (56 g)." To accurately track calories and macronutrients, you must understand the weight in your preferred unit. A 1-ounce serving of almonds (28 grams) contains about 160 calories. A 3-ounce portion of chicken (85 grams) has roughly 25 grams of protein. Converting between units helps with consistent dietary tracking and comparing foods across different labels.
      </p>

      <p>
        <strong>Food Shopping and Packaging:</strong> Packaged foods often display weight in both ounces and grams, especially products sold internationally. Bulk items like coffee, tea, or spices might be sold by ounce in the US but by gram internationally. Understanding the conversion helps you understand product sizes and compare unit prices. A 1-pound (16-ounce) package of coffee equals 454 grams. A 2-pound bag of flour is 907 grams. These conversions help with shopping decisions and understanding portion sizes across different markets.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ounces to Grams Converter"
      description="Convert ounces to grams with conversion formula and reference table"
      slug="oz-to-grams"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="ounces"
        label="Ounces"
        value={ounces}
        onChange={setOunces}
        step={0.1}
        min={0}
      />
    </CalculatorLayout>
  );
}
