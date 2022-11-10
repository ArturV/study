const express = require("express");
require("dotenv").config(); // npm i dotenv - pries tai irasome i terminala

const PORT = +process.env.PORT || 5000; // sita dalis turi buti: / require("dotenv").config(); / kai naudojame process.env
const users = [];
const app = express();

app.use(express.json());

app.get("/user/:userId", (req, res) => {
  const { userID } = req.params;
  const user = users.find((curUser) => curUser.userID === userID);
  console.log(users);
  res.send(user).end();
});

app.post("/create-user", (req, res) => {
  const { age, firstName, userID } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof userID !== "string" ||
    !isNumber(age)
  ) {
    res.status(400).send({ message: "Invalid data provided" }).end();
    return;
  }

  const user = { age, firstName, userID };
  users.push(user);

  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
