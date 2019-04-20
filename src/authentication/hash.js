const bcrypt = require("bcryptjs");
console.log("Hello")

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => resolve(hash))
      .catch(err => reject(err));
  });
};

//callback version
// const comparePassword = (password, hashedPassword) => {
//     return new Promise ((resolve, reject) => {
//         bcrypt.compare(password, hashedPassword, (err, res) => {
//             if (err) reject(err);
//             resolve(res);
//         })
//     })
// }

const comparePassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(password, hashedPassword)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

module.exports = {
  hashPassword,
  comparePassword
};
