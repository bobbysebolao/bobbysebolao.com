const crypto = require('crypto');

let generateEmailVerificationToken = () => {
  let token = crypto.randomBytes(16).toString('hex');
  console.log("Generating token...", token);
  return token;
};

module.exports = generateEmailVerificationToken;
