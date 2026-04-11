import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export default function StockCalculator() {
  const [buyPrice, setBuyPrice] = useState(50);
  const [sellPrice, setSellPrice] = useState(75);
  const [shares, setShares] = useState(100);
  const [buyCommission, setBuyCommission] = useState(10);
  const [sellCommission, setSellCommission] = useState(10);
  const [holdingDays, setHoldingDays] = useState(365);

  // Calculate costs and proceeds
  const totalBuyCost = buyPrice * shares + buyCommission;
  const totalSellProceeds = sellPrice * shares - sellCommission;

  // Profit/Loss calculation
  const grossProfit = sellPrice * shares - buyPrice * shares;
  const netProfit = totalSellProceeds - totalBuyCost;

  // Return calculations
  const returnPercent = (netProfit / totalBuyCost) * 100;
  const annualizedReturn = (returnPercent / (holdingDays / 365)) * 100;

  // Break-even price
  const breakEvenPrice = (totalBuyCost / shares);

  // Chart data for different sell prices
  const priceScenarios = [];
  const minPrice = buyPrice * 0.5;
  const maxPrice = sellPrice * 1.5;
  for (let p = minPrice; p <= maxPrice; p += (maxPrice - minPrice) / 20) {
    const scenarioProceeds = p * shares - sellCommission;
    const scenarioProfit = scenarioProceeds - totalBuyCost;
    priceScenarios.push({
      price: p,
      profit: scenarioProfit,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Buy Cost (Stock + Commission)"
        value={formatCurrency(totalBuyCost)}
        subtext={`${shares} shares × ${formatCurrency(buyPrice)} + ${formatCurrency(buyCommission)}`}
      />
      <ResultCard
        label="Sell Proceeds (Revenue - Commission)"
        value={formatCurrency(totalSellProceeds)}
        subtext={`${shares} shares × ${formatCurrency(sellPrice)} - ${formatCurrency(sellCommission)}`}
      />
      <ResultCard
        label="Gross Profit (Before Commissions)"
        value={formatCurrency(grossProfit)}
        subtext="Stock gain alone"
      />
      <ResultCard
        label="Net Profit (After Commissions)"
        value={formatCurrency(netProfit)}
        highlight={netProfit > 0}
        subtext={netProfit > 0 ? "Positive gain" : "Loss"}
      />
      <ResultCard
        label="Return on Investment"
        value={formatPercent(returnPercent / 100)}
        highlight={netProfit > 0}
        subtext="Percentage gain/loss"
      />
      <ResultCard
        label="Annualized Return"
        value={formatPercent(annualizedReturn / 100)}
        subtext={`Over ${holdingDays} days (${formatNumber(holdingDays / 365, 1)} years)`}
      />
      <ResultCard
        label="Break-Even Price"
        value={formatCurrency(breakEvenPrice)}
        subtext="Price needed to cover all costs"
      />
      <ResultCard
        label="Tax Implications"
        value={netProfit > 0 ? "Short-term capital gains tax" : "Loss may offset gains"}
        subtext={holdingDays < 365 ? "If held {'<'} 1 year" : "If held {'>='} 1 year"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Profit/Loss at Different Sell Prices</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={priceScenarios}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price" label={{ value: "Stock Price ($)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Profit/Loss ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Line type="monotone" dataKey="profit" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Stock trading involves buying shares at one price and selling at another to capture gains (or accept losses). Your profit depends on three factors: the stock price change, the number of shares, and trading commissions. A {formatCurrency(50)} stock bought at 100 shares ({formatCurrency(5000)} investment) that rises to {formatCurrency(75)} generates {formatCurrency(2500)} in gross profit. However, trading commissions ({formatCurrency(10)} buy + {formatCurrency(10)} sell = {formatCurrency(20)}) reduce net profit to {formatCurrency(2480)}, a 49.6% return on investment.
      </p>

      <p>
        <strong>Commission Impact:</strong> Commissions directly reduce your profit and are often overlooked. Modern brokers offer zero-commission stock trades, but some still charge {formatCurrency(5)}-{formatCurrency(25)} per trade, or percentage-based commissions (0.1%-1%). On a {formatCurrency(1000)} investment with {formatCurrency(20)} in commissions, you lose 2% before the stock moves. On {formatCurrency(500)} stocks, {formatCurrency(20)} commissions is 4% of profit. Always use brokers with zero-commission trading (most major brokers: Fidelity, Charles Schwab, E-Trade, etc.). Commissions are a hidden cost of active trading.
      </p>

      <p>
        <strong>Capital Gains Taxes:</strong> Stock profits are taxed as capital gains. <strong>Short-term capital gains</strong> (held {'<'} 1 year) are taxed at your ordinary income rate (10-37%). <strong>Long-term capital gains</strong> (held {'>='} 1 year) are taxed at 0-20% depending on income, much lower. A {formatCurrency(2500)} profit held {'>='} 1 year might be taxed {formatCurrency(375)}-{formatCurrency(500)}; same profit held {'<'} 1 year might be {formatCurrency(750)}-{formatCurrency(925)}. Holding periods matter significantly for taxes.
      </p>

      <p>
        <strong>Annualized Return Context:</strong> Annualized return shows how your return scales to an annual rate. A 50% return over 6 months annualizes to 100%+ (exceptionally rare). A 10% return over 3 years annualizes to ~3.2% annually (acceptable, beats inflation). Context matters: beating the S&P 500 average (~10% annually) is difficult; even more difficult to beat it consistently while minimizing taxes and fees. Most professional investors underperform the market. Consider index funds (S&P 500) for simpler, lower-cost investing.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Stock Profit/Loss Calculator"
      description="Calculate stock trading profits, returns, and annualized performance"
      slug="stock-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="buy-price"
          label="Buy Price Per Share"
          value={buyPrice}
          onChange={setBuyPrice}
          prefix="$"
          step={1}
          min={0.01}
        />
        <InputField
          id="sell-price"
          label="Sell Price Per Share"
          value={sellPrice}
          onChange={setSellPrice}
          prefix="$"
          step={1}
          min={0.01}
        />
        <InputField
          id="shares"
          label="Number of Shares"
          value={shares}
          onChange={setShares}
          step={10}
          min={1}
        />
        <InputField
          id="buy-commission"
          label="Buy Commission"
          value={buyCommission}
          onChange={setBuyCommission}
          prefix="$"
          step={1}
          min={0}
          hint="Most brokers offer zero commission"
        />
        <InputField
          id="sell-commission"
          label="Sell Commission"
          value={sellCommission}
          onChange={setSellCommission}
          prefix="$"
          step={1}
          min={0}
          hint="Most brokers offer zero commission"
        />
        <InputField
          id="holding-days"
          label="Holding Period"
          value={holdingDays}
          onChange={setHoldingDays}
          suffix="days"
          step={30}
          min={1}
          hint="Days held (affects tax rate and annualized return)"
        />
      </div>
    </CalculatorLayout>
  );
}
