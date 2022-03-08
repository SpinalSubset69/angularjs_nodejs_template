const router = require("express").Router();
const form_controller = require("./../controllers/forms.ctrl");

router.post("/", form_controller.createForm);
router.post("/:id", form_controller.fillForm);

module.exports = router;
