const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bodyParser = require("body-parser");
const messageRoutes = require("./routes/messgaeRoutes"); // Ensure the file name is correct
const userRoutes = require("./routes/userRoutes");

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// Routes
app.use("/api", messageRoutes);
app.use("/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
