const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  return res.send("world");
});

app.get("/bye", (req, res) => {
  return res.send("world");
});

app.listen(3000);

module.exports = app;