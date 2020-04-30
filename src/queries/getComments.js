const { dbConnection } = require("../database/db_connection.js");

const getComments = postName => {
  // console.log("This is the post name: ", postName);
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT * FROM comments WHERE post_id = (SELECT pk_post_id FROM posts WHERE filename = $1)", [postName])
      .then(res => {
        if (!res.rows[0]) {
          console.log("There are no comments on this blog post")
          resolve(null);
        } else {
        resolve(res.rows);
      }
      })
      .catch(err => reject(err));
  });
};

module.exports = getComments;
