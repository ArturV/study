const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(express.json());

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

const SERVER_PORT = 5_000;

//2. ID (INT, AUTO_INCREMENT, PRIMARY KEY), title (TEXT), image (TEXT), price (DECIMAL), numberplates (VARCHAR)
app.post("/cars-table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `CREATE table cars (id int NOT NULL AUTO_INCREMENT, title varchar(20), image varchar(3000), price decimal(5,2), numberplates varchar(30), PRIMARY KEY(id))`
    );

    await con.end();
    res.send("Cars table created").end();
  } catch (error) {
    res.send(error).end();
    return console.error(error);
  }
});

//3,4

app.post("/cars", async (req, res) => {
  //const title = mysql.escape(req.body.title);

  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  const numberplates = req.body.numberplates;
  const cleanTitle = mysql.escape(title).replaceAll("'", "");
  const cleanImage = mysql.escape(image).replaceAll("'", "");
  const cleanPrice = mysql.escape(price).replaceAll("'", "");
  const cleanNumberplates = mysql.escape(numberplates).replaceAll("'", "");

  if (
    cleanTitle.length < 1 ||
    cleanTitle.length > 20 ||
    !cleanTitle ||
    cleanTitle === "NULL"
  ) {
    return res.status(400).send("Insert title").end();
  }

  if (cleanPrice.length < 1 || !cleanPrice || cleanPrice === "NULL") {
    return res.status(400).send("Write correct price").end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    console.log(cleanTitle);
    await con.execute(
      `INSERT INTO cars (title, image, price, numberplates) VALUES ('${cleanTitle}','${cleanImage}','${cleanPrice}','${cleanNumberplates}')`
    );
    await con.end();
    res.status(201).send("New Car added to db.").end();
  } catch (error) {
    res.status(500).send(error).end;
    return console.error(error);
  }
});

app.get("/cars", async (req, res) => {
  const limit = req.query.limit;
  //const limit = 3;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const query = !limit
      ? `SELECT * FROM cars ORDER BY id ASC`
      : `SELECT * FROM cars ORDER BY id ASC LIMIT ${limit};`;

    const result = await con.execute(query);

    await con.end();

    res.send(result[0]).end();
  } catch (error) {
    res.send(error).end;
    return console.error(error);
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server UP. We working on port: ${SERVER_PORT}`);
});
