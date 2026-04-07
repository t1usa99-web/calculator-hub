import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { getAllCalculators } from "@/lib/calculator-registry";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const allCalculators = getAllCalculators();

  const results = useMemo(() => {
    if (!searchQuery.trim()) {
      return allCalculators;
    }

    const query = searchQuery.toLowerCase();
    return allCalculators.filter((calc) => {
      const matchesTitle = calc.title.toLowerCase().includes(query);
      const matchesDescription = calc.description.toLowerCase().includes(query);
      const matchesKeywords = calc.keywords.some((k) =>
        k.toLowerCase().includes(query)
      );
      const matchesCategory = calc.category.toLowerCase().includes(query);

      return matchesTitle || matchesDescription || matchesKeywords || matchesCategory;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Search Calculators
          </h1>

          {/* Search Input */}
          <div className="flex gap-2 max-w-md">
            <input
              type="text"
              placeholder="Search by name, description, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
              <SearchIcon size={20} />
            </button>
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-600 mt-4">
            {results.length} result{results.length !== 1 ? "s" : ""} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {results.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No calculators found
            </h2>
            <p className="text-gray-600 mb-8">
              Try adjusting your search query or{" "}
              <Link href="/" className="text-primary-600 hover:text-primary-700">
                browse all categories
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((calc) => (
              <Link key={calc.slug} href={`/${calc.slug}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer h-full flex flex-col">
                  <div className="text-5xl mb-4">{calc.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1 text-sm">
                    {calc.description}
                  </p>
                  {calc.keywords.length > 0 && (
                    <div className="flex gap-1 flex-wrap mb-4">
                      {calc.keywords.slice(0, 2).map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
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
