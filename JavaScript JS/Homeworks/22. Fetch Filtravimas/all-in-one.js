/*
Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me
-Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
-Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
-Pridėkite prie lentelės (tarp id ir name) nuotrauką.
-Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
-Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). 
-Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname 
    contains search string). Capitalizacija turėtų būti nesvarbi.
*/

const createTable = () => {
  const newTable = document.createElement("table");
  const tableRow = document.createElement("tr");
  const tableHeadForID = document.createElement("th");
  const tableHeadForImage = document.createElement("th");
  const tableHeadForFirstName = document.createElement("th");
  const tableHeadForLastName = document.createElement("th");
  const tableHeadForCity = document.createElement("th");
  const tableHeadForFavColor = document.createElement("th");

  tableHeadForID.innerHTML = "ID";

  tableHeadForImage.innerHTML = "Image";

  tableHeadForFirstName.innerHTML = "First name";

  tableHeadForLastName.innerHTML = "Last name";

  tableHeadForCity.innerHTML = "City";

  tableHeadForFavColor.innerHTML = "Favorite color";

  tableRow.append(
    tableHeadForID,
    tableHeadForImage,
    tableHeadForFirstName,
    tableHeadForLastName,
    tableHeadForCity,
    tableHeadForFavColor
  );

  newTable.append(tableRow);

  document.body.append(newTable);
};

createTable();

const renderTable = (robots) => {
  const mainTable = document.querySelector("table");
  const tableBody = document.createElement("tbody");

  robots.forEach((element) => {
    const tableRow = document.createElement("tr");

    const id = document.createElement("td");

    id.textContent = element.id;

    mainTable.append(tableBody);

    tableBody.append(tableRow);

    tableRow.append(id);
  });
};

const getRobots = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");

    const robots = await response.json();

    renderTable(robots);
    console.log(robots);
  } catch (error) {
    console.error(error);
  }
};
await getRobots();
