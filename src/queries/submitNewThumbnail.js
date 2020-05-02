const { dbConnection } = require("../database/db_connection.js");

const submitNewThumbnail = async (thumbnailObj) => {
  return await dbConnection.result(
    "INSERT INTO thumbnails(name, size, filepath, type) VALUES (${name}, ${size}, ${path}, ${type}) ON CONFLICT ON CONSTRAINT unique_thumbnail_name DO NOTHING", thumbnailObj
  )
  .catch(err => {
    throw new Error (`There was an error inserting the thumbnail into the db: ${err}`)
  })
};

module.exports = submitNewThumbnail;
