const crypto = require('crypto');

let generateEmailVerificationToken = () => {
  let token = crypto.randomBytes(16).toString('hex');
  return token;
};

module.exports = generateEmailVerificationToken;
