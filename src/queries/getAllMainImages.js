import { dbConnection } from "../database/db_connection.js";

export const getAllMainImages = async () => {
    return await dbConnection.any("SELECT * FROM main_images")
    .catch(err => {
        throw new Error(`There was an error getting the main images from the db: ${err}`)
      })
};
