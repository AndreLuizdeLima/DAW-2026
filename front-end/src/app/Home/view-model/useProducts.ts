import type { ProductCardProps } from "@/components/ProductCard";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

type UseProductsResult = {
  products: ProductCardProps[];
  isLoading: boolean;
  error: string | null;
};

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch(`${API_URL}/products`, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error("Não foi possível carregar os produtos.");
        }

        const data: ProductCardProps[] = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setError("Não foi possível carregar os produtos.");
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void fetchProducts();

    return () => abortController.abort();
  }, []);

  return { products, isLoading, error };
}
