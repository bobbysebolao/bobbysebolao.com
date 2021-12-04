import { dbConnection } from "../database/db_connection.js";

export const deleteEmailVerificationToken = async (token) => {
    return await dbConnection
      .result("DELETE FROM email_verification_tokens WHERE token = $1", [token])
      .catch(err => {
        throw new Error(`There was an error deleting the email verification token from the db: ${err}`)
      })
};
