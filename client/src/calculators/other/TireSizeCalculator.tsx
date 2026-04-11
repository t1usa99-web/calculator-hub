import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function TireSizeCalculator() {
  const [tireSize, setTireSize] = useState("225/45R17");
  const [compareTire, setCompareTire] = useState("225/50R17");

  // Parse tire size (e.g., 225/45R17)
  const parseTireSize = (size: string) => {
    const match = size.match(/(\d+)\/(\d+)R(\d+)/i);
    if (!match) return null;
    return {
      width: parseInt(match[1]),
      aspectRatio: parseInt(match[2]),
      rimDiameter: parseInt(match[3]),
    };
  };

  const calculateTireMetrics = (parsed: ReturnType<typeof parseTireSize>) => {
    if (!parsed) return null;

    const { width, aspectRatio, rimDiameter } = parsed;

    // Sidewall height in mm
    const sidewallHeight = (width * aspectRatio) / 100;

    // Overall diameter in inches
    // 2 × sidewall height (in inches) + rim diameter
    const sidewallHeightInches = sidewallHeight / 25.4;
    const overallDiameter = 2 * sidewallHeightInches + rimDiameter;

    // Circumference in inches
    const circumference = Math.PI * overallDiameter;

    // Revolutions per mile
    const revsPerMile = 63360 / circumference;

    return {
      width,
      aspectRatio,
      rimDiameter,
      sidewallHeight,
      overallDiameter,
      circumference,
      revsPerMile,
    };
  };

  const tire1 = parseTireSize(tireSize);
  const tire2 = parseTireSize(compareTire);
  const metrics1 = calculateTireMetrics(tire1);
  const metrics2 = calculateTireMetrics(tire2);

  const diameterDiff = metrics1 && metrics2 ? metrics2.overallDiameter - metrics1.overallDiameter : 0;
  const revsDiff = metrics1 && metrics2 ? metrics2.revsPerMile - metrics1.revsPerMile : 0;

  const results = metrics1 ? (
    <div className="grid grid-cols-1 gap-4">
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">{tireSize}</h3>
        <div className="grid grid-cols-2 gap-2">
          <ResultCard label="Width (mm)" value={formatNumber(metrics1.width, 0)} />
          <ResultCard label="Aspect Ratio" value={formatNumber(metrics1.aspectRatio, 0) + "%"} />
          <ResultCard label="Rim Diameter" value={formatNumber(metrics1.rimDiameter, 0) + " in"} />
          <ResultCard label="Sidewall Height" value={formatNumber(metrics1.sidewallHeight, 1) + " mm"} />
          <ResultCard label="Overall Diameter" value={formatNumber(metrics1.overallDiameter, 2) + " in"} />
          <ResultCard label="Circumference" value={formatNumber(metrics1.circumference, 2) + " in"} />
          <ResultCard label="Revs per Mile" value={formatNumber(metrics1.revsPerMile, 1)} />
        </div>
      </div>

      {metrics2 && (
        <div className="border-t pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">{compareTire}</h3>
          <div className="grid grid-cols-2 gap-2">
            <ResultCard label="Width (mm)" value={formatNumber(metrics2.width, 0)} />
            <ResultCard label="Aspect Ratio" value={formatNumber(metrics2.aspectRatio, 0) + "%"} />
            <ResultCard label="Rim Diameter" value={formatNumber(metrics2.rimDiameter, 0) + " in"} />
            <ResultCard label="Sidewall Height" value={formatNumber(metrics2.sidewallHeight, 1) + " mm"} />
            <ResultCard label="Overall Diameter" value={formatNumber(metrics2.overallDiameter, 2) + " in"} highlight={diameterDiff > 0} />
            <ResultCard label="Circumference" value={formatNumber(metrics2.circumference, 2) + " in"} />
            <ResultCard label="Revs per Mile" value={formatNumber(metrics2.revsPerMile, 1)} highlight={revsDiff > 0} />
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Comparison</h3>
            <div className="grid grid-cols-2 gap-2">
              <ResultCard
                label="Diameter Difference"
                value={(diameterDiff > 0 ? "+" : "") + formatNumber(diameterDiff, 2) + " in"}
              />
              <ResultCard
                label="Diameter % Change"
                value={(diameterDiff > 0 ? "+" : "") + formatNumber((diameterDiff / metrics1.overallDiameter) * 100, 1) + "%"}
              />
              <ResultCard
                label="Revs Difference"
                value={(revsDiff < 0 ? "+" : "") + formatNumber(Math.abs(revsDiff), 1)}
              />
              <ResultCard
                label="Speed Impact"
                value={(revsDiff < 0 ? "+" : "-") + formatNumber(Math.abs(revsDiff / metrics1.revsPerMile) * 100, 1) + "%"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center py-8 text-gray-500">
      Enter a valid tire size (e.g., 225/45R17)
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        Tire size notation like 225/45R17 encodes the tire's dimensions. 225 is width in millimeters, 45 is the sidewall height as a percentage of width, R indicates radial construction, and 17 is the rim diameter in inches. Understanding tire sizes helps ensure proper replacements, assess handling changes, and calculate speedometer accuracy. Different tire sizes affect acceleration, fuel efficiency, handling, and speedometer readings.
      </p>

      <p>
        <strong>Reading Tire Codes:</strong> The format is width/aspectRatioRrimDiameter. Width is the tire's measured width in millimeters from sidewall to sidewall. Aspect ratio is the sidewall height as a percentage of width (45% means sidewall is 45% of 225mm, or 101.25mm). R means radial (the standard modern construction). Rim diameter is where the tire mounts, in inches. For 225/45R17: width 225mm, sidewall height 101.25mm, 17-inch rim. Variations like 225/45R17 101W indicate load rating (101) and speed rating (W for 168 mph).
      </p>

      <p>
        <strong>Overall Diameter and Speedometer:</strong> The tire's overall diameter (sidewall + sidewall + rim) affects speedometer accuracy and gear ratios. Larger diameter tires result in fewer revolutions per mile, potentially causing speedometer to read slower than actual speed. A switch from 225/45R17 to 225/50R17 (taller sidewall) increases diameter, reducing revolutions per mile by about 1%, making your speedometer read about 1% slow. This matters for speeding tickets and fuel economy calculations. Very large changes in tire size can noticeably affect speedometer accuracy and drivability.
      </p>

      <p>
        <strong>Practical Applications:</strong> Winter tires might use taller sidewalls (higher aspect ratio) for better ride and flex in cold conditions. Performance tires use lower aspect ratios (40-45%) for a sportier feel and better handling. Off-road tires often have taller sidewalls (50-60%) for more flex and traction. Swapping to a completely different tire size requires speedometer recalibration and affects fuel economy, acceleration, and handling. Most manufacturers recommend staying within 3% of original overall diameter to avoid drivetrain issues. This calculator helps verify tire size changes are within safe limits.
      </p>

      <p>
        <strong>Fit and Clearance:</strong> Tire width must fit within wheel wells. Wider tires (e.g., 235mm vs. 225mm) may rub on fenders or suspension, especially with lowered suspension. Offset and rim width also affect tire fit. Taller sidewwalls (higher aspect ratios) reduce ground clearance and may foul suspension components. Checking fit before installing different tire sizes prevents costly damage. Aftermarket wheels must have proper offset and width for your vehicle. Professional tire shops have fitment tools to verify compatibility. Always consult the vehicle manual or tire professionals for approved size ranges rather than assuming larger or wider is always possible.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="Tire Size Calculator"
      description="Calculate tire dimensions and compare different tire sizes"
      slug="tire-size-calculator"
      results={results}
      educational={educational}
    >
      <InputField
        id="tireSize"
        label="First Tire Size"
        value={tireSize}
        onChange={setTireSize}
        placeholder="225/45R17"
      />
      <InputField
        id="compareTire"
        label="Second Tire Size (to compare)"
        value={compareTire}
        onChange={setCompareTire}
        placeholder="225/50R17"
      />
    </CalculatorLayout>
  );
}
