import { createContext } from "react";
import type { TProductsContext } from "./types";

const INITIAL_VALUE = {
  fetchedProducts: [],
  cartProducts: [],
  dispatch: () => {},
} as const; // neleidzia perrast reiksmiu (neveiks dispatch, push)

//INITIAL_VALUE.dispatch = () => {};
//INITIAL_VALUE.cartProducts.push(1);

export const ProductsContext = createContext<TProductsContext>(INITIAL_VALUE);
