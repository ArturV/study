const express = require("express");

const app = express();
const PORT = 5_000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ age: 24 });
});

app.post("/", (req, res) => {
  res.send({ age: req.body.age * 2 });
});

app.listen(PORT, () => {
  console.log(`server is runnig on port: ${PORT}`);
});
