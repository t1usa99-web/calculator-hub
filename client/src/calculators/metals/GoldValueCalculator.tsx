import MetalValueCalculator from "@/components/MetalValueCalculator";
import { registerCalculator } from "@/lib/calculator-registry";
import { METALS } from "@/lib/metals-config";
import { GOLD_VALUE_FAQS } from "@/lib/faq-metals";

const metal = METALS.find((m) => m.apiKey === "gold")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Understanding Gold Value and Pricing</h3>
    <p>
      Gold has been valued as a store of wealth for thousands of years, and today it remains one of the most actively traded precious metals in the world. The value of gold is determined by its purity (measured in karats), the current spot price set by global commodity exchanges, and market conditions. Understanding how these factors work together will help you make informed decisions whether you are buying gold jewelry, selling inherited pieces, or exploring gold as an investment.
    </p>
    <p>
      <strong>The Karat System:</strong> Gold purity is measured in karats, where 24K represents pure gold (99.9%) and lower karats indicate alloys mixed with other metals. <strong>24K gold (99.9%)</strong> is pure gold but is soft and typically used only in bullion or specialized jewelry. <strong>22K gold (91.7%)</strong> is slightly softer and contains alloy metals for strength; it is popular in Indian and Middle Eastern jewelry. <strong>18K gold (75%)</strong> is the standard for fine jewelry in Western markets because it balances purity with durability—hard enough to resist scratching while maintaining significant gold content. <strong>14K gold (58.3%)</strong> is the most common in engagement rings and everyday jewelry because it is durable and affordable. <strong>10K gold (41.7%)</strong> is the minimum purity legally sold as gold in the US and is used for durable, low-cost jewelry. When you multiply the weight of a gold item by its karat factor (purity), you determine how much pure gold it actually contains.
    </p>
    <p>
      <strong>Calculating Melt Value:</strong> The melt value of gold is calculated using a simple formula: Weight (in grams) × Spot Price (per gram) × Purity Factor. For example, if you have a 10-gram 18K gold ring and the spot price is $65 per gram, the calculation is: 10g × $65 × 0.75 (18K factor) = $487.50 melt value. Note that the actual selling price you receive will be 5–15% lower due to dealer markups and refining fees, which cover processing and profit margins. Spot price itself fluctuates based on commodity market conditions and updates multiple times daily on exchanges like COMEX (Commodity Exchange Inc.) in New York.
    </p>
    <p>
      <strong>Market Factors Affecting Gold Prices:</strong> Gold prices are influenced by several interconnected global forces. During economic uncertainty—recessions, stock market crashes, or geopolitical crises—investors flee to gold as a safe haven asset, driving prices up. Interest rates inversely affect gold; when central banks raise rates, holding non-yielding gold becomes less attractive, so prices tend to fall. Currency strength matters because gold is priced globally in US dollars; a weak dollar makes gold cheaper for foreign buyers, increasing demand and prices. Inflation is a major factor because gold historically serves as an inflation hedge; when real interest rates turn negative, investors buy gold to preserve purchasing power. Central bank policies—large purchases or sales of gold reserves—move markets significantly. Finally, mining supply and exploration activity set the long-term floor for prices; limited new discoveries support higher prices, while major mine discoveries or production increases can suppress prices.
    </p>
    <p>
      <strong>Buying and Selling Gold Jewelry:</strong> When selling gold jewelry, research the current spot price before approaching dealers; use an online calculator (like the one above) to estimate melt value, and plan to receive 85–95% of that value depending on purity and dealer margins. To maximize sale price, get your jewelry appraised by a certified gemologist to confirm karat stamps (14K, 18K, etc.), shop around among at least three local coin dealers or online refiners, and avoid pawn shops or chain buyers who typically pay 30–40% below melt. If buying gold, avoid inflated markups from jewelry stores and instead consider certified gold coins or bullion if you want pure gold at predictable premiums. For jewelry purchases, recognize that designer names, brand value, and gemstone settings add cost beyond the metal itself; these premiums can be 200–300% of melt value for luxury brands.
    </p>
  </div>
);

export default function GoldValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}

registerCalculator({
  ...metal,
  title: "Gold Value Calculator",
  shortTitle: "Gold Value",
  category: "metals",
  popular: true,
  faqs: GOLD_VALUE_FAQS,
  dateModified: "2026-04-10",
  component: GoldValueCalculator,
});
