import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function PresentValueCalculator() {
  const [futureValue, setFutureValue] = useState(100000);
  const [discountRate, setDiscountRate] = useState(5);
  const [years, setYears] = useState(10);

  // PV = FV / (1 + r)^n
  const presentValue =
    futureValue / Math.pow(1 + discountRate / 100, years);
  const discountAmount = futureValue - presentValue;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Present Value"
        value={formatCurrency(presentValue)}
        highlight={true}
      />
      <ResultCard
        label="Discount Amount"
        value={formatCurrency(discountAmount)}
        highlight={true}
      />
      <ResultCard
        label="Future Value"
        value={formatCurrency(futureValue)}
      />
      <ResultCard
        label="Discount as % of Future Value"
        value={formatNumber((discountAmount / futureValue) * 100) + "%"}
      />
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Present Value and Investment Decisions
      </h3>
      <p>
        Present value converts future dollars into today's money, answering the critical question: how much should I pay today for a future cash flow? The formula is <strong>PV = FV / (1 + r)ⁿ</strong>, where FV is the future amount, r is the discount rate (your required return), and n is years. For example, receiving $50,000 in 10 years is worth only $27,921 today at a 6% discount rate. This reflects the opportunity cost: if you had $27,921 today, you could invest it at 6% and reach $50,000 in 10 years. Present value is fundamental to investment decisions, business valuations, and loan pricing.
      </p>
      <p>
        <strong>Discount rate selection:</strong> The discount rate reflects your required return or opportunity cost—essentially, "what return do I need to make this investment worthwhile?" Safe investments use lower rates (Treasury bonds at 3-4%), while risky investments require higher rates (stocks at 8-12%, startups at 20%+). Higher discount rates significantly reduce present value: $100,000 received in 20 years is worth $15,130 at 12% discount rate but $30,656 at 6% rate—a $15,526 difference. This demonstrates why choosing the correct discount rate is critical; overestimating your required return rejects potentially good investments, while underestimating accepts poor ones.
      </p>
      <p>
        <strong>Investment evaluation:</strong> Calculate net present value (NPV) for real estate, business, or major investments. Project all expected cash flows (conservatively), discount each at your required return, and sum them. If NPV is positive, the investment exceeds your return requirement. Real estate generating $15,000 annual rent for 20 years costs $200,000 today. At 6% discount rate, PV of cash flows is $172,050, yielding −$27,950 NPV—not worthwhile. At 5% rate, NPV becomes +$20,000, making it attractive. This analysis prevents overpaying and reveals true investment value beyond nominal numbers.
      </p>
      <p>
        <strong>Comparing options:</strong> Present value helps evaluate competing offers. Selling a business for $500,000 today versus $600,000 in 5 years: at 8% discount rate, the future payment's present value is $408,600, making the current offer preferable. Similarly, compare job offers: $50,000 salary starting today versus $55,000 starting in 2 years reflects present value considerations. Time value of money means earlier cash flows are always worth more than later ones—patience has a cost.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Present Value Calculator"
      description="Calculate what a future amount is worth in today's money"
      slug="present-value-calculator"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="future-value"
          label="Future Value"
          value={futureValue}
          onChange={setFutureValue}
          prefix="$"
          min={0}
          step={1000}
        />

        <InputField
          id="discount-rate"
          label="Discount Rate (Annual)"
          value={discountRate}
          onChange={setDiscountRate}
          suffix="%"
          min={0}
          max={50}
          step={0.1}
          hint="Rate of return or inflation used for discounting"
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
