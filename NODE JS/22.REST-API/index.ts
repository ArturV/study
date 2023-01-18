import express from "express";
import axios from "axios";

const app = express();

const PORT = 5000;
app.use(express.json());

app.get("/users", (_, res) => {
  axios
    .get("https://api.github.com/users")
    .then((userResponse) => {
      res.send(userResponse.data).end();
    })
    .catch((err) => {
      console.error(err);
      return res.status(err.status).send(err).end();
    });
});

app.get("/users/:id", (req, res) => {
  const id = +req.params.id;

  axios
    .get("https://api.github.com/users")
    .then((userResponse) => {
      const userById = userResponse.data.find((user) => user.id === id);

      if (!userById) {
        return res.status(404).send({ message: "does not exist" }).end();
      }

      res.send(userById).end();
    })
    .catch((err) => {
      console.error(err);
      return res.status(err.status).send(err).end();
    });
});

// be axios:
// app.get("/user/:id", (req, res) => {
//   const id = +req.params.id;

//   fetch("https://api.github.com/users")
//     .then(async (response) => {
//       const usersResponse = await response.json();
//       const userById = usersResponse.find((user) => user.id === id);
//       if (!userById) {
//         return res.status(404).send({ message: "User does not exist" }).end();
//       }

//       res.send(userById).end();
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.send(err).end();
//     });
// });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
