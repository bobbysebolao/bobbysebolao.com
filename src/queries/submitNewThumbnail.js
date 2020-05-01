const { dbConnection } = require("../database/db_connection.js");

const submitNewThumbnail = async (obj) => {
  return await dbConnection.none(
    "INSERT INTO thumbnails(name, size, filepath, type) VALUES ($1, $2, $3, $4) ON CONFLICT ON CONSTRAINT unique_thumbnail_name DO NOTHING",
    [
      obj.thumbnail.name,
      obj.thumbnail.size,
      obj.thumbnail.path,
      obj.thumbnail.type
    ],
  )
  // .then(res => {
  //   console.log("Successfully written to DB");
  //   resolve("Successfully written to DB");
  // })
  .catch(err => {
    throw new Error (`There was an error inserting the thumbnail into the db: ${err}`)
  })
};

module.exports = submitNewThumbnail;
