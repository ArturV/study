import { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { ProductContext } from "./components/ProductsContext/ProductsContext";

export const App = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    setProducts(["apples"]);
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider value={products}>
        <Navigation />
      </ProductContext.Provider>
    </div>
  );
};
