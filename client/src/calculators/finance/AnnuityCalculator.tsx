import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";
import { ANNUITY_FAQS } from "@/lib/faq-finance-invest";

export default function AnnuityCalculator() {
  const [periodicPayment, setPeriodicPayment] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [numPeriods, setNumPeriods] = useState(240);
  const [annuityType, setAnnuityType] = useState("ordinary");

  // Calculate annuity values
  const ratePerPeriod = interestRate / 100;

  // Present Value of Ordinary Annuity
  // PV = PMT × [(1 - (1 + r)^(-n)) / r]
  let presentValue = 0;
  if (ratePerPeriod === 0) {
    presentValue = periodicPayment * numPeriods;
  } else {
    presentValue = periodicPayment * ((1 - Math.pow(1 + ratePerPeriod, -numPeriods)) / ratePerPeriod);
  }

  // Adjust for annuity due (payment at beginning of period)
  // PV = PV × (1 + r)
  if (annuityType === "due") {
    presentValue = presentValue * (1 + ratePerPeriod);
  }

  // Future Value of Ordinary Annuity
  // FV = PMT × [((1 + r)^n - 1) / r]
  let futureValue = 0;
  if (ratePerPeriod === 0) {
    futureValue = periodicPayment * numPeriods;
  } else {
    futureValue = periodicPayment * ((Math.pow(1 + ratePerPeriod, numPeriods) - 1) / ratePerPeriod);
  }

  // Adjust for annuity due
  if (annuityType === "due") {
    futureValue = futureValue * (1 + ratePerPeriod);
  }

  const totalPaymentsIn = periodicPayment * numPeriods;
  const totalInterestEarned = futureValue - totalPaymentsIn;
  const totalInterestInPV = (presentValue - totalPaymentsIn) * -1;

  // Generate year-by-year accumulation table
  const accumulationData = [];
  for (let period = 0; period <= numPeriods; period += Math.max(1, Math.ceil(numPeriods / 50))) {
    let pvAtPeriod = 0;
    let fvAtPeriod = 0;

    if (period === 0) {
      pvAtPeriod = 0;
      fvAtPeriod = 0;
    } else {
      if (ratePerPeriod === 0) {
        pvAtPeriod = periodicPayment * period;
        fvAtPeriod = periodicPayment * period;
      } else {
        const factor = (1 - Math.pow(1 + ratePerPeriod, -period)) / ratePerPeriod;
        pvAtPeriod = annuityType === "due" ? periodicPayment * factor * (1 + ratePerPeriod) : periodicPayment * factor;

        const fvFactor = (Math.pow(1 + ratePerPeriod, period) - 1) / ratePerPeriod;
        fvAtPeriod = annuityType === "due" ? periodicPayment * fvFactor * (1 + ratePerPeriod) : periodicPayment * fvFactor;
      }
    }

    accumulationData.push({
      period,
      pv: pvAtPeriod,
      fv: fvAtPeriod,
    });
  }

  // Comparison of different periodic payments
  const payments = [500, 1000, 1500, 2000, 2500];
  const paymentComparison = payments.map((pmt) => {
    let pv = 0;
    let fv = 0;
    if (ratePerPeriod === 0) {
      pv = pmt * numPeriods;
      fv = pmt * numPeriods;
    } else {
      const factor = (1 - Math.pow(1 + ratePerPeriod, -numPeriods)) / ratePerPeriod;
      pv = annuityType === "due" ? pmt * factor * (1 + ratePerPeriod) : pmt * factor;

      const fvFactor = (Math.pow(1 + ratePerPeriod, numPeriods) - 1) / ratePerPeriod;
      fv = annuityType === "due" ? pmt * fvFactor * (1 + ratePerPeriod) : pmt * fvFactor;
    }
    return {
      payment: pmt,
      pv,
      fv,
    };
  });

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Present Value" value={formatCurrency(presentValue)} highlight />
      <ResultCard label="Future Value" value={formatCurrency(futureValue)} highlight />
      <ResultCard label="Periodic Payment" value={formatCurrency(periodicPayment)} />
      <ResultCard label="Total Payments In" value={formatCurrency(totalPaymentsIn)} />
      <ResultCard label="Interest Earned" value={formatCurrency(totalInterestEarned)} highlight={totalInterestEarned > 0} />
      <ResultCard label="Number of Periods" value={`${numPeriods} periods`} />
      <ResultCard label="Interest Rate" value={`${interestRate}% per period`} />
      <ResultCard label="Annuity Type" value={annuityType === "ordinary" ? "Ordinary (end of period)" : "Due (start of period)"} />
    </div>
  );

  const chart = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Annuity Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={accumulationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" label={{ value: "Period", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Value ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#3b82f6" strokeWidth={2} name="Present Value" />
            <Line type="monotone" dataKey="fv" stroke="#10b981" strokeWidth={2} name="Future Value" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Future Value at Different Payments</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={paymentComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="payment" label={{ value: "Payment Amount ($)", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Future Value ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Bar dataKey="fv" fill="#10b981">
              {paymentComparison.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#10b981" : "#3b82f6"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        An annuity is a financial product that involves a series of equal payments made at regular intervals (monthly, quarterly, yearly, etc.). Annuities are commonly used in pensions, structured settlements, and investment savings plans. Understanding how annuities work is essential for retirement planning and long-term financial decisions.
      </p>

      <p>
        <strong>Types of Annuities:</strong> An ordinary annuity (or annuity immediate) has payments at the end of each period. An annuity due has payments at the beginning of each period, making it slightly more valuable due to the earlier payment timing. Most mortgage and loan payments are ordinary annuities. Many pension payments and insurance payouts are annuities due. The timing of payments can significantly impact the present value.
      </p>

      <p>
        <strong>Present Value vs Future Value:</strong> Present value answers: "What is a series of future payments worth today?" This is useful when deciding whether to take a lump sum settlement or ongoing payments. Future value answers: "How much will my regular contributions grow to?" This is useful for savings and retirement planning. A $1,000 annual payment for 20 years isn't worth $20,000 today—it's worth less because money today is worth more than money in the future.
      </p>

      <p>
        <strong>How Interest Compounds:</strong> Annuity calculations use compound interest. Each payment earns interest for the remaining number of periods. In a savings annuity, early payments earn more interest (more compounding periods) while later payments earn less. This is why the future value increases exponentially rather than linearly as you contribute more periods. Higher interest rates significantly increase the future value of an annuity.
      </p>

      <p>
        <strong>Real-World Applications:</strong> Pensions often use annuity calculations to determine how much to pay retirees monthly. Structured settlements in legal cases use these calculations to determine equivalent lump sums. Mortgage and auto loan calculations are essentially reverse annuity calculations—determining the payment needed to pay off a present value. Saving plans (retirement accounts, sinking funds) use these to project growth.
      </p>

      <p>
        <strong>Impact of Variables:</strong> Small changes in the interest rate, payment amount, or time period dramatically affect results. A 1% difference in interest rate can mean tens of thousands of dollars over 30 years. Starting contributions early (annuity due) is significantly better than starting late. Doubling your payment amount doesn't double your result—the effect is amplified by compound interest.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Annuity Calculator"
      description="Calculate present and future values of annuities for financial planning"
      slug="annuity-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="periodic-payment"
          label="Periodic Payment"
          value={periodicPayment}
          onChange={setPeriodicPayment}
          prefix="$"
          step={100}
          min={0}
          hint="Payment amount each period"
        />
        <InputField
          id="interest-rate"
          label="Interest Rate per Period"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.1}
          min={0}
          max={20}
        />
        <InputField
          id="num-periods"
          label="Number of Periods"
          value={numPeriods}
          onChange={setNumPeriods}
          step={12}
          min={1}
          hint="Total number of payments"
        />
        <SelectField
          id="annuity-type"
          label="Annuity Type"
          value={annuityType}
          onChange={setAnnuityType}
          options={[
            { value: "ordinary", label: "Ordinary (payments at end of period)" },
            { value: "due", label: "Due (payments at start of period)" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: AnnuityCalculator,
  faqs: ANNUITY_FAQS,
  slug: "annuity-calculator",
  title: "Annuity Calculator",
  shortTitle: "Annuity",
  description: "Calculate present and future values of annuities for retirement and financial planning",
  category: "finance",
  icon: "📈",
  keywords: ["annuity", "pension", "future value", "present value", "compound interest"],
  popular: false,
});
