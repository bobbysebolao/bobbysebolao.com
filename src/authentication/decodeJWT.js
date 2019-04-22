const jwt = require("jsonwebtoken");
require("env2")("./config.env");

const decodeJSONWebToken = (token, comment, post_id, callback) => {
  const secret = process.env.SECRET;
  const userID = jwt.verify(token, secret, (err, token) => {
    if (err) {
      return err;
    }
    else {
  return token.user_id;
}
});

callback(comment, post_id, userID);
}

module.exports = decodeJSONWebToken;
