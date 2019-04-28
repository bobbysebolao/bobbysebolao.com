const dbConnection = require("../database/db_connection.js");

const submitNewUser = (obj, hashedPassword) => {
  console.log("THIS IS THE USER :", obj);
  console.log("THIS IS THE HASH :", hashedPassword);
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
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
      .then(res => {
        console.log("New user added to database ");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};

module.exports = submitNewUser;
