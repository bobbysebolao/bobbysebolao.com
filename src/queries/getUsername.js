const { dbConnection } = require("../database/db_connection.js");

const getUsername = async (userId) => {
    return await dbConnection
      .one("SELECT * FROM users WHERE pk_user_id = $1", [userId])
      // .then(res => {
      //   if (!res.rows.length === 0) {
      //     reject("Queried User ID does not exist")
      //   } else {
      //     resolve(res.rows[0]);
      //   }
      // })
      .catch(err => {
        throw new Error (`There was an error getting the username data from the db: ${err}`)
      })
};

module.exports = getUsername;
