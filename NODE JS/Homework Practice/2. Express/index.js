const express = require("express");

const PORT = 5000;
const cars = ["BMW", "VW", "Porsche"];
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
