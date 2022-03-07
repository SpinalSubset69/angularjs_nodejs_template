const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES

//STATIC CONTENT
const public_path = path.join(__dirname, "public");

app.use(express.static(public_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(public_path, "app/index.html"));
});

module.exports = app;
