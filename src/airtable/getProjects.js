import dotenv from "dotenv";
import Airtable from "airtable";

dotenv.config();

if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
  throw new Error("Error AIRTABLE_API_KEY and AIRTABLE_BASE_KEY should be set");
}

const apiKey = process.env.AIRTABLE_API_KEY;
const baseKey = process.env.AIRTABLE_BASE_ID;

const base = new Airtable({ apiKey }).base(baseKey);

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    let result = [];
    base('Projects')
      .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 4,
    view: "Grid view"
})
      .eachPage(
        function page(records, fetchNextPage) {
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
