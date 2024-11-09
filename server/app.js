// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enables CORS to allow cross-origin requests
app.use(express.json()); // Parses JSON request bodies

// Sample route to test connectivity
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server! F YA" });
});

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all handler for any request that doesn't match an API route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
