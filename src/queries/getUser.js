const { dbConnection } = require("../database/db_connection.js");

const getUser = async (username) => {
    return await dbConnection
      .oneOrNone("SELECT * FROM users WHERE username = $1", [username.toLowerCase()])
      .catch(err => {
        throw new Error (`There was an error getting the user data from the db: ${err}`)
      })
};

module.exports = getUser;
