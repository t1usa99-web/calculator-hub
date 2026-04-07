import { ComponentType } from "react";

export interface CalculatorMeta {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "finance" | "math" | "health" | "other";
  icon: string;
  keywords: string[];
  popular?: boolean;
}

export interface CalculatorEntry extends CalculatorMeta {
  component: ComponentType;
}

const registry: CalculatorEntry[] = [];

export function registerCalculator(entry: CalculatorEntry) {
  registry.push(entry);
}

export function getCalculator(slug: string): CalculatorEntry | undefined {
  return registry.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(category: string): CalculatorEntry[] {
  return registry.filter((c) => c.category === category);
}

export function getAllCalculators(): CalculatorEntry[] {
  return [...registry];
}

export function getPopularCalculators(): CalculatorEntry[] {
  return registry.filter((c) => c.popular);
}

export const CATEGORIES = [
  { id: "finance", label: "Financial", icon: "💰", description: "Mortgage, loan, investment, and retirement calculators" },
  { id: "math", label: "Math", icon: "📐", description: "Scientific, algebra, geometry, and statistics calculators" },
  { id: "health", label: "Health & Fitness", icon: "❤️", description: "BMI, calorie, body fat, and wellness calculators" },
  { id: "other", label: "Everyday", icon: "🔧", description: "Age, tip, GPA, fuel cost, and conversion calculators" },
] as const;
