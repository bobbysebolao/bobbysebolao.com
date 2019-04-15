const fs = require("fs");
const path = require("path");

const dbConnection = require("./db_connection.js");

let sqlPath = path.join(__dirname, "db_build.sql");

if (process.env.NODE_ENV == "test")
  sqlPath = path.join(__dirname, "db_build_test.sql");

const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = cb => dbConnection.query(sql, cb);

module.exports = runDbBuild;
