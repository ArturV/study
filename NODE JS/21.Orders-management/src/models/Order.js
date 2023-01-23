import Joi from "joi";

const orderSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().trim().lowercase(),
  orderedAt: Joi.string().required(),
  completedAt: Joi.string(),
  products: Joi.array().required(),
  totalPrice: Joi.string().required(),
});

export class Order {
  //todo prideti read only and private
  id;
  name;
  orderedAt;
  completedAt;
  products; // tik suisdaro is ID's (product id masyvas) Product.id[]
  totalPrice;

  constructor(name, orderedAt, completedAt, products, totalPrice, id) {
    //initId, initName, ..

    const newOrderData = {
      id,
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
    };

    const validationResult = orderSchema.validate(newOrderData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
