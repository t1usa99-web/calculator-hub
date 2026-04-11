import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function CommissionCalculator() {
  const [salesAmount, setSalesAmount] = useState(50000);
  const [commissionRate, setCommissionRate] = useState(5);
  const [commissionType, setCommissionType] = useState("flat");
  const [baseSalary, setBaseSalary] = useState(2000);
  const [drawAmount, setDrawAmount] = useState(0);
  const [tier1Limit, setTier1Limit] = useState(25000);
  const [tier1Rate, setTier1Rate] = useState(3);
  const [tier2Rate, setTier2Rate] = useState(6);
  const [tier3Rate, setTier3Rate] = useState(9);

  const commissionTypeOptions = [
    { value: "flat", label: "Flat Rate" },
    { value: "tiered", label: "Tiered Rate" },
    { value: "draw", label: "Draw Against Commission" },
  ];

  // Calculate commission based on type
  let commission = 0;

  if (commissionType === "flat") {
    commission = (salesAmount * commissionRate) / 100;
  } else if (commissionType === "tiered") {
    const tier2Limit = tier1Limit * 2;
    if (salesAmount <= tier1Limit) {
      commission = (salesAmount * tier1Rate) / 100;
    } else if (salesAmount <= tier2Limit) {
      const tier1Sales = tier1Limit;
      const tier2Sales = salesAmount - tier1Limit;
      commission = (tier1Sales * tier1Rate) / 100 + (tier2Sales * tier2Rate) / 100;
    } else {
      const tier1Sales = tier1Limit;
      const tier2Sales = tier2Limit - tier1Limit;
      const tier3Sales = salesAmount - tier2Limit;
      commission =
        (tier1Sales * tier1Rate) / 100 +
        (tier2Sales * tier2Rate) / 100 +
        (tier3Sales * tier3Rate) / 100;
    }
  } else if (commissionType === "draw") {
    const baseCommission = (salesAmount * commissionRate) / 100;
    commission = Math.max(0, baseCommission - drawAmount);
  }

  const effectiveRate = salesAmount > 0 ? (commission / salesAmount) * 100 : 0;
  const grossPay = commission + baseSalary;

  // Generate comparison data for different sales levels
  const comparisonData = [];
  for (let sales = 0; sales <= salesAmount * 2; sales += Math.max(5000, salesAmount / 10)) {
    let comp = 0;

    if (commissionType === "flat") {
      comp = (sales * commissionRate) / 100;
    } else if (commissionType === "tiered") {
      const t1Limit = tier1Limit;
      const t2Limit = tier1Limit * 2;
      if (sales <= t1Limit) {
        comp = (sales * tier1Rate) / 100;
      } else if (sales <= t2Limit) {
        const t1Sales = t1Limit;
        const t2Sales = sales - t1Limit;
        comp = (t1Sales * tier1Rate) / 100 + (t2Sales * tier2Rate) / 100;
      } else {
        const t1Sales = t1Limit;
        const t2Sales = t2Limit - t1Limit;
        const t3Sales = sales - t2Limit;
        comp =
          (t1Sales * tier1Rate) / 100 +
          (t2Sales * tier2Rate) / 100 +
          (t3Sales * tier3Rate) / 100;
      }
    } else if (commissionType === "draw") {
      const baseComm = (sales * commissionRate) / 100;
      comp = Math.max(0, baseComm - drawAmount);
    }

    comparisonData.push({
      sales,
      commission: comp,
      totalPay: comp + baseSalary,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Sales Amount"
        value={formatCurrency(salesAmount)}
      />
      <ResultCard
        label="Commission Earned"
        value={formatCurrency(commission)}
        highlight={true}
      />
      <ResultCard
        label="Effective Commission Rate"
        value={formatNumber(effectiveRate, 2) + "%"}
      />
      <ResultCard
        label="Commission Type"
        value={commissionType === "flat" ? "Flat Rate" : commissionType === "tiered" ? "Tiered" : "Draw Against"}
      />
      {commissionType === "draw" && (
        <ResultCard
          label="Draw Amount"
          value={formatCurrency(drawAmount)}
        />
      )}
      {baseSalary > 0 && (
        <>
          <ResultCard
            label="Base Salary"
            value={formatCurrency(baseSalary)}
          />
          <ResultCard
            label="Gross Pay (Salary + Commission)"
            value={formatCurrency(grossPay)}
            highlight={true}
          />
        </>
      )}
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Commission at Different Sales Levels
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="sales"
            label={{ value: "Sales ($)", position: "insideBottomRight", offset: -5 }}
            tickFormatter={(value) => formatCurrency(value as number)}
          />
          <YAxis
            label={{ value: "Commission ($)", angle: -90, position: "insideLeft" }}
            tickFormatter={(value) => formatCurrency(value as number)}
          />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Bar dataKey="commission" fill="#10b981" name="Commission">
            {comparisonData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? "#10b981" : "#06b6d4"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Sales Commission Structures
      </h3>
      <p>
        Sales commission is a form of compensation where employees earn a percentage of the revenue they generate. Commission aligns employee incentives with company revenue and is common in sales roles across finance, real estate, car sales, and insurance. There are three main commission structures: flat-rate (a fixed percentage of all sales), tiered (different percentages at different sales levels to incentivize higher performance), and draw against commission (a guaranteed minimum amount deducted from future commission earnings). Understanding your commission structure is critical for financial planning and evaluating job offers.
      </p>
      <p>
        <strong>Flat-Rate Commission:</strong> The simplest structure, where you earn the same commission percentage on all sales. For example, a 5% commission on $50,000 in sales yields $2,500. Flat-rate structures are predictable and fair, but don't incentivize exceeding targets. This structure works well for newer salespeople or companies with stable, predictable sales, but may lose top performers who want higher upside. An employee earning 5% on $100,000 in sales ($5,000) might be demotivated, feeling the extra effort didn't significantly boost earnings. Some flat-rate structures include caps, meaning commission above a certain sales threshold stops increasing at the maximum rate.
      </p>
      <p>
        <strong>Tiered Commission:</strong> Different commission percentages at different sales levels, designed to incentivize exceeding targets. Example: 3% on first $25,000 in sales, 6% on next $25,000, and 9% on sales beyond $50,000. This rewards top performers: $25,000 sales yields $750, $50,000 sales yields $3,000, and $100,000 sales yields $9,000 — much higher upside. Tiered structures motivate salespeople to maximize revenue. However, they can create cliff effects: someone with $24,999 in sales makes $750, while $25,001 makes $750.06 because the second dollar is at the higher tier. When negotiating, clarify tier breakpoints and whether tiers reset monthly, quarterly, or annually.
      </p>
      <p>
        <strong>Draw Against Commission:</strong> A guaranteed minimum salary (draw) advanced against future commission earnings. Example: $2,000 monthly draw with 5% commission. If commission earned is $3,000, you keep the extra $1,000. If commission earned is only $1,500, you owe back $500 next month (or it's forgiven, depending on the agreement). Draws provide income stability and appeal to risk-averse salespeople, but they cap upside because high earners use the draw inefficiently. A commission-only role (no draw) with 10% rate may pay more for top performers than a draw-based role. Always clarify in writing whether the draw is recoverable or forgivable if commission doesn't cover it.
      </p>
      <p>
        <strong>Evaluating Commission Job Offers:</strong> When evaluating a sales position, compare total expected compensation across all structures. A $40,000 base salary plus 3% commission is more stable than $0 base and 8% commission, but the second might pay more for top performers. Research typical sales ranges in the role and industry. If you generate $100,000 in sales, calculate total pay under each offer. Don't be swayed by high commission percentages if the company has historically low sales or if you're new and unlikely to close many deals. Ask for sample earnings (what top, average, and bottom 25% performers actually earned last year) to validate expectations.
      </p>
      <p>
        <strong>Commission Taxes and Planning:</strong> Commission income is subject to income tax and self-employment tax (if 1099 contractor). Unlike salary (where taxes are withheld), commission requires setting aside 25-40% for taxes depending on total income and state taxes. Keep detailed records of all sales and commissions for tax purposes. If commissions fluctuate significantly, consider quarterly estimated tax payments to avoid large bills. Some salespeople negotiate monthly commission payouts to manage cash flow and tax planning. In high-earning years, consider contributing to SEP-IRAs or Solo 401(k)s to reduce taxable income and build retirement savings.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Commission Calculator"
      description="Calculate sales commission with flat, tiered, and draw-based structures"
      slug="commission-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="sales-amount"
          label="Sales Amount"
          value={salesAmount}
          onChange={setSalesAmount}
          prefix="$"
          min={0}
          step={1000}
        />

        <SelectField
          id="commission-type"
          label="Commission Type"
          value={commissionType}
          onChange={setCommissionType}
          options={commissionTypeOptions}
        />

        {commissionType === "flat" && (
          <InputField
            id="commission-rate"
            label="Commission Rate"
            value={commissionRate}
            onChange={setCommissionRate}
            suffix="%"
            min={0}
            max={50}
            step={0.1}
          />
        )}

        {commissionType === "tiered" && (
          <>
            <InputField
              id="tier1-limit"
              label="Tier 1 Upper Limit"
              value={tier1Limit}
              onChange={setTier1Limit}
              prefix="$"
              min={1000}
              step={5000}
            />

            <InputField
              id="tier1-rate"
              label="Tier 1 Commission Rate"
              value={tier1Rate}
              onChange={setTier1Rate}
              suffix="%"
              min={0}
              max={50}
              step={0.1}
            />

            <InputField
              id="tier2-rate"
              label="Tier 2 Commission Rate"
              value={tier2Rate}
              onChange={setTier2Rate}
              suffix="%"
              min={0}
              max={50}
              step={0.1}
            />

            <InputField
              id="tier3-rate"
              label="Tier 3+ Commission Rate"
              value={tier3Rate}
              onChange={setTier3Rate}
              suffix="%"
              min={0}
              max={50}
              step={0.1}
            />
          </>
        )}

        {commissionType === "draw" && (
          <>
            <InputField
              id="commission-rate-draw"
              label="Commission Rate"
              value={commissionRate}
              onChange={setCommissionRate}
              suffix="%"
              min={0}
              max={50}
              step={0.1}
            />

            <InputField
              id="draw-amount"
              label="Monthly Draw Amount"
              value={drawAmount}
              onChange={setDrawAmount}
              prefix="$"
              min={0}
              step={500}
            />
          </>
        )}

        {commissionType !== "tiered" && (
          <InputField
            id="base-salary"
            label="Base Salary (Optional)"
            value={baseSalary}
            onChange={setBaseSalary}
            prefix="$"
            min={0}
            step={500}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
