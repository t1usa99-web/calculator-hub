import MetalValueCalculator from "@/components/MetalValueCalculator";
import { registerCalculator } from "@/lib/calculator-registry";
import { METALS } from "@/lib/metals-config";
import { RHODIUM_VALUE_FAQS } from "@/lib/faq-metals";

const metal = METALS.find((m) => m.apiKey === "rhodium")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Rhodium: The Rarest Precious Metal</h3>
    <p>
      Rhodium is the rarest and most expensive precious metal in the world, trading at 5–10 times the price of gold per ounce. Global annual rhodium production is approximately 100 tonnes, compared to 3,000+ tonnes of gold, making rhodium astronomically scarce. The metal's extreme rarity, combined with its irreplaceable role in catalytic converters and industrial applications, creates a market characterized by dramatic price swings and supply vulnerability. Rhodium prices have historically ranged from $1,000 per troy ounce (2001) to $10,000 per troy ounce (2008 peak), with recent prices hovering around $5,000–$7,000 per ounce. This volatility makes rhodium a speculative asset rather than a conservative investment, and its supply concentration in South Africa and Russia means geopolitical events can trigger 20–30% price movements in days.
    </p>
    <p>
      <strong>Rhodium's Extreme Rarity and Supply Concentration:</strong> Rhodium's scarcity is fundamental to understanding its value. More rhodium is mined in one year (100 tonnes) than gold is mined in one week globally. Ninety-five percent of rhodium production comes from just two countries: South Africa (70%) and Russia (25%), creating extreme supply concentration risk. Unlike gold, which can be mined from thousands of operations worldwide, platinum-group metals (including rhodium) are extracted as by-products of nickel and platinum mining in specialized operations. This supply chain complexity means new production cannot be rapidly scaled in response to price spikes; it takes 5–10 years to develop and permit a new mining operation. Any major disruption—labor strikes in South Africa (which occur regularly), Russian sanctions, a mining accident, or a production slowdown—instantly tightens supply and can spike rhodium prices 20–40% in days without corresponding increases in demand. This supply inelasticity is why rhodium is the most volatile precious metal.
    </p>
    <p>
      <strong>Rhodium's Critical Role in Emissions Control:</strong> Approximately 80% of rhodium demand comes from catalytic converters in gasoline and diesel vehicles. Rhodium's job is uniquely specialized: it reduces nitrogen oxides (NOx) by breaking the N-O bonds at high exhaust temperatures (800–900 degrees Celsius), converting NOx to harmless nitrogen gas. Neither palladium nor platinum alone can achieve efficient NOx reduction; rhodium is essential and irreplaceable. A single catalytic converter contains only 0.5–1 gram of rhodium, but at $5,000–$7,000 per troy ounce, that translates to $80–$225 of rhodium value per converter. When a vehicle reaches 150,000 miles, its catalytic converter's rhodium content has degraded 20–30% catalytically but retains significant residual value. This creates a global recycling industry where used converters are smelted to recover platinum, palladium, and rhodium—a profitable operation given rhodium's extreme price.
    </p>
    <p>
      <strong>Rhodium Price Volatility and Market Dynamics:</strong> Rhodium is famous for the most violent commodity price swings on Earth. Price volatility stems from several reinforcing factors: (1) Extremely tight supply—only 100 tonnes/year globally; any disruption removes 1–5% of annual supply instantly, spiking prices. (2) Thin dealer market—a handful of large refiners (Johnson Matthey, BASF, Umicore) control most rhodium trading; their buying/selling decisions move prices 5–20% daily. (3) Catalytic converter recycling variability—when vehicle production is high, scrap converters flood the market months later, increasing secondary supply; when production falls, scrap supply dries up, tightening supply. (4) Geopolitical shocks—any Russia-South Africa tension instantly reduces available supply; sanctions, strikes, or mining accidents trigger 10–30% price swings. (5) Limited retail demand—rhodium is almost exclusively traded by industrial buyers and sophisticated investors; retail ETFs and investment vehicles are minimal, so institutional positioning changes swing prices dramatically. The 2008 financial crisis exemplifies this volatility: rhodium spiked to $10,000/oz in early 2008 on supply concerns, then crashed to $2,000/oz in 2009 as investment demand evaporated—a 80% loss for late buyers.
    </p>
    <p>
      <strong>Profiting from Rhodium Scrap Recovery:</strong> Catalytic converter recycling can be profitable, though legal and market risks apply. A typical gasoline converter contains 0.5–1.5 grams of rhodium plus palladium and platinum, worth $800–$2,000 total in recovered metals. After refiner markups (20–40%), you net $500–$1,200 per converter. Professional auto recyclers process 10,000+ converters annually and achieve profitability through scale and refiner relationships. Hobbyists collecting 50–200 converters per year face legal compliance risks (theft prevention, documentation), storage challenges, and lower per-unit refiner pricing. Critical caution: catalytic converter theft is rampant and illegal; only purchase converters from reputable auto recyclers, salvage yards, or certified sources with documentation. Selling stolen converters is federal crime. For legal scrap collection, margins depend on rhodium market prices—when rhodium spikes to $7,000+/oz, profits triple; when prices crash to $4,000/oz, margins shrink. This price sensitivity makes converter recycling a cyclical business best suited to operations with scale and capital reserves.
    </p>
  </div>
);

export default function RhodiumValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}

registerCalculator({
  ...metal,
  title: "Rhodium Value Calculator",
  shortTitle: "Rhodium Value",
  category: "metals",
  popular: false,
  faqs: RHODIUM_VALUE_FAQS,
  dateModified: "2026-04-10",
  component: RhodiumValueCalculator,
});
