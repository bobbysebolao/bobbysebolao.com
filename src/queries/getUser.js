const { dbConnection } = require("../database/db_connection.js");

const getUser = async (username) => {
    return await dbConnection
      .one("SELECT * FROM users WHERE username = $1", [username.toLowerCase()])
      // .then(res => {
      //   if (!res.rows[0]) reject("Incorrect Username");
      //   resolve(res.rows[0]);
      // })
      .catch(err => {
        throw new Error (`There was an error getting the user data from the db: ${err}`)
      })
};

module.exports = getUser;
