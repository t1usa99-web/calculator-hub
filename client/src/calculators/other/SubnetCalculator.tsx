import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { registerCalculator } from "@/lib/calculator-registry";
import { SUBNET_FAQS } from "@/lib/faq-other";

function ipStringToNumber(ip: string): number {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((p) => p < 0 || p > 255)) {
    return 0;
  }
  return (
    (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]
  );
}

function numberToIpString(num: number): string {
  const a = (num >>> 24) & 0xff;
  const b = (num >>> 16) & 0xff;
  const c = (num >>> 8) & 0xff;
  const d = num & 0xff;
  return `${a}.${b}.${c}.${d}`;
}

function getClass(firstOctet: number): string {
  if (firstOctet < 128) return "A";
  if (firstOctet < 192) return "B";
  if (firstOctet < 224) return "C";
  if (firstOctet < 240) return "D";
  return "E";
}

export default function SubnetCalculator() {
  const [ipAddress, setIpAddress] = useState("192.168.1.100");
  const [cidr, setCidr] = useState(24);

  const ip = ipStringToNumber(ipAddress);
  const firstOctet = (ip >>> 24) & 0xff;
  const classType = getClass(firstOctet);

  // Create subnet mask from CIDR
  let subnetMask = 0xffffffff;
  if (cidr < 32) {
    subnetMask = (0xffffffff << (32 - cidr)) & 0xffffffff;
  }

  // Network and broadcast addresses
  const networkAddr = ip & subnetMask;
  const broadcastAddr = networkAddr | (~subnetMask & 0xffffffff);

  // First and last usable hosts
  const firstUsable = networkAddr + 1;
  const lastUsable = broadcastAddr - 1;

  // Host counts
  const totalHosts = Math.pow(2, 32 - cidr);
  const usableHosts = Math.max(0, totalHosts - 2);

  // Wildcard mask
  const wildcardMask = ~subnetMask & 0xffffffff;

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Network Address"
        value={numberToIpString(networkAddr)}
        highlight={true}
      />
      <ResultCard
        label="Subnet Mask"
        value={numberToIpString(subnetMask)}
        highlight={true}
      />
      <ResultCard
        label="Broadcast Address"
        value={numberToIpString(broadcastAddr)}
      />
      <ResultCard
        label="First Usable Host"
        value={numberToIpString(firstUsable)}
      />
      <ResultCard
        label="Last Usable Host"
        value={numberToIpString(lastUsable)}
      />
      <ResultCard
        label="Wildcard Mask"
        value={numberToIpString(wildcardMask)}
      />
      <ResultCard
        label="Total Hosts"
        value={totalHosts.toString()}
      />
      <ResultCard
        label="Usable Hosts"
        value={usableHosts.toString()}
      />
      <ResultCard
        label="IP Class"
        value={classType}
      />
    </div>
  );

  return (
    <CalculatorLayout
      title="Subnet Calculator"
      description="Calculate network addresses, host ranges, and subnet masks"
      slug="subnet-calculator"
      results={results}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            IP Address
          </label>
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="192.168.1.100"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter a valid IPv4 address (e.g., 192.168.1.1)
          </p>
        </div>

        <InputField
          id="cidr"
          label="CIDR Prefix Length"
          value={cidr}
          onChange={setCidr}
          suffix="/"
          min={0}
          max={32}
          step={1}
          hint="Number of bits in the network prefix"
        />

        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
          <p className="font-semibold mb-2">Quick Reference:</p>
          <ul className="space-y-1 text-xs">
            <li>/24 = 254 hosts (common for small networks)</li>
            <li>/25 = 126 hosts</li>
            <li>/16 = 65,534 hosts (common for medium networks)</li>
            <li>/8 = 16,777,214 hosts (Class A)</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: SubnetCalculator,
  slug: "subnet-calculator",
  title: "Subnet Calculator",
  shortTitle: "Subnet",
  description:
    "Calculate subnet masks, network ranges, and host addresses for IPv4 networks",
  category: "other",
  icon: "🌐",
  keywords: [
    "subnet",
    "CIDR",
    "IP address",
    "network mask",
    "IPv4",
    "networking",
  ],
  faqs: SUBNET_FAQS,
  dateModified: "2026-04-09",
});
