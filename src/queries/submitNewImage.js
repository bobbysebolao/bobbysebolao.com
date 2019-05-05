const dbConnection = require("../database/db_connection.js");

const submitNewImage = (obj) => {
  return new Promise((resolve, reject) => {
  // console.log("This is the form data :", obj);
  // console.log("This is the timestamp :", timestamp);
  dbConnection.query(
    "INSERT INTO main_images(name, size, filepath, type) VALUES ($1, $2, $3, $4) ON CONFLICT ON CONSTRAINT unique_image_name DO NOTHING",
    [
      obj.mainImage.name,
      obj.mainImage.size,
      obj.mainImage.path,
      obj.mainImage.type
    ],
  )
  .then(res => {
    console.log("Successfully written to DB");
    resolve("Successfully written to DB");
  })
  .catch(err => reject(err));
  });
};

module.exports = submitNewImage;
