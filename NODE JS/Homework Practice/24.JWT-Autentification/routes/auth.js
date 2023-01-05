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
    const reg_timestamp = new Date().toLocaleString();
    // reg_timestamp DATETIME NOT NULL DEFAULT (current_timestamp());

    //ALTER TABLE users MODIFY reg_timestamp DATETIME NOT NULL DEFAULT (current_timestamp());

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
