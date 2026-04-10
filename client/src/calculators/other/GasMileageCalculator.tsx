import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function GasMileageCalculator() {
  const [distanceDriven, setDistanceDriven] = useState(300);
  const [gallonsUsed, setGallonsUsed] = useState(15);
  const [gasPrice, setGasPrice] = useState(3.5);
  const [annualMiles, setAnnualMiles] = useState(12000);

  // Calculate MPG
  const mpg = gallonsUsed > 0 ? distanceDriven / gallonsUsed : 0;
  const costPerMile = gallonsUsed > 0 ? (gallonsUsed * gasPrice) / distanceDriven : 0;
  const annualFuelCost = annualMiles > 0 ? (annualMiles / mpg) * gasPrice : 0;

  // Chart data: compare MPG scenarios
  const chartData = [
    { scenario: "Current", mpg: mpg },
    { scenario: "20 MPG", mpg: 20 },
    { scenario: "25 MPG", mpg: 25 },
    { scenario: "30 MPG", mpg: 30 },
    { scenario: "35 MPG", mpg: 35 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Miles Per Gallon"
        value={`${formatNumber(mpg)} MPG`}
        highlight
      />
      <ResultCard
        label="Cost per Mile"
        value={formatCurrency(costPerMile)}
        highlight
      />
      <ResultCard
        label="Distance Driven"
        value={`${formatNumber(distanceDriven)} miles`}
      />
      <ResultCard
        label="Gallons Used"
        value={`${formatNumber(gallonsUsed)} gal`}
      />
      <ResultCard
        label="Gas Price"
        value={formatCurrency(gasPrice) + "/gal"}
      />
      <ResultCard
        label="Annual Fuel Cost"
        value={formatCurrency(annualFuelCost)}
        highlight
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">MPG Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="scenario" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Legend />
          <Bar dataKey="mpg" fill="#3b82f6" name="MPG" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Fuel economy, measured in miles per gallon (MPG), indicates how efficiently a vehicle uses gasoline. Higher MPG means lower fuel costs and less environmental impact. MPG is calculated by dividing miles driven by gallons consumed. Factors affecting fuel economy include vehicle type, driving habits, traffic conditions, and vehicle maintenance. Understanding your vehicle's fuel economy helps with budgeting, comparing vehicles, and identifying efficiency problems. Improving fuel economy by even a few MPG can save hundreds of dollars annually.
      </p>

      <p>
        <strong>Factors Affecting Fuel Economy:</strong> Vehicle weight: heavier vehicles consume more fuel. Engine size: larger engines typically have lower MPG. Aerodynamics: sleek designs reduce fuel consumption. Driving habits: aggressive acceleration and speeding reduce MPG significantly. Traffic: city driving with frequent stops uses more fuel than highway driving. Weather: cold temperatures and high altitudes reduce efficiency. Tire pressure: underinflated tires increase fuel consumption. Road conditions: rough roads and uphill driving reduce MPG. Cargo weight: carrying excess weight decreases efficiency. Maintenance: dirty air filters and worn spark plugs reduce MPG.
      </p>

      <p>
        <strong>Improving Your Fuel Economy:</strong> Maintain proper tire pressure (check monthly). Keep up with scheduled maintenance (oil changes, filter replacements). Drive smoothly, avoid rapid acceleration and aggressive braking. Combine trips to reduce total distance. Walk or bike for short distances. Use cruise control on highways. Reduce cargo weight; remove unused items from your trunk. Consider a more efficient vehicle (hybrid, electric). Reduce idling; turn off the engine in traffic. Keep your car aerodynamic (remove roof racks when not in use). These improvements can increase MPG by 5-20%, saving significant fuel costs.
      </p>

      <p>
        <strong>Calculating Annual Fuel Costs:</strong> Annual Fuel Cost = (Annual Miles / MPG) × Gas Price per Gallon. Example: 12,000 miles per year, 25 MPG average, $3.50 per gallon = (12,000 / 25) × $3.50 = $1,680 annually. Small MPG improvements yield large savings over time. Increasing from 20 to 25 MPG saves $140 per year at $3.50 per gallon. Increasing from 25 to 30 MPG saves $70 more. Environmental impact also improves: 1 gallon of gasoline produces about 20 pounds of CO2. Better fuel economy means less CO2 emissions and reduced environmental footprint.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Gas Mileage Calculator"
      description="Calculate MPG, fuel costs, and annual fuel expenses"
      slug="gas-mileage-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="distance"
          label="Distance Driven"
          value={distanceDriven}
          onChange={setDistanceDriven}
          suffix="miles"
          step={0.1}
          min={0}
        />
        <InputField
          id="gallons"
          label="Gallons Used"
          value={gallonsUsed}
          onChange={setGallonsUsed}
          suffix="gallons"
          step={0.01}
          min={0}
          hint={`Current MPG: ${formatNumber(mpg)}`}
        />
        <InputField
          id="gas-price"
          label="Gas Price"
          value={gasPrice}
          onChange={setGasPrice}
          prefix="$"
          suffix="/gallon"
          step={0.01}
          min={0}
        />
        <InputField
          id="annual-miles"
          label="Annual Miles"
          value={annualMiles}
          onChange={setAnnualMiles}
          suffix="miles/year"
          step={100}
          min={0}
          hint={`Annual fuel cost: ${formatCurrency(annualFuelCost)}`}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: GasMileageCalculator,
  slug: "gas-mileage-calculator",
  title: "Gas Mileage Calculator",
  shortTitle: "Gas Mileage",
  description: "Calculate fuel economy and annual fuel costs",
  category: "other",
  icon: "⛽",
  keywords: ["MPG calculator", "fuel economy", "gas cost", "miles per gallon", "fuel efficiency"],
  popular: true,
  faqs: [
    {
      question: "How do I calculate miles per gallon (MPG)?",
      answer: "MPG equals miles driven divided by gallons used. Formula: MPG = Miles Driven / Gallons Consumed. Example: if you drive 300 miles and use 15 gallons, your MPG is 300 / 15 = 20 MPG. To track your actual fuel economy accurately, fill your tank completely, note the odometer, drive normally, then fill again and record miles driven and gallons added. Repeat this process several times to get an average. One fill-up can give skewed results due to variations in filling technique and driving conditions.",
    },
    {
      question: "What factors affect fuel economy the most?",
      answer: "Driving habits have the largest impact. Aggressive acceleration, speeding, and harsh braking reduce MPG by 10-20%. Traffic conditions matter significantly; stop-and-go city driving uses more fuel than steady highway driving. Vehicle type is also critical; SUVs and trucks consume more fuel than sedans and hybrids. Weather affects MPG (cold temperatures reduce efficiency by 10-15%). Tire pressure is important; underinflated tires by 10 PSI can reduce MPG by 3%. Load weight affects efficiency; every 100 pounds carried reduces MPG by 1-2%. Regular maintenance (clean air filters, proper spark plugs) maintains efficiency.",
    },
    {
      question: "How can I improve my vehicle's fuel economy?",
      answer: "Drive smoothly: avoid rapid acceleration, aggressive braking, and speeding. Use cruise control on highways to maintain steady speed. Keep tires properly inflated (check monthly). Perform regular maintenance (oil changes every 5,000 miles, air filter replacements). Remove excess cargo from your vehicle. Reduce idling; turn off the engine if stopped for more than 10 seconds. Plan routes efficiently to minimize distance. Combine trips into one journey. Consider vehicles with hybrid or electric options for better efficiency. These measures can improve MPG by 5-20%, saving hundreds annually.",
    },
    {
      question: "What's the difference between city and highway MPG?",
      answer: "Highway MPG is typically 20-30% higher than city MPG because highway driving is more steady and efficient. City driving involves frequent stops, starts, and low speeds, all of which consume more fuel. Example: a vehicle might get 22 city MPG and 30 highway MPG. The EPA publishes both numbers for all vehicles. Your actual MPG depends on how much city vs. highway driving you do. To calculate blended average: (city MPG × city miles + highway MPG × highway miles) / total miles. If you drive mostly city, your average will be closer to city MPG.",
    },
    {
      question: "How much money can I save by improving MPG?",
      answer: "Savings depend on annual miles driven and gas prices. Formula: Annual Savings = (Annual Miles / Current MPG - Annual Miles / New MPG) × Gas Price. Example: 12,000 miles/year, current 20 MPG, improve to 25 MPG, gas $3.50/gal = (600 - 480) × $3.50 = $420/year. Small improvements (5 MPG) save $200-300 yearly. Larger improvements (10 MPG) save $400-800 yearly. Over a vehicle's 10-year lifespan, modest MPG improvements save thousands. This doesn't include environmental benefits: better MPG means less CO2 emissions and reduced environmental impact.",
    },
  ],
  dateModified: "2026-04-10",
});
