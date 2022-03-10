const jwt = require("jsonwebtoken");
const config = require("../config");

const generateJwt = (payload) => {
  console.log(config.token_secret);
  const tokenIssued = jwt.sign(payload, config.token_secret, {
    expiresIn: config.token_expires_in,
    algorithm: "RS256",
  });

  return {
    token: tokenIssued,
    iat: payload.iat,
  };
};

const verifyJwt = (token) => {
  try {
    return jwt.verify(token, config.token_secret, { algorithms: ["RS256"] });
  } catch (ex) {}
};

const decodeJwt = (token) => {
  try {
    return jwt.decode(token);
  } catch (ex) {
    console.log(ex.message);
    throw new Error(ex);
  }
};

module.exports = {
  generateJwt,
  decodeJwt,
  verifyJwt,
};
