const mongoose = require("mongoose");

const artworkSchema = mongoose.Schema({
  id: { type: String },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  material: { type: String, required: true },
  urls: { type: [String], required: true },
});

module.exports = mongoose.model("Artwork", artworkSchema);
