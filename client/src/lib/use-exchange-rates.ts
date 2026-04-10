import { useQuery } from "@tanstack/react-query";

export interface ExchangeRateResponse {
  base: string;
  rates: Record<string, number>;
  source: string;
  cachedAt: string | null;
}

/**
 * Fetches live exchange rates (USD base) from our server-side Yahoo Finance proxy.
 * Server caches rates for 1 hour; TanStack Query caches client-side for 5 min.
 */
export function useExchangeRates() {
  return useQuery<ExchangeRateResponse>({
    queryKey: ["exchange-rates"],
    queryFn: async () => {
      const resp = await fetch("/api/exchange-rates");
      if (!resp.ok) throw new Error("Failed to fetch exchange rates");
      return resp.json();
    },
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
  });
}
