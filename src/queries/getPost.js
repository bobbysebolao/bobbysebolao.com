const { dbConnection } = require("../database/db_connection.js");

const getPost = async (postName) => {
    return await dbConnection.one("SELECT * FROM posts WHERE filename = $1", [postName])
    .catch(err => {
      throw new Error (`There was an error getting the blog post from the db: ${err}`)
    })
};

module.exports = getPost;