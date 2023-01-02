const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config");

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, jwtSecret);
      next();
    } catch (err) {
      console.log(err);
      res.status(400).send("Invalid token");
    }
  },
};
