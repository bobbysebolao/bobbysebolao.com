const readingTimeCalculator = require("../helpers/readingTimeCalculator.js")

  test('Calculates avg time to read a chunk of text', () => {
    expect(readingTimeCalculator("how now brown cow")).toBe(0);
  });