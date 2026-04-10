import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { INTEREST_FAQS } from "@/lib/faq-finance-loans";

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(10);
  const [compoundFrequency, setCompoundFrequency] = useState("12");

  const compoundOptions = [
    { value: "1", label: "Annually (1x/year)" },
    { value: "4", label: "Quarterly (4x/year)" },
    { value: "12", label: "Monthly (12x/year)" },
    { value: "365", label: "Daily (365x/year)" },
  ];

  const n = parseInt(compoundFrequency, 10);
  const r = annualRate / 100;
  const t = years;

  const finalAmount = principal * Math.pow(1 + r / n, n * t);
  const totalInterest = finalAmount - principal;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Final Amount"
        value={formatCurrency(finalAmount)}
        highlight={true}
      />
      <ResultCard
        label="Total Interest Earned"
        value={formatCurrency(totalInterest)}
        highlight={true}
      />
      <ResultCard
        label="Principal"
        value={formatCurrency(principal)}
      />
      <ResultCard
        label="Interest as % of Principal"
        value={formatNumber((totalInterest / principal) * 100) + "%"}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">The Power of Compound Interest</h3>
      <p>
        Compound interest is one of the most powerful forces in personal finance. It's the concept of earning "interest on interest" — your investment returns generate their own returns, creating exponential growth over time. The formula is: A = P(1 + r/n)^(nt), where A is final amount, P is principal, r is annual rate, n is compounding frequency per year, and t is years. Unlike simple interest (which only earns on principal), compound interest accelerates growth dramatically, especially over decades. A $10,000 investment at 8% for 30 years grows to $100,627 with compound interest, compared to $34,000 with simple interest.
      </p>
      <p>
        <strong>How Compounding Frequency Matters:</strong> The more frequently interest compounds, the higher your returns. Daily compounding yields slightly more than monthly, which yields more than annual. However, the differences are small for modest time periods. For example, $10,000 at 5% for 10 years: annual compounding yields $16,289, monthly compounds to $16,453, and daily compounds to $16,487 — a $198 difference. Over 40 years at the same rate, annual gives $70,400, monthly gives $74,205, and daily gives $74,576 — a difference of over $4,000. Longer time horizons amplify the effect of compounding frequency.
      </p>
      <p>
        <strong>The Rule of 72:</strong> A quick way to estimate doubling time is the Rule of 72: divide 72 by your annual return percentage. At 8% returns, money doubles in 72 ÷ 8 = 9 years. At 6%, it doubles in 12 years. This mental shortcut helps you quickly compare investments — an 8% return doubles money in 9 years, so in 36 years (four doublings), $1,000 becomes $16,000. This shows why starting early in investing is so valuable.
      </p>
      <p>
        <strong>Real-World Impact on Savings and Debt:</strong> Compound interest works in your favor for savings and investments but against you for debt. A $5,000 credit card balance at 18% APR grows rapidly — compounding daily, unpaid balances grow to roughly $24,000 in 10 years. Conversely, investing $5,000 at 8% returns grows to roughly $10,795 in 10 years. Time amplifies these differences. A 25-year-old investing $200/month at 8% returns until age 65 accumulates about $525,000 — mostly from compound growth. Waiting until age 35 to start yields only about $245,000.
      </p>
      <p>
        <strong>Maximizing Compound Growth:</strong> To harness compound interest effectively: (1) Start early — time is your biggest advantage, (2) Invest consistently — regular contributions smooth out market volatility, (3) Choose higher-yielding investments — stocks average 8-10%, bonds average 4-5%, savings accounts 0.5-5%, (4) Minimize fees — even 1% annual fees cost you hundreds of thousands over a career, (5) Reinvest dividends — don't spend returns; let them compound. The difference between 7% returns and 8% returns over 40 years is the difference between having $1.5 million and $2.2 million.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="Calculate compound interest with various compounding frequencies"
      slug="interest-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="principal"
          label="Principal Amount"
          value={principal}
          onChange={setPrincipal}
          prefix="$"
          min={0}
          step={100}
        />

        <InputField
          id="annual-rate"
          label="Annual Interest Rate"
          value={annualRate}
          onChange={setAnnualRate}
          suffix="%"
          min={0}
          max={50}
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

        <SelectField
          id="compound-frequency"
          label="Compound Frequency"
          value={compoundFrequency}
          onChange={setCompoundFrequency}
          options={compoundOptions}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InterestCalculator,
  slug: "interest-calculator",
  title: "Compound Interest Calculator",
  shortTitle: "Compound Interest",
  description:
    "Calculate compound interest with multiple compounding frequencies",
  category: "finance",
  icon: "💹",
  keywords: [
    "compound interest",
    "savings",
    "investment",
    "interest earned",
    "financial",
  ],
  dateModified: "2026-04-09",
  faqs: INTEREST_FAQS,
});
