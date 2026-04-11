import MetalValueCalculator from "@/components/MetalValueCalculator";
import { METALS } from "@/lib/metals-config";

const metal = METALS.find((m) => m.apiKey === "platinum")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Platinum: The Rarest Precious Metal</h3>
    <p>
      Platinum is a remarkable precious metal distinguished by its rarity, density, and durability. While gold often dominates conversations about precious metals, platinum is actually rarer—global annual production of platinum is roughly 150–170 tonnes, compared to 3,000+ tonnes of gold per year. This scarcity, combined with platinum's superior physical properties, makes it one of the most valuable and sought-after metals in the world. Platinum is more than 1.5 times denser than gold and significantly harder, making it ideal for fine jewelry that must withstand decades of wear without degradation. Beyond jewelry, platinum is indispensable to the automotive, electronics, and petrochemical industries, where its catalytic properties and heat resistance are irreplaceable. For anyone considering selling platinum jewelry or investing in platinum bullion, understanding how rarity and industrial demand support platinum prices is essential.
    </p>
    <p>
      <strong>Platinum Rarity and Supply Constraints:</strong> Platinum's rarity is a fundamental driver of its value. The metal is geographically concentrated—80% of global platinum production comes from South Africa and Russia, making supply vulnerable to geopolitical disruptions, labor strikes, or mining accidents. Mining platinum is significantly more difficult than gold because platinum often occurs as a by-product of nickel and palladium mining, requiring extensive and expensive refining to separate. Only specialized refineries can process platinum ore, further limiting supply flexibility. In contrast, gold can be extracted from rock with relatively simple gravity and cyanide techniques, making new gold production easier to scale. This supply inelasticity—the inability to rapidly increase platinum production in response to price spikes—ensures that platinum prices remain elevated and volatile, particularly during geopolitical tensions or supply shocks.
    </p>
    <p>
      <strong>Platinum Hallmarks and Purity Standards:</strong> Platinum jewelry is marked with purity hallmarks indicating the percentage of pure platinum in the alloy. <strong>950 Platinum (95%)</strong> is the international standard for fine platinum jewelry; the remaining 5% is typically iridium or other platinum-group metals that add strength without compromising the white luster. <strong>900 Platinum (90%)</strong> contains slightly more alloy and is found in older European jewelry or lower-tier contemporary pieces. <strong>850 Platinum (85%)</strong> is rare but appears in some vintage items. <strong>Plain "Pt" or "Plat"</strong> markings are sometimes used but should be verified with a professional assay because the exact purity isn't specified. When calculating melt value, multiply weight by the purity factor—a 10-gram 950 Pt ring contains 9.5 grams of pure platinum. Always verify hallmarks before selling; unmarked platinum should be assayed professionally ($20–$50) to confirm authenticity and purity.
    </p>
    <p>
      <strong>Platinum in Catalytic Converters:</strong> Approximately 40% of platinum demand comes from catalytic converters in gasoline vehicles. A catalytic converter's job is to convert toxic exhaust gases (nitrogen oxides, carbon monoxide, unburned hydrocarbons) into harmless compounds (nitrogen, carbon dioxide, water) without depleting itself. Platinum atoms trigger this chemical transformation and remain active even at the extreme temperatures of engine exhaust (800–900 degrees Celsius), where most other materials would degrade or corrode. A single catalytic converter contains only 1–3 grams of platinum, but that small amount lasts 150,000+ miles without degradation, justifying the cost. This automotive demand creates a floor for platinum prices and links them to global vehicle production and emissions regulations, which are becoming stricter worldwide.
    </p>
    <p>
      <strong>Selling Platinum Jewelry for Maximum Value:</strong> To achieve the best price when selling platinum jewelry, begin by confirming purity through hallmarks (950 Pt, 900 Pt, etc.) or professional assay if unmarked. Use an online calculator to estimate melt value—weight in grams × (spot price ÷ 31.1035 grams per troy ounce) × purity factor. Platinum commands higher dealer spreads than gold due to lower market volume, so compare quotes from at least 3 precious metals refiners and avoid retail jewelry stores, which typically pay 30–40% below melt value. Online refiners (APMEX, Kitco, JM Bullion) and specialized platinum dealers often offer better pricing than local jewelers because they operate high-volume operations and have direct commodity market access. Bundle multiple platinum items together to negotiate better pricing—dealers reward larger quantities with reduced per-gram discounts. Finally, time your sale strategically; platinum prices swing 20–30% annually, so monitoring a 4–8 week price trend and selling during upswings maximizes proceeds.
    </p>
  </div>
);

export default function PlatinumValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}
