import MetalValueCalculator from "@/components/MetalValueCalculator";
import { METALS } from "@/lib/metals-config";

const metal = METALS.find((m) => m.apiKey === "palladium")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Palladium: The Volatile Automotive Metal</h3>
    <p>
      Palladium is a precious metal whose value is tightly linked to the global automotive industry and catalytic converter demand. Unlike gold, which maintains relatively stable prices driven by investment sentiment, palladium prices swing dramatically based on car production cycles and supply shocks. In 2020, palladium reached an all-time high of $2,800 per troy ounce due to surging automotive demand and tight supply, then crashed to $1,700 per ounce during COVID-19 lockdowns when vehicle production plummeted. This volatility reflects palladium's unique position in the global economy: it is far more critical to automotive emissions control than platinum, yet its supply is concentrated in just a few regions, making disruptions particularly impactful. For investors or anyone buying or selling palladium, understanding these cyclical patterns and geopolitical risks is essential.
    </p>
    <p>
      <strong>Palladium's Automotive Catalyst Role:</strong> Approximately 80% of palladium demand comes from catalytic converters in gasoline-powered vehicles. In a three-way catalytic converter, palladium is paired with platinum and rhodium to achieve three simultaneous reactions: oxidation of carbon monoxide to carbon dioxide, oxidation of unburned hydrocarbons to carbon dioxide and water, and reduction of nitrogen oxides to harmless nitrogen. Palladium excels at the first two oxidation reactions and operates effectively at the 800–900 degree Celsius temperatures of engine exhaust. A typical gasoline vehicle catalytic converter contains 1–2 grams of palladium, worth approximately $1,000–$1,600 at current prices, making even a worn converter valuable for recycling. This demand is locked in for decades because combustion vehicles will remain the majority of the global fleet through the 2030s, even as electric vehicles grow.
    </p>
    <p>
      <strong>Price Volatility and Geopolitical Risk:</strong> Palladium is notoriously volatile compared to gold, silver, or platinum, making it a trader's metal rather than a buy-and-hold store of value. Volatility stems from multiple sources: (1) Quarterly and annual auto production reports trigger 5–10% price swings in single sessions as investors repriced expectations. (2) Russia and South Africa together supply 75% of global palladium; any geopolitical tension, sanctions, or labor disputes instantly tighten supply and spike prices 10–20%. (3) The ongoing EV transition creates uncertainty about long-term palladium demand; each 1% increase in global EV adoption translates to roughly 0.5–1% reduction in catalytic converter demand, pressuring prices over time. (4) Recycling rates fluctuate seasonally and cyclically; rising scrap catalyst recycling increases secondary supply, dampening prices. (5) Institutional investor flows in palladium ETFs and futures markets are small relative to gold or silver, making leveraged trades and fund repositioning trigger outsized price swings.
    </p>
    <p>
      <strong>Palladium as an Investment:</strong> Palladium presents a mixed investment profile. The case for ownership rests on strong long-term automotive demand (catalytic converter mandates remain in effect across all major markets), physical scarcity (supply concentration), and industrial necessity (there is no near-term substitute for palladium in emissions control). The case against includes extreme volatility (30–50% annual swings are common), long-term demand headwinds from EV adoption, a thin retail market (hard to buy/sell in small quantities without large bid-ask spreads), and zero yield or dividend. Historically, palladium reaches all-time highs during auto production booms and falls sharply during recessions. Investors comfortable with commodity trading and who believe in prolonged ICE vehicle survival might hold palladium for 3–5 year upswings; conservative wealth-preservation investors should stick to gold.
    </p>
    <p>
      <strong>Selling Palladium: Purity and Market Timing:</strong> When selling palladium jewelry or scrap, first verify purity through hallmarks (950, 500, etc.) or professional assay ($30–$50 if unmarked), then research the current spot price. Palladium's thin market means you'll typically receive 8–12% discounts to spot price from dealers, higher than gold's typical 5–8% discount. Contact at least three precious metals refiners (APMEX, Kitco, online dealers) and lock in written quotes valid for 24–48 hours before accepting. For small quantities (under 1 troy ounce), expect proportionally higher per-gram fees; batching multiple items improves overall pricing. Market timing is particularly important for palladium given its volatility—monitor 4–6 week price trends and sell during uptrends when possible. Avoid pawn shops, jewelry stores, and retail chains, which pay 30–40% below melt. Finally, understand that palladium's volatility creates opportunity but also risk; a buyer who acquires palladium at $1,000/oz might see it drop to $700/oz in months, so time any purchase decision carefully.
    </p>
  </div>
);

export default function PalladiumValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}
