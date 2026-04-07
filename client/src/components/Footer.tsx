import { Link } from "wouter";
import { Calculator } from "lucide-react";
import { CATEGORIES } from "@/lib/calculator-registry";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Calculator size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white">CalcHub</span>
            </div>
            <p className="text-sm">Free online calculators with educational content. Embed any calculator on your website.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="text-sm hover:text-white transition-colors">
                    {cat.label} Calculators
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Popular</h3>
            <ul className="space-y-2">
              <li><Link href="/mortgage-calculator" className="text-sm hover:text-white transition-colors">Mortgage Calculator</Link></li>
              <li><Link href="/loan-calculator" className="text-sm hover:text-white transition-colors">Loan Calculator</Link></li>
              <li><Link href="/compound-interest-calculator" className="text-sm hover:text-white transition-colors">Compound Interest</Link></li>
              <li><Link href="/retirement-calculator" className="text-sm hover:text-white transition-colors">Retirement Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/embed" className="text-sm hover:text-white transition-colors">Embed Calculators</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CalcHub. All rights reserved. Free to use for personal and educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
