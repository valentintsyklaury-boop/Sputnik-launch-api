const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Sputnik Launch API 🚀");
});

app.listen(3000, () => {
  console.log("Sputnik Launch API running on port 3000");
});
