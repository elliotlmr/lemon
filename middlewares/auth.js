const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Local environment variables
require("dotenv").config();
const TOKEN = process.env.TOKEN;

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.lemonToken;
    const decodedToken = jwt.verify(token, TOKEN);
    const userId = decodedToken.userId;
    if (!userId) {
      return res.status(401).json({ error });
    }
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valable !";
    } else {
      User.findOne({ _id: userId })
        .then((user) => {
          req.user = user;
          next();
          console.log("Request accepted !");
        })
        .catch((error) => res.status(401).json({ error }));
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
