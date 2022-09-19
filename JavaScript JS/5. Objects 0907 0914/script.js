const product = {
  color: "red",
  price: 149.99,
};

product.count = 15; // objektus ir masyvus galima redaguoti net konstantos atveju
product.color = "green"; // galima perrasyti (objektams)

//console.log(product);

// objektai naudojami kai reikia aprasyti susietus duomenis su tam tikra esybe
// Pvz vartotojas kuris turi varda ir amziu
const user = {
  firstName: "jonas",
  age: 23,
};

const racingCar = {
  manufacturer: "BMW",
  enginePowerHP: 2000,
  dateOfManucaturer: 2018,
  released: true,
};

const consumerCar = {
  manufacturer: "Audi",
  enginePowerHP: 180,
  dateOfManucaturer: 2023,
  released: false,
};

//console.log(racingCar);
//console.log(consumerCar);

function compareEngines(carOne, carTwo) {
  console.log(carOne.enginePowerHP, carTwo.enginePowerHP);
}

function isFirstEngineBetter(engineOne, engineTwo) {
  //console.log(carOne.enginePowerHP, carTwo.enginePowerHP);
  return engineOne > engineTwo;
}

compareEngines(racingCar, consumerCar);
console.log(
  isFirstEngineBetter(consumerCar.enginePowerHP, racingCar.enginePowerHP)
);

const isFirstBetter = isFirstEngineBetter(
  consumerCar.enginePowerHP,
  racingCar.enginePowerHP
);

function showMostPowerfullEngine(carOne, carTwo) {
  const MostPowerfullEngine =
    carOne.enginePowerHP > carTwo.enginePowerHP
      ? carOne.enginePowerHP
      : carTwo.enginePowerHP;

  console.log(MostPowerfullEngine);
  //alert(`${isFirstBetter ? "First" : "Second"} car is better`);
  //console.log(carOne.enginePowerHP, carTwo.enginePowerHP);
  // return engineOne > engineTwo;
}

alert(`${isFirstBetter ? "First" : "Second"} car is better`);
//alert(`${isFirstBetter ? "First" : "Second"} car is better`);

showMostPowerfullEngine(racingCar, consumerCar);
