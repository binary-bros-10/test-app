app.get("/", (req, res) => {
  res.json({
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  });
});