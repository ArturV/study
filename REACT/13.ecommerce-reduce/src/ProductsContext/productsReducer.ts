import type { TCartProduct } from "../types";
import type { TProductState } from "./types";

export const productsReducer = (
  state: TProductState,
  action: any
): TProductState => {
  switch (action.type) {
    case "setProducts": {
      return { ...state, products: action.payload };
    }

    case "addProductToCart": {
      const modifiedCartProducts = [...state.cartProducts];
      const cartProduct = modifiedCartProducts.find(
        (modifiedCartProduct) => modifiedCartProduct.id === action.payload.id
      );

      if (cartProduct) {
        cartProduct.amount++;
      } else {
        const newCartProduct = state.products.find(
          (item) => item.id === action.payload.id
        ) as TCartProduct;

        console.info({ newCartProduct });
        modifiedCartProducts.push({ ...newCartProduct, amount: 1 });
      }

      return {
        ...state,
        cartProducts: modifiedCartProducts,
      };
    }
    default:
      return state;
  }
};
