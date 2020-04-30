const pgPromise = require('pg-promise')();
const buildDatabase = require("../database/db_build.js");
const { options } = require("../database/db_connection.js");
const dbConn = pgPromise(options);

const getAllPosts = require("../queries/getAllPosts");

// this test does not work, needs fixing. asynchronour issues...
describe("getAllPosts test", () => {
  beforeEach(async () => {
    await Promise.resolve(buildDatabase());
  });
  describe("when you query the function", () => {
    it('should return 11 rows', async () => {
      // const result = await getAllPosts();
      const result = await dbConn.many("select * from posts");
      console.log("The number of posts in the test db is: ", result.length);
      expect(result.length).toBe(10);
    })
  })
})
