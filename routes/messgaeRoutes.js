const express = require("express");
const router = express.Router();
const messageController = require("../controller/messgaeController");

// POST /messages - Create a new message
router.post("/messages", messageController.createMessage);

module.exports = router;
