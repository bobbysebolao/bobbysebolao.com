const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

const readingTimeCalculator = function(body) {
  return Math.floor((body.split(" ").length/4)/60);
}

module.exports = readingTimeCalculator;
