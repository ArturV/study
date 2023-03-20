import { Product } from "../components/Product/Product";
import { useState } from "react";
import axios from "axios";
import { TProduct } from "../components/Product/types";

export const useProducts = async () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  try {
    setError("");
    setIsLoading(true);
    const response = await axios.get<TProduct[]>(
      "https://fakestoreapi.com/products?limit=5"
    );
    setProducts(response.data);
    setIsLoading(false);
  } catch (e: unknown) {
    const error = e as Error;
    setIsLoading(false);
    setError(error.message);
  }

  return { products, isLoading, error };
};
