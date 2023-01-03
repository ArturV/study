import express from "express";
//const express = require("express");
import cors from "cors";
import { SERVER_PORT } from "./config.js";
import auth from "./auth.js";
import content from "./content.js";
//const cors = require("cors");

//const SERVER_PORT = 5_000;
//const { SERVER_PORT } = require("./config");
//const auth = require("./auth");
//const content = require("./content");

// Susikurkime naują NodeJS projektą su: Express, CORS, mysql2, eslint, JOI bei bcryptjs.

const app = express();

app.use(express.json());
app.use(cors());

app.use("./auth", auth);
app.use("./content", content);

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
