const answers = require("../database/Schemas/answers");
const forms = require("./../database/Schemas/forms");

module.exports = {
  createForm: async (req, res) => {
    try {
      const data = req.body;
      const newForm = new forms(data);
      await newForm.save();
      return res.status(200).json({ message: "Saved", data: newForm });
    } catch (ex) {
      console.log(ex.message);
    }
  },
  fillForm: async (req, res) => {
    try {
      const data = req.body;
      const formId = req.params.id;
      const form = await forms.findOne({ _id: formId });
      const newFillForm = new answers(data);
      newFillForm.form = formId;
      newFillForm.fillForm(form.questions);
      await newFillForm.save();
      return res.status(200).json({ message: "Answered", data: newFillForm });
    } catch (ex) {
      console.log(ex.message);
    }
  },
};
