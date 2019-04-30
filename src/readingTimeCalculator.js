const readingTimeCalculator = (body) => {
  // console.log(body);
  // return;
  return Math.round((body.split(" ").length/4)/60);
}

module.exports = readingTimeCalculator;
