const ENDPOINT = "http://localhost:5000/";
const userNameInput = document.querySelector("#name-submit-button");
const userParagraph = document.createElement("p");

userNameInput.addEventListener("click", async () => {
  const userId = document.querySelector("#name-input");

  const response = await fetch(ENDPOINT);
  const names = await response.json();

  userParagraph.textContent = JSON.stringify(names);

  document.body.append(userParagraph);
});
