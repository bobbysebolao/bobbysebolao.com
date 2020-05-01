const { dbConnection } = require("../database/db_connection.js");

const getComments = async (postName) => {
    return await dbConnection
      .any("SELECT * FROM comments WHERE post_id = (SELECT pk_post_id FROM posts WHERE filename = $1)", [postName])
      // .then(res => {
      //   console.log("Here are the comments: ", res)
      //   if (!res.rows[0]) resolve(null) 
      //   resolve(res.rows)
      // })
      .catch(err => {
        throw new Error(`There was an error getting the comments from the db: ${err}`)
      });
};

module.exports = getComments;
