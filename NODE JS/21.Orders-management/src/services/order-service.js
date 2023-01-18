import { Order } from "../models/Order.js";

const orders = [];

export const createOrder = ({
  id,
  name,
  orderedAt,
  completedAt,
  products,
  totalPrice,
}) => {
  try {
    const order = new Order(
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
      id
    );

    return order;
  } catch (error) {
    return console.error(error);
  }
};

export const getOrders = () => {
  return orders;
};
