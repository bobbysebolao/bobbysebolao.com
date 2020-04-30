const { dbConnection } = require("../database/db_connection.js");

const deleteEmailVerificationToken = token => {
  console.log("This is the email token: ", token);
  return new Promise((resolve, reject) => {
    dbConnection
      .query("DELETE FROM email_verification_tokens WHERE token = $1", [token], (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(console.log("Deletion successful!"));
      })
  });
};

module.exports = deleteEmailVerificationToken;
