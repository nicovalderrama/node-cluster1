const express = require("express");
const router = express.Router();
const { User } = require("../controllers");

router.post("/user", User.createUser);
router.post("/user/login", User.authUser);
router.put("/user/:id", User.updateUser);
router.delete("/user/:id", User.deleteUser);
module.exports = router;
