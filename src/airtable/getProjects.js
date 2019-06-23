require("env2")("config.env");
const Airtable = require("airtable");

if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
  throw new Error("Error AIRTABLE_API_KEY and AIRTABLE_BASE_KEY should be set");
}

const apiKey = process.env.AIRTABLE_API_KEY;
const baseKey = process.env.AIRTABLE_BASE_ID;

const base = new Airtable({ apiKey }).base(baseKey);

const getProjects = () => {
  console.log("Projects time!");
  return new Promise((resolve, reject) => {
    let result = [];
    base('Projects')
      .select()
      .eachPage(
        function page(records, fetchNextPage) {
          // let result = [];
          records.forEach((record) => {
              result.push(record.fields);
          });
          resolve(result);
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          }
        }
      );
  });
};

module.exports = getProjects;
