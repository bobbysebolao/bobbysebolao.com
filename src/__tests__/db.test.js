const readingTimeCalculator = require("../readingTimeCalculator.js");

it('Testing to see if Jest works', () => {
    expect(2).toBe(2)
  })

  test('Calculates avg time to read a chunk of text', () => {
    expect(readingTimeCalculator("how now brown cow")).toBe(0);
  });

// const test = require("tape");
// const runDbBuild = require("../database/db_build.js");

// test("testing database build", t => {
//   runDbBuild((err, res) => {
//     t.equals(err, undefined, "error should be undefined");
//     t.end();
//   });
// });
