import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().trim().lowercase(),
  price: Joi.number(),
  isAvailable: Joi.boolean(),
  imageURL: Joi.string(),
});

export class Product {
  id;
  name;
  price;
  isAvailable;
  imageURL;

  constructor(name, price, isAvailable, imageURL, id) {
    const newProductData = { name, price, isAvailable, imageURL };

    const validationResult = productSchema.validate(newProductData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageURL = imageURL;
  }
}
