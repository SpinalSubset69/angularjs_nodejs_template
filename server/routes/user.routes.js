const router = require("express").Router();
const user_ctrl = require("./../controllers/user.ctrl");

router.post("/", user_ctrl.creteUser);

module.exports = router;
