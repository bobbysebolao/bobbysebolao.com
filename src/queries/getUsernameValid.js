const { dbConnection } = require("../database/db_connection.js");

const getUsernameValid = async (username) => {
    return await dbConnection
      .none("SELECT username FROM users WHERE username = $1", [username])
      // .then(res => {
      //   if (res.rows.length > 0) {
      //     reject(console.log('Username already Exists'));
      //   } else {
      //     resolve(console.log("Username does not already exist, ok to use"));
      //   }
      // })
      .catch(err => {
        throw new Error (`There was an error checking the db to see if the specified username already exists: ${err}`)
      })
};

module.exports = getUsernameValid;
