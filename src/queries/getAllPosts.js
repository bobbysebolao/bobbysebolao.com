import { dbConnection } from "../database/db_connection.js";

export const getAllPosts = async () => {
    return await dbConnection.any("SELECT * FROM posts")
    .catch(err => {
        throw new Error(`There was an error getting the posts from the db: ${err}`)
      })
};