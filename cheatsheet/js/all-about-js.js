// Kintamuju kurimo struktura:
// let/const pavadinimas = reiksme
// let age =15;   let - gali keistis, const - negali keistis*
// const name='jonas';

const productPriceIn = 15; // number: 3, -4.141221, 455789645
const productNameIn = "Batai"; // string - tekstas
const isProductAvailable = false; // boolean: true / false
const itemCategories = ["baldai", "kompiuteriai", "geles"]; // array, masyvas
const usersAges = [16, 82, 25]; // array, masyvas
const siuksliadeze = [false, 15, "asdss", -5]; // masyvas gali talpinti ivairias reiksmes

// ----------------- ARRAY ------------------------------ //

const userAgreements = [true, false, true, false, true, true];

for (let i = 0; i < userAgreements.length; i++) {
  console.info(userAgreements[i]); // isvedame masyvo elementus
}

/**Array**/

const productPrices = [5, 7, 9, 2, 4.5];

productPrices.push(8); // prideda i gala
productPrices.shift(); // istrina pirma
productPrices.pop(); // istrina paskutini
productPrices.unshift(-18); // prideda pirma. labai nenasus

//delete productPrices[2]; // istrinti 3 elementa is masyvo, nes nuo 0. bet palieka masyvo ilgi kaip buvo. geriau nenaudoti
productPrices.splice(1, 1); //istrina 2 elementa ir pakeicia masyvo ilgi.

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

// ----------------------------- navigators -----------------------------
let cartItemsAmount = 0;
const userDevice = "iPhone/iOS";
const userEmail = prompt("Enter your email"); //  kol neivedeme teksto ir prompt nebaige veiklos, tol neatvaizduojamos kintamuju reiksmes HTML
const userLocale = navigator.language; // OS kalba
const currentDate = new Date(); // Sios dienos data

let weekDayN = new Date().getDay();

document.getElementById("user-device").innerText = userDevice;
document.getElementById("user-email").innerText = userEmail;
document.getElementById("user-locale").innerText = userLocale;
document.getElementById("current-date").innerText = currentDate;

// ------------ IF ELSE ---------------- //

const price = prompt("Kokia sios prekes kaina?");
const isExpensive = price >= 1000;
// tas pats:
// const isExpensive = price >= 1000 ? true : false

// console.log({
//     isExpensive
// })

const color = prompt("Kokia spalva?");

if (color === "red" || color === "yellow") {
  console.log("sutampa: red / yellow");
} else {
  console.log("kita spalva");
}

//

const isTaxable = price > 20;
if (isTaxable) {
  alert("Taxable");
} else {
  alert("Non taxable");
}

//

const productName = prompt("Product name?");
const isLongName = productName.length >= 7;

// tas pats kas su if else
//alert(isLongName ? "Too long" : "Short name")

if (isLongName) {
  alert("too long");
} else {
  alert("Short name");
}

const isImportantProduct = isTaxable && isExpensive && isLongName;

if (isImportantProduct) {
  alert("sita reikia saugot");
}

//

const car = "Bmw";
const vwGroup = ["Vw", "Audi", "Bentley", "Bugatti", "Lambo", "Porsche"];
const bmwGroup = ["Bmw", "Mini", "Rolls-Royce"];

if (vwGroup.includes(car)) {
  console.log("Auto priklauso VW koncernui");
} else if (bmwGroup.includes(car)) {
  console.log("Auto priklauso BMW koncernui");
} else {
  console.log("Auto priklauso nezinomam koncernui");
}

// Be switch sukurt programa kuri suskirstytu prekes i 3 skirtingas kategorijas pagal kaina
// kaina
// [0-19]
// (19-100]
// (100-1000]

const productPrice = +prompt("what is the price?"); // + paverciam i skaicius

const randomNumber = (Math.random() * 1_000) | 0; // i sveika skaiciu pavercia su parseInt(); arba |0
console.log(parseInt(randomNumber)); // suapvalina i mazesne puse
const randomNumber2 = +(Math.random() * 1_000).tofixed(2); // palieka 2 skaicius po kablelio ir padaro number formata

if (productPrice >= 0 && productPrice <= 19) {
  console.log("Pirmoji kategorija");
} else if (productPrice > 19 && productPrice <= 100) {
  console.log("Antroji kategorija");
} else if (productPrice > 100 && productPrice <= 1000) {
  console.log("Trecioji kategorija");
} else {
  console.log("Nepatenka i kategorija");
}

// -------------- SWITCH ----------------  //

const rating = +prompt("Kiek vertinate preke?"); // + pavercia i skaiciu

switch (rating) {
  case 5:
    console.info("Puikiai");
    break;
  case 4:
    console.info("Gerai");
    break;
  case 3:
    console.info("Tinkamai");
    break;

  default:
    console.info("Blogai");
    break;
}

//---------- LOOP -----------//

for (let age = 10; age < 19; age = age + 1) {
  // age++ yra lygu age+1
  console.info(age);
}

let productCount = 5;
while (productCount >= 0) {
  console.log(`Produktu kiekis: ${productCount}`);
  productCount--;
}

//

let productCategories = 5;

do {
  console.log(`Vis dar neisparduotos: ${productCategories}`);
  productCategories--;
} while (productCategories >= 0);

// Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą

for (let nameCount = 1; nameCount <= 10; nameCount++) {
  console.log("Arturas");
}

// Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.
//3. Prie savo vardo atspaudink ir  raidę, t.y. kelintas ciklas yra

let inputName = prompt("iveskite varda");
let inputQty = prompt("iveskite kiek kartu kartojam");

while (inputQty) {
  console.log(`${inputQty}. ${inputName}`);
  inputQty--;
}

// Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//** JS math pratybos */

const random1 = Math.random(); // math.random [0,1)
const random2 = Math.random() * 10; // math.random
const random3 = Math.floor(Math.random() * 10); // math.random [0,9]
const random4 = Math.floor(Math.random() * 10) + 1; // math.random [0,10]

console.log(random1);
console.log(random2);
console.log(random3);

//Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.

const userName = "ArturasV";
let n = 0;
while (n < 3) {
  console.log(userName);
  n++;
}

let combo = "s";
let times = 5;
while (times < 5) {
  combo += "Petras";
  times++;
  console.log(combo);
}

// ------------- EVENTS -------------------- //

// https://w3c.github.io/uievents/#event-types-list

document.addEventListener("click", function () {
  console.log("paspaudet ant puslapio");
});

const specialCodeElement = document.getElementById("special-code");
let count = 0;
let i = 0;

/*for (let index = 0; index < 1500; index++) {
    document.getElementById("count").append(index);
  }*/

for (const element of ["stringas A", "s", "d"]) {
  console.log(element);
}

const interval = setInterval(() => {
  document.getElementById("count").innerText = i++;

  if (i === 20) {
    clearInterval(interval);
  }
}, 50);

specialCodeElement.addEventListener("mouseover", () => {
  incrementCount();
  document.getElementById("count").innerText = count; //innerText - iraso i p elementa
  /*
    if (count >= 10 && count < 20) {
      specialCodeElement.style = "background-color: yellow";
    } else if (count >= 20) {
      specialCodeElement.style = "background-color: red";
    }*/
});

document.getElementById("count").addEventListener("click", () => {
  resetCount();
  document.getElementById("count").innerText = count;
});

const colorTheCode = () => {
  if (count >= 20) {
    specialCodeElement.style = "background-color: red";
  } else if (count >= 10) {
    specialCodeElement.style = "background-color: yellow";
  }
};

const incrementCount = () => {
  count++;
  colorTheCode();
};

const resetCount = () => {
  count = 0;
  colorTheCode;
};

const currentRoute = location.pathname;
const currentURL = location.href;

console.log(currentRoute);
console.log(currentURL);

//location.assign("/home");

// -------------- FUNCTIONS ------------------------ //

function getMultipliedByTwo(number) {
  return number * 2;
}

const multipliedNumber = getMultipliedByTwo(5);

console.log(multipliedNumber);

//

function getDeviderByTwo(number) {
  return number / 2;
}

const DividerByTwo = getDeviderByTwo(40);

console.log({ DividerByTwo });

//

function getTodaysSales(totalSales, totalSalesYesterday = 50) {
  const todaySales = totalSales - totalSalesYesterday;

  return todaySales;
}

//console.log(getTodaysSales(150, 100)); grazina 50 nes numatytoji reiksme naudojama tik jei neremetame to parametro
console.log(getTodaysSales(150));

// Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

function whatsName(yourName) {
  alert(yourName);
}

let yourName = prompt("Enter your name");

// ------------------------- FORMS --------------------------- //

function handleFormSubmit(event) {
  event.preventDefault(); // sustabdo formos veikla pagal nutylejima
  alert("Forma sekmingai pateikta");
}

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault(); // padaro kad puslapis nepersikrautu
  console.log(event.target);
  console.log(event.target.elements.abc); // paimam butent abc input tipo elementa
  console.log(document.querySelector("input[name=abc]")); // - tas pats kaip 6 eiluteje
  console.log(document.querySelector("input[name=abc]").value); // - paima to elemento REIKSME
}

// ------------------ DOM manipulation ------------------------ //

const productsContainerById = document.getElementById("products-container"); // paimam pagal id
const productByClass = document.getElementsByClassName("product"); // paimam pagal klase
const product = document.querySelector(".product"); // tinka visiems id, class, zymoms (body, div) - universalus.
const bodyElement = document.querySelector("body");
const productsContainer = document.querySelector("#products-container");

console.log(productsContainer);

productsContainer.style = "background-color: red; width:300px; height: 500px;";
product.style = "background-color: green; height:100px; width: 100px";
bodyElement.style = "border: 2px solid green; margin: 0;";

//Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>
//bodyElement.innerHTML = "<h2>Hello</h2>";
const nameA = "john";
const headerTwo = document.createElement("h2");
headerTwo.textContent = nameA;
document.body.append(headerTwo);

//Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .
const namez = "Johny";
document.querySelector("#name").textContent = namez;

//
const containerElement = document.getElementById("container"); // i ka noriu prideti
const paragraphElement = document.createElement("p"); // ka noriu prideti

paragraphElement.append("Foo");
containerElement.append(paragraphElement);

function showDate() {
  const bodyElement = document.getElementsByTagName("body")[0];
  const paragraphElement = document.createElement("p");

  paragraphElement.append(new Date().toLocaleString("lt-LT")); // data pagal regiona
  paragraphElement.append(new Date().toLocaleString(navigator.language)); // data is narsykles

  bodyElement.appendChild(paragraphElement);
}

// ------------------------- OBJECTS ------------------------------- //

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

// Objects methood:

const personX = {
  age: 25,
  salary: 1_000,
};
/*
  const persons = [
    age: parseInt(20+Math.random() *10),
    salary: parseInt(600+Math.random()*2_000),  // 600..2000 alga $
  ]
  */
console.log(personX.salary);
console.log(personX);

const getPerson = () => {
  const randomNumber = Math.random();

  const age = parseInt(20 + randomNumber * 10);
  const salary = parseInt(600 + randomNumber * 2_000);

  const showWeekday = () => {
    const date = new Date();
    const weekday = date.toLocaleString("lt-LT", { weekday: "long" });

    console.log(`Sveiki! Šiandien ${weekday}.`);
  };

  const getWeekday = () => {
    const date = new Date();
    const weekday = date.toLocaleString("lt-LT", { weekday: "long" });

    return `Sveiki! Šiandien ${weekday}.`;
  };

  return {
    age,
    salary,
    getWeekday,
    showWeekday,
  };
  /* 
    return {
      age: age,
      salary: salary
    }*/
};

const person = getPerson();

// const showWeekday = person.showWeekday;

console.log(
  `${person.getWeekday()} Amžius: ${person.age}, alga: ${person.salary}`
);
console.log(person);

const getSalaryPerAge = () => {
  const persons = [];

  for (let i = 0; i < 15; i++) {
    const person = getPerson();

    persons.push(person);
  }

  const totalAge = persons.reduce(
    (previousValue, currentValue) => previousValue + currentValue.age,
    0
  );

  const totalSalary = persons.reduce(
    (previousValue, currentValue) => previousValue + currentValue.salary,
    0
  );

  return (totalSalary / totalAge).toFixed(2);
};

const salaryDividedByAge = getSalaryPerAge();

// !!!
const getAge = () => 25;

const getMyAge = () => {
  return 25;
};

// object method example:

const company = {
  name: "Tesla",
  foundationDate: new Date("2020"),
  workers: 100,
  foundingCapital: 1_000_000,

  showCompanyData: () => {
    console.log(company.name);

    console.log(
      `We are ${company.name} , ${company.foundationDate} workers: ${company.workers} capital: ${company.foundingCapital}`
    );
  },
};

console.log(company);

company.showCompanyData();

// ------------------------- CALLBACKS ------------------------------- //

const showAlert = () => {
  // alert();

  logGreeting();
};

//callback
const logGreeting = () => {
  console.log("Nuostabi diena");
};
showAlert();

// ----------------------- SORT METHOOD ----------------------------- //

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

// ------------------------ REDUCE methood ------------------------------- //

const productsN = [
  { name: "Tamsios spalvos akiniai" },
  { name: "Sviesios spalvos akiniai" },
  { name: "Zalios spalvos akiniai" },
  { name: "Geltoni akiniai" },
];

const getConcatinatedItems = () => {
  const initialValue = "";

  const concatinatedString = productsN.reduce(
    (previousValue, currentValue) =>
      `${previousValue} ${currentValue.name.split(" ")[0]}`,
    initialValue
  );

  return concatinatedString;
};

console.log(getConcatinatedItems());

// array reduce

const showReduceCapabilities = () => {
  const array = [1, 2, 3, 4];
  const initialValue = 0;

  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const sum2 = array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, initialValue);

  console.log({ sum, sum2 });
};

const getProductsSum = (products, initialValue = 0) => {
  //   const productsSum = products.reduce((sum, current) => {
  //     console.info({ current });
  //     return sum + current.price;
  //   }, initialValue);

  const productsSum = products.reduce(
    (sum, current) => sum + current.price * current.amount,
    initialValue
  );

  return productsSum;
};

const products = [
  { title: "Helmet", price: 200, amount: 1 },
  { title: "Glasses", price: 600, amount: 5 },
  { title: "Belt", price: 150, amount: 0 },
];

console.log(getProductsSum(products));

// ------------------------ OOP ------------------------- //

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

//

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

// --------------------- COOKIES & local storage ------------------ //

const privacyButton = document.querySelector("#privacy-policy-submit-button");
const localStorageButton = document.querySelector(
  "#local-storage-submit-button"
);

//cookie
privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = `AGREED_PRIVACY_POLICY_VERSION`;
  const versionString = `version: ${todayDate}`;

  document.cookie = `${AGREED_PRIVACY_POLICY_VERSION}=${versionString}`;
});

//localeStorage
localStorageButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = `AGREED_PRIVACY_POLICY_VERSION`;
  const versionString = `version: ${todayDate}`;

  localStorage.setItem(AGREED_PRIVACY_POLICY_VERSION, versionString);
});

//locale storage
//localStorage.setItem("time", new Date());

// ------------------------- ASYNC AWAIT -------------------------- //
const doAsyncTest = async () => {
  const getDelayedMessage = async (timer = 5_000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello!"); // be resolve, await nezinotu, kada gauna atsakyma
      }, timer);
    });
  };

  console.log(1);

  // kviecia funkcija. kai grizta atsakymas - naudoja resolve reiksme ir ja talpina result kintamajame
  // kadangi be await, veikia fone.
  getDelayedMessage().then((result) => console.log(result));

  console.log(2);

  const message = await getDelayedMessage(7_000);

  console.log(message);

  console.log(3);
};

doAsyncTest();

// ---------------------- REST API FETCH ----------------------- //
// https://reqres.in/api/users
// https://api.github.com/users

// GET uzklausos metodas. tipiskai nturi body
// GET - mazos uzklausos (2kb+-)
// POST - dideles uzklausos iki 2gb

fetch("https://reqres.in/api/users").then((response) => console.log(response));

const response = await fetch("https://reqres.in/api/users");
const data = await response.json();

console.log(data);

// ----------------------- FETCH GET -----------------------------------//

const getFirstXUsers = async () => {
  const getOnlyXUsers = (amount) => {
    return users.slice(0, amount);
    // galima ant originalaus masyvo nustatyti length
  };

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    const users = await response.json();

    return users;
  };

  const users = await getUsers();

  console.log(getOnlyXUsers(3));
  //const firstThreeUsers = getOnlyXUsers(3);
};

getFirstXUsers();

// ------------------------ FETCH POST ------------------------------ //

const doFetch = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await request.json();

  console.log({ response });

  return response;
};

//-- POST metodas

const createArticle = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });

  const response = await request.json();

  console.log(response);
};

doFetch(); // kai dirbi modulyje naudok await

console.log(1);

createArticle();
createArticle();

// ------------------------ FETCH PATCH ------------------------------ //

const onPatch = async () => {
  try {
    const dataToUpdate = {
      userId: 1,
      id: (Math.random() * 10) | 0,
      title: "Lorem Ipsum",
      body: "Vyksta paskaita",
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
        body: JSON.stringify(dataToUpdate),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const isPostPatched = response.ok;

    if (isPostPatched) {
      const updatedPost = await response.json();

      document.body.querySelector("#usersContainer").innerHTML = "";

      insertPost(updatedPost);
    }
  } catch (error) {
    console.error(error);
  }
};

// ------------------------ FETCH DELETE ------------------------------ //

const onDelete = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  const isPostDeleted = response.ok;

  if (isPostDeleted) {
    document.body.querySelector("#usersContainer").innerHTML = "";
  }
};

// ------------------------ FETCH FORMS ------------------------------ //

const surveyForm = document.querySelector("form#survey-form");

surveyForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input").value.trim();
  const author = document.querySelector("#author-input").value.trim();

  const newPost = { title, author };

  // todo: trycatch
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost), // HTTP REQUESTO PAGRINDINIS TURINYS (BODY)
  });

  if (response.ok) {
    document.body.style.backgroundColor = "green";
  }
});
