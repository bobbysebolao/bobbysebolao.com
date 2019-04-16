const dbConnection = require("../database/db_connection.js");

const submitNewPost = (obj, cb) => {
  console.log("This is the form data :", obj);
  return;
  console.log(parseInt(obj.rating));
  dbConnection.query(
    "INSERT INTO reviews(person_name, business_id, rating, freshness, tv_quality, banter, mirror_coverage, comment) VALUES ($1, (SELECT id FROM businesses WHERE name = $2), $3, $4, $5, $6, $7, $8)",
    [
      obj.person_name,
      obj.business_name,
      parseInt(obj.rating),
      parseInt(obj.freshness),
      parseInt(obj.tv_quality),
      parseInt(obj.banter),
      parseInt(obj.mirror_coverage),
      obj.comment
    ],
    (err, res) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    }
  );
};

module.exports = submitNewPost;
