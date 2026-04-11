import MetalValueCalculator from "@/components/MetalValueCalculator";
import { METALS } from "@/lib/metals-config";

const metal = METALS.find((m) => m.apiKey === "nickel")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Nickel: The Battery Metal and Industrial Commodity</h3>
    <p>
      Nickel is an industrial metal whose value has surged dramatically due to the global shift toward electric vehicles. Once a relatively stable commodity driven by stainless steel demand, nickel prices now react acutely to EV production forecasts, battery manufacturing announcements, and supply constraints. A single electric vehicle battery can contain 10–30 kilograms of nickel, compared to virtually zero in a gasoline engine. With global EV sales expanding at 35% annually, nickel demand is growing faster than mining capacity, creating structural supply pressure that is expected to persist through 2030. Understanding nickel's dual role as a battery metal and a traditional industrial commodity helps explain its price movements and long-term growth trajectory.
    </p>
    <p>
      <strong>EV Battery Demand and Supply Pressure:</strong> Nickel is a critical component in lithium-ion battery cathodes, particularly in nickel-rich chemistries (NCA and NMC) that offer higher energy density than older lithium-iron-phosphate (LFP) batteries. As EV makers compete to increase driving range and reduce cost per kilowatt-hour, they push battery engineers toward higher nickel content. A 100 kWh EV battery (typical for modern long-range vehicles) contains 10–30 kg of nickel, depending on chemistry; with 1.5 million EVs sold annually (and growing), that translates to 15,000–45,000 tonnes of nickel demand from batteries alone. Global nickel mining produces roughly 2.7 million tonnes annually, meaning EV battery demand alone now represents 0.5–1.5% of total supply and is growing 10–15% per year. Nickel mining expansion is not keeping pace; smelting capacity bottlenecks in Indonesia (the largest producer) limit supply growth. This supply-demand imbalance is expected to persist for 5–10 years, supporting higher nickel prices over the long term.
    </p>
    <p>
      <strong>Nickel on the London Metal Exchange:</strong> Nickel is traded as a commodity on the LME in futures contracts for 6 metric tonnes (6,000 kg) of high-purity nickel cathodes (99.8%+ pure). Spot prices typically range from $7–$9 per pound or $14,000–$18,000 per metric ton, though historical swings have ranged from $3/lb (2001) to $20/lb (2008). Prices update continuously during LME trading hours (8:00 AM–5:00 PM London time, 08:00 CET / 03:00 EDT) and reflect real-time supply news, demand forecasts, inventory reports, and financial market sentiment. Your scrap dealer will quote you a price 8–12% below the LME spot price, accounting for their grading, refining, and logistics costs. For industrial buyers and producers, LME futures contracts allow hedging—locking in prices months or years in advance to manage risk and provide cost certainty.
    </p>
    <p>
      <strong>Nickel in Stainless Steel and Traditional Demand:</strong> While EV batteries are driving new demand growth, stainless steel remains the largest nickel consumer globally, accounting for approximately 65% of nickel usage. Stainless steel typically contains 8–12% nickel, which provides corrosion resistance and ductility essential for cookware, construction, medical devices, and appliances. Nickel scrap from stainless steel (bearings, appliance casings, automotive trim) is routinely separated and recycled; refiners extract nickel from stainless scrap as a valuable by-product. Chinese construction cycles and global stainless steel production directly influence nickel demand and prices; a Chinese property slowdown reduces stainless steel demand by 5–20%, dragging nickel prices down proportionally. Similarly, global automotive body panels (even in ICE vehicles) use some stainless trim, creating ancillary nickel demand. Construction booms in emerging markets support steady nickel demand independent of EV growth.
    </p>
    <p>
      <strong>Environmental and Supply Chain Challenges:</strong> Nickel mining and refining are environmentally intensive and concentrated in vulnerable regions. Most nickel comes from laterite ore deposits in tropical rainforest regions—Indonesia (40% of supply), Philippines, and New Caledonia—where mining requires deforestation and poses acid mine drainage risks. Laterite ore processing generates large volumes of acidic waste; improper tailings storage has caused environmental disasters (e.g., Malaysia's recent nickel processing expansion). Nickel smelting is highly energy-intensive, consuming enormous electricity; 60% of global refined nickel comes from coal-powered Indonesia and Philippines facilities, making the metal's carbon footprint substantial. A paradox emerges: clean EVs require environmentally intensive nickel mining. The industry is investing in greener extraction, Indonesian renewable smelting projects, and battery recycling to offset environmental costs. These supply-chain complexities create price volatility and investment risk, particularly if environmental regulations tighten, making nickel pricing sensitive to policy changes beyond commodity fundamentals.
    </p>
  </div>
);

export default function NickelValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}
