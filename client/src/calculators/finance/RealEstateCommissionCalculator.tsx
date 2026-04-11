import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function RealEstateCommissionCalculator() {
  const [salePrice, setSalePrice] = useState(400000);
  const [commissionRate, setCommissionRate] = useState(5.5);
  const [listingAgentSplit, setListingAgentSplit] = useState(50);
  const [buyerAgentSplit, setBuyerAgentSplit] = useState(50);
  const [comparisonRate2, setComparisonRate2] = useState(6.0);
  const [comparisonRate3, setComparisonRate3] = useState(4.0);

  // Calculate commissions
  const totalCommission = salePrice * (commissionRate / 100);
  const listingAgentCommission = totalCommission * (listingAgentSplit / 100);
  const buyerAgentCommission = totalCommission * (buyerAgentSplit / 100);
  const sellerNetProceeds = salePrice - totalCommission;

  // Comparison calculations
  const totalCommission2 = salePrice * (comparisonRate2 / 100);
  const sellerNetProceeds2 = salePrice - totalCommission2;
  const commissionDifference = totalCommission - totalCommission2;

  const totalCommission3 = salePrice * (comparisonRate3 / 100);
  const sellerNetProceeds3 = salePrice - totalCommission3;
  const commissionDifference3 = totalCommission - totalCommission3;

  const commissionData = [
    { name: "Listing Agent", value: Math.round(listingAgentCommission), color: "#3b82f6" },
    { name: "Buyer Agent", value: Math.round(buyerAgentCommission), color: "#10b981" },
  ];

  const comparisonData = [
    { rate: `${commissionRate}%`, commission: Math.round(totalCommission), netProceeds: Math.round(sellerNetProceeds) },
    { rate: `${comparisonRate2}%`, commission: Math.round(totalCommission2), netProceeds: Math.round(sellerNetProceeds2) },
    { rate: `${comparisonRate3}%`, commission: Math.round(totalCommission3), netProceeds: Math.round(sellerNetProceeds3) },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Total Commission"
        value={formatCurrency(totalCommission)}
        highlight={true}
      />
      <ResultCard
        label="Listing Agent Commission"
        value={formatCurrency(listingAgentCommission)}
      />
      <ResultCard
        label="Buyer Agent Commission"
        value={formatCurrency(buyerAgentCommission)}
      />
      <ResultCard
        label="Seller Net Proceeds"
        value={formatCurrency(sellerNetProceeds)}
        highlight={true}
      />
      <ResultCard
        label="Commission as % of Sale Price"
        value={`${formatNumber(commissionRate, 2)}%`}
      />
      <ResultCard
        label="Savings at 4% Rate"
        value={formatCurrency(commissionDifference3)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Commission Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={commissionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {commissionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Real estate commissions are the fees paid by home sellers to real estate agents who facilitate the sale. Commissions are typically split between the listing agent (representing the seller) and the buyer's agent (representing the buyer). The traditional structure is 5-6% of sale price, split 50/50. However, these rates aren't fixed—they're negotiable and have declined in recent years. A 1% difference in commission rate on a $400,000 home amounts to $4,000 in seller savings. Shopping for agents and negotiating commission rates can significantly increase net proceeds.
      </p>

      <p>
        <strong>Commission Structure and Splits:</strong> Total commission is typically listed as one rate (e.g., 5.5%) and split between listing and buyer agents. The traditional split is 50/50, but negotiable. Seller pays the listing agent an agreed rate, who then offers a percentage to the buyer's agent. For example, on a 5.5% commission: listing agent keeps some (often 2.75%), and offers 2.75% to buyer agents. Some brokers have different splits. Understanding the structure is crucial because it affects how much money is available to each agent and influences whether buyer agents show your property.
      </p>

      <p>
        <strong>Negotiating Commissions:</strong> Commission rates are NOT set by law or industry standards—they're negotiable for each transaction. Buyers and sellers can negotiate lower rates, flat fees, or tiered structures. In a strong seller's market, you have leverage to negotiate lower rates. Discount brokers offer reduced commissions (2-3%) but may provide fewer services. Full-service brokers (5-6%) justify higher rates with marketing, showings, and transaction management. Don't automatically accept the agent's initial rate; compare multiple agents and their proposed rates.
      </p>

      <p>
        <strong>Impact on Seller Net Proceeds:</strong> On a $400,000 sale: 5.5% commission costs $22,000; 4% costs $16,000; 3% costs $12,000. The 1.5% difference between 5.5% and 4% equals $6,000 in additional seller proceeds. For buyers purchasing the same $400,000 home, negotiating a lower buyer's agent commission slightly affects their closing costs. Most buyer's agent commission comes from the seller's proceeds, so effectively, lowering commission primarily increases seller's net proceeds (unless the buyer negotiates a credit).
      </p>

      <p>
        <strong>Recent Trends and Technology:</strong> Commission rates have declined nationally to average 4.5-5% as technology and online platforms reduce transaction friction. Some areas see 3-4% splits as the new standard. Flat-fee brokerages ($3,000-7,000 per transaction) appeal to sellers in higher-value markets. The 2024 National Association of Realtors settlement is likely to further increase transparency and negotiability around commissions. Always compare multiple agents, request reduced rates, and consider the full service package—not just the commission rate.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Real Estate Commission Calculator"
      description="Calculate real estate commissions and compare different rates"
      slug="real-estate-commission-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="sale-price"
          label="Sale Price"
          value={salePrice}
          onChange={setSalePrice}
          prefix="$"
          min={50000}
          step={10000}
          max={5000000}
        />
        <InputField
          id="commission-rate"
          label="Commission Rate"
          value={commissionRate}
          onChange={setCommissionRate}
          suffix="%"
          min={0.5}
          step={0.1}
          max={10}
        />
        <InputField
          id="listing-agent-split"
          label="Listing Agent Split"
          value={listingAgentSplit}
          onChange={setListingAgentSplit}
          suffix="%"
          min={0}
          step={5}
          max={100}
        />
        <InputField
          id="buyer-agent-split"
          label="Buyer Agent Split"
          value={buyerAgentSplit}
          onChange={setBuyerAgentSplit}
          suffix="%"
          min={0}
          step={5}
          max={100}
        />
        <InputField
          id="comparison-rate-2"
          label="Comparison Rate 2"
          value={comparisonRate2}
          onChange={setComparisonRate2}
          suffix="%"
          min={0.5}
          step={0.1}
          max={10}
        />
        <InputField
          id="comparison-rate-3"
          label="Comparison Rate 3"
          value={comparisonRate3}
          onChange={setComparisonRate3}
          suffix="%"
          min={0.5}
          step={0.1}
          max={10}
        />
      </div>
    </CalculatorLayout>
  );
}
