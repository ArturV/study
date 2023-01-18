import express from "express";
import axios from "axios";

const app = express();

const PORT = 5000;
app.use(express.json());

app.get("/users", (_, res) => {
  axios
    .get("https://api.github.com/users")
    .then((data) => {
      res.send({ data }).end();
    })
    .catch((err) => {
      console.error(err);
      return res.status(err.status).send(err).end();
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
