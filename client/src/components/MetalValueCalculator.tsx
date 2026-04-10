import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency } from "@/lib/utils";
import { useMetalPrices } from "@/lib/use-metal-prices";
import {
  type MetalDefinition,
  type WeightUnit,
  WEIGHT_UNITS,
  GRAMS_PER_TROY_OZ,
  GRAMS_PER_OZ,
  GRAMS_PER_LB,
  GRAMS_PER_KG,
  GRAMS_PER_METRIC_TON,
  computeMetalValue,
  toGrams,
} from "@/lib/metals-config";

interface Props {
  metal: MetalDefinition;
  educational: React.ReactNode;
}

export default function MetalValueCalculator({ metal, educational }: Props) {
  const [weight, setWeight] = useState(1);
  const [unit, setUnit] = useState<WeightUnit>("toz");
  const [purityIdx, setPurityIdx] = useState(0);

  const { data, isLoading, error } = useMetalPrices();

  const spotPrice = data?.prices?.[metal.apiKey] ?? 0;
  const purity = metal.purities[purityIdx] ?? metal.purities[0];
  const meltValue = computeMetalValue(
    weight,
    unit,
    spotPrice,
    metal.priceUnit,
    purity.factor
  );

  // Compute useful per-unit breakdowns
  const pricePerGram =
    metal.priceUnit === "troy_oz"
      ? spotPrice / GRAMS_PER_TROY_OZ
      : spotPrice / GRAMS_PER_METRIC_TON;
  const pricePerTroyOz =
    metal.priceUnit === "troy_oz"
      ? spotPrice
      : (spotPrice / GRAMS_PER_METRIC_TON) * GRAMS_PER_TROY_OZ;
  const pricePerOz = pricePerGram * GRAMS_PER_OZ;
  const pricePerLb = pricePerGram * GRAMS_PER_LB;
  const pricePerKg = pricePerGram * GRAMS_PER_KG;

  const weightInGrams = toGrams(weight, unit);

  const purityOptions = metal.purities.map((p, i) => ({
    value: String(i),
    label: p.label,
  }));

  const unitOptions = WEIGHT_UNITS.map((u) => ({
    value: u.value,
    label: u.label,
  }));

  const results = (
    <div className="space-y-4">
      {isLoading && (
        <p className="text-sm text-gray-500">Loading live prices...</p>
      )}
      {error && (
        <p className="text-sm text-amber-600">
          Using estimated prices. Live data temporarily unavailable.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label={`${metal.name} Melt Value`}
          value={formatCurrency(meltValue)}
          highlight={true}
        />
        <ResultCard
          label="Spot Price / Troy Oz"
          value={formatCurrency(pricePerTroyOz)}
        />
        <ResultCard
          label="Price / Gram"
          value={formatCurrency(pricePerGram)}
        />
        <ResultCard
          label="Price / Ounce"
          value={formatCurrency(pricePerOz)}
        />
        <ResultCard
          label="Price / Pound"
          value={formatCurrency(pricePerLb)}
        />
        <ResultCard
          label="Price / Kilogram"
          value={formatCurrency(pricePerKg)}
        />
      </div>

      {data?.sources && (
        <p className="text-xs text-gray-400 mt-2">
          Prices: {data.sources.includes("yahoo") || data.sources.includes("metals.dev") ? `Live via ${data.sources.join(" + ")}` : "Estimated (live data unavailable)"}
          {data.cachedAt && ` — last updated ${new Date(data.cachedAt).toLocaleString()}`}
        </p>
      )}

      {/* Price reference table */}
      <div className="mt-4 overflow-x-auto">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          {metal.name} Price Reference ({purity.label})
        </h3>
        <table className="w-full text-sm border border-gray-200 rounded">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Weight</th>
              <th className="px-3 py-2 text-right">Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "1 Gram", grams: 1 },
              { label: "5 Grams", grams: 5 },
              { label: "10 Grams", grams: 10 },
              { label: "1 Troy Ounce", grams: GRAMS_PER_TROY_OZ },
              { label: "1 Ounce", grams: GRAMS_PER_OZ },
              { label: "100 Grams", grams: 100 },
              { label: "1 Pound", grams: GRAMS_PER_LB },
              { label: "1 Kilogram", grams: GRAMS_PER_KG },
            ].map((row) => (
              <tr key={row.label} className="border-t border-gray-100">
                <td className="px-3 py-1.5">{row.label}</td>
                <td className="px-3 py-1.5 text-right font-medium">
                  {formatCurrency(row.grams * pricePerGram * purity.factor)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <CalculatorLayout
      title={`${metal.name} Value Calculator`}
      description={metal.description}
      slug={metal.slug}
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          label={`Weight of ${metal.name}`}
          value={weight}
          onChange={setWeight}
          min={0}
          step={0.01}
        />
        <SelectField
          label="Weight Unit"
          value={unit}
          onChange={(v) => setUnit(v as WeightUnit)}
          options={unitOptions}
        />
        <SelectField
          label="Purity / Grade"
          value={String(purityIdx)}
          onChange={(v) => setPurityIdx(Number(v))}
          options={purityOptions}
        />
        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
          <p>
            <strong>Weight:</strong> {weightInGrams.toFixed(2)} grams
            {unit !== "g" && ` (${weight} ${unit})`}
          </p>
          <p>
            <strong>Purity:</strong> {purity.label} ({(purity.factor * 100).toFixed(1)}% pure {metal.name.toLowerCase()})
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
