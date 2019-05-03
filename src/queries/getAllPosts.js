const dbConnection = require("../database/db_connection.js");

const getAllPosts = () => {
    return new Promise((resolve, reject) => {
    dbConnection.query("SELECT * FROM posts",
    (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    }
  );

        // if (res.rows.length === 0) {
        //   reject("Post doesn't exist");
        // } else {
        //   console.log(res.rows[0].pk_post_id);
        //   resolve(res.rows[0].pk_post_id);
        // }

});
};

module.exports = getAllPosts;

// const getPost = postName => {
//   return new Promise((resolve, reject) => {
//     dbConnection.query("SELECT * FROM posts WHERE filename = $1", ["post-8.html"])
//       .then(res => {
//         if (res.rows.length > 0) {
//           reject('Username already Exists');
//         } else {
//           resolve(res.rows[0].pk_post_id;);
//         }
//       })
//       .catch(err => reject(err));
//   });
// };
