const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from DeployIt!",
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    API_KEY: process.env.API_KEY,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});