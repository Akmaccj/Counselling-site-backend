const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// POST /messages - Create a new message
router.post("/signUp", userController.createUser);
router.post("/signIn", userController.loginUser);

module.exports = router;
