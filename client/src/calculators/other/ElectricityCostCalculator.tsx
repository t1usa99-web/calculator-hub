import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function ElectricityCostCalculator() {
  const [watts, setWatts] = useState(1000);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [electricityRate, setElectricityRate] = useState(0.12);
  const [days, setDays] = useState(30);

  // Calculate electricity costs
  const kilowatts = watts / 1000;
  const dailyKwh = kilowatts * hoursPerDay;
  const monthlyKwh = dailyKwh * days;
  const yearlyKwh = dailyKwh * 365;

  const dailyCost = dailyKwh * electricityRate;
  const monthlyCost = monthlyKwh * electricityRate;
  const yearlyCost = yearlyKwh * electricityRate;

  // US average is about 12-14 cents per kWh, generate comparison
  const usAverageRate = 0.13;
  const usAverageMonthlyCost = monthlyKwh * usAverageRate;

  // Generate monthly cost data for chart
  const monthlyData = useMemo(() => {
    const data = [];
    for (let day = 1; day <= days; day++) {
      const dayCost = dailyCost * day;
      data.push({
        day: day,
        cost: parseFloat(dayCost.toFixed(2)),
      });
    }
    return data;
  }, [dailyCost, days]);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Daily Usage"
        value={`${dailyKwh.toFixed(2)} kWh`}
      />
      <ResultCard
        label="Daily Cost"
        value={formatCurrency(dailyCost)}
        highlight
      />
      <ResultCard
        label={`${days}-Day Usage`}
        value={`${monthlyKwh.toFixed(2)} kWh`}
      />
      <ResultCard
        label={`${days}-Day Cost`}
        value={formatCurrency(monthlyCost)}
        highlight
      />
      <ResultCard
        label="Yearly Usage"
        value={`${yearlyKwh.toFixed(2)} kWh`}
      />
      <ResultCard
        label="Yearly Cost"
        value={formatCurrency(yearlyCost)}
        highlight
      />
      <ResultCard
        label="Vs US Average (same usage)"
        value={`${(usAverageMonthlyCost - monthlyCost).toFixed(2)} ${usAverageMonthlyCost > monthlyCost ? "cheaper" : "more"}`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cumulative Cost Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            label={{ value: `Days`, position: "insideBottomRight", offset: -5 }}
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
            name="Cumulative Cost"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        An electricity cost calculator helps you estimate how much energy an appliance or device consumes and how much it costs to operate. Understanding electricity consumption is essential for managing utility bills, making energy-efficient purchasing decisions, and reducing your environmental footprint. By calculating the cost of running different appliances, you can identify which devices consume the most energy and adjust usage habits accordingly. This is especially important as electricity rates continue to rise and environmental awareness increases.
      </p>

      <p>
        <strong>Understanding Kilowatt-Hours (kWh):</strong> Electricity usage is measured in kilowatt-hours (kWh). One kilowatt-hour is the energy consumed by a 1000-watt device running for one hour. To calculate kWh: (Watts × Hours) / 1000 = kWh. For example, a 100-watt light bulb running for 10 hours uses 1 kWh. Electricity companies bill you for each kWh consumed. High-power appliances like air conditioners and electric heaters use kilowatts (thousands of watts), while devices like phone chargers and LED lights use only tens of watts. Understanding which devices in your home consume the most power helps you prioritize energy-saving efforts. Upgrading to Energy Star certified appliances can reduce consumption by 10-50% compared to standard models.
      </p>

      <p>
        <strong>Electricity Rates and Factors:</strong> Electricity rates vary significantly by location, typically ranging from $0.08 to $0.20+ per kWh in the United States. Rates depend on local utility providers, generation costs, fuel type, transmission infrastructure, and government regulations. Some regions with abundant hydroelectric or renewable energy have cheaper electricity. Urban areas often have higher rates than rural areas. Many utilities charge higher rates during peak hours (typically afternoons and evenings) and lower rates during off-peak hours. Time-of-use pricing incentivizes running high-energy appliances during off-peak hours. Understanding your local electricity rate is essential for accurate cost calculations.
      </p>

      <p>
        <strong>Energy-Saving Strategies:</strong> Reducing electricity consumption saves money and reduces environmental impact. Unplug devices when not in use—phantom loads from chargers and devices in standby mode can account for 5-10% of residential electricity use. Replace incandescent bulbs (60 watts) with LED bulbs (8 watts) for the same brightness. Adjust thermostat settings by just a few degrees to significantly reduce HVAC costs. Use programmable or smart thermostats to automatically adjust temperature based on occupancy. Run full loads in washers and dishwashers. Seal air leaks around doors and windows to reduce heating/cooling costs. These small changes can reduce electricity bills by 10-30% annually while reducing environmental impact.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Electricity Cost Calculator"
      description="Calculate electricity costs and energy consumption for appliances"
      slug="electricity-cost-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="watts"
          label="Power (Watts)"
          value={watts}
          onChange={setWatts}
          suffix="W"
          step={10}
          min={1}
          hint={`${(watts / 1000).toFixed(2)} kW`}
        />
        <InputField
          id="hours-per-day"
          label="Hours Per Day"
          value={hoursPerDay}
          onChange={setHoursPerDay}
          suffix="hours"
          step={0.5}
          min={0}
          max={24}
          hint={`${dailyKwh.toFixed(2)} kWh/day`}
        />
        <InputField
          id="electricity-rate"
          label="Electricity Rate"
          value={electricityRate}
          onChange={setElectricityRate}
          prefix="$"
          suffix="/kWh"
          step={0.01}
          min={0}
          hint="US average: ~$0.13/kWh"
        />
        <InputField
          id="days"
          label="Number of Days"
          value={days}
          onChange={setDays}
          suffix="days"
          step={1}
          min={1}
          max={365}
        />
      </div>
    </CalculatorLayout>
  );
}
