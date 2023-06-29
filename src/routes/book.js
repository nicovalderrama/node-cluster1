const express = require("express");
const router = express.Router();
const { Book } = require("../controllers");

router.post("/book", Book.createBook);
router.get("/book/all", Book.getAllBooks);
router.get("/book/:id", Book.getBook);
module.exports = router;
