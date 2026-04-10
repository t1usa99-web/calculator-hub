import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PaybackPeriodCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [annualCashFlow, setAnnualCashFlow] = useState(20000);
  const [discountRate, setDiscountRate] = useState(10);
  const [projectYears, setProjectYears] = useState(10);

  // Simple payback period
  const simplePaybackYears = initialInvestment / annualCashFlow;
  const simplePaybackMonths = (simplePaybackYears % 1) * 12;

  // Cumulative cash flow for chart
  const chartData = [];
  let cumulativeCashFlow = -initialInvestment;
  let discountedCumulativeCashFlow = -initialInvestment;
  let paybackYearFound = false;
  let discountedPaybackYearFound = false;

  for (let year = 0; year <= projectYears; year++) {
    if (year > 0) {
      cumulativeCashFlow += annualCashFlow;
      const discountFactor = Math.pow(1 + discountRate / 100, -year);
      discountedCumulativeCashFlow += annualCashFlow * discountFactor;
    }

    // Find payback years
    if (!paybackYearFound && cumulativeCashFlow >= 0) {
      paybackYearFound = true;
    }
    if (!discountedPaybackYearFound && discountedCumulativeCashFlow >= 0) {
      discountedPaybackYearFound = true;
    }

    chartData.push({
      year,
      simpleCumulative: cumulativeCashFlow,
      discountedCumulative: discountedCumulativeCashFlow,
    });
  }

  // Calculate precise payback periods
  let precisePaybackYear = 0;
  let preciseDCPaybackYear = 0;
  let simpleCumulative = -initialInvestment;
  let discountedCumulative = -initialInvestment;

  for (let year = 1; year <= projectYears; year++) {
    simpleCumulative += annualCashFlow;
    const discountFactor = Math.pow(1 + discountRate / 100, -year);
    discountedCumulative += annualCashFlow * discountFactor;

    if (simpleCumulative >= 0 && precisePaybackYear === 0) {
      const previousCumulative = simpleCumulative - annualCashFlow;
      precisePaybackYear = year - 1 + Math.abs(previousCumulative) / annualCashFlow;
    }
    if (discountedCumulative >= 0 && preciseDCPaybackYear === 0) {
      const previousDiscounted = discountedCumulative - annualCashFlow * Math.pow(1 + discountRate / 100, -year);
      preciseDCPaybackYear = year - 1 + Math.abs(previousDiscounted) / (annualCashFlow * Math.pow(1 + discountRate / 100, -year));
    }
  }

  const netPresentValue = chartData[projectYears]?.discountedCumulative || 0;
  const profitabilityIndex = (netPresentValue + initialInvestment) / initialInvestment;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Initial Investment"
        value={formatCurrency(initialInvestment)}
      />
      <ResultCard
        label="Annual Cash Flow"
        value={formatCurrency(annualCashFlow)}
      />
      <ResultCard
        label="Simple Payback Period"
        value={`${Math.floor(precisePaybackYear)} years, ${Math.floor((precisePaybackYear % 1) * 12)} months`}
        highlight
        subtext="Before discounting for time value of money"
      />
      <ResultCard
        label="Discounted Payback Period"
        value={`${Math.floor(preciseDCPaybackYear)} years, ${Math.floor((preciseDCPaybackYear % 1) * 12)} months`}
        highlight
        subtext={`At ${discountRate}% discount rate`}
      />
      <ResultCard
        label="Net Present Value (NPV)"
        value={formatCurrency(netPresentValue)}
        highlight={netPresentValue > 0}
        subtext={netPresentValue > 0 ? "Project adds value" : "Project destroys value"}
      />
      <ResultCard
        label="Profitability Index"
        value={formatNumber(profitabilityIndex, 2)}
        subtext={profitabilityIndex > 1 ? "Value for each $ invested" : "Return ratio"}
      />
      <ResultCard
        label="Total Cash Flow (10 years)"
        value={formatCurrency(annualCashFlow * projectYears)}
        subtext="Before discounting"
      />
      <ResultCard
        label="Discount Rate"
        value={`${discountRate}%`}
        subtext="Cost of capital / opportunity cost"
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cumulative Cash Flow Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Cumulative Cash Flow ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line type="monotone" dataKey="simpleCumulative" stroke="#3b82f6" name="Simple Payback" />
          <Line type="monotone" dataKey="discountedCumulative" stroke="#8b5cf6" name="Discounted Payback" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Payback period is the time it takes for an investment to return its initial cost through cash flows. A {formatCurrency(100000)} investment generating {formatCurrency(20000)} annually has a 5-year simple payback period. Payback period is simple and intuitive for evaluating investments: shorter payback is better (faster recovery). However, simple payback ignores the time value of money (a {formatCurrency(1)} today is worth more than {formatCurrency(1)} in 5 years) and ignores cash flows after payback. Discounted payback period corrects this by accounting for a discount rate (cost of capital).
      </p>

      <p>
        <strong>Simple vs. Discounted Payback:</strong> Simple payback divides initial investment by annual cash flow. {formatCurrency(100000)} ÷ {formatCurrency(20000)} = 5 years. Discounted payback applies a discount rate (e.g., 10%) to future cash flows, reducing their present value. At 10% discount, Year 5's {formatCurrency(20000)} is worth only {formatCurrency(12418)} today. Discounted payback is longer (more realistic) because money in the future is worth less. If simple payback is 5 years and discounted payback is 6.5 years, the investment takes 1.5 extra years to recover when accounting for the time value of money.
      </p>

      <p>
        <strong>Time Value of Money and Discount Rate:</strong> A discount rate reflects the opportunity cost—the return you could earn elsewhere. At 10% discount, you're saying "I could earn 10% investing elsewhere." Discounted cash flows at 10% are smaller because they're adjusted for this opportunity cost. A {formatCurrency(20000)} cash flow in Year 5 at 10% discount is {formatCurrency(12418)} (discounted). If the project only returns {formatCurrency(12000)}, it's actually destroying value because you'd earn more investing at 10% elsewhere.
      </p>

      <p>
        <strong>When to Use Payback Period:</strong> Payback period is best for evaluating risk in short-term projects or high-uncertainty environments (startups, new markets). A 2-year payback is lower risk than a 10-year payback because assumptions are more certain. However, payback alone is incomplete: Net Present Value (NPV) and Internal Rate of Return (IRR) are more comprehensive for capital budgeting. Use payback as one of multiple metrics. Accept projects with payback shorter than your required payback period and positive NPV.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Payback Period Calculator"
      description="Calculate simple and discounted payback periods for investment evaluation"
      slug="payback-period-calculator"
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
          step={10000}
          min={1000}
        />
        <InputField
          id="annual-cash-flow"
          label="Annual Cash Flow"
          value={annualCashFlow}
          onChange={setAnnualCashFlow}
          prefix="$"
          step={5000}
          min={100}
          hint="Assume constant annual inflows"
        />
        <InputField
          id="discount-rate"
          label="Discount Rate (Cost of Capital)"
          value={discountRate}
          onChange={setDiscountRate}
          suffix="%"
          step={0.5}
          min={0}
          max={25}
          hint="Your opportunity cost (required return)"
        />
        <InputField
          id="project-years"
          label="Project Analysis Period"
          value={projectYears}
          onChange={setProjectYears}
          suffix="years"
          step={1}
          min={1}
          max={30}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PaybackPeriodCalculator,
  slug: "payback-period-calculator",
  title: "Payback Period Calculator",
  shortTitle: "Payback Period",
  description: "Calculate simple and discounted payback periods and NPV for investment decisions",
  category: "finance",
  icon: "⏱️",
  keywords: ["payback period", "investment", "NPV", "capital budgeting", "cash flow", "ROI"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is payback period and why does it matter?",
      answer: "Payback period is the time required for cumulative cash flows to equal your initial investment. A {formatCurrency(100000)} investment generating {formatCurrency(20000)}/year has a 5-year payback. It matters because shorter payback means faster capital recovery and lower risk (fewer assumptions needed). However, payback alone is incomplete: it ignores cash flows after payback and doesn't account for time value of money. Use payback with NPV and IRR for comprehensive evaluation.",
    },
    {
      question: "What is discounted payback period and how does it differ from simple payback?",
      answer: "Simple payback ignores when money is received ({{formatCurrency(1)} in Year 1 = {formatCurrency(1)} in Year 5). Discounted payback applies a discount rate (your required return) to future cash flows. At 10% discount, {{formatCurrency(20000)} in Year 5 is worth only {{formatCurrency(12418)} today. Discounted payback is longer and more realistic. If simple payback is 5 years but discounted is 7 years, it actually takes 2 extra years to recover your investment accounting for time value of money.",
    },
    {
      question: "What discount rate should I use?",
      answer: "The discount rate is your <strong>cost of capital</strong> or <strong>required return</strong>. Options: (1) Your cost of borrowed money (bank loan rate, corporate bond yield). (2) Your opportunity cost (return you could earn elsewhere). (3) A hurdle rate set by your company (minimum acceptable return). (4) Market average return (S&P 500 ~10%). Most companies use 8-12%. Higher discount rate means you're more demanding (you require higher returns), making projects less attractive.",
    },
    {
      question: "Should I accept a project based on payback period?",
      answer: "Use payback as <strong>one of multiple criteria</strong>. General rules: (1) Shorter payback is better (faster capital recovery). (2) Accept projects where discounted payback {less than} your acceptable payback (e.g., {less than} 3 years). (3) Accept projects where NPV {greater than} 0 and IRR {greater than} discount rate. (4) For high-risk/early-stage projects, shorter payback is more important (reduce uncertainty). For mature businesses, NPV and IRR matter more. Don't rely on payback alone.",
    },
    {
      question: "What does a negative NPV or NPV {greater than} payback cutoff mean?",
      answer: "Negative NPV means the project destroys value: cumulative discounted cash flows never recover the initial investment. <strong>Reject this project</strong>. Positive NPV means the project creates value and should be accepted. If your payback cutoff is 3 years but discounted payback is 5 years, the project may still add value (positive NPV) but takes longer to break even. You decide based on risk tolerance: short payback = lower risk, long payback = higher risk but potentially higher NPV.",
    },
  ],
});
