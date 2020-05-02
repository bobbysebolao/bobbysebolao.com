const { dbConnection } = require("../database/db_connection.js");

const getTags = async (query) => {
    return await dbConnection
      .any("SELECT * FROM post_tags WHERE tag_name ~ $1", [`^${query}`])
      .catch(err => {
        throw new Error (`There was an error getting the tags from the db: ${err}`)
      })
};

module.exports = getTags;
