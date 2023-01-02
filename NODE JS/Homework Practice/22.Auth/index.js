const express = require("express");
const cors = require("cors");

const SERVER_PORT = 5_000;
//const { SERVER_PORT } = require("./config");

// Susikurkime naują NodeJS projektą su: Express, CORS, mysql2, eslint, JOI bei bcryptjs.

const mysql = require("mysql2/promise");
require("dotenv").config();
const Joi = require("joi");
const bcrypt = require("bcryptjs");

// Susikurkime naują NodeJS projektą su: Express, CORS, mysql2, eslint, JOI bei bcryptjs.

const router = express.Router();

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err: "Incorect data sent" });
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, ${hashedPassword})`
    );

    await (await con).end();

    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: "Please try again" });
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err: "Incorect email or passw" });
  }

  try {
    const con = mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)} )`
    );
    await (await con).end();

    if (data.length === 0) {
      return res.send(400).send({ err: "Incorrect email or password" });
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      return res.send("ok");
    }

    return res.status(400).send({ err: "Incorect email or password" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: "Unexpected error, Please try again" });
  }
});

module.exports = router;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

/*
app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});*/

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
