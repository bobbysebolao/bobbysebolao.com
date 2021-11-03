import { dbConnection } from "../database/db_connection.js";

export const submitEmailVerificationToken = async ({ token, username, timestamp }) => {
    return await dbConnection
      .result(
        "INSERT INTO email_verification_tokens(token, user_id, created_at) VALUES (${token}, (SELECT pk_user_id FROM users WHERE username = ${username}), ${timestamp})", { token, username, timestamp })
      .catch(err => {
        throw new Error (`There was an error inserting the email verification token into the db: ${err}`)
      })
};
