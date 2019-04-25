const dbConnection = require("../database/db_connection.js");

const submitNewComment = (comment, post_id, user_id) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "INSERT INTO comments(body, post_id, user_id) VALUES ($1, (SELECT pk_post_id FROM posts WHERE pk_post_id=$2), (SELECT pk_user_id FROM users WHERE pk_user_id=$3))",
        [
          comment,
          post_id,
          user_id
        ])

        console.log("New comment added to database ");
        resolve(true)
  });
};

module.exports = submitNewComment;

//     (err, res) => {
//       if (err) {
//         return cb(err);
//       }
//       cb(null);
//     }
