import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.jwtSecret;

//const jwtSecret = "codeAcademy";

export const getHome = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ error: "User unauthorised" }).end();
  }

  try {
    const payload = jwt.verify(token, jwtSecret);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }

  res.send("Welcome").end();
};
