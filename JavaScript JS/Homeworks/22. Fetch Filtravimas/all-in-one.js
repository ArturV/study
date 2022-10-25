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
const getRobots = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    const robots = await response.json();

    return robots;
  } catch (error) {
    console.error(error);
  }
};

const createTable = () => {
  const newTable = document.createElement("table");
  const tableRow = document.createElement("tr");
  const tableHeadForID = document.createElement("th");
  const tableHeadForImage = document.createElement("th");
  const tableHeadForFirstName = document.createElement("th");
  tableHeadForFirstName.id = "FirstName";

  const tableHeadForLastName = document.createElement("th");
  const tableHeadForCity = document.createElement("th");
  const tableHeadForFavColor = document.createElement("th");

  tableHeadForID.innerText = "ID";
  tableHeadForImage.innerText = "Image";
  tableHeadForFirstName.innerText = "First name";
  tableHeadForLastName.innerText = "Last name";
  tableHeadForCity.innerText = "City";
  tableHeadForFavColor.innerText = "Favorite color";

  tableRow.append(
    tableHeadForID,
    tableHeadForImage,
    tableHeadForFirstName,
    tableHeadForLastName,
    tableHeadForCity,
    tableHeadForFavColor
  );
  const tableBody = document.createElement("tbody");

  newTable.append(tableRow, tableBody);

  document.body.append(newTable);
};

const renderTable = (robots) => {
  const tableBody = document.querySelector("tbody");
  tableBody.textContent = "";

  robots.forEach((element) => {
    const tableRow = document.createElement("tr");

    const id = document.createElement("td");
    id.textContent = element.id;

    const img = document.createElement("img");
    img.src = element.image;
    img.setAttribute("alt", "UserPicture");
    const image = document.createElement("td");
    image.append(img);

    const [name, surname] = element.name.split(" ");

    const firstName = document.createElement("td");
    firstName.textContent = name;

    const secondName = document.createElement("td");
    secondName.textContent = surname;

    const city = document.createElement("td");
    city.textContent = element.city;

    const favColor = document.createElement("td");
    favColor.textContent = element.fav_color;

    tableBody.append(tableRow);
    tableRow.append(id, image, firstName, secondName, city, favColor);
  });
};

const findVip = (robots) => {
  const checkboxForFindVip = document.createElement("input");
  checkboxForFindVip.setAttribute("type", "checkbox");
  const addCheckbox = document.querySelector("#vip");
  addCheckbox.append("Search vip: ", checkboxForFindVip);

  checkboxForFindVip.addEventListener("change", (event) => {
    const availableVip = robots.filter((element) => element.vip);
    renderTable(event.target.checked ? availableVip : robots);
    /*
    renderTable(
      event.target.checked ? robots.filter((element) => element.vip) : element
    );*/
    /*
    if (checkboxForFindVip) {
      const availableVip = robots.filter((element) => element.vip);
      renderTable(availableVip);
      console.log(availableVip);
    } */
  });
};

const post = await getRobots();
createTable();
renderTable(post);
findVip(post);
