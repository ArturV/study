const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(cors());
/*
Route'ai:

GET /memberships
POST /memberships
DELETE /memberships/:id
GET /users/:order
POST /users/
*/

const URI = process.env.URI;
const client = new MongoClient(URI);
const PORT = +process.env.PORT || 5000;
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;
const DBCOLLECTION2 = process.env.DBCOLLECTION2;

app.use(express.json());

app.get("/memberships", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION2)
      .find()
      .sort({ price: 1 })
      .toArray();
    console.log(data);
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

app.post("/memberships", async (req, res) => {
  const { name, price, description } = req?.body || {};

  if (!name || !price || !description) {
    res.status(400).send("write correct data").end();
    return;
  }

  if (
    typeof name !== "string" &&
    typeof price !== number &&
    typeof description !== "string"
  ) {
    res.status(400).send("Please enter correct type of data").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION2)
      .insertOne({ name, price, description });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.delete("/memberships/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("ID was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTION2)
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    res.send(data).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
  }
});

app.post("/users", async (req, res) => {
  const { name, surname, email, service_id } = req?.body || {};

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!name || !surname || !email) {
    res.status(400).send("write correct data").end();
    return;
  }

  if (
    typeof name !== "string" &&
    typeof surname !== "string" &&
    typeof email !== "string"
  ) {
    console.log("Please enter correct type of data");
    res.status(400).send("Please enter correct type of data").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ name, surname, email, service_id, userIp });
    await con.close();
    console.log(name, surname, email, service_id, userIp);
    return res.send(dbRes).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();
    res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.get("/users/:order", async (req, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
