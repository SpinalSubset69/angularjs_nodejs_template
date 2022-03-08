const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: "users" },
    group: { type: mongoose.Types.ObjectId, ref: "groups" },
    title: { type: String },
    summary: { type: String },
    instructions: { type: String },
    questions: [
      {
        type: {
          question: { type: String },
          answers: [{ type: String }],
          correct_answer: { type: String },
        },
      },
    ], //Answers should be in a separate array
  },
  { timestamps: true }
);

module.exports = mongoose.model("forms", formsSchema);
