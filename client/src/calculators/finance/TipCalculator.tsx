import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const perPersonTotal = numberOfPeople > 0 ? totalAmount / numberOfPeople : 0;
  const perPersonTip = numberOfPeople > 0 ? tipAmount / numberOfPeople : 0;

  const quickTipPercentages = [15, 18, 20, 25];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Tip Amount"
        value={formatCurrency(tipAmount)}
        highlight={true}
      />
      <ResultCard
        label="Total Bill"
        value={formatCurrency(totalAmount)}
        highlight={true}
      />
      {numberOfPeople > 1 && (
        <>
          <ResultCard
            label="Per Person Total"
            value={formatCurrency(perPersonTotal)}
          />
          <ResultCard
            label="Per Person Tip"
            value={formatCurrency(perPersonTip)}
          />
        </>
      )}
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Tipping Etiquette & Guidelines
      </h3>
      <p>
        Tipping is an important part of service industry culture in the United
        States and many other countries. Service staff often depend on tips as a
        significant portion of their income, since many receive sub-minimum-wage
        base pay that relies on tips to reach a livable wage. The standard tip
        amount has evolved over time—while 15% was once standard, 18-20% is now
        widely expected for good service in restaurants, with 20-25% for
        exceptional service. For poor service, 10-15% is acceptable, while 0% or
        a comment about why is appropriate only for genuinely terrible service.
      </p>
      <p>
        Different service settings have different tipping norms. In restaurants,
        tip 15-20% on food and beverages. For delivery, 15-20% is standard, with
        a minimum of $2-3 even for small orders. At bars, tip $1-2 per drink or
        15-20% of the tab. For personal services like haircuts, massages, or
        nail salons, 15-20% is expected. For hotel staff: tip bellhops $2-5 per
        bag, housekeeping $2-5 per night, and valet $2-5. Taxi and rideshare
        drivers typically expect 15-20%, while grocery store baggers might get
        $1-2 if they bag your items.
      </p>
      <p>
        International tipping customs vary significantly, and travelers should
        research local customs before visiting. In some countries like Japan,
        tipping is considered offensive or unnecessary. In Europe, tipping is
        often not expected or is much smaller (5-10%) than in North America. In
        Canada, tipping is similar to the US (15-20%). Mexico expects 10-15%
        tips. Understanding local customs shows respect and prevents awkward
        situations when traveling.
      </p>
      <p>
        When calculating tips, especially for group bills, this calculator
        simplifies the process and ensures fair division. Many people find 18% a
        good middle ground—easier to calculate mentally than 20% (since 18% is
        close to one-fifth), yet acknowledging good service better than 15%.
        Remember that tipping reflects your appreciation for service and helps
        support workers often earning less than ideal wages.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Tip Calculator"
      description="Calculate tips quickly and fairly, with support for splitting bills"
      slug="tip"
      results={results}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="bill-amount"
          label="Bill Amount"
          value={billAmount}
          onChange={setBillAmount}
          prefix="$"
          min={0}
          step={0.01}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Tip Percentage
          </label>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {quickTipPercentages.map((percent) => (
              <button
                key={percent}
                onClick={() => setTipPercentage(percent)}
                className={`py-2 px-3 rounded-lg font-medium text-sm transition-all ${
                  tipPercentage === percent
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {percent}%
              </button>
            ))}
          </div>
          <InputField
            id="tip-percentage"
            label="Custom Percentage"
            value={tipPercentage}
            onChange={setTipPercentage}
            suffix="%"
            min={0}
            max={50}
            step={0.5}
          />
        </div>

        <InputField
          id="number-of-people"
          label="Number of People"
          value={numberOfPeople}
          onChange={setNumberOfPeople}
          min={1}
          max={100}
          step={1}
          hint="For splitting the bill"
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  slug: "tip",
  title: "Tip Calculator",
  shortTitle: "Tip",
  description: "Calculate tips quickly with preset percentages and bill splitting",
  category: "finance",
  icon: "🍽️",
  keywords: ["tip", "gratuity", "bill", "restaurant", "split"],
  popular: true,
  component: TipCalculator,
});
