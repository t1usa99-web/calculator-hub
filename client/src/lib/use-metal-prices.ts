import { useQuery } from "@tanstack/react-query";

export interface MetalsPriceResponse {
  prices: Record<string, number>;
  sources: string[];
  cachedAt: string | null;
}

/**
 * Fetches metal spot prices from our server-side cache/proxy.
 * Server merges Yahoo Finance (6 metals) + metals.dev (3 metals) + fallback.
 * TanStack Query handles client-side caching (staleTime = 5 min).
 */
export function useMetalPrices() {
  return useQuery<MetalsPriceResponse>({
    queryKey: ["metals-prices"],
    queryFn: async () => {
      const resp = await fetch("/api/metals-prices");
      if (!resp.ok) throw new Error("Failed to fetch metal prices");
      return resp.json();
    },
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
  });
}
