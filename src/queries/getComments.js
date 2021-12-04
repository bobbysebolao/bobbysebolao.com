import { dbConnection } from "../database/db_connection.js";

export const getComments = async (postName) => {
    return await dbConnection
      .any("SELECT * FROM comments WHERE post_id = (SELECT pk_post_id FROM posts WHERE filename = $1)", [postName])
      .catch(err => {
        throw new Error(`There was an error getting the comments from the db: ${err}`)
      });
};
