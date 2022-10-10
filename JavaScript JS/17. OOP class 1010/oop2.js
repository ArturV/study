class Dog {
  sayWoof() {
    console.log("Woof");
  }
}

const amsis = new Dog();

amsis.sayWoof();

//

class Product {
  // klase is dydziosios
  price;
  unitsAvailable;

  constructor(price, unitsAvailable) {
    // konstruktorius visada klasiu dalis
    this.price = price;
    this.unitsAvailable = unitsAvailable;
  }

  getSumRevenue() {
    return this.price * this.unitsAvailable;
  }
}

const shirt = new Product(50, 150);

console.log(shirt.unitsAvailable);
console.log(shirt.getSumRevenue());
