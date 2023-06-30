const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");
const { jwtValidToken, isAdmin } = require("../middleware/auth-mdw");

router.post("/library", jwtValidToken, isAdmin, libraryController.createLibrary);
router.get("/library/all", jwtValidToken, libraryController.getLibrariesController);
router.get("/library/:id", jwtValidToken, libraryController.getLibraryController);
router.put("/library/:id", jwtValidToken, isAdmin, libraryController.updateLibraryController);
router.delete("/library/:id", jwtValidToken, isAdmin, libraryController.deleteLibraryController);
module.exports = router;
