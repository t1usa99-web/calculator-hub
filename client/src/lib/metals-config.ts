/**
 * Metal definitions and unit conversion utilities for the metal value calculators.
 *
 * Prices from the API arrive as:
 *   - Precious metals: USD per troy ounce
 *   - Base metals:     USD per metric ton (1,000 kg)
 *
 * Users enter weight in grams, troy ounces, ounces, pounds, or kilograms.
 * We normalise everything to grams internally, then convert to the API's
 * native unit to compute value.
 */

export interface MetalDefinition {
  /** URL-safe slug, e.g. "gold-value-calculator" */
  slug: string;
  /** Human-readable name */
  name: string;
  /** Chemical symbol */
  symbol: string;
  /** API field key returned by /api/metals-prices */
  apiKey: string;
  /** Whether the API returns $/troy-oz (precious) or $/metric-ton (base) */
  priceUnit: "troy_oz" | "metric_ton";
  /** Lucide icon name */
  icon: string;
  /** Short SEO description for the calculator page */
  description: string;
  /** SEO keywords */
  keywords: string[];
  /** Purity options (karat for gold, fineness for others) */
  purities: { label: string; factor: number }[];
}

// Conversion factors — everything to/from grams
export const GRAMS_PER_TROY_OZ = 31.1035;
export const GRAMS_PER_OZ = 28.3495;
export const GRAMS_PER_LB = 453.592;
export const GRAMS_PER_KG = 1000;
export const GRAMS_PER_METRIC_TON = 1_000_000;

export type WeightUnit = "g" | "toz" | "oz" | "lb" | "kg";

export const WEIGHT_UNITS: { value: WeightUnit; label: string }[] = [
  { value: "g", label: "Grams (g)" },
  { value: "toz", label: "Troy Ounces (toz)" },
  { value: "oz", label: "Ounces (oz)" },
  { value: "lb", label: "Pounds (lb)" },
  { value: "kg", label: "Kilograms (kg)" },
];

/** Convert any weight unit to grams */
export function toGrams(value: number, unit: WeightUnit): number {
  switch (unit) {
    case "g":
      return value;
    case "toz":
      return value * GRAMS_PER_TROY_OZ;
    case "oz":
      return value * GRAMS_PER_OZ;
    case "lb":
      return value * GRAMS_PER_LB;
    case "kg":
      return value * GRAMS_PER_KG;
  }
}

/** Compute melt value: weight (in user's unit) × spot price × purity factor */
export function computeMetalValue(
  weight: number,
  unit: WeightUnit,
  spotPrice: number,
  priceUnit: "troy_oz" | "metric_ton",
  purityFactor: number
): number {
  const grams = toGrams(weight, unit);
  // Convert grams to the unit the spot price is denominated in
  const pricePerGram =
    priceUnit === "troy_oz"
      ? spotPrice / GRAMS_PER_TROY_OZ
      : spotPrice / GRAMS_PER_METRIC_TON;
  return grams * pricePerGram * purityFactor;
}

// ---------------------------------------------------------------------------
// Metal definitions
// ---------------------------------------------------------------------------

export const METALS: MetalDefinition[] = [
  {
    slug: "gold-value-calculator",
    name: "Gold",
    symbol: "Au",
    apiKey: "gold",
    priceUnit: "troy_oz",
    icon: "🥇",
    description:
      "Calculate the melt value of gold by weight and purity. Uses live spot prices updated throughout the day.",
    keywords: [
      "gold value calculator",
      "gold melt value",
      "gold price per gram",
      "gold scrap value",
      "gold karat calculator",
    ],
    purities: [
      { label: "24K (99.9%)", factor: 0.999 },
      { label: "22K (91.7%)", factor: 0.917 },
      { label: "18K (75.0%)", factor: 0.75 },
      { label: "14K (58.3%)", factor: 0.583 },
      { label: "10K (41.7%)", factor: 0.417 },
      { label: "9K (37.5%)", factor: 0.375 },
    ],
  },
  {
    slug: "silver-value-calculator",
    name: "Silver",
    symbol: "Ag",
    apiKey: "silver",
    priceUnit: "troy_oz",
    icon: "🥈",
    description:
      "Calculate the melt value of silver by weight and purity. Uses live spot prices updated throughout the day.",
    keywords: [
      "silver value calculator",
      "silver melt value",
      "silver price per gram",
      "sterling silver value",
      "silver scrap calculator",
    ],
    purities: [
      { label: "Fine (.999)", factor: 0.999 },
      { label: "Sterling (.925)", factor: 0.925 },
      { label: "Coin (.900)", factor: 0.9 },
      { label: "Britannia (.958)", factor: 0.958 },
      { label: ".800 Silver", factor: 0.8 },
    ],
  },
  {
    slug: "copper-value-calculator",
    name: "Copper",
    symbol: "Cu",
    apiKey: "copper",
    priceUnit: "metric_ton",
    icon: "🪙",
    description:
      "Calculate the scrap or melt value of copper by weight. Uses live commodity prices updated daily.",
    keywords: [
      "copper value calculator",
      "copper scrap value",
      "copper price per pound",
      "copper melt value",
      "copper weight calculator",
    ],
    purities: [
      { label: "Pure (99.9%)", factor: 0.999 },
      { label: "#1 Copper (97%)", factor: 0.97 },
      { label: "#2 Copper (95%)", factor: 0.95 },
      { label: "Insulated Wire (~35%)", factor: 0.35 },
    ],
  },
  {
    slug: "platinum-value-calculator",
    name: "Platinum",
    symbol: "Pt",
    apiKey: "platinum",
    priceUnit: "troy_oz",
    icon: "💎",
    description:
      "Calculate the melt value of platinum by weight and purity. Uses live spot prices updated throughout the day.",
    keywords: [
      "platinum value calculator",
      "platinum melt value",
      "platinum price per gram",
      "platinum scrap value",
      "platinum jewelry value",
    ],
    purities: [
      { label: "Pure (99.5%)", factor: 0.995 },
      { label: "950 Platinum", factor: 0.95 },
      { label: "900 Platinum", factor: 0.9 },
      { label: "850 Platinum", factor: 0.85 },
    ],
  },
  {
    slug: "palladium-value-calculator",
    name: "Palladium",
    symbol: "Pd",
    apiKey: "palladium",
    priceUnit: "troy_oz",
    icon: "✨",
    description:
      "Calculate the melt value of palladium by weight. Uses live spot prices updated throughout the day.",
    keywords: [
      "palladium value calculator",
      "palladium melt value",
      "palladium price per gram",
      "palladium catalytic converter value",
      "palladium scrap calculator",
    ],
    purities: [
      { label: "Pure (99.5%)", factor: 0.995 },
      { label: "950 Palladium", factor: 0.95 },
      { label: "500 Palladium", factor: 0.5 },
    ],
  },
  {
    slug: "nickel-value-calculator",
    name: "Nickel",
    symbol: "Ni",
    apiKey: "nickel",
    priceUnit: "metric_ton",
    icon: "🔩",
    description:
      "Calculate the scrap or commodity value of nickel by weight. Uses live LME commodity prices.",
    keywords: [
      "nickel value calculator",
      "nickel scrap value",
      "nickel price per pound",
      "nickel coin value",
      "nickel commodity price",
    ],
    purities: [
      { label: "Pure (99.9%)", factor: 0.999 },
      { label: "Class I (99.8%)", factor: 0.998 },
      { label: "Alloy (~65%)", factor: 0.65 },
    ],
  },
  {
    slug: "aluminum-value-calculator",
    name: "Aluminum",
    symbol: "Al",
    apiKey: "aluminum",
    priceUnit: "metric_ton",
    icon: "🧱",
    description:
      "Calculate the scrap or commodity value of aluminum by weight. Uses live LME commodity prices.",
    keywords: [
      "aluminum value calculator",
      "aluminum scrap value",
      "aluminum price per pound",
      "aluminum can value",
      "aluminum recycling calculator",
    ],
    purities: [
      { label: "Pure (99.7%)", factor: 0.997 },
      { label: "Cast Aluminum (~90%)", factor: 0.9 },
      { label: "Aluminum Cans (~97%)", factor: 0.97 },
      { label: "Mixed Scrap (~80%)", factor: 0.8 },
    ],
  },
  {
    slug: "zinc-value-calculator",
    name: "Zinc",
    symbol: "Zn",
    apiKey: "zinc",
    priceUnit: "metric_ton",
    icon: "⚙️",
    description:
      "Calculate the commodity value of zinc by weight. Uses live LME commodity prices.",
    keywords: [
      "zinc value calculator",
      "zinc scrap value",
      "zinc price per pound",
      "zinc commodity price",
      "zinc weight calculator",
    ],
    purities: [
      { label: "Pure (99.9%)", factor: 0.999 },
      { label: "SHG Zinc (99.99%)", factor: 0.9999 },
      { label: "Alloy (~90%)", factor: 0.9 },
    ],
  },
  {
    slug: "lead-value-calculator",
    name: "Lead",
    symbol: "Pb",
    apiKey: "lead",
    priceUnit: "metric_ton",
    icon: "🔋",
    description:
      "Calculate the commodity value of lead by weight. Uses live LME commodity prices.",
    keywords: [
      "lead value calculator",
      "lead scrap value",
      "lead price per pound",
      "lead commodity price",
      "lead battery scrap value",
    ],
    purities: [
      { label: "Pure (99.9%)", factor: 0.999 },
      { label: "Battery Lead (~95%)", factor: 0.95 },
      { label: "Mixed Scrap (~85%)", factor: 0.85 },
    ],
  },
];

/** Look up a metal definition by its slug */
export function getMetalBySlug(slug: string): MetalDefinition | undefined {
  return METALS.find((m) => m.slug === slug);
}

/** Look up a metal definition by its API key */
export function getMetalByApiKey(key: string): MetalDefinition | undefined {
  return METALS.find((m) => m.apiKey === key);
}
