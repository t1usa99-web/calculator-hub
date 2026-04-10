import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BondCalculator() {
  const [faceValue, setFaceValue] = useState(1000);
  const [couponRate, setCouponRate] = useState(5);
  const [yearsToMaturity, setYearsToMaturity] = useState(10);
  const [marketYield, setMarketYield] = useState(4);
  const [paymentFrequency, setPaymentFrequency] = useState("2");

  const n = parseInt(paymentFrequency, 10);
  const periodsPerYear = n;
  const totalPeriods = yearsToMaturity * periodsPerYear;
  const couponPayment = (faceValue * couponRate) / 100 / periodsPerYear;
  const yieldPerPeriod = marketYield / 100 / periodsPerYear;

  // Bond price = PV of coupons + PV of face value
  let bondPrice = 0;
  for (let i = 1; i <= totalPeriods; i++) {
    bondPrice += couponPayment / Math.pow(1 + yieldPerPeriod, i);
  }
  bondPrice += faceValue / Math.pow(1 + yieldPerPeriod, totalPeriods);

  const currentYield = (couponPayment * periodsPerYear) / bondPrice;
  const annualCoupon = (faceValue * couponRate) / 100;
  const totalCouponPayments = couponPayment * totalPeriods;
  const totalReturn = totalCouponPayments + faceValue - bondPrice;
  const totalReturnPercent = (totalReturn / bondPrice) * 100;

  // Macaulay duration
  let duration = 0;
  for (let i = 1; i <= totalPeriods; i++) {
    const pv = couponPayment / Math.pow(1 + yieldPerPeriod, i);
    duration += (i / periodsPerYear) * (pv / bondPrice);
  }
  duration += (yearsToMaturity * faceValue) / Math.pow(1 + yieldPerPeriod, totalPeriods) / bondPrice;

  const priceVsYieldChart = [
    { yield: 1, price: 1200 },
    { yield: 2, price: 1150 },
    { yield: 3, price: 1100 },
    { yield: 4, price: 1050 },
    { yield: 5, price: 1000 },
    { yield: 6, price: 950 },
    { yield: 7, price: 900 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Bond Price"
        value={formatCurrency(bondPrice)}
        highlight={true}
      />
      <ResultCard
        label="Annual Coupon Payment"
        value={formatCurrency(annualCoupon)}
      />
      <ResultCard
        label="Current Yield"
        value={`${formatNumber(currentYield * 100, 2)}%`}
      />
      <ResultCard
        label="Yield to Maturity (YTM)"
        value={`${marketYield}%`}
      />
      <ResultCard
        label="Macaulay Duration"
        value={`${formatNumber(duration, 2)} years`}
      />
      <ResultCard
        label="Total Return If Held to Maturity"
        value={formatCurrency(totalReturn)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Bond Price vs. Market Yield</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={priceVsYieldChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="yield" label={{ value: "Yield (%)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Price ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} name="Bond Price" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Bonds are fixed-income securities where an investor loans money to a borrower (government or corporation) in exchange for periodic interest payments (coupons) and return of principal at maturity. Bond pricing is inverse to interest rates: when market yields rise, bond prices fall and vice versa. Understanding bond pricing is essential for investors, traders, and financial planners. Bonds are often seen as safer than stocks but offer lower returns; they're a core part of diversified portfolios.
      </p>

      <p>
        <strong>Bond Price Calculation:</strong> Bond price equals the present value of all future cash flows. The formula is: Price = Σ(C / (1+y)^t) + F / (1+y)^n, where C is coupon payment, y is yield per period, t is period number, F is face value, and n is total periods. When market yield equals coupon rate, the bond trades at par (face value). When yield exceeds coupon rate, the bond trades at a discount. When coupon rate exceeds yield, the bond trades at a premium. This inverse relationship is fundamental to bond markets.
      </p>

      <p>
        <strong>Current Yield vs. Yield to Maturity (YTM):</strong> Current yield is annual coupon divided by current price. YTM is the total return if you hold the bond to maturity, accounting for purchase price, coupon payments, and redemption at par. YTM is always more accurate for buy-and-hold investors because it reflects the total return. If you plan to sell before maturity, price appreciation or depreciation matters more than YTM. YTM is what bond traders primarily quote and monitor.
      </p>

      <p>
        <strong>Duration: Interest Rate Risk Measure:</strong> Macaulay duration is the weighted average time to receive cash flows, measured in years. It represents how sensitive a bond's price is to interest rate changes. A bond with 5-year duration loses about 5% of value for every 1% increase in yields. Longer-duration bonds are riskier (more price-volatile) but offer higher yields to compensate. Short-duration bonds are less volatile but offer lower yields. Duration helps compare bonds of different maturities and coupons.
      </p>

      <p>
        <strong>Bond Investing Strategy:</strong> Buy-and-hold investors benefit from stable coupon income and principal repayment, making default risk the primary concern. Active traders profit from price movements as yields change. In rising-rate environments, bond prices fall (good time to buy if yields are acceptable). In falling-rate environments, bond prices rise (opportunity to sell). Diversify across bond types: government bonds are safest, investment-grade corporates offer higher yields with moderate risk, and high-yield bonds offer attractive returns but with significant risk.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Bond Calculator"
      description="Calculate bond prices, yields, and returns"
      slug="bond-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="face-value"
          label="Face Value"
          value={faceValue}
          onChange={setFaceValue}
          prefix="$"
          min={100}
          step={100}
          max={10000}
        />
        <InputField
          id="coupon-rate"
          label="Annual Coupon Rate"
          value={couponRate}
          onChange={setCouponRate}
          suffix="%"
          min={0}
          step={0.1}
          max={20}
        />
        <InputField
          id="years-to-maturity"
          label="Years to Maturity"
          value={yearsToMaturity}
          onChange={setYearsToMaturity}
          suffix="years"
          min={0.25}
          step={0.25}
          max={50}
        />
        <InputField
          id="market-yield"
          label="Market Yield (YTM)"
          value={marketYield}
          onChange={setMarketYield}
          suffix="%"
          min={0}
          step={0.1}
          max={20}
        />
        <SelectField
          id="payment-frequency"
          label="Coupon Payment Frequency"
          value={paymentFrequency}
          onChange={setPaymentFrequency}
          options={[
            { value: "1", label: "Annual" },
            { value: "2", label: "Semi-annual" },
            { value: "4", label: "Quarterly" },
            { value: "12", label: "Monthly" },
          ]}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BondCalculator,
  slug: "bond-calculator",
  title: "Bond Calculator",
  shortTitle: "Bond Calculator",
  description: "Calculate bond prices, current yield, YTM, and duration for fixed-income investing",
  category: "finance",
  icon: "💳",
  keywords: ["bond calculator", "bond price", "yield to maturity", "YTM", "duration", "fixed income"],
  popular: true,
  faqs: [
    {
      question: "What does it mean if the bond price is above face value?",
      answer: "The bond is trading at a premium. This happens when the coupon rate is higher than the market yield. The bond will gradually decline in price as it approaches maturity, converging to face value. You're paying more upfront but receiving above-market coupon payments."
    },
    {
      question: "Should I buy a bond trading at a discount or premium?",
      answer: "Both can be appropriate depending on your strategy. A discounted bond offers the potential for price appreciation if yields fall. A premium bond offers above-market coupon income. Compare the YTM to available alternatives and consider your interest rate outlook and investment timeline."
    },
    {
      question: "What's the difference between coupon rate and yield?",
      answer: "Coupon rate is fixed at issuance (set as a percentage of face value). Yield changes as bond prices fluctuate in the market. If you buy a 5% coupon bond for a premium price, your actual yield (return) will be less than 5%. YTM accounts for the purchase price and return of principal."
    },
    {
      question: "How does duration help me?",
      answer: "Duration tells you how much a bond's price will move if yields change. A 5-year duration bond loses about 5% if yields rise 1%. Longer duration = more price volatility but typically higher yield. Use duration to understand your interest rate risk and to match your investment timeline."
    },
    {
      question: "What's the relationship between interest rates and bond prices?",
      answer: "They're inversely related. When interest rates rise, new bonds offer higher yields, making existing bonds worth less (to sell, you'd have to discount them to compete). When rates fall, existing bonds become more valuable. This is why bond prices fluctuate in the secondary market."
    }
  ],
  dateModified: "2026-04-10",
});
