const ENDPOINT = "http://localhost:5000/users/";
const submitButton = document.querySelector("#new-user");
const userParagraph = document.createElement("p");

const getMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5000/memberships/");
    const memberships = await response.json();

    return memberships;
  } catch (err) {
    throw Error({ err });
  }
};

const MembershipNames = async () => {
  const memberships = await getMemberships();

  const membershipInput = document.querySelector("#memberships-list");
  membershipInput.replaceChildren();

  memberships.forEach((membership) => {
    const { _id, name } = membership;

    const optionEl = document.createElement("option");
    optionEl.value = _id;
    optionEl.textContent = name;

    membershipInput.append(optionEl);
  });
};

MembershipNames();

const addNewUser = async (e) => {
  e.preventDefault();
  const userNameInput = document.querySelector("#first-name").value.trim();
  const userSurNameInput = document.querySelector("#last-name").value.trim();
  const emailInput = document.querySelector("#email").value;

  const membershipInputOption = document
    .querySelector("#memberships-list")
    .value.trim();

  if (!userNameInput || !userSurNameInput || !emailInput) {
    alert("write required data");
    return;
  }

  const addUser = JSON.stringify({
    name: userNameInput,
    surname: userSurNameInput,
    email: emailInput,
    service_id: membershipInputOption,
  });

  const request = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: addUser,
  });
  const response = await request.json();

  await MembershipNames();

  if (request.ok) {
    document.body.querySelector("#user-add-form").reset();
    alert("User was created");
  }
};

submitButton.addEventListener("click", addNewUser);
