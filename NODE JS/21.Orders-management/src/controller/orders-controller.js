import { Router } from "express";
import { createOrder, getOrders } from "../services/order-service.js";

export const ordersController = Router();

let orders = [];

ordersController.get("/", (req, res) => {
  orders = getOrders();

  res.send({ orders }).end();
});

ordersController.post("/", (req, res) => {
  const { name, orderedAt, completedAt, products, totalPrice } = req.body;
  const newOrder = createOrder({
    name,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  });

  orders.push(newOrder);

  res.send({ orders }).end();
});
