import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  CATEGORIES,
  getCalculatorsByCategory,
} from "@/lib/calculator-registry";
import SEOHead from "@/components/SEOHead";
import { getCategorySEOData } from "@/lib/seo-data";

interface CategoryPageProps {
  categoryId: string;
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const calculators = getCalculatorsByCategory(categoryId);
  const seoData = getCategorySEOData(categoryId);

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
    <>
      <SEOHead
        title={seoData?.title || category.label}
        description={category.description}
        slug={`category/${categoryId}`}
        type="category"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200">
        <ol
          className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <Link href="/" itemProp="item" className="text-gray-600 hover:text-gray-900">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
            <ChevronRight size={16} className="text-gray-400" />
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <span itemProp="name" className="text-gray-900 font-medium">{category.label}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

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
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {calc.title}
                  </h2>
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
    </>
  );
}
