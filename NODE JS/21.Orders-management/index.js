import express, { Router } from "express";
import dotenv from "dotenv";
import { ordersController } from "./src/controller/orders-controller.js";
//import { Product } from "./src/models/Product.js";
//import { createProduct, getProducts } from "./src/services/product-service.js";

dotenv.config();

const app = express();

const PORT = +process.env.PORT;

app.use(express.json());
app.use("/orders", ordersController);

/*
createProduct({
  name: "Title",
  price: 205,
  isAvailable: true,
  imageURL: "http://gogl.com/jot.png",
});
*/

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
