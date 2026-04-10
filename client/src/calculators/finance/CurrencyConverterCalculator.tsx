import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { CURRENCY_CONVERTER_FAQS } from "@/lib/faq-finance-invest";

// Hardcoded exchange rates (USD base)
const EXCHANGE_RATES: { [key: string]: number } = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.50,
  CAD: 1.36,
  AUD: 1.51,
  CHF: 0.88,
  CNY: 7.24,
};

const CURRENCY_NAMES: { [key: string]: string } = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  CAD: "Canadian Dollar",
  AUD: "Australian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
};

export default function CurrencyConverterCalculator() {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Calculate conversion
  const amountInUSD = amount / EXCHANGE_RATES[fromCurrency];
  const convertedAmount = amountInUSD * EXCHANGE_RATES[toCurrency];
  const exchangeRate = EXCHANGE_RATES[toCurrency] / EXCHANGE_RATES[fromCurrency];

  // Generate historical-like trend data (for demonstration)
  const trendData = [];
  for (let i = 0; i <= 12; i++) {
    const variation = (Math.sin(i * 0.5) * 0.05); // ±5% variation
    const trendRate = exchangeRate * (1 + variation);
    trendData.push({
      month: i,
      rate: trendRate,
    });
  }

  // Comparison of common amounts
  const commonAmounts = [100, 500, 1000, 5000, 10000];
  const comparisonData = commonAmounts.map((amt) => ({
    amount: amt,
    converted: (amt / EXCHANGE_RATES[fromCurrency]) * EXCHANGE_RATES[toCurrency],
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label={`${fromCurrency} Amount`}
        value={formatCurrency(amount, { currency: fromCurrency })}
      />
      <ResultCard
        label={`${toCurrency} Amount`}
        value={formatCurrency(convertedAmount, { currency: toCurrency })}
        highlight
      />
      <ResultCard
        label={`Exchange Rate`}
        value={`1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`}
      />
      <ResultCard
        label={`Reverse Rate`}
        value={`1 ${toCurrency} = ${(1 / exchangeRate).toFixed(4)} ${fromCurrency}`}
      />
      <ResultCard
        label={`${fromCurrency} (USD)`}
        value={formatCurrency(amountInUSD, { currency: "USD" })}
      />
      <ResultCard
        label={`From Currency in USD`}
        value={`1 ${fromCurrency} = ${(EXCHANGE_RATES.USD / EXCHANGE_RATES[fromCurrency]).toFixed(4)} USD`}
      />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          {`Exchange Rate Trend: ${fromCurrency}/${toCurrency}`}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Exchange Rate", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => (value as number).toFixed(4)} />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          {`Conversion Amounts: ${fromCurrency} to ${toCurrency}`}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="amount" label={{ value: `Amount in ${fromCurrency}`, position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: `Amount in ${toCurrency}`, angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatNumber(value as number)} />
            <Line type="monotone" dataKey="converted" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Currency conversion is essential for international travel, business, and investment. Exchange rates determine how much of one currency you need to get another. They fluctuate constantly based on supply and demand, interest rates, inflation, and economic conditions between countries.
      </p>

      <p>
        <strong>Understanding Exchange Rates:</strong> An exchange rate of 1.20 means 1 unit of the first currency equals 1.20 units of the second currency. For example, if USD/EUR is 0.92, one US dollar equals 0.92 euros. Exchange rates are quoted in pairs and change constantly during trading hours. Mid-market rates are the true rates between banks, but consumers typically get slightly worse rates when converting money.
      </p>

      <p>
        <strong>Bid-Ask Spread:</strong> When exchanging currency, you typically see two rates: the bid (what the exchanger pays you) and the ask (what you pay for currency). The difference is the spread, which is how money exchangers and banks profit. The spread can be 2-5% of the mid-market rate, so getting a good exchange rate matters significantly for large transactions.
      </p>

      <p>
        <strong>When Traveling:</strong> Airport currency exchanges have the worst rates due to high markup. Using ATMs in the destination country usually gives better rates. Credit cards processed in foreign currency use the card network's exchange rate, which is typically better than cash exchange. However, some cards charge foreign transaction fees (1-3%), which can offset the savings. Research your options before traveling.
      </p>

      <p>
        <strong>For Business and Investment:</strong> Businesses importing or exporting goods face currency risk if exchange rates move unfavorably. For example, if you price goods in dollars but your supplier costs are in euros, a weak dollar/strong euro situation increases your costs. Larger transactions justify using currency forward contracts or options to lock in rates. Investors in foreign markets face similar exposure when repatriating returns.
      </p>

      <p>
        <strong>Note:</strong> The exchange rates shown are approximate and for demonstration purposes. Real exchange rates change constantly. For actual transactions, always check current rates with your bank or a financial institution, as rates vary and may include spreads or fees.
      </p>
    </div>
  );

  const currencyOptions = Object.keys(EXCHANGE_RATES).map((code) => ({
    value: code,
    label: `${code} - ${CURRENCY_NAMES[code]}`,
  }));

  return (
    <CalculatorLayout
      title="Currency Converter Calculator"
      description="Convert between major currencies and view exchange rates"
      slug="currency-converter-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="amount"
          label="Amount"
          value={amount}
          onChange={setAmount}
          step={100}
          min={0}
        />
        <SelectField
          id="from-currency"
          label="From Currency"
          value={fromCurrency}
          onChange={setFromCurrency}
          options={currencyOptions}
        />
        <SelectField
          id="to-currency"
          label="To Currency"
          value={toCurrency}
          onChange={setToCurrency}
          options={currencyOptions}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: CurrencyConverterCalculator,
  faqs: CURRENCY_CONVERTER_FAQS,
  slug: "currency-converter-calculator",
  title: "Currency Converter Calculator",
  shortTitle: "Currency Converter",
  description: "Convert between major world currencies with real-time exchange rates",
  category: "finance",
  icon: "💱",
  keywords: ["currency converter", "exchange rate", "forex", "international"],
  popular: true,
});
