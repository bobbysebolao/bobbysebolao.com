import { dbConnection } from "../database/db_connection.js";

export const getEmailVerificationToken = async (token) => {
    return await dbConnection
      .one("SELECT * FROM email_verification_tokens WHERE token = $1", [token])
      .catch(err => {
        throw new Error (`There was an error getting the email verification token from the db. It might be because the email confirmation link has expired, or the token does not exist. Here is the error message from the stack trace: ${err}`)
      });
};
