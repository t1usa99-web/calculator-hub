import MetalValueCalculator from "@/components/MetalValueCalculator";
import { registerCalculator } from "@/lib/calculator-registry";
import { METALS } from "@/lib/metals-config";
import { TIN_VALUE_FAQS } from "@/lib/faq-metals";

const metal = METALS.find((m) => m.apiKey === "tin")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Tin: Solder, Plating, and Supply Constraints</h3>
    <p>
      Tin is an industrial metal with a unique market profile: it is relatively abundant geologically, but its concentrated mining and smelting infrastructure creates supply constraints that drive price volatility. Approximately 40–50% of global tin demand comes from electronics solder, the metal that bonds components to circuit boards in every smartphone, computer, and appliance. An additional 30% goes to tin plate—a thin tin coating on steel used in food cans and industrial containers—while the remaining 20–30% is split between alloys, coatings, and specialty applications. Unlike commodity metals like copper or aluminum, tin markets are tight and inelastic; supply cannot be rapidly expanded because tin mining and refining requires specialized operations, and geopolitical concentration (Indonesia, China, Peru control 65% of supply) creates supply risk. Understanding tin's dual role in electronics and food packaging, the implications of supply concentration, and emerging applications in battery research helps explain tin's strategic importance and price movements.
    </p>
    <p>
      <strong>Tin Solder in Electronics Manufacturing:</strong> Solder is the metal "glue" that electrically and mechanically bonds electronic components (resistors, capacitors, integrated circuits) to circuit boards. Traditional solder is a tin-lead alloy (60% tin, 40% lead), with a melting point of approximately 188 degrees Celsius. Lead-free solder formulations (96–99% tin plus copper, silver, nickel, or bisumuth) replaced lead solder globally due to RoHS (Restriction of Hazardous Substances) regulations, increasing tin demand per unit of solder. A single smartphone circuit board contains tens of thousands of solder joints, collectively using 1–2 grams of tin. A laptop motherboard uses 5–10 grams of tin. While modern miniaturization is reducing solder volume per device (fewer, finer joints), the growth in electronics manufacturing—smartphones, computers, IoT devices, automotive electronics—has sustained robust tin demand. Global tin solder consumption is estimated at 150,000–200,000 tonnes annually, representing 40–50% of total tin demand. Even small disruptions to electronics manufacturing (pandemic lockdowns, trade wars, supply chain shocks) directly impact tin demand and prices.
    </p>
    <p>
      <strong>Tin Plate and Food Container Protection:</strong> Tin plating—a thin layer of pure tin electrochemically bonded to steel—is used to coat steel cans for food, beverage, and aerosol applications. The tin coating prevents rust and protects food from iron contamination, with thicknesses typically 0.5–2 micrometers (incredibly thin—one-thousandth the thickness of a human hair). Approximately 50,000 tonnes of tin are consumed annually for tin plating, representing about 30% of global tin demand. The economic logic is straightforward: a tin coat ($1–$2 per can) prevents food spoilage ($50–$100 loss per batch) and eliminates product liability risk from iron contamination. Tin's corrosion resistance, food-safety compatibility, and cost-efficiency make it the standard protective coating for steel food cans globally. Aluminum cans have largely replaced steel cans for beverages in developed countries, but steel remains dominant for canned soups, vegetables, fruits, and specialized foods, sustaining steady tin demand.
    </p>
    <p>
      <strong>Tin Supply Constraints and Geographic Concentration:</strong> Global tin production is approximately 380,000 tonnes annually (stable, not growing), yet demand occasionally exceeds supply, creating price spikes and shortage risk. Production is highly concentrated: Indonesia dominates with 40% of supply, China contributes 15%, and Peru adds 10%—these three countries represent 65% of global output. Indonesia's dominance creates unique vulnerability because political instability, environmental regulations, or mining accidents directly constrain global supply. Environmental regulations in Indonesia (sulfur emission controls, tailings storage requirements) have slowed tin mining expansion and increased production costs. Tin smelting is similarly concentrated in a handful of facilities, primarily in Indonesia and China; smelter strikes or regulatory closures can squeeze supply. Known tin reserves are estimated to last 35–40 years at current extraction rates, and exploration for new tin deposits is limited (tin is not a focus for major mining companies), creating long-term supply uncertainty. These constraints mean that tin is a tight market with limited elasticity; supply shocks (labor strikes, environmental closures, geopolitical disruptions) trigger immediate 10–20% price spikes without corresponding demand destruction.
    </p>
    <p>
      <strong>Tin Pricing and Commodity Markets:</strong> Tin trades on the LME in futures contracts for 5 metric tonnes of high-grade tin (99.9%+ purity). Spot prices typically range from $0.50–$0.70 per pound ($1,100–$1,500 per metric ton), though historical ranges span from $0.30/lb (2001) to $1.80/lb (2008 peak). Prices update during LME trading hours (8:00 AM–5:00 PM London time) and reflect real-time supply, demand, inventory reports, and macroeconomic sentiment. Your scrap dealer will quote 8–15% below spot price for clean tin scrap (95%+ purity), accounting for refining and logistics. Tin is less liquid than copper or aluminum, meaning bid-ask spreads (dealer markup) are wider—expect 15–20% discounts for small quantities of tin scrap.
    </p>
    <p>
      <strong>Supply Chain Risk and Conflict Minerals:</strong> Tin from the Democratic Republic of Congo (an artisanal mining region) is labeled "conflict tin" because mining revenues have historically funded armed groups and human rights abuses are endemic. Electronics manufacturers and electronics retailers face compliance requirements (Dodd-Frank Act Section 1502 reporting) to source conflict-free tin. These compliance costs add 5–10% premiums to "conflict-free" certified tin, fragmenting the market into premium and discounted tiers. Supply chain transparency is improving, but sourcing risk and geopolitical concerns remain. Additionally, projected long-term tin supply inadequacy (production cannot keep pace with electronics + food packaging growth) is spurring investment in secondary tin (recycling scrap solder and tin plate) and research into tin-substitute technologies. For now, tin remains essential and irreplaceable in most applications, but supply constraints and geopolitical fragmentation make tin prices among the most volatile base metals.
    </p>
  </div>
);

export default function TinValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}

registerCalculator({
  ...metal,
  title: "Tin Value Calculator",
  shortTitle: "Tin Value",
  category: "metals",
  popular: false,
  faqs: TIN_VALUE_FAQS,
  dateModified: "2026-04-10",
  component: TinValueCalculator,
});
