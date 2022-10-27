import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Bun!");
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
