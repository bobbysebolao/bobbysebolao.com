const fs = require("fs");
const path = require("path");

const buildDatabase = () => {
const dbConnection = require("./db_connection.js");
let sqlPath = path.join(__dirname, "db_build.sql");
if (process.env.NODE_ENV == "test") {
  sqlPath = path.join(__dirname, "db_build_test.sql");
}

const sql = fs.readFileSync(sqlPath).toString();
// console.log(sql);

  dbConnection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "THERE IS A MAJOR ERROR HERE!");
    } else {
      console.log('Database created');
      dbConnection.end(() => {
        console.log('Connection closed!');
      })
    }
  });
}

// buildDatabase();

module.exports = buildDatabase;
