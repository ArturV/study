import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.jwtSecret;

export const signIn = (req, res) => {
  const { userName, password } = req.body;
};
