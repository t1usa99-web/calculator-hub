import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function InsulationCalculator() {
  const [areaSquareFeet, setAreaSquareFeet] = useState(1000);
  const [insulationType, setInsulationType] = useState("fiberglass-batt");
  const [desiredRValue, setDesiredRValue] = useState(19);
  const [fiberglassBattPrice, setFiberglassBattPrice] = useState(0.80);
  const [blownInPrice, setBlownInPrice] = useState(1.20);
  const [sprayFoamPrice, setSprayFoamPrice] = useState(1.50);
  const [rigidBoardPrice, setRigidBoardPrice] = useState(0.90);

  // R-value and coverage specs per product type
  // Fiberglass batts: R19 (6.25" thick, covers 64 sqft per pack of 15)
  // Blown-in cellulose: R3.5 per inch (50 lbs covers ~175 sqft at R19)
  // Spray foam: R6 per inch (1" covers 144 sqft at R6)
  // Rigid board: R5 per inch (typical 1" board covers 42.67 sqft at R5)

  let amountNeeded = 0;
  let estimatedCost = 0;
  let coveragePerUnit = 0;
  let unit = "";

  if (insulationType === "fiberglass-batt") {
    // R19 batts: 6.25" thick, covers 64 sqft per pack
    const battsPerRValue = desiredRValue / 19;
    const packsNeeded = Math.ceil((areaSquareFeet / 64) * battsPerRValue);
    amountNeeded = packsNeeded;
    estimatedCost = packsNeeded * 40 * fiberglassBattPrice;
    coveragePerUnit = 64;
    unit = "packs";
  } else if (insulationType === "blown-in") {
    // Blown-in cellulose: roughly 50 lbs covers 175 sqft at R19
    const bagsNeeded = Math.ceil((areaSquareFeet / 175) * (desiredRValue / 19));
    amountNeeded = bagsNeeded;
    estimatedCost = bagsNeeded * 1.5 * blownInPrice;
    coveragePerUnit = 175;
    unit = "bags";
  } else if (insulationType === "spray-foam") {
    // Spray foam: 1" = R6, need thickness = desiredRValue / 6
    const thickness = desiredRValue / 6;
    const squareFeetPerGallon = 144; // 1 gallon covers 144 sqft at 1" thick
    const gallonsNeeded = Math.ceil((areaSquareFeet / squareFeetPerGallon) * thickness);
    amountNeeded = gallonsNeeded;
    estimatedCost = gallonsNeeded * 50 * sprayFoamPrice;
    coveragePerUnit = 144;
    unit = "gallons";
  } else if (insulationType === "rigid-board") {
    // Rigid board: 1" = R5, need thickness = desiredRValue / 5
    const thickness = desiredRValue / 5;
    const boardsNeeded = Math.ceil((areaSquareFeet / 42.67) * thickness);
    amountNeeded = boardsNeeded;
    estimatedCost = boardsNeeded * 25 * rigidBoardPrice;
    coveragePerUnit = 42.67;
    unit = "boards (4x8)";
  }

  const chartData = [
    {
      type: "Fiberglass Batt",
      cost: Math.ceil((areaSquareFeet / 64) * (desiredRValue / 19)) * 40 * fiberglassBattPrice,
    },
    {
      type: "Blown-In",
      cost: Math.ceil((areaSquareFeet / 175) * (desiredRValue / 19)) * 1.5 * blownInPrice,
    },
    {
      type: "Spray Foam",
      cost: Math.ceil((areaSquareFeet / 144) * (desiredRValue / 6)) * 50 * sprayFoamPrice,
    },
    {
      type: "Rigid Board",
      cost: Math.ceil((areaSquareFeet / 42.67) * (desiredRValue / 5)) * 25 * rigidBoardPrice,
    },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Area to Insulate" value={formatNumber(areaSquareFeet, 0) + " sqft"} />
      <ResultCard label="Desired R-Value" value={formatNumber(desiredRValue, 0)} highlight={true} />
      <ResultCard label="Insulation Type" value={insulationType.replace(/-/g, " ")} />
      <ResultCard label="Amount Needed" value={formatNumber(amountNeeded, 0) + " " + unit} highlight={true} />
      <ResultCard label="Coverage per Unit" value={formatNumber(coveragePerUnit, 1) + " sqft"} />
      <ResultCard label="Estimated Cost" value={formatCurrency(estimatedCost)} highlight={true} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Cost Comparison by Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" angle={-30} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="cost" fill="#3b82f6" name="Cost ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">Insulation Types and R-Values</h3>
      <p>
        <strong>R-Value Explained:</strong> R-value measures thermal resistance (ability to resist heat transfer). Higher R-values mean better insulation. R-value requirements vary by climate zone and building location. Walls typically need R-13 to R-21, attics R-38 to R-60, basements R-10 to R-30. Check local building codes for your area. R-value is cumulative; layers add together (2 x R-13 = R-26).
      </p>
      <p>
        <strong>Fiberglass Batts:</strong> Fiberglass batts are the most common and affordable ($0.50-1.00/sqft). They come in standard widths (16" or 24") and R-values (R-3.8 to R-38). Easy to install between studs; cut to length with a utility knife. Permeability allows moisture movement, reducing mold risk. Ensure proper ventilation. Not ideal for air-sealing; combine with caulk for air gaps.
      </p>
      <p>
        <strong>Blown-In Insulation:</strong> Blown-in cellulose ($1.00-1.50/sqft) fills irregular spaces, attics, and cavities. Provides excellent air-sealing. Requires special equipment to blow in. Settles over time, slightly reducing R-value. Better air-sealing than batts. Can absorb moisture; ensure proper ventilation. Professional installation recommended for best results.
      </p>
      <p>
        <strong>Spray Foam:</strong> Spray foam ($1.50-2.50/sqft) provides excellent air-sealing and moisture resistance. Closed-cell foam (R-6/inch) is superior but expensive; open-cell foam (R-3.6/inch) is cheaper. Creates complete thermal barrier. Overkill for walls but essential for basements and rim joists. Professional installation required. Expands as it cures; trim excess.
      </p>
      <p>
        <strong>Choosing the Right Insulation:</strong> Fiberglass is best for walls and accessible cavities on a budget. Blown-in is ideal for attics, irregular spaces, and air-sealing. Spray foam is best for maximum performance and moisture control. Consider climate, existing insulation, air-sealing needs, moisture concerns, and budget. Proper installation is crucial; gaps or compression reduces effectiveness.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Insulation Calculator"
      description="Calculate insulation amount and cost by type and R-value"
      slug="insulation-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="area-sqft"
          label="Area to Insulate (sqft)"
          value={areaSquareFeet}
          onChange={setAreaSquareFeet}
          min={100}
          step={100}
        />

        <SelectField
          id="insulation-type"
          label="Insulation Type"
          value={insulationType}
          onChange={setInsulationType}
          options={[
            { value: "fiberglass-batt", label: "Fiberglass Batt" },
            { value: "blown-in", label: "Blown-In Cellulose" },
            { value: "spray-foam", label: "Spray Foam" },
            { value: "rigid-board", label: "Rigid Board" },
          ]}
        />

        <InputField
          id="desired-rvalue"
          label="Desired R-Value"
          value={desiredRValue}
          onChange={setDesiredRValue}
          min={3}
          max={60}
          step={1}
        />

        <InputField
          id="fiberglass-price"
          label="Fiberglass Batt Price ($/sqft)"
          value={fiberglassBattPrice}
          onChange={setFiberglassBattPrice}
          prefix="$"
          min={0}
          step={0.1}
        />

        <InputField
          id="blown-in-price"
          label="Blown-In Price ($/sqft)"
          value={blownInPrice}
          onChange={setBlownInPrice}
          prefix="$"
          min={0}
          step={0.1}
        />

        <InputField
          id="spray-foam-price"
          label="Spray Foam Price ($/sqft)"
          value={sprayFoamPrice}
          onChange={setSprayFoamPrice}
          prefix="$"
          min={0}
          step={0.1}
        />

        <InputField
          id="rigid-board-price"
          label="Rigid Board Price ($/sqft)"
          value={rigidBoardPrice}
          onChange={setRigidBoardPrice}
          prefix="$"
          min={0}
          step={0.1}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: InsulationCalculator,
  slug: "insulation-calculator",
  title: "Insulation Calculator",
  shortTitle: "Insulation",
  description: "Calculate insulation needed by type and desired R-value",
  category: "construction",
  icon: "📐",
  keywords: ["insulation", "R-value", "thermal", "energy efficiency"],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is an R-value and why does it matter?",
      answer: "R-value measures how well insulation resists heat transfer. Higher R-values provide better insulation. Walls typically need R-13 to R-21, attics R-38 to R-60, depending on climate. Building codes specify minimum R-values by location. R-values are additive; two layers of R-13 create R-26. Better insulation reduces heating/cooling costs and improves comfort.",
    },
    {
      question: "What is the difference between fiberglass, blown-in, and spray foam insulation?",
      answer: "Fiberglass batts are affordable ($0.50-1.00/sqft) and easy to install but leave air gaps. Blown-in cellulose ($1.00-1.50/sqft) fills irregular spaces and seals better. Spray foam ($1.50-2.50/sqft) provides excellent air-sealing and moisture resistance but is expensive. Choose based on location, budget, and air-sealing needs.",
    },
    {
      question: "How do I know what R-value I need for my area?",
      answer: "R-value requirements vary by climate zone and building location. The U.S. Department of Energy provides maps showing recommended R-values. Cold climates need higher R-values (R-38 to R-60 in attics). Moderate climates need R-19 to R-30. Check local building codes for minimum requirements in your area.",
    },
    {
      question: "Can I stack insulation layers to achieve higher R-values?",
      answer: "Yes, R-values are additive. Two layers of R-13 batt insulation create R-26 total. However, ensure proper ventilation; some combinations trap moisture and cause mold. Consult building codes before stacking different insulation types. Spray foam and rigid board typically don't need additional insulation.",
    },
    {
      question: "Is professional installation necessary for insulation?",
      answer: "Fiberglass batts can be DIY-installed if done carefully (wear protection, cut accurately). Blown-in and spray foam require professional equipment and expertise for optimal results. Professional installation ensures proper coverage, density, and air-sealing. The cost difference is often worth it for performance and warranty. Improper installation reduces effectiveness significantly.",
    },
  ],
});
