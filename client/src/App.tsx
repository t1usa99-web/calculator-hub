import { useEffect } from "react";
import { Router, Route, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import CalculatorPage from "@/pages/CalculatorPage";
import EmbedPage from "@/pages/EmbedPage";
import SearchPage from "@/pages/SearchPage";
import "@/calculators/finance";
import "@/calculators/health";
import "@/calculators/math";
import "@/calculators/other";
import "@/calculators/physics";
import "@/calculators/metals";
import "@/calculators/construction";

/** Scroll to top on every client-side navigation */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route path="/embed/:slug">
        {(params) => <EmbedPage slug={params.slug} />}
      </Route>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Route path="/" component={HomePage} />
          <Route path="/category/:id">
            {(params) => <CategoryPage categoryId={params.id} />}
          </Route>
          <Route path="/search" component={SearchPage} />
          <Route path="/:slug">
            {(params) => <CalculatorPage slug={params.slug} />}
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
