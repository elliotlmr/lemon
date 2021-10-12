const Artwork = require("../models/Artwork");

exports.getArtworks = (req, res, next) => {
  Artwork.find()
    .then((artworks) => res.status(200).json(artworks))
    .catch((error) => res.status(400).json({ error }));
};

exports.createArtworks = (req, res, next) => {
  const artwork = new Artwork({
    userId: req.user._id,
    title: req.body.title,
    description: req.body.description,
    material: req.body.material,
    urls: req.body.links,
  });
  artwork
    .save()
    .then(() => res.status(201).json({ message: "Artwork saved !" }))
    .catch((error) => res.status(400).json({ error }));
};
