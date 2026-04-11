import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function CDCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [apy, setAPY] = useState(5.0);
  const [termMonths, setTermMonths] = useState(12);
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");

  const compoundingOptions = [
    { value: "daily", label: "Daily (365x/year)" },
    { value: "monthly", label: "Monthly (12x/year)" },
    { value: "quarterly", label: "Quarterly (4x/year)" },
    { value: "annual", label: "Annually (1x/year)" },
  ];

  // Determine compounding periods per year
  const compoundingPerYear =
    compoundingFrequency === "daily"
      ? 365
      : compoundingFrequency === "monthly"
      ? 12
      : compoundingFrequency === "quarterly"
      ? 4
      : 1;

  const r = apy / 100;
  const n = compoundingPerYear;
  const t = termMonths / 12;

  // Calculate maturity value: A = P(1 + r/n)^(nt)
  const maturityValue = initialDeposit * Math.pow(1 + r / n, n * t);
  const totalInterestEarned = maturityValue - initialDeposit;

  // Effective annual yield (APY vs. stated rate)
  const effectiveAnnualYield = Math.pow(1 + r / n, n) - 1;

  // Generate month-by-month growth data
  const growthData = [];
  for (let month = 0; month <= termMonths; month++) {
    const monthsElapsed = month;
    const yearsElapsed = monthsElapsed / 12;
    const value = initialDeposit * Math.pow(1 + r / n, n * yearsElapsed);
    growthData.push({
      month,
      value,
      interest: value - initialDeposit,
    });
  }

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Maturity Value"
        value={formatCurrency(maturityValue)}
        highlight={true}
      />
      <ResultCard
        label="Total Interest Earned"
        value={formatCurrency(totalInterestEarned)}
        highlight={true}
      />
      <ResultCard
        label="Initial Deposit"
        value={formatCurrency(initialDeposit)}
      />
      <ResultCard
        label="APY (Stated)"
        value={formatNumber(apy, 2) + "%"}
      />
      <ResultCard
        label="Effective Annual Yield"
        value={formatNumber(effectiveAnnualYield * 100, 3) + "%"}
      />
      <ResultCard
        label="CD Term"
        value={`${termMonths} ${termMonths === 1 ? "month" : "months"}`}
      />
      <ResultCard
        label="Compounding"
        value={compoundingFrequency.charAt(0).toUpperCase() + compoundingFrequency.slice(1)}
      />
      <ResultCard
        label="Monthly Interest"
        value={formatCurrency(totalInterestEarned / termMonths)}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        CD Growth Over {termMonths} Months
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={growthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Month", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis
            label={{ value: "Value ($)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={2}
            name="Total Value"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Certificates of Deposit (CDs)
      </h3>
      <p>
        A Certificate of Deposit (CD) is a low-risk savings product offered by banks and credit unions where you deposit money for a fixed term (3 months to 5 years typically) in exchange for a fixed interest rate. CDs are FDIC-insured (up to $250,000 per depositor per institution), making them extremely safe. In return for locking up your money, you receive a higher interest rate than regular savings accounts. For example, while regular savings accounts might yield 0.5%, 12-month CDs currently yield 4-5.5%, and long-term CDs yield 5%+ (as of 2026).
      </p>
      <p>
        <strong>How APY and Compounding Work:</strong> APY (Annual Percentage Yield) is the effective annual return on a CD after accounting for compounding. A CD's stated APY already reflects compounding, so a 5% APY CD yields 5% annually regardless of compounding frequency. However, compounding frequency affects how often interest is added: daily compounding yields slightly more than monthly, which yields more than annual. For example, $10,000 at 5% APY for 1 year yields $10,512.50 (the difference between daily vs. monthly compounding is small, typically {'{'}'{'}'}$10-20). The calculator automatically shows the effective annual yield based on your selected compounding frequency.
      </p>
      <p>
        <strong>CD Ladder Strategy:</strong> A CD ladder is a technique where you buy multiple CDs with staggered maturity dates. For example, buy five 1-year CDs with maturity dates 6 months apart. As each CD matures, reinvest it in a new CD at the longest term available. This provides regular access to portions of your money while locking most funds into higher-yielding longer-term CDs. Laddering offers flexibility (you're not locking all money for 5 years) while capturing higher yields than keeping everything in a savings account. It's ideal for building an emergency fund while earning better returns.
      </p>
      <p>
        <strong>Early Withdrawal Penalties:</strong> CDs impose penalties for early withdrawal before maturity, typically forfeiting 3-12 months of interest (varies by bank and term). For example, breaking a $10,000 CD that matures in 12 months and yields $500 interest might cost $125-500 in penalties. Some banks offer no-penalty CDs with slightly lower rates, sacrificing 0.5% yield for withdrawal flexibility. Never invest CD money you might need soon, and consider no-penalty CDs if you value flexibility over maximum yield. The early withdrawal penalty essentially eliminates profit and part of your principal.
      </p>
      <p>
        <strong>CD Rates and Economic Cycles:</strong> CD rates fluctuate with Federal Reserve policy and economic conditions. When the Fed raises rates, new CDs offer higher rates, but old CDs locked in at lower rates become less attractive. Conversely, when rates fall, existing CDs locked in at higher rates become valuable. A 5-year CD locked at 5% in a 2% rate environment is highly desirable. Monitor rate trends: if rates are rising and you have short-term CDs maturing, expect better rates on reinvestment. If rates are falling or you expect them to fall, longer-term CDs at current rates become attractive.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="CD Calculator"
      description="Calculate Certificate of Deposit maturity value and interest earned"
      slug="cd-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="initial-deposit"
          label="Initial Deposit"
          value={initialDeposit}
          onChange={setInitialDeposit}
          prefix="$"
          min={100}
          step={1000}
        />

        <InputField
          id="apy"
          label="Annual Percentage Yield (APY)"
          value={apy}
          onChange={setAPY}
          suffix="%"
          min={0}
          max={15}
          step={0.01}
        />

        <InputField
          id="term-months"
          label="CD Term"
          value={termMonths}
          onChange={setTermMonths}
          suffix="months"
          min={1}
          max={60}
          step={1}
        />

        <SelectField
          id="compounding-frequency"
          label="Compounding Frequency"
          value={compoundingFrequency}
          onChange={setCompoundingFrequency}
          options={compoundingOptions}
        />
      </div>
    </CalculatorLayout>
  );
}
