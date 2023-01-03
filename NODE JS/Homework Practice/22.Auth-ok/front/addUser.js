const addUserForm = document.body.querySelector("form#add-user");
const ENDPOINT = "http://localhost:5000/auth/register/";

addUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const getCleanEmail = document.querySelector("#email-input").value.trim();
  const getPassword = document.querySelector("#password-input").value;

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email: getCleanEmail,
        password: getPassword,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      document.body.querySelector("#add-user").reset();
      alert("User was created");
    }
  } catch (error) {
    console.error(error);
  }
});
