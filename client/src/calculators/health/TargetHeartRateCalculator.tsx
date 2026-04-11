import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function TargetHeartRateCalculator() {
  const [age, setAge] = useState(30);
  const [restingHR, setRestingHR] = useState(70);
  const [useKarvonen, setUseKarvonen] = useState("false");

  // Max HR = 220 - age
  const maxHR = 220 - age;

  // Calculate training zones using selected method
  let zones: Array<{ zone: string; intensity: string; minBPM: number; maxBPM: number; color: string }> = [];

  if (useKarvonen === "true" && restingHR > 0) {
    // Karvonen formula: Target HR = (max HR - rest HR) × intensity + rest HR
    const reserved = maxHR - restingHR;
    zones = [
      {
        zone: "Recovery",
        intensity: "50-60%",
        minBPM: Math.round((reserved * 0.5) + restingHR),
        maxBPM: Math.round((reserved * 0.6) + restingHR),
        color: "#3b82f6",
      },
      {
        zone: "Fat Burn",
        intensity: "60-70%",
        minBPM: Math.round((reserved * 0.6) + restingHR),
        maxBPM: Math.round((reserved * 0.7) + restingHR),
        color: "#10b981",
      },
      {
        zone: "Cardio",
        intensity: "70-80%",
        minBPM: Math.round((reserved * 0.7) + restingHR),
        maxBPM: Math.round((reserved * 0.8) + restingHR),
        color: "#f59e0b",
      },
      {
        zone: "Hard",
        intensity: "80-90%",
        minBPM: Math.round((reserved * 0.8) + restingHR),
        maxBPM: Math.round((reserved * 0.9) + restingHR),
        color: "#ef4444",
      },
      {
        zone: "Maximum",
        intensity: "90-100%",
        minBPM: Math.round((reserved * 0.9) + restingHR),
        maxBPM: Math.round(reserved + restingHR),
        color: "#991b1b",
      },
    ];
  } else {
    // Max HR method
    zones = [
      {
        zone: "Recovery",
        intensity: "50-60%",
        minBPM: Math.round(maxHR * 0.5),
        maxBPM: Math.round(maxHR * 0.6),
        color: "#3b82f6",
      },
      {
        zone: "Fat Burn",
        intensity: "60-70%",
        minBPM: Math.round(maxHR * 0.6),
        maxBPM: Math.round(maxHR * 0.7),
        color: "#10b981",
      },
      {
        zone: "Cardio",
        intensity: "70-80%",
        minBPM: Math.round(maxHR * 0.7),
        maxBPM: Math.round(maxHR * 0.8),
        color: "#f59e0b",
      },
      {
        zone: "Hard",
        intensity: "80-90%",
        minBPM: Math.round(maxHR * 0.8),
        maxBPM: Math.round(maxHR * 0.9),
        color: "#ef4444",
      },
      {
        zone: "Maximum",
        intensity: "90-100%",
        minBPM: Math.round(maxHR * 0.9),
        maxBPM: Math.round(maxHR),
        color: "#991b1b",
      },
    ];
  }

  // Chart data
  const chartData = zones.map((z) => ({
    zone: z.zone,
    minBPM: z.minBPM,
    maxBPM: z.maxBPM,
    color: z.color,
  }));

  const results = (
    <div className="space-y-4">
      <ResultCard label="Maximum Heart Rate" value={`${maxHR} BPM`} highlight />
      {useKarvonen === "true" && <ResultCard label="Resting Heart Rate" value={`${restingHR} BPM`} />}
      <div className="grid grid-cols-1 gap-3">
        {zones.map((z, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4" style={{ borderColor: z.color }}>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900">{z.zone} Zone</p>
                <p className="text-sm text-gray-600">{z.intensity} max HR</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-gray-900">{z.minBPM}{'\u2013'}{z.maxBPM} BPM</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Heart Rate Training Zones (BPM)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={zones}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: "BPM", position: "insideBottomRight", offset: -10 }} />
          <YAxis dataKey="zone" type="category" width={80} />
          <Tooltip formatter={(value) => `${value} BPM`} />
          <Bar dataKey="minBPM" fill="#e5e7eb" name="Min BPM" />
          <Bar dataKey="maxBPM" fill="#6366f1" name="Max BPM" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        <strong>Disclaimer:</strong> These are general heart rate zones. Individual max HR varies based on genetics, fitness level, and health status. People with heart conditions, taking certain medications, or having other health concerns should consult a doctor before intense training. Actual max HR can only be determined through max HR testing under controlled conditions.
      </p>

      <p>
        Target heart rate zones guide exercise intensity. The formula for estimating max heart rate is 220 minus age {'\u2014'} simple but with individual variation of {'\u00b1'}10{'\u2013'}20 BPM. The Karvonen formula ({'\u201C'}heart rate reserve{'\u201D'} method) is more accurate for trained individuals: it accounts for resting heart rate. Heart rate zones represent training intensities: recovery (easy conversation), fat burn (can talk but breathless), cardio (breathing hard, minimal speech), hard (very hard to speak), maximum (sprint efforts).
      </p>

      <p>
        <strong>Zone Descriptions and Benefits:</strong> <strong>Recovery Zone (50{'\u2013'}60%):</strong> Easy, conversational pace; builds base fitness and aids recovery. <strong>Fat Burn Zone (60{'\u2013'}70%):</strong> Moderate intensity; burns significant fat calories (though higher-intensity intervals burn more total calories). <strong>Cardio Zone (70{'\u2013'}80%):</strong> Harder breathing; improves aerobic capacity and fitness. <strong>Hard Zone (80{'\u2013'}90%):</strong> Very challenging; builds anaerobic fitness and speed. <strong>Maximum (90{'\u2013'}100%):</strong> All-out sprints; used briefly in interval training.
      </p>

      <p>
        <strong>How to Use These Zones:</strong> A balanced training week includes zones 1{'\u2013'}3: 70% of volume at easy{'\u2013'}moderate pace (recovery, fat burn), 20% at harder cardio intensity, and 10% at hard or max effort. Wearing a heart rate monitor (chest strap or smartwatch) helps track zones during exercise. Start exercise at recovery zone for 5{'\u2013'}10 min warm-up, progress to target zone, then cool down in recovery zone. Avoid staying in the hard zone constantly {'\u2014'} recovery days are essential for adaptation and injury prevention.
      </p>

      <p>
        <strong>Factors Affecting Heart Rate:</strong> Fitness level, altitude, temperature, dehydration, caffeine, and stress all affect heart rate response to exercise. Trained athletes have lower resting HR (sometimes {'\u003c'}40 BPM) and lower max HR. As fitness improves, you accomplish more work at the same heart rate {'\u2014'} periodically retest zones if training for several months. Monitor how you feel, not just numbers {'\u2014'} perceived exertion and heart rate should align. If something feels wrong (chest pain, extreme fatigue, dizziness), stop and seek medical attention.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Target Heart Rate Calculator"
      description="Calculate your heart rate training zones for optimal exercise intensity"
      slug="target-heart-rate-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="age"
          label="Age"
          value={age}
          onChange={setAge}
          step={1}
          min={13}
          max={100}
        />

        <SelectField
          id="useKarvonen"
          label="Use Karvonen Formula (requires resting HR)"
          value={useKarvonen}
          onChange={setUseKarvonen}
          options={[
            { value: "false", label: "No, use Max HR method" },
            { value: "true", label: "Yes, use Karvonen formula" },
          ]}
        />

        {useKarvonen === "true" && (
          <InputField
            id="restingHR"
            label="Resting Heart Rate"
            value={restingHR}
            onChange={setRestingHR}
            suffix="BPM"
            step={1}
            min={30}
            max={150}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
