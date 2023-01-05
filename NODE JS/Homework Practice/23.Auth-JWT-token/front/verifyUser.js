const verifyUserForm = document.body.querySelector("form#check-user");

const ENDPOINT = "http://localhost:5000/auth/login/";

//neveikia sita dalis

verifyUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const email = document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#password-input").value;
    const display = document.querySelector("#result");

    console.log(email, password);
    const response = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.body.querySelector("#check-user").reset();
      display.textContent = "You are logged in";
    }
  } catch (err) {
    console.log("Wrong name or pass");
    display.textContent = "Wrong name or pass";
    console.log(err.message);
  }
});
