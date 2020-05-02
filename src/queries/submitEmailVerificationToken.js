const { dbConnection } = require("../database/db_connection.js");

const submitEmailVerificationToken = async (verificationTokenObj) => {
    return await dbConnection
      .result(
        "INSERT INTO email_verification_tokens(token, user_id, created_at) VALUES (${token}, (SELECT pk_user_id FROM users WHERE username = ${username}), ${timestamp})", verificationTokenObj)
      .catch(err => {
        throw new Error (`There was an error inserting the email verification token into the db: ${err}`)
      })
};

module.exports = submitEmailVerificationToken;
