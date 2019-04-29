const dbConnection = require("../database/db_connection.js");

const getTags = query => {
  console.log("This is the query: ", query);
  // return;
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT * FROM post_tags WHERE $1 ~ tag_name", [query])
      .then(res => {
        if (!res.rows[0]) reject("Tag query does not match any tags");
        resolve(res.rows);
      })
      .catch(err => reject(err));
  });
};

module.exports = getTags;
