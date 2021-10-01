const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Local environment variables
require("dotenv").config();
const URI = process.env.URI;

const authRoutes = require("./routes/users");
const artworkRoutes = require("./routes/artworks");
const comicsRoutes = require("./routes/comics");

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB !"))
  .catch(() => console.log("Connexion to MongoDB failed !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(express.static("client/build"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use("/api/auth", authRoutes);
app.use("/api/artworks", artworkRoutes);
app.use("/api/comics", comicsRoutes);

module.exports = app;
