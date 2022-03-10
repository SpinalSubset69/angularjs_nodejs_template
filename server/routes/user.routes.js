const router = require("express").Router();
const user_ctrl = require("./../controllers/user.ctrl");
const passport = require("passport");

router.post("/", user_ctrl.creteUser);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  user_ctrl.getCurrentUser
);

module.exports = router;
