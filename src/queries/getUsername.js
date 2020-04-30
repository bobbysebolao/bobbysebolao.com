const { dbConnection } = require("../database/db_connection.js");

const getUsername = userId => {
  console.log("This is user id", userId);
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT * FROM users WHERE pk_user_id = $1", [userId])
      .then(res => {
        if (!res.rows.length === 0) {
          reject("Queried User ID does not exist")
        } else {
          // console.log("RESOLVE THIS: ", res.rows[0]);
          resolve(res.rows[0]);
        }
      })
      .catch(err => reject(err));
  });
};

module.exports = getUsername;
