import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  CATEGORIES,
  getCalculatorsByCategory,
} from "@/lib/calculator-registry";

interface CategoryPageProps {
  categoryId: string;
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const calculators = getCalculatorsByCategory(categoryId);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Category Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The category you're looking for doesn't exist.
        </p>
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-900 font-medium">{category.label}</span>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {category.label} Calculators
          </h1>
          <p className="text-lg text-gray-600 mb-2">{category.description}</p>
          <p className="text-sm text-gray-600">
            {calculators.length} calculator{calculators.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {calculators.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No calculators in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <Link key={calc.slug} href={`/${calc.slug}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer h-full flex flex-col">
                  <div className="text-5xl mb-4">{calc.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {calc.description}
                  </p>
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    Open <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
