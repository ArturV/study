const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");

colorInput.addEventListener("input", (event) => {
  const userColorInput = event.target.value.trim().toLowerCase();

  productsContainer.style.border = `4px dotted ${userColorInput} `;
});

switch (userColorInput) {
  case "red":
    console.log();
    break;

  case "green":
    console.log();
    break;

  case "blue":
    console.log();
    break;
}

//todo: switch condition for colors
