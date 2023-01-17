export class Order {
  //todo prideti read only and private
  id;
  name;
  orderedAt;
  completedAt;
  products; // tik suisdaro is ID's (product id masyvas) Product.id[]
  totalPrice;

  constructor(id, name, orderedAt, completedAt, products, totalPrice) {
    //initId, initName, ..
    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
