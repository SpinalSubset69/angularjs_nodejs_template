const mongoose = require("mongoose");

module.exports = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to Database");
  } catch (ex) {
    console.log(ex.message);
  }
};
