import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function MutualFundCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [expenseRatio, setExpenseRatio] = useState(0.5);
  const [years, setYears] = useState(20);

  const months = years * 12;
  const monthlyReturn = expectedReturn / 100 / 12;
  const monthlyFeeRate = expenseRatio / 100 / 12;

  // With fees
  let balanceWithFees = initialInvestment;
  let totalContributions = initialInvestment;

  for (let i = 0; i < months; i++) {
    balanceWithFees = balanceWithFees * (1 + monthlyReturn) - balanceWithFees * monthlyFeeRate + monthlyContribution;
    totalContributions += monthlyContribution;
  }

  // Without fees (same return rate as gross return)
  let balanceWithoutFees = initialInvestment;
  for (let i = 0; i < months; i++) {
    balanceWithoutFees = balanceWithoutFees * (1 + monthlyReturn) + monthlyContribution;
  }

  const grossGain = balanceWithoutFees - totalContributions;
  const netGain = balanceWithFees - totalContributions;
  const totalFeesPaid = balanceWithoutFees - balanceWithFees;
  const feeImpactPercent = (totalFeesPaid / balanceWithoutFees) * 100;

  // Build chart data year by year
  const chartData = [];
  let yearlyWithFees = initialInvestment;
  let yearlyWithoutFees = initialInvestment;

  for (let y = 0; y <= years; y++) {
    chartData.push({
      year: y,
      withFees: Math.round(yearlyWithFees),
      withoutFees: Math.round(yearlyWithoutFees),
    });

    for (let m = 0; m < 12 && y < years; m++) {
      yearlyWithFees = yearlyWithFees * (1 + monthlyReturn) - yearlyWithFees * monthlyFeeRate + monthlyContribution;
      yearlyWithoutFees = yearlyWithoutFees * (1 + monthlyReturn) + monthlyContribution;
    }
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Ending Balance (With Fees)"
        value={formatCurrency(balanceWithFees)}
        highlight={true}
      />
      <ResultCard
        label="Ending Balance (Without Fees)"
        value={formatCurrency(balanceWithoutFees)}
      />
      <ResultCard
        label="Total Invested"
        value={formatCurrency(totalContributions)}
      />
      <ResultCard
        label="Net Gain (With Fees)"
        value={formatCurrency(netGain)}
      />
      <ResultCard
        label="Total Fees Paid"
        value={formatCurrency(totalFeesPaid)}
      />
      <ResultCard
        label="Fee Impact on Returns"
        value={`${formatNumber(feeImpactPercent, 1)}%`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Growth Comparison: With vs. Without Fees</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Years", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Legend />
          <Line type="monotone" dataKey="withFees" stroke="#10b981" strokeWidth={2} name="With Fees" />
          <Line type="monotone" dataKey="withoutFees" stroke="#3b82f6" strokeWidth={2} name="Without Fees" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Mutual funds pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. Each investor owns a proportional share and benefits from professional management and diversification. However, mutual funds charge fees to cover operating costs, manager compensation, and distribution. Expense ratios (annual fees) vary widely: passive index funds charge 0.05-0.20%, active managed funds charge 0.5-2%, and specialized funds may charge 2%+. Over decades, these seemingly small percentage fees compound into significant dollar amounts.
      </p>

      <p>
        <strong>The Impact of Fees Over Time:</strong> This calculator shows the critical role fees play in long-term wealth building. A 1% annual fee might seem small, but on a $100,000 portfolio growing at 8% annually over 30 years, that 1% fee costs you over $300,000 in lost growth. Conversely, a 0.1% fee on the same portfolio costs only about $30,000. The difference between a 0.5% fund and a 1.5% fund over 30 years on a $50,000 initial investment with $500/month contributions is roughly $150,000-$200,000 in lost growth. This is why fee minimization is a cornerstone of wealth-building strategy.
      </p>

      <p>
        <strong>Active vs. Passive Investing:</strong> Active managers attempt to beat the market through research and stock-picking, charging higher fees (typically 1-2%). Studies show that most active funds underperform their benchmark after fees over 10-year periods. Passive index funds track a market benchmark with minimal fees (often under 0.2%), and consistently outperform most active funds. For most investors, low-cost index funds are the best choice. Active managers only make sense if you can find consistent outperformers and the fees are justified by performance.
      </p>

      <p>
        <strong>Cost-Effective Fund Selection:</strong> Choose funds with the lowest expense ratio consistent with your goals. For stock exposure, target index funds at 0.05-0.20% annual expense ratios. For bond exposure, target bond index funds at 0.05-0.15%. Avoid funds with 12b-1 fees (distribution fees), high turnover (causes tax inefficiency), and sales loads (front-end charges). Compare apples to apples: a growth index fund should be compared to other growth index funds, not to an active growth fund that claims superior management.
      </p>

      <p>
        <strong>Strategy for Minimizing Fee Impact:</strong> Invest regularly (dollar-cost averaging) with automatic contributions. Use tax-advantaged accounts (401k, IRA) where possible to defer taxes. Rebalance periodically to maintain your target allocation, but minimize trading (which triggers fees and taxes). Avoid frequently switching funds. Over 20-30 years, the difference between a 0.5% fund and a 1.5% fund can exceed $200,000 on moderate initial investment. Every 0.1% matters; prioritize low-fee options.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Mutual Fund Calculator"
      description="Compare mutual fund growth with and without expense fees"
      slug="mutual-fund-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-investment"
          label="Initial Investment"
          value={initialInvestment}
          onChange={setInitialInvestment}
          prefix="$"
          min={0}
          step={1000}
          max={1000000}
        />
        <InputField
          id="monthly-contribution"
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          prefix="$"
          min={0}
          step={50}
          max={10000}
        />
        <InputField
          id="expected-return"
          label="Expected Annual Return"
          value={expectedReturn}
          onChange={setExpectedReturn}
          suffix="%"
          min={0}
          step={0.5}
          max={30}
        />
        <InputField
          id="expense-ratio"
          label="Expense Ratio (Annual Fee)"
          value={expenseRatio}
          onChange={setExpenseRatio}
          suffix="%"
          min={0}
          step={0.05}
          max={5}
        />
        <InputField
          id="years"
          label="Investment Period"
          value={years}
          onChange={setYears}
          suffix="years"
          min={1}
          step={1}
          max={50}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: MutualFundCalculator,
  slug: "mutual-fund-calculator",
  title: "Mutual Fund Calculator",
  shortTitle: "Mutual Fund",
  description: "Calculate mutual fund growth and compare the impact of expense ratios on returns",
  category: "finance",
  icon: "📈",
  keywords: ["mutual fund", "expense ratio", "fund fees", "investment fees", "mutual fund returns"],
  popular: true,
  faqs: [
    {
      question: "What's a typical expense ratio?",
      answer: "Index funds typically charge 0.05-0.20% annually. Active managed funds charge 0.5-2%. Specialized or small funds may charge 2%+. Lower is better; every 0.1% difference compounds significantly over decades. Favor funds under 0.5%."
    },
    {
      question: "Can I avoid fees by buying and holding?",
      answer: "Partially. You avoid trading fees (commissions) by holding long-term, but expense ratios are charged annually regardless of holding period. Over 30 years, annual fees dwarf one-time trading fees. Choose low-fee funds and hold them."
    },
    {
      question: "Are mutual funds better than index funds?",
      answer: "Most mutual funds underperform index funds after fees. Studies consistently show 80-90% of active managers fail to beat their benchmark over 10+ years. Index funds offer diversification, lower fees, and tax efficiency. For most investors, index funds are the better choice."
    },
    {
      question: "How do 12b-1 fees work?",
      answer: "12b-1 fees are distribution and marketing fees (up to 1% annually) baked into expense ratios. They benefit the fund company, not investors. Avoid funds with 12b-1 fees if alternatives exist; they reduce your returns with no additional value to you."
    },
    {
      question: "Should I prioritize higher returns or lower fees?",
      answer: "Low fees. You can't control returns—markets are unpredictable—but you can control fees. Minimizing fees ensures more of your money compounds in your account. A 0.1% fee fund may outperform a 1% fund even with identical gross returns."
    }
  ],
  dateModified: "2026-04-10",
});
