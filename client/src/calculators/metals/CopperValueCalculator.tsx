import MetalValueCalculator from "@/components/MetalValueCalculator";
import { METALS } from "@/lib/metals-config";

const metal = METALS.find((m) => m.apiKey === "copper")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Copper Scrap Grading and Commodity Pricing</h3>
    <p>
      Copper is one of the most recycled metals on Earth, with a rich history of scrap trading and reuse. Unlike precious metals like gold, copper's value is driven primarily by industrial demand—wiring in construction, electrical systems, plumbing, and increasingly, renewable energy infrastructure like solar panels and EV charging networks. Copper prices trade continuously on the London Metal Exchange (LME) as a commodity contract, meaning the price fluctuates based on real-time global supply and demand. Understanding copper scrap grades and how LME pricing works is essential for anyone collecting and selling copper scrap, whether you are a hobbyist collector or a professional recycler.
    </p>
    <p>
      <strong>Copper Scrap Grades and Pricing:</strong> Copper scrap is sorted into distinct grades based on purity and form, and each grade commands a different price at the scrap yard. <strong>#1 Copper (97% pure)</strong> is the highest grade—bare, bright, copper wire or bars with minimal oxidation and contamination. #1 typically commands $0.40–$0.50 per pound because it requires minimal processing. <strong>#2 Copper (95% pure)</strong> includes copper wire with slight oxidation, oxidized bars, or mixed wire that is clean but has surface discoloration. #2 prices run $0.35–$0.45 per pound. <strong>Insulated wire (~35% copper content, ~65% plastic and air)</strong> is the lowest grade and is worth $0.12–$0.18 per pound because refiners must strip, incinerate, or chemically remove the insulation before recovering copper. <strong>Pure cathode copper (99.9%)</strong> commands premium pricing ($0.50+/lb) but is rarely available in scrap form. Dealers determine grade visually (color, oxidation, form), sometimes with magnet tests (pure copper is non-magnetic, so any magnetic response indicates contamination), and occasionally with XRF chemical assays for large batches. The grade difference between #1 and insulated wire is dramatic—a pound of #1 copper might be worth $0.45 while insulated wire from the same source is worth $0.15, or 30% the value despite both containing copper.
    </p>
    <p>
      <strong>LME Copper Pricing and Spot Prices:</strong> The London Metal Exchange (LME) is the global benchmark for copper pricing. Copper trades in futures contracts for metric tons (1,000 kg) of grade A cathode copper; prices update continuously during trading sessions (8:00 AM–5:00 PM London time) and reflect real-time supply, demand, inventory, and economic outlook. Historically, LME copper trades in a range of $3.50–$5.00 per pound for grade A cathodes, equivalent to $7,700–$11,000 per metric ton. Your scrap dealer quotes a price that is typically $0.05–$0.20 per pound below (or 5–10%) the LME spot price, accounting for their grading, logistics, refining, and profit margin. For example, if LME copper is at $4.00/lb, a dealer might offer you $3.85/lb for #2 scrap. Industrial buyers lock in LME-linked prices on daily contracts, meaning they pay a premium for certainty.
    </p>
    <p>
      <strong>Copper Recycling Economics and Profitability:</strong> Copper recycling can be profitable at scale but margins are tighter than many expect. When you collect bare #1 copper wire and haul it to a scrap yard, you might earn $0.40/lb or about $880 per 1,000 lbs, but collection, storage, and transportation labor typically costs $50–$200. If you strip insulation from insulated wire, the extracted copper content (roughly 35% by weight) yields $0.15/lb, which may barely cover the labor of stripping. Recycling operations with automated equipment, high-volume throughput, and economies of scale achieve profitability; hobbyists collecting pounds of wire find the effort-to-reward ratio less attractive. The best approach is to separate wire types, avoid stripping unless you have large quantities, compare prices among local scrap yards (prices can vary 5–10%), and monitor LME trends to choose the best time to sell.
    </p>
    <p>
      <strong>Factors Driving Copper Prices:</strong> Copper is called an economic indicator metal because its price movement often predicts economic health 2–6 months in advance. Building and construction cycles are primary drivers—when housing starts rise and infrastructure projects begin, copper demand for wiring and plumbing surges, pushing prices up 10–20%. Electrical grid expansion and renewable energy projects (solar, wind) have boosted copper demand significantly in recent years; each solar installation requires substantial copper in wiring and inverters. Electric vehicle (EV) production is an emerging mega-driver; EVs use 3–4 times more copper than gasoline cars due to motor windings, battery connections, and charging infrastructure. Chinese economic data releases often cause dramatic copper price swings because China consumes approximately 50% of global copper; a Chinese manufacturing slowdown or property crisis can crash prices 5–15% in days. Finally, supply shocks—mine strikes (Peru, Chile are top producers), geopolitical tension, or natural disasters—can spike prices 5–20% instantly, making copper a volatile but economically significant metal.
    </p>
  </div>
);

export default function CopperValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}
