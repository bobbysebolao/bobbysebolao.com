const { dbConnection } = require("../database/db_connection.js");

const submitEmailVerificationToken = async (token, username) => {
    return await dbConnection
      .none(
        "INSERT INTO email_verification_tokens(token, user_id, created_at) VALUES ($1, (SELECT pk_user_id FROM users WHERE username = $2), $3)", [token, username, Date.now()])
      // .then(res => {
      //   console.log("Email verification token successfully added to database");
      //   resolve(true);
      // })
      .catch(err => {
        throw new Error (`There was an error inserting the email verification token into the db: ${err}`)
      })
};

module.exports = submitEmailVerificationToken;
