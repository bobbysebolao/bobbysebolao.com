const { dbConnection } = require("../database/db_connection.js");

const getAllThumbnails = async () => {
  return await dbConnection.any("SELECT * FROM thumbnails")
  .catch(err => {
    throw new Error(`There was an error getting the thumbnails from the db: ${err}`)
  })
};

module.exports = getAllThumbnails;
