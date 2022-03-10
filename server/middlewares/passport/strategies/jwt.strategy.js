const config = require("../../../config");
const users = require("../../../database/Schemas/users");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.token_secret,
  algorithms: ["RS256"],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwtPayload, done) => {
      users
        .findOne({ _id: jwtPayload.id }, { password: 0 })
        .populate("forms")
        .populate("friends")
        .populate("answers")
        .exec((err, user) => {
          if (err) return done(err, false);
          if (user) return done(null, user);
          return done(null, false);
        });
    })
  );
};
