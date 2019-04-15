const test = require("tape");
const runDbBuild = require("../database/db_build.js");

test("testing databse build", t => {
  runDbBuild((err, res) => {
    t.equals(err, undefined, "error should be undefined");
    t.end();
  });
});
