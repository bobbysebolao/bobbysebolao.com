const { dbConnection } = require("../database/db_connection.js");

const getAllMainImages = () => {
  console.log("THUMBNAILS INCOMING...")
    return new Promise((resolve, reject) => {
    dbConnection.query("SELECT * FROM main_images",
    (err, res) => {
      if (err) {
        reject(err);
      }
      // console.log("The main images: ", res.rows)
      resolve(res.rows);
    }
  );
});
};

module.exports = getAllMainImages;
