import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatPercent } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BACCalculator() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(170);
  const [drinks, setDrinks] = useState(3);
  const [alcoholPercent, setAlcoholPercent] = useState(5);
  const [ouncesPerDrink, setOuncesPerDrink] = useState(12);
  const [hoursConsumed, setHoursConsumed] = useState(2);

  // Standard drink: 0.6 oz pure alcohol
  const totalAlcoholOz = drinks * (ouncesPerDrink * (alcoholPercent / 100));
  const totalAlcoholGrams = totalAlcoholOz * 28.35; // Convert oz to grams

  // Widmark formula for BAC
  // BAC = (Alcohol in grams / (Body weight in pounds × r)) × 100
  // r = distribution ratio (0.73 for male, 0.66 for female)
  const r = gender === "male" ? 0.73 : 0.66;
  const bac = (totalAlcoholGrams / (weight * r)) * 100;

  // Alcohol metabolism rate: approximately 0.015% BAC per hour
  const metabolismRate = 0.015;
  const hoursToSober = bac / metabolismRate;
  const bacAfterConsuming = Math.max(0, bac - metabolismRate * hoursConsumed);

  // Determine impairment level
  let impairmentLevel = "";
  let impairmentColor = "";
  if (bacAfterConsuming < 0.02) {
    impairmentLevel = "No Impairment";
    impairmentColor = "#10b981";
  } else if (bacAfterConsuming < 0.06) {
    impairmentLevel = "Mild (Subtle effects)";
    impairmentColor = "#3b82f6";
  } else if (bacAfterConsuming < 0.15) {
    impairmentLevel = "Moderate (Impaired judgment)";
    impairmentColor = "#f59e0b";
  } else if (bacAfterConsuming < 0.25) {
    impairmentLevel = "Significant (Impaired motor skills)";
    impairmentColor = "#ef4444";
  } else if (bacAfterConsuming < 0.35) {
    impairmentLevel = "Severe (Major impairment)";
    impairmentColor = "#dc2626";
  } else {
    impairmentLevel = "Critical (Risk of death)";
    impairmentColor = "#7f1d1d";
  }

  // Chart data showing BAC over time
  const chartData = [];
  for (let hour = 0; hour <= Math.ceil(hoursToSober) + 2; hour++) {
    const bacAtHour = Math.max(0, bac - metabolismRate * hour);
    chartData.push({
      hour: hour,
      bac: Math.round(bacAtHour * 1000) / 1000,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Estimated BAC" value={`${formatNumber(bac, 3)}%`} highlight />
      <ResultCard label="BAC After Drinking Period" value={`${formatNumber(bacAfterConsuming, 3)}%`} highlight />
      <ResultCard label="Impairment Level" value={impairmentLevel} />
      <ResultCard label="Time to Sober (0.0% BAC)" value={hoursToSober > 0 ? `${Math.round(hoursToSober)} hours` : "Already sober"} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">BAC Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" label={{ value: "Hours", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "BAC (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 3)} />
          <Legend />
          <Line type="monotone" dataKey="bac" stroke="#3b82f6" strokeWidth={2} name="Blood Alcohol Content" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Blood Alcohol Concentration (BAC) is a measurement of the percentage of alcohol in your bloodstream. It's a critical factor in determining impairment, legal driving limits, and health risks. The standard legal limit for driving in the United States is 0.08% BAC for drivers 21+, 0.02% for drivers under 21, and 0.04% for commercial drivers. This calculator estimates your BAC using the Widmark formula, which accounts for gender, body weight, alcohol content, drink volume, and drinking duration. It's important to understand that this is an estimate; individual variation is significant.
      </p>

      <p>
        <strong>Factors Affecting BAC:</strong> Gender significantly affects BAC because women typically have lower water content in their bodies and less of the enzyme alcohol dehydrogenase, which metabolizes alcohol. Body weight is crucial—heavier individuals typically have lower BAC from the same amount of alcohol. Alcohol percentage varies by drink (beer 4-6%, wine 12-15%, spirits 40%+). Food consumption slows alcohol absorption. Medications and health conditions can affect metabolism. Tolerance—feeling less impaired despite high BAC—is dangerous because actual impairment remains even if you don't feel as intoxicated.
      </p>

      <p>
        <strong>Impairment Levels:</strong> At 0.02-0.06%, you may experience subtle changes in mood and behavior. At 0.06-0.15%, judgment is impaired, reaction time slows, and coordination decreases. At 0.15-0.25%, speech becomes slurred, balance is affected, and complex tasks become difficult. At 0.25-0.35%, severe impairment occurs with loss of consciousness possible. Above 0.35%, vital functions are at risk. Even "low" levels of BAC (0.02-0.08%) can impair judgment and increase risky decisions, which is why driving is not safe at any detectable BAC.
      </p>

      <p>
        <strong>Safety and Responsibility:</strong> The metabolism rate of approximately 0.015% BAC per hour is constant and cannot be accelerated by coffee, cold showers, or food. Only time removes alcohol from your system. Plan ahead: use a designated driver, taxi, rideshare, or public transportation if you'll be drinking. Never drive if you've consumed alcohol, regardless of how you feel. Drink water between alcoholic drinks to stay hydrated. Eat before and while drinking to slow absorption. Know your limits and drink responsibly. If someone shows signs of alcohol poisoning (unresponsiveness, slow breathing, seizures), call emergency services immediately.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Blood Alcohol Concentration (BAC) Calculator"
      description="Estimate your blood alcohol content and alcohol-related impairment"
      slug="bac-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <SelectField
          id="gender"
          label="Gender"
          value={gender}
          onChange={setGender}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <InputField
          id="weight"
          label="Weight"
          value={weight}
          onChange={setWeight}
          suffix="lbs"
          step={1}
          min={50}
          max={400}
        />
        <InputField
          id="drinks"
          label="Number of Drinks"
          value={drinks}
          onChange={setDrinks}
          step={1}
          min={0}
          max={20}
        />
        <InputField
          id="alcohol-percent"
          label="Alcohol Content"
          value={alcoholPercent}
          onChange={setAlcoholPercent}
          suffix="%"
          step={0.1}
          min={0}
          max={100}
          hint="Beer: 5%, Wine: 12%, Spirits: 40%"
        />
        <InputField
          id="ounces-per-drink"
          label="Ounces per Drink"
          value={ouncesPerDrink}
          onChange={setOuncesPerDrink}
          suffix="oz"
          step={0.5}
          min={1}
          max={16}
          hint="Beer: 12oz, Wine: 5oz, Shot: 1.5oz"
        />
        <InputField
          id="hours-consumed"
          label="Hours Spent Drinking"
          value={hoursConsumed}
          onChange={setHoursConsumed}
          suffix="hours"
          step={0.5}
          min={0}
          max={12}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BACCalculator,
  slug: "bac-calculator",
  title: "BAC Calculator",
  shortTitle: "BAC",
  description: "Calculate your estimated blood alcohol concentration and impairment level",
  category: "health",
  icon: "🍺",
  keywords: ["BAC", "blood alcohol concentration", "alcohol calculator", "drunk driving"],
  popular: false,
});
