const dbConnection = require("../database/db_connection.js");

const getUsernameValid = username => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT username FROM users WHERE username = $1", [username])
      .then(res => {
        if (res.rows.length > 0) {
          reject(console.log('Username already Exists'));
        } else {
          resolve(console.log("Username does not already exist, ok to use"));
        }
      })
      .catch(err => reject(err));
  });
};

module.exports = getUsernameValid;
