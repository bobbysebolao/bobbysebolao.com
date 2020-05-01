const { dbConnection } = require("../database/db_connection.js");

const updateVerifiedUser = async (username) => {
    return await dbConnection
      .none(
        "UPDATE users SET is_verified = True WHERE username = $1",
        [
          username
        ]
      )
      // .then(res => {
      //   console.log("New user is now verified ");
      //   resolve(true);
      // })
      .catch(err => {
        throw new Error (`There was an error updating the user's details in the db: ${err}`)
      })
};

module.exports = updateVerifiedUser;
