const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const SERVER_PORT = 5000;
const app = express();

//const name = req.body?.name?.trim();

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
  // ssl: process.env.sslmode,
};

console.log(MYSQL_CONFIG);

app.use(express.json());

app.post("/table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const name = req.body?.name?.trim();

    //todo: use request body
    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );

    res.send("Table created").end();
  } catch (error) {
    res.send(error).end();
    return console.error(error);
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`server is runnig on port: ${SERVER_PORT}`);
});
