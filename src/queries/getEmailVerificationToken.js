const { dbConnection } = require("../database/db_connection.js");

const getEmailVerificationTokens = token => {
  console.log("This is the email token: ", token);
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT * FROM email_verification_tokens WHERE token = $1", [token])
      .then(res => {
        if (!res.rows[0]) reject("Email confirmation link has expired/token does not exist");
        resolve(res.rows[0]);
      })
      .catch(err => reject(err));
  });
};

module.exports = getEmailVerificationTokens;
