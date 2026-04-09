import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { getCalculator, CATEGORIES } from "@/lib/calculator-registry";
import SEOHead from "@/components/SEOHead";

interface CalculatorPageProps {
  slug: string;
}

export default function CalculatorPage({ slug }: CalculatorPageProps) {
  const calculator = getCalculator(slug);

  if (!calculator) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Calculator Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The calculator you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          Back to Home
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.id === calculator.category);
  const CalculatorComponent = calculator.component;

  return (
    <>
      <SEOHead
        title={calculator.title}
        description={calculator.description}
        slug={slug}
        type="calculator"
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
          {category && (
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              <Link
                href={`/category/${category.id}`}
                itemProp="item"
                className="text-gray-600 hover:text-gray-900"
              >
                <span itemProp="name">{category.label}</span>
              </Link>
              <meta itemProp="position" content="2" />
              <ChevronRight size={16} className="text-gray-400" />
            </li>
          )}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <span itemProp="name" className="text-gray-900 font-medium">{calculator.title}</span>
            <meta itemProp="position" content={category ? "3" : "2"} />
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-4">
            <div className="text-5xl">{calculator.icon}</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {calculator.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {calculator.description}
              </p>
              {calculator.keywords.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {calculator.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <CalculatorComponent />
        </div>
      </section>

      {/* Share/Embed Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Share or Embed This Calculator
          </h2>
          <p className="text-gray-600 mb-6">
            Copy the embed code below to add this calculator to your website:
          </p>
          <div className="bg-white rounded border border-gray-300 p-4 font-mono text-sm overflow-x-auto">
            <code>
              {`<iframe src="${typeof window !== "undefined" ? window.location.origin : ""}/embed/${calculator.slug}" width="100%" height="600" frameborder="0" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>`}
            </code>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            You can adjust the width and height as needed. The calculator will be
            responsive within the specified dimensions.
          </p>
        </div>
      </section>
      </div>
    </>
  );
}
