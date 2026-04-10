import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { CURRENCY_CONVERTER_FAQS } from "@/lib/faq-finance-invest";
import { useExchangeRates } from "@/lib/use-exchange-rates";

// Full currency metadata — codes must match the server's FX_PAIRS + USD
const CURRENCIES: { code: string; name: string; symbol: string; flag: string }[] = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
  { code: "TWD", name: "Taiwan Dollar", symbol: "NT$", flag: "🇹🇼" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭" },
  { code: "PHP", name: "Philippine Peso", symbol: "₱", flag: "🇵🇭" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr", flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr", flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone", symbol: "kr", flag: "🇩🇰" },
  { code: "PLN", name: "Polish Zloty", symbol: "zł", flag: "🇵🇱" },
  { code: "CZK", name: "Czech Koruna", symbol: "Kč", flag: "🇨🇿" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺", flag: "🇹🇷" },
  { code: "ILS", name: "Israeli Shekel", symbol: "₪", flag: "🇮🇱" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪" },
  { code: "SAR", name: "Saudi Riyal", symbol: "﷼", flag: "🇸🇦" },
  { code: "MXN", name: "Mexican Peso", symbol: "Mex$", flag: "🇲🇽" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  { code: "ARS", name: "Argentine Peso", symbol: "AR$", flag: "🇦🇷" },
  { code: "CLP", name: "Chilean Peso", symbol: "CL$", flag: "🇨🇱" },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
];

const CURRENCY_MAP = Object.fromEntries(CURRENCIES.map((c) => [c.code, c]));

export default function CurrencyConverterCalculator() {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const { data, isLoading, error } = useExchangeRates();
  const rates = data?.rates ?? {};

  // Only show currencies the server actually returned rates for
  const availableCodes = CURRENCIES.filter(
    (c) => c.code === "USD" || rates[c.code] != null
  ).map((c) => c.code);

  // Conversion math — rates are USD-base (1 USD = X units)
  const fromRate = rates[fromCurrency] ?? 1;
  const toRate = rates[toCurrency] ?? 1;
  const amountInUSD = amount / fromRate;
  const convertedAmount = amountInUSD * toRate;
  const exchangeRate = toRate / fromRate;

  // Quick-conversion table for common amounts
  const commonAmounts = [1, 10, 100, 500, 1000, 5000, 10000];
  const comparisonData = commonAmounts.map((amt) => ({
    amount: amt,
    converted: (amt / fromRate) * toRate,
  }));

  const currencyOptions = availableCodes.map((code) => {
    const c = CURRENCY_MAP[code];
    return {
      value: code,
      label: `${c.flag} ${code} — ${c.name}`,
    };
  });

  const results = (
    <div className="space-y-4">
      {isLoading && (
        <p className="text-sm text-gray-500">Loading live exchange rates...</p>
      )}
      {error && (
        <p className="text-sm text-amber-600">
          Using estimated rates. Live data temporarily unavailable.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard
          label={`${fromCurrency} Amount`}
          value={`${CURRENCY_MAP[fromCurrency]?.symbol ?? ""}${formatNumber(amount)}`}
        />
        <ResultCard
          label={`${toCurrency} Amount`}
          value={`${CURRENCY_MAP[toCurrency]?.symbol ?? ""}${formatNumber(convertedAmount)}`}
          highlight
        />
        <ResultCard
          label="Exchange Rate"
          value={`1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`}
        />
        <ResultCard
          label="Reverse Rate"
          value={`1 ${toCurrency} = ${(1 / exchangeRate).toFixed(4)} ${fromCurrency}`}
        />
      </div>

      {data?.source && (
        <p className="text-xs text-gray-400 mt-2">
          Rates:{" "}
          {data.source === "yahoo"
            ? "Live via Yahoo Finance"
            : "Estimated (live data unavailable)"}
          {data.cachedAt &&
            ` — last updated ${new Date(data.cachedAt).toLocaleString()}`}
        </p>
      )}

      {/* Quick conversion table */}
      <div className="mt-4 overflow-x-auto">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          {fromCurrency} to {toCurrency} Conversion Table
        </h3>
        <table className="w-full text-sm border border-gray-200 rounded">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">
                {CURRENCY_MAP[fromCurrency]?.flag} {fromCurrency}
              </th>
              <th className="px-3 py-2 text-right">
                {CURRENCY_MAP[toCurrency]?.flag} {toCurrency}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.amount} className="border-t border-gray-100">
                <td className="px-3 py-1.5">
                  {CURRENCY_MAP[fromCurrency]?.symbol}
                  {formatNumber(row.amount)}
                </td>
                <td className="px-3 py-1.5 text-right font-medium">
                  {CURRENCY_MAP[toCurrency]?.symbol}
                  {formatNumber(row.converted)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cross-rate table for top 8 currencies */}
      <div className="mt-4 overflow-x-auto">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          {fromCurrency} Cross Rates
        </h3>
        <table className="w-full text-sm border border-gray-200 rounded">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Currency</th>
              <th className="px-3 py-2 text-right">
                1 {fromCurrency} =
              </th>
              <th className="px-3 py-2 text-right">
                {formatNumber(amount)} {fromCurrency} =
              </th>
            </tr>
          </thead>
          <tbody>
            {availableCodes
              .filter((c) => c !== fromCurrency)
              .slice(0, 10)
              .map((code) => {
                const crossRate = (rates[code] ?? 1) / fromRate;
                const c = CURRENCY_MAP[code];
                return (
                  <tr key={code} className="border-t border-gray-100">
                    <td className="px-3 py-1.5">
                      {c.flag} {code}
                    </td>
                    <td className="px-3 py-1.5 text-right">
                      {crossRate.toFixed(4)}
                    </td>
                    <td className="px-3 py-1.5 text-right font-medium">
                      {c.symbol}
                      {formatNumber(amount * crossRate)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          {`Conversion Amounts: ${fromCurrency} to ${toCurrency}`}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="amount"
              label={{
                value: `Amount in ${fromCurrency}`,
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              label={{
                value: `Amount in ${toCurrency}`,
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip formatter={(value) => formatNumber(value as number)} />
            <Line
              type="monotone"
              dataKey="converted"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Currency conversion is essential for international travel, business, and
        investment. Exchange rates determine how much of one currency you need to
        get another. They fluctuate constantly based on supply and demand,
        interest rates, inflation, and economic conditions between countries.
      </p>

      <p>
        <strong>Understanding Exchange Rates:</strong> An exchange rate of 1.20
        means 1 unit of the first currency equals 1.20 units of the second
        currency. For example, if USD/EUR is 0.92, one US dollar equals 0.92
        euros. Exchange rates are quoted in pairs and change constantly during
        trading hours. Mid-market rates are the true rates between banks, but
        consumers typically get slightly worse rates when converting money.
      </p>

      <p>
        <strong>Bid-Ask Spread:</strong> When exchanging currency, you typically
        see two rates: the bid (what the exchanger pays you) and the ask (what
        you pay for currency). The difference is the spread, which is how money
        exchangers and banks profit. The spread can be 2-5% of the mid-market
        rate, so getting a good exchange rate matters significantly for large
        transactions.
      </p>

      <p>
        <strong>When Traveling:</strong> Airport currency exchanges have the
        worst rates due to high markup. Using ATMs in the destination country
        usually gives better rates. Credit cards processed in foreign currency
        use the card network's exchange rate, which is typically better than cash
        exchange. However, some cards charge foreign transaction fees (1-3%),
        which can offset the savings. Research your options before traveling.
      </p>

      <p>
        <strong>For Business and Investment:</strong> Businesses importing or
        exporting goods face currency risk if exchange rates move unfavorably.
        For example, if you price goods in dollars but your supplier costs are in
        euros, a weak dollar/strong euro situation increases your costs. Larger
        transactions justify using currency forward contracts or options to lock
        in rates. Investors in foreign markets face similar exposure when
        repatriating returns.
      </p>

      <p>
        <strong>About These Rates:</strong> The exchange rates shown are live
        mid-market rates from Yahoo Finance, updated hourly. For actual
        transactions, rates may differ slightly due to spreads and fees charged
        by banks and money transfer services. Always confirm the final rate
        before completing a transaction.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Currency Converter Calculator"
      description="Convert between 30+ world currencies with live exchange rates from Yahoo Finance"
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

        {/* Swap button */}
        <button
          type="button"
          onClick={() => {
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
          }}
          className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors"
        >
          ⇄ Swap Currencies
        </button>
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
  description:
    "Convert between 30+ world currencies with live exchange rates updated hourly",
  category: "finance",
  icon: "💱",
  keywords: [
    "currency converter",
    "exchange rate",
    "forex",
    "international",
    "live rates",
  ],
  popular: true,
});
