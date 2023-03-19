import { useState } from "react";
import axios from "axios";
import { TProduct } from "../Product/types";
import { Product } from "../Product/Product";

export const FetchProducts = async () => {
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

  return (
    <>
      {isLoading && <p>Data is is Loading</p>}
      {error && <p>{error}</p>}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
};
