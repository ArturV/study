const showAlert = () => {
  // alert();

  logGreeting();
};

//callback
const logGreeting = () => {
  console.log("Nuostabi diena");
};
showAlert();

//filter
const productAvailabilityList = [true, true, false, true, false];
const availableProducts = productAvailabilityList.filter((product) => product);

console.log({ productAvailabilityList, availableProducts });

// foreach - nieko negrazina - nereturinina
const printOddProducts = () => {
  productAvailabilityList.forEach(
    (product, i) => i % 2 === 1 && console.log(product) // spausdina nelyginius
  );
};

printOddProducts();

// map - kaip foreach tik jis returinina
const getRaisedThePowerOfX = (numbers, x = 2) => {
  return numbers.map((number) => Math.pow(number, x)); // pakeliam x laipsniu
};

console.log(getRaisedThePowerOfX([1, 2, 3], 5));

// find (jeigu randa, sustoja). Grazina ta elementa rasta. Jei norime rasti kelis, reikia filtruoti

console.log([3, 4, 8, 5, 7, 8].find((number) => number === 8));

// some - ar yra tokia reiksme. Grazina TRUE arba FALSE

console.log([3, 4, 8, 5, 7, 8].some((number) => number === 9));
console.log([3, 4, 8, 5, 7, 8].some((number) => number === 8));

console.log("****");

// every: grazina TRUE/FALSE jeigu tinkama salyga

console.log([3, 4, 8, 5, 7, 8].every((number) => number > 0));
console.log([3, 4, 8, 5, 7, 8].every((number) => number !== 5));

// sort - surikiuoja elementus

//visada naudojame su sort, kai skaiciai ir string'ai
const sortAscendingly = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x - y;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
};

console.log([-3, 4, 0, 18, 500, 27, 8].sort(sortAscendingly));
console.log(["knyga", "albumas", "vilkas", "kibiras"].sort(sortAscendingly));

// Rikiuosime pagal auto galinguma

const cars = [
  { name: "Bmw", engineHP: 3000 },
  { name: "Audi", engineHP: 1500 },
  { name: "VW", engineHP: 2000 },
];

const sortCarsByEnginePower = (curCar, nextCar) => {
  console.log({ curCar, nextCar });
  return curCar.engineHP - nextCar.engineHP;
};

console.log(cars.sort(sortCarsByEnginePower));
