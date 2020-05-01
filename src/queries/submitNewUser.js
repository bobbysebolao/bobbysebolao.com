const { dbConnection } = require("../database/db_connection.js");

const submitNewUser = async (obj, hashedPassword) => {
    return await dbConnection
      .none(
        "INSERT INTO users(first_name, last_name, username, email, password, role, avatar_name, avatar_size, avatar_filepath, avatar_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [
          obj.first_name,
          obj.last_name,
          obj.username.toLowerCase(),
          obj.email.toLowerCase(),
          hashedPassword,
          'commenter',
          obj.userImage.name,
          obj.userImage.size,
          obj.userImage.path,
          obj.userImage.type
        ]
      )
      // .then(res => {
      //   console.log("New user added to database ");
      //   resolve(true);
      // })
      .catch(err => {
        throw new Error (`There was an error inserting the new user into the db: ${err}`)
      })
};

module.exports = submitNewUser;
