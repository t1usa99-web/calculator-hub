import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";
import { registerCalculator } from "@/lib/calculator-registry";

export default function ScreenSizeCalculator() {
  const [diagonalSize, setDiagonalSize] = useState(24);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [resolution, setResolution] = useState(1920);

  // Aspect ratio ratios
  const aspectRatios: { [key: string]: number } = {
    "16:9": 16 / 9,
    "16:10": 16 / 10,
    "4:3": 4 / 3,
    "21:9": 21 / 9,
  };

  const ratio = aspectRatios[aspectRatio] || 16 / 9;

  // Calculate width and height from diagonal and aspect ratio
  // Using Pythagorean theorem: diagonal^2 = width^2 + height^2
  // If width/height = ratio, then width = height * ratio
  // diagonal^2 = (height * ratio)^2 + height^2 = height^2 * (ratio^2 + 1)
  // height = diagonal / sqrt(ratio^2 + 1)
  const height = diagonalSize / Math.sqrt(ratio * ratio + 1);
  const width = height * ratio;
  const area = width * height;

  // PPI calculation
  const ppi = Math.sqrt(resolution * resolution / (width * width + height * height));

  // Chart data: common resolutions at this diagonal size
  const chartData = [
    { resolution: 1080, height: resolution > 1080 ? "1080p" : "Standard", ppi: ppi * 0.56 },
    { resolution: 1440, height: "1440p", ppi },
    { resolution: 2160, height: "4K", ppi: ppi * 1.5 },
  ];

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard
        label="Diagonal Size"
        value={`${formatNumber(diagonalSize, 1)}"`}
      />
      <ResultCard
        label="Width"
        value={`${formatNumber(width, 2)}" / ${formatNumber(width * 2.54, 1)} cm`}
        highlight
      />
      <ResultCard
        label="Height"
        value={`${formatNumber(height, 2)}" / ${formatNumber(height * 2.54, 1)} cm`}
        highlight
      />
      <ResultCard
        label="Screen Area"
        value={`${formatNumber(area, 1)} sq in`}
      />
      <ResultCard
        label="Aspect Ratio"
        value={aspectRatio}
      />
      <ResultCard
        label="PPI (at 1920 res)"
        value={`${formatNumber(ppi, 1)} PPI`}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Pixels Per Inch at Different Resolutions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="height" />
          <YAxis />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Legend />
          <Bar dataKey="ppi" fill="#3b82f6" name="PPI" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Screen size is measured diagonally in inches. Common monitor sizes are 24", 27", 32", while TV sizes range from 43" to 85". Aspect ratio (width:height) affects how wide or tall a screen appears. 16:9 is the standard for most modern monitors and TVs. 16:10 is common on older monitors and laptops. 4:3 was standard before widescreen became common. 21:9 is ultrawide, used for gaming and content creation. Understanding screen dimensions helps when choosing displays, positioning them, and calculating the screen area needed for viewing.
      </p>

      <p>
        <strong>Common Monitor Aspect Ratios:</strong> 16:9 (widescreen) is standard for most monitors, 1920x1080 (Full HD) and 2560x1440 (QHD) are popular resolutions. 16:10 (taller aspect ratio) was common on older monitors; 1680x1050 and 1920x1200 were standard. 4:3 (square-ish) was dominant before widescreen; 1024x768 and 1280x1024 were common. 21:9 (ultrawide) provides more horizontal space for gaming or content creation; 3440x1440 is a popular ultrawide resolution. Choosing an aspect ratio depends on your use case: widescreen for general use, ultrawide for gaming or multitasking.
      </p>

      <p>
        <strong>Understanding Pixels Per Inch (PPI):</strong> PPI measures pixel density; higher PPI means sharper text and images. A 24" 1080p monitor has about 92 PPI (acceptable for viewing distance of 24+ inches). A 27" 1440p monitor has about 109 PPI (crisp text). A 4K (2160p) 27" monitor has about 163 PPI (very sharp, suitable for detailed work). For laptops, 140+ PPI is comfortable; 100-120 PPI may appear slightly blurry. For TVs, 50 PPI is acceptable because viewing distance is greater. Your viewing distance matters: farther away, lower PPI is acceptable; closer viewing requires higher PPI for comfort.
      </p>

      <p>
        <strong>Choosing Screen Size and Resolution:</strong> For office work and general use, 24" 1080p is adequate and affordable. For content creation, coding, or detailed work, 27" 1440p or 32" 4K provides more real estate and clarity. Ultrawide 34" monitors offer horizontal space without the height increase of dual monitors. Viewing distance matters: sit 20-30 inches from a 24" monitor, 24-30 inches from 27", 30+ inches from 4K. High-refresh monitors (144+ Hz) are good for gaming. Consider color accuracy for photo/video editing. Budget, desk space, and GPU capability also influence choices.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Screen Size Calculator"
      description="Calculate monitor dimensions and pixel density from diagonal size"
      slug="screen-size-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <InputField
          id="diagonal"
          label="Diagonal Size"
          value={diagonalSize}
          onChange={setDiagonalSize}
          suffix="inches"
          step={0.1}
          min={10}
          max={100}
        />

        <SelectField
          id="aspect-ratio"
          label="Aspect Ratio"
          value={aspectRatio}
          onChange={setAspectRatio}
          options={[
            { value: "16:9", label: "16:9 (Widescreen)" },
            { value: "16:10", label: "16:10 (Taller)" },
            { value: "4:3", label: "4:3 (Square)" },
            { value: "21:9", label: "21:9 (Ultrawide)" },
          ]}
        />

        <InputField
          id="resolution"
          label="Horizontal Resolution (PPI Calculator)"
          value={resolution}
          onChange={setResolution}
          suffix="pixels"
          step={100}
          min={800}
          max={4000}
          hint={`Typical resolutions: 1920 (Full HD), 2560 (QHD), 3440 (Ultrawide), 3840 (4K)`}
        />
      </div>
    </CalculatorLayout>
  );
}

registerCalculator({
  component: ScreenSizeCalculator,
  slug: "screen-size-calculator",
  title: "Screen Size Calculator",
  shortTitle: "Screen Size",
  description: "Calculate monitor width, height, and pixel density",
  category: "other",
  icon: "🖥️",
  keywords: ["screen size calculator", "monitor dimensions", "PPI", "resolution", "aspect ratio", "display"],
  popular: true,
  faqs: [
    {
      question: "How is screen size measured?",
      answer: "Screen size is measured diagonally from one corner to the opposite corner, typically in inches. A 24-inch monitor has a diagonal of 24 inches. This measurement doesn't directly tell you the width or height; you need the aspect ratio for that. A 24-inch 16:9 monitor is about 21 inches wide and 12 inches tall. A 24-inch 4:3 monitor is about 19 inches wide and 14.5 inches tall. The same diagonal size with different aspect ratios results in different physical dimensions. Always check both diagonal size and aspect ratio when choosing a monitor.",
    },
    {
      question: "What aspect ratio should I choose?",
      answer: "16:9 (widescreen) is the standard for most modern monitors and TVs; it's suitable for most uses. 16:10 (taller) was common on older monitors and provides slightly more vertical space. 4:3 (square) was dominant before widescreen but is rare today. 21:9 (ultrawide) provides extra horizontal space for gaming, video editing, or multitasking; it's more expensive and requires more desk space. Choose based on your use case: widescreen for general use, ultrawide for content creation or gaming, taller aspect ratios for coding or document editing.",
    },
    {
      question: "What is PPI and why does it matter?",
      answer: "PPI (pixels per inch) measures pixel density; higher PPI means sharper text and images. A 24-inch 1080p monitor has about 92 PPI (acceptable for normal office work). A 27-inch 1440p monitor has about 109 PPI (crisp and clear). A 4K monitor has very high PPI (150+ PPI, extremely sharp). For comfortable viewing without strain, higher PPI is better. Viewing distance matters: sitting far away, lower PPI is acceptable; sitting close, higher PPI is necessary. For laptops, 130+ PPI is comfortable; for desktops, 90-110 PPI is typical.",
    },
    {
      question: "How do I choose the right monitor size for my desk?",
      answer: "Measure your desk depth and determine your sitting distance. Most people sit 20-30 inches from a monitor. At 24 inches viewing distance, a 24-inch monitor is appropriate (viewing angle is about 60-70 degrees). At 30+ inches, a 27-inch or larger monitor is better. Ultrawide monitors (34-35 inches) require 30+ inches viewing distance and significant desk space (approximately 40 inches wide). Desk depth should be at least 24 inches for a 24-inch monitor. Leave space for keyboard and mouse. Monitor stands take less space than monitor arms. Ensure your monitor is at eye level to reduce neck strain.",
    },
    {
      question: "What resolution should I choose?",
      answer: "Common resolutions: 1920x1080 (Full HD) for 24-inch monitors, 2560x1440 (QHD) for 27-inch, 3840x2160 (4K) for 32-inch and larger. Higher resolution provides more screen real estate and sharper text. For coding and document editing, higher resolution (2560+ width) is beneficial. For gaming, consider your GPU capability; high resolution requires powerful graphics cards. For general office work, 1920x1080 is sufficient. For photo/video editing, 2560+ resolution and color-accurate displays are recommended. Balance resolution with refresh rate; high refresh (144+ Hz) is better for gaming.",
    },
  ],
  dateModified: "2026-04-10",
});
