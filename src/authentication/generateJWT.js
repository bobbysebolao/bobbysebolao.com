const jwt = require("jsonwebtoken");

require("env2")("./config.env");

const secret = process.env.SECRET;

var generateJSONWebToken = obj => {
  return new Promise((resolve, reject) => {
    jwt.sign(obj, secret, (err, token) => {
      if (err) reject(err);
      console.log("Here's the token", token);
      resolve(token);
    });
  });
};

module.exports = generateJSONWebToken;
