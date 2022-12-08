const currency = "$";

const populateList = async () => {
  const members = await getMemberships();

  const containerElement = document.querySelector("#memberships");
  containerElement.replaceChildren();

  members.forEach((member) => {
    const divElement = document.createElement("div");
    divElement.setAttribute("id", "membership-tab");

    const deleteElement = document.createElement("button");
    deleteElement.setAttribute("id", "delete-element");

    const deleteIco = document.createElement("i");
    deleteIco.setAttribute("class", "fa fa-trash");

    const memberName = document.createElement("h2");
    const descriptionParagraph = document.createElement("p");
    const line = document.createElement("hr");

    memberName.textContent = `${currency} ${member.price} ${member.name}`;
    descriptionParagraph.textContent = `${member.description}`;

    deleteElement.append(deleteIco);

    divElement.append(memberName, descriptionParagraph, line, deleteElement);

    containerElement.append(divElement);
    /*
    const deleteMembership = async () => {
      try {
        const deleteResponse = await fetch(
          `http://localhost:5000/memberships/${deleteElement.id}`,
          {
            method: "DELETE",
          }
        );

        const isMembershipDeleted = deleteResponse.ok;

        if (isMembershipDeleted) {
          await populateList();
        }
      } catch (error) {
        console.error(error);
      }
    };

    deleteElement.addEventListener("click", deleteMembership);
    */
  });
};

const getMemberships = async () => {
  try {
    const response = await fetch("http://localhost:5000/memberships");
    const memberships = await response.json();

    return memberships;
  } catch (error) {
    console.error(error);
  }
};

populateList();
