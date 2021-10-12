const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Local environment variables
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const User = require("../models/User");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 12)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      const secretToken = jwt.sign({ userId: user._id }, TOKEN, {
        expiresIn: "2h",
      });
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.clearCookie("token");
          res.cookie("lemonToken", secretToken, {
            maxAge: 25000000,
            httpOnly: true,
          });
          res.status(200).json({
            userId: user._id,
            token: secretToken,
            access: "lemonAccess",
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
