const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    user_name: { type: String },
    email: { type: String, unique: true },
    school: { type: String },
    role: { type: String },
    phone_number: { type: String },
    password: { type: String },
    friends: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    forms: [{ type: mongoose.Types.ObjectId, ref: "forms" }],
    groups: [{ type: mongoose.Types.ObjectId, ref: "groups" }],
    answers: [{ type: mongoose.Types.ObjectId, ref: "answers" }],
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function (arg) {
  console.log(bcrypt.compare(arg, this.password));
  return await bcrypt.compare(arg, this.password);
};

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

module.exports = mongoose.model("users", userSchema);
