const registerForm = document.querySelector("#register-user-form");
const ENDPOINT = "http://localhost:5000/auth/register/";

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const getEmail = document.querySelector("#input-email").value.trim();
  const getPassword = document.querySelector("#input-password").value;

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: getEmail,
        password: getPassword,
      }),
    });

    if (response.ok) {
      document.body.querySelector("#register-user-form").reset();
      alert("User was created");
    }
  } catch (error) {
    console.error(error);
  }
});
