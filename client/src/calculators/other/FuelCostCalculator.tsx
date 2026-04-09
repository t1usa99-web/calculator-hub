import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function FuelCostCalculator() {
  const [distance, setDistance] = useState(500);
  const [fuelEfficiency, setFuelEfficiency] = useState(25);
  const [gasPrice, setGasPrice] = useState(3.5);

  // Calculate fuel costs
  const fuelNeeded = distance / fuelEfficiency;
  const totalCost = fuelNeeded * gasPrice;
  const costPerMile = totalCost / distance;

  // Generate data for chart - cost by distance
  const chartData = useMemo(() => {
    const data = [];
    for (let i = 0; i <= distance; i += Math.max(1, Math.floor(distance / 10))) {
      const fuel = i / fuelEfficiency;
      const cost = fuel * gasPrice;
      data.push({
        distance: i,
        cost: parseFloat(cost.toFixed(2)),
      });
    }
    return data;
  }, [distance, fuelEfficiency, gasPrice]);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Fuel Needed"
        value={`${fuelNeeded.toFixed(2)} gal`}
        highlight
      />
      <ResultCard
        label="Total Cost"
        value={formatCurrency(totalCost)}
        highlight
      />
      <ResultCard
        label="Cost Per Mile"
        value={formatCurrency(costPerMile)}
      />
      <ResultCard
        label="Miles Per Gallon"
        value={formatNumber(fuelEfficiency)}
      />
      <ResultCard
        label="Gas Price Per Gallon"
        value={formatCurrency(gasPrice)}
      />
      <ResultCard
        label="Total Distance"
        value={`${distance} miles`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cost by Distance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="distance"
            label={{ value: "Distance (miles)", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis label={{ value: "Cost ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#3b82f6"
            dot={false}
            isAnimationActive={false}
            name="Fuel Cost"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A fuel cost calculator helps you estimate how much you'll spend on gasoline for a trip. By entering the distance, your vehicle's fuel efficiency (measured in miles per gallon or MPG), and the current gas price, you can determine the total fuel cost and cost per mile. This calculation is invaluable for budgeting road trips, comparing vehicles' operating costs, calculating reimbursement for business travel, and understanding the true cost of vehicle ownership. Rising gas prices make fuel cost estimation increasingly important for household and business budgeting.
      </p>

      <p>
        <strong>Fuel Efficiency (MPG):</strong> Miles per gallon (MPG) measures how far your vehicle travels on one gallon of fuel. Higher MPG means better fuel efficiency and lower operating costs. MPG varies based on vehicle type (sedans are more efficient than SUVs), driving conditions (highway driving is more efficient than city driving), driving habits (aggressive acceleration and speeding reduce MPG), vehicle maintenance (properly inflated tires and regular maintenance improve efficiency), and load (carrying extra weight reduces efficiency). Modern vehicles typically range from 15-30 MPG for conventional gasoline engines, while hybrid vehicles can exceed 40-50 MPG. Electric vehicles eliminate fuel costs entirely but have battery charging costs instead.
      </p>

      <p>
        <strong>Gas Price Volatility:</strong> Fuel prices fluctuate based on crude oil market prices, government taxes, supply and demand, geopolitical events, and seasonal factors. The U.S. average gas price varies significantly by region due to state and local taxes, local supply conditions, and refineries. Prices typically rise during summer when driving increases, and fall during winter. International prices vary even more dramatically, with some countries heavily subsidizing fuel while others impose high taxes. Tracking gas prices helps you time fill-ups for better deals and understand how fuel costs affect your overall transportation budget.
      </p>

      <p>
        <strong>Cost Optimization Strategies:</strong> To minimize fuel costs, maintain proper tire pressure (underinflated tires reduce MPG by up to 3%), keep your engine properly maintained with regular oil changes and air filter replacements, drive at steady speeds (excessive speeding reduces efficiency), avoid idling, and remove unnecessary cargo. For businesses reimbursing employees for mileage, fuel cost calculators ensure accurate reimbursement. For trip planning, calculating fuel costs helps determine the most economical routes and timing. Combining fuel cost calculations with comparison of vehicle options helps make informed decisions about purchasing more efficient vehicles.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Fuel Cost Calculator"
      description="Calculate fuel costs for trips based on distance and fuel efficiency"
      slug="fuel-cost-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="distance"
          label="Distance"
          value={distance}
          onChange={setDistance}
          suffix="miles"
          step={10}
          min={0}
        />
        <InputField
          id="fuel-efficiency"
          label="Fuel Efficiency"
          value={fuelEfficiency}
          onChange={setFuelEfficiency}
          suffix="MPG"
          step={0.5}
          min={1}
          max={100}
          hint={`${fuelNeeded.toFixed(2)} gallons needed`}
        />
        <InputField
          id="gas-price"
          label="Gas Price Per Gallon"
          value={gasPrice}
          onChange={setGasPrice}
          prefix="$"
          step={0.01}
          min={0}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: FuelCostCalculator,
  slug: "fuel-cost-calculator",
  title: "Fuel Cost Calculator",
  shortTitle: "Fuel Cost",
  description: "Calculate fuel costs and MPG for road trips",
  category: "other",
  icon: "⛽",
  keywords: ["fuel cost", "gas calculator", "MPG calculator", "trip cost"],
  popular: false,
});
