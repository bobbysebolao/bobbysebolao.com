const jwt = require("jsonwebtoken");
require("dotenv").config();

const decodeJSONWebToken = (token) => {
  return new Promise((resolve, reject) => {
    if (token === undefined) {
      resolve(undefined);
    }
    else {
    const secret = process.env.SECRET;
    const decodedToken = jwt.verify(token, secret);
    resolve(decodedToken);
  }
  })
}

module.exports = decodeJSONWebToken;
