import { Product } from "../models/product.js";

const products = [
  new Product(16.5, "book", true),
  new Product(26.5, "toy", false),
  new Product(20.15, "pencil", true),
];

export const getProducts = (_, res) => {
  res.send({ products }).end();
};
