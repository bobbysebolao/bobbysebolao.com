const { dbConnection } = require("../database/db_connection.js");

const submitNewImage = async (imageObj) => {
  return await dbConnection.result(
    "INSERT INTO main_images(name, size, filepath, type) VALUES (${name}, ${size}, ${path}, ${type}) ON CONFLICT ON CONSTRAINT unique_image_name DO NOTHING", imageObj
  )
  .catch(err => {
    throw new Error (`There was an error inserting the image into the db: ${err}`)
  })
};

module.exports = submitNewImage;
