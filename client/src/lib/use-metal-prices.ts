import { useQuery } from "@tanstack/react-query";

export interface MetalsPriceResponse {
  prices: Record<string, number>;
  source: "metals.dev" | "fallback";
  cachedAt: string | null;
}

/**
 * Fetches metal spot prices from our server-side cache/proxy.
 * TanStack Query handles caching on the client side (staleTime = 5 min).
 */
export function useMetalPrices() {
  return useQuery<MetalsPriceResponse>({
    queryKey: ["metals-prices"],
    queryFn: async () => {
      const resp = await fetch("/api/metals-prices");
      if (!resp.ok) throw new Error("Failed to fetch metal prices");
      return resp.json();
    },
    staleTime: 5 * 60 * 1000, // consider fresh for 5 minutes
    refetchInterval: 10 * 60 * 1000, // re-fetch every 10 minutes in background
  });
}
