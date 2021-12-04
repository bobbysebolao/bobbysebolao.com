import { dbConnection } from "../database/db_connection.js";

export const submitNewUser = async (userObj) => {
    return await dbConnection
      .result(
        "INSERT INTO users(first_name, last_name, username, email, password, role, avatar_name, avatar_size, avatar_filepath, avatar_type) VALUES (${first_name}, ${last_name}, ${username}, ${email}, ${password}, ${role}, ${avatar_name}, ${avatar_size}, ${avatar_filepath}, ${avatar_type})",
        {
          first_name: userObj.first_name,
          last_name: userObj.last_name,
          username: userObj.username.toLowerCase(),
          email: userObj.email.toLowerCase(),
          password: userObj.password,
          role: 'commenter',
          avatar_name: userObj.userImage.name,
          avatar_size: userObj.userImage.size,
          avatar_filepath: userObj.userImage.path,
          avatar_type: userObj.userImage.type
        }
      )
      .catch(err => {
        throw new Error (`There was an error inserting the new user into the db: ${err}`)
      })
};
