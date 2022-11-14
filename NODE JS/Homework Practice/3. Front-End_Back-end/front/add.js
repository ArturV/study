const ENDPOINT = "http://localhost:5000/";
const submitButton = document.querySelector("#submit-button");
const userParagraph = document.createElement("p");

const addNewUser = async () => {
  const userNameInput = document.querySelector("#name-input").value;
  const userSurNameInput = document.querySelector("#sur-name-input").value;

  const addUser = JSON.stringify({
    name: userNameInput,
    surname: userSurNameInput,
  });

  const request = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: addUser,
  });
  const response = await request.json();
};

submitButton.addEventListener("click", addNewUser);
