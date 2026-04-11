import { Link } from "wouter";
import { Search, ArrowRight, Calculator, Zap, Globe, Code } from "lucide-react";
import { useState } from "react";
import {
  CATEGORIES,
  getPopularCalculators,
  getAllCalculators,
} from "@/lib/calculator-registry";
import SEOHead from "@/components/SEOHead";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const popularCalcs = getPopularCalculators();
  const allCalcs = getAllCalculators();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <SEOHead
        title="Free Online Calculators for Finance, Math, Health & More"
        description="240+ free online calculators for finance, math, health, physics, construction, and everyday life. Fast, accurate, and free — with educational explanations."
        type="home"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-6">
              <Zap size={14} />
              {allCalcs.length}+ free calculators — no signup required
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Calculate <span className="text-primary-600">Anything</span>,
              <br className="hidden sm:block" /> Instantly
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              The most comprehensive free calculator suite on the web.
              Finance, math, health, physics, construction, and more — with
              educational explanations for every result.
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-lg mx-auto mb-6">
              <input
                type="text"
                placeholder="Search calculators (e.g., mortgage, BMI, percentage)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg shadow-sm"
                aria-label="Search calculators"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-sm"
                aria-label="Search"
              >
                <Search size={22} />
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Try: mortgage, compound interest, BMI, unit converter, percentage
            </p>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-b border-gray-200 bg-white py-6">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{allCalcs.length}+</div>
              <div className="text-sm text-gray-500">Free Calculators</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{CATEGORIES.length}</div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">0</div>
              <div className="text-sm text-gray-500">Ads or Popups</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-500">Free Forever</div>
            </div>
          </div>
        </section>

        {/* Popular Calculators */}
        {popularCalcs.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Most Popular
              </h2>
              <p className="text-gray-600">Our most-used calculators</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCalcs.map((calc) => (
                <Link key={calc.slug} href={`/${calc.slug}`}>
                  <div className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all p-6 cursor-pointer h-full">
                    <div className="text-4xl mb-3">{calc.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {calc.shortTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {calc.description}
                    </p>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      Calculate <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Browse by Category
              </h2>
              <p className="text-gray-600">
                {allCalcs.length} calculators organized by topic
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((category) => {
                const count = allCalcs.filter(
                  (c) => c.category === category.id
                ).length;
                return (
                  <Link key={category.id} href={`/category/${category.id}`}>
                    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all p-6 cursor-pointer h-full">
                      <div className="text-5xl mb-4">{category.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {category.label}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="text-sm font-medium text-primary-600">
                        {count} calculators <ArrowRight size={14} className="inline ml-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why CalcHub?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Built for accuracy, speed, and simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator size={28} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Results</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every formula is verified against authoritative sources.
                Educational explanations help you understand the math.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap size={28} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Calculations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Results update as you type — no submit buttons, no waiting.
                Works perfectly on phone, tablet, or desktop.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code size={28} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Embed Anywhere</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Add any calculator to your blog or website with a single line of code.
                Responsive design, free forever.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-gray-600 leading-relaxed text-center">
              CalcHub is the fastest-growing free calculator website on the internet.
              With {allCalcs.length}+ calculators across {CATEGORIES.length} categories,
              we cover everything from mortgage payments and compound interest to BMI tracking,
              physics equations, and construction estimates. Every calculator includes instant
              results, interactive charts, and educational content to help you understand the
              math behind the numbers. No ads, no signup, no premium tier — just accurate
              calculations, free forever.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Embed on Your Website</h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
              Add any of our {allCalcs.length}+ calculators to your site with a single embed code. Free, responsive, and always up to date.
            </p>
            <a
              href="/search"
              className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
            >
              Browse All Calculators
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
