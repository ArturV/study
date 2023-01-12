import express from "express";
import Joi from "joi";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { MYSQL_CONFIG, jwt_secret } from "../src/config.js";

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

const router = express.Router();

export const registerUser = async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: error.message }).end();
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );

    await con.end();

    return res.status(200).send("User registered successfully").end(); // res.send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ error: "Incorrect email or password" }).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );

    await con.end();

    if (!data.length) {
      return res
        .status(400)
        .send({ error: "Incorrect email or password" })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );

      return res.send({ message: "Succesfully logged in", token }).end();
    }

    return res.status(400).send({ error: "Incorrect email or password" }).end();
  } catch (error) {
    return res.status(500).send({ error: "Unexpected error" });
  }
};

router.post("/register", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err: "Incorrect data" });
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);
    const reg_timestamp = new Date().toLocaleString(); // arba: new Date().toISOString()
    //arba new Date().getTime() arba new Date().now() arba:
    // reg_timestamp DATETIME NOT NULL DEFAULT (current_times tamp());
    //ALTER TABLE users MODIFY reg_timestamp DATETIME NOT NULL DEFAULT (current_timestamp());
    //ALTER TABLE users MODIFY COLUMN reg_timestamp DATETIME NOT NULL DEFAULT (current_timestamp());

    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [data] = await con.execute(
      `INSERT INTO users (email, password, reg_timestamp) VALUES (${mysql.escape(
        userData.email
      )},'${hashedPassword}', '${reg_timestamp}')`
    );
    await con.end();

    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: "Unexpected error, try again" });
  }
});

export default router;
