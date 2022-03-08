const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema(
  {
    form: { type: mongoose.Types.ObjectId, ref: "forms" },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    answers: [{ type: String }],
    results: [{ type: Boolean }],
    grade: { type: Number },
    total_correct_answers: { type: Number },
  },
  { timestamps: true }
);

answersSchema.methods.fillForm = function (formQuestions) {
  //compare each answer with the given form
  //Answers must be the same length than questions
  let correct_answers = 0; //
  formQuestions.map((x, index) => {
    if (!this.answers[index].includes(x.correct_answer)) {
      this.results.push(false);
    } else {
      this.results.push(true);
      correct_answers++;
    }
  });

  //Get Grade
  this.total_correct_answers = correct_answers;
  this.grade = formQuestions.length / correct_answers;
};

module.exports = mongoose.model("answers", answersSchema);
