import fs from "fs";
import path from "path";

import { dbConnection } from "./db_connection.js";

const __dirname = path.resolve();

export const buildDatabase = async () => {
let sqlPath = path.join(__dirname, "/src/database/db_build_prod.sql");

if (process.env.NODE_ENV == "test") {
  sqlPath = path.join(__dirname, "/src/database/db_build_test.sql");
}

if (process.env.NODE_ENV == "local") {
  sqlPath = path.join(__dirname, "/src/database/db_build_local.sql");
}

const sql = fs.readFileSync(sqlPath).toString();

  return await dbConnection.multi(sql)
  .then(() => console.info('Database created and seeded with data'))
  .catch(err => console.error(err, "There is an error here!"))
}
