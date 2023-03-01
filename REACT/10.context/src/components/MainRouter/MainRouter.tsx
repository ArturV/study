import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsContext } from "..";

export const MainRouter = () => {
  const { dispatch } = useContext(ProductsContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <h1>Prod</h1>;
        <button
          onClick={() =>
            dispatch({ type: "addProduct", payload: { productId: 1 } })
          }
        >
          Add to cart
        </button>
      </Routes>
    </BrowserRouter>
  );
};
