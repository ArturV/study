function Phone(hardware, processor, screenSize) {
  /// function Consructor
  this.hardware = hardware;
  this.processor = processor;
  this.screenSize = screenSize;
}

const iphone = new Phone("intel", "2.4Ghz", 7.1);

console.log(iphone);
console.log({ iphone });

const phones = [];

for (let i = 0; i < 5; i++) {
  const phone = new Phone("intel", `${i}Ghz`, i * 2);

  phones.push(phone);
}

console.log(phones);
