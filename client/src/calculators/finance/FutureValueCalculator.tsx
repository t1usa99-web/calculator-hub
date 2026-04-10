import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { FUTURE_VALUE_FAQS } from "@/lib/faq-finance-invest";

export default function FutureValueCalculator() {
  const [presentValue, setPresentValue] = useState(50000);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [monthlyContribution, setMonthlyContribution] = useState(500);

  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;

  // FV = PV * (1 + r)^n + PMT * (((1 + r)^n - 1) / r)
  let fv = 0;
  if (monthlyRate === 0) {
    fv = presentValue + monthlyContribution * months;
  } else {
    const pvFv = presentValue * Math.pow(1 + monthlyRate, months);
    const pmt =
      monthlyContribution *
      (Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate;
    fv = pvFv + pmt;
  }

  const totalContributions =
    presentValue + monthlyContribution * months;
  const totalGrowth = fv - totalContributions;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Future Value"
        value={formatCurrency(fv)}
        highlight={true}
      />
      <ResultCard
        label="Total Growth"
        value={formatCurrency(totalGrowth)}
        highlight={true}
      />
      <ResultCard
        label="Total Contributions"
        value={formatCurrency(totalContributions)}
      />
      <ResultCard
        label="Growth as % of Contributions"
        value={formatNumber((totalGrowth / totalContributions) * 100) + "%"}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Future Value and Compound Growth
      </h3>
      <p>
        Future value calculations show how money grows over time through investing. The fundamental formula is <strong>FV = PV × (1 + r)ⁿ</strong>, where PV is your initial investment, r is the annual return rate, and n is the number of years. Understanding this principle reveals why starting to invest early makes such an enormous difference in long-term wealth accumulation. A dollar invested today grows exponentially, not linearly—the first years contribute a small amount, but later years generate dramatically larger returns due to compounding effects.
      </p>
      <p>
        <strong>Compounding frequency matters:</strong> The more frequently interest compounds (daily vs. annually), the more you earn. Most savings accounts compound daily, while investment returns typically compound quarterly or annually. Regular monthly contributions amplify growth significantly beyond lump-sum investing. Adding $500/month for 20 years at 7% returns yields roughly $278,000, with $120,000 coming from investment growth and interest. The same $120,000 invested as a lump sum only grows to $232,000 without the additional contributions, highlighting the power of consistent, disciplined saving.
      </p>
      <p>
        <strong>Rate of return is critical:</strong> A seemingly small difference in annual returns compounds into substantial variations. An investment earning 6% annually becomes $322,000 in 20 years (assuming $500/month contributions), while 8% returns yield $366,000—a $44,000 difference from just 2% higher returns. This demonstrates why selecting appropriate investments with suitable risk-adjusted returns is essential. However, always account for inflation; a 7% nominal return minus 3% inflation equals 4% real growth in purchasing power.
      </p>
      <p>
        <strong>Planning and flexibility:</strong> Use future value calculations for retirement planning, major purchase goals, education savings, or business planning. Adjust the time period to see how delaying investments impacts outcomes: starting at 25 versus 35 shows vastly different retirement balances. Changes in contribution amounts, return rates, and time horizons reveal sensitivity: more aggressive investors targeting higher returns need to balance that with market risk and potential volatility.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Future Value Calculator"
      description="Calculate the future value of investments with regular contributions"
      slug="future-value-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="present-value"
          label="Initial Investment"
          value={presentValue}
          onChange={setPresentValue}
          prefix="$"
          min={0}
          step={1000}
        />

        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          min={0}
          step={50}
        />

        <InputField
          id="annual-rate"
          label="Annual Return Rate"
          value={annualRate}
          onChange={setAnnualRate}
          suffix="%"
          min={0}
          max={30}
          step={0.1}
        />

        <InputField
          id="years"
          label="Time Period"
          value={years}
          onChange={setYears}
          suffix="years"
          min={0}
          max={100}
          step={0.5}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: FutureValueCalculator,
  faqs: FUTURE_VALUE_FAQS,
  slug: "future-value-calculator",
  title: "Future Value Calculator",
  shortTitle: "Future Value",
  description:
    "Calculate future value with compound interest and regular contributions",
  category: "finance",
  icon: "🔮",
  keywords: [
    "future value",
    "investment",
    "compound interest",
    "savings growth",
    "retirement planning",
  ],
  dateModified: "2026-04-09",
});
