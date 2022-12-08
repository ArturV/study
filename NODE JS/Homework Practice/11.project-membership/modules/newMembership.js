const ENDPOINT = "http://localhost:5000/memberships";
const submitButton = document.querySelector("#new-membership");
const userParagraph = document.createElement("p");

const getMemberships = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const memberships = await response.json();

    return memberships;
  } catch (err) {
    throw Error({ err });
  }
};

const addNewMembership = async (e) => {
  e.preventDefault();
  const membershipNameInput = document
    .querySelector("#membership-name")
    .value.trim();
  const membershipPriceInput = Number(
    document.querySelector("#membership-price").value.trim()
  );
  const membershipDescriptionInput = document.querySelector(
    "#membership-description"
  ).value;

  if (!membershipNameInput || !membershipPriceInput) {
    alert("write price & name data");
    return;
  }

  const addMembership = JSON.stringify({
    name: membershipNameInput,
    price: membershipPriceInput,
    description: membershipDescriptionInput,
  });

  const request = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: addMembership,
  });
  const response = await request.json();

  if (request.ok) {
    document.body.querySelector("#add-membership-form").reset();
    alert("Membership was created");
  }
};

submitButton.addEventListener("click", addNewMembership);
