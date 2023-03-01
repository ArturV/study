import { useReducer } from "react";
import {
  INITIAL_VALUE,
  ProductsContext,
  productsReducer,
} from "./ProductsContext";
import "./App.css";
import { ProductsList } from "./components/ProductsList/ProductsList";

export const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(productsReducer, {
    products: INITIAL_VALUE.products,
    cartProducts: INITIAL_VALUE.cartProducts,
  });

  return (
    <div className="App">
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <ProductsList />

        {/* {isLoading ? <h1>Loading...</h1> : <MainRouter />} */}
      </ProductsContext.Provider>
    </div>
  );
};
