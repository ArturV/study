/*
Node Package Manager (npm) naudojamas įkelti bei valdyti packages (kodo gabaliukus - bibliotekos,frameworkai)
 bei atlikti kitus veiksmus susijusius su esamu projektu

 Pradėti projektą - npm init
Įrašyti packages - npm i

//

su kiekvienu nauju katalogu:

npm start

npm i nodemon

*/

const http = require("http"); // importuojame biblioteka
const servername = "127.0.0.1"; // lukalus komp IP localhost
const port = 5_000; // specifiska vieta kurioje teikia uzklausa
const randomN = Math.round(Math.random());

const server = http.createServer((req, res) => {
  // sukuria ir grazina serveri, pasiekia uzklausa (req) ir atsakyma (res)
  res.setHeader("Content-type", "application/json"); // panasu kaip JS su fetch
  if (randomN) {
    // jei atsitiktinis nr =1, grazink erorr'a
    res.statusCode = 403;
    res.end("Error");
  }

  res.statusCode = 200;

  res.end("Hello world");
});

server.listen(port, () => {
  // nurodom port'a ties kurio bus laukiama uzklausu
  console.log(`server up ${randomN}`);
});
