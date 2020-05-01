const fs = require("fs");
const path = require("path");

const buildDatabase = async () => {
const { dbConnection } = require("./db_connection.js");
let sqlPath = path.join(__dirname, "db_build_prod.sql");

if (process.env.NODE_ENV == "test") {
  sqlPath = path.join(__dirname, "db_build_test.sql");
}

if (process.env.NODE_ENV == "local") {
  sqlPath = path.join(__dirname, "db_build_local.sql");
}

const sql = fs.readFileSync(sqlPath).toString();

  return await dbConnection.multi(sql)
  .then(() => console.log('Database created and seeded with data'))
  .catch(err => console.log(err, "There is an error here!"))
}

module.exports = buildDatabase;
