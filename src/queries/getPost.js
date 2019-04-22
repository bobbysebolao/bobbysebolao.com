// SELECT * from reviews
//  INNER JOIN businesses ON business_id = businesses.id
//  WHERE businesses.name = 'Frank''s Fresh Cuts';

const dbConnection = require("../database/db_connection.js");

const getPost = postName => {
  return new Promise((resolve, reject) => {
    dbConnection.query("SELECT * FROM posts WHERE filename = $1", [postName])
      .then(res => {
        if (res.rows.length === 0) {
          reject("Post doesn't exist");
        } else {
          console.log(res.rows[0].pk_post_id);
          resolve(res.rows[0].pk_post_id);
        }
      })
      .catch(err => reject(err));
  });
};

module.exports = getPost;

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
