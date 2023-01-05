import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.SERVER_PORT || 5000;
export const jwt_secret = process.env.JWT_SECRET;

export const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};
