import { Suspense } from "react";
import { getCalculator } from "@/lib/calculator-registry";

interface EmbedPageProps {
  slug: string;
}

export default function EmbedPage({ slug }: EmbedPageProps) {
  const calculator = getCalculator(slug);

  if (!calculator) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Calculator Not Found
          </h1>
          <p className="text-gray-600">
            The calculator you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const CalculatorComponent = calculator.component;

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Calculator */}
        <div className="bg-white">
          <Suspense fallback={<div className="flex items-center justify-center py-12"><p className="text-gray-500">Loading...</p></div>}>
            <CalculatorComponent />
          </Suspense>
        </div>

        {/* Powered by CalcHub Link */}
        <div className="mt-8 text-center border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            Powered by{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              CalcHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
