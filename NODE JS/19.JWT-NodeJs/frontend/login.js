const loginForm = document.body.querySelector("form#loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.body.querySelector("input#emailInput");
  const passwordInput = document.body.querySelector("input#passwordInput");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const accessToken = localStorage.getItem("accessToken");
  // arba per cookie:
  //const accessToken = document.cookie.split(", ").find((cookie)=> cookie.startsWith("accessToken="))?.split("=")[1];

  try {
    const res = await fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userName: email,
        password,
      }),
    });

    //cors cross orgin problemos sprendimas

    if (!res.ok || res.status >= 400) {
      return console.error("Could not fetch login.");
    }

    const user = await res.json();

    console.log({ user, res });

    localStorage.setItem("accessToken", user.accessToken);
    //arba per cookie
    document.cookie += `accessToken=${user.accessToken}; SameSite=None; Secure`;
  } catch (error) {
    return console.error(error);
  }
});
