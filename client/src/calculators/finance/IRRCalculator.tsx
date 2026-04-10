import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function IRRCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [year1, setYear1] = useState(30000);
  const [year2, setYear2] = useState(30000);
  const [year3, setYear3] = useState(30000);
  const [year4, setYear4] = useState(30000);
  const [year5, setYear5] = useState(30000);

  const cashFlows = [
    -initialInvestment,
    year1,
    year2,
    year3,
    year4,
    year5,
  ];

  // Calculate IRR using Newton's method
  const calculateIRR = (cfs: number[]): number => {
    let rate = 0.1; // Start guess at 10%

    for (let i = 0; i < 100; i++) {
      // NPV function
      let npv = 0;
      let npvDerivative = 0;

      for (let year = 0; year < cfs.length; year++) {
        npv += cfs[year] / Math.pow(1 + rate, year);
        if (year > 0) {
          npvDerivative -= (year * cfs[year]) / Math.pow(1 + rate, year + 1);
        }
      }

      // Newton's method: rate = rate - npv / npvDerivative
      const newRate = rate - npv / npvDerivative;

      if (Math.abs(newRate - rate) < 0.000001) {
        return newRate;
      }

      rate = newRate;
    }

    return rate;
  };

  const irr = calculateIRR(cashFlows);

  // Calculate NPVs at various discount rates
  const calculateNPV = (cfs: number[], discountRate: number): number => {
    let npv = 0;
    for (let year = 0; year < cfs.length; year++) {
      npv += cfs[year] / Math.pow(1 + discountRate, year);
    }
    return npv;
  };

  const npvChartData = [];
  for (let rate = -0.1; rate <= 0.4; rate += 0.02) {
    npvChartData.push({
      rate: formatNumber(rate * 100, 0),
      npv: calculateNPV(cashFlows, rate),
    });
  }

  const npvAt10 = calculateNPV(cashFlows, 0.1);
  const npvAt20 = calculateNPV(cashFlows, 0.2);

  // Total cash flows
  const totalCashInflows = year1 + year2 + year3 + year4 + year5;
  const totalProfit = totalCashInflows - initialInvestment;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Initial Investment"
        value={formatCurrency(initialInvestment)}
      />
      <ResultCard
        label="Total Cash Inflows (5 years)"
        value={formatCurrency(totalCashInflows)}
      />
      <ResultCard
        label="Net Profit"
        value={formatCurrency(totalProfit)}
        subtext="Total inflows minus initial investment"
      />
      <ResultCard
        label="Internal Rate of Return (IRR)"
        value={formatPercent(irr)}
        highlight
        subtext="The discount rate where NPV = 0"
      />
      <ResultCard
        label="NPV at 10% Discount Rate"
        value={formatCurrency(npvAt10)}
        highlight={npvAt10 > 0}
        subtext={npvAt10 > 0 ? "Project adds value" : "Project destroys value"}
      />
      <ResultCard
        label="NPV at 20% Discount Rate"
        value={formatCurrency(npvAt20)}
        highlight={npvAt20 > 0}
        subtext={npvAt20 > 0 ? "Project adds value" : "Project destroys value"}
      />
      <ResultCard
        label="Payback Period (Simple)"
        value={`${Math.ceil(initialInvestment / (totalCashInflows / 5))} years`}
        subtext="Assumes equal annual cash flows"
      />
      <ResultCard
        label="Accept/Reject Criteria"
        value={irr > 0.15 ? "Accept" : "Evaluate further"}
        subtext={`IRR ${formatPercent(irr)} vs. typical 15% hurdle`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">NPV at Various Discount Rates</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={npvChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rate" label={{ value: "Discount Rate (%)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "NPV ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Line type="monotone" dataKey="npv" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Internal Rate of Return (IRR) is the discount rate at which Net Present Value (NPV) equals zero. It represents the annualized return of an investment. A project with an IRR of 18% means the investment returns 18% annually. An investment with an IRR of 18% is better than a 10% IRR. IRR is popular because it's a single percentage that's easy to understand and compare across projects. However, IRR has limitations: it assumes cash flows are reinvested at the IRR (unrealistic), can give multiple solutions for unusual cash flow patterns, and can be misleading for projects with different scales or timings.
      </p>

      <p>
        <strong>How IRR Works:</strong> IRR is calculated by solving for the discount rate (r) where NPV = 0. Using the formula: 0 = {`{-100,000 + 30,000/(1+r) + 30,000/(1+r)² + ... + 30,000/(1+r)⁵}`}, solving for r gives the IRR. This calculator uses Newton's method to find IRR. An IRR of 18% means the investment breaks even in present value terms when discounted at 18%, indicating an 18% annualized return. Compare IRR to your hurdle rate (required return): if IRR {'>'} hurdle, accept the project.
      </p>

      <p>
        <strong>IRR vs. NPV:</strong> NPV tells you dollar value added (absolute); IRR tells you percentage return (relative). A {formatCurrency(100000)} investment returning {formatCurrency(20000)} annually for 5 years has an IRR of ~11%. At 10% discount rate, NPV = {formatCurrency(5780)} (project adds value). At 20% discount rate, NPV = {formatCurrency(11200)} (project destroys value). Use both: NPV for absolute value creation, IRR for percentage return and easier comparison. If NPV and IRR conflict (rare), NPV is more reliable.
      </p>

      <p>
        <strong>IRR Limitations:</strong> IRR assumes reinvestment of cash flows at the IRR rate, which is unrealistic—you likely reinvest at lower rates. IRR can give multiple solutions if cash flows change sign multiple times (outflows, then inflows, then outflows). IRR doesn't account for project scale: a {formatCurrency(1000)} investment with 50% IRR creates {formatCurrency(500)} profit; a {formatCurrency(1000000)} investment with 15% IRR creates {formatCurrency(150000)} profit (better). For these reasons, use IRR alongside NPV and payback period. IRR is a tool, not the only decision metric.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Internal Rate of Return (IRR) Calculator"
      description="Calculate IRR and NPV for investment decision-making"
      slug="irr-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-investment"
          label="Initial Investment (Year 0)"
          value={initialInvestment}
          onChange={setInitialInvestment}
          prefix="$"
          step={10000}
          min={1000}
        />

        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-3">Annual Cash Inflows</h4>
          <InputField
            id="year-1"
            label="Year 1"
            value={year1}
            onChange={setYear1}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="year-2"
            label="Year 2"
            value={year2}
            onChange={setYear2}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="year-3"
            label="Year 3"
            value={year3}
            onChange={setYear3}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="year-4"
            label="Year 4"
            value={year4}
            onChange={setYear4}
            prefix="$"
            step={5000}
            min={0}
          />
          <InputField
            id="year-5"
            label="Year 5"
            value={year5}
            onChange={setYear5}
            prefix="$"
            step={5000}
            min={0}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: IRRCalculator,
  slug: "irr-calculator",
  title: "Internal Rate of Return (IRR) Calculator",
  shortTitle: "IRR",
  description: "Calculate IRR and NPV for investment and capital budgeting analysis",
  category: "finance",
  icon: "📊",
  keywords: ["IRR", "internal rate of return", "NPV", "investment", "return", "capital budgeting"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is IRR and how is it calculated?",
      answer: "IRR (Internal Rate of Return) is the discount rate at which Net Present Value = 0. It represents the annualized percentage return of an investment. To calculate: solve for the rate (r) in the equation: 0 = {{Initial Investment}} + {{Year 1 CF}} / (1+r) + {{Year 2 CF}} / (1+r)² + ... . This calculator uses Newton's method (iterative approximation). An IRR of 18% means the investment returns 18% annually. Higher IRR is better, as long as it exceeds your cost of capital.",
    },
    {
      question: "What is the difference between IRR and NPV?",
      answer: "<strong>NPV (Net Present Value):</strong> Dollar amount of value created at a given discount rate. Shows absolute profit. <strong>IRR:</strong> Percentage return earned on the investment. Shows relative profitability. Example: {{formatCurrency(100000)}} investment returning {{formatCurrency(30000)}} annually for 5 years has IRR ~18%. At 10% discount rate, NPV = {{formatCurrency(13794)}} (adds value). Use both: NPV shows dollars added, IRR shows percentage return. Accept projects where NPV {greater than} 0 and IRR {greater than} hurdle rate.",
    },
    {
      question: "Should I accept a project based on IRR alone?",
      answer: "No, IRR should be one of multiple criteria. Accept projects where: (1) IRR {greater than} your hurdle rate (required return), AND (2) NPV {greater than} 0. IRR has limitations: it assumes reinvestment at the IRR (unrealistic), can give multiple solutions for unconventional cash flows, and ignores project scale. A {{formatCurrency(1000)}} investment with 50% IRR creates {{formatCurrency(500)}} profit; a {{formatCurrency(1000000)}} investment with 15% IRR creates {{formatCurrency(150000)}} profit (better overall). Use IRR with NPV and payback period.",
    },
    {
      question: "What is a good IRR and what hurdle rate should I use?",
      answer: "<strong>Good IRR depends on industry and risk.</strong> S&P 500 averages 10% annually; Corporate bonds ~5%; Risk-free rate (Treasury) ~5%. Use your hurdle rate as the cutoff: (1) If cost of capital is 10%, require IRR {greater than} 10%. (2) If risk is high (startup), require IRR {greater than} 25-30%. (3) If risk is low (utility), require IRR {greater than} 8-12%. A real estate investment with 12% IRR is good; a venture capital investment with 12% IRR is poor. Set hurdle rate based on risk and opportunity cost.",
    },
    {
      question: "What are the limitations of using IRR for investment decisions?",
      answer: "IRR limitations: (1) Assumes reinvestment at IRR rate (unrealistic—you likely reinvest at lower rates). (2) Can produce multiple IRRs for unconventional cash flows (negative, positive, negative). (3) Ignores project scale: high IRR on small investment may create less value than lower IRR on large investment. (4) Ignores reinvestment risk and timing. (5) Sensitive to terminal cash flows. Use IRR alongside NPV (absolute value), payback period (risk), and qualitative factors. For comprehensive analysis, NPV is theoretically superior.",
    },
  ],
});
