const dbConnection = require("../database/db_connection.js");

const updateVerifiedUser = (username) => {
  console.log("THIS IS THE USER :", username);
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "UPDATE users SET is_verified = True WHERE username = $1",
        [
          username
        ]
      )
      .then(res => {
        console.log("New user is now verified ");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};

module.exports = updateVerifiedUser;
