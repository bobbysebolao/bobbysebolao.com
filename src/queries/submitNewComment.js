import { dbConnection } from"../database/db_connection.js";

export const submitNewComment = async (commentData) => {
    return await dbConnection
      .result(
        "INSERT INTO comments(body, post_id, user_id, com_timestamp, com_date, username, avatar_name, avatar_filepath) VALUES (${comment}, (SELECT pk_post_id FROM posts WHERE pk_post_id=${postId}), (SELECT pk_user_id FROM users WHERE pk_user_id=${userId}), ${timestamp}, ${date}, ${username}, ${avatarName}, ${avatarFilepath})", commentData)
        .catch(err => {
          throw new Error (`There was an error inserting the comment into the db: ${err}`)
        })
};
