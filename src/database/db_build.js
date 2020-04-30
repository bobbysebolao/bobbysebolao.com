const fs = require("fs");
const path = require("path");

const buildDatabase = () => {
const { dbConnection } = require("./db_connection.js");
let sqlPath = path.join(__dirname, "db_build_prod.sql");

if (process.env.NODE_ENV == "test") {
  sqlPath = path.join(__dirname, "db_build_test.sql");
}

if (process.env.NODE_ENV == "local") {
  sqlPath = path.join(__dirname, "db_build_local.sql");
}

const sql = fs.readFileSync(sqlPath).toString();

  dbConnection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "There is an error here!");
    } else {
      console.log('Database created and seeded with data');
      dbConnection.end(() => {
        console.log('Connection closed!');
      })
    }
  });
}

module.exports = buildDatabase;
