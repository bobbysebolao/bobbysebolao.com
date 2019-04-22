const dbConnection = require("../database/db_connection.js");

const submitNewUser = (comment, post_id, user_id) => {
  console.log("THIS IS THE COMMENT :", comment);
  console.log("THIS IS THE USER ID :", user_id);
  console.log("THIS IS THE POST ID :", post_id);
  // return;
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "INSERT INTO comments(body, post_id, user_id) VALUES ($1, (SELECT pk_post_id FROM posts WHERE pk_post_id=$2), (SELECT pk_user_id FROM users WHERE pk_user_id=$3))",
        [
          comment,
          post_id,
          user_id
        ]
      )
      .then(res => {
        console.log("New comment added to database ");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};

module.exports = submitNewUser;
