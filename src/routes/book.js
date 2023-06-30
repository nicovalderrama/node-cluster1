const express = require("express");
const router = express.Router();
const { Book } = require("../controllers");
const { jwtValidToken, isAdmin } = require("../middleware/auth-mdw");

router.post("/book", jwtValidToken, isAdmin, Book.createBook);
router.get("/book/all", jwtValidToken, Book.getAllBooks);
router.get("/book/:id", jwtValidToken, Book.getBook);
router.put("/book/:id", jwtValidToken, isAdmin, Book.updateBook);
router.delete("/book/:id", jwtValidToken, isAdmin, Book.deleteBook);
module.exports = router;
