const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");

router.post("/library", libraryController.createLibrary);

module.exports = router;
