const createTable = () => {
  const newTable = document.createElement("table");
  const tableRow = document.createElement("tr");

  const tableHeadForID = document.createElement("th");
  const tableHeadForImage = document.createElement("th");
  const tableHeadForFirstname = document.createElement("th");
  const tableHeadForLastname = document.createElement("th");
  const tableHeadForCity = document.createElement("th");
  const tableHeadForFavoriteColor = document.createElement("th");

  tableHeadForID.innerHTML = "ID";
  tableHeadForImage.innerHTML = "Image";
  tableHeadForFirstname.innerHTML = "Name";
  tableHeadForLastname.innerHTML = "Surname";
  tableHeadForCity.innerHTML = "City";
  tableHeadForFavoriteColor.innerHTML = "Fav. color";

  tableRow.append(
    tableHeadForID,
    tableHeadForImage,
    tableHeadForFirstname,
    tableHeadForLastname,
    tableHeadForCity,
    tableHeadForFavoriteColor
  );

  newTable.append(tableRow);

  document.body.append(newTable);
};

export { createTable };
