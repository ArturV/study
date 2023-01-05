import jwt from "jsonwebtoken";

const getHome = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ error: "User unauthorised" }).end();
  }

  try {
    const payload = jwt.verify(token, jwtSecret);
  } catch (err) {}
};
