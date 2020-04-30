const { dbConnection } = require("../database/db_connection.js");

const submitEmailVerificationToken = (token, username) => {
  console.log("THIS IS THE TOKEN :", token);
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "INSERT INTO email_verification_tokens(token, user_id, created_at) VALUES ($1, (SELECT pk_user_id FROM users WHERE username = $2), $3)",
        [
          token,
          username,
          Date.now()
        ]
      )
      .then(res => {
        console.log("Email verification token successfully added to database");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};

module.exports = submitEmailVerificationToken;
