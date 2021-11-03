import { dbConnection } from "../database/db_connection.js";

export const getPost = async (postName) => {
    return await dbConnection.one("SELECT * FROM posts WHERE filename = $1", [postName])
    .catch(err => {
      throw new Error (`There was an error getting the blog post from the db: ${err}`)
    })
};