// function tasks
// turime 2 produktus - sk. koks pelningiausias

const bike = {
  //objektas
  price: 250,
  primeCost: 150,
};

function calculateProfit(product) {
  const profit = product.price - product.primeCost;

  return profit;
  //console.log(product.price - product.primeCost); // geriau perkelti i isore
}

console.log(calculateProfit(bike));
document.body.innerHTML = calculateProfit(bike); // isvedam i HTML

//ARROW FUNCTION

function showAlert() {
  alert("message");
}

showAlert();

const showPrompt = () => {
  prompt();
};

showPrompt();

const getMultipliedTwo = (value) => value * 2; // arrow f-ja
console.log(getMultipliedTwo(10));
