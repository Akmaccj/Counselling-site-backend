const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const messageRoutes = require("./routes/messgaeRoutes"); // Ensure the file name is correct

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// Routes
app.use("/api", messageRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
