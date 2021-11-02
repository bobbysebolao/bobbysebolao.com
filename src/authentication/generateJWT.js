const jwt = require("jsonwebtoken");

require("dotenv").config();

const secret = process.env.SECRET;

var generateJSONWebToken = obj => {
  return new Promise((resolve, reject) => {
    jwt.sign(obj, secret, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

module.exports = generateJSONWebToken;
