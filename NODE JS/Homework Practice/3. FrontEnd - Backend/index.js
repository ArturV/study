const express = require("express");

/*
1. Susikurkite naują node.js pratimą, įsidiekite express/cors.
2. Sukurkite array, kuriame bus saugomi mašinų brand'ai.
3. Sukurkite GET, kuris paduos visą array.
4. Sukurkite POST, kuris į array įrašys naują automobilio brandą.
Testuokite su PostMan.
*/

const app = express();
const cors = require("cors");
const PORT = 5000;
let cars = ["BMW", "VW", "Porsche"];

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  req = cars;
  console.log(req);
  res.send = "ok";
});

app.post("/", (req, res) => {
  let car = "audi";
  cars.push(car);
  res.send(cars);
});

app.listen(PORT, () => console.log("server working"));

//https://stackoverflow.com/questions/53706002/express-push-to-testing-array-on-post-request
