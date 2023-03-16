import { fireEvent, render, screen } from "@testing-library/react";
import { ProductsContext } from "../../ProductsContext";
import { Cart } from "../Cart";
import renderer from "react-test-renderer";

describe("Cart", () => {
  it("should render the cart with no items", () => {
    render(
      <ProductsContext.Provider
        value={{
          cartProducts: [],
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    // expect(screen.getAllByLabelText("cart-product").length).toBe(0);

    expect(screen.getByRole("empty-cart-message")).toBeVisible();
    expect(screen.getByRole("empty-cart-message").textContent).toBe(
      "Your cart is empty"
    );
  });

  it("renders cart products and total price", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
        amount: 1,
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
        amount: 1,
      },
    ];

    render(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mens Casual Premium Slim Fit T-Shirts")
    ).toBeInTheDocument();
    expect(screen.getByText("Total price: €132.25")).toBeInTheDocument();
  });

  it("removes an item from the cart", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
        amount: 1,
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
        amount: 1,
      },
    ];

    const removeFunction = jest.fn();

    render(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: removeFunction,
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    const removeButton = screen.getAllByLabelText("remove button")[0];
    fireEvent.click(removeButton);

    expect(removeFunction).toHaveBeenCalledWith({
      payload: { productId: 1 },
      type: "removeProduct",
    });

    expect(removeFunction).toHaveBeenCalledTimes(1);
  });

  it("displays the total price of all items in the cart", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
        amount: 1,
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
        amount: 1,
      },
    ];
    render(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    expect(screen.getByLabelText("total price")).toBeVisible();
    expect(screen.getByText("Total price: €132.25")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Cart />);

    expect(tree).toMatchSnapshot();
  });
});
