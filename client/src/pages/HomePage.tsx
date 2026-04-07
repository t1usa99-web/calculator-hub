import { Link } from "wouter";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  CATEGORIES,
  getPopularCalculators,
  getAllCalculators,
} from "@/lib/calculator-registry";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const popularCalcs = getPopularCalculators();
  const allCalcs = getAllCalculators();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Free Online Calculators
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simple, powerful calculators for finance, math, health, and everyday
            tasks. Embed them on your website for free.
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Search calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Popular Calculators Section */}
      {popularCalcs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Popular Calculators
            </h2>
            <p className="text-gray-600">Try our most-used calculators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCalcs.map((calc) => (
              <Link key={calc.slug} href={`/${calc.slug}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer h-full">
                  <div className="text-4xl mb-3">{calc.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {calc.shortTitle}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {calc.description}
                  </p>
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    Use Now <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-600">
            Explore {allCalcs.length} calculators organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const count = allCalcs.filter(
              (c) => c.category === category.id
            ).length;
            return (
              <Link key={category.id} href={`/category/${category.id}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 p-6 cursor-pointer">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.label}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm font-medium text-primary-600">
                    {count} calculators →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Embed on Your Website</h2>
          <p className="text-lg opacity-90 mb-8">
            Add any calculator to your website with a single embed code
          </p>
          <a
            href="/search"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse All Calculators
          </a>
        </div>
      </section>
    </div>
  );
}
