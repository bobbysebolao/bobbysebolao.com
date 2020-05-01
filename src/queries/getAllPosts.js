const { dbConnection } = require("../database/db_connection.js");

const getAllPosts = async () => {
    return await dbConnection.any("SELECT * FROM posts")
    .catch(err => {
        throw new Error(`There was an error getting the posts from the db: ${err}`)
      })
};

module.exports = getAllPosts;