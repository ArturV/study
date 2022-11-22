const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;

app.use(express.json());
app.use(cors());

app.post("/collection", async (req, res) => {
  const { name } = req.body;

  try {
    const connection = await client.connect();
    const database = connection.db(DB);
    // kuriame nauja kolekcija, lentele:
    await database.createCollection(name);

    await connection.close();
  } catch (err) {
    res.status(500).send({ err });
  }
  res.send({ message: `${name} collection created` }).end();
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
