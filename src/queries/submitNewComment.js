const dbConnection = require("../database/db_connection.js");

const submitNewComment = (comment, post_id, user_id, timestamp, date, username, avatarName, avatarFilepath) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "INSERT INTO comments(body, post_id, user_id, com_timestamp, com_date, username, avatar_name, avatar_filepath) VALUES ($1, (SELECT pk_post_id FROM posts WHERE pk_post_id=$2), (SELECT pk_user_id FROM users WHERE pk_user_id=$3), $4, $5, $6, $7, $8)",
        [
          comment,
          post_id,
          user_id,
          timestamp,
          date,
          username,
          avatarName,
          avatarFilepath
        ])

        console.log("New comment added to database ");
        resolve(true)
  });
};

module.exports = submitNewComment;
