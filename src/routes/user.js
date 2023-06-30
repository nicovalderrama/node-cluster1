const express = require("express");
const router = express.Router();
const { User } = require("../controllers");

router.post("/user", User.createUser);
router.post("/user/login", User.authUser);
module.exports = router;
