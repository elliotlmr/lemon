const express = require("express");
const router = express.Router();
const artCtrl = require("../controllers/artworks");
const auth = require("../middlewares/auth");

router.get("/", artCtrl.getArtworks);

//router.get("/:id", auth, artCtrl.getOneArtwork);

//router.post("/", auth, artCtrl.createArtwork);

//router.put("/:id", auth, artCtrl.modifyArtwork);

//router.delete("/:id", auth, artCtrl.deleteArtwork);

module.exports = router;
