const dbConnection = require("../database/db_connection.js");

const getUser = username => {
  console.log("This is username", username);
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT * FROM users WHERE username = $1", [username])
      .then(res => {
        if (!res.rows[0]) reject("Incorrect Username");
        resolve(res.rows[0]);
      })
      .catch(err => reject(err));
  });
};

module.exports = getUser;
