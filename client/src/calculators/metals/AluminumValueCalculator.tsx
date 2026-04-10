import MetalValueCalculator from "@/components/MetalValueCalculator";
import { registerCalculator } from "@/lib/calculator-registry";
import { METALS } from "@/lib/metals-config";
import { ALUMINUM_VALUE_FAQS } from "@/lib/faq-metals";

const metal = METALS.find((m) => m.apiKey === "aluminum")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Aluminum: The Most Recycled Metal</h3>
    <p>
      Aluminum is the world's most recycled metal and a crucial commodity for modern manufacturing. Unlike precious metals like gold or silver, aluminum is valued primarily for its industrial utility rather than scarcity. Its lightweight strength, corrosion resistance, and superior recyclability make it essential for aerospace, automotive, construction, and packaging industries. Aluminum recycling is remarkably efficient—recycling requires only 3–7% of the energy needed to extract aluminum from bauxite ore, translating to 90%+ lower carbon emissions and 40–60% cost savings. Because of these economic advantages, aluminum recycling rates are among the highest of any material, with some countries achieving 75%+ recycling rates for beverage cans. Understanding aluminum scrap grades, commodity pricing, and the dramatic energy savings from recycling helps explain why the aluminum scrap market is globally significant despite the metal's lower per-pound value compared to copper or precious metals.
    </p>
    <p>
      <strong>Energy Efficiency of Aluminum Recycling:</strong> The energy advantage of recycling aluminum is dramatic and drives the global scrap market. Primary aluminum production involves two energy-intensive steps: calcination (heating bauxite ore to 1,200 degrees Celsius to produce alumina) and electrolysis (passing electric current through molten alumina in the Hall-Héroult process at 950 degrees Celsius). These processes consume 15–17 kilowatt-hours of electricity per kilogram of aluminum produced, making primary aluminum one of the most energy-intensive industrial metals. In contrast, recycling aluminum requires only melting scrap at 650 degrees Celsius and casting, consuming just 0.5–1 kilowatt-hour per kilogram. This translates to a 93–97% energy savings—a difference that is both economically significant and environmentally substantial. Energy costs represent 30–40% of primary aluminum production; recycling is 40–60% cheaper, making scrap aluminum profitable to collect and process even at low per-pound prices ($0.30–$0.50/lb). From a carbon perspective, primary aluminum emits 12–14 kg of CO2 per kilogram of metal produced, while recycled aluminum emits only 0.5–1 kg CO2 per kg—a 90% reduction in carbon footprint.
    </p>
    <p>
      <strong>Aluminum Scrap Grades and Sorting:</strong> Aluminum scrap is sorted into distinct grades based on purity and form, with each grade commanding different prices. <strong>Pure aluminum (99.7%)</strong> includes electrical conductors and aerospace-grade material; the highest value scrap at $0.45–$0.55/lb. <strong>Sheet aluminum (97% purity)</strong> encompasses beverage cans, aluminum foil, roofing, and siding—clean, soft scrap worth $0.40–$0.45/lb because it recycles easily with minimal contamination removal. <strong>Cast aluminum (90% purity)</strong> comes from engine blocks, cylinder heads, and transmission cases; it is harder and more brittle than sheet, requiring more processing, so it trades at $0.32–$0.38/lb due to contaminant removal costs. <strong>Aluminum cans (97% purity)</strong> are a subset of sheet aluminum specifically tracked by recyclers; they are particularly valuable because cans are pure and uniform, making them easy to batch and recycle. <strong>Mixed scrap (~80% purity)</strong> includes appliances with copper, brass, or steel contamination; downgraded to $0.25–$0.32/lb due to processing complexity. The grade differences are substantial—pure aluminum scrap is worth 2× more per pound than mixed scrap, incentivizing careful sorting.
    </p>
    <p>
      <strong>The Can Recycling Economy:</strong> Aluminum can recycling is the most visible and accessible aluminum scrap activity. In the United States, aluminum cans have a market price of approximately $0.70–$1.40 per can (26–32 cans = 1 pound at $0.35–$0.45/lb spot). Hand-collecting cans is profitable for large-scale operations but marginally economical for hobbyists; collecting 100 cans might yield $1.40–$1.80 in gross revenue, but the labor (2–3 hours) is worth more at typical wage rates. In bottle-deposit states (California, New York, Oregon, etc.), cans carry a $0.05–$0.10 deposit refund <em>plus</em> scrap value, improving economics for collectors. Commercial recycling operations achieve profitability through automated sorting, high-volume throughput, and economies of scale; they process 100+ tons of mixed aluminum scrap daily, achieving per-pound costs that make recycling sustainable without subsidies. For individuals, can recycling is an environmentally responsible activity that yields modest income—best viewed as pocket change rather than a profit center.
    </p>
    <p>
      <strong>Aluminum in Electronics and Modern Products:</strong> Aluminum is ubiquitous in consumer electronics and appliances. A smartphone contains 5–10 grams of aluminum (chassis, heat sinks), worth ~$0.02–$0.04 in scrap value—trivial compared to the $1–$2 in gold, copper, and rare earth elements. A laptop contains 200–300 grams of aluminum (chassis, heatsinks), worth $0.07–$0.13 in aluminum scrap alone; again, the device's copper, gold, and integrated circuits are far more valuable. Recycling old electronics through certified e-waste processors recovers all materials; they prioritize gold and rare earths because of higher value per ounce, but aluminum is harvested as a by-product. Collecting electronics solely for aluminum scrap is uneconomical—the real value in e-waste recycling comes from recovering precious metals, not aluminum. However, aluminum's abundance in discarded electronics means that as e-waste recycling scales, aluminum streams improve, supporting secondary aluminum supply and reducing demand for primary ore extraction.
    </p>
  </div>
);

export default function AluminumValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}

registerCalculator({
  ...metal,
  title: "Aluminum Value Calculator",
  shortTitle: "Aluminum Value",
  category: "metals",
  popular: false,
  faqs: ALUMINUM_VALUE_FAQS,
  dateModified: "2026-04-10",
  component: AluminumValueCalculator,
});
