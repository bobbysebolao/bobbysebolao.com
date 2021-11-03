export const readingTimeCalculator = (body) => {
  return Math.round((body.split(" ").length/4)/60);
}
