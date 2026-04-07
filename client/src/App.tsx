import { Router, Route } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import CalculatorPage from "@/pages/CalculatorPage";
import EmbedPage from "@/pages/EmbedPage";
import SearchPage from "@/pages/SearchPage";
import "@/calculators/finance";

export default function App() {
  return (
    <Router>
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
