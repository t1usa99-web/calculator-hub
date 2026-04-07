import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalValue, setFinalValue] = useState(15000);
  const [timePeriodYears, setTimePeriodYears] = useState(5);

  // Calculate ROI
  const profit = finalValue - initialInvestment;
  const totalROI = (profit / initialInvestment) * 100;
  const annualizedROI = (Math.pow(finalValue / initialInvestment, 1 / timePeriodYears) - 1) * 100;

  // Calculate CAGR (Compound Annual Growth Rate)
  const cagr = annualizedROI;

  // Loss/gain indicator
  const isGain = profit >= 0;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Return (%)"
        value={formatPercent(totalROI)}
        highlight={isGain}
        subtext={`${isGain ? "Gain" : "Loss"}: ${formatCurrency(Math.abs(profit))}`}
      />
      <ResultCard
        label="Annualized Return (%)"
        value={formatPercent(annualizedROI)}
        highlight={isGain}
        subtext={`Over ${timePeriodYears} years`}
      />
      <ResultCard label="Initial Investment" value={formatCurrency(initialInvestment)} />
      <ResultCard label="Final Value" value={formatCurrency(finalValue)} highlight />
      <ResultCard
        label={isGain ? "Total Gain" : "Total Loss"}
        value={formatCurrency(Math.abs(profit))}
        subtext={`${isGain ? "+" : "-"}${formatPercent(totalROI)}`}
      />
      <ResultCard label="Time Period" value={`${timePeriodYears} years`} />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Return on Investment (ROI) is a fundamental metric used to evaluate the profitability of an investment. It measures how much profit you made (or lost) on your investment relative to the amount you invested. ROI is expressed as a percentage and is useful for comparing the performance of different investments or assessing whether an investment met your financial goals. A higher ROI indicates a more profitable investment, but timing and risk should also be considered.
      </p>

      <p>
        <strong>Total ROI vs Annualized Return:</strong> Total ROI shows the simple percentage gain over your entire holding period—useful for understanding overall performance. Annualized return (also called CAGR or Compound Annual Growth Rate) shows the average yearly return, allowing fair comparison of investments held for different time periods. For example, a 50% return over 5 years looks impressive, but annualized it's only about 8.4% per year. Annualized returns are more useful for comparing investments and understanding if they met expected targets.
      </p>

      <p>
        <strong>Investment Types and Expected Returns:</strong> Stock market investments historically average 7-10% annually over long periods, though with significant year-to-year volatility. Bonds typically return 3-6% annually with lower risk. Real estate often appreciates 2-4% annually plus rental income. High-risk investments like startups or cryptoassets can return 100%+ or lose 100% of your investment. Savings accounts and money market accounts currently offer 4-5% with zero risk. Consider your risk tolerance and time horizon—higher returns typically require accepting more risk.
      </p>

      <p>
        <strong>Using ROI for Decision Making:</strong> Always compare ROI against your target returns for that investment type and your time horizon. A 5% return on a 30-year investment is disappointing; the same return on a 1-year investment is excellent. Factor in costs—investment fees, taxes on capital gains (15-20% federal for long-term gains), and inflation can significantly reduce your real ROI. Consider reinvesting dividends and gains rather than cashing out—compounding over time dramatically improves returns. Be skeptical of anyone promising consistent returns above 15% annually without appropriate risk.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="ROI Calculator"
      description="Calculate return on investment and annualized returns for your investments"
      slug="roi-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-investment"
          label="Initial Investment"
          value={initialInvestment}
          onChange={setInitialInvestment}
          prefix="$"
          step={1000}
          min={0}
        />
        <InputField
          id="final-value"
          label="Final Value"
          value={finalValue}
          onChange={setFinalValue}
          prefix="$"
          step={1000}
          min={0}
        />
        <InputField
          id="time-period"
          label="Time Period"
          value={timePeriodYears}
          onChange={setTimePeriodYears}
          suffix="years"
          step={0.5}
          min={0.1}
          max={50}
        />

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
          <p className="font-semibold mb-2">Your Investment Summary:</p>
          <p>Initial: {formatCurrency(initialInvestment)}</p>
          <p>Final: {formatCurrency(finalValue)}</p>
          <p className={`font-bold ${isGain ? "text-green-700" : "text-red-700"}`}>
            {isGain ? "Gain" : "Loss"}: {formatCurrency(Math.abs(profit))} ({formatPercent(totalROI)})
          </p>
          <p className="mt-2 text-xs">Annualized Return: {formatPercent(annualizedROI)} per year</p>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
          <p className="font-semibold mb-2">Investment Context:</p>
          <div className="space-y-1 text-xs">
            <p>Historic stock market avg: ~10% annually</p>
            <p>Bond avg: ~4-5% annually</p>
            <p>Real estate avg: ~3-4% + rental income</p>
            <p>Your annualized return: <span className="font-bold">{formatPercent(annualizedROI)}</span></p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: ROICalculator,
  slug: "roi-calculator",
  title: "ROI Calculator",
  shortTitle: "ROI",
  description: "Calculate return on investment and annualized returns",
  category: "finance",
  icon: "📈",
  keywords: ["ROI", "return on investment", "investment return", "annualized return", "CAGR"],
});
