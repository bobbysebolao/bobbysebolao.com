const dbConnection = require("../database/db_connection.js");

const submitNewUser = (comment, user_id) => {
  console.log("THIS IS THE COMMENT :", comment);
  console.log("THIS IS THE USER ID :", user_id);
  return;
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "INSERT INTO comments(body, post_id, user_id) VALUES ($1, (SELECT id FROM posts WHERE pub_timestamp=$2))",
        [
          comment,
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
