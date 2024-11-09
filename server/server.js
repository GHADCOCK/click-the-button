// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
console.log("SERVER>JS");
// Middleware
app.use(cors()); // Enables CORS to allow cross-origin requests
app.use(express.json()); // Parses JSON request bodies

// In-memory click count variable (resets on server restart)
let clickCount = 0;

// Endpoint to get the current click count
app.get("/api/click-count", (req, res) => {
  res.json({ count: clickCount });
});

// Endpoint to increment the click count
app.post("/api/increment-click", (req, res) => {
  clickCount += 1;
  res.json({ count: clickCount });
});

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
