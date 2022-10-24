// Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis
// iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti kortelėje.
// Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

const getUsers = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const users = await response.json();

    console.log({ users });
    document.getElementById("container").innerHTML = JSON.stringify(users);
    return users;
  } catch (error) {
    console.error(error);
  }
};

const renderUser = (users) => {
  const email = document.createElement("p");
  const image = document.createElement("img");
  console.log(users);

  users.forEach((element) => {
    email.textContent = element.email;

    image.src = users.picture.large;
    image.setAttribute("alt", "UserPicture");

    const email2 = document.createElement("p");
    email2.textContent = element.email2;

    const addImage = document.body.append(image);
    const addEmail = document.body.append(email);
    document.body.append(email2);
  });
};

//const userX = getUsers();
getUsers();
renderUser();
