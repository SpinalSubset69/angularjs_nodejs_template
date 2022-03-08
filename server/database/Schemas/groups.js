const mongoose = require("mongoose");

const groupsSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: "users" },
    assistants: [{ type: mongoose.ObjectId, ref: "users" }],
    forms: [{ type: mongoose.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

module.exports = new mongoose.model("gorups", groupsSchema);
