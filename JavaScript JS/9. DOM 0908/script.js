//const productsContainer = document.getElementById("products-container");
//const product = document.getElementsByClassName("product");

const product = document.querySelector(".product"); // tinka visiems id, class, zymoms (body, div)
const bodyElement = document.querySelector("body");
const productsContainer = document.querySelector("#products-container");

console.log(productsContainer);

productsContainer.style = "background-color: red; width:300px; height: 500px;";
product.style = "background-color: green; height:100px; width: 100px";
bodyElement.style = "border: 2px solid green; margin: 0;";



//Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>
//bodyElement.innerHTML = "<h2>Hello</h2>";
const nameA = "john";
const headerTwo = document.createElement('h2');
headerTwo.textContent = nameA;
document.body.append(headerTwo);


//Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

const namez = "Johny";
document.querySelector('#name').textContent = namez;