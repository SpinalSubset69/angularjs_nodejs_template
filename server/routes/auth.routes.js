const router = require("express").Router();
const auth_controller = require("./../controllers/auth.ctrl");

router.post("/login", auth_controller.login);

module.exports = router;
