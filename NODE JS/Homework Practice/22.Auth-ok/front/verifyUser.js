const verifyUserForm = document.body.querySelector("form#check-user");
const email = document.querySelector("#email-input").value.trim();
const password = document.querySelector("#password-input").value;
const display = document.querySelector("#result");
const ENDPOINT = "http://localhost:5000/auth/login/";

verifyUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  display.textContent = "ok";
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.status === 400 || res.status === 401) {
      return (display.textContent = `${data.message}. ${
        data.error ? data.error : ""
      }`);
    }
  } catch (err) {
    console.log(err.message);
  }
});
