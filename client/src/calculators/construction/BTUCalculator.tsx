import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BTUCalculator() {
  const [roomSquareFeet, setRoomSquareFeet] = useState(300);
  const [ceilingHeight, setCeilingHeight] = useState(8);
  const [insulation, setInsulation] = useState("average");
  const [sunExposure, setSunExposure] = useState("medium");
  const [climateZone, setClimateZone] = useState("temperate");
  const [numWindows, setNumWindows] = useState(3);

  // Base BTU calculation: 20 BTU per sqft for average conditions
  const baseBTU = roomSquareFeet * 20;

  // Insulation factor (adjusts base BTU)
  const insulationFactors: { [key: string]: number } = {
    poor: 1.25,
    average: 1.0,
    good: 0.85,
    excellent: 0.7,
  };
  const insulationFactor = insulationFactors[insulation] || 1.0;

  // Sun exposure factor
  const sunFactors: { [key: string]: number } = {
    low: 0.95,
    medium: 1.0,
    high: 1.15,
  };
  const sunFactor = sunFactors[sunExposure] || 1.0;

  // Climate zone factors
  const climateFactors: { [key: string]: number } = {
    cold: 1.2,
    cool: 1.1,
    temperate: 1.0,
    warm: 0.9,
    hot: 0.8,
  };
  const climateFactor = climateFactors[climateZone] || 1.0;

  // Window factor (each window adds ~500 BTU)
  const windowBTU = numWindows * 500;

  // Calculate total BTU needed
  const adjustedBTU = baseBTU * insulationFactor * sunFactor * climateFactor + windowBTU;
  const heatingBTU = adjustedBTU;
  const coolingBTU = adjustedBTU * 1.1; // Cooling slightly higher

  // Convert to tonnage (1 ton = 12,000 BTU)
  const coolingTonnage = coolingBTU / 12000;
  const heatingTonnage = heatingBTU / 12000;

  // AC unit size recommendation (common sizes: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 tons)
  const acSizes = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];
  const recommendedSize = acSizes.find((size) => size * 12000 >= coolingBTU) || 6;

  const chartData = [
    { label: "Base BTU", heating: baseBTU, cooling: baseBTU * 1.1 },
    {
      label: "With Insulation",
      heating: baseBTU * insulationFactor,
      cooling: baseBTU * insulationFactor * 1.1,
    },
    {
      label: "With All Factors",
      heating: heatingBTU,
      cooling: coolingBTU,
    },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Room Area" value={formatNumber(roomSquareFeet, 0) + " sqft"} />
      <ResultCard label="Ceiling Height" value={formatNumber(ceilingHeight, 1) + "'"} />
      <ResultCard label="Insulation Level" value={insulation} />
      <ResultCard label="Sun Exposure" value={sunExposure} />
      <ResultCard label="Climate Zone" value={climateZone} />
      <ResultCard label="Number of Windows" value={formatNumber(numWindows, 0)} />
      <ResultCard label="Base BTU (20 BTU/sqft)" value={formatNumber(baseBTU, 0)} />
      <ResultCard label="Insulation Factor" value={formatNumber(insulationFactor, 2) + "x"} />
      <ResultCard label="Sun Exposure Factor" value={formatNumber(sunFactor, 2) + "x"} />
      <ResultCard label="Climate Factor" value={formatNumber(climateFactor, 2) + "x"} />
      <ResultCard label="Window BTU" value={formatNumber(windowBTU, 0)} />
      <ResultCard label="Heating BTU Needed" value={formatNumber(heatingBTU, 0)} highlight={true} />
      <ResultCard label="Heating Tonnage" value={formatNumber(heatingTonnage, 2) + " tons"} />
      <ResultCard label="Cooling BTU Needed" value={formatNumber(coolingBTU, 0)} highlight={true} />
      <ResultCard label="Cooling Tonnage" value={formatNumber(coolingTonnage, 2) + " tons"} />
      <ResultCard label="Recommended AC Unit Size" value={formatNumber(recommendedSize, 1) + " ton(s)"} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">BTU Calculation by Stage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number, 0)} />
          <Legend />
          <Line type="monotone" dataKey="heating" stroke="#ff7300" name="Heating BTU" />
          <Line type="monotone" dataKey="cooling" stroke="#3b82f6" name="Cooling BTU" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">HVAC BTU Sizing Guide</h3>
      <p>
        <strong>Understanding BTU:</strong> BTU (British Thermal Unit) measures heating and cooling capacity. One BTU is the energy needed to raise 1 pound of water by 1 degree Fahrenheit. HVAC systems are rated in BTU per hour. A 12,000 BTU system is one refrigeration ton. Proper sizing is crucial: oversized systems short-cycle and waste energy; undersized systems can't maintain temperature.
      </p>
      <p>
        <strong>Base BTU Calculation:</strong> The standard method uses 20 BTU per square foot as a baseline. A 300 sqft room needs 6,000 BTU (300 {'×'} 20). This assumes average insulation, no sun exposure, and temperate climate. Adjustments are made for insulation, climate, windows, and sun exposure. Always perform detailed calculations rather than relying on rough estimates.
      </p>
      <p>
        <strong>Adjustment Factors:</strong> Poor insulation increases BTU needs by 25%; good insulation reduces by 15%; excellent insulation reduces by 30%. High sun exposure (south/west-facing) adds 15%. Each window adds approximately 500 BTU. Climate zones range from cold (20% increase) to hot (20% decrease). Combine factors for accurate sizing: poor insulation in cold climate may require 50%+ more capacity.
      </p>
      <p>
        <strong>Cooling vs. Heating:</strong> Cooling loads are typically 10-20% higher than heating loads due to solar gain and equipment heat. Most AC units handle both heating (with electric strips) and cooling. Heat pump systems provide efficient heating and cooling. Size the system for the higher cooling load. Oversizing cooling reduces efficiency; undersizing leaves homes uncomfortable in summer.
      </p>
      <p>
        <strong>AC Unit Sizing and Efficiency:</strong> AC units come in 0.5-ton increments (6,000, 12,000, 18,000, 24,000, 30,000 BTU). Choose a unit that meets or slightly exceeds calculated needs. SEER (Seasonal Energy Efficiency Ratio) rates cooling efficiency; HSPF rates heating. Higher SEER/HSPF means lower operating costs. Most building codes require minimum SEER 13-14. Variable-capacity systems (inverter-driven) offer best efficiency and comfort.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="HVAC BTU Calculator"
      description="Calculate BTU sizing for heating and cooling HVAC systems"
      slug="btu-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="room-sqft"
          label="Room or Area (sqft)"
          value={roomSquareFeet}
          onChange={setRoomSquareFeet}
          min={100}
          step={50}
        />

        <InputField
          id="ceiling-height"
          label="Ceiling Height (feet)"
          value={ceilingHeight}
          onChange={setCeilingHeight}
          min={6}
          max={20}
          step={0.5}
        />

        <SelectField
          id="insulation"
          label="Insulation Quality"
          value={insulation}
          onChange={setInsulation}
          options={[
            { value: "poor", label: "Poor (+25%)" },
            { value: "average", label: "Average (baseline)" },
            { value: "good", label: "Good (-15%)" },
            { value: "excellent", label: "Excellent (-30%)" },
          ]}
        />

        <SelectField
          id="sun-exposure"
          label="Sun Exposure"
          value={sunExposure}
          onChange={setSunExposure}
          options={[
            { value: "low", label: "Low (-5%)" },
            { value: "medium", label: "Medium (baseline)" },
            { value: "high", label: "High (+15%)" },
          ]}
        />

        <SelectField
          id="climate-zone"
          label="Climate Zone"
          value={climateZone}
          onChange={setClimateZone}
          options={[
            { value: "cold", label: "Cold (+20%)" },
            { value: "cool", label: "Cool (+10%)" },
            { value: "temperate", label: "Temperate (baseline)" },
            { value: "warm", label: "Warm (-10%)" },
            { value: "hot", label: "Hot (-20%)" },
          ]}
        />

        <InputField
          id="num-windows"
          label="Number of Windows"
          value={numWindows}
          onChange={setNumWindows}
          min={0}
          max={20}
          step={1}
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">BTU Reference</h4>
          <p className="text-sm text-gray-700">
            1 ton = 12,000 BTU/hr | Base: 20 BTU/sqft | Each window: +500 BTU
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BTUCalculator,
  slug: "btu-calculator",
  title: "HVAC BTU Calculator",
  shortTitle: "HVAC BTU",
  description: "Calculate required BTU for heating and cooling HVAC systems",
  category: "construction",
  icon: "❄️",
  keywords: ["HVAC", "BTU", "air conditioning", "heating", "cooling"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "How is BTU calculated for a room?",
      answer: "Start with 20 BTU per square foot as a baseline. For a 300 sqft room, that's 6,000 BTU. Adjust for insulation quality (poor +25%, good -15%), sun exposure (high +15%), and climate zone. Each window adds about 500 BTU. Example: 6,000 base + (6,000 {'×'} 0.25 poor insulation) + 1,500 (3 windows) = 8,500 BTU needed.",
    },
    {
      question: "What is a refrigeration ton and how does it relate to BTU?",
      answer: "A refrigeration ton equals 12,000 BTU per hour of cooling capacity. AC units are sized in tons: 0.5 ton (6,000 BTU), 1 ton (12,000 BTU), 1.5 tons (18,000 BTU), 2 tons (24,000 BTU), etc. A room needing 18,000 BTU requires a 1.5-ton AC unit. Tonnage represents the unit's capacity to cool or heat.",
    },
    {
      question: "What happens if my AC unit is oversized or undersized?",
      answer: "Oversized units cool too quickly and short-cycle (turn on/off frequently), reducing efficiency and humidity control. Undersized units run constantly and can't maintain temperature. Proper sizing achieves efficiency and comfort. A unit should be selected to meet or slightly exceed calculated BTU needs, not drastically oversized.",
    },
    {
      question: "How does insulation quality affect HVAC sizing?",
      answer: "Poor insulation increases heating/cooling load by 25%. Average insulation is the baseline (no adjustment). Good insulation reduces load by 15%. Excellent insulation reduces by 30%. Upgrading insulation from poor to good effectively reduces HVAC capacity needed by 40%, saving significant money on equipment and energy costs.",
    },
    {
      question: "What is SEER and why does it matter?",
      answer: "SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency on a scale of 13-25+. Higher SEER means lower operating costs. A SEER 16 unit uses about 20% less energy than SEER 13. Most modern codes require minimum SEER 13-14. Investing in higher SEER saves money over time through reduced energy bills.",
    },
  ],
});
