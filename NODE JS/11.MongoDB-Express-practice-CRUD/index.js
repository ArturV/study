const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

/*
Susikurti nauja kolekciją (lentelę) orders . Implementuoti: CRUD (Create Read Update Delete - 
    POST GET PATCH DELETE) funkcionalumą norint pridėti vieną elementą vienu metu ir keletą elementų 
    vienu metu (pažengusiems).   
 
Pvz.:
/order - GET, POST, PATCH, DELETE
/orders - GET, POST, PATCH, DELETE
 
Užsakymo entity (įrašo tipas) privalo turėti sukūrimo (kada pateiktas užsakymas) datą, 
užbaigimo (arba preliminarus terminas, arba kada užsakymas buvo pristatytas) datą, komentarus, 
masyvą su produktų pavadinimais. 
*/
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;

const entity = [
  {
    orderDate: "2022-11-01",
    orderDueDate: "2022-11-23",
    orderComment: "Komentaras",
    orderProducts: ["samsung s20", "iPhone Z"],
  },
];

app.use(cors());
app.use(express.json());

app.get("/orders", async (_, res) => {
  try {
    const connection = await client.connect();
    const { deliveryType } = req.body;
    const ordersCount = await connection
      .db(DB)
      .collection(dbCollection)
      .count({ deliveryType });

    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .find()
      .toArray();

    await connection.close();
    res.send({ data, ordersCount });
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }

  res.send(entity).end();
});

app.post("/order", async (req, res) => {
  let { orderDate, orderDueDate, orderComment, orderProducts } =
    req?.body || {};
  console.log(req.body);

  const newEntity = {
    orderDate,
    orderDueDate,
    orderComment,
    orderProducts,
  };

  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(dbCollection)
      /* .insertOne({
        orderDate: "2022-11-15",
        orderDueDate: "2022-11-20",
        orderComment: "No comment",
        orderProducts: ["Xiomi v7", "Samsung TV85"],
      });*/
      .insertOne(newEntity); // - paduodame is Postman body
    //.insertMany - paduoda keleta
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }

  entity.push(newEntity);
  res.send(entity).end();
});

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { orderDueDate, orderComment } = req.body;

  try {
    const con = await client.connect();
    const db = con.db(DB);
    orderDueDate = new Date().toISOString();
    const user = await db
      .collection(dbCollection)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { orderDueDate, orderComment } }
      );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});
app.listen(PORT, () => console.log(`server is running on port: x ${PORT}`));
