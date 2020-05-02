const bcrypt = require("bcryptjs");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => resolve(hash))
      .catch(err => reject(err));
  });
};

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
