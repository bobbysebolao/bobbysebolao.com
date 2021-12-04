import { dbConnection } from "../database/db_connection.js";

export const getUsername = async (userId) => {
    return await dbConnection
      .one("SELECT * FROM users WHERE pk_user_id = $1", [userId])
      .catch(err => {
        throw new Error (`There was an error getting the username data from the db: ${err}`)
      })
};
