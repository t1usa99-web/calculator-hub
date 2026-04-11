import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function DogAgeCalculator() {
  const [dogAge, setDogAge] = useState(3.5);
  const [size, setSize] = useState<"small" | "medium" | "large" | "giant">("medium");

  // Modern dog age calculation
  // Year 1 = 15 human years (any size)
  // Year 2 = 9 human years (any size)
  // Year 3+ = varies by size: small +4/yr, medium +5/yr, large +6/yr, giant +7/yr

  let humanAge = 0;
  let lifeStage = "";

  if (dogAge <= 0) {
    humanAge = 0;
    lifeStage = "Newborn";
  } else if (dogAge <= 1) {
    // First year: 15 human years for the full year
    humanAge = dogAge * 15;
    lifeStage = "Puppy";
  } else if (dogAge <= 2) {
    // Second year: 15 + 9 = 24 for 2 years
    const year2Progress = dogAge - 1;
    humanAge = 15 + year2Progress * 9;
    lifeStage = "Puppy";
  } else {
    // Year 3+: 15 + 9 + (size-dependent increment per year)
    const yearlyIncrement =
      size === "small"
        ? 4
        : size === "medium"
          ? 5
          : size === "large"
            ? 6
            : 7;
    const additionalYears = dogAge - 2;
    humanAge = 24 + additionalYears * yearlyIncrement;
    if (dogAge < 7) {
      lifeStage = "Adult";
    } else {
      lifeStage = "Senior";
    }
  }

  // Chart: human age vs dog age for this size
  const chartData = Array.from({ length: 20 }, (_, i) => {
    const age = i * 0.5;
    let hAge = 0;
    if (age <= 1) {
      hAge = age * 15;
    } else if (age <= 2) {
      hAge = 15 + (age - 1) * 9;
    } else {
      const increment =
        size === "small"
          ? 4
          : size === "medium"
            ? 5
            : size === "large"
              ? 6
              : 7;
      hAge = 24 + (age - 2) * increment;
    }
    return { dogAge: age, humanAge: hAge };
  });

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Dog Age" value={formatNumber(dogAge, 1) + " years"} />
      <ResultCard label="Dog Size" value={size.charAt(0).toUpperCase() + size.slice(1)} />
      <ResultCard label="Human Equivalent Age" value={formatNumber(humanAge, 1) + " years"} highlight />
      <ResultCard label="Life Stage" value={lifeStage} highlight />
      <ResultCard
        label="Formula"
        value={size === "small" ? "Year 1: ×15, Year 2: +9, Year 3+: +4/yr" : size === "medium" ? "Year 1: ×15, Year 2: +9, Year 3+: +5/yr" : size === "large" ? "Year 1: ×15, Year 2: +9, Year 3+: +6/yr" : "Year 1: ×15, Year 2: +9, Year 3+: +7/yr"}
      />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Dog Age to Human Age Conversion ({size.charAt(0).toUpperCase() + size.slice(1)} Dogs)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dogAge" label={{ value: "Dog Age (years)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Human Age (years)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => formatNumber(value as number, 1)} />
          <Line
            type="monotone"
            dataKey="humanAge"
            stroke="#ec4899"
            dot={{ fill: "#ec4899", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        The myth that one dog year equals seven human years is outdated and inaccurate. Modern scientific research shows dogs age much faster in their first two years, then more slowly afterward. Size significantly affects aging—large and giant breeds age faster than small breeds. Understanding a dog's true age helps with medical care, nutrition, exercise, and knowing when to switch to senior dog food and provide additional health monitoring.
      </p>

      <p>
        <strong>The First Two Years:</strong> Dogs mature rapidly in their first two years. A dog's first year equals about 15 human years because dogs reach puberty and their adult size within the first year. A two-year-old dog is not 14 (7 × 2) but approximately 24 human years old. This rapid maturation is why puppies learn so quickly and need consistent training during this period. By age two, dogs are fully mature adults in terms of development, though behavior may continue refining. Understanding this first-year acceleration helps owners appreciate the rapid growth and learning capability of puppies.
      </p>

      <p>
        <strong>Size and Aging:</strong> Large and giant breeds age faster than small breeds. A small dog at age 10 might be around 56 in human years, while a giant breed at the same age could be 75+. This difference relates to metabolic rate—larger dogs have faster metabolisms and shorter lifespans. Small dogs often live 15-20 years, while giant breeds live 7-10 years. A Chihuahua at 15 human years is relatively young for its breed; a Great Dane at 8 human years is quite old. Choosing breed-appropriate activities and healthcare based on size-specific aging helps dogs stay healthy and happy throughout their lives.
      </p>

      <p>
        <strong>Life Stages and Care:</strong> Puppies (first year) need frequent small meals, training, and socialization. Adult dogs (2-7 years depending on size) have stable nutritional and exercise needs. Senior dogs (7+ for small breeds, 5+ for large breeds) need lower-calorie diets, easier exercise, and more frequent health monitoring. Senior dogs develop arthritis, hearing loss, vision problems, and cognitive changes. Transitioning to senior food around age 7 (small breeds) or 5 (large breeds) helps manage weight and joint health. Regular veterinary checkups become more important for senior dogs, and pain management may be needed for arthritis or other age-related conditions.
      </p>

      <p>
        <strong>Understanding Health and Lifespan:</strong> Knowing a dog's human equivalent age helps interpret health recommendations. A small dog at age 12 is only about 64 in human years (middle-aged for humans), while a giant breed at age 8 is about 75 in human years (approaching elderly). This changes how veterinarians approach screening and preventive care. Genetic factors, diet, exercise, and healthcare significantly affect individual dogs' aging trajectories. Mixed breeds often live longer than purebreds. This calculator provides a general guide, but individual dogs age differently based on breed, genetics, and lifestyle.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Dog Age Calculator"
      description="Convert dog age to human equivalent age, accounting for breed size"
      slug="dog-age-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <InputField
        id="dogAge"
        label="Dog Age (years)"
        value={dogAge}
        onChange={setDogAge}
        step={0.25}
        min={0}
        max={30}
      />
      <SelectField
        id="size"
        label="Dog Size"
        value={size}
        onChange={(v) => setSize(v as "small" | "medium" | "large" | "giant")}
        options={[
          { label: "Small (under 25 lbs)", value: "small" },
          { label: "Medium (25-50 lbs)", value: "medium" },
          { label: "Large (50-90 lbs)", value: "large" },
          { label: "Giant (over 90 lbs)", value: "giant" },
        ]}
      />
    </CalculatorLayout>
  );
}
