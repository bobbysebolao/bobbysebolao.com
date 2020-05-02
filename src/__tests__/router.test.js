const readingTimeCalculator = require("../helpers/readingTimeCalculator.js");

it('Testing to see if Jest works', () => {
    expect(2).toBe(2)
  })

  test('Calculates avg time to read a chunk of text', () => {
    expect(readingTimeCalculator("how now brown cow")).toBe(0);
  });