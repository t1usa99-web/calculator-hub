import MetalValueCalculator from "@/components/MetalValueCalculator";
import { METALS } from "@/lib/metals-config";

const metal = METALS.find((m) => m.apiKey === "silver")!;

const educational = (
  <div className="space-y-4 text-gray-700">
    <h3 className="text-lg font-semibold text-gray-900">Understanding Silver Value and Purity Standards</h3>
    <p>
      Silver is a precious metal with thousands of years of history in currency, jewelry, and industrial applications. Unlike gold, silver has a much larger industrial footprint—approximately 50% of silver demand comes from electronics, photography, medical devices, and manufacturing, while the remaining 50% is split between jewelry, coins, and investment. This dual demand profile makes silver more volatile than gold; when industrial production booms, silver prices often outpace gold, but when manufacturing slows, silver can fall faster than gold. Understanding silver purity standards and the factors driving its price is essential for anyone buying, selling, or investing in silver.
    </p>
    <p>
      <strong>Silver Purity Standards:</strong> Silver purity is expressed as a decimal fineness or percentage. <strong>Fine silver (.999 or 99.9%)</strong> is pure silver used in bullion coins and bars; it is too soft for jewelry wear. <strong>Sterling silver (.925 or 92.5%)</strong> is the global standard for jewelry and flatware; the remaining 7.5% is typically copper, which adds strength without compromising the white luster. <strong>Coin silver (.900 or 90%)</strong> was historically used in US dimes and quarters minted before 1965 and is slightly lower purity than sterling. <strong>Britannia silver (.958 or 95.8%)</strong> is a UK standard that falls between sterling and fine silver. <strong>.800 silver (80%)</strong> was used in older European jewelry and coins. When calculating melt value, simply multiply the weight by the purity factor—for example, a 100-gram sterling silver bracelet contains exactly 92.5 grams of pure silver, worth 92.5 times the per-gram spot price.
    </p>
    <p>
      <strong>Tarnish and Its Impact on Value:</strong> A critical point that confuses many people: <strong>tarnish does not reduce melt value.</strong> Tarnish is a thin oxidation layer (silver sulfide) that forms when silver reacts with sulfur compounds in the air. Chemically, tarnish is purely cosmetic and has negligible weight—a tarnished piece and a polished piece of the same weight contain identical amounts of pure silver. The melt value is completely unaffected. However, tarnish may slightly reduce the collector or antique value if buyers prioritize appearance or if the tarnish obscures maker's marks. For selling, you can polish tarnish away using silver polish before approaching dealers, but it won't change the financial valuation. For storage, keeping silver in an airtight bag or anti-tarnish cloth extends the time before tarnish appears but again, future tarnish won't impact melt value.
    </p>
    <p>
      <strong>Industrial Demand and Price Volatility:</strong> Silver's industrial applications create a secondary demand engine alongside investment demand. The electronics industry uses silver in circuit boards, solar panels, and RFID tags because of its unmatched electrical and thermal conductivity. Photography still relies on silver halide compounds in specialized X-ray films and imaging. Medical devices incorporate silver for its antimicrobial properties in wound dressings and coatings. When these industrial sectors boom—for example, during a solar energy expansion or pandemic-driven medical device surge—silver prices can spike 20–30% in months, often outpacing gold. Conversely, when manufacturing contracts, silver falls faster than precious metals tied purely to investment sentiment, making silver a more volatile but potentially more rewarding play on industrial cycles.
    </p>
    <p>
      <strong>Selling Silver Jewelry and Scrap:</strong> To sell silver for the best price, first confirm purity by checking for hallmarks (925, 950, .999, Ster., etc.) or request a professional assay if unmarked. Research current spot prices using an online calculator to estimate fair melt value—demand at least 85–90% of melt value from a dealer. Contact at least three local coin dealers, jewelry stores, or online refiners (APMEX, JM Bullion, Kitco) and compare their offers in writing before accepting. Avoid pawn shops, which typically pay 20–30% below market, and avoid TV chain buyers advertised on commercials, which have high markups. For collector items like rare coins or antique flatware, consider eBay, specialized numismatic auctions, or antique shops, which may pay 50–200% premiums above melt value for scarce or historic pieces. Timing also matters—watch silver price charts for 2–4 week trends and sell during rallies if possible.
    </p>
  </div>
);

export default function SilverValueCalculator() {
  return <MetalValueCalculator metal={metal} educational={educational} />;
}
