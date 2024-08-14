const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth");
const messageController = require("../controller/messgaeController");

// POST /messages - Create a new message
router.post("/messages", messageController.createMessage);
router.get("/messages", verifyToken, messageController.getMessage);

module.exports = router;
