const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const user_routes = require("./routes/user.routes");
const form_routes = require("./routes/form.route");
const connect_to_database = require("./database/index");
const config = require("./config");

//Connect to Database
(async () => await connect_to_database(config.mongodb_url))();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/users", user_routes);
app.use("/api/forms", form_routes);

//STATIC CONTENT
const public_path = path.join(__dirname, "public");

app.use(express.static(public_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(public_path, "app/index.html"));
});

module.exports = app;
