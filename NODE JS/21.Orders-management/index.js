import express from "express";
import dotenv from "dotenv";
import { Product } from "./src/models/Product.js";
import { createProduct, getProducts } from "./src/services/product-service.js";

dotenv.config();

const app = express();

const PORT = +process.env.PORT;

app.use(express.json());

console.log(getProducts());

createProduct({
  name: "Title",
  price: 205,
  isAvailable: true,
  imageURL: "http://gogl.com/jot.png",
});

console.log(getProducts());

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
