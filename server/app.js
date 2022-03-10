const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const user_routes = require("./routes/user.routes");
const form_routes = require("./routes/form.route");
const auth_routes = require("./routes/auth.routes");
const connect_to_database = require("./database/index");
const jwtStrategy = require("./middlewares/passport/strategies/jwt.strategy");
const passport = require("passport");
const config = require("./config");
//Connect to Database
(async () => await connect_to_database(config.mongodb_url))();
(() => {
  jwtStrategy(passport);
})();
//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/users", user_routes);
app.use("/api/forms", form_routes);
app.use("/api/auth", auth_routes);

//STATIC CONTENT
const public_path = path.join(__dirname, "public");

app.use(express.static(public_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(public_path, "app/index.html"));
});

module.exports = app;


