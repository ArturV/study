const express = require("express");

/*
1. Susikurkite naują node.js pratimą, įsidiekite express/cors.
2. Sukurkite array, kuriame bus saugomi mašinų brand'ai.
3. Sukurkite GET, kuris paduos visą array.
4. Sukurkite POST, kuris į array įrašys naują automobilio brandą.
Testuokite su PostMan.
*/

//diegimas CORS: npm install cors; ir importuodami.
// (mes ją pasivadinome 'app'): app.use(cors()).

const app = express();
const cors = require("cors");
const PORT = 5000;
let cars = ["Fiat", "VW", "Porsche"];
let getPingCount = 0;
let postPingCount = 0;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  req = cars;
  getPingCount++;

  console.log(req);
  console.log(`GET pings: ${getPingCount}`);
  res.send(`GET pings: ${getPingCount}`);
});

app.post("/", (req, res) => {
  let newCar = "audi a4";
  postPingCount++;

  cars.push(newCar);
  res.send(cars);

  console.log(`POST pings: ${postPingCount}`);
});

app.listen(PORT, () => console.log("Server up"));

//https://stackoverflow.com/questions/53706002/express-push-to-testing-array-on-post-request
