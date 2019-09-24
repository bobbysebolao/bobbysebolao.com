// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
  expect(2).toBe(2)
})

// const test = require("tape");
// const runDbBuild = require("../database/db_build.js");

// test("testing database build", t => {
//   runDbBuild((err, res) => {
//     t.equals(err, undefined, "error should be undefined");
//     t.end();
//   });
// });
