const { dbConnection } = require("../database/db_connection.js");

const deleteEmailVerificationToken = async (token) => {
    return await dbConnection
      .none("DELETE FROM email_verification_tokens WHERE token = $1", [token])
      .then(() => console.log("Deletion successful!"))
      .catch(err => {
        throw new Error(`There was an error deleting the email verification token from the db: ${err}`)
      })
};

module.exports = deleteEmailVerificationToken;
