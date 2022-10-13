// Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis
// iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje.
// Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

const getData = async () => {
  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const users = await response.json();

    console.log(users);
    return users;
  };

  //const users = await getUsers();

  //console.log(users);

  const renderUser = async () => {
    const users = getUsers();
    let html = "";

    users.forEach((user) => {
      let htmlInsertion = `<img src="${user.picture.large}" alt="alt"/> <p>Email: ${user.email}</p>`;
      html += htmlInsertion;
    });

    let container = document.querySelector(".container");
    container.innerHTML = html;
  };
};

getData();

//renderUser();
