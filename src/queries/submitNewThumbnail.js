const dbConnection = require("../database/db_connection.js");

const submitNewThumbnail = (obj) => {
  // console.log("This is the form data :", obj);
  // console.log("This is the timestamp :", timestamp);
  dbConnection.query(
    "INSERT INTO thumbnails(name, size, filepath, type) VALUES ($1, $2, $3, $4) ON CONFLICT ON CONSTRAINT unique_thumbnail_name DO NOTHING",
    [
      obj.thumbnail.name,
      obj.thumbnail.size,
      obj.thumbnail.path,
      obj.thumbnail.type
    ],
  );
  console.log("Successfully written to DB");
};

module.exports = submitNewThumbnail;
