const users = require("../database/Schemas/users");
const { generateJwt } = require("../utils/jwt");

module.exports = {
  login: async (req, res) => {
    try {
      const data = req.body;
      const user = await users.findOne({ email: data.email });

      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      const validPassword = await user.validatePassword(data.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const session = generateJwt({
        id: user._id,
        email: user.email,
        user_name: user.user_name,
        iat: Date.now(),
      });      
      return res.status(200).json({
        message: "Welcome",
        session,
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};
