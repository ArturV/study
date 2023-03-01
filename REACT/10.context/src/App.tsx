import { useReducer } from "react";
import { ProductsContext, MainRouter } from "./components";
import { productsReducer } from "./components/ProductsContext/ProductsReducer";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  return (
    <div>
      <h1>Products</h1>

      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <MainRouter></MainRouter>
      </ProductsContext.Provider>
    </div>
  );
};
