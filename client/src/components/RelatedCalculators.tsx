import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { getCalculatorsByCategory } from "@/lib/calculator-registry";

interface RelatedCalculatorsProps {
  /** The slug of the current calculator (to exclude it from the list) */
  currentSlug: string;
  /** The category to pull related calculators from */
  category: "finance" | "math" | "health" | "other" | "physics";
  /** Maximum number of related calculators to show (default 6) */
  limit?: number;
}

export default function RelatedCalculators({
  currentSlug,
  category,
  limit = 6,
}: RelatedCalculatorsProps) {
  const related = getCalculatorsByCategory(category)
    .filter((calc) => calc.slug !== currentSlug)
    .slice(0, limit);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Related Calculators
      </h2>
      <p className="text-gray-600 mb-6">
        Explore more calculators from the same category
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((calc) => (
          <Link key={calc.slug} href={`/${calc.slug}`}>
            <div className="group flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer h-full">
              <div className="text-3xl flex-shrink-0">{calc.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-700 mb-1 truncate">
                  {calc.shortTitle}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {calc.description}
                </p>
                <div className="flex items-center mt-2 text-primary-600 text-xs font-medium">
                  Use Now
                  <ArrowRight
                    size={12}
                    className="ml-1 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
