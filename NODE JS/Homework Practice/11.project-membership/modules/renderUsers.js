let order = "asc";

const populateUsers = async () => {
  const users = await getUsers();

  const containerElement = document.body.querySelector(".users");
  containerElement.replaceChildren();

  users.forEach((user) => {
    const divElement = document.createElement("div");
    divElement.setAttribute("id", "user-tab");

    const userName = document.createElement("h3");
    const userEmail = document.createElement("p");
    const blueSpan = document.createElement("span");
    const blueSpanMembership = document.createElement("span");
    blueSpan.className = "blue";
    blueSpanMembership.className = "blue";
    const userMembership = document.createElement("p");
    const userIP = document.createElement("p");

    userName.textContent = `${user.name} ${user.surname}`;
    userEmail.textContent = `Email adress: `;
    blueSpan.textContent = `${user.email}`;
    userMembership.textContent = `Membership: `;
    blueSpanMembership.innerHTML = `${user.service_id}`;
    userIP.textContent = `ip: ${user.userIp}`;

    userEmail.append(blueSpan);
    userMembership.append(blueSpanMembership);

    console.log(user);
    divElement.append(
      userName,
      userEmail,
      userMembership,
      userMembership,
      userIP
    );
    containerElement.append(divElement);
  });
};

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

populateUsers();

//export { renderUsers };

const getFilteredUsers = async () => {
  try {
    const response2 = await fetch("http://localhost:5000/users/:id");
    const users2 = await response2.json();

    return users2;
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#sort").addEventListener("click", async (e) => {
  await getFilteredUsers();
});
