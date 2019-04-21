const jwt = require("jsonwebtoken");
require("env2")("./config.env");

const secret = process.env.SECRET;

const decodeJSONWebToken = (token) => {
  jwt.verify(token, secret, function(err, token) {
    if (err) {
      return err;
    }
    else {
  return console.log(token.user_id);
}
});
}

module.exports = decodeJSONWebToken;
