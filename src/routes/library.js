const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");

router.post("/library", libraryController.createLibrary);
router.get("/library/all", libraryController.getLibrariesController);
router.get("/library/:id", libraryController.getLibraryController);
router.put("/library/:id", libraryController.updateLibraryController);
router.delete("/library/:id", libraryController.deleteLibraryController);
module.exports = router;
