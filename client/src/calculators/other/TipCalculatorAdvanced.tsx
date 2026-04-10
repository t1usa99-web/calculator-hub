import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function TipCalculatorAdvanced() {
  const [billAmount, setBillAmount] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [numPeople, setNumPeople] = useState(2);

  // Calculate tip and total
  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;
  const perPersonAmount = totalAmount / numPeople;
  const tipPerPerson = tipAmount / numPeople;

  // Quick tip buttons data
  const quickTips = [15, 18, 20, 25];

  // Chart data for tip percentages
  const chartData = quickTips.map((tip) => ({
    percentage: `${tip}%`,
    tipAmount: billAmount * (tip / 100),
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Bill Amount"
        value={formatCurrency(billAmount)}
      />
      <ResultCard
        label="Tip Amount"
        value={formatCurrency(tipAmount)}
        highlight
      />
      <ResultCard
        label="Tip Percentage"
        value={`${formatNumber(tipPercent, 1)}%`}
      />
      <ResultCard
        label="Total Amount"
        value={formatCurrency(totalAmount)}
        highlight
      />
      <ResultCard
        label="Number of People"
        value={numPeople}
      />
      <ResultCard
        label="Per Person (Total)"
        value={formatCurrency(perPersonAmount)}
        highlight
      />
      {numPeople > 1 && (
        <ResultCard
          label="Per Person (Tip Only)"
          value={formatCurrency(tipPerPerson)}
        />
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Tip Amount at Different Percentages</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="percentage" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="tipAmount" fill="#3b82f6" name="Tip Amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Tipping is a customary way to express appreciation for service in restaurants, bars, hotels, and other service industries. In the United States, tipping is expected and often accounts for a significant portion of service workers' income. Typical tip percentages range from 15% to 25%, depending on service quality. 15% is acceptable for average service, 18-20% is standard for good service, and 25% or more is for excellent service. In other countries, tipping customs vary significantly; some countries include service charges in the bill, while others don't expect tips.
      </p>

      <p>
        <strong>How to Calculate Tip:</strong> Tip = Bill Amount × Tip Percentage / 100. Example: $50 bill with 18% tip = $50 × 0.18 = $9. Total = $50 + $9 = $59. Quick percentages: 10% is moving the decimal left (10% of $50 is $5), 20% is double 10%, 15% is between 10% and 20%. Mental math: 15% of $50 is roughly $7-8. Most people round up to the nearest dollar or round the total to a nice number. Apps and calculators make precise calculations easy. When splitting bills, calculate the tip on the original bill amount, then divide the total including tip.
      </p>

      <p>
        <strong>Tip Etiquette and Guidelines:</strong> Always tip at least 15% for acceptable service in restaurants. Tip 18-20% for good service, 20-25% for excellent service. Poor service may justify a lower tip (10%) or conversation with management. Delivery drivers usually get $2-3 minimum or 10-15% of the order total. Bar tenders get $1-2 per drink. Hairstylists get 15-20%. Housekeeping gets $2-5 per night. Taxi drivers and rideshare drivers get 15-20%. Valet parking attendants get $2-5. Tip on the pre-tax bill amount (some people tip on post-tax). For large groups, many restaurants automatically add an 18-20% gratuity; check your bill to avoid double-tipping.
      </p>

      <p>
        <strong>Splitting Bills Fairly:</strong> When splitting evenly: (Bill + Tip) / Number of People = Per Person Amount. When paying proportionally: each person pays their share of the bill plus their proportional share of the tip. Example: two people spend $30 and $20 on a $50 bill with $10 tip. Person 1 pays $30 + $6 (60% of tip) = $36. Person 2 pays $20 + $4 (40% of tip) = $24. Apps can calculate split bills by item. For fairness, everyone should agree on the tip percentage before calculating. Consider who ordered what; some people may not want to subsidize expensive items ordered by others.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Tip Calculator Advanced"
      description="Calculate tip amount and split costs fairly among people"
      slug="tip-calculator-advanced"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="bill-amount"
          label="Bill Amount"
          value={billAmount}
          onChange={setBillAmount}
          prefix="$"
          step={0.01}
          min={0}
        />

        <InputField
          id="tip-percent"
          label="Tip Percentage"
          value={tipPercent}
          onChange={setTipPercent}
          suffix="%"
          step={0.5}
          min={0}
          max={50}
        />

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Quick Tip Buttons</p>
          <div className="grid grid-cols-4 gap-2">
            {quickTips.map((tip) => (
              <button
                key={tip}
                onClick={() => setTipPercent(tip)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
                  tipPercent === tip
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                {tip}%
              </button>
            ))}
          </div>
        </div>

        <InputField
          id="num-people"
          label="Number of People"
          value={numPeople}
          onChange={setNumPeople}
          step={1}
          min={1}
          max={20}
        />

        <div className="p-4 bg-gray-100 rounded-lg space-y-2">
          <p className="text-sm text-gray-700">
            <strong>Tip Amount:</strong> {formatCurrency(tipAmount)}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Total Amount:</strong> {formatCurrency(totalAmount)}
          </p>
          {numPeople > 1 && (
            <p className="text-sm text-gray-700">
              <strong>Per Person:</strong> {formatCurrency(perPersonAmount)}
            </p>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: TipCalculatorAdvanced,
  slug: "tip-calculator-advanced",
  title: "Tip Calculator Advanced",
  shortTitle: "Tip Calc",
  description: "Calculate tips and split bills among multiple people",
  category: "other",
  icon: "💵",
  keywords: ["tip calculator", "gratuity", "split bill", "service charge", "restaurant tip"],
  popular: true,
  faqs: [
    {
      question: "How much should I tip?",
      answer: "Standard tipping guidelines: 15% for acceptable service, 18-20% for good service, 20-25% for excellent service. Poor service may justify 10% or less. These percentages apply to restaurant servers. Different service types have different expectations: bartenders get $1-2 per drink, delivery drivers get 10-15% or $2-3 minimum, hairstylists get 15-20%, housekeeping gets $2-5 per night. Always tip on the pre-tax bill amount. For large groups (usually 8+ people), many restaurants automatically add 18-20% gratuity; check your bill to avoid double-tipping.",
    },
    {
      question: "How do I calculate tip mentally?",
      answer: "Quick mental math: 10% is moving the decimal one place left ($50 bill = 10% is $5). 20% is double 10% ($50 bill = 20% is $10). 15% is between 10% and 20% ($50 bill = 15% is $7-8). For a $50 bill: 10% is $5, 15% is $7.50, 20% is $10. For a $35 bill: 10% is $3.50, 15% is $5.25, 20% is $7. Most people round to the nearest dollar or round the total to a nice number. Apps and calculators make precise calculations instant. Tipping apps show multiple percentage options and calculate split bills automatically.",
    },
    {
      question: "How do I split a bill with multiple people?",
      answer: "For equal split: (Bill + Tip) / Number of People = Per Person Amount. Example: $60 bill, $12 tip (20%), 3 people = $72 / 3 = $24 per person. For proportional split: each person pays their portion of the bill plus their share of the tip. Example: one person spent $40, another $20 on a $60 bill. At 20% tip: person 1 pays $40 + $8 = $48, person 2 pays $20 + $4 = $24. Apps can split by item ordered. For fairness, agree on the tip percentage beforehand. Some people don't want to subsidize expensive items ordered by others; discuss expectations before ordering.",
    },
    {
      question: "What if the bill already includes a service charge?",
      answer: "Check your bill carefully. Service charge (automatic gratuity) is already included and equals the tip. You don't need to add another tip. However, you may choose to add a small amount (5-10%) if service was exceptional. This is common for large groups (usually 8+ people). Credit card processing may show a line for additional tip after a service charge has been added; leave it blank or add a nominal amount. In some countries, service is always included in the bill, and tipping is not customary. When traveling internationally, ask about local tipping customs to avoid embarrassment.",
    },
    {
      question: "What if I receive bad service?",
      answer: "Tipping less (10% instead of 18%) is appropriate for poor service, but communicate with management. Common issues: slow service, incorrect orders, inattentive staff. Try to distinguish between service failures and kitchen delays. Give servers a chance to correct mistakes. If issues persist, speak to a manager before paying. Leaving no tip or a very low tip should be reserved for genuinely terrible service (rude behavior, extreme neglect). Remember that servers often deal with difficult customers and may be affected by kitchen delays beyond their control. A tip of 10-15% acknowledges their effort while expressing dissatisfaction. Always be respectful; servers work hard and rely on tips.",
    },
  ],
  dateModified: "2026-04-10",
});
