const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// Local environment variables
require("dotenv").config();
const URI = process.env.URI;
const HOST_NAME = process.env.HOST_NAME;

const authRoutes = require("./routes/users");
const artworkRoutes = require("./routes/artworks");
//const comicsRoutes = require("./routes/comics");

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB !"))
  .catch(() => console.log("Connexion to MongoDB failed !"));

const app = express();

app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", HOST_NAME);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(express.static("client/build"));

app.use("/api/auth", authRoutes);
app.use("/api/artworks", artworkRoutes);
//app.use("/api/comics", comicsRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = app;
