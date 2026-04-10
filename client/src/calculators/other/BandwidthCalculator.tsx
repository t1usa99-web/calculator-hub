import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function BandwidthCalculator() {
  const [fileSize, setFileSize] = useState(500);
  const [fileSizeUnit, setFileSizeUnit] = useState("MB");
  const [speed, setSpeed] = useState(10);
  const [speedUnit, setSpeedUnit] = useState("Mbps");

  // Convert to bytes
  const unitToBytes: Record<string, number> = {
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  };

  const fileSizeBytes = fileSize * unitToBytes[fileSizeUnit];

  // Convert speed to bits per second
  const speedToBps: Record<string, number> = {
    Kbps: 1000,
    Mbps: 1000 * 1000,
    Gbps: 1000 * 1000 * 1000,
  };

  const speedBps = speed * speedToBps[speedUnit];
  const speedBytesPerSecond = speedBps / 8;

  // Calculate download time in seconds
  const downloadTimeSeconds = fileSizeBytes / speedBytesPerSecond;

  // Format time
  const formatTime = (seconds: number): string => {
    if (seconds < 60) {
      return formatNumber(seconds, 1) + " seconds";
    } else if (seconds < 3600) {
      const minutes = seconds / 60;
      return formatNumber(minutes, 1) + " minutes";
    } else {
      const hours = seconds / 3600;
      return formatNumber(hours, 1) + " hours";
    }
  };

  // How much data in 1 hour, 1 day, 1 week
  const dataPerHour = (speedBytesPerSecond * 3600) / unitToBytes["GB"];
  const dataPerDay = dataPerHour * 24;
  const dataPerWeek = dataPerDay * 7;

  // Chart data: download times for various file sizes
  const chartData = [100, 500, 1000, 2000, 5000, 10000].map((mb) => {
    const bytes = mb * unitToBytes["MB"];
    const seconds = bytes / speedBytesPerSecond;
    return {
      sizeMB: mb,
      timeSeconds: seconds,
      timeMinutes: seconds / 60,
    };
  });

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="File Size" value={formatNumber(fileSize, 1) + " " + fileSizeUnit} />
      <ResultCard label="Connection Speed" value={formatNumber(speed, 1) + " " + speedUnit} />
      <ResultCard label="Download Time" value={formatTime(downloadTimeSeconds)} highlight />
      <ResultCard label="Speed in MB/s" value={formatNumber(speedBytesPerSecond / unitToBytes["MB"], 2)} />
      <ResultCard label="Data per Hour" value={formatNumber(dataPerHour, 1) + " GB" } />
      <ResultCard label="Data per Day" value={formatNumber(dataPerDay, 1) + " GB" } />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Download Time by File Size
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sizeMB" label={{ value: "File Size (MB)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Time (minutes)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 2)} />
          <Line
            type="monotone"
            dataKey="timeMinutes"
            stroke="#f59e0b"
            dot={{ fill: "#f59e0b", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Bandwidth is the maximum rate at which data can be transferred over a network connection. Understanding bandwidth helps estimate download/upload times, plan internet usage, and troubleshoot slow connections. Bandwidth is measured in bits per second (bps), with kilobits (Kbps), megabits (Mbps), and gigabits (Gbps) being common units. Note that file sizes use different units: bytes (B), kilobytes (KB), megabytes (MB), and gigabytes (GB).
      </p>

      <p>
        <strong>Bits vs. Bytes:</strong> A bit is the smallest unit of data (0 or 1). A byte is 8 bits. Bandwidth is expressed in bits per second (bps), while file sizes are in bytes. This is why a 10 Mbps connection seems slower than expected—it's 10 megabits per second, which equals 1.25 megabytes per second (10 ÷ 8). A 1 MB file on a 10 Mbps connection takes about 0.8 seconds to download. A 1 GB file takes about 800 seconds (13+ minutes). This distinction confuses many users and is a common source of frustration with ISP speed claims.
      </p>

      <p>
        <strong>Real-world Considerations:</strong> Advertised bandwidth is a theoretical maximum. Real speeds are usually lower due to network congestion, interference, protocol overhead, and server limitations. Factors like Wi-Fi signal strength, distance from the router, and other users on the network significantly impact actual speeds. Fiber connections consistently achieve advertised speeds, while cable and DSL vary more. Wired connections are faster than wireless. Testing actual speeds with tools like Speedtest.net reveals your true bandwidth. For critical downloads, use wired connections and avoid peak usage times for best results.
      </p>

      <p>
        <strong>Bandwidth Planning:</strong> For households, typical needs are 5-25 Mbps for casual use (browsing, email, video calls). Streaming 4K video requires 15-25 Mbps. Gaming online requires 1-5 Mbps download but low latency matters more. Families with multiple users need higher total bandwidth. For businesses, calculations consider peak usage times and concurrent users. Data caps (common with satellite and some cable) limit monthly usage (e.g., 250 GB/month). Exceeding caps results in throttling or overage fees. This calculator helps estimate whether a plan's bandwidth and data cap suit your needs.
      </p>

      <p>
        <strong>Network Speeds Over Time:</strong> Speeds have increased dramatically. Early modems (1990s) were 56 Kbps. Broadband ADSL (2000s) was 1-10 Mbps. Modern cable is 50-500 Mbps. Fiber is 100 Mbps to 10 Gbps. 5G cellular is 100-1000 Mbps. Bandwidth needs also increase with larger files and HD/4K content. A 1 GB 4K movie that took 2+ hours to download in 2005 now downloads in minutes. Future 8K content and immersive technologies will demand even higher bandwidth, making connection upgrades a regular consideration for heavy users.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Bandwidth Calculator"
      description="Calculate download time and data transfer rates"
      slug="bandwidth-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="fileSize"
        label="File Size"
        value={fileSize}
        onChange={setFileSize}
        step={100}
        min={1}
      />
      <SelectField
        id="fileSizeUnit"
        label="File Size Unit"
        value={fileSizeUnit}
        onChange={setFileSizeUnit}
        options={[
          { label: "KB", value: "KB" },
          { label: "MB", value: "MB" },
          { label: "GB", value: "GB" },
          { label: "TB", value: "TB" },
        ]}
      />
      <InputField
        id="speed"
        label="Connection Speed"
        value={speed}
        onChange={setSpeed}
        step={1}
        min={0.1}
      />
      <SelectField
        id="speedUnit"
        label="Speed Unit"
        value={speedUnit}
        onChange={setSpeedUnit}
        options={[
          { label: "Kbps", value: "Kbps" },
          { label: "Mbps", value: "Mbps" },
          { label: "Gbps", value: "Gbps" },
        ]}
      />
    </CalculatorLayout>
  );
}

registerCalculator({
  component: BandwidthCalculator,
  slug: "bandwidth-calculator",
  title: "Bandwidth Calculator",
  shortTitle: "Bandwidth",
  description: "Calculate download time and data transfer rates based on bandwidth",
  category: "other",
  icon: "📡",
  keywords: ["bandwidth calculator", "download time", "upload speed", "internet speed"],
  popular: false,
  faqs: [
    {
      question: "Why is my download speed slower than my ISP's advertised bandwidth?",
      answer:
        "Advertised speeds are theoretical maximums under ideal conditions. Real factors reduce actual speed: network congestion (peak hours have slower speeds), Wi-Fi signal strength and distance from router (wireless is slower than wired), protocol overhead (about 5-10% of bandwidth goes to network management), server limitations (some servers don't deliver at full speed), and hardware limits (older routers/NICs cap speeds). A 100 Mbps plan rarely delivers exactly 100 Mbps. Test with Speedtest.net to see your actual speed. If consistently 50% slower, contact your ISP—it may indicate a problem worth investigating.",
    },
    {
      question: "What's the difference between Mbps and MBps, and why does it matter?",
      answer:
        "Mbps = megabits per second (bandwidth, used by ISPs), MBps = megabytes per second (file transfer speed). 1 byte = 8 bits, so 100 Mbps = 12.5 MBps. This distinction matters because ISPs advertise Mbps while operating systems show file transfer in MBps. A 100 Mbps connection downloads at 12.5 MBps, not 100 MBps. This is partly why ISP speeds seem disappointing—users expect 100 MB/s transfers from 100 Mbps connections. Always remember: bandwidth in bits/second, file sizes in bytes. Divide Mbps by 8 to get MBps.",
    },
    {
      question: "How much bandwidth do I need for common activities?",
      answer:
        "Browsing and email: 1-5 Mbps. Video calls (Zoom): 2.5-4 Mbps. Streaming HD video: 5-10 Mbps. Streaming 4K video: 15-25 Mbps. Online gaming: 1-5 Mbps (latency matters more). Downloading large files: depends on file size and desired time. Family of 4 with mixed activities: 25-100 Mbps recommended. Multiple 4K streams simultaneously: 50+ Mbps. Work-from-home with video: 10-25 Mbps. Most homes benefit from 50-100 Mbps plans. Gigabit fiber (1000 Mbps) is overkill for residential users unless you run a business or stream professionally.",
    },
    {
      question: "What does a data cap mean for my bandwidth and usage?",
      answer:
        "A data cap limits total monthly data transfer (e.g., 250 GB/month). Some ISPs throttle speeds after reaching the cap; others charge overage fees. Data caps don't limit instantaneous bandwidth (speed) but total cumulative usage. A 250 GB cap with 100 Mbps bandwidth means you could theoretically use the cap in about 2.4 days of continuous use at max speed. In practice, monthly usage includes streaming, browsing, updates, and backups. Streaming 4K video uses 15-20 GB per day of heavy use. Large file transfers (system updates, game installs) consume significant data. If on a capped plan, monitor usage with router or ISP tools to avoid overage fees.",
    },
    {
      question: "How can I improve my actual download speeds?",
      answer:
        "Use a wired Ethernet connection instead of Wi-Fi for maximum speed. Position your router centrally and elevate it (not on the floor). Reduce Wi-Fi interference by changing channels in router settings. Restart your router regularly to clear memory. Close bandwidth-heavy applications while downloading (streaming, video calls). Avoid peak usage times (evenings, weekends) when congestion is high. Update your router firmware and check if your hardware is outdated. Contact your ISP to verify you're getting advertised speeds—if not, report the issue. Upgrade your plan if consistently slow. Switch ISPs if better options are available in your area. For business, consider dedicated lines or bonded connections for guaranteed bandwidth.",
    },
  ],
  dateModified: "2026-04-10",
});
