import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { App } from "./App";

// axios.defaults.adapter = require("axios/lib/adapters/http");

describe("App", () => {
  it("should add and remove cart products", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Cart (0)"));

      const addButton = screen.getAllByLabelText("add button")[0];
      fireEvent.click(addButton);
    });

    expect(screen.getByText("Cart (1)"));

    const addButton = screen.getAllByLabelText("add button")[0];
    fireEvent.click(addButton);

    expect(screen.getByText("Cart (1)"));

    const cartLink = screen.getByLabelText("cart link");
    fireEvent.click(cartLink);

    expect(screen.getAllByLabelText("cart-product").length).toBe(1);

    const removeButton = screen.getByLabelText("remove button");
    fireEvent.click(removeButton);

    expect(screen.getByText("Cart (1)"));

    expect(screen.getAllByLabelText("cart-product").length).toBe(1);

    const newRemoveButton = screen.getByLabelText("remove button");
    fireEvent.click(newRemoveButton);

    expect(screen.getByText("Cart (0)"));

    expect(screen.queryByLabelText("cart-product")).toBe(null);
  });
});
