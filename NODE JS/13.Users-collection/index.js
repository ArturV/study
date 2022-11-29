const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5000;

const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.get("/users/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);

  if (!name) {
    res.status(400).send("This name was not provided.").end();
    return;
  }

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ name: { $regex: name } })
      .toArray();
    console.log(data);
    await connection.close();

    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
