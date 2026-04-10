import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function DebtToIncomeCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [mortgagePayment, setMortgagePayment] = useState(1500);
  const [carPayment, setCarPayment] = useState(300);
  const [studentLoanPayment, setStudentLoanPayment] = useState(200);
  const [creditCardPayment, setCreditCardPayment] = useState(100);
  const [otherDebts, setOtherDebts] = useState(50);

  const totalMonthlyDebts =
    mortgagePayment +
    carPayment +
    studentLoanPayment +
    creditCardPayment +
    otherDebts;

  // Front-end DTI (housing ratio)
  const frontEndDTI = (mortgagePayment / monthlyIncome) * 100;

  // Back-end DTI (total debt ratio)
  const backEndDTI = (totalMonthlyDebts / monthlyIncome) * 100;

  // Determine DTI assessment
  let frontEndAssessment = "";
  let backEndAssessment = "";
  let frontEndColor = "#10b981";
  let backEndColor = "#10b981";

  if (frontEndDTI <= 28) {
    frontEndAssessment = "Good (under 28%)";
  } else if (frontEndDTI <= 36) {
    frontEndAssessment = "Acceptable (28-36%)";
    frontEndColor = "#f59e0b";
  } else {
    frontEndAssessment = "High (over 36%)";
    frontEndColor = "#ef4444";
  }

  if (backEndDTI <= 36) {
    backEndAssessment = "Good (under 36%)";
  } else if (backEndDTI <= 43) {
    backEndAssessment = "Acceptable (36-43%)";
    backEndColor = "#f59e0b";
  } else {
    backEndAssessment = "High (over 43%)";
    backEndColor = "#ef4444";
  }

  // Debt breakdown for pie chart
  const debtBreakdown = [
    { name: "Mortgage", value: mortgagePayment, color: "#3b82f6" },
    { name: "Car Loan", value: carPayment, color: "#10b981" },
    { name: "Student Loans", value: studentLoanPayment, color: "#f59e0b" },
    { name: "Credit Cards", value: creditCardPayment, color: "#ef4444" },
    { name: "Other", value: otherDebts, color: "#8b5cf6" },
  ].filter((d) => d.value > 0);

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Monthly Income"
        value={formatCurrency(monthlyIncome)}
      />
      <ResultCard
        label="Total Monthly Debts"
        value={formatCurrency(totalMonthlyDebts)}
      />
      <ResultCard
        label="Front-End DTI (Housing)"
        value={formatNumber(frontEndDTI, 1) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Front-End Assessment"
        value={frontEndAssessment}
      />
      <ResultCard
        label="Back-End DTI (Total Debts)"
        value={formatNumber(backEndDTI, 1) + "%"}
        highlight={true}
      />
      <ResultCard
        label="Back-End Assessment"
        value={backEndAssessment}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Monthly Debt Breakdown
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={debtBreakdown}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) =>
              `${name}: ${formatCurrency(value)}`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {debtBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(value as number)} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900">
        Understanding Debt-to-Income Ratio (DTI)
      </h3>
      <p>
        Debt-to-income ratio (DTI) is a percentage that compares your monthly debt payments to your gross monthly income. Lenders use DTI to assess your ability to repay loans and manage additional debt. A lower DTI indicates you have sufficient income relative to debt obligations, making you a lower-risk borrower. For example, if you earn $5,000/month and owe $1,500/month in debts, your DTI is 30%. DTI is a key factor in mortgage, auto loan, and personal loan approvals. Most lenders prefer DTI below 43%, though some go up to 50% for well-qualified borrowers.
      </p>
      <p>
        <strong>Front-End vs. Back-End DTI:</strong> There are two types of DTI. Front-end DTI (also called housing ratio) compares only housing costs (mortgage/rent + property tax + insurance + HOA) to income. Lenders prefer this under 28%. Back-end DTI compares all monthly debt payments (housing, auto, credit cards, student loans, personal loans) to income. Lenders prefer this under 36-43%. For mortgage approval, lenders check both ratios. You might have a good front-end DTI but fail on back-end DTI if you have substantial other debts. Understanding both is critical for loan qualification.
      </p>
      <p>
        <strong>DTI Benchmarks by Lender Type:</strong> Mortgage lenders typically allow back-end DTI up to 43% (though 36% is preferred), and front-end DTI up to 28%. Some jumbo lenders go to 50% for excellent credit and large down payments. Auto lenders often allow DTI up to 50% because auto loans have collateral. Credit card issuers sometimes ignore DTI calculations, focusing instead on credit score and payment history. Personal loan lenders typically want DTI below 40%. Federal Student Aid programs don't use traditional DTI but instead evaluate income relative to monthly loan payments. Know your lender's specific requirements when applying.
      </p>
      <p>
        <strong>How to Improve Your DTI:</strong> You can lower DTI in two ways: increase income or reduce debt. Increasing income (raises, side gigs, bonuses) improves DTI immediately. Reducing debt takes longer but is often more achievable: pay down credit cards, eliminate auto loans, refinance student loans to lower payments. Prioritize high-interest debt first (credit cards, payday loans) as they cost the most. Some lenders allow you to exclude low-balance credit cards (under $100-200) from DTI if you close them, providing immediate improvement. Avoid taking on new debt while trying to improve DTI, as new accounts lower credit scores and increase debt obligations.
      </p>
      <p>
        <strong>DTI vs. Credit Score:</strong> While related, DTI and credit score are different. Credit score reflects your payment history, credit utilization, and age of accounts. DTI is purely a ratio of debt to income. You can have a 750 credit score but fail mortgage qualification due to high DTI (too much debt for your income). Conversely, lower credit scores don't necessarily mean high DTI — someone with a 650 score but low DTI might qualify for loans. Lenders evaluate both metrics holistically. To maximize loan approval odds, maintain both a good credit score (740+) and low DTI (under 43%).
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Debt-to-Income Calculator"
      description="Calculate your DTI ratio and get a lender assessment"
      slug="debt-to-income-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="monthly-income"
          label="Gross Monthly Income"
          value={monthlyIncome}
          onChange={setMonthlyIncome}
          prefix="$"
          min={100}
          step={500}
        />

        <InputField
          id="mortgage-payment"
          label="Mortgage/Rent Payment"
          value={mortgagePayment}
          onChange={setMortgagePayment}
          prefix="$"
          min={0}
          step={50}
        />

        <InputField
          id="car-payment"
          label="Car Loan Payment"
          value={carPayment}
          onChange={setCarPayment}
          prefix="$"
          min={0}
          step={50}
        />

        <InputField
          id="student-loan-payment"
          label="Student Loan Payment"
          value={studentLoanPayment}
          onChange={setStudentLoanPayment}
          prefix="$"
          min={0}
          step={50}
        />

        <InputField
          id="credit-card-payment"
          label="Credit Card Payment"
          value={creditCardPayment}
          onChange={setCreditCardPayment}
          prefix="$"
          min={0}
          step={25}
        />

        <InputField
          id="other-debts"
          label="Other Monthly Debts"
          value={otherDebts}
          onChange={setOtherDebts}
          prefix="$"
          min={0}
          step={25}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: DebtToIncomeCalculator,
  slug: "debt-to-income-calculator",
  title: "Debt-to-Income Calculator",
  shortTitle: "DTI Ratio",
  description:
    "Calculate debt-to-income ratio and assess loan qualification readiness",
  category: "finance",
  icon: "📉",
  keywords: [
    "debt to income",
    "DTI",
    "debt ratio",
    "lending qualification",
    "mortgage approval",
  ],
  popular: false,
  dateModified: "2026-04-10",
  faqs: [
    {
      question: "What is Debt-to-Income ratio (DTI)?",
      answer:
        "DTI is a percentage comparing your total monthly debt payments to gross monthly income. For example, if you earn $5,000 monthly and owe $1,500 in debts, your DTI is 30%. Lenders use DTI to assess your ability to repay new loans. Lower DTI (under 43%) indicates you can comfortably handle additional debt.",
    },
    {
      question: "What is front-end vs. back-end DTI?",
      answer:
        "Front-end DTI (housing ratio) compares only housing costs to income; lenders prefer this under 28%. Back-end DTI compares all monthly debts to income; lenders prefer under 36-43%. For mortgages, lenders evaluate both. You could have good front-end DTI but fail back-end DTI if you have substantial other debts like student loans or credit cards.",
    },
    {
      question: "What DTI do lenders require for a mortgage?",
      answer:
        "Most mortgage lenders require back-end DTI under 43%, with 36% being preferred for better rates and terms. Some jumbo lenders accept up to 50% for excellent credit and large down payments. Fannie Mae and Freddie Mac typically cap at 43%. Check with your lender for specific requirements, as DTI thresholds vary.",
    },
    {
      question: "How can I improve my DTI?",
      answer:
        "Increase income (raises, side gigs) or reduce debt. Paying down credit cards, eliminating auto loans, or refinancing student loans lowers your debt load. Prioritize high-interest debt first (credit cards). Avoid taking on new debt while improving DTI. Some lenders allow closing low-balance credit cards to improve DTI by excluding them from the calculation.",
    },
    {
      question: "Does DTI include all debts?",
      answer:
        "For mortgage qualification, DTI typically includes mortgage/rent, auto loans, student loans, credit cards, and personal loans (using minimum monthly payments). It usually excludes utilities, insurance, and subscriptions unless specifically listed on credit reports. Check with your lender for their exact DTI calculation method, as requirements vary.",
    },
  ],
});
