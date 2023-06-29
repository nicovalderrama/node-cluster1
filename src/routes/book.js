const express = require("express");
const router = express.Router();
const { Book } = require("../controllers");

router.post("/book", Book.createBook);
router.get("/book/all", Book.getAllBooks);
router.get("/book/:id", Book.getBook);
router.put("/book/:id", Book.updateBook);
router.delete("/book/:id", Book.deleteBook);
module.exports = router;
