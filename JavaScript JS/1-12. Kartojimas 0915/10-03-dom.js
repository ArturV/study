const heading = document.body.querySelector("#seo-heading");

const firstName = prompt("Iveskite varda");

const lastNameInput = document.body.querySelector("#last-name-input");
heading.textContent = firstName;

lastNameInput.addEventListener("input", (event) => {
  // event.preventDefault();

  const lastName = event.target.value;

  console.log({ lastName });
  heading.textContent = `${firstName}  ${lastName}`;
});

const doCalculations = (event, data) => {
  event.preventDefault();
  console.log({ event });
  console.log({ data });
};

const userDataForm = document.body.querySelector("#user-data-form");

userDataForm.addEventListener("submit", (event) => {
  event.preventDefault(); //tipiskai addEventListener arba onsubmit atributas buna. Abieju nerekomenduotina, nes per daug identiskos logikos bus, pavyzdziui: event.preventDefault()

  const favoriteNumberInput = document.body.querySelector("#favorite-number");

  console.log(`User favorite number: ${+favoriteNumberInput.value}`);
});

const onSubmit = (event) => {
  event.preventDefault();
  alert("Submitted successfull");
};
