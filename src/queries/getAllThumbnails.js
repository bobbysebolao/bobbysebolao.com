import { dbConnection } from "../database/db_connection.js";

export const getAllThumbnails = async () => {
  return await dbConnection.any("SELECT * FROM thumbnails")
  .catch(err => {
    throw new Error(`There was an error getting the thumbnails from the db: ${err}`)
  })
};
