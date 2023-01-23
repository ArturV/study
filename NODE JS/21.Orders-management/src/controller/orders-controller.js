import { Router } from "express";
import { createOrder, getOrders } from "../services/order-service.js";

export const ordersController = Router();

ordersController.get("/", (_, res) => {
  const orders = getOrders();

  res.send({ orders }).end();
});

ordersController.post("/", (req, res) => {
  const { name, orderedAt, completedAt, products, totalPrice } = req.body;
  const { order, error } = createOrder({
    name,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  });

  if (!order || error) {
    return res.status(400).send({ error }).end();
  }

  res.send({ message: `Order ${name} was created.` }).end();
});
