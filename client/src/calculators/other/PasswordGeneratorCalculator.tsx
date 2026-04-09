import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function PasswordGeneratorCalculator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState("yes");
  const [lowercase, setLowercase] = useState("yes");
  const [numbers, setNumbers] = useState("yes");
  const [symbols, setSymbols] = useState("yes");

  // Generate password
  const generatedPassword = useMemo(() => {
    let characters = "";
    if (uppercase === "yes") characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase === "yes") characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers === "yes") characters += "0123456789";
    if (symbols === "yes") characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (characters.length === 0) {
      return "Select at least one character type";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }, [length, uppercase, lowercase, numbers, symbols]);

  // Calculate password strength
  let characterSpace = 0;
  if (uppercase === "yes") characterSpace += 26;
  if (lowercase === "yes") characterSpace += 26;
  if (numbers === "yes") characterSpace += 10;
  if (symbols === "yes") characterSpace += 32;

  const entropy = characterSpace > 0 ? Math.log2(Math.pow(characterSpace, length)) : 0;

  // Estimate crack time (assuming 1 billion guesses per second)
  const totalCombinations = Math.pow(characterSpace, length);
  const secondsToCrack = totalCombinations / 2 / 1000000000; // 1 billion guesses/sec
  let crackTimeText = "";
  if (secondsToCrack < 1) {
    crackTimeText = "< 1 second";
  } else if (secondsToCrack < 60) {
    crackTimeText = `${secondsToCrack.toFixed(1)} seconds`;
  } else if (secondsToCrack < 3600) {
    crackTimeText = `${(secondsToCrack / 60).toFixed(1)} minutes`;
  } else if (secondsToCrack < 86400) {
    crackTimeText = `${(secondsToCrack / 3600).toFixed(1)} hours`;
  } else if (secondsToCrack < 31536000) {
    crackTimeText = `${(secondsToCrack / 86400).toFixed(1)} days`;
  } else {
    crackTimeText = `${(secondsToCrack / 31536000).toFixed(1)} years`;
  }

  // Determine strength level
  let strengthLevel = "Weak";
  let strengthColor = "text-red-600";
  if (entropy >= 50 && entropy < 70) {
    strengthLevel = "Fair";
    strengthColor = "text-yellow-600";
  } else if (entropy >= 70 && entropy < 100) {
    strengthLevel = "Good";
    strengthColor = "text-blue-600";
  } else if (entropy >= 100) {
    strengthLevel = "Excellent";
    strengthColor = "text-green-600";
  }

  const strengthData = [
    { name: "Current", value: entropy },
    { name: "Fair (50)", value: 50 },
    { name: "Good (70)", value: 70 },
    { name: "Excellent (100)", value: 100 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Password Length"
        value={formatNumber(length)}
      />
      <ResultCard
        label="Character Set Size"
        value={formatNumber(characterSpace)}
      />
      <ResultCard
        label="Entropy (bits)"
        value={entropy.toFixed(2)}
        highlight
      />
      <ResultCard
        label={`Strength: ${strengthLevel}`}
        value={strengthLevel}
        highlight
      />
      <ResultCard
        label="Estimated Crack Time"
        value={crackTimeText}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Password Strength Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={strengthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Entropy (bits)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A password generator creates strong, random passwords to protect your online accounts and sensitive information. Strong passwords are critical for cybersecurity—weak passwords are the leading cause of data breaches and unauthorized access. A good password should be long, include a mix of character types (uppercase, lowercase, numbers, and symbols), and be completely random. Password generators eliminate the human tendency to create predictable passwords based on personal information, common words, or patterns that hackers can exploit.
      </p>

      <p>
        <strong>Password Strength Factors:</strong> Password strength depends on length and character variety. Each additional character exponentially increases the difficulty of cracking through brute force. A 12-character password using all character types (uppercase, lowercase, numbers, symbols) offers significantly more protection than an 8-character password. Entropy, measured in bits, quantifies password strength—higher entropy means greater security. The character set size (number of possible characters) and password length determine entropy mathematically: entropy = log₂(character_set_size^password_length). Security experts recommend passwords with at least 80-100 bits of entropy for personal accounts and 120+ bits for financial or critical accounts.
      </p>

      <p>
        <strong>Password Management Best Practices:</strong> Never reuse passwords across different accounts—if one site is breached, all your accounts using that password are vulnerable. Use unique passwords for important accounts like email, banking, and social media. Store passwords in a password manager (like Bitwarden, 1Password, or LastPass) rather than writing them down or storing them in browsers. Enable two-factor authentication (2FA) whenever available for additional security. Change passwords if you suspect a breach. Avoid passwords based on personal information (names, birthdates, addresses) that hackers can research. Use passphrases (random words strung together) as an alternative to complex passwords if they meet length requirements.
      </p>

      <p>
        <strong>Understanding Crack Times:</strong> The estimated time to crack a password assumes an attacker can make one billion guesses per second (a reasonable estimate for online attacks). Offline attacks on stolen password databases can be much faster. Our estimates are conservative and represent average time to find the password (the expected value when randomly searching). This why strong passwords are essential: even if hackers obtain your password hash, a sufficiently random and long password should remain uncrackable for centuries. As computer speeds increase, password length and complexity requirements continue to increase. This is why security experts emphasize using password managers to handle the complexity.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Password Generator"
      description="Generate strong, random passwords with customizable options"
      slug="password-generator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="length"
          label="Password Length"
          value={length}
          onChange={setLength}
          type="number"
          step={1}
          min={4}
          max={128}
        />
        <SelectField
          id="uppercase"
          label="Include Uppercase (A-Z)"
          value={uppercase}
          onChange={setUppercase}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
        <SelectField
          id="lowercase"
          label="Include Lowercase (a-z)"
          value={lowercase}
          onChange={setLowercase}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
        <SelectField
          id="numbers"
          label="Include Numbers (0-9)"
          value={numbers}
          onChange={setNumbers}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
        <SelectField
          id="symbols"
          label="Include Symbols (!@#$%...)"
          value={symbols}
          onChange={setSymbols}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />

        <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-6">
          <p className="text-sm text-gray-600 mb-2">Generated Password:</p>
          <div className="bg-white border border-gray-300 rounded p-3 font-mono text-sm break-all select-all">
            {generatedPassword}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(generatedPassword);
            }}
            className="mt-2 px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: PasswordGeneratorCalculator,
  slug: "password-generator",
  title: "Password Generator",
  shortTitle: "Password",
  description: "Generate strong random passwords with customizable character options",
  category: "other",
  icon: "🔐",
  keywords: ["password generator", "strong password", "random password", "password security"],
  popular: false,
});
