const ENDPOINT = "http://localhost:5000/cars";

const getCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();

    // addCarsToList(cars);
    return cars;
  } catch (error) {
    console.error(error);
  }
};

const addCarsToList = async (car) => {
  const carList = await getCars();

  const elementUL = document.createElement("ul");
  const elementH1 = document.createElement("h1");
  elementH1.textContent = "Cars";

  carList.forEach((car) => {
    const elementLI = document.createElement("li");
    elementLI.textContent = car;
    elementUL.append(elementLI);
  });

  document.body.append(elementH1);
  document.body.append(elementUL);
};

addCarsToList();
