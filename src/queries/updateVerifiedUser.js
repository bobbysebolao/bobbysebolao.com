import { dbConnection } from "../database/db_connection.js";

export const updateVerifiedUser = async (username) => {
    return await dbConnection
      .result(
        "UPDATE users SET is_verified = True WHERE username = $1",
        [
          username
        ]
      )
      .catch(err => {
        throw new Error (`There was an error updating the user's details in the db: ${err}`)
      })
};
