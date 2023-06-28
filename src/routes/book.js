const express = require("express");
const router = express.Router();
const { Book } = require("../controllers");

router.post("/book", Book.createBook);

module.exports = router;
