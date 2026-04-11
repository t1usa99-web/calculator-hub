import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export default function NPVCalculator() {
  const [discountRate, setDiscountRate] = useState(10);
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [cashFlows, setCashFlows] = useState([20000, 25000, 30000, 35000, 25000]);

  // Calculate NPV
  let npv = -initialInvestment;
  const pvData = [];

  for (let year = 1; year <= cashFlows.length; year++) {
    const cf = cashFlows[year - 1];
    const discountFactor = Math.pow(1 + discountRate / 100, year);
    const pv = cf / discountFactor;
    npv += pv;

    pvData.push({
      year,
      cashFlow: cf,
      presentValue: pv,
      discountFactor: discountFactor,
    });
  }

  // Calculate IRR using Newton-Raphson method (approximation)
  let irr = 0;
  for (let r = 0; r <= 50; r += 0.01) {
    let testNpv = -initialInvestment;
    for (let year = 1; year <= cashFlows.length; year++) {
      testNpv += cashFlows[year - 1] / Math.pow(1 + r / 100, year);
    }
    if (testNpv < 0) {
      irr = r;
      break;
    }
  }

  // Profitability Index = PV of future cash flows / Initial Investment
  const pvFutureFlows = npv + initialInvestment;
  const profitabilityIndex = pvFutureFlows / initialInvestment;

  // Payback period (simple, not discounted)
  let paybackPeriod = 0;
  let cumulativeCashFlow = 0;
  for (let year = 0; year < cashFlows.length; year++) {
    cumulativeCashFlow += cashFlows[year];
    if (cumulativeCashFlow >= initialInvestment) {
      const remainingToRecover = initialInvestment - (cumulativeCashFlow - cashFlows[year]);
      paybackPeriod = year + remainingToRecover / cashFlows[year];
      break;
    }
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Net Present Value (NPV)"
        value={formatCurrency(npv)}
        highlight={npv > 0}
      />
      <ResultCard
        label="NPV Interpretation"
        value={npv > 0 ? "Profitable" : "Not profitable"}
      />
      <ResultCard label="Present Value of Cash Flows" value={formatCurrency(pvFutureFlows)} />
      <ResultCard label="Profitability Index" value={formatNumber(profitabilityIndex, 2)} />
      <ResultCard label="Internal Rate of Return (IRR)" value={formatPercent(irr / 100)} />
      <ResultCard label="Payback Period" value={formatNumber(paybackPeriod, 2) + " years"} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cash Flows and Present Values by Year</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={pvData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="cashFlow" fill="#3b82f6" name="Cash Flow" />
          <Bar dataKey="presentValue" fill="#10b981" name="Present Value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Net Present Value (NPV) is a fundamental technique in capital budgeting and investment analysis. It measures the profitability of a project by calculating the present value of all future cash flows minus the initial investment. A positive NPV indicates the project adds value and should be undertaken. NPV accounts for the time value of money, recognizing that a dollar today is worth more than a dollar tomorrow due to inflation and investment opportunities.
      </p>

      <p>
        <strong>NPV Calculation:</strong> NPV = -Initial Investment + Σ (Cash Flows / (1 + r)^year), where r is the discount rate. The discount rate represents your required return or cost of capital. Higher discount rates reduce the present value of future cash flows, making projects less attractive. By discounting future cash flows, NPV converts them to today's dollars, enabling fair comparison of projects with different timing and amounts.
      </p>

      <p>
        <strong>IRR and Profitability Index:</strong> The Internal Rate of Return (IRR) is the discount rate that makes NPV equal to zero. It represents the project's expected annual return rate. The Profitability Index (PI) is the present value of future cash flows divided by initial investment. A PI {'>'} 1 indicates positive NPV. These metrics help rank and prioritize projects. The payback period shows how long it takes to recover the initial investment, providing insight into risk and liquidity.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Corporations use NPV to evaluate capital investments like new equipment, facilities, or acquisitions. Government agencies use NPV to assess public projects like infrastructure. Investors use NPV to evaluate business opportunities and compare different investments. Real estate developers use NPV to evaluate property development projects. When discount rate assumptions are uncertain, conducting sensitivity analysis by testing different rates helps understand project risk and robustness.
      </p>
    </div>
  );

  const addCashFlow = () => {
    setCashFlows([...cashFlows, 20000]);
  };

  const removeCashFlow = (index: number) => {
    setCashFlows(cashFlows.filter((_, i) => i !== index));
  };

  const updateCashFlow = (index: number, value: number) => {
    const newFlows = [...cashFlows];
    newFlows[index] = value;
    setCashFlows(newFlows);
  };

  return (
    <CalculatorLayout
      title="NPV Calculator"
      description="Calculate net present value, IRR, and profitability index for investment projects"
      slug="npv-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="discount-rate"
          label="Discount Rate"
          value={discountRate}
          onChange={setDiscountRate}
          suffix="%"
          step={0.1}
          min={0}
          max={50}
        />
        <InputField
          id="initial-investment"
          label="Initial Investment"
          value={initialInvestment}
          onChange={setInitialInvestment}
          prefix="$"
          step={5000}
          min={0}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Cash Flows
          </label>
          <div className="space-y-2">
            {cashFlows.map((flow, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-sm text-gray-600 pt-2 w-12">Year {index + 1}:</span>
                <input
                  type="number"
                  value={flow}
                  onChange={(e) => updateCashFlow(index, parseFloat(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="$0"
                />
                <button
                  onClick={() => removeCashFlow(index)}
                  className="px-3 py-2 bg-red-100 text-red-700 rounded-md text-sm font-medium hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addCashFlow}
            className="mt-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200"
          >
            + Add Year
          </button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
          <p>
            <strong>Formula:</strong> NPV = -Initial Investment + Σ(CF_t / (1 + r)^t)
          </p>
          <p className="mt-2">
            where CF_t is cash flow in year t and r is the discount rate.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
