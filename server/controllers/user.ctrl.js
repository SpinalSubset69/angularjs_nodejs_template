const users = require("./../database/Schemas/users");
module.exports = {
  creteUser: async (req, res) => {
    try {
      const data = req.body;
      const newUser = new users(data);
      const result = await newUser.save();
      const { password, ...userInfo } = result._doc;
      return res.status(200).json({ message: "Saved", data: userInfo });
    } catch (ex) {
      console.log(ex.message);
    }
  },
};
