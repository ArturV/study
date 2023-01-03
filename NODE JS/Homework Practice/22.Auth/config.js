import dotenv from "dotenv";
//const dotenv = require("dotenv").config(); identiska
dotenv.config();

export default {
  SERVER_PORT: process.env.SERVER_PORT || 5000,
  jwtSecret: process.env.JWT_SECRET,

  dbConfig: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port,
    database: process.env.database,
  },
};

export const SERVER_PORT = process.env.SERVER_PORT || 5000;
export const dbConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};
